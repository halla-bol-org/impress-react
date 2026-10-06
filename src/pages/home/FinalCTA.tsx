import { ArrowRight, Heart, Smartphone } from "lucide-react";
import { Button } from "../../components/Button";
import { Reveal } from "../../components/Reveal";
import { links } from "../../config";

export function FinalCTA() {
  return (
    <section id="download" aria-labelledby="cta-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal className="relative isolate overflow-hidden rounded-[2rem] bg-brand-deep px-6 py-16 text-center shadow-[0_40px_80px_-40px_rgb(109_42_140/0.8)] sm:rounded-[2.5rem] sm:px-12 sm:py-24">
          <div aria-hidden="true" className="absolute -top-28 -left-20 -z-10 size-80 rounded-full bg-white/15 blur-3xl" />
          <div aria-hidden="true" className="absolute -right-16 -bottom-36 -z-10 size-96 rounded-full bg-coral/40 blur-3xl" />

          <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30 backdrop-blur">
            <Heart className="size-7 fill-white text-white" aria-hidden="true" />
          </span>
          <h2 id="cta-title" className="mx-auto mt-6 max-w-2xl text-[2rem] leading-tight font-bold tracking-tight text-balance text-white sm:text-5xl">
            Ready to become more impressive?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">Start improving yourself one small step at a time.</p>

          <div className="mt-10 flex justify-center">
            <Button href={links.getApp} variant="light" size="lg">
              Get Started with Impress
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href={links.appStore} variant="outline-light" size="sm" aria-label="Download Impress on the App Store">
              <Smartphone className="size-4" aria-hidden="true" />
              App Store
            </Button>
            <Button href={links.playStore} variant="outline-light" size="sm" aria-label="Get Impress on Google Play">
              <Smartphone className="size-4" aria-hidden="true" />
              Google Play
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
