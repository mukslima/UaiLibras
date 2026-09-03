import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getConfiguredSiteUrl } from "@/lib/site-url";
import "@/styles/globals.css";

const siteUrl = getConfiguredSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Uai Libras | Cursos de Libras e Acessibilidade no Brasil",
    template: "%s",
  },
  description:
    "Aprenda Libras do básico ao avançado com a UaiLibras. Cursos online, inclusão e acessibilidade para pessoas surdas.",
  keywords: ["libras", "acessibilidade", "surdos", "cursos de libras", "inclusão"],
  authors: [{ name: "Marcos Lima" }],
  openGraph: {
    title: "Curso de Libras - UaiLibras",
    description: "Aprenda Libras do básico ao avançado com inclusão e acessibilidade.",
    images: siteUrl ? ["/assets/imgs/06.png"] : undefined,
    type: "website",
  },
  verification: {
    google: "BrJZGn6u4zdyEwY3GSgkt94cwhHLJ2OUXXR09sPn2mk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
