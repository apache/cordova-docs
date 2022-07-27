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
|-- package.json
|-- config.xml
|-- node_modules/
|-- www/
|-- platforms/
|-- plugins/
```

TODO resort properly

### `package.json`

TODO

### `config.xml`

Configures your application and allows you to customize the behavior of your project. See also [config.xml reference documentation][config.xml ref]

### `www/`

Contains the project's web artifacts, such as .html, .css and .js files. As a cordova application developer, most of your code and assets will go here. They will be copied on a `cordova prepare` to each platform's www directory. The www source directory is reproduced within each platform's subdirectory, appearing for example in `platforms/ios/www` or `platforms/android/assets/www`. Because the CLI constantly copies over files from the source www folder, you should only edit these files and not the ones located under the platforms subdirectories. If you use version control software, you should add this source www folder, along with the merges folder, to your version control system.

### `node_modules/`

TODO
Dependencies inistalled via NPM.
Base for `platforms` and `plugins`

### `platforms/`

Contains all the source code and build scripts for the platforms that you add to your project.

> **WARNING:** When using the CLI to build your application, you should not edit any files in the /platforms/ directory unless you know what you are doing, or if documentation specifies otherwise. The files in this directory are routinely overwritten when preparing applications for building, or when plugins are re-installed.

### `plugins/`

Any added plugins will be extracted or copied into this directory.

### Version control

It is recommended not to check in `platforms/` and `plugins/` directories into version control as they are considered a build artifact. Your platforms and plugins will be saved in `package.json` automatically. These platforms/plugins will be downloaded when `cordova prepare` is invoked.

## Optional Directories

### `merges/`

Platform-specific web assets (HTML, CSS and JavaScript files) are contained within appropriate subfolders in this directory. These are deployed during a `prepare` to the appropriate native directory.  Files placed under `merges/` will override matching files in the `www/` folder for the relevant platform. A quick example, assuming a project structure of:

```text
merges/
|-- ios/
| -- app.js
|-- android/
| -- android.js
www/
-- app.js
```

After building the Android and iOS projects, the Android application will contain both `app.js` and `android.js`. However, the iOS application will only contain an `app.js`, and it will be the one from `merges/ios/app.js`, overriding the "common" `app.js` located inside `www/`.
