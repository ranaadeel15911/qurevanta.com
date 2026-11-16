---
title: Denial Code CO-109: Claim Sent to the Wrong Payer and How to Fix It
description: CARC 109 means the payer or contractor that got your claim is not the one responsible for it. Learn how to find the right payer, resubmit fast, and stop repeat misroutes.
category: Denial management
date: 2026-11-16
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1794748519/qurevanta/blog/denial-code-co-109.jpg
services: denial-management, pre-eligibility-verification, claims-submission
---
Denial code **109** means the payer or contractor that received your claim is not the one responsible for it. The official claim adjustment reason code (CARC) wording is: *"Claim/service not covered by this payer/contractor. You must send the claim/service to the correct payer/contractor."* In plain terms, the claim went to the wrong place.

That makes CO-109 one of the more fixable denials, and one of the more time-sensitive. You do not argue medical necessity or fix a code. You work out who the right payer is, send a new claim there, and do it before that payer's filing deadline runs out. The real damage from this denial is almost always lost days, not lost arguments.

## What CO-109 actually tells you

The X12 code list shows CARC 109 as active since 1995, with its current wording last modified in January 2012. The group code in front of it matters. On Medicare remittances, CMS instructs contractors to use group code **CO** with CARC 109 for misdirected claims, so you will most often see it written as CO-109.

The code by itself does not say *where* the claim should have gone. The remark codes (RARCs) that travel with it are your best clue. For Medicare misdirected claims, CMS manual instructions pair CARC 109 with:

- **N104**, for a claim sent to a Part B contractor outside whose payment jurisdiction the service falls. The official text says the claim "is not payable under our claims jurisdiction area" and points you to CMS.gov to identify the correct Medicare contractor.
- **N105**, for a claim that should have gone to the Railroad Retirement Board (RRB) contractor.
- **N127**, for a claim that belongs to the United Mine Workers of America (UMWA).

Commercial payers use their own remark codes or free text. Some use none. If the remittance gives no clue, a phone call or portal check will settle it faster than guessing.

## The most common reasons a claim lands with the wrong payer

From a billing office's point of view, these causes cover most CO-109 denials:

1. **Wrong Medicare Administrative Contractor (MAC).** For services paid under the Medicare Physician Fee Schedule, CMS manual Chapter 1 ties Part B jurisdiction to the ZIP code of the location where the service was performed. A practice that bills from one state but treats patients at a site in another can send claims to the wrong contractor.
2. **DME or supplies sent to the wrong contractor.** CMS instructs a Part B contractor to return a claim as misdirected when the item belongs in a DME MAC's jurisdiction, and the reverse.
3. **An out-of-date insurance record.** The patient changed plans or the plan changed administrators, and the old payer is still attached to the account.
4. **A carve-out.** Some health plans send a service type, such as behavioral health or pharmacy, to a separate vendor. The main plan then returns the claim.
5. **Medicare Advantage mix-ups.** A patient enrolls in a Medicare Advantage plan and the claim still goes to Original Medicare. Many Medicare contractors publish guidance on avoiding these denials, and the first step is always checking the patient's enrollment before billing.
6. **Special Medicare programs.** RRB and UMWA beneficiaries are processed outside the normal MAC channel.

Our article on [coordination-of-benefits denials under CO-22](/resources/denial-code-co-22) covers a related but different problem: there the payer thinks *another* payer should go first, while with CO-109 the payer says it should not be billed at all.

## Step-by-step: how to work a CO-109 denial

Do not resend the same claim to the same payer. It will come back the same way, and each loop costs time.

1. **Read the remittance in full.** Note the group code, any RARC, and any free-text message. Record the date the denial was received and the original date of service.
2. **Check the date against the correct payer's filing limit.** You may already be close. See our guide to [timely filing limits](/resources/timely-filing-limits) for how deadlines are counted and why you should confirm each payer's rules instead of assuming a denial extends them.
3. **Run a fresh eligibility check for the date of service.** Look at who is active for that date, not just whether the patient is active somewhere. Our article on [insurance eligibility verification](/resources/insurance-eligibility-verification) explains what to read in the response.
4. **Identify the responsible payer.** Depending on the cause, that may be a different MAC, a DME MAC, a Medicare Advantage plan, a behavioral health or pharmacy vendor, or the patient's new carrier.
5. **Confirm how that payer wants the claim submitted.** Ask whether it accepts a new claim, a corrected claim or a void and rebill. For a returned Medicare misdirected claim, a new claim to the right contractor is the route CMS describes.
6. **Fix your account setup before sending.** Update the payer on the patient account, the service-location ZIP code if that was the problem, and the payer ID in your system.
7. **Submit and track.** Add a follow-up date. Log the new claim number, the date sent and what you learned about the cause.

### Appeals: usually not the right tool

For misdirected Medicare Part B and DME claims, CMS instructs contractors to return the claim as unprocessable. A 2012 CMS instruction attached the remark code MA130 to these denials, which states that "no appeal rights are afforded because the claim is unprocessable" and asks for a new claim. Current manual text lists CARC 109 with N104 for the Part B jurisdiction case, so read the remark codes on your own remittance.

The practical rule for commercial payers is the same. A routing denial is not a coverage decision, so an appeal letter does not fix it. Send the claim to the right payer.

## Medicare jurisdiction: a closer look

For practices with more than one location, Medicare jurisdiction is worth a deliberate check. According to CMS manual Chapter 1 (Section 10.1.1), the A/B MAC that pays Physician Fee Schedule services is determined by the ZIP code of the location where the service was rendered. The manual also says a contractor that sees repeated misdirected claims from one provider may make an educational contact.

That has practical consequences:

- A provider who travels, covers satellite clinics, or sends staff to a facility across a state line needs the service-location address on the claim to be right for each site.
- A billing system that defaults every claim to the main office address can send claims to the wrong MAC without anyone noticing until denials arrive.
- Group practices should check their payer enrollment and PTAN records match the actual service locations. Our [Medicare credentialing guide for Florida](/resources/medicare-credentialing-florida) explains how enrollment locations are tied to billing.

## A worked example (illustrative)

A practice with a main clinic and a small satellite office in a neighboring state bills all Medicare claims under its main-office address. Weeks later, a batch of claims from the satellite office comes back with CO-109 and N104.

1. The biller pulls the denied claims and sees the service facility location on them is the main clinic, though the patients were seen at the satellite office.
2. She checks the CMS contractor information and confirms the satellite office's ZIP code falls under a different Part B MAC.
3. She verifies the practice is enrolled under the satellite location with that contractor, then corrects the service location on each claim.
4. She submits new claims to the correct MAC and notes each claim's filing deadline on a tracking sheet.
5. The practice changes its billing system so claims pull the service address from the schedule location rather than a default setting.

The practice, patients and locations are invented. The order of work is the point: confirm the cause, fix the source data, resubmit, then fix the process.

## Can you bill the patient?

Not automatically, and usually not on the strength of CO-109 alone. The CO group code means the adjustment is a contractual obligation, which generally falls on the provider and not the patient. A routing error is the practice's problem to fix. Before any statement goes out, wait until the correct payer has finished processing the claim and check the patient's plan and your contract. If another payer processes the claim, patient responsibility comes from that final result.

## Preventing CO-109 denials

- **Verify eligibility for every visit.** Plan changes, Medicare Advantage enrollment and administrator changes happen all the time. Check the payer, not just the member ID.
- **Capture the service location correctly.** For multi-site practices, make the claim's service facility field follow the actual place of service.
- **Know your carve-outs.** Keep a list of plans that send behavioral health, pharmacy, imaging or other services to a vendor.
- **Use payer ID lists carefully.** Payers with similar names but separate IDs cause quiet misroutes. Review your payer table when a payer merges or changes clearinghouse IDs.
- **Work the denial by cause.** Tag each CO-109 as wrong MAC, wrong plan type, outdated coverage or carve-out. The counts show where the front end is leaking.
- **Check clearinghouse rejections early.** A claim rejected for payer ID problems never reaches the denial stage, but it eats the same filing days. Our article on [clean claim rate](/resources/clean-claim-rate) covers how to catch problems before submission.

## Frequently asked questions

### What does CO-109 mean?

It means the payer or contractor that received the claim is not the right one. The CARC text says the claim is not covered by that payer or contractor and must be sent to the correct one.

### Do I appeal a CO-109 denial?

Usually no. The denial is about where the claim was sent, not whether the service is payable. For misdirected Medicare claims, CMS instructs contractors to return them as unprocessable. Identify the correct payer and send a new claim there, following that payer's instructions.

### How do I find the right payer after a CO-109?

Start with the remark codes and message on the remittance, then run a current eligibility check for the date of service. For Medicare Part B, N104 points you to the CMS website to identify the correct contractor, and the service ZIP code drives that assignment for Physician Fee Schedule services.

### Does CO-109 mean the patient has no coverage?

No. It means the payer that got the claim is not the one to pay. The patient may be fully covered by another plan or contractor.

### Is CO-109 a timely filing problem?

Not directly, but it often becomes one. Time spent with the wrong payer still counts against the right payer's deadline, so work these denials as soon as they arrive.

## How we help

Most CO-109 denials trace back to registration and claim setup. Our [pre-eligibility verification](/services/pre-eligibility-verification) service checks active coverage, plan type and other coverage before the visit. Our [claims submission](/services/claims-submission) team reviews payer IDs, service locations and clearinghouse rejections before claims go out. Where denials already exist, our [denial management](/services/denial-management) team finds the cause, resubmits to the right payer and reports the patterns.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [CMS Medicare Claims Processing Manual, Chapter 1 (General Billing Requirements)](https://www.cms.gov/Regulations-and-Guidance/Guidance/Manuals/downloads/clm104c01.pdf)
- [CMS Transmittal 2474 (misdirected claims, May 2012)](https://cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r2474cp.pdf)

> This article is general educational information, not legal or coverage advice. Payer rules, policies and deadlines change, so verify current requirements with the payer or Medicare contractor before acting on any claim.
