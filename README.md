# Flow Atelier — Business Process Automation

**Live site:** [flow-atelier.studio](https://www.flow-atelier.studio)

Marketing website for **Flow Atelier**, a studio that designs and builds automated business workflows with **n8n, Make, Zapier, APIs and AI**. The site explains what business process automation is, shows which processes can be automated, and turns visitors into qualified leads through one main call to action: *Describe your process*.

> We sell business outcomes, not a particular tool. n8n, Make and Zapier are implementation technologies.

---

## Highlights

- **Bilingual (EN / UA)** — full native copy in English and Ukrainian on localized routes `/en/` and `/uk/`, with automatic redirect from `/` based on the browser language.
- **Animated hero workflow diagram** — "silk ribbon" connections with running pulses illustrating a real process: *Website form → AI → n8n → CRM → Slack / Email → Reporting*.
- **Content built around real search intent** — business process automation, workflow automation, n8n / Make / Zapier automation, CRM and lead automation, without keyword stuffing.
- **SEO-ready** — semantic HTML, a single H1 with a clear heading hierarchy, canonical URLs, Open Graph / Twitter metadata, `hreflang` (en / uk / x-default) and `FAQPage` structured data.
- **Performance-focused** — static output, CSS inlined into the HTML, non-render-blocking web fonts, optimized WebP images.
- **Responsive** — desktop, tablet and mobile.
- **Flexible lead capture** — the contact form posts JSON to an endpoint set by environment variable: an n8n webhook or Web3Forms, no code changes needed to switch.
- **Honest credibility** — no fabricated clients, testimonials or metrics; examples are clearly labeled as examples.

## Page structure

Hero · Approach · Tech strip · The problem · What we automate · Process example (before / after) · Technologies (n8n vs Make vs Zapier) · Who we help · FAQ · Contact form

## Tech stack

| Area | Tools |
|---|---|
| Framework | [Astro](https://astro.build) 7 (static output, built-in i18n routing) |
| Languages | TypeScript, HTML, CSS |
| i18n | Typed dictionaries `en.ts` / `uk.ts` |
| Forms | n8n webhook or [Web3Forms](https://web3forms.com), configured via env |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

Requires **Node.js 22.12+**.

```bash
git clone https://github.com/yevhenii-priadko/n8n.flow-atelier.git
cd n8n.flow-atelier
npm install
npm run dev       # http://localhost:4321
```

Build and preview the production version:

```bash
npm run build     # output in ./dist/
npm run preview
```

### Environment variables

Copy `.env.example` to `.env` for local testing. In production, set them in **Vercel → Settings → Environment Variables** and redeploy.

| Variable | Description |
|---|---|
| `PUBLIC_FORM_ENDPOINT` | Where the contact form posts its JSON: an n8n Production webhook URL, or `https://api.web3forms.com/submit` |
| `PUBLIC_WEB3FORMS_KEY` | Web3Forms access key. Leave empty when using n8n |

## Project structure

```
├── public/              # Favicons, logo mark, robots.txt
├── src/
│   ├── components/      # Page sections: Hero, Approach, Problem, Services,
│   │                    # ProcessExample, Technologies, WhoWeHelp, Faq, Contact, …
│   ├── i18n/            # en.ts, uk.ts (all site copy) + utils.ts
│   ├── icons/           # Inline SVG icons: brands/ (n8n, Make, Zapier, OpenAI…) and ui/
│   ├── layouts/         # Layout.astro — SEO meta, Open Graph, hreflang, fonts
│   ├── pages/           # en/index.astro, uk/index.astro
│   └── styles/          # global.css
├── astro.config.mjs     # Site URL, i18n locales, inlined stylesheets
└── vercel.json          # Language-based redirect from / to /en/ or /uk/
```

## Roadmap

- [ ] Switch the form to a production n8n workflow (lead → CRM → notification)
- [ ] Dedicated SEO landing pages: `/services/n8n-automation`, `/services/make-automation`, `/services/zapier-automation`, `/services/ai-automation`, `/solutions/crm-automation`, and more
- [ ] `Organization` and `Service` structured data, Open Graph preview image
- [ ] Case studies once verified client work is available

## Team

- **Anton** — concept, product brief and content strategy
- **Eugene** — design implementation, front-end development and deployment

## License

© Flow Atelier. All rights reserved.
