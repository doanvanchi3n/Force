---
name: Chuyende3 / Force
description: Bản nháp hệ thống thị giác cho prototype đăng ký và quản lý tham dự sự kiện CLB.
status: draft
approval: pending
proposal: V1 — hướng Campus Friendly + Bento Grid đã chọn; chi tiết thiết kế chờ xem xét
created: 2026-11-18
updated: 2026-11-27
sources:
  - ../../research/user-voice-research-discovery-process-2026-11-16/research.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/03-user-research.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/04-user-persona.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/05-problem-statement.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/06-problem-canvas.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/07-customer-journey-map.md
  - ../../research/user-voice-research-discovery-process-2026-11-16/08-assumption-hypothesis-validation.md
colors:
  primary: '#245CE7'
  primary-hover: '#1743B5'
  on-primary: '#FFFFFF'
  ink: '#182B3A'
  muted: '#546474'
  surface: '#FFFFFF'
  background: '#F5F8FF'
  border: '#D7DFE7'
  control-border: '#7C8B9B'
  accent: '#FFF0E2'
  accent-strong: '#F97316'
  on-accent: '#182B3A'
  info-soft: '#EDF2FF'
  success: '#176446'
  success-soft: '#E9F5EE'
  warning: '#805600'
  warning-soft: '#FFF3D5'
  danger: '#B42335'
  danger-soft: '#FDECEF'
  focus: '#1743B5'
typography:
  body: {fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: 16px, fontWeight: '400', lineHeight: '1.6'}
  label: {fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: 14px, fontWeight: '600', lineHeight: '1.4'}
  title: {fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: 32px, fontWeight: '700', lineHeight: '1.2'}
  display: {fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: 48px, fontWeight: '700', lineHeight: '1.1'}
  data: {fontFamily: '"Segoe UI", Arial, sans-serif', fontSize: 16px, fontWeight: '600', lineHeight: '1.6'}
rounded:
  sm: 6px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  '1': 4px
  '2': 8px
  '3': 12px
  '4': 16px
  '5': 24px
  '6': 32px
  '7': 48px
  '8': 64px
  gutter-mobile: 20px
  gutter-desktop: 32px
layout:
  content-max: 1200px
  sidebar-width: 224px
  breakpoint-stack: 720px
  breakpoint-sidebar: 960px
  control-min: 44px
components:
  AppShell: {background: '{colors.background}', foreground: '{colors.ink}', maxWidth: '{layout.content-max}'}
  EventPanel: {background: '{colors.accent}', foreground: '{colors.on-accent}', radius: '{rounded.lg}'}
  Button: {background: '{colors.primary}', foreground: '{colors.on-primary}', radius: '{rounded.sm}', minHeight: '{layout.control-min}'}
  FormField: {background: '{colors.surface}', border: '{colors.control-border}', radius: '{rounded.sm}', minHeight: '{layout.control-min}'}
  ErrorSummary: {background: '{colors.danger-soft}', foreground: '{colors.danger}', radius: '{rounded.md}'}
  StatusBadge: {radius: '{rounded.full}', typography: '{typography.label.fontSize}'}
  Notice: {background: '{colors.warning-soft}', foreground: '{colors.warning}', radius: '{rounded.md}'}
  FilterBar: {gap: '{spacing.3}', background: '{colors.surface}'}
  ParticipantList: {background: '{colors.surface}', border: '{colors.border}', radius: '{rounded.md}'}
  StatCard: {background: '{colors.surface}', foreground: '{colors.ink}', radius: '{rounded.md}'}
  ConfirmationDialog: {background: '{colors.surface}', radius: '{rounded.lg}', padding: '{spacing.5}'}
  StatusTimeline: {foreground: '{colors.ink}', gap: '{spacing.4}'}
  EmptyState: {foreground: '{colors.muted}', padding: '{spacing.6}'}
  ReportTable: {background: '{colors.surface}', border: '{colors.border}'}
  DemoToolbar: {background: '{colors.ink}', foreground: '{colors.on-primary}', gap: '{spacing.3}'}
---

# Chuyende3 / Force — Design Spine

## Brand & Style

**Người dùng đã chọn Campus Friendly + Bento Grid, Blue / Orange / White**, cùng đầu ra Markdown + HTML có thể bấm thử. Mã màu, font, radius, kích thước và chi tiết nghiệp vụ dưới đây vẫn là đề xuất V1 chờ xem xét. Đây không phải nhận diện chính thức của CLB Kỹ năng VKU (VSC), phạm vi MVP đã duyệt hay stack ứng dụng.

Bàn giao 27/11: [User Stories](../../USER_STORIES.md) nối mỗi tác vụ với surface; [PROTOTYPES](PROTOTYPES.md) ghi độ phủ và phần HTML lệch contract. Giữ nguyên token/hướng thị giác; MSSV, hàng chờ và hình QR trong code chưa tự trở thành quyết định thiết kế core.

Hình thức thân thiện campus dùng nền/mặt trắng, chữ rõ và các khối bento có kích thước khác nhau để gom thông tin hữu ích. Sinh viên đọc sự kiện, lịch, địa điểm và cách tham gia theo thứ tự; BTC thấy các số đếm bento phía trên bảng thống nhất. Xanh dương đánh dấu hành động, cam làm điểm nhấn hình học và nền ấm. Không dùng logo VSC giả, ảnh người thật hay thông tin sự kiện chưa xác nhận.

Gợi ý Event Management, Minimalism & Swiss và Calendar & Scheduling của ui-ux-pro-max là tham khảo đã tra cứu; hướng hình thức hiện tại theo lựa chọn trực tiếp của người dùng. Nguồn discovery hỗ trợ câu hỏi về danh sách, check-in, báo cáo; không xác nhận sở thích màu hoặc font của VSC. [EXPERIENCE.md](EXPERIENCE.md) định nghĩa hành vi; hai spine có ưu tiên khi mockup lệch. Xem [đối chiếu discovery](.working/reconcile-discovery.md) cho ý tưởng còn mở.

## Colors

| Nhóm token | Cách dùng |
| --- | --- |
| `{colors.primary}`, `{colors.primary-hover}`, `{colors.on-primary}` | CTA chính; hover làm đậm. Chữ trắng trên nền xanh; liên kết chữ xanh có gạch chân hoặc dấu hiệu tương tác rõ. |
| `{colors.ink}`, `{colors.muted}` | Chữ chính và mô tả phụ trên nền sáng; chữ phụ vẫn đọc được, không dùng làm chữ lỗi. |
| `{colors.surface}`, `{colors.background}`, `{colors.border}` | Mặt nội dung, nền trang và đường chia trang trí. Border nhạt không phải dấu hiệu duy nhất nhận biết ô nhập. |
| `{colors.control-border}`, `{colors.focus}` | Viền ô nhập và focus trên nền sáng. Trên DemoToolbar nền ink, focus dùng accent-strong; trên sidebar nền ink, dùng accent để giữ tương phản. |
| `{colors.accent}`, `{colors.accent-strong}`, `{colors.on-accent}` | Cam nhạt cho khối bento ấm; cam đậm cho hình học/điểm nhấn, chữ ink khi có nội dung. Không dùng chữ trắng trên cam đậm hoặc gán cam nghĩa “đã tham dự”. |
| `{colors.info-soft}` | Nền hướng dẫn trung tính; chữ primary-hover. Không dùng nền xanh nhạt để báo đã ghi nhận tham dự. |
| `{colors.success}`, `{colors.success-soft}` | Trạng thái Đã tham dự và kết quả thao tác đã ghi nhận; luôn có nhãn chữ. Badge Đã đăng ký vẫn dùng ink/background để phân biệt với tham dự. |
| `{colors.warning}`, `{colors.warning-soft}` | Cảnh báo cần xử lý, trạng thái demo mất mạng. |
| `{colors.danger}`, `{colors.danger-soft}` | Lỗi nhập, lỗi quyền hoặc thao tác hủy cần xác nhận. Đã hủy có nhãn cụ thể, không chỉ một chấm màu. |

Mục tiêu tương phản: chữ thường ≥4,5:1; chữ lớn và dấu hiệu điều khiển ≥3:1. Các cặp cần kiểm tra khi render: ink/muted trên surface/background, on-primary trên primary/primary-hover, on-accent trên accent/accent-strong, success/warning/danger trên nền soft tương ứng, control-border và focus trên surface/background; accent/accent-strong trên ink cho focus nền tối. Success green chỉ có nghĩa trạng thái hoặc kết quả thao tác, không phải màu brand. Chưa tuyên bố tuân thủ accessibility toàn bộ.

## Typography

Font hệ thống `{typography.body.fontFamily}` giữ tiếng Việt dễ đọc khi mở prototype cục bộ; không tải font ngoài. Body `{typography.body.fontSize}` / `{typography.body.lineHeight}` dùng cho hướng dẫn và nội dung; label `{typography.label.fontSize}` / `{typography.label.lineHeight}` dùng cho nhãn trường và trạng thái.

Tiêu đề trang dùng `{typography.title.fontSize}` / `{typography.title.lineHeight}`; display `{typography.display.fontSize}` / `{typography.display.lineHeight}` chỉ dành cho hình chữ sự kiện trên khung rộng. Ở khung nhỏ chuyển display về title; không thu nhỏ body để nhét nội dung. Số trong StatCard và ReportTable dùng vai trò data, bật `tabular-nums`; nhãn số đếm phải nêu đang đếm gì.

Giữ dấu tiếng Việt, viết hoa theo câu, xuống dòng tự nhiên. Email/mã dài được wrap; không cắt nhãn điều khiển, trạng thái hoặc thông tin cần quyết định. Bảng có tiêu đề cột rõ, không thay nhãn bằng biểu tượng khó đoán.

## Layout & Spacing

Scale `{spacing.1}` đến `{spacing.8}` lần lượt là 4/8/12/16/24/32/48/64px. Dùng khoảng nhỏ trong nhóm, `{spacing.5}` giữa nhóm tác vụ, `{spacing.6}` trở lên giữa phần lớn. Nội dung tối đa `{layout.content-max}`; lề mobile `{spacing.gutter-mobile}`, desktop `{spacing.gutter-desktop}`.

| Ngữ cảnh | Bố cục đề xuất |
| --- | --- |
| Sinh viên S01 | Bento hai cột: cột trái rộng hơn chứa poster chữ/hình học và giới thiệu; cột phải chứa lịch/địa điểm/CTA rồi agenda. Khối khác kích thước theo nội dung, không có sticky che thông tin. |
| Sinh viên S02–S04 | Form/kết quả/tra cứu trong một cột hẹp ở giữa, luôn giữ tên sự kiện làm ngữ cảnh. |
| BTC S05–S07 | Trên `{layout.breakpoint-sidebar}` có sidebar `{layout.sidebar-width}`, đầu trang sự kiện và StatCard bento; toolbar và bảng dữ liệu giữ ngữ cảnh chung. Nhỏ hơn chuyển điều hướng thành hàng có nhãn. |
| Check-in S06 | Hai phần tìm kiếm và người đã chọn khi còn đủ chỗ; dưới `{layout.breakpoint-stack}` xếp dọc theo thứ tự này. |
| Mobile dưới `{layout.breakpoint-stack}` | Bento thành một cột theo thứ tự tác vụ; danh sách tham dự xếp dọc cùng nhãn; nút không nằm ngoài viewport. |

Tham chiếu bố cục: [S01 sự kiện](mockups/key-event.html), [S05 danh sách BTC](mockups/key-attendees.html), [S06 check-in](mockups/key-check-in.html). Các trang giữ bố cục thích nghi desktop/mobile và trạng thái bổ sung để đối chiếu: focus CTA ở S01, tìm kiếm không khớp ở S05, cập nhật bị chặn do mất mạng ở S06. [CSS chung](mockups/styles.css) thể hiện token, breakpoint và biến thể được dùng trong bản tương tác.

## Elevation & Depth

Ưu tiên mặt trắng trên nền `{colors.background}`, đường chia `{colors.border}` và khoảng trống. Không cần bóng để biểu thị hàng có thể bấm. ConfirmationDialog có lớp nền làm dịu phần phía sau; focus và đường biên giữ rõ nội dung đang hoạt động. Không dùng glass, gradient hoặc hiệu ứng nổi khi hover làm thay đổi kích thước.

## Shapes

`{rounded.sm}` cho Button/FormField; `{rounded.md}` cho nhóm nội dung và thông báo; `{rounded.lg}` cho EventPanel/ConfirmationDialog. `{rounded.full}` dành cho StatusBadge. Hình chữ sự kiện đi cùng góc bo của EventPanel; không bo từng ô bảng gây nhiễu nhịp đọc.

## Components

Tên component trong YAML, bảng dưới và EXPERIENCE phải giống nhau. Các cặp màu/state áp dụng theo Colors; hành vi nằm ở EXPERIENCE §Component Patterns.

| Component | Giải phẫu và hình thức | State thị giác |
| --- | --- | --- |
| AppShell | Header/breadcrumb + vùng nội dung; sidebar BTC theo Layout; nền `{components.AppShell.background}`. | Điều hướng hiện tại có chữ và đường/mảng nhấn; focus rõ; không chỉ đổi màu chữ. |
| EventPanel | Cụm bento tên sự kiện, lịch/địa điểm/nội dung; hình chữ và hình học xanh-cam, nền `{components.EventPanel.background}` xen mặt trắng, bo lg. | Thông tin minh họa nhất quán S01–S04; không tạo trạng thái sắp hết chỗ không có nguồn. |
| Button | Nhãn động từ, cao tối thiểu `{components.Button.minHeight}`; primary xanh, secondary viền control-border, destructive danger. | Default/hover/focus/disabled; disabled kèm lý do gần nút khi hành động bị chặn. |
| FormField | Label trên ô, helper dưới; nền trắng, viền `{components.FormField.border}`, cao tối thiểu control-min. | Focus dùng focus; invalid viền danger + lỗi chữ, không thay label bằng placeholder. |
| ErrorSummary | Tiêu đề lỗi + các liên kết tới trường sai; nền danger-soft, chữ danger. | Xuất hiện sau submit lỗi, không che form; focus đọc được. |
| StatusBadge | Nhãn Đã đăng ký/Đã tham dự/Đã hủy, bo full, label. | Đã đăng ký dùng ink trên background; đã tham dự success/soft; đã hủy danger/soft. |
| Notice | Tiêu đề ngắn và cách xử lý; cảnh báo dùng warning-soft/warning, lỗi dùng danger-soft/danger, kết quả dùng success-soft/success; hướng dẫn dùng `{colors.info-soft}` và `{colors.primary-hover}`. | Offline/permission/duplicate có nội dung khác nhau; không dùng biểu tượng làm thông tin duy nhất. |
| FilterBar | Search và bộ lọc trạng thái, gap `{components.FilterBar.gap}`, wrap khi hẹp. | Trạng thái đã chọn có nhãn; số kết quả gần vùng lọc. |
| ParticipantList | Desktop có cột tên/email/mã/trạng thái/hành động; mobile xếp dọc; đường chia border. | Hàng được chọn có dấu hiệu và tên đầy đủ; empty dùng EmptyState, không giữ hàng giả. |
| StatCard | Số đếm kiểu data + tên chỉ số, mặt trắng hoặc cam nhạt, bo md; nhóm thành bento có thứ bậc trên bảng. | Giá trị 0 hiển thị “0”; không thay bằng dấu gạch gây mơ hồ. |
| ConfirmationDialog | Tiêu đề, hậu quả, trường lý do khi cần, hai hành động; bo lg, padding `{components.ConfirmationDialog.padding}`. | Hủy dùng danger; hoàn tác hiển thị lỗi lý do ngay trong dialog. |
| StatusTimeline | Danh sách mốc có nhãn và trạng thái; gap `{components.StatusTimeline.gap}`. | Chỉ mốc đã xảy ra trong demo có dấu hoàn tất; không bịa thời gian hoặc gửi email. |
| EmptyState | Một câu giải thích + hành động phục hồi phù hợp, chữ muted, padding spacing.6. | Phân biệt chưa có dữ liệu, không có kết quả và không tìm thấy mã. |
| ReportTable | Số liệu có tiêu đề dạng bảng hoặc nhãn/giá trị; S07 thêm thanh tỷ lệ có nhãn và preview CSV. Số dùng data và tabular-nums, đường chia border. | Empty có nhãn; preview nêu số bản ghi và việc bao gồm đăng ký đã hủy. |
| DemoToolbar | Thanh trên ứng dụng, nền ink, chữ trắng; chọn vai trò, trạng thái mạng/quyền, dữ liệu rỗng và reset. | Nhãn “BẢN THỬ” và “Sự kiện và dữ liệu giả lập” luôn rõ; không mô phỏng thành UI đăng nhập thật. |

[Thư viện component S08](mockups/components.html) minh họa các component và biến thể; [prototype tương tác](mockups/index.html) cho bấm thử S01–S07. Cả tám surface đều có tham chiếu thị giác; không có surface chỉ được mô tả bằng bảng spine.

## Do's and Don'ts

| Nên | Tránh |
| --- | --- |
| Dùng token thống nhất, nhãn trạng thái bằng chữ, CTA nêu hành động. | Thêm màu/font tùy từng màn hoặc biểu thị trạng thái chỉ bằng màu. |
| Giữ Campus Friendly + Bento Grid, xanh dương/cam/trắng; gom khối theo nhiệm vụ. | Bento chỉ để trang trí, chia bảng desktop thành khối rời, lime làm màu brand, logo VSC giả. |
| Thử wrap, focus và kích thước mục tiêu `{layout.control-min}` ở khung nhỏ. | Thu nhỏ chữ, điều khiển chỉ xuất hiện khi hover, modal lồng nhau. |
| Dùng hướng thị giác đã chọn; tiếp tục xem xét chi tiết và nghiệp vụ V1. | Mặc định dark mode hoặc suy lựa chọn phong cách thành duyệt toàn bộ artifact. |
| Ghi trạng thái thật của mô phỏng; chỉ tô mốc đã xảy ra. | Thông báo đã gửi email/đồng bộ/camera thành công khi chưa có thực hiện. |
