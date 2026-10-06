import { Compass, ListChecks, TrendingUp } from "lucide-react";
import { Reveal } from "../../components/Reveal";
import { SectionHeading } from "../../components/SectionHeading";
import { StepCard } from "../../components/StepCard";

const steps = [
  {
    icon: ListChecks,
    title: "Choose what you want to improve",
    description: "Pick the topics that matter to you — from confidence and conversation to style and fitness.",
  },
  {
    icon: Compass,
    title: "Follow personalized guidance",
    description: "Get practical daily videos and tips shaped around the goals you picked.",
  },
  {
    icon: TrendingUp,
    title: "Become more confident every day",
    description: "Small, consistent steps add up. Watch yourself grow, one day at a time.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="bg-white py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="how-title"
          eyebrow="How it works"
          title={
            <>
              Your journey starts in <span className="text-gradient">3 simple steps.</span>
            </>
          }
        />

        <ol className="relative mx-auto mt-14 grid max-w-md gap-12 sm:mt-20 md:max-w-none md:grid-cols-3 md:gap-8">
          {/* Connecting line: vertical on phones, horizontal from md up. */}
          <span
            aria-hidden="true"
            className="absolute top-7 bottom-10 left-7 w-0.5 -translate-x-1/2 rounded-full bg-gradient-to-b from-purple via-pink to-transparent md:top-10 md:right-[16.667%] md:bottom-auto md:left-[16.667%] md:h-0.5 md:w-auto md:translate-x-0 md:-translate-y-1/2 md:bg-gradient-to-r md:via-pink md:to-purple"
          />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 140}>
              <StepCard step={index + 1} {...step} />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
