---
title: Force — Chỉ mục tri thức và bàn giao sản phẩm
status: draft
created: 2026-11-27
updated: 2026-11-27
tags: [force, knowledge, handoff]
---

# Knowledge Index — Force

Bộ này nối nghiên cứu với yêu cầu, story, UX và kiến trúc cho website đăng ký và quản lý tham dự sự kiện CLB sinh viên. Đây là **bản nháp để nhóm xem xét**, không phải xác nhận nghiệp vụ của VSC. Hồ sơ nghiên cứu ngày 16/11 có 14 claim `unverified`, 0 `verified`; lần biên soạn này không đổi trạng thái đó.

## Đường đọc theo công việc

1. Hiểu client và giới hạn bằng chứng: [Bối cảnh và nguồn](01-context-and-evidence.md).
2. Hiểu vấn đề, vai trò và luồng: [Vấn đề và người dùng](02-problems-and-journeys.md).
3. Hiểu trạng thái và quy tắc: [Từ vựng nghiệp vụ](03-domain-and-states.md), [Business Rules](../../_bmad-output/planning-artifacts/BUSINESS_RULES.md).
4. Chọn lát cắt cần làm: [PRD](../../_bmad-output/planning-artifacts/prds/prd-Chuyende3-2026-11-27/prd.md), [Epics](../../_bmad-output/planning-artifacts/EPICS.md), [User Stories](../../_bmad-output/planning-artifacts/USER_STORIES.md).
5. Xem UI của từng story: [Prototypes](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md), [Design](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md), [Experience](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md).
6. Chuẩn bị code: [Architecture](../../_bmad-output/planning-artifacts/architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE.md), [hướng dẫn giao việc](../../_bmad-output/planning-artifacts/VIBE_CODING_GUIDE.md), [AGENTS](../../AGENTS.md).
7. Đối chiếu nguồn và phần còn thiếu: [Traceability](../../_bmad-output/planning-artifacts/TRACEABILITY_MATRIX.md), [quyết định còn mở](04-decisions-and-open-questions.md).

## Chuyển bảng yêu cầu sang skill hiện có

- User story: dùng `bmad-create-epics-and-stories`. `bmad-agent-po` không có trong bản cài; không gọi lệnh giả. Skill tạo epics/stories vẫn đang có, không coi là đã nghỉ dùng chỉ vì bảng gốc ghi “bản cũ”.
- Knowledge/vault: đọc nguồn, giữ mã SRC/W2, tạo chỉ mục và chia theo chủ đề như thư mục này. `bmad-ingest` và `bmad-shard-pro` không có; việc chia tài liệu không cần cài thêm workflow.
- Rules: `bmad-prd` xác định khả năng và giới hạn; `BUSINESS_RULES.md` là tài liệu đồng hành được yêu cầu thêm, không giả định là tên đầu ra mặc định của skill.
- UX/prototype: cập nhật workspace `ux-Chuyende3-2026-11-18` qua `bmad-ux`; `ui-ux-pro-max` chỉ bổ trợ lỗi form/focus, không thay hướng thị giác đã chọn.
- Chuẩn bị code: `bmad-architecture` tạo spine và bản giải thích `ARCHITECTURE.md`; `bmad-project-context` bổ sung điểm đọc vào AGENTS hiện có. Chưa triển khai ứng dụng hoặc xuất bản website.

## Cách duy trì kho

Nguồn gốc nằm ở `docs/discovery/`; bộ research tổng hợp giữ nguyên tại [workspace research](../../_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/README.md). Các trang knowledge là bản đồ đọc, không phải bản sao mọi bài làm. Mỗi ghi nhận mới cần nêu nguồn, loại bằng chứng, giới hạn và liên kết tới rule/story bị ảnh hưởng.

Phân biệt **dữ kiện tài liệu**, **tín hiệu tự báo cáo**, **suy luận**, **giả định thiết kế**, **yêu cầu đề xuất** và **quyết định đã chọn**. Chỉ ghi client đã duyệt khi có phản hồi thật và người xác nhận. Mã `US-*` mới chỉ có nghĩa trong bộ 27/11; mã giống ở prototype cũ không tự tương đương.

Sau sửa đường dẫn hoặc tài liệu, chạy `python3 scripts/check-doc-links.py`. Không chuyển trạng thái bài tập, Issue hoặc PR vì đã tạo bộ tài liệu này.
