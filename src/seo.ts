// Per-page titles, descriptions and structured data. Used by the app (client-side navigation)
// and by scripts/prerender.mjs, which writes a static HTML file per route at build time.
import { contact, serviceGroups, services, specialties, teams } from './siteData'
import { articles, findPage } from './content'
import { serviceOverviews } from './pageContent'

export const SITE_URL = 'https://www.qurevanta.com'
const brand = contact.company
const AUTHOR = 'QureVanta Revenue Cycle Team'

type JsonLd = Record<string, unknown>
export type PageMeta = { path: string; title: string; description: string; noindex?: boolean; ogType?: 'website' | 'article'; image?: string; jsonLd?: JsonLd[] }

const clip = (text: string, max = 158) => {
  const clean = text.replace(/\s+/g, ' ').trim()
  if (clean.length <= max) return clean
  return `${clean.slice(0, clean.lastIndexOf(' ', max - 1))}…`
}
const titleFor = (text: string) => (text.length > 60 ? text : `${text} | ${brand}`)

const organization = { '@type': 'MedicalBusiness', '@id': `${SITE_URL}/#organization`, name: brand, url: `${SITE_URL}/`, logo: `${SITE_URL}/logo-512.png`, email: contact.email, telephone: '+1-407-970-3176', address: { '@type': 'PostalAddress', addressLocality: 'Winter Springs', addressRegion: 'FL', postalCode: '32708', addressCountry: 'US' } }
const breadcrumbs = (trail: [string, string][]): JsonLd => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: trail.map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: `${SITE_URL}${path}` })) })

const staticPages: PageMeta[] = [
  { path: '/', title: `${brand} | Medical Billing & Revenue Cycle Management`, description: `Accurate, hassle-free medical billing, credentialing, and revenue cycle management for practices. Fewer denials, faster payments. Call ${contact.phone}.`, jsonLd: [{ '@context': 'https://schema.org', ...organization }, { '@context': 'https://schema.org', '@type': 'WebSite', name: brand, url: `${SITE_URL}/` }] },
  { path: '/about', title: `About Us | ${brand}`, description: findPage('about')?.description ?? '', jsonLd: [{ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About QureVanta Healthcare', url: `${SITE_URL}/about`, about: organization }, breadcrumbs([['Home', '/'], ['About', '/about']])] },
  { path: '/services', title: `Medical Billing & RCM Services | ${brand}`, description: 'From credentialing and payer contracting to claims, denials, A/R follow-up, and reporting — every revenue cycle service, one accountable team.', jsonLd: [breadcrumbs([['Home', '/'], ['Services', '/services']])] },
  { path: '/teams', title: `Our Service Teams | ${brand}`, description: 'Billing, credentialing, denial recovery, patient billing, and reporting specialists working together around your practice’s goals.', jsonLd: [breadcrumbs([['Home', '/'], ['Our teams', '/teams']])] },
  { path: '/specialties', title: `Specialty Medical Billing | ${brand}`, description: 'Specialty-aware medical billing for cardiology, orthopedics, neurology, ophthalmology, pain management, pediatrics, urgent care, wound care, and more.', jsonLd: [breadcrumbs([['Home', '/'], ['Specialties', '/specialties']])] },
  { path: '/resources', title: `Medical Billing Guides & Resources | ${brand}`, description: 'Practical guides to medical billing, coding, credentialing, denial management, and compliance for healthcare practices.', jsonLd: [breadcrumbs([['Home', '/'], ['Resources', '/resources']])] },
  { path: '/tools/medical-billing-cost-calculator', title: `Medical Billing Cost Calculator: In-House vs Outsourced | ${brand}`, description: 'Free calculator: compare the fully loaded cost of in-house medical billing with outsourced billing, and see how collection performance changes the result.', jsonLd: [{ '@context': 'https://schema.org', '@type': 'WebApplication', name: 'Medical billing cost calculator', url: `${SITE_URL}/tools/medical-billing-cost-calculator`, applicationCategory: 'BusinessApplication', operatingSystem: 'Any', offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' }, provider: organization }, breadcrumbs([['Home', '/'], ['Resources', '/resources'], ['Medical billing cost calculator', '/tools/medical-billing-cost-calculator']])] },
  { path: '/free-audit', title: `Free Revenue Cycle Audit | ${brand}`, description: 'Request a free, no-obligation audit of your practice’s billing and revenue cycle. We’ll show you where revenue is being missed.' },
  { path: '/contact', title: `Contact Us | ${brand}`, description: `Talk to the QureVanta team: call ${contact.phone} or email ${contact.email}. ${contact.address}.`, jsonLd: [{ '@context': 'https://schema.org', '@type': 'ContactPage', url: `${SITE_URL}/contact`, about: organization }] },
  ...(['privacy-policy', 'terms', 'disclaimer'] as const).map((slug) => { const page = findPage(slug)!; return { path: `/${slug}`, title: `${page.title} | ${brand}`, description: page.description } }),
]

export const pages: PageMeta[] = [
  ...staticPages,
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    title: `${s.title} Services | ${brand}`,
    description: clip(serviceOverviews[s.slug] ?? `${s.headline.replace(' — ', ': ')}. ${s.bullets[0] ?? ''}`),
    image: s.image,
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'Service', name: s.title, serviceType: serviceGroups.find((g) => g.id === s.group)?.title, description: serviceOverviews[s.slug] ?? s.headline, provider: organization, areaServed: { '@type': 'Country', name: 'United States' }, url: `${SITE_URL}/services/${s.slug}` },
      breadcrumbs([['Home', '/'], ['Services', '/services'], [s.title, `/services/${s.slug}`]]),
    ],
  })),
  ...teams.map((t) => ({ path: `/teams/${t.slug}`, title: `${t.title} | ${brand}`, description: clip(t.copy), jsonLd: [breadcrumbs([['Home', '/'], ['Our teams', '/teams'], [t.title, `/teams/${t.slug}`]])] })),
  ...specialties.map((s) => ({ path: `/specialties/${s.slug}`, title: `${s.name} Medical Billing Services | ${brand}`, description: clip(s.description), image: s.image, jsonLd: [breadcrumbs([['Home', '/'], ['Specialties', '/specialties'], [s.name, `/specialties/${s.slug}`]])] })),
  ...articles.map((a) => ({
    path: `/resources/${a.slug}`,
    title: titleFor(a.title),
    description: clip(a.description),
    ogType: 'article' as const,
    image: a.image,
    jsonLd: [
      { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: a.title, description: a.description, image: a.image, datePublished: a.date, dateModified: a.date, author: { '@type': 'Organization', name: AUTHOR, url: `${SITE_URL}/about` }, publisher: organization, mainEntityOfPage: `${SITE_URL}/resources/${a.slug}`, articleSection: a.category },
      breadcrumbs([['Home', '/'], ['Resources', '/resources'], [a.title, `/resources/${a.slug}`]]),
    ],
  })),
]

export const notFoundMeta: PageMeta = { path: '/404', title: `Page Not Found | ${brand}`, description: 'The page you are looking for could not be found.', noindex: true }

export const metaFor = (pathname: string): PageMeta => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return pages.find((page) => page.path === path) ?? notFoundMeta
}
