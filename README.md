<<<<<<< HEAD

# hoc-FE

=======

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

**rule cơ bản của ESLint**

- Syntax & Code Quality :

1. no-unused-vars: lỗi khai báo biến nhưng ko sử dụng
2. no-console: cảnh báo khi dùng console.log(dùng ở production)
3. no-undef : lỗi sử dụng biến chưa khai báo
4. no-const-assign : lỗi khi thay đổi giá trị biến 'const'

- Formatting & Style :

1. quotes : thống nhất sử dụng ('') hoặc ("")
2. semi : yêu cầu hoặc cấm sử dụng dấu chấm phẩy ở cuối dòng
3. comma-dangle : quy định dấu phẩy cuối cùng trong object, array
4. indent : số lượng khoảng trắng thụt lề (2 hoặc 4 spaces)

- Recommend rule :

1. no-var : khuyến khích sử dụng let hoặc const thay vì var
2. prefer-const : ưu tiên sử dụng const nếu biến ko bị thay đổi
3. curly : yêu cầu dấu ngoặc nhọn ({}) cho các câu lệnh rẽ nhánh

**rule cơ bản của Prettier**

1. indent : mặc định sử dụng 2 khoảng trắng để thụt lề , ko dùng tab
2. quotes : ưu tiên dùng ('') thay vì ("") cho strings
3. semi : tự động thêm dấu chấm phẩy ở cuối câu
4. comma-dangle : sử dụng dấu phẩy ở cuối object, array : (trailingComma: all)
5. bracket-spacing thêm khoảng trắng trong dấu ngoặc nhọn : (bracketSpacing: true)
6. arrowParens : tránh sử dụng () khi dùng arrow func chỉ có 1 tham số
7. line width : xuống dòng khi code vượt quá độ dài quy định

**các bước tạo pre-commit**

1. cài dependencies : npm install -D husky lint-staged eslint prettier
2. tạo thư mục .husky
3. tạo pre-commit hook : file .husky/pre-commit :
   #!/bin/bash
   . "$(dirname "$0")/\_/husky.sh"

npx lint-staged

4. cài lint-staged để format/lint file trước commit : npm install lint-staged --save-dev, sau đó thêm vào package.json :

   "lint-staged": {
   "\*_/_.{js,jsx,ts,tsx}": [
   "eslint --max-warnings=0 --",
   "prettier --write"
   ]

   }

5. tạo folder \_ trong .husky, tạo file husky.sh background#!/bin/bash

if [ -z "$husky_skip_init" ]; then
debug () {
[ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
}

readonly hook_name="$(basename "$0")"
debug "starting $hook_name..."

if [ "$HUSKY" = "0" ]; then
debug "HUSKY env variable is set to 0, skipping hook"
exit 0
fi

if [ -f "$HOME/.huskyrc" ]; then
debug "sourcing ~/.huskyrc"
. "$HOME/.huskyrc"
fi

export husky_skip_init=1
bash "$0" "$@"
exitCode="$?"

if [ $exitCode -ne 0 ]; then
echo "husky - $hook_name hook exited with code $exitCode"
fi

exit $exitCode
fi

6. test eslint
