---
title: Force — Căn cứ công nghệ cho phương án đề xuất
status: draft
updated: 2026-11-27
---

# Kiểm tra căn cứ công nghệ

Đã mở tài liệu chính thức ngày 27/11/2026, không ràng buộc từ trí nhớ một phiên bản “mới nhất”. Các liên kết và nội dung dùng để đề xuất có trong [ARCHITECTURE — nguồn kỹ thuật](../ARCHITECTURE.md#nguồn-kỹ-thuật-đã-kiểm-tra-ngày-27112026).

- Next.js: starter/App Router/TypeScript, authentication và Node server deployment có tài liệu hiện hành. Không kế thừa mọi tùy chọn default của starter thành quyết định thiết kế.
- Node: chọn nhánh còn LTS và thỏa yêu cầu framework tại bootstrap; Node của tooling không phải chứng cứ runtime ứng dụng.
- PostgreSQL: constraints/isolation phù hợp các invariant unique/transaction; không bắt buộc major mới nhất hoặc dịch vụ Supabase.
- Phiên bản chính xác, auth library, driver/ORM và hosting chưa được chốt. Chưa có manifest/lockfile ứng dụng; không gọi candidate là đã build hoặc đã kiểm tra tương thích dependency.

Gate này xác nhận căn cứ của đề xuất, không thay kiểm tra dependency, cấu hình quyền và build thực khi bootstrap. OQ-02 và các OQ vận hành vẫn giữ nguyên.
