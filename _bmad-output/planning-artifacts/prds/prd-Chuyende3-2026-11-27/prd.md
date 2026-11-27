---
title: Force — Đăng ký và quản lý tham dự sự kiện CLB
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
sources:
  - ../../../../docs/knowledge/KNOWLEDGE_INDEX.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/research.md
  - ../../ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md
  - ../../ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md
---

# PRD — Force

## Mục đích và trạng thái

Bản nháp cho nhóm Force, người xác nhận nghiệp vụ tương lai và người thiết kế/triển khai. Chuyển corpus discovery thành khả năng có thể kiểm tra; không coi đây là PRD đã duyệt của VSC. Research có tín hiệu về danh sách/check-in/báo cáo nhưng chưa xác minh độc lập. [Chỉ mục knowledge](../../../../docs/knowledge/KNOWLEDGE_INDEX.md) dẫn về từng nguồn và giới hạn.

## Tầm nhìn và người dùng

Giúp sinh viên biết kết quả đăng ký của mình và giúp BTC đối chiếu đăng ký, tham dự, hủy trên cùng một hồ sơ. Giả thuyết giá trị: ít thao tác đối soát thủ công và ít hiểu nhầm trạng thái. Chưa có baseline để cam kết mức cải thiện.

Hai vai trò kế thừa research: Persona A — người vận hành đăng ký/tham dự; Persona B — sinh viên đăng ký/tham gia. Thẩm quyền của BCN/BTC còn mở. `[ASSUMPTION A-01]` Thử một sự kiện được cấu hình trước, giao diện web responsive tiếng Việt; không cần danh mục hay màn hình tạo sự kiện để thử vòng đời.

## Hành trình và từ vựng

Giữ UJ-01 đăng ký/xác nhận, UJ-02 tra cứu/hủy, UJ-03 check-in/hoàn tác và UJ-04 báo cáo tại [EXPERIENCE — Key Flows](../../ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md#key-flows). Lan và Minh là nhân vật hư cấu; chưa có hành trình được người dùng VSC xác nhận.

**Đăng ký** là hồ sơ của một người trong một sự kiện. **Tham dự** là đã được BTC ghi nhận, không suy từ gửi form. **Trạng thái** core gồm Đã đăng ký `registered`, Đã tham dự `checked`, Đã hủy `cancelled`. **Mã hiển thị** để đối chiếu khác với **quyền truy cập hồ sơ**. **BTC** chỉ người được cấp quyền cho sự kiện khi triển khai thật.

## Nhóm khả năng và yêu cầu chức năng

Mọi FR dưới đây là **đề xuất cho core**, không phải kết luận khảo sát. Chi tiết quy tắc nằm ở [BUSINESS_RULES](../../BUSINESS_RULES.md); nguồn và story nằm ở [TRACEABILITY_MATRIX](../../TRACEABILITY_MATRIX.md).

### Đăng ký và tự theo dõi

- **FR-01 — Xem sự kiện.** Sinh viên đọc tên, mô tả, lịch có múi giờ, địa điểm và tình trạng nhận đăng ký; CTA chỉ hoạt động khi sự kiện được phép nhận. UJ-01; P-04. `[ASSUMPTION A-02]` Nội dung do người có trách nhiệm chuẩn bị; lịch minh họa 26/11 không tự điều khiển hạn thực.
- **FR-02 — Gửi đăng ký.** Kiểm tra các trường bắt buộc; khi lỗi giữ dữ liệu và nêu cách sửa; thành công chỉ sau khi hồ sơ đã được ghi nhận. `[ASSUMPTION A-03]` Core đề xuất tên/email như UX V1; MSSV cần OQ-03 trước khi thu thật. UJ-01; P-01.
- **FR-03 — Tránh tạo hồ sơ trùng.** Cùng sự kiện/email chuẩn hóa không tạo hồ sơ thứ hai; gửi lại cùng lượt yêu cầu không tạo bản ghi mới, kể cả sau timeout. Không trả thông tin hồ sơ cũ cho người chỉ biết email. UJ-01; P-01. `[ASSUMPTION A-04]` Tính duy nhất bao gồm hồ sơ đã hủy; quyền đăng ký lại chờ OQ-05.
- **FR-04 — Xem kết quả và trạng thái.** Sau khi ghi thành công hiển thị mã đối chiếu và Đã đăng ký; phân biệt Đã tham dự/Đã hủy. Không báo đã gửi email nếu không có thực thi. UJ-01/02; P-04. `[ASSUMPTION A-05]` Core xác nhận tức thì; duyệt/sức chứa là biến thể chưa chốt tại OQ-04.
- **FR-05 — Tìm lại hồ sơ riêng.** Người có quyền truy cập chỉ xem hồ sơ thuộc quyền của mình. Mã trống/sai có hướng sửa; không công khai danh sách sinh viên. UJ-02; P-04. `[ASSUMPTION A-06]` Candidate dùng bí mật truy cập riêng; cơ chế cấp lại chờ OQ-06.
- **FR-06 — Hủy đăng ký.** Người có quyền xác nhận hủy hồ sơ `registered`; đóng dialog giữ nguyên; `checked` và `cancelled` không hủy tiếp. Kết quả nhất quán khi BTC đọc lại. UJ-02; P-01/P-04. `[ASSUMPTION A-07]` Chưa áp hạn hủy trong kịch bản thử; phải đóng OQ-05 trước dùng thật.

### Vận hành tại sự kiện

- **FR-07 — Quyền BTC theo sự kiện.** Đăng nhập/xác thực và kiểm tra quyền trước khi đọc danh sách, ghi nhận, hoàn tác, xem tổng hợp hoặc xuất. Đổi vai trò trên toolbar demo không đáp ứng FR này. UJ-03/04. Đây là yêu cầu thiết kế bảo vệ dữ liệu, không phải phát hiện khảo sát.
- **FR-08 — Tìm và lọc hồ sơ.** BTC tìm theo tên/email/mã, lọc ba trạng thái, xem trạng thái hiện tại; không kết quả có cách bỏ lọc. Chọn người chỉ mở chi tiết. UJ-03; P-01/P-02.
- **FR-09 — Ghi nhận tham dự.** BTC đối chiếu và xác nhận `registered` → `checked` đúng một lần; lặp không tăng số đếm, hủy không check-in; cập nhật đồng thời không ghi đè trạng thái mới hơn. UJ-03; P-02.
- **FR-10 — Hoàn tác ghi nhầm.** BTC có quyền hoàn tác `checked` → `registered` với lý do; giữ lịch sử người thực hiện/thời điểm/lý do; thất bại không đổi trạng thái. UJ-03; P-02. `[ASSUMPTION A-08]` Chưa xác định vai trò cụ thể; OQ-07.

### Đối chiếu sau sự kiện

- **FR-11 — Xem tổng hợp.** Cùng một thời điểm dữ liệu, tổng = registered + checked + cancelled; tỷ lệ = checked/(registered + checked), mẫu số 0 hiển thị 0% kèm 0 hồ sơ còn hiệu lực. Không gọi là no-show. UJ-04; P-03.
- **FR-12 — Xem trước và xuất.** BTC có quyền xuất CSV khớp preview cùng snapshot/phạm vi; có nhãn bao gồm đã hủy. Lỗi giữ preview và cho thử lại; giá trị do người nhập không thực thi thành công thức. `[ASSUMPTION A-09]` Core đề xuất bốn cột mã/tên/email/trạng thái, toàn bộ hồ sơ sự kiện; mẫu thực chờ OQ-08. UJ-04; P-03.

## Chất lượng xuyên suốt

- **NFR-01 — Quyền và phạm vi:** máy chủ kiểm tra quyền theo sự kiện cho mọi endpoint; truy cập trực tiếp không được vượt quyền. Hồ sơ riêng và báo cáo không cache công khai.
- **NFR-02 — Toàn vẹn:** kiểm tra gửi đồng thời cùng định danh, bấm lặp, check-in/hủy cạnh tranh; trạng thái và lịch sử thay đổi cùng giao dịch; không tạo hai đăng ký hoặc cộng hai lượt tham dự.
- **NFR-03 — Phục hồi:** lỗi validation, mất quyền, mất mạng, timeout và xung đột có thông báo khác nhau. Chỉ nói “chưa lưu” khi biết thao tác chưa tới máy chủ; mất phản hồi sau gửi là chưa biết kết quả, phải đối soát lượt yêu cầu trước retry. Không tự đồng bộ offline trong core.
- **NFR-04 — UX:** giữ token/giọng điệu đã chọn; bàn phím hoàn thành tác vụ, focus rõ, lỗi gắn trường, dialog Escape/trả focus; không tràn ở khung 360px và zoom 200%. Các mục tiêu tương phản và kích thước theo DESIGN; chưa chứng nhận accessibility toàn bộ.
- **NFR-05 — Dữ liệu:** chỉ thu trường được chốt; không log tên/email/token đầy đủ; dữ liệu fixture khác dữ liệu thật. Thời hạn lưu/xóa và mục đích export phải chốt trước pilot.
- **NFR-06 — Vận hành:** tách dev/test/pilot, log request ID/kết quả không chứa PII, có quy trình sao lưu/khôi phục được thử. Quy mô và ngưỡng thời gian phản hồi cần đo/chốt ở OQ-09/10; chưa có SLA.

## Phạm vi thử và điều chưa đưa vào core

Core đề xuất: FR-01…12 và NFR-01…06, một sự kiện cấu hình trước, ba trạng thái. `[ASSUMPTION A-10]` Hướng đơn giản một ứng dụng phân lớp là candidate kỹ thuật; xem [Architecture](../../architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE.md).

MSSV, email thật, chờ duyệt, giới hạn chỗ/hàng chờ, QR/camera, danh mục/tạo nhiều sự kiện, thanh toán, tài khoản sinh viên, đồng bộ offline, chứng nhận/điểm rèn luyện chưa được chốt. Ghi ở backlog khám phá, không coi là nhu cầu đã bị bác bỏ. Các biến thể đã có trong HTML vẫn cần quyết định nghiệp vụ trước khi trở thành scope.

## Cách đánh giá

Trước thử nghiệm, ghi baseline thao tác hiện tại và bối cảnh thiết bị/mạng. Sau đó đo: tác vụ tự hoàn thành/tổng tác vụ; lỗi đăng ký trùng trên số lần thử trùng; lỗi ghi nhận lặp trên lần thử lặp; số hồ sơ cần đối soát và thời gian tạo báo cáo. Bất biến kỹ thuật yêu cầu không trùng/không cộng lặp trong bộ kiểm tra, không suy thành tỷ lệ thực tế.

Chỉ số cân bằng: hồ sơ hợp lệ bị chặn nhầm, sinh viên mất quyền tìm lại, thời gian cần hỗ trợ tại cửa và dữ liệu cá nhân bị xuất quá mục đích. Chưa đặt mục tiêu phần trăm cải thiện hoặc tuyên bố giảm no-show.

## Câu hỏi và điều kiện bàn giao

[OQ-01…10](../../../../docs/knowledge/04-decisions-and-open-questions.md) là danh mục chung có owner đề nghị và điều kiện đóng. A-01…10 đều là giả định của bản nháp, không thêm một sổ “đã duyệt”. Có thể dùng fixture để thảo luận UI; trước code ứng dụng cần chốt scope/stack/contract của story được chọn, trước pilot cần đóng các OQ tác động đến dữ liệu thật.

[Epics](../../EPICS.md) · [User stories](../../USER_STORIES.md) · [Cách giao việc cho coding agent](../../VIBE_CODING_GUIDE.md)
