import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { usePageMeta } from "@/hooks/usePageMeta";

export function NotFound() {
  usePageMeta("Page not found — Impress", "The page you're looking for doesn't exist.");

  return (
    <section className="relative isolate overflow-hidden py-28 text-center sm:py-36">
      <GradientBackground variant="soft" />
      <div className="container-page">
        <p className="text-gradient text-7xl font-extrabold">404</p>
        <h1 className="mt-4 text-3xl font-bold text-navy sm:text-4xl">This page doesn't exist.</h1>
        <p className="mt-3 text-muted">The link may be broken, or the page may have moved.</p>
        <Button href="/" size="lg" className="mt-8">
          Back to home
          <ArrowRight className="size-4" aria-hidden="true" />
        </Button>
      </div>
    </section>
  );
}
