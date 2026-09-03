import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/data/site";

export const metadata: Metadata = {
  title: "Cursos de Libras | UaiLibras",
  description:
    "Saiba mais sobre o curso de Libras da UaiLibras, com vagas abertas, conteúdo para iniciantes e certificado.",
};

const courses = [
  {
    id: "iniciante",
    title: "Basico 1",
    alt: "Curso Libras Iniciante",
    description:
      "Pensado para iniciantes, este módulo é a porta de entrada para o universo da Língua Brasileira de Sinais. O objetivo é proporcionar uma introdução acessível e acolhedora, desenvolvendo a comunicação básica e despertando a consciência sobre a cultura surda.",
    benefit: "Ideal para quem nunca teve contato com Libras e quer começar do zero.",
  },
  {
    id: "intermediario",
    title: "Básico 2",
    alt: "Curso Libras Intermediário",
    description:
      "Neste módulo, o aluno amplia seu vocabulário, desenvolve maior autonomia comunicativa e se aprofunda no uso funcional da Libras em situações do cotidiano. A proposta é consolidar a base adquirida e preparar o estudante para interações mais complexas, com naturalidade e segurança.",
    benefit: "Para quem já conhece o básico e quer se comunicar com mais segurança.",
  },
  {
    id: "uai-plus",
    title: "Uai +",
    alt: "Curso Libras Avançado",
    description:
      "O UAI+ (Intermediário) é o módulo ideal para quem já tem base e quer evoluir na Língua Brasileira de Sinais (Libras) com mais segurança e naturalidade. O objetivo deste nível é ampliar o vocabulário, desenvolver uma comunicação mais fluida e espontânea e fortalecer a compreensão em diferentes contextos. Aqui, você aprimora sua expressão, ganha mais confiança e passa a se comunicar de forma mais clara e natural. É o próximo passo para quem deseja avançar e se destacar na Libras.",
    benefit: "Para quem deseja fluência, atuar como intérprete ou aprofundar seus estudos.",
  },
  {
    id: "transicao1",
    title: "Transição 1",
    alt: "Curso Libras Avançado",
    description:
      "O Transição 1 é o módulo preparatório para quem deseja transformar a Língua Brasileira de Sinais (Libras) em uma ferramenta profissional. Nesta etapa, o aluno tem introdução à modalidade voz, fundamentos de tradução e interpretação e conhece os diferentes contextos de atuação onde a Libras está presente. O foco está no desenvolvimento da fluência, da postura comunicativa e da responsabilidade linguística em situações formais e informais. É o passo ideal para quem deseja aprofundar seus conhecimentos e integrar a Libras à sua trajetória profissional com mais preparo e segurança.",
    benefit: "Para quem deseja de aprofundar seus estudos.",
  },
  {
    id: "transicaopro",
    title: "Transição Profissional",
    alt: "Curso Libras Avançado",
    description:
      "O Transição Profissional é voltado para quem quer entender e explorar o cenário profissional da Libras de forma estratégica e avançada. Neste módulo, você terá uma visão completa sobre áreas de atuação, competências essenciais e caminhos de estudos avançados que envolvem a Libras. O foco está em transformar o conhecimento em oportunidades concretas, consolidando a Libras como um diferencial educacional e profissional. É ideal para quem deseja, aprofundar-se nos estudos avançados e integrar a Libras à trajetória profissional.",
    benefit: "Para quem deseja formação e virar profissional na Libras.",
  },
];

const faq = [
  {
    question: "Preciso de conhecimento prévio?",
    answer: "Não! O curso Iniciante é feito para quem nunca teve contato com Libras.",
  },
  {
    question: "Os cursos têm certificado?",
    answer: "Sim, todos os cursos oferecem certificado digital após a conclusão.",
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você pode tirar dúvidas diretamente com os professores pelo portal do aluno.",
  },
];

export default function CursosPage() {
  return (
    <main>
      <section className="cursos-header">
        <h1>Nossos Cursos de Libras</h1>
        <p>
          Na UAI Libras, entendemos que aprender Libras vai muito além da comunicação — é um compromisso
          com a inclusão, com a valorização da comunidade surda e com a construção de uma sociedade mais
          acessível. Por isso, estruturamos nossos cursos de forma progressiva, respeitando o tempo, o
          objetivo e a realidade de cada aluno. Cada etapa da formação foi cuidadosamente planejada para
          oferecer uma experiência transformadora, aliando qualidade técnica, abordagem humanizada, diversão
          e forte conexão com o mercado de trabalho.
        </p>
      </section>

      <section className="cursos-lista">
        {courses.map((course) => (
          <article className="curso-detalhe" id={course.id} key={course.id}>
            <div className="curso-img">
              <Image src={asset("curso-uai.jpg")} alt={course.alt} width={400} height={300} />
            </div>
            <div className="curso-info">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <p className="curso-beneficio">{course.benefit}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="cursos-contato">
        <h2>Quer fazer um curso?</h2>
        <p>
          Entre em contato com a gente pelo Email: <strong>contato@uailibras.com.br</strong>
        </p>
      </section>

      <section className="cursos-faq">
        <h2>Perguntas Frequentes</h2>
        {faq.map((item) => (
          <div className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
