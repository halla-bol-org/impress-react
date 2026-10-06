import { ArrowRight, Sparkles } from "lucide-react";
import { screens } from "../../assets";
import { Button } from "../../components/Button";
import { GradientBackground } from "../../components/GradientBackground";
import { PhoneMockup } from "../../components/PhoneMockup";
import { links } from "../../config";
import { CoupleConnection } from "./CoupleConnection";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate -mt-16 overflow-hidden pt-16 lg:-mt-[4.5rem] lg:pt-[4.5rem]">
      <GradientBackground variant="splash" />

      <div className="container-page grid items-center gap-14 pt-10 pb-20 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-20 lg:pb-28">
        <div className="animate-fade-up text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm font-semibold text-plum shadow-card ring-1 ring-white backdrop-blur">
            Your journey to a better you ✨
          </p>

          <h1
            id="hero-title"
            className="mx-auto mt-6 max-w-xl text-[2.5rem] leading-[1.05] font-extrabold tracking-tight text-balance text-navy min-[390px]:text-[2.75rem] sm:max-w-2xl sm:text-6xl lg:mx-0 lg:text-[4.25rem]"
          >
            Become the <span className="text-gradient">Best Version</span> of Yourself.
          </h1>

          <p className="mt-6 text-lg font-semibold text-pretty text-navy sm:text-xl">
            Build confidence. Communicate better. Look better. Feel better.
          </p>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg lg:mx-0">
            Impress helps you improve the way you speak, think, present yourself and connect with others — one small
            improvement at a time.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 min-[400px]:flex-row min-[400px]:justify-center lg:justify-start">
            <Button href={links.getStarted} size="lg">
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Button>
            <Button href="/explore" variant="secondary" size="lg">
              Explore Impress
            </Button>
          </div>

          <p className="mt-7 inline-flex items-start gap-2 text-left text-sm text-muted">
            <Sparkles className="mt-0.5 size-4 shrink-0 text-pink" aria-hidden="true" />
            Designed to help you become more confident, expressive and impressive.
          </p>
        </div>

        <div className="relative mx-auto flex w-full max-w-md justify-center lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute top-[12%] left-1/2 h-[70%] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink/35 via-purple/25 to-lilac/40 blur-3xl"
          />
          {/* On phones both mockups shrink a little so the back phone still peeks out beside the front one. */}
          <PhoneMockup
            image={screens.gentleman}
            width="w-[176px] min-[360px]:w-[190px] min-[400px]:w-[205px] sm:w-[260px]"
            className="absolute top-10 right-2 rotate-[7deg] sm:top-16 sm:right-0 lg:right-[2%] xl:right-[6%]"
          />
          <div className="relative -translate-x-11 sm:-translate-x-12 lg:-translate-x-16">
            <PhoneMockup
              image={screens.splash}
              width="w-[196px] min-[360px]:w-[210px] min-[400px]:w-[230px] sm:w-[290px] lg:w-[310px]"
              priority
              float
            />
            <CoupleConnection />
          </div>
        </div>
      </div>
    </section>
  );
}
