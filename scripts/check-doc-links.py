#!/usr/bin/env python3
"""Check local Markdown and Obsidian file links; skip URLs and heading anchors."""

from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit


def main():
    root = Path(__file__).resolve().parent.parent
    files = sorted([
        *root.glob('*.md'),
        *(root / 'docs').rglob('*.md'),
        *(root / '_bmad-output').rglob('*.md'),
        *(root / '.github').rglob('*.md'),
    ])
    assets = [p for base in ('docs', '_bmad-output') for p in (root / base).rglob('*') if p.is_file()]
    failures = []
    checked = 0
    for source in files:
        text = source.read_text(encoding='utf-8')
        text = re.sub(r'^(`{3,}|~{3,})[^\n]*\n.*?^\1[^\n]*$', '', text, flags=re.M | re.S)
        # Inline links, images, and reference-style link definitions.
        links = list(re.finditer(r'!?\[[^\]]*\]\(\s*(<[^>]+>|[^\s)]+)(?:\s+[\'\"][^\n]*?[\'\"])?\s*\)', text))
        links += list(re.finditer(r'^\s{0,3}\[[^\]]+\]:\s*(<[^>]+>|\S+)', text, flags=re.M))
        for match in links:
            target = match[1].strip('<>')
            url = urlsplit(target)
            if url.scheme or url.netloc or not url.path:
                continue
            checked += 1
            path = unquote(url.path)
            resolved = root / path.lstrip('/') if path.startswith('/') else source.parent / path
            if not resolved.exists():
                failures.append((source.relative_to(root), target))
        for match in re.finditer(r'!?\[\[([^\]]+)\]\]', text):
            target = match[1].split('|', 1)[0].split('#', 1)[0].strip()
            if not target:
                continue
            checked += 1
            candidates = [target] if Path(target).suffix else [target + '.md', target]
            found = any((source.parent / name).is_file() or (root / name).is_file() for name in candidates)
            if not found:
                matches = {p for p in assets for name in candidates if p.as_posix().endswith('/' + name)}
                found = len(matches) == 1
            if not found:
                failures.append((source.relative_to(root), f'[[{target}]]'))
    for source, target in failures:
        print(f'BROKEN: {source} -> {target}', file=sys.stderr)
    print(f'{len(files)} Markdown files; {checked} local file links; {len(failures)} broken.')
    return 1 if failures else 0


if __name__ == '__main__':
    sys.exit(main())
