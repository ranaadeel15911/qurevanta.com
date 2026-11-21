---
title: Modifiers 76, 77 and 91 Explained: Billing Repeat Procedures and Repeat Lab Tests Without Duplicate Denials
description: Modifier 76, 77 or 91? Learn which one fits a repeated service on the same day, what Medicare says about each, and how to avoid duplicate and bundling denials.
category: Coding
date: 2026-11-21
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1795262620/qurevanta/blog/modifiers-76-77-91-repeat-procedures.jpg
services: coding-audit, claims-submission, denial-management
---
When the same service is performed twice for the same patient on the same date, the second one looks like a duplicate to the payer's system. Three modifiers tell the payer it is not: **76** when the same physician repeats a procedure, **77** when a different physician repeats it, and **91** when a clinical diagnostic lab test is repeated. Pick the wrong one, or put the right one on the wrong claim line, and the second service is denied.

The short decision rule: ask what was repeated and who repeated it. A lab test goes with 91. A procedure repeated by the same provider goes with 76. A procedure repeated by someone else goes with 77. Then check the one thing that surprises many billers: **76 and 77 do not get you past a bundling edit.** That is covered below, and it is where a lot of "repeat" claims fall apart.

## What each modifier means

The NCCI Policy Manual refers to the two procedure modifiers by their CPT titles: 76 is "Repeat Procedure or Service by Same Physician" and 77 is "Repeat Procedure by Another Physician." Modifier 91 is the repeat clinical diagnostic laboratory test modifier.

- **Modifier 76:** the same physician or other qualified provider repeats a procedure or service on the same date, after the original.
- **Modifier 77:** a different physician or provider repeats the procedure or service on the same date.
- **Modifier 91:** the same lab test is run more than once on the same patient on the same date because a further result was medically necessary.

Notice what is *not* in those definitions: anything about the first service being wrong. These are for legitimate, separately necessary repeats. A repeat that exists only because the first attempt failed is a different conversation, and for lab tests Medicare is explicit about it (see the modifier 91 section).

## The point most guides skip: 76 and 77 do not bypass NCCI edits

The Medicare NCCI Policy Manual (Chapter I, revision date 1/1/2024) lists the modifiers that can be used to bypass a procedure-to-procedure edit. Anatomic modifiers, the global surgery modifiers 24, 25, 57, 58, 78 and 79, and "other modifiers" 27, 59, 91, XE, XS, XP and XU are on the list. Then it says, in plain terms, that modifiers 76 and 77 "are not NCCI PTP-associated modifiers" and that using either "does not bypass an NCCI PTP edit."

In practice this means:

- If two *different* codes bundle together, adding 76 will not unbundle them. You need a modifier that describes the true relationship, such as those covered in our [modifier 59 guide](/resources/modifier-59-explained), or you need to accept the bundle.
- Modifier 91 *is* on the PTP-associated list, which is why it works for repeat lab tests inside a panel (more on that below).
- 76 and 77 matter when the **same code** appears twice. They stop the second line from being treated as a duplicate or as an excess of units.

The manual also notes, in its discussion of medically unlikely edits (MUEs), that when a code has a claim-line MUE, modifiers such as 59, the X modifiers, 76, 77, 91 and anatomic modifiers may be used to report the same code on separate lines, and each line is then checked against the MUE value separately. It adds that claims processing contractors have their own rules limiting these modifiers for some codes. So the modifier opens a door, and the contractor decides how wide.

## Modifier 76: same provider, same procedure, same day

Typical illustrative situations: a patient has a chest x-ray read in the morning and returns to the same facility with new symptoms for a second film that afternoon, read by the same radiologist; or a physician repeats an ECG interpretation after a change in the patient's condition. The service is the same code, the provider is the same, and the clinical reason for the second one is documented.

A Medicare contractor article on repeat x-ray and EKG interpretations says that when the same physician interprets serial x-rays or EKGs on the same day, modifier 76 "must be submitted to indicate the service was repeated subsequent to the original procedure." That article is regional guidance and is labelled as a draft on the Medicare Coverage Database, so treat it as one contractor's example, not a national rule.

Documentation that supports 76:

1. The time or sequence of each service.
2. The clinical reason the repeat was needed (a changed condition, a new finding, a new complaint).
3. Separate results or interpretations for each service.

## Modifier 77: a different provider repeats the procedure

Use 77 when someone else, in a different physician or provider role, performs the same service again on the same date. The same contractor article describes the Medicare approach for emergency-room x-rays and EKGs: it says the contractor must pay for only one interpretation of an EKG or x-ray furnished to an emergency room patient, and that a second interpretation is paid only under "unusual circumstances (for which documentation is provided)." It also states that failing to use modifier 77 and submit the necessary documentation will result in denial.

That is a narrow, specific rule, but it shows how payers think. They pay for the result that drove the diagnosis and treatment. A second reader or repeat performer needs a clear reason.

> Do not put 76 and 77 on the same line. The decision is binary: same provider is 76, different provider is 77.

## Modifier 91: repeat clinical diagnostic lab tests

Modifier 91 is the one with the clearest Medicare language. NCCI Chapter X (Medicare, revision date 1/1/2026) says that when individual tests that belong to a lab panel are repeated on the same date, the NCCI edits between the panel and its components allow PTP-associated modifiers to bypass them. The repeat testing must be medically reasonable and necessary, and modifiers 59 or 91 may be used to report it.

It then draws the line that matters most. Citing the Medicare Claims Processing Manual, Publication 100-04, Chapter 16, Section 100.5.1, it says repeat testing cannot be performed to "confirm initial results; due to testing problems with specimens and equipment or for any other reason when a normal, one-time, reportable result is all that is required."

Chapter I of the NCCI manual adds a related example. If a patient has an abnormal result and the test is repeated to verify it, the test is reported as **1 unit of service rather than 2**.

So the working rules are:

- **Use 91** when a second, separate draw or run is clinically needed. A common illustrative case is a glucose or potassium level rechecked after treatment, where the second value informs care.
- **Do not use 91** for re-running a sample because of a QC failure, instrument issue, specimen problem or simply to confirm the first number.
- **Do not use 76 or 77** on laboratory tests. Repeat clinical lab tests belong with 91.

The exact wording of a payer's lab policy varies, so check it for non-Medicare plans.

## The claim-line mistake that causes duplicate denials

Even with the correct modifier, the way the lines are built can sink the claim. Two patterns to avoid:

- **Sending the repeat on a separate claim.** If the same service for the same date goes out on two different claims, the second is likely to hit duplicate logic. Billing both services on a single claim with the modifier on the repeat line gives the payer what it needs to compare them. Duplicate denials commonly show up as CARC 18, which we cover in the [CO-18 guide](/resources/denial-code-co-18).
- **Appending the modifier to the original service.** The repeat modifier belongs on the repeated service, not on the first one, so the payer can tell which line is the repeat.

Whether you report repeat services as two lines or as one line with units is contractor-specific. Some Medicare contractors publish instructions on this, so check your own MAC's fact sheets rather than assuming.

## A quick decision checklist

Before you add the modifier, run through these in order.

1. **Is the service the same code, on the same date of service, for the same patient?** If not, you do not need a repeat modifier.
2. **Is it a clinical diagnostic lab test?** Go to 91, and confirm the repeat was a new, necessary result, not a QC or confirmation rerun.
3. **Who performed the repeat?** Same provider is 76. Different provider is 77.
4. **Is the actual problem a bundling edit between two different codes?** Then 76/77 will not help. Look at 59, XE, XS, XP, XU or an anatomic modifier, and only if the record supports it.
5. **Does the note show why the repeat happened?** If it does not, query the provider before billing.
6. **Is it on the same claim as the original?** If so, put the modifier on the repeat line only.
7. **Did you check your MAC or payer policy?** Policies on modifier limits, code lists and documentation differ.

## Worked example (illustrative)

A patient is seen for chest pain and has an ECG at 9:00. The provider starts treatment, symptoms change at 11:30, and a second ECG is obtained and interpreted by the same provider. Both tracings are saved, and the note explains the change in symptoms.

The billing steps: report the ECG code once for the first service with no modifier, then report the same code again for the second, with 76 appended. Both are on the same claim. If a different physician had read the second tracing, the second line would carry 77 instead, and you would expect the payer to want the documentation of why a second interpretation was needed.

Now change the facts: the second test was ordered because the first tracing was technically poor. That is a repeat to correct a testing problem, and it is not what these modifiers are meant to bill. Many payers would not pay for it, and the safer assumption is that it is not separately billable.

## Frequently asked questions

### What is the difference between modifier 76 and 77?

Modifier 76 is for a repeat procedure by the same physician or provider. Modifier 77 is for a repeat by a different physician or provider. Both apply to the same procedure on the same date of service.

### Can I use modifier 76 to bypass an NCCI edit?

No. The Medicare NCCI Policy Manual states that 76 and 77 are not NCCI PTP-associated modifiers and do not bypass a PTP edit. For two different codes that bundle, you need a modifier that describes the actual relationship, such as 59 or an X modifier, and the record has to support it.

### When should I use modifier 91 instead of 76?

Use 91 for repeat clinical diagnostic laboratory tests on the same date. Do not use 76 or 77 on lab tests. And do not use 91 when the repeat was only to confirm a result or because of a specimen or equipment problem.

### Is modifier 76 the same as modifier 59?

No. Modifier 59 says two *different* services were distinct from each other. Modifier 76 says the *same* service was done again. They answer different questions, and swapping one for the other is a common audit finding. See our [modifier 59 explainer](/resources/modifier-59-explained) for the distinct-service rules.

## How we help

Repeat-service denials are usually a coding-and-claims-build problem, not a payer mystery. Our [coding audit](/services/coding-audit) service reviews modifier use against documentation, and [claims submission](/services/claims-submission) makes sure repeat lines are built correctly before they reach the payer. If you are already seeing duplicate denials, [denial management](/services/denial-management) traces the pattern and fixes the cause. You can also review your overall [clean claim rate](/resources/clean-claim-rate) to see how many claims are failing first pass.

## Sources

- [Medicare NCCI Policy Manual, Chapter I: General Correct Coding Policies (CMS)](https://www.cms.gov/files/document/medicare-ncci-policy-manual-2024-chapter-1.pdf)
- [Medicare NCCI Policy Manual, Chapter X: Pathology and Laboratory Services, 2026 (CMS)](https://www.cms.gov/files/document/10-chapter10-ncci-medicare-policy-manual-2026-final.pdf)
- [Billing and Coding: Repeat X-ray or EKG Interpretations by Same or Different Physician, A53423 (CMS Medicare Coverage Database)](https://www.cms.gov/medicare-coverage-database/view/article.aspx?articleId=53423)

> This article is general educational information, not legal or coding advice. Medicare contractors and commercial payers set their own rules for repeat-service modifiers, so verify current policies before billing.
