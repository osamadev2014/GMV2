import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

export function Contact() {
  const { t, lang } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <Reveal>
            <img src="/img/misc/contact.png" alt="GoMenu order management" className="mx-auto max-w-md" />
          </Reveal>
          <Reveal delay={0.05}>
            <div>
              <h2 className="text-2xl font-bold leading-tight md:text-4xl">
                {t("contact.title")}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground md:text-base">
                {t("contact.subtitle")}
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4">
                <Field label={t("contact.f1")}>
                  <input placeholder={t("contact.f1p")} className="w-full rounded-full bg-[oklch(0.97_0.02_295)] px-5 py-3.5 text-sm border border-transparent outline-none transition focus:border-[oklch(0.52_0.24_295)] focus:bg-white" />
                </Field>
                <Field label={t("contact.f2")}>
                  <input type="email" placeholder="example@email.com" className="w-full rounded-full bg-[oklch(0.97_0.02_295)] px-5 py-3.5 text-sm border border-transparent outline-none transition focus:border-[oklch(0.52_0.24_295)] focus:bg-white" />
                </Field>
                <Field label={t("contact.f3")}>
                  <input placeholder={t("contact.f3p")} className="w-full rounded-full bg-[oklch(0.97_0.02_295)] px-5 py-3.5 text-sm border border-transparent outline-none transition focus:border-[oklch(0.52_0.24_295)] focus:bg-white" />
                </Field>
                <Field label={t("contact.f4")}>
                  <div className="flex gap-2">
                    <select className="w-28 shrink-0 rounded-full bg-[oklch(0.97_0.02_295)] px-5 py-3.5 text-sm border border-transparent outline-none transition focus:border-[oklch(0.52_0.24_295)] focus:bg-white">
                      <option>🇸🇦 +966</option>
                      <option>🇦🇪 +971</option>
                      <option>🇪🇬 +20</option>
                      <option>🇰🇼 +965</option>
                    </select>
                    <input placeholder="5XXXXXXXX" className="flex-1 rounded-full bg-[oklch(0.97_0.02_295)] px-5 py-3.5 text-sm border border-transparent outline-none transition focus:border-[oklch(0.52_0.24_295)] focus:bg-white" />
                  </div>
                </Field>
                <button
                  type="submit"
                  className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-dark-plum py-3.5 text-sm font-semibold text-white transition hover:opacity-90 md:text-base"
                >
                  {t("contact.submit")}
                  <Arrow className="h-4 w-4" />
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
