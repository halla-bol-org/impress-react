import { Heart, Scissors, Speech, Sparkles, Trophy, Zap } from "lucide-react";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { GradientBackground } from "@/components/ui/GradientBackground";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const features = [
  {
    icon: Heart,
    title: "Dating Skills",
    description: "Learn how to make meaningful connections and leave a great impression.",
  },
  {
    icon: Speech,
    title: "Conversation Skills",
    description: "Speak clearly, confidently and make your conversations more engaging.",
  },
  {
    icon: Sparkles,
    title: "Personality",
    description: "Build a stronger personality and become more comfortable being yourself.",
  },
  {
    icon: Trophy,
    title: "Confidence",
    description: "Develop confidence and express yourself without hesitation.",
  },
  {
    icon: Scissors,
    title: "How You Look",
    description: "Improve your appearance, grooming and personal presentation.",
  },
  {
    icon: Zap,
    title: "Fitness",
    description: "Build healthier habits and feel stronger, more energetic and confident.",
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative isolate py-20 sm:py-28">
      <GradientBackground variant="lavender" />
      <div className="container-page">
        <SectionHeading
          id="features-title"
          eyebrow="What you can improve"
          title={
            <>
              Improve the things that make you, <span className="text-gradient">YOU.</span>
            </>
          }
          description="Choose what you want to improve and let Impress guide you."
        />

        <ul className="mt-12 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Reveal as="li" key={feature.title} delay={(index % 3) * 80}>
              <FeatureCard {...feature} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
