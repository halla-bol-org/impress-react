# Impress — marketing website

Static, mobile-first landing site for the Impress app, built with React, React Router, Tailwind CSS v4 and Lucide icons, bundled and served by [Bun](https://bun.com).

## Scripts

```bash
bun install        # install dependencies
bun dev            # dev server with hot reload at http://localhost:3000
bun run build      # static production build → dist/
bun start          # serve the app in production mode with Bun
bun run typecheck  # TypeScript check
```

Every route is handled client-side: `/`, the home-page sections (`/explore`, `/features`, `/why-impress`, `/how-it-works`, `/faq`, `/download`), and the legal pages (`/terms-and-conditions`, `/privacy-policy`, `/refund-policy`, each with optional section paths such as `/terms-and-conditions/eligibility`). No links use `#`. The Bun server already falls back to the app for any path. If you deploy `dist/` to a static host, configure it to serve `index.html` for unknown paths so deep links and refreshes work.

## Before launch

- **Links and business details** live in [`src/config.ts`](src/config.ts): store URLs (currently `/download`), social links (hidden via `showSocialLinks`), company name, address, emails and officer names. Every page reads from this file.
- **Grievance Officer**: the Terms still show `[Grievance Officer Name]` — set `grievanceOfficer` in `src/config.ts`.
- **FAQ → "Is Impress free?"** has a pricing placeholder in `src/pages/home/sections/FAQ.tsx`.
- **Testimonials** in `src/pages/home/sections/Testimonials.tsx` are labelled as samples. Swap in real, consented quotes.
- **Hero photos**: the gentleman photo was supplied by you (confirm the licence), the couple is a free Pexels photo and the 3D heart is from Microsoft Fluent Emoji. Sources and licences are in [`src/assets/CREDITS.md`](src/assets/CREDITS.md).
- **Legal pages** should be reviewed by a legal professional before launch.
- **SEO**: add `og:url` and `og:image` in `src/index.html` once the production domain is known.

## Structure

```
build.ts                  production build (Bun + Tailwind) → dist/
src/
  index.html              HTML entry: meta tags, fonts, favicon
  frontend.tsx            mounts <App />
  App.tsx                 routes
  index.ts                Bun server for `bun dev` / `bun start`
  index.css               design tokens (colours sampled from the app) and shared styles
  config.ts               links, nav items, company details, home-section routes
  assets/                 logo, app screenshots, hero photos, heart, favicon
    index.ts              image registry (paths, sizes, alt text)
    CREDITS.md            image sources and licences
  hooks/                  usePageMeta (title/description), useReveal (scroll fade-in)
  components/
    layout/               Layout, Navbar, MobileMenu, Footer, Logo, SocialIcons
    ui/                   Button, SectionHeading, Reveal, GradientBackground,
                          PhoneMockup, Heart3D, FAQAccordion
    cards/                FeatureCard, BenefitCard, StepCard, TestimonialCard
  pages/
    home/
      Home.tsx            composes the sections below
      sections/           Hero, CoupleConnection, AppPreview, Features, WhyImpress,
                          HowItWorks, AppExperience, Testimonials, FAQ, FinalCTA
    legal/                LegalLayout, TermsAndConditions, PrivacyPolicy, RefundPolicy
    NotFound.tsx
```

Imports between folders use the `@/` alias for `src/` (e.g. `@/components/ui/Button`).

Animations are CSS-only and switch off under `prefers-reduced-motion`.
