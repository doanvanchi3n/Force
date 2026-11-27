---
title: Force — Truy vết từ nguồn đến story và prototype
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
author: Huỳnh Thanh Thuận
updated_at: 2026-11-27
---

# Traceability Matrix — Force

Các dòng là liên kết của **yêu cầu đề xuất**, không chứng nhận nhu cầu client hoặc test đã pass. [Knowledge sources](../../docs/knowledge/01-context-and-evidence.md) giải thích W1/W2/SRC; [Problem Statement](research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md) định nghĩa P-01…04; [assumptions](research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md) định nghĩa RD-A*. Không tạo mã bằng chứng mới cho suy luận của người soạn.

## Nguồn → yêu cầu → giao diện → kiểm tra

| FR | Nguồn / giới hạn | Rule | Epic / story / AC | Journey / surface | AD | Tình trạng prototype |
| --- | --- | --- | --- | --- | --- | --- |
| FR-01 | W1-TV01, P-04; thông tin sự kiện là giả định thử | BR-01 | E-01 / US-01 / AC-01.1…3 | UJ-01 / S01 | AD-1/6/8 | Có chi tiết; chưa có hạn mở/đóng đúng core |
| FR-02 | W2-TV04 Q10, W2-TV05; giới hạn/field chưa được client duyệt | BR-01/02/11/14 | E-01 / US-02 / AC-02.1/2/5 | UJ-01 / S02 | AD-1/2/3/6 | Có validate nhưng thêm MSSV/waitlist lệch core |
| FR-03 | W2-TV04 Q10: 6/8 trùng; không suy tỷ lệ VSC | BR-03/10 | E-01 / US-02 / AC-02.3/4 | UJ-01 / S02 | AD-2/3/5 | Chặn trùng demo khác core; chưa có transaction/concurrency thật |
| FR-04 | W2-TV05 Q4/Q6/Q10; RD-A04/07/10 chưa xác minh | BR-04/05 | E-01 / US-03 / AC-03.1…3 | UJ-01 / S03 | AD-2/5/6 | Có badge; có hình QR mô phỏng, không email thật |
| FR-05 | P-04, RD-A04; tác vụ tra cứu riêng cần kiểm chứng | BR-05/11/14 | E-01 / US-04 / AC-04.1…3 | UJ-02 / S04→03 | AD-4/5/6 | Có tìm bằng mã/MSSV demo; chưa bảo vệ hồ sơ như core |
| FR-06 | W2-TV05 Q7 là tình huống; RD-A05/09 chưa đo tác động | BR-05/06/10/11 | E-01 / US-05 / AC-05.1…3 | UJ-02 / S03/dialog | AD-2/3/5 | Có hủy; đang tự đôn waitlist, khác core |
| FR-07 | W2-TV03 vai trò sơ bộ; quyền là thiết kế KT | BR-09/14 | E-02 / US-06 / AC-06.1…3 | UJ-03/04 / bề mặt chưa dựng | AD-4/6/8 | Chưa có auth; toolbar chỉ mô phỏng |
| FR-08 | W2-TV04 Q10…15, P-01/02 | BR-09/11/14 | E-02 / US-07 / AC-07.1…3 | UJ-03 / S05/S06 | AD-1/4/6 | Có tìm/lọc/chọn fixture |
| FR-09 | W2-TV04 Q13…15, W2-TV05, RD-A02/08; chưa biết nguyên nhân | BR-07/09/10/11 | E-02 / US-08 / AC-08.1…4 | UJ-03 / S06 | AD-1/2/3/4 | Có chuyển state một tab, chưa có nhiều máy/camera |
| FR-10 | P-02, RD-A08; undo/lý do là giả định UX | BR-08/09/10/11 | E-02 / US-09 / AC-09.1…3 | UJ-03 / S06/dialog | AD-2/3/4 | Có dialog lý do; chưa có audit máy chủ |
| FR-11 | W2-TV04 Q16…19, P-03, RD-A03; chưa baseline | BR-09/10/12 | E-03 / US-10 / AC-10.1…3 | UJ-04 / S07 | AD-1/4/7 | Có tổng hợp, bản mở rộng tính thêm waitlist |
| FR-12 | W2-TV04 Q16…19; mẫu/cột xuất là giả định | BR-09/11/13/14 | E-03 / US-11 / AC-11.1…3 | UJ-04 / S07 | AD-4/6/7/8 | Có CSV 7 cột khác core 4 cột; chưa quyền thật |

## Bản thử TV03

[[prototype/README|Prototype đăng ký]] chạy S01–S03 bằng fixture. Đối chiếu mã PT trong [[USER_STORIES#Lát cắt TV03 — Bản thử đăng ký S01–S03]] và [[BUSINESS_RULES#Quy tắc phiên bản thử TV03]]. Các dòng phía trên mô tả workspace mockup V1.

| Story / FR | Rule · kiểm tra bản thử | Giao diện / bằng chứng | Phần cần kiểm chứng ở core |
| --- | --- | --- | --- |
| US-01 / FR-01 | BR-01, BR-D01 · PT-01.1–2 | S01 mở, đóng, CTA và khôi phục kịch bản | Cấu hình và chặn request tại máy chủ, sự kiện không tồn tại |
| US-02 / FR-02/03 | BR-02/03/04/11/14, BR-D01 · PT-02.1–4 | S02 lỗi trường, focus tóm tắt, chống trùng, gửi lặp, lỗi lưu và đối soát mô phỏng | Unique DB, request key và quyền replay, giao dịch, cạnh tranh nhiều thiết bị |
| US-03 / FR-04 | BR-04/05/11/14, BR-D01 · PT-03.1–3 | S03 trạng thái, mã, F5 cùng tab và đặt lại phiên | Đọc trạng thái từ máy chủ, quyền riêng và khôi phục qua thiết bị khác |

Nguồn của lát cắt gồm [[06-Planning/BID|BID]], [[docs/discovery/results/Week-2/TV03|Stakeholder Mapping]], [[docs/discovery/results/Week-3/review-TV08|ISSUE-12]] và [[VIBE_CODING_GUIDE#Bàn giao lát cắt TV03]]. Xem kết quả tại [[HANDOFF_CHECKS#Kiểm tra bổ sung của TV03]].

## Chất lượng và UX → nơi kiểm chứng

| Yêu cầu | Story chịu trách nhiệm chính | Bằng chứng cần để đạt |
| --- | --- | --- |
| NFR-01 | US-04/06, áp dụng US-05/07…11 | API test session hết hạn, sai owner, đổi event ID, quyền export/undo; toolbar không tính |
| NFR-02 | US-02/05/08/09 | DB integration: unique, receipt, optimistic version, rollback audit và race hai request |
| NFR-03 | US-02/04/05/07…11 | Mất phản hồi sau commit, retry cùng key, lỗi quyền và lỗi trước gửi được phân biệt |
| NFR-04 | US-01…11 theo surface | Bàn phím, focus/error/dialog, 360px/zoom 200%, màu và wrap; kiểm tra thật trước tuyên bố đạt |
| NFR-05 | US-02…11 | DTO/log/CSV không secret; kiểm tra rò dữ liệu, chốt OQ-03/06/08 |
| NFR-06 | Bootstrap US-01 và mỗi story có hạ tầng | Lệnh kiểm tra thật trong manifest, môi trường riêng, request ID, migration/restore; đóng OQ-09/10 trước pilot |
| UX-DR01/02/03 | US-01/02/03/04/07/08/10 | Token/AppShell/EventPanel/Button; FormField/ErrorSummary; StatusBadge/Notice/StatusTimeline |
| UX-DR04/05/06 | US-05/09; US-07/08; US-10/11 | ConfirmationDialog; FilterBar/ParticipantList/EmptyState; StatCard/ReportTable |
| UX-DR07/08 | Tất cả story; công cụ thử riêng | Focus/bàn phím/responsive; DemoToolbar/S08 ghi rõ fixture, không auth |

## Giữ nghĩa tài liệu BID và prototype riêng

[BID hiện có](../../06-Planning/BID.md) và [prototype đăng ký](../../prototype/README.md) có phạm vi riêng. Bộ core 27/11 **không ghi đè namespace hoặc coi mọi yêu cầu BID đã bị bỏ**.

| Mã ở BID | Quan hệ với bộ core mới | Điểm cần quyết định |
| --- | --- | --- |
| REG-01 / US-01 | FR-01 / US-01 | Giữ khả năng xem; mở/đóng cần OQ-04 |
| REG-02/03 / US-02 | FR-02/03 / US-02 | Giữ validate/chống trùng, thêm yêu cầu máy chủ/idempotency |
| REG-04 / US-03 | FR-04 / US-03 | Core đề xuất registered tức thì; pending là biến thể cần OQ-04 |
| REG-05 / US-04 cũ | Email mô phỏng có trong demo riêng; chưa có story gửi email thật trong core | RD-A07/10 còn mở; nếu nhóm chọn, thêm story/mốc gửi/lỗi/retry, không tự coi đã đáp ứng bởi US-04 mới |
| REG-06 / US-04 cũ | QR chưa được chốt; không nằm trong core | Hình giống QR trong mockups không chứng minh cơ chế cấp/quét vé |

Muốn kiểm tra lại một claim, quay về nguồn gốc và giới hạn trong knowledge; đừng đếm số tài liệu cùng nhắc nó thành số bằng chứng độc lập. [PROTOTYPES](ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md) ghi các khoảng trống hiện hành; [Vibe coding guide](VIBE_CODING_GUIDE.md) ghi điều kiện nhận story.
