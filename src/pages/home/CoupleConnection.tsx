import type { ImageAsset } from "../../assets";
import { couple } from "../../assets";
import { Heart3D } from "../../components/Heart3D";

/**
 * A young couple on either side of the hero phone, connected by a 3D heart
 * floating over the empty middle of the splash screen. Sizes and positions
 * are percentages of the phone, so the group scales with it.
 */
export function CoupleConnection() {
  return (
    <div role="img" aria-label="A smiling young couple connected by a heart" className="pointer-events-none absolute inset-0 z-10">
      <Portrait image={couple.woman} className="top-[45%] -left-[9%] [animation-delay:-1s]" />
      <Portrait image={couple.man} className="top-[53%] -right-[9%] [animation-delay:-4s]" />
      <Heart3D className="absolute top-[54%] left-1/2 w-[23%] -translate-x-1/2 -translate-y-1/2" />
    </div>
  );
}

function Portrait({ image, className }: { image: ImageAsset; className: string }) {
  return (
    <div
      className={`absolute w-[30%] animate-float rounded-full bg-gradient-to-br from-pink via-purple to-plum p-[1.3%] shadow-[0_18px_30px_-12px_rgb(56_20_90/0.45)] ${className}`}
    >
      <div className="rounded-full bg-white p-[3.5%]">
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt=""
          decoding="async"
          className="block aspect-square w-full rounded-full object-cover"
        />
      </div>
    </div>
  );
}
