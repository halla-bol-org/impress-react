import { ChevronDown, FileText } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router";
import { company, isPlaceholder } from "../config";
import { usePageMeta } from "../hooks/usePageMeta";
import { GradientBackground } from "./GradientBackground";

export type LegalSection = { id: string; title: string; content: ReactNode };

type LegalLayoutProps = {
  title: string;
  metaDescription: string;
  intro: ReactNode;
  sections: LegalSection[];
  /** Defaults to the shared placeholder in config.ts. */
  lastUpdated?: string;
};

/**
 * Highlights a detail that still has to be confirmed. Filled-in values from
 * config.ts (anything not in [brackets]) render as plain text.
 */
export function Placeholder({ children }: { children: ReactNode }) {
  if (typeof children === "string" && !isPlaceholder(children)) return <>{children}</>;
  return (
    <mark className="rounded-md bg-blush/60 px-1.5 py-0.5 font-medium text-plum [box-decoration-break:clone]">{children}</mark>
  );
}

/** An email address: a mailto link once set, a highlighted placeholder until then. */
export function EmailLink({ address }: { address: string }) {
  if (isPlaceholder(address)) return <Placeholder>{address}</Placeholder>;
  return <a href={`mailto:${address}`}>{address}</a>;
}

function TableOfContents({ sections, className = "" }: { sections: LegalSection[]; className?: string }) {
  const page = useLocation().pathname.split("/")[1];
  return (
    <ol className={`grid gap-0.5 text-sm sm:grid-cols-2 lg:grid-cols-1 ${className}`}>
      {sections.map((section, index) => (
        <li key={section.id}>
          <Link
            to={`/${page}/${section.id}`}
            className="flex min-h-9 items-center gap-2 rounded-lg px-2 text-muted transition-colors hover:bg-lavender hover:text-navy"
          >
            <span className="w-5 shrink-0 text-xs font-semibold text-purple tabular-nums">{index + 1}.</span>
            {section.title}
          </Link>
        </li>
      ))}
    </ol>
  );
}

/** Shared shell for the policy pages: header, table of contents and numbered sections. */
export function LegalLayout({
  title,
  metaDescription,
  intro,
  sections,
  lastUpdated = company.lastUpdated,
}: LegalLayoutProps) {
  usePageMeta(`${title} — Impress`, metaDescription);

  return (
    <>
      <section className="relative isolate overflow-hidden pt-10 pb-12 sm:pt-16 sm:pb-16">
        <GradientBackground variant="soft" />
        <div className="container-page">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-sm font-semibold text-magenta shadow-card ring-1 ring-line">
            <FileText className="size-4" aria-hidden="true" />
            Legal
          </p>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-navy sm:text-5xl">{title}</h1>
          <p className="mt-4 text-muted">
            Last updated: <Placeholder>{lastUpdated}</Placeholder>
          </p>
        </div>
      </section>

      <div className="container-page grid gap-10 pb-20 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:pb-28">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          {/* Collapsed on small screens so the policy text starts right away. */}
          <details className="group rounded-3xl bg-white shadow-card ring-1 ring-line/70 lg:hidden">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between rounded-3xl px-5 text-sm font-bold text-navy [&::-webkit-details-marker]:hidden">
              On this page
              <ChevronDown className="size-4 text-purple transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <nav aria-label="On this page" className="px-3 pb-4">
              <TableOfContents sections={sections} />
            </nav>
          </details>
          <nav
            aria-label="On this page"
            className="hidden max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain rounded-3xl bg-white p-5 shadow-card ring-1 ring-line/70 lg:block"
          >
            <h2 className="text-sm font-bold text-navy">On this page</h2>
            <TableOfContents sections={sections} className="mt-3" />
          </nav>
        </aside>

        <article className="max-w-3xl min-w-0">

          <div className="text-lg leading-relaxed text-ink">{intro}</div>

          <div className="mt-10 space-y-10">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`}>
                <h2 id={`${section.id}-title`} className="flex gap-3 text-2xl font-bold text-navy">
                  <span className="text-gradient tabular-nums">{index + 1}.</span>
                  {section.title}
                </h2>
                <div className="legal-prose mt-4">{section.content}</div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
