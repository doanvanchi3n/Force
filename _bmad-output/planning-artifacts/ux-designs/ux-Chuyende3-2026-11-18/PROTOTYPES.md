# Prototypes — phạm vi và kịch bản thử

**Bản nháp tương tác để kiểm chứng thiết kế, chưa phải ứng dụng vận hành.**
Mở [index.html](mockups/index.html); các hành động thay đổi dữ liệu mẫu trong
phiên trình duyệt. Có thể đặt lại để thử từ đầu. Không nhập thông tin thật.

## Đối chiếu prototype hiện có với 11 story dự thảo — 27/11/2026

Namespace story mới là `force-core-2026-11-27`, định nghĩa tại [USER_STORIES](../../USER_STORIES.md). Không đồng nhất US-04 tra cứu của bộ mới với US-04 gửi thư trong [BID/prototype đăng ký riêng](../../../../06-Planning/BID.md). [PRD](../../prds/prd-Chuyende3-2026-11-27/prd.md) và [Business Rules](../../BUSINESS_RULES.md) là core đề xuất; chưa được client duyệt.

**Mã HTML hiện hành đã lệch một số quy tắc V1 trong hai spine.** Bảng dưới phân biệt minh họa UI và kết quả cần kiểm tra ở ứng dụng thật; không tuyên bố mọi AC đã được thực thi. Giữ nguyên hướng Campus Friendly/Bento và Blue/Orange/White. Các biến thể MSSV/waitlist/QR trong code chưa được chọn làm core qua lần tạo tài liệu này.

**Giới hạn kiểm chứng:** lần bàn giao cập nhật tài liệu và đối chiếu mã nguồn; chưa tạo prototype core mới hoặc bấm thử lại toàn bộ UI. Các mô phỏng một tab không chứng minh auth, lưu trữ, audit hoặc cạnh tranh nhiều máy. US-01…05/10/11 có mô phỏng nhưng lệch phạm vi; US-06 chưa có bề mặt đăng nhập thật; US-07…09 chỉ có UI/logic fixture ở mức được mô tả dưới đây. Các AC máy chủ trong USER_STORIES chưa thể nghiệm thu từ HTML hiện có.

| Story | Điểm mở / cách thao tác | Điều quan sát được | Giới hạn so với AC core |
| --- | --- | --- | --- |
| US-01 | [S01](mockups/index.html#event), dùng bàn phím tới đăng ký | Lịch/địa điểm/CTA, layout bento | Code tính chỗ theo CAPACITY=6; chưa có đóng nhận đăng ký theo cấu hình core |
| US-02 | [S02](mockups/index.html#register); gửi trống, rồi dùng dữ liệu giả; reset hoặc chọn dữ liệu rỗng để thử lại | Lỗi trường/summary, giữ dữ liệu, chặn trùng | Đang bắt buộc MSSV; fixture mặc định 6 chỗ đã đủ nên lượt mới vào waitlist; chưa có idempotency/DB thật |
| US-03 | Sau đăng ký, hoặc [S04](mockups/index.html#lookup) tìm FORCE-001 rồi tới S03 | Badge, thông tin hồ sơ, timeline | Có thêm waitlist/hình QR/timestamp demo; không persist qua reload hoặc gửi email |
| US-04 | [S04](mockups/index.html#lookup), thử mã trống/sai/đúng | Form lỗi và tìm lại bản ghi mẫu | Mã/MSSV demo mở được hồ sơ; chưa phải quyền riêng an toàn của ứng dụng |
| US-05 | Tìm FORCE-001 → S03 → hủy, thử Escape rồi xác nhận | Đóng an toàn, đổi trạng thái demo | Đang tự đôn waitlist nếu có; chưa quyền chủ hồ sơ/hạn hủy/transaction |
| US-06 | Đổi vai trò trong DemoToolbar, bật/tắt quyền | Minh họa bị chặn thao tác | Chưa có màn hình đăng nhập/phiên/membership, không đáp ứng auth AC |
| US-07 | [S05](mockups/index.html#attendees), tìm/lọc, chọn người | ParticipantList/FilterBar/EmptyState | Fixture trong RAM; có thêm MSSV/waitlist, chưa kiểm tra event scope server |
| US-08 | [S06](mockups/index.html#check-in), tìm FORCE-001; xác nhận hai lần; thử FORCE-004 và mất mạng/quyền | Check-in một tab, chặn lặp/hủy và lỗi mô phỏng | Nút quét chỉ chọn mẫu; chưa camera, nhiều máy, transaction hoặc đối soát timeout |
| US-09 | Tìm FORCE-002 đã checked; hoàn tác, thử lý do trống/rồi hợp lệ | Dialog/lỗi lý do/chuyển state | Chưa có audit bền vững hoặc phân quyền undo riêng |
| US-10 | [S07](mockups/index.html#report), đối chiếu sau hủy/check-in; dữ liệu rỗng | Số đếm, tỷ lệ có mẫu số, số 0 | Bản mở rộng đếm thêm waitlist; không phải báo cáo máy chủ/snapshot nhiều máy |
| US-11 | S07 xem preview rồi tải CSV; bật tình huống mất quyền | Tệp cục bộ, escape dữ liệu theo code | Hiện 7 cột gồm MSSV/thời điểm, khác core 4 cột; chưa quyền export thật |

Các deep link là đường mở trong trình duyệt; trạng thái S03/S06 cần chọn bản ghi trong cùng phiên. Lan/Minh và email `example.test` chỉ là dữ liệu thử. Ngày mẫu 26/11 là fixture, không tự đổi thành sự kiện thật vì thời gian đã đi qua.

## Phần lệch cần xử lý trước nghiệm thu story

| ID | Mã hiện hành / nguồn kiểm tra | Core V1 / quyết định cần có |
| --- | --- | --- |
| DX-01 | `registerView`/`registrationSubmit` bắt buộc MSSV 3–20 chữ/số | Form tên/email theo EXPERIENCE; quyết định OQ-03 trước thêm trường thật, không gọi regex đó là quy tắc VKU |
| DX-02 | `CAPACITY`, `counts`, `cancelRegistration`: waitlist/đôn chỗ; 4 registered + 2 checked lấp 6 chỗ fixture | Core chỉ ba trạng thái; OQ-04/05 phải chốt capacity, thứ tự/đồng thời đôn chỗ và đăng ký lại |
| DX-03 | `lookupSubmit` tìm bằng displayCode hoặc MSSV | Không dùng định danh công khai thay quyền; US-04 và AD-5 cần luồng truy cập riêng |
| DX-04 | Nhánh duplicate hiển thị mã và nút mở hồ sơ; bỏ qua cancelled khi so trùng | BR-03/05 không lộ hồ sơ từ email/MSSV và unique gồm cancelled; cần chỉnh trước dùng dữ liệu thật |
| DX-05 | `csvText` hiện 7 cột, `counts` thêm waitlist | BR-12/13 core 3 trạng thái/4 cột; quyết định OQ-08 trước đổi phạm vi |
| DX-06 | `generateQrSvg` dựng hoa văn từ hash; UI gọi là vé QR, nút simulate-scan chọn fixture | Chưa có encoder/decoder/camera được kiểm chứng; chỉ coi là hình minh họa, không dùng làm bằng chứng vé quét được. QR chưa trong core |
| DX-07 | Timeline có timestamp fixture và thời điểm cục bộ của lượt thao tác | Không coi đó là lịch sử máy chủ/audit; US-09 cần dữ liệu thật và transaction |
| DX-08 | Role/network/permission switch và dữ liệu RAM | Auth, persist, concurrency, loading/timeout/commit recovery của ứng dụng cần hiện thực/kiểm tra riêng |

DX-01…08 là phần chưa được hợp nhất vào core, không phải danh sách tính năng tự động thêm. Khi chọn biến thể, cập nhật PRD/rule/story và hai spine trước khi sửa prototype theo biến thể đó. Khi chọn core, cần chỉnh các nhánh HTML tương ứng trước khi nhận UI đã khớp AC. Lần bàn giao này lập bản đồ và chỉ rõ sai khác, không triển khai backend hoặc chứng nhận các nhánh cũ an toàn.

## Bản đồ màn hình

| Mã | Màn hình | Câu hỏi cần thử | Nguồn discovery |
| --- | --- | --- | --- |
| S01 | Chi tiết sự kiện | Có tìm được lịch, địa điểm và bước đăng ký? | Journey giai đoạn 1–2; mức căn cứ còn giả thuyết |
| S02 | Đăng ký | Có nhập đúng và tự sửa lỗi/nhận ra đăng ký trùng? | P-01; BTC Q10; sinh viên Q4–5 |
| S03 | Xác nhận và trạng thái | Có hiểu đăng ký/tham dự/hủy và hành động tiếp theo? | P-04; RD-A04/RD-A07; chưa xác nhận nhu cầu tài khoản |
| S04 | Tìm lại bằng mã mẫu | Có tìm được thông tin riêng mà không cần danh sách công khai? | Journey giai đoạn 3/6; phương án thiết kế để kiểm tra |
| S05 | Danh sách phía BTC | Có tìm đúng người, phân biệt trạng thái và thấy thay đổi? | P-01; Persona A |
| S06 | Bàn check-in | Có xác nhận đúng, tránh lặp và xử lý ngoại lệ? | P-02; RD-A08 |
| S07 | Tổng hợp/báo cáo | Có phân biệt số đăng ký, tham dự, hủy và lấy đúng danh sách? | P-03; Journey giai đoạn 6 |
| S08 | Thư viện thành phần | Các token và trạng thái có nhất quán? | Công cụ xem design system, không phải màn hình sản phẩm |

Xem [EXPERIENCE.md](EXPERIENCE.md) để đọc quy tắc tương tác và liên kết nguồn.
S01–S07 có trong prototype tương tác; ba hình mẫu tĩnh tập trung S01, S05 và S06.
Luồng quyền riêng và đăng nhập BTC của core mới chưa được dựng. Trạng thái khác
được thử trong bản tương tác theo các giới hạn và phần lệch ở trên.

## Kịch bản 1 — Đăng ký và tìm lại xác nhận

1. Chọn luồng sinh viên, đọc thông tin sự kiện mẫu rồi bắt đầu đăng ký.
2. Gửi biểu mẫu rỗng hoặc email sai. Kiểm tra tóm tắt lỗi, liên kết tới trường
   tương ứng và việc giữ dữ liệu đã điền.
3. Điền tên minh họa và email thuộc `example.test`, gửi lại.
4. Kiểm tra trạng thái và mã đăng ký; tìm lại bằng đúng mã đó.
5. Thử lại email với khác biệt chữ hoa/khoảng trắng. Core yêu cầu không tạo thêm
   bản ghi và không tiết lộ hồ sơ cũ. Code demo đang có nút mở hồ sơ khi trùng;
   đây là DX-04, chưa đáp ứng quyền riêng của core.

**Quan sát:** có hiểu đã đăng ký hay đã tham dự, có biết giữ/tìm lại mã, có cần
trợ giúp? Không gán số liệu thành công trước khi có người thật thử.

## Kịch bản 2 — Báo hủy

1. Từ một bản ghi đang đăng ký, mở thao tác hủy.
2. Thử đóng hộp thoại bằng nút quay lại/Escape; bản ghi phải giữ nguyên.
3. Thực hiện hủy và xác nhận; kiểm tra trạng thái bên sinh viên và danh sách BTC.
4. Thử check-in bản ghi đã hủy; không được âm thầm chuyển thành đã tham dự.

**Quan sát:** có hiểu hậu quả thao tác và kết quả sau cùng? Hạn hủy, chờ duyệt
hoặc cho đăng ký lại là câu hỏi nghiệp vụ còn mở, chưa suy thành quy tắc VSC.

## Kịch bản 3 — Check-in và sửa nhầm

1. Chọn luồng BTC, tìm một người đang đăng ký bằng tên hoặc mã mẫu.
2. Xem lại thông tin rồi xác nhận tham dự; kiểm tra danh sách và số tổng hợp.
3. Tìm lại người đó, thử ghi nhận lần nữa. Không được tăng số đã tham dự lần hai.
4. Thử mã không tồn tại, bản ghi đã hủy và chế độ mất kết nối.
5. Thử hoàn tác một ghi nhận nhầm: phải xác nhận và điền lý do theo quy tắc bản nháp.
6. Bật tình huống không có quyền; kiểm tra các thao tác cập nhật bị chặn.

Quét mã chỉ được **mô phỏng**. Prototype không kiểm tra tốc độ camera, đúng danh
tính, hoạt động offline thật hoặc đồng bộ giữa nhiều máy.

## Kịch bản 4 — Đối chiếu và báo cáo

1. Đăng ký, hủy hoặc check-in một bản ghi mẫu để tạo thay đổi.
2. Mở tổng hợp và đối chiếu số liệu với danh sách theo từng trạng thái.
3. Xem/xuất CSV mẫu; kiểm tra dữ liệu và tên cột. CSV không phải định dạng đã
   được trường hoặc VSC chấp nhận.
4. Đặt lại dữ liệu và chạy lại kịch bản cần kiểm tra.

## Cách ghi nhận buổi thử

Ghi tác vụ, vai trò, thiết bị, kết quả hoàn thành, điểm cần trợ giúp, lỗi xảy ra,
điều người tham gia nói và thay đổi đề xuất. Tách quan sát khỏi diễn giải của
người hướng dẫn. Tên Lan/Minh trong Key Flows chỉ là nhân vật kịch bản, không
phải persona cá nhân rút từ khảo sát.

Các quy tắc màu/focus/kích thước là mục tiêu thiết kế. Kiểm tra tự động và việc
bấm thử nội bộ không thay buổi thử với người dùng hoặc đánh giá accessibility đầy đủ.

[Design System](DESIGN.md) · [Hành vi UX](EXPERIENCE.md) · [Mục lục](README.md)
