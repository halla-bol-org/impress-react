type BenefitCardProps = {
  number: string;
  title: string;
  description: string;
};

export function BenefitCard({ number, title, description }: BenefitCardProps) {
  return (
    <article className="h-full rounded-[1.75rem] bg-lavender/80 p-6 ring-1 ring-line/60 transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-lavender sm:p-8">
      <span className="text-gradient text-4xl font-extrabold tracking-tight sm:text-5xl" aria-hidden="true">
        {number}
      </span>
      <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
      <p className="mt-2 leading-relaxed text-muted">{description}</p>
    </article>
  );
}
