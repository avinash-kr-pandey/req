# NextCar

A responsive automotive customization experience built from the supplied Figma prototype.

## Setup

Node.js 20 or newer is recommended.

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Tech stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes
- next/font

## Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  BookingModal.tsx
  Experience.tsx
  Heading.tsx
  HomeStage.tsx
  LapTrack.tsx
  Logo.tsx
  Pricing.tsx
  SideNav.tsx
  ThemeProvider.tsx
  ThemeToggle.tsx
  VehicleStage.tsx
lib/
  utils.ts
public/
```

## Assumptions

- The Figma prototype represents a single-page interactive experience rather than separate URL routes.
- Navigation changes the active dashboard stage while retaining the persistent lap track.
- Booking actions use a client-side confirmation flow because no backend endpoint was supplied.
- Dark mode follows the prototype and light mode uses corresponding semantic surfaces and contrast.
