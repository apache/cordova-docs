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

title: Configuration Reference
---

# Configuration Reference

Many aspects of an application's behavior can be controlled with a
platform-agnostic configuration file, `config.xml`, which is formatted
based on the W3C's
[Packaged Web Apps (Widgets)](http://www.w3.org/TR/widgets/)
specification.

For projects created with the Cordova CLI (described in The
Command-line Interface), this file can be found in the top-level `www`
directory.  Using the CLI to build projects regenerates versions of
this file in various subdirectories within `platforms`. For non-CLI
projects, each platform-specific file serves as a source.

While the location of the `config.xml` file may change depending on
the platform, its contents generally do not. Some platform-specific
features are also specified in the same configuration file. Details
are listed below:

- [iOS Configuration](../guide/platforms/ios/config.html)
- [Android Configuration](../guide/platforms/android/config.html)
- [BlackBerry Configuration](../guide/platforms/blackberry/config.html)

## config.xml Elements

The [Apache Cordova](http://cordova.io) project strives abstract away native platform specifics via web-inspired and web-based
abstractions that are heavily standards driven and adopted by the web community. Please take a few minutes to familiarize
yourself with the [config.xml specification](http://www.w3.org/TR/widgets/), to understand the type of application metadata the
Apache Cordova project aims to abstract and provide simple entry points for.

An example:

        <widget>
            <preference name="MySetting" value="true" />
            <feature name="MyPlugin" value="MyPluginClass" />
            <access origin="*" />
            <content src="index.html" />
        </widget>

A list of supported elements across major platforms which are supported in Apache Cordova follow.

### `<feature>`

These elements map to native APIs that the application accesses. At
runtime, the Apache Cordova framework maps `<feature>` elements to
native code to enable your Cordova application to access device APIs
otherwise unavailable to typical web-based applications.

### `<access>`

These elements define how your whitelist works. Please see the
[Domain Whitelist Guide](../guide/appdev/whitelist/index.html) for more information.

### `<content>`

This element defines your application's start page relative to the
project's standard web assets root directory. This element is optional,
the default is `index.html`.
