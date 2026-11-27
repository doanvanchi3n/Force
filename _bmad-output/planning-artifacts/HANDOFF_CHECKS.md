---
title: Force — Kiểm tra bộ bàn giao ngày 27/11
status: draft
updated: 2026-11-27
author: Huỳnh Thanh Thuận
updated_at: 2026-11-27
---

# Kiểm tra bộ bàn giao

Phạm vi: tài liệu knowledge → PRD/rule → epic/story → UX/prototype mapping → architecture và AGENTS. Đây là kết quả kiểm tra **gói tài liệu**, không phải nghiệm thu ứng dụng hoặc xác minh nhu cầu VSC.

## Kiểm tra bổ sung của TV03

- Chrome headless mở trực tiếp `prototype/dist/index.html` qua `file://`. Kiểm tra 9 tiêu chí PT của [[USER_STORIES#Lát cắt TV03 — Bản thử đăng ký S01–S03]] gồm mở/đóng đăng ký, focus tóm tắt và liên kết lỗi, giới hạn tên theo code point/email, chống trùng, gửi lặp, lỗi lưu, timeout, khôi phục và đặt lại phiên. Khung 360 px ở biểu mẫu không cuộn ngang. Kiểm tra email trùng có khoảng trắng không ngắt dòng và hai lượt timeout liên tiếp.
- Ở bản BID, kiểm tra F5 giữ biên nhận chờ duyệt, thư xác nhận sau duyệt và trạng thái lỗi/gửi lại. Phiên BID và core dùng hai khóa riêng. Kiểm tra bằng dữ liệu mẫu.
- Rà soát bản thay đổi đã dẫn đến sửa xác thực email sau chuẩn hóa, mô phỏng timeout ở mỗi lượt mới và dùng nhãn “Đang nhận đăng ký” ở bản core. Bổ sung đầu mối wikilink bàn giao và giữ tác giả gốc của review TV08.
- `node --check prototype/dist/app.js`, `git diff --check` và script kiểm tra liên kết tài liệu đều đạt. Kiểm tra bổ sung xác nhận metadata của 12 trang Markdown, tiêu đề đích và 6 cặp wikilink hai chiều của story. Cách chạy và truy vết tại [[prototype/README|Prototype đăng ký]], [[TRACEABILITY_MATRIX#Bản thử TV03]] và [[VIBE_CODING_GUIDE#Bàn giao lát cắt TV03]].

Bản thử đã kiểm tra trong một tab Chrome. Phần nghiệm thu hệ thống còn cần cấu hình và quyền phía máy chủ, DB, giao dịch/audit, replay có xác thực, lỗi mạng thật, cạnh tranh nhiều máy và kiểm tra đa trình duyệt.

## Kiểm tra ở lần bàn giao tài liệu 27/11

- `python3 scripts/check-doc-links.py`: không còn liên kết tệp hỏng trong phạm vi script. Đã sửa 7 đường dẫn cũ được phát hiện ở TV09/10 và review-TV08; đồng thời sửa đường dẫn cũ trong BID/prototype README.
- `git diff --check`: không báo lỗi whitespace mới.
- `uv run --no-cache .agents/skills/bmad-architecture/scripts/lint_spine.py --workspace _bmad-output/planning-artifacts/architecture/architecture-Chuyende3-2026-11-27`: `ok: true`, 0 finding cơ học sau khi bổ sung contract.
- Kiểm tra bằng script tạm: 12 FR, 6 NFR, 14 BR, 11 story, 36 AC; mọi story có mapping prototype và không có dependency về story tương lai; 15 tên component UX có trong EPICS; đường dẫn nguồn ở frontmatter mới tồn tại.
- Kiểm tra mở rộng các Markdown thay đổi ngoài phạm vi link checker, gồm `06-Planning/` và `prototype/`: không có link tệp hỏng tại lần kiểm tra. AGENTS cũ còn nguyên văn, chỉ có mục bổ sung. Formatting người dùng có sẵn trong bảng Component Patterns của EXPERIENCE được giữ.

## Rà soát nội dung và thay đổi sau rà soát

- Structure/prose theo doc standards BMAD: giữ PRD theo mục đích/phạm vi → khả năng → chất lượng → câu hỏi; tách AC khỏi EPICS, rule khỏi PRD và nguồn khỏi bản sao nhiều nơi. Không có đề xuất cắt nội dung có ý nghĩa; không đổi số liệu để làm đẹp báo cáo. Trước chỉnh contract, word-metrics ghi PRD 1.557 từ, architecture companion 1.456 từ; không đặt mục tiêu giảm độ dài.
- Đối chiếu nguồn hiện hành với snapshot 16/11: nhận cập nhật union/intersection của TV04 và journey 5 giai đoạn TV09; giữ các giới hạn Q7/no-show, kênh nhận vé/tài khoản, độc lập mẫu và suy luận tiết kiệm nguồn lực. Không đổi 14 claim của snapshot thành verified.
- [Rà soát tính nhất quán kiến trúc](architecture/architecture-Chuyende3-2026-11-27/reviews/review-consistency.md): đã bổ sung actor–command, checkedAt/version, create receipt/audit, scope/replay và normalization.
- [Kiểm tra căn cứ công nghệ](architecture/architecture-Chuyende3-2026-11-27/reviews/review-technology.md): nguồn chính thức hỗ trợ candidate; chưa pin/cài/thử framework.
- [Kiểm tra spine theo rubric](architecture/architecture-Chuyende3-2026-11-27/reviews/review-rubric.md): các chiều cấu trúc có quyết định/giả định hoặc OQ; còn là draft.
- Người đối chiếu UX độc lập yêu cầu phân biệt mapping với prototype đã hoàn thành. PROTOTYPES đã nêu rõ đây là **đối chiếu prototype hiện có với 11 story dự thảo**, cùng DX-01…08 và AC chưa thể kiểm chứng.

Hai agent hỗ trợ không có filesystem tool; lần trích nguồn chuyển về parent, các nhận xét độc lập dựa trên contract/nội dung được cung cấp trực tiếp. Không gọi đây là audit độc lập toàn bộ repo.

## Giới hạn của lần bàn giao tài liệu

Chưa tạo prototype core mới, chưa chỉnh logic HTML, chưa bấm thử lại toàn bộ UI hoặc chạy DB/API/browser test cho ứng dụng mới. Auth/persistence/audit/concurrency thật chưa có; DX-01…08 chưa được sửa trong mã. Câu hỏi OQ-01…10 còn mở; stack là đề xuất; các tài liệu vẫn `draft`/`approval pending`. Không commit, push hoặc thay trạng thái Issue/PR trong lần soạn này.

[Bắt đầu đọc bộ tài liệu](../../docs/knowledge/KNOWLEDGE_INDEX.md) · [Cách giao một story](VIBE_CODING_GUIDE.md)
