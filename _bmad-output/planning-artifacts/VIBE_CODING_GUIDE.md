---
title: Force — Bàn giao từng story cho coding agent
status: draft
created: 2026-11-27
updated: 2026-11-27
---

# Chuẩn bị Vibe Code — Force

Bộ bàn giao đã có cấu trúc để chọn từng lát cắt; **chưa có ứng dụng được xây hoặc story được nghiệm thu**. Bắt đầu từ [Knowledge Index](../../docs/knowledge/KNOWLEDGE_INDEX.md), [PRD](prds/prd-Chuyende3-2026-11-27/prd.md) và [User Stories](USER_STORIES.md), không yêu cầu agent “code tất cả tài liệu” trong một lượt.

## Chọn mức công việc phù hợp

1. **Thử UI bằng fixture:** có thể làm từ UX workspace hiện hành, nhưng phải ghi biến thể đang thử và xử lý phần lệch được liệt kê ở [PROTOTYPES](ux-designs/ux-Chuyende3-2026-11-18/PROTOTYPES.md). Dữ liệu thật, auth/QR/email thật không thuộc bản thử.
2. **Xây core trong môi trường phát triển:** chốt phạm vi story, các rule/AD được chấp nhận và stack trước bootstrap. [Architecture](architecture/architecture-Chuyende3-2026-11-27/ARCHITECTURE.md) đề xuất Next.js/TypeScript/PostgreSQL; pin phiên bản/lockfile thực tế, không suy từ tooling BMAD.
3. **Thử với VSC hoặc dữ liệu thật:** có người xác nhận hợp tác/nghiệp vụ, danh tính/quyền, hạn/sức chứa, chính sách dữ liệu/báo cáo và vận hành. [OQ-01…10](../../docs/knowledge/04-decisions-and-open-questions.md) ghi ai cần quyết định và điều kiện đóng; chưa có câu trả lời thì chưa mở pilot.

## Thứ tự và phạm vi một lượt

- E-01: US-01 xem sự kiện → US-02 đăng ký → US-03 kết quả → US-04 tìm lại riêng → US-05 hủy.
- E-02: US-06 quyền BTC → US-07 danh sách → US-08 check-in → US-09 hoàn tác.
- E-03: US-10 tổng hợp → US-11 xuất.

Một story bao gồm UI, use case, dữ liệu và kiểm tra cần để hoàn thành hành vi; không xây toàn bộ schema/API trước rồi mới có flow chạy. Bootstrap tối thiểu nằm trong US-01 sau chốt stack; tạo Registration/receipt/audit khi US-02 dùng tới, membership ở US-06. Không lấy CSS/framework từ ví dụ skill để thay thiết kế được chọn.

## Prompt giao một story

Sao chép và điền thông tin trong dấu ngoặc vuông; đây là prompt mẫu, không phải lệnh shell hoặc xác nhận scope đã chốt.

```text
Dùng bmad-build để thực hiện [US-ID / tên story] của namespace force-core-2026-11-27.
Đọc AGENTS.md, docs/project-context.md và docs/knowledge/KNOWLEDGE_INDEX.md.
Đầu vào bắt buộc:
- _bmad-output/planning-artifacts/USER_STORIES.md: chỉ story được chọn và dependency trước đó.
- _bmad-output/planning-artifacts/prds/prd-Chuyende3-2026-11-27/prd.md
- _bmad-output/planning-artifacts/BUSINESS_RULES.md: [BR liên quan].
- _bmad-output/planning-artifacts/TRACEABILITY_MATRIX.md: dòng FR/NFR/UX-DR liên quan.
- _bmad-output/planning-artifacts/architecture/architecture-Chuyende3-2026-11-27/
  ARCHITECTURE-SPINE.md và ARCHITECTURE.md: [AD được nhóm chấp nhận].
- UX workspace ux-Chuyende3-2026-11-18: DESIGN.md, EXPERIENCE.md, PROTOTYPES.md.
Phạm vi được chọn: [fixture UI / core dev / pilot, kèm quyết định thật].
Các OQ tác động đã đóng: [ID + nguồn quyết định]; còn mở: [ID + cách giới hạn công việc].
Stack/phiên bản/manifest thực tế: [đường dẫn hoặc quyết định bootstrap].
Kiểm tra phần prototype lệch contract trước khi kế thừa code.
Chỉ triển khai story này; giữ rule/AD/UX đã chọn và cập nhật nguồn khi quyết định thay đổi.
Chứng minh từng AC bằng kiểm tra phù hợp; báo rõ AC chưa đạt và giới hạn.
Không tự thêm MSSV, QR, waitlist, email, payment hoặc offline sync từ demo.
```

Nếu story còn lớn, dùng `bmad-spec` để tạo gói spec của lát cắt trước `bmad-build`; không cần tạo thêm một PRD/spec sao chép toàn bộ bộ này. Giữ nguyên ID để truy vết.

## Tiêu chí trước nhận và sau hoàn thành

Trước nhận: dependency cần thiết đã có; story có bề mặt UX, rule, contract, quyền/dữ liệu và AC nhất quán. US-06 chưa có UI đăng nhập, US-04 cần luồng quyền riêng an toàn; không giả vờ các bề mặt đó đã được dựng.

Sau hoàn thành: chạy lệnh từ manifest thực tế, đưa bằng chứng cho AC, kiểm tra quyền trực tiếp/đồng thời khi story có chúng, kiểm tra bàn phím/mobile theo surface; lỗi còn mở phải được ghi. Không đổi story thành done chỉ vì có ảnh/mockup. Báo cáo ngắn gồm phần đã đổi, cách kiểm tra, AC đạt/chưa đạt và rủi ro còn thật.

Hiện chỉ có lệnh kiểm tra tài liệu `python3 scripts/check-doc-links.py` và công cụ BMAD có trong repo. Chưa tồn tại lệnh test/build cho ứng dụng core; không ghi `npm test` như lệnh đã kiểm chứng. Các bài test DB/API/browser chỉ trở thành bằng chứng sau khi ứng dụng/test harness được tạo và chạy.

## Cập nhật hướng dẫn agent

Giữ toàn bộ chỉ dẫn hiện có ở AGENTS: định hướng repo/ngôn ngữ, vai trò BMAD và design, ưu tiên UX/output paths, adapter/source lock và vùng upstream/render giữ nguyên, kiểm tra link. Chỉ thêm điểm đọc cho bộ 27/11 và quy tắc phân biệt prototype/core; không xóa, chuyển vị trí hoặc làm yếu một chỉ dẫn cũ. Đây là thay đổi bổ sung theo yêu cầu tạo `AGENTS.md` trong bảng, không phải chuyển sang cấu trúc managed block hay tạo file chỉ dẫn con.

[AGENTS hiện hành](../../AGENTS.md) · [Epics](EPICS.md) · [Câu hỏi còn mở](../../docs/knowledge/04-decisions-and-open-questions.md)
