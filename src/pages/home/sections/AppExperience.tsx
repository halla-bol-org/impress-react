import { CalendarCheck, LayoutGrid, MessageCircle, MessagesSquare, Sprout, TrendingUp, Zap, type LucideIcon } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";
import { screens } from "@/assets";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  { icon: LayoutGrid, title: "A feed built around you", text: "The topics you choose shape the videos you see every day." },
  { icon: Zap, title: "Short and practical", text: "Quick, useful ideas you can try the very same day." },
  { icon: MessagesSquare, title: "Clear and friendly", text: "Guidance in simple, everyday language that's easy to follow." },
];

function FloatingCard({ icon: Icon, children, className, delay }: { icon: LucideIcon; children: ReactNode; className: string; delay: string }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute z-10 animate-float rounded-2xl bg-white/90 p-3 shadow-card-hover ring-1 ring-white backdrop-blur sm:p-3.5 ${className}`}
      style={{ animationDelay: delay } as CSSProperties}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-brand text-white sm:size-9">
          <Icon className="size-4" />
        </span>
        <div className="text-sm leading-tight font-bold whitespace-nowrap text-navy">{children}</div>
      </div>
    </div>
  );
}

export function AppExperience() {
  return (
    <section aria-labelledby="experience-title" className="py-6 sm:py-10">
      <div className="container-page">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(140deg,#fbe1ea_0%,#ecdffd_50%,#f2f3ff_100%)] px-5 py-14 sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-16">
          <div aria-hidden="true" className="absolute -top-24 -right-24 -z-10 size-80 rounded-full bg-white/50 blur-3xl" />
          <div aria-hidden="true" className="absolute -bottom-32 -left-20 -z-10 size-96 rounded-full bg-pink/20 blur-3xl" />

          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-10">
            <div>
              <SectionHeading
                id="experience-title"
                align="left"
                eyebrow="The Impress app"
                title={
                  <>
                    Your personal growth, <span className="text-gradient">all in one place.</span>
                  </>
                }
                description="Everything you want to work on — how you talk, look and feel — brought together in one simple daily habit."
              />
              <ul className="mt-10 space-y-5">
                {highlights.map(({ icon: Icon, title, text }, index) => (
                  <Reveal as="li" key={title} delay={index * 100} className="flex gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white text-magenta shadow-card">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{title}</h3>
                      <p className="mt-0.5 leading-relaxed text-muted">{text}</p>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal className="relative mx-auto w-fit px-6 sm:px-20 lg:px-24">
              <PhoneMockup image={screens.main} size="lg" />

              {/* Placed over the quieter parts of the screenshot: top-right and the empty bottom area. */}
              <FloatingCard icon={TrendingUp} delay="0s" className="top-[7%] right-0 sm:right-4">
                Confidence <span className="text-magenta">↑</span>
              </FloatingCard>
              <FloatingCard icon={MessageCircle} delay="-2s" className="top-[34%] left-0 hidden sm:block">
                Better Conversations
              </FloatingCard>
              <FloatingCard icon={Sprout} delay="-3s" className="right-0 bottom-[22%] hidden sm:block">
                Personal Growth
              </FloatingCard>
              <FloatingCard icon={CalendarCheck} delay="-4s" className="bottom-[5%] left-0 sm:left-4">
                <span className="block">Daily Progress</span>
                <span className="mt-1.5 block h-1.5 w-28 overflow-hidden rounded-full bg-lavender">
                  <span className="block h-full w-[88%] rounded-full bg-gradient-to-r from-purple to-pink" />
                </span>
              </FloatingCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
