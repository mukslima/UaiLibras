type Article = {
  title: string;
  author: string;
  date: string;
  image: string;
  imageAlt: string;
  subtitle: string;
  paragraphs: readonly string[];
};

type NewsArticleProps = {
  article: Article;
};

export function NewsArticle({ article }: NewsArticleProps) {
  return (
    <main>
      <article className="noticia-detalhe">
        <h1 className="noticia-titulo">{article.title}</h1>
        <div className="noticia-meta">
          <span className="noticia-autor">
            Por <strong>{article.author}</strong>
          </span>
          <span className="noticia-data">{article.date}</span>
        </div>
        <img src={article.image} alt={article.imageAlt} className="noticia-img" />
        <h2 className="noticia-subtitulo">{article.subtitle}</h2>
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
