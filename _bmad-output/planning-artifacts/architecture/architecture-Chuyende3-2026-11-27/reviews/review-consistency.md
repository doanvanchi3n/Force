---
title: Force — Rà soát tính nhất quán của contract kiến trúc
status: draft
updated: 2026-11-27
---

# Rà soát tính nhất quán

Reviewer độc lập nhận contract qua văn bản, không có filesystem tool; parent đối chiếu lại với [spine](../ARCHITECTURE-SPINE.md) và [companion](../ARCHITECTURE.md). Phạm vi là các chỗ hai người triển khai có thể chọn khác nhau, không phải code review ứng dụng.

1. **State và trường:** yêu cầu rõ command hợp lệ theo từng state, cách cập nhật checkedAt/version. Đã bổ sung bảng command/state; replay không tăng version, undo xóa checkedAt hiện tại và giữ audit cũ.
2. **Quyền hủy:** yêu cầu phân biệt chủ hồ sơ và BTC. Đã bổ sung actor–command: chủ hồ sơ hủy đúng đăng ký của mình; core chưa có BTC hủy hộ hoặc lý do hủy bắt buộc.
3. **Create nguyên tử:** yêu cầu tạo hồ sơ/receipt/audit cùng commit và scope khi chưa có principal. Đã ghi scope theo event/create/secretHash/key và phân biệt cùng lượt replay với lượt khác trùng email.
4. **Replay/version:** yêu cầu thứ tự không gây conflict cho retry thành công cũ. Đã khóa thứ tự quyền → receipt → version/state; fingerprint có expectedVersion và payload chuẩn hóa.
5. **Chuẩn hóa/mã:** yêu cầu thuật toán name/email và displayCode chung. Đã thêm ví dụ, giá trị lưu/xuất email và mã dựa ID DB, không cắt phần số.

Các sửa trên là đề xuất kiến trúc của bản nháp. Tính đúng của transaction/idempotency cần kiểm tra DB/API thật khi triển khai; chưa có bằng chứng runtime.
