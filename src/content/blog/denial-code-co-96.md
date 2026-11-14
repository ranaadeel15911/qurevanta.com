---
title: Denial Code CO-96: Non-Covered Charges and What to Do Next
description: CARC 96 means the payer treats a charge as non-covered. Learn to read the remark code, choose between correction, appeal or write-off, and when the ABN matters.
category: Denial management
date: 2026-11-14
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794657827/qurevanta/blog/denial-code-co-96.jpg
services: denial-management, charge-entry, coding-audit
---
Denial code **96** is the claim adjustment reason code (CARC) for *"Non-covered charge(s)."* It tells you the payer will not pay for the service, but on its own it tells you almost nothing about why. The explanation is in the remark code printed next to it, and reading that remark code is the first job.

The second job is deciding which of three situations you are in: the service is genuinely not covered, the service is covered but the claim was built wrong, or the payer made a mistake. Each one has a different fix, and only one of them is an appeal. Writing off a billing error as "non-covered" costs real money, and appealing a plan exclusion wastes staff time.

## What CO-96 actually says

X12 publishes CARC 96 as "Non-covered charge(s)" and adds that at least one remark code must accompany it. The remark code has to be one that is not an alert. X12 also says to look at the policy identification segment of the 835 (the service payment information REF in loop 2110) when it is present.

So a CARC 96 line with no remark code is unusual, and a remittance that carries one gives you the reason in the payer's own terms. Always read these together:

- The **group code** (CO, PR or occasionally OA), which says who carries the financial responsibility.
- The **remark code (RARC)**, which gives the reason the charge is not covered.
- The **policy identification reference**, if the payer sent one, which can name the policy or benefit rule it applied.

The group code matters a great deal. CO generally means a contractual obligation: the provider absorbs the amount and does not bill the patient. PR means patient responsibility. Which group code you receive depends on the payer, the contract and, for Medicare, whether proper notice was given. Do not assume. Confirm with the payer's policy before any patient statement goes out.

## Three situations behind a CO-96

### 1. The service really is not covered

The plan excludes it, or Medicare does by law. Cosmetic services, certain screenings and routine items that a benefit plan simply leaves out belong here. Appealing these rarely goes anywhere because the payer is applying a rule, not exercising judgment.

### 2. The service is covered, but the claim does not show it

This is where most recoverable money sits. Typical causes:

- A procedure code that the plan treats as non-covered when the covered service has a different code, for example a preventive visit billed where an annual wellness code applies.
- A diagnosis code that does not meet the coverage rule for that procedure.
- A missing or wrong modifier.
- Billing under the wrong benefit, such as a service the patient's plan covers only through a specific provider type or place of service.
- Wrong payer or wrong plan on the claim.

### 3. The payer applied the wrong rule

The benefit verification said the service was covered, the plan documents agree, and the denial contradicts both. This is the one situation where an appeal is the right tool.

## What to do first: a seven-step plan

1. **Pull the remittance and read the group code, remark code and any policy reference.** Write down the exact wording.
2. **Look up the payer's coverage policy.** For Medicare, that means the national and local coverage policies on your contractor's website. For commercial plans, the provider portal or policy library.
3. **Check what was billed against what was documented.** Compare the claim with the visit note. If the note supports a different code, diagnosis or modifier, you are probably in situation 2.
4. **Check what you knew at scheduling.** Look at your eligibility verification record. If someone confirmed coverage for this service, keep that record, because it supports a payer-error argument.
5. **For Medicare patients, look for an ABN.** Section below.
6. **Decide: correct, appeal or adjust.** Corrected claim for coding and billing errors, appeal for payer errors, adjustment for true exclusions.
7. **Record the cause.** Tag the denial by reason so you can see patterns across weeks.

## The ABN question for Medicare

For Medicare Part B, the Advance Beneficiary Notice of Noncoverage (ABN, form CMS-R-131) is how a provider warns the patient, before the service, that Medicare is expected to deny it and the patient may have to pay. It exists mainly for services Medicare might deny for reasons such as lack of medical necessity.

According to the CMS Medicare Claims Processing Manual, Chapter 30 (section 50.2.1), an ABN is not required for care that Medicare never covers by law, such as care that fails to meet the definition of a Medicare benefit or is explicitly excluded under the Social Security Act. CMS strongly encourages providers to issue one anyway, because the patient then knows the cost up front. That is called a voluntary ABN.

Medicare contractors describe the matching claim modifiers this way. These are from the CGS Medicare ABN page:

- **GA:** a required ABN was issued and is on file. It does not go with the claim, but you must have it available on request.
- **GX:** a voluntary ABN was issued for a service Medicare never covers.
- **GY:** no notice was issued and none was required because the item or service is excluded or is not a Medicare benefit.
- **GZ:** Medicare is expected to deny the service as not reasonable and necessary, and no ABN was issued.

The chapter also says the general retention period for a signed ABN is five years from the completion of care when no other requirement applies, and that electronic retention of the signed form is acceptable. Check your state's rules and contractor guidance, because they may be stricter.

What the modifier does for you in a CO-96 situation depends on the denial. A statutorily excluded service billed with the right modifier is a clean, expected denial. A service that was denied with no modifier, no ABN and no documented notice is the case where practices most often end up absorbing the charge. That is why front-end ABN workflow, covered in our related guide on [CO-50 medical necessity denials](/resources/denial-code-co-50), is part of CO-96 prevention too.

## A worked example (illustrative)

A Medicare patient comes in for a routine physical. The office bills a preventive visit code. The remittance returns CARC 96 with a remark code indicating the service is not covered.

1. The biller reads the remittance and notes the group code and the remark text.
2. A check of the contractor's policy shows that the routine physical is not a Medicare benefit, but the patient's last wellness visit was more than a year ago and the practice could have offered an annual wellness visit.
3. The visit note documents the elements the annual wellness visit needs, so a corrected claim with the appropriate code is justified.
4. The biller submits the correction according to the contractor's rules instead of resubmitting the same claim, which would likely hit a [duplicate denial](/resources/denial-code-co-18).
5. The practice updates its scheduling script so Medicare patients are booked for the visit type that matches what they want and what Medicare covers.

If the note had not supported the annual wellness visit, the right answer would be to adjust the charge according to policy and move on. The patient and numbers in this example are made up to show the order of work.

## When CO-96 is a coding or charge-entry problem

If your CO-96 rate climbs for one procedure or one provider, the cause is rarely the payer. Look at the common sources:

- Charge entry using a code the plan never covers when a covered alternative exists.
- Diagnosis codes truncated or reordered on the claim.
- Modifiers dropped between the charge capture screen and the claim. Our guide to [modifier 25](/resources/modifier-25-explained) shows one case where a missing modifier changes how an E/M line is paid.
- Outdated fee schedule or coverage tables after a code set update.

A [coding audit](/resources/medical-coding-audit-guide) on a sample of the denied claims usually shows within an hour whether the pattern is a coding habit or a payer rule.

## Appealing a CO-96 denial

Appeal only when you can state why the payer's decision conflicts with its own policy or the member's benefits. Send:

- The remittance and the claim.
- The payer's policy language that supports coverage.
- The clinical documentation that shows the service met the policy.
- The eligibility and benefits check that confirmed coverage, if you have it.

Mind the filing window. Your [timely filing limits](/resources/timely-filing-limits) and the payer's appeal deadline run on separate clocks, and many payers count appeal time from the remittance date. Check each payer's contract rather than assuming.

## Preventing CO-96 denials

- **Check coverage for the specific service, not just active coverage.** An active policy does not mean every code is covered.
- **Keep a short list of non-covered services by payer.** Front desk staff should know it.
- **Give ABNs correctly.** Right form, signed before the service, patient given a real choice.
- **Review code and diagnosis pairing before the claim drops.** Edits in the billing system catch many of these.
- **Work the denials by remark code.** Group them by remark code and procedure to see what is repeating.
- **Revisit contracts and policies after code updates.** Coverage tables shift every year.

## Frequently asked questions

### What does denial code CO-96 mean?

It means the payer considers the billed charge not covered. The official CARC wording is "Non-covered charge(s)," and X12 requires at least one remark code to explain the reason.

### Can I bill the patient for a CO-96 denial?

Not automatically. CO generally means the provider carries the amount, while PR means the patient may owe it. For Medicare, whether you can bill the patient depends on the type of service and whether proper notice, such as an ABN, was given. Check the payer's rules and your contract first.

### What is the difference between CO-96 and CO-50?

CO-96 says the service is not covered. CO-50 says the payer judged it not medically necessary. The fixes differ: CO-96 often calls for a coding or benefit check, while CO-50 usually turns on clinical documentation and medical policy.

### Should I appeal every CO-96?

No. Appeal when the payer's decision contradicts its own policy or the patient's benefits. If the service is an exclusion, an appeal usually fails. If the claim was coded or billed wrongly, a corrected claim is the faster fix.

### Do I need an ABN for a service Medicare never covers?

CMS says an ABN is not required for care that is statutorily excluded or not a Medicare benefit, but it strongly encourages providers to issue one so patients know what they may owe.

## How we help

CO-96 denials sit between front-end coverage checks and back-end coding. Our [denial management](/services/denial-management) team reads each remittance, separates true exclusions from fixable errors and files corrected claims or appeals. Our [coding audit](/services/coding-audit) service reviews denied claims for code, diagnosis and modifier patterns, and [charge entry](/services/charge-entry) support helps keep those errors from reaching the claim in the first place.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [CMS Medicare Claims Processing Manual, Chapter 30: Financial Liability Protections](https://www.cms.gov/regulations-and-guidance/guidance/manuals/downloads/clm104c30.pdf)
- [CGS Medicare: Advance Beneficiary Notices (ABNs)](https://www.cgsmedicare.com/jb/claims/sub/abns.html)

> This article is general educational information, not legal or coverage advice. Payer rules, policies and deadlines change, so verify current requirements with the payer or Medicare contractor before acting on any claim.
