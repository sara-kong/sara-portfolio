import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getWritingBySlug, getWritings } from "@/lib/content";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getWritings().map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} — Sara Kong`, description: post.blurb };
}

export default async function WritingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getWritingBySlug(slug);
  if (!post) notFound();

  return (
    <article className="px-6 md:px-20 py-16 max-w-2xl">
      <header className="mb-12">
        <h1 className="text-2xl font-medium text-black mb-3">{post.title}</h1>
        {post.date && (
          <time className="text-sm text-black/40">{post.date}</time>
        )}
      </header>
      <div className="prose prose-sm prose-neutral max-w-none text-black/80 leading-relaxed [&>p]:mb-6 [&>p]:text-base [&>p:last-child]:mb-0">
        <MDXRemote source={post.rawContent} />
      </div>
    </article>
  );
}
