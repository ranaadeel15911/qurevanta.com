// Post-build: renders every route to its own static HTML file — full page content plus the
// right <title>, description, canonical, Open Graph tags and JSON-LD — so search engines get a
// real 200 page for each URL. Also writes 404.html, sitemap.xml, robots.txt and (when AdSense
// is configured) ads.txt. Files are written as /path.html; vercel.json "cleanUrls" serves them at /path.
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { createServer, loadEnv } from 'vite'

const root = join(import.meta.dirname, '..')
const dist = join(root, 'dist')
const env = loadEnv('production', root, 'VITE_')
const vite = await createServer({ root, mode: 'production', server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' })
const { pages, notFoundMeta, SITE_URL } = await vite.ssrLoadModule('/src/seo.ts')
const { render } = await vite.ssrLoadModule('/src/entry-server.tsx')
const { articles } = await vite.ssrLoadModule('/src/content.ts')

const template = await readFile(join(dist, 'index.html'), 'utf8')
const esc = (text) => String(text).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const json = (data) => JSON.stringify(data).replace(/</g, '\u003c')
const adsenseClient = env.VITE_ADSENSE_CLIENT?.trim()
const siteVerification = env.VITE_GOOGLE_SITE_VERIFICATION?.trim()

function page(meta, url) {
  const canonical = `${SITE_URL}${meta.path}`
  const head = [
    meta.noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${canonical}" />`,
    `<meta property="og:type" content="${meta.ogType ?? 'website'}" />`,
    '<meta property="og:site_name" content="QureVanta Healthcare" />',
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.noindex ? '' : `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:image" content="${esc(meta.image ?? `${SITE_URL}/logo-512.png`)}" />`,
    `<meta name="twitter:card" content="${meta.image ? 'summary_large_image' : 'summary'}" />`,
    adsenseClient ? `<meta name="google-adsense-account" content="${esc(adsenseClient)}" />` : '',
    siteVerification ? `<meta name="google-site-verification" content="${esc(siteVerification)}" />` : '',
    ...(meta.jsonLd ?? []).map((data) => `<script type="application/ld+json">${json(data)}</script>`),
  ].filter(Boolean).join('\n    ')
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(meta.description)}" />`)
    .replace(/\s*<meta property="og:image"[^>]*>/, '')
    .replace('</head>', `    ${head}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${render(url)}</div>`)
}

async function write(file, content) {
  await mkdir(dirname(file), { recursive: true })
  await writeFile(file, content)
}

for (const meta of pages) await write(join(dist, meta.path === '/' ? 'index.html' : `${meta.path}.html`), page(meta, meta.path))
await write(join(dist, '404.html'), page(notFoundMeta, '/404'))
await vite.close()

const today = new Date().toISOString().slice(0, 10)
await write(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((p) => `  <url><loc>${SITE_URL}${p.path}</loc><lastmod>${p.jsonLd?.find((d) => d.datePublished)?.dateModified ?? today}</lastmod></url>`).join('\n')}
</urlset>
`)
// RSS feed of the latest articles (used by feed readers, search engines and the LinkedIn/Zapier automation)
const xml = (text) => String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const rssItems = articles.slice(0, 30).map((a) => {
  const url = `${SITE_URL}/resources/${a.slug}`
  return `    <item>
      <title>${xml(a.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(`${a.date}T12:00:00Z`).toUTCString()}</pubDate>
      <category>${xml(a.category)}</category>
      <description>${xml(a.description)}</description>
      <media:content url="${xml(a.image)}" medium="image" />
      <enclosure url="${xml(a.image)}" type="image/jpeg" length="0" />
    </item>`
}).join('\n')
await write(join(dist, 'rss.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>QureVanta Healthcare — Medical Billing Guides</title>
    <link>${SITE_URL}/resources</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>Practical guides to medical billing, coding, credentialing, denial management, and compliance for US practices.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${rssItems}
  </channel>
</rss>
`)
await write(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`)
if (adsenseClient) await write(join(dist, 'ads.txt'), `google.com, ${adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`)
console.log(`prerendered ${pages.length} pages + 404.html, sitemap.xml, robots.txt${adsenseClient ? ', ads.txt' : ''}`)
