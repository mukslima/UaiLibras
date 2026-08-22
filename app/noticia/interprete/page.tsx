import type { Metadata } from "next";
import { NewsArticle } from "@/components/NewsArticle";
import { newsArticles } from "@/data/site";

export const metadata: Metadata = {
  title: newsArticles.interprete.metaTitle,
  description: newsArticles.interprete.description,
};

export default function InterpretePage() {
  return <NewsArticle article={newsArticles.interprete} />;
}
