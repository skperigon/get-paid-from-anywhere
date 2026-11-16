---
order: 26
idea: 31
status: published
path: "compare/polar-vs-paddle"
title: "Polar vs Paddle: fees, payouts, countries and rules (checked 2026-11-14)"
h1: "Polar vs Paddle"
description: "Polar and Paddle are both merchants of record for software. How their fees, payouts, seller countries and product rules compare, with a source and a checked date for every fact."
checkedOn: "2026-11-14"
sources:
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/merchant-of-record/supported-countries"
  - "https://polar.sh/docs/merchant-of-record/acceptable-use"
  - "https://www.paddle.com/pricing"
  - "https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle"
  - "https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle"
  - "https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid"
  - "https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts"
  - "https://www.paddle.com/solutions/sell-digital-products"
faqs:
  - q: "Is Polar cheaper than Paddle?"
    a: "Not on the free plan for non-US buyers. On 2026-11-14, both listed 5% + 50 cents as the base rate, and Polar added 1.5% for non-US cards. Paddle listed no international card surcharge on its pricing page. Polar's paid plans lower the rate to as little as 3.4% + 30 cents for a monthly fee."
  - q: "Do I need Stripe in my country to use Polar or Paddle?"
    a: "No. Polar charges customers itself and pays you through Stripe Connect Express, so your country must be on Polar's payout list but Stripe Payments does not need to be available there. Paddle pays out by wire transfer or Payoneer."
  - q: "Which countries can sell on Paddle but not on Polar?"
    a: "Among the countries we checked on 2026-11-14, Brazil, Nepal, Morocco and China were not on Polar's payout list and were not on Paddle's unsupported countries list."
  - q: "How often do Polar and Paddle pay out?"
    a: "Paddle pays once a month, by the 15th, if your balance is over your threshold (minimum $100), and does not allow on-demand withdrawals. Polar offers manual withdrawals, so you choose when to take a payout."
---

Polar and Paddle are both merchants of record: they sell to your customer, collect and remit sales tax and VAT, and pay you out. Both say they serve software companies, including B2B SaaS, consumer software and games. They differ on fees for non-US buyers, how and when you get paid, which countries they accept and how they treat digital products. Facts below come from each provider's own pages, checked on 2026-11-14.

## Fees compared

| Fee (checked 2026-11-14) | [Polar](/provider/polar/) | [Paddle](/provider/paddle/) |
| --- | --- | --- |
| Base rate | 5% + 50 cents on the free Starter plan | 5% + 50 cents per checkout transaction |
| Monthly fee | None on Starter | None |
| Paid plans | Pro $20/month: 3.8% + 40 cents. Growth $100/month: 3.6% + 35 cents. Scale $400/month: 3.4% + 30 cents | Custom pricing for high-volume businesses, on request |
| International cards | +1.5% for non-US cards | None listed on the pricing page |
| Subscriptions | No extra fee on Starter or paid plans | None listed. Subscriptions are part of the all-inclusive fee |
| Disputes | $15 per dispute | unknown. The pricing page lists chargebacks as included but names no fee |
| Refunds | Original transaction fees are not returned | unknown. Not stated on the pricing page |
| Low-price products | Not stated | Products under $10 can ask for bespoke pricing |

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees) and [Paddle pricing](https://www.paddle.com/pricing).

Polar organizations created before May 27, 2026 keep an Early Member rate of 4% + 40 cents, plus 0.5% on subscriptions. Polar publishes the monthly sales at which each paid plan beats Starter: about $1,379 for Pro, $5,634 for Growth and $19,048 for Scale.

### A worked example

Our own arithmetic on the published rates, for a $30 monthly subscription paid with a non-US card, before tax:

- Polar Starter: 5% + 1.5% = 6.5% of $30, plus 50 cents = $2.45.
- Polar Pro: 3.8% + 1.5% = 5.3% of $30, plus 40 cents = $1.99, plus $20 a month for the plan.
- Paddle: 5% of $30, plus 50 cents = $2.00.

Polar's own example on its fees page applies the fees to the total transaction value, including VAT. We did not find Paddle's rule on this on its pricing page, so the example leaves tax out. Payout costs, covered next, come on top.

## How you get paid

- **Polar:** payouts go through Stripe Connect Express. Polar says it adds no markup and passes on Stripe's payout fees: $2 per month of active payouts, 0.25% + 25 cents per payout, and currency conversion from 0.25% in the EU to 1% elsewhere. You withdraw manually and choose when. Polar says it will trigger a payout itself if a balance sits unwithdrawn for several months.
- **Paddle:** pays once a month. On the 1st, a balance over your threshold (minimum $100) becomes a payout, and Paddle sends it by the 15th. There are no on-demand withdrawals. You can choose wire transfer or Payoneer. Paddle adds no fee of its own. A wire in a currency that is not the local currency of your bank's country goes by SWIFT for a $15 (or 15 euro or 15 pound) fee, Payoneer charges its own fees, and Paddle may add up to 1.5% if you take a payout in a currency other than your balance currency.

Sources: [Polar fees](https://polar.sh/docs/merchant-of-record/fees), [Paddle: when and how do I get paid](https://www.paddle.com/help/manage/get-paid/when-and-how-do-i-get-paid) and [Paddle: payout fees](https://www.paddle.com/help/manage/get-paid/is-there-a-fee-taken-for-payouts).

Paddle says a service such as Wise that gives you SWIFT and IBAN details can receive its payouts. Polar also says it may refund an order at its discretion for up to 60 days after purchase, to reduce disputes.

## Who can sign up

- **Polar** publishes a list of countries it pays out to. Your country must be on its [payout list](https://polar.sh/docs/merchant-of-record/supported-countries) because payouts depend on Stripe Connect Express. Stripe Payments does not need to be available there. Individuals can sell if Stripe Connect Express supports the individual business type in their country.
- **Paddle** publishes the opposite: a list of [unsupported countries](https://www.paddle.com/help/start/intro-to-paddle/which-countries-are-supported-by-paddle). Paddle says it works with software businesses anywhere except those countries. The list includes Afghanistan, Belarus, Burma (Myanmar), Cuba, Haiti, Iran, Iraq, Libya, Mali, Nicaragua, North Korea, Russia, Somalia, Sudan, Syria, Venezuela, Yemen, Zimbabwe and five regions of Ukraine.

### Country differences (checked 2026-11-14)

| Country | Polar | Paddle |
| --- | --- | --- |
| [India](/country/india/) | Listed | Not on unsupported list |
| [Pakistan](/country/pakistan/) | Listed | Not on unsupported list |
| [Nigeria](/country/nigeria/) | Listed | Not on unsupported list |
| [Bangladesh](/country/bangladesh/) | Listed | Not on unsupported list |
| [Egypt](/country/egypt/) | Listed | Not on unsupported list |
| [Kenya](/country/kenya/) | Listed | Not on unsupported list |
| [Brazil](/country/brazil/) | Not listed | Not on unsupported list |
| [Nepal](/country/nepal/) | Not listed | Not on unsupported list |
| [Morocco](/country/morocco/) | Not listed | Not on unsupported list |
| China | Not listed | Not on unsupported list |
| [UAE](/country/uae/), [Israel](/country/israel/) | Listed | Not on unsupported list |
| [Indonesia](/country/indonesia/), [Philippines](/country/philippines/), [South Africa](/country/south-africa/) | Listed | Not on unsupported list |
| Sri Lanka, Vietnam | Listed | Not on unsupported list |
| Zimbabwe | Not listed | Unsupported |

"Not on unsupported list" means Paddle does not exclude the country. It is not a promise that Paddle will approve your account. Morocco was on Polar's list when we checked on 2026-10-30 and was gone on 2026-11-14.

## What you can sell

- **Polar:** its [acceptable use policy](https://polar.sh/docs/merchant-of-record/acceptable-use), effective October 1, 2026, accepts software and SaaS, digital products such as templates, eBooks, code, icons, fonts and design assets, and premium content and access such as courses and Discord or GitHub access. Polar can deliver license keys, file downloads and GitHub or Discord invites for you. It prohibits physical goods, human services, marketplaces and 34 other categories. Directories, eBooks, AI content generation tools, marketing tools and VPNs get closer review.
- **Paddle:** its [acceptable use page](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle), last updated 13 April 2026, says Paddle is built for software companies and is not a fit if your main offering is human services or physical goods. It lists 21 prohibited categories, including marketplaces, job boards, VPNs and proxies, antivirus and device cleaners, and some AI content generation such as face swaps, deepfakes and voice impersonation. Paddle's [digital products page](https://www.paddle.com/solutions/sell-digital-products) also names e-books, courses, audio and music files.

Both lists are long. If your product is near a listed category, read the full policy before you apply.

## Which to pick

- Mostly non-US buyers on the free plan: Paddle, since Polar adds 1.5% for non-US cards and Paddle lists no surcharge.
- High volume: compare Polar's paid plans, using its published breakeven points, with a custom quote from Paddle.
- Want to choose when you get paid: Polar, which offers manual withdrawals. Paddle pays monthly with a $100 minimum.
- Seller in Brazil, Nepal, Morocco or China: Paddle, since these countries are not on Polar's payout list.
- Selling templates, icons or design assets: Polar names them as acceptable. Paddle's pages we checked do not name them, so ask Paddle first.

See also [Polar vs Dodo Payments](/compare/polar-vs-dodo-payments/), [Dodo Payments vs Paddle](/compare/dodo-payments-vs-paddle/), [Paddle alternatives](/guides/paddle-alternatives/) and [all providers](/providers/).
