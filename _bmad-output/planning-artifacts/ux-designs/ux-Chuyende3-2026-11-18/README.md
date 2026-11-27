# Design System & Prototypes — Chuyende3 / Force

**Bản nháp V1 — 18/11/2026, theo hướng Campus Friendly + Bento Grid mà nhóm đã chọn.**
Bảng màu **Blue / Orange / White**; đầu ra Markdown + HTML tương tác. Tạo bằng quy
trình BMAD UX, dùng UI UX Pro Max hỗ trợ các câu hỏi về thành phần, lỗi biểu mẫu
và focus. Thiết kế dựa trên bộ discovery đã tổng hợp; không xác nhận thêm nhu cầu
của VSC hoặc chốt phạm vi ứng dụng. Token và chi tiết màn hình chờ nhóm xem xét.

## Mở và dùng

Bộ bàn giao 27/11 có [story và AC](../../USER_STORIES.md), [ma trận truy vết](../../TRACEABILITY_MATRIX.md) và [bản đồ prototype theo 11 story](PROTOTYPES.md). HTML hiện có các biến thể MSSV/waitlist/hình QR lệch contract V1; đọc DX-01…08 trước khi dùng làm mẫu triển khai. Bản đồ nêu rõ auth, lưu trữ bền vững và quyền riêng chưa có.

1. Mở [prototype tương tác](mockups/index.html) bằng trình duyệt. Có thể mở trực
   tiếp file HTML trên máy, không cần cài dependencies hoặc chạy backend.
2. Thử luồng sinh viên và ban tổ chức theo [kịch bản prototype](PROTOTYPES.md).
3. Xem [thư viện thành phần](mockups/components.html) để so token, kiểu chữ,
   nút, trường nhập và trạng thái trong cùng một trang.
4. Ghi nhận những điểm cần đổi trước khi chốt bản thiết kế.

Nếu IDE chỉ mở mã HTML, dùng **Reveal in File Manager → mở bằng trình duyệt**.
Trên máy hiện tại, file bắt đầu nằm tại
`_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/mockups/index.html`.

## Tài liệu và hình mẫu

| Tệp                                                    | Nội dung                                                                     |
| ------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [DESIGN.md](DESIGN.md)                                 | Màu ngữ nghĩa, typography, spacing, bo góc, bố cục, thành phần và cách dùng  |
| [EXPERIENCE.md](EXPERIENCE.md)                         | Bản đồ màn hình, luồng, microcopy, lỗi/ngoại lệ, responsive và accessibility |
| [PROTOTYPES.md](PROTOTYPES.md)                         | Màn hình được minh họa, cách bấm thử và giới hạn mô phỏng                    |
| [Chi tiết sự kiện](mockups/key-event.html)             | Hình mẫu tĩnh cho điểm vào và thao tác đăng ký                               |
| [Danh sách người tham gia](mockups/key-attendees.html) | Hình mẫu tĩnh cho bố cục vận hành                                            |
| [Bàn check-in](mockups/key-check-in.html)              | Hình mẫu tĩnh cho tra cứu, xác nhận và ngoại lệ                              |
| [.memlog.md](.memlog.md)                               | Nguồn, giả định thiết kế và quyết định của lần làm này                       |
| [Nguồn UX đã trích](.working/source-extract.md)        | Những nội dung được mang từ discovery sang UX                                |
| [Đối chiếu nguồn](.working/reconcile-discovery.md)     | Ý tưởng giữ lại, để mở hoặc chưa đưa vào prototype                           |
| [Kiểm tra độ phủ](.working/coverage.md)                | Token, thành phần, màn hình, trạng thái và luồng                             |
|                                                        |                                                                              |

`DESIGN.md` và `EXPERIENCE.md` là hai tài liệu tham chiếu chính của **bản nháp**;
khi mockup khác tài liệu thì cần sửa mockup hoặc ghi lại quyết định thay đổi.
`draft` không có nghĩa đã được client duyệt. Các lựa chọn tạm thời có nhãn
`[ASSUMPTION]`; không dùng chúng như yêu cầu đã xác nhận trong PRD.

## Giới hạn sử dụng

- Tên người, địa điểm, lịch và số lượng trong prototype là dữ liệu minh họa;
  sự kiện mẫu không phải thông báo chính thức của VSC.
- Chuyển vai trò ở thanh prototype chỉ để thử màn hình, không phải đăng nhập
  hoặc phân quyền thật. Mạng, quyền truy cập và quét mã là tình huống mô phỏng.
- Không gửi email, gọi backend hoặc đọc camera. Thao tác chỉ thay đổi dữ liệu
  trong phiên; tải lại hoặc đặt lại đưa dữ liệu về mẫu ban đầu.
- HTML/CSS/JavaScript là định dạng bản thử cục bộ, không quyết định framework,
  cơ sở dữ liệu hoặc kiến trúc sản phẩm.
- Luồng đăng ký không tài khoản là một phương án để kiểm tra tác vụ; discovery
  chưa xác nhận cần hoặc không cần tài khoản sinh viên.

Nguồn: [Research & Discovery](../../research/user-voice-research-discovery-process-2026-11-16/README.md),
[tham khảo UI UX Pro Max và W3C](../../../design-references/chuyende3-ux-2026-11-18.md).

[Về tài liệu lập kế hoạch](../../README.md)
