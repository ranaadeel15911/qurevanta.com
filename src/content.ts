// Loads the Markdown articles (src/content/blog) and site pages (src/content/pages) at build time.
import { markdownToHtml, parseFrontmatter } from './markdown'

export type Article = {
  slug: string
  title: string
  description: string
  category: string
  date: string
  image: string
  services: string[]
  readMinutes: number
  html: string
}

export type ContentPage = { slug: string; title: string; description: string; updated: string; html: string }

const articleFiles = import.meta.glob('./content/blog/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const pageFiles = import.meta.glob('./content/pages/*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>
const fileSlug = (path: string) => path.split('/').pop()!.replace(/\.md$/, '')

export const articles: Article[] = Object.entries(articleFiles).map(([path, raw]) => {
  const { data, body } = parseFrontmatter(raw)
  const words = body.split(/\s+/).length
  return {
    slug: fileSlug(path),
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    image: data.image.startsWith('http') ? data.image : `https://images.unsplash.com/photo-${data.image}?auto=format&fit=crop&w=1200&q=80`,
    services: (data.services ?? '').split(',').map((item) => item.trim()).filter(Boolean),
    readMinutes: Math.max(1, Math.round(words / 230)),
    html: markdownToHtml(body),
  }
}).sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title))

export const findArticle = (slug?: string) => articles.find((article) => article.slug === slug)
export const articlesForService = (serviceSlug: string) => articles.filter((article) => article.services.includes(serviceSlug))

export const contentPages: ContentPage[] = Object.entries(pageFiles).map(([path, raw]) => {
  const { data, body } = parseFrontmatter(raw)
  return { slug: fileSlug(path), title: data.title, description: data.description, updated: data.updated, html: markdownToHtml(body) }
})
export const findPage = (slug: string) => contentPages.find((page) => page.slug === slug)

export const formatDate = (iso: string) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })
