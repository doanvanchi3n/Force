# Thiết lập GitHub

## Trạng thái

| Thành phần | Trạng thái / URL |
| --- | --- |
| Vault trên máy | Đã chuẩn bị cấu trúc, mở thư mục gốc bằng Obsidian |
| Repository trên GitHub | Chủ repo đã tạo [doanvanchi3n/Force](https://github.com/doanvanchi3n/Force), Public |
| Tài liệu trên GitHub | Đã push bộ vault lên nhánh `main` |
| Project trên GitHub | [Force — Client Discovery](https://github.com/users/doanvanchi3n/projects/4), Private, view Board nhóm theo Status |
| Các cột | Todo → Doing → Review → Done |
| Công việc tuần 2 | Đã tạo 10 Issue #13–#22; [Board tuần 2](https://github.com/users/doanvanchi3n/projects/4/views/2), lọc `label:week-2` |
| Lịch sử tuần 1 | Giữ nguyên 12 Issue #1–#12 |
| Thành viên đã xác minh | Đủ 10 tài khoản TV01–TV10 |
| Quyền repository | TV01 là chủ repo; 8 thành viên đã có quyền; chờ chấp nhận lời mời: TV06, TV08 (kiểm tra 10/11/2026) |
| Quyền Project | Đã cấp Write cho TV02–TV10; TV01 là chủ Project |
| Assignee tuần 2 | Đã gán 8 người; TV06 và TV08 có tên trong mô tả, chờ nhận lời mời để gán lần lượt vào #18 và #20 |
| Deadline tuần 2 | Chờ TV01 xác nhận ngày/giờ; milestone chưa đặt due date |

## Repository

Repository đã được thiết lập và lời mời đã gửi theo [Members](Members.md). Những người còn chờ cần chấp nhận lời mời bằng đúng tài khoản GitHub của mình.

1. Chủ repo đã tạo repository `doanvanchi3n/Force`, chọn **Public**.
2. Kết nối repository trên máy với `https://github.com/doanvanchi3n/Force.git`.
3. Commit bộ tài liệu và push nhánh `main`.
4. Thêm thành viên phù hợp tại phần quản lý quyền truy cập của repository.

## Project và Board

Project đã được tạo, cấu hình và cấp quyền Write cho TV02–TV10. Giữ hướng dẫn bên dưới để nhóm quản lý và bổ sung thành viên.

1. Trong tài khoản `doanvanchi3n`, tạo Project `Force — Client Discovery`.
2. Chọn layout **Board**, đặt tên view `Công việc nhóm`.
3. Chọn trường **Status** làm các cột.
4. Chỉnh các lựa chọn của Status thành `Todo`, `Doing`, `Review`, `Done`, theo thứ tự này.
5. Lưu view. Đặt Project ở chế độ **Private**.
6. Liên kết Project với repository `Force`.
7. Cấp quyền **Write** cho các thành viên cần cập nhật Project. Kiểm tra quyền Project riêng với quyền repository.
8. Tạo các Issue từ [danh sách việc](../06-Planning/Board%20-%20week%201.md), thêm vào Project, đặt Status = `Todo`.
9. Gán Assignees bằng tài khoản thật sau khi thành viên đã có quyền truy cập.

## Board tuần 2

Đã tạo view **Tuần 2 — Research & Problem Discovery** tại [đây](https://github.com/users/doanvanchi3n/projects/4/views/2), layout Board và filter `label:week-2`. Các task có Status ban đầu = Todo, dùng các trạng thái của Project chung.

[Milestone tuần 2](https://github.com/doanvanchi3n/Force/milestone/1) gom 10 Issue #13–#22. Đầu ra, đọc chéo và mốc phối hợp nằm ở [Board tuần 2 trong vault](../06-Planning/Board%20-%20week%202.md).

## Việc thành viên cần thực hiện

- Thành viên còn chờ đăng nhập đúng tài khoản và nhận [lời mời repository](https://github.com/doanvanchi3n/Force/invitations).
- Sau khi nhận lời mời, chủ repo gán Assignee ở Issue cùng mã TV. Xem trạng thái chi tiết tại [Members](Members.md).
- Một thành viên đã được cấp quyền thử clone repo, mở vault và cập nhật một thẻ.
- Mỗi người tự xác thực GitHub trên máy mình khi cần push hoặc tạo PR.

## Tài liệu chính thức

- [GitHub — About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [GitHub — About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [GitHub — Board layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)
- [Obsidian — Create a vault](https://obsidian.md/help/vault)
