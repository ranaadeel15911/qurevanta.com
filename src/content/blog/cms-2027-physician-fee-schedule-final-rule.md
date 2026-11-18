---
title: CMS 2027 Physician Fee Schedule Final Rule: What Billing Teams Need to Change
description: CMS finalized the 2027 Physician Fee Schedule with lower conversion factors, G2211 turning into modifier B1, and an 80% same-day E/M rule. Here is what to do first.
category: Revenue cycle
date: 2026-11-18
image: https://res.cloudinary.com/dr3ie9gpz/image/upload/f_auto,q_auto,c_fill,w_1200,h_720/v1795003317/qurevanta/blog/cms-2027-physician-fee-schedule-final-rule.jpg
services: fee-schedule-analysis, charge-entry, claims-submission
---
CMS released the calendar year 2027 Medicare Physician Fee Schedule (PFS) final rule on November 4, 2026, and it was published in the Federal Register on November 9. The short version for practice owners: Medicare rates per RVU go down on January 1, 2027, the G2211 add-on code is being converted into a modifier, and there is a new payment reduction when an E/M visit is billed on the same day as a 0-day global procedure.

Those three items touch charge entry, claim edits and your revenue forecast. This article walks through each one using the CMS fact sheet for the final rule, then gives a practical plan for the weeks between now and the January start date.

## The conversion factor: how much lower is it?

The conversion factor turns relative value units into dollars. CMS finalized two conversion factors for 2027, depending on whether the clinician is a qualifying participant in an advanced alternative payment model (APM):

- **Qualifying APM participants:** $32.95, down $0.62 (about 1.83%) from $33.57.
- **Everyone else (non-qualifying):** $32.63, down $0.77 (about 2.31%) from $33.40.

CMS explains the movement as the statutory updates (+0.75% for qualifying APM participants, +0.25% for others), an estimated -0.12% adjustment related to work RVU changes, and the expiration of the one-year 2.50% increase that applied for 2026. Most practices are in the second group, so $32.63 is the number to plan around.

Two cautions before you build a budget. First, the conversion factor is only one input. The RVUs behind each CPT code also change, so your actual change depends on your code mix. Second, other payers that pay a percentage of Medicare (many commercial contracts and some Medicaid programs do) will feel this downstream, which is a good reason to read the escalator language in your [payer contracts](/resources/payer-contract-negotiation).

An illustrative example: a practice that collects $1,000,000 a year in Medicare allowed amounts at today's rates would see roughly $23,100 less from the conversion factor change alone if it is in the non-qualifying group. Real results will differ because of RVU changes and code mix.

## G2211 becomes modifier B1 (and B2)

G2211 is the add-on code for the ongoing relationship and complexity that comes with office and outpatient E/M visits. Under the final rule, CMS is converting it into a modifier rather than a separately reported code. According to the CMS fact sheet:

- **Modifier B1** increases the payment for the associated E/M code by 16%. Because it is a percentage, the dollar amount scales with the E/M level instead of being a flat add-on.
- **Modifier B2** applies to practitioners participating in Shared Savings Program ACOs or LEAD Model participant providers, and increases the associated E/M payment by 32%. Use is voluntary, and it may be billed for all beneficiaries the practitioner serves, not only assigned or aligned ones.

For your billing team, this is a workflow change more than a coding change. Your charge master, EHR charge capture rules and claim scrubber probably contain G2211 logic today: which visits qualify, which providers can trigger it, and what edits block it. All of that needs to be rebuilt around a modifier on the E/M line. Ask your EHR or practice management vendor now when the B1 and B2 modifiers will be available, and whether your scrubber will recognize them on day one.

The fact sheet does not spell out how B1 or B2 interact with modifier 25, so do not assume. The full rule text and CMS's guidance will govern that, and it is a question worth settling before any claim goes out in January. If you want a refresher on the modifier itself, see our guide to [modifier 25](/resources/modifier-25-explained).

## Same-day E/M and 0-day global procedures

This is the provision most likely to surprise procedural specialties. CMS finalized a payment reduction when a separately identifiable office or outpatient E/M visit is furnished on the same day as a procedure with a 0-day global period.

The CMS fact sheet describes the mechanics this way: the most expensive service is paid at 100%, and the other surgical procedures or office/outpatient E/M visits on that day are paid at 80%.

CMS proposed a deeper cut in July, with the second service paid at 50% and with 10-day and 90-day global procedures included. The final rule softened both parts. The reduction is 20%, not 50%, and it covers 0-day globals only.

An illustrative example, with made-up numbers: a clinician performs a 0-day global procedure with an allowed amount of $200 and bills a separately identifiable E/M visit with an allowed amount of $100 on the same date. The procedure pays at 100%, or $200. The E/M pays at 80%, or $80. The visit has not been denied, but it is paid $20 less than it would have been under the current rules.

The point for billing teams: this reduction applies to services that are already correctly billed. It is not a bundling denial, so you will not fix it with a modifier or an appeal. It will probably show up on remittances as a reduced allowed amount, and you will want to watch for it. Our article on [CO-97 bundling denials](/resources/denial-code-co-97) covers the situations where the payer is actually refusing payment, which is a different problem.

## Other changes worth knowing about

The fact sheet lists several more provisions. Two matter to many practices:

- **Practice expense methodology:** The indirect practice cost index is being phased out over two years and replaced with what CMS calls a "PE stabilizer." Indirect practice expense will also be allocated on both work RVUs and clinical labor practice expense RVUs, rather than the higher of the two, except for 10- and 90-day global codes. The effect varies by specialty and site of service.
- **Remote monitoring:** For 2027, remote therapeutic monitoring is limited to established patients, an initiating visit is required when RPM or RTM begins, and the valuation is updated. The requirement that only practice-employed clinical staff may furnish RPM or RTM is delayed until January 1, 2029.

Telehealth is handled mostly outside this rule. The CMS fact sheet only addresses rural health clinic and federally qualified health center policy, noting that the in-person requirement for mental health visits does not apply through December 31, 2027 under the Consolidated Appropriations Act, 2026. If you bill telehealth, confirm your specific scenario against current CMS telehealth guidance rather than relying on this summary.

## A practical plan before January 1

You have roughly six weeks. Here is the order we would work in.

1. **Pull your top 50 Medicare CPT codes by allowed amount.** This is the list that drives most of your revenue and the one you should model first.
2. **Compare 2026 and 2027 allowed amounts for those codes.** Use the CMS fee schedule files once the final 2027 payment amounts are loaded into your system or published by your Medicare Administrative Contractor. Calculate the change per code and multiply by last year's volume.
3. **Find your same-day E/M and 0-day procedure volume.** Run a report of dates of service where an E/M and a 0-day global procedure were billed together for the same patient. That count, times the 20% reduction on the lower-paid service, gives you the exposure.
4. **Inventory every place G2211 lives in your systems.** Charge master entries, EHR order sets, superbill templates, scrubber rules, provider cheat sheets and payer-specific edits. Assign an owner to each.
5. **Ask your vendors for dates.** When do the B1 and B2 modifiers go live in your EHR, practice management system and clearinghouse? What happens to a claim if they are not ready?
6. **Brief the providers.** Clinicians who routinely bill an E/M alongside minor procedures should hear about the 80% rule from you before they see it on a remittance.
7. **Update your forecast and your KPIs.** Reset expected net collections per visit, and watch [revenue cycle KPIs](/resources/revenue-cycle-kpis) such as average reimbursement per visit and the denial rate in the first two months of 2027. A drop in payment per encounter is not a denial, so track it separately.
8. **Re-check commercial contracts tied to Medicare.** If any rates are expressed as a percentage of the Medicare fee schedule, find out whether the payer updates to the new schedule automatically and when.

> Do not rely on a vendor's summary of the rule for modifier requirements. Read the relevant section of the final rule or the CMS guidance when it is issued, and keep a note of the date you checked.

## What not to do

- **Do not start billing B1 or B2 early.** The modifiers take effect with the rest of the 2027 policies, on or after January 1, 2027. Billing them on 2026 dates of service creates a problem you will have to correct.
- **Do not treat the 80% reduction as a denial to appeal.** It is a payment policy. Appeals are for incorrect denials, not for payment rules that were applied as written.
- **Do not stop reporting the E/M when it is supported.** Documentation should still support a separately identifiable visit, and the claim should still show it. Dropping legitimate E/M charges to avoid the reduction under-reports the work your providers did and distorts your data.
- **Do not assume the cut is the same for every specialty.** The conversion factor applies to everyone, but RVU and practice expense changes do not.

## Frequently asked questions

### When does the 2027 Medicare Physician Fee Schedule take effect?

CMS states the final rule's policies are effective on or after January 1, 2027. The rule was issued on November 4, 2026 and published in the Federal Register on November 9, 2026.

### What is the 2027 Medicare conversion factor?

CMS finalized $32.95 for qualifying APM participants and $32.63 for non-qualifying clinicians. Those are decreases of about 1.83% and 2.31% from the current $33.57 and $33.40.

### What is modifier B1 and does it replace G2211?

According to CMS, G2211 is being converted into a modifier. Modifier B1 increases payment for the associated E/M code by 16%. A separate modifier, B2, increases it by 32% for practitioners in Shared Savings Program ACOs or LEAD Model participant providers. Check the rule text for eligibility details and for any interaction with modifier 25.

### Does the same-day E/M reduction apply to all global procedures?

No. The final rule applies it only when the procedure has a 0-day global period. CMS dropped the proposal to include 10-day and 90-day global procedures. The higher-paid service is paid at 100% and the other at 80%.

### Will commercial payers copy these changes?

Not automatically. Payers that tie their rates to a percentage of Medicare will usually pick up the conversion factor change, depending on the contract language. Whether a payer adopts the same-day E/M reduction or the B1 modifier is a policy decision for that payer, so watch for bulletins and confirm with them directly.

## How we help

Every fee schedule cycle, we compare new allowed amounts against a practice's actual volume so owners can see the dollar impact before the year starts. Our [fee schedule analysis](/services/fee-schedule-analysis) service builds that model by code, payer and provider. Our [charge entry](/services/charge-entry) and [claims submission](/services/claims-submission) teams then update modifier logic, scrubber rules and charge capture so the new rules are applied correctly from the first claim of the year.

## Sources

- [CMS: Calendar Year (CY) 2027 Medicare Physician Fee Schedule Final Rule fact sheet](https://www.cms.gov/newsroom/fact-sheets/calendar-year-cy-2027-medicare-physician-fee-schedule-final-rule)
- [CMS: CMS-1848-F, CY 2027 Physician Fee Schedule final rule page](https://www.cms.gov/medicare/payment/fee-schedules/physician/federal-regulation-notices/cms-1848-f)

> This article is general educational information, not legal or financial advice. Medicare rules and payer policies change, so verify current requirements in the final rule and with each payer before changing your billing processes.
