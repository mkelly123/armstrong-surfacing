import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import type { Metadata } from "next";
export const instant = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const { slug } = await params;

  const article = articles.find(
    (a) => a.slug === slug
  );

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | Armstrong Surfacing Ltd`,
    description: article.excerpt,

    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export default async function NewsArticlePage({
    params,
    }: {
    params: Promise<{ slug: string }>;
    }) {

    const { slug } = await params;

    const article = articles.find(
        (a) => a.slug === slug
    );

    if (!article) {
        notFound();
    }

    const relatedArticles = articles
        .filter((a) => a.slug !== article.slug)
        .slice(0, 2);

  return (
    <main>

        {/* Hero */}

        <section className="relative h-[400px] md:h-[550px] lg:h-[650px]">

        <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
            className="object-cover"
        />

        <div className="absolute inset-0 bg-[#071B39]/80" />

        <div className="relative mx-auto flex h-full max-w-[1600px] items-end px-8 pb-20">

            <div className="max-w-5xl px-2 md:px-0">

            <p className="mb-4 text-sm font-bold uppercase tracking-[5px] text-blue-400">
                {article.date}
            </p>

            <h1 className="text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
                {article.title}
            </h1>

            </div>

        </div>

        </section>

        {/* Intro Card */}

        <section className="bg-white">

        <div className="mx-auto max-w-5xl px-8 -mt-16 relative z-10">

            <div className="rounded-2xl bg-white p-6 shadow-2xl md:p-10">

            <p className="text-lg leading-relaxed text-slate-700 md:text-2xl">
                {article.excerpt}
            </p>

            </div>

        </div>

        </section>

        {/* Article Meta */}

        <section className="bg-white py-16">

        <div className="mx-auto max-w-5xl px-8">

            <div className="grid gap-4 md:grid-cols-3">

            <div className="rounded-xl bg-slate-100 p-6">

                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                Published
                </h3>

                <p className="text-lg font-semibold">
                {article.date}
                </p>

            </div>

            <div className="rounded-xl bg-slate-100 p-4 md:p-6">

                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                Category
                </h3>

                <p className="text-lg font-semibold">
                Company News
                </p>

            </div>

            <div className="rounded-xl bg-slate-100 p-6">

                <h3 className="mb-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                Company
                </h3>

                <p className="text-lg font-semibold">
                Armstrong Surfacing Ltd
                </p>

            </div>

            </div>

        </div>

        </section>

        {/* Main Article */}

        <section className="bg-white pb-24">

        <div className="mx-auto max-w-4xl px-5 md:px-8">

            <div className="space-y-8">

            {article.content
                .trim()
                .split("\n")
                .filter(Boolean)
                .map((paragraph, index) => (
                <p
                    key={index}
                    className="text-lg leading-8 text-slate-700 md:text-xl"
                >
                    {paragraph.trim()}
                </p>
                ))}

            </div>

        </div>

        </section>

        {/* Related Articles */}

        <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-[1400px] px-8">

            <div className="mb-12">

            <h2 className="text-3xl font-black md:text-5xl">
                Related Articles
            </h2>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

            {relatedArticles.map((related) => (

                <article
                key={related.slug}
                className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2"
                >

                <div className="relative h-72">

                    <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                    />

                </div>

                <div className="p-8">

                    <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-blue-600">
                    {related.date}
                    </p>

                    <h3 className="mb-4 text-3xl font-black">
                    {related.title}
                    </h3>

                    <p className="mb-6 text-slate-600">
                    {related.excerpt}
                    </p>

                    <Link
                    href={`/news/${related.slug}`}
                    className="font-semibold text-blue-600"
                    >
                    Read Article →
                    </Link>

                </div>

                </article>

            ))}

            </div>

        </div>

        </section>

        {/* CTA */}

        <section className="bg-[#071B39] py-24 text-center text-white">

        <div className="mx-auto max-w-4xl px-5 md:px-8">

            <h2 className="mb-6 text-3xl font-black md:text-5xl">
            Need A Surfacing Contractor?
            </h2>

            <p className="mb-10 text-lg text-slate-300 md:text-xl">
            Speak with our experienced team about your next road,
            civil engineering or infrastructure project.
            </p>

            <Link
            href="/contact"
            className="inline-block rounded-lg bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"
            >
            Contact Us
            </Link>

        </div>

        </section>

    </main>
    );
}