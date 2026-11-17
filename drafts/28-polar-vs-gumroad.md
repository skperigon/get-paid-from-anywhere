---
order: 28
idea: 33
status: ready
path: "compare/polar-vs-gumroad"
title: "Polar vs Gumroad: fees, payouts, countries and rules (checked 2026-11-16)"
h1: "Polar vs Gumroad"
description: "Polar and Gumroad are both merchants of record. How their fees, payouts, seller countries and product rules compare, with a source and a checked date for every fact."
checkedOn: "2026-11-16"
sources:
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/merchant-of-record/supported-countries"
  - "https://polar.sh/docs/merchant-of-record/acceptable-use"
  - "https://gumroad.com/pricing"
  - "https://gumroad.com/help/article/66-gumroads-fees"
  - "https://gumroad.com/help/article/13-getting-paid"
  - "https://gumroad.com/help/article/121-sales-tax-on-gumroad"
  - "https://gumroad.com/help/article/155-things-you-cant-sell-on-gumroad"
  - "https://gumroad.com/help/article/134-how-does-gumroad-handle-chargebacks"
  - "https://gumroad.com/help/article/330-stripe-connect"
faqs:
  - q: "Is Polar cheaper than Gumroad?"
    a: "On the published rates, yes. On 2026-11-16, Polar's free Starter plan listed 5% + 50 cents, plus 1.5% for non-US cards. Gumroad listed 10% + 50 cents for direct sales, and its fees page says card processing of 2.9% + 30 cents comes on top. Sales through Gumroad's Discover marketplace cost a flat 30%."
  - q: "Are Polar and Gumroad both merchants of record?"
    a: "Yes. Polar says it is the merchant of record and takes on the liability for international sales taxes. Gumroad says it has been the merchant of record for all sales since January 1, 2025 and handles sales tax collection and remittance worldwide."
  - q: "Can I sell an AI app on Gumroad?"
    a: "Gumroad's list of things not allowed includes AI services: selling access to AI tools, chatbots, image or content generation services, or subscriptions to AI services fulfilled outside of Gumroad. Polar accepts software and SaaS, and lists AI content generation tools among products that need closer review."
  - q: "Which countries can get paid by Gumroad but not by Polar?"
    a: "On 2026-11-16, Morocco and Gibraltar were on Gumroad's bank payout list but not on Polar's payout list. Gumroad also offers PayPal payouts where it does not support bank payouts, if PayPal lets accounts in that country receive money."
---

Polar and Gumroad are both merchants of record: they sell to your customer, collect and remit sales tax and VAT, and pay you out. Polar says it serves software companies. Gumroad is aimed at creators selling digital products, courses and memberships, and also runs a marketplace called Discover. They differ on fees, how you get paid, which countries they pay out to and what you can sell. Facts below come from each provider's own pages, checked on 2026-11-16.

## Fees compared

| Fee (checked 2026-11-16) | [Polar](/provider/polar/) | [Gumroad](https://gumroad.com/pricing) |
| --- | --- | --- |
| Base rate | 5% + 50 cents on the free Starter plan | 10% + 50 cents for sales through your profile or direct links |
| Card processing | Included in the rate | Not included: 2.9% + 30 cents on top, per Gumroad's fees page |
| Marketplace sales | No marketplace | 30% flat for Discover marketplace sales, processing included |
| Monthly fee | None on Starter. Pro $20, Growth $100 or Scale $400 a month lower the rate to as little as 3.4% + 30 cents | None |
| Volume discount | Paid plans, above | After $20,000 in paid sales in a calendar month, new direct sales that month are 5% + 50 cents. Resets on the 1st |
| International cards | +1.5% for non-US cards | None listed |
| Subscriptions | No extra fee on Starter or paid plans | None listed |
| Refunds | Original transaction fees are not returned | Gumroad's own fee is returned. The payment processing part is kept |
| Disputes | $15 per dispute, regardless of outcome | Gumroad returns its platform fee. You cover the refunded amount and processing fees. We did not find a fixed dispute fee amount, so it is unknown |

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees), [Gumroad pricing](https://gumroad.com/pricing), [Gumroad's fees](https://gumroad.com/help/article/66-gumroads-fees) and [Gumroad chargebacks](https://gumroad.com/help/article/134-how-does-gumroad-handle-chargebacks).

### A worked example

Our own arithmetic on the published rates, for a $30 card sale, before tax:

- Polar Starter, US card: 5% of $30 plus 50 cents = $2.00. With a non-US card, add 1.5% (45 cents) = $2.45.
- Gumroad direct sale: 10% of $30 plus 50 cents = $3.50, plus card processing of 2.9% plus 30 cents = $1.17. Total $4.67.
- Gumroad direct sale after $20,000 in sales that month: $2.00 plus $1.17 processing = $3.17.
- Gumroad Discover sale: 30% of $30 = $9.00.

Polar's own example applies its fees to the total transaction value, including VAT. Payout costs, covered next, come on top.

## How you get paid

- **Polar:** payouts go through Stripe Connect Express. Polar says it adds no markup and passes on Stripe's payout fees: $2 per month of active payouts, 0.25% + 25 cents per payout, and currency conversion from 0.25% in the EU to 1% elsewhere. You withdraw manually and choose when.
- **Gumroad:** you get paid to a local bank account in your local currency where Gumroad supports it, and by PayPal in USD where it does not. PayPal payouts have a 2% payout fee. Gumroad does not pay out to Payoneer, Wise, check or wire transfer. The minimum payout is $100, higher in some countries. You can choose daily (US only, with conditions), weekly, monthly or quarterly payouts, and on the weekly, monthly and quarterly schedules each sale is held at least 7 days. US creators can take instant payouts for a 3% fee. The page lists no fee for standard bank payouts.

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees) and [Getting paid by Gumroad](https://gumroad.com/help/article/13-getting-paid).

Gumroad says new connections of your own Stripe account are no longer supported, except for creators in Brazil ([Gumroad Stripe Connect](https://gumroad.com/help/article/330-stripe-connect)).

## Who can get paid

- **Polar** publishes a [payout country list](https://polar.sh/docs/merchant-of-record/supported-countries) based on Stripe Connect Express. Polar says Stripe Payments does not need to be available in your country.
- **Gumroad** publishes a [bank payout country list](https://gumroad.com/help/article/13-getting-paid) and pays by PayPal elsewhere. Gumroad says PayPal does not let accounts in some countries receive money, and where it also has no bank payouts, such as Zambia, Syria, Russia and Iraq, it has no way to pay you unless your PayPal account is registered elsewhere.

### Country differences (checked 2026-11-16)

| Country | Polar payouts | Gumroad payouts |
| --- | --- | --- |
| [India](/country/india/), [Pakistan](/country/pakistan/), [Bangladesh](/country/bangladesh/) | Listed | Bank payouts listed |
| [Nigeria](/country/nigeria/), [Kenya](/country/kenya/), [South Africa](/country/south-africa/), [Egypt](/country/egypt/) | Listed | Bank payouts listed |
| [Indonesia](/country/indonesia/), [Philippines](/country/philippines/), [Israel](/country/israel/) | Listed | Bank payouts listed |
| [UAE](/country/uae/) | Listed | Bank payouts listed for business accounts |
| [Morocco](/country/morocco/), Gibraltar | Not listed | Bank payouts listed |
| [Brazil](/country/brazil/) | Not listed | Not on the bank list. Gumroad still allows new Stripe connections for creators in Brazil |
| [Nepal](/country/nepal/) | Not listed | Not on the bank list. PayPal payouts depend on PayPal, unknown |

Apart from Morocco, Gibraltar and naming differences, the two lists matched when we compared them on 2026-11-16. Morocco was on Polar's payout list when we checked on 2026-10-30 and was gone from 2026-11-14.

## What you can sell

- **Polar** says it serves software companies, including B2B SaaS, consumer software and games, and is not designed for businesses whose main offering is human services or physical goods. Its acceptable use policy (effective October 1, 2026) lists products that need closer review, including eBooks, AI content generation tools and chatbot generators.
- **Gumroad** says you can sell digital products, e-books, courses, tutorials and memberships. Its list of things not allowed includes reselling products you did not create, AI services fulfilled outside Gumroad, web hosting, event tickets, physical products and services fulfilled outside Gumroad.

Sources: [Polar acceptable use](https://polar.sh/docs/merchant-of-record/acceptable-use), [Gumroad pricing](https://gumroad.com/pricing) and [things not allowed on Gumroad](https://gumroad.com/help/article/155-things-you-cant-sell-on-gumroad). Gumroad's [sales tax page](https://gumroad.com/help/article/121-sales-tax-on-gumroad) covers how it handles VAT.

## Which to pick

- Selling software, SaaS or an AI app: Polar. Gumroad does not allow AI services fulfilled outside Gumroad.
- Selling templates, e-books or courses and want lower fees: Polar's published rate is lower, if your product passes its review.
- Want buyers to find you in a marketplace: Gumroad's Discover, at 30% per sale.
- Seller in Morocco: Gumroad, since Morocco is not on Polar's payout list.
- Seller in Brazil: neither payout list includes Brazil. Gumroad allows new Stripe connections for Brazilian creators.

See also [Polar vs Paddle](/compare/polar-vs-paddle/), [Polar vs Lemon Squeezy](/compare/polar-vs-lemon-squeezy/), [selling digital products](/sell/digital-products/) and [all providers](/providers/).
