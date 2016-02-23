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

title: Platform Support
---

# Platform Support

The following shows the set of development tools and device APIs
available for each mobile platform. The device APIs listed here are provided by
the core plugins, additional APIs are available via
[third-party plugins](http://plugins.cordova.io). Column headers display the
CLI's shorthand names.

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th></td>
        <th>android</th>
        <th>blackberry10</th>
        <th>ios</th>
        <th>Ubuntu</th>
        <th>wp8<br/>(Windows Phone 8)</th>
        <th>windows<br/>(8.1, 10,<br/>Phone 8.1)</th>
    </tr>

</thead>

<tbody>
    <tr>
        <th><a href="../cli/index.html">cordova<br/>CLI</a></th>
        <td data-col="android"    class="y">Mac, Windows, Linux</td>
        <td data-col="blackberry10" class="y">Mac, Windows</td>
        <td data-col="ios"        class="y">Mac</td>
        <td data-col="ubuntu"        class="y">Ubuntu</td>
        <td data-col="winphone8"  class="y">Windows</td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../hybrid/webviews/index.html">Embedded<br/>WebView</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/webview.html">(see details)</a></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/webview.html">(see details)</a></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="n"></td>
        <td data-col="win8"       class="n"></td>
    </tr>

    <tr>
        <th><a href="../hybrid/plugins/index.html">Plugin<br/>Interface</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/plugin.html">(see details)</a></td>
        <td data-col="blackberry10" class="y"><a href="../platforms/blackberry10/plugin.html">(see details)</a></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/plugin.html">(see details)</a></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"><a href="../platforms/wp8/plugin.html">(see details)</a></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20">Platform APIs</th>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-device-motion">Accelerometer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-battery-status">BatteryStatus</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y">* Windows Phone 8.1 only</td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-camera">Camera</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-media-capture">Capture</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-device-orientation">Compass</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y">(3GS+)</td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-network-information">Connection</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-contacts">Contacts</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="p">partially</td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-device">Device</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/events/events.html">Events</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-file">File</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-file-transfer">File Transfer</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y">* Do not support onprogress nor abort</td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="n"></td>
        <td data-col="winphone8"  class="y">* Do not support onprogress nor abort</td>
        <td data-col="win8"       class="y">* Do not support onprogress nor abort</td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-geolocation">Geolocation</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-globalization">Globalization</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-inappbrowser">InAppBrowser</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="p">uses iframe</td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-media">Media</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-dialogs">Notification</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-splashscreen">Splashscreen</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y"></td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-statusbar">Status Bar</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y">Windows Phone 8.1 only</td>
    </tr>

    <tr>
        <th><a href="../../cordova/storage/storage.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="winphone8"  class="y">localStorage &amp; indexedDB</td>
        <td data-col="win8"       class="y">localStorage &amp; indexedDB</td>
    </tr>

    <tr>
        <th><a href="https://www.npmjs.com/package/cordova-plugin-vibration">Vibration</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="ubuntu"        class="n"></td>
        <td data-col="winphone8"  class="y"></td>
        <td data-col="win8"       class="y">* Windows Phone 8.1 only</td>
    </tr>

</tbody>
</table>

<!-- END HTML -->
