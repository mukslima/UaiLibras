# 🤟 UaiLibras — Frontend

Frontend do **UaiLibras**, plataforma voltada à divulgação de cursos, notícias, eventos e iniciativas relacionadas à **Libras, acessibilidade e comunidade surda**.

O projeto foi originalmente desenvolvido em **HTML, CSS e JavaScript** e posteriormente migrado para **Next.js, React e TypeScript**, modernizando sua arquitetura, aumentando a reutilização de componentes e preparando a aplicação para integração com uma API própria.

## 🌐 Projeto online

**Produção:** https://uai-libras.vercel.app/

## 🚀 Tecnologias

- Next.js
- React
- TypeScript
- App Router
- CSS
- Font Awesome
- Vercel

## ✨ Principais funcionalidades

- Interface pública responsiva
- Navegação desktop e mobile
- Página inicial com conteúdo institucional
- Listagem e visualização de notícias
- Páginas de cursos
- FAQ interativo
- Páginas institucionais
- Componentização de elementos reutilizáveis
- SEO com sitemap e robots.txt
- Deploy contínuo na Vercel

## 🔄 Modernização do projeto

A primeira versão do UaiLibras utilizava:

```text
HTML + CSS + JavaScript
```

A aplicação foi posteriormente migrada para:

```text
Next.js + React + TypeScript
```

A modernização teve como objetivos:

- melhorar a organização e manutenção do código;
- aumentar a reutilização de componentes;
- utilizar tipagem estática com TypeScript;
- preparar o frontend para conteúdo dinâmico;
- facilitar a integração com uma API REST;
- permitir a evolução contínua da plataforma.

## 🏗️ Arquitetura

O projeto utiliza o **App Router do Next.js** e mantém separação entre páginas, componentes reutilizáveis, dados e estilos.

```text
uailibras-frontend/
├── app/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   └── styles/
├── next.config.ts
├── package.json
└── tsconfig.json
```

O backend do UaiLibras é desenvolvido e versionado separadamente, mantendo frontend e API com ciclos de desenvolvimento independentes.

## 🔗 Integração com Backend

O frontend está sendo preparado para consumir a API REST própria do UaiLibras.

A integração permitirá tornar dinâmicos recursos como:

- notícias;
- categorias e tags;
- conteúdo editorial;
- imagens;
- autenticação da área administrativa;
- gerenciamento interno da plataforma.

## 💻 Executando localmente

Clone o projeto:

```bash
git clone https://github.com/mukslima/uailibras-frontend.git
cd uailibras-frontend
```

Instale as dependências:

```bash
npm install
```

Execute o ambiente de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:3000
```

## 🧪 Qualidade

O projeto utiliza verificações de qualidade durante o desenvolvimento:

```bash
npm run typecheck
npm run lint
npm run build
```

## 🗺️ Roadmap

### ✅ Concluído

- [x] Desenvolvimento da versão inicial
- [x] Migração para Next.js
- [x] Migração para TypeScript
- [x] Componentização da interface
- [x] Estrutura responsiva
- [x] Deploy na Vercel
- [x] Painel administrativo
- [x] Integração com API REST
- [x] Conteúdo dinâmico
- [x] Workflow editorial no frontend

### 🚧 Em desenvolvimento

- [ ] Finalização e deploy de produção
- [ ] Otimizações de performance e SEO
- [ ] Evolução da experiência de usuário (UX/UI)
- [ ] Conteúdo em vídeo/Libras
- [ ] Melhorias de acessibilidade

### 🔮 Evoluções futuras

- [ ] Recuperação de senha por e-mail
- [ ] Alteração de senha pelo usuário
- [ ] Aprimoramento da gestão de usuários
- [ ] Busca e filtros avançados de conteúdo
- [ ] Analytics e métricas do portal
- [ ] Expansão dos recursos editoriais
- [ ] Novas integrações conforme necessidade

## 👨‍💻 Desenvolvimento

Desenvolvido e mantido por **Marcos AND Lima**.

GitHub: **@mukslima**
=======
# UaiLibras Frontend

Site publico do UaiLibras em Next.js.

## Integracao com backend

As noticias publicas sao carregadas da API do `uailibras-backend`.

Configure o frontend com:

```text
UAILIBRAS_API_URL=http://localhost:3333
```

Em desenvolvimento local, suba o backend e depois execute:

```bash
npm run dev
```

Endpoints consumidos:

- `GET /api/v1/news`
- `GET /api/v1/news/:slug`

A API publica retorna apenas noticias `PUBLISHED`. O frontend usa `featuredPosition` para separar destaque principal (`1`), destaques secundarios (`2` e `3`) e noticias normais, com revalidacao de 5 minutos.

## 🤟 UaiLibras

**Comunicar, Aprender & Incluir.**

## Qualidade

```bash
npm run typecheck
npm run lint
npm test
npm run build
```
