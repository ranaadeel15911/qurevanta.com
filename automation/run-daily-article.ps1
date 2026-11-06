# Runs Claude Code headless to research, write and publish one article for qurevanta.com.
# Scheduled daily at 5 PM by the Windows task "QureVanta Daily Article" (see automation/README.md).
# Logs: automation/logs/<date>.log (not committed).

$ErrorActionPreference = 'Continue'
$repo = Split-Path -Parent $PSScriptRoot
$logDir = Join-Path $PSScriptRoot 'logs'
New-Item -ItemType Directory -Force -Path $logDir | Out-Null
$stamp = Get-Date -Format 'yyyy-MM-dd_HHmm'
Start-Transcript -Path (Join-Path $logDir "$stamp.log") | Out-Null

try {
  Set-Location $repo
  [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
  $OutputEncoding = [System.Text.Encoding]::UTF8

  # Only one article per day, even if the task is started again after a missed run.
  $today = Get-Date -Format 'yyyy-MM-dd'
  $marker = Join-Path $logDir 'last-published.txt'
  if ((Test-Path $marker) -and ((Get-Content $marker -Raw).Trim() -eq $today)) {
    Write-Output "Already published today ($today). Nothing to do."
    return
  }

  # Never mix with unfinished local work.
  $dirty = git status --porcelain --untracked-files=no
  if ($dirty) {
    Write-Output "Working tree has uncommitted changes; skipping today's run:`n$dirty"
    return
  }
  git pull --rebase origin main

  # Newest Claude Code binary bundled with the VS Code extension (the folder name changes on updates).
  $claude = Get-ChildItem "$env:USERPROFILE\.vscode\extensions\anthropic.claude-code-*-win32-x64\resources\native-binary\claude.exe" -ErrorAction SilentlyContinue |
    Sort-Object { [version]($_.FullName -replace '.*claude-code-([\d\.]+)-win32.*', '$1') } |
    Select-Object -Last 1
  if (-not $claude) { throw 'Claude Code executable not found. Is the VS Code extension installed?' }
  Write-Output "Using $($claude.FullName)"

  $before = git rev-parse HEAD
  Get-Content (Join-Path $PSScriptRoot 'daily-article-prompt.md') -Raw -Encoding UTF8 |
    & $claude.FullName -p --model claude-sonnet-5-5 --allowedTools 'Bash Read Write Edit Glob Grep WebSearch WebFetch'
  $after = git rev-parse HEAD

  if ($before -ne $after) {
    git log --oneline "$before..$after"
    Set-Content -Path $marker -Value $today
    Write-Output 'Published.'
    # Share on Facebook once credentials exist (see automation/README.md)
    if (Test-Path (Join-Path $env:USERPROFILE '.qurevanta\facebook.json')) {
      try { & (Join-Path $PSScriptRoot 'post-to-facebook.ps1') } catch { Write-Output "Facebook post failed: $_" }
      try { & (Join-Path $PSScriptRoot 'post-to-instagram.ps1') } catch { Write-Output "Instagram post failed: $_" }
    } else {
      Write-Output 'Facebook credentials not set up yet; skipping social post.'
    }
  } else {
    Write-Output 'No new commit was made today.'
  }
} catch {
  Write-Output "ERROR: $_"
} finally {
  Stop-Transcript | Out-Null
}
