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

title: Project Settings
---

Project Settings
================

You can set various application configuration parameters using a platform-agnostic configuration file, `config.xml`.
This file is based on the W3C [Packaged Web Apps (Widgets)](http://www.w3.org/TR/widgets/) specification. 

The location of the `config.xml` file is different depending on the platform. The contents, in general, are not. 

## Platform-Specific Properties

As with any abstraction layer, Apache Cordova cannot be a perfect silver bullet. As such, some native and platform-specific
properties, characterstics and behaviours are encapsulated as much as possible as `<preference>` elements inside the
`config.xml` file. The following sub-sections linked to are guides which go into more details about these preferences.

- [Project Settings for iOS](ios/index.html)
- [Project Settings for Android](android/index.html)
- [Project Settings for BlackBerry](blackberry/index.html)
- [Project Settings for Windows Phone 7](wp7/index.html)
- [Project Settings for Windows Phone 8](wp8/index.html)
- [Project Settings for Windows 8](windows8/index.html)
- [Project Settings for webOS](webos/index.html)
- [Project Settings for Bada](bada/index.html)
- [Project Settings for FirefoxOS](firefoxos/index.html)

## config.xml Elements

The [Apache Cordova](http://cordova.io) project strives abstract away native platform specifics via web-inspired and web-based
abstractions that are heavily standards driven and adopted by the web community. Please take a few minutes to familiarize
yourself with the [config.xml specification](http://www.w3.org/TR/widgets/), to understand the type of application metadata the
Apache Cordova project aims to abstract and provide simple entry points for.

An example:

        <cordova>
            <preference name="MySetting" value="true" />
            <plugins>
                <plugin name="MyPlugin" value="MyPluginClass" />
            </plugins>
            <access origin="*" />
        </cordova>

A list of supported elements across major platforms which are supported in Apache Cordova follow.

### `<plugin>`

These elements map to native APIs that the application will be able to access. At runtime, the Apache Cordova framework checks
the `<plugin>` elements and maps them to native code to enable your Cordova application to access device APIs otherwise
unavailable to typical web-based applications.

### `<access>`

These elements define how your whitelist works. Please see the [Domain Whitelist Guide](../whitelist/index.html) for more information.  

### `<content>`

This element defines the start page of your application, relative to the project's standard web assets root folder. The default is "index.html". 
