---
title: Force — Kiểm tra spine theo rubric
status: draft
updated: 2026-11-27
---

# Kiểm tra spine theo rubric

Parent đối chiếu [ARCHITECTURE-SPINE](../ARCHITECTURE-SPINE.md) sau nhận xét consistency và source reconciliation. Đây là kiểm tra tác giả, không tuyên bố reviewer độc lập đã đọc toàn bộ file.

- Paradigm và hướng phụ thuộc rõ; 8 AD có Binds/Prevents/Rule; không tạo dịch vụ riêng cho từng epic.
- Ownership/state, uniqueness, idempotency/concurrency, quyền BTC/chủ hồ sơ, DTO/lỗi và snapshot report đều có invariant. Contract companion làm rõ phần dùng chung, không giao mỗi story tự quyết.
- 12 FR được nối E-01…03 và nơi xử lý; NFR quyền/toàn vẹn/phục hồi/dữ liệu/vận hành được phủ. Phân lớp/seed là đề xuất cho greenfield, không giả định HTML demo là kiến trúc ứng dụng.
- Môi trường, dữ liệu, credential, logging, migration/restore có quy tắc; hosting/retention/quy mô/SLO được đặt OQ và chặn pilot thay vì để im lặng.
- Công nghệ là candidate có nguồn; pin và bootstrap được để tại OQ-02 có điều kiện đóng. Không có version pin hư cấu.
- Lint cơ học sau sửa trả `ok: true`, 0 finding. Lint không chứng minh transaction, bảo mật hoặc hiệu năng.

Kết quả: cấu trúc bản nháp đủ để thảo luận và lựa chọn lát cắt; chưa đủ gọi toàn bộ backlog ready-for-dev khi scope/OQ và các bề mặt UX còn chưa chốt.
