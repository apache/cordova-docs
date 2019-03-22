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

title: Electron Platform Guide
toc_title: Electron
---

# Electron Platform Guide

Electron is a framework that uses web technologies (HTML, CSS, and JS) to build cross-platform desktop applications.

## Requirements and Support

### Linux

* **Python** version 2.7.x. It is recommended to check your Python version since some distributions like CentOS 6.x still use Python 2.6.x.

### Mac

* **Python** version 2.7.x with support for TLS 1.2.

* **Xcode**, the IDE for macOS, comes bundled with necessary software development tools to code signing and compiling native code for macOS. Version 8.2.1 or higher.

* **RedHat Build Support**
  * **Homebrew**, one of the available macOS package manager, is used for installing additional tools and dependencies. Homebrew will be needed to install RPM packaging dependencies. [**Brew Install Step**](https://brew.sh/)

  * **RPM**, a standard package manager for multiple Linux distributions, is the tool used for creating the Linux RPM package. To install this tool, use the following [**Homebrew**](https://brew.sh/) command:

    ```
    $ brew install rpm
    ```

### Windows

* **Python** version 2.7.10 or higher.

* **PowerShell**, for Windows 7 users, must be at version 3.0 or greater for [app signing](https://www.electron.build/code-signing#windows).

* **Debugging Tools** for Windows of Windows SDK 10.0.15063.468, if you plan on creating a full distribution.


## Quick Start

### Create a Project

```
$ npm i -g cordova
$ cordova create sampleApp
$ cd sampleApp
$ cordova platform add electron
```

### Preview a Project

It is not necessary to build the Electron application for previewing. Since the building process can be slow, it is recommended to pass in the `--nobuild` flag to disable the build process when previewing.

```
$ cordova run electron --nobuild
```

### Build a Project

**Debug Builds**

```
$ cordova build electron
$ cordova build electron --debug
```

**Release Builds**

```
$ cordova build electron --release
```

## Customizing the Application's Window Process

Electron provides many options to manipulate the [`BrowserWindow`](https://electronjs.org/docs/api/browser-window). This section will cover how to configure a few basic options. For a full list of options, please see the [Electron's Docs - BrowserWindow Options](https://electronjs.org/docs/api/browser-window#new-browserwindowoptions).

Working with a Cordova project, it is recommended to create an Electron settings file within the project's root directory, and set its the relative path in the preference option `ElectronSettingsFilePath`, in the `config.xml` file.

**Example `config.xml`:**
```xml
<platform name="electron">
    <preference name="ElectronSettingsFilePath" value="res/electron/settings.json" />
</platform>
```

To override or set any BrowserWindow options, in this file the options are added to the  `browserWindow` property.

**Example `res/electron/settings.json`:**

```json
{
  "browserWindow": { ... }
}
```

### How to set the window's default size?

By default, the `width` is set to **800** and the `height` set to **600**. This can be overridden by setting the `width` and `height` property.

**Example:**

 ```json
{
    "browserWindow": {
        "width": 1024,
        "height": 768
    }
}
```

### How to make the window not resizable?

 Setting the `resizable` flag property, you can disable the user's ability to resize your application's window.

 **Example:**

 ```json
{
    "browserWindow": {
        "resizable": false
    }
}
```

#### How to make my window fullscreen?

Using the `fullscreen` flag property, you can force the application to launch in fullscreen.

**Example:**
```json
{
    "browserWindow": {
        "fullscreen": true
    }
}
```

### How to support Node.js and Electron APIs?

 Set the `nodeIntegration` flag property to true.  By default, this property flag is set to false to support popular libraries that insert symbols with the same names that Node.js and Electron already uses.

 > You can read more about this at Electron docs: [I can not use jQuery/RequireJS/Meteor/AngularJS in Electron](https://electronjs.org/docs/faq#i-can-not-use-jqueryrequirejsmeteorangularjs-in-electron).
 
 **Example:**

 ```json
{
    "browserWindow": {
        "nodeIntegration": true
    }
}
```

## Customizing the Electron's Main Process

If it is necessary to customize the Electron's main process beyond the scope of the Electron's configuration settings, chances can be added directly to the `cdv-electron-main.js` file located in `{PROJECT_ROOT_DIR}/platform/electron/platform_www/`. This is the application's main process.

 > &#10071; However, it is not recommended to modify this file as the upgrade process for `cordova-electron` is to remove the old platform before adding the new version.

### DevTools

The `--release` and `--debug` flags control the visibility of the DevTools. DevTools are shown by default on **Debug Builds** (`without a flag` or with `--debug`). If you want to hide the DevTools pass in the `--release` flag when building or running the application.

> Note: DevTools can be closed or opened manually with the debug build.

## Build Configurations

### Default Build Configurations

By default, with no additional configuration, `cordova build electron` will build default packages for the host operating system (OS) that triggers the command. Below, are the list of default packages for each OS.

**Linux**

| Package | Arch  |
| ------- | :---: |
| tar.gz  | x64   |

**Mac**

| Package | Arch  |
| ------- | :---: |
| dmg     | x64   |
| zip     | x64   |

**Windows**

| Package | Arch  |
| ------- | :---: |
| nsis    | x64   |

### Customizing Build Configurations

If for any reason you would like to customize the build configurations, modifications are placed within the `build.json` file located in the project's root directory. E.g. `{PROJECT_ROOT_DIR}/build.json`. This file contains all build configurations for all platforms (Android, Electron, iOS, Windows).

**Example Config Structure**

```
{
  "electron": {}
}
```

Since the Electron framework is for creating cross-platform applications, multiple configurations are required for each OS build. The `electron` node, in the `build.json` file, contains three properties that separate the build configurations for each OS.

**Example Config Structure with Each Platform**

```
{
  "electron": {
    linux: {},
    mac: {},
    windows: {}
  }
}
```

Each OS node contains properties that are used to identify what package to generate and how to sign.

**OS Properties:**
* `package` is an array of package formats that will be generated.
* `arch` is an array of architectures that each package is built for.
* `signing` is an object that contains signing information. See [Signing Configurations](#signing-configurations) for more information.

Any properties that are undefined will fallback to default values.

#### Adding a `package`

The `package` property is an array list of packages to be outputted. If the property is defined, the default packages are not used unless added. The order of the packages has no importance.

The configuration example below will generate `tar.gz`, `dmg` and `zip` packages for macOS.

```
{
  "electron": {
    "mac": {
      "package": [
        "dmg",
        "tar.gz",
        "zip"
      ]
    }
  }
}
```

**Available Packages by Operating System**

| Package Type | Linux              | macOS              | Windows                               |
| ------------ | :----------------: | :----------------: | :-----------------------------------: |
| default      | -                  | `dmg`<br />`zip`   | -                                     |
| dmg          | -                  | &#10004;           | -                                     |
| mas          | -                  | &#10004;           | -                                     |
| mas-dev      | &#10004;           | -                  | -                                     |
| pkg          | -                  | &#10004;           | -                                     |
| 7z           | &#10004;           | &#10004;           | &#10004;                              |
| zip          | &#10004;           | &#10004;           | &#10004;                              |
| tar.xz       | &#10004;           | &#10004;           | &#10004;                              |
| tar.lz       | &#10004;           | &#10004;           | &#10004;                              |
| tar.gz       | &#10004;           | &#10004;           | &#10004;                              |
| tar.bz2      | &#10004;           | &#10004;           | &#10004;                              |
| dir          | &#10004;           | &#10004;           | &#10004;                              |
| nsis         | -                  | -                  | &#10004;                              |
| nsis-web     | -                  | -                  | &#10004;                              |
| portable     | -                  | -                  | &#10004;                              |
| appx         | -                  | -                  | &#10004; <sup>**[1]**</sup>           |
| msi          | -                  | -                  | &#10004;                              |
| AppImage     | &#10004;           | -                  | -                                     |
| snap         | &#10004;           | -                  | -                                     |
| deb          | &#10004;           | -                  | -                                     |
| rpm          | &#10004;           | -                  | -                                     |
| freebsd      | &#10004;           | -                  | -                                     |
| pacman       | &#10004;           | -                  | -                                     |
| p5p          | &#10004;           | -                  | -                                     |
| apk          | &#10004;           | -                  | -                                     |

* **[1]** Only Window 10 can build AppX packages.

#### Setting the package `arch`

The `arch` property is an array list of architectures that each package is built for. When the property is defined, the default arch is not used unless added.

> &#10071;  Not all architectures are available for every operating system. Please review the [Electron Releases](https://github.com/electron/electron/releases/) to identify valid combinations. For example, macOS (Darwin) only supports x64.

**Available Arch**
* ia32
* x64
* armv71
* arm64


The example above will generate an `x64` `dmg` package.

```
{
  "electron": {
    "mac": {
      "package": [
        "dmg"
      ],
      "arch": ["x64"]
    }
  }
}
```

### Multi-Platform Build Support

> &#10071; Not all platforms support this feature and may have limitations.

Building for multiple platforms on a single operating system may possible but has limitations. It is recommended that the builder's operating system (host OS) matches with the platform that is being built.

The matrix below shows each host OS and for which platforms they are capable of building applications.

| Host <sup>**[1]**</sup> | Linux              | Mac                | Window                       |
| ----------------------- | :----------------: | :----------------: | :--------------------------: |
| Linux                   | &#10004;           | -                  | &#10071; <sup>**[2]**</sup>  |
| Mac <sup>**[3]**</sup>  | &#10004;           | &#10004;           | &#10071; <sup>**[2]**</sup>  |
| Window                  | -                  | -                  | &#10004;                     |

**Limitations:**
* **[1]** If the app contains native dependency, it can only be compiled on the targeted platform.
* **[2]** Linux and macOS are unable to build Windows Appx packages for Windows Store.
* **[3]** [All required system dependencies, except rpm, will be downloaded automatically on demand. RPM can be installed with brew. (macOS Sierra 10.12+)](https://www.electron.build/multi-platform-build#macos)

The example below enables multi-platform build for all OS and uses the default build configurations.

```
{
  "electron": {
    "linux": {},
    "mac": {},
    "windows": {}
  }
}
```

## Signing Configurations

### macOS Signing


There are three types of signing targets. (`debug`, `release`, and `store`). Each section has the following properties:

| key                                                                                                                                                 | description                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| entitlements                                                                                                                                        | String path value to entitlements file.                                                                                           |
| entitlementsInherit                                                                                                                                 | String path value to the entitlements file which inherits the security settings.                                                  |
| identity                                                                                                                                            | String value of the name of the certificate.                                                                                      |
| [requirements](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/RequirementLang/RequirementLang.html) | String path value of requirements file. <br /><br />&#10071; This is not available for the `mas` (store) signing configurations. |
| provisioningProfile                                                                                                                                 | String path value of the provisioning profile.                                                                                    |

**Example Config:**

```
{
  "electron": {
    "mac": {
      "package": [
        "dmg",
        "mas",
        "mas-dev",
      ],
      "signing": {
        "release": {
          "identity": "APACHE CORDOVA (TEAMID)",
          "provisioningProfile": "release.mobileprovision"
        }
      }
    }
  }
}
```

For macOS signing, there are a few exceptions to how the signing information is used.
By default, all packages with the exception of `mas` and `mas-dev`, use the `debug` and `release` signing configurations.

Using the example config above, let's go over some use cases to better understand the exceptions.

**Use Case 1:**

```
$ cordova build electron --debug
```

The command above will:
* Generate a `dmg` build and `mas-dev` build using the `debug` signing configurations.
* Ignore the `mas` target package.

**Use Case 2:**

```
$ cordova build electron --release
```

The command above will:
* Generate a `dmg` build using the `release` config.
* Generate a `mas` build using the `store` config.
* Ignore the `mas-dev` target package.


### Windows Signing

The signing information is comprised of two types. (`debug`, `release`). Each section has the following properties:

| key                       | description                                                                                                                                          |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| certificateFile           | String path to the certificate file.                                                                                                                 |
| certificatePassword       | String value of the certificate file's password.<br /><br />**Alternative**: The password can be set on the environment variable `CSC_KEY_PASSWORD`. |
| certificateSubjectName    | String value of the signing certificate's subject.<br /><br />&#10071; Required for EV Code Signing and requires Windows                             |
| certificateSha1           | String value of the SHA1 hash of the signing certificate.<br /><br />&#10071; Requires Windows                                                       |
| signingHashAlgorithms     | Collection of singing algorithms to be used. (`sha1`, `sha256`)<br /><br />&#10071; AppX builds only support `sha256`                                |
| additionalCertificateFile | String path to the additional certificate files.                                                                                                     |

**Example Config:**

```
{
  "electron": {
    "windows": {
      "package": [
        "nsis"
      ],
      "signing": {
        "release": {
          "certificateFile": "path_to_files",
          "certificatePassword": "password"
        }
      }
    }
  }
}
```

### Linux Signing

There are not signing requirements for Linux builds.

## Plugins

All browser-based plugins are usable with the Electron platform.

When adding a plugin, if the plugin supports both the `electron` and `browser` platform, the `electron` portion will be used. If the plugin misses `electron` but contains the `browser` implementation, it will fall back on the `browser` implementation.

Internally, Electron is using Chromium (Chrome) as its web view. Some plugins may have conditions written specifically for each different browser. In this case, it may affect the behavior of what is intended. Since Electron may support feature that the browser does not, these plugins would possibly need to be updated for the `electron` platform.
