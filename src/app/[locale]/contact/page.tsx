import ContactPageClient from "./ContactPageClient";

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const data = locale === "fa" ? contactFa : contactEn;

  return <ContactPageClient data={data} locale={locale} />;
}

const contactFa = {
  hero: {
    title: "تماس با ما",
    subtitle:
      "برای مشاوره، استعلام قیمت یا بازدید از پروژه‌ها با کارشناسان ما در ارتباط باشید.",
  },
  form: {
    title: "فرم درخواست مشاوره",
    subtitle: "لطفاً اطلاعات خود را وارد کنید",
    name: "نام و نام خانوادگی",
    company: "نام شرکت / سازمان",
    email: "ایمیل",
    phone: "شماره تماس",
    subject: "موضوع",
    subjectPlaceholder: "انتخاب کنید",
    subjects: [
      { value: "technical", label: "مشاوره فنی" },
      { value: "quote", label: "استعلام قیمت" },
      { value: "design", label: "طراحی تابلو برق" },
      { value: "install", label: "نصب و راه‌اندازی" },
      { value: "other", label: "سایر" },
    ],
    message: "توضیحات / درخواست",
    messagePlaceholder:
      "جزئیات پروژه، توان، ولتاژ، نوع کاربرد و ... را بنویسید",
    submit: "ارسال پیام",
    submitting: "در حال ارسال...",
    success:
      "پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.",
  },
  info: {
    title: "اطلاعات تماس",
    phoneLabel: "شماره تماس",
    phone: "021-33951025",
    phoneHref: "tel:+982133951025",
    emailLabel: "ایمیل",
    email: "tolou49@gmail.com",
    addressLabel: "آدرس کارخانه",
    address: "تهران، شهرک صنعتی پرند، خیابان صنعت، پلاک ۱۲۸",
    hoursLabel: "ساعات کاری",
    hours: "شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰\nپنجشنبه: ۸:۰۰ - ۱۴:۰۰",
    mapLoading: "نقشه در حال بارگذاری...",
  },
};

const contactEn = {
  hero: {
    title: "Contact us",
    subtitle:
      "Get in touch with our experts for consultation, quotations, or project visits.",
  },
  form: {
    title: "Consultation request form",
    subtitle: "Please fill in your details",
    name: "Full name",
    company: "Company / Organization",
    email: "Email",
    phone: "Phone number",
    subject: "Subject",
    subjectPlaceholder: "Select an option",
    subjects: [
      { value: "technical", label: "Technical consultation" },
      { value: "quote", label: "Price quotation" },
      { value: "design", label: "Panel design" },
      { value: "install", label: "Installation & commissioning" },
      { value: "other", label: "Other" },
    ],
    message: "Details / Request",
    messagePlaceholder:
      "Describe the project: power, voltage, application, and other requirements",
    submit: "Send message",
    submitting: "Sending...",
    success:
      "Your message was sent successfully. We will contact you shortly.",
  },
  info: {
    title: "Contact information",
    phoneLabel: "Phone",
    phone: "021-33951025",
    phoneHref: "tel:+982133951025",
    emailLabel: "Email",
    email: "tolou49@gmail.com",
    addressLabel: "Factory address",
    address: "Tehran, Laleh zar, Mikhak st ",
    hoursLabel: "Working hours",
    hours: "Sat–Wed: 08:00 – 17:00\nThu: 08:00 – 14:00",
    mapLoading: "Map loading...",
  },
};

export type ContactPageData = typeof contactFa;