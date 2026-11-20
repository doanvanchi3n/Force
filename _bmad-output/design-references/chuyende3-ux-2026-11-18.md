# Tham khảo UI UX Pro Max cho bản nháp Chuyende3

Ngày tra cứu: **18/11/2026**. Đây là gợi ý thư viện, không phải kết quả nghiên cứu
về VSC hoặc quyết định đã được người dùng chấp thuận. Tài liệu UX đang dùng nằm
tại [workspace BMAD](../planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/README.md).

## Tra cứu đã thực hiện

Các truy vấn chạy bằng `python3 scripts/design-search.py`, không chọn stack ứng
dụng và không tạo `design-system/` ở gốc repo.

| Truy vấn | Domain / dữ liệu | Kết quả phù hợp | Cách dùng trong bản nháp |
| --- | --- | --- | --- |
| `event registration dashboard` | product / `products.csv` | Event Management; gợi ý giao diện sự kiện và tổng quan vận hành | Dùng bối cảnh tác vụ; không dùng Wedding/Event Planning bị lệch ngữ cảnh hoặc mặc định glass/motion |
| `event management` | color / `colors.csv` | Event Management tím/cam; Calendar & Scheduling xanh; Local Events cam | Các lựa chọn tham khảo. V1 dùng xanh/nền sáng, điều chỉnh token theo bản nháp, không nhận là brand VSC |
| `minimalism swiss` | style / `styles.csv` | Minimalism & Swiss Style: lưới rõ, chữ có thứ bậc, ít trang trí | Hỗ trợ đọc danh sách và thao tác; không mặc định framework từ kết quả |
| `bento grid` | style / `styles.csv` | Bento Box Grid: khối mô-đun, kích thước khác nhau, khoảng trống và thứ bậc rõ | Tra cứu sau khi người dùng chọn Campus Friendly + Bento Grid; dùng các khối có mục đích, giữ thứ tự đọc khi về mobile |
| `error summary validation` | ux / `ux-guidelines.csv` | Focusable Error Summary, Error Messages, Error Placement | Tóm tắt lỗi có focus, liên kết trường lỗi và thông báo tại trường |
| `keyboard focus modal` | ux / `ux-guidelines.csv` | Visible focus; phân biệt focus-not-obscured AA và AAA | Focus rõ, không bị che; modal có đường thoát và trả focus |

## Đối chiếu chuẩn công khai

- Mục tiêu chữ thường tối thiểu 4,5:1, chữ lớn 3:1 dựa trên
  [W3C — Contrast Minimum](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html).
- Điều khiển chính 44 × 44 CSS px là lựa chọn của bản nháp. WCAG 2.2 AA đặt
  mức tối thiểu 24 × 24 CSS px hoặc ngoại lệ/khoảng cách phù hợp, không phải mọi
  điều khiển web đều bắt buộc 44 px. [W3C — Target Size Minimum](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html)
- Modal đưa focus vào trong, giữ vòng Tab, hỗ trợ Escape và trả focus hợp lý khi
  đóng. [W3C APG — Modal Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)

Các nguồn này hỗ trợ quy tắc thiết kế; không chứng nhận prototype tuân thủ toàn
bộ WCAG. Kết quả kiểm tra cụ thể được ghi ở UX workspace sau khi chạy.

## Quyền quyết định

Người dùng đã chọn **Campus Friendly + Bento Grid, Blue / Orange / White**, cùng
đầu ra Markdown + HTML tương tác. Lựa chọn này thay hướng mặc định ban đầu; đã
ghi trong `.memlog.md`. V1 dùng xanh dương cho thao tác chính, cam làm điểm nhấn
và nền/mặt trắng. Giá trị hex, kiểu chữ và chi tiết tương tác vẫn là đề xuất để
xem xét; không phải brand VSC đã xác nhận. `DESIGN.md`/`EXPERIENCE.md` ghi nhận
quyết định cho prototype; tham khảo thư viện không ghi đè hai tài liệu đó.
