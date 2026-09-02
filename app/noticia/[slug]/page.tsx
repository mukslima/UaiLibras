import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NewsArticle } from "@/components/NewsArticle";
import { fetchPublicNewsBySlug, getNewsImageAlt, getNewsUrl } from "@/lib/news";

type NewsDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await fetchPublicNewsBySlug(slug).catch(() => null);

  if (!article) {
    return {
      title: "Noticia nao encontrada | UaiLibras",
    };
  }

  return {
    title: `${article.title} | UaiLibras`,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.publishedAt ?? undefined,
      url: getNewsUrl(article),
      images: article.coverImage?.url
        ? [
            {
              url: article.coverImage.url,
              alt: getNewsImageAlt(article),
            },
          ]
        : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = await fetchPublicNewsBySlug(slug).catch((error) => {
    if (error instanceof Error) return error;
    return new Error("Nao foi possivel carregar a noticia.");
  });

  if (!article) {
    notFound();
  }

  if (article instanceof Error) {
    return (
      <main>
        <article className="noticia-detalhe">
          <h1 className="noticia-titulo">Notícia indisponível</h1>
          <p>{article.message}</p>
        </article>
      </main>
    );
  }

  return <NewsArticle article={article} />;
}
