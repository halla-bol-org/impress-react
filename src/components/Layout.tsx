import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

/**
 * On navigation, scrolls to the section named by the last path segment
 * (/faq → #faq, /terms-and-conditions/eligibility → #eligibility), or to the top.
 */
function useScrollOnNavigate() {
  const { pathname, key } = useLocation();

  useEffect(() => {
    const segment = pathname.split("/").filter(Boolean).pop();
    const target = segment ? document.getElementById(decodeURIComponent(segment)) : null;
    if (!target) {
      window.scrollTo({ top: 0, behavior: "instant" });
      return;
    }
    target.scrollIntoView();
    // On a fresh load, web fonts can still change the layout; aim again once they're in.
    document.fonts?.ready.then(() => target.scrollIntoView());
  }, [pathname, key]);
}

function skipToContent() {
  const main = document.getElementById("main");
  main?.focus();
  main?.scrollIntoView();
}

export function Layout() {
  useScrollOnNavigate();

  return (
    <>
      <button
        type="button"
        onClick={skipToContent}
        className="sr-only z-[60] rounded-full bg-navy px-4 py-2 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Skip to content
      </button>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
