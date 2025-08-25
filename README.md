# RiskPilot

A tiny, focused **KYC** app built with **React + TypeScript**. It helps a team decide if it’s safe to onboard a new customer by collecting basic details, running simple (mock) screening, computing a risk score, and tracking the case.

--

## Goal

Demonstrate React fundamentals (component library, MUI/CSS-in-JS, testing discipline) with a clean, minimal codebase.

---

## Use Case

1) Enter client details (person/company).  
2) Run screening (mock watchlist hits).  
3) App computes a **risk level** (Low/Medium/High) from a few factors (jurisdiction, hits, missing docs).  
4) Create a case, change status (Open → Pending Docs → Approved/Escalated), and keep an audit trail.

Why this matters: fast, consistent decisions with a clear record.

---

## Tech Stack with why

- **React + TypeScript** — predictable UI + types all the way down.  
- **Material-UI (MUI) + Emotion (CSS-in-JS)** — theming, design tokens, accessible components.  
- **Reusable UI package** (`/packages/ui`) — small component library (e.g., `RiskBadge`, `SectionCard`, `FormField`, `DataTable`).  
- **React Hook Form + Zod** — forms with proper validation and typed inputs.  
- **MSW (Mock Service Worker)** — realistic API behavior without a backend.  
- **Jest + React Testing Library** — unit/integration tests where it counts.  
- **Cypress** — one clean e2e “happy path” to prove the flow works.  
- **Vite** — fast dev/build, zero ceremony.  
- **ESLint (Airbnb) + Prettier + Husky** — enforce standards before code lands.  
- **GitHub Actions CI** — typecheck, lint, tests on every push/PR.

---

### Prereqs

- **Node 20+**
- **npm**