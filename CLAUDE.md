# CLAUDE.md — Mario's Personal Website

## Project description
Personal website in plain HTML/CSS/JS, no frameworks. Deployed on GitHub
Pages (no backend). Replaces a previous Webflow build (jQuery, heavy
runtime); that dependency has been fully removed and must not be
reintroduced.

## Tech stack
- Semantic HTML, single page with anchor-based navigation
- `styles.css`: plain CSS, no third-party frameworks
- `script.js`: vanilla JavaScript (no jQuery). Handles the mobile menu and
  the contact form (opens a draft email via `mailto:`, since GitHub Pages
  cannot process server-side forms)

## Design system (see DESIGN.md)
Apple-inspired, generated with `getdesign`:
- Primary color: Action Blue `#0066cc`
- Typography: Inter (SF Pro as reference)
- Alternating light/dark tiles per section
- Pill-shaped buttons
Any new component should follow these tokens before improvising new styles.

## Content rules (editorial)
- Do not show publication count, h-index, or citation numbers (deliberate
  choice for sobriety)
- Work experience and education: chronological order, oldest to most recent
- Publications section: maximum 3, most relevant only (JLT, OFC, ECOC, ACP)
- Experience/education/publication details must match LinkedIn, Google
  Scholar, and the real CV, never invented or approximated
- Include the Integrated Photonics microcredential (UMA, in progress) and
  the research stay at INRS (Montreal), with their corresponding logos

## Site structure
Single page (`index.html`). Do not recreate `about.html` as a separate
page: all bio, skills, experience, and education content is integrated
after Publications, navigable via anchors.

## Deployment
GitHub Pages. Before considering any change finished, verify in the browser
that there are no console errors, images load correctly, and the design is
responsive.