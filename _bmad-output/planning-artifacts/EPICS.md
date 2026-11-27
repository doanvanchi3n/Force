---
title: Force — Epics theo giá trị người dùng
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
stepsCompleted: [requirements-extracted, epics-drafted, stories-drafted, coverage-checked]
inputDocuments:
  - prds/prd-Chuyende3-2026-11-27/prd.md
  - BUSINESS_RULES.md
  - architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE-SPINE.md
  - ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md
  - ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md
---

# Epics — Force

Ba epic, 11 story, soạn theo yêu cầu tạo cả bộ ngày 27/11. Đây là decomposition nháp, **chưa ready-for-dev hoặc được client duyệt**. [User Stories](USER_STORIES.md) là nơi giữ AC; không sao chép toàn bộ AC sang epic. Tên tệp tách riêng theo bảng người dùng thay cho `epics.md` gộp mặc định của workflow.

## Requirements Inventory

FR-01 xem sự kiện; FR-02 gửi hợp lệ; FR-03 chống trùng/gửi lặp; FR-04 kết quả/trạng thái; FR-05 tìm lại riêng; FR-06 hủy; FR-07 quyền BTC; FR-08 danh sách/tìm/lọc; FR-09 check-in; FR-10 hoàn tác; FR-11 tổng hợp; FR-12 preview/export. Định nghĩa đầy đủ tại [PRD](prds/prd-Chuyende3-2026-11-27/prd.md).

NFR-01 quyền theo sự kiện; NFR-02 toàn vẹn đồng thời; NFR-03 phục hồi; NFR-04 UX/accessibility; NFR-05 dữ liệu tối thiểu; NFR-06 vận hành. [Architecture spine](architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE-SPINE.md) đề xuất phân lớp, một nơi sở hữu trạng thái, mutation/audit trong giao dịch và contract dùng chung. Bootstrap chỉ làm sau chọn stack; không tạo toàn bộ schema trước mọi story.

## Yêu cầu UX cần đưa vào từng lát cắt

- **UX-DR01 — Khung và sự kiện:** AppShell, EventPanel, Button; token Blue/Orange/White, Campus Friendly/Bento; mobile theo thứ tự đọc, không thêm catalogue.
- **UX-DR02 — Form:** FormField và ErrorSummary, label/helper/error liên kết, giữ giá trị khi sai, focus summary sau submit lỗi.
- **UX-DR03 — Kết quả:** StatusBadge, Notice, StatusTimeline; chữ phân biệt ba trạng thái, live region không đọc lại bảng.
- **UX-DR04 — Xác nhận:** ConfirmationDialog, Escape an toàn, focus trap/trả focus, lỗi lý do tại trường.
- **UX-DR05 — Vận hành:** FilterBar, ParticipantList, EmptyState; chọn người khác ghi nhận, bộ lọc giữ ngữ cảnh, mobile xếp dọc.
- **UX-DR06 — Báo cáo:** StatCard, ReportTable; số 0 có nhãn, preview/tệp cùng dữ liệu, tỷ lệ có mẫu số.
- **UX-DR07 — Chất lượng dùng chung:** bàn phím, focus nhìn thấy, wrap email/mã, zoom 200%, khung 360px, reduced motion. Button/input mục tiêu 44px theo DESIGN.
- **UX-DR08 — Công cụ thử:** DemoToolbar và S08 chỉ dùng fixture/mô phỏng; không đưa vào cơ chế đăng nhập sản phẩm.

Đủ 15 tên component của UX contract được nêu trên. DR08 là công cụ kiểm nghiệm xuyên story, không phải yêu cầu sản phẩm mới. [PROTOTYPES](ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md) ghi độ phủ và phần lệch thực tế.

## Epic List

### E-01 — Sinh viên đăng ký và biết trạng thái của mình

Kết quả: đọc sự kiện, gửi một hồ sơ, biết trạng thái, tìm lại và hủy trong điều kiện đã chốt. **FR-01…06; US-01…05; UJ-01/02.** UX-DR01/02/03/04/07/08. Chạy trọn lát cắt đầu tiên mà không cần E-02/03; dùng sự kiện cấu hình trước. Cơ chế quyền chủ hồ sơ phải có trong lát cắt, không đợi đăng nhập BTC.

### E-02 — BTC đối chiếu và ghi nhận đúng người tại cửa

Kết quả: vào đúng sự kiện được phân công, tìm hồ sơ, ghi nhận một lần và sửa nhầm có dấu vết. **FR-07…10; US-06…09; UJ-03.** UX-DR03/04/05/07/08. Dùng đăng ký E-01; không cần báo cáo E-03 để làm việc. Ranh giới rủi ro riêng là quyền nhân sự và cập nhật đồng thời tại cửa.

### E-03 — BTC tổng hợp và lấy đúng đầu ra báo cáo

Kết quả: số đếm khớp hồ sơ và CSV khớp preview/phạm vi cho phép. **FR-11/12; US-10/11; UJ-04.** UX-DR03/05/06/07/08. Dùng dữ liệu E-01/02; không tự ghi trạng thái để sửa số liệu. Ranh giới rủi ro riêng là dữ liệu xuất và snapshot báo cáo.

## FR Coverage Map và thứ tự

| FR | Epic | Story |
| --- | --- | --- |
| FR-01 | E-01 | US-01 |
| FR-02, FR-03 | E-01 | US-02 |
| FR-04 | E-01 | US-03 |
| FR-05 | E-01 | US-04 |
| FR-06 | E-01 | US-05 |
| FR-07 | E-02 | US-06; áp dụng US-07…11 |
| FR-08 | E-02 | US-07 |
| FR-09 | E-02 | US-08 |
| FR-10 | E-02 | US-09 |
| FR-11 | E-03 | US-10 |
| FR-12 | E-03 | US-11 |

Làm US-01 → 02 → 03 → 04 → 05; rồi US-06 → 07 → 08 → 09; rồi US-10 → 11. Mỗi story chỉ phụ thuộc story trước; chốt scope và OQ liên quan trước khi thực thi. Bootstrap starter là tác vụ kỹ thuật bên trong US-01 sau chọn stack, không là epic “xây database/API/UI” riêng. Mỗi story chỉ tạo dữ liệu và module nó thực sự cần.

## Backlog khám phá, chưa kéo vào sprint

MSSV, chờ duyệt, hạn mở/đóng chi tiết, sức chứa/hàng chờ/đôn chỗ, QR/camera thật, gửi email, tài khoản sinh viên, tạo/danh mục sự kiện, báo cáo điểm rèn luyện, đồng bộ offline. Đây là câu hỏi/biến thể, chưa có AC hoặc story cam kết; chỉ mở story mới sau quyết định có nguồn. [OQ-01…10](../../docs/knowledge/04-decisions-and-open-questions.md) ghi điều kiện đóng.

[Traceability](TRACEABILITY_MATRIX.md) · [Hướng dẫn giao việc](VIBE_CODING_GUIDE.md)
