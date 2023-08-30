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
toc_title: Platform Support
description: Compatibility table for all major plugins and features.
---

# Platform Support

The table below provides a comprehensive overview of the supported development platforms, core plugins, and features for each platform.

For additional functionality, you can explore a wide range of third-party plugins available on the [npm registry](https://www.npmjs.com/search?q=keywords:ecosystem:cordova).

<!-- START HTML -->

<table class="compat" width="100%">

<thead>
    <tr>
        <th></th>
        <th colspan="3">Platforms</th>
    </tr>
    <tr>
        <th></th>
        <th><a href="../platforms/android/index.html">Android</a></th>
        <th><a href="../platforms/ios/index.html">iOS</a></th>
        <th><a href="../platforms/electron/index.html">Electron</a></th>
    </tr>
</thead>

<tbody>
    <tr>
        <th colspan="4"><h2><a href="../cli/index.html">Cordova CLI</a> Development Platform</h2></th>
    </tr>
    <tr>
        <th>Mac</th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="y"></td>
    </tr>
        <tr>
        <th>Windows</th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="n"></td>
        <td data-col="electron" class="y"></td>
    </tr>
        <tr>
        <th>Linux</th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="n"></td>
        <td data-col="electron" class="y"></td>
    </tr>

    <tr>
        <th colspan="4"><h2>Core Plugin APIs</h2></th>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-battery-status/">BatteryStatus</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-camera/">Camera</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="y"></td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-media-capture/">Capture</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-network-information/">Connection</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-device/">Device</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../cordova/events/events.html">Events</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-file">File</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-geolocation/">Geolocation</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-inappbrowser/">InAppBrowser</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-media/">Media</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-dialogs/">Notification</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../core/features/splashscreen/index.html">Splashscreen</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-statusbar/">Status Bar</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../cordova/storage/storage.html">Storage</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="p">Tests Pending</td>
    </tr>

    <tr>
        <th><a href="../../reference/cordova-plugin-vibration/">Vibration</a></th>
        <td data-col="android" class="y"></td>
        <td data-col="ios"     class="y"></td>
        <td data-col="electron" class="n"></td>
    </tr>

    <tr>
        <th colspan="4"><h2>Platform Features</h2></th>
    </tr>
    <tr>
        <th><a href="../hybrid/plugins/index.html">Plugin<br/>Interface</a></th>
        <td data-col="android" class="y"><a href="../platforms/android/plugin.html">(see details)</a></td>
        <td data-col="ios"     class="y"><a href="../platforms/ios/plugin.html">(see details)</a></td>
        <td data-col="electron"> - </td>
    </tr>
    <tr>
        <th><a href="../hybrid/webviews/index.html">Embedded<br/>WebView</a></th>
        <td data-col="android" class="y"><a href="../platforms/android/webview.html">(see details)</a></td>
        <td data-col="ios"     class="y"><a href="../platforms/ios/webview.html">(see details)</a></td>
        <td data-col="electron"> - </td>
    </tr>
</tbody>
</table>

<!-- END HTML -->
