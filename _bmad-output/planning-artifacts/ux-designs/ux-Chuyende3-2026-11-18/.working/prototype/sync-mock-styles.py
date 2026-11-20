"""Đồng bộ CSS vào ba hình mẫu tĩnh; chạy lại sau khi chỉnh styles.css.

Không sinh lại nội dung màn hình hoặc sửa spine. Công cụ làm việc, không cần
đưa vào thư mục mockups được promote.
"""

from pathlib import Path


root = Path(__file__).resolve().parent
styles = (root / "styles.css").read_text()
for path in sorted(root.glob("key-*.html")):
    html = path.read_text()
    begin = html.index("/* V1 đề xuất.")
    end = html.index("/* Vỏ trình duyệt")
    path.write_text(html[:begin] + styles + "\n" + html[end:])
    print(f"Đã đồng bộ {path.name}")
