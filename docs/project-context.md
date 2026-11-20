# Bối cảnh dự án Chuyende3 / Force

Cập nhật cấu trúc ngày 16/11/2026. Đây là chỉ dẫn đọc tài liệu hiện có; không phải PRD đã được phê duyệt.

## Đề tài và trạng thái

- Nhóm gồm 10 thành viên, dùng Obsidian và Git để cộng tác.
- Từ tuần 2, đề tài chung là website hỗ trợ đăng ký và quản lý tham dự sự kiện cho câu lạc bộ sinh viên.
- Client tiềm năng là CLB Kỹ năng VKU (VSC). Tài liệu chung hiện vẫn ghi chưa xác nhận hợp tác và nhu cầu trực tiếp.
- Kho hiện chứa tài liệu discovery và kết quả nghiên cứu; chưa có ứng dụng, stack công nghệ được chốt, PRD hoặc kiến trúc được duyệt.
- Đã tổng hợp TV01 tuần 1 và toàn bộ tuần 2 thành [bộ Research & Discovery theo BMAD](../_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/README.md) ngày 16/11/2026. Hoàn tất xử lý tài liệu không đồng nghĩa đã xác minh nhu cầu client; canvas/journey mới có nhãn bản nháp/giả thuyết.
- [Design System & Prototypes V1](../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/README.md) là workspace UX đang dùng từ 18/11/2026. Người dùng chọn Campus Friendly + Bento Grid, Blue/Orange/White; token và chi tiết vẫn là bản nháp. HTML minh họa không phải stack ứng dụng hoặc xác nhận phạm vi sản phẩm.
- Việc tổ chức lại thư mục và cài BMAD không thay đổi trạng thái bài làm, Issue, PR hay xác nhận của client.

## Đọc trước khi chạy workflow

1. [Client Brief](discovery/client/Client-Brief.md) và [Problem Statement](discovery/research/Problem-Statement.md).
2. [Research Log](discovery/research/Research-Log.md) và [Assumptions](discovery/research/Assumptions.md).
3. [Board tuần 2](planning/Board%20-%20week%202.md) và các bài TV01–TV10 được liên kết ở đó.
4. [Working Agreement](team/Working-Agreement.md) để hiểu quy trình đọc chéo.
5. [Research tổng quan BMAD](../_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/research.md) để dùng kết luận đã đối chiếu và các giới hạn trước bước lập kế hoạch tiếp theo.

Mỗi bài có thể đang ở trạng thái khác nhau; đọc nội dung và bằng chứng thay vì suy ra đã hoàn thành từ tên file.

## Quy ước cho đầu ra mới

- Viết bằng tiếng Việt; dùng thuật ngữ gốc khi cần.
- Phân biệt dữ kiện, suy luận, giả định và câu hỏi chưa được trả lời. Giữ mã nguồn `SRC-*` để truy ngược bằng chứng.
- Kết quả khảo sát khám phá không tự chứng minh nhu cầu của VSC. Không tự tạo phỏng vấn, xác nhận, ngày khảo sát hoặc KPI.
- Bộ 8 template tuần 2 nằm tại [Link template](templates/Link%20template.md); giữ đúng phạm vi bài tập của nhóm.
- Tri thức nguồn: `docs/`; đầu ra lập kế hoạch: `_bmad-output/planning-artifacts/`; đầu ra triển khai: `_bmad-output/implementation-artifacts/`.
- Quyết định chưa được thống nhất phải ghi rõ là đề xuất hoặc bản nháp.
