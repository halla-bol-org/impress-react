import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Fades its children up once they scroll into view. */
export function Reveal({ as: Tag = "div", delay = 0, className = "", children }: RevealProps) {
  const ref = useReveal<HTMLElement>();
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}>
      {children}
    </Tag>
  );
}
