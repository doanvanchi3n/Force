---
name: Chuyende3 / Force
status: draft
approval: pending
proposal: V1 — kịch bản và quy tắc prototype để xem xét
created: 2026-11-18
updated: 2026-11-18
sources:
  - ../../research/user-voice-research-discovery-process-2026-11-16/research.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/03-user-research.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/04-user-persona.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/06-problem-canvas.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/07-customer-journey-map.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md
scenario_origin: .memlog.md
---

# Chuyende3 / Force — Experience Spine

## Foundation

Web responsive tiếng Việt, ưu tiên đọc/đăng ký trên mobile và tác vụ BTC trên desktop. Người dùng đã chọn **Campus Friendly + Bento Grid, Blue / Orange / White** và đầu ra **Markdown + HTML có thể bấm thử**. [DESIGN.md](DESIGN.md) chứa token đề xuất; tài liệu này chứa hành vi. Chi tiết thị giác và nghiệp vụ V1 vẫn là **bản nháp, approval pending**; chưa chọn framework/backend hay xác nhận phạm vi sản phẩm/client.

Bộ discovery 16/11/2026 hoàn tất tổng hợp nhưng có 14 claim chưa xác minh, 0 đã xác minh. Hai vai trò giữ nguyên: **Persona A — Người vận hành đăng ký và tham dự sự kiện** và **Persona B — Sinh viên đăng ký/tham gia sự kiện**. Lan và Minh bên dưới chỉ là **nhân vật hư cấu trong kịch bản thử**, không phải người nghiên cứu hoặc persona mới.

Sự kiện minh họa: **Workshop: Tự tin thuyết trình**, 26/11/2026, 17:30–19:00, Phòng sinh hoạt CLB. Đây không phải sự kiện VSC đã xác nhận. Dữ liệu nằm trong bộ nhớ; reload/reset khôi phục fixture; không localStorage, network, email thật, đăng nhập thật hoặc camera thật. Mã FORCE-001… là mã demo, không phải token an toàn để dùng thực tế.

## Information Architecture

| ID / Surface | Điểm vào và mục đích | Điểm tiếp theo / tham chiếu |
| --- | --- | --- |
| S01 — Chi tiết sự kiện | Điểm vào sinh viên; đọc lịch, nơi tổ chức, nội dung và CTA | S02 đăng ký; S04 tra cứu. [Bố cục S01](mockups/key-event.html). |
| S02 — Đăng ký | CTA S01; nhập tên và email | Gửi hợp lệ → S03; quay S01. |
| S03 — Xác nhận/trạng thái | Sau đăng ký hoặc tra cứu đúng mã; xem một bản ghi | Hủy qua ConfirmationDialog; về S01/S04. |
| S04 — Tra cứu | Điều hướng sinh viên; nhập mã demo riêng | Đúng mã → S03; sai mã giữ S04 và cách thử lại. |
| S05 — Danh sách tham dự | Điều hướng BTC; tìm tên/email/mã và lọc trạng thái | Chọn người → S06; tới S07 báo cáo. [Bố cục S05](mockups/key-attendees.html). |
| S06 — Check-in | Điều hướng BTC hoặc người được chọn từ S05 | Tra cứu, xác nhận ghi nhận/hoàn tác; quay S05. [Bố cục S06](mockups/key-check-in.html). |
| S07 — Báo cáo | Điều hướng BTC; xem số đếm và danh sách kết quả | Preview/xuất CSV minh họa; quay S05. |
| S08 — Thư viện component | Liên kết công cụ từ bản thử | [Component gallery](mockups/components.html); chỉ là trang công cụ thiết kế, không phải yêu cầu sản phẩm. |

[Prototype tương tác S01–S07](mockups/index.html) là điểm mở chung; S02, S03, S04 và S07 có bố cục trong bản tương tác. Ba trang key có bố cục thích nghi desktop/mobile và trạng thái bổ sung của S01, S05, S06; S08 giúp đối chiếu component. Cả tám surface có tham chiếu thị giác. AppShell không có danh mục sự kiện/tạo sự kiện; DemoToolbar đổi vai trò phục vụ thử nghiệm, không phải phân quyền.

## Voice and Tone

Nhãn ngắn, nêu hành động và kết quả. Nội dung prototype dùng tiếng Việt; thông tin mô phỏng đặt rõ ở DemoToolbar, lời hướng dẫn trong tác vụ tập trung vào việc đang làm.

| Tình huống | Nội dung đề xuất |
| --- | --- |
| CTA | “Đăng ký tham gia”, “Tra cứu đăng ký”, “Ghi nhận tham dự”, “Xem báo cáo”. |
| Trạng thái | “Đã đăng ký”, “Đã tham dự”, “Đã hủy”; không dùng một nhãn “Thành công” cho mọi chuyển trạng thái. |
| Form sai | “Nhập họ và tên từ 2 đến 80 ký tự.” / “Nhập email hợp lệ, ví dụ: thulan@example.test.”; summary “Kiểm tra lại thông tin”. |
| Trùng email | “Email này đã có đăng ký. Dùng mã tra cứu để xem trạng thái.” Không tạo bản ghi khác, không mở hồ sơ chỉ từ email. |
| Không tìm thấy | “Không tìm thấy mã đăng ký này. Kiểm tra lại mã.” BTC được hướng dẫn kiểm tra thông tin trước khi ghi nhận. |
| Mất mạng mô phỏng | “Đang mất kết nối. Chưa thể cập nhật trạng thái.” Giữ thông tin đang hiển thị, không báo sẽ tự đồng bộ. |
| Quyền bị chặn mô phỏng | “Bạn chưa có quyền thực hiện thao tác này.” Không báo cập nhật hoàn tất. |
| Hủy | “Hủy đăng ký này?”; nút “Giữ đăng ký” / “Xác nhận hủy”. |
| Hoàn tác check-in | “Hoàn tác ghi nhận tham dự?”; yêu cầu lý do; không mô tả là xóa lịch sử máy chủ. |

Không thông báo “đã gửi email”, “đã quét camera” hoặc “đã đồng bộ” vì prototype không thực hiện các tác vụ đó.

## Component Patterns

Tên khớp DESIGN §Components; nội dung trong bảng là quy tắc của bản thử V1.

| Component | Phạm vi | Quy tắc hành vi |
| --- | --- | --- |
| AppShell | S01–S07 | Điều hướng bằng link có nhãn; đổi route đưa focus tới h1; giữ ngữ cảnh sự kiện. |
| EventPanel | S01–S04 | Gom dữ liệu sự kiện minh họa thành các khối bento theo thứ tự đọc; CTA được Button đảm nhiệm; không dùng cả panel làm link mơ hồ. |
| Button | Mọi surface | Native button cho hành động, link cho điều hướng; Enter/Space hoạt động; chặn kích hoạt lặp khi cùng thao tác đang xử lý. |
| FormField | S02/S04/S05/S06 và dialog | Label gắn input; helper/error được liên kết; giữ giá trị người nhập khi lỗi. Tên/email là hai trường đăng ký duy nhất. |
| ErrorSummary | S02/S04 | Chỉ hiện sau submit lỗi; focus summary; từng mục dẫn đến trường liên quan; không xóa các trường hợp lệ. Dialog hoàn tác chỉ có một trường nên dùng lỗi ngay dưới trường và focus trường đó. |
| StatusBadge | S03/S05/S06/S07 | Đọc trạng thái hiện tại từ cùng bản ghi demo; không bấm badge để đổi trạng thái. |
| Notice | Mọi tác vụ có ngoại lệ | Nêu nguyên nhân cụ thể và bước tiếp; cập nhật vùng live cho kết quả, không tự cướp focus khi lọc. |
| FilterBar | S05/S06 | Tìm kiếm/lọc dữ liệu demo tại chỗ; không sửa trạng thái; giữ truy vấn khi chuyển chọn người; có cách bỏ lọc. |
| ParticipantList | S05/S06 | Hành động chọn người có nhãn; không tự check-in khi chọn; lọc không kết quả dùng EmptyState. |
| StatCard | S05/S07 | Số đếm trong nhóm bento tính từ dữ liệu hiện tại; cập nhật cùng chuyển trạng thái, không cộng lượt click; không làm mất ngữ cảnh bảng. |
| ConfirmationDialog | S03/S06 và hướng dẫn DemoToolbar | Chỉ một dialog; focus vào hành động an toàn hoặc trường lý do; trap focus; Escape/đóng không thay đổi; trả focus nút mở nếu còn tồn tại. Sau cập nhật thay nội dung trang, focus kết quả tương ứng. |
| StatusTimeline | S03 | Hiển thị các mốc có trong bản ghi minh họa; phân biệt đăng ký và tham dự; không tự tạo bằng chứng chứng nhận. |
| EmptyState | S05/S06/S07 | Phân biệt chưa có dữ liệu với không khớp lọc; cho thử lại/bỏ lọc/quay lại phù hợp; không tạo dữ liệu thay người dùng. Mã không tìm thấy ở S04 dùng lỗi form để giữ ngữ cảnh nhập. |
| ReportTable | S07 | Đối chiếu tổng bản ghi = chờ check-in + đã tham dự + đã hủy. Tỷ lệ tham dự có mẫu số registered + checked, loại cancelled; đây là số demo, không phải tỷ lệ no-show. CSV gồm mã/tên/email/trạng thái của mọi bản ghi, kể cả đã hủy, khớp preview; không gửi cho BCN thật. |
| DemoToolbar | S01–S08 | Nêu dữ liệu minh họa. Trong bản tương tác: đổi vai trò, bật/tắt mạng/quyền, chọn dữ liệu rỗng, mở hướng dẫn và reset. Reset trả 7 fixture; dữ liệu rỗng giúp thử empty/zero, không phải chức năng xóa dữ liệu sản phẩm. S08 dùng liên kết về bản tương tác. |

## State Patterns

Cold-load là nạp fixture cục bộ: hiển thị ngay, không tạo skeleton hoặc request mạng giả. Focus chung: link/button/field có viền `{colors.focus}` trên nền sáng; nền tối dùng ngoại lệ trong DESIGN §Colors. Route đổi focus h1, lỗi form focus summary, lỗi lý do hoàn tác focus trường lý do; kết quả lọc chỉ thông báo live. Không có hàng dữ liệu giả trong trạng thái empty.

| Surface | Empty / error / trạng thái thường | Offline / permission-denied |
| --- | --- | --- |
| S01 | Chi tiết fixture có sẵn; không có catalogue empty. Route không hợp lệ quay điểm vào S01, không hiển thị sự kiện bịa mới. | Vẫn đọc fixture; CTA có thể mở form; thao tác thay đổi ở bước tiếp sẽ bị chặn. Trang thông tin không có quyền riêng. |
| S02 | Form rỗng ban đầu; thiếu tên/email sai → lỗi trường + summary; email trùng → hướng dẫn tra cứu, không nhân đôi; hợp lệ → S03. | Submit bị chặn, giữ tên/email và hiển thị Notice; không sinh mã hay bản ghi khi chưa ghi được. |
| S03 | Trạng thái đăng ký/tham dự/hủy; không có bản ghi hợp lệ → hướng tới S04; dialog đóng giữ nguyên; hủy chỉ cho registered. | Giữ bản ghi đang hiển thị, chặn hủy; không đổi badge/timeline khi cập nhật bị chặn. |
| S04 | Mã trống hoặc không khớp → ErrorSummary và lỗi liên kết input; giữ mã để sửa; đúng mã → S03; không tra cứu bằng danh sách công khai. | Mã demo có thể đối chiếu fixture cục bộ; không tuyên bố tra cứu được máy chủ khi mất mạng. Quyền demo chặn thay đổi, không biến mã thành xác thực thật. |
| S05 | Danh sách ban đầu; tìm/lọc không khớp → EmptyState và bỏ lọc; có bản ghi → chọn sang S06. | Giữ danh sách đang hiển thị để đọc; Notice cho chế độ bị chặn, thao tác cập nhật ở S06 không chạy. Không khẳng định quyền xem dữ liệu thật. |
| S06 | Chưa chọn người; không có tên; registered → cho xác nhận; checked → cảnh báo đã ghi nhận; cancelled → chặn check-in; hoàn tác thiếu lý do → lỗi. | Giữ người đã chọn và truy vấn; chặn check-in/hoàn tác, không đổi số đếm; giữ nháp lý do trong RAM nếu đóng dialog để đổi điều kiện demo rồi mở lại. Có thể thử lại khi điều kiện được khôi phục. |
| S07 | Số 0 vẫn hiện 0; danh sách rỗng dùng EmptyState; preview CSV có tiêu đề và nội dung tương ứng; không báo gửi báo cáo thật. | Mất mạng vẫn đọc/preview fixture cục bộ, không hứa dữ liệu mới. Quyền bị chặn: giữ preview nhưng không thực hiện xuất. |
| S08 | Các biến thể component được gắn nhãn; không có nghiệp vụ đăng ký mới. | Trang tham chiếu mở cục bộ; trạng thái offline/permission là mẫu minh họa, không phải kiểm soát truy cập. |

**Guard của dữ liệu demo — giả định V1:** tên/email bắt buộc; tên trim, gộp khoảng trắng liên tiếp, dài 2–80 ký tự; email trim, chuyển chữ thường, tối đa 254 ký tự và có định dạng hợp lệ. So trùng email chuẩn hóa, không mở hồ sơ chỉ dựa vào email. Mã tra cứu trim và chuyển chữ hoa; lý do hoàn tác bắt buộc sau trim, tối đa 300 ký tự. Những giới hạn này phục vụ bản thử, chưa là quy tắc VSC. Không thêm MSSV, tài khoản hoặc trường thu dữ liệu khác.

| Chuyển trạng thái | Điều kiện và kết quả |
| --- | --- |
| Tạo → `registered` (Đã đăng ký) | Form hợp lệ, email chưa có, online demo và được phép; tạo một bản ghi/mã. Xác nhận tức thì chỉ là giả định prototype. |
| `registered` → `cancelled` (Đã hủy) | Phải xác nhận hủy; không thay đổi nếu đóng dialog; không hủy bản ghi checked hoặc cancelled. |
| `registered` → `checked` (Đã tham dự) | Chọn đúng người rồi xác nhận; chỉ một lần; checked không được cộng lại, cancelled không được check-in. |
| `checked` → `registered` | Hoàn tác qua dialog và lý do không rỗng; không phải xóa audit máy chủ. Các loại bản ghi khác không được hoàn tác check-in. |
| Mọi cập nhật bị chặn | Offline hoặc permission-denied giữ dữ liệu và số đếm; không xếp hàng đồng bộ; thử lại sau khi điều kiện demo đổi. |

## Interaction Primitives

- Click/tap hoặc Enter/Space để kích hoạt; Tab theo thứ tự nội dung. Không yêu cầu swipe, drag hoặc hover để hoàn thành tác vụ.
- Form submit bằng nút/Enter; kiểm tra dữ liệu trước thay đổi. Tra cứu/chọn người và xác nhận check-in là hai bước riêng.
- ConfirmationDialog là modal duy nhất; Escape tương đương đóng an toàn, không tương đương xác nhận. Không lồng modal.
- Kết quả thao tác hiện bằng chữ cạnh nội dung liên quan; không chỉ toast tạm. Mạng/quyền là switch của DemoToolbar, không mô phỏng thành thành công máy chủ.
- Reload/reset khôi phục fixture; chuyển route trong cùng phiên giữ thay đổi demo để đối chiếu S03/S05/S06/S07. Chọn “Dữ liệu rỗng” trên DemoToolbar để thử danh sách rỗng và số 0; reset khôi phục bảy bản ghi. Không animation trang trí; giảm chuyển động theo thiết lập hệ thống.

[Mã tương tác cục bộ](mockups/app.js) thể hiện route, fixture và các guard để đối chiếu với bản thử; đây không phải backend hoặc cơ chế phân quyền sản phẩm.

## Accessibility Floor

- Mục tiêu chữ thường ≥4,5:1; chữ lớn/dấu hiệu điều khiển ≥3:1 theo DESIGN §Colors. Focus dùng `{colors.focus}` trên nền sáng và accent/accent-strong trên nền ink; mục tiêu chạm tối thiểu `{layout.control-min}` là đề xuất dự án, cao hơn WCAG 2.2 minimum 24 CSS px có ngoại lệ.
- HTML có heading, landmark, label, button/link đúng vai trò; bảng có header. Badge có chữ, biểu tượng trang trí không đọc lặp nhãn.
- Lỗi gắn trường qua `aria-describedby`/`aria-invalid`; ErrorSummary dẫn đến trường. Live region chỉ thông báo kết quả và số kết quả, không đọc lại cả bảng.
- ConfirmationDialog có tên, mô tả hậu quả, trap focus, Escape và trả focus; nền không còn tương tác khi mở. Thử toàn bộ bốn flow bằng bàn phím.
- Kiểm tra zoom 200%, wrap email/mã, mobile và reduced motion; không lấy prototype hoạt động làm bằng chứng đạt toàn bộ WCAG.

## Responsive & Platform

| Khung | Quy tắc |
| --- | --- |
| Trên `{layout.breakpoint-sidebar}` | Sidebar BTC `{layout.sidebar-width}`; S01 bento hai cột, S06 dùng hai phần khi đủ chỗ; BTC có số đếm bento trên bảng; main tối đa `{layout.content-max}`. |
| Từ `{layout.breakpoint-stack}` đến `{layout.breakpoint-sidebar}` | Điều hướng BTC chuyển lên đầu, giữ nhãn; vùng nội dung thích nghi, toolbar wrap. |
| Dưới `{layout.breakpoint-stack}` | Bento thành một cột, lề `{spacing.gutter-mobile}`; ParticipantList xếp dọc, nút tối thiểu `{layout.control-min}`; giữ thứ tự đọc và tìm trước/xác nhận sau. |

Đây là web responsive; không có app native riêng hoặc cơ chế offline lưu dữ liệu được chốt. Font hệ thống và tài nguyên cục bộ giúp mở bản thử, không chứng minh vận hành offline ngoài thực tế.

## Inspiration & Anti-patterns

Người dùng chọn Campus Friendly + Bento Grid và Blue / Orange / White, thay thế mặc định lime/Minimalism trước đó. ui-ux-pro-max đã cung cấp tham khảo Event Management, Minimalism & Swiss, Calendar & Scheduling; phần lỗi gắn trường và focus modal hỗ trợ tương tác. Không lấy gợi ý thư viện làm kết quả nghiên cứu VSC, không kế thừa framework trong ví dụ BMAD.

Không chọn Wedding, glass, gradient, motion trang trí, catalogue nhiều sự kiện, tài khoản/login, tạo sự kiện, thanh toán hoặc email thật trong V1. Không coi các phần không dựng là nhu cầu bị bác bỏ. QR/camera chỉ có thể minh họa cơ chế; S06 dùng tra cứu để thử quy tắc ghi nhận và ngoại lệ.

## Key Flows

Các mã **UJ-01–UJ-04** do bản thử đặt, không phải mã yêu cầu trong discovery. Cả bốn là kịch bản hư cấu; Lan đại diện tình huống Persona B, Minh đại diện tình huống Persona A, không thay tên persona nguồn. [Journey nguồn](../../research/user-voice-research-discovery-process-2026-11-16/07-customer-journey-map.md) có sáu giai đoạn giữ nguyên dưới đây; [P-01–P-04](../../research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md) và [RD-A01–RD-A10](../../research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md) đều chưa thành yêu cầu được duyệt.

### UJ-01 — Đăng ký và xác nhận · Lan, kịch bản hư cấu

1. Lan mở S01, đọc lịch/địa điểm và nội dung sự kiện minh họa.
2. Chọn “Đăng ký tham gia” tới S02; nhập tên và email.
3. Gửi form; bản thử kiểm tra hợp lệ, trùng email và điều kiện cập nhật.
4. **Điểm đạt mục tiêu (climax):** S03 cho thấy “Đã đăng ký”, mã tra cứu và thông tin chuẩn bị; Lan biết kết quả của thao tác.

Nhánh lỗi: thiếu/sai trường giữ dữ liệu và focus ErrorSummary; trùng email hướng tra cứu; mất mạng/quyền chặn tạo bản ghi. Không gửi email thật. Trace: **1. Biết đến sự kiện → 2. Đăng ký → 3. Xác nhận và chuẩn bị**; P-01/P-04; RD-A04/A07/A10.

### UJ-02 — Tra cứu và hủy · Lan, kịch bản hư cấu

1. Lan mở S04, nhập mã demo đã có và tới S03 của một bản ghi.
2. Đọc trạng thái Đã đăng ký, chọn hủy khi kế hoạch thay đổi.
3. ConfirmationDialog nêu hậu quả; Lan có thể giữ đăng ký hoặc xác nhận hủy.
4. **Điểm đạt mục tiêu (climax):** S03 hiển thị “Đã hủy”; bản ghi tương ứng trên S05 cùng trạng thái, không còn check-in được.

Nhánh lỗi: mã trống/sai không mở bản ghi; đóng dialog giữ trạng thái; checked không hủy; offline/quyền chặn cập nhật. Trace: **3. Xác nhận và chuẩn bị → 4. Thay đổi hoặc hủy**; P-01/P-04; RD-A04/A05/A09. Hủy đơn giản chưa chứng minh giảm no-show.

### UJ-03 — Check-in và ngoại lệ · Minh, kịch bản hư cấu

1. Minh mở S05, tìm và chọn một người đang Đã đăng ký, tới S06.
2. Đọc tên/email/mã và trạng thái để đối chiếu người đến; chọn “Xác nhận check-in”.
3. Bản thử kiểm tra điều kiện, đổi registered thành checked đúng một lần.
4. **Điểm đạt mục tiêu (climax):** kết quả “Đã tham dự” và số đếm cùng cập nhật; lần ghi nhận lặp được chặn.
5. Nếu chọn nhầm, Minh mở hoàn tác, nhập lý do và xác nhận để đưa bản ghi về Đã đăng ký.

Nhánh lỗi: không có tên → kiểm tra thông tin, không tự thêm; cancelled → không ghi nhận; checked → không cộng lặp; thiếu lý do → giữ dialog; offline/quyền → giữ dữ liệu. Người đi thay, quy tắc định danh và camera thật còn mở. Trace: **5. Đến sự kiện/check-in**; P-02/P-01; RD-A02/A08.

### UJ-04 — Báo cáo và CSV · Minh, kịch bản hư cấu

1. Minh mở S07 sau các thao tác demo; đọc số đăng ký, tham dự và hủy có nhãn rõ.
2. Đối chiếu ReportTable với các bản ghi hiện tại; xem preview nội dung xuất.
3. Chọn xuất CSV minh họa khi điều kiện quyền cho phép.
4. **Điểm đạt mục tiêu (climax):** nội dung CSV khớp preview và trạng thái hiện tại; Minh có đầu ra demo để kiểm tra, chưa gửi báo cáo thật.

Nhánh lỗi: danh sách rỗng vẫn hiển thị số 0 và hướng dẫn; quyền bị chặn không xuất; offline chỉ đọc/xuất dữ liệu demo hiện có, không hứa dữ liệu mới; lỗi tạo tệp nếu xảy ra giữ preview và cho thử lại. Trace: **6. Sau sự kiện**; P-03; RD-A03. Không tự cấp chứng nhận hoặc điểm rèn luyện.
