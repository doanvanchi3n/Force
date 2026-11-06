# Quy trình làm việc

## Phân chia công việc

- Mỗi người hoàn thành ghi chép cá nhân trong `04-Members/`.
- Mỗi cặp đọc chéo kiểm tra bằng chứng, chỗ chưa rõ và nhận xét của nhau.
- Với tài liệu chung, thống nhất người đang sửa trước khi bắt đầu.
- Người tổng hợp liên kết về nguồn và ghi chép gốc, giữ rõ ý kiến chưa thống nhất.

## Một lượt cập nhật bằng Git

Mỗi thành viên cần quyền ghi vào repo và tự xác thực GitHub trên máy mình.
Nếu dùng GitHub CLI, chạy `gh auth login`, sau đó `gh auth setup-git` trước lần push đầu tiên.

Ví dụ dưới đây dành cho TV01; các thành viên khác thay mã và đường dẫn tương ứng.
Chạy lệnh trong thư mục repository. Trước khi đổi nhánh, kiểm tra `git status` và commit những thay đổi đang làm nếu có.

```bash
git status
git switch main
git pull --ff-only
git switch -c research/tv01-client-01
```

Mở Obsidian, chỉnh sửa ghi chép, sau đó:

```bash
git diff
git add 04-Members/TV01.md
git commit -m "docs: add TV01 client research"
git push -u origin research/tv01-client-01
```

Trên GitHub, tạo Pull Request (PR) từ nhánh vừa push về `main`, liên kết Issue tương ứng và nhờ bạn cùng cặp đọc chéo. Sau khi sửa các góp ý và được đồng ý, merge PR rồi cập nhật bản trên máy:

```bash
git switch main
git pull --ff-only
```

Lần cập nhật tiếp theo dùng tên nhánh mới, ví dụ `research/tv01-client-02`.
Nếu Git báo xung đột, cùng người sửa file đó thống nhất nội dung cần giữ trước khi tiếp tục.

## Cách dùng board

| Trạng thái | Ý nghĩa |
| --- | --- |
| Todo | Đã ghi rõ đầu ra, chưa bắt đầu |
| Doing | Đang tìm hiểu hoặc viết tài liệu |
| Review | Đã có tài liệu/PR, chờ người khác đọc chéo |
| Done | Đã xử lý góp ý, tài liệu được merge vào `main` |

Nhóm cần gán một người chịu trách nhiệm chính cho mỗi thẻ; thẻ đã có liên kết tài liệu và tiêu chí hoàn thành.
Việc kéo thẻ không tự cập nhật nội dung trong vault.

## Cách ghi thông tin

- Phân biệt thông tin được xác nhận, giả định và câu hỏi chưa có câu trả lời.
- Ghi nguồn hoặc mã bằng chứng để người đọc kiểm tra lại.
- Ghi ngày thực tế của lần nghiên cứu; không tự gán ngày hoặc kết quả phỏng vấn.
- Mẫu và cách chia việc trong vault là đề xuất khởi đầu, có thể điều chỉnh theo yêu cầu môn học.
