# BID — Force

**Đề tài:** Website hỗ trợ đăng ký và quản lý tham dự sự kiện cho câu lạc bộ sinh viên.  
**Phiên bản:** 0.1 · Dự thảo chờ nhóm đọc chéo và client xác nhận.  
**Phạm vi bản này:** Luồng sinh viên xem chi tiết sự kiện, đăng ký và nhận xác nhận. Cấu trúc do nhóm có thể điều chỉnh khi có mẫu BID hoặc rubric chính thức. [Danh mục mẫu tuần 2](../80-Templates/Link%20template.md) · [Assumptions, Q02](../03-Research/Assumptions.md)

## 1. Vấn đề, người dùng và mục tiêu

- **Quyết định đã có trong nhóm:** Force chọn đề tài website đăng ký sự kiện. Sinh viên là người dùng trực tiếp trong luồng này. Ban tổ chức (BTC) sử dụng danh sách để vận hành sự kiện. CLB Kỹ năng VKU (VSC) là client tiềm năng. Việc hợp tác và người có quyền duyệt nghiệp vụ chờ xác nhận. [Board tuần 2](Board%20-%20week%202.md) · [Client Brief](../02-Client/Client-Brief.md) · [Assumptions, Q03 và Q05](../03-Research/Assumptions.md)
- **Bằng chứng từ sinh viên:** Trong 6 phản hồi hợp lệ, 3 người nhận xác nhận ngay, 2 người đợi sát ngày và 1 người không nhận được. Có 3 người từng không tìm thấy tên khi check-in. Khi được hỏi về kênh nhận vé/QR, 5 người chọn email, 1 chọn Zalo/Messenger và 0 chọn web/app riêng. [TV05, mục 4 và 6 — SRC-W2-TV05-01](../04-results/Week-2/TV05.md)
- **Bằng chứng từ BTC:** Trong 8 phản hồi hợp lệ, 6 người chọn trùng đăng ký, 5 chọn sai hoặc thiếu thông tin và 3 chọn lệch phiên bản danh sách. Cả hai khảo sát tự báo cáo có mẫu nhỏ. Quy trình và mức ảnh hưởng tại VSC vẫn chờ xác minh. Số liệu BID lấy từ bảng kết quả TV04 và TV05. TV10 ghi số gộp trùng/sai là 4/8, cần đối chiếu trước khi nộp. TV09 trong repo còn là khung hành trình. [TV04, mục 6 — SRC-W2-TV04-01](../04-results/Week-2/TV04.md) · [Research Log](../03-Research/Research-Log.md) · [TV10, mục 4](../04-results/Week-2/TV10.md) · [TV09, mục 3–4](../04-results/Week-2/TV09.md)
- **Phát biểu vấn đề dự thảo:** Sau khi gửi biểu mẫu, sinh viên có thể phải chờ hoặc thiếu thông tin về việc đăng ký đã được ghi nhận. BTC có thể phải đối chiếu thêm khi dữ liệu trùng, thiếu hoặc lệch phiên bản. Mối liên hệ giữa các lỗi danh sách, xác nhận chậm và sự cố check-in là suy luận cần kiểm chứng. [Problem Statement](../03-Research/Problem-Statement.md) · [TV07](../04-results/Week-2/TV07.md) · [TV08, mục 3.4–3.7](../04-results/Week-2/TV08.md)

**Mục tiêu demo:** Với một sự kiện mẫu, sinh viên mở link, xem điều kiện đăng ký, gửi biểu mẫu và kiểm tra kết quả. Màn hình và thư mô phỏng phải khớp mã đăng ký và trạng thái tương ứng với thời điểm gửi. Chỉ tiêu thời gian nhận thư và hiệu quả vận hành thực tế chờ có dữ liệu nền và thỏa thuận với client. [TV05, mục 6](../04-results/Week-2/TV05.md) · [TV08, mục 3.7](../04-results/Week-2/TV08.md) · [Hướng dẫn prototype](../prototype/README.md)

**Phạm vi demo:** Trang chi tiết, biểu mẫu không cần tài khoản, kiểm tra dữ liệu, ghi nhận đăng ký trong phiên, màn kết quả và hộp thư mô phỏng. Đề xuất để tài khoản/lịch sử sinh viên, quản trị sự kiện, hủy, quét QR và báo cáo ngoài demo này. Vé QR là phương án mở rộng cần chốt. [TV03, mục 5](../04-results/Week-2/TV03.md) · [TV05, mục 6](../04-results/Week-2/TV05.md) · [TV10, A07–A10](../04-results/Week-2/TV10.md)

## 2. Yêu cầu

**P1** đề xuất cho demo chính. **P2** đề xuất xem xét sau khi chốt nghiệp vụ. Ưu tiên và yêu cầu đều chờ phê duyệt.

| Mã | Yêu cầu | Lý do | Nguồn | Ưu tiên | Trạng thái xác nhận | Quy tắc nghiệp vụ còn mở |
| --- | --- | --- | --- | --- | --- | --- |
| REG-01 | Mở link để xem thông tin sự kiện, trạng thái nhận đăng ký và bắt đầu đăng ký khi sự kiện còn mở. | Giúp sinh viên xác định đúng sự kiện và biết có thể đăng ký hay không. | [Client Brief](../02-Client/Client-Brief.md) · [TV09, khung hành trình](../04-results/Week-2/TV09.md) | P1 | Đề xuất, có prototype. | Trường bắt buộc, quyền công bố, thời điểm mở/đóng, sức chứa và hết chỗ. |
| REG-02 | Kiểm tra biểu mẫu khi gửi và lưu đăng ký hợp lệ gắn với đúng sự kiện. Demo cho phép gửi không cần tài khoản. | Giảm dữ liệu thiếu và gắn hồ sơ với đúng sự kiện. | [TV04, mục 6](../04-results/Week-2/TV04.md) · [TV05, mục 6](../04-results/Week-2/TV05.md) | P1 | Khảo sát hỗ trợ vấn đề dữ liệu thiếu. Quy tắc còn mở. | Trường bắt buộc, điều kiện tham gia, MSSV/email trường, thời hạn lưu và quyền xem dữ liệu. |
| REG-03 | Phát hiện lượt đăng ký mới bị trùng theo quy tắc đã duyệt. Xử lý lại cùng yêu cầu chỉ tạo một bản ghi. | Giảm bản ghi thừa và công sức đối chiếu. | [TV04, mục 6](../04-results/Week-2/TV04.md) · [TV08, mục 3.5](../04-results/Week-2/TV08.md) | P1 | Khảo sát hỗ trợ vấn đề trùng. Cách xử lý còn mở. | Dùng định danh nào? Chặn, cho sửa hay cho đăng ký lại? |
| REG-04 | Hiển thị trạng thái thực tế sau khi lưu. Khi lưu lỗi, báo lỗi và cho thử lại. | Giúp sinh viên biết hồ sơ đã ghi nhận và còn cần làm gì. | [TV05, mục 6](../04-results/Week-2/TV05.md) · [TV03, mục 5](../04-results/Week-2/TV03.md) | P1 | Có bằng chứng xác nhận chậm hoặc thiếu. Quy trình duyệt còn mở. | Ai duyệt, khi nào giữ chỗ và mỗi trạng thái có ý nghĩa gì? |
| REG-05 | Gửi email theo mốc được duyệt, tham chiếu đúng sự kiện, đăng ký và trạng thái tại mốc gửi. | Email được 5/6 người trong mẫu chọn làm kênh nhận vé/QR. | [TV05, mục 6](../04-results/Week-2/TV05.md) · [TV10, A07 và A10](../04-results/Week-2/TV10.md) | P1 | Kênh có hỗ trợ sơ bộ. Prototype mô phỏng thư. | Biên nhận, xác nhận hay cả hai? Ai gửi, thời gian dự kiến, xử lý lỗi và gửi lại thế nào? |
| REG-06 | Nếu client chọn vé QR, đính kèm mã tham chiếu đúng đăng ký trong thư xác nhận. | Chuẩn bị đầu vào cho check-in nếu BTC dùng QR. | [TV05, mục 6](../04-results/Week-2/TV05.md) · [TV08, mục 5](../04-results/Week-2/TV08.md) | P2 | Chờ quyết định. Prototype dùng mã đăng ký dạng văn bản. | Điều kiện cấp, cấp lại, vô hiệu và tra cứu dự phòng. |

## 3. User story và tiêu chí chấp nhận

### US-01 — Xem chi tiết · REG-01

Là sinh viên, tôi muốn xem thông tin sự kiện và biết còn nhận đăng ký hay không để quyết định tham gia.

- **Given** sự kiện đã công bố và đang mở, **When** tôi mở link, **Then** tôi thấy tên, mô tả, giờ, địa điểm và có thể mở đúng biểu mẫu.
- **Given** sự kiện đã ngừng nhận đăng ký, **When** tôi mở link, **Then** tôi thấy thông báo đóng và không thể gửi đăng ký mới.

### US-02 — Gửi đăng ký · REG-02, REG-03

Là sinh viên, tôi muốn gửi thông tin một lần và biết cần sửa gì nếu biểu mẫu chưa hợp lệ.

- **Given** sự kiện còn mở và dữ liệu hợp lệ, **When** tôi gửi lần đầu, **Then** hệ thống tạo một bản ghi cho đúng sự kiện.
- **Given** trường bắt buộc bị thiếu hoặc sai định dạng, **When** tôi gửi, **Then** biểu mẫu chỉ rõ trường cần sửa và không tạo bản ghi.
- **Given** cùng yêu cầu được gửi lại, **When** hệ thống xử lý, **Then** chỉ có một bản ghi và mã đăng ký được giữ nguyên.
- **Given** một lượt gửi mới khớp khóa chống trùng đã chốt, **When** tôi gửi, **Then** hệ thống áp dụng quy tắc xử lý trùng và thông báo kết quả. Demo chặn lượt gửi trùng email.

### US-03 — Biết kết quả · REG-04

Là sinh viên, tôi muốn biết đăng ký đã được ghi nhận ở trạng thái nào để biết bước tiếp theo.

- **Given** bản ghi đã lưu, **When** kết quả hiển thị, **Then** tôi thấy mã đăng ký và trạng thái **Chờ duyệt** nếu còn cần BTC duyệt hoặc **Đã xác nhận** nếu đã được chấp nhận.
- **Given** thao tác lưu thất bại, **When** yêu cầu kết thúc, **Then** biểu mẫu giữ dữ liệu, báo lỗi và cho thử lại mà không hiển thị xác nhận.

### US-04 — Nhận xác nhận · REG-05, REG-06

Là sinh viên, tôi muốn nhận thư phản ánh đúng tình trạng đăng ký và thông tin sự kiện để xem lại khi cần.

- **Given** bản ghi tới mốc gửi thư, **When** gửi thành công, **Then** hộp thư có đúng sự kiện, mã đăng ký và trạng thái tại mốc gửi.
- **Given** hồ sơ còn chờ duyệt và có chính sách gửi biên nhận, **When** hệ thống gửi biên nhận, **Then** thư ghi rõ hồ sơ đang chờ BTC duyệt.
- **Given** bản ghi đã lưu và thao tác gửi thư lỗi, **When** thử gửi lại thành công, **Then** thư tham chiếu mã cũ và không tạo thêm đăng ký.
- **Given** client duyệt dùng QR và bản ghi đủ điều kiện cấp vé, **When** gửi xác nhận, **Then** mã kèm theo tham chiếu đúng bản ghi. Tiêu chí này chờ quyết định nên chưa được triển khai.

## 4. Quyết định và giả định cần xác nhận

| Việc cần chốt | Bên xác nhận đề xuất | Giả định hiện dùng trong demo | Nguồn |
| --- | --- | --- | --- |
| Hợp tác, đầu mối và quy trình thực tế của VSC | Nhóm và đại diện VSC | Sự kiện, giờ và phòng là dữ liệu mẫu. | [Assumptions, Q05](../03-Research/Assumptions.md) · [TV10, A01/A06](../04-results/Week-2/TV10.md) |
| Nội dung công bố, điều kiện tham gia, hạn và sức chứa | BTC và nhóm | Ai có link đều xem được. Trạng thái mở/đóng chọn thủ công. Quy tắc sức chứa và giữ chỗ đồng thời chờ chốt. | [Client Brief, mục 5](../02-Client/Client-Brief.md) · [TV08, mục 5](../04-results/Week-2/TV08.md) |
| Định danh, chống trùng, chỉnh sửa, quyền truy cập và lưu dữ liệu | BTC và nhóm | Tên và email là bắt buộc. Chặn lượt gửi mới trùng email sau chuẩn hóa. Dữ liệu nằm trong bộ nhớ phiên trang. | [TV04, mục 6](../04-results/Week-2/TV04.md) · [TV08, mục 5](../04-results/Week-2/TV08.md) |
| Duyệt và giữ chỗ, mốc gửi thư, gửi lại và lựa chọn QR | BTC và nhóm kỹ thuật | Mặc định xác nhận tự động. Nhánh chờ duyệt chưa giữ chỗ, gửi biên nhận rồi gửi xác nhận sau thao tác duyệt mô phỏng. Thư xem trong hộp thư mô phỏng, dùng mã dạng văn bản. | [TV03, mục 5](../04-results/Week-2/TV03.md) · [TV10, A07–A10](../04-results/Week-2/TV10.md) |
| Ưu tiên, tiêu chí đánh giá và mẫu BID chính thức nếu có | Nhóm, hỏi giảng viên nếu cần rubric | Đối chiếu theo REG-01–REG-05. Rubric, ngưỡng thời gian gửi thư và chỉ tiêu vận hành chờ xác nhận. | [Assumptions, Q02](../03-Research/Assumptions.md) · [Board tuần 2](Board%20-%20week%202.md) |

## 5. Đối chiếu prototype

| Story | Màn hình và trạng thái thử |
| --- | --- |
| US-01 | **Chi tiết** · đang nhận hoặc đã đóng đăng ký |
| US-02 | **Đăng ký → Kết quả** · hợp lệ, thiếu trường, trùng email, gửi lặp |
| US-03 | **Đăng ký / Kết quả** · lỗi lưu và thử lại, chờ duyệt, đã xác nhận |
| US-04 | **Kết quả → Hộp thư mô phỏng** · biên nhận, thư xác nhận, lỗi gửi và gửi lại. Vé QR chờ xác nhận. |

Mở [prototype cục bộ](../prototype/dist/index.html) bằng trình duyệt, chọn **Đăng ký tham gia → Điền dữ liệu mẫu → Gửi đăng ký → Mở hộp thư mô phỏng**. Dùng **Kịch bản demo** để thử các nhánh. [Hướng dẫn và bảng kiểm](../prototype/README.md) · [Design system](../prototype/design-system.md) · [Bản chạy riêng tư trên Sites](https://force-dang-ky-demo-261118.astralchime12.chatgpt.site)
