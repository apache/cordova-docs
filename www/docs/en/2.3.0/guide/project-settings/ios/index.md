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

title: Project Settings for iOS
---

[Project Settings](../index.html) for iOS
========================

The **config.xml settings file** controls various settings of Cordova. This is application wide, and not set per CDVViewController instance. An example:

        <cordova>
            <preference name="MySetting" value="true" />
            <plugins>
                <plugin name="MyPlugin" value="MyPluginClass" />
            </plugins>
            <access origin="*" />
        </cordova>

1. A list of **plugins** (plugin tags under **&lt;cordova&gt;/&lt;plugins&gt;**) allowed to be used in a CDVViewController (set in the Plugins dictionary - name is the servicename used in JavaScript, and the value is the Objective-C class for the plugin that is a CDVPlugin sub-class)
2. A **white-list** of hosts that Cordova is allowed to connect to (add an **&lt;access&gt;** tag, and set the origin attribute - wildcards allowed)
3. Various **other** preferences (as **&lt;preference&gt;** tags) defaults err on not breaking existing apps)

	a. **UIWebViewBounce (boolean, defaults to true)** - set to false if you don't want the WebView to rubber-band

	b. **TopActivityIndicator (string, defaults to 'gray')** - this is the top spinning throbber in the status/battery bar, valid values are "whiteLarge", "white" and "gray"

	c. **EnableLocation (boolean, defaults to false)** - set to true, to initialize the [Geolocation](../../../cordova/geolocation/geolocation.html) plugin at start-up (so the fix on your location can be more accurate)

	d. **EnableViewportScale (boolean, defaults to false)** - set to true to prevent viewport scaling through a meta tag

	e. **AutoHideSplashScreen (boolean, defaults to true)** - set to false to control when the splashscreen is hidden through a JavaScript API

	f. **ShowSplashScreenSpinner (boolean, defaults to true)** - set to false to [hide](../../../cordova/splashscreen/splashscreen.hide.html) the splash-screen spinner

	g. **MediaPlaybackRequiresUserAction (boolean, defaults to false)** - set to true to not allow autoplayed HTML5 video

	h. **AllowInlineMediaPlayback (boolean, defaults to false)** - set to true to allow inline HTML5 media playback, also, the video element in the HTML document must also include the webkit-playsinline attribute

	i. **BackupWebStorage (string, defaults to 'cloud')** - valid values are 'none', 'cloud' and 'local'. Set to 'cloud' to allow the web storage data to be backed up to iCloud, and set to 'local' to only allow local backups (iTunes sync). Set to 'none' to not allow any backups of web storage.
	
	j. **KeyboardDisplayRequiresUserAction (boolean, defaults to true)** - set to false to open the keyboard when form elements get focus via the JavaScript focus() call.

	k. **SuppressesIncrementalRendering (boolean, defaults to false)** - set to true to wait until all new view content has been received before it is rendered.
