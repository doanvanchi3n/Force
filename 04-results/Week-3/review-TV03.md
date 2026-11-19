# BÁO CÁO ĐÁNH GIÁ TOÀN DIỆN SẢN PHẨM GIAI ĐOẠN 1
**Mã thành viên:** TV03 (Huỳnh Thanh Thuận)  
**Nhánh thực hiện:** `review/week-3-tv03`  
**Phương pháp áp dụng:** 
- `bmad-review` (Phối hợp 3 lăng kính: *Adversarial Critique*, *Edge-case Hunter*, *Verification Gap*)
- `bmad-code-review` (Đánh giá cấu trúc, semantic và độ tin cậy mã nguồn Prototype)
- Tiêu chuẩn thiết kế & khả năng truy cập từ `ui-ux-pro-max` (WCAG 2.1 AA, Token system, Component consistency)  
- Tuân thủ quy tắc phân quyền theo `AGENTS.md`.

---

## TỔNG QUAN TÌNH TRẠNG HIỆN TẠI (EXECUTIVE SUMMARY)

Giai đoạn 1 đã bước đầu hình thành được khung đề xuất giải pháp ([06-Planning/BID.md](../../06-Planning/BID.md)) và một bản mẫu tương tác đơn giản ([prototype/dist/index.html](../../prototype/dist/index.html)). Tuy nhiên, khi soi chiếu dưới các tiêu chuẩn kỹ thuật và phương pháp luận chuyên sâu, sản phẩm bộc lộ sự **đứt gãy nghiêm trọng giữa nghiên cứu thực địa và giải pháp đề xuất**, dữ liệu khảo sát còn quá mỏng, cùng nhiều lỗ hổng biên trong cả thiết kế UI/UX lẫn mã nguồn JavaScript.

Dưới đây là kết quả đánh giá chi tiết theo 4 phần trọng tâm.

---

## PHẦN 1: ĐÁNH GIÁ NGHIÊN CỨU & TÀI LIỆU PO/BA (`04-results/` & `06-Planning/BID.md`)

Áp dụng phương pháp **Adversarial Critique** (Phản biện lỗ hổng logic) và **Verification Gap** (Khoảng trống bằng chứng kiểm chứng):

### 1.1. Lỗ hổng về tính xác thực của Khách hàng (Client Validation Gap)
- **Vấn đề cốt lõi:** Tài liệu BID mục 1 và các kết quả nghiên cứu xác định CLB Kỹ năng VKU (VSC) là đối tượng nghiên cứu. Tuy nhiên, tình trạng thực tế ghi nhận: *"VSC là client tiềm năng. Việc hợp tác và người có quyền duyệt nghiệp vụ chờ xác nhận"*.
- **Hệ quả logic:** Toàn bộ các quy trình nghiệp vụ giả định (cách thức check-in, vai trò ban chủ nhiệm, cách cấp vé) hiện chỉ là **suy đoán đơn phương của nhóm** (Assumptions), chưa hề có biên bản làm việc chính thức, thỏa thuận hợp tác hay stakeholder đại diện ký duyệt. Xây dựng giải pháp trên một client chưa cam kết là rủi ro lớn nhất của dự án.

### 1.2. Mẫu khảo sát quá nhỏ và dữ liệu tự mâu thuẫn (Sample Size & Data Discrepancy)
- **Kích thước mẫu phi đại diện:**
  - Khảo sát sinh viên: Chỉ thu được **06 phản hồi hợp lệ** ([04-results/Week-2/TV05.md](../../04-results/Week-2/TV05.md)).
  - Khảo sát Ban tổ chức: Chỉ thu được **08 phản hồi hợp lệ** ([04-results/Week-2/TV04.md](../../04-results/Week-2/TV04.md)).
  - Với một trường đại học hàng nghìn sinh viên và các sự kiện quy mô hàng trăm người, mẫu 6–8 phản hồi không đủ độ tin cậy thống kê để đưa ra các kết luận định lượng cho yêu cầu hệ thống (REG-01 → REG-06).
- **Mâu thuẫn số liệu nội bộ chưa đối soát:**
  - Ngay trong tài liệu [06-Planning/BID.md](../../06-Planning/BID.md) (dòng 11) đã tự thừa nhận: *"Số liệu BID lấy từ bảng kết quả TV04 và TV05. TV10 ghi số gộp trùng/sai là 4/8, cần đối chiếu trước khi nộp"*.
  - Báo cáo tuần 2 của TV04 ghi 6/8 chọn trùng đăng ký và 5/8 chọn sai thông tin, nhưng TV10 lại tổng hợp thành 4/8. Sự thiếu nhất quán này cho thấy khâu tổng hợp dữ liệu giữa các thành viên chưa có cross-check chéo chặt chẽ.

### 1.3. Sự đứt gãy tiến độ và khoảng trống phân công trong Tuần 1 & Tuần 2
- **Tình trạng nộp bài Tuần 1 (Week-1 Delivery Gap):**
  - Có đến **6/10 thành viên** (`TV02`, `TV04`, `TV05`, `TV06`, `TV08`, `TV09`) nộp tài liệu rỗng (chỉ 26 dòng theo template ban đầu, nội dung hoàn toàn trống, trạng thái `Todo`).
  - Chỉ có `TV01`, `TV07` và `TV10` có nội dung nghiên cứu thực tế. Điều này tạo ra sự chắp vá về thông tin nền tảng.
- **Tình trạng nộp bài Tuần 2 (Week-2 Delivery Gap):**
  - `TV09` (Customer Journey Map - Hành trình trải nghiệm khách hàng) vẫn đang ở trạng thái sơ sài / khung nháp (`Todo`, 42 dòng). Việc thiếu CJM hoàn chỉnh dẫn đến việc luồng người dùng trong BID và Prototype bị cắt gọt cơ học mà không dựa trên điểm chạm thực tế (touchpoints) của sinh viên.
  - `TV01` (Tổng hợp Tuần 2) vẫn ở trạng thái `Todo`.

### 1.4. Lỗ hổng phạm vi nghiệp vụ trong BID (Scope Reduction Fallacy)
- Bài toán ban đầu đặt ra tại [03-Research/Problem-Statement.md](../../03-Research/Problem-Statement.md) là: **Ùn tắc check-in, thất lạc dữ liệu, danh sách lệch phiên bản và sai sót vé**.
- Tuy nhiên, trong [06-Planning/BID.md](../../06-Planning/BID.md) (mục 1.4 & 2), phạm vi demo bị co hẹp triệt để xuống mức: *Chỉ hiển thị trang chi tiết, điền 2 trường (Tên, Email) không cần tài khoản, và mở popup xem thư giả lập*.
- Các bài toán cốt lõi của đề tài như:
  - Giới hạn sức chứa sự kiện (Event Capacity / Quota)?
  - Phân quyền duyệt người tham dự của BTC?
  - Cơ chế tạo và quét mã QR tại bàn check-in?
  - Xử lý khi sinh viên hủy đăng ký?
  → Đều bị hoãn sang "P2 hoặc chờ chốt". Việc này khiến giải pháp trở nên tầm thường hóa (trivialized), không giải quyết được vấn đề thực tế mà nghiên cứu đã nêu.

---

## PHẦN 2: ĐÁNH GIÁ DESIGN SYSTEM (`prototype/design-system.md`)

Tham chiếu đối chiếu tiêu chuẩn **UI/UX Pro Max** và quy chuẩn thiết kế hệ thống giao diện:

### 2.1. Đánh giá Bảng màu (Color Tokens & Accessibility)
- **Điểm tích cực:** Đã bước đầu định nghĩa các biến CSS token tại `:root` (`--canvas`, `--surface`, `--ink`, `--accent`, `--success`, `--warning`, `--error`).
- **Lỗ hổng tương phản (Contrast Ratio & WCAG 2.1 AA):**
  - `--accent: #dafa71` (vàng xanh neon sáng). Khi dùng làm nền nút `.ActionButton` kết hợp chữ `--ink: #162d26`, độ tương phản đạt chuẩn. Tuy nhiên:
    - Trong poster `.poster`: Sử dụng text `<strong>NÓI ĐỂ KẾT NỐI<span>.</span></strong>` với màu nền `--ink` và chữ trắng xen kẽ màu `--accent` tạo cảm giác thị giác chói lóa, khó quét nhanh trên màn hình nhỏ.
    - Màu cảnh báo `--warning: #74511c` trên nền `--warning-bg: #faeed3`: Tỷ lệ tương phản xấp xỉ ~4.6:1 (mấp mé ngưỡng tối thiểu 4.5:1 của WCAG AA cho chữ thông thường). Trên các màn hình có độ sáng cao hoặc góc nhìn nghiêng, chữ sẽ rất mờ.
  - Thiếu hoàn toàn các biến màu cho trạng thái tương tác nâng cao: `--accent-hover`, `--accent-active`, `--surface-hover`, `--line-subtle`. Hiện tại trạng thái hover đang dùng `filter: brightness(.93)` một cách thủ công, không đồng nhất giữa các component.

### 2.2. Đánh giá Typography & Scale chữ (Type Scale)
- **Thiếu Token hóa kích thước chữ (Font Size Tokens):**
  - Trong `design-system.md` chỉ ghi chung chung: `--type: "Segoe UI", system-ui, sans-serif; Nội dung cơ bản 1 rem, line-height 1.55`.
  - Không hề có hệ thống Type Scale (như `--text-xs: 0.75rem`, `--text-sm: 0.875rem`, `--text-base: 1rem`, `--text-lg: 1.25rem`, `--text-xl: 1.5rem`, v.v.).
  - Hậu quả: Trong CSS xuất hiện hàng loạt kích thước tự do dạng magic values: `font-size: .78rem`, `font-size: .85rem`, `font-size: .92rem`, `font-size: 1.35rem`, cùng các hàm `clamp(2rem, 5vw, 4rem)`, `clamp(2.4rem, 4.7vw, 4.4rem)`. Việc này vi phạm tính nhất quán của một Design System chuẩn mực.

### 2.3. Đánh giá Hệ thống Spacing & Layout
- **Hệ thống Spacing quá nghèo nàn:**
  - Chỉ khai báo 3 mức: `--space-sm: 8px`, `--space-md: 16px`, `--space-lg: 24px`.
  - Hoàn toàn thiếu các token cho bố cục vĩ mô (32px, 48px, 64px, 80px).
  - Do thiếu token lớn, file `styles.css` phải dùng các công thức tính toán tùy tiện: `margin: clamp(26px, 7vw, 90px) auto`, `gap: clamp(24px, 6vw, 84px)`, `padding: 14px max(24px, calc((100vw - 1120px) / 2))`. Điều này làm phá vỡ nhịp điệu thị giác (visual rhythm) 8-pt grid chuẩn.

### 2.4. Tính đồng bộ và độ phủ của Component (Component Completeness)
- Bảng tài liệu `design-system.md` liệt kê 10 components, nhưng thực chất đa số chỉ là các thẻ HTML cơ bản gắn class (`Notice`, `FormField`, `ActionButton`).
- **Thiếu hụt các component cốt lõi của bài toán sự kiện:**
  - Không có component **Loading / Spinner**: Khi gửi đăng ký hoặc gửi mail, người dùng không có phản hồi trực quan về trạng thái đang xử lý.
  - Không có component **Modal / Confirmation Dialog** chuẩn: Hiện chỉ có một dialog duy nhất cho hộp thư mô phỏng.
  - Không có component **Ticket / QR Card**: Dù đề tài hướng tới check-in sự kiện, Design System chưa có token hoặc component định hình cho chiếc vé điện tử (Ticket Component).

---

## PHẦN 3: ĐÁNH GIÁ PROTOTYPE (`prototype/dist/`)

Áp dụng phương pháp **Code Review** và lăng kính **Edge-case Hunter**:

### 3.1. Đánh giá Trải nghiệm người dùng (UX Flow & Navigation)
- **Mô hình Single Page ẩn/hiện thô sơ:**
  - Sử dụng 3 thẻ `<section>` (`#detail`, `#register`, `#result`) trong cùng một trang và ẩn/hiện bằng thuộc tính `hidden`.
  - **Lỗi điều hướng trình duyệt (Browser History / Back Button):** Người dùng khi bấm nút "Back" trên trình duyệt sẽ bị thoát hẳn khỏi trang web thay vì quay lại bước trước đó (ví dụ: từ màn Kết quả về màn Đăng ký). Không có `history.pushState` hoặc routing cơ bản.
- **Mất tính liên tục khi thao tác (State Loss on Reload):**
  - Toàn bộ dữ liệu nằm trong biến JavaScript in-memory (`records = new Map()`, `submissions = new Map()`).
  - Nếu người dùng vô tình bấm `F5` hoặc tải lại trang ở màn Kết quả, toàn bộ mã đăng ký (`FOR-001`) và trạng thái xác nhận **bị xóa sạch**, đưa người dùng trở về màn hình ban đầu mà không có cách nào khôi phục.
- **Bất hợp lý trên giao diện Mobile (< 720px):**
  - Trong CSS có quy tắc: `body[data-screen="register"] .poster, body[data-screen="result"] .poster { display: none; }`.
  - Trên điện thoại di động, khi chuyển sang bước Đăng ký và Kết quả, toàn bộ khối poster biến mất. Phần tóm tắt sự kiện bên trái bị co cụm chỉ còn vài dòng chữ thời gian/địa điểm, khiến người dùng mất đi ngữ cảnh nhận diện của sự kiện mình đang đăng ký.

### 3.2. Săn lùng trường hợp biên (Edge-case Hunting)

| # | Tình huống biên (Edge Case) | Hành vi hiện tại của Code | Hậu quả / Rủi ro |
|---|---|---|---|
| **E01** | **XSS & Nhập tên độc hại** (`<script>`, emoji, ký tự lạ) | Chỉ kiểm tra `name ? "" : "Nhập họ và tên"` ([app.js#L114](file:///d:/workspace/Chuyen%20de%203/Force/prototype/dist/app.js#L114)). Không lọc (sanitize) hay escape ký tự đặc biệt. | Rủi ro lưu mã độc vào danh sách hoặc làm vỡ giao diện khi render tên dài/ký tự đặc biệt. |
| **E02** | **Định dạng Email không thực tế** | Dùng kiểm tra mặc định của HTML5: `email && emailField.validity.valid` ([app.js#L115](file:///d:/workspace/Chuyen%20de%203/Force/prototype/dist/app.js#L115)). | Trình duyệt chấp nhận các chuỗi như `admin@localhost` hoặc `test@a` là hợp lệ. Không kiểm tra tên miền trường VKU (`@vku.udn.vn`). |
| **E03** | **Đua dữ liệu / Nhấp đúp chuột (Double Submit)** | Hàm `saveRegistration` có cơ chế chống trùng bằng `attemptKey`, nhưng nút "Gửi đăng ký" **không hề bị disable** trong quá trình xử lý ([app.js#L104-L135](file:///d:/workspace/Chuyen%20de%203/Force/prototype/dist/app.js#L104-L135)). | Nếu có độ trễ mạng thực tế, người dùng nhấp liên tục sẽ kích hoạt nhiều sự kiện submit đồng thời. |
| **E04** | **Kiểm tra giới hạn sức chứa (Capacity Overflow)** | Hoàn toàn không có biến hoặc điều kiện kiểm tra số lượng đăng ký tối đa trong `saveRegistration`. | Dù sự kiện có 50 chỗ nhưng hàng trăm người điền form vẫn nhận được trạng thái "Đã xác nhận". |
| **E05** | **Gửi lại email thất bại vô hạn (Infinite Retry)** | Nút "Thử gửi lại" (`#resend`) chỉ gọi lại `sendMail(currentRecord)` mà không có bộ đếm số lần thử lại tối đa (Retry Limit) hay thời gian chờ (Backoff). | Gây nghẽn hoặc spam hệ thống nếu lỗi từ phía nhà cung cấp mail. |
| **E06** | **Tên quá dài hoặc chữ dính liền** | Ô nhập cho phép tối đa 100 ký tự ([index.html#L58](file:///d:/workspace/Chuyen%20de%203/Force/prototype/dist/index.html#L58)), nhưng hiển thị tại màn kết quả `#reference` và `#result-copy` không có thuộc tính ngắt dòng thích hợp cho một số vị trí. | Tràn layout hoặc phá vỡ cấu trúc panel. |

### 3.3. Đánh giá chất lượng mã nguồn (Code Review - HTML / CSS / JS)
- **HTML (`index.html`):**
  - **Vấn đề ngữ nghĩa tiêu đề (Heading Outline):** Có đến ba thẻ `<h1>` riêng biệt trên cùng một tài liệu (`#detail h1`, `#register h1`, `#result h1`). Dù có `tabindex="-1"` và ẩn bằng thuộc tính `hidden`, cấu trúc document outline của trang bị phân mảnh đối với các công cụ trợ thính (screen readers). Nên dùng 1 thẻ `<h1>` duy nhất cho tên sự kiện chính và các thẻ `<h2>` cho từng bước.
  - Nút đóng trong modal `<form method="dialog"><button class="ActionButton secondary">Đóng hộp thư</button></form>` thiếu thuộc tính `type="submit"` rõ ràng.
- **CSS (`styles.css`):**
  - Dùng màu Hex với độ trong suốt 8 ký tự (`#162d2620`, `#dafa7160`, `#162d2680`). Cú pháp này khó bảo trì và dễ gây lỗi trên các trình duyệt cũ; nên chuyển thành cú pháp `rgba()` hoặc hàm màu hiện đại `rgb(from ...)`.
  - Thiếu hệ thống breakpoint chuẩn: Chỉ có duy nhất một media query `@media (max-width: 720px)`. Giao diện chưa được tối ưu cho các kích thước Tablet ngang (1024px) hoặc màn hình smartphone nhỏ (< 375px).
- **JavaScript (`app.js`):**
  - **Kiến trúc mã nguồn quá phụ thuộc vào biến toàn cục:** Các biến trạng thái (`records`, `submissions`, `currentRecord`, `attemptKey`, `sequence`, `saveFailed`, `mailFailed`) nằm rải rác ngoài global scope ([app.js#L9-L15](file:///d:/workspace/Chuyen%20de%203/Force/prototype/dist/app.js#L9-L15)). Khi dự án mở rộng, việc này sẽ dẫn đến xung đột biến và cực kỳ khó viết unit test.
  - **Mô phỏng đồng bộ giả tạo:** Quá trình lưu và gửi email chạy đồng bộ (synchronous tức thì 0ms). Việc này không phản ánh đúng môi trường mạng thực tế (vốn cần async/await, spinner, xử lý timeout).

---

## PHẦN 4: ĐỀ XUẤT CHỈNH SỬA CỤ THỂ (ACTION ITEMS CHO BẢN FINAL)

Để hoàn thiện sản phẩm Giai đoạn 1 đạt chuẩn chất lượng cao trước khi bàn giao, đề xuất các đầu việc ưu tiên theo thang **P0 (Bắt buộc) - P1 (Cần thiết) - P2 (Nâng cao)**:

### Nhóm 1: Tài liệu & Nghiên cứu (P0 & P1)
- [ ] **[P0 - Khẩn cấp] Hợp thức hóa Stakeholder VSC:** Cần có tối thiểu 1 buổi phỏng vấn trực tiếp hoặc xác nhận qua email/tin nhắn với đại diện Ban Chủ nhiệm CLB VSC để hợp thức hóa các giả định trong BID. Ghi rõ tên người xác nhận và chức vụ vào [02-Client/Client-Brief.md](../../02-Client/Client-Brief.md).
- [ ] **[P0] Bổ sung và đồng bộ dữ liệu khảo sát:**
  - Yêu cầu các thành viên `TV02, TV04, TV05, TV06, TV08, TV09` cập nhật lại tài liệu Tuần 1, không để trạng thái `Todo` hoặc file trắng.
  - Hoàn thiện tài liệu hành trình người dùng [04-results/Week-2/TV09.md](../../04-results/Week-2/TV09.md).
  - Đối chiếu và thống nhất con số giữa TV04, TV05 và TV10 trong [06-Planning/BID.md](../../06-Planning/BID.md) (chốt con số chính xác về tỷ lệ lỗi danh sách và đăng ký trùng).
- [ ] **[P1] Mở rộng phạm vi nghiệp vụ trong BID:**
  - Bổ sung quy tắc nghiệp vụ cho **Sức chứa sự kiện (Event Capacity)** và **Thời hạn đóng cổng đăng ký tự động**.
  - Đưa yêu cầu **Mã vé / QR Code check-in** từ P2 lên thành P1 có điều kiện, vì đây là yêu cầu sống còn của bài toán chống ùn tắc check-in.

### Nhóm 2: Design System (P1)
- [ ] **[P1] Chuẩn hóa Type Scale và Spacing:**
  - Bổ sung token kích thước chữ (`--font-size-sm`, `--font-size-base`, `--font-size-xl`, `--font-size-2xl`) vào [prototype/design-system.md](../../prototype/design-system.md) và thay thế toàn bộ các giá trị font tùy tiện trong CSS.
  - Bổ sung các token khoảng cách lớn (`--space-xl: 32px`, `--space-2xl: 48px`).
- [ ] **[P1] Khắc phục độ tương phản màu cảnh báo:**
  - Điều chỉnh biến `--warning` và `--warning-bg` để đảm bảo tỷ lệ tương phản đạt tối thiểu 4.5:1 trên mọi màn hình theo chuẩn WCAG AA.
- [ ] **[P1] Bổ sung Component Trạng thái Đang tải (Loading/Feedback):**
  - Thiết kế thêm component Spinner / Skeleton và nút ở trạng thái `loading` khi người dùng bấm "Gửi đăng ký".

### Nhóm 3: Prototype & Mã nguồn (P0 & P1)
- [ ] **[P0] Lưu trữ trạng thái phiên (Session Persistence):**
  - Lưu `currentRecord` và danh sách đăng ký vào `sessionStorage` hoặc `localStorage` để khi người dùng nhấn F5/Reload ở màn hình Kết quả thì dữ liệu không bị biến mất.
- [ ] **[P0] Cải thiện Validation & Chống trùng lặp:**
  - Bổ sung regex kiểm tra định dạng email nâng cao (khuyến khích ưu tiên định dạng `@vku.udn.vn` hoặc kiểm tra tên miền hợp lệ).
  - Làm sạch (trim, escape HTML) trường Họ và Tên trước khi lưu trữ và hiển thị.
  - Vô hiệu hóa (disable) nút "Gửi đăng ký" ngay khi bấm để triệt tiêu lỗi Double Submit trên thực tế.
- [ ] **[P1] Nâng cấp luồng trải nghiệm (UX Flow):**
  - Tích hợp độ trễ giả lập bất đồng bộ (`setTimeout` ~500ms - 800ms) kèm spinner để người dùng cảm nhận được hành động gửi dữ liệu và gửi email.
  - Điều chỉnh media query responsive: Giữ lại thông tin tóm tắt sự kiện ở dạng thanh ngang gọn gàng (Mini Summary Card) trên mobile thay vì ẩn hoàn toàn poster.
  - Sửa lỗi semantic: Chuyển cấu trúc 3 thẻ `<h1>` thành 1 thẻ `<h1>` duy nhất cho tên sự kiện và các thẻ `<h2>` cho tiêu đề từng bước.

---
*Báo cáo được khởi tạo tự động bởi Review-Skill (TV03) ngày 19/11/2026.*
