/**
 * Site-wide links and business details. Replace the placeholders here before
 * launch — every page reads from this file, so nothing else needs editing.
 */

export const links = {
  /** Where "Get Started" buttons in the navbar/hero point (the download section). */
  getStarted: "/download",
  /** Primary download link. Replace with a universal/smart link to the stores. */
  getApp: "/download", // [APP_DOWNLOAD_URL]
  appStore: "/download", // [APP_STORE_URL]
  playStore: "/download", // [PLAY_STORE_URL]
} as const;

/** Set to true to show the "Follow us" links in the footer. */
export const showSocialLinks = false;

export const social = {
  instagram: "https://www.instagram.com/", // [INSTAGRAM_URL]
  linkedin: "https://www.linkedin.com/", // [LINKEDIN_URL]
  youtube: "https://www.youtube.com/", // [YOUTUBE_URL]
} as const;

/**
 * Legal/business details used by the policy pages. Values in [brackets] are
 * placeholders: the pages highlight them until they are replaced.
 */
export const company = {
  legalName: "Close App Private Limited",
  address: "H. No 429A/12, Street No 12, Near Geeta Bhawan, Krishna Colony, Gurgaon",
  email: "info@shuru.co.in",
  privacyEmail: "info@shuru.co.in",
  dataProtectionOfficer: "Harsh Chhabra",
  grievanceOfficer: "[Grievance Officer Name]",
} as const;

/** True for values still written as a [placeholder]. */
export const isPlaceholder = (value: string) => value.trim().startsWith("[") && value.trim().endsWith("]");

/**
 * Home-page sections that have their own URL (e.g. /features). Each path
 * renders the home page and scrolls to the section with the same id.
 */
export const homeSections = ["explore", "features", "why-impress", "how-it-works", "faq", "download"] as const;

export const navItems = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Why Impress", href: "/why-impress" },
  { label: "FAQ", href: "/faq" },
] as const;

export const legalItems = [
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
] as const;
