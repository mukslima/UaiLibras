import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
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
    images: ["https://www.uailibras.com.br/assets/imgs/06.png"],
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
        <link rel="canonical" href="https://www.uailibras.com.br/" />
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
