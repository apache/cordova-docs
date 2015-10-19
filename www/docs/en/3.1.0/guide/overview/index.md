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
<!-- XREF
(See the API Reference for an overview, and the Application
Development Guide for examples of how to use them.)
XREF -->

The Cordova-enabled WebView may provide the application with its
entire user interface. It can also be a component within a larger,
hybrid application that mixes the WebView with native application
components.  Cordova provides a _plugin_ interface for these
components to communicate with each other.

## Development Paths

The easiest way to set up an application is to run the `cordova`
command-line utility, also known as the _command-line interface_
(CLI). (To install the CLI, see [The Command-line Interface](../cli/index.html).)
Depending on the set of platforms you wish to target, you can rely on
the CLI for progressively greater shares of the development cycle:

* In the most basic scenario, you can use the CLI simply to create a
  new project that is populated with default configuration for you to
  modify.

* For many mobile platforms, you can also use the CLI to set up
  additional project files required to compile within each SDK.  For
  this to work, you must install each targeted platform's SDK.
  (See the [Platform Guides](../platforms/index.html) for instructions.)
  As indicated in the Platform Support table below, you may need to
  run the CLI on different operating systems depending on the targeted
  platform.

* For supporting platforms, the CLI can compile executible
  applications and run them in an SDK-based device emulator.
  <!-- XREF
  (See Application Development Guide for details.)
  XREF -->
  For comprehensive testing, you can also generate application files
  and install them directly on a device.

At any point in the development cycle, you can also rely on
platform-specific SDK tools, which may provide a richer set of
options. 
(See the [Platform Guides](../platforms/index.html) for details about each platform's SDK tool set.)
An SDK environment is more appropriate if you want implement a hybrid
app that mixes web-based and native application components.
<!-- XREF
(See Hybrid Application Guide for more information.)
XREF -->
You may use the command-line utility to initially generate the app, or
iteratively thereafter to feed updated code to SDK tools.  You may
also build the app's configuration file yourself.
<!-- XREF
(See [The config.xml File](../../config_ref/index.html) for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## Platform Support

The following shows the set of development tools and device APIs
available for each mobile platform. (Column headers display the
CLI's shorthand stubs.)

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th></td>
        <th><tt>android</tt></th>
        <th><tt>blackberry</tt> (6)</th>
        <th><tt>blackberry10</tt></th>
        <th><tt>ios</tt></th>
        <th><tt>wp7</tt> (Windows<br/>Phone 7)</th>
        <th><tt>wp8</tt> (Windows<br/>Phone 8)</th>
        <th><tt>win8</tt><br/>(Windows 8)</th>
        <th><tt>firefoxos</tt></th>
        <th><tt>tizen</tt></th>
    </tr>

</thead>

<tbody>
    <tr>
        <th><a href="../cli/index.html">cordova<br/>CLI</a></th>
        <td data-col="android"    class="y">Mac, Windows, Linux</td>
        <td data-col="blackberry" class="n">Mac, Windows</td>
        <td data-col="blackberry10" class="y">Mac, Windows</td>
        <td data-col="ios"        class="y">Mac</td>
        <td data-col="winphone7"  class="y">Windows</td>
        <td data-col="winphone8"  class="y">Windows</td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../hybrid/webviews/index.html">Embedded<br/>WebView</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/webview.html">(see details)</a></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/webview.html">(see details)</a></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../hybrid/plugins/index.html">Plug-in<br/>Interface</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/plugin.html">(see details)</a></td>
        <td data-col="blackberry" class="y"><a href="../platforms/blackberry/plugin.html">(see details)</a></td>
        <td data-col="blackberry10" class="y"><a href="../platforms/blackberry10/plugin.html">(see details)</a></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/plugin.html">(see details)</a></td>
        <td data-col="winphone7"  class="y"><a href="../platforms/wp8/plugin.html">(see details)</a></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20">Platform APIs</th>
    </tr>

    <tr>
        <th><a href="../../cordova/accelerometer/accelerometer.html">Accelerometer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/camera/camera.html">Camera</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/media/capture/capture.html">Capture</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/compass/compass.html">Compass</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y">(3GS+)</td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/connection/connection.html">Connection</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/contacts/contacts.html">Contacts</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/device/device.html">Device</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/events/events.html">Events</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/file/file.html">File</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="p">no <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a></td>
        <td data-col="winphone8"  class="p">no <a href="../../cordova/file/filetransfer/filetransfer.html">FileTransfer</a></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/geolocation/geolocation.html">Geolocation</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/globalization/globalization.html">Globalization</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/inappbrowser/inappbrowser.html">InAppBrowser</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/media/media.html">Media</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/notification/notification.html">Notification</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/splashscreen/splashscreen.html">Splashscreen</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/storage/storage.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="p"><a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> only</td>
        <td data-col="winphone8"  class="p"><a href="../../cordova/storage/localstorage/localstorage.html">localStorage</a> only</td>
        <td data-col="win8"       class="y"></td>
        <td data-col="tizen"       class="y"></td>
    </tr>

</tbody>
</table>

<!-- END HTML -->
