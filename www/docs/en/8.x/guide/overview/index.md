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

title: Architectural overview of Cordova platform
toc_title: Overview
description: Start here if you are new to Cordova. Includes installation and next steps.
---

# Overview

Apache Cordova is an open-source mobile development framework. It allows you
to use standard web technologies - HTML5, CSS3, and JavaScript
for cross-platform development. Applications execute within wrappers targeted
to each platform, and rely on standards-compliant API bindings to
access each device's capabilities such as sensors, data, network status, etc.

Use Apache Cordova if you are:

* a mobile developer and want to extend an application across more
  than one platform, without having to re-implement it with each
  platform's language and tool set.

* a web developer and want to deploy a web app that's packaged for
  distribution in various app store portals.

* a mobile developer interested in mixing native application
  components with a _WebView_ (special browser window) that can access
  device-level APIs, or if you want to develop a plugin interface
  between native and WebView components.

# Architecture

There are several components to a cordova application. The following
diagram shows a high-level view of the cordova application architecture.

![]({{ site.baseurl }}/static/img/guide/cordovaapparchitecture.png)

## WebView

The Cordova-enabled WebView may provide the application with its
entire user interface. On some platforms, it can also be a component
within a larger, hybrid application that mixes the WebView with native
application components.
(See [Embedding WebViews](../hybrid/webviews/index.html) for details.)

## Web App

This is the part where your application code resides. The application itself is
implemented as a web page, by default a local file named _index.html_, that
references CSS, JavaScript, images, media files, or other resources
are necessary for it to run. The app executes in a _WebView_ within the native
application wrapper, which you distribute to app stores.

This container has a very crucial file - [config.xml](../../config_ref/index.html)
file that provides information about the app and specifies parameters affecting how it
works, such as whether it responds to orientation shifts.

## Plugins

Plugins are an integral part of the cordova ecosystem. They provide
an interface for Cordova and native components to communicate with each
other and bindings to standard device APIs. This enables you to invoke native
code from JavaScript.

Apache Cordova project maintains a set of plugins called the
[Core Plugins](../support/index.html#core-plugin-apis). These core
plugins provide your application to access device capabilities such as
battery, camera, contacts, etc.

In addition to the core plugins, there are several third-party plugins which
provide additional bindings to features not necessarily available on all
platforms. You can search for Cordova plugins using [plugin search](/plugins/) or [npm](https://www.npmjs.com/search?q=ecosystem%3Acordova). You can also
develop your own plugins, as described in the
[Plugin Development Guide](../hybrid/plugins/index.html). Plugins may be
necessary, for example, to communicate between Cordova and custom native
components.

__NOTE__: When you create a Cordova project it does not have
any plugins present. This is the new default behavior. Any plugins you
desire, even the core plugins, must be explicitly added.

Cordova does not provide any UI widgets or MV* frameworks. Cordova provides
only the runtime in which those can execute. If you wish to use UI widgets
and/or an MV* framework, you will need to select those and include them in
your application.

## Development Paths

Cordova provides you two basic workflows to create a mobile
app. While you can often use either workflow to accomplish the same
task, they each offer advantages:

- __Cross-platform (CLI) workflow__: Use this workflow if you want your app
  to run on as many different mobile operating systems as possible,
  with little need for platform-specific development. This workflow
  centers around the `cordova` CLI. The CLI is a high-level tool that allows you to build projects
  for many platforms at once, abstracting away much of the functionality of
  lower-level shell scripts. The CLI copies a common set of web assets into
  subdirectories for each mobile platform, makes any necessary
  configuration changes for each, runs build scripts to generate
  application binaries. The CLI also provides a common interface to
  apply plugins to your app. To get started follow the steps in the
  [Create your first app] guide. Unless you have a need for the platform-centered workflow, the cross-platform workflow is recommended.

- __Platform-centered workflow__: Use this workflow if you want to
  focus on building an app for a single platform and need to be able
  to modify it at a lower level. You need to use this approach, for
  example, if you want your app to mix custom native components with
  web-based Cordova components, as discussed in
  [Embedding WebViews](../hybrid/webviews/index.html). As a rule of thumb, use
  this workflow if you need to modify the project within the SDK. This
  workflow relies on a set of lower-level shell scripts that are tailored for
  each supported platform, and a separate Plugman utility that allows you to
  apply plugins. While you can use this workflow to build cross-platform
  apps, it is generally more difficult because the lack of a
  higher-level tool means separate build cycles and plugin
  modifications for each platform.

When first starting out, it may be easiest to use the cross-platform
workflow to create an app, as described in [Create your first app] guide.
You then have the option to switch to a platform-centered workflow if
you need the greater control the SDK provides.

> __NOTE__: Once you switch from the CLI-based workflow to one centered
around the platform-specific SDKs and shell tools, you can't go back.
The CLI maintains a common set of cross-platform source code, which on
each build it uses to write over platform-specific source code. To
preserve any modifications you make to the platform-specific assets,
you need to switch to the platform-centered shell tools, which ignore
the cross-platform source code, and instead relies on the
platform-specific source code.

## Installing Cordova

The installation of Cordova will differ depending on the workflow above
you choose:

  * Cross-platform workflow: See [Create your first app] guide.

  * Platform-centered workflow.

After installing Cordova, it is recommended that you review the
```Develop for Platforms``` section for the mobile platforms that you
will be developing for. It is also recommended that you also review the
[Privacy Guide](../appdev/privacy/index.html) and
[Security Guide](../appdev/security/index.html).

[Create your first app]:../cli/index.html
