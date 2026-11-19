---
order: 30
idea: 35
status: ready
path: "compare/polar-vs-creem"
title: "Polar vs Creem: fees, payouts, countries and rules (checked 2026-11-18)"
h1: "Polar vs Creem"
description: "Polar and Creem are both merchants of record for software and digital products. How their fees, payouts, seller countries and product rules compare, with a source and a checked date for every fact."
checkedOn: "2026-11-18"
sources:
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/merchant-of-record/supported-countries"
  - "https://polar.sh/docs/merchant-of-record/acceptable-use"
  - "https://www.creem.io/pricing"
  - "https://docs.creem.io/merchant-of-record/finance/payouts"
  - "https://docs.creem.io/merchant-of-record/finance/payout-accounts"
  - "https://docs.creem.io/merchant-of-record/finance/refunds-and-chargebacks"
  - "https://docs.creem.io/merchant-of-record/supported-countries"
  - "https://docs.creem.io/merchant-of-record/account-reviews/account-reviews"
faqs:
  - q: "Is Creem cheaper than Polar?"
    a: "On the published per-sale rates, yes. On 2026-11-18, Creem listed 3.9% + 40 cents with no monthly fee and no international card fee. Polar's free Starter plan listed 5% + 50 cents, plus 1.5% for non-US cards. Polar's paid plans go as low as 3.4% + 30 cents for $400 a month. Payout fees work differently, so check both."
  - q: "Are Polar and Creem both merchants of record?"
    a: "Yes. Both say they are the seller of record and handle sales tax and VAT for you. Creem says it collects and remits tax in 190+ countries."
  - q: "Do I need my own domain to use Creem?"
    a: "Yes. Creem's account review requires a website on your own custom domain before you can take live payments. It does not accept free hosting subdomains such as github.io or vercel.app, social profiles or marketplace pages."
  - q: "Which countries can get paid by Creem but not by Polar?"
    a: "Among the countries we checked on 2026-11-18, Brazil, Morocco, Nepal, China, Ukraine, Zambia and Gibraltar were on Creem's supported list but not on Polar's payout list. Jamaica was on Polar's list but not on Creem's."
---

Polar and Creem are both merchants of record: they sell to your customer, collect and remit sales tax and VAT, handle chargebacks and pay you out. Both are aimed at software, SaaS and digital products. They differ on fees, how and when you get paid, which countries they pay out to and what you need before you can go live. Facts below come from each provider's own pages, checked on 2026-11-18.

## Fees compared

| Fee (checked 2026-11-18) | [Polar](/provider/polar/) | [Creem](https://www.creem.io/pricing) |
| --- | --- | --- |
| Base rate | 5% + 50 cents on the free Starter plan | 3.9% + 40 cents |
| Monthly fee | None on Starter. Pro $20, Growth $100 or Scale $400 a month lower the rate to as little as 3.4% + 30 cents | None |
| International cards | +1.5% for non-US cards | None. Creem's pricing page lists "No international card fees" |
| Subscriptions | No extra fee on Starter or paid plans | None listed |
| Extra features | None listed | +2% for revenue splits, +2% for sales through its affiliate platform, +5% on sales recovered by abandoned cart recovery |
| Refunds | Original transaction fees are not returned | No refund fee. Original transaction fees are not returned |
| Disputes | $15 per dispute, regardless of outcome | 25 USD or EUR per chargeback |

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees), [Creem pricing](https://www.creem.io/pricing), [Creem payouts](https://docs.creem.io/merchant-of-record/finance/payouts) and [Creem refunds and chargebacks](https://docs.creem.io/merchant-of-record/finance/refunds-and-chargebacks).

Polar says organizations created before May 27, 2026 can stay on its Early Member rate of 4% + 40 cents, plus 0.5% on subscriptions. Both providers apply their fee to the total order value, including tax. Both say they may refund a purchase themselves within 60 days to prevent chargebacks.

### A worked example

Our own arithmetic on the published rates, for a $30 sale paid with a non-US card, before tax:

- Polar Starter: 5% + 1.5% = 6.5% of $30, plus 50 cents = $2.45.
- Polar Pro: 3.8% + 1.5% = 5.3% of $30, plus 40 cents = $1.99, plus $20 a month. Polar puts the Pro breakeven against Starter at about $1,379 a month in sales.
- Creem: 3.9% of $30, plus 40 cents = $1.57.

Payout costs, covered next, come on top.

## How you get paid

- **Polar:** payouts go through Stripe Connect Express. Polar says it adds no markup and passes on Stripe's payout fees: $2 per month of active payouts, 0.25% + 25 cents per payout, and currency conversion from 0.25% in the EU to 1% elsewhere. You withdraw manually and choose when. Polar says it will trigger a payout itself if a balance sits unwithdrawn for several months.
- **Creem:** payouts run on the 1st and 15th of each month once your balance reaches 50 USD or 50 EUR and you press withdraw. Bank transfers cost 7 USD or EUR, or 1% of the payout, whichever is higher, plus any conversion fee from its banking partners. USDC payouts on the Polygon network cost 2% of the payout. China-based individuals are paid by Alipay. Creem says payments may be held 7 to 12 days for risk review before they can be paid out.

On a $1,000 payout, by our arithmetic: Polar's Stripe fees are $2.75 plus the $2 monthly fee, before currency conversion. Creem's bank transfer fee is $10, before any conversion fee.

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees), [Creem payouts](https://docs.creem.io/merchant-of-record/finance/payouts) and [Creem payout accounts](https://docs.creem.io/merchant-of-record/finance/payout-accounts).

## Who can get paid

- **Polar** publishes a [payout country list](https://polar.sh/docs/merchant-of-record/supported-countries) based on Stripe Connect Express. Polar says Stripe Payments does not need to be available in your country, including places where Stripe is invite-only, such as India.
- **Creem** publishes a [supported country list](https://docs.creem.io/merchant-of-record/supported-countries) and pays by local bank transfer through a bank transfer partner. Its page says it supports merchants in 87 countries, while the table on the same page is headed 86. Some countries carry partner restrictions, for example only personal bank accounts being supported.

### Country differences (checked 2026-11-18)

| Country | Polar payouts | Creem payouts |
| --- | --- | --- |
| [India](/country/india/), [Nigeria](/country/nigeria/), [Kenya](/country/kenya/), [South Africa](/country/south-africa/), [Egypt](/country/egypt/) | Listed | Listed |
| [Indonesia](/country/indonesia/), [Philippines](/country/philippines/), [Israel](/country/israel/), [UAE](/country/uae/) | Listed | Listed |
| [Pakistan](/country/pakistan/), [Bangladesh](/country/bangladesh/) | Listed | Listed, with bank transfer partner restrictions |
| [Brazil](/country/brazil/), [Morocco](/country/morocco/) | Not listed | Listed |
| [Nepal](/country/nepal/) | Not listed | Listed, with bank transfer partner restrictions |
| China | Not listed | Listed. Individuals are paid by Alipay, up to 50,000 CNY per payout |
| Jamaica | Listed | Not listed |

Creem says that if your country is not on its list, you cannot use Creem yet. Neither page gives a reason for any single country.

## What you can sell

- **Polar** says it serves software companies, including B2B SaaS, consumer software and games, and is not designed for businesses whose main offering is human services or physical goods. Its acceptable use policy (effective October 1, 2026) lists products that need closer review, including eBooks, directories, AI content generation tools and chatbot generators.
- **Creem** accepts digital goods it can fulfill, such as software and SaaS, eBooks, PDFs, design assets, photos, audio and video. Its prohibited list includes physical goods, trading bots, face-swap and deepfake tools, AI companion chatbots, VPNs and eSIMs. Services of any kind, job boards, API resellers and generative AI products are restricted and get strict due diligence. AI image and video products must use its Customer Credits and Moderation API.

### Before you go live

Creem reviews each store before it can take live payments, typically in 1 to 2 working days. It requires a live product on your own custom domain, a privacy policy and terms of service, visible pricing, a support email shown on your site and no fake reviews or inflated user counts. It does not accept free hosting subdomains, social profiles or marketplace pages as your website. Polar also reviews accounts and may ask for more information on restricted products.

Sources: [Polar acceptable use](https://polar.sh/docs/merchant-of-record/acceptable-use) and [Creem account reviews](https://docs.creem.io/merchant-of-record/account-reviews/account-reviews).

## Which to pick

- Lowest published per-sale fee with no monthly plan, especially with non-US buyers: Creem.
- Small or irregular payouts: Polar. Creem's bank payouts cost at least 7 USD or EUR each and need a 50 USD or EUR balance.
- Want to choose when you get paid: Polar's withdrawals are manual. Creem pays on the 1st and 15th.
- Seller in Brazil, Morocco, Nepal or China: Creem, since these are not on Polar's payout list.
- Seller in Jamaica: Polar, since Jamaica is not on Creem's list.
- No custom domain yet: Creem requires one before you can take live payments.

See also [Polar vs Gumroad](/compare/polar-vs-gumroad/), [Polar vs Paddle](/compare/polar-vs-paddle/), [Polar vs Stripe](/compare/polar-vs-stripe/), [selling SaaS](/sell/saas/) and [all providers](/providers/).
