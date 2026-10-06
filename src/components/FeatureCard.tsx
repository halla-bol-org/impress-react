import { Check, type LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** Topic card modelled on the app's topic picker: gradient icon tile + pink check badge. */
export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <article className="group relative h-full rounded-[1.75rem] bg-white p-6 shadow-card ring-1 ring-line/70 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:scale-[1.015] hover:shadow-card-hover sm:p-7">
      <div className="flex items-start justify-between">
        <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-[0_8px_18px_-8px_rgb(184_100_195/0.8)]">
          <Icon className="size-6" strokeWidth={2} aria-hidden="true" />
        </span>
        <span
          aria-hidden="true"
          className="inline-flex size-7 items-center justify-center rounded-full bg-lavender text-purple/60 transition-colors duration-300 group-hover:bg-pink group-hover:text-white"
        >
          <Check className="size-4" strokeWidth={3} />
        </span>
      </div>
      <h3 className="mt-8 text-xl font-bold text-navy">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
