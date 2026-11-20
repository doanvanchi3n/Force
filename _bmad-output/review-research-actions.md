# BÁO CÁO REVIEW ĐỘ KHỚP RESEARCH & DANH SÁCH HÀNH ĐỘNG NÂNG CẤP

> **Dự án:** Chuyende3 / Force  
> **Người thực hiện:** Huỳnh Văn Lợi (theo quy chuẩn `superpowers-review` & `AGENTS.md`)  
> **Tài liệu đối chiếu chuẩn (Ground Truth):** `docs/discovery/` (đặc biệt: `results/Week-2/TV01.md`, `TV02.md`, `TV04.md`, `TV05.md`, `client/Client-Brief.md`)  
> **Đối tượng review:** Các artifact tại `_bmad-output/planning-artifacts/research/` và liên đới tới UX/Prototype.  
> **Quy tắc bảo toàn:** `docs/` là READ-ONLY (không sửa đổi); toàn bộ báo cáo và đề xuất nằm trong `_bmad-output/`.

---

## PHẦN 1: ĐỘ KHỚP GIỮA CÁC FILE RESEARCH VỚI TÀI LIỆU GỐC (`docs/discovery/`)

### 1.1. Bảng so sánh nền tảng: Google Forms / Luma / Eventbrite (`01-competitor-research.md` vs `TV02.md`)

* **Tài liệu gốc (`docs/discovery/results/Week-2/TV02.md`):**  
  Tác giả Huỳnh Văn Lợi (TV02) xây dựng ma trận so sánh tại Mục 3.2 với hệ thống 5 nhãn nhận thức luận nghiêm ngặt:
  * `[D]` = Dữ kiện có nguồn chính thức (`SRC-W2-TV02-01` đến `21`).
  * `[S]` = Suy luận rút ra từ dữ kiện.
  * `[G]` = Giả định cần hỏi lại VSC.
  * `[?]` = Điểm mù, chưa rõ.
  * `[T]` = Đã tự thử thực tế trên tài khoản test (có ảnh chụp minh chứng).
  Các dữ liệu định lượng cụ thể: Luma Plus $59/tháng (năm), Eventbrite vé trả phí 3.7% + $1.79/vé; Luma Free giới hạn 15 lời mời/tuần; Luma chặn đăng ký trùng email (`[T]`), Eventbrite không chặn đăng ký trùng email (`[T]`).

* **Hiện trạng trong `_bmad-output/.../01-competitor-research.md`:**
  * **Vấn đề 1 (Bị "làm phẳng" nhãn nhận thức):** Bảng ma trận tại Dòng 21–30 đã loại bỏ hoàn toàn các ký hiệu nhãn `[D]`, `[S]`, `[G]`, `[?]`, `[T]` trong từng ô. Thay vào đó, AI chuyển thành câu văn gián tiếp: *"Báo cáo nêu...", "TV02 nói...", "Chưa đủ bằng chứng..."*. Điều này làm suy giảm tính chính xác của tài liệu gốc: người đọc không còn thấy ngay điểm nào là kết quả tự thử có bằng chứng (`[T]`), điểm nào là tài liệu hãng (`[D]`), và điểm nào là thành viên suy diễn (`[S]`).
  * **Vấn đề 2 (Lược bỏ số liệu định lượng chi phí):** Ma trận chỉ ghi chung chung *"Chưa có nguồn đầy đủ"*, bỏ quên bảng phí chi tiết mà TV02 đã đối soát ở mục 4 (Luma Plus $59/tháng, phí vé trả phí 5% Luma / 3.7% Eventbrite).
  * **Vấn đề 3 (Bỏ sót cơ chế duyệt khách):** TV02 có ghi nhận tính năng Host duyệt hoặc từ chối khách (`[D][T]` với Luma tại `SRC-06`, `SRC-11`), nhưng `01-competitor-research.md` chỉ ghi *"quản lý khách"*, làm mất đi một cơ chế nghiệp vụ quan trọng cho các sự kiện chọn lọc của CLB.

### 1.2. Về việc không suy diễn công cụ và nhu cầu của CLB VSC

* **Tài liệu gốc (`docs/discovery/results/Week-2/TV02.md`, `TV01.md`):**  
  * TV02 nhấn mạnh ngay mục 1 và 3.1: *"Không suy luận CLB đang dùng một công cụ khi chưa có bằng chứng... Ba phương án so sánh là phương án có thể dùng, không phải công cụ VSC đang dùng."*
  * TV01 ghi rõ: *"Client (VSC) và nhu cầu vẫn cần xác minh, chưa có xác nhận hợp tác."*

* **Đối chiếu trong `_bmad-output/planning-artifacts/research/`:**
  * **Điểm làm rất tốt (Thận trọng nhận thức luận):**  
    Bộ tổng hợp BMAD (`research.md`, `05-problem-statement.md`, `08-assumption-hypothesis-validation.md`) đã thể hiện sự trung thực đáng khen ngợi:
    * Gắn cờ rõ: `claims_verified: 0`, `claims_unverified: 14`.
    * Không khẳng định VSC đã chốt website riêng, nêu rõ trung vị hài lòng của BTC hiện tại là **4/5**, chưa chứng minh được sự cấp thiết phải lập trình sản phẩm mới.
    * Ghi rõ TV08 (Canvas) và TV09 (Journey) ở tài liệu gốc là template trống (`Todo`), nên các file `06-problem-canvas.md` và `07-customer-journey-map.md` do AI tạo ra đều được dán nhãn minh bạch là **Bản nháp / Giả thuyết**.
  * **Điểm lệch pha (Nhảy cóc ở tầng UX/Prototype):**  
    Trong khi tầng Research rất cẩn trọng, thì tầng UX kế thừa (`DESIGN.md`, `EXPERIENCE.md`, và đặc biệt là `mockups/app.js`) lại nhảy cóc:
    * Hardcode sự kiện mẫu: *"Workshop: Tự tin thuyết trình 26/11/2026"* và mã phiếu *"FORCE-001"*.
    * Giả định ngầm rằng VSC chắc chắn cần check-in QR và tra cứu vé trên website, trong khi khảo sát TV05 cho thấy sinh viên chủ yếu thích nhận vé qua Email cá nhân (5/6), không hề đòi hỏi portal tài khoản riêng.

### 1.3. Bảng đối chiếu chi tiết các điểm sai lệch / thiếu sót

| Vị trí file trong `_bmad-output/` | Nội dung hiện tại của AI | Chuẩn đối chiếu trong `docs/discovery/` | Đánh giá & Rủi ro |
|---|---|---|---|
| `01-competitor-research.md` (dòng 21–30) | Ma trận so sánh diễn giải văn xuôi, không còn nhãn `[D]/[S]/[G]/[?]/[T]` | Bảng 3.2 trong `TV02.md` gắn nhãn kép cho từng ô dữ liệu (`[D][T]`, `[S]`, `[?]`) | **Important:** Mất ranh giới giữa bằng chứng tự thử (`[T]`) và tài liệu hãng (`[D]`). |
| `01-competitor-research.md` (dòng 38–43) | Đánh giá giá Luma/Eventbrite còn mơ hồ | `TV02.md` mục 4 có URL và số liệu phí chi tiết (Luma Free vs Plus $59, Eventbrite US fees) | **Minor:** Thiếu số liệu định lượng đã có sẵn nguồn. |
| `04-user-persona.md` (dòng 13) | Persona A nêu công cụ: *"Forms 8/8, Sheets 7/8"* dễ hiểu nhầm là của VSC | Mẫu TV04 n=8 là khảo sát tự chọn từ nhiều CLB khác nhau, chưa khảo sát nội bộ VSC | **Important:** Cần nhấn mạnh nhãn [Giả định] trong mô tả Persona. |
| `07-customer-journey-map.md` (toàn bộ) | Dựng journey 6 giai đoạn chi tiết từ đăng ký đến sau sự kiện | `docs/discovery/results/Week-2/TV09.md` là template trống | **Đã xử lý đúng:** AI có gắn nhãn [Giả thuyết], cần duy trì cờ này sang tầng UX. |
| `_bmad-output/README.md` | Chưa có disclaimer nổi bật về 14/14 claim unverified | `research.md` dòng 13–14 ghi nhận `claims_verified: 0`, `unverified: 14` | **Critical:** Người xem ngoài dễ ngộ nhận kết quả đã được nghiệm thu. |

---

## PHẦN 2: DANH SÁCH HÀNH ĐỘNG CỤ THỂ NÂNG CẤP `_bmad-output/`

Để đưa toàn bộ kết quả trong `_bmad-output/` lên mức hoàn chỉnh, sắc nét và tuân thủ 100% `AGENTS.md`, các hành động được phân chia theo 4 mức ưu tiên:

### P0 — Bắt buộc sửa ngay (Ngăn chặn sai lệch nhận thức)

1. **Khôi phục hệ thống nhãn `[D]/[S]/[G]/[?]/[T]` vào `01-competitor-research.md`:**
   * *File cần sửa:* `_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/01-competitor-research.md`
   * *Nội dung:* Chèn lại cột/ký hiệu nhãn chuẩn vào từng tiêu chí của ma trận so sánh theo đúng Bảng 3.2 của `docs/discovery/results/Week-2/TV02.md`. Giữ nguyên ranh giới giữa tính năng đã tự thử (`[T]`) và tính năng đọc từ tài liệu (`[D]`).
2. **Thêm khối Cảnh báo Rủi ro & Phạm vi Giả định vào `_bmad-output/README.md`:**
   * *File cần sửa:* `_bmad-output/README.md`
   * *Nội dung:* Đặt banner thông báo ngay đầu file: *"Toàn bộ 14/14 phát hiện hiện ở trạng thái Chưa kiểm chứng (Unverified). CLB VSC là đối tác tiềm năng, chưa ký kết chính thức. Toàn bộ Prototype và Design System là bản nháp phục vụ kiểm nghiệm giả thuyết."*

### P1 — Nâng cấp Design System & Bổ sung Mockup thiếu (Trước khi Demo)

3. **Bổ sung luồng Hàng chờ (Waitlist) vào UX Specs:**
   * *File cần sửa:* `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/EXPERIENCE.md`
   * *Nội dung:* Định nghĩa rõ trạng thái khi sự kiện đạt giới hạn số lượng đăng ký: chuyển nút "Đăng ký" thành "Đăng ký vào hàng chờ (Waitlist)", số thứ tự hàng chờ và cơ chế giải phóng chỗ khi có người hủy (theo cơ chế Luma/Eventbrite đã phân tích ở TV02).
4. **Đồng bộ hóa file `styles.css` giữa hai thư mục:**
   * *File cần sửa:* `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/.working/prototype/styles.css`
   * *Nội dung:* Cập nhật để đồng nhất với `mockups/styles.css` (bổ sung các biến CSS token Campus Friendly và focus management).
5. **Tạo các file static mockup HTML còn thiếu trong `mockups/`:**
   * *File tạo mới:* 
     * `mockups/key-register.html` (Màn hình form đăng ký tĩnh S02 với 3 trạng thái: trống, lỗi validate, submitting).
     * `mockups/key-status.html` (Màn hình chi tiết vé S03 tĩnh hiển thị 3 trạng thái vé: Đã đăng ký, Đã tham dự, Đã hủy).
     * `mockups/key-lookup.html` (Màn hình tra cứu vé S04).
     * `mockups/waitlist.html` (Màn hình thông báo trạng thái hàng chờ).

### P2 — Hoàn thiện tính tương tác & Hồ sơ kỹ thuật

6. **Cập nhật file theo dõi tiến độ `coverage.md`:**
   * *File cần sửa:* `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/.working/coverage.md`
   * *Nội dung:* Chuyển trạng thái từ "Đang chờ renderer tạo 5 tệp" sang "Đã sinh đủ 5 mockup và 1 SPA tương tác", khớp với thực tế thư mục `mockups/`.
7. **Bổ sung mô phỏng Camera QR Scanner vào `app.js`:**
   * *File cần sửa:* `_bmad-output/planning-artifacts/ux-designs/ux-Chuyende3-2026-11-18/mockups/app.js`
   * *Nội dung:* Thay vì chỉ có nút "Mô phỏng đọc mã", thêm khung viewport camera giả lập có animation quét laser và danh sách các mã QR test bấm vào được ngay.

### P3 — Kiểm chứng thực địa (Handoff)

8. **Thiết kế kịch bản phỏng vấn VSC theo 6 câu hỏi của TV02 mục 3.5:**
   * *File bổ sung:* `_bmad-output/planning-artifacts/research/user-voice-research-discovery-process-2026-11-16/10-discovery-plan-and-handoff.md`
   * *Nội dung:* Lên lịch phỏng vấn trực tiếp đại diện VSC để chốt công cụ thực tế họ đang dùng, quy trình check-in hiện tại, và xác nhận xem có cần website riêng hay chỉ cần tối ưu hóa Google Forms/Sheets.
