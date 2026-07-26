import ProjectsPageClient from "./ProjectsPageClient";

interface ProjectsPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale } = await params;
  const data = locale === "fa" ? projectsFa : projectsEn;

  return <ProjectsPageClient data={data} locale={locale} />;
}

const projectsFa = {
  hero: {
    titleBefore: "پروژه‌های",
    titleHighlight: "انجام‌شده",
    subtitle:
      "بیش از ۵۰۰ پروژه موفق در صنایع کلیدی ایران — از نفت و گاز تا فولاد و نیروگاه",
  },
  viewDetails: "مشاهده جزئیات",
  projects: [
    {
      id: 1,
      title: "تابلوهای MV/LV پالایشگاه بندرعباس",
      client: "شرکت ملی نفت ایران",
      year: "۱۴۰۳",
      location: "بندرعباس",
      category: "نفت و گاز",
      power: "۳۲ مگاوات",
      description:
        "طراحی، ساخت و راه‌اندازی کامل سیستم توزیع برق اصلی پالایشگاه با استاندارد IEC 61439-1&2",
      image: "/projects/refinery.jpg",
      tags: ["MV Switchgear", "LV Panel", "اتوماسیون", "SCADA"],
    },
    {
      id: 2,
      title: "اتوماسیون خط تولید فولاد مبارکه",
      client: "فولاد مبارکه اصفهان",
      year: "۱۴۰۲",
      location: "اصفهان",
      category: "فولاد",
      power: "۱۸ مگاوات",
      description:
        "پیاده‌سازی سیستم کنترل یکپارچه با Siemens S7-1500 و WinCC Unified",
      image: "/projects/steel.png",
      tags: ["PLC", "HMI", "Drive System", "Industry 4.0"],
    },
    {
      id: 3,
      title: "تابلوهای برق نیروگاه سیکل ترکیبی",
      client: "نیروگاه دماوند",
      year: "۱۴۰۳",
      location: "تهران",
      category: "نیروگاه",
      power: "۱۲۰ مگاوات",
      description:
        "ساخت و نصب تابلوهای اصلی ۴۰۰V و سیستم حفاظت و کنترل",
      image: "/projects/powerplant.jpg",
      tags: ["Generator Panel", "Sync Panel", "Protection Relay", "FAT"],
    },
    {
      id: 4,
      title: "پروژه پتروشیمی بندر امام",
      client: "پتروشیمی بندر امام",
      year: "۱۴۰۲",
      location: "ماهشهر",
      category: "پتروشیمی",
      power: "۴۵ مگاوات",
      description:
        "تأمین و راه‌اندازی تابلوهای MCC و کنترل موتورهای ATEX",
      image: "/projects/petrochemical.jpg",
      tags: ["MCC", "ATEX", "VFD", "Explosion Proof"],
    },
    {
      id: 5,
      title: "سیستم مانیتورینگ کارخانه سیمان تهران",
      client: "سیمان تهران",
      year: "۱۴۰۳",
      location: "تهران",
      category: "سیمان",
      description:
        "طراحی و پیاده‌سازی SCADA مرکزی با بیش از ۱۵۰۰۰ تگ",
      image: "/projects/cement.jpg",
      tags: ["SCADA", "Historian", "Redundancy", "Reporting"],
    },
    {
      id: 6,
      title: "تابلوهای اضطراری بیمارستان میلاد",
      client: "بیمارستان میلاد",
      year: "۱۴۰۲",
      location: "تهران",
      category: "بهداشت و درمان",
      description:
        "سیستم UPS و تابلوهای ATS با قابلیت تغییر خودکار در کمتر از ۱۰ میلی‌ثانیه",
      image: "/projects/hospital.jpg",
      tags: ["UPS Panel", "ATS", "Critical Load", "Hospital Grade"],
    },
  ],
  cta: {
    title: "پروژه شما می‌تواند بعدی باشد",
    description:
      "آماده‌ایم تا چالش‌های برق و اتوماسیون صنعتی شما را به موفقیت تبدیل کنیم",
    primary: "درخواست مشاوره فنی",
    secondary: "دانلود کاتالوگ پروژه‌ها (PDF)",
  },
};

const projectsEn = {
  hero: {
    titleBefore: "Completed",
    titleHighlight: "projects",
    subtitle:
      "More than 500 successful projects across Iran’s key industries — from oil & gas to steel and power plants",
  },
  viewDetails: "View details",
  projects: [
    {
      id: 1,
      title: "Bandar Abbas Refinery MV/LV panels",
      client: "National Iranian Oil Company",
      year: "2024",
      location: "Bandar Abbas",
      category: "Oil & Gas",
      power: "32 MW",
      description:
        "Full design, manufacturing, and commissioning of the main power distribution system to IEC 61439-1&2",
      image: "/projects/refinery.jpg",
      tags: ["MV Switchgear", "LV Panel", "Automation", "SCADA"],
    },
    {
      id: 2,
      title: "Mobarakeh Steel production line automation",
      client: "Mobarakeh Steel Company",
      year: "2023",
      location: "Isfahan",
      category: "Steel",
      power: "18 MW",
      description:
        "Integrated control system with Siemens S7-1500 and WinCC Unified",
      image: "/projects/steel.png",
      tags: ["PLC", "HMI", "Drive System", "Industry 4.0"],
    },
    {
      id: 3,
      title: "Combined-cycle power plant panels",
      client: "Damavand Power Plant",
      year: "2024",
      location: "Tehran",
      category: "Power Plant",
      power: "120 MW",
      description:
        "Manufacturing and installation of main 400V panels and protection & control systems",
      image: "/projects/powerplant.jpg",
      tags: ["Generator Panel", "Sync Panel", "Protection Relay", "FAT"],
    },
    {
      id: 4,
      title: "Bandar Imam Petrochemical project",
      client: "Bandar Imam Petrochemical",
      year: "2023",
      location: "Mahshahr",
      category: "Petrochemical",
      power: "45 MW",
      description:
        "Supply and commissioning of MCC panels and ATEX motor control",
      image: "/projects/petrochemical.jpg",
      tags: ["MCC", "ATEX", "VFD", "Explosion Proof"],
    },
    {
      id: 5,
      title: "Tehran Cement plant monitoring system",
      client: "Tehran Cement",
      year: "2024",
      location: "Tehran",
      category: "Cement",
      description:
        "Central SCADA design and implementation with more than 15,000 tags",
      image: "/projects/cement.jpg",
      tags: ["SCADA", "Historian", "Redundancy", "Reporting"],
    },
    {
      id: 6,
      title: "Milad Hospital emergency panels",
      client: "Milad Hospital",
      year: "2023",
      location: "Tehran",
      category: "Healthcare",
      description:
        "UPS system and ATS panels with automatic transfer in under 10 ms",
      image: "/projects/hospital.jpg",
      tags: ["UPS Panel", "ATS", "Critical Load", "Hospital Grade"],
    },
  ],
  cta: {
    title: "Your project can be next",
    description:
      "We are ready to turn your industrial power and automation challenges into success",
    primary: "Request technical consultation",
    secondary: "Download project catalog (PDF)",
  },
};

export type ProjectsPageData = typeof projectsFa;