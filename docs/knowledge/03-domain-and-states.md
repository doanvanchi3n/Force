---
title: Force — Từ vựng và trạng thái
status: draft
updated: 2026-11-27
tags: [force, domain]
---

# Từ vựng và trạng thái

**Sự kiện** chứa thông tin lịch/địa điểm; **đăng ký** là một hồ sơ trong một sự kiện; **tham dự** là kết quả check-in, khác đăng ký. **Mã hiển thị** giúp đối chiếu; **quyền truy cập hồ sơ** phải được chứng minh riêng khi viết ứng dụng thật. Mã tuần tự `FORCE-*` hoặc MSSV không phải bí mật xác thực.

Core đề xuất giữ ba trạng thái theo UX contract: `registered` = Đã đăng ký/chờ check-in; `checked` = Đã tham dự; `cancelled` = Đã hủy. Quy tắc chi tiết và ID có thẩm quyền tại [Business Rules](../../_bmad-output/planning-artifacts/BUSINESS_RULES.md); không định nghĩa một state machine thứ hai ở đây.

## Hai prototype cần phân biệt

- [Bản UX Campus Friendly](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/mockups/index.html): điểm tham chiếu thị giác đang dùng. Mã hiện hành đã có phần mở rộng MSSV, `waitlist`, đôn chỗ và hình giống QR; các phần này lệch contract V1, được ghi ở [PROTOTYPES](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md). Không dùng để tự chốt nghiệp vụ.
- [Prototype đăng ký cũ](../../prototype/README.md): US-01…04 / REG-* riêng, có hộp thư mô phỏng và chờ duyệt. Không phải namespace story mới; email/chờ duyệt của demo cũ không mặc nhiên nằm trong core mới.

`waitlist` và `pending` là các biến thể đang thử ở hai nơi, chưa được gộp vào ba trạng thái core. Tỷ lệ `checked / (registered + checked)` chỉ là tỷ lệ trên đăng ký còn hiệu lực tại thời điểm đọc, không phải no-show hoặc chỉ số tác động đã đo.

[Chỉ mục](KNOWLEDGE_INDEX.md) · [Traceability](../../_bmad-output/planning-artifacts/TRACEABILITY_MATRIX.md)
