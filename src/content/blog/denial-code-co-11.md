---
title: Denial Code CO-11: Diagnosis Inconsistent With the Procedure and How to Fix It
description: CO-11 means the payer sees a mismatch between your diagnosis and the procedure billed. Learn what to check first, how to fix it, and when to appeal instead of correcting.
category: Denial management
date: 2026-11-12
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794484997/qurevanta/blog/denial-code-co-11.jpg
services: denial-management, coding-audit, claims-submission
---
**CO-11** is the denial a payer sends when the diagnosis on your claim does not fit the procedure on the same line. The official claim adjustment reason code (CARC) text is short: *"The diagnosis is inconsistent with the procedure."* The "CO" group code makes the adjustment a contractual obligation, so the balance stays with the practice rather than moving to the patient.

The first thing to settle is whether the claim was built wrong or the payer's edit is wrong. Most CO-11 denials are the first kind: a diagnosis pointer aimed at the wrong code, an unspecified diagnosis where the chart supports a specific one, or a symptom code on a service that needs a confirmed diagnosis. Fewer are the second kind, and those are the ones worth an appeal.

## What CO-11 actually means

The payer's system compares the diagnosis codes tied to a service line against the procedure code (CPT or HCPCS). If the pairing fails its rules, the line denies. Those rules can be a plain clinical-logic edit, such as a diagnosis that cannot reasonably go with that procedure, or a coverage policy that lists the diagnoses it accepts for a service.

The X12 code list notes that CARC 11 should be read alongside the 835 Healthcare Policy Identification Segment (loop 2110, REF) when it is present. That segment can name the policy the payer applied. If your remittance carries it, start there, because it tells you which rule fired.

CO-11 is not a coverage statement by itself. It does not say the service is never covered. It says that this diagnosis and this procedure, as submitted, do not agree.

## CO-11 versus the codes it gets confused with

Several denials look alike on a remit. The difference decides your fix.

- **CARC 167: "This (these) diagnosis(es) is (are) not covered."** The payer is saying the diagnosis itself is outside the plan. That is a coverage question, and a corrected diagnosis will only help if the chart genuinely supports a different, covered one.
- **CARC 50: "These are non-covered services because this is not deemed a 'medical necessity' by the payer."** This is a medical necessity determination. It often involves a policy review, and the appeal leans on clinical documentation.
- **CARC 146: "Diagnosis was invalid for the date(s) of service reported."** The code was not valid on the date of service, which usually points to an ICD-10-CM code-set timing problem, such as a code used before it took effect or after it was retired.
- **CARC 16: "Claim/service lacks information or has submission/billing error(s)."** Here the payer needs something added or corrected, and a remark code tells you what.

For a deeper look at two of these, see our guides to [CO-50](/resources/denial-code-co-50) and [CO-16](/resources/denial-code-co-16).

## Step 1: Pull the evidence before you touch the claim

Spend a few minutes gathering the facts. Skipping this step is how a claim gets resubmitted with the same error.

1. The remittance (ERA or EOB), with the group code, CARC and any remark codes (RARCs), plus the policy identification segment if the payer sent one.
2. The claim as submitted: every ICD-10-CM code in the diagnosis field, the diagnosis pointer on each service line, the CPT/HCPCS code, and any modifiers.
3. The encounter note, order or requisition that supports the service.
4. The payer's medical or reimbursement policy for the procedure, if one exists.

Then ask three questions in order.

**Was the pointer right?** On a CMS-1500, the diagnoses are listed in Item 21 and each service line points back to them with a letter in Item 24E. Medicare's own training material describes that field as a reference letter from A to L that points to the diagnosis in Item 21. A claim can carry the right diagnosis and still deny because line 2's pointer lands on the diagnosis that belongs to line 1. This is the quickest check and the most common slip when a visit includes more than one service.

**Was the diagnosis as specific as the documentation allows?** The ICD-10-CM Official Guidelines say a code is invalid if it has not been coded to the full number of characters required, including the 7th character where one applies. They also direct coders to code to the highest level of specificity when the record supports it. An unspecified code is valid, but it can lose to a payer edit that wants the specific one.

**Does the documentation actually support what you billed?** If the provider never documented a condition that fits the procedure, no re-keying will fix it. That is a documentation and coding review issue, not a claim edit.

## Step 2: Decide between a corrected claim and an appeal

Use this simple decision guide.

**Send a corrected claim when** the error is on your side: the pointer was wrong, a more specific code was available in the note, the primary diagnosis was sequenced behind a secondary one, a transcription error crept in, or an invalid code was used. Use the replacement-claim process your payer requires, and do not submit a duplicate. Watch the filing deadline while you do it; our guide to [timely filing limits](/resources/timely-filing-limits) covers why corrected claims are still on the clock.

**Appeal when** the claim is correct and the documentation supports the pairing. Typical cases are a payer edit that does not recognize a legitimate diagnosis for the service, or a policy list that is out of date. Attach the clinical note and cite the policy or clinical rationale. Ask for the specific policy the payer applied if it was not on the remit.

**Write it off, with a reason code, when** the chart does not support the pairing and no honest correction exists. Never change a diagnosis to one that is not documented just to get a line paid. That turns a denial into a compliance problem.

## A worked example

*This example is hypothetical and for explanation only.*

A patient is seen for a sprained ankle and, in the same visit, for a routine medication review for hypertension. The claim lists two diagnoses: an ankle sprain code (diagnosis A) and a hypertension code (diagnosis B). The line for the imaging study carries pointer B, because the biller assumed the first line's pointer rolled forward.

The payer returns CO-11 on the imaging line. The biller compares the order in the chart, which names the ankle, with the claim. The diagnosis is documented correctly; the pointer is the problem. The biller changes the pointer to A, sends a replacement claim, and the line processes. The fix took one field. The useful follow-up is a pre-bill rule that flags any line pointing to a diagnosis in a different body system than the procedure.

## Symptom codes, uncertain diagnoses and first-listed diagnosis

Three outpatient coding rules cause a surprising share of CO-11 denials. All are in Section IV of the ICD-10-CM Official Guidelines, which covers outpatient services.

- **Symptom codes are allowed when no diagnosis is established.** The guidelines say codes for symptoms and signs are acceptable "when a diagnosis has not been established (confirmed) by the provider." But a payer edit may still expect a confirmed diagnosis for a high-cost procedure, so a symptom code can trigger CO-11 even though it was coded correctly.
- **Do not code uncertain diagnoses in the outpatient setting.** Terms such as "probable," "suspected," "rule out" and "working diagnosis" are not coded. The condition is coded to the highest degree of certainty for that encounter, such as the symptoms, signs or abnormal test results. If your coder reported a "suspected" condition as a confirmed one, the pairing may look clinically odd to the payer, or the audit trail may not hold up.
- **The first-listed diagnosis should be the reason chiefly responsible for the services provided.** The guidelines say to list first the diagnosis, condition, problem or other reason for the encounter shown in the record to be chiefly responsible for the services. Burying that diagnosis behind a chronic condition is a common sequencing mistake.

## Check the payer's policy, not just the codes

Many CO-11 denials trace back to a coverage policy. On the Medicare side, a Local Coverage Determination (LCD) from a Medicare Administrative Contractor sets out what is reasonable and necessary in its region, and a related Billing and Coding Article holds the coding detail. CMS notes that most LCDs no longer list ICD-10 codes themselves; the codes now generally appear in the article's coding information section. Commercial payers publish similar lists in their own policy libraries.

Two practical points follow. First, check the specific article or policy for the procedure rather than assuming a general code pairing is accepted. Second, a code appearing on a list does not guarantee payment; documentation still has to support the service.

The ICD-10-CM code set also changes every year. CMS notes that new codes take effect October 1 and that the FY 2027 files apply to encounters from October 1, 2026 through September 30, 2027. A claim for a date of service just before or after the cutoff needs a code that was valid on that date. If your coders are still using last year's favorites, expect CO-11, or CARC 146, in October and November.

## How to prevent CO-11

- **Build pairing edits into your scrubber.** Load payer-specific diagnosis-to-procedure rules for your top 20 procedures by volume, and refresh them when policies change.
- **Audit pointers monthly.** Sample multi-line claims and check each pointer against the note. Our [medical coding audit guide](/resources/medical-coding-audit-guide) lays out a sampling method.
- **Require specificity at charge entry.** Where the note supports it, an unspecified code should not leave the building without a coder's review.
- **Update code sets in October.** Retire invalid codes from your favorites list and superbills the week the new set takes effect.
- **Track CO-11 by payer and CPT code.** Patterns point you to the rule or the habit that keeps causing it. Add it to your [clean claim rate](/resources/clean-claim-rate) review.

## Frequently asked questions

### What does denial code CO-11 mean?

It means the payer found the diagnosis on the claim inconsistent with the procedure billed. It is a contractual obligation denial, so the practice generally cannot bill the patient for the amount.

### Can I bill the patient for a CO-11 denial?

Generally no. CO group-code adjustments are the provider's responsibility. Check your payer contract before any patient billing.

### Is CO-11 the same as a medical necessity denial?

Not exactly. CO-11 flags an inconsistent diagnosis and procedure pairing, often from a clinical edit. A medical necessity denial, such as CARC 50, says the service is not deemed medically necessary under the payer's policy. They can overlap when a policy lists accepted diagnoses.

### Should I appeal or send a corrected claim?

Correct the claim when the error is on your side, such as a wrong pointer or a missing specific code. Appeal when the claim is accurate and the documentation supports the pairing.

### Can I just change the diagnosis to one that gets paid?

No. A diagnosis must be supported by the provider's documentation. Reporting a condition that was not documented to get a line paid creates compliance risk.

## How we help

Our [denial management](/services/denial-management) team reads the remit, finds the rule behind each CO-11, and corrects or appeals the claim, then feeds the pattern back to your coders. A periodic [coding audit](/services/coding-audit) can catch pointer and specificity errors before they reach the payer.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [ICD-10-CM Official Guidelines for Coding and Reporting, FY 2026 (CDC/NCHS)](https://ftp.cdc.gov/pub/health_statistics/nchs/publications/ICD10CM/2026/ICD-10-CM-October-2025-Guidelines.pdf)
- [CMS MLN: CMS-1500 Billing Details Overview](https://www.cms.gov/Outreach-and-Education/MLN/WBT/MLN4462429-MLN-WBT-1500/1500/lesson05/07/index.html)
- [CMS Medicare Coverage Database: LCD help](https://www.cms.gov/medicare-coverage-database/help/lcd-help.aspx)
- [CMS ICD-10 codes page](https://www.cms.gov/medicare/coding-billing/icd-10-codes)

> This article is general educational information, not legal or payer-specific advice. Rules and payer policies change, so verify current requirements with each payer and your contracts before acting.
