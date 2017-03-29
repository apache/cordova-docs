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
From version 4.3.0 onwards, Cordova provides the ability to save and restore platforms and plugins.

This feature allows developers to save and restore their app to a known state without having to check in all of the platform and plugin source code.

When adding a platform or plugin, details about the app's platform and plugin versions are automatically saved in config.xml and package.json. It is possible to add a platform or plugin by editing package.json or config.xml directly, assuming you know the right tags + syntax. It is not possible to remove plugins or platforms in this manner. The recommended method of adding and removing plugins and platforms is with the command line cordova commands `cordova plugin add|remove ...` and `cordova platform add|remove ...` to avoid any out of sync issues.

The 'restore' step happens automatically when a **'cordova prepare'** is issued, making use of information previously saved in the config.xml and package.json files.

One scenario where save/restore capabilities come in handy is in large teams that work on an app, with each team member focusing on a platform or plugin. This feature makes it easier to share the project and reduce the amount of redundant code that is checked in the repository.


## Platform Versioning

### Saving platforms
To save a platform, you issue the following command :

```bash
$ cordova platform add <platform[@<version>] | directory | git_url>
```

After running the above command, the resulting config.xml looks like :

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <engine name="android" spec="~4.0.0" />
    ...
</xml>
```
After running the above command, the resulting package.json looks like :

```bash
"cordova": {"platforms": ["android"]},"dependencies": {"cordova-android": "^4.0.0"}
```
The '--nosave' flag prevents adding and deleting specified platforms from config.xml and package.json. To prevent saving a platform, you issue the following command :

```bash
$ cordova platform add <platform[@<version>] | directory | git_url> --nosave
```

Some examples :

  * **'cordova platform add android'** => retrieves the pinned version of the android platform, adds it to the project and then updates config.xml and package.json.
  * **'cordova platform add android@3.7.0'** => retrieves the android platform, version 3.7.0 from npm, adds it to the project and then updates config.xml and package.json.
  * **'cordova platform add https://github.com/apache/cordova-android.git'** => npm installs the specified cordova-android from the git repository, adds the android platform to the project, then updates config.xml and package.json and points its version to the specified git-url.
  * **'cordova platform add C:/path/to/android/platform'** => retrieves the android platform from the specified directory, adds it to the project, then updates config.xml and package.json and points to the directory.
  * **'cordova platform add android --nosave'** => retrieves the pinned version of the android platform, adds it to the project, but does not add it to config.xml or package.json.
  * **'cordova platform remove android --nosave'** =>  removes the android platform from the project, but does not remove it from config.xml or package.json.  

### Mass saving platforms on an existing project
If you have a pre-existing project and you want to save all the currently added platforms in your project, you can use :

```bash
$ cordova platform save
```

### Updating / Removing platforms
It is also possible to update/delete from config.xml and package.json during the commands 'cordova platform update' and 'cordova platform remove' :

```bash
$ cordova platform update <platform[@<version>] | directory | git_url> --save
$ cordova platform remove <platform>
```

Some examples :

  * **'cordova platform update android --save'** => In addition to updating the android platform to the pinned version, update config.xml entry
  * **'cordova platform update android@3.8.0 --save'** => In addition to updating the android platform to version 3.8.0, update config.xml entry
  * **'cordova platform update /path/to/android/platform --save'** => In addition to updating the android platform to version in the folder, update config.xml entry
  * **'cordova platform remove android'** => Removes the android platform from the project and deletes its entry from config.xml and package.json.


### Restoring platforms

Platforms are automatically restored from package.json and config.xml when the **'cordova prepare'** command is run. After prepare is run, package.json and config.xml should contain identical platforms and versions.

If you add a platform without specifying a version/folder/git_url, the version to install is taken from package.json or config.xml, **if found**. In case of conflicts, package.json is given precedence over config.xml.

Example:

Suppose your config.xml file contains the following entry:

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <engine name="android" spec="3.7.0" />
    ...
</xml>
```

If you run the command **'cordova platform add android'** (no version/folder/git_url specified), the platform 'android@3.7.0' (as retrieved from config.xml) will be installed.

**Example for order of precedence for restoring platforms:**

Suppose your config.xml has this platform and version:
```bash
<engine name="android" spec=“1.0.0” />
```

Suppose your package.json has this platform and version:

```bash
"cordova": {"platforms": ["android"]},"dependencies": {"cordova-android": "4.0.0"}
```

When prepare is run, package.json’s contents are giving precedence and both config.xml and package.json are updated so that they have identical platforms and variables. Notice how package.json's version (4.0.0) has **replaced** config.xml's version (1.0.0).

After running **'cordova prepare'** , the resulting config.xml looks like :
```bash
<engine name="android" spec=“4.0.0” />
```

After running **'cordova prepare'** , the resulting package.json looks like :
```bash
"cordova": {"platforms": ["android",]},"dependencies": {"cordova-android": "4.0.0"}
```
---

## Plugin Versioning
_(The plugin commands are a mirror of the platform commands)_

### Saving plugins
To save a plugin, you issue the following command :

```bash
$ cordova plugin add <plugin[@<version>] | directory | git_url>
```

After running the above command, the resulting config.xml looks like :

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <plugin name="cordova-plugin-console" spec="~1.0.0" />
    ...
</xml>
```

After running the above command, the resulting package.json looks like :

```bash
"cordova": {"plugins": ["cordova-plugin-console"]},"dependencies": {"cordova-plugin-console": "^1.0.0"}
```

The '--nosave' flag prevents adding and deleting specified plugins from config.xml and package.json. To prevent saving a plugin, you issue the following command :

```bash
$ cordova plugin add <plugin[@<version>] | directory | git_url> --nosave
```

Some examples :

  * **'cordova plugin add cordova-plugin-console'** => retrieves the pinned version of the console plugin, adds it to the project and then updates config.xml and package.json.
  * **'cordova plugin add cordova-plugin-console@0.2.13'** => retrieves the android plugin, version 0.2.13 from npm, adds it to the project and then updates config.xml and package.json.
  * **'cordova plugin add https://github.com/apache/cordova-plugin-console.git'** => npm installs specified console plugin from the git repository, adds the console plugin to the project, then updates config.xml and and package.json and points its version to the specified git-url.
  * **'cordova plugin add C:/path/to/console/plugin'** => retrieves the console plugin from the specified directory, adds it to the project, then updates config.xml and package.json and points to the directory.

### Mass saving plugins on an existing project
If you have a pre-existing project and you want to save all currently added plugins in the project, you can use :

```bash
$ cordova plugin save
```


### Removing plugins
It is also possible to delete from config.xml and package.json during the command 'cordova plugin remove' :

```bash
$ cordova plugin remove <plugin>
```
For example:

  * **'cordova plugin remove cordova-plugin-console'** => Removes the console plugin from the project and deletes its entry from config.xml and package.json.


### Restoring plugins

Plugins are automatically restored from package.json and config.xml when the **'cordova prepare'** command is run. After prepare is run, package.json and config.xml should contain identical plugins and versions.

If you add a plugin without specifying a version/folder/git_url, the version to install is taken from package.json or config.xml, **if found**. In case of conflicts, package.json is given precedence over config.xml.

Example:

Suppose your config.xml file contains the following entry:

```xml
<?xml version='1.0' encoding='utf-8'?>
    ...
    <plugin name="cordova-plugin-console" spec="0.2.11" />
    ...
</ xml>
```

If you run the command **'cordova plugin add cordova-plugin-console'** (no version/folder/git_url specified), the plugin 'cordova-plugin-console@0.2.11' (as retrieved from config.xml) will be installed.

**Example for order of precedence for restoring plugins:**

Supposed your config.xml has this plugin and version:

```bash
<plugin name="cordova-plugin-splashscreen"/>
```
Suppose your package.json has this plugin and version:

```bash
"cordova": {"plugins": {"cordova-plugin-splashscreen" : {} } },"dependencies": {"cordova-plugin-splashscreen": "1.0.0"}
```
When prepare is run, package.json’s contents are giving precedence and both config.xml and package.json are updated so that they have identical plugins and variables. Notice how package.json's version (1.0.0) is now in config.xml.

After running **'cordova prepare'** , the resulting config.xml looks like :

```bash
<plugin name="cordova-plugin-splashscreen" spec="1.0.0"/>
```

After running **'cordova prepare'** , the resulting package.json looks like :

```bash
"cordova": {"plugins": {"cordova-plugin-splashscreen" : {} } },"dependencies": {"cordova-plugin-splashscreen": "1.0.0"}
```