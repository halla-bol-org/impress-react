import type { Screenshot } from "@/assets";

type Size = "sm" | "md" | "lg";

type PhoneMockupProps = {
  image: Screenshot;
  size?: Size;
  /** Custom width classes, used instead of the size preset. */
  width?: string;
  /** Load immediately (above the fold) instead of lazily. */
  priority?: boolean;
  /** Draw a dynamic island over the top of the screen. */
  island?: boolean;
  /** Gentle floating animation. */
  float?: boolean;
  className?: string;
};

const widths: Record<Size, string> = {
  sm: "w-[200px] sm:w-[220px]",
  md: "w-[230px] sm:w-[260px]",
  lg: "w-[250px] sm:w-[290px] lg:w-[310px]",
};

/**
 * A smartphone frame with a screenshot clipped inside. All frame dimensions
 * are in container-query units, so the phone keeps its proportions at any
 * width. Every screen has the same 375:878 shape so phones of the same width
 * match in height; screenshots fill it with object-cover (never stretched —
 * a slightly wider one loses a sliver of empty background at the sides).
 */
export function PhoneMockup({
  image,
  size = "md",
  width,
  priority = false,
  island = true,
  float = false,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`@container ${width ?? widths[size]} ${className}`}>
      <div className={float ? "animate-float" : undefined}>
        <div className="relative rounded-[15cqw] bg-[#14122b] p-[3.2cqw] shadow-phone ring-1 ring-black/10">
          {/* Side buttons */}
          <span aria-hidden="true" className="absolute top-[22%] -left-[0.9cqw] h-[7%] w-[1cqw] rounded-l-sm bg-[#2a2745]" />
          <span aria-hidden="true" className="absolute top-[32%] -left-[0.9cqw] h-[11%] w-[1cqw] rounded-l-sm bg-[#2a2745]" />
          <span aria-hidden="true" className="absolute top-[28%] -right-[0.9cqw] h-[14%] w-[1cqw] rounded-r-sm bg-[#2a2745]" />
          {/* Subtle highlight on the frame edge */}
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[15cqw] ring-1 ring-white/10 ring-inset" />

          <div className="relative aspect-[375/878] overflow-hidden rounded-[12cqw] bg-white">
            <img
              src={image.src}
              width={image.width}
              height={image.height}
              alt={image.alt}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : "auto"}
              decoding="async"
              className="block h-full w-full object-cover"
            />
            {island && (
              <span
                aria-hidden="true"
                className="absolute top-[3cqw] left-1/2 h-[8cqw] w-[30cqw] -translate-x-1/2 rounded-full bg-[#0b0a18]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
