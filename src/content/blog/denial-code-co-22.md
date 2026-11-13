---
title: Denial Code CO-22: Care May Be Covered by Another Payer and How to Fix It
description: CARC 22 means the payer thinks another insurer should pay first. Learn how to find the right primary payer, rebill in the correct order, and prevent repeat denials.
category: Denial management
date: 2026-11-13
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794571379/qurevanta/blog/denial-code-co-22.jpg
services: denial-management, pre-eligibility-verification, ar-follow-up
---
Denial code **22** means the payer believes someone else should have been billed first. The official claim adjustment reason code (CARC) wording is: *"This care may be covered by another payer per coordination of benefits."* It is a routing problem, not a verdict on whether the service was necessary or properly coded.

That changes how you work it. An appeal argues that the payer got a decision wrong. A CARC 22 denial is usually fixed by finding out who the real primary payer is, billing that payer, and then sending the secondary claim with the primary payer's remittance. The expensive mistake is guessing, resubmitting the same claim, and burning your filing window.

## What CO-22 actually tells you

The X12 code list publishes CARC 22 with the text above and no group code restriction on that entry. You will most often see it as CO-22 on commercial and Medicare remittances, but do not be surprised by other group codes from some payers.

The word "may" matters. The payer is not saying it knows another insurer exists. It is saying its records, or the information on your claim, suggest coordination of benefits (COB) applies. Either the payer has another policy on file for the patient, or your claim said so, or it is missing the information it needs to treat itself as primary.

That leaves three possibilities:

1. **The payer is right.** The patient has other coverage that pays first, and you billed in the wrong order.
2. **The payer's records are wrong.** The other coverage ended, was never active, or belongs to someone else.
3. **Your claim contradicted itself.** The claim carries other-insurance information that does not match what you told the payer elsewhere.

## Step 1: Find out who is primary

Do not rebill anything yet. Start by getting the facts.

1. Run a current eligibility check on the patient and read the response for other coverage, not just active or inactive status. Our guide to [insurance eligibility verification](/resources/insurance-eligibility-verification) covers what to look for.
2. Look at the remittance for remark codes. Some payers pair CARC 22 with a remark code or free text that names the other plan or asks for the other carrier's explanation of benefits.
3. Ask the front desk what the patient reported at registration, and when the insurance card and coverage questions were last updated.
4. Call the patient if the answers conflict. Patients often know about a spouse's employer plan, a new job, a retirement date or an accident claim that your records do not show.
5. For a Medicare patient, check Medicare's own records through your eligibility tools and contact the Benefits Coordination & Recovery Center (BCRC) if they conflict with what you were told (details below).

Write down what you learn and who told you. If the claim is later reviewed, a dated note beats memory.

## Step 2: Fix it according to the cause

### If another payer is primary

Bill that payer first. Wait for its adjudication. Then bill the secondary payer with the primary payer's payment and adjustment details, either electronically in the claim adjustment segments or with the paper EOB, depending on how the secondary payer accepts claims.

The first claim you sent was billed to the wrong payer, so do not treat the secondary submission as a rebill of the same claim. Follow the payer's instructions on whether the denied claim should be voided, left as is, or corrected. Practices that guess here often generate a [duplicate denial](/resources/denial-code-co-18) on top of the original.

### If the payer's records are wrong

The payer needs the correction from the right source. Some payers accept a phone call from the provider. Others require the patient, or the employer, to update the plan's coordination of benefits record. Ask the payer what it needs and whether it will reprocess the claim after the file is updated or requires a new submission.

Keep the patient involved. A patient who calls their own insurer to say "I have no other coverage" fixes more COB issues than a billing office can.

### If your claim had conflicting information

Review the claim form or the 837 file. Check the payer responsibility sequence, the subscriber details for each payer, and any other-insurance indicators. A secondary payer listed as primary, or an ended policy that is still attached to the account in your system, will keep generating this denial.

## Medicare specifics: when Medicare is the secondary payer

Medicare Secondary Payer (MSP) rules decide who pays first when a Medicare patient has other coverage. According to CMS's Medicare Secondary Payer booklet (MLN006903, July 2025), some of the common situations where other coverage can pay first are:

- A patient age 65 or older with a group health plan (GHP) through current employment, theirs or a spouse's, where the employer has 20 or more employees or is part of a multi-employer group that includes at least one employer with 20 or more people.
- A patient entitled to Medicare because of disability with a large group health plan, where the employer has 100 or more employees or is part of a multi-employer group including an employer with 100 or more.
- End-stage renal disease (ESRD) patients during the 30-month coordination period.
- Work-related injury or illness covered by workers' compensation.
- Accident-related care covered by no-fault or liability insurance.

The booklet notes that when a GHP is primary but does not pay in full, Medicare may pay secondary for the remaining amount on a covered service. Medicare may also pay as primary if the GHP denies a service because the plan does not cover it, again when Medicare covers it.

The practical rules for Part B providers, from the same booklet:

- Collect MSP information from the patient at the time of service and review the MSP questions each time you treat the patient.
- Bill the primary payer first.
- Keep completed MSP questionnaires and other MSP information for 10 years after the date of service, including negative answers.
- Do not refuse a Medicare patient services because an MSP record exists in their file. CMS says doing so is against Medicare laws and policies.

If you believe a patient's MSP record is wrong or out of date, the BCRC is the contact for reporting changes in employment or insurance coverage and for verifying whether Medicare is primary or secondary. Its toll-free line is 1-855-798-2627, Monday through Friday, 8 am to 8 pm ET, except holidays. Check the current CMS pages before calling, as contact details can change.

One more caution from the same booklet: Medicare can recover payments it made in error as primary, and it can fine providers who knowingly, willfully and repeatedly give inaccurate information about other coverage. Accurate answers at registration protect you here.

## A worked example (illustrative)

A 67-year-old patient is seen in the office. At registration she says she has only Medicare. The claim goes to Medicare and comes back with CARC 22.

1. The biller checks eligibility and sees an MSP record showing a group health plan through her husband's employer.
2. The front desk calls the patient. Her husband works part time for a large employer, and she is covered on his plan. She had not mentioned it because she thought Medicare was her main insurance.
3. The practice adds the group plan as primary and Medicare as secondary in the patient account.
4. The group plan is billed first and pays part of the charge.
5. The Medicare claim is then sent with the group plan's payment and adjustment details.
6. The intake form is revised so that every Medicare patient is asked the MSP questions at each visit.

The patient, the plan and the numbers are invented to show the order of work. The same sequence applies whether the other payer is a commercial plan, Medicaid or an auto insurer.

## Watch the clock

Because CARC 22 usually means the claim has to go to a different payer first, you are often working against the filing limit for the primary payer, not just the one that denied you. Do not set the denial aside to "get to later." Our guide to [timely filing limits](/resources/timely-filing-limits) explains how deadlines are counted and why you should confirm each payer's rules rather than assume a denial pauses them. Add COB denials to a short-turnaround worklist in your [A/R follow-up](/resources/ar-follow-up-best-practices) process.

## Preventing CO-22 denials

- **Ask the coverage questions every visit.** Not just at the first one. People change jobs, retire, marry, divorce and have accidents.
- **Use the right Medicare questions.** CMS provides a questionnaire for identifying the primary payer. If you use your own form, make sure it covers the same ground.
- **Read the eligibility response, not just the status.** Active coverage with other coverage listed needs a human decision.
- **Inactivate old policies.** Ended coverage left on an account is a common cause of repeat denials.
- **Verify sequence for injury visits.** Accident, work injury and liability cases change who pays first.
- **Track the denial by cause.** Separate wrong-order billing, outdated payer records and bad claim data. The counts show which front-end step is failing.

## Frequently asked questions

### What does denial code 22 mean?

It means the payer believes another payer may be responsible for the claim under coordination of benefits. The CARC text is "This care may be covered by another payer per coordination of benefits."

### Do I appeal a CO-22 denial?

Usually not at first. Find the correct primary payer and bill in the right order. If the payer has wrong coverage information, get it corrected, then ask how to reprocess the claim. An appeal makes sense only if you have confirmed that the payer is primary and it still denies.

### Can I bill the patient for a CO-22 denial?

Not automatically. The denial is about billing order, not about the patient not owing money. Patient responsibility should come from the final adjudication after the correct payers have processed the claim. Check your contracts and the payer's rules before sending any statement.

### How do I check whether Medicare is primary or secondary?

Ask the MSP questions, review the Medicare eligibility response, and call the BCRC if the records conflict. The BCRC is the contractor to contact to verify primary or secondary status and report coverage changes.

### Is CARC 22 the same as CARC 23?

No. CARC 23 reports the impact of prior payer adjudication, including payments and adjustments, and X12 says to use it only with group code OA. CARC 22 says the payer thinks another payer may be responsible.

## How we help

COB denials usually start at the front desk and end up in billing. Our [pre-eligibility verification](/services/pre-eligibility-verification) service checks for other coverage before the visit, so the claim goes to the right payer first. When denials already exist, our [denial management](/services/denial-management) team traces each one to its cause, rebills in the correct order and reports the patterns. Aged COB claims are also tracked through our [A/R follow-up](/services/ar-follow-up) service so deadlines are not missed.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [CMS Medicare Secondary Payer booklet (MLN006903, July 2025)](https://www.cms.gov/files/document/mln006903-medicare-secondary-payer.pdf)
- [CMS Coordination of Benefits & Recovery: Your Billing Responsibilities](https://www.cms.gov/medicare/coordination-benefits-recovery/provider-services/your-billing-responsibilities)

> This article is general educational information, not legal or coverage advice. Payer rules, policies and deadlines change, so verify current requirements with the payer or Medicare contractor before acting on any claim.
