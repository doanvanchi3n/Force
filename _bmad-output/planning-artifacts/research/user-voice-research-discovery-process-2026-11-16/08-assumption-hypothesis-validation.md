# 08 — Assumption & Hypothesis Validation

**Trạng thái: sổ giả định được chuẩn hóa và kế hoạch kiểm chứng đề xuất.** TV10
có kết luận `Supported`/`Invalidated`, nhưng một số kết luận vượt phạm vi câu hỏi
hoặc dựa vào tài liệu chưa hoàn thành. Bộ mới đánh giá lại mức bằng chứng, không
ghi nhận đã chạy thêm thử nghiệm.

## Sổ giả định

`RD-A*` là mã mới của bộ này. Cột đối chiếu giữ mã TV10 để truy vết, không sửa hoặc
đồng nhất mã trùng ở tuần 1/TV08. Trong TV08, A03/A04 còn đổi nghĩa giữa §3.4 và §5.

| Mã mới | Giả định và mã TV10 | Bằng chứng hiện có | Trạng thái dùng trong bộ mới | Cách kiểm chứng/điểm quyết định đề xuất |
| --- | --- | --- | --- | --- |
| RD-A01 | VSC cần giải pháp thay/đổi cách dùng Forms/Sheets — A01 | Định hướng tuần 1 và mẫu khám phá; chưa xác nhận công cụ VSC | Chưa xác minh | Đại diện/người vận hành nêu được khó khăn cụ thể; so cùng tác vụ với cải tiến quy trình/công cụ trước khi chọn xây mới |
| RD-A02 | Cách check-in hiện tại gây chậm/sót tên — A02 | TV04/05 có người báo sự cố; chưa tách theo phương thức hoặc nguyên nhân | Có tín hiệu về khó khăn, chưa xác minh nguyên nhân/độ phổ biến | Quan sát cùng sự kiện, phân loại ca thường/ngoại lệ, thời gian, công cụ; không suy cứ có lỗi là cần QR |
| RD-A03 | Đối chiếu sau sự kiện tốn nhiều công sức có thể giảm — A03 | TV04 có 4/8 báo tổng hợp/báo cáo >2 giờ; chưa tách thời gian làm sạch/đối chiếu | Có tín hiệu, chưa có baseline tác vụ | Đo công việc thực tế và nguồn thời gian; so phương án trên cùng đầu ra báo cáo |
| RD-A04 | Sinh viên cần tài khoản web để quản vé/lịch sử — A04 | TV05 Q6 chỉ hỏi kênh thích nhận vé/QR; không hỏi các tác vụ tài khoản | **Chưa kiểm chứng, chưa bác bỏ** | Xác định tác vụ cần làm, thử cách có/không tài khoản; chỉ chọn tài khoản nếu có lợi ích và người dùng chấp nhận công sức |
| RD-A05 | Vắng không báo gây tác động đáng kể — A05 | TV04 tự thuật; TV05 Q7 là tình huống “nếu bận” | Chưa có tỷ lệ vắng thực tế hoặc tác động định lượng | Đối chiếu đăng ký hợp lệ/hủy/check-in cùng sự kiện; phỏng vấn lý do vắng và tác động, không dùng 3/6 làm tỷ lệ no-show |
| RD-A06 | VSC sẵn sàng cho thử tại một sự kiện — A06 | Chưa có xác nhận trong corpus | Chưa xác minh, phụ thuộc quan trọng | Ghi đầu mối, phạm vi, điều kiện dữ liệu và người vận hành đồng ý; chưa có thì chưa coi VSC là pilot đã chốt |
| RD-A07 | Email phù hợp hơn kênh khác để nhận vé/QR — A07 | 5/6 thích email, 1/6 chat, 0/6 App/Web ở TV05 Q6 | Tín hiệu sở thích trong mẫu; chưa xác nhận hành vi nhận/tìm lại | Thử nhận và tìm lại thông tin với đối tượng thật; không suy từ sở thích thành yêu cầu gửi tự động hoặc bỏ mọi web |
| RD-A08 | QR và phương án dự phòng đáp ứng điều kiện tại cửa — A08 | TV04/05 báo lỗi mạng/thiết bị; chưa có thử kỹ thuật | Chưa xác minh | Sau khi chọn quy tắc định danh, thử mạng yếu, mất mã, trùng mã, không tên, sửa nhầm và đối soát; chưa mặc định MSSV/local cache |
| RD-A09 | Cách báo hủy đơn giản làm tăng báo hủy — A09 | TV10 đề xuất nút hủy trong email; không có thử nghiệm | Chưa xác minh | Thử tác vụ hủy trước; muốn kết luận tăng báo hủy phải có baseline/đối chứng phù hợp và đủ dữ liệu sự kiện |
| RD-A10 | Email không đến được hộp thư ảnh hưởng nhận mã — A10 | Rủi ro TV10 đề xuất, không có log gửi | Chưa xác minh | Nếu chọn email, kiểm tra gửi/nhận/tìm lại và xử lý không nhận; không đồng nhất gửi thành công với vào Inbox |

Nguồn: [TV10 §2–7](../../../../docs/discovery/results/Week-2/TV10.md),
[TV04](09-evidence-register.md#w2-tv04), [TV05](09-evidence-register.md#w2-tv05),
[TV08](09-evidence-register.md#w2-tv08). Ưu tiên đề xuất: RD-A01/RD-A06 trước,
sau đó RD-A02/RD-A03; các giả thuyết giải pháp chỉ thử khi đã chọn vấn đề và tác vụ.

## Đối chiếu ba phép kiểm chứng H1–H3 của TV10

| ID nguồn | Phát biểu/ngưỡng trong nguồn | Vấn đề của phép đo | Kết luận được giữ trong bộ mới |
| --- | --- | --- | --- |
| TV10-H1 | ≥40% sinh viên gặp khó tra cứu/check-in; nếu đạt thì ưu tiên QR | Số đếm tự thuật không đo tắc cửa, không tách thủ công/QR, không thử hiệu quả QR; mẫu n=6 không đại diện | Có tín hiệu khó khăn; chưa xác minh mức phổ biến hoặc chọn giải pháp |
| TV10-H2 | ≥50% BTC mất >1 giờ lọc trùng/đối chiếu; ngưỡng vận hành đổi thành lỗi **hoặc** tốn thời gian | TV04 Q18 đo toàn bộ tổng hợp/báo cáo theo khoảng, không đo riêng đối chiếu >1 giờ; TV10 ghi 4/8 trùng/sai không khớp số đếm gốc 6/8 và 5/8 | Chưa kiểm tra được mệnh đề thời gian; không dùng để chốt đồng bộ real-time |
| TV10-H3 | Muốn tạo tài khoản, ngưỡng >60%; dưới 40% và đa số email thì bỏ portal | Q6 đo kênh nhận vé, không đo tài khoản/lịch sử; thiếu quy tắc dải giữa; chưa rõ ngưỡng có đặt trước khi đọc kết quả không | 0/6 chọn kênh App/Web không bác bỏ nhu cầu mọi tác vụ portal |

Nguồn: [TV10 §3–4](../../../../docs/discovery/results/Week-2/TV10.md),
[TV04 §3/6](../../../../docs/discovery/results/Week-2/TV04.md),
[TV05 §3/6](../../../../docs/discovery/results/Week-2/TV05.md).
Các ngưỡng nguồn được giữ để giải thích cách diễn giải; bộ mới không sử dụng lại
chúng làm tiêu chí đạt hoặc KPI sản phẩm.

## Thiết kế vòng kiểm chứng tiếp theo

| Thử nghiệm đề xuất | Đối tượng/phương pháp | Thước đo hoặc bằng chứng | Quy tắc quyết định |
| --- | --- | --- | --- |
| Xác nhận vấn đề và khả năng hợp tác | Đại diện VSC + người vận hành; mô tả một sự kiện gần nhất, đối chiếu tài liệu được phép dùng | Khó khăn cụ thể, hậu quả, cách khắc phục, người quyết định và điều kiện thử | Có vấn đề và khả năng tiếp cận thì thiết kế nghiên cứu tiếp; chưa có thì giữ phạm vi giả định hoặc tìm đối tượng phù hợp |
| Đo hiện trạng đăng ký–check-in–báo cáo | Một quy trình/sự kiện được chọn rõ; quan sát cả ca thường và ngoại lệ | Bản ghi trùng/sai trên tổng kiểm tra, số ca không tên, thời gian xử lý theo loại ca, thời gian làm báo cáo thực tế | Xác định điểm tốn công/lỗi có thể tác động; nếu không thấy thì không tuyên bố đã xác minh, ghi giới hạn quan sát |
| Thử tra cứu xác nhận/trạng thái và hủy | Người tham gia phù hợp; giao cùng tác vụ, không gợi ý đáp án | Hoàn thành/không, trợ giúp, lỗi, thời gian, lý do lựa chọn | Tìm nhu cầu và nguyên nhân khó; không suy tỷ lệ toàn trường từ thử nghiệm khám phá |
| So sánh phương án | Cùng dữ liệu/tác vụ/điều kiện trên quy trình cải tiến, công cụ có sẵn và bản thử nếu cần | Kết quả đúng, lỗi, thời gian, công việc vận hành và trải nghiệm | Chọn phương án theo tiêu chí đã thống nhất **trước khi chạy**; nếu chưa có khác biệt rõ thì giữ kết luận chưa đủ bằng chứng |

Chưa đặt số người hay ngưỡng giảm thời gian cố định cho các thử nghiệm trên vì
chưa có baseline, sự kiện và khả năng tuyển mẫu. Trước khi chạy, phải ghi kế hoạch
với mẫu, điều kiện, định nghĩa chỉ số và tiêu chí đạt/không đạt/chưa kết luận; khi
thiết kế chưa đủ để kiểm tra mệnh đề, kết quả vẫn là **chưa kết luận**.

TV10 đề xuất thử 20 email nhưng chưa có kết quả. Nếu tiếp tục ý tưởng này, 20 là
cỡ thử dự kiến trong nguồn, không phải dữ liệu đã thu hoặc ngưỡng đủ chứng minh
khả năng gửi cho mọi người dùng.

[Kế hoạch bàn giao](10-discovery-plan-and-handoff.md) · [Sổ bằng chứng](09-evidence-register.md) · [Mục lục](README.md)
