if !command -v node >/dev/null 2>&1; then
  echo "node is not installed"
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  npm install -g pnpm
fi

if [ -z "$1" ]; then
  echo "Not enough argument"
  exit 1
fi

if [ "$1" != "build" ] && [ "$1" != "compile" ]; then
  echo "Invalid argument"
  exit 1
fi

pnpm install
pnpm run $1
