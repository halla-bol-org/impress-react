import coupleMan from "./couple-man.jpg";
import coupleWoman from "./couple-woman.jpg";
import gentlemanScreen from "./gentleman-screen.jpg";
import heart3d from "./heart-3d.png";
import logo from "./impress-logo.png";
import mainScreen from "./main-screen.png";
import splashScreen from "./splash-screen.png";

// Third-party photo and image sources are listed in CREDITS.md.

export type Screenshot = { src: string; width: number; height: number; alt: string };
export type ImageAsset = { src: string; width: number; height: number };

export const logoImage: ImageAsset = { src: logo, width: 339, height: 97 };

export const screens = {
  splash: {
    src: splashScreen,
    width: 360,
    height: 797,
    alt: "Impress app splash screen with the Impress logo and the tagline “Look your best”",
  },
  main: {
    src: mainScreen,
    width: 375,
    height: 878,
    alt: "Impress app screen where you pick topics to improve: dating skills, conversation skills, personality, confidence, grooming and fitness",
  },
  gentleman: {
    src: gentlemanScreen,
    width: 600,
    height: 1405,
    alt: "Impress video lesson on personality and style, presented by a smiling, well-groomed man in a tan tweed blazer",
  },
} satisfies Record<string, Screenshot>;

/** Portraits of a young couple, cropped from the same photo. */
export const couple = {
  woman: { src: coupleWoman, width: 288, height: 288 },
  man: { src: coupleMan, width: 288, height: 288 },
} satisfies Record<string, ImageAsset>;

export const heartImage: ImageAsset = { src: heart3d, width: 256, height: 256 };
