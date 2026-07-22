import HeroSection from "@/components/layout/HeroSection";
import AboutSection, { type Feature } from "@/components/layout/AboutSection";
import ServicesSection, { type IconName as ServiceIconName } from "@/components/layout/ServiceSection";
import TrustSection from "@/components/layout/TrustSection";
import ProcessSection from "@/components/layout/ProcessSection";
// import ProjectsPreview from "@/components/layout/ProjectsPreview";
import CtaSection from "@/components/layout/CtaSection";

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const texts = locale === "fa" ? homeFa : homeEn;

  return (
    <>
      <HeroSection data={texts.heroSection} locale={locale} />
      <AboutSection data={texts.aboutSection as { title?: string; description?: string; features?: Feature[] }} locale={locale} />
      <ServicesSection data={texts.servicesSection as { title: string; services: Array<{ title?: string; description?: string; icon: ServiceIconName }> }} locale={locale} />
      <TrustSection data={texts.trustSection} locale={locale} />
      <ProcessSection data={texts.processSection} locale={locale} />
      {/* <ProjectsPreview data={texts.projectsPreview} locale={locale} /> */}
      <CtaSection data={texts.ctaSection} locale={locale} />
    </>
  );
}

const homeFa = {
  heroSection: {
    title: "فراز کنترل، سازنده تابلوهای برق صنعتی",
    subtitle:
      "طراحی، ساخت، تست و راه‌اندازی تابلوهای MV/LV، MCC، PLC و سیستم‌های کنترل برای کارخانه‌ها، پروژه‌های عمرانی و صنایع حساس.",
    ctaPrimary: "درخواست مشاوره فنی",
    ctaSecondary: "مشاهده پروژه‌ها",
  },
  aboutSection: {
    title: "مهندسی قابل اتکا، از نقشه تا تحویل",
    description:
      "در خرید تابلو برق، مشتری فقط یک جعبه فلزی نمی‌خرد؛ ریسک توقف خط تولید، ایمنی نفرات و پایداری انرژی را به یک تیم می‌سپارد. فراز کنترل همین نقطه حساس را با طراحی دقیق، مونتاژ استاندارد و تست مستند پوشش می‌دهد.",
    features: [
      {
        icon: "Shield",
        title: "ایمنی و استاندارد",
        description: "طراحی و مونتاژ بر پایه الزامات IEC، کنترل کیفیت مرحله‌ای و مستندات قابل ارائه به کارفرما.",
      },
      {
        icon: "Gauge",
        title: "تحویل قابل پیش‌بینی",
        description: "زمان‌بندی شفاف، انتخاب قطعات متناسب با بار پروژه و کنترل تغییرات قبل از ورود به ساخت.",
      },
      {
        icon: "Cpu",
        title: "کنترل و اتوماسیون",
        description: "یکپارچه‌سازی PLC، HMI، SCADA و مانیتورینگ برای کاهش خطای اپراتوری و افزایش بهره‌وری.",
      },
    ],
  },
  servicesSection: {
    title: "خدماتی که تصمیم خرید را ساده می‌کند",
    services: [
      {
        title: "طراحی تابلوهای MV/LV و MCC",
        description: "نقشه، جانمایی، سایزبندی باس‌بار، انتخاب کلیدها و آماده‌سازی مدارک مهندسی برای پروژه‌های صنعتی.",
        icon: "CircuitBoard",
      },
      {
        title: "ساخت، مونتاژ و تست FAT",
        description: "ساخت بدنه، مونتاژ تجهیزات، وایرینگ، لیبلینگ و تست عملکردی قبل از ارسال به سایت.",
        icon: "Factory",
      },
      {
        title: "نصب، راه‌اندازی و پشتیبانی",
        description: "حضور تیم فنی در سایت، commissioning، آموزش بهره‌بردار و پشتیبانی پس از تحویل.",
        icon: "Wrench",
      },
    ],
  },
  trustSection: {
    eyebrow: "برای پروژه‌های حساس",
    title: "چرا کارفرماهای صنعتی به ما اعتماد می‌کنند؟",
    items: [
      ["IEC 61439", "طراحی و کنترل کیفیت مطابق الزامات تابلوهای فشار ضعیف"],
      ["FAT مستند", "گزارش تست، چک‌لیست تحویل و کاهش ریسک دوباره‌کاری در سایت"],
      ["قطعات معتبر", "انتخاب برند و سطح حفاظتی بر اساس بودجه، زمان و حساسیت پروژه"],
      ["پشتیبانی فنی", "پاسخ‌گویی بعد از نصب برای بهره‌برداری پایدار و سریع‌تر"],
    ],
  },
  processSection: {
    title: "مسیر همکاری شفاف است",
    steps: [
      ["01", "نیازسنجی", "بررسی بارها، محیط نصب، استانداردها و محدودیت‌های پروژه."],
      ["02", "طراحی و پیشنهاد", "ارائه نقشه، لیست تجهیزات، زمان‌بندی و پیشنهاد فنی-مالی."],
      ["03", "ساخت و تست", "مونتاژ کنترل‌شده، تست FAT، رفع ایرادات و آماده‌سازی مدارک تحویل."],
      ["04", "نصب و پشتیبانی", "راه‌اندازی در سایت، آموزش تیم بهره‌بردار و پشتیبانی پس از تحویل."],
    ],
  },
  projectsPreview: {
    title: "نمونه حوزه‌های اجرا",
    description: "تمرکز ما روی پروژه‌هایی است که دقت مهندسی، ایمنی و زمان تحویل در آن‌ها حیاتی است.",
    projects: [
      ["پالایشگاه و پتروشیمی", "تابلوهای MCC، کنترل موتور و سیستم‌های حفاظتی", "/projects/refinery.jpg"],
      ["نیروگاه و انرژی", "تابلوهای توزیع، سنکرون و کنترل ژنراتور", "/projects/powerplant.jpg"],
      ["کارخانه‌های تولیدی", "اتوماسیون خط تولید، درایو و مانیتورینگ صنعتی", "/projects/steel.png"],
    ],
  },
  ctaSection: {
    title: "برای پروژه بعدی، از طراحی تابلو شروع کنیم",
    description: "مشخصات اولیه پروژه را بفرستید تا مسیر فنی، زمان ساخت و گزینه‌های اقتصادی را شفاف کنیم.",
    primary: "شروع مشاوره",
    secondary: "تماس مستقیم",
  },
};

const homeEn = {
  heroSection: {
    title: "Faraz Control builds industrial electrical panels",
    subtitle:
      "Design, manufacturing, testing, and commissioning of MV/LV panels, MCCs, PLC cabinets, and control systems for demanding industrial sites.",
    ctaPrimary: "Request technical consultation",
    ctaSecondary: "View projects",
  },
  aboutSection: {
    title: "Reliable engineering, from drawing to handover",
    description:
      "Buying an electrical panel is really buying uptime, operator safety, and power reliability. Faraz Control supports that decision with precise design, standard assembly, and documented testing.",
    features: [
      {
        icon: "Shield",
        title: "Safety and standards",
        description: "Design and assembly aligned with IEC requirements, staged quality control, and client-ready documentation.",
      },
      {
        icon: "Gauge",
        title: "Predictable delivery",
        description: "Clear timelines, load-aware equipment selection, and change control before production starts.",
      },
      {
        icon: "Cpu",
        title: "Control and automation",
        description: "PLC, HMI, SCADA, and monitoring integration to reduce operator error and improve performance.",
      },
    ],
  },
  servicesSection: {
    title: "Services that make the buying decision easier",
    services: [
      {
        title: "MV/LV and MCC panel design",
        description: "Engineering drawings, layouts, busbar sizing, breaker selection, and project documentation.",
        icon: "CircuitBoard",
      },
      {
        title: "Manufacturing, assembly, and FAT",
        description: "Enclosure production, equipment assembly, wiring, labeling, and functional tests before shipment.",
        icon: "Factory",
      },
      {
        title: "Installation and support",
        description: "On-site commissioning, operator training, and post-handover technical support.",
        icon: "Wrench",
      },
    ],
  },
  trustSection: {
    eyebrow: "Built for critical projects",
    title: "Why industrial clients trust us",
    items: [
      ["IEC 61439", "Design and quality checks aligned with LV switchgear requirements"],
      ["Documented FAT", "Test reports, handover checklists, and lower site rework risk"],
      ["Trusted components", "Brand and protection-level selection based on budget, timeline, and project risk"],
      ["Technical support", "Post-installation response for stable and faster operation"],
    ],
  },
  processSection: {
    title: "A clear collaboration path",
    steps: [
      ["01", "Discovery", "Load study, installation environment, standards, and project constraints."],
      ["02", "Design and proposal", "Drawings, equipment list, timeline, and technical-commercial offer."],
      ["03", "Build and test", "Controlled assembly, FAT, issue resolution, and handover documents."],
      ["04", "Commission and support", "Site startup, operator training, and support after delivery."],
    ],
  },
  projectsPreview: {
    title: "Execution fields",
    description: "We focus on projects where engineering accuracy, safety, and delivery timing are critical.",
    projects: [
      ["Refinery and petrochemical", "MCC panels, motor control, and protection systems", "/projects/refinery.jpg"],
      ["Power and energy", "Distribution panels, sync panels, and generator control", "/projects/powerplant.jpg"],
      ["Manufacturing plants", "Production-line automation, drives, and industrial monitoring", "/projects/steel.png"],
    ],
  },
  ctaSection: {
    title: "Let’s start with the panel design",
    description: "Share the initial project specs and we will clarify the technical path, build timeline, and cost-effective options.",
    primary: "Start consultation",
    secondary: "Direct contact",
  },
};
