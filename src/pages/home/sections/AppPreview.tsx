import { MessageCircle, Shirt, Smile, Sparkles, type LucideIcon } from "lucide-react";
import { screens } from "@/assets";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type FloatingLabel = { text: string; icon: LucideIcon; position: string; delay: string };

// Positions apply from lg up; on smaller screens the labels sit in a row below the phones.
const labels: FloatingLabel[] = [
  { text: "Build Confidence", icon: Sparkles, position: "lg:top-[10%] lg:left-[6%] xl:left-[12%]", delay: "0s" },
  { text: "Speak Better", icon: MessageCircle, position: "lg:top-[30%] lg:right-[6%] xl:right-[13%]", delay: "-1.5s" },
  { text: "Improve Your Style", icon: Shirt, position: "lg:bottom-[30%] lg:left-[3%] xl:left-[9%]", delay: "-3s" },
  { text: "Become More Expressive", icon: Smile, position: "lg:right-[3%] lg:bottom-[8%] xl:right-[9%]", delay: "-4.5s" },
];

export function AppPreview() {
  return (
    <section id="explore" aria-labelledby="inside-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="inside-title"
          eyebrow="Inside Impress"
          title={
            <>
              Everything you need to become <span className="text-gradient">more impressive.</span>
            </>
          }
          description="Pick three or more topics you care about, and Impress shapes a daily feed of practical videos around the way you want to grow."
        />

        <Reveal className="relative isolate mt-12 md:mt-16">
          <div
            aria-hidden="true"
            className="absolute inset-x-[15%] top-[15%] bottom-[10%] -z-10 rounded-full bg-gradient-to-r from-blush/70 via-lilac/70 to-blush/60 blur-3xl"
          />

          {/* Swipeable on phones, overlapping composition from md up. */}
          <ul
            aria-label="App screens"
            className="-mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pt-4 pb-8 [scrollbar-width:none] sm:-mx-8 sm:px-8 sm:justify-center md:mx-0 md:gap-0 md:overflow-visible md:px-0 md:pt-6 md:pb-10 [&::-webkit-scrollbar]:hidden"
          >
            <li className="shrink-0 snap-center md:z-10 md:-mr-8 md:translate-y-10 md:-rotate-[5deg]">
              <PhoneMockup image={screens.main} size="md" />
            </li>
            <li className="shrink-0 snap-center md:z-20 md:-ml-8 md:rotate-[4deg]">
              <PhoneMockup image={screens.splash} size="md" />
            </li>
          </ul>

          <ul className="mt-2 flex flex-wrap justify-center gap-2.5 md:mt-6 lg:mt-0">
            {labels.map(({ text, icon: Icon, position, delay }) => (
              <li key={text} className={`lg:absolute lg:z-30 ${position}`}>
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 py-2 pr-4 pl-2 text-sm font-semibold text-navy shadow-card-hover ring-1 ring-white backdrop-blur lg:animate-float"
                  style={{ animationDelay: delay }}
                >
                  <span className="flex size-7 items-center justify-center rounded-full bg-brand text-white">
                    <Icon className="size-3.5" aria-hidden="true" />
                  </span>
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
