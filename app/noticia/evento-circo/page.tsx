import type { Metadata } from "next";
import { NewsArticle } from "@/components/NewsArticle";
import { newsArticles } from "@/data/site";

export const metadata: Metadata = {
  title: newsArticles.circo.metaTitle,
  description: newsArticles.circo.description,
};

export default function EventoCircoPage() {
  return <NewsArticle article={newsArticles.circo} />;
}
