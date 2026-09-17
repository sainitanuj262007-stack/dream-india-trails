import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/site-data";
import logoAsset from "@/assets/destinations-planner-logo.png.asset.json";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <a
          href="#home"
          className={`flex min-w-0 items-center gap-2.5 font-display text-lg font-semibold ${
            scrolled || open ? "text-foreground" : "text-primary-foreground"
          }`}
        >
          <img
            src={logoAsset.url}
            alt=""
            width="48"
            height="48"
            className="size-11 shrink-0 object-contain"
          />
          <span className="truncate">Destinations Planner</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.hash}>
              <a
                href={l.hash}
                className={`text-sm font-medium transition-opacity hover:opacity-70 ${
                  scrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Plan Your Trip
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border lg:hidden ${
              scrolled || open ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            {open ? <Menu className="size-5" aria-hidden="true" style={{ display: "none" }} /> : null}
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto max-w-7xl px-5 py-3 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.hash}>
                <a
                  href={l.hash}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href="#enquiry"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                Plan Your Trip
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
