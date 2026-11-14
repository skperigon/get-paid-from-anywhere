---
order: 16
idea: 19
status: ready
path: "sell/mac-apps"
title: "Selling a Mac app outside the App Store: payment and licensing options (checked 2026-11-13)"
h1: "Selling a Mac app outside the App Store"
description: "What Apple requires for direct Mac distribution, and what Paddle, Lemon Squeezy, Polar and Dodo Payments offer for license keys and fees, with a source for every fact, checked on 2026-11-13."
checkedOn: "2026-11-13"
sources:
  - "https://developer.apple.com/developer-id/"
  - "https://developer.apple.com/programs/whats-included/"
  - "https://developer.paddle.com/migrate/plan"
  - "https://www.paddle.com/help/start/intro-to-paddle/selling-a-mac-app-with-trials-and-licensing"
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
  - q: "What does Apple require to sell a Mac app outside the Mac App Store?"
    a: "Apple's Developer ID page says Gatekeeper checks for a Developer ID certificate on apps distributed outside the Mac App Store, and that you should sign any apps, plug-ins or installer packages you distribute. Only the Account Holder of a team in the Apple Developer Program can generate the certificate. Apple also offers notarization, an automated scan of Developer ID signed software. Checked on 2026-11-13."
  - q: "How much does the Apple Developer Program cost?"
    a: "Apple's membership details page says the Apple Developer Program is 99 USD per membership year, or the local currency price where available. The same page lists the App Store commission on digital goods as 30%, or 15% for the Small Business Program and some other programs and for qualifying subscriptions. That commission applies to App Store sales, not to sales you take through your own checkout. Checked on 2026-11-13."
  - q: "Does Paddle still generate license keys for Mac apps?"
    a: "Not on Paddle Billing, its current platform. Paddle's migration guide says product delivery and license key generation are not handled by Paddle in Paddle Billing and recommends you build it yourself using webhooks. Paddle's help page on Mac trials and licensing says it applies only to Paddle Classic. Checked on 2026-11-13."
  - q: "Which merchants of record generate license keys for a desktop app?"
    a: "Lemon Squeezy, Polar and Dodo Payments each generate a license key at purchase, with activation limits and an API to activate and validate keys. Dodo's license key page names desktop apps as a use. Checked on 2026-11-13."
  - q: "What does a $29 one-time Mac app license cost in MoR fees?"
    a: "Our own arithmetic on each provider's published rates, on a $29 price with no tax added. US card: Paddle $1.95, Lemon Squeezy $1.95, Polar Starter $1.95, Polar Early Member $1.56, Dodo Payments $1.56. Non-US card: Paddle $1.95, Lemon Squeezy $2.39, Polar Starter $2.39, Polar Early Member $2.00, Dodo Payments $2.00. Rates checked on 2026-11-13. Verify with the provider before you rely on these figures."
---

A Mac app does not have to be sold through the Mac App Store. Many developers sell from their own site, take payment through a checkout provider, and unlock the app with a license key.

That setup has three parts: Apple's signing rules for apps you distribute yourself, a payment provider that will sell your app, and a way for the app to check that the buyer has paid. This page covers all three for four merchants of record (MoRs). An MoR sells the product to the customer on your behalf, handles sales tax and VAT where it covers them, and pays you after its fees. Facts were checked on 2026-11-13 on each provider's own pages. Policies change often, so verify with the provider before you apply.

## What Apple requires for direct distribution

Apple's [Developer ID page](https://developer.apple.com/developer-id/) says:

- Gatekeeper on macOS checks for a Developer ID certificate on apps distributed outside the Mac App Store.
- You should sign any apps, plug-ins or installer packages you distribute.
- You must be the Account Holder of your team in the Apple Developer Program to generate the Developer ID certificate.
- You can submit Developer ID signed software to Apple to be notarized. The notary service scans it and issues a ticket that tells Gatekeeper it has been notarized.
- Since November 1, 2023, the notary service no longer accepts uploads from altool or Xcode 13 or earlier. Use notarytool or Xcode 14 or later.

Apple's [membership details page](https://developer.apple.com/programs/whats-included/) lists the Apple Developer Program at 99 USD per membership year, or the local currency price where available. It lists the App Store commission on digital goods as 30%, or 15% for the App Store Small Business Program and some partner programs and for qualifying subscriptions. That commission is for App Store sales. A sale on your own checkout pays your payment provider's fee instead.

## Summary

| Provider (checked 2026-11-13) | Accepts software | License keys | Published base fee |
| --- | --- | --- | --- |
| [Paddle](/provider/paddle/) | Yes. Built for software companies, including consumer software | Not handled in Paddle Billing. Build your own on webhooks | 5% + 50 cents per checkout transaction |
| [Lemon Squeezy](/provider/lemon-squeezy/) | Yes. Lists software and SaaS as acceptable | Yes, with license length, activation limits and a License API | 5% + 50 cents, plus listed add-ons |
| [Polar](/provider/polar/) | Yes. Lists software and SaaS, with license keys as a fulfilment method | Yes, with activation limits, expiry, usage quotas and a validation API | Starter 5% + 50 cents. Paid plans lower the rate for a monthly fee |
| [Dodo Payments](/provider/dodo-payments/) | Yes. Welcomes templates, plugins and apps | Yes, as a License Key entitlement. Names desktop apps as a use | 4% + 40 cents for US domestic cards and wallets |

## What each provider says

### Paddle

Paddle's [acceptable use page](https://www.paddle.com/help/start/intro-to-paddle/what-am-i-not-allowed-to-sell-on-paddle) (last updated 13 April 2026 on that page) says Paddle is built for software companies, including B2B SaaS, consumer software and games. Its prohibited list includes device cleaners and antivirus, spyware and keyloggers, and streaming downloaders and content copying. VPN and proxies, and software marketed to repair or improve the performance or security of a device, are listed as restricted categories that need enhanced due diligence. Mac utilities in those areas should check with Paddle first.

License keys: Paddle's [migration guide](https://developer.paddle.com/migrate/plan) says product delivery and license key generation are not handled by Paddle in Paddle Billing, and recommends building this yourself. You listen for Paddle's transaction webhooks, then create and send the key from your own system. Paddle's [help page on Mac trials and licensing](https://www.paddle.com/help/start/intro-to-paddle/selling-a-mac-app-with-trials-and-licensing) describes a Mac SDK for trials and activation, list fulfilment and webhook fulfilment, but the page says it applies only to Paddle Classic.

Fee: 5% + 50 cents per checkout transaction, with no monthly fee, per [Paddle pricing](https://www.paddle.com/pricing). The same page says sellers with products under $10 can contact Paddle for bespoke pricing.

### Lemon Squeezy

Lemon Squeezy's [prohibited products page](https://docs.lemonsqueezy.com/help/getting-started/prohibited-products) lists software and SaaS as acceptable. Its prohibited list includes spyware or parental control apps and any products restricted by its payment processing partners. If you are unsure, the page says to contact support with a description of the product before you start selling.

License keys: Lemon Squeezy can [generate a license key](https://docs.lemonsqueezy.com/help/licensing/generating-license-keys) for each purchase. For one-time products you set a license length and an activation limit. The page's own example is an activation limit of 1 so the software runs on one computer, with a higher priced variant allowing 3. For subscriptions, keys follow the subscription lifecycle. The [License API](https://docs.lemonsqueezy.com/help/licensing/license-api) activates, validates and deactivates keys and is rate limited to 60 requests per minute.

Fees, from the [Lemon Squeezy fees page](https://docs.lemonsqueezy.com/help/getting-started/fees): a platform fee of 5% + 50 cents on the total order value, plus 1.5% for transactions outside the US, 1.5% for PayPal and 0.5% for subscription payments. Sellers with products under $10 can contact sales for custom pricing.

### Polar

Polar's [acceptable use policy](https://polar.sh/docs/merchant-of-record/acceptable-use) (effective October 1, 2026 on that page) says Polar serves software companies, including B2B SaaS, consumer software and games, and lists license keys as one way Polar can fulfil a sale. Its prohibited list includes viruses and spyware, cheating tools such as macros and hacks, third-party content downloaders and unauthorized resale of software licenses.

License keys: Polar's [license key benefit](https://polar.sh/docs/features/benefits/license-keys) supports brandable prefixes, expiry for one-time purchases, automatic revocation when a subscription ends, activation limits such as a number of devices, custom validation conditions and usage quotas. Customers can deactivate activations and rotate a key from Polar's customer portal. Polar recommends validating the key through its API for each session of your app.

Fees, from [Polar fees](https://polar.sh/docs/merchant-of-record/fees): Starter is 5% + 50 cents with no monthly fee. Pro is $20 a month at 3.8% + 40 cents, Growth $100 a month at 3.6% + 35 cents, and Scale $400 a month at 3.4% + 30 cents. International cards add 1.5%. Organizations created before May 27, 2026 keep the Early Member rate of 4% + 40 cents plus 0.5% on subscriptions.

### Dodo Payments

Dodo's [merchant acceptance policy](https://docs.dodopayments.com/miscellaneous/merchant-acceptance) lists "Templates, Plugins & Apps" among the businesses it welcomes, next to SaaS and AI products and digital goods. Its prohibited list includes privacy violations and surveillance tech, and software resale or license flipping.

License keys: Dodo's [license key page](https://docs.dodopayments.com/features/license-keys) lists desktop apps, plugins and CLIs as uses. You create a License Key entitlement with an activation limit, a license length and an optional activation message, then attach it to a product. Keys for one-time purchases follow the license length. Keys for subscriptions have no expiry, follow the subscription status, and are disabled on cancellation. A one-time refund disables the key. Public endpoints activate, validate and deactivate keys. [Dodo pricing](https://dodopayments.com/pricing) lists license keys as included.

Fees, from Dodo pricing: 4% + 40 cents for US domestic cards and wallets, plus 1.5% for international payments and 0.5% for subscriptions. PayPal adds 3%. Refunds cost $1 each.

## Worked examples

Our own arithmetic on the published rates, with no tax added. Lemon Squeezy calculates its fee on the total order value, so tax added at checkout raises the fee. Amounts are rounded to the nearest cent.

### $29 one-time license

| $29 one-time charge | Paddle | Lemon Squeezy | Polar Starter | Polar Early Member | Dodo Payments |
| --- | --- | --- | --- | --- | --- |
| US card | $1.95 | $1.95 | $1.95 | $1.56 | $1.56 |
| Non-US card | $1.95 | $2.39 | $2.39 | $2.00 | $2.00 |

### $5 per month subscription

| $5 monthly charge | Paddle | Lemon Squeezy | Polar Starter | Polar Early Member | Dodo Payments |
| --- | --- | --- | --- | --- | --- |
| US card | $0.75 | $0.78 | $0.75 | $0.63 | $0.63 |
| Non-US card | $0.75 | $0.85 | $0.83 | $0.70 | $0.70 |

How those numbers were built:

- Paddle: 5% + 50 cents on every row.
- Lemon Squeezy: 5% + 50 cents. Subscriptions add 0.5%. Non-US adds 1.5%.
- Polar Starter: 5% + 50 cents. Non-US adds 1.5%.
- Polar Early Member: 4% + 40 cents. Subscriptions add 0.5%. Non-US adds 1.5%.
- Dodo: 4% + 40 cents. Subscriptions add 0.5%. Non-US adds 1.5%.

These fees do not include the Apple Developer Program membership, which you need for a Developer ID certificate.

## Before you apply

- Sign your app with a Developer ID certificate and notarize it, so Gatekeeper lets buyers open it.
- Describe on your site what the app does and what data it accesses. Utilities that clean, protect or speed up a Mac, VPNs and tools that capture other people's data are where provider rules are strictest.
- Plan the license check. Decide how many Macs one key can activate, how often the app validates the key, and what happens when the Mac is offline.
- If you use Paddle Billing, budget time to build key generation and delivery yourself, or pick a provider that issues keys.
- Check country support. Acceptance of the product does not mean your country is supported. See [Lemon Squeezy supported countries](/guides/lemon-squeezy-supported-countries/) and [Dodo Payments supported countries](/guides/dodo-payments-supported-countries/), or [browse by country](/countries/).

We do not give legal or tax advice. This page reports what Apple and each provider publish. Verify with the provider before you rely on any rule or figure.

## Related pages

- [How to charge for a Chrome extension](/sell/chrome-extensions/)
- [Merchant of record for SaaS](/sell/saas/)
- [Merchant of record for digital products](/sell/digital-products/)
- [Merchant of record for AI apps](/sell/ai-apps/)
- [Polar vs Lemon Squeezy](/compare/polar-vs-lemon-squeezy/)
- [Polar vs Dodo Payments](/compare/polar-vs-dodo-payments/)
- [Dodo Payments vs Paddle](/compare/dodo-payments-vs-paddle/)
- [Paddle alternatives](/guides/paddle-alternatives/)
- [All providers](/providers/)
