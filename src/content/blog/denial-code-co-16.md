---
title: Denial Code CO-16: Claim Lacks Information or Has a Billing Error
description: CO-16 means a claim is missing information or contains a billing error. Learn how to read the remark code, fix common causes, resubmit correctly, and prevent repeat denials.
category: Denial management
date: 2026-11-05
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1793887563/qurevanta/blog/denial-code-co-16.jpg
services: denial-management, claims-submission, charge-entry
---
Denial code **CO-16** is one of the most frequent adjustments on an electronic remittance advice (ERA). Its official claim adjustment reason code (CARC) description is: *"Claim/service lacks information or has submission/billing error(s)."*

In plain terms, the payer could not process the claim as submitted because something was missing, incomplete, or invalid. Unlike a denial based on medical necessity or coverage, CO-16 is usually a **fixable data problem**, and the right response is normally to correct the claim rather than argue the merits.

## What the "CO" in CO-16 means

Every adjustment on an ERA carries a **group code** and a **reason code**:

- **CO** (Contractual Obligation) means the provider is responsible for the adjustment under the contract or billing rules. The patient generally cannot be billed for the amount.
- **16** is the CARC that describes the reason.

Because CO-16 is a contractual adjustment, the lost revenue is yours to recover. Billing the patient for a claim that was denied for a billing error is a compliance risk, so check your payer contract and state rules before any patient balance is created.

## The remark code tells you what is wrong

CARC 16 on its own is vague by design. The payer is expected to include at least one **remittance advice remark code (RARC)** that identifies the specific problem. Always read the RARC before touching the claim.

Some examples you will commonly see, particularly on Medicare claims:

- **N290:** missing, incomplete, or invalid rendering provider primary identifier. Medicare contractors such as First Coast Service Options list this pairing among their frequent claim errors.
- **MA130:** the claim contains incomplete and/or invalid information, and it is unprocessable. The payer asks for a new claim with complete and correct information.
- **M51:** missing, incomplete, or invalid procedure code.

Remark code definitions are maintained by X12 and are updated several times a year, so confirm any code you are unsure about in the current list and in your payer's own guidance.

## Common causes of CO-16

Most CO-16 denials trace back to a short list of root causes.

### Patient and subscriber data

- Misspelled name or wrong date of birth
- Incorrect or missing member ID, or an ID with the wrong prefix
- Missing or outdated secondary insurance or other payer information
- Subscriber and patient relationship entered incorrectly

### Provider data

- Missing or invalid rendering, billing, or referring NPI
- Taxonomy code that does not match the enrolled specialty
- Billing provider not enrolled or not linked to the group at the payer
- Missing referring or ordering provider when the payer requires one

### Claim content

- Missing, invalid, or deleted procedure or diagnosis codes
- Diagnosis pointer that does not link to a valid diagnosis
- Missing or incorrect modifiers
- Invalid place of service for the procedure
- Missing units, dates of service, or charge amounts
- Missing authorization or referral number when the payer requires it on the claim

### Format and field errors

- Special characters or extra spaces in name or address fields
- Date formats or required qualifiers entered incorrectly
- Missing information on an accident, onset, or other date-specific field

## CO-16 versus rejections

You may notice that some CO-16 claims never appear in a "denied" status. Many payers and clearinghouses treat an unprocessable claim as a **rejection** or return it as unprocessable rather than adjudicating it. The practical difference matters:

- A **rejection** is typically returned before adjudication. The claim usually has no appeal rights and needs to be corrected and resubmitted.
- A **denial** is a decision made after adjudication, and may be appealed.

For claims returned as unprocessable, payers such as Medicare contractors have said that the provider should submit a new claim with the corrected information rather than file an appeal. Check how your payer handles CO-16 before choosing between a corrected claim and an appeal. For more on the distinction, see our guide to [clean claim rate](/resources/clean-claim-rate).

## Step-by-step: how to fix a CO-16 denial

1. **Pull the ERA and note the RARC.** Record the remark code and any plain-language message from the payer.
2. **Open the original claim and compare it to the chart and registration record.** Look at the exact field the RARC points to.
3. **Check the payer's current requirements.** Companion guides and provider manuals spell out which fields are mandatory.
4. **Correct the data at the source.** If the registration record is wrong, fix it there too, so the same error does not repeat on the next visit.
5. **Resubmit the right way.** Depending on the payer, this may be a new claim or a corrected claim with the appropriate frequency code. Do not simply resend the identical claim.
6. **Track the deadline.** Resubmission still has to fall inside the payer's filing window. See our overview of [timely filing limits](/resources/timely-filing-limits).
7. **Log the root cause.** Tag the denial with a category such as registration, provider data, or coding so trends become visible.

## An illustrative example

*The following is a hypothetical example for illustration only.*

A practice adds a new nurse practitioner. Claims for that provider begin returning CO-16 with a remark code about the rendering provider identifier. Reviewing the claims, the billing team finds the NPI is correct, but the provider has not yet been linked to the group at the payer. The fix is not a claim edit at all: it is completing the enrollment, then resubmitting the held claims once the link is active.

The lesson is that CO-16 sometimes points to a [credentialing](/resources/medical-credentialing-process) gap rather than a data-entry slip, so look beyond the claim form.

## How to prevent CO-16 denials

The cheapest CO-16 is the one that never gets submitted.

- **Verify eligibility before the visit** and update the registration record with whatever the payer returns. See our guide to [insurance eligibility verification](/resources/insurance-eligibility-verification).
- **Use claim scrubbing rules** in your practice management system or clearinghouse to catch missing NPIs, invalid codes, and blank required fields before submission.
- **Keep provider enrollment data current** in your system, including taxonomy codes and group linkages.
- **Update code sets on schedule.** CPT and ICD-10-CM codes change annually, and a deleted code on a claim is a common source of avoidable errors.
- **Review rejection reports daily** rather than waiting for the ERA, so errors are corrected within days.
- **Train front-desk staff** on the fields that most often cause errors, and audit a small sample of registrations each week.

## Metrics to watch

Track CO-16 as its own category in your denial reporting. Useful measures include:

- CO-16 denials as a percentage of total claims submitted
- The most frequent remark codes attached to CO-16
- Average days between receiving the denial and resubmitting
- Which payers, providers, or staff members generate the most CO-16 denials

If the same remark code keeps appearing, you have found a process problem, not a one-off mistake. Our guide to [common claim denial reasons](/resources/common-claim-denial-reasons) is a good companion for building a fuller denial taxonomy.

## How we help

QureVanta's team reviews ERAs daily, decodes CARC and RARC combinations, corrects and resubmits claims, and feeds root causes back to your front office so the errors stop recurring. If CO-16 is eating into your cash flow, our [denial management](/services/denial-management) service can work the backlog, and our [claims submission](/services/claims-submission) team can add scrubbing and edit checks upstream.

> This article provides general educational information, not legal or payer-specific advice. Code definitions, payer rules, and filing requirements change, so verify current rules and policies with the payer before acting.
