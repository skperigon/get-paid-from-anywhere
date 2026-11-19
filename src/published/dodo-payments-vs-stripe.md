---
order: 29
idea: 34
status: published
path: "compare/dodo-payments-vs-stripe"
title: "Dodo Payments vs Stripe: merchant of record or payment processor (checked 2026-11-17)"
h1: "Dodo Payments vs Stripe"
description: "Dodo Payments is a merchant of record that decides eligibility by your ID country. Stripe is a payment processor with an optional merchant of record add-on. How fees, payouts, seller countries and product rules compare, with a source and a checked date for every fact."
checkedOn: "2026-11-17"
sources:
  - "https://dodopayments.com/pricing"
  - "https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories"
  - "https://docs.dodopayments.com/miscellaneous/merchant-acceptance"
  - "https://stripe.com/pricing"
  - "https://stripe.com/global"
  - "https://docs.stripe.com/payments/managed-payments/eligibility"
faqs:
  - q: "Is Dodo Payments cheaper than Stripe?"
    a: "On card fees alone, no. On 2026-11-17, Stripe's US pricing page listed 2.9% + 30 cents for domestic cards and Dodo listed 4% + 40 cents for US domestic cards and wallets. Dodo's rate includes sales tax and VAT handling as merchant of record. With Stripe you handle tax yourself, or add Managed Payments at 3.5% on top of Payments fees."
  - q: "Can I use Dodo Payments if Stripe is not available in my country?"
    a: "Often yes. On 2026-11-17, the Philippines, Israel, Nepal, Sri Lanka, Vietnam, Jamaica, Serbia, Turkiye, Argentina and Colombia were on Dodo's accepted list but not on Stripe's global availability page. Dodo checks the country of your government ID, and for companies the ID of every director and beneficial owner too."
  - q: "Does forming a US company let me use Dodo Payments?"
    a: "Not by itself. Dodo says registering a company in a supported country does not make an account eligible if a director or beneficial owner can only verify with an ID from a country not on its list."
  - q: "Which countries are on neither list?"
    a: "Among the countries we checked on 2026-11-17, Pakistan was on neither list. Egypt, Bangladesh, Morocco and Nigeria are grandfathered at Dodo: only merchants who joined before March 23, 2026 are kept. Of those, only Nigeria is on Stripe's list, marked Extended network."
---

Dodo Payments and Stripe do different jobs. Dodo is a merchant of record: it resells your product to the customer, handles sales tax and VAT, chargebacks and payment processing, and pays you out. Stripe is a payment processor: you are the seller, and tax compliance is yours unless you add Stripe's own merchant of record service, Managed Payments. Facts below come from each provider's own pages, checked on 2026-11-17.

## Fees compared

| Fee (checked 2026-11-17) | [Dodo Payments](/provider/dodo-payments/) | [Stripe](/provider/stripe/) (US pricing page) |
| --- | --- | --- |
| Base rate | 4% + 40 cents for US domestic cards and wallets | 2.9% + 30 cents for domestic cards |
| Monthly fee | None | None on standard pricing |
| International cards | +1.5% for cards and local payment methods outside the US | +1.5% for international cards, +1% more if currency conversion is required |
| Subscriptions | +0.5% for subscriptions, addons and usage-based billing | Stripe Billing pay as you go: 0.7% of Billing volume |
| PayPal, buy now pay later | +3% | Klarna 5.99% + 30 cents |
| Sales tax and VAT | Included. Dodo is the merchant of record | Your job. Stripe Tax is 0.5% per transaction where you are registered (no-code integration), or Managed Payments at 3.5% on top of Payments fees |
| Disputes | $30 per dispute | $15 per dispute received |
| Refunds | $1 per refund. We did not find whether original fees are returned | No refund fee for most payment methods. Original processing fees are not returned |

Sources: [Dodo pricing](https://dodopayments.com/pricing) and [Stripe pricing](https://stripe.com/pricing). Stripe prices differ by country. The figures above are from its US page. Dodo also lists India domestic INR payments at 4% + 15 cents plus international fees.

### A worked example

Our own arithmetic on the published rates, for a $30 monthly subscription paid with a non-US card, with no currency conversion, before tax:

- Dodo Payments: 4% + 1.5% + 0.5% = 6% of $30, plus 40 cents = $2.20. Tax handling is included.
- Stripe with Billing: 2.9% + 1.5% + 0.7% = 5.1% of $30, plus 30 cents = $1.83. Tax registration, calculation and filing are still yours. Stripe Tax (no-code) adds 0.5% where you are registered, or 15 cents here.
- Stripe with Managed Payments: 2.9% + 1.5% + 3.5% = 7.9% of $30, plus 30 cents = $2.67, before any Billing fee. We did not find whether the Billing fee also applies with Managed Payments.

Payout costs, covered next, come on top.

## How you get paid

- **Dodo Payments:** standard payouts are free, with a $5 fee if the payout is under $1,000. Standard foreign exchange rates apply on non-USD settlements. USD SWIFT payouts for non-US businesses cost $25. Dodo says payouts only go to the countries on its accepted list.
- **Stripe:** you get paid to your own bank account on a rolling, weekly or monthly schedule, and Stripe says payouts on its standard schedule are free. Instant Payouts cost 1.5% of the payout, minimum 50 cents.

Sources: [Dodo pricing](https://dodopayments.com/pricing), [Dodo accepted countries](https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories) and [Stripe pricing](https://stripe.com/pricing).

## Who can sign up

- **Stripe** lists 51 countries on its [global availability page](https://stripe.com/global). India and Indonesia are marked Preview. Cote d'Ivoire, Ghana, Kenya, Nigeria and South Africa are marked Extended network. For businesses elsewhere, the same page points to forming a US company with Stripe Atlas. See [Stripe Atlas alternatives](/guides/stripe-atlas-alternatives/).
- **Dodo Payments** publishes an [accepted countries list](https://docs.dodopayments.com/miscellaneous/accepted-countries-and-territories) of 177 countries and territories. Eligibility follows the country that issued your government ID, not where your company is registered or where you pay tax. For a company, Dodo checks the country of incorporation and the ID of every director and beneficial owner.

### Country differences (checked 2026-11-17)

| Country | Dodo Payments | Stripe accounts |
| --- | --- | --- |
| [India](/country/india/), [Indonesia](/country/indonesia/) | Listed | Preview |
| [South Africa](/country/south-africa/), Ghana | Listed | Extended network |
| [Kenya](/country/kenya/), Cote d'Ivoire | Not listed | Extended network |
| [Nigeria](/country/nigeria/) | Existing merchants only | Extended network |
| [Philippines](/country/philippines/), [Israel](/country/israel/), [Nepal](/country/nepal/) | Listed | Not listed |
| Sri Lanka, Vietnam, Jamaica, Serbia | Listed | Not listed |
| Turkiye, Argentina, Colombia, Saudi Arabia | Listed | Not listed |
| [Egypt](/country/egypt/), [Bangladesh](/country/bangladesh/), [Morocco](/country/morocco/) | Existing merchants only | Not listed |
| [Pakistan](/country/pakistan/) | Not listed | Not listed |
| [Brazil](/country/brazil/), Mexico, [UAE](/country/uae/) | Listed | Listed |

"Existing merchants only" means Dodo keeps merchants who joined before March 23, 2026, and new merchants from that country are not eligible.

## Tax and what you can sell

- **Dodo Payments** handles tax as merchant of record. Its [merchant acceptance policy](https://docs.dodopayments.com/miscellaneous/merchant-acceptance) welcomes SaaS and AI products, digital goods, and templates, plugins and apps. It does not support manual digital services where most of the value is human labour (custom design, development, coaching, freelancing or consulting), physical goods, games and in-game items, hosting and servers, financial products, and a list of other categories.
- **Stripe Managed Payments** is for digital products only: software, video games, digital media, online courses and electronically supplied services such as website hosting. Physical goods, professional services such as consulting or design, and live in-person events are not supported, and services with human involvement, such as live 1-1 coaching, do not qualify. It supports direct integrations only, not Connect platforms or Express accounts. Your business must be based in the US, Canada, listed European countries, Australia, Hong Kong, Japan or Singapore. Customers in China, Cuba, Iran, Kosovo, North Korea, Russia, Syria, Ascension Island and Tristan da Cunha cannot buy through it.

Source: [Stripe Managed Payments eligibility](https://docs.stripe.com/payments/managed-payments/eligibility).

## Which to pick

- Seller with an ID from a country Stripe does not list, such as the Philippines, Nepal or Sri Lanka: Dodo, since your country is on its accepted list.
- Seller in Kenya: Stripe lists Kenya as Extended network. Dodo does not list Kenya.
- Seller in Pakistan: neither. See [receiving international payments in Pakistan](/guides/receive-international-payments-pakistan/).
- Selling software in a Stripe country and happy to handle tax yourself: Stripe has the lower card rate.
- Selling video games or hosting: Dodo's policy excludes them. Stripe Managed Payments lists both as supported, if your business is in one of its locations.
- Want a merchant of record and based in the US, Canada, Europe, Australia, Hong Kong, Japan or Singapore: compare Dodo with Stripe Managed Payments using the worked example above.

See also [Dodo Payments vs Paddle](/compare/dodo-payments-vs-paddle/), [Polar vs Dodo Payments](/compare/polar-vs-dodo-payments/), [Polar vs Stripe](/compare/polar-vs-stripe/), [Dodo Payments supported countries](/guides/dodo-payments-supported-countries/) and [all providers](/providers/).
