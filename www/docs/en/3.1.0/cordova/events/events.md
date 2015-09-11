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
---

# Events

> Cordova lifecycle events.

## Event Types

- <a href="events.deviceready.html">deviceready</a>
- <a href="events.pause.html">pause</a>
- <a href="events.resume.html">resume</a>
- <a href="events.online.html">online</a>
- <a href="events.offline.html">offline</a>
- <a href="events.backbutton.html">backbutton</a>
- <a href="events.batterycritical.html">batterycritical</a>
- <a href="events.batterylow.html">batterylow</a>
- <a href="events.batterystatus.html">batterystatus</a>
- <a href="events.menubutton.html">menubutton</a>
- <a href="events.searchbutton.html">searchbutton</a>
- <a href="events.startcallbutton.html">startcallbutton</a>
- <a href="events.endcallbutton.html">endcallbutton</a>
- <a href="events.volumedownbutton.html">volumedownbutton</a>
- <a href="events.volumeupbutton.html">volumeupbutton</a>

## Accessing the Feature

As of version 3.0, Cordova implements battery status and other
device-level APIs as _plugins_. Access to all other events not related
to battery status are enabled by default.  Use the CLI's `plugin`
command, described in <a href="../../guide/cli/index.html">The Command-line Interface</a>, to enable or disable
battery events:

        $ cordova plugin add org.apache.cordova.battery-status
        $ cordova plugin ls
        [ 'org.apache.cordova.battery-status' ]
        $ cordova plugin rm org.apache.cordova.battery-status

These commands apply to all targeted platforms, but modify the
platform-specific configuration settings described below:

* Android

        (in app/res/xml/config.xml)
        <feature name="Battery">
            <param name="android-package" value="org.apache.cordova.<a href="events.batterystatus.html">batterystatus</a>.BatteryListener" />
        </feature>

* BlackBerry WebWorks

        (in www/plugins.xml)
        <feature name="Battery">
            <param name="blackberry-package" value="org.apache.cordova.battery.Battery" />
        </feature>

        (in www/config.xml)
        <feature id="blackberry.app"          required="true" version="1.0.0.0" />
        <feature id="blackberry.app.event"    required="true" version="1.0.0.0" />
        <feature id="blackberry.system.event" required="true" version="1.0.0.0" />

* iOS (in `config.xml`)

        <feature name="Battery">
            <param name="ios-package" value="CDVBattery" />
        </feature>

* Tizen (in `config.xml`)

        <feature name="http://tizen.org/api/systeminfo" required="true"/>

  Reference: [Application Manifest for Tizen Web Application](https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures)

Some platforms may support this feature without requiring any special
configuration.  See _Platform Support_ in the <a href="../../guide/overview/index.html">Overview</a> section.
