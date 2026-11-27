---
title: Force — Quyết định và câu hỏi còn mở
status: draft
updated: 2026-11-27
tags: [force, decisions]
---

# Quyết định và câu hỏi còn mở

## Quyết định có căn cứ trong phiên làm việc

- Giữ đề tài và bằng chứng gốc; không đổi claim thành verified vì đã tạo tài liệu.
- Kế thừa lựa chọn 18/11 trong [nhật ký UX](../../_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/.memlog.md): Campus Friendly + Bento Grid, Blue/Orange/White; Markdown + HTML có thể bấm thử. Token chi tiết và nghiệp vụ chưa được duyệt.
- Ngày 27/11, người dùng yêu cầu tạo cả bộ trong bảng và cho phép điều chỉnh lỗi; soạn bản nháp đầy đủ thay vòng menu duyệt từng đoạn. Người dùng cho biết **chưa chọn stack và muốn đề xuất đơn giản**. Candidate Next.js/TypeScript/PostgreSQL được giải thích ở [Architecture](../../_bmad-output/planning-artifacts/architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE.md); chưa tạo ứng dụng hoặc lockfile.
- Giữ nguồn gốc; chia kho bằng chỉ mục/chủ đề, không dùng lệnh `ingest`/`shard-pro` không tồn tại trong bản cài.

## Câu hỏi và điều kiện đóng

Owner dưới đây là **đề nghị theo phân công hiện có**, chưa phải lời nhận việc hoặc deadline mới. TV01 điều phối ghi lại người xác nhận thực tế.

| ID | Quyết định cần có | Owner đề nghị | Đóng khi / ảnh hưởng |
| --- | --- | --- | --- |
| OQ-01 | VSC có hợp tác, ai xác nhận quy trình và phạm vi? | TV01 phối hợp TV03/04 | Có phản hồi thật; chặn khẳng định client approval và pilot dữ liệu thật |
| OQ-02 | Chọn stack, starter, cơ chế đăng nhập BTC và nơi chạy | TV01 + nhóm kỹ thuật | Ghi phương án được chọn, phiên bản/lockfile và vai trò; chặn bootstrap ứng dụng chính thức và US-06 |
| OQ-03 | Định danh bằng email hay MSSV; trường nào thực sự cần? | TV03/04 + người xác nhận nghiệp vụ | Có quy tắc và mục đích từng trường; chặn áp dụng form thật US-02 |
| OQ-04 | Xác nhận ngay hay duyệt; hạn mở/đóng, sức chứa/hàng chờ? | TV01/04 + BTC được xác nhận | Chọn rõ biến thể và cách xử lý đồng thời; chặn nhận đăng ký thật |
| OQ-05 | Hạn hủy, cho đăng ký lại, người đi thay và quyền hủy hộ? | TV03/04 + BTC | Chốt chuyển trạng thái; chặn US-05 dùng thật |
| OQ-06 | Cách tìm lại quyền xem/hủy khi mất mã hoặc đổi thiết bị? | TV05/06 + nhóm kỹ thuật | Chọn kênh chứng minh quyền; review chống dò hồ sơ; chặn US-04 dùng thật |
| OQ-07 | Ai check-in, ai hoàn tác; lý do và lịch sử cần lưu? | TV03/04 + BTC | Xác nhận phân quyền và ngoại lệ tại cửa; chặn US-08/09 dùng thật |
| OQ-08 | Cột/phạm vi báo cáo, người nhận, mục đích dùng, thời hạn lưu/xóa? | TV01/04 + người quản lý dữ liệu | Mẫu báo cáo và thời hạn được đồng ý; chặn export dữ liệu thật US-11 |
| OQ-09 | Quy mô, thiết bị, mạng tại cửa và mục tiêu thời gian tác vụ? | TV04/05/07 | Đo baseline rồi ghi ngưỡng; chặn tuyên bố hiệu năng/SLA |
| OQ-10 | Ai vận hành, sao lưu/khôi phục, chi phí và hỗ trợ khi lỗi? | TV01 + nhóm kỹ thuật | Có người phụ trách, môi trường và diễn tập khôi phục; chặn pilot công khai |

Nhóm vẫn có thể thử UI bằng fixture và viết kiểm tra miền nghiệp vụ có ghi giả định. Không xem “chưa trả lời” là “đã đồng ý”. Khi đóng OQ, thêm nguồn vào [chỉ mục](KNOWLEDGE_INDEX.md), cập nhật rule/PRD/story/UX/architecture liên quan trong cùng thay đổi.
