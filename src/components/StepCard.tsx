import type { LucideIcon } from "lucide-react";

type StepCardProps = {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
};

/** One step of the "How it works" timeline. The connecting line is drawn by the parent list. */
export function StepCard({ step, icon: Icon, title, description }: StepCardProps) {
  return (
    <article className="relative flex gap-5 md:flex-col md:items-center md:gap-0 md:text-center">
      <div className="relative z-10 shrink-0">
        <span className="flex size-14 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-line md:size-20">
          <span className="flex size-10 items-center justify-center rounded-full bg-brand text-white md:size-14">
            <Icon className="size-5 md:size-6" aria-hidden="true" />
          </span>
        </span>
      </div>
      <div className="pt-1 md:mt-6 md:max-w-xs md:pt-0">
        <p className="text-sm font-bold tracking-wide text-magenta">Step {String(step).padStart(2, "0")}</p>
        <h3 className="mt-1 text-xl font-bold text-navy">{title}</h3>
        <p className="mt-2 leading-relaxed text-muted">{description}</p>
      </div>
    </article>
  );
}
