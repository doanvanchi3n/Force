---
title: Force — User stories và acceptance criteria
status: draft
approval: pending
created: 2026-11-27
updated: 2026-11-27
namespace: force-core-2026-11-27
author: Huỳnh Thanh Thuận
updated_at: 2026-11-27
---

# User Stories — Force

11 story thuộc [ba epic](EPICS.md), bám [PRD](prds/prd-Chuyende3-2026-11-27/prd.md) và [Business Rules](BUSINESS_RULES.md). Tất cả là **draft**; AC mô tả kết quả cần đạt của ứng dụng, không tuyên bố prototype đã đáp ứng. Mã `US-*` ở `prototype/` cũ thuộc bộ khác; không đổi nghĩa các mã cũ.

Nguồn `W2-*`, `P-*`, `RD-A*` được nối cụ thể trong [Traceability](TRACEABILITY_MATRIX.md). Ưu tiên P1/P2 và kích thước S/M dưới đây là đề xuất của lần phân rã, không phải estimate hay cam kết deadline của nhóm. S = một hành vi tập trung; M = lát cắt UI/miền/lưu trữ cần kiểm tra cùng nhau. Story quá lớn khi triển khai phải tách theo giá trị và giữ FR/AC.

## E-01 — Đăng ký và theo dõi

### US-01 — Xem thông tin để quyết định tham gia

Là sinh viên, tôi muốn đọc lịch, địa điểm, nội dung và điều kiện đăng ký để biết mình có thể tham gia hay không.

**FR-01 · BR-01 · UJ-01 · S01 · P1/S.** Phụ thuộc: không. OQ-04 chi phối nhận đăng ký thật; fixture vẫn dùng được để thử UI. Tác vụ bootstrap tối thiểu sau chọn stack nằm trong story này.

- **AC-01.1:** Cho trước sự kiện cấu hình đầy đủ, khi mở chi tiết, thì thấy tên/mô tả/lịch có múi giờ/địa điểm và trạng thái nhận đăng ký, không dùng lịch demo làm hạn thật.
- **AC-01.2:** Cho trước sự kiện đã ngừng nhận, khi mở trang hoặc gửi request trực tiếp, thì không nhận đăng ký mới; thông báo có cách quay lại/hỗ trợ. Trạng thái này chưa có trong prototype chính.
- **AC-01.3:** Cho trước khung 360px hoặc zoom 200%, khi đọc và điều hướng bằng bàn phím, thì thông tin/CTA không bị che hoặc đòi hover; UI dùng token hiện hành. Không tìm thấy sự kiện có thông báo, không tự dựng sự kiện khác.

### US-02 — Gửi đúng một đăng ký hợp lệ

Là sinh viên, tôi muốn gửi thông tin và sửa được lỗi để có một đăng ký được ghi nhận chính xác.

**FR-02/03 · BR-01/02/03/10/11/14 · UJ-01 · S02 · P1/M.** Phụ thuộc: US-01. OQ-03/04/05 cần chốt cho dữ liệu thật; form core đề xuất tên/email.

- **AC-02.1:** Cho trước tên/email sai hoặc trống, khi gửi, thì báo lỗi cạnh trường và summary có liên kết, giữ dữ liệu hợp lệ, focus summary; máy chủ áp cùng giới hạn, không ghi hồ sơ lỗi.
- **AC-02.2:** Cho trước form hợp lệ và sự kiện nhận đăng ký, khi máy chủ lưu thành công, thì chỉ có một hồ sơ `registered`, trả mã hiển thị và kết quả của lượt gửi. Nếu nhận thất bại thì form còn nguyên và không hiện thành công.
- **AC-02.3:** Cho trước hai lượt mới đồng thời có cùng email chuẩn hóa trong cùng sự kiện, khi xử lý, thì chỉ một hồ sơ tồn tại; lượt trùng không nhận tên, mã, token hoặc link mở hồ sơ cũ. Cùng email ở sự kiện khác không bị chặn bởi uniqueness toàn hệ thống.
- **AC-02.4:** Cho trước cùng request key/payload được gửi lại do mất phản hồi, khi xử lý, thì trả kết quả cũ cho lượt đó, không tạo thêm hồ sơ; cùng key khác payload bị từ chối. Key khác không được lấy lại bí mật của lượt cũ.
- **AC-02.5:** Cho trước chưa gửi được vì mất mạng, khi submit, thì giữ form; nếu timeout sau gửi thì hiển thị kết quả chưa xác định và đối soát lượt gửi trước retry. Bấm lặp không tạo nhiều hồ sơ; không tự xếp hàng offline.

### US-03 — Biết kết quả và giữ cách truy cập riêng

Là sinh viên, tôi muốn thấy mã và trạng thái rõ ràng sau đăng ký để biết bước tiếp theo và giữ cách xem hồ sơ của mình.

**FR-04 · BR-04/05/11/14 · UJ-01 · S03 · P1/S.** Phụ thuộc: US-02. Cơ chế cấp quyền riêng dùng candidate của kiến trúc; OQ-06 cần quyết định trước dùng thật.

- **AC-03.1:** Cho trước kết quả ghi thành công, khi mở biên nhận, thì thấy sự kiện, mã đối chiếu và “Đã đăng ký”; không dùng “Đã tham dự” hoặc “Đã gửi email”.
- **AC-03.2:** Cho trước một hồ sơ đang checked/cancelled và quyền hợp lệ, khi đọc lại từ máy chủ, thì badge/timeline hiển thị đúng trạng thái đó, không tự ghi thêm mốc chưa xảy ra.
- **AC-03.3:** Cho trước lần cấp quyền truy cập riêng đã được chốt, khi hiển thị cách giữ quyền, thì nêu rõ cần giữ bí mật; mã hiển thị tuần tự không thay quyền. Khi tải lại ứng dụng thật, hồ sơ còn trong lưu trữ; prototype RAM không đáp ứng điều này.

### US-04 — Tìm lại hồ sơ của mình

Là sinh viên, tôi muốn dùng cách truy cập đã được cấp để tìm lại hồ sơ và kiểm tra trạng thái khi cần.

**FR-05 · BR-05/11/14 · UJ-02 · S04→S03 · P1/M.** Phụ thuộc: US-03. OQ-06 là điểm chặn dùng thật; demo mã mẫu chỉ để thử UI.

- **AC-04.1:** Cho trước quyền truy cập hợp lệ, khi tìm lại, thì chỉ mở đúng hồ sơ/sự kiện thuộc quyền đó; đọc trạng thái hiện tại từ máy chủ.
- **AC-04.2:** Cho trước giá trị trống/sai/hết hiệu lực, khi tra cứu, thì nêu cách thử lại/hỗ trợ, giữ trường và focus lỗi; không trả tên/email hoặc xác nhận chủ thể cho người chưa có quyền.
- **AC-04.3:** Cho trước người chỉ biết email, MSSV hoặc mã hiển thị của người khác, khi thử truy cập hoặc gọi API trực tiếp, thì không xem/hủy được hồ sơ. Áp giới hạn dò tìm và phản hồi phù hợp; mất mã đi qua quy trình hỗ trợ đã chốt, không có nút vượt quyền.

### US-05 — Hủy khi không thể tham gia

Là sinh viên đã đăng ký, tôi muốn xác nhận hủy hồ sơ của mình để BTC biết tôi không còn tham gia theo đăng ký đó.

**FR-06 · BR-05/06/10/11 · UJ-02 · S03/dialog · P2/M.** Phụ thuộc: US-04. OQ-05 trước dùng thật; không cam kết giảm no-show.

- **AC-05.1:** Cho trước registered thuộc quyền mình và trong điều kiện cho phép, khi xác nhận hủy, thì chuyển một lần sang cancelled; khi BTC đọc lại thấy cùng trạng thái, không xóa hồ sơ.
- **AC-05.2:** Cho trước dialog hủy đang mở, khi chọn giữ hoặc Escape, thì trạng thái giữ nguyên và focus về nơi mở. Không có mutation chỉ vì mở/đóng dialog.
- **AC-05.3:** Cho trước checked/cancelled hoặc trạng thái đã đổi bởi máy khác, khi gửi hủy, thì giữ trạng thái hợp lệ hiện tại và yêu cầu đối soát; lỗi quyền/kết nối không giả báo hủy xong. Không cho đăng ký lại tự động.

## E-02 — Đối chiếu tại cửa

### US-06 — Vào đúng không gian BTC được phân công

Là BTC, tôi muốn đăng nhập và chỉ vào sự kiện mình được phân công để thao tác trên đúng dữ liệu.

**FR-07 · BR-09/14 · UJ-03/04 · bề mặt đăng nhập chưa dựng · P1/M.** Phụ thuộc: US-02 (có sự kiện/hồ sơ); OQ-02/07. Đây là lớp quyền của mọi story BTC tiếp theo.

- **AC-06.1:** Cho trước phiên hợp lệ và quyền sự kiện, khi vào không gian BTC, thì máy chủ xác nhận quyền và chỉ trả dữ liệu của sự kiện được phép.
- **AC-06.2:** Cho trước chưa đăng nhập/phiên hết hạn, khi đọc danh sách hoặc gọi endpoint ghi/xuất trực tiếp, thì từ chối hoặc dẫn đăng nhập, không lộ dữ liệu; không gửi thao tác đang chờ tự động sau đổi người đăng nhập.
- **AC-06.3:** Cho trước BTC chỉ có quyền sự kiện A, khi thay event ID sang B, thì mọi đọc/ghi/preview/export B bị từ chối. Đổi vai trò ở toolbar demo không được tính là đăng nhập.

### US-07 — Tìm đúng người trước khi ghi nhận

Là BTC, tôi muốn tìm và lọc đăng ký theo trạng thái để đối chiếu người đang đến bàn.

**FR-08 · BR-09/11/14 · UJ-03 · S05/S06 · P1/M.** Phụ thuộc: US-06.

- **AC-07.1:** Cho trước danh sách thuộc sự kiện được phép, khi tìm tên/email/mã và lọc trạng thái, thì chỉ trả các bản ghi khớp; hiển thị tên trường/trạng thái đủ để đối chiếu.
- **AC-07.2:** Cho trước không có hồ sơ hoặc không khớp lọc, khi xem danh sách, thì phân biệt hai tình huống, có bỏ lọc/thử lại phù hợp và không tạo hàng giả.
- **AC-07.3:** Cho trước một người được chọn, khi mở chi tiết rồi quay lại, thì bộ lọc giữ ngữ cảnh; việc chọn không check-in. Thất bại tải giữ thông tin cũ có nhãn chưa làm mới; bàn phím chọn được người.

### US-08 — Ghi nhận tham dự đúng một lần

Là BTC, tôi muốn đối chiếu và xác nhận check-in để ghi nhận đúng người mà không đếm lặp.

**FR-09 · BR-07/09/10/11 · UJ-03 · S06 · P1/M.** Phụ thuộc: US-07; OQ-07/09 trước dùng tại cửa thật.

- **AC-08.1:** Cho trước registered được chọn và có quyền check-in, khi xác nhận, thì chuyển sang checked và ghi người/thời điểm; đọc lại cùng hồ sơ thấy đã tham dự.
- **AC-08.2:** Cho trước checked/cancelled hoặc người chưa tìm thấy, khi bấm/xử lý lặp, thì không tăng tham dự hoặc tạo người mới; phản hồi nêu trạng thái/cách đối chiếu. Quét/chọn không tự xác nhận.
- **AC-08.3:** Cho trước hai máy đồng thời check-in hoặc một máy hủy và một máy check-in từ cùng phiên bản, khi xử lý, thì chỉ một chuyển trạng thái thắng; máy còn lại nhận trạng thái mới/xung đột, không ghi đè.
- **AC-08.4:** Cho trước lỗi mạng/quyền, khi cập nhật, thì không báo hoàn tất; timeout sau gửi dùng đối soát request để biết đã ghi hay chưa. Không lưu offline rồi tuyên bố đã đồng bộ.

### US-09 — Sửa một lần ghi nhận nhầm có dấu vết

Là BTC được cấp quyền hoàn tác, tôi muốn nêu lý do khi sửa check-in để danh sách đúng và vẫn kiểm tra được lịch sử.

**FR-10 · BR-08/09/10/11 · UJ-03 · S06/dialog · P2/M.** Phụ thuộc: US-08; OQ-07.

- **AC-09.1:** Cho trước checked và có quyền undo, khi nhập lý do hợp lệ rồi xác nhận, thì trở về registered; cùng giao dịch ghi actor/thời điểm/lý do/trước/sau, không xóa dấu vết check-in cũ.
- **AC-09.2:** Cho trước lý do trống sau trim hoặc dài hơn 300 ký tự, khi gửi, thì giữ dialog, focus lỗi gắn trường, không đổi trạng thái; Escape giữ nguyên và trả focus.
- **AC-09.3:** Cho trước không có quyền, hồ sơ không checked hoặc phiên bản đã thay đổi, khi gửi trực tiếp/lặp, thì từ chối chuyển trạng thái; lỗi ghi audit rollback thay đổi hồ sơ. Nội dung lý do không xuất thành công thức/script khi hiển thị.

## E-03 — Tổng hợp và báo cáo

### US-10 — Đối chiếu số liệu với danh sách

Là BTC, tôi muốn xem các số đếm có định nghĩa rõ để biết báo cáo khớp với hồ sơ tham dự.

**FR-11 · BR-09/10/12 · UJ-04 · S07 · P1/S.** Phụ thuộc: US-08; không cần US-09 để đọc số đếm.

- **AC-10.1:** Cho trước dữ liệu cùng snapshot, khi xem tổng hợp, thì tổng bằng registered + checked + cancelled; thao tác lặp không làm số đếm lệch hồ sơ.
- **AC-10.2:** Cho trước registered=2, checked=1, cancelled=1, khi xem, thì tổng 4, còn hiệu lực 3, tỷ lệ 33%; trường hợp mẫu số 0 hiển thị 0% và nhãn mẫu số 0. Đây là fixture kiểm tra, không phải số liệu khảo sát.
- **AC-10.3:** Cho trước không có quyền hoặc lỗi làm mới, khi mở/tải lại, thì không rò số liệu và không trình bày số cũ như dữ liệu vừa cập nhật. Nhãn tỷ lệ không gọi no-show, không tự cấp điểm/chứng nhận.

### US-11 — Lấy đúng tệp báo cáo đã xem trước

Là BTC có quyền xuất, tôi muốn xem trước và tải CSV cùng phạm vi để bàn giao dữ liệu mình đã đối chiếu.

**FR-12 · BR-09/11/13/14 · UJ-04 · S07 · P2/M.** Phụ thuộc: US-10; OQ-08/10 trước xuất dữ liệu thật.

- **AC-11.1:** Cho trước snapshot/phạm vi preview đã chọn, khi tải, thì tệp UTF-8 có bốn cột core và toàn bộ hồ sơ sự kiện gồm đã hủy, cùng thứ tự/nội dung với preview. Dữ liệu đổi sau preview cần tải lại preview hoặc tải đúng snapshot cũ; không âm thầm trộn hai lần đọc.
- **AC-11.2:** Cho trước giá trị có dấu nháy/phẩy/xuống dòng hoặc bắt đầu bằng ký tự công thức sau khoảng trắng, khi xuất, thì được quote/escape và vô hiệu thực thi công thức; preview dùng cùng bộ serialize, token riêng không có trong tệp.
- **AC-11.3:** Cho trước danh sách rỗng, khi tải, thì tệp chỉ có tiêu đề và UI nêu 0 bản ghi; lỗi tạo/tải giữ preview và cho thử lại. Chưa có quyền export thì API từ chối dù nút bị gọi trực tiếp; không tự gửi tệp ra ngoài.

## Lát cắt TV03 — Bản thử đăng ký S01–S03

TV03 chọn lát cắt này từ lỗi mất phiên khi tải lại trong review tuần 3. Bối cảnh vai trò BTC và sinh viên ở [[docs/discovery/results/Week-2/TV03|Stakeholder Mapping]] vẫn là đầu vào nghiên cứu. Mã PT kiểm tra bản thử tương ứng với từng story core. Xem [[BUSINESS_RULES#Quy tắc phiên bản thử TV03]], [[prototype/README|Cách chạy prototype]], [[06-Planning/BID|BID]], [[docs/discovery/results/Week-3/review-TV08|Review tuần 3, ISSUE-12]] và [[TRACEABILITY_MATRIX#Bản thử TV03]].

### US-01 · S01 — Biết sự kiện đang nhận đăng ký

**Vai trò, hành động, giá trị.** Là sinh viên nhận link workshop, tôi muốn biết giờ, nơi tổ chức và sự kiện còn nhận đăng ký hay không để quyết định tham gia.

**Happy Path.** Mở chi tiết, đọc lịch có múi giờ và địa điểm, rồi chọn **Đăng ký tham gia** để đi tới biểu mẫu.

**Edge Cases.** Khi BTC đã đóng đăng ký trong kịch bản thử, sinh viên vẫn đọc được thông tin sự kiện và hướng hỗ trợ. Ở khung hẹp, giờ, địa điểm và nút vẫn đọc và dùng được.

- **PT-01.1 (AC-01.1/3 · BR-01). Given** fixture đang nhận, **When** mở trang và chọn đăng ký, **Then** chi tiết hiển thị tên, nội dung, giờ UTC+7, địa điểm và đưa focus đến tiêu đề biểu mẫu.
- **PT-01.2 (AC-01.2 · BR-01 · BR-D01). Given** kịch bản đã đóng, **When** mở chi tiết hoặc tải lại cùng tab, **Then** thông báo đóng kèm hướng hỗ trợ xuất hiện và luồng không mở biểu mẫu.

### US-02 · S02 — Gửi một đăng ký hợp lệ và phục hồi lỗi

**Vai trò, hành động, giá trị.** Là sinh viên gửi biểu mẫu từ điện thoại, tôi muốn biết trường cần sửa và gửi lại an toàn để có một hồ sơ đúng cho sự kiện.

**Happy Path.** Điền tên và email mẫu. Sau khi gửi và ghi thành công, xem kết quả.

**Edge Cases.** Tên thiếu hoặc ngoài giới hạn, email sai hoặc trùng, bấm gửi lặp, lỗi trước khi ghi và mất phản hồi sau khi ghi. Sau F5 người dùng tiếp tục với bản nháp cùng tab.

- **PT-02.1 (AC-02.1 · BR-02/14). Given** tên sau chuẩn hóa dưới 2 hoặc trên 80 code point, hoặc email trống, sai định dạng hay quá 254 ký tự, **When** gửi, **Then** tóm tắt lỗi nhận focus, dẫn tới trường sai và giữ nội dung đã nhập.
- **PT-02.2 (AC-02.2/3/4 · BR-02/03/04). Given** sự kiện nhận đăng ký và tên/email hợp lệ, **When** mô phỏng xử lý hai lần cùng lượt hoặc gửi lượt mới bằng email trùng sau trim/lowercase, **Then** cùng lượt chỉ có một hồ sơ và một mã. Lượt mới bị báo trùng và không lộ hồ sơ cũ.
- **PT-02.3 (AC-02.5 · BR-11 · BR-D01). Given** kịch bản lỗi lưu lần đầu, **When** gửi rồi tải lại, **Then** biểu mẫu giữ bản nháp và báo chưa lưu. Gửi lại hợp lệ mới sinh mã.
- **PT-02.4 (AC-02.4/5 · BR-03/11 · BR-D01). Given** kịch bản mất phản hồi sau khi lưu, **When** gửi rồi tải lại, **Then** thấy “Chưa xác định kết quả”. Thông tin khác lượt báo xung đột. Gửi đúng thông tin đối soát được cùng hồ sơ.

### US-03 · S03 — Xem lại kết quả trong cùng tab

**Vai trò, hành động, giá trị.** Là sinh viên đã gửi đăng ký, tôi muốn thấy mã và trạng thái sau khi tải lại trang để biết hồ sơ đã được ghi nhận.

**Happy Path.** Sau khi lưu, xem trạng thái **Đã đăng ký** và mã tham chiếu. Tải lại cùng tab rồi kiểm tra mã cũ. Từ chi tiết có thể mở **Xem kết quả phiên này**.

**Edge Cases.** Đổi kịch bản hoặc đặt lại phiên xóa dữ liệu của biến thể đang thử. Nếu trình duyệt chặn ghi phiên, giao diện báo rằng dữ liệu có thể mất khi tải lại.

- **PT-03.1 (AC-03.1 · BR-04). Given** hồ sơ vừa được ghi thành công ở bản core, **When** xem S03, **Then** thấy sự kiện, mã tham chiếu và “Đã đăng ký”. Màn S03 chỉ hiển thị kết quả thao tác đã xảy ra.
- **PT-03.2 (AC-03.3 · BR-05/14 · BR-D01). Given** S03 đã hiển thị và lưu phiên thành công, **When** tải lại cùng tab rồi mở lại kết quả từ S01, **Then** thấy đúng mã và trạng thái trước đó. Khi đặt lại phiên hoặc đổi kịch bản, kết quả cũ biến mất.
- **PT-03.3 (BR-11/14 · BR-D01). Given** trình duyệt từ chối ghi phiên, **When** thử đăng ký, **Then** giao diện báo rõ khả năng mất dữ liệu khi tải lại.

## Điều kiện dùng story

Mỗi lần giao việc chọn một story, ghi các OQ đã đóng hoặc giả định cho fixture, UX surface, AD và AC cần kiểm tra. Trạng thái “có mockup” không thay “đã hiện thực/đã kiểm thử/đã nghiệm thu”. NFR-01…06 áp dụng theo phạm vi story; [ma trận](TRACEABILITY_MATRIX.md) chỉ rõ nơi chịu trách nhiệm. Chưa có dữ liệu kiểm thử ứng dụng thật trong lần soạn này.
