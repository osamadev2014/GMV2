import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

function AppLinks() {
  return (
    <div className="mt-6 flex gap-3">
      <a href="#" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white">
        <span>Google Play</span>
      </a>
      <a href="#" className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm text-white">
        <span>App Store</span>
      </a>
    </div>
  );
}

export function ManagerApps() {
  const { t } = useLang();
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-[28px] border-2 border-[oklch(0.85_0.09_190)] bg-[oklch(0.96_0.03_190)] p-6 md:p-8">
              <img src="/img/misc/drivers.png" alt="drivers app" className="mx-auto max-h-64" />
              <h3 className="mt-6 text-center text-xl font-bold md:text-2xl">{t("ma.driversTitle")}</h3>
              <p className="mt-3 text-center text-sm leading-loose text-foreground/75">
                {t("ma.driversBody")}
              </p>
              <div className="flex justify-center">
                <AppLinks />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[28px] bg-primary-soft p-6 md:p-8">
              <img src="/img/misc/manager.png" alt="branches app" className="mx-auto max-h-64" />
              <h3 className="mt-6 text-center text-xl font-bold md:text-2xl">{t("ma.managerTitle")}</h3>
              <p className="mt-3 text-center text-sm leading-loose text-foreground/75">
                {t("ma.managerBody")}
              </p>
              <div className="flex justify-center">
                <AppLinks />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
