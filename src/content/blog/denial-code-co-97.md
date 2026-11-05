---
title: Denial Code CO-97: What It Means and How to Fix It
description: CO-97 means a service was bundled into another procedure’s payment. Learn the common causes — NCCI edits, global periods, and missing modifiers — and a step-by-step fix and prevention plan.
category: Denial management
date: 2026-11-05
image: 1551836022-d5d88e9218df
services: denial-management, coding-audit, claims-submission
---
Denial code **CO-97** is one of the most common — and most misunderstood — adjustments on an explanation of benefits or electronic remittance advice. Its official description is: *"The benefit for this service is included in the payment/allowance for another service/procedure that has already been adjudicated."*

In plain terms, the payer has decided that the service you billed is part of another service and should not be paid separately. This is often called **bundling**.

## What the "CO" means

Every claim adjustment reason code (CARC) is paired with a group code:

- **CO (Contractual Obligation):** The adjustment is the provider’s responsibility under the contract. You **cannot bill the patient** for it.
- **PR (Patient Responsibility):** The amount may be billed to the patient, such as deductibles and copays.
- **OA (Other Adjustment)** and **PI (Payer Initiated)** cover other situations.

Because CO-97 is a contractual adjustment, simply writing it off or transferring it to the patient is not an option. Either the denial is correct and the service is truly included, or it is incorrect and should be corrected or appealed.

CO-97 is often accompanied by a remittance advice remark code (RARC) such as **M15** (*"Separately billed services/tests have been bundled as they are considered components of the same procedure"*) or **N390**. The remark code tells you more about why the bundling happened.

## The most common causes of CO-97

### 1. NCCI procedure-to-procedure edits

The National Correct Coding Initiative (NCCI) defines pairs of codes that should not normally be billed together for the same patient on the same day. When both codes in a pair appear on a claim, the column-two code is denied as included in the column-one code — unless an appropriate modifier is used and supported by documentation.

### 2. Services within a global surgical period

Surgical procedures include a package of related care: the pre-operative visit (for major procedures), the procedure itself, and routine post-operative visits during the global period (0, 10, or 90 days). Billing a routine follow-up visit during the global period results in a CO-97 denial.

### 3. Missing or incorrect modifiers

Many bundled pairs can be paid separately when the services were genuinely distinct — for example, performed at a different anatomical site or a separate session. Common modifiers include:

- **59** or the more specific **XE, XS, XP, and XU** modifiers for distinct procedural services
- **25** for a significant, separately identifiable E/M service on the same day as a procedure
- **79** for an unrelated procedure during a post-operative period
- **24** for an unrelated E/M service during a post-operative period

Missing these modifiers when they are justified is one of the most common reasons for avoidable CO-97 denials.

### 4. Payer-specific bundling rules

Commercial payers often use their own clinical editing software, which may bundle more aggressively than NCCI. A claim that would be paid by Medicare can still be denied by a commercial plan.

### 5. Incidental services and supplies

Some services, such as certain supplies or minor add-on services, are considered incidental to the primary procedure and are never separately payable.

## How to fix a CO-97 denial: step by step

1. **Read the full remittance.** Identify which line was denied and which service it was bundled into. Note any remark codes.
2. **Check the NCCI edit or payer policy.** Look up the code pair in the current NCCI procedure-to-procedure tables, or in the payer’s published policy. Confirm whether a modifier is allowed (modifier indicator "1") or not allowed ("0").
3. **Review the documentation.** Was the service truly separate — a different site, a different session, a different diagnosis, or a separately identifiable E/M service? If not, the denial is correct and the line should be adjusted off.
4. **If the service was distinct, correct the claim.** Add the appropriate modifier and submit a corrected claim (frequency code 7 for most payers), rather than a duplicate, which would be denied again.
5. **Appeal when the payer is wrong.** If the claim was already correctly coded with a modifier and still denied, file an appeal with the operative note or visit documentation that shows the services were distinct.
6. **Track the outcome.** Record the denial reason, fix, and result so recurring patterns can be addressed.

## Preventing CO-97 denials

- **Use claim scrubbing software** that checks NCCI and payer-specific edits before submission. Most [clean claims](/resources/clean-claim-rate) problems can be caught before the payer sees them.
- **Educate providers on modifier documentation.** A modifier is only valid if the note supports it. Overusing modifier 59 is a well-known audit target.
- **Track global periods** in your practice management system so staff know when a visit falls inside a post-operative window.
- **Review denial trends monthly.** If one provider, code pair, or payer accounts for most CO-97 denials, focus training and workflow fixes there.
- **Audit periodically.** A [coding audit](/services/coding-audit) can identify both missed modifiers (lost revenue) and inappropriate modifier use (compliance risk).

## When CO-97 is correct

Not every CO-97 denial is a mistake. If a service really is included in another procedure — for example, a routine wound check during a surgical global period — the correct response is to accept the adjustment and make sure the same service is not billed separately in the future. Repeatedly billing bundled services can look like unbundling to auditors.

## The bottom line

CO-97 is fundamentally a coding and documentation issue. Practices that resolve it quickly look at three things: the code pair, the modifier, and whether the documentation shows a distinct service. If CO-97 is one of your top denial reasons, our [denial management](/services/denial-management) team can help you work the backlog and fix the root cause.

> This article is general educational information. Always check current NCCI edits and your payer contracts before correcting or appealing a claim.
