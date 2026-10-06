import type { ReactNode } from "react";
import { Link } from "react-router";

type Variant = "primary" | "secondary" | "light" | "outline-light";
type Size = "sm" | "md" | "lg";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

const base =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-[transform,box-shadow,background-color,color] duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-brand-deep text-white shadow-[0_10px_24px_-10px_rgb(168_48_124/0.7)] hover:shadow-[0_16px_32px_-12px_rgb(168_48_124/0.75)]",
  secondary: "bg-white text-navy shadow-card ring-1 ring-line hover:shadow-card-hover",
  light: "bg-white text-navy shadow-[0_10px_30px_-12px_rgb(0_0_0/0.35)] hover:shadow-[0_16px_36px_-12px_rgb(0_0_0/0.4)]",
  "outline-light": "bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/** Link styled as a button. Internal paths use the router; anything else is a plain anchor. */
export function Button({ href, children, variant = "primary", size = "md", className = "", ...rest }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...rest}>
      {children}
    </a>
  );
}
