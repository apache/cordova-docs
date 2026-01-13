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

title: Project Structure of a Cordova Project
toc_title: Project Structure
description:
---

# Project Structure

## CLI's Default Directory Structure

A project created with Cordova CLI comes with the follow directory structure by default:

```text
myapp/
├── config.xml
├── node_modules/
├── package.json
├── platforms/
├── plugins/
└── www
```

### `package.json`

A manifest declaring what JavaScript package dependencies are used by your project, including Cordova, the added platforms, and any added plugins. This is also where plugin variable values are stored.

Your project might already have a `package.json` file with its own dependencies, or one generated from a framework. Cordova will simply add what it needs to the `package.json` file without interfering with other tools or dependencies.

### `config.xml`

Contains the preferences and configuration options for your Cordova application and allows you to customize the behavior of your project.

See also [`config.xml` reference documentation](../../config_ref/index.html).

### `www/`

Contains the project's web artifacts, such as HTML, CSS, JavaScript, and other resource asset files.

As a Cordova application developer, most of your code and assets will go here. They will be copied on a `cordova prepare` to each platform's `www` directory. The `www` source directory is reproduced within each platform's subdirectory, appearing for example in `platforms/ios/www` or `platforms/android/assets/www`. Because the CLI constantly copies over files from the source `www` folder, you should only edit these files and not the ones located under the platforms subdirectories.

If you use a JavaScript build tool, you should set it to output your production distribution files to the `www` folder.
If you are developing code in the `www` folder directly, you should add this folder to your version control system.

### `node_modules/`

This directory contains all of the JavaScript dependency packages from the npm JavaScript registry for Cordova and its tools, along with any dependencies of your project (as specified in `package.json`).

When adding a Cordova platform or plugin with the `cordova platform add` and `cordova plugin add` command, these platforms and plugins are fetched from the npmjs registry and downloaded into the `node_modules/` directory.

Cordova will then copy the necessary Cordova platform and plugin  source code from the `node_modules` directory and place them into the appropriate location for Cordova to function.

It also contain scripts that is used during the `cordova prepare` and `cordova build` for each platform.

The `node_modules` directory is  the original unedited source of truth and nothing should be edited in this directory. Additionally, this directory should not be checked into any version control system.

For more details, see [npmjs folders documentation](https://docs.npmjs.com/cli/v10/configuring-npm/folders#node-modules).

### `platforms/`

Contains all the source code and build scripts for the platforms that you add to your project.

> **WARNING:** When using the CLI to build your application, you should not edit any files in the /platforms/ directory unless you know what you are doing, or if documentation specifies otherwise. The files in this directory are routinely overwritten when preparing applications for building, or when plugins are re-installed.

### `plugins/`

The `plugins` directory is used as a staging area where installed plugins are copied before being applied to the `platforms` directory.

This directory should not be committed to version control.

If you've created custom, in-house or modified plugins and want to store them within the project, it's recommended **not** to store them in the `plugins` directory.

### Version control

It is recommended not to check in `platforms/` and `plugins/` directories into version control as they are considered a build artifact. Your platforms and plugins will be saved in `package.json` automatically. These platforms/plugins will be downloaded when `cordova prepare` is invoked.

## Optional Directories

### `merges/`

The `merges/` directory is not included by default when creating a Cordova project through the CLI. The use of this directory is generally discouraged but still supported.

Platform-specific web assets (HTML, CSS and JavaScript files) are contained within appropriate subfolders in this directory. These are deployed during a `prepare` to the appropriate native directory.  Files placed under `merges/` will override matching files in the `www/` folder for the relevant platform. A quick example, assuming a project structure of:

```text
myapp/
├── merges
│   ├── android/
│   │   └── android.js
│   └── ios/
│       └── app.js
└── www/
    └── app.js
```

After building the Android and iOS projects, the Android application will contain both `app.js` and `android.js`. However, the iOS application will only contain an `app.js`, and it will be the one from `merges/ios/app.js`, overriding the "common" `app.js` located inside `www/`.
