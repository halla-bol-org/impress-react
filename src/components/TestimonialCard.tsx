import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-line/70 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
      <Quote className="size-8 text-pink/70" aria-hidden="true" />
      <blockquote className="mt-5 flex-1 text-lg leading-relaxed font-medium text-navy">“{quote}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex size-11 items-center justify-center rounded-full bg-brand text-base font-bold text-white"
        >
          {name.charAt(0)}
        </span>
        <span>
          <span className="block font-semibold text-navy">{name}</span>
          <span className="block text-sm text-muted">{role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
