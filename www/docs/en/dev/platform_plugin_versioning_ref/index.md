---
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

title: Version Management
toc_title: Version Management
description: How to manage platforms & plugins versions.
---

# Version Management

Cordova allows developers to **save** and **restore** platforms and plugins, eliminating the need to check in platform and plugin source code.

When a platform or plugin is added, its version details are automatically saved to the `package.json` file.

The recommended way to add or remove platforms and plugins is by using the Cordova CLI commands:

- `cordova platform add|remove ...`
- `cordova plugin add|remove ...`

Using these commands helps prevent out-of-sync issues.

While it is technically possible to add a platform or plugin by editing `package.json` directly, this is **strongly discouraged**.

The restore process runs automatically when executing `cordova prepare`, using the information stored in `package.json` and `config.xml`. This applies to both platforms and plugins. If a platform or plugin is defined in both files, `package.json` takes priority.

One scenario where save/restore capabilities come in handy is in large teams that work on an app, with each team member focusing on a platform or plugin. This feature makes it easier to share the project and reduce the amount of redundant code that is checked in the repository.

The adding and removing mechanisim that Cordova CLI uses for platforms and plugins is controlled by npm CLI. Below we will take a look at the command syntax and examples.

## Adding Platforms and Plugins

**Command Syntax:**

```bash
cordova <platform | plugin> add [<package-spec> ...]
```

The `package-spec` argument supports most formats accepted by the npm CLI.

Examples include:

- Scoped and non-scoped npm packages
- Local directory paths
- Git remote URLs
- Tarball archives
- [Cordova Resolved Names](#Cordova-Resolved-Names) for official Cordova platforms

Additionally, the `--nosave` flag could be appended to the command to prevent adding of specified platform and plugins from the `package.json` file.

---

**Quick Overview:**

When you add a platform or plugin, `package.json` is updated with its dependencies and Cordova-specific metadata.

For example, running the following commands in a Cordova project:

```bash
cordova platform add android@13.0.0
cordova plugin add cordova-plugin-device@3.0.0
```

Would result in `package.json` containing the following entries:

```json
"devDependencies": {
  "cordova-android": "^13.0.0",
  "cordova-plugin-device": "^3.0.0"
},
"cordova": {
  "platforms": [
    "android"
  ],
  "plugins": {
    "cordova-plugin-device": {}
  }
}
```

When restoring a Cordova project, this metadata determines which platforms and plugins will be installed.

---

### Various `add` Examples

- **Cordova Resolved Names for Platforms:**

    ```bash
    cordova platform add android
    ```

    If no tag or version is specified, the Cordova CLI will fetch the latest release.

    ```bash
    cordova platform add electron@latest
    ```

    NPM tags are supported and can be appended to the end of the package specification.

    ```bash
    cordova platform add ios@7.1.1
    ```

    Exact release versions published to the npm registry are also supported and can be appended to the end of the package specification.

- **npm Package:**

    ```bash
    cordova platform add cordova-android
    cordova platform add cordova-android@latest
    cordova platform add cordova-android@13.0.0

    cordova platform add @cordova/some-platform
    cordova platform add @cordova/some-platform@latest
    cordova platform add @cordova/some-platform@1.0.0

    cordova plugin some-cordova-plugin
    cordova plugin some-cordova-plugin@latest

    cordova plugin add @cordova/some-plugin
    cordova plugin add @cordova/some-plugin@latest
    cordova plugin add @cordova/some-plugin@1.0.0
    ```

    Scoped and non-scope npm packages are supported for both platforms and plugins. Optionally, npm package tags or released versions can be targeted by appending to the end of the package name. (e.g. `package-name@latest`).

    Please note that the scoped packages shown above are only examples and do not exist.

- **Git remote URL:**

    ```bash
    cordova platform add git://github.com/apache/cordova-android.git
    cordova platform add git://github.com/apache/cordova-android.git#feature-branch
    cordova platform add git://github.com/apache/cordova-android.git#rel/13.0.0

    cordova platform add https://github.com/apache/cordova-android.git
    cordova platform add https://github.com/apache/cordova-android.git#feature-branch
    cordova platform add https://github.com/apache/cordova-android.git#rel/13.0.0

    cordova platform add https://github.com/apache/cordova-android
    cordova platform add https://github.com/apache/cordova-android#feature-branch
    cordova platform add https://github.com/apache/cordova-android#rel/13.0.0
    ```

    Various Git URL formats are supported for installing platforms and plugins. A branch name or tag can be specified by appending `#<branch-name|tag>` to the URL.

    When targeting a branch or tag, ensure it is production-ready before using it in a production environment. This functionality is useful for reviewing pull requests, testing future releases, or submitting in release vote.

- **Git service short hand:**

    ```bash
    cordova platform add github:apache/cordova-android
    cordova platform add github:apache/cordova-android#feature-branch
    cordova platform add github:apache/cordova-android#rel/13.0.0
    ```

    Platforms and plugins can also be checked out from Git repositories using a shorthand format.

    If your repository is hosted on another Git service, such as Bitbucket or GitLab, you can modify the command to target these services.

    Branches and tags can also be targeted using the shorthand format. However, ensure that the specified branch or version is production-ready before using it in production.

- **Tarball Archive:**

    ```bash
    cordova platform add ~/path/to/a/tarbal.tgz
    ```

    Currently, **only platforms** support installation from a tarball package. The supported archive formats are `.tar.gz`, `.tgz,` and `.tar`.

- **Local Directory Path:**

    ```bash
    cordova platform add ~/path/to/a/cordova-platform
    cordova plugin add ~/path/to/a/cordova-plugin

    cordova platform add C:/Path/to/a/cordova-platform
    cordova plugin add C:/Path/to/a/cordova-plugin
    ```

    Platforms and plugins can be installed from a local directory path.

## Removing Platforms and Plugins

**Command Syntax:**

```bash
cordova <platform | plugin> remove <package-name>
```

The `remove` command also has an alias of `rm`.

The `package-name` argument must be the name of the platform or plugin you want to remove.

For Apache Cordova's platforms, you **MUST** use the [Cordova Resolved Names](#Cordova-Resolved-Names) when removing them.

The `--nosave` flag could be appended to the command to prevent removal of specified platform and plugins from the `package.json` file.

---

### Various `remove` Examples

- **Removing platforms:**

    ```bash
    cordova platform remove android
    ```

    The above command will remove the `cordova-android` platform from the project and `package.json` file.

    _Note: If the platform definition existed in `config.xml` from older version's of Cordova CLI, it will also be removed from `config.xml`._

- **Removing plugins:**

    ```bash
    cordova plugin remove cordova-plugin-device
    ```

    The above command will remove the `cordova-plugin-device` plugin from the project and `package.json` file.

    _Note: If the plugin definition existed in `config.xml` from older version's of Cordova CLI, it will also be removed from `config.xml`._

## Important Notes on Platform Restoration

1. What version is installed when using `cordova platform add android` and the platform is defined in `config.xml`?

    If the `config.xml` file contains the following entry:

    ```xml
    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="13.0.0" />
        ...
    </xml>
    ```

    When running the **`cordova platform add android`** command with no version provided, it will use the `spec` version defined in `config.xml`. In this example it would be `13.0.0`.

2. What version is restored if a platform is defined in both `config.xml` and `package.json`?

    Suppose your project has the following configurations:

    **`config.xml`**:

    ```xml
    <engine name="android" spec=“12.0.0” />
    ```

    **`package.json`**:

    ```json
    "cordova": {
        "platforms": [
        "android"
        ]
    },
    "dependencies": {
        "cordova-android": "^13.0.0"
    }
    ```

    When `cordova prepare` is executed, the version from `package.json` has higher priority over `config.xml`. It will install version `^13.0.0`.

## Cordova Resolved Names

| Cordova Resolved Name | NPM Package Name |
  | --- | --- |
  | `android` | `cordova-android` |
  | `electron` | `cordova-electron` |
  | `ios` | `cordova-ios` |
  | `browser` | `cordova-browser` |
