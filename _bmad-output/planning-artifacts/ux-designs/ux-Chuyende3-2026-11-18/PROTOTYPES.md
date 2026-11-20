# Prototypes — phạm vi và kịch bản thử

**Bản nháp tương tác để kiểm chứng thiết kế, chưa phải ứng dụng vận hành.**
Mở [index.html](mockups/index.html); các hành động thay đổi dữ liệu mẫu trong
phiên trình duyệt. Có thể đặt lại để thử từ đầu. Không nhập thông tin thật.

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
Mọi màn hình sản phẩm có trong prototype tương tác; ba hình mẫu tĩnh tập trung
S01, S05 và S06 để minh họa bố cục chính. Trạng thái khác được thử trong bản tương tác.

## Kịch bản 1 — Đăng ký và tìm lại xác nhận

1. Chọn luồng sinh viên, đọc thông tin sự kiện mẫu rồi bắt đầu đăng ký.
2. Gửi biểu mẫu rỗng hoặc email sai. Kiểm tra tóm tắt lỗi, liên kết tới trường
   tương ứng và việc giữ dữ liệu đã điền.
3. Điền tên minh họa và email thuộc `example.test`, gửi lại.
4. Kiểm tra trạng thái và mã đăng ký; tìm lại bằng đúng mã đó.
5. Thử lại email với khác biệt chữ hoa/khoảng trắng. Hệ thống không được tạo
   thêm một bản ghi chỉ vì khác cách viết email.

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
