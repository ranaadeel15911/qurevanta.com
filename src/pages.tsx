// Content pages: articles, About, legal pages, and the billing cost calculator.
import { useMemo, useState } from 'react'
import type { MouseEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiArrowRight, FiArrowUpRight, FiClock, FiDollarSign } from 'react-icons/fi'
import { articles, findPage, formatDate } from './content'
import type { Article } from './content'
import { AdSlot } from './ads'
import { contact, findService } from './siteData'
import { Breadcrumbs, CTA, PageHero } from './ui'
import { images } from './constants'

export const AUTHOR = 'QureVanta Revenue Cycle Team'

// Renders our own Markdown-generated HTML; internal links navigate without a full page reload
function Prose({ html, className = '' }: { html: string; className?: string }) {
  const navigate = useNavigate()
  const onClick = (event: MouseEvent<HTMLDivElement>) => {
    const link = (event.target as HTMLElement).closest('a')
    const href = link?.getAttribute('href')
    if (href?.startsWith('/') && !event.metaKey && !event.ctrlKey) { event.preventDefault(); navigate(href) }
  }
  return <div className={`prose ${className}`} onClick={onClick} dangerouslySetInnerHTML={{ __html: html }} />
}

function ArticleCard({ article }: { article: Article }) {
  return <Link className="article-card" to={`/resources/${article.slug}`}><img src={article.image} alt="" loading="lazy" width={600} height={340} /><div className="article-body"><span>{article.category}</span><h3>{article.title}</h3><p className="article-excerpt">{article.description}</p><div className="article-meta"><span><FiClock /> {article.readMinutes} min read</span><FiArrowUpRight /></div></div></Link>
}

export function Resources() {
  const categories = useMemo(() => ['All', ...new Set(articles.map((article) => article.category))], [])
  const [category, setCategory] = useState('All')
  const shown = category === 'All' ? articles : articles.filter((article) => article.category === category)
  return <>
    <PageHero eyebrow="Resources" title={<>Medical billing guides for a healthier <em>bottom line.</em></>} copy="Practical, plain-English guides to medical billing, coding, credentialing, denials, and compliance — written for practice owners, managers, and billing teams." image={images.about} />
    <section className="section directory-section">
      <div className="shell">
        <Link className="tool-banner" to="/tools/medical-billing-cost-calculator"><FiDollarSign /><div><b>Free tool: Medical billing cost calculator</b><span>Compare the true cost of in-house billing with outsourcing, using your own numbers.</span></div><FiArrowRight /></Link>
        <div className="category-filter" role="group" aria-label="Filter articles by topic">{categories.map((item) => <button type="button" key={item} className={item === category ? 'is-active' : ''} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}</div>
        <div className="article-grid">{shown.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>
      </div>
    </section>
    <CTA />
  </>
}

// Splits the article after its second paragraph so one in-article ad can sit there
function splitAfterSecondParagraph(html: string) {
  let index = -1
  for (let count = 0; count < 2; count++) { index = html.indexOf('</p>', index + 1); if (index < 0) return [html, ''] }
  return [html.slice(0, index + 4), html.slice(index + 4)]
}

export function ArticlePage({ article }: { article: Article }) {
  const [intro, rest] = splitAfterSecondParagraph(article.html)
  const related = [...articles.filter((item) => item.slug !== article.slug && item.category === article.category), ...articles.filter((item) => item.slug !== article.slug && item.category !== article.category)].slice(0, 3)
  const services = article.services.map((slug) => findService(slug)).filter((service) => service !== undefined)
  return <>
    <PageHero eyebrow={article.category} title={article.title} copy={article.description} image={article.image} />
    <Breadcrumbs trail={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }, { name: article.title, path: `/resources/${article.slug}` }]} />
    <section className="section article-section">
      <div className="shell article-layout">
        <article>
          <p className="article-byline">By <b>{AUTHOR}</b> · <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readMinutes} min read</p>
          <Prose html={intro} />
          <AdSlot position="inArticle" />
          <Prose html={rest} />
          <AdSlot position="endOfArticle" />
        </article>
        <aside className="article-aside">
          {services.length > 0 && <div className="aside-card"><h2>Related services</h2><ul>{services.map((service) => <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.title}<FiArrowRight /></Link></li>)}</ul></div>}
          <div className="aside-card aside-cta"><h2>Need a second opinion?</h2><p>Get a free, no-obligation review of your billing and revenue cycle.</p><Link className="button button-lime" to="/free-audit">Request a free audit <FiArrowUpRight /></Link><p className="aside-contact">Or call <a href={contact.phoneHref}>{contact.phone}</a></p></div>
        </aside>
      </div>
      <div className="shell related-articles"><h2>Keep reading</h2><div className="article-grid">{related.map((item) => <ArticleCard article={item} key={item.slug} />)}</div></div>
    </section>
  </>
}

export function ContentPageView({ slug }: { slug: 'privacy-policy' | 'terms' | 'disclaimer' }) {
  const page = findPage(slug)!
  return <>
    <section className="legal-hero"><div className="shell"><div className="eyebrow light"><span className="eyebrow-dot" /> Legal</div><h1>{page.title}</h1><p>Last updated {formatDate(page.updated)}</p></div></section>
    <section className="section article-section"><div className="shell legal-layout"><Prose html={page.html} /></div></section>
  </>
}

export function AboutPage() {
  const page = findPage('about')!
  return <>
    <PageHero eyebrow="About QureVanta" title={<>A partner for the <em>business of care.</em></>} copy="We help healthcare practices get paid accurately and on time — with clear reporting, accountable teams, and a revenue cycle you can see." image={images.about} imageAlt="Healthcare billing specialists reviewing claims" />
    <section className="section article-section"><div className="shell legal-layout"><Prose html={page.html} /></div></section>
    <CTA />
  </>
}

const money = (value: number) => value.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function NumberField({ label, value, onChange, prefix, suffix, step = 1, hint }: { label: string; value: number; onChange: (value: number) => void; prefix?: string; suffix?: string; step?: number; hint?: string }) {
  return <label className="calc-field"><span>{label}</span><div>{prefix && <i>{prefix}</i>}<input type="number" inputMode="decimal" min={0} step={step} value={Number.isFinite(value) ? value : 0} onChange={(event) => onChange(Math.max(0, Number(event.target.value)))} />{suffix && <i>{suffix}</i>}</div>{hint && <small>{hint}</small>}</label>
}

export function CalculatorPage() {
  const [collections, setCollections] = useState(1_000_000)
  const [staff, setStaff] = useState(2)
  const [salary, setSalary] = useState(52_000)
  const [benefits, setBenefits] = useState(25)
  const [software, setSoftware] = useState(1_500)
  const [other, setOther] = useState(3_000)
  const [rate, setRate] = useState(6)
  const [lift, setLift] = useState(0)

  const inHouse = staff * salary * (1 + benefits / 100) + software * 12 + other
  const outsourcedCollections = collections * (1 + lift / 100)
  const outsourced = outsourcedCollections * (rate / 100)
  const netInHouse = collections - inHouse
  const netOutsourced = outsourcedCollections - outsourced
  const difference = netOutsourced - netInHouse
  const pct = (cost: number, base: number) => base > 0 ? `${((cost / base) * 100).toFixed(1)}% of collections` : '—'

  return <>
    <PageHero eyebrow="Free tool" title={<>Medical billing cost <em>calculator.</em></>} copy="Compare the fully loaded cost of in-house billing with outsourced billing — and see how collection performance changes the answer." image={images.calculator} />
    <Breadcrumbs trail={[{ name: 'Home', path: '/' }, { name: 'Resources', path: '/resources' }, { name: 'Medical billing cost calculator', path: '/tools/medical-billing-cost-calculator' }]} />
    <section className="section article-section">
      <div className="shell calculator">
        <div className="calc-inputs">
          <h2>Your practice</h2>
          <NumberField label="Annual collections" prefix="$" value={collections} onChange={setCollections} step={10000} hint="Total payments received in a year" />
          <h3>In-house billing</h3>
          <NumberField label="Billing staff (full-time)" value={staff} onChange={setStaff} step={0.5} />
          <NumberField label="Average salary per person" prefix="$" value={salary} onChange={setSalary} step={1000} />
          <NumberField label="Benefits and payroll taxes" suffix="%" value={benefits} onChange={setBenefits} hint="Commonly 20–30% of salary" />
          <NumberField label="Software, clearinghouse, statements per month" prefix="$" value={software} onChange={setSoftware} step={100} />
          <NumberField label="Training, certification, other per year" prefix="$" value={other} onChange={setOther} step={500} />
          <h3>Outsourced billing</h3>
          <NumberField label="Billing company fee" suffix="% of collections" value={rate} onChange={setRate} step={0.5} hint="Commonly 4–10%, depending on specialty and scope" />
          <NumberField label="Expected change in collections" suffix="%" value={lift} onChange={setLift} step={0.5} hint="Leave at 0 to compare cost only" />
        </div>
        <div className="calc-results" aria-live="polite">
          <h2>Estimated annual cost</h2>
          <div className="calc-result"><span>In-house</span><b>{money(inHouse)}</b><small>{pct(inHouse, collections)}</small></div>
          <div className="calc-result"><span>Outsourced</span><b>{money(outsourced)}</b><small>{pct(outsourced, outsourcedCollections)}</small></div>
          <div className={`calc-result calc-total ${difference >= 0 ? 'is-positive' : 'is-negative'}`}><span>Net revenue difference with outsourcing</span><b>{difference >= 0 ? '+' : '−'}{money(Math.abs(difference))}</b><small>Collections minus billing cost, per year</small></div>
          <p className="calc-note">Estimates are illustrative and based only on the figures you enter. They are not a quote.</p>
          <Link className="button button-lime" to="/free-audit">Get a free audit of your numbers <FiArrowUpRight /></Link>
        </div>
      </div>
      <div className="shell legal-layout calc-guide">
        <div className="prose">
          <h2>How to use this calculator</h2>
          <p>Enter your annual collections — the money your practice actually receives, not the amount you bill. Then enter what you spend on billing in-house: the number of full-time billing staff, their average salary, the cost of benefits and payroll taxes, and your monthly software, clearinghouse, and statement costs. Finally, enter the fee quoted by a billing company as a percentage of collections.</p>
          <p>The calculator compares the fully loaded annual cost of each model, and the net revenue your practice keeps after billing costs. If you expect a billing partner to improve collections — for example by reducing denials or recovering old A/R — enter that change to see its effect. A small improvement in collections often matters more than the difference in fees.</p>
          <h2>What the numbers leave out</h2>
          <p>Some costs are hard to put into a formula: the time managers spend supervising billing, the cash-flow dip when a biller leaves, recruiting and training costs, and revenue lost to unworked denials and timely filing limits. Equally, outsourcing has its own considerations, such as the scope of services included in the fee and how transparent the reporting is.</p>
          <p>For a detailed walk-through of these factors, read our guide to <Link to="/resources/in-house-vs-outsourced-medical-billing-cost">in-house versus outsourced medical billing costs</Link>, and our overview of the <Link to="/resources/revenue-cycle-kpis">revenue cycle KPIs</Link> that show how well billing is performing.</p>
        </div>
      </div>
    </section>
    <CTA />
  </>
}
