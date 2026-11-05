# Daily article automation

Every day at **5:00 PM** (Pakistan time), the Windows Task Scheduler task **"QureVanta Daily Article"** runs
`run-daily-article.ps1`. It starts Claude Code (bundled with the VS Code extension) in headless mode with
the instructions in `daily-article-prompt.md`: research one current US medical-billing topic, write an
original article in `src/content/blog/`, upload its image to Cloudinary (`dr3ie9gpz`, preset `Qurenanta`),
build, and push to `main` — Vercel then publishes it.

- **The PC must be on** at 5 PM. If it was off, the task runs as soon as the PC is back on (once per day).
- **Logs:** `automation/logs/` (one file per run). `last-published.txt` records the last day an article went out.
- **Skips the day** if the repo has uncommitted changes, so it never mixes with work in progress.
- **Run now:** `Start-ScheduledTask -TaskName "QureVanta Daily Article"`, or right-click the task in Task Scheduler → Run.
- **Pause / stop:** Task Scheduler → Task Scheduler Library → "QureVanta Daily Article" → Disable or Delete.
- **Change what it writes:** edit `daily-article-prompt.md`.
