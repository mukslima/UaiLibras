# UaiLibras Frontend - Producao

## Ambiente

Configure a URL HTTPS do backend antes do build/deploy:

```text
UAILIBRAS_API_URL=https://api.uailibras.com.br
```

Essa variavel e usada no servidor Next para buscar noticias publicas. Nao ha secrets no frontend publico.

## Build e start

```bash
npm install
npm run typecheck
npm run lint
npm test
npm run build
npm start
```

O backend deve estar acessivel e com migrations aplicadas antes do deploy final do site.

## Integracao publica

O frontend consome:

- `GET /api/v1/news`
- `GET /api/v1/news/:slug`

A API publica retorna apenas noticias `PUBLISHED`. O frontend usa `featuredPosition` para separar destaques e noticias normais, com revalidacao de 5 minutos.
