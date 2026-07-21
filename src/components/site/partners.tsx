import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

const partners = [
  "partner2.png","partner6.jpeg","partner10.png","partner14.png","partner18.png","partner22.jpeg","partner26.png",
  "partner3.png","partner7.png","partner11.png","partner15.png","partner19.png","partner23.png",
  "partner4.png","partner8.png","partner12.png","partner16.png","partner20.png","partner24.jpeg",
  "partner5.png","partner9.jpeg","partner13.png","partner17.png","partner21.png","partner25.jpeg",
];

export function Partners() {
  const { t } = useLang();
  return (
    <section className="py-10 md:py-14">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] bg-dark-plum p-8 md:p-14">
            <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
              <div className="grid grid-cols-4 gap-3 md:grid-cols-6 md:gap-4">
                {partners.slice(0, 24).map((p, i) => (
                  <div key={i} className="aspect-square overflow-hidden rounded-full bg-white/95 ring-1 ring-white/10">
                    <img src={`/img/partners/${p}`} alt="partner" className="h-full w-full object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
              <div className="text-white">
                <h2 className="text-2xl font-bold md:text-3xl">
                  {t("partners.title1")} <span className="text-primary-soft">GoMenu</span>
                </h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  {t("partners.desc1")} <span className="font-bold text-white">+2,500</span>
                  <br />
                  {t("partners.desc2")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
