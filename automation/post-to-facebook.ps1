# Posts the latest article to the QureVanta Facebook Page via the Meta Graph API:
# the 1080x1350 title image, a short caption and the article link.
# Input:   automation/logs/latest-article.json  (written by the daily article run)
# Secrets: %USERPROFILE%\.qurevanta\facebook.json  { "pageId": "...", "pageToken": "..." }  (never committed)
# Usage:   powershell -File post-to-facebook.ps1 [-DryRun]

param([switch]$DryRun)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'social-common.ps1')

$article = Get-LatestArticle
$pointer = [char]::ConvertFromUtf32(0x1F449)  # pointing-hand emoji (kept out of the file for PowerShell 5.1)
$caption = "$($article.Caption)`n`n$pointer Read the full guide: $($article.Url)"

$img = Invoke-WebRequest -Uri $article.ImageUrl -Method Head -UseBasicParsing
Write-Output "Image OK ($($img.StatusCode)): $($article.ImageUrl)"

if ($DryRun) { Write-Output "DRY RUN - Facebook caption:`n$caption"; return }
if (Test-AlreadyPosted 'facebook' $article.Slug) { Write-Output "Already posted $($article.Slug) to Facebook."; return }

$secrets = Get-Secrets
Wait-ArticleLive $article.Url
$response = Invoke-GraphPost "$($secrets.pageId)/photos" @{ url = $article.ImageUrl; caption = $caption; published = 'true'; access_token = $secrets.pageToken }
Set-Posted 'facebook' $article.Slug
Write-Output "Posted to Facebook: post id $($response.post_id)"
