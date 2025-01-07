if !command -v node >/dev/null 2>&1; then
  echo "node is not installed"
  exit 1
fi

if ! command -v pnpm >/dev/null 2>&1; then
  npm install -g pnpm
fi

if [ -z "$1" ]; then
  echo "Not enough argument, Should be one of build, compile"
  exit 1
fi

if [ "$1" != "build" ] && [ "$1" != "compile" ]; then
  echo "Invalid argument, Should be one of build, compile"
  exit 1
fi

if [ "$1" = "build" ]; then
  pnpm install
  pnpm run build
  exit 0
fi

if [ -z "$2" ]; then
  echo "Platform not specified"
  exit 1
fi

if [ "$2" != "LINUX" ] && [ "$2" != "WINDOWS" ] && [ "$2" != "MAC" ]; then
  echo "Invalid platform, Should be one of LINUX, WINDOWS, MAC"
  exit 1
fi

pnpm install
node ./build.js $2
