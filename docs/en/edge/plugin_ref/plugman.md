---
license: Licensed to the Apache Software Foundation (ASF) under one
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

# Using Plugman to Manage Plugins

From version 3.0 onward, Cordova implements all device APIs as
plugins, and leaves them disabled by default. It also supports two
different ways to add and remove plugins, depending on your choice of
workflow discussed in the Overview:

- If you use a cross-platform workflow, you use the `cordova` CLI
  utility to add plugins, as described in The Command-Line Interface.
  The CLI modifies plugins for all specified platforms at once.

- If you use a platform-centered workflow, you use a lower-level
  [Plugman](https://github.com/apache/cordova-plugman/) command-line
  interface, separately for each targeted platform.

This section details the Plugman utility.  For more information on
consuming Plugman as a node module or modifying the source code, see
[the README file in its repository](https://github.com/apache/cordova-plugman/blob/master/README.md).

## Installing Plugman

To install plugman, you must have [node](http://nodejs.org/) installed
on your machine. Then you can run the following command from anywhere
in your environment to install plugman globally, so that it is
available from any directory:

    $ npm install -g plugman

You must have also have `git` on your `PATH` to be able to install plugins directly from remote git URLs.

__TIP__: If you find that after installing plugman with `npm` you are
still unable to run any `plugman` commands, make sure that you have
added the `/npm/` directory into your `PATH`.

__NOTE__: You can skip this step if you don't want to pollute your
global `npm` namespace by installing Plugman globally. If this is the
case, then when you create a Cordova project with the shell tools,
there will be a `node_modules` directory inside your project which
contains Plugman.  Since you did not install globally, you need to
invoke `node` for each Plugman command, for example `node
./node_modules/plugman/main.js -version`.  The rest of this guide
assumes you have installed Plugman globally, meaning you can invoke it
with just `plugman`.

## Create a Cordova Project

Before you can use Plugman, you must create a Cordova project.  You can do this with either the Command-line Interface or with
the lower level shell scripts. Instructions for using the shell scripts to create your project are located in the various "Command-line Tools" guides
listed on the Platform Guides page. 

## Adding a Plugin

Once you have installed Plugman and have created a Cordova project, you can start adding plugins to the platform with:

    $ plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <name|url|path> [--plugins_dir <directory>] [--www <directory>] [--variable <name>=<value> [--variable <name>=<value> ...]]

Using minimum parameters, this command installs a plugin into a cordova project. You must specify a platform and cordova project location for that platform. You also must specify a plugin, with the different `--plugin` parameter forms being:

  * `name`: The directory name where the plugin contents exist. This must be an existing directory under the `--plugins_dir` path (see below for more info) or a plugin in the Cordova registry.
  * `url`: A URL starting with https:// or git://, pointing to a valid git repository that is clonable and contains a `plugin.xml` file. The contents of this repository would be copied into the `--plugins_dir`.
  * `path`: A path to a directory containing a valid plugin which includes a `plugin.xml` file. This path's contents will be copied into the `--plugins_dir`.
  
Other parameters: 

* `--plugins_dir` defaults to `<project>/cordova/plugins`, but can be any directory containing a subdirectory for each fetched plugin.
* `--www` defaults to the project's `www` folder location, but can be any directory that is to be used as cordova project application web assets.
* `--variable` allows to specify certain variables at install time, necessary for certain plugins requiring API keys or other custom, user-defined parameters. Please see the [plugin specification](plugin_ref_spec.md.html#Plugin%20Specification) for more information.

## Remove a Plugin

To uninstall a plugin, you simply pass the `--uninstall` flag and provide the plugin ID.

    $ plugman --uninstall --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin <id> [--www <directory>] [--plugins_dir <directory>]


## Help Commands

Plugman features a global help command which may help you if you get stuck or are experiencing problems. It will display
a list of all available Plugman commands and their syntax:

    plugman -help
    plugman  # same as above

   **NOTE**: `plugman -help` may show some additional registry-related commands. These commands are for plugin developers and may not be implemented on third-party plugin registries.


You can also append the `--debug|-d` flag to any Plugman command to run that command in verbose mode, which will display
any internal debugging messages as they are emitted and may help you track down problems like missing files. 

    # Adding Android battery-status plugin to "myProject":
    plugman -d --platform android --project myProject --plugin org.apache.cordova.battery-status

Finally, you can use the `--version|-v` flag to see which version of Plugman you are using.

    plugman -v
    
## Registry Actions

There are a number of plugman commands that can be used for interacting with the [Plugin registry](http://plugins.cordova.io).
Please note that these registry commands are specific to the _plugins.cordova.io_ plugin registry and may not be implemented by
third-party plugin registries.

### Searching for a Plugin

You can use Plugman to search the [Plugin registry](http://plugins.cordova.io) for plugin id's that match the given space separated list of keywords.

    plugman search <plugin keywords>

### Changing the Plugin Registry

You can get or set the URL of the current plugin registry that plugman is using. Generally you should leave this set at http://registry.cordova.io unless you want to use a third party plugin registry.

    plugman config set registry <url-to-registry>
    plugman config get registry

### Get Plugin Information

You can get information about any specific plugin stored in the plugin repository with:

    plugman info <id>

This will contact the plugin registry and fetch information such as the plugin's version number. 

## Installing Core Plugins

The examples below show how to add plugins as needed so that any
Cordova APIs you use in your project still work after you upgrade to
version 3.0.  For each command, you need to select the target
platform, and reference the platform's project directory.

* cordova-plugin-battery-status

    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.battery-status

* cordova-plugin-camera
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.camera
    
* cordova-plugin-console
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.console

* cordova-plugin-contacts
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.contacts
    
* cordova-plugin-device
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device

* cordova-plugin-device-motion (accelerometer)
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-motion

* cordova-plugin-device-orientation (compass)
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.device-orientation

* cordova-plugin-dialogs
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.dialogs

* cordova-plugin-file
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file

* cordova-plugin-file-transfer
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.file-transfer

* cordova-plugin-geolocation
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.geolocation

* cordova-plugin-globalization
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.globalization

* cordova-plugin-inappbrowser
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.inappbrowser

* cordova-plugin-media
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media

* cordova-plugin-media-capture
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.media-capture

* cordova-plugin-network-information
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.network-information

* cordova-plugin-splashscreen
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.splashscreen

* cordova-plugin-vibration
    plugman --platform <ios|amazon-fireos|android|blackberry10|wp7|wp8> --project <directory> --plugin org.apache.cordova.vibration
