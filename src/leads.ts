// Saves form submissions to Cloud Firestore through its REST API (no SDK needed, keeps the bundle small).
// Firebase web config is public by design (security comes from firestore.rules), so the project's
// values are the defaults; VITE_FIREBASE_PROJECT_ID / VITE_FIREBASE_API_KEY can override them.
// If saving fails, the form shows the email and phone instead.
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

// Saves to Firestore; if that fails (offline, blocked, or database unavailable) the visitor's
// email app opens with the message pre-filled, so no inquiry is lost.
export async function submitLead(lead: Lead): Promise<'saved' | 'email'> {
  const fields: Record<string, { stringValue: string } | { timestampValue: string }> = { createdAt: { timestampValue: new Date().toISOString() } }
  for (const [key, value] of Object.entries(lead)) fields[key] = { stringValue: value.slice(0, 2000) }
  try {
    const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fields }),
    })
    if (response.ok) return 'saved'
  } catch { /* fall through to email */ }
  openEmail(lead)
  return 'email'
}
