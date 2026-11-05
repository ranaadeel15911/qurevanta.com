---
title: ERA, EFT, and Payment Posting Explained
description: How electronic remittance advice (835), electronic funds transfer, and payment posting work together — including group codes, CARC and RARC codes, reconciliation, and how posting accuracy drives denial management.
category: Revenue cycle
date: 2026-11-05
image: 1556742049-0cfed4f6a45d
services: payment-posting, era-edi-setup, denial-management
---
When a payer processes a claim, two things happen: money is sent, and an explanation of how the claim was paid is sent. In modern billing, these arrive electronically as **electronic funds transfer (EFT)** and **electronic remittance advice (ERA)**. Payment posting is the process of recording both accurately in your practice management system.

It may sound like bookkeeping, but posting accuracy drives everything downstream: patient balances, denial follow-up, underpayment detection, and reporting.

## The key terms

- **837:** The standard electronic format for submitting claims.
- **835 / ERA:** The standard electronic remittance advice. It explains, line by line, how each claim was adjudicated: what was allowed, paid, adjusted, and assigned to the patient.
- **EFT:** The electronic deposit of payment into your bank account, often using the ACH network. The EFT carries a trace number that links it to the matching ERA.
- **EOB:** The explanation of benefits — the paper or PDF equivalent of the ERA, and also the statement sent to patients.

## Why enroll in ERA and EFT

- **Faster payment** than paper checks
- **Automatic posting** of most payments, saving hours of manual entry
- **Fewer posting errors**
- **Easier reconciliation** between deposits and posted payments

Enrollment is done separately with each payer, or through enrollment services, and must be updated when bank details or provider information change. Our [ERA/EDI setup](/services/era-edi-setup) service handles enrollment and testing.

## Reading an ERA: group codes and reason codes

Each adjustment on an ERA has a **group code** and a **claim adjustment reason code (CARC)**, and sometimes a **remittance advice remark code (RARC)**.

**Group codes** identify who is responsible:

- **CO — Contractual Obligation:** The provider must write off this amount and cannot bill the patient.
- **PR — Patient Responsibility:** Deductible, coinsurance, or copay that can be billed to the patient.
- **OA — Other Adjustment:** Adjustments that do not fit the other categories.
- **PI — Payer Initiated Reduction:** Reductions the payer believes the provider is not responsible for billing the patient.

**CARCs** explain why an adjustment was made. Common examples:

- **CO-45:** Charge exceeds the fee schedule — the normal contractual write-off
- **PR-1, PR-2, PR-3:** Deductible, coinsurance, and copay
- **CO-97:** Service included in another service — see [denial code CO-97](/resources/denial-code-co-97)
- **CO-16:** Missing information
- **CO-29:** Timely filing limit expired

**RARCs** add detail, such as which information is missing.

## The payment posting process

1. **Receive the ERA and match it to the deposit** using the EFT trace number.
2. **Auto-post** payments and adjustments that match expected patterns.
3. **Review exceptions** — claims that did not post automatically, unexpected adjustments, or payments that do not match expected amounts.
4. **Transfer patient responsibility** to the patient balance so statements are accurate.
5. **Route denials** with a $0 payment to the denial work queue immediately.
6. **Identify underpayments** where the allowed amount is less than your contracted rate.
7. **Bill secondary insurance** when the primary has paid, attaching the primary payment information.
8. **Reconcile** total posted payments to bank deposits daily.

## Common posting mistakes

- **Writing off denials as contractual adjustments.** A denial posted as a write-off disappears from view and is never worked.
- **Posting patient responsibility incorrectly**, leading to wrong statements and patient complaints.
- **Ignoring underpayments.** If the allowed amount is wrong, the CO-45 write-off is too large. Comparing allowed amounts against your fee schedule catches these.
- **Unreconciled deposits.** Payments that arrive without a matching ERA — or ERAs without matching deposits — must be investigated.
- **Missing secondary claims** after primary payment.

## Why posting matters for the whole revenue cycle

Accurate posting feeds every important metric: net collection rate, denial rate, days in A/R, and payer performance. If posting is wrong, your reports are wrong, and decisions based on them will be too. Read our guide to [revenue cycle KPIs](/resources/revenue-cycle-kpis).

## How we help

Our [payment posting team](/services/payment-posting) posts insurance and patient payments daily, reconciles deposits, routes denials for immediate follow-up, and flags underpayments for recovery.

> This article is general educational information about standard electronic transactions. Specific codes and practices can vary by payer.
