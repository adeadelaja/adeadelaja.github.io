# evidence/ — screenshots of work

Proof that the systems described in the case studies exist.

## The rule, and it is absolute

**Post the structure, never the contents.**

Synthetic data inside a real architecture shows the entire skill and leaks nothing. Real client names, real account names, real revenue figures and untouched screenshots from SAP systems never leave your machine — not in a portfolio, not in a DM, not in an interview.

Nobody assessing you cares what BMW's pipeline number was. They care whether you can design a validation layer. The structure is the skill.

## What to capture, in priority order

| File | What it shows | Source | Effort |
|---|---|---|---|
| `sfdc-dashboard-summary.png` | 7 regions × 4 integrity dimensions with the REVIEW/FAIR triage column and global roll-up | **Rebuild with invented account names and numbers** | 2–3 hrs |
| `validation-formula.png` | XLOOKUP against a trusted-source table, ISNA exception trapping, computed flag, conditional formatting firing. Formula bar visible. | Rebuild, ~20 synthetic rows | 45 min |
| `hexpres-data-dictionary.png` | 37 variables with definition, source and downstream dependency | **Your own work on public ONS/OECD/UN data — screenshot as-is** | 15 min |
| `hexpres-corridor-chart.png` | Visa grants by corridor: Nigeria 1,079,372 · South Africa 366,496 · Ghana 274,976 · Kenya 107,805 | Public data — as-is | 20 min |
| `skinmatch-review-log.png` | Issue tested / v1 value / reality check / v3 value / why it changed | **Your own venture work — as-is, no redaction** | 15 min |
| `ai-operating-loop.png` | The real engagement flow, with AI-run steps and human-judgement steps marked separately | Draw it | 1 hr |

**Start with the three that need no rebuild:** `hexpres-data-dictionary`, `hexpres-corridor-chart`, `skinmatch-review-log`. That's under an hour and it's the most senior-signalling material you own — especially the review log. Most analysts defend their first model; you documented cutting your own price assumption 60% and rebasing revenue from £180k to £81k. That's the screenshot that makes someone stop scrolling.

## Capture quality

- Crop tight. No browser chrome, no taskbar, no Slack notification in the corner.
- Zoom to ~125% before capturing so text is readable on a phone.
- `.png` always — `.jpg` turns spreadsheet gridlines to mush.
- Keep it under 1600px wide.
- **Look at every cell before you upload.** A real company name in row 40 of a screenshot you cropped from the top is the classic way this goes wrong.

## Naming

Lowercase, hyphens, descriptive: `sfdc-dashboard-summary.png`. Then reference it in `assets/js/data.js` as `src: "evidence/sfdc-dashboard-summary.png"`.
