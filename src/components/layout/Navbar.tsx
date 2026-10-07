import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { links, navItems } from "@/config";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [location.pathname]);

  const closeMenu = useCallback((restoreFocus: boolean) => {
    setMenuOpen(false);
    if (restoreFocus) menuButtonRef.current?.focus();
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          solid ? "bg-white/85 shadow-[0_1px_0_rgb(0_28_100/0.06),0_8px_24px_-16px_rgb(0_28_100/0.18)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav aria-label="Main" className="container-page flex h-16 items-center justify-between gap-4 lg:h-[4.5rem] lg:gap-6">
          <Logo className="h-7 sm:h-8" />

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="rounded-full px-3 py-2 text-[0.9375rem] font-medium whitespace-nowrap text-ink/80 transition-colors hover:bg-lavender hover:text-navy lg:px-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href={links.getStarted}>Download App</Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-lavender md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
          </button>
        </nav>
      </header>
      {/* Rendered outside <header>: its backdrop-filter would otherwise contain the menu's fixed positioning. */}
      <MobileMenu id="mobile-menu" open={menuOpen} onClose={closeMenu} />
    </>
  );
}
