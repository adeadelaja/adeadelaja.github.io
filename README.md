# Ade Adelaja — Portfolio

Static site. No build step, no framework, no dependencies. Push it and it's live.

---

## Get it online in five minutes

1. Create a **public** repo on GitHub named exactly **`adeadelaja.github.io`** (swap in your real username — the repo name must match your username exactly for the clean URL).
2. Upload everything in this folder to the repo root — `index.html` must sit at the top level, not inside a subfolder.
3. **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**
4. Wait about a minute. Your site is at **`https://adeadelaja.github.io`**.

Via command line instead:

```bash
cd site
git init
git add .
git commit -m "Portfolio v1"
git branch -M main
git remote add origin https://github.com/adeadelaja/adeadelaja.github.io.git
git push -u origin main
```

**Before you push, change one line.** In `assets/js/data.js`, set `github:` to your real profile URL.

To preview locally, just open `index.html` in a browser. It works from the filesystem — no server needed.

---

## How the system works

```
index.html              ← never edit
assets/css/style.css    ← never edit (unless changing the look)
assets/js/render.js     ← never edit
assets/js/data.js       ← ★ EDIT ONLY THIS
images/                 ← photos of you
evidence/               ← screenshots of work
```

**All content lives in `assets/js/data.js`.** Adding a project means adding an object to a list. The HTML regenerates itself. This is deliberate: it means you can update the portfolio in two minutes at 11pm without breaking the layout, which is the only way a portfolio actually stays current.

### Adding a project

Open `assets/js/data.js`, find `work:`, copy an existing block, change the fields:

```js
{
  org: "Company name",
  discipline: "Revenue Operations",
  title: "A short, concrete claim",
  problem: "What was broken. Be specific about the cost of it.",
  system: "What you built. Name the mechanism, the scale, the tools.",
  outcome: "What changed. A number if you have one.",
  stack: ["Tool", "Tool", "Method"],
  evidence: [
    { src: "evidence/my-screenshot.png", alt: "What it shows", caption: "One line of context." }
  ]
}
```

Order matters — the first case study is the one most people read. Keep your strongest at the top.

### Adding an image

Drop the file in `images/` or `evidence/`, then point a `src` at it. Paths are relative: `images/graduation.jpg`, `evidence/dashboard.png`.

**Leave `src` as `""` and the site renders a labelled dashed placeholder** showing what belongs there. Nothing breaks, and you get a visible to-do list on your own site. Fill them in as you capture them.

### Adding a certificate or badge

Add to `credentials:`. If you have a verification link (Credly, Badgr, LinkedIn), put it in `url:` and the name becomes a link. Leave `url: ""` for plain text.

---

## Rules that keep this credible

**Never publish real client data.** No real account names, no real revenue figures, no untouched screenshots from a client system. Rebuild the *structure* with invented numbers — that shows the entire skill and leaks nothing. One breach costs more than the whole portfolio earns.

**Numbers must match your CV.** Both generate from the Career Master File. If a figure changes, change it there first, then here. A recruiter who spots a mismatch stops trusting both documents.

**Don't add a project without an outcome.** A case study with no "what changed" is a description of activity. The portfolio is for proof.

---

## Maintenance

This should need touching about twice a year. The CV is the fast-moving layer — it gets tailored per application. The portfolio holds proof, and proof doesn't expire.

Update it when: you finish something worth showing, a number changes, or you capture new evidence.
