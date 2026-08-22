import type { Metadata } from "next";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Dúvidas Frequentes sobre Libras | UaiLibras",
  description:
    "Tire suas dúvidas sobre contratação de intérpretes de Libras, eventos, cursos e serviços da UaiLibras.",
};

const faqItems = [
  {
    question: "Quantidade de intérpretes",
    answer:
      "A quantidade varia conforme o tipo de evento e sua duração. Em geral, são escalados dois intérpretes para turnos longos.",
  },
  {
    question: "Quantidade mínima de horas",
    answer: "A contratação mínima costuma ser de 2 horas para eventos ou atividades pontuais.",
  },
  {
    question: "Como garantimos a confidencialidade?",
    answer:
      "Todos os profissionais seguem um código de ética e assinam termos de confidencialidade, garantindo segurança e respeito.",
  },
  {
    question: "Por que solicitamos material de estudo antecipado?",
    answer:
      "Isso permite melhor preparo técnico e terminológico dos intérpretes, garantindo qualidade na tradução.",
  },
  {
    question: "Qualidade dos TILSPs",
    answer: "Todos passam por seleção, capacitação e são acompanhados em suas atuações.",
  },
  {
    question: "Por que contratar pela UaiLibras?",
    answer: "Garantimos organização, suporte, reposições rápidas e intérpretes qualificados.",
  },
  {
    question: "Como funciona o agendamento?",
    answer: "Você envia os dados do evento, e nossa equipe agenda e confirma os intérpretes disponíveis.",
  },
  {
    question: "Quanto custa contratar um intérprete de LIBRAS?",
    answer: "Os valores variam conforme o tempo, local e tipo de evento. Temos planos acessíveis!",
  },
  {
    question: "Os intérpretes têm formação específica?",
    answer: "Sim, temos profissionais com experiência em áreas como educação, saúde, jurídico e empresarial.",
  },
  {
    question: "Intérprete de Libras só usa preto?",
    answer: "A cor preta é preferida para contraste visual, mas pode variar conforme a situação.",
  },
];

export default function DuvidasPage() {
  return (
    <main>
      <section className="faq-section">
        <h1>Dúvidas Frequentes</h1>
        <FaqAccordion items={faqItems} />
      </section>
    </main>
  );
}
