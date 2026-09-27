# Naixien website

Static marketing site for **Naixien: The African Business Opportunity Network**.

This repository ships a GitHub Pages-ready, multi-page HTML/CSS/JS site. No backend, auth, scoring engine, marketplace or payments.

## Pages

| Path | Purpose |
| --- | --- |
| `index.html` | Home: positioning, pillars, primary CTA |
| `readiness.html` | Score explanation, 8 dimensions, sample mock, disclaimer |
| `resources.html` | Five playbook teasers |
| `network.html` | Coming-next NED / partner interest |
| `about.html` | Mission, audiences, free-value-first |
| `join.html` | Waitlist / 100 African Businesses Challenge |
| `privacy.html` / `terms.html` | Legal stubs |

## Local preview

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## Waitlist form

Default action is **mailto** (`hello@naixien.com`) via `assets/js/main.js`.

To swap to a free Formspree (or similar) endpoint later:

1. Create a form endpoint.
2. On the `<form>` in `join.html`, set `data-form-endpoint="https://formspree.io/f/YOUR_ID"`.
3. Set `data-form-mode="fetch"` (or remove `data-form-mode="mailto"`).

## GitHub Pages

**Production URL:** [https://naixien.com](https://naixien.com)

The default Pages host [https://naixien.github.io/website/](https://naixien.github.io/website/) may still work alongside the custom domain.

Custom domain is set via the root `CNAME` file (`naixien.com`). DNS (apex A/AAAA → GitHub Pages; `www` CNAME → `naixien.github.io`) is configured at the registrar. After the domain verifies in **Settings → Pages**, enable **Enforce HTTPS** if it is not already checked (GitHub may need a short wait to issue the certificate).

### Enable Pages (if not already on)

1. Prefer making the repository **public** for free public GitHub Pages.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` / folder: `/ (root)`.
5. Save. Site usually appears within a few minutes.

## Brand note

Locked tagline: **The African Business Opportunity Network.**

Hero CTA: **How ready is your business?** → readiness waitlist.
