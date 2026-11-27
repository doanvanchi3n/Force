# Tài liệu lập kế hoạch

BMAD dùng thư mục này cho đầu ra được cấu hình bởi `planning_artifacts`:
product brief, PRD, UX, kiến trúc và các tài liệu liên quan. Workflow quyết định
tên file và thư mục con; giữ quy ước của bản BMAD đang cài.

## Bộ bàn giao ngày 27/11/2026

Điểm đọc chính: [Knowledge Index](../../docs/knowledge/KNOWLEDGE_INDEX.md). Bộ được soạn theo yêu cầu tạo trọn bảng đầu ra, kết hợp BMAD và UI UX Pro Max ở vai trò hỗ trợ UX. Các tài liệu là **draft / approval pending**; chưa chốt nghiệp vụ VSC, chưa triển khai core.

- [PRD](prds/prd-Chuyende3-2026-11-27/prd.md): 12 FR, 6 NFR và giả định/phạm vi.
- [BUSINESS_RULES](BUSINESS_RULES.md): 14 rule đề xuất và state machine core.
- [EPICS](EPICS.md), [USER_STORIES](USER_STORIES.md): 3 epic, 11 story, AC và dependency.
- [TRACEABILITY_MATRIX](TRACEABILITY_MATRIX.md): nguồn → rule → story/AC → surface → AD; giữ nghĩa BID/REG cũ.
- [DESIGN](ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md), [EXPERIENCE](ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md), [PROTOTYPES](ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md): workspace đang dùng và độ phủ từng story, kèm DX-01…08 còn lệch.
- [ARCHITECTURE](architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE.md), [spine](architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE-SPINE.md): candidate stack đơn giản và bất biến chia sẻ giữa các epic.
- [VIBE_CODING_GUIDE](VIBE_CODING_GUIDE.md): điều kiện nhận việc và prompt giao từng story; tham chiếu [AGENTS](../../AGENTS.md).
- [HANDOFF_CHECKS](HANDOFF_CHECKS.md): kiểm tra liên kết/độ phủ và giới hạn kiểm chứng của lần bàn giao.

`bmad-agent-po`, `bmad-ingest`, `bmad-shard-pro` không có trong bản cài. [Bảng điều chỉnh skill](../../docs/knowledge/KNOWLEDGE_INDEX.md#chuyển-bảng-yêu-cầu-sang-skill-hiện-có) chỉ rõ cách thực hiện bằng công cụ hiện có; không cài thêm skill hoặc đổi snapshot/upstream để giả lập các lệnh đó.

## Đầu vào và các bản trước

Đã tạo [bộ Research & Discovery Process](research/user-voice-research-discovery-process-2026-11-16/README.md)
bằng BMAD Deep Recon — Process, từ TV01 tuần 1 và toàn bộ tuần 2. Bộ gồm báo cáo
tổng quan, tám phần nghiên cứu, sổ bằng chứng và kế hoạch kiểm chứng tiếp theo.

Tiếp theo là [Design System & Prototypes — bản nháp V1](ux-designs/ux-Chuyende3-2026-11-18/README.md),
gồm `DESIGN.md`, `EXPERIENCE.md` và bản HTML tương tác để nhóm xem xét. Các lựa
chọn thị giác và nghiệp vụ trong bản nháp chưa được xác nhận với VSC.

Chưa có Product Brief, PRD, UX contract hoặc kiến trúc được duyệt. Bộ tổng hợp
nghiên cứu vẫn giữ những nhu cầu chưa xác minh ở dạng giả định; dùng
[nghiên cứu của nhóm](../../docs/index.md) và kết luận có nguồn khi tạo đầu ra mới.
