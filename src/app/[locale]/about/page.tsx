import AboutPageClient from "./AboutPageClient";

interface AboutPageProps {
  params: Promise<{ locale: string }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const data = locale === "fa" ? aboutFa : aboutEn;

  return <AboutPageClient data={data} locale={locale} />;
}

const aboutFa = {
  hero: {
    titleBefore: "درباره",
    titleHighlight: "فراز کنترل",
    subtitle: "پیشرو در طراحی و ساخت تابلوهای برق صنعتی با استانداردهای جهانی",
  },
  story: {
    title: "از یک جرقه تا رهبری صنعت",
    paragraphs: [
      "در سال ۱۳۸۸، با یک هدف ساده آغاز کردیم: ساخت تابلوهایی که نه فقط کار کنند، بلکه ایمن، هوشمند و پایدار باشند.",
      "امروز، پس از اجرای بیش از ۵۰۰ پروژه موفق در صنایع نفت و گاز، پتروشیمی، فولاد و نیروگاه‌ها، نام فراز کنترل مترادف با کیفیت، دقت مهندسی و اعتماد شده است.",
      "ما فقط تابلو نمی‌سازیم — راه‌حل‌های یکپارچه اتوماسیون و کنترل ارائه می‌دهیم.",
    ],
    cta: "ادامه داستان با شماست",
    experienceValue: "۱۵+",
    experienceLabel: "سال تجربه و تعهد",
  },
  values: {
    title: "ارزش‌هایی که ما را متمایز می‌کند",
    titleHighlight: "متمایز",
    items: [
      {
        icon: "Shield",
        title: "ایمنی در اولویت",
        desc: "تطابق کامل با IEC 61439، NEC و استانداردهای ملی",
      },
      {
        icon: "Award",
        title: "کیفیت بی‌نهایت",
        desc: "دارای گواهینامه‌های ISO 9001، 14001 و OHSAS 18001",
      },
      {
        icon: "Target",
        title: "نوآوری مداوم",
        desc: "استفاده از آخرین تکنولوژی‌های PLC، SCADA و IoT صنعتی",
      },
    ],
  },
  stats: [
    { value: "۵۰۰+", label: "پروژه موفق" },
    { value: "۱۰۰+", label: "مشتری وفادار" },
    { value: "۱۵+", label: "سال تجربه" },
    { value: "۲۴/۷", label: "پشتیبانی فنی" },
  ],
  team: {
    title: "تیم ما",
    subtitle: "متخصصین برق قدرت و اتوماسیون صنعتی",
  },
  facility: {
    title: "کارگاه مجهز",
    subtitle: "مجهز به CNC، تست FAT و تجهیزات پیشرفته",
  },
  cta: {
    title: "آماده همکاری با شما هستیم",
    description: "بیایید با هم پروژه بعدی شما را به یک شاهکار مهندسی تبدیل کنیم",
    button: "شروع همکاری",
  },
};

const aboutEn = {
  hero: {
    titleBefore: "About",
    titleHighlight: "Faraz Control",
    subtitle:
      "A leader in designing and manufacturing industrial electrical panels to global standards",
  },
  story: {
    title: "From a spark to industry leadership",
    paragraphs: [
      "We started in 2009 with a simple goal: build panels that don’t just work — they are safe, intelligent, and durable.",
      "Today, after more than 500 successful projects in oil & gas, petrochemical, steel, and power plants, Faraz Control stands for quality, engineering precision, and trust.",
      "We don’t just build panels — we deliver integrated automation and control solutions.",
    ],
    cta: "The next chapter is with you",
    experienceValue: "15+",
    experienceLabel: "Years of experience and commitment",
  },
  values: {
    title: "Values that set us apart",
    titleHighlight: "apart",
    items: [
      {
        icon: "Shield",
        title: "Safety first",
        desc: "Full alignment with IEC 61439, NEC, and national standards",
      },
      {
        icon: "Award",
        title: "Uncompromising quality",
        desc: "Certified to ISO 9001, 14001, and OHSAS 18001",
      },
      {
        icon: "Target",
        title: "Continuous innovation",
        desc: "Latest PLC, SCADA, and industrial IoT technologies",
      },
    ],
  },
  stats: [
    { value: "500+", label: "Successful projects" },
    { value: "100+", label: "Loyal clients" },
    { value: "15+", label: "Years experience" },
    { value: "24/7", label: "Technical support" },
  ],
  team: {
    title: "Our team",
    subtitle: "Power and industrial automation specialists",
  },
  facility: {
    title: "Equipped workshop",
    subtitle: "CNC, FAT testing, and advanced equipment",
  },
  cta: {
    title: "Ready to work with you",
    description:
      "Let’s turn your next project into an engineering landmark together",
    button: "Start collaboration",
  },
};

export type AboutPageData = typeof aboutFa;