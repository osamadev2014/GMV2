import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Pricing as PricingSection } from "@/components/site/pricing";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { LanguageProvider, useLang } from "@/lib/i18n";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
});

function PricingPageInner() {
  const { dir, lang } = useLang();
  return (
    <div dir={dir} lang={lang} className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-24">
        <PricingSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function PricingPage() {
  return (
    <LanguageProvider>
      <PricingPageInner />
    </LanguageProvider>
  );
}
