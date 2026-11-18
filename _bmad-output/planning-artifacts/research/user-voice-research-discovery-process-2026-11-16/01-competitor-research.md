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

## Ma trận theo nội dung được báo cáo

Các ô dưới đây thuật lại TV02, với ngày thu thập nguồn **11–12/11/2026**. Nhãn tự
thử trong bài chỉ nói đến một tình huống/tài khoản/sự kiện thử; ảnh/log được viện
dẫn chưa có trong bản nhập nên chưa thể tái kiểm tra.

| Tiêu chí | Forms + Sheets | Luma | Eventbrite |
| --- | --- | --- | --- |
| Đăng ký và danh sách | Báo cáo nêu nhận phản hồi, liên kết Sheets/xuất CSV | Báo cáo nêu đăng ký và CSV khách/trạng thái | Báo cáo nêu đăng ký và báo cáo người tham dự |
| Trùng đăng ký | Báo cáo nêu giới hạn một phản hồi/tài khoản Google theo cấu hình; chưa tương đương chống trùng theo người/MSSV | TV02 nói cùng email bị chặn ở lần thử | TV02 nói cùng email không bị chặn ở lần thử; không khái quát mọi cấu hình |
| Sửa/hủy | Báo cáo nêu sửa phản hồi theo cấu hình; hủy/giải phóng chỗ còn mâu thuẫn trong bài | Báo cáo nêu “Not Going”, rời hàng chờ và quản lý khách | Báo cáo nêu hủy đơn miễn phí; một vé trong đơn nhiều vé có điều kiện khác |
| Check-in | Chưa đủ bằng chứng về luồng check-in tích hợp; không kết luận mọi cách kết hợp công cụ đều không hỗ trợ | Báo cáo nêu QR/tìm tên và trạng thái check-in | Báo cáo nêu Organizer App và Check-ins report; chưa có ảnh thử trong corpus |
| Sức chứa/hàng chờ | Báo cáo có nguồn về tự đóng phản hồi; hàng chờ chưa xác minh | Báo cáo nêu sức chứa/hàng chờ cho sự kiện miễn phí | Báo cáo nêu hàng chờ; cách mời tự động/thủ công còn cần thử |
| Quyền và giới hạn gói | Chưa đủ để so quyền theo nghiệp vụ VSC | Vai trò check-in staff/API được báo cáo phụ thuộc Plus, chưa thử | Chưa đủ dữ liệu quyền theo nghiệp vụ VSC |
| Định danh trường | Chưa xác minh đáp ứng quy tắc MSSV/email trường | Chưa xác minh | Chưa xác minh |
| Ngôn ngữ và dùng tại Việt Nam | Cần thử theo người dùng/môi trường dự kiến | Kết luận tiếng Việt không nhất quán trong TV02 | Tiếng Việt và điều kiện tổ chức tại Việt Nam chưa đủ bằng chứng |

Nguồn cho toàn ma trận: [TV02 §3–5](../../../../docs/discovery/results/Week-2/TV02.md);
[digest và 21 URL nguồn gốc](digests/W2-TV02.md). Nguồn gốc được TV02 dẫn gồm tài
liệu Google, Luma và Eventbrite; bản tổng hợp này chưa truy cập lại các trang đó.

## Chi phí và bằng chứng còn thiếu

TV02 có dẫn trang giá Luma và Eventbrite, nhưng có khác biệt phí giữa tài liệu Luma,
giá Eventbrite được nêu theo thị trường Mỹ và chưa xác minh điều kiện Việt Nam.
Chi phí Forms/Sheets cũng chưa có nguồn đầy đủ trong bài. Không dùng các con số
đó làm dự toán hiện hành hoặc xếp hạng phương án rẻ nhất. Khi chọn phương án,
kiểm tra lại giá/gói/khu vực và tính cả công sức vận hành, cấu hình, đối soát.

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
