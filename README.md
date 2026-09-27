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
| `opportunity-stack.html` | Founding waitlist for partner, member and Naixien software offers |
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

Intended public URL after Pages is enabled on `main` (root):

**https://naixien.github.io/website/**

### Enable Pages (if not already on)

1. Prefer making the repository **public** for free public GitHub Pages.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` / folder: `/ (root)`.
5. Save. Site usually appears within a few minutes.

### Custom domain (later)

Add a `CNAME` file at the repo root with your domain, then configure DNS (A/ALIAS or CNAME) per [GitHub Pages custom domain docs](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Brand note

Locked tagline: **The African Business Opportunity Network.**

Hero CTA: **How ready is your business?** → readiness waitlist.
