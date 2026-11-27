# Force — Vault chung của nhóm Chuyên đề 3

Kho ghi chép dành cho 10 thành viên tìm hiểu Client và bài toán của đề tài.
Từ tuần 2, nhóm chọn đề tài của TV01: **website hỗ trợ đăng ký và quản lý tham dự sự kiện cho câu lạc bộ sinh viên**.
Mở [Board tuần 2](docs/planning/Board%20-%20week%202.md) để xem phân công theo [8 template nhóm cung cấp](docs/templates/Link%20template.md).

## Mở trên máy hiện tại

Trong Obsidian, chọn **Open folder as vault → Open**, rồi chọn thư mục:

```text
/home/vanchien/Project/Chuyende3
```

Mở [00-Home.md](00-Home.md) để bắt đầu. Không cần cài plugin cộng đồng.

Tài liệu nhóm nằm trong `docs/`. BMAD Core + BMM **6.12.4** đã được cài cho Codex;
xem [hướng dẫn BMAD](docs/bmad/README.md) và [mục lục tài liệu](docs/index.md).
UI UX Pro Max **2.15.0** hỗ trợ phần giao diện theo [quy tắc phối hợp skill](docs/skills/README.md).

## Thành viên mới

1. Nhận quyền truy cập repository từ người quản lý nhóm.
2. Repository chung: [doanvanchi3n/Force](https://github.com/doanvanchi3n/Force).
3. Chạy `git clone https://github.com/doanvanchi3n/Force.git` trên máy của mình.
4. Trong Obsidian, chọn **Open folder as vault** và mở thư mục vừa clone.
5. Điền thông tin ở [danh sách thành viên](docs/team/Members.md), nhận mã TV01–TV10.
6. Đọc [quy trình làm việc](docs/team/Working-Agreement.md) và cập nhật ghi chép của mình.

Git là công cụ đồng bộ các bản sao của vault trong cách tổ chức này.
Chỉnh sửa trong Obsidian được lưu trên máy; cần commit và push để đưa thay đổi lên GitHub.

## Cấu trúc

```text
Chuyende3/
├── 00-Home.md                 # Điểm bắt đầu trong Obsidian
├── AGENTS.md                  # Điều phối BMAD và bộ design
├── docs/                      # Tri thức và ghi chép của nhóm
│   ├── index.md
│   ├── project-context.md
│   ├── bmad/                  # Hướng dẫn quy trình và cài đặt
│   ├── skills/                # Cách phối hợp các skill
│   ├── team/
│   ├── discovery/             # Client, nghiên cứu và bài làm theo tuần
│   ├── planning/              # Board phân công của nhóm
│   ├── meetings/
│   ├── templates/
│   ├── assets/
│   └── inbox/                 # Ghi chú mới, chưa phân loại
├── _bmad/                     # Cấu hình và script của BMAD
├── _bmad-output/
│   ├── planning-artifacts/    # Brief, PRD, UX, kiến trúc khi thực hiện workflow
│   ├── implementation-artifacts/ # Story, sprint, review khi triển khai
│   └── design-references/     # Đề xuất thiết kế tham khảo
├── scripts/                   # Cài lại BMAD và kiểm tra liên kết
├── tools/skills/               # Adapter design và commit nguồn đã ghim
├── .agents/skills/            # Skill cục bộ, tạo bằng bộ cài
├── .tools/                    # Repo nguồn BMAD và UI UX Pro Max, Git bỏ qua
└── .local/                    # Sao lưu cục bộ, Git bỏ qua
```

| Thư mục | Nội dung |
| --- | --- |
| `docs/team/` | Thành viên, quy trình Git và hướng dẫn thiết lập GitHub |
| `docs/discovery/client/` | Bản Client tổng hợp |
| `docs/discovery/research/` | Phát biểu vấn đề, nguồn thông tin, giả định |
| `docs/discovery/results/Week-1/` | Ghi chép cá nhân tuần 1; bài TV01 là căn cứ chọn đề tài |
| `docs/discovery/results/Week-2/` | Kết quả và ghi chép theo phân công tuần 2 của TV01–TV10 |
| `docs/meetings/` | Biên bản họp |
| `docs/planning/` | Board phân công theo từng tuần |
| `docs/templates/` | Mẫu ghi chép để dùng lại |
| `docs/assets/` | Ảnh và tài liệu đính kèm |
| `docs/inbox/` | Ghi chú, canvas và bảng Base chưa phân loại |
| `_bmad-output/planning-artifacts/` | Đầu ra lập kế hoạch của BMAD |
| `_bmad-output/implementation-artifacts/` | Đầu ra triển khai của BMAD |

Tài liệu nghiên cứu là đầu vào cho BMAD. Đã có [bộ bàn giao nháp ngày 27/11](docs/knowledge/KNOWLEDGE_INDEX.md)
gồm PRD, rules, 3 epic/11 story, UX/prototype mapping và kiến trúc đề xuất;
chưa xác nhận với VSC hoặc nghiệm thu ứng dụng core. Xem [bảng chuyển thư mục](docs/bmad/migration-2026-11-16.md).

## Dùng BMAD

Máy đã có Node.js 20.20.2, Python 3.12.3 và uv 0.13.8.
Trên máy mới, cài Node.js 20.12+ và [uv](https://docs.astral.sh/uv/getting-started/installation/), rồi chạy tại gốc repo:

```bash
bash scripts/install-skills.sh
```

Mở phiên Codex mới tại dự án và gọi `bmad-help` để chọn bước tiếp theo.
Cấu hình chung dùng tiếng Việt và đọc tri thức tại `docs/`.
Kiểm tra liên kết tài liệu bằng `python3 scripts/check-doc-links.py`.

## GitHub

Repository: [doanvanchi3n/Force](https://github.com/doanvanchi3n/Force), chế độ **Public** do chủ repo đã chọn.
Project: [Force — Client Discovery](https://github.com/users/doanvanchi3n/projects/4), chế độ **Private**.
Board: **Todo → Doing → Review → Done**.

Vault đã có trên nhánh `main`. Board đã được tạo và liên kết với repository.
Đã cập nhật đầy đủ TV01–TV10 và cấp quyền Write trên Project cho 9 thành viên ngoài chủ repo.
Xem [Members](docs/team/Members.md) để biết Issue, người đọc chéo và trạng thái nhận lời mời/Assignee.
Chi tiết quyền truy cập tại [GitHub Setup](docs/team/GitHub-Setup.md).
