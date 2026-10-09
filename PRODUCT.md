# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, deployed to GitHub Pages (matifl3.github.io/Portafolio). Decided by the user; offered alternatives were Angular, React/Next and delegated.

## Users

- Primary: recruiters and technical leads (Argentina first, international second) scanning a fullstack developer's portfolio to decide in seconds whether to shortlist and contact him.
- Secondary: freelance clients with a concrete web project (restaurants, real estate, small businesses) evaluating whether he can deliver.

Both arrive skeptical, on mobile or desktop, and need proof before they will reach out.

## Product Purpose

Personal portfolio of Matías Rodrigo Felissia, fullstack/backend developer (Mar del Plata, AR). It presents his real work and drives both audiences to one success: understand his profile, believe the work is real, and contact him. Success = visitor knows who he is, sees verifiable proof, and uses a visible contact action (email, GitHub, phone).

## Positioning

A developer whose proof is production systems with real numbers: a simracing league platform (~180 endpoints, 27+ related tables, Elo/SR rating engine, JWT + Steam OAuth, deployed on Vercel + Render), a vet clinic system with role-based security and integrated e-commerce, and real freelance clients. The mechanism is evidence-first: show the running system and its scale instead of claiming skills.

## Operating Context

- Static hosting on GitHub Pages; bilingual ES/EN with a visitor-facing language toggle covering all copy.
- Evidence and proof live in public GitHub repos (github.com/matifl3) and live deploys: lfmn.vercel.app, tp-vetcare-livid.vercel.app, costa-mia.vercel.app.
- CV is a downloadable PDF shipped alongside the site.

## Capabilities and Constraints

- One static site: HTML/CSS/vanilla JS. No framework, no backend, no required build step.
- Bilingual parity: ES and EN carry the same content; no mixed-language screens.
- Required sections: profile/hero, projects, skills, education, experience, contact, CV download.
- No fabricated claims: no invented metrics, testimonials, clients, logos, or URLs. Projects without a confirmed public URL are shown without one (WEC ETL); projects with only a repo show the repo (Malaquita, Resto Barrabrava).
- Must remain readable with JS disabled apart from the language toggle.

## Brand Commitments

- Name: Matías Rodrigo Felissia. GitHub: matifl3. Location: Mar del Plata, Buenos Aires, Argentina.
- Contact of record: matifelissia2205@gmail.com, 223 539-1618.
- No visual or aesthetic constraints were pinned by the user; the visual world is open.

## Evidence on Hand

- `Curriculum Vitae - Matías Felissia.pdf` (shipped as `assets/CV-Matias-Felissia.pdf`) — full CV text (profile, education, skills, 6 project descriptions).
- `Proyeectos.txt` — 4 repo URLs: pokemon2 (consola C), LFMN (simracing), tpVETCARE (veterinaria), proyectoprogra1 (tp universitario).
- READMEs fetched from GitHub: LFMN (full feature list, stack, deploy) and tpVETCARE (stack, roles, team).
- Live deploys confirmed in repo metadata: lfmn.vercel.app, tp-vetcare-livid.vercel.app.
- Absences future work must not fabricate: no client testimonials, no press, no professional photos of Matías, no downloadable logo, no confirmed public URL for WEC ETL, no confirmed avatar asset beyond the GitHub avatar.

## Product Principles

1. Proof over claims — every statement is backed by a real project, a real number, or a link.
2. Bilingual parity — ES and EN are complete translations of each other, toggled, never mixed.
3. Weightless — instant static loads; content readable without JavaScript.
4. Contact is the close — every section funnels toward a real, visible way to reach Matías.
5. Honest scope — nothing is invented: no fake clients, metrics, testimonials, or URLs.

## Accessibility & Inclusion

No product-specific requirement was established; baseline expectations are semantic structure, keyboard access, visible focus, sufficient contrast, and respect for prefers-reduced-motion.
