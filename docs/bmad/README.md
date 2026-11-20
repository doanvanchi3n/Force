# BMAD trong Chuyende3

Đã cài **BMAD Core + BMM 6.12.4** cho Codex, gồm 29 skill tại `.agents/skills/`.
Ngôn ngữ giao tiếp và tài liệu là tiếng Việt. Dự án đang ở phần nghiên cứu/discovery;
các bài hiện có là đầu vào cho quy trình, chưa được coi là PRD hoặc kiến trúc đã duyệt.

Dự án có thêm UI UX Pro Max làm nguồn tham khảo thiết kế. Xem
[quy tắc phối hợp](../skills/README.md) về vai trò, ưu tiên tài liệu và cách cài cả hai bộ.

## Bắt đầu

Mở phiên Codex mới tại gốc dự án và gọi `bmad-help`, kèm yêu cầu:

> Đọc docs/index.md và docs/project-context.md. Đánh giá trạng thái discovery của
> Chuyende3 và đề xuất bước BMAD tiếp theo dựa trên bằng chứng hiện có.

Nếu danh sách skill chưa được làm mới, mở lại phiên IDE. Với terminal đã mở trước
khi cài uv, chạy `source "$HOME/.local/bin/env"` để nhận PATH mới.

## Tài liệu đi theo quy trình nào?

| Công việc | Đầu vào / nơi lưu | Skill khi cần |
| --- | --- | --- |
| Hiểu client, vấn đề và bằng chứng | `docs/discovery/`; giữ bài làm gốc theo tuần | `bmad-help`, `bmad-deep-recon` |
| Thống nhất tầm nhìn và yêu cầu | `_bmad-output/planning-artifacts/`, dẫn nguồn discovery | `bmad-product-brief`, `bmad-prd` |
| Thiết kế trải nghiệm và kiến trúc | `_bmad-output/planning-artifacts/` | `bmad-ux`, `bmad-architecture` |
| Đặc tả phần việc đủ rõ | `_bmad-output/specs/spec-<slug>/` do workflow tạo | `bmad-spec` |
| Chia việc và theo dõi triển khai | Planning artifacts cho epic; implementation artifacts cho sprint | `bmad-create-epics-and-stories`, `bmad-sprint-planning` |
| Xây dựng, kiểm tra và học từ kết quả | `_bmad-output/implementation-artifacts/` và mã nguồn khi có | `bmad-build`, `bmad-code-review`, `bmad-retrospective` |

Chọn workflow theo điều còn thiếu; không cần chạy mọi bước chỉ để lấp đầy thư mục.
Với nhóm này, trước khi chốt yêu cầu cần đối chiếu các bài tuần 2, nguồn và các
giả định chưa kiểm chứng. Các quyết định của client/nhóm phải được ghi nhận thực tế.

`docs/planning/` tiếp tục lưu board phân công theo tuần. `docs/templates/` giữ bộ
8 template học phần; chúng được liên kết làm đầu vào khi dùng BMAD.

## Cấu hình và tái cài đặt

- `_bmad/config.toml`: cấu hình do bộ cài quản lý.
- `_bmad/custom/config.toml`: cấu hình chung của nhóm, được giữ qua các lần cài lại.
- `_bmad/config.user.toml`, `_bmad/custom/config.user.toml`: cấu hình cá nhân, Git bỏ qua.
- `.agents/skills/`: skill cục bộ do bộ cài tạo, Git bỏ qua; mỗi thành viên chạy lại bộ cài.
- `_bmad/render/`: bản workflow được render khi chạy, Git bỏ qua.

Đã ghim phiên bản trong [script cài đặt](../../scripts/install-bmad.sh). Chạy tại gốc repo:

```bash
bash scripts/install-bmad.sh
python3 scripts/check-doc-links.py
uv run --no-cache _bmad/scripts/resolve_config.py --project-root .
```

Script ưu tiên repo nguồn cục bộ khi đã có dependency và đúng phiên bản 6.12.4;
nếu không, dùng `npx --yes bmad-method@6.12.4`. Cần Node.js 20.12+ và uv.
Cài lại tái tạo các skill và cấu hình quản lý; đặt tùy chỉnh của nhóm trong
`_bmad/custom/config.toml`.

## Repo nguồn đã tải

- Upstream: [bmad-code-org/BMAD-METHOD](https://github.com/bmad-code-org/BMAD-METHOD).
- Bản cục bộ: `.tools/BMAD-METHOD/`.
- Nhánh cài: `V6.12`, phiên bản `6.12.4`.
- Commit nguồn: `bab9082c3e884e0d72c759bcd1a6d90bcc01be84`.
- Clone giới hạn lịch sử (`--depth 1`); giữ nguyên cấu trúc và mã nguồn upstream.
- `.tools/` được Git bỏ qua; giấy phép của mã BMAD được giữ tại `_bmad/LICENSE`.

Tại thời điểm cài, README upstream gọi nhánh `main` là V7 preview alpha và khuyến
nghị V6.12 khi cần ổn định. Lần thiết lập này dùng bộ cài từ nhánh V6.12.

Nguồn đối chiếu: [cài BMAD tại commit đã dùng](https://github.com/bmad-code-org/BMAD-METHOD/blob/bab9082c3e884e0d72c759bcd1a6d90bcc01be84/docs/start/install-bmad.md),
[chọn quy trình lập kế hoạch](https://github.com/bmad-code-org/BMAD-METHOD/blob/bab9082c3e884e0d72c759bcd1a6d90bcc01be84/docs/plan/choose-a-planning-path.md),
[cài uv](https://docs.astral.sh/uv/getting-started/installation/).
