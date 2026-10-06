import { usePageMeta } from "../hooks/usePageMeta";
import { AppExperience } from "./home/AppExperience";
import { AppPreview } from "./home/AppPreview";
import { FAQ } from "./home/FAQ";
import { Features } from "./home/Features";
import { FinalCTA } from "./home/FinalCTA";
import { Hero } from "./home/Hero";
import { HowItWorks } from "./home/HowItWorks";
import { Testimonials } from "./home/Testimonials";
import { WhyImpress } from "./home/WhyImpress";

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
