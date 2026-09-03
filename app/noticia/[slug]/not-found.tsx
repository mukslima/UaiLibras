import Link from "next/link";

export default function NewsNotFound() {
  return (
    <main>
      <article className="noticia-detalhe">
        <h1 className="noticia-titulo">Noticia nao encontrada</h1>
        <p>Esta noticia nao esta disponivel ou foi despublicada.</p>
        <Link href="/noticia" className="btn-leia-mais">
          Ver noticias
        </Link>
      </article>
    </main>
  );
}
