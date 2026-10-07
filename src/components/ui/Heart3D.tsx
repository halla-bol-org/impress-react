import type { CSSProperties } from "react";
import { heartImage } from "@/assets";

/**
 * Glossy 3D heart: a double "heartbeat", a slow 3D sway with a glint of light
 * sweeping across it, a soft glow and ripple rings. Pure CSS motion (index.css),
 * switched off under prefers-reduced-motion. Size it with a width class.
 */
export function Heart3D({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`heart-3d ${className}`} style={{ "--heart-mask": `url(${heartImage.src})` } as CSSProperties}>
      <span className="heart-3d__glow" />
      <span className="heart-3d__ripple" />
      <span className="heart-3d__ripple heart-3d__ripple--late" />
      <div className="heart-3d__beat">
        <div className="heart-3d__sway">
          <img src={heartImage.src} width={heartImage.width} height={heartImage.height} alt="" decoding="async" className="heart-3d__img" />
          <span className="heart-3d__glint" />
        </div>
      </div>
    </div>
  );
}
