import { BenefitCard } from "@/components/cards/BenefitCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    title: "Build Confidence",
    description: "Feel more comfortable speaking, meeting people and expressing yourself.",
  },
  {
    title: "Communicate Better",
    description: "Learn how to express your thoughts clearly and naturally.",
  },
  {
    title: "Improve Your Presence",
    description: "Look, speak and carry yourself with greater confidence.",
  },
  {
    title: "Grow Every Day",
    description: "Turn small daily improvements into lasting personal growth.",
  },
];

export function WhyImpress() {
  return (
    <section id="why-impress" aria-labelledby="why-title" className="py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="why-title"
            align="left"
            eyebrow="Why Impress"
            title={
              <>
                Small improvements. <span className="text-gradient">A bigger impression.</span>
              </>
            }
            description="Real change rarely comes from one big moment. Impress focuses on the everyday habits that shape how you speak, look and feel."
          />

          <Reveal delay={120} className="mt-8 rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-line/70 sm:p-7">
            <p className="flex items-center gap-3 text-xs font-bold tracking-[0.08em] text-gold uppercase">
              <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-transparent to-purple" />
              Look better · Stand out · Be remembered
            </p>
            <p className="mt-2 text-2xl font-bold text-navy">Look your best</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">The promise that greets you every time you open Impress.</p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {benefits.map((benefit, index) => (
            <Reveal as="li" key={benefit.title} delay={(index % 2) * 100}>
              <BenefitCard number={String(index + 1).padStart(2, "0")} {...benefit} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
