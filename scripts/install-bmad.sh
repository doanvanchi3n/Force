#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd -- "$project_root"

if ! command -v uv >/dev/null 2>&1 && [[ -f "$HOME/.local/bin/env" ]]; then
  source "$HOME/.local/bin/env"
fi
if ! command -v uv >/dev/null 2>&1; then
  printf '%s\n' 'Cần cài uv trước: https://docs.astral.sh/uv/getting-started/installation/' >&2
  exit 1
fi

installer=(npx --yes bmad-method@6.12.4)
if [[ -f .tools/BMAD-METHOD/node_modules/commander/package.json ]] &&
   [[ -f .tools/BMAD-METHOD/package.json ]] &&
   [[ "$(node -p "require('./.tools/BMAD-METHOD/package.json').version")" == '6.12.4' ]]; then
  installer=(node .tools/BMAD-METHOD/tools/installer/bmad-cli.js)
fi

args=(install --directory "$project_root" --modules bmm --tools codex --yes --no-shims
  --user-name 'Nhóm Force' --communication-language Vietnamese
  --document-output-language Vietnamese --output-folder _bmad-output
  --set core.project_name=Chuyende3 --set bmm.project_knowledge=docs)
if [[ -f _bmad/_config/manifest.yaml ]]; then
  args+=(--action update)
fi
"${installer[@]}" "${args[@]}"
