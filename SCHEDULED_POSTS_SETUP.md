# Scheduled Posts Setup Guide

This guide explains how to set up automatic daily rebuilds to publish scheduled blog posts.

## How It Works

1. Blog posts with future `pubDate` are filtered out and won't appear on the site
2. A daily rebuild is triggered automatically
3. When the rebuild runs, posts with `pubDate <= today` become visible

## Setup Options

### Option 1: GitHub Actions (Recommended - Free)

1. Create `.github/workflows/daily-rebuild.yml`:

```yaml
name: Daily Rebuild for Scheduled Posts

on:
  schedule:
    # Runs at 00:30 UTC every day (6:00 AM IST)
    - cron: '30 0 * * *'
  workflow_dispatch: # Allows manual trigger

jobs:
  trigger-rebuild:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Vercel Deploy Hook
        run: |
          curl -X POST "${{ secrets.VERCEL_DEPLOY_HOOK }}"
```

2. Add the secret to GitHub:
   - Go to your GitHub repository
   - Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Name: `VERCEL_DEPLOY_HOOK`
   - Value: `https://api.vercel.com/v1/integrations/deploy/prj_nQu0zfSK7IMStfsXAvPqEms6SFg3/2oW6gf0vck`

3. Done! GitHub will trigger a rebuild daily at 6:00 AM IST.

### Option 2: Vercel Cron (Requires Pro Plan)

If you have Vercel Pro, you can use their built-in cron jobs:

1. Create `vercel.json`:

```json
{
  "crons": [{
    "path": "/api/cron/rebuild",
    "schedule": "30 0 * * *"
  }]
}
```

2. Create `public/api/cron/rebuild.js`:

```javascript
export default async function handler(req, res) {
  // Verify cron secret
  if (req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Trigger rebuild
  await fetch(process.env.VERCEL_DEPLOY_HOOK, { method: 'POST' });
  
  res.status(200).json({ success: true });
}
```

### Option 3: External Cron Service (Free Alternative)

Use a free service like [cron-job.org](https://cron-job.org):

1. Sign up at cron-job.org
2. Create a new cron job
3. URL: Your Vercel deploy hook URL
4. Method: POST
5. Schedule: Daily at 00:30 UTC

## Testing

To test if scheduled posts work:

1. Create a post with a future date
2. Verify it doesn't appear on the site
3. Change the date to today or past
4. Rebuild the site (push to GitHub or trigger manually)
5. Verify the post now appears

## Manual Rebuild

You can always trigger a manual rebuild:
- Push any change to GitHub
- Or use the GitHub Actions "workflow_dispatch" button
- Or call the deploy hook manually:
  ```bash
  curl -X POST "https://api.vercel.com/v1/integrations/deploy/prj_nQu0zfSK7IMStfsXAvPqEms6SFg3/2oW6gf0vck"
  ```

## Current Deploy Hook

```
https://api.vercel.com/v1/integrations/deploy/prj_nQu0zfSK7IMStfsXAvPqEms6SFg3/2oW6gf0vck
```

Keep this URL secret! Anyone with this URL can trigger rebuilds of your site.
