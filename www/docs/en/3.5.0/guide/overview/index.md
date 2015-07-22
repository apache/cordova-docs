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

# Overview

Apache Cordova is an open-source mobile development framework. It allows you
to use standard web technologies such as HTML5, CSS3, and JavaScript
for cross-platform development, avoiding each mobile platforms' native
development language.  Applications execute within wrappers targeted
to each platform, and rely on standards-compliant API bindings to
access each device's sensors, data, and network status. 

Apache Cordova graduated in October 2012 as a top level project within the Apache Software Foundation (ASF). Through the ASF, future Cordova development will ensure open stewardship of the project. It will always remain free and open source under the Apache License, Version 2.0.  Visit [cordova.apache.org](http://cordova.apache.org) for more information.

Use Apache Cordova if you are:

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

Apache Cordova applications rely on a common `config.xml` file that provides
information about the app and specifies parameters affecting how it
works, such as whether it responds to orientation shifts. This file
adheres to the W3C's
[Packaged Web App](http://www.w3.org/TR/widgets/),
or _widget_, specification.

The application itself is implemented as a web page, named
_index.html_ by default, that references whatever CSS, JavaScript,
images, media files, or other resources are necessary for it to run.
The app executes as a _WebView_ within the native application wrapper,
which you distribute to app stores.

The Cordova-enabled WebView may provide the application with its
entire user interface. On some platforms, it can also be a component
within a larger, hybrid application that mixes the WebView with native
application components. (See Embedding WebViews for details.)

A _plugin_ interface is available for Cordova and native components to
communicate with each other. This enables you to invoke native code
from JavaScript. As of version 3.0, plugins provide
bindings to standard device APIs.  Third-party plugins provide
additional bindings to features not necessarily available on all
platforms. You can find these third-party plugins in the
[plugin registry](http://plugins.cordova.io) and use them in your
application. You can also develop your own plugins, as described in the
Plugin Development Guide. Plugins may be necessary, for example, to
communicate between Cordova and custom native components.

## Development Paths

As of version 3.0, you can use two basic workflows to create a mobile
app. While you can often use either workflow to accomplish the same
task, they each offer advantages:

- __Cross-platform workflow__: Use this workflow if you want your app
  to run on as many different mobile operating systems as possible,
  with little need for platform-specific development.  This workflow
  centers around the `cordova` utility, otherwise known as the Cordova
  _CLI_, that was introduced with Cordova 3.0. The CLI is a high-level
  tool that allows you to build projects for many platforms at once,
  abstracting away much of the functionality of lower-level shell
  scripts. The CLI copies a common set of web assets into
  subdirectories for each mobile platform, makes any necessary
  configuration changes for each, runs build scripts to generate
  application binaries. The CLI also provides a common interface to
  apply plugins to your app. For more details on the CLI, see The
  Command-Line Interface. Unless you have a need for the platform-centered
  workflow, the cross-platform workflow is recommended.

- __Platform-centered workflow__: Use this workflow if you want to
  focus on building an app for a single platform and need to be able
  to modify it at a lower level. You need to use this approach, for
  example, if you want your app to mix custom native components with
  web-based Cordova components, as discussed in Embedding WebViews.
  As a rule of thumb, use this workflow if you need to modify the
  project within the SDK.  This workflow relies on a set of
  lower-level shell scripts that are tailored for each supported
  platform, and a separate Plugman utility that allows you to apply
  plugins.  While you can use this workflow to build cross-platform
  apps, it is generally more difficult because the lack of a
  higher-level tool means separate build cycles and plugin
  modifications for each platform. Still, this workflow allows you
  greater access to development options provided by each SDK, and is
  essential for complex hybrid apps. See the various Platform Guides
  for details on each platform's available shell utilities.

When first starting out, it may be easiest to use the cross-platform
workflow to create an app, as described in The Command-line Interface.
You then have the option to switch to a platform-centered workflow if
you need the greater control the SDK provides.  Lower-level shell
utilities are available at
[cordova.apache.org](http://cordova.apache.org) in a separate
distribution than the CLI. For projects initially generated by the
CLI, these shell tools are also available in the project's various
`platforms/*/cordova` directories.

__NOTE__: Once you switch from the CLI-based workflow to one centered
around the platform-specific SDKs and shell tools, you can't go back.
The CLI maintains a common set of cross-platform source code, which on
each build it uses to write over platform-specific source code.  To
preserve any modifications you make to the platform-specific assets,
you need to switch to the platform-centered shell tools, which ignore
the cross-platform source code, and instead relies on the
platform-specific source code.

## Installing Cordova

The installation of Cordova will differ depending on the workflow above
you choose:

  * Cross-platform workflow: see The Command-Line Interface.

  * Platform-centered workflow: see the Platform Guides.

After installing Cordova, it is recommended that you review the Platform Guides
for the mobile platforms that you will be developing for. It is also
recommended that you also review the Privacy Guide, Security Guide, and
Next Steps. For configuring Cordova, see The config.xml File.
For accessing native function on a device from JavaScript, refer
to the Plugin APIs. And refer to the other included guides as necessary.
