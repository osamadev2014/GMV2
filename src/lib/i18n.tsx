import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Ctx = {
  lang: Lang;
  dir: "rtl" | "ltr";
  t: (k: string) => string;
  toggle: () => void;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<Ctx | null>(null);

// Flat dictionary. Keys are stable ids.
const dict: Record<Lang, Record<string, string>> = {
  ar: {
    // nav
    "nav.home": "الرئيسية",
    "nav.services": "خدماتنا",
    "nav.sectors": "القطاعات",
    "nav.pricing": "الأسعار",
    "nav.contact": "تواصل معنا",
    "nav.langSwitch": "EN",

    // hero
    "hero.badge": "بدون عمولات ولا تكاليف خفية",
    "hero.title1": "أطلق موقعك وتطبيقك الخاص",
    "hero.title2": "وزِد مبيعاتك",
    "hero.subtitle":
      "اكسب عملاء جدد، وزِد مبيعاتك المباشرة بخطوة واحدة مع شرح مبسّط للميزات وخيارات الربط مع الدفع والتوصيل ونقاط البيع",
    "hero.ctaPrimary": "تواصل معنا",
    "hero.ctaSecondary": "استكشف خدماتنا",

    // value prop
    "vp.desc":
      "GoMenu حل تقني يمكّن المتاجر والمطاعم من امتلاك موقع إلكتروني وتطبيق خاص بعلامتهم التجارية لاستقبال الطلبات مباشرة دون وسطاء، مع ربط متكامل بنقاط البيع، وببوابات الدفع الإلكتروني، وشركات التوصيل، وإدارة كاملة للطلبات من مكان واحد.",
    "vp.headline1": "نساعدك على زيادة",
    "vp.headline2": "أرباحك",
    "vp.delivery.title": "طلبات التوصيل",
    "vp.delivery.sub": "من الفرع إلى عنوان العميل",
    "vp.pickup.title": "طلبات الاستلام",
    "vp.pickup.sub": "اطلب واستلمه من الفرع مباشرة",
    "vp.drive.title": "الطلب من السيارة",
    "vp.drive.sub": "طلبك يوصلك إلى سيارتك",
    "vp.dinein.title": "الطلب المحلي",
    "vp.dinein.sub": "تصفّح، اطلب وادفع من الطاولة",

    // partners
    "partners.title1": "عملاء وثقوا في",
    "partners.desc1": "نفخر بثقة أكثر من",
    "partners.desc2": "علامة تجارية تستخدم نظام GoMenu",

    // services
    "services.title": "خدماتنا",
    "services.subtitle": "نسهّل إدارة أعمالك بحلول رقمية ذكية ومتكاملة",
    "services.viewAll": "عرض جميع الخدمات",
    "s1.title": "تطبيق وموقع خاص بمتجرك",
    "s1.body":
      "موقع إلكتروني وتطبيق خاص بعلامتك التجارية لتمكين متجرك أو مطعمك من استقبال الطلبات مباشرة دون وسطاء، مع تجربة استخدام سهلة واحترافية، وربط متكامل بنقاط البيع، وببوابات الدفع الإلكتروني، وشركات التوصيل، إضافة إلى أدوات تسويقية ذكية وإدارة كاملة للطلبات من مكان واحد.",
    "s2.title": "برامج الولاء والحلول التسويقية",
    "s2.body":
      "حافظ على عملائك الحاليين وشجّعهم على تكرار الشراء من خلال برنامج ولاء مرن يتيح لك تقديم الخصومات والنقاط بعدة طرق، إلى جانب حلول تسويقية متكاملة مثل كوبونات الخصم، الكاش باك، نظام النقاط، واستبدال المنتجات.",
    "s3.title": "ربط مباشر بشركات التوصيل",
    "s3.body":
      "وفرنا لك حلول الربط مع شركات التوصيل الأفضل في المنطقة بالإضافة إلى تطبيق خاص لإدارة السائقين إذا كان لديك أسطولك الخاص.",
    "s4.title": "ربط مباشر بنقاط البيع",
    "s4.body":
      "استقبل طلباتك عبر ربط مباشر مع نقاط البيع مثل فودكس ومرن وغيرها، لتصل جميع الطلبات تلقائيًا إلى نظام نقطة البيع دون أي تدخل يدوي.",

    // app store
    "apps.badge": "+40 تطبيق",
    "apps.title": "متجر تطبيقات GoMenu",
    "apps.desc1": "يوفر لك الكثير من الحلول",
    "apps.desc2": "اللي تعزز تجارتك",

    // manager apps
    "ma.driversTitle": "تطبيق السائقين",
    "ma.driversBody":
      "تطبيق ذكي يحوّل عمليات التوصيل إلى تجربة رقمية متكاملة، يتيح للسائقين استقبال الطلبات وتحديث حالتها خطوة بخطوة حتى التسليم.",
    "ma.managerTitle": "تطبيق الفروع",
    "ma.managerBody":
      "GoMenu مانجر هو الحل الذكي لإدارة الطلبات بفعالية، يتيح لك استقبال الطلبات، تحويل الحالات، والتحكم بالفروع والمنتجات من مكان واحد وبضغطة زر.",

    // faq
    "faq.title": "الأسئلة الشائعة",
    "faq.subtitle": "عندك سؤال؟ تواصل معنا، يسعدنا نسمع لك.",
    "faq.q1": "ما هي القطاعات التي يخدمها GoMenu؟",
    "faq.a1":
      "يخدم GoMenu قطاعات المطاعم والكافيهات والمتاجر الإلكترونية والصيدليات ومحلات الورود والهدايا والوجبات السريعة والسوبر ماركت والحلويات ومغاسل السيارات المتنقلة.",
    "faq.q2": "ما متطلبات إنشاء متجر على GoMenu؟",
    "faq.a2":
      "تحتاج إلى سجل تجاري ساري وحساب بنكي وشعار وقائمة منتجاتك، وفريقنا يتكفل بالباقي من إعداد وتصميم وربط.",
    "faq.q3": "هل يوفر GoMenu خدماته في الدولة التي أقيم بها؟",
    "faq.a3":
      "نقدم خدماتنا في المملكة العربية السعودية ومصر ودول الخليج العربي، مع خطط توسع مستمرة.",
    "faq.q4": "هل توجد عمولات على الطلبات؟",
    "faq.a4": "لا. GoMenu بدون عمولات على الطلبات ولا تكاليف خفية، تدفع اشتراك شهري أو سنوي فقط.",
    "faq.q5": "كيف يمكنني الاشتراك في خدمات GoMenu؟",
    "faq.a5": "تواصل معنا عبر النموذج في الأسفل وسيقوم فريقنا بالتواصل معك خلال 24 ساعة لعرض الخطط والبدء.",

    // pricing page
    "pricing.title": "اختر الباقة المناسبة لمطعمك",
    "pricing.subtitle": "نوفر خططاً مرنة تتناسب مع حجم عملك، من المطاعم الصغيرة إلى السلاسل الكبيرة",
    "pricing.currency": "ر.س",
    "pricing.period": "/مرة واحدة",
    "pricing.billing": "دفعة واحدة — بدون اشتراك شهري",
    "pricing.cta": "ابدأ الآن",
    "pricing.savings": "ادفع مرة واحدة واستمتع بالخدمة كاملاً",
    "pricing.specs.title": "القنوات والحدود",
    "pricing.specs.branches": "عدد الفروع",
    "pricing.specs.orders": "الطلبات الشهرية",
    "pricing.specs.commission": "عمولة المبيعات",

    // starter
    "pricing.starter.desc": "الأساسيات الذكية لبدايتك الرقمية",
    "pricing.starter.badge": "عرض محدود",
    "pricing.starter.items": "حتى 100 عنصر في قائمة الطعام",
    "pricing.starter.branches": "فرع واحد",
    "pricing.starter.orders": "100 طلب",
    "pricing.starter.commission": "0%",
    "pricing.starter.specsBadge": "للبداية",
    "pricing.starter.f1": "عدد لا نهائي من العناصر",
    "pricing.starter.f2": "عدد لا نهائي من الأقسام",
    "pricing.starter.f3": "روابط التواصل الاجتماعي",
    "pricing.starter.f4": "نبذة عن المطعم وأوقات العمل",
    "pricing.starter.f5": "صور الغلاف والعناصر",
    "pricing.starter.f6": "نظام الطلبات عبر المنيو",
    "pricing.starter.f7": "التقييمات من العملاء",
    "pricing.starter.f8": "إدارة الطاولات الأساسية",
    "pricing.starter.f9": "تحسين ظهورك في Google",
    "pricing.starter.f10": "متوافق مع هيئة الغذاء والدواء",
    "pricing.starter.f11": "نوفّر لك طباعة وملصقات QR Code",

    // growth
    "pricing.growth.desc": "للتوسع وبناء ولاء العملاء",
    "pricing.growth.badge": "الأوفر",
    "pricing.growth.banner": "الباقة الأكثر شعبية",
    "pricing.growth.items": "حتى 500 عنصر في قائمة الطعام",
    "pricing.growth.branches": "حتى ٣ فروع",
    "pricing.growth.orders": "1,000 طلب",
    "pricing.growth.commission": "0%",
    "pricing.growth.specsBadge": "أفضل خيار",
    "pricing.growth.f1": "كل مميزات Starter",
    "pricing.growth.f2": "إحصائيات متقدمة وتحليلات",
    "pricing.growth.f3": "تعدد طرق العرض (Grid / List / Cards)",
    "pricing.growth.f4": "دعم اللغتين العربية والإنجليزية",
    "pricing.growth.f5": "نظام الحجز المسبق",
    "pricing.growth.f6": "العروض الترويجية",
    "pricing.growth.f7": "إدارة طاولات متقدمة",
    "pricing.growth.f8": "دعم حتى 10 مشرفين",
    "pricing.growth.f9": "نظام إدارة محتوى متقدم (CMS)",
    "pricing.growth.f10": "نوفّر لك طباعة وملصقات QR Code",

    // pro
    "pricing.pro.desc": "نظام إدارة كامل للمطاعم والسلاسل",
    "pricing.pro.badge": "للشركات",
    "pricing.pro.items": "عناصر قائمة غير محدودة",
    "pricing.pro.branches": "فروع غير محدودة",
    "pricing.pro.orders": "بلا حدود",
    "pricing.pro.commission": "0%",
    "pricing.pro.specsBadge": "الأشمل",
    "pricing.pro.f1": "كل مميزات Growth",
    "pricing.pro.f2": "نظام طلبات متكامل",
    "pricing.pro.f3": "لوحة تحكم متعددة الفروع",
    "pricing.pro.f4": "تحليلات عميقة (الإيرادات والاحتفاظ)",
    "pricing.pro.f5": "صلاحيات متعددة للمستخدمين",
    "pricing.pro.f6": "حملات تسويقية داخل المنيو",
    "pricing.pro.f7": "تكامل مع أنظمة خارجية (API / POS)",
    "pricing.pro.f8": "تخصيص كامل (White-label)",
    "pricing.pro.f9": "دعم فني أولوية على مدار الساعة",
    "pricing.pro.f10": "نوفّر لك طباعة وملصقات QR Code",

    // contact
    "contact.title": "جاهز لإطلاق قناة الطلب الخاصة بك؟",
    "contact.subtitle": "ابدأ الآن وانضم لأكثر من +2,500 علامة تجارية تستخدم نظام GoMenu",
    "contact.f1": "اسم النشاط التجاري",
    "contact.f1p": "اسم المطعم أو المتجر",
    "contact.f2": "البريد الإلكتروني",
    "contact.f3": "اسم الشخص المسؤول",
    "contact.f3p": "الاسم الكامل",
    "contact.f4": "رقم الهاتف",
    "contact.submit": "تواصل معنا الآن",

    // footer
    "footer.desc": "GoMenu حل تقني للبيع المباشر عبر موقع وتطبيق خاص بعلامتك التجارية، بدون وسطاء.",
    "footer.quick": "روابط سريعة",
    "footer.sectors": "القطاعات",
    "footer.follow": "تابعنا",
    "footer.regions": "نقدم خدماتنا في",
    "footer.rights": "© 2026 GoMenu. جميع الحقوق محفوظة. — الشروط والأحكام وسياسة الخصوصية",
    "sec.cafes": "الكافيهات والفاين دايننغ",
    "sec.fastfood": "مطاعم الوجبات السريعة",
    "sec.catering": "مطاعم الولائم والمناسبات",
    "sec.coffee": "المقاهي",
    "sec.flowers": "محلات الورود والهدايا",
    "sec.pharmacy": "الصيدليات",
    "sec.supermarket": "السوبر ماركت",
    "sec.carwash": "مغاسل السيارات المتنقلة",
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.sectors": "Sectors",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.langSwitch": "AR",

    "hero.badge": "No commissions, no hidden fees",
    "hero.title1": "Launch your own website and app",
    "hero.title2": "and grow your sales",
    "hero.subtitle":
      "Win new customers and grow your direct sales in one step, with simple feature explanations and integrations for payment, delivery, and POS.",
    "hero.ctaPrimary": "Contact us",
    "hero.ctaSecondary": "Explore services",

    "vp.desc":
      "GoMenu is a tech solution that empowers stores and restaurants to own a website and app under their brand, taking orders directly with no middlemen — fully integrated with POS, online payment gateways, and delivery companies, with full order management from a single place.",
    "vp.headline1": "We help you grow your",
    "vp.headline2": "profits",
    "vp.delivery.title": "Delivery orders",
    "vp.delivery.sub": "From the branch to the customer's address",
    "vp.pickup.title": "Pickup orders",
    "vp.pickup.sub": "Order and pick it up from the branch",
    "vp.drive.title": "Curbside order",
    "vp.drive.sub": "Your order delivered to your car",
    "vp.dinein.title": "Dine-in ordering",
    "vp.dinein.sub": "Browse, order and pay from the table",

    "partners.title1": "Brands that trust",
    "partners.desc1": "We're proud to be trusted by more than",
    "partners.desc2": "brands using the GoMenu system",

    "services.title": "Our services",
    "services.subtitle": "We simplify running your business with smart, integrated digital solutions",
    "services.viewAll": "View all services",
    "s1.title": "Your own app & website",
    "s1.body":
      "A website and app for your brand so your store or restaurant can take orders directly without middlemen, with a smooth and professional experience and full integration with POS, payment gateways and delivery companies — plus smart marketing tools and complete order management from one place.",
    "s2.title": "Loyalty & marketing solutions",
    "s2.body":
      "Retain your customers and encourage repeat purchases with a flexible loyalty program offering discounts and points in multiple ways, along with integrated marketing solutions like coupons, cashback, points and product redemption.",
    "s3.title": "Direct delivery integrations",
    "s3.body":
      "We provide integrations with the best delivery companies in the region, plus a dedicated driver app if you run your own fleet.",
    "s4.title": "Direct POS integrations",
    "s4.body":
      "Take orders via direct integration with POS systems like Foodics, Marn and others so every order lands automatically in your POS with no manual work.",

    "apps.badge": "+40 apps",
    "apps.title": "GoMenu App Store",
    "apps.desc1": "Plenty of solutions",
    "apps.desc2": "to grow your business",

    "ma.driversTitle": "Drivers app",
    "ma.driversBody":
      "A smart app that turns delivery into a complete digital experience — drivers accept orders and update their status step by step until delivery.",
    "ma.managerTitle": "Branches app",
    "ma.managerBody":
      "GoMenu Manager is the smart way to handle orders — accept orders, switch statuses, and control branches and products from one place in a single tap.",

    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Have a question? Reach out, we'd love to hear from you.",
    "faq.q1": "Which sectors does GoMenu serve?",
    "faq.a1":
      "GoMenu serves restaurants, cafes, e-commerce, pharmacies, flower & gift shops, fast food, supermarkets, sweets shops and mobile car washes.",
    "faq.q2": "What do I need to create a store on GoMenu?",
    "faq.a2":
      "You need a valid commercial registration, a bank account, a logo and your product list — our team takes care of the rest: setup, design and integrations.",
    "faq.q3": "Does GoMenu operate in my country?",
    "faq.a3": "We serve Saudi Arabia, Egypt and the GCC, with ongoing expansion plans.",
    "faq.q4": "Are there any commissions on orders?",
    "faq.a4": "No. GoMenu takes no commissions and has no hidden fees — you pay a monthly or yearly subscription only.",
    "faq.q5": "How do I subscribe to GoMenu?",
    "faq.a5": "Contact us using the form below and our team will reach out within 24 hours to walk you through the plans and get you started.",

    // pricing page
    "pricing.title": "Choose the right plan for your restaurant",
    "pricing.subtitle": "We offer flexible plans to fit your business, from small restaurants to large chains",
    "pricing.currency": "SAR",
    "pricing.period": "/one-time",
    "pricing.billing": "One-time payment — no monthly subscription",
    "pricing.cta": "Get started",
    "pricing.savings": "Pay once and enjoy the full service",
    "pricing.specs.title": "Channels & limits",
    "pricing.specs.branches": "Branches",
    "pricing.specs.orders": "Monthly orders",
    "pricing.specs.commission": "Sales commission",

    "pricing.starter.desc": "Smart essentials to kickstart your digital presence",
    "pricing.starter.badge": "Limited offer",
    "pricing.starter.items": "Up to 100 menu items",
    "pricing.starter.branches": "1 branch",
    "pricing.starter.orders": "100 orders",
    "pricing.starter.commission": "0%",
    "pricing.starter.specsBadge": "Starter",
    "pricing.starter.f1": "Unlimited menu items",
    "pricing.starter.f2": "Unlimited sections",
    "pricing.starter.f3": "Social media links",
    "pricing.starter.f4": "Restaurant info & hours",
    "pricing.starter.f5": "Cover & item photos",
    "pricing.starter.f6": "Order system via menu",
    "pricing.starter.f7": "Customer reviews",
    "pricing.starter.f8": "Basic table management",
    "pricing.starter.f9": "Google SEO optimization",
    "pricing.starter.f10": "Saudi FDA compliant",
    "pricing.starter.f11": "QR code printing & stickers included",

    "pricing.growth.desc": "For scaling and building customer loyalty",
    "pricing.growth.badge": "Best value",
    "pricing.growth.banner": "Most popular plan",
    "pricing.growth.items": "Up to 500 menu items",
    "pricing.growth.branches": "Up to 3 branches",
    "pricing.growth.orders": "1,000 orders",
    "pricing.growth.commission": "0%",
    "pricing.growth.specsBadge": "Best choice",
    "pricing.growth.f1": "All Starter features",
    "pricing.growth.f2": "Advanced analytics & reports",
    "pricing.growth.f3": "Multiple view modes (Grid / List / Cards)",
    "pricing.growth.f4": "Arabic & English bilingual",
    "pricing.growth.f5": "Reservation system",
    "pricing.growth.f6": "Promotions & offers",
    "pricing.growth.f7": "Advanced table management",
    "pricing.growth.f8": "Up to 10 admins",
    "pricing.growth.f9": "Advanced CMS",
    "pricing.growth.f10": "QR code printing & stickers included",

    "pricing.pro.desc": "Full management system for restaurants and chains",
    "pricing.pro.badge": "For enterprises",
    "pricing.pro.items": "Unlimited menu items",
    "pricing.pro.branches": "Unlimited branches",
    "pricing.pro.orders": "Unlimited orders",
    "pricing.pro.commission": "0%",
    "pricing.pro.specsBadge": "Most comprehensive",
    "pricing.pro.f1": "All Growth features",
    "pricing.pro.f2": "Full order management system",
    "pricing.pro.f3": "Multi-branch dashboard",
    "pricing.pro.f4": "Deep analytics (revenue & retention)",
    "pricing.pro.f5": "Multi-user permissions",
    "pricing.pro.f6": "In-menu marketing campaigns",
    "pricing.pro.f7": "External API / POS integration",
    "pricing.pro.f8": "Full white-label customization",
    "pricing.pro.f9": "24/7 priority support",
    "pricing.pro.f10": "QR code printing & stickers included",

    "contact.title": "Ready to launch your own ordering channel?",
    "contact.subtitle": "Get started and join more than +2,500 brands using GoMenu",
    "contact.f1": "Business name",
    "contact.f1p": "Restaurant or store name",
    "contact.f2": "Email",
    "contact.f3": "Contact person",
    "contact.f3p": "Full name",
    "contact.f4": "Phone number",
    "contact.submit": "Contact us now",

    "footer.desc": "GoMenu is a tech solution for direct sales through your own branded website and app — no middlemen.",
    "footer.quick": "Quick links",
    "footer.sectors": "Sectors",
    "footer.follow": "Follow us",
    "footer.regions": "We serve",
    "footer.rights": "© 2026 GoMenu. All rights reserved. — Terms & Privacy Policy",
    "sec.cafes": "Cafes & fine dining",
    "sec.fastfood": "Fast food restaurants",
    "sec.catering": "Catering & events",
    "sec.coffee": "Coffee shops",
    "sec.flowers": "Flowers & gifts",
    "sec.pharmacy": "Pharmacies",
    "sec.supermarket": "Supermarkets",
    "sec.carwash": "Mobile car washes",
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ar");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("gm-lang") as Lang | null;
      if (saved === "ar" || saved === "en") setLangState(saved);
    } catch {}
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
      document.documentElement.dir = dir;
    }
  }, [lang, dir]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("gm-lang", l);
    } catch {}
  };

  const t = (k: string) => dict[lang][k] ?? dict.ar[k] ?? k;
  const toggle = () => setLang(lang === "ar" ? "en" : "ar");

  return (
    <LanguageContext.Provider value={{ lang, dir, t, toggle, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
