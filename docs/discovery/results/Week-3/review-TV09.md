# BÁO CÁO ĐÁNH GIÁ CHẤT LƯỢNG SẢN PHẨM TUẦN 3
**Góc nhìn chuyên môn:** Customer Journey Map & Trải nghiệm người dùng  
**Người thực hiện:** TV09 — Phạm Nguyễn Phú Trọng (`@phutrong0912`)  
**Đề tài:** Website hỗ trợ đăng ký và quản lý tham dự sự kiện cho câu lạc bộ sinh viên  
**Đơn vị mục tiêu:** Câu lạc bộ Kỹ năng VKU (VSC)  
**Ngày đánh giá:** 20/11/2026  
**Nhánh làm việc:** `review/week-3-tv09`  

---

## 1. THÔNG TIN PHIÊN BẢN & MÔI TRƯỜNG REVIEW

### 1.1. Tài liệu và mã nguồn được đối soát
- **Nhánh `main`:** Commit `b1b9338` (*Restructure project documentation and BMAD setup*), bao gồm:
  - Tài liệu tổng hợp BMAD tại `_bmad-output/planning-artifacts/`.
  - Nghiên cứu cơ sở: `docs/discovery/results/Week-2/` (User Research TV04, TV05; Persona TV06; Customer Journey Map TV09; Assumption Validation TV10).
  - Bản thiết kế UX: `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/` (`DESIGN.md`, `EXPERIENCE.md`, `PROTOTYPES.md` và mã nguồn `mockups/`).
- **Nhánh `docs/po-design-registration`:** Commit `7c9723d`, gồm:
  - Tài liệu nghiệp vụ: `06-Planning/BID.md`.
  - Tài liệu thiết kế: `prototype/design-system.md`.
  - Mã nguồn thực thi: `prototype/dist/index.html`, `styles.css`, `app.js`.
- **Đối chiếu chéo các nhánh Review tuần 3 của nhóm:**
  - `origin/review/week-3-tv08` (TV08 — Võ Đình Minh Đức): Báo cáo đánh giá toàn diện góc nhìn Problem Canvas.
  - `origin/review/week-3-tv10` (TV10 — Nguyễn Đức Phúc): Rà soát đối chiếu số liệu và ma trận giả định.
  - `origin/review/week-3-tv04` (TV04) & `origin/review/week-3-tv05` (TV05): Đối soát dữ liệu khảo sát gốc.

### 1.2. Kiểm tra xung đột kỹ thuật giữa các bộ Skill
- **Căn cứ:** Quy tắc định tuyến kỹ năng tại [AGENTS.md](../../../../AGENTS.md) và [docs/skills/README.md](../../../skills/README.md).
- **Kết quả kiểm tra xung đột:**
  - **Không có xung đột mã nguồn:** BMAD quản lý quy trình nghiệp vụ và kiến trúc tài liệu; thư viện `ui-ux-pro-max` đóng vai trò tư vấn giải pháp giao diện, token và khả năng tiếp cận (Accessibility WCAG 2.1 AA).
  - Các tệp do `ui-ux-pro-max` sinh ra chỉ mang tính đề xuất tham khảo và được khoanh vùng tại `_bmad-output/design-references/`, không ghi đè lên các hợp đồng thiết kế của BMAD.
- **Phương pháp luận review của TV09:**
  - Vận dụng nguyên lý đánh giá của `bmad-review` kết hợp lăng kính **Customer Journey Map (CJM)**: Soi xét xem sản phẩm thiết kế (Design System) và mã nguồn (Prototype) có giải quyết được các điểm đau (Pain points), điểm chạm (Touchpoints) và điểm bàn giao (Hand-offs) đã được chứng minh qua khảo sát thực tế hay không.

---

## 2. ĐÁNH GIÁ NGHIỆP VỤ & TÍNH LIÊN TỤC CỦA HÀNH TRÌNH (JOURNEY GAPS)

Hành trình người dùng (Customer Journey Map) của sinh viên tham gia sự kiện CLB đã được xác lập gồm 5 giai đoạn liên tục. Khi đối chiếu với bản Prototype và tài liệu BID hiện tại, TV09 nhận diện các đứt gãy nghiêm trọng sau:

| Giai đoạn CJM | Dữ kiện thực tế & Điểm đau (TV04, TV05, TV09) | Hiện trạng trong BID & Prototype | Đánh giá khoảng trống (Gap) & Mức độ |
| :--- | :--- | :--- | :--- |
| **1. Nhận biết** | Sinh viên tiếp cận qua Fanpage/Group; cần biết rõ sự kiện còn mở đơn hay không. | Prototype có màn hình danh sách sự kiện và trạng thái "Đang mở". | **Đạt một phần.** Đã thể hiện được thông tin sự kiện cơ bản. *(Mức P2)* |
| **2. Đăng ký** | **5/8 BTC gặp lỗi sai thông tin; 6/8 gặp trùng đăng ký.** Sinh viên cần form nhanh gọn và nhận vé ngay. | Form có Họ tên, Email, Số điện thoại. **Hoàn toàn thiếu trường Mã số sinh viên (MSSV).** | **Lỗi nghiêm trọng (P0):** Không có MSSV thì BTC không thể xác thực sinh viên trường, không đối soát được danh sách Đoàn trường để cộng điểm rèn luyện. |
| **3. Trước sự kiện & Xử lý hủy** | **50% sinh viên (3/6) im lặng bỏ không đi** vì không có chỗ báo hủy thuận tiện (`SRC-W2-TV05-01`). BTC bị thâm hụt số lượng và bị động chỗ ngồi. | Prototype chỉ có hộp thư đến mô phỏng email xác nhận. **Không có nút "Hủy đăng ký / Báo bận".** | **Lỗi nghiêm trọng (P0):** Đã bỏ qua cơ hội giải quyết điểm đau lớn thứ 2 của đề tài, khiến tỷ lệ vắng mặt không kiểm soát vẫn tiếp diễn. |
| **4. Check-in tại sự kiện** | **3/6 SV bị "dò không ra tên"; 4/8 BTC & 2/6 SV gặp lỗi mạng/máy quét** (`SRC-W2-TV04-01`, `SRC-W2-TV05-01`). | **Hoàn toàn không có tính năng/màn hình Check-in.** Không có quét QR, không có màn hình soát vé cho BTC. | **Lỗi chí mạng (P0):** Bỏ quên hoàn toàn bài toán cốt lõi nhất của đề tài website quản lý sự kiện. Prototype biến thành một form thu thập dữ liệu thông thường. |
| **5. Sau sự kiện** | **5/6 sinh viên có nhu cầu theo dõi trạng thái ghi nhận tham gia; 4/8 BTC mất >2 giờ làm báo cáo.** | Prototype dừng lại ở việc gửi email xác nhận đăng ký. Không có màn hình tra cứu hay xác nhận tham dự. | **Thiếu sót (P1):** Sinh viên sau khi dự sự kiện vẫn phải đi dò thủ công file Excel/Drive công khai để xem mình có được cộng điểm không. |

---

## 3. ĐÁNH GIÁ DESIGN SYSTEM & UI/UX TOKENS

### 3.1. Sự phân mảnh và xung đột nhận diện thương hiệu
- **Hiện tượng:** Dự án đang tồn tại 2 hệ thống Design System không đồng nhất:
  - Hệ thống 1 (Nhánh `docs/po-design-registration`): Tông màu nền kem (`#FDFBF7`), chữ xanh thẫm (`#1B4332`), nút bấm xanh lá (`#2D6A4F`). Phong cách này giống trang blog tự nhiên, không toát lên tính năng động của sinh viên công nghệ.
  - Hệ thống 2 (BMAD UX Spine `_bmad-output/`): Tông màu Campus Blue (`#1E40AF`), cam điểm nhấn (`#F97316`), nền trung tính (`#F8FAFC`).
- **Khuyến nghị TV09:** Thống nhất toàn bộ dự án theo hệ màu **Campus Friendly Blue/Orange** của BMAD. Màu xanh dương tạo sự tin cậy, màu cam thể hiện sự nhiệt huyết của phong trào sinh viên và phù hợp với bộ nhận diện của VKU.

### 3.2. Đánh giá Khả năng tiếp cận (Accessibility - WCAG 2.1 AA)
- **Tương phản màu chữ phụ:** Trong file `prototype/dist/styles.css`, màu chữ phụ `.event-meta` (`#6B7280`) đặt trên nền thẻ xám nhạt (`#F3F4F6`) có tỷ lệ tương phản xấp xỉ 3.8:1, chưa đạt chuẩn WCAG AA cho văn bản nhỏ (yêu cầu tối thiểu 4.5:1).
- **Trạng thái Focus (Bàn phím):** Các ô `input` và nút `button` chưa có viền focus nổi bật (`outline: 2px solid var(--primary); outline-offset: 2px;`), gây khó khăn cho người dùng điều hướng bằng phím Tab.
- **Cấu trúc phân cấp tiêu đề (Heading Hierarchy):** Trong `prototype/dist/index.html`, xuất hiện tới 3 thẻ `<h1>` trên cùng một trang hiển thị (`.screen-detail h1`, `.screen-success h1`,...). Cần chuyển về 1 thẻ `<h1>` duy nhất cho tiêu đề ứng dụng/sự kiện, các màn hình con dùng thẻ `<h2>`.

---

## 4. ĐÁNH GIÁ KỸ THUẬT & TRẢI NGHIỆM TƯƠNG TÁC CỦA PROTOTYPE

### 4.1. Lỗi gửi trùng lặp & thiếu phản hồi trạng thái (Feedback States)
- **Nguy cơ lỗi nghiệp vụ:** Khi người dùng bấm nút "Xác nhận đăng ký", hàm `handleSubmitRegistration` trong `app.js` xử lý đồng bộ ngay lập tức mà không có độ trễ giả lập mạng.
- **Hậu quả:** Nút bấm không bị khóa (`disabled`), không hiển thị Spinner / "Đang xử lý...". Nếu sinh viên sốt ruột nhấp chuột liên tục (double-click/triple-click), hệ thống sẽ bị gửi trùng lặp đăng ký — tái diễn đúng điểm đau mà 6/8 người BTC đã phàn nàn trong khảo sát TV04 (`SRC-W2-TV04-01`).

### 4.2. Mất dữ liệu khi tải lại trang (State Persistence Gap)
- Trạng thái đăng ký và danh sách vé chỉ được lưu trên biến bộ nhớ tạm (in-memory variable `mockInbox`).
- Khi sinh viên hoặc giảng viên bấm `F5` tải lại trang, toàn bộ thông tin đăng ký biến mất hoàn toàn, hộp thư quay về rỗng. Cần bổ sung `sessionStorage` để lưu vết phiên đăng ký của người dùng.

### 4.3. Thiếu trạng thái rỗng (Empty State)
- Hộp thư mô phỏng (`.screen-inbox`) khi chưa có vé đăng ký không hiển thị thông báo hướng dẫn (ví dụ: *"Bạn chưa đăng ký sự kiện nào. Hãy khám phá sự kiện và đăng ký ngay!"*), gây cảm giác màn hình bị lỗi giao diện.

---

## 5. TỔNG HỢP CÁC RỦI RO & BÀN GIAO CHO TV10 (ASSUMPTION VALIDATION)

Từ các khoảng trống trên, TV09 bàn giao 3 giả định nghiệp vụ cốt lõi cho **TV10** để đưa vào ma trận kiểm chứng:

1. **Giả định về trường MSSV:** *Việc bắt buộc nhập MSSV có làm tăng tỷ lệ bỏ dở form đăng ký của sinh viên không, hay ngược lại là điều kiện tiên quyết để họ tin tưởng sự kiện được công nhận điểm rèn luyện?*
2. **Giả định về cơ chế Hủy một chạm:** *Nếu cung cấp nút "Hủy đăng ký" trực tiếp trong email xác nhận, liệu có giảm được tỷ lệ 50% sinh viên vắng mặt không báo trước không?*
3. **Giả định về phương thức Check-in dự phòng:** *Tại địa điểm tổ chức (Hội trường VKU sóng yếu/nghẽn mạng), tính năng Check-in bằng cách quét QR có cần chế độ lưu trữ ngoại tuyến (Offline Sync) hay không?*

---

## 6. DANH SÁCH KIẾN NGHỊ HÀNH ĐỘNG (ACTION ITEMS)

### Mức P0 — Bắt buộc phải xử lý ngay
- [ ] **Khắc phục lỗi tuần 2:** Đồng bộ toàn bộ nội dung Customer Journey Map chi tiết từ file `docs/discovery/results/Week-2/TV09.md` lên nhánh `main` để xóa cảnh báo rỗng dữ liệu của TV08.
- [ ] **Nghiệp vụ Prototype:** Bổ sung ngay trường **Mã số sinh viên (MSSV)** vào biểu mẫu đăng ký trong `prototype/dist/index.html` và kiểm tra hợp lệ định dạng sinh viên VKU (ví dụ: chuỗi ký tự bắt đầu bằng mã khóa).
- [ ] **Trải nghiệm tương tác:** Thêm hiệu ứng Loading (`setTimeout` 500ms), vô hiệu hóa nút submit (`button.disabled = true`) khi đang xử lý để ngăn chặn gửi trùng đăng ký.
- [ ] **Thống nhất Design System:** Đồng bộ toàn bộ màu sắc và token giao diện theo bảng màu **Campus Friendly Blue/Orange** của BMAD UX Spine.

### Mức P1 — Cần thiết hoàn thiện trong tuần này
- [ ] **Bổ sung tính năng Hủy:** Trong màn hình hộp thư mô phỏng vé sự kiện, bổ sung nút **"Hủy đăng ký / Báo bận"** để giải quyết điểm đau vắng mặt không báo.
- [ ] **Mô phỏng khâu Check-in:** Dựng tối thiểu 1 màn hình đơn giản dành cho Ban tổ chức: Nhập MSSV hoặc quét mã QR để chuyển trạng thái từ *"Đã đăng ký"* sang *"Đã tham dự"*.
- [ ] **Lưu trữ trạng thái:** Sử dụng `sessionStorage` cho dữ liệu đăng ký trong `app.js` để tránh mất dữ liệu khi người dùng bấm F5.
- [ ] **Khả năng tiếp cận:** Sửa màu chữ phụ đạt tương phản 4.5:1 và chuẩn hóa cấu trúc thẻ tiêu đề (`<h1>`, `<h2>`).

### Mức P2 — Cải tiến nâng cao
- [ ] Thiết kế Empty State thân thiện cho hộp thư cá nhân khi chưa có thông báo.
- [ ] Thêm tính năng xuất mã QR trực tiếp ra định dạng ảnh để sinh viên lưu vào máy điện thoại dự phòng khi mất kết nối mạng.

---

## 7. KẾT LUẬN

Bản Prototype và Design System hiện tại là bước khởi đầu trực quan tốt, nhưng **đang bị thu hẹp phạm vi quá mức so với kết quả nghiên cứu Tuần 2**. Sản phẩm mới chỉ dừng lại ở một form thu thập dữ liệu web tĩnh, đã cắt bỏ khâu Check-in và khâu Xử lý hủy — vốn là hai giá trị cốt lõi nhất mà đề tài cam kết giải quyết cho CLB VSC.

Đội ngũ phát triển cần ưu tiên xử lý các hạng mục **P0** (thêm MSSV, chống gửi trùng, bổ sung khâu check-in và thống nhất Design System) để bảo đảm sản phẩm đáp ứng đúng cam kết của đề tài.

---
*Báo cáo được lập bởi TV09 — Phạm Nguyễn Phú Trọng (Force Team) theo chuẩn mực BMAD Review.*
