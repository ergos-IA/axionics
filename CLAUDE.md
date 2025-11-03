# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**AXIONICS** is a Next.js 15 corporate website for a business consulting firm specializing in process discovery, automation, and applied AI using Microsoft Azure and Power Platform. The site features an immersive 3D particle system background and alternating dark/light sections with glass-morphism effects.

**Brand Promise**: "Procesos superiores. Resultados medibles."

## Commands

### Development
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
```

## Architecture

### Core Technologies
- **Framework**: Next.js 15 (App Router) with React 19
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **3D Graphics**: Three.js with React Three Fiber (@react-three/fiber) and Drei
- **UI Components**: shadcn/ui (Radix UI primitives) - New York style
- **Type Safety**: TypeScript with strict mode
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Custom "Sentient" font + Geist Mono

### Project Structure

**App Directory**
- `app/layout.tsx` - Root layout with Header, SEO metadata (OpenGraph), Spanish locale
- `app/page.tsx` - Home page with all sections
- `app/globals.css` - Global styles with Axionics color scheme

**Components**
- `components/hero.tsx` - Full-screen hero with rotating slogans (4 variants), 3D background
- `components/header.tsx` - Sticky nav with logo, ES/EN selector, CTA
- `components/footer.tsx` - Simple footer
- `components/sticky-cta.tsx` - Fixed bottom bar with CTAs
- `components/logo-marquee.tsx` - Infinite scrolling logos
- `components/gl/` - 3D particle system
- `components/sections/` - Individual page sections:
  - `valor360.tsx` - Light section: 4-column value proposition
  - `services.tsx` - Dark glass: 3 services (Discovery, Automation, AI)
  - `insights.tsx` - Light: 3 thought leadership articles
  - `cases.tsx` - Light: 3 case studies with KPIs
  - `impact.tsx` - Dark: 3 ESG/Impact cards
  - `assessment.tsx` - Dark glass: Lead magnet form
  - `contact.tsx` - Dark glass: Contact form

### Design System

**Color Palette** (in `app/globals.css`)
```css
--background: #000000       /* Pure black */
--foreground: #f8fafc       /* Very light */
--muted: #c2c9d2           /* Muted text */
--line: #24262b            /* Borders */
--glass: #0f1216cc         /* Translucent */
--accent: #a8dcff          /* Cool blue */
--accent-2: #9ff5e1        /* Mint green */
```

**Key CSS Classes**
- `.glass-card` - Translucent card with blur effect
- `.light-section` - White background sections
- `.gradient-text` - Gradient text effect (accent to accent-2)
- `.animate-marquee` - Infinite horizontal scroll

### Content Architecture

**Hero Section**
- Rotating slogans (4 variants, 2.8s interval):
  1. "Procesos superiores. Resultados medibles."
  2. "Automatiza lo repetitivo. Escala lo valioso."
  3. "Discovery → Automatización → IA con ROI."
  4. "Menos coste. Más velocidad. Clientes felices."
- CTAs: "Empezar" (→#contacto), "Ver cómo" (→#servicios)
- Badges: "Azure & Power Platform", "ROI en 90 días", "Procesos E2E"

**Section Flow**
1. **Hero** - Full-screen with 3D particles
2. **LogoMarquee** - Client logos (placeholder)
3. **Valor 360°** (light) - 4 pillars: Growth, Operations, Talent, Impact
4. **Services** (dark glass) - Discovery, Automation, Applied AI
5. **Insights** (light) - 3 articles (placeholders)
6. **Cases** (light) - 3 case studies with KPIs
7. **Impact & ESG** (dark) - Real-time data, efficiency, reporting
8. **Assessment** (dark glass) - Maturity self-assessment form (lead magnet)
9. **Contact** (dark glass) - Contact form
10. **Footer** (dark) - Copyright & links
11. **StickyCTA** (fixed bottom) - "Haz el assessment" / "Agenda 30 min"

### Key Features

1. **Rotating Slogans**: Hero h1 changes every 2.8s with fade transition, highlighting key words with gradient
2. **3D Particle System**: Fixed WebGL canvas (`#webgl`) with interactive particles that respond to hover
3. **Glass Morphism**: Cards use `backdrop-filter: blur()` with translucent backgrounds
4. **Light/Dark Alternation**: White sections alternate with dark sections for visual rhythm
5. **Language Selector**: ES/EN toggle (UI only, translation logic TBD)
6. **Sticky CTA**: Always-visible bottom bar drives conversion
7. **Infinite Marquee**: Logo carousel with seamless loop (CSS animation)

### Development Guidelines

**TypeScript**
- Path alias `@/*` maps to root directory
- Strict mode enabled
- All new components should be typed

**Styling**
- Use Tailwind CSS classes
- CSS variables for theming (access via `var(--variable-name)`)
- Glass effects use `.glass-card` utility class
- Responsive design: mobile-first approach

**Accessibility**
- `prefers-reduced-motion` support in CSS
- Semantic HTML (header, section, footer)
- ARIA labels for interactive elements

### Configuration

**Next.js** (`next.config.ts`)
- ESLint/TypeScript errors ignored during builds (rapid iteration mode)
- Images unoptimized
- React Strict Mode enabled

**shadcn/ui** (`components.json`)
- Style: "new-york"
- Base color: neutral
- CSS variables enabled
- Icon library: lucide

## Next Steps

From the project brief, remaining tasks:

### Assets Needed
- [ ] Hero background video: `public/assets/axionics-hero.mp4` (≤8MB, 1920×1080, H.264)
- [ ] Hero background image: `public/assets/axionics-hero.jpg` (<500KB, 2560×1440)
- [ ] Client logos (5): `public/assets/logo-{1-5}.svg` or `.png`

### Content
- [ ] Write 3 Insights articles (title + 50 words each)
- [ ] Create 2 detailed case studies with KPIs (before/after metrics)

### Technical
- [ ] Connect forms to Power Automate → Dataverse/CRM
- [ ] Implement full i18n (ES/EN) using next-intl or similar
- [ ] Set up GA4 tracking with events:
  - `view_hero`
  - `click_cta_start` / `click_cta_how`
  - `submit_assessment`
  - `submit_contact`
  - `scroll_depth`
- [ ] Deploy to Azure Static Web Apps + CDN
- [ ] Add JSON-LD structured data for SEO

### Future Enhancements
- [ ] Add video background to hero (with image fallback)
- [ ] Create separate pages: `/insights`, `/casos`, `/esg`
- [ ] Implement Calendly/Bookings integration for "Agenda 30 min"
- [ ] Build Power BI dashboard for conversion metrics
- [ ] A/B testing: slogan variants, CTA colors, hero light vs dark

## Brand Voice & Positioning

**Who We Are**: Technology consultancy focused on business outcomes. We discover operational friction, automate repetitive work, and deploy useful AI (not cosmetic).

**Differentiation**:
- Valor 360° narrative (growth, operations, talent, impact)
- Microsoft/Azure/Power Platform expertise
- Concrete deliverables: 90-day roadmap, productive flows, AI MVP

**Target Audience**: Business executives and operations leaders looking for measurable ROI from process improvement and AI initiatives

**Key Messages**:
- Business-first approach (not technology-first)
- 90-day ROI guarantee
- End-to-end process transformation
- Microsoft ecosystem expertise
