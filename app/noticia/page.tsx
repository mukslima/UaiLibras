import type { Metadata } from "next";
import Link from "next/link";
import { newsArticles } from "@/data/site";

export const metadata: Metadata = {
  title: "Notícias sobre Libras e Inclusão | UaiLibras",
  description:
    "Acompanhe as notícias da UaiLibras sobre Libras, inclusão, acessibilidade e eventos da comunidade surda.",
};

export default function NoticiaPage() {
  return (
    <main>
      <h1>Notícias</h1>
      <section className="noticias-destaques">
        <Link href={newsArticles.curso.href} className="noticia-principal">
          <div className="noticia-principal">
            <img src={newsArticles.curso.image} alt="Destaque principal" />
            <div className="conteudo">
              <span className="categoria">{newsArticles.curso.category}</span>
              <h2>{newsArticles.curso.title}</h2>
              <ul>
                {newsArticles.curso.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        </Link>

        <div className="noticia-secundarias">
          {[newsArticles.circo, newsArticles.interprete].map((article) => (
            <Link href={article.href} className="noticia-sec" key={article.href}>
              <div className="noticia-sec">
                <img src={article.image} alt={article.imageAlt} />
                <div className="conteudo">
                  <span className="categoria">{article.category}</span>
                  <h3>{article.title.replace("!", "")}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="noticias-lista">
        <Link href={newsArticles.expofavela.href} className="card-link">
          <div className="card-horizontal">
            <img src={newsArticles.expofavela.image} alt={newsArticles.expofavela.imageAlt} />
            <div className="conteudo">
              <h4>{newsArticles.expofavela.title}</h4>
              <p>{newsArticles.expofavela.excerpt}</p>
            </div>
          </div>
        </Link>
      </section>
    </main>
  );
}
