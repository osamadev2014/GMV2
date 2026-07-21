import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

export function FAQ() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">{t("faq.title")}</h2>
            <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground md:text-base">
              {t("faq.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <Reveal>
            <img src="/img/misc/faq.png" alt="faq" className="mx-auto max-w-sm" />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="divide-y divide-border rounded-2xl bg-white">
              {faqs.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setOpen(open === i ? null : i)}
                  className={`flex w-full items-center justify-between gap-4 px-5 py-5 transition ${lang === "ar" ? "text-right" : "text-left"}`}
                >
                  <div className="flex-1">
                    <div className="text-sm font-semibold md:text-base">{f.q}</div>
                    <div
                      className={`grid overflow-hidden text-sm leading-relaxed text-muted-foreground transition-all ${
                        open === i ? "mt-2 grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">{f.a}</div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${
                      open === i ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
