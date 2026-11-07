# Thiết lập GitHub

## Trạng thái

| Thành phần | Trạng thái / URL |
| --- | --- |
| Vault trên máy | Đã chuẩn bị cấu trúc, mở thư mục gốc bằng Obsidian |
| Repository trên GitHub | Chủ repo đã tạo [doanvanchi3n/Force](https://github.com/doanvanchi3n/Force), Public |
| Tài liệu trên GitHub | Đã push bộ vault lên nhánh `main` |
| Project trên GitHub | [Force — Client Discovery](https://github.com/users/doanvanchi3n/projects/4), Private, view Board nhóm theo Status |
| Các cột | Todo → Doing → Review → Done |
| Công việc ban đầu | Đã tạo [12 Issue](https://github.com/doanvanchi3n/Force/issues) |
| Thành viên đã xác minh | Đủ 10 tài khoản TV01–TV10 |
| Quyền repository | TV01 là chủ repo; chờ chấp nhận lời mời: TV02, TV03, TV05, TV06, TV08, TV09 |
| Quyền Project | Đã cấp Write cho TV02–TV10; TV01 là chủ Project |
| Assignee | Đã gán: TV01, TV04, TV07, TV10. Các Issue còn lại đã có tên người phụ trách; gán Assignee sau khi nhận lời mời. |

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
8. Tạo các Issue từ [danh sách việc](../06-Planning/Board.md), thêm vào Project, đặt Status = `Todo`.
9. Gán Assignees bằng tài khoản thật sau khi thành viên đã có quyền truy cập.

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
