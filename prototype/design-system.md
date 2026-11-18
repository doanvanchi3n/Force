# Design system · Force

Tên trong bảng trùng với class trong `dist/index.html`. Token được khai báo tại `:root` trong `dist/styles.css`.

## Token

| Token | Giá trị | Cách dùng |
| --- | --- | --- |
| `--canvas`, `--surface` | `#f3f1e8`, `#fffdf8` | Nền trang và bề mặt panel |
| `--ink`, `--muted`, `--line` | `#162d26`, `#53655a`, `#d7dcd2` | Chữ chính, chữ phụ và đường phân cách |
| `--accent` | `#dafa71` | Nền hành động chính và điểm nhấn poster |
| `--success`, `--success-bg` | `#235539`, `#e4f2df` | Trạng thái mở, xác nhận và gửi thư thành công |
| `--warning`, `--warning-bg` | `#74511c`, `#faeed3` | Đã đóng đăng ký hoặc hồ sơ chờ duyệt |
| `--error`, `--error-bg` | `#942e2b`, `#fbe7e2` | Lỗi dữ liệu, lưu hoặc gửi thư |
| `--focus` | `#2463a2` | Viền focus bàn phím 3 px, cách phần tử 3 px |
| `--radius`, `--control-radius` | 22 px, 10 px | Bo góc panel và điều khiển |
| `--space-sm`, `--space-md`, `--space-lg` | 8 px, 16 px, 24 px | Khoảng cách nhóm nút, biểu mẫu và nội dung |
| `--type` | Segoe UI → system-ui → sans-serif | Chữ giao diện. Nội dung cơ bản 1 rem, line-height 1,55 |

## Component, trạng thái và quy tắc

| Component | Trạng thái / biến thể | Quy tắc sử dụng |
| --- | --- | --- |
| `EventCard` | Đang nhận / đã đóng | Giữ giờ, địa điểm và trạng thái sự kiện xuyên suốt luồng. Trên màn hình nhỏ, thu gọn poster ở bước đăng ký và kết quả. |
| `StepNav` | Chi tiết / Đăng ký / Kết quả | Đây là chỉ báo tiến trình. Đánh dấu bước đang hiển thị bằng `aria-current="step"`. Dùng nút trong màn hình để điều hướng. |
| `ScreenPanel` | Chi tiết / Đăng ký / Kết quả | Hiển thị một panel mỗi bước. Chuyển focus đến tiêu đề khi chuyển màn hình. |
| `RegistrationForm` | Sẵn sàng / dữ liệu lỗi / lỗi lưu | Giữ dữ liệu đã nhập khi thao tác lưu thất bại. Đặt lỗi theo trường gần ô nhập, lỗi lưu trong `Notice`. |
| `FormField` | Mặc định / focus / lỗi | Dùng nhãn nhìn thấy được, ghi rõ trường bắt buộc và liên kết thông báo bằng `aria-describedby`. Trường lỗi có `aria-invalid`. |
| `ActionButton` | Chính / `secondary` / `text`. Có hover, focus và kiểu disabled. | Dùng biến thể chính cho thao tác kế tiếp, phụ cho hành động hỗ trợ và dạng chữ để quay lại. Chiều cao tối thiểu 44 px. Khi đóng đăng ký, ẩn nút đăng ký và hiển thị lý do. |
| `StatusBadge` | `success` / `warning` | Hiển thị trạng thái ngắn bằng chữ và màu. Dùng trạng thái sự kiện trên `EventCard` và trạng thái hồ sơ tại kết quả. |
| `Notice` | `success` / `warning` / `error` | Mô tả kết quả và thao tác tiếp theo. Lỗi lưu dùng thông báo alert, trạng thái gửi thư dùng live status. |
| `InboxDialog` | Đóng / mở | Hộp thoại gốc của trình duyệt, đóng bằng nút hoặc Esc. Thư giữ đúng mã đăng ký và trạng thái tại thời điểm tạo thư. |
| `DemoControls` | Thu gọn / mở | Đặt bộ điều khiển kịch bản trong header để người thử phân biệt thao tác mô phỏng với luồng sinh viên. |

Hai cột chuyển thành một cột ở 720 px. Các trạng thái đều có nhãn chữ để người thử nhận biết mà không phụ thuộc vào màu.
