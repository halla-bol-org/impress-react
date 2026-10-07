type Variant = "splash" | "soft" | "lavender";

/**
 * Decorative blurred glows behind a section, echoing the app's splash screen:
 * blush pink at the edges, lilac in the middle. Place inside a `relative` parent.
 */
export function GradientBackground({ variant = "soft", className = "" }: { variant?: Variant; className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
      {variant === "splash" && (
        <>
          <div className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-blush/80 blur-3xl" />
          <div className="absolute top-1/3 left-1/2 h-[30rem] w-[40rem] -translate-x-1/2 rounded-full bg-lilac/70 blur-3xl lg:left-[68%]" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blush/70 blur-3xl" />
          <div className="absolute right-[-6rem] bottom-10 h-72 w-72 rounded-full bg-[#fbe0ea] blur-3xl" />
          {/* Fade into the page background so the section has no hard bottom edge. */}
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
        </>
      )}
      {variant === "soft" && (
        <>
          <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-blush/60 blur-3xl" />
          <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-lilac/60 blur-3xl" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background" />
        </>
      )}
      {variant === "lavender" && (
        <div className="absolute inset-0 bg-gradient-to-b from-background via-lavender to-background" />
      )}
    </div>
  );
}
