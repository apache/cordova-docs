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
  device-level APIs, or if you want to develop a plug-in interface
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
(See the API Reference for an overview, and the API and Configuration
Guide for examples of how to use them.)
XREF -->

The Cordova-enabled WebView may provide the application with its
entire user interface. It can also be a component within a larger,
hybrid application that mixes the WebView with native application
components.  Cordova provides a _plug-in_ interface for these
components to communicate with each other.

## Development Paths

The easiest way to set up an application is to run the `cordova`
command-line utility, also known as the _command-line interface_
(CLI). (To install the CLI, see The Command-line Interface.)
Depending on the set of platforms you wish to target, you can rely on
the CLI for progressively greater shares of the development cycle:

* In the most basic scenario, you can use the CLI simply to create a
  new project that is populated with default configuration for you to
  modify.

* For many mobile platforms, you can also use the CLI to set up
  additional project files required to compile within each SDK.  For
  this to work, you must install each targeted platform's SDK.
  (See the Platform Guides for instructions.)
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
(See the Platform Guides for details about each platform's SDK tool set.)
An SDK environment is more appropriate if you want implement a hybrid
app that mixes web-based and native application components.
<!-- XREF
(See Hybrid Application Guide for more information.)
XREF -->
You may use the command-line utility to initially generate the app, or
iteratively thereafter to feed updated code to SDK tools.  You may
also build the app's configuration file yourself.
<!-- XREF
(See Configuration Reference for details.)
XREF -->

<!-- XREF
To build projects on some platforms, you may need to apply digital signatures.
See Distributing Applications for information on how to upload your app to various store portals.
XREF -->

## Platform Support

The following shows the set of development tools and device APIs
available for each mobile platform:

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th></td>
        <th>Android</th>
        <th>BlackBerry</th>
        <th>BlackBerry 10</th>
        <th>iOS</th>
        <th>Windows<br/>Phone 7</th>
        <th>Windows<br/>Phone 8</th>
        <th>Windows<br/>8</th>
    </tr>

</thead>

<tbody>
    <tr>
        <th><a href="#">cordova<br/>CLI</a></th>
        <td data-col="android"    class="y">Mac, Windows, Linux</td>
        <td data-col="blackberry" class="y">Mac, Windows</td>
        <td data-col="blackberry10" class="y">Mac, Windows</td>
        <td data-col="ios"        class="y">Mac</td>
        <td data-col="winphone7"  class="y">Windows</td>
        <td data-col="winphone8"  class="y">Windows</td>
        <td data-col="win8"       class="u"></td>
    </tr>

    <tr>
        <th><a href="#">PhoneGap<br/>Build</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="u"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="u"></td>
    </tr>

    <tr>
        <th><a href="guide_platforms_index.md.html">SDK platform support</a></th>
        <td data-col="android"    class="y"><a href="guide_platforms_android_index.md.html">         </a></td>
        <td data-col="blackberry" class="y"><a href="guide_platforms_blackberry_index.md.html">      </a></td>
        <td data-col="blackberry10" class="y"><a href="guide_platforms_blackberry10_index.md.html">      </a></td>
        <td data-col="ios"        class="y"><a href="guide_platforms_ios_index.md.html">             </a></td>
        <td data-col="winphone7"  class="y"><a href="guide_platforms_wp7_index.md.html"> </a></td>
        <td data-col="winphone8"  class="y"><a href="guide_platforms_windows-phone-8_index.md.html"> </a></td>
        <td data-col="win8"       class="y"><a href="guide_platforms_windows-8_index.md.html">       </a></td>
    </tr>

    <tr>
        <th><a href="#">Embedded<br/>WebView</a></th>
        <td data-col="android"    class="y"><a href="guide_platforms_android_webview.md.html"></a></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"><a href="guide_platforms_ios_webview.md.html"></a></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th><a href="guide_plugin-development_index.md.html">Plug-in<br/>Interface</a></th>
        <td data-col="android"    class="y"><a href="guide_guide_platforms_android_plugin.md.html"></a></td>
        <td data-col="blackberry" class="y"><a href="guide_guide_platforms_blackberry_plugin.md.html"></a></td>
        <td data-col="blackberry10" class="y"><a href="guide_guide_platforms_blackberry10_plugin.md.html"></a></td>
        <td data-col="ios"        class="y"><a href="guide_guide_platforms_ios_plugin.md.html"></a></td>
        <td data-col="winphone7"  class="y"><a href="guide_guide_platforms_wp8_plugin.md.html"></a></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20">Platform APIs</th>
    </tr>

    <tr>
        <th><a href="cordova_accelerometer_accelerometer.md.html">Accelerometer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_camera_camera.md.html">Camera</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_capture_capture.md.html">Capture</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_compass_compass.md.html">Compass</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y">(3GS+)</td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_connection_connection.md.html">Connection</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_contacts_contacts.md.html">Contacts</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_device_device.md.html">Device</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_events_events.md.html">Events</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_file_file.md.html">File</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_geolocation_geolocation.md.html">Geolocation</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_globalization_globalization.md.html">Globalization</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_inappbrowser_inappbrowser.md.html">InAppBrowser</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_media.md.html">Media</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_notification_notification.md.html">Notification</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_splashscreen_splashscreen.md.html">Splashscreen</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_storage_storage.md.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

</tbody>
</table>

<!-- END HTML -->
