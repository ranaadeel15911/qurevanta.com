# Posts the latest article to the QureVanta Instagram business account (@qurevanta) via the
# Instagram Graph API (Facebook Login): same 1080x1350 title image, an Instagram caption
# ("link in bio", since caption links are not clickable) and hashtags.
# Requires the Page token to include instagram_basic and instagram_content_publish, and the
# Instagram account to be a Business account connected to the Qurevanta Facebook Page.
# Usage: powershell -File post-to-instagram.ps1 [-DryRun]

param([switch]$DryRun)
$ErrorActionPreference = 'Stop'
. (Join-Path $PSScriptRoot 'social-common.ps1')

$article = Get-LatestArticle
$link = [char]::ConvertFromUtf32(0x1F517)  # link emoji
$caption = if ($article.IgCaption) { $article.IgCaption } else { $article.Caption }
$caption = "$caption`n`n$link Full guide: link in bio (qurevanta.com/resources)"

if ($DryRun) { Write-Output "DRY RUN - Instagram image: $($article.ImageUrl)`nCaption:`n$caption"; return }
if (Test-AlreadyPosted 'instagram' $article.Slug) { Write-Output "Already posted $($article.Slug) to Instagram."; return }

$secrets = Get-Secrets
$igUserId = $secrets.igUserId
if (-not $igUserId) {
  $page = Invoke-RestMethod -Uri "https://graph.facebook.com/$graphVersion/$($secrets.pageId)?fields=instagram_business_account&access_token=$($secrets.pageToken)"
  $igUserId = $page.instagram_business_account.id
  if (-not $igUserId) { throw 'No Instagram business account is connected to the Facebook Page (or the token lacks instagram_basic).' }
}

Wait-ArticleLive $article.Url

# 1) create the media container, 2) wait until Instagram has fetched the image, 3) publish
# Parameters go in the query string (as in Instagram's docs): form bodies lose emoji on this endpoint
$query = (@{ image_url = $article.ImageUrl; caption = $caption; access_token = $secrets.pageToken }.GetEnumerator() |
  ForEach-Object { "$($_.Key)=$([uri]::EscapeDataString([string]$_.Value))" }) -join '&'
$container = Invoke-RestMethod -Method Post -Uri "https://graph.facebook.com/$graphVersion/$igUserId/media?$query"
for ($i = 0; $i -lt 20; $i++) {
  $status = Invoke-RestMethod -Uri "https://graph.facebook.com/$graphVersion/$($container.id)?fields=status_code&access_token=$($secrets.pageToken)"
  if ($status.status_code -eq 'FINISHED') { break }
  if ($status.status_code -eq 'ERROR') { throw "Instagram could not process the image: $($status | ConvertTo-Json -Compress)" }
  Start-Sleep -Seconds 5
}
$published = Invoke-GraphPost "$igUserId/media_publish" @{ creation_id = $container.id; access_token = $secrets.pageToken }
Set-Posted 'instagram' $article.Slug
Write-Output "Posted to Instagram: media id $($published.id)"
