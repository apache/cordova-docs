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
---

# Platforms and Plugins Version Management
From version 4.3.0 onwards, Cordova provides the ability to save and restore platforms and plugins. 

This feature allows developers to save and restore their app to a known state without having to check in all of the platform and plugin source code.

The 'save' command stores details about the app's platform and plugin versions in config.xml.
The 'restore' step happens automatically when a **'cordova prepare'** is issued, making use of information previously saved in the config.xml file.

One scenario where save/restore capabilities come in handy is in large teams that work on an app, with each team member focusing on a platform or plugin. This feature makes it easier to share the project and reduce the amount of redundant code that is checked in the repository.


## Platform Versioning

### Saving platforms
To save a platform, you issue the following command :

    $ cordova platform add <platform[@<version>] | directory | git_url> --save

After running the above command, the resulting config.xml looks like :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>


Some examples :

  * **'cordova platform add android --save'** => retrieves the pinned version of the android platform, adds it to the project and then updates config.xml.
  * **'cordova platform add android@3.7.0 --save'** => retrieves the android platform, version 3.7.0 from npm, adds it to the project and then updates config.xml.
  * **'cordova platform add android@https://github.com/apache/cordova-android.git​ --save'** => clones the specified cordova-android git repository, adds the android platform to the project, then updates config.xml and point its version to the specified git-url.
  * **'cordova platform add C:/path/to/android/platform --save'** => retrieves the android platform from the specified directory, adds it to the project, then updates config.xml and point to the directory.

### Mass saving platforms on an existing project
The '--save' flag described above is only useful when you remember to use it during the platform addition.
If you have a pre-existing project and you want to save all the currently added platforms in your project, you can use :

    $ cordova platform save


### Updating / Removing platforms
It is also possible to update/delete from config.xml during the commands 'cordova platform update' and 'cordova platform remove' :

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
Some examples :

  * **'cordova platform update android --save'** => In addition to updating the android platform to the pinned version, update config.xml entry
  * **'cordova platform update android@3.8.0 --save'** => In addition to updating the android platform to version 3.8.0, update config.xml entry
  * **'cordova platform update /path/to/android/platform --save'** => In addition to updating the android platform to version in the folder, update config.xml entry
  * **'cordova platform remove android --save'** => Removes the android platform from the project and deletes its entry from config.xml.


### Restoring platforms

Platforms are automatically restored from config.xml when the **'cordova prepare'** command is run.

If you add a platform without specifying a version/folder/git_url, the version to install is taken from config.xml, **if found**.

Example:

Suppose your config.xml file contains the following entry:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>

If you run the command **'cordova platform add android'** (no version/folder/git_url specified), the platform 'android@3.7.0' (as retrieved from config.xml) will be installed.



---

## Plugin Versioning
_(The plugin commands are a mirror of the platform commands)_

### Saving plugins
To save a plugin, you issue the following command :

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save

After running the above command, the resulting config.xml looks like :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>


Some examples :

  * **'cordova plugin add cordova-plugin-console --save'** => retrieves the pinned version of the console plugin, adds it to the project and then updates config.xml.
  * **'cordova plugin add cordova-plugin-console@0.2.13 --save'** => retrieves the android plugin, version 0.2.13 from npm, adds it to the project and then updates config.xml.
  * **'cordova plugin add https://github.com/apache/cordova-plugin-console.git --save'** => clones the specified console plugin git repository, adds the console plugin to the project, then updates config.xml and point its version to the specified git-url.
  * **'cordova plugin add C:/path/to/console/plugin --save'** => retrieves the console plugin from the specified directory, adds it to the project, then updates config.xml and point to the directory.

### Mass saving plugins on an existing project
The '--save' flag described above is only useful when you remember to use it during the plugin addition.
If you have a pre-existing project and you want to save all currently added plugins in the project, you can use :

    $ cordova plugin save


### Updating / Removing plugins
It is also possible to update/delete from config.xml during the commands 'cordova plugin update' and 'cordova plugin remove' :

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
Some examples :

  * **'cordova plugin update cordova-plugin-console --save'** => In addition to updating the console plugin to the pinned version, update config.xml entry
  * **'cordova plugin update cordova-plugin-console@0.2.13 --save'** => In addition to updating the android plugin to version 3.8.0, update config.xml entry
  * **'cordova plugin update /path/to/console/plugin --save'** => In addition to updating the console plugin to version in the folder, update config.xml entry
  * **'cordova plugin remove cordova-plugin-console --save'** => Removes the console plugin from the project and deletes its entry from config.xml.


### Restoring plugins

Plugins are automatically restored from config.xml when the **'cordova prepare'** command is run.

If you add a plugin without specifying a version/folder/git_url, the version to be installed is taken from config.xml, **if found**.

Example:

Suppose your config.xml file contains the following entry:

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>

If you run the command **'cordova plugin add cordova-plugin-console'** (no version/folder/git_url specified), the plugin 'cordova-plugin-console@0.2.11' (as retrieved from config.xml) will be installed.

