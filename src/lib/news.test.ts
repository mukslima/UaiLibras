import assert from "node:assert/strict";
import test from "node:test";
import {
  fetchPublicNews,
  fetchPublicNewsBySlug,
  formatPublishedDate,
  partitionFeaturedNews,
  sanitizePublicRichText,
  type PublicNews,
} from "./news";

function makeNews(slug: string, featuredPosition: PublicNews["featuredPosition"] = null): PublicNews {
  return {
    id: slug,
    title: `Titulo ${slug}`,
    slug,
    summary: `Resumo ${slug}`,
    content: "<p>Conteudo</p>",
    author: null,
    primaryCategory: null,
    coverImage: null,
    categories: [],
    tags: [],
    featuredPosition,
    publishedAt: "2026-08-22T12:00:00.000Z",
  };
}

test("partitionFeaturedNews uses featuredPosition without duplicating normal news", () => {
  const main = makeNews("principal", 1);
  const secondaryA = makeNews("secundaria-a", 2);
  const secondaryB = makeNews("secundaria-b", 3);
  const normal = makeNews("normal");

  const result = partitionFeaturedNews([normal, secondaryB, main, secondaryA]);

  assert.equal(result.main?.slug, "principal");
  assert.deepEqual(
    result.secondary.map((item) => item.slug),
    ["secundaria-a", "secundaria-b"],
  );
  assert.deepEqual(
    result.normal.map((item) => item.slug),
    ["normal"],
  );
});

test("partitionFeaturedNews keeps empty featured slots empty", () => {
  const result = partitionFeaturedNews([makeNews("normal")]);

  assert.equal(result.main, null);
  assert.deepEqual(result.secondary, []);
  assert.equal(result.normal.length, 1);
});

test("fetchPublicNews maps public API relations and optional fields", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = (async () =>
    new Response(
      JSON.stringify({
        items: [
          {
            id: "1",
            title: "Noticia publicada",
            slug: "noticia-publicada",
            summary: "Resumo publico",
            content: "<p>Texto</p>",
            author: { name: "Autora" },
            primaryCategory: { id: "cat-1", name: "Curso", slug: "curso" },
            coverImage: { url: "https://cdn.test/capa.jpg", originalName: "Capa" },
            categories: [{ category: { id: "cat-1", name: "Curso", slug: "curso" } }],
            tags: [{ tag: { id: "tag-1", name: "Libras", slug: "libras" } }],
            featuredPosition: 1,
            publishedAt: "2026-08-22T12:00:00.000Z",
          },
        ],
      }),
      { status: 200 },
    )) as typeof fetch;

  try {
    const [article] = await fetchPublicNews();

    assert.equal(article.title, "Noticia publicada");
    assert.equal(article.featuredPosition, 1);
    assert.equal(article.categories[0].name, "Curso");
    assert.equal(article.tags[0].slug, "libras");
    assert.equal(article.coverImage?.url, "https://cdn.test/capa.jpg");
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test("fetchPublicNewsBySlug returns null on 404 and throws on API error", async () => {
  const originalFetch = globalThis.fetch;

  globalThis.fetch = (async () => new Response(JSON.stringify({ message: "Not found" }), { status: 404 })) as typeof fetch;
  assert.equal(await fetchPublicNewsBySlug("inexistente"), null);

  globalThis.fetch = (async () => new Response(JSON.stringify({ message: "Erro" }), { status: 500 })) as typeof fetch;
  await assert.rejects(() => fetchPublicNewsBySlug("erro"), /Nao foi possivel carregar a noticia/);

  globalThis.fetch = originalFetch;
});

test("sanitizePublicRichText preserves rich text and strips unsafe HTML", () => {
  const html =
    '<h2>Titulo</h2><p><strong>Texto</strong> <a href="javascript:alert(1)" onclick="x()">link</a></p><script>alert(1)</script><img src="https://cdn.test/a.jpg" onerror="x()" alt="A">';

  const sanitized = sanitizePublicRichText(html);

  assert.match(sanitized, /<h2>Titulo<\/h2>/);
  assert.match(sanitized, /<strong>Texto<\/strong>/);
  assert.doesNotMatch(sanitized, /javascript:/);
  assert.doesNotMatch(sanitized, /onclick|onerror|script/);
  assert.match(sanitized, /<img src="https:\/\/cdn.test\/a.jpg" alt="A">/);
});

test("sanitizePublicRichText preserves editorial alignment classes only", () => {
  const html =
    '<p class="text-align-center bad-class">Texto</p><img src="https://cdn.test/a.jpg" class="image-size-small image-align-right evil" onerror="x()"><iframe src="https://bad.test"></iframe>';

  const sanitized = sanitizePublicRichText(html);

  assert.match(sanitized, /class="text-align-center"/);
  assert.match(sanitized, /class="image-size-small image-align-right"/);
  assert.doesNotMatch(sanitized, /bad-class|evil|onerror|iframe/);
});

test("formatPublishedDate formats valid dates and ignores invalid values", () => {
  assert.equal(formatPublishedDate("2026-08-22T12:00:00.000Z"), "22/08/2026");
  assert.equal(formatPublishedDate(null), null);
  assert.equal(formatPublishedDate("invalid"), null);
});
