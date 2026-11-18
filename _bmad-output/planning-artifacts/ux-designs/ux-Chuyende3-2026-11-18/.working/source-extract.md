# Trích xuất nguồn cho Design System và Prototypes

Ngày trích xuất: **18/11/2026**. Chỉ đọc bảy tài liệu BMAD bên dưới để lấy nội dung nghiên cứu; không đọc lại corpus gốc, không bổ sung nghiên cứu web. Đây là đầu vào làm việc cho UX, **không phải phạm vi sản phẩm đã duyệt**. Người dùng yêu cầu tạo Design System + Prototypes; yêu cầu đó chưa xác nhận các giả thuyết discovery, chọn phong cách thị giác hay phê duyệt một MVP.

## Nguồn, độ mới và mức xác minh

Thư mục nguồn: `_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/`.

| Tài liệu — giữ nguyên tên | Phần dùng | Trạng thái cần mang sang UX |
| --- | --- | --- |
| [research.md](../../../research/user-voice-research-discovery-process-2026-11-16/research.md) — Research & Discovery Process | Kết luận để ra quyết định; Người dùng, công việc và khó khăn; Khuyến nghị và đầu vào cho BMAD; Lịch kiểm tra lại và trạng thái xác minh | Hoàn tất tổng hợp ngày 16/11/2026; `imported-unverified`; 14 claim chưa xác minh, 0 claim đã xác minh |
| [03-user-research.md](../../../research/user-voice-research-discovery-process-2026-11-16/03-user-research.md) — User Research | Phương pháp và mẫu; Kết quả ban tổ chức; Kết quả sinh viên; Diễn giải chung có giới hạn | Khảo sát khám phá tự báo cáo; chưa kiểm tra Form/CSV; không đại diện VSC |
| [04-user-persona.md](../../../research/user-voice-research-discovery-process-2026-11-16/04-user-persona.md) — User Persona | Persona A; Persona B; Cách dùng và kiểm chứng | Hai persona sơ bộ theo vai trò; không phải hai người thật, không phải xác nhận của client |
| [05-problem-statement.md](../../../research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md) — Problem Statement | Các vấn đề ứng viên cần ưu tiên kiểm chứng; Ranh giới quyết định | P-01–P-04 là vấn đề ứng viên; phạm vi tuần 1 chỉ là đề xuất |
| [06-problem-canvas.md](../../../research/user-voice-research-discovery-process-2026-11-16/06-problem-canvas.md) — Problem Canvas | Canvas làm việc; Những phương án cần đem so sánh | Canvas mới dựng, bản nháp; TV08 chưa hoàn thành Canvas/Miro |
| [07-customer-journey-map.md](../../../research/user-voice-research-discovery-process-2026-11-16/07-customer-journey-map.md) — Customer Journey Map | Hành trình hai phía; Các điểm chuyển giao dữ liệu cần quan sát | Hành trình hiện trạng giả thuyết mới dựng; TV09 còn Todo; chưa quan sát xuyên suốt một sự kiện |
| [08-assumption-hypothesis-validation.md](../../../research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md) — Assumption & Hypothesis Validation | Sổ giả định; Đối chiếu ba phép kiểm chứng H1–H3; Thiết kế vòng kiểm chứng tiếp theo | RD-A01–RD-A10 chưa tạo thành yêu cầu; một số kết luận Supported/Invalidated của TV10 vượt phép đo |

Bản tổng hợp mới hai ngày tại thời điểm đọc, nhưng ngày xuất bản nguồn gốc chưa rõ. Ngày thu thập khảo sát **được báo cáo** là 12/11/2026, không phải ngày xác minh độc lập. `research.md` dùng mốc thu thập tạm để tính lịch làm mới: sớm nhất 11/02/2027 cho công cụ, 12/05/2028 cho tín hiệu khảo sát. Các mốc này **không chứng nhận độ đúng**; phải kiểm tra trước khi chốt quyết định. Không đổi nhãn “chưa xác minh” chỉ vì đã đọc và đối chiếu trích dẫn.

## Hai vai trò và nhu cầu ứng viên

| Tên phải giữ | Dữ kiện được báo cáo | Nhu cầu được nguồn diễn giải, chưa xác nhận |
| --- | --- | --- |
| **Persona A — Người vận hành đăng ký và tham dự sự kiện** | Mẫu BTC n=8: Forms 8/8, Sheets/Excel 7/8; trùng thông tin 6/8, sai/thiếu 5/8; tổng hợp/báo cáo hơn 2 giờ 4/8; trung vị hài lòng hiện trạng 4/5. Vai trò có thể tách người phụ trách danh sách, check-in, hỗ trợ. | Biết danh sách nào có hiệu lực và ai thực sự tham dự; cập nhật rõ ràng, đối chiếu được, xử lý ngoại lệ. Không mặc định một người có toàn quyền. Nguồn: `04` Persona A; `03` kết quả BTC Q9–20; `05` P-01–P-03. |
| **Persona B — Sinh viên đăng ký/tham gia sự kiện** | Mẫu n=6 theo báo cáo: Forms 5/6; thích nhận vé/QR qua email 5/6; xác nhận sát ngày 2/6, không nhận 1/6; không thấy tên tại check-in 3/6. | Tìm lại xác nhận và thông tin cần thiết, hiểu trạng thái, biết cách hỏi/sửa khi có lỗi hoặc đổi kế hoạch. Nguồn: `04` Persona B; `03` kết quả sinh viên Q4–10; `05` P-04. |

Không cộng hai mẫu thành 14 người duy nhất. Không dùng 3/6 chọn “không báo nếu bận” làm tỷ lệ no-show thực tế; không dùng 0/6 thích nhận vé qua App/Web để bác bỏ tài khoản/portal. Không thêm tên, tuổi, lời trích dẫn hoặc đặc điểm thiết bị cho persona.

## Hành trình nguồn → màn hình và trạng thái có thể thử

Mọi màn hình/trạng thái trong bảng là **ánh xạ đề xuất cho prototype**, không phải tính năng đã được client yêu cầu. Tên trạng thái dưới đây là nhãn làm việc, chưa phải quy tắc nghiệp vụ. Sáu tên giai đoạn giữ theo `07-customer-journey-map.md` §Hành trình hai phía.

| Giai đoạn và công việc nguồn | Màn hình ứng viên | Trạng thái/tình huống có cơ sở để diễn thử | Căn cứ và giới hạn |
| --- | --- | --- | --- |
| **1. Biết đến sự kiện** — đọc thông tin; BTC công bố và hướng dẫn | Điểm vào phía sinh viên; thông tin/chi tiết một sự kiện | Có thông tin để đọc và đi tới đăng ký | `07` giai đoạn 1: chủ yếu giả thuyết W1-TV01. Danh mục nhiều sự kiện, tìm kiếm/lọc và cơ chế khám phá chưa được chứng minh; không mặc định là yêu cầu. |
| **2. Đăng ký** — điền/gửi thông tin; BTC thu và quản lý phản hồi | Form đăng ký; danh sách người đăng ký phía BTC | Gửi đăng ký; thông tin sai/thiếu; bản ghi nghi trùng | `03` BTC Q7–10, sinh viên Q4; `07` giai đoạn 2; `05` P-01. Chưa biết trường bắt buộc, định danh, duyệt đăng ký, giới hạn chỗ hoặc lúc nào được coi là thành công. |
| **3. Xác nhận và chuẩn bị** — tìm xác nhận/lịch/địa điểm; BTC cập nhật danh sách, thông báo | Kết quả đăng ký/tra cứu xác nhận; chi tiết sự kiện; danh sách BTC | Có xác nhận; chưa nhận/tìm lại không được; xem thông tin chuẩn bị | `03` sinh viên Q5–6; `04` Persona B; `07` giai đoạn 3; `08` RD-A07/A10. Chưa chọn email làm kênh duy nhất hay có gửi tự động; gửi thành công không đồng nghĩa vào Inbox. |
| **4. Thay đổi hoặc hủy** — báo bận/sửa; BTC nhận yêu cầu và cập nhật | Hành động hủy/sửa từ trang tra cứu; danh sách BTC phản ánh thay đổi | Yêu cầu hủy/sửa; xác nhận kết quả và bản ghi tương ứng để đối chiếu | `03` BTC Q11; `07` giai đoạn 4 và điểm chuyển tin nhắn hủy/sửa → danh sách tại cửa; `08` RD-A09. Nút hủy là giải pháp để thử; chưa có hạn hủy, điều kiện cho phép, duyệt thủ công/tự động hoặc bằng chứng tăng báo hủy. |
| **5. Đến sự kiện/check-in** — cung cấp thông tin/mã; BTC tra cứu/ghi nhận và xử lý ngoại lệ | Bàn check-in; tra cứu người tham dự; kết quả ghi nhận | Tìm thấy và ghi nhận; không có tên; mạng/thiết bị có sự cố; người đi thay. Có thể diễn thử thiếu mã, trùng mã, sửa nhầm như giả thuyết vận hành. | `03` BTC Q13–15, sinh viên Q8–9; `07` giai đoạn 5 và điểm chuyển tra cứu/quét mã → ghi nhận; `08` RD-A08. QR là phương án ứng viên; không mặc định nhanh hơn, dùng MSSV, local cache hay hoạt động offline. |
| **6. Sau sự kiện** — BTC đối chiếu/tổng hợp; sinh viên có thể tìm ghi nhận nếu áp dụng | Báo cáo BTC; danh sách đăng ký/tham dự; trạng thái tham dự phía sinh viên | Tổng hợp số đăng ký/tham dự; đối chiếu sai khác; xem ghi nhận; diễn thử yêu cầu sửa nhầm nếu chọn quy tắc xử lý | `03` BTC Q16–18, sinh viên Q10; `07` giai đoạn 6 và điểm chuyển danh sách → báo cáo; `05` P-03/P-04. Định dạng báo cáo/xuất file, thẩm quyền sửa và nhu cầu tra cứu chưa chốt. Danh sách điểm/chứng nhận không đồng nghĩa sản phẩm có quyền công nhận. |

Điểm vào có thể giúp chọn xem luồng **Sinh viên** hoặc **BTC** trong prototype để thử hai vai trò. Đây là cách điều hướng bản thử, không phải bằng chứng yêu cầu màn chọn vai trò, cơ chế đăng nhập hay phân quyền sản phẩm. Tài khoản sinh viên còn **chưa kiểm chứng, chưa bác bỏ** (`08` RD-A04).

## Ràng buộc và khoảng trống để giữ khi thiết kế

- **Chưa duyệt phạm vi:** VSC là client tiềm năng; chưa xác nhận hợp tác, pilot, thẩm quyền hay nhu cầu. Cần tiếp tục phân biệt quyền tạo prototype của người dùng với sự chấp thuận của client.
- **Phạm vi tuần 1 được đề xuất:** một CLB, sự kiện miễn phí, đăng ký và quản lý tham dự. Thanh toán/bán vé, tài chính CLB, tự công nhận điểm rèn luyện, tích hợp tài khoản trường chưa được phép, nhận diện khuôn mặt và app di động riêng nằm ngoài đề xuất này; không gọi đó là MVP đã duyệt (`05` §Ranh giới quyết định).
- **Quy tắc nghiệp vụ còn thiếu:** điều kiện đăng ký hợp lệ; sửa/hủy; nhận diện người đến; người đi thay; bản danh sách có hiệu lực; quyền mỗi vai trò; sửa ghi nhận; điều kiện chứng nhận; danh tính và dữ liệu nào được phép hiển thị. Không mặc định MSSV hoặc danh sách công khai là thiết kế được chấp thuận.
- **Điều kiện thực tế còn thiếu:** quy mô/sự kiện thử, thiết bị, mạng, kỹ năng, dữ liệu được phép dùng, mức sẵn sàng đổi công cụ. Phải tách lỗi mạng/thiết bị khỏi kết luận cần offline/QR.
- **Chưa có baseline hay KPI:** thời gian tự báo cáo là toàn bộ tổng hợp/báo cáo, không phải thời gian đối chiếu đo được. Prototype có thể thử hoàn thành tác vụ, lỗi, trợ giúp và khả năng tìm thông tin; chưa đặt tỷ lệ cải thiện hoặc tiêu chí đạt giả định.
- **Giữ phương án so sánh:** quy trình hiện tại cải tiến, công cụ có sẵn, chức năng hẹp mới (`06` §Những phương án cần đem so sánh). Mức hài lòng BTC 4/5 phải được giữ cùng khó khăn; chưa có bằng chứng phải xây website riêng.
- **Chưa có quyết định thị giác/kỹ thuật:** bảy nguồn không chốt màu, font, phong cách, logo, stack hoặc breakpoint. Các lựa chọn từ thư viện thiết kế là ứng viên cho người dùng xem xét, không phải phát hiện về VSC.

## Tên và mã truy vết phải giữ

Giữ **Chuyende3 / Force**, **CLB Kỹ năng VKU (VSC)**, hai tên persona ở trên, sáu tên giai đoạn journey, **P-01–P-04**, **RD-A01–RD-A10**, **TV10-H1–H3** và các mã nguồn **W1-TV01**, **W2-TV04**, **W2-TV05**, **W2-TV06**, **W2-TV07**, **W2-TV08**, **W2-TV09**, **W2-TV10** khi nhắc tới. Không đồng nhất các mã A03/A04 ở TV08 với mã RD-A mới; không biến TV06/TV10 dẫn lại khảo sát thành mẫu độc lập. Các mã nguyên bản chỉ được truy lại qua bảy tài liệu tổng hợp đã đọc trong lần trích xuất này.
