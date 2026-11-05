import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './index.css'
import App from './App.tsx'

AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 70,
})

// Pages are prerendered at build time (scripts/prerender.mjs); hydrate them when present
const root = document.getElementById('root')!
const app = <StrictMode><App /></StrictMode>
if (root.hasChildNodes()) hydrateRoot(root, app)
else createRoot(root).render(app)
