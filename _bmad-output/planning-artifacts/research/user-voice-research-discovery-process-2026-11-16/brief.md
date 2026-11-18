---
topic: Research & Discovery Process — Chuyende3
type: user-voice
intent: process
created: 2026-11-16
document_language: vi
status: complete
evidence_status: imported-unverified
---

# Phạm vi và phương pháp tổng hợp

## Câu hỏi cần trả lời

Tài liệu tuần 1–2 đang cung cấp bằng chứng gì về việc đăng ký và quản lý tham dự
sự kiện CLB sinh viên, những kết luận nào còn là giả định, và cần xác minh gì trước
khi nhóm chốt định hướng sản phẩm?

Đầu ra là một bộ Markdown mới theo tám template tuần 2, có báo cáo tổng quan để
BMAD dùng ở bước tiếp theo. Phạm vi do người dùng chỉ định: **một bài TV01 tuần 1
và mười bài TV01–TV10 tuần 2**. Các bài tuần 1 khác không được dùng làm bằng chứng.

## Cách xử lý

1. Lưu nguyên nội dung từng báo cáo và checksum trong [manifest](imports/manifest.json).
2. Trích từng nguồn riêng vào `digests/`: claim, vị trí nguồn, tác giả/nhà xuất bản,
   ngày nguồn, ngày đọc, loại claim và mức tin cậy.
3. Đối chiếu báo cáo trực tiếp với các bài tổng hợp. Việc một kết quả được TV06,
   TV07 hoặc TV10 nhắc lại không tạo thêm người trả lời hay nguồn độc lập.
4. Tổng hợp theo tám template. Phần mới chưa có trong nguồn được ghi rõ là đề
   xuất hoặc giả thuyết và dẫn về căn cứ đã dùng.
5. Kiểm tra truy vết, đối chiếu các kết luận chính với nguồn và kiểm tra liên kết.

## Giới hạn của lần xử lý

- Đây là xử lý hồ sơ nghiên cứu đã có, không phải một đợt tuyển mẫu, phỏng vấn hay
  quan sát mới. Không truy cập các bảng dữ liệu khảo sát bên ngoài hoặc thực hiện
  lại thao tác trên sản phẩm đối thủ.
- Các URL bên ngoài được giữ làm nguồn mà báo cáo dẫn; ngày đọc hồ sơ không phải
  ngày đã kiểm chứng URL, tính năng hay giá của nhà cung cấp.
- Con số khảo sát chỉ được dùng trong đúng mẫu và điều kiện của báo cáo. Không
  cộng mẫu giữa các bài khi chưa biết có trùng người; không suy rộng ra toàn VSC.
- Trạng thái `Done`/`Review`, checkbox và lời nhận xét đọc chéo được tách khỏi
  mức đầy đủ của bằng chứng. Bản mới không sửa trạng thái bài nguồn.
- Ngày lập/cập nhật báo cáo không tự xác định ngày thu thập dữ liệu. Chỗ chưa biết
  được giữ là chưa biết; mốc kiểm tra lại chỉ là lịch làm mới đề xuất.
- Các tiêu chí kiểm thử trong bộ mới là đề xuất cho vòng discovery tiếp theo,
  không phải kết quả đo, KPI cam kết hay yêu cầu đã được khách hàng phê duyệt.

## Cách dùng trong BMAD

`research.md` là đầu vào nghiên cứu cho Product Brief/PRD. Các file 01–08 là tài
liệu làm việc chi tiết; persona, canvas và journey cần tiếp tục kiểm chứng. Khi
có lựa chọn được chấp nhận, ghi quyết định vào workflow đang chạy. Bộ này chưa
chốt giao diện, kiến trúc hoặc stack ứng dụng.

Trạng thái `complete` trong báo cáo nghĩa là **đã hoàn tất tổng hợp corpus đã
chọn**. Trạng thái bằng chứng vẫn là `imported-unverified`; việc kiểm tra trích
dẫn đúng nguồn không được nâng thành xác minh độc lập về thực tế.

[Về mục lục bộ tài liệu](README.md)
