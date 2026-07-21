import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

export function ValueProp() {
  const { t } = useLang();
  const channels = [
    { key: "delivery", title: t("vp.delivery.title"), sub: t("vp.delivery.sub") },
    { key: "pickup", title: t("vp.pickup.title"), sub: t("vp.pickup.sub") },
    { key: "drive", title: t("vp.drive.title"), sub: t("vp.drive.sub") },
    { key: "dinein", title: t("vp.dinein.title"), sub: t("vp.dinein.sub") },
  ];
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <Reveal>
            <p className="max-w-lg text-base leading-loose text-foreground/80 md:text-lg">
              {t("vp.desc")}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl md:leading-[1.2]">
              {t("vp.headline1")} <span className="pink-underline">{t("vp.headline2")}</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {channels.map((c, i) => (
            <Reveal key={c.key} delay={i * 0.06}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-3xl bg-neutral-900 shadow-lg">
                <img
                  src={`/img/channels/${c.key}-bg.png`}
                  alt={c.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center text-white">
                  <img src={`/img/channels/${c.key}-icon.png`} alt="" className="mb-3 h-14 w-14 opacity-90 md:h-16 md:w-16" />
                  <h3 className="text-sm font-bold md:text-lg">{c.title}</h3>
                  <p className="mt-1 text-[11px] leading-relaxed text-white/80 md:text-xs">{c.sub}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
