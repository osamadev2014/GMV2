import { Instagram, Linkedin, Twitter, BookOpen } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { GoMenuLogo } from "./logo";
import { useLang } from "@/lib/i18n";

const regions = ["EG", "JO", "YE", "OM", "AE", "QA", "BH", "KW", "SA"];

export function Footer() {
  const { t } = useLang();

  const quickLinks = [
    { href: "/#home", label: t("nav.home") },
    { href: "/#services", label: t("nav.services") },
    { href: "/pricing", label: t("nav.pricing"), isRoute: true },
    { href: "/#contact", label: t("nav.contact") },
  ];
  const sectors = [
    t("sec.cafes"),
    t("sec.fastfood"),
    t("sec.catering"),
    t("sec.coffee"),
    t("sec.flowers"),
    t("sec.pharmacy"),
    t("sec.supermarket"),
    t("sec.carwash"),
  ];

  return (
    <footer className="px-4 pb-10">
      <div className="mx-auto max-w-[1200px] rounded-[36px] bg-dark-plum px-5 py-8 text-white sm:px-8 sm:py-10 md:px-14 md:py-14">
        <div className="grid gap-8 sm:gap-10 md:grid-cols-4 md:gap-8">
          {/* Logo + description */}
          <div className="md:col-span-1">
            <GoMenuLogo className="h-7 text-white" />
            <p className="mt-5 text-sm leading-loose text-white/70">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-5 text-base font-semibold text-pink-accent">
              {t("footer.quick")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  {l.isRoute ? (
                    <Link to={l.href} className="transition hover:text-white">
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="transition hover:text-white">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h4 className="mb-5 text-base font-semibold text-pink-accent">
              {t("footer.sectors")}
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              {sectors.map((s) => (
                <li key={s}>
                  <a href="#" className="transition hover:text-white">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow + regions */}
          <div>
            <h4 className="mb-5 text-base font-semibold">{t("footer.follow")}</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"><Twitter className="h-4 w-4" /></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"><Linkedin className="h-4 w-4" /></a>
              <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Blog" className="rounded-full bg-white/10 p-2.5 transition hover:bg-white/20"><BookOpen className="h-4 w-4" /></a>
            </div>
            <p className="mt-8 text-sm text-white/80">{t("footer.regions")}</p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 text-sm font-semibold tracking-wide text-white/90">
              {regions.map((r) => (
                <span key={r}>{r}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-6 max-w-[1200px] text-center text-xs text-muted-foreground">
        {t("footer.rights")}
      </p>
    </footer>
  );
}
