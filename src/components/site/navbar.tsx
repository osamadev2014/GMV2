import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { GoMenuLogo } from "./logo";
import { useLang } from "@/lib/i18n";

export function Navbar() {
  const { t, toggle, lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/#home", label: t("nav.home"), active: true },
    { href: "/#services", label: t("nav.services") },
    { href: "/#sectors", label: t("nav.sectors") },
    { href: "/pricing", label: t("nav.pricing"), isRoute: true },
    { href: "/#contact", label: t("nav.contact") },
  ];

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <header ref={wrapperRef} className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`pointer-events-auto flex w-full max-w-[1200px] items-center justify-between rounded-full border border-black/5 bg-white/80 px-4 py-2.5 backdrop-blur-md transition-shadow md:px-6 ${
          scrolled ? "shadow-[0_10px_40px_-15px_rgba(80,40,140,0.25)]" : "shadow-[0_4px_20px_-10px_rgba(80,40,140,0.15)]"
        }`}
      >
        <div className="order-2 flex items-center gap-3">
          <GoMenuLogo className="h-6" />
          <button
            onClick={toggle}
            className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground/80 transition hover:border-primary/40"
          >
            {t("nav.langSwitch")}
          </button>
        </div>

        <nav className="order-1 ms-4 md:ms-8 hidden items-center gap-1 md:flex">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                className={`relative rounded-full px-3 py-2 text-sm transition hover:text-primary ${
                  l.active ? "font-semibold text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className={`relative rounded-full px-3 py-2 text-sm transition hover:text-primary ${
                  l.active ? "font-semibold text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
                {l.active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            )
          )}
        </nav>

        <button onClick={() => setOpen((v) => !v)} className="order-1 md:hidden" aria-label="menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="pointer-events-auto absolute top-20 mx-4 w-[calc(100%-2rem)] max-w-[1200px] rounded-3xl border border-black/5 bg-white p-4 shadow-xl md:hidden">
          {links.map((l) =>
            l.isRoute ? (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm ${
                  l.active ? "bg-primary-soft font-semibold text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-xl px-4 py-3 text-sm ${
                  l.active ? "bg-primary-soft font-semibold text-primary" : "text-foreground/80"
                }`}
              >
                {l.label}
              </a>
            )
          )}
          <button
            onClick={() => {
              toggle();
              setOpen(false);
            }}
            className="mt-2 w-full rounded-full border border-border py-2 text-xs"
          >
            {t("nav.langSwitch")}
          </button>
        </div>
      )}
    </header>
  );
}
