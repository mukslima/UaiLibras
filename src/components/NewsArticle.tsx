import { NewsImage } from "@/components/NewsImage";
import type { PublicNews } from "@/lib/news";
import { formatPublishedDate, sanitizePublicRichText } from "@/lib/news";

type NewsArticleProps = {
  article: PublicNews;
};

export function NewsArticle({ article }: NewsArticleProps) {
  const publishedDate = formatPublishedDate(article.publishedAt);
  const categoryNames = article.categories.map((category) => category.name);
  const tagNames = article.tags.map((tag) => tag.name);

  return (
    <main>
      <article className="noticia-detalhe">
        <h1 className="noticia-titulo">{article.title}</h1>
        <div className="noticia-meta">
          {article.author?.name ? (
            <span className="noticia-autor">
              Por <strong>{article.author.name}</strong>
            </span>
          ) : null}
          {publishedDate ? <span className="noticia-data">Publicado em {publishedDate}</span> : null}
        </div>
        <NewsImage news={article} className="noticia-img" />
        <p className="noticia-subtitulo">{article.summary}</p>
        {categoryNames.length > 0 ? (
          <div className="noticia-taxonomia" aria-label="Categorias">
            {categoryNames.map((category) => (
              <span className="categoria" key={category}>
                {category}
              </span>
            ))}
          </div>
        ) : null}
        <div
          className="noticia-conteudo"
          dangerouslySetInnerHTML={{ __html: sanitizePublicRichText(article.content) }}
        />
        {tagNames.length > 0 ? (
          <div className="noticia-tags" aria-label="Tags">
            {tagNames.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        ) : null}
      </article>
    </main>
  );
}
