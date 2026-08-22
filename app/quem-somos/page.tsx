import type { Metadata } from "next";
import { asset } from "@/data/site";

export const metadata: Metadata = {
  title: "Quem Somos | UaiLibras",
  description:
    "Conheça a história da UaiLibras, nossa missão, nossos fundadores e o compromisso com a inclusão e a acessibilidade.",
};

export default function QuemSomosPage() {
  return (
    <main>
      <section className="quem-somos">
        <h1>Quem somos</h1>
        <div className="grupo">
          <img src={asset("curso-uai.jpg")} alt="Grupo Uai Libras" />
          <div className="texto">
            <p>
              A UaiLibras nasceu com o propósito de transformar a inclusão em realidade. Nossa missão é
              oferecer cursos de Libras e acessibilidade que aproximem surdos e ouvintes, quebrando
              barreiras de comunicação e promovendo oportunidades iguais para todos. Mais do que ensinar,
              acreditamos no poder da comunidade. Trabalhamos lado a lado com pessoas surdas, garantindo
              que cada conteúdo seja construído com protagonismo, respeito e representatividade. Nossa
              equipe é movida pela paixão em criar um mundo mais acessível, onde a Libras esteja presente
              em escolas, empresas, eventos e no dia a dia das pessoas. Na UaiLibras, cada aula, projeto e
              ação é pensada para fortalecer a cultura surda e ampliar a visibilidade dessa comunidade.
              Nosso compromisso é ensinar com qualidade, apoiar a diversidade e contribuir para uma
              sociedade mais inclusiva, justa e acolhedora.
            </p>
          </div>
        </div>

        <h2>Fundadores</h2>
        <div className="pessoa">
          <img src={asset("expofavela-uai.png")} alt="Fundadores do UAI Libras" />
          <div className="texto">
            <p>
              Nascido em Belo Horizonte, Eduardo Lacerda sempre teve um olhar atento para as questões
              sociais. Sua paixão pelas letras e pelas artes, o fez encontrar na Libras, a ferramenta
              perfeita para unir sua criatividade à sua vontade de fazer a diferença. Com sua criatividade
              e seu olhar social, Eduardo Lacerda tem utilizado a Libras como um canal para promover a
              inclusão e a acessibilidade. Desde 2016, ele se dedica incansavelmente a aprender e aprimorar
              seus conhecimentos nessa língua, buscando construir um mundo mais acessível. Do outro lado do
              estado, na cidade de Campina Verde, Eduardo Rodrigo cultivava o sonho de ser professor. Aos
              14 anos, mudou-se para Belo Horizonte em busca de novas oportunidades e, após se formar em
              Pedagogia, descobriu na Libras uma forma de transformar suas aulas e conectar-se com seus
              alunos de maneira mais acessível. O destino uniu esses dois jovens apaixonados pela língua de
              sinais em 2018. A partir desse encontro, uma amizade sincera se estabeleceu, fortalecendo
              ainda mais o desejo de ambos em promover a inclusão e a acessibilidade. Juntos, eles trilharam
              um caminho repleto de desafios e conquistas, inspirando outras pessoas a aprender Libras e a
              construir um futuro mais justo e igualitário para todos. Surgindo assim a UAI Libras.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
