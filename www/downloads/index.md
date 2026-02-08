---
layout: downloads
title: Downloads
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.
---

# Downloads

- [Downloads](#downloads)
  - [Package List](#package-list)
  - [Verifying Package Integrity](#verifying-package-integrity)
    - [1. Import the Apache Cordova Public Keys](#1-import-the-apache-cordova-public-keys)
    - [2. Verify the SHA-512 Checksum](#2-verify-the-sha-512-checksum)
    - [3. Verify the GPG Signature](#3-verify-the-gpg-signature)
  - [Building from Sources](#building-from-sources)

All Apache Cordova packages are published to the npmjs registry for convenience. Source downloads are also available, allowing you to create and use custom consumable packages.

Below is a link to all Apache Cordova packages from our download server. You must verify the integrity of the downloaded files using the signatures downloaded from our [distribution directory](https://dlcdn.apache.org/cordova/). The signatures can be verified with our [KEYS](https://dlcdn.apache.org/cordova/KEYS) file.

The distribution directory will only provide our current recommended releases while you are able to retrieve the older, historical, versions from the [archive download site](https://archive.apache.org/dist/cordova/).

## Package List

<div class="releases">
  {% for release in site.data.releases %}
    <section class="release-card">
      <header class="release-header">
        <h2>{{ release.package }}@{{ release.version }}</h2>
      </header>

      <ul class="download-list">
        {% for tarball in release.tarballs %}
          {% assign base_download_url = "https://dlcdn.apache.org/cordova/" | append: release.downloadDir | append: "/" %}
          {% if tarball.customName %}
            {% assign filename = tarball.customName
              | append: "-"
              | append: release.version
              | append: "."
              | append: tarball.extension
            %}
          {% else %}
            {% assign filename = release.package
              | append: "-"
              | append: tarball.type
              | append: "-"
              | append: release.version
              | append: "."
              | append: tarball.extension
            %}
          {% endif %}
          <li class="download-row">
            <span class="download-name">
              <a href="{{ base_download_url }}{{ filename }}">
                {{ tarball.type }} ({{ tarball.extension }})
              </a>
            </span>

            <span class="download-actions">
              <a href="{{ base_download_url }}{{ filename }}.asc">ASC</a>
              <a href="{{ base_download_url }}{{ filename }}.sha512">SHA512</a>
            </span>
          </li>
        {% endfor %}
      </ul>
    </section>
  {% endfor %}
</div>

## Verifying Package Integrity

To verify package integrity, tools capable of performing GPG signature verification and SHA-512 checksum validation are required. Some operating systems include these tools by default, while others may require additional setup.

**Linux:**

These tools are typically available by default. If they are missing, they can usually be installed via the system package manager (such as `apt`, `dnf`, `pacman`, or `yum`). For GPG, the package name is typically `gnupg`.

**macOS:**

[Homebrew](https://brew.sh/) can be used to install the required tools. The `gpg` command is provided by the Homebrew package `gnupg`, and the `sha512sum` command is provided by `coreutils`.

**Windows:**

The `gpg` and `sha512sum` commands are not provided by default and must be installed separately.

One of the simplest ways to obtain both tools is by installing [**Git for Windows**](https://git-scm.com/install/windows), which typically includes **Git Bash** along with several useful binaries such as `gpg` and `sha512sum`.

When **Git for Windows** is installed, these binaries can also be made available in **Command Prompt** or **PowerShell** by configuring the system `PATH` environment variable to point to the Git `usr\bin` directory. By default, this directory is typically located at `C:\Program Files\Git\usr\bin`, though the exact path may vary depending on the installation.

For SHA-512 checksum verification, Windows users can alternatively use the built-in `certutil` command.

### 1. Import the Apache Cordova Public Keys

The `KEYS` file contains all of the known developer's public keys that are used for signing official releases. It is recommended to import these keys into your local GPG keyring.

Download the `KEYS` file from the official Apache Downloads directory then run:

```zsh
gpg --import KEYS
```

To list the imported keys:

```zsh
gpg --list-keys
```

### 2. Verify the SHA-512 Checksum

> [!NOTE]
> In the steps below, the file name `file.tgz.sha512` and `file.tgz` are used as a placeholder and should be replaced with the name of the actual files that were downloaded. The exact file names will vary depending on the selected package.

Use the **provided checksum file** to confirm that the downloaded package matches the official release:

```zsh
sha512sum -c file.tgz.sha512
```

If the package is valid, you should see:

```log
file.tgz: OK
```

> [!NOTE]
> Windows environment can alternatively verify the the SHA-512 checksum with the following command:
>
> ```cmd
> certutil -hashfile C:\path\to\file.tgz {SHA512}
> ```
>
> Replace `{SHA512}` with the SHA512 string.

(Optional)
If you want to manually double-check, you may generate your own checksum:

```zsh
sha512sum file.tgz
```

After generating your own checksum, compare it against the authoritative checksum, `file.tgz.sha512`, to confirm that they match.

> [!TIP]
> Generating your own checksum is useful for confirming the file was downloaded correctly.
> The **authoritative** checksum is the one we provide.

### 3. Verify the GPG Signature

> [!NOTE]
> In the steps below, the file name `file.tgz.asc` and `file.tgz` are used as a placeholder and should be replaced with the name of the actual files that were downloaded. The exact file names will vary depending on the selected package.

Use the `.asc` signature file to confirm that the tarball was signed by an authorized Apache Cordova developer.

Run:

```zsh
gpg --verify file.tgz.asc file.tgz
```

If the signature is valid and the signer's public key exists in your keyring, you'll see output similar to:

```log
gpg: Good signature from "Developer Name <dev@example.org>"
```

If GPG warns about trust levels, this is normal unless you manually set owner trust. What matters is that the signature matches a key from the official `KEYS` file.

## Building from Sources

After downloading one of the **source** packages from the list above and completing the steps in **Verifying Package Integrity**, follow these steps:

1. Extract the package contents.
2. Change your working directory to the root of the extracted contents.
3. Run `npm install` to install the package dependencies.
4. Run `npm update` to update sub-dependencies, as the `package-lock.json` may become stale over time.
5. Run `npm pack` to generate the consumable tarball.

This will create a `.tgz` package file, which you can install into your project using:

```zsh
npm install /path/to/the/newly/created/file.tgz
```
