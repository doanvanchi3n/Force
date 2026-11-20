# Đối chiếu discovery với bản thử V1

Ngày: 18/11/2026. Phạm vi: [DESIGN.md](../DESIGN.md), [EXPERIENCE.md](../EXPERIENCE.md). Đây là bước đối chiếu nguồn trong BMAD UX, không phải kiểm chứng client, review nhiều lens hoặc chấp thuận sản phẩm. Người dùng đã chọn **Campus Friendly + Bento Grid, Blue / Orange / White** và **Markdown + HTML có thể bấm thử** theo [.memlog.md](../.memlog.md). Chi tiết thiết kế/nghiệp vụ V1 vẫn là **assumption**, `status: draft`, `approval: pending`.

## Phần được mang sang để thử

| Ý tưởng nguồn | Cách mang sang V1 | Giới hạn giữ nguyên |
| --- | --- | --- |
| P-01: danh sách đăng ký/cập nhật; BTC Q10–11 | S02 chặn tạo bản ghi trùng email; S03 hủy; S05 cùng bản ghi và trạng thái | Email chuẩn hóa, xác nhận tức thì, quy tắc hủy là giả định bản thử; chưa chứng minh lỗi do công cụ. |
| P-02: ngoại lệ ghi nhận; BTC Q13–15, sinh viên Q9 | S06 tra cứu, xác nhận check-in, chặn lặp/đã hủy, thử mất mạng/quyền và hoàn tác | Không có bằng chứng cơ chế này giảm hàng chờ; định danh/người đi thay còn mở. |
| P-03: tổng hợp; BTC Q16–19 | S07 số đếm, bảng và CSV minh họa; UJ-04 đối chiếu đầu ra | Chưa có định dạng client, baseline thời gian hoặc quyền công nhận tham dự. |
| P-04: tìm xác nhận/trạng thái | S03/S04, UJ-01/UJ-02 để thử tìm thông tin | Nhu cầu là ứng viên; Q10 không đo trực tiếp mức ưu tiên tính năng. |
| Hai persona theo vai trò | Sinh viên và BTC là hai góc thử; Lan/Minh chỉ là nhân vật hư cấu | Giữ nguyên tên Persona A/B của nguồn; không thêm nhân khẩu học hoặc lời trích. |
| Sáu giai đoạn journey | UJ-01: 1–3; UJ-02: 3–4; UJ-03: 5; UJ-04: 6 | Journey nguồn là giả thuyết hiện trạng, không biến thành hành trình được VSC xác nhận. |

## Phần không dựng trong V1 và điều vẫn mở

“Không dựng” chỉ giới hạn prototype hiện tại, không phải kết luận nghiên cứu bác bỏ nhu cầu.

| Chủ đề | Quyết định để dựng bản thử | Điều còn mở / nguồn |
| --- | --- | --- |
| **Tài khoản/portal** | Tra cứu bằng mã demo, không có đăng nhập/tạo tài khoản | RD-A04 chưa kiểm chứng, chưa bác bỏ. Không dùng 0/6 thích nhận vé qua App/Web để loại mọi portal. Mã demo không an toàn cho sản phẩm thật. |
| **Email** | Trường email phục vụ minh họa đăng ký/trùng; không gửi, không báo đã gửi | RD-A07/A10: 5/6 là sở thích kênh nhận vé, chưa kiểm tra nhận/tìm lại; kênh, gửi tự động và xử lý thất lạc còn mở. |
| **QR/camera** | Dựng tra cứu và xác nhận; không tích hợp camera, không cần QR thật để thử guard | RD-A02/A08: chưa biết QR giải quyết nguyên nhân nào; trường hợp thiếu/trùng mã và người đi thay cần xác minh. |
| **Offline** | Switch demo chặn cập nhật, giữ dữ liệu đang xem; không lưu localStorage, không queue/sync | RD-A08: mất mạng là tín hiệu khảo sát; chưa lựa chọn cache/offline-first, cách đồng bộ hoặc thiết bị thực tế. Đọc fixture offline không chứng minh sản phẩm hoạt động offline. |
| **VSC** | Không logo chính thức, không tuyên bố pilot/quan hệ hợp tác; sự kiện hoàn toàn minh họa | RD-A01/A06 chưa xác minh; cần đầu mối và điều kiện thử thật. |
| Catalogue/tạo sự kiện | S01 là chi tiết một sự kiện, không có trang khám phá nhiều sự kiện/tạo sự kiện | Bước “Biết đến sự kiện” chủ yếu giả thuyết W1-TV01; chưa có nhu cầu chi tiết hoặc quy tắc vận hành. |
| Sửa đăng ký/người đi thay | Không tạo flow riêng; nguồn được ghi lại trong khoảng trống | P-01/P-02; ai có quyền sửa, trường nào sửa được và cách xác minh người đến chưa được xác nhận. |
| Hủy/no-show | Thử hủy một bản ghi registered qua xác nhận | RD-A05/A09: không biến 3/6 “nếu bận” thành tỷ lệ thực; chưa khẳng định tăng báo hủy/giảm vắng. |
| Chứng nhận/điểm rèn luyện | Không cấp hoặc tự công nhận; báo cáo chỉ là đầu ra demo | Có tín hiệu lập danh sách ở BTC Q16, chưa có thẩm quyền/điều kiện xác nhận. |
| Thanh toán, tài chính, SSO trường, nhận diện khuôn mặt, app riêng | Không dựng | Nằm ngoài MVP được **đề xuất** tuần 1; chưa có MVP được duyệt. |
| Quy trình/công cụ hiện tại | Không làm prototype Forms/Sheets/Luma/Eventbrite trong lượt này | Phương án so sánh vẫn tồn tại; BTC trung vị hài lòng 4/5, chưa chứng minh cần xây website riêng. |
| Màu/font/bố cục | Theo hướng đã chọn Campus Friendly + Bento Grid, Blue / Orange / White; lime/Minimalism mặc định đã bị thay thế | Mã hex, font hệ thống, radius, kích thước và cấu trúc khối cụ thể vẫn là đề xuất. ui-ux-pro-max là tham khảo, không phải bằng chứng nhu cầu VSC; xanh lá chỉ còn nghĩa trạng thái success. |

## Đối chiếu artifact với hợp đồng UX

Đã đọc bản tương tác S01–S07, gallery S08, ba mẫu S01/S05/S06 và CSS/JavaScript chung. Mọi surface có hình thức trực tiếp trong HTML; không giữ surface chỉ có bảng mô tả. Những chi tiết dưới đây được ghi vào hai spine như giả định V1 để người xem kiểm tra, không phải phát hiện mới từ discovery:

- S01 có poster/giới thiệu bên trái, thông tin/CTA và agenda bên phải; trên khung hẹp các khối xếp theo thứ tự đọc. S05 giữ bảng thống nhất dưới số đếm bento; S06 tìm trước, đối chiếu rồi xác nhận.
- Bảng màu giữ xanh dương/cam/trắng; info-soft `#EDF2FF` phục vụ hướng dẫn. Xanh lá chỉ biểu thị trạng thái hoặc kết quả đã ghi nhận; badge Đã đăng ký dùng ink/background. Focus nền tối dùng accent/accent-strong để tương phản với ink.
- ErrorSummary phục vụ form đăng ký và tra cứu. Lý do hoàn tác chỉ có một trường nên lỗi nằm ngay dưới trường, focus tới trường; nháp lý do được giữ trong RAM khi đóng để đổi điều kiện thử rồi mở lại.
- Các giới hạn tên 2–80, email tối đa 254, lý do tối đa 300 ký tự là quy tắc bản thử. Không coi giới hạn kỹ thuật minh họa là chính sách thu dữ liệu của VSC.
- S07 nêu công thức đối chiếu và mẫu số loại đăng ký hủy; CSV vẫn bao gồm mọi trạng thái. Đây là dữ liệu phiên thử, không phải KPI tham dự/no-show hoặc định dạng báo cáo được client chấp thuận.
- DemoToolbar có tình huống dữ liệu rỗng để thử zero/empty, bên cạnh mạng/quyền mô phỏng. Đây là công cụ thử thiết kế, không thêm tính năng xóa danh sách vào phạm vi sản phẩm.

## Nguồn đối chiếu

- [Research & Discovery Process](../../../research/user-voice-research-discovery-process-2026-11-16/research.md): 14 claim unverified, 0 verified; hoàn tất tổng hợp không đồng nghĩa kiểm chứng.
- [User Research](../../../research/user-voice-research-discovery-process-2026-11-16/03-user-research.md), [User Persona](../../../research/user-voice-research-discovery-process-2026-11-16/04-user-persona.md): giữ đúng mẫu n=8/n=6 và tên vai trò; không coi Lan/Minh là người nghiên cứu.
- [Problem Statement](../../../research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md), [Problem Canvas](../../../research/user-voice-research-discovery-process-2026-11-16/06-problem-canvas.md): P-01–P-04, ranh giới đề xuất, phương án thay thế.
- [Customer Journey Map](../../../research/user-voice-research-discovery-process-2026-11-16/07-customer-journey-map.md): sáu giai đoạn và điểm chuyển dữ liệu; TV09 chưa có journey xác nhận.
- [Assumption & Hypothesis Validation](../../../research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md): RD-A01–RD-A10; không tái sử dụng Supported/Invalidated của TV10 vượt phép đo.

Các tài liệu spine không dùng mặc định visual hoặc trạng thái mô phỏng để đổi nhãn bằng chứng. Phạm vi sản phẩm, điều kiện pilot, bảo mật mã tra cứu và thẩm quyền vận hành tiếp tục là câu hỏi cho giai đoạn kế tiếp.
