---
title: Denial Code CO-45: Charge Exceeds Fee Schedule and What to Do About It
description: CO-45 is a contractual write-off, not a true denial. Learn how to verify the adjustment, spot underpayments and fix charge master problems before they cost you.
category: Denial management
date: 2026-11-09
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794225751/qurevanta/blog/denial-code-co-45.jpg
services: fee-schedule-analysis, payment-posting, denial-management
---
**CO-45** is the adjustment you will see on almost every paid claim, and it is the one most often mislabeled as a denial. The official description of claim adjustment reason code 45 is *"Charge exceeds fee schedule/maximum allowable or contracted/legislated fee arrangement."* In plain terms: you billed more than the payer allows for that service, and the payer is reducing the charge down to its allowed amount.

Most of the time nothing is wrong. You write off the difference, you do not bill the patient for it, and you move on. The work is in knowing when CO-45 is correct and when it is hiding an underpayment, a wrong fee schedule, or a mis-posted payment.

## What CO-45 actually means

The code is only valid with two group codes: **CO** (contractual obligation) or **PR** (patient responsibility). The X12 code list says it is used "only with Group Codes PR or CO depending upon liability." The same entry also notes that the adjustment amount cannot equal the total service or claim charge.

That second point matters. A genuine CO-45 reduces a charge to a non-zero allowed amount. If a payer sends CO-45 for the *entire* billed amount with no payment, that is not the code working as designed, and it is worth a phone call. X12 has addressed this in a published request for interpretation: CARC 45 presumes an allowed amount, so zeroing out a whole charge with it is inconsistent with the code's intent.

For a participating Medicare provider the rule is simple. Participating means you agree to accept assignment on all Medicare-covered services, which means taking the Medicare-allowed amount as payment in full. You cannot bill the patient more than the deductible, coinsurance or copay. A CO-45 on a Medicare claim is therefore a write-off.

The same logic applies to in-network commercial plans. The contract sets the allowed amount, and the gap between your charge and that amount is yours to adjust off.

## CO-45 versus PR-45

The group code decides who owes the difference.

- **CO-45:** The provider owes it under a contract or program rule. Adjust it off the account. Do not transfer it to the patient.
- **PR-45:** The patient may owe it. You will see this in some out-of-network or non-contracted situations where the plan's rules put the difference on the member. Before billing the patient, check the plan's balance-billing rules and any state or federal protections. The [No Surprises Act](/resources/no-surprises-act-guide) limits balance billing in several emergency and facility-based situations.

Never assume. Read the group code on every line before you post the adjustment, because posting a PR-45 as a write-off gives away money and posting a CO-45 as patient balance creates a compliance problem.

## Why CO-45 shows up so often

Every in-network claim where your billed charge is higher than the contracted rate produces a CO-45 adjustment. If your charge master lists $200 for a visit and the contract allows $120, the $80 difference is the CO-45 amount. That is normal and expected.

It becomes a problem in a few specific cases:

- **The allowed amount is wrong.** The payer loaded the wrong fee schedule, the wrong effective date, or the wrong provider contract.
- **Your system expected a different amount.** Your own fee schedule table is outdated, so expected payment and actual payment never match.
- **A modifier or place of service changed the pricing.** The same code can price differently with a modifier, in a facility versus an office, or for a different provider type.
- **Your charges are lower than the allowed amount.** Payers do not pay more than you bill. If your charge is below the contract rate, you leave money on the table every time.

## Illustrative example: a CO-45 that was really an underpayment

This example is invented to show the process. The numbers are not from any real contract.

A practice bills a procedure at $400. The contract with the payer says the allowed amount is $310. The remittance shows:

- Billed: $400
- Allowed: $262
- CO-45: $138
- Payment: $262 (no patient responsibility)

The CO-45 amount looks routine, which is why many posters would accept it. But the allowed amount is $48 below the contracted rate. The CO-45 was inflated because the payer priced the claim at the wrong rate. If the practice only checks that "CO-45 equals charge minus allowed," the math works and the error passes through.

The check that catches it is comparing the *allowed amount* to the *contract*, not comparing the adjustment to the charge.

## How to verify a CO-45 adjustment: step by step

1. **Confirm the math.** Billed charge minus allowed amount should equal the CO-45 amount, plus any other adjustments on the line. Note anything else such as deductible, coinsurance or copay in PR lines.
2. **Compare the allowed amount to the source of truth.** For Medicare, use the current Physician Fee Schedule for your locality. For commercial plans, use the contract fee schedule that applied on the date of service. Check the code, modifier and place of service you billed.
3. **Check the effective date.** Fee schedules change, and a contract amendment may have started mid-year. A claim for a December date of service may price differently from one in January.
4. **Look at the modifiers and units.** A reduction for multiple procedures, an assistant surgeon, or a non-physician provider may be legitimate and should be explained by other adjustment codes on the line.
5. **Decide: correct, or dispute.** If the allowed amount matches the contract, post the write-off. If it does not, open a payer dispute or reprocessing request with the contract page, the claim, and the remittance. Ask for a reprocess rather than starting a formal appeal when the payer simply loaded the wrong rate.
6. **Log it.** Record payer, code, expected and actual allowed amount. Patterns show up quickly: one payer, one code family, or one contract amendment.

You do not need to check every line by hand. Most practices set up payment posting rules and a variance report: expected allowed amount versus actual allowed amount, flagged when the gap exceeds a small threshold.

## What to do when CO-45 looks wrong

Several situations look like CO-45 problems but need different handling.

### The whole charge was adjusted

If the payer applied CO-45 to the full billed amount with no payment, ask the payer what the true reason is. Often a different code, such as a bundling or authorization denial, was intended. Compare to [CO-97](/resources/denial-code-co-97), where a service is treated as included in another payment, or [CO-50](/resources/denial-code-co-50) for medical necessity.

### The allowed amount is below contract

Request reprocessing and attach the contract or fee schedule page. Keep a record of the date you reported it, because contracts and [timely filing limits](/resources/timely-filing-limits) can apply to disputes as well as claims. Check your contract for a deadline.

### The payer says the service is not in your fee schedule

New codes, or codes your practice has never billed, may not be on the schedule you were given. Many contracts include a default methodology, such as a percentage of the Medicare rate. Read that clause. If your contract is silent, that is a negotiation point for the next renewal. See [payer contract negotiation](/resources/payer-contract-negotiation).

### Secondary billing and coordination of benefits

When you bill a secondary payer, the primary payer's contractual adjustment should not be repeated. The X12 usage note for CARC 45 says the amount must not duplicate provider adjustments from prior payer adjudication. If a secondary payer shows a CO-45 that looks like it double-counts the primary's write-off, ask for it to be reviewed.

## Preventing CO-45 problems at the source

- **Keep your charge master above your highest contracted rate.** If any payer pays more than you bill, you will never see the full contract value.
- **Load every contract fee schedule into your practice management system.** Expected payment should be calculated before the claim goes out, not after the remittance arrives.
- **Review fee schedules each year.** Medicare updates come every January, and commercial contracts have their own anniversary dates. A [fee schedule analysis](/services/fee-schedule-analysis) compares your rates against what payers actually pay and flags codes that are underpaid.
- **Post from the ERA, not by estimate.** Accurate [payment posting](/resources/era-eft-payment-posting) records the allowed amount, the group code, and every adjustment on the line, and that data feeds your variance report.
- **Train posters on group codes.** The CO versus PR split is the line between a write-off and a patient bill.

## A timely reminder for Medicare practices

Because CO-45 depends on your Medicare participation status, it is worth knowing the annual decision window. CMS states that each year, from mid-November through December 31, physicians and suppliers can decide whether to participate for the following year. Participating providers are paid the full fee schedule amount. Non-participating providers receive payment that is 5% less than the Medicare Physician Fee Schedule allowed amount. A non-participating provider who does not accept assignment is limited to charging patients up to 115% of the fee schedule amount. Changing status affects collections, patient billing and contractual write-offs, so run the numbers before the window closes.

## Frequently asked questions

### Can I bill the patient for a CO-45 adjustment?

No. CO means contractual obligation, so the difference between your charge and the allowed amount is a provider write-off. A PR-45 is different and may be billable depending on the plan's rules, so check the group code first.

### Is CO-45 a denial?

Not usually. It is an adjustment that reduces the billed charge to the allowed amount, and the claim is typically paid alongside it. It only needs action when the allowed amount is wrong or when it is applied to the full charge with no payment.

### How do I know if the allowed amount is correct?

Compare it to the contract fee schedule or the Medicare Physician Fee Schedule for the date of service, code, modifier and place of service. If your system does not hold the fee schedule, you cannot check it, which is the first thing to fix.

### Can CO-45 be appealed?

If the payer applied the contract correctly, there is nothing to appeal because the write-off is the contract working. If the allowed amount is wrong, request reprocessing or file a dispute using your contract and the payer's process.

## How we help

Spotting an underpayment hidden inside a routine adjustment takes clean fee schedule data and consistent posting. Our [fee schedule analysis](/services/fee-schedule-analysis) team compares your contracted and Medicare rates against actual payments, and our [payment posting](/services/payment-posting) specialists capture group codes and allowed amounts accurately. If CO-45 variances are showing up in your reports, [denial management](/services/denial-management) can help work the disputes.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [X12 Request for Interpretation: CARC 45 usage](https://x12.org/resources/requests-for-interpretation/rfi-2052-casco45-being-used-denial)
- [CMS: Medicare participation](https://www.cms.gov/medicare-participation)
- [CMS: Physician Fee Schedule](https://www.cms.gov/medicare/payment/fee-schedules/physician)

> This article is general educational information, and the example is illustrative only. Verify current rules, your payer contracts and your state requirements before adjusting accounts or billing patients.
