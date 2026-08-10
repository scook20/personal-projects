# Sean Cook — Projects & Examples

A living catalog of shipped builds, interactive demos, and example projects from my work with
**[Halan Digital](https://halandigital.com)**. This is the public companion to my portfolio site:

### → Portfolio: https://sean-cook-portfolio.vercel.app

I design and build AI-powered systems and automation for businesses — from operational AI and
custom integrations to interactive web tools and decision systems.

---

## Live demos

| Project | What it is | Live |
|---|---|---|
| **TRAIGA Readiness** | Interactive Texas AI-governance (HB 149) readiness assessment + advisory one-pager | https://traiga-readiness.vercel.app |
| **REI Summit Command Center** | Real-estate-investing AI agent suite with a CEO-level orchestrator | https://client-rei-summit-command-center.vercel.app |
| **Operations & Automation Audit** | Interactive companion for an operations + automation audit engagement | https://celestial-audit-companion.vercel.app |
| **Staffing / ATS Platform** | Applicant-tracking + AI-screening platform build | https://client-scale-virtually-workable-clo.vercel.app/overview |
| **Marketing Site Build** | Responsive marketing site build | https://client-scale-virtually-website-clon.vercel.app |

## Systems I built for myself (no public link — architecture is diagrammed on the portfolio)

| Project | What it is |
|---|---|
| **SeanOS** | A markdown-native knowledge + execution system I run my working life on. Two runtimes share one vault: Claude Code on the Mac for engineering, an always-on agent on a Tailscale-sealed VPS for the daily loop (morning brief, overnight scouts, approval queue, evening reconciliation), with a watchdog that verifies each cycle. 687 knowledge pages · 10,628 internal links · 122 specialist agent definitions. Every byte is plain Markdown + YAML, so no proprietary format holds the only copy of anything. |
| **quill** | A native macOS meeting recorder that replaced a cloud notetaker. Mic and system audio are captured as two independent Core Audio process taps, which gives two-party speaker separation with no diarization model; transcription is fully on-device (Parakeet TDT 0.6B, ~20s per hour of audio). ~8,800 lines of Swift, ~90 MB resident. Audio never leaves the machine — the one outbound call sends text to a single pinned endpoint with redirects refused. Built on an MIT-licensed capture core ([digimata/quill](https://github.com/digimata/quill)); the meeting app, calendar layer, note pipeline, and vault integration are mine. |

Both are private systems rather than demos — walkthrough and live screen-share available on request.

## Example projects (in this repo)

### Project Status Dashboard — `project-dashboard/`
Professional dashboard for sharing project progress with clients: interactive progress tracking,
timeline/budget views, mobile-responsive, easy to customize. Open `project-dashboard/index.html`.

---

## How this repo is maintained

This is a **living showcase** — when a new public-safe deliverable ships (an interactive HTML tool,
a demo site, a sanitized example), it gets documented here: a row in the demo table and/or a
self-contained folder with its own short README.

> **⚠️ Public repo — confidentiality boundary.** This repository is PUBLIC. It contains only
> already-public demos and sanitized examples. **No confidential client material** — no client
> reports, proposals, pricing, contracts, transcripts, or private data. Those live in private
> client repositories only. When in doubt, leave it out.

**Contact:** s.cook20@outlook.com · [LinkedIn](https://linkedin.com/in/seancook-2018)
