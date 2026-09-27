/**
 * همهٔ متن‌های قابل‌نمایش سایت از این‌جا خوانده می‌شوند.
 *
 * کارفرما برای تغییر متن فقط این دو فایل را ویرایش کند:
 * - src/lib/i18n/fa.json  متن فارسی
 * - src/lib/i18n/en.json  متن انگلیسی
 *
 * نام فیلدها را عوض نکنید. فیلدهایی که با _comment شروع می‌شوند
 * فقط راهنما هستند و روی سایت نشان داده نمی‌شوند.
 * مقدار icon نام آیکون در کد است و نباید تغییر کند.
 * کارت خدمات و پروژه‌ها از پنل مدیریت می‌آیند، نه از این فایل‌ها.
 */
import fa from "./fa.json";
import en from "./en.json";

export type Dictionary = typeof fa;
export type AboutPageData = Dictionary["aboutPage"];
export type ContactPageData = Dictionary["contactPage"];

const dictionaries: Record<string, Dictionary> = {
  fa,
  en: en satisfies Dictionary,
};

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] ?? fa;
}
