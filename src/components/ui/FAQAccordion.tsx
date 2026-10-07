import { Plus } from "lucide-react";
import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export type FAQItem = { question: string; answer: ReactNode };

/**
 * Accessible accordion (WAI-ARIA pattern): Enter/Space toggles, ↑/↓/Home/End
 * move between questions. One item is open at a time.
 */
export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = items.length - 1;
    const target = { ArrowDown: index === last ? 0 : index + 1, ArrowUp: index === 0 ? last : index - 1, Home: 0, End: last }[
      event.key
    ];
    if (target === undefined) return;
    event.preventDefault();
    buttonsRef.current[target]?.focus();
  };

  return (
    <div className="divide-y divide-line overflow-hidden rounded-[1.75rem] bg-white shadow-card ring-1 ring-line/70">
      {items.map((item, index) => {
        const open = openIndex === index;
        const buttonId = `${baseId}-q${index}`;
        const panelId = `${baseId}-a${index}`;
        return (
          <div key={item.question}>
            <h3>
              <button
                ref={(el) => {
                  buttonsRef.current[index] = el;
                }}
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left text-base font-semibold text-navy transition-colors hover:bg-lavender/50 focus-visible:-outline-offset-2 sm:px-8 sm:py-6 sm:text-lg"
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={`flex size-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 ${
                    open ? "rotate-45 bg-brand text-white" : "bg-lavender text-purple"
                  }`}
                >
                  <Plus className="size-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              inert={!open}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-6 leading-relaxed text-muted sm:px-8 sm:pr-20">{item.answer}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
