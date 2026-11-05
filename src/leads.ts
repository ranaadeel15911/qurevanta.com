// Saves form submissions to Cloud Firestore through its REST API (no SDK needed, keeps the bundle small).
// Firebase web config is public by design (security comes from firestore.rules), so the project's
// values are the defaults; VITE_FIREBASE_PROJECT_ID / VITE_FIREBASE_API_KEY can override them.
// Each submission is also emailed to the practice through Web3Forms (see sendEmailAlert).
import { contact } from './siteData'

export type Lead = {
  source: 'audit' | 'contact'
  name: string
  email: string
  phone: string
  practice: string
  specialty: string
  service: string
  message: string
}

const projectId = (import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined) || 'qurevanta'
const apiKey = (import.meta.env.VITE_FIREBASE_API_KEY as string | undefined) || 'AIzaSyC4VQFi0kRhfV_ujefZV-IB22bzGuAoMFA'

function openEmail(lead: Lead) {
  const body = Object.entries(lead).filter(([, value]) => value).map(([key, value]) => `${key}: ${value}`).join('\n')
  window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Website ${lead.source} request — ${lead.practice || lead.name}`)}&body=${encodeURIComponent(body)}`
}

async function saveToFirestore(lead: Lead) {
  const fields: Record<string, { stringValue: string } | { timestampValue: string }> = { createdAt: { timestampValue: new Date().toISOString() } }
  for (const [key, value] of Object.entries(lead)) fields[key] = { stringValue: value.slice(0, 2000) }
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  })
  if (!response.ok) throw new Error(`Firestore ${response.status}`)
}

// Free email alert via Web3Forms (web3forms.com, free plan) — no paid Firebase plan needed.
// The access key is created at web3forms.com for info@qurevanta.com and is safe to ship in the
// browser. Until it is set, submissions are still saved to Firestore.
const web3formsKey = (import.meta.env.VITE_WEB3FORMS_KEY as string | undefined) || ''

async function sendEmailAlert(lead: Lead) {
  if (!web3formsKey) throw new Error('Email alerts not configured')
  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: web3formsKey,
      subject: `New website ${lead.source === 'audit' ? 'audit request' : 'message'} — ${lead.practice || lead.name}`,
      from_name: 'qurevanta.com website',
      replyto: lead.email,
      Form: lead.source === 'audit' ? 'Free audit request' : 'Contact form',
      Name: lead.name,
      Email: lead.email,
      Phone: lead.phone || '—',
      Practice: lead.practice,
      Specialty: lead.specialty || '—',
      Service: lead.service || '—',
      Message: lead.message || '—',
    }),
  })
  if (!response.ok) throw new Error(`Web3Forms ${response.status}`)
}

// Saves to Firestore (permanent record) and emails an alert to the practice, in parallel.
// If both fail, the visitor's email app opens with the message pre-filled, so no inquiry is lost.
export async function submitLead(lead: Lead): Promise<'saved' | 'email'> {
  const results = await Promise.allSettled([saveToFirestore(lead), sendEmailAlert(lead)])
  if (results.some((result) => result.status === 'fulfilled')) return 'saved'
  openEmail(lead)
  return 'email'
}
