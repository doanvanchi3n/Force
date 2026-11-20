#!/usr/bin/env python3
"""Install a pinned UI UX Pro Max payload and the project's BMAD-aware entrypoint."""

import argparse
from datetime import datetime, timezone
import hashlib
import io
import json
from pathlib import Path, PurePosixPath
import shutil
import stat
import tempfile
import urllib.request
import zipfile


def files(folder):
    for path in sorted(folder.rglob('*')):
        if '__pycache__' in path.parts or path.suffix == '.pyc':
            continue
        if path.is_symlink():
            raise ValueError(f'Symlink not supported in skill payload: {path}')
        if path.is_file():
            yield path


def digest(folder):
    result = hashlib.sha256()
    for path in files(folder):
        result.update(path.relative_to(folder).as_posix().encode() + b'\0' + path.read_bytes() + b'\0')
    return result.hexdigest()


def download(lock, destination):
    url = f'https://codeload.github.com/{lock["repository"]}/zip/{lock["commit"]}'
    request = urllib.request.Request(url, headers={'User-Agent': 'Chuyende3-skill-installer'})
    with urllib.request.urlopen(request, timeout=60) as response:
        payload = response.read()
    with zipfile.ZipFile(io.BytesIO(payload)) as archive:
        top = archive.namelist()[0].split('/')[0]
        prefix = f'{top}/{lock["skill_path"]}/'
        for member in archive.infolist():
            if member.is_dir():
                continue
            if member.filename == f'{top}/LICENSE':
                relative = PurePosixPath('LICENSE')
            elif member.filename.startswith(prefix):
                relative = PurePosixPath('skill') / member.filename[len(prefix):]
            else:
                continue
            if relative.is_absolute() or '..' in relative.parts or stat.S_ISLNK(member.external_attr >> 16):
                raise ValueError(f'Unsafe archive entry: {member.filename}')
            target = destination / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(archive.read(member))
    return destination / 'skill', destination / 'LICENSE'


def install(root, source=None, license_file=None):
    adapter = root / 'tools/skills/ui-ux-pro-max'
    lock = json.loads((adapter / 'source.json').read_text())
    with tempfile.TemporaryDirectory(prefix='chuyende3-design-source-') as scratch:
        if source is not None:
            if license_file is None:
                raise ValueError('--source requires --license')
        else:
            checkout = root / '.tools/ui-ux-pro-max-skill'
            source = checkout / lock['skill_path']
            license_file = checkout / 'LICENSE'
            if not source.is_dir():
                source, license_file = download(lock, Path(scratch))
        if not source.is_dir() or digest(source) != lock['payload_sha256']:
            raise ValueError('Source does not match the pinned payload; review source.json before upgrading.')
        if not license_file.is_file():
            raise ValueError('Upstream LICENSE is missing.')
        if hashlib.sha256(license_file.read_bytes()).hexdigest() != lock['license_sha256']:
            raise ValueError('Upstream LICENSE does not match the pinned source.')

        parent = root / '.agents/skills'
        parent.mkdir(parents=True, exist_ok=True)
        destination = parent / lock['name']
        with tempfile.TemporaryDirectory(prefix='.design-install-', dir=parent) as staging:
            package = Path(staging) / lock['name']
            shutil.copytree(source, package, ignore=shutil.ignore_patterns('__pycache__', '*.pyc'))
            shutil.copy2(adapter / 'SKILL.md', package / 'SKILL.md')
            shutil.copy2(license_file, package / 'LICENSE')
            metadata = {**lock, 'adapter_sha256': hashlib.sha256((adapter / 'SKILL.md').read_bytes()).hexdigest()}
            (package / 'integration.json').write_text(json.dumps(metadata, indent=2) + '\n')
            if destination.is_symlink():
                raise ValueError(f'Refusing to replace a symlink: {destination}')
            if destination.exists() and digest(destination) == digest(package):
                print(f'Already installed: {lock["name"]} {lock["version"]} + project adapter')
                return
            backup = None
            if destination.exists():
                stamp = datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
                backup = root / '.local/backups/skills' / f'{lock["name"]}-{stamp}'
                backup.parent.mkdir(parents=True, exist_ok=True)
                shutil.move(str(destination), backup)
            try:
                package.rename(destination)
            except OSError:
                if backup is not None:
                    shutil.move(str(backup), destination)
                raise
            print(f'Installed: {destination} ({lock["version"]})')
            if backup is not None:
                print(f'Previous installation preserved: {backup}')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--project-root', type=Path, default=Path(__file__).resolve().parent.parent)
    parser.add_argument('--source', type=Path, help='Already downloaded upstream skill directory')
    parser.add_argument('--license', dest='license_file', type=Path, help='Upstream LICENSE for --source')
    args = parser.parse_args()
    try:
        install(args.project_root.resolve(), args.source, args.license_file)
    except (OSError, ValueError, zipfile.BadZipFile) as error:
        parser.exit(1, f'Installation failed: {error}\n')


if __name__ == '__main__':
    main()
