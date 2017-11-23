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

title: Cordova support by platform
toc_title: Platform support
description: Compatibility table for all major plugins and features.
---

# Platform Support

The following shows the set of development tools and device APIs
available for each platform. The device APIs listed here are provided by
the core plugins, additional APIs are available via
[third-party plugins](http://plugins.cordova.io).

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th>Platform:</th>
        <th><a href="../android/index.html">Android</a></th>
        <th><a href="../blackberry10/home.html">Blackberry 10</a></th>
        <th><a href="../ios/index.html">iOS</a></th>
        <th><a href="../osx/index.html">OS X</a></th>
        <th><a href="../ubuntu/index.html">Ubuntu</a></th>
        <th><a href="../win8/index.html">Windows 8.1, 10, Phone 8.1</a></th>
        <th><a href="../wp8/home.html">Windows Phone 8</a></th>
    </tr>
    <tr>
        <th>CLI shorthand:</th>
        <th>android</th>
        <th>blackberry10</th>
        <th>ios</th>
        <th>osx</th>
        <th>ubuntu</th>
        <th>windows</th>
        <th>wp8</th>
    </tr>

</thead>

<tbody>
    <tr>
        <th></th>
        <th colspan="20"><h2>Development Platform</h2></th>
    </tr>
    <tr>
        <th><a href="../cli/index.html">Cordova<br/>CLI</a></th>
        <td data-col="android"    class="y">Mac, Windows, Linux</td>
        <td data-col="blackberry10" class="y">Mac, Windows, Linux</td>
        <td data-col="ios"        class="y">Mac</td>
        <td data-col="osx"       class="y">Mac</td>
        <td data-col="ubuntu"        class="y">Ubuntu</td>
        <td data-col="win8"       class="y">Windows</td>
        <td data-col="wp8"  class="y">Windows</td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20"><h2>Core Plugin APIs</h2></th>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-battery-status/">BatteryStatus</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y">Windows Phone 8.1 only</td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-camera/">Camera</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-media-capture/">Capture</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-network-information/">Connection</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-contacts/">Contacts</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="p">desktop only</td>
        <td data-col="win8"       class="p">partially</td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-device/">Device</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/events/events.html">Events</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-file">File</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-geolocation/">Geolocation</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-globalization/">Globalization</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-inappbrowser/">InAppBrowser</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="p">uses iframe</td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-media/">Media</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-dialogs/">Notification</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-splashscreen/">Splashscreen</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-statusbar/">Status Bar</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="n"></td>
        <td data-col="win8"       class="y">Windows Phone 8.1 only</td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th><a href="../../cordova/storage/storage.html">Storage</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y">localStorage &amp; indexedDB</td>
        <td data-col="wp8"  class="y">localStorage &amp; indexedDB</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-vibration/">Vibration</a></th>
        <td data-col="android"    class="y"></td>
        <td data-col="blackberry10" class="y"></td>
        <td data-col="ios"        class="y"></td>
        <td data-col="osx"       class="n"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y">Windows Phone 8.1 only</td>
        <td data-col="wp8"  class="y"></td>
    </tr>

    <tr>
        <th></th>
        <th colspan="20"><h2>Platform Features</h2></th>
    </tr>
    <tr>
        <th><a href="../hybrid/plugins/index.html">Plugin<br/>Interface</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/plugin.html">(see details)</a></td>
        <td data-col="blackberry10" class="y"><a href="../platforms/blackberry10/plugin.html">(see details)</a></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/plugin.html">(see details)</a></td>
        <td data-col="osx"       class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="y"></td>
        <td data-col="wp8"  class="y"><a href="../platforms/wp8/plugin.html">(see details)</a></td>
    </tr>
    <tr>
        <th><a href="../hybrid/webviews/index.html">Embedded<br/>WebView</a></th>
        <td data-col="android"    class="y"><a href="../platforms/android/webview.html">(see details)</a></td>
        <td data-col="blackberry10" class="n"></td>
        <td data-col="ios"        class="y"><a href="../platforms/ios/webview.html">(see details)</a></td>
        <td data-col="osx"       class="y"></td>
        <td data-col="ubuntu"        class="y"></td>
        <td data-col="win8"       class="n"></td>
        <td data-col="wp8"  class="n"></td>
    </tr>
</tbody>
</table>

<!-- END HTML -->
