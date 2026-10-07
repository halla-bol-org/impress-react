import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { links, navItems } from "@/config";
import { Button } from "@/components/ui/Button";

type MobileMenuProps = {
  id: string;
  open: boolean;
  /** `restoreFocus` is true when the menu was dismissed with the keyboard. */
  onClose: (restoreFocus: boolean) => void;
};

export function MobileMenu({ id, open, onClose }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose(true);
      if (event.key !== "Tab" || !panelRef.current) return;
      // Keep focus cycling between the toggle button and the menu links.
      const toggle = document.querySelector<HTMLElement>(`[aria-controls="${id}"]`);
      const items = [toggle, ...panelRef.current.querySelectorAll<HTMLElement>("a")].filter((el): el is HTMLElement => !!el);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const closeOnDesktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => closeOnDesktop.matches && onClose(false);

    document.addEventListener("keydown", onKeyDown);
    closeOnDesktop.addEventListener("change", onResize);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      closeOnDesktop.removeEventListener("change", onResize);
      document.body.style.overflow = "";
    };
  }, [open, onClose, id]);

  return (
    <div className="md:hidden">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={() => onClose(false)}
        className={`fixed inset-x-0 top-16 bottom-0 z-40 bg-navy/25 backdrop-blur-[2px] transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />
      <div
        id={id}
        ref={panelRef}
        className={`fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] origin-top overflow-y-auto border-t border-line bg-white shadow-[0_24px_40px_-24px_rgb(0_28_100/0.35)] duration-300 ease-out ${
          open
            ? "visible translate-y-0 opacity-100 transition-[opacity,transform]"
            : "invisible -translate-y-3 opacity-0 transition-[opacity,transform,visibility]"
        }`}
      >
        <ul className="container-page flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => onClose(false)}
                className="flex min-h-12 items-center justify-between rounded-2xl px-4 text-lg font-semibold text-navy transition-colors hover:bg-lavender"
              >
                {item.label}
                <ArrowRight className="size-4 text-purple" aria-hidden="true" />
              </Link>
            </li>
          ))}
          <li className="mt-3 px-1 pb-2">
            <Button href={links.getStarted} size="lg" className="w-full" onClick={() => onClose(false)}>
              Download App
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
