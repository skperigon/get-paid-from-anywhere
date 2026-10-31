---
order: 17
idea: 21
status: ready
path: "compare/polar-vs-dodo-payments"
title: "Polar vs Dodo Payments: fees, countries and rules (checked 2026-10-30)"
h1: "Polar vs Dodo Payments"
description: "Polar and Dodo Payments are both merchants of record for software and digital products. How their fees, payout costs, country rules and product rules compare, with a source and date for every fact."
checkedOn: "2026-10-30"
sources:
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/merchant-of-record/supported-countries"
  - "https://polar.sh/docs/merchant-of-record/acceptable-use"
  - "https://dodopayments.com/pricing"
  - "https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories"
  - "https://docs.dodopayments.com/miscellaneous/merchant-acceptance"
faqs:
  - q: "Is Dodo Payments cheaper than Polar?"
    a: "On headline card rates, yes. On 2026-10-30, Dodo listed 4% + 40 cents for US domestic cards, against 5% + 50 cents on Polar's free Starter plan. Dodo adds 0.5% for subscriptions, and both add 1.5% for international cards. Polar's paid plans start at 3.8% + 40 cents for $20 a month."
  - q: "Which countries does Polar support that Dodo does not?"
    a: "Among the countries we checked on 2026-10-30, Pakistan and Kenya were on Polar's payout list but not on Dodo's accepted list. Nigeria, Bangladesh, Egypt and Morocco were on Polar's list but closed to new Dodo merchants."
  - q: "Which countries does Dodo support that Polar does not?"
    a: "Among the countries we checked on 2026-10-30, Brazil, China and Nepal were on Dodo's accepted list but not on Polar's payout list."
  - q: "Do I need Stripe to use Polar?"
    a: "No. Polar pays out through Stripe Connect Express, and Polar says Stripe Payments does not need to be available in your country. Your country does need to be on Polar's payout list."
---

Polar and Dodo Payments are both merchants of record: they sell to your customer, handle sales tax and VAT, and pay you out. Both target software and digital products. They differ on fees, how they pay you, which countries they accept and which products they review closely. Facts below come from each provider's own pages, checked on 2026-10-30.

## Fees compared

| Fee (checked 2026-10-30) | [Polar](/provider/polar/) | [Dodo Payments](/provider/dodo-payments/) |
| --- | --- | --- |
| Base card rate | 5% + 50 cents on the free Starter plan | 4% + 40 cents for US domestic cards and wallets |
| Paid plans | Pro $20/month: 3.8% + 40 cents. Growth $100/month: 3.6% + 35 cents. Scale $400/month: 3.4% + 30 cents | None listed on the pricing page |
| International cards | +1.5% for non-US cards | +1.5% |
| Subscriptions | No extra fee on Starter or paid plans | +0.5% |
| PayPal and buy now, pay later | unknown. Not listed on Polar's fees page | +3% |
| Bank debits | unknown. Not listed on Polar's fees page | ACH and SEPA: 1.5%, capped at $15 or 15 euros |
| Disputes | $15 | $30 |
| Refunds | Original transaction fees are not returned | $1 per refund |

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees) and [Dodo pricing](https://dodopayments.com/pricing). Dodo also lists 4% + 15 cents for domestic INR payments in India.

Polar organizations created before May 27, 2026 keep an Early Member rate of 4% + 40 cents, plus 0.5% on subscriptions. Polar publishes the monthly volume at which each paid plan beats Starter: about $1,379 for Pro, $5,634 for Growth and $19,048 for Scale.

### A worked example

Our own arithmetic on the published rates, for a $30 monthly subscription paid with a non-US card, before tax:

- Polar Starter: 5% + 1.5% = 6.5% of $30, plus 50 cents = $2.45.
- Dodo Payments: 4% + 1.5% + 0.5% = 6% of $30, plus 40 cents = $2.20.

Polar's own example on its fees page applies the fees to the total transaction value, including VAT. We did not find Dodo's rule on this, so the example leaves tax out. Payout fees, covered next, come on top.

## How you get paid

- **Polar:** payouts go through Stripe Connect Express. Polar passes on Stripe's payout fees: $2 per month of active payouts, 0.25% + 25 cents per payout, and currency conversion from 0.25% in the EU to 1% elsewhere. Polar offers manual withdrawals, so you choose when to take a payout.
- **Dodo Payments:** payouts are free, with a $5 fee on payouts under $1,000. USD payouts by SWIFT cost $25.

Polar also says it may refund an order at its discretion for up to 60 days after purchase.

## Who can sign up

- **Polar:** your country must be on Polar's [payout country list](https://polar.sh/docs/merchant-of-record/supported-countries), because payouts depend on Stripe Connect Express. Stripe Payments does not need to be available there. Individuals can sell if Stripe Connect Express supports the individual business type in their country.
- **Dodo Payments:** eligibility goes by government ID country. For a company, Dodo checks the country of incorporation plus the ID country of every director and beneficial owner, per its [accepted countries page](https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories). Since March 23, 2026, merchants from Bangladesh, Egypt, Equatorial Guinea, Eritrea, Marshall Islands, Micronesia, Morocco, Nauru, Nigeria, Tuvalu and Ukraine are grandfathered: existing merchants stay, new ones are not accepted.

### Country differences (checked 2026-10-30)

| Country | Polar | Dodo Payments |
| --- | --- | --- |
| [India](/country/india/) | Listed | Listed |
| [Pakistan](/country/pakistan/) | Listed | Not listed |
| [Nigeria](/country/nigeria/) | Listed | Existing merchants only |
| [Bangladesh](/country/bangladesh/) | Listed | Existing merchants only |
| [Egypt](/country/egypt/) | Listed | Existing merchants only |
| Morocco | Listed | Existing merchants only |
| Kenya | Listed | Not listed |
| [Brazil](/country/brazil/) | Not listed | Listed |
| China | Not listed | Listed |
| Nepal | Not listed | Listed |
| [UAE](/country/uae/) | Listed | Listed |
| Indonesia, Philippines, South Africa | Listed | Listed |

## What you can sell

- **Polar:** its [acceptable use policy](https://polar.sh/docs/merchant-of-record/acceptable-use), effective October 1, 2026, accepts software and SaaS, digital products, and premium content and access. It prohibits physical goods, human services and marketplaces, among others. Directories, eBooks, AI content generation, marketing tools and VPNs get closer review.
- **Dodo Payments:** its [merchant acceptance page](https://docs.dodopayments.com/miscellaneous/merchant-acceptance) welcomes SaaS and AI products, digital goods, and templates, plugins and apps. It lists 32 prohibited categories, including manually delivered digital services, physical goods, gaming and virtual goods, hosting and VPNs, and marketplaces. AI content generation, marketing tools, e-books and productised services get extra review.

If your product is in a closer review category, read the full policy before you apply.

## Which to pick

- Lower base card rate with no monthly fee: Dodo Payments, unless you sell subscriptions to mostly non-US buyers, where the gap narrows.
- High volume: compare Dodo with Polar's paid plans using Polar's published breakeven points.
- Seller in Pakistan, Kenya, Nigeria, Bangladesh, Egypt or Morocco: Polar, since Dodo does not take new merchants from these countries.
- Seller in Brazil, China or Nepal: Dodo Payments, since these countries are not on Polar's payout list.
- Selling games or virtual goods: Dodo prohibits them. Check Polar's policy before applying.

See also [Polar vs Lemon Squeezy](/compare/polar-vs-lemon-squeezy/) and [all providers](/providers/).
