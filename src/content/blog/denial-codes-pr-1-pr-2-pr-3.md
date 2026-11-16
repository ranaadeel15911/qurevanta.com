---
title: PR-1, PR-2 and PR-3 Explained: Deductible, Coinsurance and Copay Adjustments
description: PR-1, PR-2 and PR-3 are not denials. Learn what each patient responsibility code means, how to check the math, and when to bill the patient or dispute it.
category: Denial management
date: 2026-11-16
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794830528/qurevanta/blog/denial-codes-pr-1-pr-2-pr-3.jpg
services: patient-statements, payment-posting, pre-eligibility-verification
---
PR-1, PR-2 and PR-3 show up on almost every remittance, and they often get lumped in with denials. They are not denials. They are the payer telling you how much of the allowed amount belongs to the patient: **PR-1** is the deductible, **PR-2** is coinsurance, and **PR-3** is the copay.

The practical answer is that you generally do not appeal these, you verify them. Check that the amount matches the patient's plan, post it as patient responsibility, collect it, and only go back to the payer when the numbers do not add up. The rest of this article shows you how to run that check.

## What the codes mean

The X12 claim adjustment reason code list defines the three codes in very few words:

- **CARC 1:** "Deductible Amount"
- **CARC 2:** "Coinsurance Amount"
- **CARC 3:** "Co-payment Amount"

The "PR" in front is the claim adjustment group code, and it is the part that matters most for your write-off decisions. X12 lists PR as "Patient Responsibility." CMS describes group codes as assigning financial responsibility for the unpaid part of the claim balance: CO puts it on the provider, PR puts it on the patient. CMS also states that Medicare beneficiaries may be billed only when group code PR is used with an adjustment.

That last point is the reason posting staff need to read the group code, not just the number. The same reason code can arrive under different group codes, and the group code decides whether you can send a statement.

## Where you will see them

On an electronic remittance advice (835), these adjustments sit in the CAS segment, at the claim or service line level. On a paper remittance or explanation of benefits, they usually show up as columns or remark lines labelled deductible, coinsurance and copay. Most practice management systems post them automatically and move the balance to the patient's account.

If your posting is manual or your ERA setup is incomplete, patient balances can be wrong without anyone noticing. Our guide to [ERA/EFT payment posting](/resources/era-eft-payment-posting) covers how the 835 maps to your ledger.

## How each code works

### PR-1: deductible

The deductible is the amount the patient pays toward covered services before the plan starts paying its share. When a claim is processed, the payer applies some or all of the allowed amount to the patient's remaining deductible and reports it as PR-1.

Three things to remember:

- The deductible is based on the allowed amount, not your billed charge.
- A claim with a large PR-1 and a small or zero payer payment is normal early in the plan year.
- The deductible balance changes with every claim the plan processes, so what was true at check-in may be out of date by the time your claim is adjudicated.

### PR-2: coinsurance

Coinsurance is the patient's percentage of the allowed amount after the deductible is met. If a plan pays 80 percent and the patient pays 20 percent (an illustrative split), PR-2 will carry that 20 percent share of the allowed amount.

Because it is a percentage, PR-2 moves with the allowed amount. A higher-paying code produces a bigger PR-2 line, and a service the payer prices lower produces a smaller one. That is why PR-2 amounts often differ between payers for the same procedure.

### PR-3: copay

A copay is a flat dollar amount per visit or service, set by the plan. It does not change with the allowed amount. If the copay was collected at the front desk, the PR-3 on the remittance should match what you already collected, and the patient balance should be zero for that line. If it was not collected, the balance is still due.

## A worked example (illustrative)

Numbers below are made up to show the logic. They are not a payer rule.

A new patient is seen for an office visit. Your charge is $200. The payer's allowed amount is $120. The patient has a $100 deductible remaining and 20 percent coinsurance after that.

1. The payer applies $100 of the allowed amount to the deductible. That is **PR-1: $100**.
2. The remaining allowed amount is $20. At 20 percent coinsurance, the patient owes $4. That is **PR-2: $4**.
3. The payer pays the remaining $16.
4. The difference between your charge and the allowed amount, $80, is a contractual adjustment. That is typically reported under CO, not PR, and you cannot bill the patient for it. See our article on [CO-45 charges exceeding the fee schedule](/resources/denial-code-co-45).

The patient owes $104 in total. If your front desk had estimated and collected $104 at the visit, the account closes at zero. If the system shows a different patient balance, one of the three inputs is off: the allowed amount, the deductible status, or the coinsurance rate.

## The six-point check before you bill the patient

Run this before any statement goes out on a PR balance.

1. **Read the group code.** Confirm it is PR and not CO. If it is CO, write it off per your contract.
2. **Match the plan.** Compare the PR amount with the benefits you verified at scheduling. Look at deductible remaining, coinsurance percentage and copay for that service type.
3. **Check the allowed amount.** If it does not match your contracted fee schedule, the problem is the payer's pricing, not the patient's share. Dispute it with the payer.
4. **Check for double counting.** A copay and a deductible on the same service line is not impossible, but if both look high, confirm the plan's rules rather than assuming.
5. **Look for secondary coverage.** A PR balance may be payable by a secondary plan. Bill secondary before the patient. If the primary was not the right payer at all, see [CO-22](/resources/denial-code-co-22).
6. **Check whether the service should carry cost sharing at all.** This one catches more errors than people expect.

## Preventive services: when PR should be a red flag

CMS explains that under the Affordable Care Act, non-grandfathered plans must cover recommended preventive services without a deductible, copayment or coinsurance when delivered by an in-network provider. An office visit that is primarily for preventive care and is not billed separately from other services cannot carry cost sharing. Plans can still charge cost sharing when the service is delivered out of network.

So a PR-1, PR-2 or PR-3 on a claim for a true preventive service deserves a second look. The common causes are:

- Coding that does not tell the payer the service was preventive, such as a missing or wrong diagnosis pointer or modifier.
- A problem-oriented service added to a preventive visit, which can legitimately trigger cost sharing on the problem portion.
- An out-of-network provider or a plan exception.

If the coding was wrong, a corrected claim may remove the patient's share. If the coding was right and the payer still applied cost sharing, ask the payer for the plan language that supports it. Do not bill the patient until you know which it is.

## When to question the payer instead of billing the patient

Treat a PR line as a dispute item, not a collection item, when:

- The PR amount is higher than the verified plan benefit.
- The patient had already met the deductible according to the payer's own portal or an earlier remittance.
- The allowed amount is below your contract rate.
- The same deductible appears to have been applied on two different claims for the same period.
- A preventive service was charged cost sharing and the coding was correct.

In each case, gather the remittance, your eligibility check (with date, reference and representative if you called), and the contract or fee schedule. Then call or submit a reconsideration. Keep the notes in the account.

## Front-end habits that prevent most PR problems

Most patient balance disputes begin at scheduling. A few habits make a large difference:

- Verify benefits for the specific service type, not just "active coverage." Our [eligibility verification guide](/resources/insurance-eligibility-verification) lists what to capture.
- Record deductible remaining and the date you checked it.
- Give patients an estimate before the visit and collect the copay at check-in.
- Re-check eligibility on the day of service for patients with high deductibles, since balances change.
- Store the verification in the patient's chart so posting staff can compare it with the remittance.

## Posting and statements

Once the PR amount is confirmed, post it to the patient's account by type (deductible, coinsurance, copay) if your system allows. Separating them makes reporting much easier: you can see how much of your patient balance is deductible-driven and plan collection workflows around it.

Then send a clear statement. It should show the date of service, the allowed amount, what insurance paid, and what the patient owes. Clear statements get paid faster and generate fewer calls.

## Frequently asked questions

### Is PR-1 a denial?

No. PR-1 means the payer applied part of the allowed amount to the patient's deductible. The claim may have been processed normally. The patient owes that amount, subject to your checks.

### Can I bill the patient for a PR-2 amount?

Generally yes, when the group code is PR and the amount matches the patient's plan. CMS states that Medicare beneficiaries may be billed only when group code PR is used with an adjustment. Check for secondary coverage first and confirm the amount is correct.

### What is the difference between PR-2 and PR-3?

PR-2 is coinsurance, a percentage of the allowed amount. PR-3 is a copay, a fixed dollar amount. PR-2 changes when the allowed amount changes. PR-3 does not.

### What if the patient says they already paid the copay?

Check your payment records first. If the copay was collected, the PR-3 should offset it, and the balance should be zero. If a balance remains, look for a posting error or a copay amount mismatch with the plan.

### Do I need to appeal PR-1, PR-2 or PR-3?

Usually not. You verify and collect. An appeal or reconsideration only makes sense if the amount is wrong, for example a miscalculated deductible, a wrong allowed amount, or cost sharing applied to a preventive service that should have been covered in full.

## How we help

Patient balances are only as accurate as the benefits behind them. Our [pre-eligibility verification](/services/pre-eligibility-verification) team confirms deductible, coinsurance and copay details before the visit, so estimates match what the payer later reports. Our [payment posting](/services/payment-posting) specialists post every PR adjustment by type and flag amounts that do not match the plan. When balances are confirmed, our [patient statements](/services/patient-statements) service sends clear, accurate bills.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [X12 Claim Adjustment Group Codes](https://x12.org/codes/claim-adjustment-group-codes)
- [CMS Health Care Payment and Remittance Advice](https://www.cms.gov/Medicare/Billing/ElectronicBillingEDITrans/Remittance)
- [CMS: The Affordable Care Act's New Rules on Preventive Care](https://www.cms.gov/cciio/resources/fact-sheets-and-faqs/preventive-care-background)

> This article is general educational information, not legal or coverage advice. Payer rules, plan benefits and policies change, so verify current requirements with the payer or Medicare contractor before acting on any claim.
