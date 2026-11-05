// Long-form copy for specialty and service pages, so each page carries original, useful content.

export type SpecialtyContent = { intro: string; challenges: [title: string, text: string][]; services: string[] }

export const specialtyContent: Record<string, SpecialtyContent> = {
  cardiology: {
    intro: 'Cardiology revenue depends on diagnostic testing, procedures, and long-term patient relationships. Each of these carries its own documentation and payer rules, and small errors in component billing or authorization can quietly erode reimbursement across thousands of encounters.',
    challenges: [
      ['Imaging and testing authorizations', 'Nuclear stress tests, echocardiograms, and cardiac CT or MRI frequently require prior authorization, often through a radiology benefit manager rather than the health plan itself. We track requirements by payer and secure approvals before the test is scheduled.'],
      ['Professional and technical components', 'When a test is performed in one setting and interpreted in another, modifiers 26 and TC must be applied correctly. We review component billing so you are not underpaid for global services or denied for duplicate billing.'],
      ['Device monitoring', 'Pacemaker and ICD interrogations and remote monitoring are billed under specific code sets with defined monitoring periods. We help make sure each period is captured once, on time, and with the supporting documentation.'],
      ['Medical necessity', 'Many cardiac services are covered only for specific diagnoses under national and local coverage determinations. Our coders link each service to the documented diagnosis that supports it.'],
    ],
    services: ['prior-authorization', 'coding-audit', 'charge-entry', 'denial-management'],
  },
  orthopedics: {
    intro: 'Orthopedic practices combine office visits, imaging, injections, durable medical equipment, and surgery — often for the same patient within a single episode of care. Getting paid correctly means understanding how all of those pieces relate to one another.',
    challenges: [
      ['Global surgical periods', 'Most major orthopedic procedures carry a 90-day global period. Visits and procedures during that window need the right modifier (24, 25, 57, 58, 78, or 79) or they will be bundled and denied.'],
      ['Imaging and surgery authorizations', 'MRIs, CT scans, and elective surgeries commonly require prior approval. We start authorizations early so procedures stay on the calendar.'],
      ['Workers’ compensation and auto claims', 'Injury-related care is often billed to employers’ carriers or auto insurers with separate forms, fee schedules, and claim numbers. We keep these claims separate from commercial billing and follow up on their unique timelines.'],
      ['Durable medical equipment', 'Braces, splints, and other supplies require correct HCPCS codes, modifiers, and documentation of medical necessity to be reimbursed.'],
    ],
    services: ['prior-authorization', 'charge-entry', 'claims-submission', 'ar-follow-up'],
  },
  neurology: {
    intro: 'Neurology combines lengthy, complex evaluations with high-value diagnostic testing and specialty drugs. Accurate reimbursement depends on capturing the full complexity of each visit and billing every test and injection correctly.',
    challenges: [
      ['Diagnostic testing', 'EEG, EMG, and nerve conduction studies are billed by type, duration, and number of nerves or units tested, and may be split between professional and technical components. We check every test against the report before it is billed.'],
      ['Injectable drugs', 'Treatments such as botulinum toxin injections require correct drug codes, billable units, and documentation of any discarded amount, as well as prior authorization from most payers.'],
      ['Complex evaluation and management', 'Visits for conditions such as epilepsy, multiple sclerosis, or movement disorders often support higher-level E/M codes based on medical decision-making or total time. We help ensure documentation supports the level billed.'],
      ['Referrals and authorizations', 'Many patients arrive through referrals with plan-specific requirements. We verify referrals and authorizations before the visit to prevent avoidable denials.'],
    ],
    services: ['coding-audit', 'prior-authorization', 'pre-eligibility-verification', 'medical-scribing'],
  },
  ophthalmology: {
    intro: 'Ophthalmology sits between medical insurance and routine vision plans, with high patient volume, surgical episodes, and expensive injectable drugs. Choosing the right payer and code set for each encounter is where revenue is won or lost.',
    challenges: [
      ['Medical versus vision billing', 'A routine eye exam and a medical eye visit are billed differently and often to different plans. We verify both benefits before the visit so each encounter goes to the right payer.'],
      ['Eye codes and E/M codes', 'Ophthalmology can bill using either the general ophthalmological service codes or standard E/M codes. Each has different documentation requirements, and we help your team apply them consistently.'],
      ['Cataract surgery co-management', 'When post-operative care is shared with another provider, modifiers 54 and 55 divide the global surgical fee. Incorrect use can lead to underpayment or duplicate-payment denials.'],
      ['Injectable drugs', 'Intravitreal injections require accurate drug codes, units, eye modifiers (RT/LT), and authorization tracking for repeat treatments.'],
    ],
    services: ['pre-eligibility-verification', 'charge-entry', 'prior-authorization', 'payment-posting'],
  },
  'pain-management': {
    intro: 'Interventional pain management is procedure-driven and closely scrutinized by payers. Coverage policies set strict rules for documentation, frequency, and prior conservative treatment, so careful billing protects both revenue and compliance.',
    challenges: [
      ['Coverage policy requirements', 'Epidural steroid injections, facet joint procedures, and radiofrequency ablation are subject to local coverage determinations that specify required documentation, frequency limits, and pain-relief thresholds between sessions.'],
      ['Prior authorization', 'Most commercial plans require authorization for interventional procedures. We track approvals and the number of authorized sessions so procedures are not performed outside the approved window.'],
      ['Bundled imaging guidance', 'Fluoroscopic or ultrasound guidance is included in many injection codes and cannot be billed separately. Knowing which codes include guidance prevents denials and overpayments.'],
      ['Drug testing', 'Urine drug testing is billed under specific presumptive and definitive codes with medical-necessity requirements. We review testing claims for correct coding and frequency.'],
    ],
    services: ['prior-authorization', 'coding-audit', 'compliance-hipaa-support', 'denial-management'],
  },
  pediatrics: {
    intro: 'Pediatric practices manage frequent preventive visits, immunizations, and a high proportion of Medicaid and CHIP coverage. Efficient billing depends on getting the details of vaccines, screenings, and well-child visits right every time.',
    challenges: [
      ['Vaccine administration', 'Immunizations require both the vaccine product code and the correct administration codes, which differ based on whether counseling was provided and how many components each vaccine has.'],
      ['Vaccines for Children program', 'Vaccines supplied through the VFC program are billed for administration only. We make sure VFC and privately purchased stock are billed correctly.'],
      ['Well visits with a problem', 'When a sick concern is addressed during a well-child visit, the separate problem-oriented service can be billed with modifier 25 if it is documented as significant and separately identifiable.'],
      ['Screenings and Medicaid rules', 'Developmental and behavioral screenings have their own codes, and Medicaid and CHIP plans each have their own requirements for these services. We check coverage and rules by state and plan.'],
    ],
    services: ['pre-eligibility-verification', 'charge-entry', 'patient-statements', 'patient-call-center'],
  },
  'internal-medicine': {
    intro: 'Internal medicine practices care for large panels of patients with chronic conditions. Much of the available revenue comes from preventive, care-management, and transitional services that are easy to under-use or document inconsistently.',
    challenges: [
      ['Annual wellness and preventive visits', 'Medicare annual wellness visits, initial preventive exams, and routine physicals each have different coverage rules. Billing the wrong one can leave the patient with an unexpected bill.'],
      ['Chronic care management', 'Care management and transitional care services pay for work done between visits, but require patient consent, time tracking, and specific documentation each month.'],
      ['E/M documentation', 'Office visit levels are based on medical decision-making or total time. Consistent documentation supports the level billed and protects the practice in an audit.'],
      ['Risk adjustment', 'For Medicare Advantage and value-based contracts, complete and specific diagnosis coding affects how patient complexity is recognized.'],
    ],
    services: ['coding-audit', 'medical-scribing', 'charge-entry', 'elaborate-reporting'],
  },
  gastroenterology: {
    intro: 'Gastroenterology revenue centers on endoscopic procedures that involve the physician, the facility, anesthesia, and pathology. Coverage depends heavily on whether a procedure is screening or diagnostic — a distinction that also affects what the patient owes.',
    challenges: [
      ['Screening versus diagnostic colonoscopy', 'A screening colonoscopy that becomes therapeutic, such as when a polyp is removed, requires specific modifiers (such as PT for Medicare or 33 for many commercial plans) so the patient’s preventive benefit still applies.'],
      ['Multiple procedures', 'When an upper endoscopy and colonoscopy are performed in the same session, or several techniques are used, multiple-procedure rules and modifiers determine payment.'],
      ['Facility and anesthesia coordination', 'The ambulatory surgery center, anesthesia provider, and pathology lab each bill separately. Mismatched diagnoses across these claims are a common source of denials.'],
      ['Prior authorization', 'Some plans require authorization for diagnostic procedures, capsule endoscopy, or infusion therapies for inflammatory bowel disease.'],
    ],
    services: ['coding-audit', 'prior-authorization', 'claims-submission', 'patient-statements'],
  },
  urology: {
    intro: 'Urology combines office procedures, imaging, lab work, injectable drugs, and surgery. Each service line has its own coding rules, and drug and procedure billing in particular requires close attention to units and authorizations.',
    challenges: [
      ['In-office procedures', 'Cystoscopy, biopsies, and urodynamic studies are often performed in the office and may carry global periods or bundling rules that affect same-day E/M billing.'],
      ['Injectable drugs', 'Hormone therapies and other injectables require correct drug codes, billable units, and authorization tracking for repeat doses.'],
      ['Surgical global periods', 'Post-operative visits and unrelated procedures during a global period need the right modifiers to be paid.'],
      ['Imaging and lab services', 'Ultrasound and in-house lab services require proper supervision and documentation, along with correct place-of-service and component billing.'],
    ],
    services: ['prior-authorization', 'charge-entry', 'coding-audit', 'ar-follow-up'],
  },
  dermatology: {
    intro: 'Dermatology claims often include several procedures in one visit, each coded by technique, size, and location. Accurate measurement, documentation, and modifier use are what turn a busy clinic day into clean claims.',
    challenges: [
      ['Biopsies and excisions', 'Biopsy codes depend on technique, and excision codes depend on whether the lesion is benign or malignant, its location, and its size including margins. Missing measurements are a common cause of undercoding.'],
      ['Destruction and Mohs surgery', 'Lesion destruction is coded by type and number of lesions, while Mohs surgery is coded by stage and block. Both require precise documentation.'],
      ['Procedures with a visit', 'When a separate problem is evaluated on the same day as a minor procedure, modifier 25 may apply — but only when the documentation supports a significant, separately identifiable service.'],
      ['Cosmetic versus medical', 'Cosmetic services are generally not covered. We help separate medical and cosmetic services clearly so patients are billed correctly and payer claims remain clean.'],
    ],
    services: ['coding-audit', 'charge-entry', 'patient-statements', 'denial-management'],
  },
  'urgent-care': {
    intro: 'Urgent care depends on speed and volume. Patients arrive without appointments, insurance must be confirmed in minutes, and claims need to move out the door the same day to keep cash flowing.',
    challenges: [
      ['Fast eligibility checks', 'With walk-in patients, eligibility and copay need to be confirmed at check-in. Real-time verification prevents claims going to inactive coverage.'],
      ['Payer-specific coding', 'Some commercial payers reimburse urgent care visits using specific codes or a global urgent care rate, while others use standard E/M codes. Knowing each contract’s rules avoids underpayment.'],
      ['On-site X-ray and lab', 'In-house imaging and testing must be captured for every encounter and billed with correct components, supervision, and CLIA certification requirements.'],
      ['Occupational medicine', 'Work injuries and employer services are billed to workers’ compensation or directly to employers, separate from the patient’s health insurance.'],
    ],
    services: ['pre-eligibility-verification', 'charge-entry', 'claims-submission', 'payment-posting'],
  },
  'wound-care': {
    intro: 'Wound care involves repeated treatment over weeks or months, with services coded by depth, surface area, and product used. Payers expect detailed documentation of progress at every visit.',
    challenges: [
      ['Debridement coding', 'Debridement is coded by the deepest tissue removed and the total surface area treated. Wound measurements and tissue depth must be documented at each visit.'],
      ['Skin substitutes', 'Skin substitute products are billed by product and units, with any wastage documented, and are subject to coverage policies that change frequently. We check current payer and Medicare policy before application.'],
      ['Ongoing medical necessity', 'Payers expect documentation showing that a wound is responding to treatment. Notes that show measurable progress support continued coverage.'],
      ['Hyperbaric oxygen therapy', 'Hyperbaric treatment is covered only for specific conditions and requires physician supervision and per-session documentation.'],
    ],
    services: ['coding-audit', 'prior-authorization', 'charge-entry', 'ar-follow-up'],
  },
}

// A short overview for each service page, in addition to the bullets from the client's service sheet.
export const serviceOverviews: Record<string, string> = {
  'medical-credentialing': 'Credentialing confirms that a provider is qualified and enrolled with each insurance plan, and it must be complete before claims can be paid. We prepare and submit applications, maintain CAQH profiles, follow up with payers until enrollment is approved, and track re-credentialing dates so coverage never lapses.',
  'payer-contract-negotiation': 'Your payer contracts set the price of every service you provide. We compare your current rates with market benchmarks and your own claims data, identify the codes that matter most to your revenue, and help you prepare for renegotiation with clear evidence.',
  'pm-ehr-setup-support': 'Billing problems often start with how the practice management and EHR systems are configured. We set up providers, fee schedules, payer lists, and claim rules correctly from the start, and support your team as workflows change.',
  'compliance-hipaa-support': 'Billing operations handle protected health information every day. We help practices put practical safeguards in place, keep business associate agreements current, and align billing and coding practices with payer and federal requirements.',
  'era-edi-setup': 'Electronic claim submission, electronic remittance advice (ERA), and electronic funds transfer (EFT) make payment faster and posting more accurate. We complete the enrollment forms for each payer and test the connections so claims and payments flow electronically.',
  'appointment-scheduling': 'The revenue cycle starts when an appointment is booked. Our virtual front desk schedules visits, collects demographic and insurance information, and sends reminders so that fewer appointments are missed and fewer claims are denied for registration errors.',
  'pre-eligibility-verification': 'Checking coverage before the visit is one of the simplest ways to prevent denials. We verify active coverage, benefits, copays, deductibles, and referral requirements ahead of each appointment and flag problems while there is still time to fix them.',
  'prior-authorization': 'Many procedures, imaging studies, and drugs are only paid if they were approved in advance. We identify which services need authorization, submit requests with the right clinical documentation, and track every request to a decision.',
  'charge-entry': 'Every service performed should become a charge — accurately and on time. We enter charges from visit documentation, check codes, modifiers, and diagnoses, and reconcile them against the schedule so nothing is missed.',
  'claims-submission': 'Clean claims get paid faster. We scrub each claim against payer rules before submission, submit electronically, and monitor clearinghouse and payer rejections so issues are corrected within days instead of weeks.',
  'telehealth-billing': 'Telehealth rules vary by payer and continue to evolve. We apply the correct place-of-service codes, modifiers, and documentation requirements for video and audio-only visits so virtual care is reimbursed properly.',
  'out-of-network-billing': 'Out-of-network claims need careful handling to be paid fairly and to comply with patient protections such as the No Surprises Act. We manage submission, negotiation, appeals, and the federal dispute resolution process where it applies.',
  'denial-management': 'Every denial has a reason, and most of them can be prevented. We work denied claims quickly, file appeals with supporting documentation, and analyze denial trends so the root causes are fixed upstream.',
  'ar-follow-up': 'Unpaid claims become harder to collect as they age. We work accounts receivable by priority and payer, contact payers about unresolved claims, and clean up old balances so your A/R reflects money you can actually collect.',
  'payment-posting': 'Accurate payment posting is the foundation for denial management and reporting. We post insurance and patient payments, reconcile them with bank deposits, and flag underpayments and denials for follow-up.',
  'medical-scribing': 'Documentation takes time away from patients. Our trained scribes document encounters in real time or remotely, so providers can focus on care while notes stay complete, accurate, and ready for coding.',
  'fee-schedule-analysis': 'Fee schedules that are set too low or never updated leave money on the table. We compare your charges with payer allowables and benchmarks and recommend updates that keep your fees competitive and complete.',
  'patient-statements': 'Patients pay more readily when they understand their bills. We send clear, accurate statements on a consistent schedule with simple payment options and follow-up reminders.',
  'patient-debt-collection': 'Patient balances need firm but respectful follow-up. We run reminder sequences, set up payment plans, and handle outstanding balances in a way that recovers revenue while protecting your relationship with patients.',
  'patient-call-center': 'Billing questions deserve quick, knowledgeable answers. Our patient support team answers calls about statements, insurance, and payments, which reduces the load on your front desk and helps resolve balances faster.',
  'elaborate-reporting': 'You cannot manage what you cannot see. We provide regular reports on collections, A/R, denials, and payer performance, with clear explanations of what changed and what to do next.',
  'coding-audit': 'A coding audit compares what was billed with what was documented. We review a sample of encounters, identify undercoding, overcoding, and missed charges, and provide education so your team can improve accuracy over time.',
  'schedule-analysis': 'Your appointment schedule shapes your revenue. We analyze visit mix, no-show rates, and template utilization to find capacity and scheduling patterns that improve both access and revenue.',
}
