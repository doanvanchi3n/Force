# Phối hợp BMAD và UI UX Pro Max

BMAD quản lý quy trình sản phẩm; UI UX Pro Max cung cấp dữ liệu và gợi ý thiết kế
trong tác vụ đang thực hiện. Cài thêm skill không có nghĩa dự án đã chốt giao diện,
stack công nghệ, PRD hoặc kiến trúc.

## Phân công theo tác vụ

| Tác vụ | Bộ phụ trách | UI UX Pro Max hỗ trợ |
| --- | --- | --- |
| Nghiên cứu client, brief, PRD, yêu cầu | BMAD và tài liệu `docs/discovery/` | Khi có câu hỏi UI cụ thể; không tạo bằng chứng về client |
| Khám phá UX, luồng và giao diện | `bmad-ux` | Tra cứu style, màu, font, layout, tương tác sau khi hiểu định hướng của người dùng |
| Kiến trúc và đặc tả | `bmad-architecture`, `bmad-spec` | Chỉ các ràng buộc UI liên quan, theo stack đã chọn |
| Triển khai giao diện | `bmad-build` hoặc tác vụ triển khai người dùng đã giao | Hướng dẫn component, accessibility, responsive; theo thiết kế đã thống nhất |
| Câu hỏi thiết kế riêng lẻ | `ui-ux-pro-max` có thể dùng trực tiếp | Trả lời đúng câu hỏi, không mở lại toàn bộ quy trình BMAD |
| Backend, Git, tài liệu, cấu hình | Tác vụ hoặc workflow tương ứng | Không cần kích hoạt design skill |

Mỗi phần việc có một workflow điều phối. Bộ design trả kết quả về phần việc đó;
không khởi động thêm vòng hỏi yêu cầu, kế hoạch triển khai hay review riêng.
Quy tắc này được đặt tại [AGENTS.md](../../AGENTS.md) để áp dụng xuyên suốt dự án.

## Tài liệu nào quyết định thiết kế?

Ưu tiên yêu cầu rõ ràng của người dùng và các quyết định đã thống nhất trong spec,
`DESIGN.md` / `EXPERIENCE.md` của UX workspace đang dùng. Khi chạy BMAD UX,
workspace mặc định nằm dưới `_bmad-output/planning-artifacts/ux-designs/`.
Nếu có nhiều workspace, dùng workspace gắn với nhiệm vụ; không tự chọn theo thời gian sửa file.

UI UX Pro Max có thể xuất `MASTER.md`, page overrides, preview và design tokens.
Trong dự án này, chúng là **đề xuất tham khảo**, lưu dưới
`_bmad-output/design-references/`. Tên `MASTER.md` không biến nó thành nguồn quyết
định thay thế tài liệu UX của nhóm. Quy tắc page override của thư viện chỉ áp dụng
trong bộ đề xuất đó.

Khi chọn một đề xuất, đưa quyết định vào tài liệu UX của tác vụ rồi triển khai theo
quyết định đó. Nếu chưa có UX contract, ghi rõ đề xuất đang là nháp. Bộ thư viện
không tự quyết định lại màu, font hoặc luồng đã được người dùng lựa chọn.

## Cấu trúc tích hợp

```text
AGENTS.md                              # Quy tắc điều phối cho cả dự án
tools/skills/ui-ux-pro-max/
├── SKILL.md                           # Bản hướng dẫn đã thu hẹp vai trò
└── source.json                        # Phiên bản, commit và checksum nguồn
.agents/skills/
├── bmad-*/                            # 29 skill do bộ cài BMAD quản lý
└── ui-ux-pro-max/                      # Design skill cùng dữ liệu/script gốc
.tools/
├── BMAD-METHOD/                        # Upstream BMAD
└── ui-ux-pro-max-skill/                # Upstream design
_bmad-output/
├── planning-artifacts/ux-designs/      # Tạo khi chạy workflow UX
├── implementation-artifacts/          # Đầu ra triển khai
└── design-references/                 # Đề xuất của thư viện design
```

Chỉ cài skill `ui-ux-pro-max` từ repo design. Các skill bổ sung như `design`,
`brand`, `slides` trong upstream không thuộc lần tích hợp này.
Các file đang mở dưới `_bmad/render/` là snapshot do BMAD sinh ra; thay đổi chúng
không phải cách duy trì cấu hình. Bản hướng dẫn design dùng trong dự án được quản
lý tại [tools/skills/ui-ux-pro-max/SKILL.md](../../tools/skills/ui-ux-pro-max/SKILL.md).

## Dùng và cài lại

Mở phiên mới hoặc gửi yêu cầu tiếp theo để nhận skill mới. Có thể gọi
`$ui-ux-pro-max` cho câu hỏi design, hoặc yêu cầu BMAD dùng nó để hỗ trợ tác vụ UI.
Tự động lựa chọn skill vẫn bật; phạm vi mô tả đã được thu hẹp về hỗ trợ UI/UX.

Tra cứu một vấn đề, không lưu file:

```bash
python3 scripts/design-search.py "keyboard focus modal" --domain ux
```

Khi cần lưu một phương án tham khảo:

```bash
python3 scripts/design-search.py "student event registration" --design-system --persist -p "Chuyende3"
```

Script tự đặt thư mục đầu ra; không truyền `--output-dir` hoặc `-o`.
`--stack` chỉ dùng sau khi đã biết stack của ứng dụng. `package.json` của công cụ
trong `.tools/` không phải stack của sản phẩm Chuyende3.

Cài cả hai bộ trên máy thành viên:

```bash
bash scripts/install-skills.sh
```

Máy cần Node.js 20.12+, Python 3.11+ cho BMAD và uv. Chỉ cài lại bộ design:

```bash
python3 scripts/install-design-skill.py
```

Installer dùng repo nguồn cục bộ nếu có; nếu thiếu, tải đúng commit đã ghim.
Checksum phải khớp trước khi ghi vào `.agents/skills/ui-ux-pro-max/`.
Cài lại cùng bản không làm thay đổi file. Khi thay bản đã cài, bản trước được giữ
trong `.local/backups/skills/`. Giữ thay đổi riêng trong adapter có Git theo dõi,
rồi chạy lại installer; không cập nhật trực tiếp bằng CLI upstream nếu muốn giữ lớp tích hợp.

## Nguồn và giới hạn

UI UX Pro Max **2.15.0**, commit `902bf616a0cc590d3f89f233f0c4e00072e549f0` từ
[nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill/tree/902bf616a0cc590d3f89f233f0c4e00072e549f0).
Dữ liệu, script và reference được giữ nguyên; entrypoint `SKILL.md` được thay
bằng adapter của dự án và giấy phép MIT được giữ trong bản cài.

Quy tắc điều phối giảm xung đột chỉ dẫn; đây không phải cơ chế khóa kỹ thuật mọi
quyết định của AI. Script kiểm soát vị trí lưu khi được sử dụng; gọi trực tiếp script
upstream có thể bỏ qua quy ước đó. Khi hai tài liệu đã duyệt mâu thuẫn, cần làm rõ
quyết định liên quan trước khi thay đổi giao diện.
