import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

const apps = [
  "leajlak.png","foodics.png","snapchat.webp","bonat.png","myfatoorah.png",
  "deliverect.png","roboost.png","bland.png","google.webp","delivp.png",
  "utrac.png","dgtera.png","marn.png","geidea.png",
];

export function AppStore() {
  const { t } = useLang();
  return (
    <section className="py-10 md:py-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-dark-plum p-8 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
              <div className="grid grid-cols-4 gap-3 md:grid-cols-5 md:gap-4">
                {apps.concat(apps).slice(0, 20).map((a, i) => (
                  <div key={i} className="flex aspect-square items-center justify-center overflow-hidden rounded-full bg-white p-2 ring-1 ring-white/10">
                    <img src={`/img/apps/${a}`} alt="app" className="h-full w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <span className="inline-block rounded-full bg-pink-accent px-3 py-1 text-xs font-semibold">
                  {t("apps.badge")}
                </span>
                <h2 className="mt-4 text-2xl font-bold md:text-3xl">{t("apps.title")}</h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  {t("apps.desc1")}
                  <br />
                  {t("apps.desc2")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
