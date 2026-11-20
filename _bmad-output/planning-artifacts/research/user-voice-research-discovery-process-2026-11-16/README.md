# Research & Discovery Process — Chuyende3 / Force

Bộ tài liệu tổng hợp bằng **BMAD Deep Recon — Process**, ngày 16/11/2026, từ
**TV01 tuần 1 và toàn bộ TV01–TV10 tuần 2**. Đọc [báo cáo tổng quan](research.md)
trước, sau đó mở phần cần dùng trong bảng dưới.

Đây là bản tổng hợp nghiên cứu để nhóm xem xét. Việc hoàn tất xử lý tài liệu không
đồng nghĩa đã xác nhận nhu cầu của VSC, hoàn thành khảo sát thực địa hoặc duyệt yêu
cầu sản phẩm. Những nội dung được xây dựng thêm đều có nhãn đề xuất/giả thuyết.

## Tài liệu chính

| Phần | Tài liệu | Mục đích |
| --- | --- | --- |
| Phương pháp | [Phạm vi và cách tổng hợp](brief.md) | Nguồn đầu vào, cách đọc bằng chứng và giới hạn |
| Tổng quan BMAD | [Research](research.md) | Kết luận, mức tin cậy và đầu vào cho bước tiếp theo |
| Template 1 | [Competitor Research](01-competitor-research.md) | Giải pháp hiện có và những điểm cần thử lại |
| Template 2 | [Stakeholder Mapping](02-stakeholder-mapping.md) | Vai trò, lợi ích và quyền quyết định cần xác nhận |
| Template 3 | [User Research](03-user-research.md) | Kết quả khảo sát khám phá và giới hạn mẫu |
| Template 4 | [User Persona](04-user-persona.md) | Chân dung làm việc, không phải cá nhân đã xác thực |
| Template 5 | [Problem Statement](05-problem-statement.md) | Vấn đề có căn cứ và phạm vi chưa biết |
| Template 6 | [Problem Canvas](06-problem-canvas.md) | Canvas dạng văn bản để thảo luận |
| Template 7 | [Customer Journey Map](07-customer-journey-map.md) | Hành trình giả thuyết để kiểm chứng |
| Template 8 | [Assumption & Hypothesis Validation](08-assumption-hypothesis-validation.md) | Giả định, cách kiểm tra và tiêu chí quyết định |
| Truy vết | [Sổ bằng chứng](09-evidence-register.md) | Mã nguồn, mâu thuẫn và mức độ sử dụng |
| Bàn giao | [Kế hoạch discovery tiếp theo](10-discovery-plan-and-handoff.md) | Việc cần xác minh trước khi chốt brief/PRD |

## Quy ước đọc

- **Được báo cáo:** nội dung có trong bài nguồn; chưa mặc nhiên là sự thật đã kiểm chứng độc lập.
- **Suy luận:** cách diễn giải từ các nguồn được dẫn; có thể thay đổi khi có bằng chứng mới.
- **Đề xuất/giả thuyết:** nội dung mới để nhóm xem xét hoặc kiểm thử, chưa phải quyết định đã duyệt.
- **Chưa biết:** nguồn chưa đủ để kết luận; không điền số liệu hoặc lời nói người dùng thay thế.

Mã `W1-TV01`, `W2-TV01`…`W2-TV10` định danh duy nhất từng báo cáo. Mã `SRC-*`
của bài gốc chỉ có ý nghĩa trong chính bài đó; khi nhắc lại phải kèm mã báo cáo.
Các tài liệu thành phần dẫn về nguồn qua [sổ bằng chứng](09-evidence-register.md).

## Hồ sơ xử lý

- `digests/`: bản trích xuất từng báo cáo, có vị trí nguồn và giới hạn của claim.
- [Manifest nguồn](imports/manifest.json): đường dẫn bản gốc, bản lưu và SHA-256.
- `imports/*.md.txt`: bản lưu nguyên byte của 11 bài nguồn. Phần mở rộng `.txt`
  giữ chúng như tài liệu thô; liên kết bên trong vẫn theo vị trí bài gốc. Dùng các
  liên kết ở sổ bằng chứng để mở bài gốc trong vault.
- [.memlog.md](.memlog.md): nhật ký quyết định và trạng thái claim.
- [claims.json](claims.json), [staleness.json](staleness.json): đầu vào và kết quả
  tính mốc cần kiểm tra lại; ngày đọc không thay thế ngày thu thập dữ liệu.

BMAD đọc `research.md` làm điểm vào. Bài gốc tại `docs/discovery/results/` được giữ
nguyên; bộ mới không thay trạng thái bài nộp, Miro, Issue hoặc PR của thành viên.

[Về mục lục dự án](../../../../docs/index.md)
