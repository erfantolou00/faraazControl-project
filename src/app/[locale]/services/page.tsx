import ServicesPageClient from "./ServicesPageClient";

interface ServicesPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: ServicesPageProps) {
  const { locale } = await params;
  const data = locale === "fa" ? servicesFa : servicesEn;

  return <ServicesPageClient data={data} locale={locale} />;
}

const servicesFa = {
  hero: {
    titleBefore: "خدمات",
    titleHighlight: "تخصصی",
    titleAfter: "ما",
    subtitle:
      "از طراحی تا پشتیبانی — یک راه‌حل کامل برای نیازهای برق و اتوماسیون صنعتی شما",
  },
  serviceLabel: "خدمت تخصصی",
  ctaLink: "درخواست مشاوره رایگان",
  services: [
    {
      icon: "CircuitBoard",
      title: "طراحی تابلوهای برق صنعتی",
      desc: "طراحی دقیق MV/LV با نرم‌افزارهای EPLAN، AutoCAD Electrical و ETAP مطابق با استاندارد IEC 61439",
      image: "/services/design.jpg",
      features: [
        "تحلیل بار و اتصال کوتاه",
        "انتخاب بهینه تجهیزات",
        "طراحی 3D و شماتیک کامل",
      ],
    },
    {
      icon: "Factory",
      title: "ساخت و مونتاژ حرفه‌ای",
      desc: "ساخت تابلوهای برق در کارگاه مجهز با دستگاه‌های CNC، برش لیزر و تست پیشرفته",
      image: "/services/manufacturing.jpg",
      features: [
        "استفاده از برندهای معتبر جهانی",
        "مونتاژ دقیق و استاندارد",
        "کنترل کیفیت چندمرحله‌ای",
      ],
    },
    {
      icon: "Cpu",
      title: "اتوماسیون و کنترل صنعتی",
      desc: "پیاده‌سازی سیستم‌های PLC، HMI، SCADA، DCS و راهکارهای Industry 4.0",
      image: "/services/automation.webp",
      features: [
        "Siemens, Schneider, ABB",
        "پروگرام‌نویسی پیشرفته",
        "یکپارچه‌سازی با سیستم‌های موجود",
      ],
    },
    {
      icon: "Wrench",
      title: "نصب و راه‌اندازی در محل",
      desc: "تیم فنی مجرب برای نصب، راه‌اندازی و تست نهایی در سراسر کشور",
      image: "/services/installation.jpg",
      features: [
        "نصب اصولی و ایمن",
        "راه‌اندازی مرحله به مرحله",
        "آموزش اپراتورها",
      ],
    },
    {
      icon: "Shield",
      title: "تست کارخانه‌ای (FAT) و تحویل",
      desc: "تست کامل عملکرد، ایمنی و کیفیت قبل از ارسال با حضور مشتری",
      image: "/services/testing.webp",
      features: [
        "تست عایق، اتصال کوتاه و عملکرد",
        "گزارش جامع و مستند",
        "تایید نهایی مشتری",
      ],
    },
    {
      icon: "Settings",
      title: "پشتیبانی و نگهداری ۲۴/۷",
      desc: "خدمات پس از فروش، تعمیرات، به‌روزرسانی و قرارداد نگهداری سالیانه",
      image: "/services/support.png",
      features: [
        "پشتیبانی فنی تلفنی و حضوری",
        "قطعات یدکی اصلی",
        "قرارداد SLA",
      ],
    },
  ],
  finalCta: {
    title: "آماده‌اید پروژه‌تان را شروع کنیم؟",
    description:
      "با تیم متخصص فراز کنترل، بهترین راه‌حل‌های برق و اتوماسیون صنعتی را دریافت کنید",
    primary: "شروع همکاری",
    secondary: "مشاهده پروژه‌های انجام شده",
  },
};

const servicesEn = {
  hero: {
    titleBefore: "Our",
    titleHighlight: "specialized",
    titleAfter: "services",
    subtitle:
      "From design to support — a complete solution for your industrial power and automation needs",
  },
  serviceLabel: "Specialized service",
  ctaLink: "Request a free consultation",
  services: [
    {
      icon: "CircuitBoard",
      title: "Industrial panel design",
      desc: "Precise MV/LV design with EPLAN, AutoCAD Electrical, and ETAP to IEC 61439",
      image: "/services/design.jpg",
      features: [
        "Load and short-circuit analysis",
        "Optimized equipment selection",
        "Full 3D design and schematics",
      ],
    },
    {
      icon: "Factory",
      title: "Professional manufacturing & assembly",
      desc: "Panel production in an equipped workshop with CNC, laser cutting, and advanced testing",
      image: "/services/manufacturing.jpg",
      features: [
        "Global trusted brands",
        "Precise standard assembly",
        "Multi-stage quality control",
      ],
    },
    {
      icon: "Cpu",
      title: "Industrial automation & control",
      desc: "PLC, HMI, SCADA, DCS systems and Industry 4.0 solutions",
      image: "/services/automation.webp",
      features: [
        "Siemens, Schneider, ABB",
        "Advanced programming",
        "Integration with existing systems",
      ],
    },
    {
      icon: "Wrench",
      title: "On-site installation & commissioning",
      desc: "Experienced technical team for installation, startup, and final testing nationwide",
      image: "/services/installation.jpg",
      features: [
        "Safe, standards-based installation",
        "Step-by-step commissioning",
        "Operator training",
      ],
    },
    {
      icon: "Shield",
      title: "Factory Acceptance Test (FAT) & delivery",
      desc: "Full functional, safety, and quality testing before shipment with client presence",
      image: "/services/testing.webp",
      features: [
        "Insulation, short-circuit, and functional tests",
        "Comprehensive documented reports",
        "Final client approval",
      ],
    },
    {
      icon: "Settings",
      title: "24/7 support & maintenance",
      desc: "After-sales service, repairs, upgrades, and annual maintenance contracts",
      image: "/services/support.png",
      features: [
        "Phone and on-site technical support",
        "Genuine spare parts",
        "SLA contracts",
      ],
    },
  ],
  finalCta: {
    title: "Ready to start your project?",
    description:
      "Get the best industrial power and automation solutions with the Faraz Control specialist team",
    primary: "Start collaboration",
    secondary: "View completed projects",
  },
};

export type ServicesPageData = typeof servicesFa;