import { Check } from "lucide-react";
import { Container, Reveal } from "./primitives";
import { useLang } from "@/lib/i18n";

function MeterBar({ active, featured }: { active: boolean; featured?: boolean }) {
  return (
    <span
      className={`h-3.5 flex-1 rounded-sm ${
        active
          ? featured
            ? "bg-[#7C3AED]"
            : "bg-[#111827]"
          : "bg-gray-200"
      }`}
    />
  );
}

function Meter({ count, featured }: { count: number; featured?: boolean }) {
  return (
    <div className="mb-6 flex gap-[3px]">
      {Array.from({ length: 20 }, (_, i) => (
        <MeterBar key={i} active={i < count} featured={featured} />
      ))}
    </div>
  );
}

function SpecsBox({
  badge,
  badgeColor,
  branches,
  orders,
  commission,
}: {
  badge: string;
  badgeColor: string;
  branches: string;
  orders: string;
  commission: string;
}) {
  const { t } = useLang();
  return (
    <div className="mb-6 rounded-2xl bg-gray-50 p-4 border border-gray-100">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500">{t("pricing.specs.title")}</span>
        <span
          className="rounded-full px-2 py-0.5 text-[0.688rem] font-bold text-white"
          style={{ background: badgeColor }}
        >
          {badge}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{t("pricing.specs.branches")}</span>
          <span className="font-bold">{branches}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{t("pricing.specs.orders")}</span>
          <span className="font-bold">{orders}</span>
        </div>
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500">{t("pricing.specs.commission")}</span>
          <span className="font-bold">{commission}</span>
        </div>
      </div>
    </div>
  );
}

function FeatureList({ features }: { features: string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {features.map((f, i) => (
        <li key={i} className="flex items-center gap-2.5 text-sm">
          <Check className="h-4 w-4 shrink-0 text-[#10B981]" strokeWidth={2.5} />
          {f}
        </li>
      ))}
    </ul>
  );
}

interface PlanData {
  key: string;
  title: string;
  desc: string;
  price: string;
  badge: string;
  badgeColor: string;
  featured?: boolean;
  meterCount: number;
  itemsLabel: string;
  branches: string;
  orders: string;
  commission: string;
  specsBadge: string;
  specsBadgeColor: string;
  features: string[];
}

function PricingCard({ plan }: { plan: PlanData }) {
  const { t } = useLang();
  return (
    <div
      className={`relative flex flex-col rounded-3xl border bg-white p-8 transition-shadow duration-300 ${
        plan.featured
          ? "border-2 border-[#7C3AED] shadow-[0_10px_25px_-5px_rgba(124,58,237,0.15)] scale-[1.03] z-2"
          : "border-gray-200 shadow-sm hover:-translate-y-1 hover:shadow-lg"
      }`}
    >
      {plan.featured && (
        <div className="absolute inset-x-0 top-0 rounded-t-3xl bg-[#7C3AED] py-2 text-center text-sm font-bold text-white">
          {t("pricing.growth.banner")}
        </div>
      )}

      <div className={`flex items-center justify-between ${plan.featured ? "mt-3" : ""}`}>
        <h3 className="text-2xl font-bold">{plan.title}</h3>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
            plan.featured
              ? "bg-[#7C3AED] text-white"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {plan.badge}
        </span>
      </div>

      <p className="mt-2 text-sm text-gray-500">{plan.desc}</p>

      <div className="mt-3 flex items-end gap-1.5 flex-wrap">
        <span className="text-lg font-bold">{t("pricing.currency")}</span>
        <span className="text-[2.75rem] font-extrabold leading-none">{plan.price}</span>
        <span className="mb-1 text-sm text-gray-500">{t("pricing.period")}</span>
      </div>

      <p className={`mt-1.5 text-xs ${plan.featured ? "font-semibold text-[#7C3AED]" : "text-gray-500"}`}>
        {t("pricing.billing")}
      </p>

      <a
        href="/#contact"
        className="mt-6 block w-full rounded-full bg-[#111827] py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#1F2937]"
      >
        {t("pricing.cta")}
      </a>

      <p className="mt-2.5 text-center text-xs text-gray-500">{t("pricing.savings")}</p>

      <div className="my-7 border-t border-gray-200" />

      <div className="mb-3 flex items-center gap-1.5 text-sm font-semibold">
        <span>{plan.itemsLabel}</span>
        <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>

      <Meter count={plan.meterCount} featured={plan.featured} />

      <SpecsBox
        badge={plan.specsBadge}
        badgeColor={plan.specsBadgeColor}
        branches={plan.branches}
        orders={plan.orders}
        commission={plan.commission}
      />

      <FeatureList features={plan.features} />
    </div>
  );
}

export function Pricing() {
  const { t } = useLang();

  const plans: PlanData[] = [
    {
      key: "starter",
      title: "Starter",
      desc: t("pricing.starter.desc"),
      price: "3,000",
      badge: t("pricing.starter.badge"),
      badgeColor: "#374151",
      meterCount: 5,
      itemsLabel: t("pricing.starter.items"),
      branches: t("pricing.starter.branches"),
      orders: t("pricing.starter.orders"),
      commission: t("pricing.starter.commission"),
      specsBadge: t("pricing.starter.specsBadge"),
      specsBadgeColor: "#374151",
      features: [
        t("pricing.starter.f1"),
        t("pricing.starter.f2"),
        t("pricing.starter.f3"),
        t("pricing.starter.f4"),
        t("pricing.starter.f5"),
        t("pricing.starter.f6"),
        t("pricing.starter.f7"),
        t("pricing.starter.f8"),
        t("pricing.starter.f9"),
        t("pricing.starter.f10"),
        t("pricing.starter.f11"),
      ],
    },
    {
      key: "growth",
      title: "Growth",
      desc: t("pricing.growth.desc"),
      price: "5,450",
      badge: t("pricing.growth.badge"),
      badgeColor: "#7C3AED",
      featured: true,
      meterCount: 12,
      itemsLabel: t("pricing.growth.items"),
      branches: t("pricing.growth.branches"),
      orders: t("pricing.growth.orders"),
      commission: t("pricing.growth.commission"),
      specsBadge: t("pricing.growth.specsBadge"),
      specsBadgeColor: "#7C3AED",
      features: [
        t("pricing.growth.f1"),
        t("pricing.growth.f2"),
        t("pricing.growth.f3"),
        t("pricing.growth.f4"),
        t("pricing.growth.f5"),
        t("pricing.growth.f6"),
        t("pricing.growth.f7"),
        t("pricing.growth.f8"),
        t("pricing.growth.f9"),
        t("pricing.growth.f10"),
      ],
    },
    {
      key: "pro",
      title: "Pro",
      desc: t("pricing.pro.desc"),
      price: "8,000",
      badge: t("pricing.pro.badge"),
      badgeColor: "#374151",
      meterCount: 20,
      itemsLabel: t("pricing.pro.items"),
      branches: t("pricing.pro.branches"),
      orders: t("pricing.pro.orders"),
      commission: t("pricing.pro.commission"),
      specsBadge: t("pricing.pro.specsBadge"),
      specsBadgeColor: "#10B981",
      features: [
        t("pricing.pro.f1"),
        t("pricing.pro.f2"),
        t("pricing.pro.f3"),
        t("pricing.pro.f4"),
        t("pricing.pro.f5"),
        t("pricing.pro.f6"),
        t("pricing.pro.f7"),
        t("pricing.pro.f8"),
        t("pricing.pro.f9"),
        t("pricing.pro.f10"),
      ],
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-5xl">{t("pricing.title")}</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground md:text-base">
              {t("pricing.subtitle")}
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3 md:items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.key} delay={i * 0.08}>
              <PricingCard plan={p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
