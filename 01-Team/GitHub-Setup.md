# Thiết lập GitHub

## Trạng thái

| Thành phần | Trạng thái / URL |
| --- | --- |
| Vault trên máy | Đã chuẩn bị cấu trúc, mở thư mục gốc bằng Obsidian |
| Repository trên GitHub | Chủ repo đã tạo [doanvanchi3n/Force](https://github.com/doanvanchi3n/Force), Public |
| Tài liệu trên GitHub | Chưa push / chưa xác minh |
| Project trên GitHub | Chưa tạo / chưa xác minh |
| Quyền của 10 thành viên | Chưa cấu hình; cần GitHub username |

## Repository

1. Chủ repo đã tạo repository `doanvanchi3n/Force`, chọn **Public**.
2. Kết nối repository trên máy với `https://github.com/doanvanchi3n/Force.git`.
3. Commit bộ tài liệu và push nhánh `main`.
4. Thêm thành viên phù hợp tại phần quản lý quyền truy cập của repository.

## Project và Board

1. Trong tài khoản `doanvanchi3n`, tạo Project `Force — Client Discovery`.
2. Chọn layout **Board**, đặt tên view `Công việc nhóm`.
3. Chọn trường **Status** làm các cột.
4. Chỉnh các lựa chọn của Status thành `Todo`, `Doing`, `Review`, `Done`, theo thứ tự này.
5. Lưu view. Đặt Project ở chế độ **Private**.
6. Liên kết Project với repository `Force`.
7. Cấp quyền **Write** cho các thành viên cần cập nhật Project. Kiểm tra quyền Project riêng với quyền repository.
8. Tạo các Issue từ [danh sách việc](../06-Planning/Board.md), thêm vào Project, đặt Status = `Todo`.
9. Gán Assignees bằng tài khoản thật sau khi thành viên đã có quyền truy cập.

## Xác minh

- Chủ repo mở được repository và Project bằng các URL thực tế.
- Board hiển thị đủ 4 cột theo yêu cầu.
- Một thành viên đã được cấp quyền clone được repo, mở được vault và cập nhật được một thẻ.
- Các ghi chép đã có trên nhánh `main` của GitHub.

## Tài liệu chính thức

- [GitHub — About repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)
- [GitHub — About Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [GitHub — Board layout](https://docs.github.com/en/issues/planning-and-tracking-with-projects/customizing-views-in-your-project/changing-the-layout-of-a-view)
- [Obsidian — Create a vault](https://obsidian.md/help/vault)
