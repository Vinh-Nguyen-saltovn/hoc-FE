# hoc-FE :

## Phase 0 : Onboarding & Tooling

**Mục tiêu**

- Setup môi trường: Node.js LTS, pnpm/npm, VSCode, Git.
- ESLint + Prettier + EditorConfig + Pre-commit.
- Nắm Git flow cơ bản: branch, commit, PR.

**Bài tập**

1. Tạo repo học tập, README có checklist.
2. Tạo file tĩnh hello world (HTML/CSS), deploy lên (Vercel/Netlify).

**Tiêu chí đánh giá**

- Repo chạy được, lint/format OK, hook check lint, format trước khi commit git.
- Có README + screenshot.

## Phase 1 : JavaScript Foundation

**Chi tiết**

- let/const, arrow, destructuring, spread/rest.
- Array methods: map/filter/reduce/some/every/find.
- async/await - promise, Fetch API, error handling.
- DOM, event delegation, form handling.

**Mục tiêu**

1. Vững ES6+, thao tác array, async, fetch.
2. Hiểu event loop, promise, async/await.

**Bài tập**

1. Todo app JS (localStorage, filter, search).
2. Mini challenge: debounce search, modal, tabs.

**Tiêu chí đánh giá**

- Code chia module, handle error, giao diện ổn.

**Subtask**

1. Sự khác biệt giữa localStorage, sessionStorage và cookie (ghi rõ, đưa ví dụ, code thực tế, report)

## Phase 2 : React Core

**Chi tiết**

- useState, useEffect, useMemo, useCallback, useRef.
- Controlled components, lifting state.
- Fetch + loading/error states.
- Login với google, github - áp dụng redux để lưu token + info

**Mục tiêu**

1. Thành thạo state/props, hooks cơ bản.
2. Biết chia component, nắm render flow.
3. Tích hợp các thư viện 3rd - redux

**Bài tập**

1. Rebuild Todo App bằng React.
2. Mini app: Movie search / Weather app có chức năng login với google, github.

**Tiêu chí đánh giá**

- Component structure rõ, code tái sử dụng được.

**Subtask**

1. Tìm hiểu state management khác: Zustand (code áp dụng, report)

## Phase 3 : Tailwind CSS

**Chi tiết**

- Utility-first mindset.
- Responsive, theme config.
- Component patterns: card, table, form, modal.

**Mục tiêu**

- Build UI nhanh, responsive, hỗ trợ dark mode.

**Bài tập**

1. Clone UI từ Figma (free kit).
2. Build dashboard layout responsive có dark mode.

**Tiêu chí đánh giá**

- UI ok, spacing chuẩn, responsive.

**Subtask**

1. Thêm các variables tailwind var() tuỳ ý, áp dụng
2. Thêm các custom class tuỳ ý, áp dụng

## Phase 4: Next.js Fundamentals

**Chi tiết**

- File-based routing, dynamic routes.
- Server vs Client components (cơ bản).
- Loading + error boundaries.

**Mục tiêu**

- App Router, routing, layouts, data fetching.
- API routes, metadata, SEO cơ bản.

**Bài tập**

1. Blog mini app (list/detail).
2. CRUD với mock API (json-server).

**Tiêu chí đánh giá**

- Next project chạy tốt, có data fetching.

**Subtask**

1. Phân biệt CSR, SSR (ghi rõ, ví dụ, code, report)

## Phase 5: Capstone Project

**Chi tiết**

- Authentication mock (token + localStorage) + social authentication.
- CRUD, search, filter, pagination.
- Responsive UI + dark mode.
- Loading/error handling.
- Form validation (react-hook-form + zod).
- Lưu biến cục bộ - global var với redux.

**Mục tiêu**

Đề xuất dự án

- E-commerce mini / Job board / Travel booking.

**Tiêu chí đánh giá**

- Deploy Vercel, README đầy đủ.
- Có demo link + screenshots.

**Subtask**

1. Testing: Jest + React Testing Library.
