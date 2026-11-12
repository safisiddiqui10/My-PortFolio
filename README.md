# Safi Siddiqui — Portfolio

A personal portfolio site built with React and Vite, live at <https://safisiddiqui.vercel.app>.

The homepage is a single scrolling page: Hero, About and Education, Skills, Projects, Certifications and Contact. Three more pages list everything the homepage summarizes: all skills, all projects (with optional overviews and highlights) and all certificates. The site has a light/dark theme and a mobile menu.

It was migrated from a single static `index.html`; the original files are kept in [`legacy/`](legacy/) for reference.

## Tech stack

| Tool | Purpose |
| --- | --- |
| React 19 (JSX) | UI components |
| React Router 8 | Pages (`createBrowserRouter`), scroll restoration |
| Vite | Dev server and production build |
| Tailwind CSS 3 (PostCSS) | Utility classes, compiled at build time |
| lucide-react 0.469.0 | Icons |

## Getting started

Requires Node.js 20.19+ or 22.12+ (a Vite 8 requirement).

```bash
npm install       # install dependencies
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Pages

| URL | Page |
| --- | --- |
| `/` | Homepage (all sections) |
| `/skills` | Every skill, by category |
| `/projects` | Every project, with overview and highlights when provided |
| `/certifications` | Every certificate |
| anything else | "Page not found" (marked `noindex`) |

Routes are defined in `src/router.jsx`. When you add one, also add it to `ROUTES` in `vite.config.js` so it appears in the sitemap.

Navbar, mobile-menu and footer links always point at homepage sections (`/#about` and so on). On the homepage they smooth-scroll; from another page they open the homepage at that section.

## Deployment (Vercel)

The site is a single-page app, so every URL must serve `index.html`. `vercel.json` does this with a rewrite; real files such as PDFs and images are still served directly. Without the rewrite, refreshing `/projects` would show a 404.

In the Vercel project settings, the framework preset should be **Vite** (build command `npm run build`, output directory `dist`).

The site's public URL is set once, as `SITE_URL` in `vite.config.js`. It's used for the canonical URLs, link-preview tags, `sitemap.xml` and `robots.txt` (both generated at build time).

## Project structure

```text
├── index.html                 # HTML shell: SEO and link-preview tags, theme pre-paint script, fonts
├── vercel.json                # SPA rewrite for direct URL access
├── public/                    # Static files, served as-is
│   ├── favicon.png            # 64×64 (apple-touch-icon.png: 180×180)
│   ├── og-image.jpg           # 1200×630 image shown in link previews
│   ├── Profile/               # Portrait (headshot.webp is served, headshot.jpeg is the fallback)
│   ├── Resumes/cv/            # Resume PDFs
│   └── Certificates/          # Certificate PDFs
├── src/
│   ├── main.jsx               # Entry point; imports styles in cascade order
│   ├── App.jsx                # RouterProvider
│   ├── router.jsx             # Route table
│   ├── pages/                 # HomePage, SkillsPage, ProjectsPage, CertificationsPage, NotFoundPage
│   ├── components/
│   │   ├── layout/            # Layout (shell with <main>), Navbar, Footer, ScrollToTop
│   │   ├── sections/          # Homepage sections, incl. Experience (hidden)
│   │   ├── cards/             # ProjectCard, CertificateCard
│   │   ├── forms/             # ContactForm
│   │   └── common/            # Section, SectionTitle, ButtonLink, TextLink, SectionLink, PageHeader,
│   │                          # SkillBand, SocialLinks, Timeline, ThemeToggle, SkipLink, IconSprite
│   ├── assets/icons/          # Self-hosted Hugging Face logo
│   ├── data/                  # All site content (edit these to update the site)
│   ├── services/              # contact.js: contact-form delivery (EmailJS or email app)
│   ├── hooks/                 # useTheme, usePageMeta, useScrollThreshold, useActiveSection
│   ├── utils/                 # cn, asset, scroll helpers
│   └── styles/                # variables.css (theme tokens), global.css (custom CSS), tailwind.css
├── legacy/                    # Original static site (reference only, not built)
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js             # SITE_URL, sitemap/robots generation
```

## Editing content

Content lives in `src/data/`, separate from the components:

| To change… | Edit |
| --- | --- |
| Name, role, description, email, location, resume file | `src/data/site.js` |
| Navigation links | `src/data/navigation.js` |
| Social profiles | `src/data/socialLinks.js` |
| About text, focus areas, education | `src/data/about.js` |
| Skills | `src/data/skills.js` |
| Projects | `src/data/projects.js` |
| Certificates | `src/data/certifications.js` (put the PDF in `public/Certificates/`) |
| Experience (currently hidden) | `src/data/experience.js` |

**What the homepage shows.** The homepage stays short; the other pages list everything:

- Skills: the homepage shows 4 colored bands; each band's `categories` lists which skill categories it shows. `/skills` lists every category in `skillCategories`, in order. To add a skill, add it to its category; to add a category, add it to `skillCategories` (and to a band's `categories` if it should also appear on the homepage).
- Projects: projects with `featured: false` appear only on `/projects`.
- Certificates: only certificates with `featured: true` appear on the homepage.

**Project details.** Each project needs a unique `slug`. `liveUrl` and `repoUrl` add Live demo and Source code links to its card everywhere; until then it shows "Links coming soon". `overview` (paragraphs) and `highlights` (bullet points) appear on the `/projects` page only.

**Showing the Experience section:** uncomment `<Experience />` (and its import) in `src/pages/HomePage.jsx`, then uncomment the Experience entry in `src/data/navigation.js`.

**Tailwind classes in data files** must be written out in full, for example `'bg-pink/30'`. Don't build them from parts like `` `bg-${color}` ``, because Tailwind finds classes by scanning the source text at build time.

## Notes

- **SEO.** `index.html` holds the site-wide description, canonical URL, Open Graph/Twitter tags (with `og-image.jpg`) and Person structured data. LinkedIn and other link-preview crawlers don't run JavaScript, so every URL shares these previews. `usePageMeta` sets each page's title, description and canonical URL in the browser, which Google does pick up.
- **Accessibility.** The first Tab press reveals a "Skip to content" link that moves focus to `<main>`. The mobile menu button's label switches between "Open menu" and "Close menu", and Escape closes the menu. The active nav link has `aria-current`.
- **CSS order matters.** `src/main.jsx` imports `global.css` before `tailwind.css`, matching the original page's cascade.
- **Theme.** A small inline script in `index.html` applies the saved or system theme before React loads, so the wrong theme never flashes. `useTheme` handles toggling and saving it.
- **Design system.** One spacing scale for every section (`Section` and `HEADING_GAP` in `components/common/Section.jsx`). Text colors are tokens in `styles/variables.css`; every text color meets WCAG AA contrast (4.5:1) in both themes.
- **Contact form.** With EmailJS configured, messages are delivered and the visitor sees a confirmation (or an honest error with your email address). Without it, the form opens the visitor's email app with the message filled in. To enable EmailJS, set the three variables in [`.env.example`](.env.example) in your local `.env` and in Vercel → Settings → Environment Variables, then redeploy.
