---
title: Force — Quy tắc nghiệp vụ đề xuất
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
---

# Business Rules — Force

Các rule này định nghĩa **core đề xuất**, không phải chính sách được VSC xác nhận. `UX` nghĩa là kế thừa giả định của bản thử V1; `KT` nghĩa là yêu cầu toàn vẹn/bảo vệ dữ liệu khi viết ứng dụng. [PRD](prds/prd-Chuyende3-2026-11-27/prd.md) sở hữu phạm vi; [Traceability](TRACEABILITY_MATRIX.md) nối rule về nguồn/story. Prototype đang có các biến thể lệch core; xem [PROTOTYPES](ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md).

## Danh mục quy tắc

| ID | Rule có thể kiểm tra | Căn cứ / trạng thái | Story |
| --- | --- | --- | --- |
| BR-01 | Chỉ nhận đăng ký khi cấu hình sự kiện cho phép; ngày minh họa không thay quy tắc mở/đóng. Máy chủ kiểm tra lại khi ghi. | Đề xuất; OQ-04; FR-01/02 | US-01, US-02 |
| BR-02 | Core: tên trim/gộp khoảng trắng, 2–80 ký tự; email trim/lowercase, tối đa 254 ký tự, kiểm tra định dạng. Kiểm tra ở máy chủ và UI; chỉ có tên/email bắt buộc. | UX giả định; OQ-03; không khẳng định email đã được xác thực | US-02 |
| BR-03 | Một hồ sơ cho `(event, normalizedEmail)`, kể cả đã hủy. Gửi lại cùng request key/payload trả cùng kết quả cho chính lượt gửi; cùng key khác payload báo xung đột. Email trùng ở lượt mới không tiết lộ hồ sơ hoặc bí mật cũ. | UX + KT đề xuất; OQ-03/05; FR-03 | US-02 |
| BR-04 | Chỉ hiển thị Đã đăng ký sau khi ghi thành công; đăng ký không đồng nghĩa tham dự. Core tạo `registered` ngay, chưa có duyệt/hàng chờ. Không báo email đã gửi khi chỉ ghi hồ sơ. | UX giả định; OQ-04; FR-04 | US-03 |
| BR-05 | Xem/hủy hồ sơ cần quyền chủ hồ sơ hoặc quyền BTC tương ứng. Biết tên, email, MSSV hoặc mã hiển thị tuần tự không đủ quyền. Token truy cập riêng không xuất CSV hoặc ghi log. | KT đề xuất; OQ-06; FR-05 | US-03, US-04, US-05 |
| BR-06 | Chủ hồ sơ chỉ hủy `registered` sau xác nhận; đóng/Escape giữ nguyên; `checked`/`cancelled` không được hủy tiếp. Không tự xóa hồ sơ/lịch sử hoặc cho đăng ký lại. | UX giả định; OQ-05; FR-06 | US-05 |
| BR-07 | Chỉ BTC có quyền của sự kiện được ghi `registered` → `checked`; tìm/chọn/quét không tự ghi nhận. `checked` không cộng lặp, `cancelled` bị chặn. | UX + KT đề xuất; OQ-07; FR-09 | US-08 |
| BR-08 | Chỉ quyền được phân công mới hoàn tác `checked` → `registered`; lý do sau trim dài 1–300 ký tự; giữ người thực hiện, thời điểm và trạng thái trước/sau. Loại khác không được hoàn tác. | UX + KT đề xuất; OQ-07; FR-10 | US-09 |
| BR-09 | Mọi đọc/ghi/xuất của BTC kiểm tra phiên và quyền theo sự kiện tại máy chủ. Không dùng DemoToolbar, ẩn nút hoặc route guard ở client làm bằng chứng phân quyền. | KT đề xuất; FR-07; vai trò cụ thể chờ OQ-07 | US-06, US-07…11 |
| BR-10 | Thay trạng thái và ghi audit trong cùng giao dịch; so phiên bản hiện tại để chống ghi đè. Hai request cạnh tranh chỉ một chuyển trạng thái hợp lệ được ghi. Số đếm tính từ dữ liệu, không từ số click. | KT đề xuất; FR-03/09/10; NFR-02 | US-02, US-05, US-08, US-09, US-10 |
| BR-11 | Lỗi trước gửi giữ dữ liệu, không tạo kết quả thành công. Timeout sau gửi phải ghi “chưa xác định kết quả”, đối soát request key rồi thử lại; lỗi quyền không được tự tăng quyền; không hàng đợi offline trong core. | UX + KT đề xuất; NFR-03 | Mọi story có đọc/ghi dữ liệu |
| BR-12 | Core: tổng = registered + checked + cancelled. Tỷ lệ = checked/(registered + checked), làm tròn phần trăm nguyên; mẫu số 0 → 0% với nhãn không có đăng ký còn hiệu lực. Đếm cùng snapshot; không gọi đây là no-show. | UX giả định; FR-11 | US-10 |
| BR-13 | Core CSV: mã, tên, email, nhãn trạng thái; toàn bộ hồ sơ của sự kiện, gồm đã hủy, cùng snapshot với preview. Quote/escape dấu nháy, dấu phẩy, xuống dòng; vô hiệu giá trị có thể thành công thức, áp dụng cùng cách cho preview/tệp. Chỉ quyền export mới được tải. | UX + KT đề xuất; OQ-08; FR-12 | US-11 |
| BR-14 | Thu tối thiểu dữ liệu đã chốt; không công khai danh sách hoặc log bí mật. Dữ liệu thật chỉ được lưu/xuất theo mục đích, người nhận, thời hạn và quyền đã quyết định; demo dùng fixture. | KT đề xuất; OQ-08/10; NFR-05/06 | US-02…11 |

Giới hạn tên/email/lý do là giả định làm việc của bản thử; lowercasing email là quy ước sản phẩm đề xuất, không phải phát biểu mọi nhà cung cấp email coi hoa/thường giống nhau. Không tự thêm quy tắc email trường, regex MSSV của VKU hoặc xác nhận danh tính chỉ từ trường nhập.

## Chuyển trạng thái core

| Trước | Hành động / quyền | Sau | Khi không đủ điều kiện |
| --- | --- | --- | --- |
| Chưa có | Đăng ký hợp lệ, được phép nhận, không trùng | registered | Trả lỗi, không tạo bản ghi mới |
| registered | Chủ hồ sơ xác nhận hủy | cancelled | Giữ nguyên; quyền/hạn hủy chờ chốt |
| registered | BTC có quyền xác nhận check-in | checked | Giữ nguyên; trả trạng thái hiện tại khi xung đột |
| checked | BTC có quyền hoàn tác và lý do hợp lệ | registered | Giữ nguyên; không xóa lịch sử |
| checked/cancelled | Check-in lặp hoặc hủy lại | Giữ nguyên | Nêu rõ đã tham dự/đã hủy |

Không có chuyển tự động từ `cancelled` trở lại `registered` trong core. `waitlist`, phê duyệt, đôn chỗ và đăng ký lại cần rule mới sau khi OQ-04/05 được đóng; không suy từ code demo thành quyết định.

## Thay đổi và phê duyệt

Một thay đổi rule phải ghi người quyết định, bằng chứng và ngày thật, giữ ID hoặc đánh dấu retired; cập nhật PRD, AC, UX và kiến trúc bị ảnh hưởng. Danh mục [OQ](../../docs/knowledge/04-decisions-and-open-questions.md) chỉ ghi owner đề nghị. Chưa có rule nghiệp vụ nào trong bộ này mang trạng thái “VSC approved”.
