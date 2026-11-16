---
order: 27
idea: 32
status: ready
path: "compare/polar-vs-stripe"
title: "Polar vs Stripe: merchant of record or payment processor (checked 2026-11-15)"
h1: "Polar vs Stripe"
description: "Polar is a merchant of record that pays out through Stripe. Stripe is a payment processor with an optional merchant of record add-on. How fees, payouts and seller countries compare, with a source and a checked date for every fact."
checkedOn: "2026-11-15"
sources:
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/merchant-of-record/supported-countries"
  - "https://stripe.com/pricing"
  - "https://stripe.com/global"
  - "https://docs.stripe.com/payments/managed-payments/eligibility"
  - "https://support.stripe.com/questions/stripe-accounts-are-invite-only-in-india"
faqs:
  - q: "Is Polar built on Stripe?"
    a: "Polar charges your customers itself as the merchant of record and uses Stripe Connect Express to pay you out. Polar says Stripe Payments does not need to be available in your country, only Stripe Connect Express payouts."
  - q: "Is Polar cheaper than Stripe?"
    a: "On card fees alone, no. On 2026-11-15, Stripe's US pricing page listed 2.9% + 30 cents for domestic cards and Polar's free plan listed 5% + 50 cents. Polar's rate includes sales tax and VAT handling as merchant of record. With Stripe you handle tax yourself, or add Managed Payments at 3.5% on top of Payments fees."
  - q: "Can I use Polar if Stripe is not available in my country?"
    a: "Often yes. On 2026-11-15, Pakistan, Bangladesh, Egypt, the Philippines, Sri Lanka, Vietnam, Israel, Jamaica and Serbia were on Polar's payout list but not on Stripe's global availability page."
  - q: "Does Stripe have a merchant of record option?"
    a: "Yes. Stripe's pricing page lists Managed Payments, its merchant of record service, at 3.5% per successful transaction in addition to Payments fees. Stripe's eligibility page says your business must be based in the US, Canada, listed European countries, Australia, Hong Kong, Japan or Singapore."
---

Polar and Stripe are often compared, but they do different jobs. Polar is a merchant of record: it sells to your customer, collects and remits sales tax and VAT, and pays you out. Stripe is a payment processor: you are the seller, and tax compliance is yours unless you add Stripe's own merchant of record service, Managed Payments. Polar also uses Stripe to send your payouts. Facts below come from each provider's own pages, checked on 2026-11-15.

## Fees compared

| Fee (checked 2026-11-15) | [Polar](/provider/polar/) | [Stripe](/provider/stripe/) (US pricing page) |
| --- | --- | --- |
| Base rate | 5% + 50 cents on the free Starter plan | 2.9% + 30 cents for domestic cards |
| Monthly fee | None on Starter. Paid plans $20, $100 or $400 a month lower the rate to as little as 3.4% + 30 cents | None on standard pricing |
| International cards | +1.5% for non-US cards | +1.5% for international cards, +1% more if currency conversion is required |
| Subscriptions | No extra fee on Starter or paid plans | Stripe Billing pay as you go: 0.7% of Billing volume |
| Sales tax and VAT | Included. Polar is the merchant of record | Your job. Stripe Tax is 0.5% per transaction where you are registered (no-code integration), or Managed Payments at 3.5% on top of Payments fees |
| Disputes | $15 per dispute | $15 per dispute received |
| Refunds | Original transaction fees are not returned | Original processing fees are not returned |

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees) and [Stripe pricing](https://stripe.com/pricing). Stripe prices differ by country. The figures above are from its US page.

### A worked example

Our own arithmetic on the published rates, for a $30 monthly subscription paid with a non-US card, with no currency conversion, before tax:

- Polar Starter: 5% + 1.5% = 6.5% of $30, plus 50 cents = $2.45. Tax handling is included.
- Stripe with Billing: 2.9% + 1.5% + 0.7% = 5.1% of $30, plus 30 cents = $1.83. Tax registration, calculation and filing are still yours. Stripe Tax (no-code) adds 0.5% where you are registered, or 15 cents here.
- Stripe with Managed Payments: 2.9% + 1.5% + 3.5% = 7.9% of $30, plus 30 cents = $2.67, before any Billing fee. We did not find whether the Billing fee also applies with Managed Payments.

Polar's own example on its fees page applies the fees to the total transaction value, including VAT. Payout costs, covered next, come on top.

## How you get paid

- **Polar:** payouts go through Stripe Connect Express. Polar says it adds no markup and passes on Stripe's payout fees: $2 per month of active payouts, 0.25% + 25 cents per payout, and currency conversion from 0.25% in the EU to 1% elsewhere. You withdraw manually and choose when.
- **Stripe:** you get paid to your own bank account on a rolling, weekly or monthly schedule, and Stripe says standard payouts are free. Instant Payouts cost 1.5% of the payout, minimum 50 cents.

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees) and [Stripe pricing](https://stripe.com/pricing).

## Who can sign up

- **Stripe** lists 51 countries on its [global availability page](https://stripe.com/global). India and Indonesia are marked Preview, and Stripe says [new accounts in India are invite-only](https://support.stripe.com/questions/stripe-accounts-are-invite-only-in-india). Cote d'Ivoire, Ghana, Kenya, Nigeria and South Africa are marked Extended network.
- **Polar** publishes a [payout country list](https://polar.sh/docs/merchant-of-record/supported-countries) based on Stripe Connect Express, which Polar says covers more countries than Stripe Payments. Polar says sellers in countries where Stripe is invite-only, such as India, can still receive payouts. Individuals can sell if Stripe Connect Express supports the individual business type in their country.

### Country differences (checked 2026-11-15)

| Country | Polar payouts | Stripe accounts |
| --- | --- | --- |
| [India](/country/india/) | Listed | Preview, invite-only |
| [Indonesia](/country/indonesia/) | Listed | Preview |
| [Nigeria](/country/nigeria/), [Kenya](/country/kenya/), [South Africa](/country/south-africa/) | Listed | Extended network |
| [Pakistan](/country/pakistan/), [Bangladesh](/country/bangladesh/) | Listed | Not listed |
| [Egypt](/country/egypt/), [Philippines](/country/philippines/) | Listed | Not listed |
| [Israel](/country/israel/) | Listed | Not listed |
| Sri Lanka, Vietnam | Listed | Not listed |
| Jamaica, Serbia | Listed | Not listed |
| [UAE](/country/uae/), Mexico | Listed | Listed |
| [Brazil](/country/brazil/) | Not listed | Listed |
| [Nepal](/country/nepal/), [Morocco](/country/morocco/) | Not listed | Not listed |

Morocco was on Polar's payout list when we checked on 2026-10-30 and was gone on 2026-11-14 and 2026-11-15.

## Tax and what you can sell

- **Polar** is the merchant of record for every sale, so it handles international sales tax. Polar says it accepts payments globally except from countries under US sanctions (Cuba, Russia, Iran, North Korea and Syria).
- **Stripe Managed Payments** is for digital products only: software, video games, digital media, online courses and electronically supplied services. Physical goods, professional services such as consulting or design, and live events are not supported, and services with human involvement, such as live 1-1 coaching, do not qualify. It supports direct integrations only, not Connect platforms or Express accounts. Customers in China, Cuba, Iran, Kosovo, North Korea, Russia, Syria, Ascension Island and Tristan da Cunha cannot buy through it.

Source: [Stripe Managed Payments eligibility](https://docs.stripe.com/payments/managed-payments/eligibility). Polar's product rules are covered in [Polar vs Paddle](/compare/polar-vs-paddle/).

## Which to pick

- Seller in a country Stripe does not list, such as Pakistan, Bangladesh or Egypt: Polar, if your country is on its payout list.
- Seller in Brazil: Stripe, since Brazil is not on Polar's payout list.
- Selling software in a Stripe country and happy to handle tax yourself: Stripe has the lower card rate.
- Want a merchant of record and based in the US, Canada, Europe, Australia, Hong Kong, Japan or Singapore: compare Polar with Stripe Managed Payments using the worked example above.
- Want a merchant of record from anywhere else: Stripe Managed Payments is not open to you, so look at Polar or the options in [Paddle alternatives](/guides/paddle-alternatives/).

See also [Polar vs Paddle](/compare/polar-vs-paddle/), [Polar vs Dodo Payments](/compare/polar-vs-dodo-payments/), [Polar vs Lemon Squeezy](/compare/polar-vs-lemon-squeezy/) and [all providers](/providers/).
