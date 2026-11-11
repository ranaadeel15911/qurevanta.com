---
title: Denial Code CO-197: Authorization Absent and How to Recover the Claim
description: CO-197 means the payer found no precertification or authorization for the service. Learn what to check first, how to fix it, when to appeal, and how to stop it recurring.
category: Denial management
date: 2026-11-11
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794398562/qurevanta/blog/denial-code-co-197.jpg
services: denial-management, prior-authorization, claims-submission
---
**CO-197** is the denial you get when a payer says it never had the approval it requires for the service you billed. The official claim adjustment reason code (CARC) text reads: *"Precertification/authorization/notification/pre-treatment absent."* The "CO" group code means the adjustment is a contractual obligation, so the balance belongs to the practice and, in most cases, cannot be moved to the patient.

The fastest way to handle it is to find out which of three things actually happened: the authorization was never requested, it was requested but the number did not reach the claim, or it exists but does not match what you billed. Each has a different fix, and the first one is the only one that is usually expensive.

## What CO-197 does and does not mean

The code says an authorization, precertification, notification or pre-treatment review is "absent" from the payer's point of view. That is a statement about what the payer's system matched at adjudication, not necessarily about what your staff did. We regularly see claims denied CO-197 where an approval was sitting in the practice's portal history the whole time.

Two neighbouring codes are easy to confuse with it:

- **CARC 198** is "Precertification/notification/authorization/pre-treatment exceeded." The authorization exists, but you went past what it allowed, such as more visits or units than approved.
- **CARC 288** is "Referral absent." This is a referral requirement, which some plans (often HMO-style products) handle separately from authorization.

There was also an older code, CARC 15, for an authorization number that was missing, invalid, or did not apply to the billed services or provider. The X12 code list shows it with a stop date of May 1, 2018, so payers should no longer send it. If an old workflow or denial-reason cheat sheet still points to CO-15, update it. Today the same situations tend to surface as CO-197 or CO-198, often with a remark code that adds detail.

Always read the remark code (RARC) on the remittance next to the CARC. It frequently tells you whether the payer saw no authorization at all or saw one that did not apply.

## Step 1: Work out which scenario you are in

Before you resubmit, appeal or write anything off, spend ten minutes on triage. Pull these four items:

1. The remittance (ERA or EOB), with the CARC, RARC and group code.
2. The payer's authorization history for the patient, from the portal or a call. Note the approval number, approved CPT/HCPCS codes, units, date range and rendering or facility provider.
3. The claim as submitted: the authorization number in the claim's prior authorization field, the codes and units billed, the dates of service, and the billing and rendering NPIs.
4. Your own documentation of when the request was made, by whom, and what the payer said.

Then sort the claim into one of these buckets.

**Bucket A: an approval exists and matches the service.** The denial is a data problem. The authorization number was left off the claim, was keyed wrong, or was attached to the wrong line. Fix the claim and resubmit.

**Bucket B: an approval exists but does not match.** Perhaps it covers a different CPT code, a different facility, a different rendering provider, or a date range that ended before the service. You need to find out whether the payer will amend the authorization or whether you must appeal.

**Bucket C: no approval was ever obtained.** This is the hard case. Recovery depends on the payer's retroactive review rules, the circumstances (for example, an emergency or an eligibility change), and your contract.

## Step 2: Fix it according to the bucket

### If the authorization exists and matches (Bucket A)

Submit a corrected claim, not a duplicate. Use the claim frequency code your payer requires for replacement claims, put the correct authorization number in the proper field, and make sure it is attached to the service line it covers when the payer requires line-level numbers. Check that the number is entered exactly as the payer issued it, with no added spaces or dropped leading zeros.

Mind the timely filing clock while you do this. A corrected claim is still bound by the payer's deadline in most contracts, so see our guide to [timely filing limits](/resources/timely-filing-limits) and note the date the denial came in.

### If the authorization does not match (Bucket B)

Call the payer's utilization management line or use the portal and ask exactly what the approval covers. Common mismatches and what to try:

- **Wrong or additional CPT code.** If the procedure performed differed from the one requested, ask whether an update to the existing authorization is possible, and send the operative or procedure note that supports the change.
- **Date of service outside the window.** Ask whether the payer will extend the date range, particularly if the service was delayed for a clinical or scheduling reason you can document.
- **Wrong rendering provider or facility.** Some payers will correct this on a simple request; others require a new authorization.
- **Units over the approved amount.** This usually moves toward a CARC 198 situation. Medical necessity documentation for the extra units is your main lever.

Get any change confirmed in writing or with a reference number. A verbal "it's fine now" does not hold up on appeal.

### If no authorization was obtained (Bucket C)

Be realistic. Some payers will not review retroactively, and many contracts say a missing authorization is a provider liability. Still, check before you write it off:

1. **Read the payer's policy and your contract** for retroactive authorization or "retro-auth" language. Some plans allow a request within a stated number of days after the service, particularly for urgent or emergency care, or when the patient's coverage was determined after the date of service.
2. **Check whether authorization was actually required.** Requirements differ by plan, not just by payer. A payer's code list may say one thing while the patient's specific benefit plan says another. Document what the payer's own tool said on the day you checked.
3. **Look for a defensible reason it was waived.** Emergency services, a payer error in the eligibility response, or a payer that told you no authorization was needed (with a call reference number) all give you something to put in an appeal.
4. **Submit a retro-auth request or a formal appeal** with the clinical notes, the reason authorization was not obtained, and any proof of the payer's incorrect guidance.

If the denial stands, treat it as a contractual write-off and record it under a specific reason such as "no authorization obtained." Do not bill the patient unless your payer contract and the patient's financial responsibility documents clearly allow it. If you are unsure, ask the payer in writing.

## An illustrative example

*This example is hypothetical and for explanation only.*

A practice schedules a patient for an outpatient imaging study. The front desk requests authorization on Monday and receives approval number 12345 for the study, valid for 30 days. The study is done on day 20. The biller enters the CPT code, but the authorization field on the claim is left blank because the number was only written in the scheduling note.

The claim returns CO-197. The biller opens the portal, confirms that the approval covers the right CPT code, patient, facility and dates, adds the number to the claim, and sends a replacement claim. This was Bucket A, and the whole fix took minutes. The real work is making sure the number lands on the claim automatically next time, which comes down to the prevention steps below.

## How to stop CO-197 from coming back

Most CO-197 denials are workflow failures. These changes address them:

- **Build a payer-by-service requirements list**, dated and owned by one person. Review it at least quarterly and whenever a payer announces policy changes.
- **Verify the requirement at scheduling**, not at check-in. A good [eligibility verification](/resources/insurance-eligibility-verification) routine includes a line item for authorization.
- **Store the authorization where the biller sees it.** Approval number, approved codes, units, dates and provider belong in the PM/EHR authorization module, not in a free-text note.
- **Add a pre-bill edit.** If a CPT code on your payer-specific "needs authorization" list has no authorization attached, the claim holds for review rather than going out.
- **Reconcile at the encounter.** If the procedure changed, the scheduler or clinical staff should flag a possible authorization amendment before the claim is built.
- **Track denials by payer, CPT code and department** so you can see where authorization gaps cluster. Our [prior authorization workflow](/resources/prior-authorization-workflow) article covers tracking in more detail.

## Why this matters more as payer rules change

On the payer side, the CMS Interoperability and Prior Authorization final rule (CMS-0057-F) applies to Medicare Advantage organizations, state Medicaid and CHIP fee-for-service programs, Medicaid managed care plans, CHIP managed care entities, and Qualified Health Plan issuers on the federally facilitated exchanges. According to CMS, starting in 2026 those impacted payers must give a specific reason for a denied prior authorization decision, and must decide standard requests within seven calendar days and expedited requests within 72 hours (QHP issuers on the federally facilitated exchanges are excluded from the decision timeframes, and drugs are outside the denial-reason requirement). The prior authorization API requirements generally begin January 1, 2027.

For a practice, this should make authorization decisions easier to read and appeal, but it does not change the basics. Commercial plans outside the rule's scope still set their own timelines, and a denial for an absent authorization is a different event from a denied authorization request. Keep your own record of every request and response either way.

Traditional Medicare is not a blanket prior authorization program. CMS lists specific prior authorization and pre-claim review initiatives, such as certain hospital outpatient department services, repetitive scheduled non-emergent ambulance transport, certain DMEPOS items, home health, and inpatient rehabilitation facility services. If you provide any of those, confirm the requirements with your Medicare Administrative Contractor.

## Frequently asked questions

### What does denial code CO-197 mean?

It means the payer did not find the precertification, authorization, notification or pre-treatment approval it requires for the billed service. The CO group code makes the amount a contractual adjustment for the provider.

### Can I bill the patient for a CO-197 denial?

Generally no. Contractual obligation adjustments are not patient responsibility, and many payer contracts prohibit billing the patient when the provider failed to obtain authorization. Check your contract and the payer's policy before any patient billing.

### Can I get a retroactive authorization after the service?

Sometimes. Some payers allow retro-authorization within a short window, often for urgent or emergency situations or coverage changes, while others do not allow it at all. The payer's provider manual and your contract are the deciding documents.

### What is the difference between CO-197 and CO-198?

CO-197 means the authorization was absent. CO-198 means an authorization exists but was exceeded, for example by billing more units or visits than were approved.

### Should I appeal or submit a corrected claim?

If the authorization exists and the problem was a data error on the claim, send a corrected claim. If the payer maintains that no valid approval exists, or the approval does not match, move to an appeal with supporting documents.

## How we help

Our [prior authorization](/services/prior-authorization) team confirms requirements at scheduling, submits and tracks requests, and keeps approval details tied to the claim. When a CO-197 does slip through, our [denial management](/services/denial-management) specialists identify the cause, correct or appeal the claim, and report the pattern back so the gap gets closed.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [CMS Interoperability and Prior Authorization Final Rule (CMS-0057-F) fact sheet](https://www.cms.gov/newsroom/fact-sheets/cms-interoperability-and-prior-authorization-final-rule-cms-0057-f)
- [CMS Prior Authorization and Pre-Claim Review Initiatives](https://www.cms.gov/data-research/monitoring-programs/medicare-fee-service-compliance-programs/prior-authorization-and-pre-claim-review-initiatives)

> This article is general educational information, not legal or payer-specific advice. Rules and payer policies change, so verify current requirements with each payer and your contracts before acting.
