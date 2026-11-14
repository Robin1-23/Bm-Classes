# SEO Audit — bm-classes.com

**Date:** 14 Nov 2026 · **Business type:** Local education (IIT JEE / NEET / Chemistry coaching, 3 centres in Gurugram) · **Stack:** Next.js on Vercel · **Pages in sitemap:** 9

## SEO Health Score: 71 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 82 | 18.0 |
| Content Quality | 23% | 62 | 14.3 |
| On-Page SEO | 20% | 71 | 14.2 |
| Schema / Structured Data | 10% | 72 | 7.2 |
| Performance (CWV) | 10% | ~70* | 7.0 |
| AI Search Readiness | 10% | 70 | 7.0 |
| Images | 5% | 62 | 3.1 |
| **Total** | | | **70.8** |

\*Performance is an estimate from page structure. PageSpeed API was rate-limited (no API key), so there is no measured LCP / INP / CLS.

Supplementary scores (not weighted): Local SEO ~58 (estimate) · SXO gap ~58 · Agent-UX 100/100 · Backlinks: insufficient data (domain registered 11 Aug 2026, not yet in Common Crawl).

## Summary

The technical base is solid. Every page is server-rendered, returns 200, has its own canonical, a unique title and structured data, and the sitemap is clean. Crawlers aren't held back by anything technical.

The site is held back by **trust and credibility**:
1. Several headline claims are stronger than what the site itself backs up.
2. The JEE and NEET pages are titled as full-course coaching, but the site only teaches Chemistry.
3. The site is three months old and almost nothing outside it mentions the brand.

In Google results for "JEE/NEET coaching Gurgaon", directories, listicles and big-chain location pages take most of the top 20. bm-classes.com does not appear in the top 20 today.

## Critical
None. Nothing is blocking indexing.

## High

### H1. The "former HODs of FIITJEE & VMC" claim is not backed by the faculty bios
- **Evidence:** the claim appears in the homepage meta description, the /faculty title ("Faculty: Former HODs of FIITJEE & VMC"), /why-us, and the city pages ("A real class with the HOD").
- **What the bios say:** "Academic Head, VMC Gurgaon", "faculty, FIITJEE Kalu Sarai", "senior faculty, FIITJEE". None of them says FIITJEE HOD.
- **Fix:** use each person's exact title everywhere. This is a trust problem for quality raters and AI answer engines, and possibly a trademark problem.
- **How to tell it failed:** a grep of the site for "HOD" still finds claims the bios don't support.

### H2. The JEE and NEET pages promise full coaching but only Chemistry is taught
- **Evidence:** /jee-coaching-gurgaon is titled "Best IIT JEE Coaching…". Physics appears only inside the JSON-LD `knowsAbout` list, never in the visible content. The organization schema lists Physics, Mathematics and Biology.
- **Fix, choose one:**
  - Retarget the pages to "IIT JEE Chemistry coaching in Gurgaon" and "NEET Chemistry coaching in Gurgaon".
  - Or state plainly near the top of the page that only Chemistry is taught.
- **Also:** correct `knowsAbout` in the schema.
- **Why it matters:** a mismatch between search intent and the page leads to quick bounces back to Google, and it undermines trust in everything else the page says.

### H3. Rank results can't be verified
- **Evidence:** home and /results list JEE Advanced AIR 18 / 22 / 52 / 102 / 350 / 1146 / 2043 with no student name, year or proof. Only the JEE Main percentiles have names attached. /results is titled "JEE & NEET Results" but has no NEET results.
- **Fix:**
  - For each rank, add the student name, year, exam and a link to the scorecard (with consent).
  - Add NEET results, or remove "NEET" from the page title.
- **Leading indicator:** AI answer engines start quoting specific results when asked about BM Classes.

### H4. Almost no presence on other websites (biggest ranking limiter)
- **Evidence:**
  - The domain is 3 months old and is not in Common Crawl.
  - There are no listings on Justdial, Sulekha, UrbanPro, Shiksha or Collegedunia.
  - "BM Classes" collides with unrelated brands in search results.
  - About 65% of the top 20 for JEE/NEET Gurgaon queries are directories and listicles.
- **Fix:**
  - Claim listings on Justdial, Sulekha, UrbanPro, Shiksha and Collegedunia.
  - Create tutor profiles for "Chemistry By Bighnaraj Sir" on UrbanPro and FindMyGuru, since the chemistry query is about 90% tutor marketplaces.
  - Pitch the "top coaching in Gurgaon" listicles.
- **Leading indicator:** count of referring domains (via Bing Webmaster Tools, which is free) and branded-search impressions in Google Search Console.

### H5. No pages for individual centres, and only one Google Business Profile
- **Evidence:**
  - Only the Sector 45 centre has a map embed, and it's a lat/long embed rather than a place link.
  - Malibu Towne and Sector 46 have no map, no hours, and only partial addresses.
  - The 4.9★ / 65 reviews belong to one Google listing named "Chemistry By Bighnaraj Sir", which doesn't match the "BM Classes" name used on the site.
- **Fix:**
  - Create /centres/sector-45, /centres/malibu-towne and /centres/sector-46. Give each a full address, map, hours, photos and its own LocalBusiness schema.
  - Create a Google Business Profile for each staffed centre.
  - Use the same brand name on the website and on Google.
- **Depends on:** S1 below (schema for each centre).

### H6. Stale course dates
- **Evidence:** every Course `startDate` in the schema (10 Oct and 10 Nov 2026) is in the past, and the only course card on the JEE and NEET pages has already started.
- **Fix:**
  - List upcoming batches: the 2-year Class 11 programme, the dropper batch and the next start dates.
  - Use `courseSchedule` for courses that run on a rolling basis.

### H7. Images on the JEE page aren't optimised, and it has no social preview
- **Evidence:**
  - /jee-coaching-gurgaon preloads bm_sir.jpg (104 KB), konika_mam.jpg (182 KB) and chumki_mam.jpeg (70 KB). That's 356 KB of raw JPEG displayed at 40–64 px, and the preloads compete with the main image.
  - The page has no `og:image`.
- **Fix:**
  - Switch to `next/image` with `sizes` set, and drop the preloads.
  - Add `openGraph.images` to the route metadata.

## Medium

| # | Issue | Fix |
|---|---|---|
| M1 | No fees shown anywhere ("shared on the call"), which is the parent persona's top question (parent persona scored 74, dropper 50) | Add a fee range for each course, plus a dropper batch section |
| M2 | City landing pages are thin: about 315–400 words of main content, the same 7 H2s, 30–39% copy overlap | Add a syllabus, test schedule, timings, subject-specific results and neighbourhood coverage (Sushant Lok, DLF Ph 4, Golf Course Rd) |
| M3 | H1s on /programs, /why-us, /results, /faculty and /contact are slogans with no keywords ("Small rooms. Big ranks.") | Put the topic and city in each H1 and keep the slogan as a subheading |
| M4 | 7 of 9 meta descriptions run over 160 characters | Trim to 150–155 characters |
| M5 | Every H2 and review appears twice in the HTML (sr-only copy plus aria-hidden animated copy), so text extractors read "Ranks speak. Parents agree.Ranks speak. Parents agree." Split H1 spans run together ("coachingin") | Use one text node, with `aria-label` on the animated wrapper; add a space between the H1 spans |
| M6 | Redirect chain: http://bm-classes.com → https://bm-classes.com → https://www.bm-classes.com | In Vercel domain settings, redirect the apex straight to `https://www.` |
| M7 | Missing security headers: CSP, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, frame-ancestors. HSTS has no `includeSubDomains`/`preload`. `Access-Control-Allow-Origin: *` is sent on HTML | Add them via `headers()` in next.config |
| M8 | Faculty page is thin (480 words), two teachers are listed without surnames, there are no degrees, and the Person schema has no `alumniOf`/`sameAs` | Expand the bios and add LinkedIn and YouTube channel links |
| M9 | Each centre in the schema is a bare `department` with no @id, geo, hours or URL | Make each centre its own LocalBusiness node with `parentOrganization` (see S1) |
| M10 | Homepage HTML is 244 KB, and the hero srcset goes up to 3840 w | Trim the serialized RSC props, cap `deviceSizes` at about 1200, add AVIF/WebP |
| M11 | 57 of 82 images site-wide have empty alt text (mostly repeated teacher avatars) | Add alt text to one avatar per cluster and mark the rest `aria-hidden` |
| M12 | Forms rely on placeholders only, with no `<label>`/`aria-label` (an accessibility issue that also affects agents) | Add labels plus `name` and `autocomplete` attributes |
| M13 | `sameAs` links a single YouTube *video* and a Facebook share URL | Link the YouTube channel and Facebook page instead, and add Justdial/UrbanPro once listed |

## Low
- The footer links to `/admin` on every page, and that URL returns 200. Remove the link and add noindex to the admin page.
- The sitemap `lastmod` is the same build timestamp for all 9 URLs. Use real modification dates or drop it.
- The `Host:` line in robots.txt is non-standard, and the per-bot groups repeat each other. It's harmless; tidy it up.
- The logo is a lazy-loaded 17 KB JPG above the fold. Make it eager and convert it to SVG or WebP.
- Image filenames mix case and underscores (CELEBRATION_PHOTO.jpg). Use lowercase, hyphenated names with keywords.
- The H1 on the JEE page has weak colour contrast.
- There is no VideoObject schema for the student video reviews.
- FAQPage schema exists on 4 pages. It's harmless, but FAQ rich results were retired on 7 May 2026, so don't expect anything from it in search results.
- Optional additions: a Content-Signal line in robots.txt, and `llms-full.txt` (llms.txt already exists and is fine).

## What's working
- Every page is server-rendered with a self-referencing canonical, a unique title, one H1 and `index,follow`, and is cached on the CDN (time to first byte about 0.2 s).
- The sitemap is valid and complete, and unknown URLs return a real 404.
- robots.txt deliberately allows the AI search and training bots, and llms.txt is well formed.
- Name, address and phone are consistent across page text, `tel:` links and JSON-LD.
- The schema covers a lot: EducationalOrganization, Course/CourseInstance, Person, BreadcrumbList, and no self-serving review markup.
- The mobile layout is good: what/where/CTA are visible above the fold, a sticky Call/WhatsApp/Apply bar, and no intrusive popups.
- FAQ answers are written answer-first and are easy for AI tools to quote.

## Action plan (in dependency order)

**This week (content and copy only, no new pages):**
1. Fix the claims that don't match: HOD wording (H1) and Chemistry-only scope (H2), including `knowsAbout` in the schema.
2. Add proof to the results, and fix or remove the NEET results title (H3).
3. Update course dates and list upcoming batches (H6), and add fee ranges (M1).
4. Remove the `/admin` footer link and trim the meta descriptions (M4).

**Next 2 weeks (code):**
5. Fix images on the JEE page and add og:image (H7), plus the homepage image limits (M10) and alt text (M11).
6. De-duplicate the H2 and review markup and fix the H1 spacing (M5); add form labels (M12).
7. Fix the redirect chain in Vercel and add the security headers (M6, M7).
8. Rename slogan H1s to keyword H1s (M3).

**This month (local and authority):**
9. Create schema for each centre, then the 3 centre pages, then a Google Business Profile per centre with a matching name (S1 → H5).
10. Get listed on Justdial, Sulekha, UrbanPro, Shiksha and Collegedunia, and create tutor profiles for BM Sir (H4).
11. Expand the city pages and the faculty page (M2, M8).

**Track (no re-audit needed):**
- Google Search Console: impressions for "jee chemistry coaching gurgaon", "neet chemistry gurgaon", and branded queries.
- Google Business Profile: calls, direction requests, and review count/velocity for each centre.
- Bing Webmaster Tools: referring-domain count.
- Re-run Common Crawl after the Q1 2027 release.

## Not measured in this audit
- Field data for Core Web Vitals (LCP/INP/CLS). Set up a Google API key and re-run `/seo google`.
- Live Local Pack and Google Business Profile metrics.
- Referring domains and anchor text (needs Moz, Bing or DataForSEO).
- Citation listings could not be fully confirmed because a search engine showed a bot challenge.
