// Google AdSense. Ads render only on blog articles, and only once VITE_ADSENSE_CLIENT
// (ca-pub-…) and a slot ID are set. The ownership meta tag and ads.txt are added at build
// time by scripts/prerender.mjs from the same variable.
import { useEffect, useRef } from 'react'

const client = import.meta.env.VITE_ADSENSE_CLIENT as string | undefined
const SCRIPT_ID = 'adsbygoogle-js'
const articleAdSlots = {
  inArticle: import.meta.env.VITE_ADSENSE_SLOT_IN_ARTICLE as string | undefined,
  endOfArticle: import.meta.env.VITE_ADSENSE_SLOT_END_OF_ARTICLE as string | undefined,
}

function loadAdSense() {
  if (!client || document.getElementById(SCRIPT_ID)) return
  const script = document.createElement('script')
  script.id = SCRIPT_ID
  script.async = true
  script.crossOrigin = 'anonymous'
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`
  document.head.appendChild(script)
}

export function AdSlot({ position }: { position: keyof typeof articleAdSlots }) {
  const slot = articleAdSlots[position]
  const ref = useRef<HTMLModElement>(null)
  useEffect(() => {
    if (!client || !slot || !ref.current || ref.current.dataset.adStatus) return
    loadAdSense()
    try {
      const w = window as unknown as { adsbygoogle?: unknown[] }
      ;(w.adsbygoogle = w.adsbygoogle || []).push({})
    } catch { /* ad blockers can throw here; the page works without ads */ }
  }, [slot])
  if (!client || !slot) return null
  return <aside className="ad-slot" aria-label="Advertisement">
    <span>Advertisement</span>
    <ins ref={ref} className="adsbygoogle" style={{ display: 'block' }} data-ad-client={client} data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true" />
  </aside>
}
