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

Overview
========

Cordova is an open-source mobile development framework. It allows you
to use standard web technologies such as HTML5, CSS3, and JavaScript
for cross-platform development, avoiding each mobile platforms' native
development language.  Applications execute as a WebView within a
native wrapper, and rely on standards-compliant Cordova API bindings
to access each device's sensors, data, and network status.

PhoneGap is a product offering based on the Cordova framework.  Its
PhoneGap Build service provides an additional way to build
applications remotely without having to run local tools.

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

There are several different ways to use Cordova, depending on the kind
of tools and workflow you prefer. They all allow you to create new
projects, then rebuild them and preview them within an emulator:

* a single `cordova` command that allows you to specify all the mobile
  platforms you want to cover. (See Cordova Command Primer for details.)

* a _PhoneGap Build_ service that allows you to compile cross-platform
  projects remotely. (See PhoneGap Build Primer for details.)

* a set of command-line tools targeted for each mobile platform. (See
  Command-Line Usage for details.)

* as plug-ins to traditional IDE development environments. (See
  Getting Started Guides for details.)

The cross-platform command-line tools and PhoneGap build service offer
the quickest way overall to deploy a project, but IDEs may offer more
control to target applications for each platform.

## Platform Support

The following table shows the set of development tools and device APIs
available for each mobile platform:

<!-- edit & copy into index.md file -->

<style>
.compat .n { background-color: pink; }
.compat .n:after { content: " \2718"; }
.compat .p { background-color: gold; }
.compat .p:after { content: " (partial)"; }
.compat .u { background-color: #dddddd; }
.compat .u:after { content: ""; }
.compat .y { background-color: lightgreen; }
.compat .y:after { content: " \2714"; }
.compat tr > th:first-of-type { text-align: right }
.compat td , .compat th[colspan]:first-of-type { text-align: center } 
</style>

<!-- each cell is classed one of: y=yes; n=no; p=partial; u=unknown -->

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
        <th>cordova<br/>Command<br/>Interface</th>
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
        <th>PhoneGap<br/>Build</th>
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
        <th>IDE support</th>
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
        <th>Embedded<br/>WebView</th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="u"></td>
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
        <th>Plug-in<br/>Interface</th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="u"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="u"></td>
        <td data-col="winphone8"  class="u"></td>
        <td data-col="win8"       class="u"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
    </tr>

    <tr>
        <th colspan="20">Platform APIs</th>
    </tr>

    <tr>
        <th><a href="cordova_accelerometer_accelerometer.md.html">Accelerometer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"> (5.x+)</td>
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
        <td data-col="blackberry" class="y"> (5.x+)</td>
        <td data-col="ios"        class="y"></td>
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="p"></td>
    </tr>

    <tr>
        <th><a href="cordova_media_capture_capture.md.html">Capture</a></th>
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
        <th><a href="cordova_compass_compass.md.html">Compass</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="n"></td>
        <td data-col="ios"        class="y"> (3GS+)</td>
        <td data-col="symbian"    class="y"></td>
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
        <td data-col="symbian"    class="y"></td>
        <td data-col="webos"      class="y"></td>
        <td data-col="winphone7"  class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="bada"       class="y"></td>
        <td data-col="tizen"      class="y"></td>
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
        <td data-col="tizen"      class="p"></td>
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
        <th><a href="cordova_storage_storage.md.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry" class="y"> (5.x+)</td>
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
