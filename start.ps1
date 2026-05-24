$Host.UI.RawUI.WindowTitle = "CodeTeach"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $projectDir

Write-Host ""
Write-Host "  CodeTeach - Programming Teaching Platform" -ForegroundColor Cyan
Write-Host "  =========================================" -ForegroundColor Cyan
Write-Host ""

$listening = netstat -ano 2>$null | Select-String ":1420 " | Select-String "LISTENING"
if ($listening) {
    Write-Host "  Server is already running. Opening browser..." -ForegroundColor Yellow
    Start-Process "http://localhost:1420"
    Write-Host "  Opened: http://localhost:1420" -ForegroundColor Green
    Write-Host ""
    Write-Host "  Press any key to close..." -ForegroundColor Gray
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 0
}

$nodeCheck = Get-Command node -ErrorAction SilentlyContinue
if (-not $nodeCheck) {
    Write-Host "  [ERROR] Node.js not found. Please install: https://nodejs.org" -ForegroundColor Red
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
    exit 1
}
Write-Host "  Node.js $(node --version)" -ForegroundColor Green

if (-not (Test-Path "node_modules")) {
    Write-Host "  First run: installing packages (1-2 min)..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "  [ERROR] npm install failed!" -ForegroundColor Red
        $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
        exit 1
    }
}

Write-Host ""
Write-Host "  Starting server..." -ForegroundColor Yellow

$startInfo = New-Object System.Diagnostics.ProcessStartInfo
$startInfo.FileName = "cmd"
$startInfo.Arguments = "/k npm run dev"
$startInfo.WorkingDirectory = $projectDir
$startInfo.WindowStyle = [System.Diagnostics.ProcessWindowStyle]::Minimized
$serverProc = [System.Diagnostics.Process]::Start($startInfo)

$ready = $false
for ($i = 1; $i -le 20; $i++) {
    Start-Sleep -Seconds 1
    $check = netstat -ano 2>$null | Select-String ":1420 " | Select-String "LISTENING"
    if ($check) {
        $ready = $true
        break
    }
    Write-Host "  Waiting... $i / 20" -ForegroundColor Gray
}

if (-not $ready) {
    Write-Host "  [WARN] Timeout. Trying to open browser anyway..." -ForegroundColor Yellow
}

Start-Process "http://localhost:1420"
Write-Host ""
Write-Host "  =========================================" -ForegroundColor Cyan
Write-Host "  Opened! URL: http://localhost:1420" -ForegroundColor Green
Write-Host "  =========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Press any key to stop server and exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")

Write-Host "  Stopping server..." -ForegroundColor Yellow
if ($serverProc -and -not $serverProc.HasExited) {
    $serverProc.Kill()
}
$portPids = netstat -ano 2>$null | Select-String ":1420 " | Select-String "LISTENING" | ForEach-Object { ($_ -split "\s+")[-1] }
foreach ($p in $portPids) {
    Stop-Process -Id $p -Force -ErrorAction SilentlyContinue
}
Write-Host "  Server stopped." -ForegroundColor Green
