---
author: Huỳnh Thanh Thuận
updated_at: 2026-11-27
---

# Force · Prototype đăng ký sự kiện

Đây là bản thử đăng ký/xác nhận gắn với [BID v0.1](../06-Planning/BID.md), dùng namespace US/REG riêng. Bộ bàn giao core 27/11 và workspace UX đang dùng nằm tại [Knowledge Index](../docs/knowledge/KNOWLEDGE_INDEX.md); không lấy token hoặc mã story của demo này thay cho hai spine UX hiện hành.

## Chạy bản thử core

Mở [dist/index.html](dist/index.html) trong trình duyệt. Giữ CSS và JS cùng thư mục. Lát cắt S01–S03 đi theo [[USER_STORIES#Lát cắt TV03 — Bản thử đăng ký S01–S03]], [[BUSINESS_RULES#Quy tắc phiên bản thử TV03]] và các token Blue/Orange/White trong [[_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/DESIGN|DESIGN]].

| Kiểm tra | Thao tác với dữ liệu mẫu |
| --- | --- |
| US-01 · PT-01.1–2 | Đọc chi tiết và mở form. Chọn **Đã đóng đăng ký**, tải lại và kiểm tra nút đăng ký vẫn ẩn. |
| US-02 · PT-02.1–2 | Gửi trống để kiểm tra focus và liên kết lỗi. Thử tên ngắn, email sai, email trùng và **Gửi lặp cùng yêu cầu**. |
| US-02 · PT-02.3–4 | Thử **Lỗi lưu lần đầu** rồi F5 và gửi lại. Với **Mất phản hồi sau khi lưu**, F5, đổi tên rồi gửi để thấy xung đột. Gửi lại tên/email đúng của lượt đầu để lấy cùng mã. |
| US-03 · PT-03.1–3 | Gửi hợp lệ, tải lại và đối chiếu mã với “Đã đăng ký”. Quay về chi tiết và mở **Xem kết quả phiên này**. Đặt lại phiên để kiểm tra dữ liệu mẫu được xóa. Nếu trình duyệt chặn ghi phiên, kiểm tra thông báo cảnh báo. |

Dữ liệu sống trong `sessionStorage` của tab. Đổi kịch bản hoặc **Đặt lại phiên** bắt đầu lại biến thể đang mở. Xem [[TRACEABILITY_MATRIX#Bản thử TV03]], [[HANDOFF_CHECKS#Kiểm tra bổ sung của TV03]] và [[_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES|độ phủ mockup V1]].

## Chạy bản thử BID

1. Mở [dist/index.html?mode=bid](dist/index.html?mode=bid) hoặc chọn **Kịch bản demo → Mở bản BID**.
2. Bấm **Đăng ký tham gia → Điền dữ liệu mẫu → Gửi đăng ký → Mở hộp thư mô phỏng**. Đối chiếu mã đăng ký và trạng thái ở hai nơi.
3. Tải lại cùng tab để xem lại mã, trạng thái và thư đã tạo. Đổi kịch bản hoặc **Đặt lại phiên** xóa dữ liệu mẫu của bản BID.

## Màn hình và trạng thái theo user story của BID

| Story / yêu cầu | Màn hình và component | Cách thử và kết quả mong đợi |
| --- | --- | --- |
| US-01 / REG-01 | Chi tiết · `EventCard`, `ScreenPanel`, `StatusBadge` | Mặc định xem được tên, mô tả, giờ, địa điểm và nút đăng ký. Chọn **Đã đóng đăng ký** để xem thông báo đóng và nút đăng ký biến mất. |
| US-02 / REG-02, REG-03 | Đăng ký · `RegistrationForm`, `FormField` | Gửi trống để thấy lỗi từng trường. Với dữ liệu mẫu hợp lệ, hệ thống tạo một mã. Chọn **Email đã đăng ký**, điền mẫu và gửi để thấy lỗi trùng. Hoặc hoàn thành một đăng ký rồi quay về chi tiết và gửi lại cùng email trong phiên đó. |
| US-02 / REG-03 | Đăng ký → Kết quả · `RegistrationForm`, `ScreenPanel` | Chọn **Gửi lặp cùng yêu cầu** và gửi hợp lệ. Prototype gọi thao tác lưu hai lần với cùng mã lượt gửi. Quan sát một mã và một thư. Quay lại đăng ký với email mẫu khác, ví dụ `binh@example.test`, để thấy mã kế tiếp là `FOR-002`. |
| US-03 / REG-04 | Đăng ký hoặc Kết quả · `Notice`, `StatusBadge` | Mặc định thấy **Đã xác nhận** sau khi lưu. Chọn **Chờ BTC duyệt** để thấy **Chờ duyệt**. Chọn **Lỗi lưu lần đầu**, gửi và kiểm tra biểu mẫu vẫn giữ dữ liệu, có lỗi và chưa có kết quả xác nhận. Gửi lại để hoàn tất. |
| US-04 / REG-05 | Kết quả → `InboxDialog` · `Notice` | Đối chiếu sự kiện, mã và trạng thái thư. Trong kịch bản **Chờ BTC duyệt**, mở hộp thư để xem biên nhận, đóng thư rồi bấm **Mô phỏng BTC duyệt** để nhận thư xác nhận. |
| US-04 / REG-05 | Kết quả · `Notice`, `ActionButton` | Chọn **Lỗi gửi thư lần đầu**. Mã đăng ký vẫn hiện cùng lỗi gửi thư. Bấm **Thử gửi lại**, mở hộp thư và đối chiếu mã cũ. |
| US-04 / REG-06 | Email xác nhận · `InboxDialog` | Vé QR còn chờ quyết định. Demo hiện dùng mã đăng ký dạng văn bản. Tiêu chí cấp và đối chiếu QR chưa được triển khai. |

## Giả định demo chờ xác nhận

- **Sự kiện và sức chứa.** Workshop, giờ và phòng đều giả lập. Ai có link đều xem được. Mở/đóng do người thử chọn. Hạn đăng ký, sức chứa, giữ chỗ đồng thời và danh sách chờ chưa có quy tắc được duyệt.
- **Định danh.** Tên và email hợp lệ là hai trường bắt buộc. Demo bỏ qua khác biệt hoa/thường và khoảng trắng ở đầu/cuối email, áp dụng một đăng ký cho mỗi email trong sự kiện và chặn lượt đăng ký mới bị trùng. Quy tắc MSSV, email trường, quyền sửa/hủy, phân quyền và lưu giữ dữ liệu thực tế chờ client quyết định.
- **Duyệt.** Mặc định xác nhận ngay sau khi lưu. Ở kịch bản cần duyệt, hồ sơ chờ duyệt chưa giữ chỗ và có biên nhận. Nút mô phỏng chuyển sang đã xác nhận và thêm thư xác nhận. Quy trình duyệt thật, từ chối và giữ chỗ chờ BTC chốt.
- **Thư và dữ liệu.** Bản ghi và hộp thư lưu trong phiên tab của bản BID. Demo mô phỏng lỗi lưu/gửi và thử lại bằng dữ liệu mẫu. Chính sách gửi, thời gian giao thư, gửi lại và vé QR chờ xác nhận.

Nguồn liên quan trong repo gồm [Client Brief](../docs/discovery/client/Client-Brief.md), [Assumptions](../docs/discovery/research/Assumptions.md), [TV03](../docs/discovery/results/Week-2/TV03.md), [TV04](../docs/discovery/results/Week-2/TV04.md), [TV05](../docs/discovery/results/Week-2/TV05.md), [TV08](../docs/discovery/results/Week-2/TV08.md) và [TV10](../docs/discovery/results/Week-2/TV10.md). Xem [design-system.md](design-system.md) để đối chiếu tên component.
