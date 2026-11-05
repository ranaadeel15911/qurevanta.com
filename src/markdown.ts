// Minimal Markdown → HTML for our own trusted content files (articles and legal pages).
// Supports: ## / ### headings, paragraphs, - and 1. lists, > callouts, **bold**, *italic*, [links](/path).

const escapeHtml = (text: string) => text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const inline = (text: string) => escapeHtml(text)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/\*(.+?)\*/g, '<em>$1</em>')
  .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label: string, href: string) => href.startsWith('/')
    ? `<a href="${href}">${label}</a>`
    : `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`)

export const slugify = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function markdownToHtml(source: string) {
  const html: string[] = []
  const blocks = source.replace(/\r\n/g, '\n').trim().split(/\n{2,}/)
  for (const block of blocks) {
    const lines = block.split('\n')
    const heading = /^(#{2,3}) (.+)$/.exec(block)
    if (heading && lines.length === 1) {
      const level = heading[1].length
      html.push(`<h${level} id="${slugify(heading[2])}">${inline(heading[2])}</h${level}>`)
    } else if (lines.every((line) => /^- /.test(line))) {
      html.push(`<ul>${lines.map((line) => `<li>${inline(line.slice(2))}</li>`).join('')}</ul>`)
    } else if (lines.every((line) => /^\d+\. /.test(line))) {
      html.push(`<ol>${lines.map((line) => `<li>${inline(line.replace(/^\d+\. /, ''))}</li>`).join('')}</ol>`)
    } else if (lines.every((line) => line.startsWith('> '))) {
      html.push(`<blockquote>${inline(lines.map((line) => line.slice(2)).join(' '))}</blockquote>`)
    } else {
      html.push(`<p>${lines.map(inline).join('<br />')}</p>`)
    }
  }
  return html.join('\n')
}

export function parseFrontmatter(raw: string) {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/.exec(raw)
  if (!match) throw new Error('Content file is missing frontmatter')
  const data: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const index = line.indexOf(':')
    if (index > 0) data[line.slice(0, index).trim()] = line.slice(index + 1).trim()
  }
  return { data, body: match[2] }
}
