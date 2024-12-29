if !command -v node >/dev/null 2>&1; then
  echo "node is not installed"
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  npm install -g pnpm
fi

pnpm install
pnpm run build
