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

title: Next Steps
description: A look at topics that new Cordova developers will encounter.
---

# Next Steps

For developers who have an understanding of how to use the Cordova CLI and make use of plugins, there are a few things you may want to consider researching next to build better, more performant Cordova applications. The following document offers advice on various topics relating to best practices, testing, upgrades, and other topics, but is not meant to be prescriptive. Consider this your launching point for your growth as a Cordova developer. Also, if you see something that can be improved, please [contribute](https://cordova.apache.org/contribute/)!

# Best Practices for Cordova Apps

## 1) SPA Is Your Friend

First and foremost - your Cordova applications should adopt the SPA (Single Page Application) design. Loosely defined, a SPA is a client-side application that is run from one request of a web page. The user loads an initial set of resources (HTML, CSS, and JavaScript) and further updates (showing a new view, loading data) is done via XHR requests. SPAs are commonly used for more complex client-side applications. Gmail is a great example of this. After you load Gmail, mail views, editing, and organization are all done by updating the DOM instead of actually leaving the current page to load a completely new one.

Using a SPA can help you organize your application in a more efficient manner, but it also has specific benefits for Cordova applications. A Cordova application must wait for the [deviceready event][DeviceReadyEvent] to fire before any plugins may be used. If you do not use a SPA, and your user clicks to go from one page to another, you will have to wait for [deviceready][DeviceReadyEvent] to fire again before you make use of a plugin. This is easy to forget as your application gets larger.

Even if you choose not to use Cordova, creating a mobile application without using a single page architecture will have serious performance implications. This is because navigating between pages will require scripts, assets, etc., to be reloaded. Even if these assets are cached, there will still be performance issues.

Examples of SPA libraries you can use in your Cordova applications are:

* [ReactJS](https://reactjs.org)
* [Vue](https://vuejs.org/)
* [Angular](https://angular.io/)
* [EmberJS](https://emberjs.com)
* [Backbone](https://backbonejs.org)
* [Kendo UI](https://www.telerik.com/kendo-ui)
* [Onsen UI](https://onsen.io)
* [Sencha Ext JS](https://www.sencha.com/products/extjs/)

And many, many, more.

## 2) Performance Considerations

Consider the following issues to improve the performance in your mobile applications:

**Click versus Touch** - Many devices impose a 300ms delay on click events in order to distinguish between a tap and tap-to-zoom gesture. This can have the effect of making your app feel slow and unresponsive. Avoiding this delay is one of the most important ways of improving your app's perceived performance. For more information on the tap delay, see [300ms tap delay, gone away](https://developers.google.com/web/updates/2013/12/300ms-tap-delay-gone-away) on the Google Developer site.

Most Android versions no longer impose this delay, but iOS by default still does. For iOS, using [WkWebView](https://github.com/apache/cordova-plugin-wkwebview-engine) instead of the default UIWebView gets rid of this delay. For both Android and iOS, you must ensure that your viewport meta tag has at least `width=device-width`, or you will still have the tap delay. If you need to support older devices (Android 4.4 or iOS 8), consider a polyfill such as [FastClick](https://github.com/ftlabs/fastclick), or using `touchstart` and `touchend` instead of `click`.

**CSS Transitions versus DOM Manipulation** - Using hardware accelerated CSS transitions will be dramatically better than using JavaScript to create animations. See the list of resources at the end of this section for examples.

**Networks Suck** - Ok, networks don't always suck, but the latency of mobile networks, even good mobile networks, is far worse than you probably think. A desktop app that slurps down 500 rows of JSON data, every 30 seconds, will be both slower on a mobile device as well as a battery hog. Keep in mind that Cordova apps have multiple ways to persist data in the app (LocalStorage and the file system for example). Cache that data locally and be aware of the amount of data you are sending back and forth. This is an especially important consideration when your application is connected over a cellular network.

**Additional Performance Articles and Resources**

* ["Top Ten Performance Tips for PhoneGap and Hybrid Apps"](http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/)
* ["Fast Apps and Sites with JavaScript"](https://channel9.msdn.com/Events/Build/2013/4-313)

## 3) Recognize and Handle Offline Status

See the previous tip about networks. Not only can you be on a slow network, it is entirely possible for your application to be completely offline. Your application should handle this in an intelligent manner. If your application does not, people will think your application is broken. Given how easy it is to handle (Cordova supports listening for both an offline and online event), there is absolutely no reason for your application to not respond well when run offline. Be sure to test (see the Testing section below) your application and be sure to test how your application handles when you start in one state and then switch to another.

Note that the online and offline events, as well as the Network Connection API, is not perfect. You may need to rely on using an XHR request to see if the device is truly offline or online. At the end of the day, be sure add some form of support for network issues - in fact, the Apple store (and probably other stores) will reject apps that don't properly handle offline/online states. For more discussion on this topic, see
["Is This Thing On?"](https://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29)

# Handling Upgrades

## Upgrading Cordova Projects

There is no upgrade command for Cordova projects. Instead, remove the platform from your project, and re-add it to get the latest version:

```
cordova platform rm android
cordova platform add android
```

It is absolutely critical that you read up on what was changed in the updated version, as the update may break your code. The best place to find this information will be in the release notes published both in the repositories and on the Cordova blog. You will want to test your app thoroughly in order to verify that it is working correctly after you perform the update.

Note: some plugins may not be compatible with the new version of Cordova. If a plugin is not compatible, you may be able to find a replacement plugin that does what you need, or you may need to delay upgrading your project. Alternatively, alter the plugin so that it does work under the new version and contribute back to the community.

## Plugin Upgrades
Upgrading plugins involves the same process as platforms - remove it, then re-add it.

```
cordova plugin rm some-plugin
cordova plugin add some-plugin
```
Refer to [Manage versions and platforms](../../platform_plugin_versioning_ref/index.html) for more details.

Be sure to check the updated plugin's documentation, as you may need to adjust your code to work with the new version. Also, double check that the new version of the plugin works with your project's version of Cordova.

Always test your apps to ensure that installing the new plugin has not broken something that you did not anticipate.

If your project has a lot of plugins that you need updated, it might save time to create a shell or batch script that removes and adds the plugins with one command.

# Testing Cordova apps

Testing your applications is super important. The Cordova team uses [Jasmine](https://jasmine.github.io/), but any web-friendly unit testing solution will do.

## Testing on a simulator vs. on a real device

It's not uncommon to use desktop browsers and device simulators/emulators when developing a Cordova application. However, it is incredibly important that you test your app on as many physical devices as you possibly can:

* Simulators are just that: simulators. For example, your app may work in the iOS simulator without a problem, but it may fail on a real device (especially in certain circumstances, such as a low memory state). Or, your app may actually fail on the simulator while it works just fine on a real device.
* Emulators are just that: emulators. They do not represent how well your app will run on a physical device. For example, some emulators may render your app with a garbled display, while a real device has no problem. (If you do encounter this problem, disable the host GPU in the emulator.)
* Simulators are generally faster than your physical device. Emulators, on the other hand, are generally slower. Do not judge the performance of your app by how it performs in a simulator or an emulator. Do judge the performance of your app by how it runs on a spectrum of real devices.
* It's impossible to get a good feel for how your app responds to your touch by using a simulator or an emulator. Instead, running the app on a real device can point out problems with the sizes of user interface elements, responsiveness, etc.
* Although it would be nice to be able to test only on one device per platform, it is best to test on many devices sporting many different OS versions. For example, what works on your particular Android smartphone may fail on another Android device. What works on the latest iOS device may fail on an older one.

It is, of course, impossible to test on every possible device on the market. For this reason, it's wise to recruit many testers who have different devices. Although they won't catch every problem, chances are good that they will discover quirks and issues that you would never find alone.

# Debugging Cordova apps

In most cases, debugging Cordova apps is quite straightforward.

## iOS Debugging

### Xcode
With Xcode you can debug the iOS native side of your Cordova application. Make sure the Debug Area is showing (View -> Debug Area). Once your app is running on the device (or simulator), you can view log output in the debug area. This is where any errors or warnings will print. You can also set breakpoints within the source files. This will allow you to step through the code one line at a time and view the state of the variables at that time. The state of the variables is shown in the debug area when a breakpoint is hit. Once your app is up and running on the device, you can bring up Safari's web inspector (as described below) to debug the webview and JS side of your application. For more details refer to the [Apple Debugging Support](https://developer.apple.com/support/debugging/) docs.

### Safari Remote Debugging with Web Inspector
With Safari's web inspector you can debug the webview and js code in your Cordova application. This works only on macOS. It uses Safari to connect to your device (or the simulator) and will connect the browser's dev tools to the Cordova application. You get what you expect from dev tools - DOM inspection/manipulation, a JavaScript debugger, network inspection, the console, and more. Like Xcode, with Safari's web inspector you can set breakpoints in the JavaScript code and view the state of the variables at that time. You can view any errors, warnings or messages that are printed to the console. You can also run JavaScript commands directly from the console as your app is running.

To start inspecting, first enable it on device at `Settings > Safari > Advanced > Web Inspector`. On your desktop, enable the developer tools from `Safari > Preferences > Advanced > Show Develop menu in menu bar`. In the `Develop` menu, you will now be able to select the connected device, and the app you want to inspect.

## Chrome Remote Debugging
Virtually the same as the Safari version, this works with Android only but can be used from any desktop operating system. Once connected, you get the same Chrome Dev Tools experience for your mobile applications as you do with your desktop applications. Even better, the Chrome Dev Tools have a mirror option that shows your app running on the mobile device. This is more than just a view - you can scroll and click from dev tools and it updates on the mobile device.

To inspect, simply open up the URL `chrome://inspect` in Chrome on your desktop. Here you will see a list of connected devices and inspectable apps. Your device must be set up for USB debugging for this to work. Full instructions on getting set up can be found at [https://developers.google.com/chrome/mobile/docs/debugging](https://developers.google.com/chrome/mobile/docs/debugging).

If you can see your device in the inspect devices section, but you can't see the Cordova webview you may need to add `android:debuggable="true"` in the `<application>` node of your `AndroidManifest.xml`.

It is also possible to use Chrome Dev Tools to inspect iOS apps, through a WebKit proxy: [https://github.com/google/ios-webkit-debug-proxy/](https://github.com/google/ios-webkit-debug-proxy/)

## Other Options

* For more examples and explanation of the above debugging tips, see: [httpa://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/](https://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/)

# User Interface

Building a Cordova application that looks nice on mobile can be a challenge, especially for developers. Many people chose to use a UI framework to make this easier. Here is a short list of options you may want to consider.

* [Ionic](https://ionicframework.com/) - This powerful UI framework actually has its own CLI to handle project creation.
* [Ratchet](http://goratchet.com/) - Brought to you by the people who created Bootstrap.
* [Kendo UI](https://www.telerik.com/kendo-ui) - Open source UI and application framework from Telerik.
* [Onsen UI](https://onsen.io) - Open source UI framework for both websites and Cordova apps
* [Topcoat](http://topcoat.io)
* [ReactJS](https://reactjs.org/)

When building your user interface, it is important to think about all platforms that you are targeting and the differences between the user's expectations. For example, an Android application that has an iOS-style UI will probably not go over well with users. This sometimes is even enforced by the various application stores. Because of this, it is important that you respect the conventions of each platform and therefore are familiar with the various Human Interface Guidelines:

* [iOS](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/)
* [Android](https://developer.android.com/design/)
* [Windows Phone](https://developer.microsoft.com/en-us/windows/apps/design)

# Special Considerations

Although Cordova makes cross-platform development easier, it's just not possible to provide 100% isolation from the underlying native platform, so do be aware of restrictions.

## Platform Quirks

While reading the documentation, look for sections which outline different behaviors or requirements on multiple platforms. If present, these would be in a section titled "Android Quirks", "iOS Quirks", etc. Read through these quirks and be aware of them as you work with Cordova.

## Loading Remote Content

Invoking Cordova JavaScript functions from a remotely-loaded HTML page (an HTML page not stored locally on the device) is an unsupported configuration. This is because Cordova was not designed for this, and the Apache Cordova community does no testing of this configuration. While it can work in some circumstances, it is not recommended nor supported. There are challenges with the same origin policy, keeping the JavaScript and native portions of Cordova synchronized at the same version (since they are coupled via private APIs which may change), the trustworthiness of remote content calling native local functions, and potential app store rejection.

The display of remotely-loaded HTML content in a webview should be done using Cordova's InAppBrowser. The InAppBrowser is designed so that JavaScript running there does not have access to the Cordova JavaScript APIs for the reasons listed above. Please refer to the [Security Guide](../appdev/security/index.html).

# Keeping Up

Here are a few ways to keep up to date with Cordova.

* Subscribe to the [Cordova blog](https://cordova.apache.org/blog/).
* Subscribe to the [developer list](https://cordova.apache.org/contact/). Note - this is not a support group, but a place where development of Cordova is discussed.

# Getting Help

The following links are the best places to get help for Cordova:

* Slack: [http://slack.cordova.io/](http://slack.cordova.io/) The official Cordova Slack channel is a great way to get help from the community, and the place you are most likely to get answers to your questions
* StackOverflow: [https://stackoverflow.com/questions/tagged/cordova](https://stackoverflow.com/questions/tagged/cordova)
By using the Cordova tag, you can view and browse all Cordova questions. Note that StackOverflow automatically converts the "Phonegap" tag to "Cordova", so this way you will be able to access historical questions as well
* PhoneGap Google Group: [https://groups.google.com/forum/#!forum/phonegap](https://groups.google.com/forum/#!forum/phonegap)
This Google Group was the old support forum when Cordova was still called PhoneGap. While there are still a lot of Cordova users that frequently visit this group, the Cordova community has expressed an interest in focusing less on this group and instead using StackOverflow for support
* Meetup: [http://phonegap.meetup.com](https://phonegap.meetup.com) -
Consider finding a local Cordova/PhoneGap meetup group


[DeviceReadyEvent]: ../../cordova/events/events.html#deviceready
