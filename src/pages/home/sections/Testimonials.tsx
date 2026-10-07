import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialCard } from "@/components/cards/TestimonialCard";

// Placeholder content — replace with real, consented user testimonials before launch.
const testimonials = [
  { quote: "Impress helped me become much more confident while talking to people.", name: "Rahul" },
  { quote: "I finally started paying attention to the small things that make a big difference.", name: "Ananya" },
  { quote: "The experience feels simple, practical and genuinely motivating.", name: "Arjun" },
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-title" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="testimonials-title"
          eyebrow="Stories"
          title={
            <>
              People are becoming <span className="text-gradient">more confident</span> with Impress.
            </>
          }
          description="Sample stories that show the kind of change Impress is built for."
        />

        <ul className="mt-12 grid gap-4 sm:mt-16 md:grid-cols-3 md:gap-5">
          {testimonials.map((testimonial, index) => (
            <Reveal as="li" key={testimonial.name} delay={index * 100}>
              <TestimonialCard {...testimonial} role="Sample testimonial" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
