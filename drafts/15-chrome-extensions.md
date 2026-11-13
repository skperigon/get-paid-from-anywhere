---
order: 15
idea: 18
status: ready
path: "sell/chrome-extensions"
title: "How to charge for a Chrome extension: payment options (checked 2026-11-12)"
h1: "How to charge for a Chrome extension"
description: "Chrome Web Store payments are gone. What Paddle, Lemon Squeezy, Polar and Dodo Payments say about extension-type products, license keys and fees, with a source for every fact, checked on 2026-11-12."
checkedOn: "2026-11-12"
sources:
  - "https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/webstore/cws-payments-deprecation/index.md"
  - "https://developer.chrome.com/docs/webstore/program-policies/policies"
  - "https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle"
  - "https://www.paddle.com/pricing"
  - "https://docs.lemonsqueezy.com/help/getting-started/prohibited-products"
  - "https://docs.lemonsqueezy.com/help/getting-started/fees"
  - "https://docs.lemonsqueezy.com/help/licensing/generating-license-keys"
  - "https://docs.lemonsqueezy.com/help/licensing/license-api"
  - "https://polar.sh/docs/merchant-of-record/acceptable-use"
  - "https://polar.sh/docs/merchant-of-record/fees"
  - "https://polar.sh/docs/features/benefits/license-keys"
  - "https://docs.dodopayments.com/miscellaneous/merchant-acceptance"
  - "https://dodopayments.com/pricing"
  - "https://docs.dodopayments.com/features/license-keys"
faqs:
  - q: "Can I still charge through the Chrome Web Store?"
    a: "No. Google's deprecation notice for Chrome Web Store payments says new paid extensions and in-app items could no longer be created from September 21, 2020, and existing items could no longer charge money through Chrome Web Store payments from February 1, 2021. The Licensing API is also deprecated. You need your own payment provider and your own way to track who has paid. Checked on 2026-11-12."
  - q: "Does the Chrome Web Store allow paid extensions that use another payment provider?"
    a: "Yes. The Chrome Web Store program policies have a section on accepting payment from users. You must handle card data securely, describe what you sell honestly, post your terms of sale including refunds, say in the listing if basic functionality requires payment, and make clear that you, not Google, are the seller. Checked on 2026-11-12."
  - q: "Which merchants of record accept Chrome extensions?"
    a: "None of the four checked names browser extensions as a category, either allowed or banned. Paddle, Lemon Squeezy and Polar all accept software, and Dodo Payments lists templates, plugins and apps among the businesses it welcomes. What matters is what the extension does. Downloaders, scrapers, proxy and VPN tools, captcha solvers and tools that bypass other sites' rules are prohibited or restricted on one or more of these providers. Checked on 2026-11-12."
  - q: "How do I lock paid features in an extension?"
    a: "Lemon Squeezy, Polar and Dodo Payments each generate license keys at purchase and offer an API to activate and validate them, with activation limits and subscription-linked expiry. Your extension asks the user for the key and validates it against the provider's API. We did not find a license key feature on the Paddle pages we checked, so check with Paddle directly. Checked on 2026-11-12."
  - q: "What does a $5 per month extension cost in MoR fees?"
    a: "Our own arithmetic on each provider's published rates, on a $5 price with no tax added. US card: Paddle $0.75, Lemon Squeezy $0.78, Polar Starter $0.75, Polar Early Member $0.63, Dodo Payments $0.63. Non-US card: Paddle $0.75, Lemon Squeezy $0.85, Polar Starter $0.83, Polar Early Member $0.70, Dodo Payments $0.70. Paddle and Lemon Squeezy say to contact them about custom pricing for products under $10. Rates checked on 2026-11-12. Verify with the provider before you rely on these figures."
---

Google no longer processes payments for Chrome extensions. If you want to charge for an extension, you need your own payment provider, and you need a way inside the extension to check who has paid.

This page covers both parts: what Google requires, and which merchants of record (MoRs) take extension-type products, with their license key tools and published fees. An MoR sells the product to the customer on your behalf, handles sales tax and VAT where it covers them, and pays you after its fees. Facts were checked on 2026-11-12 on each provider's own pages. Policies change often, so verify with the provider before you apply.

## What happened to Chrome Web Store payments

Google's [deprecation notice for Chrome Web Store payments](https://github.com/GoogleChrome/developer.chrome.com/blob/main/site/en/docs/webstore/cws-payments-deprecation/index.md) (published in Google's developer.chrome.com documentation source; the page no longer loads at its old developer.chrome.com address) gives these dates:

- March 27, 2020: publishing of paid items temporarily disabled.
- September 21, 2020: no new paid extensions or in-app items. The change became permanent.
- December 1, 2020: free trials disabled.
- February 1, 2021: existing items and in-app purchases can no longer charge money through Chrome Web Store payments.
- At a future date: the Licensing API stops reporting license status.

The same notice says the Licensing API is deprecated and that developers should move license tracking to another system. There is no bulk export of existing licenses.

## What Google requires if you charge another way

The [Chrome Web Store program policies](https://developer.chrome.com/docs/webstore/program-policies/policies) (last updated 2025-05-22 on that page) have a section on accepting payment from users. It says:

- Collect, store and transmit card and other sensitive data securely, following privacy and data security laws and payment card industry rules.
- Describe what you sell clearly and honestly, and post your terms of sale, including refund and return policies.
- If the user must pay to get basic functionality, say so in the description users see before they install.
- Make clear that you, not Google, are the seller.
- Do not process transactions prohibited under the Google Checkout seller terms and content policies, which the page links to.

An MoR checkout on your own site handles the card data part, since the customer pays on the MoR's checkout. The listing text and terms of sale are still your job.

## Summary

| Provider (checked 2026-11-12) | Extensions as a category | Extension types that are prohibited or restricted | License keys | Published base fee |
| --- | --- | --- | --- | --- |
| [Paddle](/provider/paddle/) | Not named. Accepts consumer software | Streaming downloaders, content copying, spyware, captcha solving, automated social media marketing. VPN and proxies are restricted | Not found on the pages we checked | 5% + 50 cents per checkout transaction |
| [Lemon Squeezy](/provider/lemon-squeezy/) | Not named. Accepts software and SaaS | Spyware and parental control apps, anything restricted by its payment partners | Yes, with activation limits and a License API | 5% + 50 cents, plus listed add-ons |
| [Polar](/provider/polar/) | Not named. Accepts software and SaaS | Third-party content downloaders, tools that circumvent other services' rules or paywalls, macros and cheats, API and IP cloaking, spyware. VPN and marketing and outreach tools need closer review | Yes, with activation limits, usage quotas and a validation API | Starter 5% + 50 cents. Paid plans lower the rate for a monthly fee |
| [Dodo Payments](/provider/dodo-payments/) | Welcomes templates, plugins and apps | Scraping and mass outreach tools, proxy and anti-terms tools, bots and engagement manipulation, VPN | Yes, as a License Key entitlement with activate, validate and deactivate endpoints | 4% + 40 cents for US domestic cards and wallets |

Sources: [Paddle acceptable use](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle), [Lemon Squeezy prohibited products](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products), [Polar acceptable use](https://polar.sh/docs/merchant-of-record/acceptable-use), [Dodo merchant acceptance](https://docs.dodopayments.com/miscellaneous/merchant-acceptance), plus the license key and fee pages listed below.

## What each provider says

### Paddle

Paddle's [acceptable use page](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle) (last updated 13 April 2026 on that page) says Paddle is built for software companies, including B2B SaaS, consumer software and games. It does not mention browser extensions.

Items on its prohibited list that often apply to extensions:

- Streaming downloaders, content copying and illicit streaming services.
- Spyware and keyloggers, or anything giving unauthorized access to another party's data.
- Automated social media marketing, including tools that claim to increase engagement.
- Captcha solving.
- VPN and proxies, listed as a restricted category that needs enhanced due diligence.
- Device cleaners and antivirus.

Fee: 5% + 50 cents per checkout transaction, with no monthly fee, per [Paddle pricing](https://www.paddle.com/pricing). The same page says sellers with products under $10 can contact Paddle for bespoke pricing.

License keys: we did not find a license key feature on the Paddle pages we checked. Ask Paddle how it suggests gating paid features.

### Lemon Squeezy

Lemon Squeezy's [prohibited products page](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products) lists software and SaaS as acceptable and does not mention extensions. Its prohibited list includes spyware or parental control apps and any products restricted by its payment processing partners. The page says to contact support with a description of the product before you start selling if you are unsure.

License keys: Lemon Squeezy can [generate a license key](https://docs.lemonsqueezy.com/help/licensing/generating-license-keys) for each purchase, with a license length and an activation limit for one-time products. For subscriptions, keys follow the subscription lifecycle. The separate [License API](https://docs.lemonsqueezy.com/help/licensing/license-api) activates, validates and deactivates keys and is rate limited to 60 requests per minute.

Fees, from the [Lemon Squeezy fees page](https://docs.lemonsqueezy.com/help/getting-started/fees): a platform fee of 5% + 50 cents on the total order value, plus 1.5% for transactions outside the US, 1.5% for PayPal and 0.5% for subscription payments. The page says sellers with products under $10 can contact sales for custom pricing.

### Polar

Polar's [acceptable use policy](https://polar.sh/docs/merchant-of-record/acceptable-use) (effective October 1, 2026 on that page) accepts software and SaaS and does not mention extensions. It lists license keys as one way Polar can fulfil a sale.

Prohibited items that often apply to extensions:

- Third-party content downloaders, including YouTube, Instagram and Snapchat.
- Services to circumvent the rules, paywalls or terms of other services.
- Cheating, including macros, cheat codes and hacks.
- API and IP cloaking services.
- Viruses and spyware, and tools that give unauthorized access to another party's data.
- Advertising and unsolicited marketing services, including lead generation and automated outreach.

Needs closer review: VPN, VPS and VDS services; marketing and outreach tools; AI content generation tools.

License keys: Polar's [license key benefit](https://polar.sh/docs/features/benefits/license-keys) supports brandable prefixes, expiry for one-time purchases, automatic revocation when a subscription ends, activation limits, custom validation conditions and usage quotas. Your extension validates the key through Polar's API.

Fees, from [Polar fees](https://polar.sh/docs/merchant-of-record/fees): Starter is 5% + 50 cents with no monthly fee. Pro is $20 a month at 3.8% + 40 cents, Growth $100 a month at 3.6% + 35 cents, and Scale $400 a month at 3.4% + 30 cents. International cards add 1.5%. Organizations created before May 27, 2026 keep the Early Member rate of 4% + 40 cents plus 0.5% on subscriptions.

### Dodo Payments

Dodo's [merchant acceptance policy](https://docs.dodopayments.com/miscellaneous/merchant-acceptance) lists "Templates, Plugins & Apps" among the businesses it welcomes, next to SaaS and AI products and digital goods.

Prohibited items that often apply to extensions:

- Spam, mass outreach or scraping tools, including lead scraping.
- Proxy, cloaking or anti-terms tools that help users bypass API rate limits, captcha or authentication limits, platform terms or geolocation restrictions.
- Cheating and manipulation tools, including hacks, mods, bots and fake engagement.
- Privacy violations and surveillance tech, including tools that scrape or collect personal data without a clear legal basis.
- VPN and other hosting or infrastructure services.

License keys: Dodo issues [license keys](https://docs.dodopayments.com/features/license-keys) through a License Key entitlement with an activation limit and license length. Subscription keys have no expiry and follow the subscription status. Public endpoints activate, validate and deactivate keys. [Dodo pricing](https://dodopayments.com/pricing) lists license keys as included.

Fees, from Dodo pricing: 4% + 40 cents for US domestic cards and wallets, plus 1.5% for international payments and 0.5% for subscriptions. PayPal adds 3%. Refunds cost $1 each.

## Worked examples

Our own arithmetic on the published rates, with no tax added. Lemon Squeezy calculates its fee on the total order value, so tax added at checkout raises the fee. Amounts are rounded to the nearest cent.

### $5 per month subscription

| $5 monthly charge | Paddle | Lemon Squeezy | Polar Starter | Polar Early Member | Dodo Payments |
| --- | --- | --- | --- | --- | --- |
| US card | $0.75 | $0.78 | $0.75 | $0.63 | $0.63 |
| Non-US card | $0.75 | $0.85 | $0.83 | $0.70 | $0.70 |

### $20 one-time license

| $20 one-time charge | Paddle | Lemon Squeezy | Polar Starter | Polar Early Member | Dodo Payments |
| --- | --- | --- | --- | --- | --- |
| US card | $1.50 | $1.50 | $1.50 | $1.20 | $1.20 |
| Non-US card | $1.50 | $1.80 | $1.80 | $1.50 | $1.50 |

How those numbers were built:

- Paddle: 5% + 50 cents on every row.
- Lemon Squeezy: 5% + 50 cents. Subscriptions add 0.5%. Non-US adds 1.5%.
- Polar Starter: 5% + 50 cents. Non-US adds 1.5%.
- Polar Early Member: 4% + 40 cents. Subscriptions add 0.5%. Non-US adds 1.5%.
- Dodo: 4% + 40 cents. Subscriptions add 0.5%. Non-US adds 1.5%.

The fixed per-transaction fee is a large share of a low price. Paddle and Lemon Squeezy both say to contact them about custom pricing for products under $10. Yearly plans or one-time licenses reduce how often the fixed fee is charged.

## Before you apply

- Describe on your site what the extension does, what data it reads, and what it will not do. Reviewers judge the function, not the fact that it is an extension.
- Check the prohibited lists against your feature set. Downloaders, scrapers, proxies, captcha solvers and tools that work around another site's terms are the common problems.
- Put your terms of sale and refund policy on your site, and say in the Chrome Web Store listing if basic features need payment. Google's policies require both.
- Plan license checks. Decide how often the extension validates a key and what happens when it is offline.
- Check country support. Acceptance of the product does not mean your country is supported. See [Lemon Squeezy supported countries](/guides/lemon-squeezy-supported-countries/) and [Dodo Payments supported countries](/guides/dodo-payments-supported-countries/), or [browse by country](/countries/).

We do not give legal or tax advice. This page reports what each provider publishes. Verify with the provider before you rely on any rule or figure.

## Related pages

- [Merchant of record for SaaS](/sell/saas/)
- [Merchant of record for digital products](/sell/digital-products/)
- [Merchant of record for AI apps](/sell/ai-apps/)
- [Polar vs Lemon Squeezy](/compare/polar-vs-lemon-squeezy/)
- [Polar vs Dodo Payments](/compare/polar-vs-dodo-payments/)
- [Dodo Payments vs Paddle](/compare/dodo-payments-vs-paddle/)
- [Paddle alternatives](/guides/paddle-alternatives/)
- [Lemon Squeezy alternatives](/guides/lemon-squeezy-alternatives/)
- [All providers](/providers/)
