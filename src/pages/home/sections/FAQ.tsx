import { Link } from "react-router";
import { FAQAccordion, type FAQItem } from "@/components/ui/FAQAccordion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/config";

const faqs: FAQItem[] = [
  {
    question: "What is Impress?",
    answer:
      "Impress is a self-improvement app that helps you build confidence, communicate better, look your best and grow your personality — through a daily feed shaped around the topics you choose.",
  },
  {
    question: "Who is Impress for?",
    answer:
      "Anyone who wants to feel more confident and make a better impression — whether you're a student, starting your career, or simply want to grow a little every day.",
  },
  {
    question: "What can I improve with Impress?",
    answer:
      "You can focus on dating skills, conversation skills, personality, confidence, how you look and fitness. Pick three or more topics and your feed adapts to them.",
  },
  {
    question: "Is Impress free?",
    answer: (
      <>
        [Pricing details to be confirmed.] If Impress offers paid plans or premium features, their prices will be shown
        clearly in the app before you pay. See our{" "}
        <Link to="/refund-policy" className="font-medium text-magenta underline underline-offset-2">
          Refund &amp; Cancellation Policy
        </Link>{" "}
        for more.
      </>
    ),
  },
  {
    question: "How does Impress help with confidence?",
    answer:
      "Confidence grows with practice. Impress gives you small, practical ideas — how to start a conversation, carry yourself or present your best self — that you can try in real life and build on day by day.",
  },
  {
    question: "Can I use Impress every day?",
    answer: "Yes. Impress is designed around small daily sessions, so a few minutes a day is enough to keep improving.",
  },
];

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-20 sm:py-28">
      <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="faq-title"
            align="left"
            eyebrow="FAQ"
            title="Questions, answered."
            description={
              <>
                Can't find what you're looking for? Write to us at{" "}
                <a href={`mailto:${company.email}`} className="font-medium text-magenta underline underline-offset-2">
                  {company.email}
                </a>
                .
              </>
            }
          />
        </div>
        <Reveal delay={100}>
          <FAQAccordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
