import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "./primitives";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLang();
  const Arrow = lang === "ar" ? ArrowLeft : ArrowRight;
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_50%_0%,oklch(0.94_0.06_295)_0%,transparent_60%)]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto inline-flex items-center rounded-full bg-primary-soft px-4 py-1.5 text-xs font-medium text-primary md:text-sm"
          >
            {t("hero.badge")}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-3xl font-bold leading-[1.35] text-foreground sm:text-4xl md:text-5xl lg:text-[56px] lg:leading-[1.25]"
          >
            {t("hero.title1")}{" "}
            <span className="pink-underline">{t("hero.title2")}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_oklch(0.52_0.24_295)] transition hover:shadow-[0_15px_35px_-10px_oklch(0.52_0.24_295)] md:text-base"
            >
              {t("hero.ctaPrimary")}
              <Arrow className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1" />
            </a>
            <a
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground transition hover:border-primary/40 md:text-base"
            >
              {t("hero.ctaSecondary")}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="relative">
            <img src="/img/hero/dashboard.png" alt="dashboard" className="w-full drop-shadow-[0_30px_60px_rgba(80,40,140,0.15)]" />
            <motion.img
              src="/img/hero/sales.png"
              alt=""
              className="absolute -start-4 top-10 w-[38%] max-w-[280px] md:-start-8 md:top-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.img
              src="/img/hero/order.png"
              alt=""
              className="absolute -end-2 top-4 w-[32%] max-w-[240px] md:-end-6 md:top-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
            <motion.img
              src="/img/hero/points.png"
              alt=""
              className="absolute -end-4 bottom-[-30px] w-[34%] max-w-[260px] md:-end-8"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
