---
title: Denial Code CO-151: Too Many Units or Visits Billed and How to Fix It
description: CO-151 means the payer thinks the documentation does not support the units or frequency billed. Learn the causes, how MUEs fit in, and how to respond.
category: Denial management
date: 2026-11-19
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1795089787/qurevanta/blog/denial-code-co-151.jpg
services: denial-management, coding-audit, charge-entry
---
Denial code **CO-151** is a quantity problem. The official X12 description reads: *"Payment adjusted because the payer deems the information submitted does not support this many/frequency of services."* The payer is not necessarily saying the service was wrong. It is saying the number of units, or how often you billed it, goes beyond what the record in front of it justifies.

On a Medicare remittance, CO-151 often arrives with remark code **N362**, which says: *"The number of Days or Units of Service exceeds our acceptable maximum."* That pairing usually points to a Medically Unlikely Edit (MUE), though commercial payers use their own frequency limits and send CO-151 for similar reasons. Read both codes before you decide what to do.

## What CO-151 actually tells you

The **CO** prefix is the group code for contractual obligation. In most cases the practice cannot bill the patient for a CO adjustment, so the denied amount is either recovered from the payer or written off. Our guide to [denial code CO-97](/resources/denial-code-co-97) covers how group codes work in more detail.

The reason code itself covers two different situations:

- **Quantity:** you billed more units on a line, or more units in a day, than the payer allows for that code.
- **Frequency:** you billed the same service more often than the payer's policy allows over a period, such as a certain number of visits, tests or treatments in a month or a year.

The fix depends on which one you are dealing with. A unit-count error is usually a billing mistake you can correct. A frequency denial is more often a medical necessity or documentation question.

## How MUEs produce CO-151 on Medicare claims

CMS describes an MUE as the maximum units of service reported for a HCPCS/CPT code on the vast majority of appropriately reported claims. Medicare Administrative Contractors use these edits to reduce improper Part B payments. Not every code has an MUE, and CMS updates the values quarterly. CMS publishes most practitioner MUE values in a table on its website, but says some values are confidential and are not released.

Two details from the CMS FAQ library matter in daily work:

- An MUE with an adjudication indicator (MAI) of **1** is a **claim line edit**. Each line is checked against the limit on its own.
- An MAI of **2 or 3** is a **date of service edit**. The system adds up all units of the same code for the same provider, patient and date of service. If the total exceeds the limit, all of those units are denied, not just the extra ones.

That second point surprises people. A practice that bills 3 units on one line and 2 on another line the same day can have all 5 denied, because the edit looks at the daily total.

CMS also states that MUE values are not utilization guidelines. Billing at or below the MUE does not protect a claim from medical review, and a unit count above it is not automatically wrong. It simply triggers the edit.

## Step by step: what to do when CO-151 lands

Work through these in order. Each step either resolves the denial or tells you it should not be pursued.

1. **Confirm which units were denied.** Open the remittance and note the line, the code, the units billed and the units paid. Check whether the denial covers one line or every line for that code on that date.
2. **Compare billed units to the chart.** Open the note, the procedure record or the order. For timed codes, check the documented minutes. For supplies, injections or per-unit drugs, check the amount administered against the unit definition in the code descriptor. Many CO-151 denials are charge entry errors, such as a unit count typed as the number of minutes or milligrams instead of the number of billing units.
3. **Look up the limit.** For Medicare, check the current MUE table for your code. For a commercial payer, look at the payer's reimbursement policy or frequency limit for that code, or call provider relations and ask for the written policy.
4. **Decide if it was an error or a real count.** If the units were miscounted, correct the claim. If the units were accurate and medically necessary, you are building a case for review, not fixing a typo.
5. **Choose the correct route.** A corrected claim, a reopening, a redetermination or a payer appeal each have different rules and deadlines. Match the route to the payer and to the reason, and keep an eye on the filing window.
6. **Record the cause.** Tag the denial in your tracking system with a root cause, such as charge entry error, missing documentation or payer edit disagreement. You will need that data later.

## When the units were correct

CMS's FAQ says that for a claim line MUE, medically necessary units above the limit can be reported on separate lines when the correct modifiers apply. Modifiers it names include 59 or the X modifiers (XE, XP, XS, XU), 76, 77, 91, and anatomic modifiers. The same FAQ adds that claims processing contractors have rules limiting the use of these modifiers with some codes, and that 59 and the X modifiers may only be used when no other appropriate modifier describes the service.

Treat this carefully. Modifiers must reflect what actually happened, and the chart must support them. Splitting units across lines only to get under an edit, without a real clinical reason, is the kind of pattern that attracts audits. Our explanation of [modifier 25](/resources/modifier-25-explained) shows the same principle: the modifier follows the documentation, never the other way around.

For date of service edits, the CMS FAQ explains that when medical records are submitted during reopening or redetermination for an MUE denial, the contractor reviews them. The reviewer checks whether the units were actually furnished, whether the codes were used correctly and whether the service was medically necessary. The reason for denial may change if the units were furnished but another requirement is not met.

One more point from the same FAQ: an ABN should not be issued because of an MUE, and an ABN does not shift liability to the beneficiary for units denied under an MUE. So do not plan to bill the patient for the denied units.

## A worked example (illustrative)

Suppose a practice bills a code that has a per-day limit of 2 units and enters 4 units for a single visit. The remittance shows CO-151 with N362 and zero payment for the line.

The biller opens the encounter. The provider documented two injection sites, but the charge entry clerk counted the vial doses used rather than the units defined in the code descriptor. Correct units: 2. The fix is a corrected claim with 2 units, not an appeal. The practice then adds a charge entry check so that the unit field is reviewed against the descriptor for that code.

Now change the scenario. The documentation clearly supports 4 units, with a note explaining why more than the usual amount was needed. Here the biller gathers the records, confirms the limit and whether a separate-line modifier is legitimately available, and routes the case through the payer's reopening or appeal process with the documentation attached. The result is not guaranteed, but the case is properly built.

## Prevention checklist

- Put the unit definition of high-volume codes in your charge entry reference, in plain language.
- Load the current MUE values into your claim scrubber and refresh them each quarter when CMS updates them.
- Require a documentation check for any claim where units exceed the typical amount.
- Review frequency-limited services against payer policy before scheduling repeat visits.
- Audit a sample of CO-151 denials each month and sort them by root cause. A [coding audit](/services/coding-audit) can show whether the cause sits with providers, coders or charge entry.
- Track the denial rate by code and by payer. The metrics in our [clean claim rate](/resources/clean-claim-rate) article help here.

## Frequently asked questions

### What is the difference between CO-151 and CO-50?

CO-50 says the service was not deemed medically necessary under the payer's policy. CO-151 is about the number or frequency of services supported by the information submitted. They can overlap, since excessive frequency can also raise a medical necessity question, but the first step differs: CO-151 starts with unit counts and documentation of quantity.

### Can I bill the patient for a CO-151 denial?

CO is a contractual obligation group code, so billing the patient is generally not allowed. For Medicare MUE denials specifically, CMS says an ABN should not be issued and does not shift liability to the beneficiary for units denied under an MUE. Check your payer contract for commercial plans.

### What does remark code N362 mean?

N362 means the number of days or units of service exceeds the payer's acceptable maximum. On Medicare claims it usually indicates the MUE is the cause.

### Does an MUE mean I can never bill more units?

No. An MUE reflects what most appropriately reported claims show. CMS explains that when more units are medically necessary, appropriate modifiers can be used to report them on separate lines for claim line edits, and records can be reviewed during reopening or redetermination. Contractors may limit modifier use for certain codes.

## How we help

Our [denial management](/services/denial-management) team sorts unit and frequency denials by cause, corrects what is fixable, and builds documentation packets for the cases worth contesting. If the same codes keep returning, our [charge entry](/services/charge-entry) service can add unit checks at the front of the claim.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [X12 Remittance Advice Remark Codes](https://x12.org/codes/remittance-advice-remark-codes)
- [CMS: Medicare NCCI Medically Unlikely Edits](https://www.cms.gov/medicare/coding-billing/national-correct-coding-initiative-ncci-edits/medicare-ncci-medically-unlikely-edits)
- [CMS: Medicare NCCI FAQ Library](https://www.cms.gov/medicare-medicaid-coordination/national-correct-coding-initiative-ncci/ncci-medicare/medicare-ncci-faq-library)

> This article is general educational information, not legal or coding advice. Rules, MUE values and payer policies change, so verify current requirements with CMS and each payer before acting.
