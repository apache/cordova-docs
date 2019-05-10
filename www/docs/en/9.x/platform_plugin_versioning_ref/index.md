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

title: Platforms and Plugins Version Management
toc_title: Manage versions and platforms
description: How to manage platforms and Cordova CLI versions.
---

# Platforms and Plugins Version Management

Cordova provides the ability to save and restore platforms and plugins.

This feature allows developers to save and restore their app to a known state without having to check in all of the platform and plugin source code.

When adding a platform or plugin, details about the app's platform and plugin versions are automatically saved to the `package.json` file. It is also possible to add a platform or plugin by editing the `package.json` file directly, assuming you know the right tags and syntax. It is not possible to remove plugins or platforms in this manner. The recommended method of adding and removing plugins and platforms is with the Cordova CLI commands `cordova plugin add|remove ...` and `cordova platform add|remove ...` to avoid any out of sync issues.

The **restore** step happens automatically when a **`cordova prepare`** is issued, making use of information previously saved in the `package.json` and `config.xml` files.

One scenario where save/restore capabilities come in handy is in large teams that work on an app, with each team member focusing on a platform or plugin. This feature makes it easier to share the project and reduce the amount of redundant code that is checked in the repository.

## Platform Versioning

### Saving Platforms

To save a platform, issue the following command:

```bash
cordova platform add <platform[@<version>] | directory | git_url>
```

After running the above command, the **`package.json`** should contain something as seen below:

```json
"cordova": {
  "platforms": [
    "android"
  ]
},
"dependencies": {
  "cordova-android": "^8.0.0",
}
```

The `--nosave` flag prevents adding and deleting specified platforms to the `package.json` file. To prevent saving a platform, issue the following command:

```bash
cordova platform add <platform[@<version>] | directory | git_url> --nosave
```

Some Examples:

* **`cordova platform add android`** 

  Retrieves the pinned version of `cordova-android` platform from npm, adds it to the project and updates the `package.json` file.

* **`cordova platform add android@7.1.4`**

  Retrieves the `cordova-android` platform version `7.1.4` from npm, adds it to the project and updates the `package.json` file.

* **`cordova platform add https://github.com/apache/cordova-android.git`**
  
  **`cordova platform add https://github.com/apache/cordova-android`**
  
  **`cordova platform add github:apache/cordova-android`**

  npm retrieves the `cordova-android` platform from the git repository, adds it to the project and updates the `package.json`.
  
* **`cordova platform add C:/path/to/android/platform`**

  Retrieves the Android platform from the specified directory, adds it to the project, and updates the `package.json` file.

* **`cordova platform add android --nosave`**

  Retrieves the pinned version of `cordova-android` platform from npm, adds it to the project, but does not add it to the `package.json` file.

### Updating or Removing Platforms

It is possible to update and delete a platform from `config.xml` and `package.json`.

To update a platform, execute the following command:

```bash
cordova platform update <platform[@<version>] | directory | git_url>
```

To remove a platform, execute one of the following commands:

```bash
cordova platform remove <platform>
cordova platform rm <platform>
```

Some Examples:

* **`cordova platform update android`**

  In addition to updating the `cordova-android` platform to the pinned version, it updates the `package.json` file.

* **`cordova platform update android@3.8.0`**

  In addition to updating the `cordova-android` platform to version `3.8.0` it updates the `package.json` file.

* **`cordova platform update /path/to/android/platform`**

  In addition to updating the `cordova-android` platform to version found in the provided folder, it updates the `package.json` file.

* **`cordova platform remove android`**

  Removes the `cordova-android` platform from the project and removes it from the `package.json` file.
  
  _Note: If the platform definition existed in `config.xml` from a previous version of Cordova CLI, it will also be removed from `config.xml`._

* **`cordova platform remove android --nosave`**

  Removes the `cordova-android` platform from the project, but does not remove it from the `package.json` file.

### Restoring Platforms

Platforms are automatically restored from the `package.json` (and `config.xml`) when executing the **`cordova prepare`** command.

If a platform is defined in both files, the information defined in `package.json` is used as the source of truth.

After `prepare`, any platforms restored from `config.xml` will update the `package.json` file to reflect the values taken from `config.xml`.

If you add a platform without specifying a `<version | folder | git_url>`, the version that will be installed is taken from `package.json` or `config.xml`.

**If discovered** in both files, `package.json` is given higher priority over `config.xml`.

Example:

Suppose your `config.xml` file contains the following entry:

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <engine name="android" spec="7.1.4" />
    ...
</xml>
```

If you run the command **`cordova platform add android`** with no `<version | folder | git_url>` specified, the platform `android@7.1.4` will be retrieved and installed.

**Example Order of Priority for Restoring Platforms:**

Suppose you have defined in `config.xml` and `package.json` a platform and version as follows:

**`config.xml`**:

```xml
<engine name="android" spec=“7.4.1” />
```

**`package.json`**:

```json
"cordova": {
  "platforms": [
    "android"
  ]
},
"dependencies": {
  "cordova-android": "^8.0.0"
}
```

When `prepare` is executed, the version from `package.json` has higher priority over `config.xml` and version `^8.0.0` will be installed.

---

## Plugin Versioning

The plugin commands are a mirror of the platform commands:

### Saving Plugins

To save a plugin, you issue the following command:

```bash
cordova plugin add <plugin[@<version>] | directory | git_url>
```

After running the above command, the **`package.json`** should contain something as seen below:

```json
"cordova": {
  "plugins": [
    "cordova-plugin-device"
  ]
},
"devDependencies": {
  "cordova-plugin-device": "^1.0.0"
}
```

The `--nosave` flag prevents adding and deleting specified plugins from `package.json`. To prevent saving a plugin, you issue the following command:

```bash
cordova plugin add <plugin[@<version>] | directory | git_url> --nosave
```

Some Examples:

* **`cordova plugin add cordova-plugin-device`**

  Retrieves the pinned version of the `cordova-plugin-device` plugin from npm, adds it to the project and updates the `package.json` file.

* **`cordova plugin add cordova-plugin-device@2.0.1`**

  Retrieves the `cordova-plugin-device` plugin at version `2.0.1` from npm, adds it to the project and updates the `package.json` file.

* **`cordova plugin add https://github.com/apache/cordova-plugin-device.git`**
  
  **`cordova plugin add https://github.com/apache/cordova-plugin-device`**
  
  **`cordova plugin add github:apache/cordova-plugin-device`**

  npm retrieves the `cordova-plugin-device` plugin from the git repository, adds it to the project and updates the `package.json`.

* **`cordova plugin add C:/path/to/console/plugin`**

  Retrieves the `cordova-plugin-device` plugin from the specified directory, adds it to the project, and updates the `package.json` file.

### Mass Saving of Plugins on an Existing Project

If you have a pre-existing project and you want to save all currently added plugins in the project, you can use:

```bash
cordova plugin save
```

### Removing Plugins

It is possible to delete a plugin from `config.xml` and `package.json` with one of the following commands:

```bash
cordova plugin remove <plugin>
cordova plugin rm <plugin>
```

For Example:

* **`cordova plugin remove cordova-plugin-device`**

  Removes the `cordova-plugin-device` plugin from the project and deletes its entry from `package.json`.

  _Note: If the plugin definition existed in `config.xml` from a previous version of Cordova CLI, it will also be removed from `config.xml`._

### Restoring Plugins

Plugins are automatically restored from `package.json` and `config.xml` when executing the **`cordova prepare`** command.

If a plugin is defined in both files, the information defined in `package.json` is used as the source of truth.

After `prepare`, any plugins restored from `config.xml` will update the `package.json` file to reflect the values taken from `config.xml`.

If you add a plugin without specifying a `<version | folder | git_url>`, the version that will be installed is taken from `package.json` or `config.xml`.

**If discovered** in both files, `package.json` is given higher priority over `config.xml`.

Example:

Suppose your `config.xml` file contains the following entry:

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <plugin name="cordova-plugin-device" spec="2.0.1" />
    ...
</ xml>
```

If you run the command **`cordova plugin add cordova-plugin-device`** with no `<version | folder | git_url>` specified, the platform `cordova-plugin-device@2.0.1` will be retrieved and installed.

**Example Order of Priority for Restoring Plugins:**

Suppose you have defined in `config.xml` and `package.json` a plugin and version as follows:

**`config.xml`**:

```xml
<plugin name="cordova-plugin-splashscreen"/>
```

**`package.json`**:

```json
"cordova": {
  "plugins": [
    "cordova-plugin-splashscreen"
  ]
},
"devDependencies": {
  "cordova-plugin-splashscreen": "1.0.0"
}
```

When `prepare` is executed, the version from `package.json` has higher priority over `config.xml` and version `1.0.0` will be installed.
