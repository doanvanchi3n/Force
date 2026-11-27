---
title: Force — Kiến trúc đề xuất và contract khởi đầu
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
---

# Architecture — Force

Đề xuất **Next.js App Router + TypeScript + PostgreSQL, một ứng dụng phân lớp** cho core của Force. Người dùng cho biết chưa chọn stack và yêu cầu đề xuất đơn giản ngày 27/11. Đây là phương án để nhóm chốt, chưa có ứng dụng, manifest, migration hoặc lockfile được tạo. [ARCHITECTURE-SPINE](ARCHITECTURE-SPINE.md) giữ các AD; tài liệu này giải thích và làm rõ contract khởi đầu, không là một kiến trúc thứ hai.

## Vì sao đề xuất này

UI và server cùng TypeScript giúp các story dùng chung DTO; một máy chủ và một DB giảm phần triển khai nhóm phải phối hợp. PostgreSQL hỗ trợ ràng buộc duy nhất và giao dịch cho đăng ký/check-in cạnh tranh. Đây là nhận định thiết kế của lần soạn, không phải kết quả khảo sát hoặc bằng chứng nhóm đã có năng lực stack.

Phương án khác hợp lý là SPA + backend riêng nếu nhóm đã có kinh nghiệm hai stack; cần quản lý thêm API/auth/deploy giữa hai nơi. Chưa có thông tin đó nên chưa chọn cách tách. Không dùng microservices hoặc backend serverless trực tiếp từ browser chỉ để có nhiều công nghệ.

## Nguồn kỹ thuật đã kiểm tra ngày 27/11/2026

- Next.js có starter `create-next-app`, App Router và TypeScript theo [tài liệu cài đặt](https://nextjs.org/docs/app/getting-started/installation). Đây là điểm khởi đầu đề xuất; không kế thừa nhận diện mặc định hoặc mặc nhiên chấp nhận mọi dependency/tùy chọn starter.
- Next.js hướng dẫn tách xác thực/phiên/phân quyền và dùng thư viện phù hợp; review điểm đọc/ghi dữ liệu theo [authentication guide](https://nextjs.org/docs/app/guides/authentication). Nhà cung cấp/thư viện cụ thể vẫn chờ OQ-02.
- Có thể chạy dưới dạng Node server theo [deployment guide](https://nextjs.org/docs/app/getting-started/deploying); môi trường có nghiệp vụ server/DB không dùng static export đơn thuần.
- Chọn một nhánh Node còn LTS khi bootstrap theo [lịch phát hành chính thức](https://nodejs.org/en/about/previous-releases), kiểm tra tương thích starter trước pin. Không coi phiên bản Node của tooling BMAD là phiên bản ứng dụng.
- PostgreSQL dùng [unique/foreign-key constraints](https://www.postgresql.org/docs/18/ddl-constraints.html) và [transaction isolation](https://www.postgresql.org/docs/18/transaction-iso.html); chọn phiên bản được hạ tầng hỗ trợ và còn hạn theo [versioning policy](https://www.postgresql.org/support/versioning/). Không ép dùng major mới nhất chỉ vì có phiên bản mới.

Chưa pin phiên bản thư viện vì chưa bootstrap. Tại tác vụ đầu tiên, kiểm tra lại nguồn chính thức, lưu version thực vào manifest/lockfile, chọn driver/ORM/auth tương thích rồi ghi quyết định. Không gọi candidate này là build tái lập được trước khi có lockfile và kiểm tra chạy thật.

## Miền dữ liệu tối thiểu — seed đề xuất

| Entity | Trách nhiệm / dữ liệu cần thống nhất | Khi tạo |
| --- | --- | --- |
| Event | ID nội bộ, mã công khai, tên/mô tả, startsAt/endsAt, timezone, địa điểm, nhận đăng ký | US-01; cấu hình trước, chưa có UI tạo sự kiện |
| Registration | ID, eventId, displayCode, name, normalizedEmail, accessSecretHash, status, version, createdAt, checkedAt hiện tại | US-02; không chứa MSSV trong core |
| CommandReceipt | Scope event/principal/command, requestKey, payload fingerprint, result ID/snapshot; uniqueness trên scope+key | US-02, tái dùng các mutation sau |
| EventMembership | Principal ID từ auth adapter, eventId, tập quyền read/check_in/undo_check_in/report/export | US-06 |
| AuditEntry | Event/registration/actor ID, action, trạng thái trước/sau, timestamp, requestId, lý do khi undo | Từ mutation đầu tiên US-02; mở rộng US-05/08/09 |

Đề xuất ID nội bộ `bigint identity`, trường thời điểm `timestamptz`, state có constraint; ID API serialize thành chuỗi để tránh giới hạn số nguyên của JavaScript. Unique DB trên event+normalizedEmail và displayCode trong sự kiện; FK có index phù hợp cho event/registration. Không cascade xóa audit chỉ để thuận tiện. Chi tiết migration theo story; chưa có SQL/schema chạy thật.

Payload fingerprint không lưu secret plaintext, không log nội dung form. RequestKey không thay quyền; create replay phải đối chiếu secret gốc. CommandReceipt giữ kết quả lần đầu để đối soát; thời hạn lưu receipt/secret/session phải được quyết định cùng OQ-06/08/10 trước vận hành, không tự hết hạn làm retry biến thành command mới.

### Chuẩn hóa và mã hiển thị

Quy ước chung cho client/server: tên trim rồi gộp chuỗi khoảng trắng thành một dấu cách; email dùng `trim().toLowerCase()` và lưu/xuất cùng giá trị chuẩn hóa. Không tự bỏ dấu chấm, `+tag`, dấu tiếng Việt hoặc suy hai alias là một người. Ví dụ `"  LAN@Example.test  "` → `"lan@example.test"`; `"lan+clb@example.test"` vẫn là địa chỉ khác. Độ dài tên/lý do tính theo Unicode code point; validation định dạng email không đồng nghĩa chứng minh sở hữu email.

Seed mã hiển thị: `FORCE-` + chuỗi ID nội bộ pad tối thiểu ba chữ số, không cắt khi ID dài hơn (1 → FORCE-001, 1000 → FORCE-1000). ID do DB cấp nên không sinh va chạm ngẫu nhiên; unique `(event_id, display_code)` vẫn bảo vệ dữ liệu. Mã chỉ giúp đối chiếu, không cấp quyền.

## Contract dùng chung trước khi viết từng endpoint

Tên dưới đây là contract ứng dụng; HTTP route/server action chọn khi bootstrap nhưng không được tự đổi semantics. Mọi ID, state, version và mã lỗi dùng cùng module contracts.

| Use case | Đầu vào chính | Kết quả / quyền |
| --- | --- | --- |
| GetEvent | eventId | Thông tin công khai, trạng thái nhận đăng ký; không trả danh sách |
| CreateRegistration | eventId, name, email, requestKey, accessSecret | Receipt của lượt gửi + registrationId/displayCode/status/version; máy chủ chuẩn hóa/validate; cùng secret cho replay |
| ExchangeOwnerAccess | accessSecret | Phiên chỉ cho một hồ sơ; giới hạn dò; cookie an toàn; sai không tiết lộ người |
| GetOwnRegistration | Phiên chủ hồ sơ | Một hồ sơ thuộc phiên; không query email/MSSV để vượt quyền |
| CancelRegistration | registrationId, expectedVersion, requestKey | Phiên chủ hồ sơ; cancelled hoặc lỗi; không hủy hộ bằng UI demo |
| ListRegistrations | eventId, query, status | Quyền read; projection tối thiểu mã/tên/email/status/version; không trả hash/secret |
| CheckIn | eventId, registrationId, expectedVersion, requestKey | Quyền check_in; checked hoặc STATE_CONFLICT; ghi audit cùng giao dịch |
| UndoCheckIn | Như CheckIn + reason | Quyền undo_check_in; registered và audit mới; giữ lịch sử cũ |
| GetSummary | eventId | Quyền report; counts, mẫu số/tỷ lệ, snapshotAt |
| PrepareExport | eventId; phạm vi core toàn bộ hồ sơ | Quyền export; snapshotAt/columns/rows bất biến trong tab; preview và tải dùng cùng serializer |

Response thành công trả dữ liệu tối thiểu và requestId. Response lỗi có `code`, thông điệp an toàn, `fieldErrors` khi cần và requestId. Nếu dùng HTTP: VALIDATION 422, DUPLICATE_REGISTRATION/STATE_CONFLICT 409, NOT_AUTHENTICATED 401, FORBIDDEN 403, NOT_FOUND 404, RATE_LIMITED 429, TEMPORARY_FAILURE 503. Với chủ hồ sơ chưa có quyền, không phân biệt dữ liệu cá nhân qua response. Lỗi trùng có thông báo chung/hỗ trợ, không có nút “xem vé cũ” dựa duy nhất email/MSSV.

### Ma trận actor và chuyển trạng thái

| Actor | Được phép | Không suy thêm quyền |
| --- | --- | --- |
| Chưa có phiên | GetEvent, CreateRegistration, ExchangeOwnerAccess trong giới hạn/rate limit | Không đọc danh sách hoặc mở hồ sơ cũ từ email/MSSV |
| Phiên chủ một hồ sơ | GetOwnRegistration và CancelRegistration đúng hồ sơ đó | Không hủy hồ sơ khác, check-in hoặc undo; core chưa yêu cầu lý do hủy |
| Principal BTC + membership event | List/detail theo read; CheckIn theo check_in; Undo theo undo_check_in; summary theo report; export snapshot theo export | Không tự có quyền hủy hộ hoặc quyền sự kiện khác |

| Command mới hợp lệ | Trạng thái trước | Sau / trường cập nhật | Trường hợp khác |
| --- | --- | --- | --- |
| CreateRegistration | Chưa có, không trùng | registered; version=1; createdAt=UTC server; checkedAt=null | Trùng định danh ở key khác → DUPLICATE_REGISTRATION, không trả hồ sơ cũ |
| CancelRegistration | registered | cancelled; version+1; checkedAt=null | checked/cancelled → STATE_CONFLICT, không tăng version |
| CheckIn | registered | checked; version+1; checkedAt=UTC server | checked/cancelled → STATE_CONFLICT, không tăng version |
| UndoCheckIn, lý do hợp lệ | checked | registered; version+1; checkedAt=null | registered/cancelled → STATE_CONFLICT, không tăng version |

Receipt cùng lượt thành công được replay trước kiểm tra version/state và không ghi audit lần nữa. Bảng áp cho command mới; audit giữ checkedAt/thời điểm cũ để undo không xóa lịch sử. Query, validation fail và command bị từ chối không tăng version. Reason undo được trim, dài 1–300 code point; quy tắc lý do hủy chưa được thêm vào core.

### Scope và fingerprint của receipt

Create dùng scope `(eventId, create, accessSecretHash, requestKey)` vì chưa có phiên principal. Mutation chủ hồ sơ dùng `(eventId, ownerRegistrationId, command, requestKey)` sau xác thực; BTC dùng `(eventId, principalId, command, requestKey)`. Tất cả kiểm tra quyền hiện tại trước khi đọc/trả receipt, kể cả replay.

Fingerprint SHA-256 trên DTO đã chuẩn hóa với thứ tự khóa cố định: command, eventId, registrationId nếu có, expectedVersion nếu có, trường nghiệp vụ và hash secret của create. Chuỗi lý do trim, ID serialize chuỗi, không hash raw JSON có thứ tự tùy ý. Cùng key nhưng sửa expectedVersion hoặc nội dung là request khác → STATE_CONFLICT; muốn thao tác mới sau khi đọc lại cần key mới. Không dùng requestId log làm idempotency key.

## Đường ghi nhận cạnh tranh

1. Transport validate kiểu/độ dài, lấy principal/owner session từ nguồn tin cậy, kiểm tra quyền theo event.
2. Tìm receipt theo scope+requestKey; cùng payload và quyền thì trả replay, khác thì conflict. Create ràng buộc với secret đã sinh trước gửi, không chỉ tên/email.
3. Trong giao dịch ngắn, kiểm tra trạng thái và expectedVersion; ghi chuyển trạng thái có điều kiện, tăng version, ghi audit và receipt. Tạo đăng ký dùng unique DB thay cho “SELECT chưa thấy rồi INSERT” không có bảo vệ.
4. Xung đột unique/phiên bản trả lỗi miền phù hợp; không đổi sang thành công giả. Lỗi audit rollback toàn bộ. API timeout sau commit vẫn tra receipt được.
5. UI chỉ đổi thành công sau kết quả đã xác định; reload sau replay để có trạng thái hiện tại nếu đã có mutation khác. Trường hợp mất mạng không có queue offline.

Create cũng commit Registration + receipt + audit cùng nhau. Nếu hai request cùng scope/key cạnh tranh, chờ kết quả giao dịch thắng rồi đọc receipt để replay; không trả duplicate cho retry cùng lượt chỉ vì nhánh insert thua. Nếu khác scope/key nhưng cùng email thì unique đăng ký quyết định một lượt thành công, lượt còn lại nhận duplicate chung. Không bỏ qua lỗi ghi receipt/audit sau khi đã lưu hồ sơ.

Kiểm tra quan trọng: hai create cùng email; cùng key hai lần; cùng key khác payload; hai check-in; check-in đối đầu hủy; undo đối đầu mutation khác; actor không có quyền event. Những kiểm tra này cần DB/API thật, không chứng minh bằng fixture một tab.

## UX và phần khác biệt của prototype

Kế thừa [DESIGN](../../ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md) và [EXPERIENCE](../../ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md), giữ màu/bento đã chọn. S01…S07 là các surface core. Đăng nhập BTC và trao đổi quyền riêng cần thiết kế trạng thái trước khi code; S08/DemoToolbar là công cụ thử.

[PROTOTYPES](../../ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md) chỉ rõ code HTML hiện có MSSV/waitlist, tra cứu công khai theo MSSV và pseudo-QR. Không bê các cơ chế đó sang backend. Contract hiện hành vẫn có thẩm quyền cho core đề xuất; phải xử lý drift trước nghiệm thu UI tương ứng.

## Vận hành và kiểm chứng trước pilot

Chọn môi trường Node server + PostgreSQL có quản lý hoặc hạ tầng nhóm biết vận hành sau OQ-02/10; đây chưa là quyết định mua dịch vụ. Tách credential và DB của dev/test/pilot, giới hạn connection pool theo khả năng DB, TLS và quyền tối thiểu. Không đặt secret trong JavaScript bundle hoặc repo.

Chạy migration trên môi trường thử trước, sao lưu và diễn tập restore; ghi người phụ trách, cách rollback/roll-forward và giới hạn mất dữ liệu đã thống nhất. Log requestId/action/result và lỗi quyền/xung đột, che PII; health check không lộ cấu hình. Ngưỡng hiệu năng, chi phí, thời hạn lưu/xóa chưa có số được duyệt; OQ-08…10 chặn pilot, không chặn dựng fixture.

[Hướng dẫn giao việc](../../VIBE_CODING_GUIDE.md) · [Story](../../USER_STORIES.md) · [Nhật ký AD](.memlog.md)
