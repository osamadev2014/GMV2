import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

export function Services() {
  const { t, lang } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  const services = [
    { title: t("s1.title"), body: t("s1.body"), img: "/img/services/app-website.png", reverse: false },
    { title: t("s2.title"), body: t("s2.body"), img: "/img/services/loyalty.png", reverse: true },
    { title: t("s3.title"), body: t("s3.body"), img: "/img/services/delivery.png", reverse: false },
    { title: t("s4.title"), body: t("s4.body"), img: "/img/services/pos.png", reverse: true },
  ];
  return (
    <section id="services" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">{t("services.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              {t("services.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-8 md:space-y-14">
          {services.map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div
                className={`grid items-center gap-8 rounded-[32px] bg-primary-soft/60 p-6 md:grid-cols-2 md:gap-10 md:p-10 ${
                  s.reverse ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="flex items-center justify-center">
                  <img src={s.img} alt={s.title} className="w-full max-w-md" loading="lazy" />
                </div>
                <div>
                  <h3 className="text-xl font-bold md:text-2xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-loose text-foreground/75 md:text-base">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="/#services"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.52_0.24_295)] md:text-base"
          >
            {t("services.viewAll")}
            <Arrow className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
