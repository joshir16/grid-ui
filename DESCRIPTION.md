# grid-UI

Every component in grid-ui sits on top of the exact same five-layer foundation:
> Design Tokens `(@theme)` → Variant Engine (`cva`) → Class Merger (`cn`) → TypeScript Contract (`ComponentProps`) → `Vite` Library Build

## 1. `cn()` — `clsx` AND `tailwind-merge`

## 2. `cva` (class-variance-authority) — The Variant Engine

## 3. TypeScript Component Formula (`ComponentProps` + `Omit` + React 19 `ref`)
