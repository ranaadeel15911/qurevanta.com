# QureVanta Healthcare — qurevanta.com

Marketing site and resource hub for QureVanta Healthcare (medical billing and revenue cycle management).
React 19 + Vite + TypeScript, deployed on Vercel.

## Commands

```bash
npm install
npm run dev       # local dev server
npm run build     # type-check, build, then prerender every page (scripts/prerender.mjs)
npm run lint
```

## How pages reach Google

`npm run build` renders every route to its own static HTML file (full content, title, description,
canonical, Open Graph and JSON-LD), plus `404.html`, `sitemap.xml`, `robots.txt` and — when AdSense is
configured — `ads.txt`. `vercel.json` turns on `cleanUrls`, so `dist/about.html` is served at `/about`.
Unknown URLs get a real 404 status.

Page titles and descriptions live in `src/seo.ts`. A new route needs an entry there (and in `App.tsx`).

## Content

- **Articles:** `src/content/blog/*.md` — frontmatter (`title`, `description`, `category`, `date`,
  `image` = Unsplash photo ID, `services` = related service slugs) followed by Markdown. A new file
  automatically appears on `/resources`, in the sitemap, and at `/resources/<file-name>`.
- **About and legal pages:** `src/content/pages/*.md`.
- **Service and specialty copy:** `src/siteData.ts` and `src/pageContent.ts`.

Supported Markdown: `##`/`###` headings, paragraphs, `-` and `1.` lists, `>` notes, `**bold**`, `*italic*`,
`[links](/path)`.

## Environment variables

See `.env.example`. Set them in Vercel → Settings → Environment Variables and redeploy.

| Variable | Purpose |
|---|---|
| `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_API_KEY` | Override the Firebase project used for form submissions (defaults to `qurevanta`). Leads are saved to the Firestore `leads` collection. |
| `VITE_GOOGLE_SITE_VERIFICATION` | Search Console HTML-tag verification |
| `VITE_ADSENSE_CLIENT` | AdSense publisher ID (`ca-pub-…`): adds the ownership meta tag and `ads.txt` |
| `VITE_ADSENSE_SLOT_IN_ARTICLE`, `VITE_ADSENSE_SLOT_END_OF_ARTICLE` | Ad units shown on articles (after the 2nd paragraph, and at the end) |

### Firebase setup (form)

1. Create a project at console.firebase.google.com, add a **Web app**, and copy `projectId` and `apiKey`.
2. Build → **Firestore Database** → Create database (production mode).
3. Firestore → **Rules**: paste `firestore.rules` and publish. It only allows creating leads with the
   expected fields; nothing can be read from the browser.
4. Read submissions in Firestore → `leads`.

Each submission is also emailed to info@qurevanta.com through Web3Forms (free plan). Create an access key
at web3forms.com with info@qurevanta.com and set it as `VITE_WEB3FORMS_KEY` (or as the default in
`src/leads.ts`). Without a key, submissions are still saved to Firestore.

## AdSense launch checklist

1. Deploy, then confirm that `/about`, `/resources/cpt-99214-explained`, `/sitemap.xml` and `/robots.txt`
   return 200 and that `/does-not-exist` returns 404.
2. **Search Console:** add a Domain property for `qurevanta.com` (DNS verification), or set
   `VITE_GOOGLE_SITE_VERIFICATION`. Submit `https://www.qurevanta.com/sitemap.xml`. Request indexing for
   the homepage and key pages, then wait until pages show as indexed.
3. **AdSense:** sign up at adsense.google.com with `qurevanta.com`. Set `VITE_ADSENSE_CLIENT` in Vercel,
   redeploy, and choose the meta-tag verification method. Check that `/ads.txt` is live, then request review.
4. **Privacy & messaging:** in AdSense, publish the Google-certified European regulations (GDPR) consent
   message for EEA/UK/Swiss visitors.
5. **After approval:** create two display ad units, set the slot variables, and redeploy. If you turn on
   Auto ads, keep it limited to article pages (Auto ads → URL exclusions for `/services`, `/contact`,
   `/free-audit`, and the homepage), so ads don’t compete with the lead forms.
6. Keep publishing original articles regularly.
