import { Link } from "react-router";
import { legalItems, showSocialLinks, social } from "../config";
import { Logo } from "./Logo";
import { InstagramIcon, LinkedInIcon, YouTubeIcon } from "./SocialIcons";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "FAQ", href: "/faq" },
];

const socialLinks = [
  { label: "Instagram", href: social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: social.linkedin, Icon: LinkedInIcon },
  { label: "YouTube", href: social.youtube, Icon: YouTubeIcon },
];

const linkClass = "inline-flex min-h-9 items-center text-[0.9375rem] text-muted transition-colors hover:text-magenta";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div
        className={`container-page grid grid-cols-2 gap-x-6 gap-y-10 py-14 sm:grid-cols-3 lg:gap-12 lg:py-16 ${
          showSocialLinks ? "lg:grid-cols-[1.4fr_1fr_1fr_1fr]" : "lg:grid-cols-[1.4fr_1fr_1fr]"
        }`}
      >
        <div className={`col-span-2 lg:col-span-1 ${showSocialLinks ? "sm:col-span-3" : "sm:col-span-1"}`}>
          <Logo className="h-8" />
          <p className="mt-4 max-w-xs leading-relaxed text-muted">
            Helping you become more confident, expressive and impressive.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-bold text-navy">Navigation</h2>
          <ul className="mt-3 space-y-1">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-bold text-navy">Legal</h2>
          <ul className="mt-3 space-y-1">
            {legalItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {showSocialLinks && (
          <div className="col-span-2 sm:col-span-1">
            <h2 className="text-sm font-bold text-navy">Follow us</h2>
            <ul className="mt-4 flex gap-3">
              {socialLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Impress on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-11 items-center justify-center rounded-full bg-lavender text-plum transition-[transform,background-color,color] duration-200 hover:-translate-y-0.5 hover:bg-brand hover:text-white"
                  >
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-line">
        <p className="container-page py-6 text-sm text-muted">© 2026 Impress. All rights reserved.</p>
      </div>
    </footer>
  );
}
