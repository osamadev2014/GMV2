import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ValueProp } from "@/components/site/value-prop";
import { Partners } from "@/components/site/partners";
import { Services } from "@/components/site/services";
import { AppStore } from "@/components/site/app-store";
import { ManagerApps } from "@/components/site/manager-apps";
import { FAQ } from "@/components/site/faq";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { LanguageProvider, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  component: Home,
});

function HomeInner() {
  const { dir, lang } = useLang();
  return (
    <div dir={dir} lang={lang} className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <ValueProp />
        <Partners />
        <Services />
        <AppStore />
        <ManagerApps />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Home() {
  return (
    <LanguageProvider>
      <HomeInner />
    </LanguageProvider>
  );
}
