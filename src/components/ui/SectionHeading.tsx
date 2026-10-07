import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", id }: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-magenta">
          <span aria-hidden="true" className="h-px w-6 bg-gradient-to-r from-transparent to-purple" />
          {eyebrow}
          {centered && <span aria-hidden="true" className="h-px w-6 bg-gradient-to-l from-transparent to-purple" />}
        </p>
      )}
      <h2 id={id} className="text-[1.875rem] leading-[1.15] font-bold tracking-tight text-balance text-navy sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-pretty text-muted sm:text-lg">{description}</p>}
    </Reveal>
  );
}
