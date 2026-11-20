# 01 — Competitor Research

**Trạng thái: tổng hợp nghiên cứu công cụ của TV02, chưa kiểm tra lại tính năng
hiện hành.** Ba phương án được đưa ra so sánh là Google Forms + Sheets, Luma và
Eventbrite. Chưa có bằng chứng về công cụ VSC đang dùng hoặc quyết định chọn công cụ.

## Câu hỏi quyết định

Khó khăn nào không được cách làm hiện tại hoặc công cụ sẵn có giải quyết đủ tốt,
và có đáng xây một sản phẩm riêng không? Việc thị trường đã có đăng ký/check-in
không loại bỏ mọi cơ hội cải thiện; đồng thời một tính năng chưa thấy trong tài
liệu không chứng minh tính năng ấy không tồn tại.
[W1-TV01](09-evidence-register.md#w1-tv01), [W2-TV02](09-evidence-register.md#w2-tv02)

## Ma trận so sánh nền tảng (Khôi phục nguyên gốc từ TV02)

Dưới đây là bảng đối chiếu trực tiếp từ báo cáo nghiên cứu của TV02 (Huỳnh Văn Lợi) với ngày thu thập **11–12/11/2026**.
Hệ thống nhãn nhận thức luận được bảo toàn nguyên trạng:
- **[D]** = Dữ kiện có nguồn tài liệu chính thức (`SRC-W2-TV02-01` đến `SRC-W2-TV02-21`).
- **[S]** = Suy luận của thành viên từ dữ kiện (chưa kiểm chứng riêng).
- **[G]** = Giả định cần hỏi lại VSC (không khẳng định trước).
- **[?]** = Chưa rõ / chưa có tài liệu xác minh.
- **[T]** = Đã tự thử nghiệm thực tế trên tài khoản và sự kiện test (có ảnh minh chứng ở mục 7 của TV02).

| Tiêu chí | Google Forms + Sheets (Phương án thay thế) | Luma | Eventbrite |
| --- | --- | --- | --- |
| **Đăng ký / hủy** | **[D][T]** Cho người trả lời sửa phản hồi sau khi gửi nếu bật *Allow response editing* (SRC-01; ảnh forms-02).<br>**[?]** Hủy đăng ký và tự động giải phóng chỗ chưa xác minh. | **[D]** Khách tự hủy ("Not Going") hoặc rời hàng chờ (SRC-08, SRC-07).<br>**[D][T]** Host duyệt hoặc từ chối đăng ký (SRC-06, SRC-11; ảnh luma-03). | **[D][T]** Khách tự hủy đơn vé miễn phí; khách và organizer nhận email xác nhận (SRC-16; ảnh eb-04).<br>**[D]** Organizer hủy hoặc xóa đơn vé miễn phí (SRC-17).<br>**[D]** Hủy 1 vé trong đơn nhiều vé phải liên hệ organizer (SRC-16). |
| **Kiểm tra trùng** | **[D][T]** Giới hạn một phản hồi trên mỗi tài khoản Google (SRC-04, SRC-01; ảnh forms-01).<br>**[S]** Không có cơ chế chặn trùng theo MSSV sẵn. | **[T]** Đăng ký lần hai cùng email bị chặn (tự thử 12/11/2026; ảnh luma-01).<br>**[S]** Chưa có cơ chế xác thực MSSV riêng. | **[T]** Đăng ký lần hai cùng email **không bị chặn** (ảnh eb-02).<br>**[S]** Nếu cần chống trùng lặp phải tự xây dựng cơ chế riêng. |
| **Ghi nhận tham dự** | **[S]** Không có check-in tích hợp sẵn; cần thêm cột trong Google Sheets và nhập tay. | **[D][T]** Mỗi khách có mã QR khi đăng ký; quét tại cửa bằng camera hoặc tìm tên để check-in (SRC-09; ảnh luma-04).<br>**[D]** Vai trò nhân viên check-in (staff) cần gói Luma Plus (SRC-09, SRC-05). | **[D]** Có Organizer App để check-in (SRC-13, SRC-20) và báo cáo Check-ins riêng (SRC-18); chưa có ảnh tự thử. |
| **Xuất danh sách** | **[D][T]** Thu thập email người đăng ký; liên kết phản hồi với Google Sheets và tải CSV (SRC-02; ảnh forms-03, 04, 06). | **[D][T]** Tải danh sách khách dạng CSV, gồm tên, email, trạng thái duyệt, loại vé, trạng thái check-in (SRC-10; ảnh luma-05). | **[D][T]** Tải báo cáo Attendees dạng CSV (SRC-14; ảnh eb-05).<br>**[D]** Có đơn hiện "Info requested" thay cho tên/email người tham dự (SRC-21). |
| **Chi phí** | **[?]** Chưa có nguồn chính thức về chi phí cho tài khoản Google cá nhân và Google Workspace tại Việt Nam. | **[D]** Gói Free không giới hạn sự kiện và khách; gói Luma Plus giá **$59/tháng** khi trả theo năm; vé trả phí chịu phí nền tảng 5% + phí Stripe (SRC-05; ảnh luma-06). | **[D]** Miễn phí với vé 0đ; vé trả phí chịu phí **3.7% + $1.79/vé** và **2.9%/đơn** (bản US) (SRC-13; ảnh eb-06). Chưa rõ bảng giá tại Việt Nam. |
| **Giới hạn & Quyền** | **[D][T]** Bật giới hạn một phản hồi hoặc cho sửa thì người trả lời **bắt buộc đăng nhập Google** (SRC-01, SRC-04; ảnh forms-01, 02). | **[D]** Gói Free gửi tối đa **15 lời mời/bản tin mỗi tuần** (blast tới khách đã đăng ký không bị giới hạn); API và check-in staff cần Plus (SRC-05, SRC-09, SRC-12).<br>**[D]** Hàng chờ chỉ dùng cho sự kiện miễn phí (SRC-07). Hỗ trợ tiếng Việt. | **[D]** Bảng giá và điều kiện hỗ trợ chỉ nêu rõ cho Mỹ, Canada, Úc, New Zealand, Anh, Ireland; không thấy Việt Nam (SRC-13; ảnh eb-06). |
| **Sức chứa / Hàng chờ** | **[D][T]** Tự ngừng nhận phản hồi khi đạt số lượng đặt trước (SRC-03; ảnh forms-05).<br>**[?]** Tính năng hàng chờ tự động chưa xác minh. | **[D][T]** Đặt sức chứa; đủ chỗ thì đóng đăng ký hoặc đưa vào hàng chờ tự kích hoạt (SRC-06, SRC-07; ảnh luma-02). | **[D][T]** Hàng chờ: đặt điều kiện kích hoạt và giới hạn số người (SRC-15; ảnh eb-03).<br>**[D]** Giới hạn số vé mỗi đơn (SRC-19). |
| **Định danh & Ngôn ngữ** | **[?]** Chưa xác minh đáp ứng quy tắc MSSV hoặc email trường.<br>**[D]** Forms hỗ trợ tiếng Việt hoàn chỉnh. | **[?]** Chưa xác minh xác thực MSSV.<br>**[D]** Có hỗ trợ tiếng Việt (cần thử nghiệm thêm trên giao diện đăng ký). | **[?]** Chưa xác minh xác thực MSSV.<br>**[?]** Tiếng Việt và điều kiện tổ chức tại Việt Nam chưa đủ bằng chứng. |

Nguồn cho toàn ma trận: [TV02 §3–5](../../../../docs/discovery/results/Week-2/TV02.md);
[digest và 21 URL nguồn gốc](digests/W2-TV02.md). Nguồn gốc được TV02 dẫn gồm tài
liệu Google, Luma và Eventbrite; bản tổng hợp này bảo toàn các nhãn nhận thức để tránh suy diễn vượt quá bằng chứng.

## Chi phí và bằng chứng còn thiếu

TV02 có dẫn trang giá Luma và Eventbrite với các con số cụ thể:
- **Luma:** Gói Free $0 (giới hạn 15 lời mời/tuần, không staff); Luma Plus $59/tháng trả theo năm; vé có phí chịu 5% + phí Stripe (SRC-05).
- **Eventbrite:** Vé miễn phí $0; vé trả phí chịu 3.7% + $1.79/vé và 2.9%/đơn (thị trường Mỹ). Chưa có bảng giá chính thức tại Việt Nam (SRC-13).
- **Google Forms/Sheets:** Chưa có bảng giá chính thức cho tài khoản Google cá nhân và Workspace giáo dục.

Ảnh được bài dẫn ở “mục 7” không xuất hiện trong bản nhập kết thúc ở mục 6.
Forms hủy/giải phóng chỗ, Luma tiếng Việt và Eventbrite dùng tại Việt Nam có các
dòng chưa nhất quán; giữ trạng thái **chưa đủ bằng chứng**, không chọn câu thuận
lợi hơn để hoàn thiện ma trận. [W2-TV02](09-evidence-register.md#w2-tv02)

## Bài thử chung đề xuất

| Tình huống | Cần ghi lại | Quyết định có thể hỗ trợ |
| --- | --- | --- |
| Đăng ký, sửa, đăng ký trùng cùng định danh đã thống nhất | Cấu hình, kết quả từng lần, cách sửa ngoại lệ | Quy tắc chống trùng và công sức làm sạch |
| Hủy rồi đăng ký lại; đủ chỗ/hàng chờ nếu nghiệp vụ cần | Trạng thái, thời điểm cập nhật, ai được báo | Quy trình hủy và quản lý sức chứa |
| Có mã/không mã/không tên/check-in lặp | Thời gian, lỗi, người xử lý, khả năng sửa nhầm | Cách ghi nhận tham dự phù hợp |
| Mạng yếu hoặc gián đoạn | Dữ liệu còn truy cập, cách ghi nhận dự phòng và đối soát | Tính khả thi tại địa điểm |
| Xuất báo cáo cho người nhận thực tế | Trường dữ liệu, công việc làm thêm và thời gian | Mức đáp ứng đầu ra của client |

Dùng cùng dữ liệu thử ẩn danh và cùng tiêu chí trên mỗi phương án; lưu ngày,
gói/cấu hình và ảnh/log. Đây là kế hoạch mới, chưa có kết quả. Chỉ đưa tiêu chí
MSSV, hàng chờ hoặc chứng nhận vào bài thử khi nghiệp vụ đã xác nhận cần chúng.

**Kết luận làm việc:** tiếp tục so sánh cách làm hiện tại và công cụ sẵn có trước
khi chốt xây mới. Chưa có phương án thắng hoặc khoảng trống thị trường đã xác nhận.

[Giả thuyết](08-assumption-hypothesis-validation.md) · [Mục lục](README.md)
