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

title: Overview
---

# Overview

Cordova is an open-source mobile development framework. It allows you
to use standard web technologies such as HTML5, CSS3, and JavaScript
for cross-platform development, avoiding each mobile platforms' native
development language.  Applications execute within wrappers targeted
to each platform, and rely on standards-compliant API bindings to
access each device's sensors, data, and network status.

Use Cordova if you are:

* a mobile developer and want to extend an application across more
  than one platform, without having to re-implement it with each
  platform's language and tool set.

* a web developer and want to deploy a web app that's packaged for
  distribution in various app store portals.

* a mobile developer interested in mixing native application
  components with a _WebView_ (browser window) that can access
  device-level APIs, or if you want to develop a plugin interface
  between native and WebView components.

## Basic Components

Cordova applications rely on a common `config.xml` file that provides
information about the app and specifies parameters affecting how it
works, such as whether it responds to orientation shifts. This file
adheres to the W3C's
[Packaged Web App](http://www.w3.org/TR/widgets/),
or _widget_, specification.

The application itself is implemented as a web page, named
_index.html_ by default, that references whatever CSS, JavaScript,
images, media files, or other resources are necessary for it to run.
The app executes as a _WebView_ within the native application wrapper,
which you distribute to app stores.  For the web app to interact with
various device features the way native apps do, it must also reference
a `cordova.js` file, which provides API bindings.

The Cordova-enabled WebView may provide the application with its
entire user interface. It can also be a component within a larger,
hybrid application that mixes the WebView with native application
components.  Cordova provides a _plugin_ interface for these
components to communicate with each other.

## Development Paths

As of version 3.0, you can use two basic workflows to create
a mobile application. While you can accomplish the same
thing using both workflows, certain tasks are better suited to using one workflow 
over the other. For this reason, you should understand both workflows so
that you can use the best tool for the best situation.

The two main workflows that are supported are the _Web Project Dev_ workflow and the _Native Platform Dev_ workflow.

### Web Project Dev

You can think of the first workflow as the _Web Project Dev_ workflow. You should use
this workflow when you want to create a Cordova application that runs on 
as many mobile operating systems as possible with as little platform-specific
development work as possible. This workflow came into existence with Cordova 3.0
and the creation of the Cordova _Command-line Interface_ (CLI). The CLI abstracts
away a lot of the functionality of lower-level shell scripts that take care of the
details involved with building your app, such as copying your web assets into 
the correct folders for each mobile platform, making platform specific configuration
changes, or running specific build scripts to generate application binaries. You can read 
more about the _Web Project Dev_ workflow in The Command-line Interface. Please note
that often when people speak of the "CLI," they are talking about this _Web Project Dev_
workflow.

### Native Platform Dev

The second workflow can be thought of as a _Native Platform Dev_ workflow. You should use it
when you want to focus on building an application for a single platform and are 
interested in changing the lower-level platform details. While you can still use this workflow
to build cross-platform apps, the lack of tools to abstract away the various build steps will
make it more difficult. For example, you will have to use Plugman to
install the same plugin once for each platform that you want to support. The 
benefit to using this _Native Platform Dev_ workflow is that it gives you access to the lower-level
shell scripts to build and test the application, so if you are hacking on the native 
side of things, this workflow is the most efficient way to test your changes. This workflow
is also appropriate if you want to use the CordovaWebView as a small part in a larger native
application (See the [Embedding WebViews](../hybrid/webviews/index.html) guide.)  You can read about this workflow in the different
Shell Tool guides, for instance, Android Shell Tool Guide and iOS Shell Tool Guide.

When first starting out, it might be easiest to use the _Web Project Dev_ workflow
to create an application. (To install the CLI, see The Command-line Interface.)
Depending on the set of platforms you wish to target, you can rely on
the CLI for progressively greater shares of the development cycle:

* In the most basic scenario, you can use the CLI simply to create a
  new project that is populated with default configuration for you to
  modify.

* For many mobile platforms, you can also use the CLI to set up
  additional project files required to compile within each SDK.  For
  this to work, you must install each targeted platform's SDK.
  (See the [Platform Guides](../platforms/index.html) for instructions.)
  As indicated in the [Platform Support](../support/index.html) table, you may need to
  run the CLI on different operating systems depending on the targeted
  platform.

* For supporting platforms, the CLI can compile executible
  applications and run them in an SDK-based device emulator.
  For comprehensive testing, you can also generate application files
  and install them directly on a device.

At any point in the development cycle, you can switch to using more of the _Native Platform
Dev_ workflow. The platform-specific SDK tools provided may provide a richer set of
options. (See the [Platform Guides](../platforms/index.html) for details about each platform's SDK tool set.)

An SDK environment is more appropriate if you want implement a hybrid
app that mixes web-based and native application components.
You may use the command-line utility to initially generate the app, or
iteratively thereafter to feed updated code to SDK tools.  You may
also build the app's configuration file yourself.
(See [The config.xml File](../../config_ref/index.html) for details.)

