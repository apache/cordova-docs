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

title: Splashscreen
---

# Splashscreen

> Displays and hides the application's splash screen.

## Methods

- [splashscreen.show](splashscreen.show.html)
- [splashscreen.hide](splashscreen.hide.html)

## Accessing the Feature

As of version 3.0, Cordova implements device-level APIs as _plugins_.
Use the CLI's `plugin` command, described in The Command-Line
Interface, to add or remove this feature for a project:

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Amazon Fire OS (in `res/xml/config.xml`)

        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>

* Android (in `res/xml/config.xml`)

        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>

* iOS (in the named application directory's `config.xml`)

        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>

Some platforms may support this feature without requiring any special
configuration.  See [Platform Support](../../guide/support/index.html) for an overview.

See [Icons and Splash Screens](../../config_ref/images.html) for information on how to configures these images.
