# SEO DNA 2.05 — Attorneys of Pakistan City Service Pages
Updated: 2026-10-19
Status: Approved editorial specification for the working branch, **not** evidence that any page has passed QA or been published.

## Mandatory focus-keyword density (latest instruction overrides former 2% maximum)
- **Minimum: 1.5%**
- **Maximum: 2.2%**
- Aim for natural, accurate, readable copy inside that range; no artificial repetition in lists, repeated headings, or boilerplate.
- For repeatable page QA, calculate the density of the exact primary multiword keyphrase as `100 × (number of exact phrase occurrences × number of words in the phrase) / total words in the substantive visible page body`. Treat case as irrelevant; match words, not substrings. Exclude navigation, footer, widgets, JSON-LD and image metadata from the denominator and numerator. Record the phrase, matched count, word count and calculated percentage in the per-page QA report. Also inspect closely related variants separately for stuffing; do not add variants to the exact-phrase count.
- Titles, one H1, keyword-relevant H2 then H3, and first main-content paragraph opening with focus terms remain mandatory. No duplicated full heading phrases. The H1→H2→H3 hierarchy must make semantic sense; H3 must belong under a relevant H2.
- If density compliance would cause an unnatural or legally inaccurate claim, correct the copy instead of forcing repetitions; flag any unresolved conflict before publication.

## Pages / exact required slugs
Family: `family-lawyers-in-karachi`, `family-lawyers-in-islamabad`, `family-lawyers-in-lahore`, `family-lawyers-in-faisalabad`, `family-lawyers-in-hyderabad`.
Property: `property-lawyers-in-karachi`, `property-lawyers-in-hyderabad`, `property-lawyers-in-faisalabad`, `property-lawyers-in-islamabad`, `property-lawyers-in-rawalpindi`, `property-lawyers-in-lahore`.
Check exact and canonical routes before adding; preserve all existing indexed routes and prevent cannibalization.

## Mandatory contextual links to existing content
- Link Family Lawyers city pages to the existing national family guide using the verified internal route `/family-lawyers-pakistan/`, with natural descriptive anchor such as "Family Lawyers in Pakistan".
- Link Property Lawyers city pages to existing relevant property/civil guidance **only when an existing target URL has been verified**; do not invent a national property-lawyers page.
- Link to relevant existing general city pages (`/lawyers-in-karachi/`, `/lawyers-in-islamabad/`, `/lawyers-in-lahore/`, `/lawyers-in-rawalpindi/` where applicable), without altering existing content until its scope and redirects are checked.
- Contextual, relevant links between new family/property city pages are acceptable; do not automatically link to unrelated marriage pages.

## Legal/editorial standards
- Pakistani statute references, court jurisdiction, fees, property-title checks and city-specific practice must be accurate and reviewed. Distinguish Sindh, Punjab and Islamabad Capital Territory where the applicable framework differs.
- 600–900 substantive words for commercial city pages is the current baseline unless additional legal complexity warrants more. Preserve a distinct service focus for each city. Verify locality names and include them naturally; never imply clients actually come from an area without evidence.
- First-person plural service language, verified advocate details and actual location/contact information. No invented outcomes, guaranteed results, client reviews, office addresses or fees.

## Images and UX
- Every new page: **1–2 fresh unique WebP images**, each different from images on all other pages; optimized size and responsive dimensions. No repeat image on the same page.
- Keyword-relevant filename, ALT, title and media description. No public-facing image captions; never output "Illustration" or "Professional Portrait" beneath an image.
- Check responsive appearance at mobile widths, loading and Lighthouse once a deployable preview exists. Record measured results; do not claim pass without tests.

## Site safety and deployment
- Work in `taxocrate-pk/Attorneys_Of_Pakistan` on branch `work/family-property-city-pages-20261019`, derived from `rebuild/independent-brand-short-urls-20261015`; review via PR prior to merge.
- Preserve all Court Marriage, Online Nikah and Online Marriage page contents, images, slugs and routing.
- Do not edit WordPress or the `Income-taxlawyers` repository for Attorneys.com.pk work.
- The Vercel project `attorneys-of-pakistan` was confirmed to have a READY preview from the above repository; a production custom-domain mapping to attorneys.com.pk has NOT been verified. Do not claim production publication without confirming it.

## SEO DNA 2.06 — Controlling Navigation / Template Amendment (19 October 2026)
- This amendment supersedes earlier conflicting wording in this project brief. The cross-site master is SEO DNA 2.06, derived from the 17 October 2.05 amended master.
- Preserve existing header, footer, primary menu appearance, dropdown/mobile layout, branding, contacts and CTA without redesign or broad refactor.
- Add missing "Family Lawyers" and "Property Lawyers" service-page links inside the existing "Our Services" dropdown or the appropriate existing services subgroup **only after each corresponding page route exists and is tested**. Do not change existing menu labels or remove existing links.
- In the inspected Attorneys Next.js branch, `components/site-header.jsx` creates both desktop/mobile `ServiceLinks` from `lib/routes.js` `pages` entries. Reuse that shared source; test dropdown accessibility and links on desktop, 390px and 360px mobile. This avoids two inconsistent navigation implementations.
- The current keyword-density brief is 1.5% minimum, 2.2% maximum for each newly targeted commercial service page. Legal accuracy and real readability always remain mandatory; report exact calculation.
- This is repository policy documentation, not evidence that the 11 routes, menu additions, Lighthouse testing or production deployment have been completed.

## Faisalabad Office — Owner Correction (19 October 2026)
**Confirmed Faisalabad office in-charge (owner-supplied, 19 October 2026): Rana Shafqat Rasool, Advocate High Court.** Use this name for the Faisalabad Family Lawyers and Property Lawyers pages after ordinary legal-identity QA. The new office address is still pending and must not be guessed.
- **Do not use** either of these obsolete/cancelled Faisalabad addresses in new pages, schema, local CTAs, or image metadata: (1) Chamber No. 6, Jalal Law Chambers, Near Bakhshi Khana, District Courts, Faisalabad; (2) Third Floor, Tanveer Randhawa Building, District Courts, Faisalabad.
- Both were explicitly rejected by the owner. A replacement Faisalabad office address is pending. **Do not invent or publish an office address** until the owner supplies the new one.
- Applies to Family Lawyers in Faisalabad, Property Lawyers in Faisalabad, and any future related page drafts. A city served does not itself establish a verified city office for LocalBusiness schema.
