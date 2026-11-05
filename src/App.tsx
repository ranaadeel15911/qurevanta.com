import { useEffect, useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiCheck, FiChevronDown, FiMail, FiMenu, FiPhone, FiX } from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
import AOS from 'aos'
import { contact, findService, serviceGroups, services, specialties, teams } from './siteData'
import { serviceOverviews, specialtyContent } from './pageContent'
import { articlesForService, findArticle } from './content'
import { submitLead } from './leads'
import type { Lead } from './leads'
import { ContactList } from './MarketingSections'
import { ReferenceStyleHome } from './ReferenceStyleHome'
import { AboutPage, ArticlePage, CalculatorPage, ContentPageView, Resources } from './pages'
import { Breadcrumbs, CTA, PageHero } from './ui'
import { images, pad } from './constants'
import { SITE_URL, metaFor } from './seo'
import './App.css'
import './theme-dark.css'
import './content.css'

// "Headline — Accent" copy from the PDF renders the part after the dash in the accent style
const splitHeadline = (headline: string) => { const [lead, accent] = headline.split(' — '); return <>{lead}{accent && <> — <em>{accent}</em></>}</> }

function ServicesMenu({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false)
  const go = () => { setOpen(false); onNavigate() }
  // Hover opens the full menu on desktop; touch and the mobile menu use the chevron button
  const hover = (value: boolean) => { if (window.matchMedia('(hover: hover) and (min-width: 901px)').matches) setOpen(value) }
  return <div className={`nav-dropdown ${open ? 'is-open' : ''}`} onMouseEnter={() => hover(true)} onMouseLeave={() => hover(false)}>
    <NavLink to="/services" onClick={go}>Services</NavLink><button className="nav-dropdown-toggle" type="button" aria-expanded={open} aria-label="Show all services" onClick={() => setOpen(!open)}><FiChevronDown /></button>
    <div className="mega-menu"><div className="mega-menu-inner">{serviceGroups.map((group) => <div className={`mega-column mega-${group.id}`} key={group.id}><h4>{group.title}</h4><ul>{services.filter((service) => service.group === group.id).map((service, index) => <li key={service.slug}><Link to={`/services/${service.slug}`} onClick={go}><span>{pad(index + 1)}</span>{service.title}</Link></li>)}</ul></div>)}</div></div>
  </div>
}

// Keeps <title>, description, canonical and Open Graph tags in sync on client-side navigation
function setHeadTag(selector: string, create: () => HTMLElement, attr: string, value: string | null) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (value === null) { el?.remove(); return }
  if (!el) { el = create(); document.head.appendChild(el) }
  el.setAttribute(attr, value)
}
function usePageMeta(pathname: string) {
  useEffect(() => {
    const meta = metaFor(pathname)
    const url = `${SITE_URL}${meta.path}`
    const named = (name: string) => () => Object.assign(document.createElement('meta'), { name })
    const prop = (property: string) => () => { const el = document.createElement('meta'); el.setAttribute('property', property); return el }
    document.title = meta.title
    setHeadTag('meta[name="description"]', named('description'), 'content', meta.description)
    setHeadTag('meta[name="robots"]', named('robots'), 'content', meta.noindex ? 'noindex' : null)
    setHeadTag('link[rel="canonical"]', () => Object.assign(document.createElement('link'), { rel: 'canonical' }), 'href', meta.noindex ? null : url)
    setHeadTag('meta[property="og:title"]', prop('og:title'), 'content', meta.title)
    setHeadTag('meta[property="og:description"]', prop('og:description'), 'content', meta.description)
    setHeadTag('meta[property="og:url"]', prop('og:url'), 'content', url)
  }, [pathname])
}

function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  usePageMeta(location.pathname)
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'auto' }); AOS.refreshHard() }, [location.pathname])
  const close = () => setOpen(false)
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <div className="utility-bar"><div className="shell utility-inner"><span>Healthcare revenue cycle management</span><div><a href={`mailto:${contact.email}`}><FiMail /> {contact.email}</a><a href={contact.phoneHref}><FiPhone /> {contact.phone}</a><Link to="/free-audit">Request a free audit <FiArrowUpRight /></Link></div></div></div>
    <nav className="nav shell site-nav" aria-label="Main"><Link className="brand" to="/" aria-label="QureVanta Healthcare home"><span>Q</span> Qurevanta</Link><div className={`nav-links ${open ? 'is-open' : ''}`}><NavLink to="/about" onClick={close}>About</NavLink><ServicesMenu onNavigate={close} /><NavLink to="/teams" onClick={close}>Our teams</NavLink><NavLink to="/specialties" onClick={close}>Specialties</NavLink><NavLink to="/resources" onClick={close}>Resources</NavLink><NavLink to="/contact" onClick={close}>Contact</NavLink><Link className="nav-cta" to="/free-audit" onClick={close}>Request an audit <FiArrowUpRight /></Link></div><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <FiX /> : <FiMenu />}</button></nav>
    <AnimatePresence mode="wait"><motion.main id="main" key={location.pathname} className="route-shell" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: .35 }}>{children}</motion.main></AnimatePresence>
    <Footer />
  </>
}

function Footer() {
  return <footer className="footer">
    <div className="shell footer-top"><Link className="brand" to="/" aria-label="QureVanta Healthcare home"><span>Q</span> Qurevanta</Link><p>Clarity for the business of care.</p><div className="footer-links"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/teams">Our teams</Link><Link to="/specialties">Specialties</Link><Link to="/resources">Resources</Link><Link to="/tools/medical-billing-cost-calculator">Cost calculator</Link><Link to="/contact">Contact</Link></div></div>
    <div className="shell footer-contact"><div><span>Talk to our team</span><b>Let’s talk about your practice.</b></div><ContactList className="contact-list-inline" /></div>
    <div className="shell footer-bottom"><span>© 2026 {contact.company}. All rights reserved.</span><span className="footer-legal"><Link to="/privacy-policy">Privacy Policy</Link> / <Link to="/terms">Terms</Link> / <Link to="/disclaimer">Disclaimer</Link></span><span>{contact.address}</span></div>
  </footer>
}

type FormState = 'idle' | 'sending' | 'saved' | 'email' | 'error'

function AuditForm({ source }: { source: Lead['source'] }) {
  const [state, setState] = useState<FormState>('idle')
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const value = (key: string) => String(form.get(key) ?? '').trim()
    if (value('website')) { setState('saved'); return } // hidden honeypot field: bots fill it, people don't
    setState('sending')
    try {
      setState(await submitLead({ source, name: value('name'), email: value('email'), phone: value('phone'), practice: value('practice'), specialty: value('specialty'), service: value('service'), message: value('message') }))
    } catch { setState('error') }
  }
  if (state === 'saved' || state === 'email') return <div className="audit-form standalone-form"><div className="form-success"><div className="success-icon"><FiCheck /></div><h3>{state === 'saved' ? 'Thank you — we have your note.' : 'Your email app should now be open.'}</h3><p>{state === 'saved' ? 'A QureVanta specialist will be in touch soon.' : `Send the prepared email to ${contact.email}, or call us at ${contact.phone}.`}</p><button className="button button-lime" type="button" onClick={() => setState('idle')}>Send another note</button></div></div>
  return <form className="audit-form standalone-form" onSubmit={submit}>
    <div className="form-heading"><span>01</span><b>{source === 'contact' ? 'Send us a message' : 'Request a free audit'}</b></div>
    <label>Your name<input name="name" type="text" autoComplete="name" placeholder="Full name" required maxLength={120} /></label>
    <label>Work email<input name="email" type="email" autoComplete="email" placeholder="you@practice.com" required maxLength={200} /></label>
    <label>Phone<input name="phone" type="tel" autoComplete="tel" placeholder="(555) 555-5555" maxLength={40} /></label>
    <label>Practice or organization<input name="practice" type="text" autoComplete="organization" placeholder="Your organization" required maxLength={200} /></label>
    <label>Specialty<input name="specialty" type="text" placeholder="Your specialty" maxLength={120} /></label>
    <label>What can we help with?<select name="service" defaultValue=""><option value="">Select a service</option>{serviceGroups.map((group) => <optgroup label={group.title} key={group.id}>{services.filter((service) => service.group === group.id).map((service) => <option key={service.slug}>{service.title}</option>)}</optgroup>)}</select></label>
    <label>Message<textarea name="message" rows={4} placeholder="Tell us briefly what you are working through" maxLength={2000} /></label>
    <label className="form-honeypot" aria-hidden="true">Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
    <button className="button button-dark" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Start the conversation'} <FiArrowUpRight /></button>
    {state === 'error' && <p className="form-error" role="alert">Something went wrong. Please email <a href={`mailto:${contact.email}`}>{contact.email}</a> or call <a href={contact.phoneHref}>{contact.phone}</a>.</p>}
    <small>Please do not include patient information. We use your details only to respond to you — see our <Link to="/privacy-policy">Privacy Policy</Link>.</small>
  </form>
}

function Services() {
  return <><PageHero eyebrow="Our services" title={<>Comprehensive revenue cycle <em>services.</em></>} copy="From setup and onboarding to ongoing revenue cycle management — every service, one accountable team." image={images.contact} imageAlt="Revenue cycle team at work" />{serviceGroups.map((group) => <section className="section directory-section service-group-section" key={group.id}><div className="shell"><h2 className="eyebrow"><span className="eyebrow-dot" /> {group.title}</h2><div className="directory-grid">{services.filter((service) => service.group === group.id).map((service, index) => <motion.div key={service.slug} whileHover={{ y: -7 }}><Link className="directory-card" to={`/services/${service.slug}`}><img src={service.image} alt="" loading="lazy" /><div><span>{pad(index + 1)}</span><h3>{service.title}</h3><p>{service.headline}</p><b>Explore service <FiArrowUpRight /></b></div></Link></motion.div>)}</div></div></section>)}<CTA /></>
}

const workSteps: [string, string][] = [
  ['Review', 'We start by reviewing your current process, data, and goals for this part of the revenue cycle.'],
  ['Set up', 'We agree on workflows, access, and reporting, and connect to your practice management system.'],
  ['Deliver', 'Our specialists do the daily work, with a clear owner and next step for every task.'],
  ['Report', 'You receive regular reports showing results, open issues, and what we are improving next.'],
]

function ServiceDetail() {
  const { slug } = useParams()
  const service = findService(slug)
  if (!service) return <NotFound />
  const group = serviceGroups.find((item) => item.id === service.group)
  const team = teams.find((item) => item.services.some(([id]) => id === service.slug))
  const related = team ? team.services.filter(([id]) => id !== service.slug) : []
  const reading = articlesForService(service.slug).slice(0, 3)
  return <>
    <PageHero eyebrow={group?.title ?? 'Services'} title={service.title} copy={team ? `Delivered by our ${team.title} — one accountable partner from first claim to final payment.` : 'One accountable partner from first claim to final payment.'} image={service.image} imageAlt={`${service.title} specialists at work`} />
    <Breadcrumbs trail={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }, { name: service.title, path: `/services/${service.slug}` }]} />
    <section className="section detail-section"><div className="shell detail-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> {service.eyebrow}</div><h2>{splitHeadline(service.headline)}</h2>{serviceOverviews[service.slug] && <p className="service-overview">{serviceOverviews[service.slug]}</p>}</div><div><h3 className="list-heading">What’s included</h3><ul className="check-list service-bullets">{service.bullets.map((bullet) => <li key={bullet}><FiCheck /> {bullet}</li>)}</ul><Link className="button button-lime consult-button" to="/free-audit">Schedule a FREE Consultation <FiArrowUpRight /></Link></div></div>
      <div className="shell work-steps"><h2 className="eyebrow"><span className="eyebrow-dot" /> How we work</h2><ol>{workSteps.map(([title, text], index) => <li key={title}><span>{pad(index + 1)}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div>
      {reading.length > 0 && <div className="shell related-services"><div className="eyebrow"><span className="eyebrow-dot" /> Related guides</div><div className="related-links">{reading.map((article) => <Link to={`/resources/${article.slug}`} key={article.slug}>{article.title}<FiArrowRight /></Link>)}</div></div>}
      {team && related.length > 0 && <div className="shell related-services"><div className="eyebrow"><span className="eyebrow-dot" /> More from the <Link to={`/teams/${team.slug}`}>{team.title}</Link></div><div className="related-links">{related.map(([id, label]) => <Link to={`/services/${id}`} key={id}>{label}<FiArrowRight /></Link>)}</div></div>}
    </section><CTA />
  </>
}

function DirectoryPage({ type }: { type: 'specialties' | 'teams' }) {
  const specialtyPage = type === 'specialties'
  const items = specialtyPage ? specialties.map((item) => ({ slug: item.slug, name: item.name, copy: item.description, image: item.image })) : teams.map((team) => ({ slug: team.slug, name: team.title, copy: team.copy, image: team.image }))
  return <><PageHero eyebrow={specialtyPage ? 'Specialties' : 'Our teams'} title={specialtyPage ? <>Specialty-aware support for <em>real practices.</em></> : <>The people behind a healthier <em>revenue cycle.</em></>} copy={specialtyPage ? 'Every specialty has its own codes, authorizations, and payer rules. Our workflows are built around them.' : 'Billing, credentialing, recovery, patient billing, and reporting specialists working together around your goals.'} image={specialtyPage ? images.about : teams[0].image} /><section className="section directory-section"><div className="shell directory-grid">{items.map((item, index) => <Link className={`directory-card ${specialtyPage ? 'specialty-card' : ''}`} to={`/${type}/${item.slug}`} key={item.slug}><img src={item.image} alt="" loading="lazy" /><div><span>{pad(index + 1)}</span><h3>{specialtyPage ? `${item.name} billing` : item.name}</h3><p>{item.copy}</p><b>Explore <FiArrowUpRight /></b></div></Link>)}</div></section><CTA /></>
}

function SpecialtyDetail() {
  const { slug } = useParams()
  const specialty = specialties.find((item) => item.slug === slug)
  const content = slug ? specialtyContent[slug] : undefined
  if (!specialty || !content) return <NotFound />
  return <>
    <PageHero eyebrow="Specialty billing" title={<>{specialty.name} medical billing <em>with visibility.</em></>} copy={specialty.description} image={specialty.image} imageAlt={`${specialty.name} care`} />
    <Breadcrumbs trail={[{ name: 'Home', path: '/' }, { name: 'Specialties', path: '/specialties' }, { name: specialty.name, path: `/specialties/${specialty.slug}` }]} />
    <section className="section detail-section">
      <div className="shell detail-grid"><div><div className="eyebrow"><span className="eyebrow-dot" /> The opportunity</div><h2>A healthier {specialty.name.toLowerCase()} revenue cycle starts with a <em>clearer view.</em></h2></div><div><p className="service-overview">{content.intro}</p></div></div>
      <div className="shell specialty-challenges"><h2 className="eyebrow"><span className="eyebrow-dot" /> Billing challenges we handle</h2><div>{content.challenges.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div>
      <div className="shell related-services"><div className="eyebrow"><span className="eyebrow-dot" /> Services {specialty.name.toLowerCase()} practices use most</div><div className="related-links">{content.services.map((id) => { const service = findService(id); return service && <Link to={`/services/${id}`} key={id}>{service.title}<FiArrowRight /></Link> })}</div></div>
    </section><CTA />
  </>
}

function TeamDetail() {
  const { slug } = useParams()
  const team = teams.find((item) => item.slug === slug)
  if (!team) return <NotFound />
  return <><PageHero eyebrow="Our service teams" title={<>{team.title.replace(/ Team$/, '')} <em>team.</em></>} copy={team.copy} image={team.image} /><Breadcrumbs trail={[{ name: 'Home', path: '/' }, { name: 'Our teams', path: '/teams' }, { name: team.title, path: `/teams/${team.slug}` }]} /><section className="section directory-section"><div className="shell"><h2 className="eyebrow"><span className="eyebrow-dot" /> Services this team delivers</h2><div className="directory-grid">{team.services.map(([id, label], index) => { const service = findService(id); return service && <Link className="directory-card" to={`/services/${id}`} key={id}><img src={service.image} alt="" loading="lazy" /><div><span>{pad(index + 1)}</span><h3>{label}</h3><p>{service.headline}</p><b>Explore service <FiArrowUpRight /></b></div></Link> })}</div></div></section><CTA /></>
}

function AuditPage({ isContact = false }: { isContact?: boolean }) {
  return <><PageHero eyebrow={isContact ? 'Contact QureVanta' : 'Free RCM audit'} title={isContact ? <>Let’s make the next step <em>clearer.</em></> : <>Find the revenue <em>you are missing.</em></>} copy={isContact ? 'Tell us what your team is working through and we will connect you with a practical next step.' : 'Tell us about your practice and we will bring a fresh perspective with zero obligation.'} image={isContact ? images.contact : images.audit} /><section className="section audit-page"><div className="shell audit-layout"><div className="audit-copy"><div className="eyebrow"><span className="eyebrow-dot" /> {isContact ? 'Start a conversation' : 'What to expect'}</div>{isContact ? <><h2>Reach the QureVanta <em>team.</em></h2><p>Call, email, or send the form — a specialist will respond with a clear next step for your practice.</p></> : <><h2>A clear starting point for a <em>better cycle.</em></h2><p>We will review your current process and identify where focused attention can make the biggest difference.</p></>}{isContact ? <ContactList className="contact-list-cards" /> : <><ul className="check-list"><li><FiCheck /> No-cost initial review</li><li><FiCheck /> Built around your goals</li><li><FiCheck /> Clear next steps</li></ul><p className="audit-call">Prefer to talk it through? Call <a href={contact.phoneHref}>{contact.phone}</a> or email <a href={`mailto:${contact.email}`}>{contact.email}</a>.</p></>}</div><AuditForm source={isContact ? 'contact' : 'audit'} /></div></section></>
}

function ArticleRoute() {
  const { slug } = useParams()
  const article = findArticle(slug)
  return article ? <ArticlePage article={article} /> : <NotFound />
}

function NotFound() {
  return <><PageHero eyebrow="404" title={<>This page could not be <em>found.</em></>} copy="The link may be old or mistyped. Try one of these instead." image={images.doctorMale} /><section className="section prose-section"><div className="shell related-links"><Link to="/">Home<FiArrowRight /></Link><Link to="/services">Services<FiArrowRight /></Link><Link to="/resources">Resources<FiArrowRight /></Link><Link to="/contact">Contact<FiArrowRight /></Link></div></section></>
}

export function AppRoutes() {
  return <Layout><Routes>
    <Route path="/" element={<ReferenceStyleHome />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/services" element={<Services />} />
    <Route path="/services/:slug" element={<ServiceDetail />} />
    <Route path="/specialties" element={<DirectoryPage type="specialties" />} />
    <Route path="/specialties/:slug" element={<SpecialtyDetail />} />
    <Route path="/teams" element={<DirectoryPage type="teams" />} />
    <Route path="/teams/:slug" element={<TeamDetail />} />
    <Route path="/resources" element={<Resources />} />
    <Route path="/resources/:slug" element={<ArticleRoute />} />
    <Route path="/tools/medical-billing-cost-calculator" element={<CalculatorPage />} />
    <Route path="/free-audit" element={<AuditPage />} />
    <Route path="/contact" element={<AuditPage isContact />} />
    <Route path="/privacy-policy" element={<ContentPageView slug="privacy-policy" />} />
    <Route path="/terms" element={<ContentPageView slug="terms" />} />
    <Route path="/disclaimer" element={<ContentPageView slug="disclaimer" />} />
    <Route path="*" element={<NotFound />} />
  </Routes></Layout>
}

export default function App() { return <BrowserRouter><AppRoutes /></BrowserRouter> }
