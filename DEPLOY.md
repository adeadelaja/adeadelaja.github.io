# Deploying — from this folder straight to your live site

**You do not need the old portfolio folder.** It was only a local copy. The real repository lives on GitHub, and this folder can become your new working copy in about two minutes.

Run everything below **in the VS Code terminal, inside this folder.**
(In VS Code: **Terminal → New Terminal**. Check you're in the right place — the prompt should end in `ade-portfolio-site`, and `ls` should list `index.html`, `assets`, `images`, `evidence`.)

---

## First — is Git installed?

```powershell
git --version
```

- **Prints a version?** Carry on.
- **"not recognised"?** Install from **git-scm.com/download/win**, accept every default, then close and reopen VS Code.

---

## The five commands

```powershell
# 1. turn this folder into a git repository
git init
git branch -M main

# 2. point it at your GitHub repo
git remote add origin https://github.com/adeadelaja/adeadelaja.github.io.git

# 3. stage everything and commit
git add -A
git commit -m "Portfolio v4 - evidence-led rebuild"

# 4. replace what's on GitHub with what's here
git push --force origin main
```

**Mac / Linux:** identical, but the first line is `cd ~/Downloads/ade-portfolio-site`.

---

## What `--force` does, plainly

It **overwrites everything currently on GitHub** with what's in this folder. The old `index.html`, old `data.js`, old `assets/` — gone, replaced, in one step. You don't have to delete anything by hand.

It also **discards the old commit history.** For a personal portfolio that's completely fine, and it's what you want here. Just know it's a one-way door: after this, the old versions aren't recoverable from GitHub.

**You only use `--force` this once.** From now on it's `git push` on its own.

---

## Signing in

The first push will ask you to authenticate.

- **A browser window opens →** sign into GitHub, approve, done. This is the normal path on Windows.
- **It asks for a username and password in the terminal →** the "password" is **not** your GitHub password. Go to **github.com → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token**, tick the **`repo`** scope, copy the token, and paste that as the password. Save it somewhere — it's shown once.

---

## Turn Pages on (once only)

**github.com/adeadelaja/adeadelaja.github.io → Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save.**

About a minute later you're live at **https://adeadelaja.github.io**.

If it was already enabled, skip this — the push alone is enough.

---

## From now on, this folder is your portfolio

Every future change is the same three lines:

```powershell
git add -A
git commit -m "Added graduation photos"
git push
```

Drop a photo in `images/`, run those three, and it's live in a minute. **No `--force` ever again.**

While you're working, use **Live Server** (VS Code → Extensions → "Live Server" by Ritwick Dey → right-click `index.html` → Open with Live Server) so you see each change as you save. Push once at the end of a session, not after every file.

---

## If something goes wrong

**"remote origin already exists"**
The folder was already linked. Fix it:
```powershell
git remote set-url origin https://github.com/adeadelaja/adeadelaja.github.io.git
```

**"failed to push some refs" / "rejected"**
That's what `--force` is for — check you included it on the first push.

**"Author identity unknown"**
Git needs to know who you are, once:
```powershell
git config --global user.name "Ade Adelaja"
git config --global user.email "adesegunadelaja28@gmail.com"
```
Then re-run the commit and push.

**Site is live but looks like the old one**
Hard-refresh: **Ctrl+Shift+R**. GitHub Pages caches aggressively and this is nearly always the cause. If it persists, check the repo's **Actions** tab — a red mark means the build failed.

**Pushed, but the page is blank**
Check `index.html` is at the **root** of the repo on GitHub, not inside a folder. If you see `ade-portfolio-site/index.html`, you ran `git init` one level too high — `cd` into the correct folder and start again.
