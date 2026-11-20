# BÁO CÁO REVIEW THIẾT KẾ & PROTOTYPE HTML

> **Dự án:** Chuyende3 / Force  
> **Tài liệu kiểm tra:** `DESIGN.md`, `EXPERIENCE.md`, `PROTOTYPES.md`, `mockups/` và `.working/prototype/`  
> **Quy tắc tuân thủ:** `AGENTS.md` & `superpowers-review` (`docs/` là Read-only tham chiếu; báo cáo lưu tại `_bmad-output/`)

---

## 1. NHỮNG ĐIỂM SƠ SÀI HOẶC THIẾU TRẠNG THÁI / LUỒNG NGHIỆP VỤ

Qua rà soát đối chiếu giữa đặc tả UX (`DESIGN.md`, `EXPERIENCE.md`) và logic hiện thực (`mockups/app.js`):

| Nghiệp vụ / Trạng thái | Hiện trạng trong Thiết kế & Code | Điểm sơ sài & Thiếu sót cụ thể | Mức độ |
|---|---|---|---|
| **1. Định danh & Báo lỗi trùng MSSV** | `app.js` (dòng 186–215) và `EXPERIENCE.md` (dòng 71, 99) chỉ có 2 trường: **Họ tên và Email**. | • **Hoàn toàn thiếu trường MSSV:** Không có input MSSV, không kiểm tra định dạng/trùng MSSV (dù đối tượng là sinh viên).<br>• Kiểm tra trùng chỉ dựa vào Email (`p.email === email`).<br>• Khi trùng email, chỉ hiện thông báo lỗi đơn thuần, thiếu nút "Bấm để xem lại vé của bạn". | **Critical** |
| **2. Sức chứa & Hàng chờ (Waitlist)** | Không có cấu hình giới hạn số lượng tham gia; `app.js` cho phép submit vô hạn (`state.next++`). | • **Thiếu trạng thái Hết chỗ:** Không có badge "Hết vé/Đủ chỗ", không có màn hình đăng ký vào hàng chờ (Waitlist).<br>• **Thiếu cơ chế đôn chỗ:** Khi một người hủy vé, không có cơ chế tự động chuyển người từ hàng chờ sang vé chính thức. | **Critical** |
| **3. Check-in QR** | Màn hình `#check-in` có ô tìm kiếm và nút "Mô phỏng đọc mã" (dòng 150 `app.js`). | • **Không có Camera Scanner:** Chỉ là nút click tự điền chuỗi `FORCE-001` vào text input, không có viewport camera hay laser scan.<br>• **Phía sinh viên không có mã QR:** Màn hình vé (`#status`) chỉ hiện mã text in hoa `FORCE-001`, **hoàn toàn không render mã QR Code** (thiếu thư viện/canvas tạo QR) để sinh viên đưa cho ban tổ chức quét. | **Important** |
| **4. Hủy vé & Rút đăng ký** | Sinh viên tự hủy được tại `#status` thông qua dialog xác nhận an toàn (`cancelRegistration`, dòng 255). | • Thiếu lý do hủy vé (survey ngắn phục vụ đối soát).<br>• Không có liên kết hủy trực tiếp từ Email xác nhận.<br>• Ban tổ chức không có quyền hủy vé hộ sinh viên trên giao diện quản lý `#attendees`. | **Important** |
| **5. Xuất danh sách (Export CSV)** | Nút "Tải danh sách CSV" tại `#report` (dòng 152–165 `app.js`), hỗ trợ escape formula injection. | • **File CSV chỉ có 4 cột cơ bản:** `Mã đăng ký, Họ và tên, Email, Trạng thái`.<br>• Thiếu các trường quản lý sinh viên: MSSV, Lớp/Khoa, Thời điểm đăng ký (timestamp), Thời điểm check-in, Ghi chú.<br>• Chưa có bộ lọc trước khi xuất (ví dụ: chỉ xuất danh sách "Đã tham dự" để gửi điểm rèn luyện). | **Important** |
| **6. Trạng thái hệ thống khác** | Mới chỉ có xử lý mất mạng (Offline) và mất quyền qua `DemoToolbar`. | • Thiếu **Loading state / Skeleton** khi tải trang hoặc chờ phản hồi mạng.<br>• Thiếu trạng thái **Sự kiện đã kết thúc / Hết hạn đăng ký**.<br>• Hardcode chết 1 sự kiện duy nhất (26/11/2026), thiếu màn hình duyệt danh mục nhiều sự kiện. | **Minor** |

---

## 2. TÌNH TRẠNG THỰC TẾ CỦA PROTOTYPE HTML BẤM THỬ ĐƯỢC

### 2.1. Phân loại các file hiện có

Prototype hiện được đặt ở 2 thư mục song song (`mockups/` và `.working/prototype/`):

1. **Ứng dụng SPA tương tác chính (`mockups/index.html` + `mockups/app.js`):**
   * **Trạng thái:** **Interactive 100% (Hoạt động tốt)** qua cơ chế điều hướng URL Hash Routing.
   * **Đã bấm thử được 7 màn hình nối luồng liền mạch:**
     * `#event`: Xem chi tiết workshop, lịch trình bento grid, nút CTA chuyển sang đăng ký.
     * `#register`: Form đăng ký có validate client-side, chặn trùng email, tạo mã mới `FORCE-00X`.
     * `#status`: Hiển thị vé tham dự, timeline tiến trình, nút mở dialog hủy đăng ký.
     * `#lookup`: Form nhập mã `FORCE-XXX` để tìm lại vé và chuyển sang `#status`.
     * `#attendees`: Bảng quản lý của BTC, lọc tìm kiếm real-time theo tên/email/mã, lọc trạng thái, responsive card trên mobile.
     * `#check-in`: Bàn đón tiếp chia 2 cột, chọn người đối chiếu thông tin, nút xác nhận check-in (chặn check-in trùng, chặn check-in vé đã hủy), nút hoàn tác check-in yêu cầu nhập lý do.
     * `#report`: Báo cáo tỷ lệ tham dự trực quan bằng thanh progress bar, preview dữ liệu bảng và nút tải file CSV thực tế về máy.
   * **Công cụ DemoToolbar:** Cho phép chuyển vai trò (Sinh viên ↔ BTC), bật/tắt giả lập mất mạng (Offline), bật/tắt quyền thao tác, xem dữ liệu rỗng và reset về 7 bản ghi mẫu.

2. **Các trang Static Mockups độc lập (`key-event.html`, `key-attendees.html`, `key-check-in.html`, `components.html`):**
   * **Trạng thái:** **Static (Tĩnh)** — Chỉ chứa mã HTML/CSS tĩnh minh họa bố cục layout và thư viện component (Button, Badge, Card, Field). Dữ liệu bị fix cứng, form readonly, không gắn logic JavaScript.

### 2.2. Phần chưa có hoặc chưa nối luồng

* **Chưa có trang Danh mục sự kiện (Event Catalogue):** Cả SPA và static mockups đều gắn chết vào 1 workshop duy nhất; chưa có trang chủ liệt kê danh sách sự kiện của CLB để chọn sự kiện cần đăng ký.
* **Thiếu các trang mockup tĩnh tương ứng:** Chưa có `key-register.html` (mẫu tĩnh form đăng ký), `key-status.html` (mẫu tĩnh vé 3 trạng thái), `key-lookup.html` (mẫu tĩnh tra cứu), và `waitlist.html` (mẫu hàng chờ).
* **Bất đồng bộ CSS:** File `styles.css` giữa `mockups/` và `.working/prototype/` có sự sai lệch nhẹ về mã băm MD5 (bản trong `mockups/` chứa các cập nhật token Campus Friendly mới hơn).
* **Dữ liệu chưa Persist:** Dữ liệu demo chỉ lưu tạm trong RAM của trình duyệt. Khi bấm F5 tải lại trang, mọi đăng ký mới tạo sẽ biến mất và quay về 7 bản ghi mặc định ban đầu.

---

## 3. KẾT LUẬN & ĐÁNH GIÁ TỔNG THỂ

* **Mức độ hoàn thiện Prototype:** **~75%** (Rất tốt cho mục đích demo kịch bản và kiểm chứng giả thuyết nội bộ; nhưng chưa đủ trường nghiệp vụ cho sản phẩm sinh viên thật).
* **Hành động ưu tiên:** Bổ sung trường MSSV vào form đăng ký và bảng CSV, tích hợp thư viện vẽ mã QR trên màn hình vé sinh viên, và bổ sung kịch bản Hàng chờ (Waitlist) khi hết chỗ.
