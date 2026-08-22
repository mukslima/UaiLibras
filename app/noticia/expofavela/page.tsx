import type { Metadata } from "next";
import { NewsArticle } from "@/components/NewsArticle";
import { newsArticles } from "@/data/site";

export const metadata: Metadata = {
  title: newsArticles.expofavela.metaTitle,
  description: newsArticles.expofavela.description,
};

export default function ExpoFavelaPage() {
  return <NewsArticle article={newsArticles.expofavela} />;
}
