#!/usr/bin/env python3
"""Run UI UX Pro Max with persistent output confined to design references."""

from pathlib import Path
import subprocess
import sys


def main():
    root = Path(__file__).resolve().parent.parent
    args = sys.argv[1:]
    for arg in args:
        if arg == '--':
            print('The -- argument separator is not supported by this wrapper.', file=sys.stderr)
            return 2
        # argparse accepts abbreviations of long options; block these too.
        option = arg.split('=', 1)[0]
        if (option.startswith('--') and '--output-dir'.startswith(option)) or (
            option.startswith('-o') and not option.startswith('--')
        ):
            print('Output is managed at _bmad-output/design-references/; omit --output-dir/-o.', file=sys.stderr)
            return 2
    tool = root / '.agents/skills/ui-ux-pro-max/scripts/search.py'
    if not tool.is_file():
        print('Install first: python3 scripts/install-design-skill.py', file=sys.stderr)
        return 1
    output = root / '_bmad-output/design-references'
    return subprocess.run([
        sys.executable, '-B', str(tool), *args, '--output-dir', str(output),
    ], cwd=root).returncode


if __name__ == '__main__':
    sys.exit(main())
