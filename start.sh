#!/usr/bin/env bash
set -e

cd "$(dirname "$0")"

if ! command -v node &>/dev/null; then
  echo "❌ 找不到 Node.js，請先安裝：https://nodejs.org"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "📦 首次執行，安裝套件中..."
  npm install
fi

echo "🚀 啟動 CodeTeach..."
npm run dev &
SERVER_PID=$!

sleep 2

URL="http://localhost:1420"
if command -v xdg-open &>/dev/null; then
  xdg-open "$URL"
elif command -v open &>/dev/null; then
  open "$URL"
else
  echo "請開啟瀏覽器前往：$URL"
fi

echo "按 Ctrl+C 停止伺服器"
wait $SERVER_PID
