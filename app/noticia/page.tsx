import type { Metadata } from "next";
import Link from "next/link";
import { NewsImage } from "@/components/NewsImage";
import { getNewsListState, getNewsUrl } from "@/lib/news";

export const metadata: Metadata = {
  title: "Notícias sobre Libras e Inclusão | UaiLibras",
  description:
    "Acompanhe as notícias da UaiLibras sobre Libras, inclusão, acessibilidade e eventos da comunidade surda.",
};

export default async function NoticiaPage() {
  const newsState = await getNewsListState(20);
  const { main, secondary, normal } = newsState.featured;

  return (
    <main>
      <h1>Notícias</h1>
      {newsState.status === "error" ? <p className="noticias-status">{newsState.message}</p> : null}
      {newsState.news.length === 0 ? <p className="noticias-status">Nenhuma notícia publicada no momento.</p> : null}
      {main || secondary.length > 0 ? (
        <section className="noticias-destaques">
          {main ? (
            <Link href={getNewsUrl(main)} className="noticia-principal">
              <div className="noticia-principal">
                <NewsImage news={main} />
                <div className="conteudo">
                  {main.primaryCategory?.name ? <span className="categoria">{main.primaryCategory.name}</span> : null}
                  <h2>{main.title}</h2>
                  <p>{main.summary}</p>
                </div>
              </div>
            </Link>
          ) : null}

          {secondary.length > 0 ? (
            <div className="noticia-secundarias">
              {secondary.map((article) => (
                <Link href={getNewsUrl(article)} className="noticia-sec" key={article.slug}>
                  <div className="noticia-sec">
                    <NewsImage news={article} />
                    <div className="conteudo">
                      {article.primaryCategory?.name ? (
                        <span className="categoria">{article.primaryCategory.name}</span>
                      ) : null}
                      <h3>{article.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="noticias-lista">
        {normal.map((article) => (
          <Link href={getNewsUrl(article)} className="card-link" key={article.slug}>
            <div className="card-horizontal">
              <NewsImage news={article} />
              <div className="conteudo">
                <h4>{article.title}</h4>
                <p>{article.summary}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
