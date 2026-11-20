# BÁO CÁO ĐÁNH GIÁ TOÀN DIỆN CHẤT LƯỢNG SẢN PHẨM TUẦN 3
**Vai trò:** Reviewer TV08 (Võ Đình Minh Đức)  
**Dự án:** Chuyende3 / Force  
**Đề tài:** Website hỗ trợ đăng ký và quản lý tham dự sự kiện cho câu lạc bộ sinh viên  
**Client tiềm năng:** Câu lạc bộ Kỹ năng VKU (VSC)  
**Ngày thực hiện:** 20/11/2026  

---

## 1. THÔNG TIN PHIÊN BẢN & MÔI TRƯỜNG REVIEW

### 1.1. Phiên bản và tài liệu được đối soát
- **Nhánh `main`:** Commit `b1b9338` (*Restructure project documentation and BMAD setup*) và `173ef2d` (*Update TV06.md*). Đây là cấu trúc thư mục mới nhất chứa tài liệu BMAD tổng hợp tại `_bmad-output/` và các bài nghiên cứu gốc tại `docs/discovery/results/`.
- **Nhánh `docs/po-design-registration`:** Commit `7c9723d` (*docs: add registration BID and prototype*), chứa tài liệu định hướng nghiệp vụ `06-Planning/BID.md`, tài liệu thiết kế `prototype/design-system.md` và mã nguồn `prototype/dist/` (`index.html`, `styles.css`, `app.js`).
- **Các nhánh Review tuần 3 của các thành viên khác:**
  - `origin/review/week-3-tv03` (Commit `f775540`): Báo cáo review của TV03.
  - `origin/review/week-3-tv04` (Commit `813114d`): Cập nhật đối soát số liệu khảo sát BTC.
  - `origin/review/week-3-tv05` (Commit `6540289`): Bổ sung truy vết bằng chứng khảo sát sinh viên.
  - `origin/review/week-3-tv10` (Commit `311c4cb`): Hoàn thiện đối soát giả định và giải thích số liệu 4/8.
  - `origin/Review/TV07` (Commit `124d270`): Rà soát tài liệu tổng thể.

### 1.2. Kiểm tra Skill BMAD Review và tích hợp môi trường
- **Căn cứ quy định:** Đối chiếu với `AGENTS.md` và `docs/skills/README.md`.
- **Định danh skill hợp lệ:**
  - `bmad-review` (thuộc core BMAD, khai báo tại `_bmad/_config/skill-manifest.csv`, dòng 9): Chuyên chạy các lăng kính đánh giá tài liệu (*Adversarial Critique*, *Edge-case Hunter*, *Verification Gap*, *Structure*, *Prose*).
  - `bmad-code-review` (thuộc bmm BMAD, dòng 26): Chuyên rà soát mã nguồn nhiều góc độ độc lập.
  - `ui-ux-pro-max` (tại `tools/skills/ui-ux-pro-max/SKILL.md`): Cung cấp tiêu chuẩn UI/UX, token, khả năng truy cập (WCAG 2.1 AA) và responsive.
- **Hiện trạng cài đặt thực tế:**
  - Thư mục đích `.agents/skills/` hiện **chưa tồn tại trên máy** do được cấu hình trong `.gitignore` và script cài đặt (`scripts/install-bmad.sh`) yêu cầu môi trường `uv` + `bash` (hệ thống Windows hiện tại chưa có `uv` trong PATH).
  - **Kiểm tra xung đột:** Không có xung đột định danh giữa BMAD và `ui-ux-pro-max`. Cấu hình tuân thủ quy tắc phân quyền tại `AGENTS.md` (BMAD quản lý quy trình, `ui-ux-pro-max` đóng vai trò tham vấn thiết kế).
  - **Phương pháp luận áp dụng trong báo cáo này:** Báo cáo áp dụng đầy đủ và nghiêm ngặt nguyên lý 3 lăng kính đánh giá của `bmad-review` gồm:
    1. *Adversarial Critique* (Phản biện giả định và các khoảng trống logic).
    2. *Edge-case Hunter* (Săn lùng các trường hợp biên, luồng lỗi, điều kiện ngoại lệ).
    3. *Verification Gap* (Khoảng trống đối chiếu dữ kiện với bằng chứng gốc).

---

## 2. PHẠM VI VÀ PHƯƠNG PHÁP REVIEW

### 2.1. Phạm vi đánh giá
Đánh giá toàn diện 3 nhóm sản phẩm do người Generate / PO / BA thực hiện:
1. **Nhóm A — PO/BA Tuần 2 & BID:** 8 hạng mục nghiên cứu (Competitor Research, Stakeholder Mapping, User Research, User Persona, Problem Statement, Problem Canvas TV08, Customer Journey Map, Assumption & Hypothesis Validation) và tài liệu `06-Planning/BID.md`.
2. **Nhóm B — Design System:** Hệ thống token màu, Typography, Spacing/Radius/Layout, Component set, Responsive và Accessibility (WCAG 2.1 AA).
3. **Nhóm C — Prototype:** Tính nhất quán với PO/BA và Design System, luồng người dùng (User flows), Validation biểu mẫu, các trạng thái phản hồi (Loading, Success, Error, Empty), xử lý ngoại lệ và độ tin cậy mã nguồn.

### 2.2. Nguyên tắc và phân loại trạng thái phát hiện
- Tuyệt đối phân biệt:
  - **Dữ kiện (Fact):** Có dữ liệu gốc, nguồn trích dẫn cụ thể `SRC-*`, có thể kiểm chứng.
  - **Suy luận (Inference):** Diễn giải logic từ dữ kiện nhưng chưa chứng minh quan hệ nhân quả.
  - **Giả định (Assumption):** Phán đoán chưa có bằng chứng thực tế tại đơn vị nghiên cứu.
- 5 trạng thái phân loại phát hiện theo quy định:
  1. `Confirmed finding`: Lỗi đã được xác nhận chắc chắn trên mã nguồn/tài liệu.
  2. `Potential issue`: Vấn đề tiềm ẩn rủi ro khi đưa vào vận hành thực tế.
  3. `False positive`: Cảnh báo ban đầu nhưng đối soát lại là đúng hoặc hợp lệ theo thiết kế.
  4. `Already fixed`: Lỗi đã được phát hiện và đã có bản sửa trong các commit/PR nhánh liên quan.
  5. `Insufficient evidence`: Nội dung chưa đủ dữ liệu hoặc thiếu bằng chứng độc lập để kết luận.

---

## 3. KẾT QUẢ ĐÁNH GIÁ THEO 3 NHÓM SẢN PHẨM

### 3.1. NHÓM A: ĐÁNH GIÁ TÀI LIỆU PO/BA TUẦN 2 & BID

#### A.1. Competitor Research (TV02 - Huỳnh Văn Lợi)
- **Điểm đạt:** So sánh rõ ràng 3 giải pháp thay thế gồm Google Forms + Sheets, Luma và Eventbrite qua 20 mã nguồn kiểm chứng (`SRC-W2-TV02-01` đến `SRC-W2-TV02-20`). Tự thực nghiệm kiểm tra tính năng chặn trùng email (Luma chặn, Eventbrite không chặn ở kịch bản thử nghiệm).
- **Hạn chế / Verification Gap:** TV02 nêu các khoảng trống tiềm năng như xác thực MSSV hoặc gắn danh sách chính thức, nhưng đây là suy luận so sánh tính năng công cụ, chưa phải nhu cầu đã được VSC xác nhận.

#### A.2. Stakeholder Mapping (TV03 - Huỳnh Thanh Thuận)
- **Điểm đạt:** Liệt kê đầy đủ 4 nhóm liên quan: Ban chủ nhiệm VSC, Ban tổ chức sự kiện (BTC), Sinh viên tham gia, Đội BA nội bộ.
- **Lỗ hổng phân loại ma trận (Adversarial Critique):** TV03 mô tả BTC có *Interest rất cao* và *Power trung bình - cao*, nhưng lại xếp BTC vào ô **"Keep Satisfied"** (vốn dành cho nhóm High Power - Low Interest). Nhóm có Power cao và Interest cao bắt buộc phải thuộc nhóm **"Manage Closely"**. Cả TV07 và TV08 đều đã ghi nhận cảnh báo này nhưng ma trận trên Miro chưa được điều chỉnh.
- **Verification Gap:** TV03 nhắc tới một khảo sát quy trình nội bộ `n = 12` vào ngày 10/11/2026, nhưng không đính kèm bảng hỏi, phương pháp chọn mẫu hay tệp dữ liệu thô để kiểm chứng độc lập.

#### A.3. User Research: BTC (TV04 - Nguyễn Ánh Kim Ngân) & Sinh viên (TV05 - Nguyễn Nhã Quỳnh Nhi)
- **Độ tin cậy của mẫu (Sampling Limitation):**
  - Mẫu BTC (`TV04`): $n = 8$ phản hồi hợp lệ (lọc từ 10 phản hồi).
  - Mẫu Sinh viên (`TV05`): $n = 6$ phản hồi hợp lệ (lọc từ 7 phản hồi).
  - Cả hai khảo sát đều là mẫu thuận tiện (convenience sampling), tự điền hồi tưởng qua Google Forms, **hoàn toàn chưa được xác minh là thành viên hay người tham dự sự kiện của CLB VSC**.
- **Điểm mâu thuẫn số liệu (Data Discrepancy):**
  - Trong TV04: 6/8 người chọn trùng đăng ký, 5/8 chọn sai/thiếu thông tin.
  - Tuy nhiên trong tài liệu tổng hợp TV10 và BID dòng 11 ghi nhận: *"TV10 ghi số gộp trùng/sai là 4/8, cần đối chiếu trước khi nộp"*.
  - *Kết quả đối soát nhánh:* Tại commit `813114d` (`review/week-3-tv04`) và commit `311c4cb` (`review/week-3-tv10`), thành viên đã giải thích: con số **4/8** là số người chọn **đồng thời cả hai lỗi** (vừa bị trùng vừa bị sai). Tuy nhiên trên nhánh `main`, sự khác biệt này chưa được chú thích rõ ràng.

#### A.4. User Persona (TV06 - Lê Quang Anh)
- **Điểm đạt:** Xây dựng 2 chân dung đại diện: Nguyễn Văn An (Trưởng ban tổ chức) và Trần Thị Mai (Sinh viên tham gia).
- **Hạn chế:** Persona được tổng hợp gián tiếp từ mẫu $n=8$ và $n=6$ của TV04/TV05, không có phỏng vấn sâu trực tiếp bổ trợ, nên các mục tiêu cá nhân và nỗi đau (pain points) có tính giả định cao.

#### A.5. Problem Statement (TV07 - Hoàng Phan Hà)
- **Điểm đạt xuất sắc:** TV07 thể hiện sự thận trọng cao độ về phương pháp luận: phân biệt rạch ròi Fact, Inference, Assumption; không khẳng định VSC cần website; xác định rõ vấn đề cốt lõi là **"tính nhất quán của danh sách từ lúc đăng ký đến check-in"**. Đặt ra 10 câu hỏi nghiệp vụ sống còn cần phỏng vấn VSC.

#### A.6. Problem Canvas (TV08 - Võ Đình Minh Đức)
- Đánh giá chuyên sâu được trình bày chi tiết tại **Mục 5**.

#### A.7. Customer Journey Map (TV09 - Phạm Nguyễn Phú Trọng)
- **LỖ HỔNG NGHIÊM TRỌNG (Critical Finding):** File `docs/discovery/results/Week-2/TV09.md` vẫn ở trạng thái **`status: Todo`** (chỉ có 42 dòng tiêu đề template, nội dung ghi *"Chưa thực hiện"*).
- **Hệ quả:** Việc khuyết thiếu bản đồ hành trình trải nghiệm khiến luồng người dùng trong BID và Prototype bị xây dựng dựa trên suy đoán kỹ thuật, thiếu các điểm chạm cảm xúc và bối cảnh ngoại cảnh của sinh viên.

#### A.8. Assumption & Hypothesis Validation (TV10 - Nguyễn Đức Phúc)
- **Điểm đạt:** Lập danh mục giả định từ A01 đến A10, phân loại theo mức độ rủi ro. Nhận diện chính xác rủi ro lớn nhất là *"VSC không gặp khó khăn như giả định"* (A01).

#### A.9. Đánh giá tài liệu BID (`06-Planning/BID.md`)
- **Ưu điểm:**
  - Thu hẹp phạm vi rõ ràng vào bản demo đăng ký đơn lẻ (REG-01 đến REG-06).
  - Tách bạch rõ các mức ưu tiên P1 (Demo cốt lõi) và P2 (Mở rộng sau khi chốt nghiệp vụ).
  - Đặc tả chi tiết User Stories theo chuẩn Given-When-Then (US-01 đến US-04).
- **Nhược điểm & Khoảng trống nghiệp vụ:**
  - **Bỏ rơi Mã số sinh viên (MSSV):** Mặc dù nghiên cứu của TV02, TV04 và TV08 đều nhấn mạnh việc chống trùng và xác thực bằng MSSV, BID chỉ yêu cầu Name và Email, bỏ qua hoàn toàn trường MSSV.
  - **Cắt giảm hoàn toàn bài toán Check-in:** Check-in và quét QR là nỗi đau lớn nhất tại hiện trường (3/6 sinh viên không tìm thấy tên, 4/8 BTC gặp lỗi thiết bị), nhưng BID đẩy toàn bộ phần này sang P2/ngoài phạm vi demo.
  - **Chưa có cơ chế xử lý Sức chứa (Capacity Limit):** Không có quy tắc nghiệp vụ khi số lượng đăng ký vượt quá quy mô hội trường.

---

### 3.2. NHÓM B: ĐÁNH GIÁ HỆ THỐNG THIẾT KẾ (DESIGN SYSTEM)

Soi chiếu theo tài liệu `prototype/design-system.md` và mã nguồn `prototype/dist/styles.css`:

#### B.1. Color Tokens & Độ tương phản (WCAG 2.1 AA)
- **Sự mâu thuẫn giữa hai hệ thống thiết kế (Design System Disconnect):**
  - Tài liệu `prototype/design-system.md` sử dụng bộ màu **Cream / Dark Green / Lime** (`--canvas: #f3f1e8`, `--ink: #162d26`, `--accent: #dafa71`).
  - Trong khi đó, tài liệu BMAD UX Spine tại `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/DESIGN.md` lại quy định bộ màu **Campus Friendly + Bento Grid, Blue / Orange / White** (`primary: #245CE7`, `accent: #F97316`, `background: #F5F8FF`).
  - *Đánh giá:* Hai tài liệu thiết kế trong cùng dự án hoàn toàn không đồng nhất về nhận diện thương hiệu.
- **Kiểm tra độ tương phản màu sắc:**
  - Nút chính `.ActionButton`: Nền `--accent` (`#dafa71`) đi cùng chữ `--ink` (`#162d26`) đạt độ tương phản ~12.2:1 (vượt chuẩn AA và AAA cho văn bản thông thường).
  - Trạng thái cảnh báo `[data-tone="warning"]`: Nền `--warning-bg` (`#faeed3`) đi cùng chữ `--warning` (`#74511c`) đạt tỷ lệ tương phản ~5.1:1 (đạt chuẩn AA > 4.5:1).
  - Tuy nhiên, viền focus `:focus-visible` sử dụng màu `--focus: #2463a2` trên nền tối của poster (`.poster` có nền `#162d26`) sẽ có độ tương phản dưới 3:1, khó nhận diện cho người dùng điều hướng bằng bàn phím.

#### B.2. Typography & Cấu trúc phân cấp ngữ nghĩa (Semantic Hierarchy)
- **Thiếu Token kích thước chữ (Type Scale):**
  - Trong CSS `:root` chỉ khai báo `--type: "Segoe UI", system-ui, sans-serif` mà **hoàn toàn không có các token font-size chuẩn** (như `--font-size-sm`, `--font-size-base`, `--font-size-xl`).
  - Kích thước chữ bị gán cứng rải rác: `clamp(2rem, 5vw, 4rem)`, `clamp(2.4rem, 4.7vw, 4.4rem)`, `1.35rem`, `.78rem`, `.85rem`, `.92rem`.
- **Lỗi ngữ nghĩa tiêu đề (Semantic Heading Violation):**
  - File `dist/index.html` chứa **03 thẻ `<h1>`** trên cùng một trang:
    - `#detail h1`: "Nói để kết nối"
    - `#register h1`: "Đăng ký tham gia"
    - `#result h1`: (tiêu đề động)
  - Điều này vi phạm nghiêm trọng chuẩn WCAG về cấu trúc phân cấp tài liệu đối với người dùng sử dụng trình đọc màn hình (Screen Reader). Đúng chuẩn ngữ nghĩa: Tên sự kiện là `<h1>`, các màn hình quy trình bên dưới phải là `<h2>`.

#### B.3. Spacing, Radius, Layout
- **Hệ thống Spacing sơ sài:** Chỉ có 3 token (`--space-sm: 8px`, `--space-md: 16px`, `--space-lg: 24px`). Thiếu các token cho khoảng cách vi mô (4px) và vĩ mô (32px, 48px). Các giá trị như `padding: 14px`, `gap: 5px`, `gap: 10px`, `margin: clamp(26px, 7vw, 90px)` đang bị viết cứng (hardcoded).
- **Radius:** Token `--radius: 22px` và `--control-radius: 10px` được áp dụng đồng bộ cho panel và các ô điều khiển input/button.

#### B.4. Components & Trạng thái phản hồi
- Danh mục 10 component cơ bản được mô tả khá tốt.
- **Khoảng trống:**
  - Thiếu hoàn toàn component **LoadingSpinner / Skeleton** để biểu thị quá trình xử lý gửi form và gửi email.
  - Thiếu component **EmptyState** khi hộp thư mô phỏng chưa có tin nhắn nào.

#### B.5. Tính thích ứng đa màn hình (Responsive)
- Breakpoint duy nhất tại `@media (max-width: 720px)`. Thiếu breakpoint cho máy tính bảng (Tablet 768px–1024px) và điện thoại nhỏ (< 360px).
- **Vấn đề trải nghiệm trên Mobile:** Tại màn hình đăng ký và kết quả, CSS ẩn hoàn toàn poster sự kiện (`body[data-screen="register"] .poster { display: none; }`). Việc ẩn sạch poster làm mất điểm neo thị giác (visual anchor) của sự kiện, sinh viên không còn thấy tên và thông điệp sự kiện khi đang điền form.

#### B.6. Khả năng truy cập (Accessibility - WCAG 2.1 AA)
- **Điểm cộng:**
  - Đã có thuộc tính `lang="vi"`.
  - Có trạng thái `:focus-visible` viền 3px rõ ràng.
  - Vùng bấm các nút điều khiển và input đạt tối thiểu 44px (đáp ứng tiêu chuẩn chạm Target Size).
  - Có đầy đủ các thuộc tính trợ năng: `aria-current="step"` trên tiến trình, `aria-invalid` và `aria-describedby` trên trường nhập liệu.
- **Điểm trừ:**
  - Khi mở hộp thoại `#inbox` bằng `showModal()`, sau khi đóng hộp thoại, tiêu điểm (focus) không được trả về nút bấm kích hoạt `#view-mail`.
  - Thông báo lỗi chung (`Notice #form-note`) dùng `role="alert"` tốt, nhưng danh sách lỗi chi tiết theo từng trường lại không được thông báo đồng loạt khi submit thất bại.

---

### 3.3. NHÓM C: ĐÁNH GIÁ MÃ NGUỒN VÀ TRẢI NGHIỆM PROTOTYPE

Soi chiếu trực tiếp mã nguồn `prototype/dist/app.js` và `prototype/dist/index.html`:

#### C.1. Tính nhất quán với PO/BA
- Prototype thể hiện đúng các luồng đăng ký cơ bản của BID (chặn trùng email, hiển thị mã đăng ký `FOR-xxx`, gửi thư mô phỏng, mô phỏng duyệt thủ công).
- Tuy nhiên, prototype **hoàn toàn không có trường MSSV**, không có xử lý giới hạn số lượng tham dự, không có tính năng tạo mã vé QR.

#### C.2. Luồng người dùng (User Flows)
- Luồng tiến trình 3 bước (Chi tiết $\rightarrow$ Đăng ký $\rightarrow$ Kết quả) mượt mà và trực quan.
- **Lỗ hổng luồng quay lại (Navigation Flow Flaw):**
  - Tại màn hình Kết quả, nút "Về chi tiết" (`#new-entry`) đưa người dùng về màn hình đầu nhưng **không đặt lại form và không xóa trạng thái đăng ký trước đó**.
  - Nếu người dùng bấm lại "Đăng ký tham gia", `attemptKey` tăng lên, nhưng nếu họ tiếp tục điền email vừa đăng ký thì hệ thống báo lỗi trùng mà không cung cấp cách thức tra cứu lại bản ghi đã tạo.

#### C.3. Khả năng kiểm tra dữ liệu (Form Validation)
- Trường Họ tên: Sử dụng `trim()` kiểm tra rỗng, giới hạn `maxlength="100"`.
- Trường Email: Sử dụng `trim().toLowerCase()`, dựa vào `validity.valid` của trình duyệt.
- **Hạn chế:**
  - `type="email"` của HTML5 rất lỏng lẻo (chuỗi `a@b` vẫn hợp lệ). Không có kiểm tra cấu trúc tên miền cấp cao hoặc định dạng email trường (`@vku.udn.vn`).
  - Chưa làm sạch ký tự đặc biệt nguy hiểm hoặc phòng chống XSS triệt để ở tầng nhập liệu (mặc dù khi render đã dùng `textContent`).

#### C.4. Trạng thái phản hồi (Loading, Success, Error, Empty State)
- **LỖ HỔNG LỚN VỀ TRẢI NGHIỆM: Xử lý đồng bộ tức thì (Zero Latency / No Loading State):**
  - Khi người dùng nhấn "Gửi đăng ký", hàm `saveRegistration` và `sendMail` được thực thi **ngay lập tức (0ms)**.
  - Giao diện nhảy thẳng sang màn hình Kết quả mà không hề có trạng thái Loading, Spinner, hay vô hiệu hóa nút gửi (`disabled`).
  - *Hệ quả:* Trong môi trường mạng thực tế, việc thiếu trạng thái đang xử lý sẽ dẫn đến lỗi người dùng bấm liên tục nhiều lần (Double/Triple Submission).
- **Hộp thư mô phỏng thiếu Empty State:** Nếu hộp thoại `#inbox` được mở khi chưa có email nào, phần tử `#messages` trống trơn, không có dòng thông báo *"Chưa có thư trong hộp thư"*.

#### C.5. Xử lý ngoại lệ, tính bền vững dữ liệu và kiến trúc mã nguồn
- **Mất dữ liệu khi tải lại trang (Session Volatility):**
  - Toàn bộ dữ liệu đăng ký và danh sách thư được lưu trên `Map()` trong bộ nhớ RAM (`records`, `submissions`).
  - Khi người dùng nhấn F5 hoặc tải lại trang ở màn hình Kết quả, **toàn bộ dữ liệu bị xóa sạch**, quay về màn hình Chi tiết ban đầu. Chưa tích hợp `sessionStorage` hay `localStorage`.
- **Kiến trúc biến toàn cục (Global Scope Pollution):**
  - Mã nguồn khai báo hàng loạt biến trạng thái ở phạm vi toàn cục ([app.js#L9-L15](prototype/dist/app.js#L9-L15)): `records`, `submissions`, `currentRecord`, `attemptKey`, `sequence`, `saveFailed`, `mailFailed`. Cách viết này khiến mã nguồn khó mở rộng, dễ xung đột và không thể viết Unit Test độc lập.

---

## 4. BẢNG TỔNG HỢP CÁC LỖI VÀ VẤN ĐỀ THEO ĐỊNH DẠNG CHUẨN

Dưới đây là danh mục toàn bộ các phát hiện được phân loại chi tiết theo mức độ nghiêm trọng:

| ID | Hạng mục | Mức độ | Phân loại | File & Vị trí | Mô tả vấn đề | Bằng chứng | Ảnh hưởng | Đề xuất khắc phục |
|---|---|---|---|---|---|---|---|---|
| **ISSUE-01** | PO/BA | **Critical** | Confirmed finding | `docs/discovery/results/Week-2/TV09.md` | Tài liệu Customer Journey Map hoàn toàn trống rỗng | File chỉ có 42 dòng template, `status: Todo`, nội dung ghi "Chưa thực hiện" | Đứt gãy luồng trải nghiệm; BID và Prototype bị thiết kế dựa trên suy diễn kỹ thuật | Bắt buộc TV09 hoàn thành hành trình người dùng trước khi chốt spec |
| **ISSUE-02** | PO/BA | **High** | Confirmed finding | `docs/discovery/results/Week-2/TV01.md` | Báo cáo tổng hợp Tuần 2 của Leader chưa được thực hiện | File có `status: Todo`, nội dung trống | Thiếu sự kết nối, tổng hợp và định hướng chốt phạm vi cho cả nhóm | TV01 hoàn thành tổng hợp 8 template tuần 2 và chuẩn bị slide phản biện |
| **ISSUE-03** | PO/BA | **High** | Already fixed | `docs/discovery/results/Week-2/TV10.md` & `06-Planning/BID.md#L11` | Số liệu lỗi danh sách giữa TV04 và TV10 bị mâu thuẫn (6/8 vs 4/8) | TV04 ghi 6/8 trùng và 5/8 sai; TV10 và BID ghi 4/8; đã giải thích tại commit `813114d` và `311c4cb` | Gây nghi ngờ về độ tin cậy của dữ liệu khảo sát nền tảng | Merge các commit từ nhánh `review/week-3-tv04` và `tv10` vào `main` để đồng bộ chú thích |
| **ISSUE-04** | PO/BA | **Medium** | Confirmed finding | `docs/discovery/results/Week-2/TV03.md` | Ma trận Stakeholder phân loại BTC vào nhóm "Keep Satisfied" sai logic | TV03 ghi BTC có Power cao và Interest rất cao nhưng xếp vào ô Keep Satisfied | Nhận định sai mức độ ưu tiên quản lý stakeholder của dự án | Sửa ma trận trên Miro và tài liệu, chuyển BTC sang nhóm "Manage Closely" |
| **ISSUE-05** | PO/BA | **High** | Insufficient evidence | `06-Planning/BID.md#L1` & Toàn bộ tài liệu | Toàn bộ dự án xây dựng trên client giả định chưa được cam kết | Tài liệu ghi rõ: "VSC là client tiềm năng, chưa có xác nhận hợp tác hay nhu cầu" | Rủi ro phát triển sản phẩm không có người dùng thật và không thể kiểm chứng | Lập tức tổ chức phỏng vấn đại diện Ban chủ nhiệm VSC để hợp thức hóa nhu cầu |
| **ISSUE-06** | PO/BA | **Medium** | Confirmed finding | `06-Planning/BID.md` & `prototype/` | Bỏ qua hoàn toàn trường Mã số sinh viên (MSSV) | Form đăng ký chỉ có Name và Email; không có trường MSSV | Không thể tích hợp dữ liệu sinh viên trường, kiểm soát đối tượng và cấp điểm rèn luyện | Bổ sung trường MSSV vào BID và Form đăng ký |
| **ISSUE-07** | Design System | **High** | Confirmed finding | `prototype/design-system.md` vs `_bmad-output/.../DESIGN.md` | Xung đột nhận diện thương hiệu giữa hai hệ thống Design System | Một bên dùng Cream/Green/Lime, một bên dùng Blue/Orange/White | Mâu thuẫn tài liệu dự án, gây nhầm lẫn khi chuyển giao sang giai đoạn lập trình | Thống nhất chọn 1 bộ Design System duy nhất (khuyến nghị Blue/Orange Campus Friendly) |
| **ISSUE-08** | Design System | **Medium** | Confirmed finding | `prototype/dist/styles.css` | Thiếu hoàn toàn các token chuẩn về Type Scale (font-size) | CSS `:root` không có token font-size; các giá trị font-size bị gán cứng rải rác | Rất khó mở rộng, bảo trì và không đảm bảo tính nhất quán kích thước chữ | Bổ sung các token `--font-size-sm`, `--font-size-base`, `--font-size-lg`, `--font-size-xl` |
| **ISSUE-09** | Accessibility | **High** | Confirmed finding | `prototype/dist/index.html` | Vi phạm cấu trúc phân cấp tiêu đề (3 thẻ `<h1>` trên cùng trang) | Các dòng chứa `<h1>` tại `#detail`, `#register`, `#result` | Gây rối loạn điều hướng cho người khiếm thị sử dụng Screen Reader | Giữ 1 thẻ `<h1>` cho tên sự kiện, đổi các tiêu đề màn hình con thành `<h2>` |
| **ISSUE-10** | Responsive | **Medium** | Confirmed finding | `prototype/dist/styles.css#L98` | Ẩn hoàn toàn poster sự kiện trên màn hình di động | `body[data-screen="register"] .poster { display: none; }` | Sinh viên mất thông tin ngữ cảnh sự kiện khi đang điền biểu mẫu | Thay vì ẩn, thu gọn thành thanh tóm tắt ngắn (Mini Banner) hiển thị tên và thời gian |
| **ISSUE-11** | Prototype | **Critical** | Confirmed finding | `prototype/dist/app.js#L112-L138` | Thiếu trạng thái Loading và xử lý bất đồng bộ (Zero Latency) | Form submit và gửi mail chạy đồng bộ tức thì, không có spinner hay disable button | Dễ phát sinh lỗi Double Submission ngoài thực tế; trải nghiệm người dùng giả tạo | Thêm hiệu ứng bất đồng bộ (`setTimeout` ~500ms), spinner và disable nút khi submit |
| **ISSUE-12** | Prototype | **High** | Confirmed finding | `prototype/dist/app.js#L9-L15` | Dữ liệu phiên bị mất hoàn toàn khi tải lại trang (F5) | `records` và `submissions` lưu trong Map RAM, không lưu vào Storage | Sinh viên tải lại trang ở màn hình xác nhận sẽ mất trắng thông tin vé/kết quả | Lưu `currentRecord` và danh sách đăng ký vào `sessionStorage` |
| **ISSUE-13** | Prototype | **Medium** | Confirmed finding | `prototype/dist/app.js#L119` | Kiểm tra định dạng Email quá lỏng lẻo | Chỉ dùng `emailField.validity.valid` mặc định của HTML5 | Cho phép các email dị thường như `test@localhost` hoặc `a@b` đi qua | Thêm regex kiểm tra định dạng email chuẩn, khuyến khích kiểm tra tên miền hợp lệ |
| **ISSUE-14** | Prototype | **Low** | Confirmed finding | `prototype/dist/index.html#L84` | Hộp thư mô phỏng thiếu trạng thái trống (Empty State) | Thẻ `<div id="messages"></div>` không có nội dung mặc định khi chưa có thư | Giao diện bị trống trải, người dùng không rõ tính năng có đang hoạt động không | Thêm thông báo mặc định: "Hộp thư chưa có thông báo mới." |
| **ISSUE-15** | Mã nguồn | **Medium** | Confirmed finding | `prototype/dist/app.js` | Ô nhiễm phạm vi toàn cục (Global Scope Pollution) | Hàng loạt biến trạng thái nằm trôi nổi ở root scope | Tiềm ẩn xung đột biến khi tích hợp module lớn, khó kiểm thử tự động | Đóng gói toàn bộ logic vào module, IIFE hoặc đối tượng quản lý trạng thái (`Store`) |

---

## 5. ĐÁNH GIÁ CHUYÊN SÂU DÀNH RIÊNG CHO TV08 (PROBLEM CANVAS)

Là người trực tiếp thực hiện vai trò TV08 trong Tuần 2 và thực hiện Review trong Tuần 3, nội dung dưới đây đánh giá chi tiết tính nhất quán và chất lượng sản phẩm của TV08:

### 5.1. Problem Canvas TV08 có thống nhất với Problem Statement TV07 không?
- **Bối cảnh thực tế khi thực hiện:**
  - Tại thời điểm TV08 hoàn thành bài viết và tạo PR #32 (ngày 14/11/2026), tài liệu của TV07 trên nhánh `main` vẫn ở trạng thái `status: Todo` và chưa có nội dung kết quả.
  - Do đó, TV08 đã chủ động xây dựng một bản Problem Statement dự thảo tại Mục 3.6 để chuẩn bị đối soát.
- **Mức độ thống nhất về mặt nội dung:**
  - Khi đối chiếu giữa bản hoàn thiện của TV07 (`docs/discovery/results/Week-2/TV07.md#L153`) và bản phân tích của TV08 (`TV08.md#L167`), **hai tài liệu đạt độ thống nhất rất cao**:
    1. Cả hai cùng xác định đối tượng gặp khó khăn lớn nhất là **người phụ trách đăng ký, quản lý danh sách và check-in thuộc BTC**.
    2. Cùng chỉ ra mấu chốt vấn đề là: **Sự thiếu nhất quán của dữ liệu danh sách từ khâu tiếp nhận biểu mẫu, cập nhật thay đổi đến khi đối soát check-in thực tế**.
    3. Cùng dùng chung bộ dữ kiện cốt lõi: 6/8 trùng lặp, 5/8 sai thông tin, 3/8 lệch phiên bản, 3/6 sinh viên không tìm thấy tên.
    4. Cùng đồng thuận rằng **chưa đủ căn cứ để kết luận VSC bắt buộc phải xây dựng website riêng**, và cần phỏng vấn trực tiếp VSC.
- **Điểm chưa hoàn thiện của TV08 (Self-Critique):**
  - Mặc dù phần phân tích Markdown của TV08 rất sâu sắc và chi tiết, nhưng tại **Mục 6 (Problem Canvas trên Miro)**, TV08 đã **để trống toàn bộ các ô Canvas và thiếu link frame Miro** với lý do chưa được cung cấp frame chính xác. Đây là một thiếu sót về mặt bàn giao hiện vật trực quan (visual artifact).

### 5.2. Các vấn đề, nhu cầu và bằng chứng có liên kết hợp lý không?
- Mối liên kết logic trong bài làm của TV08 rất chặt chẽ:
  - Khó khăn của BTC (trùng 6/8, sai 5/8, lệch phiên bản 3/8) $\rightarrow$ Dẫn đến danh sách không được chuẩn hóa $\rightarrow$ Dẫn đến hệ quả tại hiện trường sự kiện: 3/6 sinh viên không tìm thấy tên, 4/8 sự cố tra cứu/thiết bị $\rightarrow$ Dẫn đến công sức tổng hợp sau sự kiện kéo dài hơn 2 giờ (4/8).
  - Nhu cầu của sinh viên (5/6 muốn nhận vé qua email) liên kết trực tiếp với đề xuất giải pháp gửi xác nhận qua Email thay vì bắt buộc cài ứng dụng hay tạo tài khoản phức tạp.

### 5.3. Có nội dung nào bị suy diễn không?
- TV08 tuân thủ xuất sắc nguyên tắc chống suy diễn:
  - Tách bạch hoàn toàn bảng Fact (F01–F07), Inference (I01–I03) và Assumption (A01–A06).
  - Nhấn mạnh rõ ràng: *Mẫu khảo sát n=8 và n=6 là mẫu nhỏ, tự thuận tiện, không đại diện cho VSC*.
  - Cảnh báo nhóm không được tự ý biến suy luận thành nhu cầu client (ví dụ: A02 - giả định VSC cần web tập trung, A03 - giả định VSC cần xác thực MSSV).

### 5.4. Các vấn đề trong Problem Canvas có được phản ánh trong BID và Prototype không?
- **Những điểm ĐÃ ĐƯỢC phản ánh:**
  - Chống đăng ký trùng lặp: Đã được đưa vào yêu cầu REG-03 và kiểm tra chặn trùng email trong prototype.
  - Phân định trạng thái hồ sơ (Chờ duyệt / Đã xác nhận): Đã được đưa vào REG-04 và thể hiện qua `StatusBadge`.
  - Cung cấp mã định danh tham chiếu: Đã được đưa vào REG-05 (mã `FOR-xxx`).
  - Gửi thư xác nhận mô phỏng: Đã được đưa vào REG-06 và hộp thư mô phỏng.
- **Những điểm CHƯA ĐƯỢC phản ánh (Khoảng trống giữa Canvas và Prototype):**
  - Vấn đề xác thực MSSV: Chưa có trong Prototype.
  - Vấn đề hủy đăng ký và cập nhật người vắng mặt: Bị loại khỏi phạm vi demo.
  - Vấn đề check-in tại hiện trường và sự cố mất mạng: Hoàn toàn chưa được giải quyết trong prototype hiện tại.

---

## 6. KẾT LUẬN & ĐÁNH GIÁ TỔNG THỂ

### Xếp loại: **PASS WITH ISSUES (THÔNG QUA CÓ ĐIỀU KIỆN)**

**Lý do đánh giá:**
1. **Mặt tích cực:**
   - Dự án đã hình thành được tư duy nghiên cứu nghiêm túc, có ý thức phân biệt giữa dữ kiện khảo sát và giả định chủ quan.
   - Tài liệu Problem Statement (TV07) và Problem Canvas (TV08) có tính phản biện cao, bảo vệ dự án khỏi việc ngộ nhận nhu cầu client.
   - Tài liệu BID được viết mạch lạc, có cấu trúc User Stories rõ ràng.
   - Bản mẫu Prototype đã chạy được, kiểm thử được các nhánh kịch bản cơ bản (chặn trùng, lỗi lưu, lỗi mail, duyệt hồ sơ) và tuân thủ khá tốt các yêu cầu trợ năng cơ bản (Accessible controls, `aria-invalid`).
2. **Mặt tồn tại cần khắc phục:**
   - Có sự đứt gãy tài liệu nghiêm trọng ở TV09 (CJM rỗng) và TV01 (chưa có tổng hợp tuần 2).
   - Xung đột nhận diện thương hiệu giữa hai hệ thống thiết kế (Design System).
   - Mã nguồn Prototype hoàn toàn thiếu trạng thái Loading / bất đồng bộ, mất sạch dữ liệu khi F5 và phạm vi bị thu hẹp quá mức (cắt bỏ hoàn toàn bài toán Check-in và MSSV).

---

## 7. DANH SÁCH VIỆC CẦN NGƯỜI GENERATE XỬ LÝ (ACTION ITEMS)

Đề xuất các đầu việc cần xử lý theo thứ tự ưu tiên:

### Mức P0 (Bắt buộc phải sửa ngay trước khi nộp sản phẩm chính thức)
- [ ] **PO/BA:** Yêu cầu TV09 hoàn thành tài liệu `Customer Journey Map` (bổ sung các bước, điểm chạm, cảm xúc và nỗi đau của sinh viên).
- [ ] **PO/BA:** Đồng bộ dứt điểm sự khác biệt số liệu giữa TV04, TV05 và TV10 trên nhánh `main` (nêu rõ số liệu 4/8 là số người gặp cả 2 lỗi).
- [ ] **Design System:** Thống nhất một bộ Design System duy nhất cho toàn bộ dự án (khuyến nghị chuẩn hóa theo bộ Campus Friendly Blue/Orange của BMAD UX Spine hoặc cập nhật lại toàn bộ tài liệu theo bộ Cream/Green của Prototype).
- [ ] **Design System:** Khắc phục lỗi ngữ nghĩa tiêu đề trong `index.html`: Chuyển 3 thẻ `<h1>` thành 1 thẻ `<h1>` duy nhất cho tên sự kiện và các thẻ `<h2>` cho từng màn hình con.
- [ ] **Prototype:** Thêm độ trễ giả lập bất đồng bộ (`setTimeout` 400ms – 600ms), hiển thị trạng thái Loading / Spinner và vô hiệu hóa (`disabled`) nút submit để chống double-click.
- [ ] **Prototype:** Tích hợp `sessionStorage` để lưu trữ trạng thái đăng ký, đảm bảo khi người dùng F5 thì kết quả đăng ký không bị biến mất.

### Mức P1 (Cần thiết hoàn thiện trong giai đoạn kế tiếp)
- [ ] **PO/BA & Client:** Tổ chức tối thiểu một buổi phỏng vấn trực tiếp đại diện Ban chủ nhiệm CLB VSC để hợp thức hóa các giả định A01–A05 và ký nhận biên bản làm việc.
- [ ] **Design System:** Bổ sung đầy đủ bảng Type Scale (tokens font-size chuẩn) và tokens Spacing lớn (`--space-xl: 32px`, `--space-2xl: 48px`) vào file CSS.
- [ ] **Responsive:** Bổ sung giao diện tóm tắt sự kiện dạng thu gọn (Mini Banner) trên Mobile thay vì ẩn hoàn toàn poster sự kiện.
- [ ] **Prototype:** Bổ sung trường Mã số sinh viên (MSSV) vào biểu mẫu đăng ký và kiểm tra định dạng MSSV hợp lệ của sinh viên VKU.
- [ ] **Prototype:** Thêm thông báo rỗng (Empty State) cho hộp thư mô phỏng khi chưa có tin nhắn.
- [ ] **Kiến trúc mã nguồn:** Đóng gói mã nguồn `app.js` vào cấu trúc module, loại bỏ các biến toàn cục trôi nổi.

### Mức P2 (Cải tiến nâng cao)
- [ ] Mở rộng kịch bản Prototype cho luồng Hủy đăng ký và luồng Quét mã Check-in tại sự kiện.
- [ ] Tích hợp thư viện tạo mã QR trực tiếp trong hộp thư xác nhận để sinh viên kiểm tra vé trực quan.

---

## 8. THÔNG BÁO CÁC HẠNG MỤC CHƯA THỂ KIỂM CHỨNG (UNVERIFIABLE ITEMS)

Để đảm bảo tính minh bạch học thuật và phương pháp luận của BMAD Review, người đánh giá (TV08) công khai xác nhận các hạng mục sau **chưa thể kiểm chứng được** tại thời điểm này:

1. **Tính xác thực về nhu cầu của CLB Kỹ năng VKU (VSC):** Toàn bộ các khó khăn, quy trình và mong muốn được nêu trong tài liệu mới chỉ dựa trên khảo sát bên ngoài và suy đoán nội bộ. Do chưa có phỏng vấn đại diện VSC, tính thực tế của bài toán tại đơn vị này là **hoàn toàn chưa thể kiểm chứng**.
2. **Khảo sát quy trình $n = 12$ ngày 10/11/2026 của TV03:** Do không có tệp dữ liệu thô, danh sách câu hỏi và phương pháp chọn mẫu, kết quả này **chưa thể kiểm chứng độc lập**.
3. **Hiệu năng và độ ổn định mạng tại địa điểm tổ chức (Hội trường/Phòng A101):** Chưa có buổi khảo sát thực địa để đo đạc chất lượng sóng di động/Wi-Fi nhằm kiểm chứng tính khả thi của giải pháp check-in trực tuyến.
4. **Nội dung các Frame vẽ trên Miro của một số thành viên:** Do một số đường dẫn là link board tổng quát hoặc chưa phân quyền chi tiết, các hình vẽ trực quan trên Miro chưa được đối soát 100% từng pixel với file Markdown.

---
*Báo cáo được thực hiện độc lập bởi Reviewer TV08 (Võ Đình Minh Đức) theo chuẩn mực BMAD Review và quy định dự án Force.*

