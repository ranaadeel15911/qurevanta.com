// Shared building blocks used by the app shell and the content pages.
import { Fragment } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowUpRight, FiChevronRight } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { images } from './constants'

export function PageHero({ eyebrow, title, copy, image = images.doctor, imageAlt = '' }: { eyebrow: string; title: ReactNode; copy: string; image?: string; imageAlt?: string }) {
  const long = typeof title === 'string' && title.length > 38
  return <section className={`page-hero ${long ? 'page-hero-long' : ''}`}><div className="shell page-hero-grid"><div><div className="eyebrow light"><span className="eyebrow-dot" /> {eyebrow}</div><h1>{title}</h1><p>{copy}</p></div><motion.img initial={{ opacity: 0, scale: 1.06 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} src={image} alt={imageAlt} width={1100} height={660} /></div></section>
}

export function CTA() {
  return <section className="mini-cta"><div className="shell"><div><div className="eyebrow light"><span className="eyebrow-dot" /> Start a conversation</div><h2>Make your next<br /><em>move clearer.</em></h2></div><Link className="button button-lime" to="/free-audit">Request a free audit <FiArrowUpRight /></Link></div></section>
}

export type Crumb = { name: string; path: string }

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return <nav className="breadcrumbs shell" aria-label="Breadcrumb"><ol>{trail.map((crumb, index) => <Fragment key={crumb.path}><li>{index === trail.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link to={crumb.path}>{crumb.name}</Link>}</li>{index < trail.length - 1 && <li aria-hidden="true"><FiChevronRight /></li>}</Fragment>)}</ol></nav>
}
