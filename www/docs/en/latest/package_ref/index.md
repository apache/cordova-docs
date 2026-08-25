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

title: package.json API
description: List of Cordova-specific fields in the package.json file, and when the CLI updates them.
---

{% cdv_platform inject %}

# package.json API

Alongside `config.xml`, every Cordova project created with the CLI also has a standard npm `package.json` file. Cordova's tooling reads from and writes to a handful of fields in this file automatically, in addition to `config.xml`, to keep track of your project's platforms, plugins, and metadata.

This page lists the Cordova-specific fields you may find in your `package.json`, and explains when and how the CLI updates each one, so that you know what's safe to edit by hand and what's managed for you.

**Sample `package.json`:**

```json
{
  "name": "io.cordova.hellocordova",
  "displayName": "HelloCordova",
  "version": "1.0.0",
  "description": "Sample Apache Cordova App",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "cordova": {
    "platforms": [
      "android",
      "ios"
    ],
    "plugins": {
      "cordova-plugin-device": {}
    }
  },
  "devDependencies": {
    "cordova-android": "^13.0.0",
    "cordova-ios": "^7.0.0",
    "cordova-plugin-device": "^2.1.0"
  }
}
```

## name, displayName, version

Set automatically when a project is first created with `cordova create`. These values are copied from the corresponding attributes in `config.xml`, and kept in sync with them.

Field | Description
----------------- | ------------
name | Copied from `config.xml`'s `widget id` attribute (the app's reverse-DNS identifier), converted to lowercase.
displayName | Copied from `config.xml`'s `<name>` element (the app's human-readable name).
version | Copied from `config.xml`'s `widget version` attribute.

Examples:

```json
{
  "name": "io.cordova.hellocordova",
  "displayName": "HelloCordova",
  "version": "1.0.0"
}
```

## cordova.platforms

An array listing the platforms currently installed in the project. Entries are added automatically when you run `cordova platform add <platform>`, and removed when you run `cordova platform remove <platform>`. Adding a platform that's already listed will not create a duplicate entry.

> [!NOTE]
> By default, `cordova platform add` and `cordova plugin add` automatically save what you installed into `package.json` (and `config.xml`). If you'd rather install something without permanently adding it to your project's configuration, for example, to test a plugin temporarily, pass the `--nosave` flag:
>
> ```bash
> cordova platform add android --nosave
> cordova plugin add cordova-plugin-camera --nosave
> ```
>
> This applies to `cordova.platforms`, `cordova.plugins`, and `devDependencies` all at once, there's a single flag, not one per field.

Examples:

```json
{
  "cordova": {
    "platforms": ["android", "ios"]
  }
}
```

```bash
cordova platform add android
cordova platform add ios --nosave
```

## cordova.plugins

An object listing the plugins currently installed in the project. Each key is a plugin's ID, and its value holds any CLI variables that were supplied when the plugin was installed (or an empty object if none were needed). Entries are added by `cordova plugin add <plugin>` and removed by `cordova plugin remove <plugin>`. See the note on `--nosave` above, it applies here too.

Examples:

```json
{
  "cordova": {
    "plugins": {
      "cordova-plugin-camera": {},
      "cordova-plugin-some-plugin": {
        "API_KEY": "my-api-key"
      }
    }
  }
}
```

```bash
cordova plugin add cordova-plugin-camera
cordova plugin add cordova-plugin-some-plugin --variable API_KEY=my-api-key
```

## devDependencies

A standard npm field, not unique to Cordova. When a platform or plugin is installed, Cordova's tooling also records it here as an npm dependency, alongside its installed version number. This is separate from `cordova.platforms` and `cordova.plugins` above: those track *which* platforms/plugins are part of the project and their configuration, while `devDependencies` tracks the actual npm package and version that was fetched.

This is controlled by the same `--nosave` flag mentioned in the note under `cordova.platforms` above, there isn't a separate flag just for `devDependencies`.

Examples:

```json
{
  "devDependencies": {
    "cordova-android": "^13.0.0",
    "cordova-plugin-camera": "^7.0.0"
  }
}
```