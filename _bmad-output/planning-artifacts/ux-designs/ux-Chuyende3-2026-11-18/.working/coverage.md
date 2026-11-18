# Kiểm tra cơ học hai spine — Pass 1

Ngày: 18/11/2026. Kiểm tra [DESIGN.md](../DESIGN.md) và [EXPERIENCE.md](../EXPERIENCE.md) bằng đọc bảng kết hợp Python/PyYAML. Đây là kiểm tra cơ học trước render; **không phải reviewer gate**, không dùng lens đánh giá bổ sung, không tuyên bố artifact đã được người dùng chấp thuận.

Đã cập nhật theo lựa chọn người dùng: **Campus Friendly + Bento Grid, Blue / Orange / White; Markdown + HTML có thể bấm thử**. Các token/chi tiết nghiệp vụ vẫn là đề xuất, full artifact chờ xem xét; mặc định lime/Minimalism trước đó đã bị thay thế.

## Kết quả theo phạm vi

| Hạng mục | Kết quả tại thời điểm soạn | Phần cần hoàn tất sau |
| --- | --- | --- |
| Flow coverage | 4/4 UJ có tiêu đề, nhân vật hư cấu được gắn nhãn, bước đánh số, climax và nhánh lỗi. UJ-01→giai đoạn 1–3; UJ-02→3–4; UJ-03→5; UJ-04→6; trace P/RD-A đầy đủ ở cuối flow. | Chạy thực tế các flow trong prototype; chưa có kết quả usability. |
| Token completeness | 19/19 màu có hex 6 ký tự; 52 token reference duy nhất trong hai spine và component YAML đều resolve. 5 vai trò chữ, 4 radius, 8 mức spacing + 2 gutter, 5 kích thước layout. | Renderer cần dùng cùng giá trị; kiểm tra CSS thực tế sau render. |
| Component coverage | 15/15 tên YAML có hàng visual trong DESIGN §Components và hàng hành vi trong EXPERIENCE §Component Patterns; không thiếu hoặc lệch tên. | Gallery phải dựng đúng các tên/biến thể. |
| State coverage | IA có S01–S08; bảng State Patterns có đủ 8 dòng. S08 gắn nhãn công cụ, S01–S07 là bề mặt bản thử; empty/error/offline/permission theo tính áp dụng. Cold-load/focus có quy tắc chung. | Thử trạng thái thực tế; không coi bảng tài liệu là bằng chứng UI đã chạy đúng. |
| Visual reference coverage | 5 đích mockup được link và nêu mục đích trong hai spine. Khi kiểm tra, mockups/wireframes/imports chưa có file; không có file mồ côi. | **Đang chờ renderer tạo 5 tệp**; kiểm tra lại đường dẫn và coverage sau khi có file. |

## Danh mục kiểm tra

Component chung: **AppShell, EventPanel, Button, FormField, ErrorSummary, StatusBadge, Notice, FilterBar, ParticipantList, StatCard, ConfirmationDialog, StatusTimeline, EmptyState, ReportTable, DemoToolbar**.

Guard đã được mô tả: trim tên/email; tên bắt buộc và email hợp lệ; so trùng email chuẩn hóa không nhân bản ghi; tra cứu mã trống/sai; registered→cancelled chỉ sau xác nhận; registered→checked một lần; cancelled không check-in; checked không hủy; undo checked→registered có lý do; offline/quyền chặn cập nhật và giữ dữ liệu.

S01 không có trạng thái catalogue rỗng vì không dựng catalogue. S04/offline chỉ tìm fixture cục bộ, không gọi máy chủ; S05–S07 giữ dữ liệu minh họa đang xem khi quyền thay đổi. S07 permission-denied chặn xuất; offline preview/xuất fixture không khẳng định dữ liệu mới. Chưa thiết kế xác thực/phân quyền thật.

| Đường dẫn kế hoạch | Vai trò trong spine |
| --- | --- |
| `mockups/index.html` | Prototype tương tác S01–S07; IA và Components có liên kết. |
| `mockups/key-event.html` | Bố cục tĩnh S01; Layout và IA có liên kết. |
| `mockups/key-attendees.html` | Bố cục tĩnh S05; Layout và IA có liên kết. |
| `mockups/key-check-in.html` | Bố cục tĩnh S06; Layout và IA có liên kết. |
| `mockups/components.html` | S08 thư viện component; Components và IA có liên kết. |

## Đối chiếu hình thức và nguồn

- DESIGN có đúng 8 heading chuẩn theo thứ tự: Brand & Style, Colors, Typography, Layout & Spacing, Elevation & Depth, Shapes, Components, Do's and Don'ts.
- EXPERIENCE đủ Foundation, Information Architecture, Voice and Tone, Component Patterns, State Patterns, Interaction Primitives, Accessibility Floor, Key Flows; có Responsive & Platform và Inspiration & Anti-patterns vì V1 có breakpoint và tham khảo thư viện.
- 7 đường dẫn `sources` của mỗi spine tồn tại; các reference nguồn chỉ tới bộ tổng hợp BMAD đã chỉ định. UJ-01–04 được ghi rõ là mã kịch bản mới, không giả nhận mã yêu cầu trong nguồn.
- Cả hai YAML giữ `status: draft`, `approval: pending`. DESIGN 170 dòng, EXPERIENCE 180 dòng tại lần kiểm tra này; không sao chép thẩm mỹ của example BMAD. Heading/flow/component không đổi khi cập nhật hướng người dùng đã chọn.

## Tương phản token trước render

Tính theo relative luminance sRGB; đây là kiểm tra cặp hex, chưa bao phủ opacity, overlay, focus thực tế hoặc toàn bộ accessibility.

| Cặp | Tỷ lệ |
| --- | --- |
| ink / surface | 14,53:1 |
| muted / surface; muted / background | 6,08:1; 5,72:1 |
| on-primary / primary; on-primary / primary-hover | 5,59:1; 8,38:1 |
| on-accent / accent; on-accent / accent-strong | 13,02:1; 5,18:1 |
| success / success-soft | 6,36:1 |
| warning / warning-soft | 5,86:1 |
| danger / danger-soft | 5,70:1 |
| control-border / surface; control-border / background | 3,49:1; 3,28:1 |
| focus / background | 7,88:1 |

Các cặp kiểm tra đạt mục tiêu đã nêu cho chữ thường hoặc dấu hiệu điều khiển tương ứng. Border trang trí không được dùng thay control-border; không dùng chữ trắng trên accent-strong. Chưa tuyên bố đạt WCAG toàn bộ hoặc người dùng đã duyệt mọi chi tiết thiết kế.
