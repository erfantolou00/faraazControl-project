"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Clock, Send, Mail } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert("پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.");
      setFormData({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-background py-24 lg:py-32 border-b border-border">
        <div className="container px-6 lg:px-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-text leading-tight">
              تماس با ما
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              برای مشاوره، استعلام قیمت یا بازدید از پروژه‌ها با کارشناسان ما در ارتباط باشید.
            </p>
          </div>
        </div>
      </section>

      <div className="container px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="mb-10">
              <h2 className="text-3xl font-bold text-text">فرم درخواست مشاوره</h2>
              <p className="text-text-secondary mt-2">لطفاً اطلاعات خود را وارد کنید</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">نام و نام خانوادگی</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-border bg-background-card px-6 py-4 text-text focus:border-primary focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">نام شرکت / سازمان</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-border bg-background-card px-6 py-4 text-text focus:border-primary focus:outline-none transition"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">ایمیل</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-border bg-background-card px-6 py-4 text-text focus:border-primary focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-secondary mb-2">شماره تماس</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-border bg-background-card px-6 py-4 text-text focus:border-primary focus:outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">موضوع</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-border bg-background-card px-6 py-4 text-text focus:border-primary focus:outline-none transition"
                >
                  <option value="">انتخاب کنید</option>
                  <option value="مشاوره فنی">مشاوره فنی</option>
                  <option value="استعلام قیمت">استعلام قیمت</option>
                  <option value="طراحی تابلو برق">طراحی تابلو برق</option>
                  <option value="نصب و راه‌اندازی">نصب و راه‌اندازی</option>
                  <option value="سایر">سایر</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-secondary mb-2">توضیحات / درخواست</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={7}
                  className="w-full rounded-3xl border border-border bg-background-card px-6 py-5 text-text focus:border-primary focus:outline-none transition resize-y"
                  placeholder="جزئیات پروژه، توان، ولتاژ، نوع کاربرد و ... را بنویسید"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-10 py-4 text-lg font-bold text-text-inverse hover:bg-primary-light transition disabled:opacity-70"
              >
                {isSubmitting ? "در حال ارسال..." : "ارسال پیام"}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-text mb-8">اطلاعات تماس</h3>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">شماره تماس</p>
                    <a href="tel:+982128425785" className="text-lg text-text-secondary hover:text-primary transition">021-28425785</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">ایمیل</p>
                    <a href="mailto:info@farazcontrol.com" className="text-text-secondary hover:text-primary transition">info@farazcontrol.com</a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">آدرس کارخانه</p>
                    <p className="text-text-secondary leading-relaxed">
                      تهران، شهرک صنعتی پرند، خیابان صنعت، پلاک ۱۲۸
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1 w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-text">ساعات کاری</p>
                    <p className="text-text-secondary">شنبه تا چهارشنبه: ۸:۰۰ - ۱۷:۰۰<br />پنجشنبه: ۸:۰۰ - ۱۴:۰۰</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-3xl overflow-hidden border border-border h-80 bg-zinc-900 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-text-secondary">نقشه در حال بارگذاری...</p>
                </div>
              </div>
              {/* You can replace this with a real Google Map or iframe later */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;