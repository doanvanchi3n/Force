# Sắp xếp thư mục ngày 16/11/2026

Mục tiêu: gom tri thức của nhóm vào `docs/` và tách cấu hình, skill, đầu ra BMAD.
Giữ bài làm theo tuần, tên file và nội dung nghiên cứu; cập nhật liên kết theo vị trí mới.

| Vị trí trước đây | Vị trí hiện tại |
| --- | --- |
| `01-Team/` | `docs/team/` |
| `02-Client/` | `docs/discovery/client/` |
| `03-Research/` | `docs/discovery/research/` |
| `04-results/` | `docs/discovery/results/` |
| `05-Meetings/` | `docs/meetings/` |
| `06-Planning/` | `docs/planning/` |
| `80-Templates/` | `docs/templates/` |
| `90-Assets/` | `docs/assets/` |
| Ba file `Chưa đặt tên*.base` ở gốc | `docs/inbox/` |
| Ghi chú `2026-11-06.md` và canvas trong `.obsidian/` | `docs/inbox/` |
| Cấu hình vault lồng `.obsidian/.obsidian/` | `.local/archive/nested-obsidian/` |

Liên kết Markdown nội bộ và các liên kết `blob/main` tới bài trong repo được cập nhật
về đường dẫn tương đối. URL trỏ tới commit hoặc nhánh nghiên cứu cũ được giữ để
truy nguồn. Các link trong Issue/PR trên GitHub chưa được chỉnh sửa từ máy này.
Sửa một liên kết sẵn có trong bài TV06 tuần 2: tên `Research-log.md` thành
`Research-Log.md` để khớp tên file trên Linux.

Obsidian dùng `docs/templates/` cho Templates, `docs/assets/` cho đính kèm và
`docs/inbox/` cho ghi chú mới. Đường dẫn trong bố cục Obsidian cục bộ cũng được cập nhật.

Bản sao trước thay đổi: `.local/backups/before-bmad-20261116.tar.gz`.
Bảng ánh xạ từng file và SHA-256 trước thay đổi: `.local/migration-20261116.json`.
Hai mục này nằm trên máy hiện tại và được Git bỏ qua. Khi cần khôi phục, giải nén
bản sao vào thư mục riêng để đối chiếu trước khi chép lại.

## Kiểm tra sau khi chuyển

- Cả 57 file trước thay đổi đều có vị trí đích; 45 file được di chuyển.
- 37 tài liệu Markdown gốc giữ nguyên nội dung ngoài liên kết/đường dẫn.
- 13 file đính kèm, Base, canvas và cấu hình được giữ nguyên từng byte. Các file
  hướng dẫn và cấu hình đường dẫn được cập nhật riêng theo cấu trúc mới.
- Kiểm tra 47 file Markdown với 266 liên kết file nội bộ: không có đích bị thiếu.
  Phép kiểm tra này không kiểm tra anchor tiêu đề hoặc truy cập URL bên ngoài.
- BMAD cài đủ 29 skill; bộ đọc cấu hình và renderer của `bmad-build` chạy thành công.
- Thử cài lại trên bản sao khôi phục đủ 29 skill và giữ nguyên cấu hình chung.
