# Icons

Used via `src/components/Icon.astro` (inlined at build time, no runtime JS).

- `ui/` — [Lucide](https://lucide.dev) (lucide-static 1.52.0), ISC licence. Usage: `<Icon name="search" />`
- `brands/` — [Simple Icons](https://simpleicons.org) 16.34.0, CC0. Usage: `<Icon name="brand:n8n" />`

Add an icon: copy the .svg from lucide.dev / simpleicons.org into the matching folder, file name = icon name.

## Brand logos — not in Simple Icons

OpenAI (ChatGPT) and AWS were removed from Simple Icons at the brand owners' request.
Download the official SVGs from their brand pages and save them as:

- `brands/openai.svg` — https://openai.com/brand
- `brands/aws.svg` — https://aws.amazon.com/co-marketing/

Until then `TechLogo` shows a text wordmark for them.

Brand logos are trademarks of their owners: use them only to show the services we integrate with,
don't recolour beyond the owner's palette, don't distort.
