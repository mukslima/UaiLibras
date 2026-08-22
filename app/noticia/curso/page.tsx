import type { Metadata } from "next";
import { NewsArticle } from "@/components/NewsArticle";
import { newsArticles } from "@/data/site";

export const metadata: Metadata = {
  title: newsArticles.curso.metaTitle,
  description: newsArticles.curso.description,
};

export default function CursoNoticiaPage() {
  return <NewsArticle article={newsArticles.curso} />;
}
