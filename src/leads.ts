// Saves form submissions to Cloud Firestore through its REST API (no SDK needed, keeps the bundle small).
// Configure VITE_FIREBASE_PROJECT_ID and VITE_FIREBASE_API_KEY (see .env.example and firestore.rules).
// Without them, the form falls back to opening the visitor's email app addressed to the practice.
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

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY as string | undefined
export const leadsConfigured = Boolean(projectId && apiKey)

export async function submitLead(lead: Lead): Promise<'saved' | 'email'> {
  if (!leadsConfigured) {
    const body = Object.entries(lead).filter(([, value]) => value).map(([key, value]) => `${key}: ${value}`).join('\n')
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(`Website ${lead.source} request — ${lead.practice || lead.name}`)}&body=${encodeURIComponent(body)}`
    return 'email'
  }
  const fields: Record<string, { stringValue: string } | { timestampValue: string }> = { createdAt: { timestampValue: new Date().toISOString() } }
  for (const [key, value] of Object.entries(lead)) fields[key] = { stringValue: value.slice(0, 2000) }
  const response = await fetch(`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/leads?key=${apiKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fields }),
  })
  if (!response.ok) throw new Error(`Could not send (${response.status})`)
  return 'saved'
}
