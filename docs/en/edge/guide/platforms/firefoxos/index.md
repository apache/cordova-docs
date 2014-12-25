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

# Firefox OS Platform Guide

This guide describes how to set up your development environment to
create Cordova apps for Firefox OS devices, then test and publish those apps.

## Requirements and Support

Firefox OS apps are basically just web apps, with the addition of a manifest.webapp file that defines metadata about the app and allows it to be installed on Firefox OS devices. Any platform that Cordova supports can be used.To find out more about building web apps, consult the [App Center](https://developer.mozilla.org/en-US/Apps) on [MDN](https://developer.mozilla.org/en-US/).

## Installation and Environment Setup

First install [Node.js](http://nodejs.org/), then install the Cordova package like so:

  	$ npm install -g cordova

Next, create a sample Cordova app then navigate into the newly created directory:

  	$ cordova create test-app
  	$ cd test-app

Add Firefox OS as a supported platform to the app with the following:

  	$ cordova platform add firefoxos

This creates a Firefox OS app in platforms/firefoxos/www directory, which currently looks the same except that it has a Firefox manifest file (manifest.webapp) inside the www directory.

##Developing your app

At this point you are ready to go — change the code inside test-app/www to whatever you want your app to be. You can add [supported plugins]() to the app using "cordova plugin add", for example:

	cordova plugin add org.apache.cordova.device
	cordova plugin add org.apache.cordova.vibration

When your app code is written, deploy your changes to the Firefox OS app you've added to your project with

  	$ cordova prepare firefoxos
  	
To create a packaged app one can zip the platforms/firefoxos/www directory. You can also simply build it using 

    $ cordova build firefoxos

The Firefox OS packaged app will be built in platforms/firefoxos/build/package.zip

##Testing and Debugging

The app can be tested using the Firefox OS [Web IDE](https://developer.mozilla.org/en-US/docs/Tools/WebIDE).

When you have connected the Web IDE to your test device/simulator, select the "Open Packaged App" option, then make sure you point to the test-app/platforms/firefoxos/www/ directory to include the App in the Manager interface.

For here you can install the app on your test device/simulator (with the "Play" button). Using the "Pause" button you can then debug the app and edit its code live. 

Note: Before attempting to publish your app you should consider validating it using the [App validator](https://marketplace.firefox.com/developers/validator).

##Publishing your app on the Firefox Marketplace

You can submit your app to the Firefox Marketplace, or publish it yourself. Visit the [Firefox Marketplace Zone](https://developer.mozilla.org/en-US/Marketplace) on MDN to find out more about how to do this; [App publishing options](https://developer.mozilla.org/en-US/Marketplace/Publishing/Publish_options) is the best place to start.

