import Link from "next/link";
import { HomeCarousel } from "@/components/HomeCarousel";
import { asset, newsArticles, partnerLogos } from "@/data/site";

const courseCards = [
  {
    title: "Básico 1",
    description:
      "Curso introdutório de Libras para iniciantes, com foco em comunicação básica, sinais do dia a dia e primeiros diálogos.",
  },
  {
    title: "Básico 2",
    description:
      "Continuação do nível básico, desenvolvendo fluência, construção de frases e melhor compreensão da língua de sinais.",
  },
  {
    title: "Uai +",
    description:
      "Curso avançado para aprofundar conhecimentos em Libras, com prática intensiva, expressões mais complexas e maior domínio da comunicação.",
  },
  {
    title: "Transição",
    description:
      "Formação intermediária que prepara o aluno para contextos reais de comunicação, com foco na interpretação e uso profissional da Libras.",
  },
  {
    title: "Transição 2",
    description:
      "Nível avançado de formação para intérpretes, com foco em prática profissional, ética e atuação em diferentes contextos sociais.",
  },
];

const carouselSlides = [
  {
    title: newsArticles.curso.title,
    description: "Estão abertas as inscrições para os cursos de Libras — até 10 de Agosto!",
    href: newsArticles.curso.href,
    image: newsArticles.curso.image,
    alt: "curso de libras para iniciantes uaiLibras",
  },
  {
    title: "UaiLibras marca presença no maior festival de circo do mundo",
    description:
      "Levamos Libras e acessibilidade para o Festival Mundial do Circo, promovendo inclusão para pessoas surdas!",
    href: newsArticles.circo.href,
    image: newsArticles.circo.image,
    alt: "Uai marca presença no circo",
  },
  {
    title: "Intérpretes surdas? Sim! Descubra como isso transforma a Libras",
    description:
      "Promovemos a inclusão de surdos e ouvintes com intérpretes surdas — uma nova forma de representar a comunidade com protagonismo.",
    href: newsArticles.interprete.href,
    image: newsArticles.interprete.image,
    alt: "Interprete surdos existe",
  },
  {
    title: "UaiLibras vence o ExpoFavela 2024!",
    description:
      "Nosso projeto foi destaque nacional e levou o prêmio de melhor organização no maior evento de empreendedorismo de favela do Brasil.",
    href: newsArticles.expofavela.href,
    image: newsArticles.expofavela.image,
    alt: "uaiLibras destaque na nacional",
  },
];

const homeNews = [
  {
    title: "Nova Turma de Libras Iniciante!",
    description: newsArticles.curso.excerpt,
    image: newsArticles.curso.image,
    alt: "Curso de Libras",
    href: newsArticles.curso.href,
  },
  {
    title: "UaiLibras no Festival Mundial do Circo",
    description: newsArticles.circo.excerpt,
    image: newsArticles.circo.image,
    alt: "UaiLibras no Circo",
    href: newsArticles.circo.href,
  },
  {
    title: "Intérpretes Surdos em Destaque",
    description: newsArticles.interprete.excerpt,
    image: newsArticles.interprete.image,
    alt: "Intérpretes Surdas",
    href: newsArticles.interprete.href,
  },
  {
    title: "UAI Libras é Destaque Nacional em 2024",
    description: "Projeto premiado como referência em inclusão e educação para a comunidade surda.",
    image: newsArticles.expofavela.image,
    alt: "UaiLibras na ExpoFavela",
    href: newsArticles.expofavela.href,
  },
];

export default function Home() {
  return (
    <>
      <main>
        <h1 className="visually-hidden">
          Curso de Libras Online e Presencial com Certificado | UaiLibras Brasil
        </h1>
      </main>

      <HomeCarousel slides={carouselSlides} />

      <section id="cursos" className="cursos">
        <div className="l-curso">
          <h2>Nossos Cursos</h2>
        </div>
        <div className="cards">
          {courseCards.map((course) => (
            <div className="card" key={course.title}>
              <h3>{course.title}</h3>
              <p>{course.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="noticias" className="noticias">
        <h2>Notícias</h2>
        <div className="noticias-grid">
          {homeNews.map((item) => (
            <article className="noticia-card" key={item.href}>
              <img src={item.image} alt={item.alt} />
              <div className="conteudo">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={item.href} className="btn-leia-mais">
                  Leia mais
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Pronto para começar sua jornada em Libras?</h2>
          <p>Entre em contato conosco e venha aprender com a UaiLibras!</p>
          <Link href="/contato" className="btn-cta">
            Entrar em contato
          </Link>
        </div>
      </section>

      <section className="parceiros">
        <h2>Territórios conquistados: Marcas e projetos que acessibilizamos pelo Brasil</h2>
        <div className="parceiros-carousel">
          <div className="parceiros-track">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <img src={asset(logo)} alt={logo.replace(/\.[^.]+$/, "")} key={`${logo}-${index}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
