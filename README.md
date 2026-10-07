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

## Deploying to GitHub Pages

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`. One-time setup: in the repo, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.

The site is then served at `https://<owner>.github.io/<repo>/`. The workflow builds with `BASE_PATH=/<repo>/` so assets and routes work from that sub-folder, and `build.ts` writes a `404.html` copy of the app so deep links (`/download`, `/privacy-policy`) survive a refresh. With a custom domain, change `BASE_PATH` in the workflow to `/`.

To check a sub-folder build locally: `BASE_PATH=/impress-react/ bun run build`.

## Before launch

- **Links and business details** are all in [`src/config.ts`](src/config.ts): store URLs, social links, company legal name, address, support email and jurisdiction. Every page reads from this file.
- **Legal pages** contain highlighted placeholders such as `[Company Legal Name]` and `[Confirm refund processing timeline]`. Replace them with confirmed details and have the documents reviewed by a legal professional.
- **Testimonials** in `src/pages/home/Testimonials.tsx` are labelled as samples. Swap in real, consented quotes.
- **FAQ → "Is Impress free?"** has a pricing placeholder.
- **Hero photos**: the gentleman in the back phone is a photo you supplied (confirm you hold a licence for it), the couple beside the front phone is a free Pexels stock photo, and the 3D heart comes from Microsoft Fluent Emoji. Sources and licences are in [`src/assets/CREDITS.md`](src/assets/CREDITS.md). Swap in photos you hold model releases for before launch.
- **Images**: the screenshots and logo in `src/assets/` are low-resolution exports (around 360px wide). Replace them with 2x or 3x exports under the same filenames for sharper rendering, and update the dimensions in `src/assets/index.ts`.
- **SEO**: add `og:url` and `og:image` in `src/index.html` once the production domain is known.

## Structure

```
src/
  config.ts              links, social, company placeholders, nav items
  index.css              design tokens (colors sampled from the app), utilities
  assets/                logo, app screenshots, favicon (+ index.ts registry)
  components/            Navbar, MobileMenu, Footer, Button, PhoneMockup,
                         SectionHeading, FeatureCard, BenefitCard, StepCard,
                         TestimonialCard, FAQAccordion, GradientBackground,
                         LegalLayout, Reveal, Layout, Logo, SocialIcons
  hooks/                 usePageMeta (title/description), useReveal (scroll fade-in)
  pages/
    Home.tsx             composes the sections in pages/home/
    TermsAndConditions.tsx, PrivacyPolicy.tsx, RefundPolicy.tsx, NotFound.tsx
```

Animations are CSS-only and switch off under `prefers-reduced-motion`.
