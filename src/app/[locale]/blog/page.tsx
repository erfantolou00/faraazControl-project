import { getDictionary } from "@/lib/i18n";

interface BlogPageProps {
  params: Promise<{ locale: string }>;
}

// متن‌ها: src/lib/i18n/fa.json و en.json → بخش blogPage
export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const blog = getDictionary(locale).blogPage;

  return (
    <div className="container px-6 py-24 lg:px-10">
      <h1 className="text-4xl font-black text-text md:text-6xl">{blog.heroTitle}</h1>
      <p className="mt-6 max-w-3xl text-lg text-text-secondary">{blog.heroSubtitle}</p>
      <article className="mt-16 max-w-2xl">
        <h2 className="text-2xl font-bold text-text">{blog.emptyTitle}</h2>
        <p className="mt-4 text-text-secondary">{blog.emptyDesc}</p>
      </article>
    </div>
  );
}
