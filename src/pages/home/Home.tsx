import { usePageMeta } from "@/hooks/usePageMeta";
import { AppExperience } from "./sections/AppExperience";
import { AppPreview } from "./sections/AppPreview";
import { FAQ } from "./sections/FAQ";
import { Features } from "./sections/Features";
import { FinalCTA } from "./sections/FinalCTA";
import { Hero } from "./sections/Hero";
import { HowItWorks } from "./sections/HowItWorks";
import { Testimonials } from "./sections/Testimonials";
import { WhyImpress } from "./sections/WhyImpress";

export function Home() {
  usePageMeta(
    "Impress — Become the Best Version of Yourself",
    "Impress helps you build confidence, communicate better, improve your personality and become the best version of yourself.",
  );

  return (
    <>
      <Hero />
      <AppPreview />
      <Features />
      <WhyImpress />
      <HowItWorks />
      <AppExperience />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
