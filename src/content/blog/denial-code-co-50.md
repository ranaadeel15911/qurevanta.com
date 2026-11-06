---
title: Denial Code CO-50: Not Medically Necessary and How to Respond
description: CO-50 means the payer judged a service not medically necessary. See what to check first, when an appeal is worth it, how the ABN and GA/GZ modifiers affect who pays, and how to prevent it.
category: Denial management
date: 2026-11-06
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1793966570/qurevanta/blog/denial-code-co-50.jpg
services: denial-management, coding-audit, prior-authorization
---
Denial code **CO-50** means the payer reviewed the claim and decided the service was not medically necessary. The official claim adjustment reason code (CARC) wording is: *"These are non-covered services because this is not deemed a 'medical necessity' by the payer."*

The first thing to do is not to write an appeal. Pull the claim, the remittance remark codes and the payer's coverage policy for that procedure, and work out which of three situations you are in: the chart supports the service but the claim did not show it, the claim was coded or linked wrong, or the service really did not meet the policy. Each one has a different fix, and only one of them is a true appeal.

## What the "CO" means for your revenue

An adjustment on a remittance carries a group code and a reason code. **CO** stands for contractual obligation, which means the provider carries the financial responsibility under the payer agreement. **50** is the reason.

In practice that has a clear consequence. If a CO-50 denial stands and you did not have a valid advance notice in place where one was required, the amount is generally written off, not moved to the patient. Always check your payer contract before creating a patient balance from any CO denial. This is the main reason CO-50 hurts more than a simple data-error denial: the money is lost unless you win the appeal or correct the claim.

## How a payer decides "medically necessary"

Medicare describes covered services as those "reasonable and necessary for the diagnosis or treatment of an illness or injury," and they must also fall inside a Medicare benefit category. Commercial plans use similar ideas, written into their own medical policies.

For Medicare there are two layers of written policy:

- **National Coverage Determinations (NCDs)** are national policies set by CMS.
- **Local Coverage Determinations (LCDs)** are decided by your Medicare Administrative Contractor (MAC) when no national policy exists. For Florida practices that usually means First Coast Service Options.

Both usually spell out which diagnoses support the service, how often it can be performed, and what the record must show. Commercial payers publish equivalent medical policies or clinical guidelines on their provider portals. A CO-50 is almost always the result of a claim failing one of those written rules, or the system being unable to see that it met them.

## Step 1: Read the whole remittance line

Look at more than the CARC. Check:

- The **remark code (RARC)** on the line, which often points to the specific policy edit.
- Any **policy or denial reference** the payer attached to the 835 or the paper remittance.
- The **diagnosis codes** that were linked to the denied procedure.
- Whether the payer is **Medicare, Medicare Advantage, Medicaid or commercial**, since appeal rules differ.

If the remark mentions a missing diagnosis or frequency limit, you already know where to look. If it says nothing useful, call the payer or check the portal for the policy tied to the CPT or HCPCS code.

## Step 2: Sort the denial into one of four buckets

Most CO-50 denials fall into these groups. Sorting them first saves hours of wasted appeal work.

1. **Coding or linkage error.** The diagnosis that justifies the service was on the encounter but not pointed to the procedure on the claim, or a less specific code was used. Fix: correct the claim and resubmit as a corrected claim if the payer allows it. See our guide to [medical coding audits](/resources/medical-coding-audit-guide) for catching this pattern at the source.
2. **Frequency or limit exceeded.** The patient had the same service recently and the policy caps how often it is covered. Fix: check dates of service in your own history and the payer's record. If the earlier service was billed by someone else or in error, that may change the answer.
3. **Documentation gap.** The service was necessary but the note does not show it. Fix: appeal with the existing record. An addendum written now to fill missing clinical content is a compliance risk, so talk to your compliance lead before anything is added to a closed note.
4. **Genuine policy miss.** The patient simply did not meet the criteria. Fix: do not appeal for the sake of appealing. Confirm whether a valid advance notice was signed and bill accordingly.

Denials that overlap with other codes deserve a second look. A claim bundled into another service belongs under [CO-97](/resources/denial-code-co-97), while a claim with missing or invalid data is a [CO-16](/resources/denial-code-co-16) case. A missing authorization often shows up as a different reason code entirely, as covered in our [prior authorization workflow](/resources/prior-authorization-workflow).

## Step 3: Check the ABN question before you touch the patient balance

For Original Medicare, the Advance Beneficiary Notice of Noncoverage (ABN) is what allows a provider to hold the patient responsible when Medicare is expected to deny a service as not reasonable and necessary. Two modifiers report the status on the claim:

- **GA** is defined by CMS as "Waiver of Liability Statement Issued, as Required by Payer Policy." It is only for use when a required ABN was issued. CMS instructs its systems to deny GA lines as beneficiary liability, and the beneficiary keeps the right to appeal.
- **GZ** is used when you expect denial and did not obtain an ABN. In the CMS manual's own example, GZ is the indicator used when a provider fails to give an ABN, and those lines are denied as provider liable.
- **GX** is for a voluntary notice on services Medicare excludes by statute. That is a different situation from CO-50 and should not be mixed up with it.

The practical rules that follow from this:

- Only add GA if the ABN was valid, signed and given before the service. If you cannot produce the form, the claim should not carry GA.
- If a line was denied with provider liability and no ABN exists, the patient is not billable for it, so do not send a statement.
- Keep the signed ABN with the claim record. If the beneficiary or a reviewer later asks, you need it quickly.

Medicare Advantage and commercial plans have their own notice and member-liability rules. Do not assume the ABN process applies to them. Read the plan's provider manual.

## Step 4: Decide whether to appeal

An appeal makes sense when the record supports the service under the written policy. It does not make sense when the documentation shows the criteria were not met. A quick decision guide:

- The chart clearly meets the policy and the claim was coded or linked wrongly: **corrected claim**.
- The chart clearly meets the policy and the claim was right: **appeal with the record**.
- The chart is thin and the policy is specific: **escalate to the provider for review** before deciding.
- The chart shows criteria were not met: **write off per contract**, unless a valid ABN allows patient billing.

### What goes in the appeal packet

Build the packet so a reviewer who has never seen the patient can follow it in a few minutes:

1. A short cover letter that names the claim, the denied line and the policy being cited.
2. The relevant visit notes, test results and orders that show why the service was needed.
3. Evidence of prior treatment where the policy asks for it, such as dates and results of earlier therapy.
4. The exact policy section (LCD, NCD or payer medical policy) and a one-line explanation of how each criterion is met.
5. The signed ABN, if one exists.

A clinician's brief statement of medical reasoning helps when the decision turned on judgment, but it must match what is already in the chart.

### Medicare appeal deadlines

For Original Medicare Part A and B, the first appeal is a redetermination by the MAC. According to CMS's MLN booklet on the appeals process (September 2025):

- File within **120 days** of the date you receive the ERA or paper remittance with the initial determination. CMS presumes you received it 5 days after the notice date unless you can show otherwise.
- Use form **CMS-20027** or any written request that includes the required elements, and attach the supporting documents.
- There is no minimum amount in controversy at this level.
- The MAC generally decides within **60 days** of receiving the request.
- If you disagree, the next level is a Qualified Independent Contractor reconsideration, requested within **180 days** of receiving the redetermination notice.

Commercial payers set their own windows, often much shorter. Track the deadline from the remittance date in your worklist and read it off the payer's denial letter. Appeal clocks and [timely filing limits](/resources/timely-filing-limits) both cost money when missed.

## Preventing CO-50 before the claim goes out

Most medical necessity denials are visible before submission if someone is looking for them.

- **Build policy checks into charge entry.** For high-risk services, such as imaging, therapy, injections, lab panels and DME, store the diagnosis rules next to the code.
- **Train providers on diagnosis specificity.** Vague diagnosis choices are a leading reason a policy edit fires.
- **Get authorization where required.** Where a plan needs prior approval, confirm it is on file and attached. See the [prior authorization workflow](/resources/prior-authorization-workflow).
- **Run an ABN checkpoint.** If the front desk knows a Medicare service is likely to fail the policy, the notice must be explained and signed before the service, not after.
- **Review denial trends monthly.** Group CO-50 by payer, CPT code, provider and diagnosis. Three denials for the same code and payer is a policy problem, not bad luck.
- **Audit samples.** A periodic [coding audit](/services/coding-audit) catches linkage and specificity errors before payers do.

The wider picture of why claims fail is in our list of [common claim denial reasons](/resources/common-claim-denial-reasons).

## Frequently asked questions

### What does CO-50 mean on a remittance?

It means the payer considers the service non-covered because it was not medically necessary under its policy. The CO group code says the provider is financially responsible unless a valid advance notice shifted liability.

### Can I bill the patient after a CO-50 denial?

Generally not, unless you obtained a valid, signed notice where the payer's rules allow it, such as a properly completed ABN for Original Medicare. Without that, the amount is usually a write-off. Check your payer contract and the plan's rules first.

### How long do I have to appeal a CO-50 denial?

For Original Medicare, a redetermination request is due within 120 days of receiving the remittance with the initial determination, per CMS. Commercial and Medicare Advantage plans set their own deadlines, so check the denial notice.

### Is CO-50 the same as a prior authorization denial?

No. CARC 50 is about medical necessity. Missing authorization is usually reported with a different reason code, although a service can be denied for both problems, so read every code on the line.

### Should I resubmit or appeal?

Resubmit a corrected claim when the problem was coding or diagnosis linkage. Appeal when the claim was correct and the record supports the service under the written policy.

## How we help

Medical necessity denials are rarely a one-off. They tend to cluster around a handful of codes, payers and documentation habits. Our [denial management](/services/denial-management) team categorizes each denial, builds the appeal packet and feeds the root causes back to your front desk and providers. If you want to catch the problem earlier, our [prior authorization](/services/prior-authorization) support checks requirements before the visit.

## Sources

- [X12 Claim Adjustment Reason Codes](https://x12.org/codes/claim-adjustment-reason-codes)
- [CMS MLN: Medicare Parts A and B Appeals Process (MLN006562)](https://www.cms.gov/files/document/mln006562-medicare-parts-b-appeals-process.pdf)
- [CMS Transmittal 1921 (Change Request 6563): GA and GX liability modifiers](https://cms.gov/regulations-and-guidance/guidance/transmittals/downloads/r1921cp.pdf)
- [CMS: Medicare coverage determination process](https://www.cms.gov/medicare/coverage/determination-process)

> This article is general educational information, not legal or coverage advice. Payer rules, policies and deadlines change, so verify current requirements with the payer or Medicare contractor before acting on any claim.
