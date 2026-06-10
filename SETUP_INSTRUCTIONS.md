# FutureReady Setup Instructions

## What's Been Built

### ✅ 7 OpenClaw Skills
All installed in `~/.openclaw/skills/`:

1. **futureready-diagnostic-analyzer** — Audits business online presence
2. **futureready-assumption-mapper** — Validates market assumptions
3. **futureready-signal-monitor** — Tracks competitor/market signals
4. **futureready-opportunity-scoring** — Ranks & scores leads
5. **futureready-blueprint-generator** — Creates campaign assets
6. **futureready-executive-report** — Generates PDF reports
7. **futureready-orchestrator** — Coordinates all 6 + deploys

### ✅ Test Project Created
`chiropractor-austin-tx` with:
- Landing page (`assets/landing-page/index.html`)
- Email outreach sequence (`assets/outreach/email-sequence.md`)
- Facebook ad creatives (`assets/ads/facebook-ads.md`)
- 10 video scripts (`assets/videos/video-scripts.md`)
- Tripwire offer (`assets/tripwire/tripwire-offer.md`)
- Git repo with 2 commits

---

## To Complete GitHub + Vercel Integration

### 1. GitHub Authentication

```bash
# Install GitHub CLI (already done)
# sudo apt install gh

# Login to GitHub
gh auth login
# Follow prompts: HTTPS → paste personal access token
```

**Get a token:** https://github.com/settings/tokens → Generate new token (classic) → scopes: `repo`, `read:org`

### 2. Push Skills to GitHub

```bash
# Run this for each skill
for skill in futureready-diagnostic-analyzer futureready-assumption-mapper futureready-signal-monitor futureready-opportunity-scoring futureready-blueprint-generator futureready-executive-report futureready-orchestrator; do
  cd ~/.openclaw/skills/$skill
  gh repo create getclients4u-lab/$skill --public --source=. --push
done
```

### 3. Push Test Project

```bash
cd ~/.openclaw/workspace/projects/chiropractor-austin-tx
gh repo create getclients4u-lab/chiropractor-austin-tx --public --source=. --push
```

### 4. Vercel Authentication

```bash
# Login to Vercel
vercel login
# Follow browser auth flow

# Deploy the test project
cd ~/.openclaw/workspace/projects/chiropractor-austin-tx
vercel --prod
```

---

## To Run Full Orchestrator

Once auth is configured:

```bash
/run futureready-orchestrator
  niche: chiropractor
  location: "Austin, TX"
  service: "lead generation"
```

This will:
1. Run Diagnostic Analyzer
2. Run Assumption Mapper
3. Run Signal Monitor
4. Run Opportunity Scoring
5. Run Blueprint Generator
6. Run Executive Report
7. Push to GitHub
8. Deploy to Vercel

---

## Project Structure

```
projects/{project-slug}/
  README.md
  project-config.json
  assets/
    landing-page/
      index.html
    outreach/
      email-sequence.md
    ads/
      facebook-ads.md
    videos/
      video-scripts.md
    tripwire/
      tripwire-offer.md
  reports/
    (generated reports)
  src/
    (Next.js source if applicable)
```
