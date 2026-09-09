export const services = [
  ['medical-billing', 'Medical billing', 'Build a cleaner path from charge capture to payment with an experienced billing team.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85'],
  ['credentialing', 'Provider credentialing', 'Keep enrollment, revalidation, and payer paperwork moving with fewer surprises.', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85'],
  ['eligibility-verification', 'Eligibility verification', 'Know coverage, benefits, and patient responsibility before the visit begins.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85'],
  ['prior-authorization', 'Prior authorization', 'Give your team a focused workflow for documentation, payer follow-up, and status tracking.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85'],
  ['claims-management', 'Claims management', 'Submit cleaner claims, manage rejections quickly, and protect timely filing windows.', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85'],
  ['denial-management', 'Denial management', 'Turn denial patterns into practical fixes that keep preventable leakage from returning.', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'],
  ['payment-posting', 'Payment posting', 'Reconcile insurance and patient payments with dependable, visible workflows.', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85'],
  ['accounts-receivable', 'Accounts receivable', 'Prioritize aging balances with focused follow-up and a clear action queue.', 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=85'],
  ['patient-statements', 'Patient statements', 'Create a clearer patient balance experience without adding work to your front desk.', 'https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1200&q=85'],
  ['era-edi', 'ERA / EDI workflows', 'Connect remittance and electronic data workflows to make reconciliation less manual.', 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85'],
  ['schedule-analysis', 'Schedule analysis', 'Compare scheduled, completed, and billed encounters to spot missed opportunities.', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'],
  ['coding-audit', 'Coding audit', 'Review documentation and coding patterns to strengthen accuracy and compliance support.', 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=85'],
  ['revenue-cycle-audit', 'Revenue cycle audit', 'Get a practical, outside-in view of where your current process can improve.', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85'],
  ['reporting-analytics', 'Reporting & analytics', 'Turn revenue data into a shared operating rhythm for your leadership team.', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85'],
] as const

const specialtyDetails = [
  ['Cardiology', 'Cardiac care teams need clean authorizations, accurate coding, and dependable follow-up across recurring visits.', 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=900&q=88'],
  ['Orthopedics', 'Support procedures, imaging, therapy, and surgical episodes with a workflow that keeps every charge visible.', 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=88'],
  ['Neurology', 'Coordinate complex visits, referrals, and documentation requirements with specialty-aware revenue operations.', 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=900&q=88'],
  ['Ophthalmology', 'Keep high-volume visits, procedures, and payer rules moving with clear claim and payment visibility.', 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=88'],
  ['Pain management', 'Bring authorization status, procedure documentation, and denial patterns into one practical workflow.', 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=88'],
  ['Pediatrics', 'Create a family-friendly billing operation behind the scenes, from eligibility checks to patient statements.', 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=88'],
  ['Internal medicine', 'Give broad patient panels a consistent operating rhythm across visits, labs, referrals, and follow-up.', 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=88'],
  ['Gastroenterology', 'Connect consultations, procedures, pathology, and facility coordination to reduce avoidable revenue gaps.', 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=900&q=88'],
  ['Urology', 'Make procedure-heavy workflows easier to track with focused authorization, coding, and denial support.', 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=900&q=88'],
  ['Dermatology', 'Keep recurring visits, minor procedures, and patient balances organized with a clearer revenue view.', 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=88'],
  ['Urgent care', 'Move quickly from registration to clean claim submission with an operation built for high visit volume.', 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=900&q=88'],
  ['Wound care', 'Support longitudinal treatment plans with accurate documentation, recurring claims, and steady A/R follow-up.', 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=88'],
] as const

export const specialties = specialtyDetails.map(([name, description, image]) => ({ slug: name.toLowerCase().replaceAll(' ', '-'), name, description, image }))

export const teams = [
  ['billing', 'Billing operations', 'The people behind cleaner claims and faster, more predictable payments.'],
  ['credentialing', 'Credentialing team', 'Enrollment specialists who keep provider paperwork moving.'],
  ['denials', 'Denial management', 'Analysts who turn patterns into prevention.'],
  ['analytics', 'Technology & analytics', 'A clear view of the numbers your team needs to act.'],
]

export const posts = [
  ['quiet-cost', 'The quiet cost of an invisible revenue cycle', 'Revenue cycle', 'May 28, 2026', 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85'],
  ['denial-reset', 'Five signals your denial workflow needs a reset', 'Operations', 'May 14, 2026', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85'],
  ['reporting-feels', 'What good healthcare reporting feels like', 'Leadership', 'Apr 30, 2026', 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=85'],
]
