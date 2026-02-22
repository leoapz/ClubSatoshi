import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { ArrowLeft, BookOpen, FileText, Calendar } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mdxComponents } from "@/components/mdx/MDXComponents";
import { getResourceBySlug, getResourceSlugs } from "@/lib/mdx";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getResourceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    return { title: "Recurso no encontrado" };
  }

  return {
    title: `${resource.frontmatter.title} | Club Satoshi`,
    description: resource.frontmatter.description,
  };
}

export default async function ResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResourceBySlug(slug);

  if (!resource) {
    notFound();
  }

  const { frontmatter, content } = resource;
  const isGuide = frontmatter.category === "guide";

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-black">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Volver a Recursos
          </Link>

          <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 p-6 md:p-10">
            <header className="mb-8 pb-8 border-b border-gray-100 dark:border-gray-800">
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-4 ${
                  isGuide
                    ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                    : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                }`}
              >
                {isGuide ? (
                  <BookOpen className="w-4 h-4" />
                ) : (
                  <FileText className="w-4 h-4" />
                )}
                <span className="uppercase">
                  {isGuide ? "Guía Práctica" : "Artículo"}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
                {frontmatter.title}
              </h1>

              <p className="text-lg text-gray-500 dark:text-gray-400 mb-4">
                {frontmatter.description}
              </p>

              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                <time dateTime={frontmatter.date}>
                  {new Date(frontmatter.date).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </header>

            <div className="prose-custom">
              <MDXRemote 
                source={content} 
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                  },
                }}
              />
            </div>
          </article>

          <div className="mt-8 text-center">
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary hover:bg-black text-white font-bold rounded-full transition-all hover:scale-105"
            >
              <ArrowLeft className="w-4 h-4" />
              Ver más recursos
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
