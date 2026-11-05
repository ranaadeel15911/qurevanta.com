// Used only at build time by scripts/prerender.mjs to render each route to static HTML.
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'

export function render(url: string) {
  return renderToString(<StrictMode><StaticRouter location={url}><AppRoutes /></StaticRouter></StrictMode>)
}
