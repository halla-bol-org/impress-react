import { Link } from "react-router";
import { logoImage } from "../assets";

/** The Impress wordmark, linking home. */
export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <Link to="/" className="inline-flex shrink-0 items-center rounded-md" aria-label="Impress home">
      <img
        src={logoImage.src}
        width={logoImage.width}
        height={logoImage.height}
        alt="Impress"
        className={`${className} w-auto`}
        decoding="async"
      />
    </Link>
  );
}
