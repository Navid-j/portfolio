# Generates public/og-image.png (1200x630 social card).
# Run from repo root:  powershell -File scripts/make-og.ps1

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent $PSScriptRoot
$outPath = Join-Path $root 'public\og-image.png'

$width = 1200
$height = 630

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($bitmap)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit

function New-Brush($r, $gg, $b, [int]$a = 255) {
    New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb($a, $r, $gg, $b))
}

# Background
$bgBrush = New-Brush 14 20 32
$g.FillRectangle($bgBrush, 0, 0, $width, $height)

# Faint blueprint grid
$gridPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(16, 130, 150, 190), 1)
for ($x = 0; $x -lt $width; $x += 44) { $g.DrawLine($gridPen, $x, 0, $x, $height) }
for ($y = 0; $y -lt $height; $y += 44) { $g.DrawLine($gridPen, 0, $y, $width, $y) }

# Colors
$white = New-Brush 236 240 248
$gray = New-Brush 148 162 188
$blue = New-Brush 143 176 242
$faint = New-Brush 104 116 140
$accentPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 143, 176, 242), 3)
$trackPen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(90, 143, 176, 242), 2)

# Kicker + accent tick
$g.DrawLine($accentPen, 80, 118, 128, 118)
$kickerFont = New-Object System.Drawing.Font('Consolas', 17)
$g.DrawString('PORTFOLIO / REV 2026-08', $kickerFont, (New-Brush 148 162 188), 142, 103)

# Name
$nameFont = New-Object System.Drawing.Font('Segoe UI Semibold', 62)
$g.DrawString('Navid Jahangiri', $nameFont, $white, 72, 158)

# Roles
$roleFont = New-Object System.Drawing.Font('Segoe UI', 27)
$g.DrawString('Software Engineer   ·   Project Control Specialist', $roleFont, $gray, 80, 288)

# Pipeline motif: track + three stations
$trackY = 430
$g.DrawLine($trackPen, 80, $trackY, 1120, $trackY)
$stations = @(
    @{ X = 240; Label = '56"' },
    @{ X = 600; Label = '24"' },
    @{ X = 960; Label = '64"' }
)
$labelFont = New-Object System.Drawing.Font('Consolas', 21)
foreach ($s in $stations) {
    $g.DrawEllipse($accentPen, $s.X - 10, $trackY - 10, 20, 20)
    $size = $g.MeasureString($s.Label, $labelFont)
    $g.DrawString($s.Label, $labelFont, $white, $s.X - $size.Width / 2 + 2, $trackY - 58)
}

# Bottom row: stack + url
$monoFont = New-Object System.Drawing.Font('Consolas', 19)
$g.DrawString('C#   .NET MAUI   Python   Unity   REST APIs', $monoFont, $blue, 78, 545)
$urlFont = New-Object System.Drawing.Font('Consolas', 17)
$urlSize = $g.MeasureString('navid-j.github.io/portfolio', $urlFont)
$g.DrawString('navid-j.github.io/portfolio', $urlFont, $faint, $width - 80 - $urlSize.Width, 550)

$g.Dispose()
$bitmap.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bitmap.Dispose()
Write-Output "Saved $outPath"
