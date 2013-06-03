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

<!-- START PG

PhoneGap is a product offering based on the Cordova framework.  Its
PhoneGap Build service provides an additional way to build
applications remotely without having to run local tools.  See the
[PhoneGap Build documentation](http://docs.phonegap.com/en/edge/phonegap-build.md.html)
for details.

END PG -->

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
The app appears as a _WebView_ within the native application wrapper,
which you distribute to app stores.  For the web app to interact with
various device features the way native apps do, it must also reference
a `cordova.js` file, which provides API bindings. (See the API
Reference for an overview, and the API and Configuration Guide for
examples of how they're useful.)

<!-- TEST: is cordova.js 100% necessary even for minimal hello-world apps? -->

<!-- QUERY: are any significant platform features unavailable in cordova? -->

## Development Options

The easiest way to set up these components is to install the `cordova`
command-line utility. Use it to create a new project and specify the
mobile platforms you want to support. It sets up a set of default
application files that you can modify as needed. Use it also to
rebuild the app and test it in various platforms' device emulators.
(See The Cordova Command-line Interface for details. The command-line
interface requires you install SDKs for each targeted platform.  See
Installing Platform SDKs for details.)

At any point in the development cycle, you can also rely on
platform-specific SDK tools, which may provide a richer set of
options.  (See Platform Development Guide for details about each
platform's SDK tool set.) An SDK environment is more appropriate if
you want implement a hybrid app that mixes web-based and native
application components.  (See Extended Hybrid Applications for more
information.)  You may use the command-line utility to initially
generate the app, or iteratively thereafter to feed updated code to
SDK tools.  You may also build the app's configuration file yourself.
(See Configuration Reference for details.)

<!-- START PG

As a third option, you may use the PhoneGap Build service to compile
projects remotely. This approach means maintaining source code, but
with no need to install SDK tools or command-line utilities.  As part
of this development cycle, you have the option to upload the source
files, or link to a github repository.  (See PhoneGap Build for
details.)

END PG -->

The cross-platform command-line tools and PhoneGap Build service offer
the quickest way overall to deploy a project, but IDEs may offer more
control to target applications for each platform.

To build projects on some platforms, you may need to apply digital
signatures. See Distributing Applications for information on how to
upload your app to various store portals.

## Platform Support

The following shows the set of development tools and device APIs
available for each mobile platform:

<!-- START HTML -->

<style>
.compat .n { background-color: pink; }
.compat .n:before { content: "\2718"; margin-right: 6px; }
.compat .p { background-color: gold; }
.compat .p:before { content: "(partial)"; margin-right: 6px; }
.compat .u { background-color: #dddddd; }
/* .compat .u:before { content: ""; margin-right: 6px; } */
.compat .y { background-color: lightgreen; }
.compat .y:before { content: "\2714"; margin-right: 6px; }
.compat tr> th:first-of-type { text-align: right }
.compat td , .compat th[colspan]:first-of-type { text-align: center } 

/* each cell is classed one of: y=yes; n=no; p=partial; u=unknown */

</style>

<table class="compat">

<thead>
    <tr>
        <th></td>
        <th>Android</th>
        <th>Blackberry</th>
        <th>iOS</th>
        <th>Symbian</th>
        <th>WebOS</th>
        <th>Windows<br/>Phone 7</th>
        <th>Windows<br/>Phone 8</th>
        <th>Windows<br/>8</th>
        <th>Bada</th>
        <th>Tizen</th>
    </tr>

</thead>

<tbody>
    <tr>
        <th><a href="#">cordova<br/>Command<br/>Interface</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="u"></td>
        <td data-col="webos"      class="u"></td>
        <td data-col="winphone7"  class="u"></td>
        <td data-col="winphone8"  class="u"></td>
        <td data-col="win8"       class="u"></td>
        <td data-col="bada"       class="u"></td>
        <td data-col="tizen"      class="u"></td>
    </tr>

    <tr>
        <th><a href="#">PhoneGap<br/>Build</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="u"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="u"></td>
        <td data-col="bada"       class="u"></td>
        <td data-col="tizen"      class="u"></td>
    </tr>

    <tr>
        <th><a href="guide_getting-started_index.md.html">IDE platform support</a></th>
        <td data-col="android"    class="y"><a href="guide_getting-started_android_index.md.html">         </a></td>
        <td data-col="blackberry" class="y"><a href="guide_getting-started_blackberry_index.md.html">      </a></td>
        <td data-col="ios"        class="y"><a href="guide_getting-started_ios_index.md.html">             </a></td>
        <td data-col="symbian"    class="y"><a href="guide_getting-started_symbian_index.md.html">         </a></td>
        <td data-col="webos"      class="y"><a href="guide_getting-started_webos_index.md.html">           </a></td>
        <td data-col="winphone7"  class="y"><a href="guide_getting-started_windows-phone-7_index.md.html"> </a></td>
        <td data-col="winphone8"  class="y"><a href="guide_getting-started_windows-phone-8_index.md.html"> </a></td>
        <td data-col="win8"       class="y"><a href="guide_getting-started_windows-8_index.md.html">       </a></td>
        <td data-col="bada"       class="y"><a href="guide_getting-started_bada_index.md.html">            </a></td>
        <td data-col="tizen"      class="y"><a href="guide_getting-started_tizen_index.md.html">           </a></td>
    </tr>

    <tr>
        <th><a href="#">Embedded<br/>WebView</a></th>
        <td data-col="android"    class="y"><a href="guide_cordova-webview_android.md.html"></a></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="ios"        class="y"><a href="guide_cordova-webview_ios.md.html"></a></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="n"></td>
    </tr>

    <tr>
        <th><a href="guide_plugin-development_index.md.html">Plug-in<br/>Interface</a></th>
        <td data-col="android"    class="y"><a href="guide_plugin-development_android_index.md.html"></a></td>
        <td data-col="blackberry" class="y"><a href="guide_plugin-development_blackberry_index.md.html"></a></td>
        <td data-col="ios"        class="y"><a href="guide_plugin-development_ios_index.md.html"></a></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="y"><a href="guide_plugin-development_windows-phone_index.md.html"></a></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="bada"       class="y"><a href="guide_plugin-development_bada_index.md.html"></a></td>
        <td data-col="tizen"      class="n"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20">Platform APIs</th>
    </tr>

    <tr>
        <th><a href="cordova_accelerometer_accelerometer.md.html">Accelerometer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_camera_camera.md.html">Camera</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_capture_capture.md.html">Capture</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_compass_compass.md.html">Compass</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="ios"        class="y">(3GS+)</td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_connection_connection.md.html">Connection</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_contacts_contacts.md.html">Contacts</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_device_device.md.html">Device</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_events_events.md.html">Events</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_file_file.md.html">File</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_geolocation_geolocation.md.html">Geolocation</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_globalization_globalization.md.html">Globalization</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_inappbrowser_inappbrowser.md.html">InAppBrowser</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_media.md.html">Media</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_notification_notification.md.html">Notification</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th><a href="cordova_splashscreen_splashscreen.md.html">Splashscreen</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="n"></td>
        <td data-col="webos"      class="n"></td>
        <td data-col="winphone7"  class="n"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="n"></td>
    </tr>

    <tr>
        <th><a href="cordova_storage_storage.md.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="n"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

</tbody>
</table>

<!-- END HTML -->
