# Next Steps

For developers who have an understanding of how to use the Cordova CLI and make use of plugins, there are a few things you may want to consider researching next to build better, more performant Cordova applications. The following document offers advice on various topics relating to best practices, testing, upgrades, and other topics, but is not meant to be prescriptive. Consider this your launching point for your growth as a Cordova developer. Also, if you see something that can be improved, please [contribute](http://cordova.apache.org/#contribute)!

This guide contains the following topics:

* Best Practices
* Handling Upgrades
* Testing
* Debugging
* User Interface
* Keeping Up
* Getting Help 

# Best Practices

## 1) SPA Is Your Friend

First and foremost - your Cordova applications should adopt the SPA (Single Page Application) design. Loosely defined, a SPA is a client-side application that is run from one request of a web page. The user loads an initial set of resources (HTML, CSS, and JavaScript) and further updates (showing a new view, loading data) is done via AJAX. SPAs are commonly used for more complex client-side applications. GMail is a great example of this. After you load GMail, mail views, editing, and organization are all done by updating the DOM instead of actually leaving the current page to load a completely new one. 

Using a SPA can help you organize your application in a more efficient manner, but it also has specific benefits for Cordova applications. A Cordova application must wait for the deviceready event to fire before any plugins may be used. If you do not use a SPA, and your user clicks to go from one page to another, you will have to wait for deviceready to fire again before you make use of a plugin. This is easy to forget as your application gets larger. 

Even if you choose not to use Cordova, creating a mobile application without using a single page architecture will have serious performance implications. This is because navigating between pages will require scripts, assets, etc., to be reloaded. Even if these assets are cached, there will still be performance issues. 

Examples of SPA libraries you can use in your Cordova applications are:

* [AngularJS](http://angularjs.org)
* [Backbone](http://backbonejs.org)
* [Kendo UI](http://www.telerik.com/kendo-ui)
* [Monaca](http://monaca.mobi/en/)
* [ReactJS](http://facebook.github.io/react/)
* [Sencha Touch](http://www.sencha.com/products/touch/)
* [jQuery Mobile](jquerymobile.com)

And many, many, more.

## 2) Performance Considerations

One of the biggest mistakes a new Cordova developer can make is to assume that the performance they get on a desktop machine is the same they will get on a mobile device. While our mobile devices have gotten more powerful every year, they still lack the power and performance of a desktop. Mobile devices typically have much less RAM and a GPU that is a far cry from their desktop (or even laptop) brethren. A full list of tips here would be too much, but here are a few things to keep in mind (with a list of longer resources at the end for further research).

**Click versus Touch** - The biggest and simplest mistake you can make is to use click events. While these "work" just fine on mobile, most devices impose a 300ms delay on them in order to distinguish between a touch and a touch "hold" event. Using `touchstart`, or `touchend`, will result in a dramatic improvement - 300ms doesn't sound like much, but it can result in jerky UI updates and behavior. You should also consider the fact that “touch” events are not supported on non-webkit browsers, see [CanIUse](http://caniuse.com/#search=touch). In order to deal with these limitations, you can checkout various libraries like HandJS and Fastouch.

**CSS Transitions versus DOM Manipulation** - Using hardware accelerated CSS transitions will be dramatically better than using JavaScript to create animations. See the list of resources at the end of this section for examples.

**Networks Suck** - Ok, networks don't always suck, but the latency of mobile networks, even good mobile networks, is far worse than you probably think. A desktop app that slurps down 500 rows of JSON data, every 30 seconds, will be both slower on a mobile device as well as a battery hog. Keep in mind that Cordova apps have multiple ways to persist data in the app (LocalStorage and the file system for example). Cache that data locally and be cognizant of the amount of data you are sending back and forth. This is an especially important consideration when your application is connected over a cellular network.

**Additional Performance Articles and Resources**

* ["You half assed it"](http://sintaxi.com/you-half-assed-it)
* ["Top Ten Performance Tips for PhoneGap and Hybrid Apps"](http://coenraets.org/blog/2013/10/top-10-performance-techniques-for-phonegap-and-hybrid-apps-slides-available/)
* "Fast Apps and Sites with JavaScript": http://channel9.msdn.com/Events/Build/2013/4-313

## 3) Recognize and Handle Offline Status

See the previous tip about networks. Not only can you be on a slow network, it is entirely possible for your application to be completely offline. Your application should handle this in an intelligent manner. If your application does not, people will think your application is broken. Given how easy it is to handle (Cordova supports listening for both an offline and online event), there is absolutely no reason for your application to not respond well when run offline. Be sure to test (see the Testing section below) your application and be sure to test how your application handles when you start in one state and then switch to another.

Note that the online and offline events, as well as the Network Connection API is not perfect. You may need to rely on using an XHR request to see if the device is truly offline or online. At the end of the day, be sure add some form of support for network issues - in fact, the Apple store (and probably other stores) will reject apps that don’t properly handle offline/online states. For more discussion on this topic, see 
["Is This Thing On?"](http://blogs.telerik.com/appbuilder/posts/13-04-23/is-this-thing-on-%28part-1%29)
 
# Handling Upgrades

## Upgrading Cordova Projects

If your existing project was created using Cordova 3.x, you can upgrade the project by issuing the following:

    cordova platform update platform-name ios, android, etc.

If your existing project was created under a version prior to Cordova 3.x, it would probably be best to create a new Cordova 3.x project, and then copy your existing project’s code and assets to the new project. Typical steps:

* Create a new Cordova 3.x project (cordova create ...)
* Copy the www folder from your old project to the new project
* Copy any configuration settings from the old project to the new project
* Add any plugins used in the old project to the new project
* Build your project
* Test, test, test!

Regardless of the project's prior version, it is absolutely critical that you read up on what was changed in the updated version, as the update may break your code. The best place to find this information will be in the release notes published both in the repositories and on the Cordova blog. You will want to test your app thoroughly in order to verify that it is working correctly after you perform the update.

Note: some plugins may not be compatible with the new version of Cordova. If a plugin is not compatible, you may be able to find a replacement plugin that does what you need, or you may need to delay upgrading your project. Alternatively, alter the plugin so that it does work under the new version and contribute back to the community.

## Plugin Upgrades
As of Cordova 3.4, there is no mechanism for upgrading changed plugins using a single command. Instead, remove the plugin and add it back to your project, and the new version will be installed:

	cordova plugin rm com.some.plugin
	cordova plugin add com.some.plugin

Be sure to check the updated plugin's documentation, as you may need to adjust your code to work with the new version. Also, double check that the new version of the plugin works with your project’s version of Cordova.

Always test your apps to ensure that installing the new plugin has not broken something that you did not anticipate.

If your project has a lot of plugins that you need updated, it might save time to create a shell or batch script that removes and adds the plugins with one command. 

# Testing

Testing your applications is super important. The Cordova team uses Jasmine but any web friendly unit testing solution will do. 

## Testing on a simulator vs. on a real device

It’s not uncommon to use desktop browsers and device simulators/emulators when developing a Cordova application. However, it is incredibly important that you test your app on as many physical devices as you possibly can:

* Simulators are just that: simulators. For example, your app may work in the iOS simulator without a problem, but it may fail on a real device (especially in certain circumstances, such as a low memory state). Or, your app may actually fail on the simulator while it works just fine on a real device. 
* Emulators are just that: emulators. They do not represent how well your app will run on a physical device. For example, some emulators may render your app with a garbled display, while a real device has no problem. (If you do encounter this problem, disable the host GPU in the emulator.)
* Simulators are generally faster than your physical device. Emulators, on the other hand, are generally slower. Do not judge the performance of your app by how it performs in a simulator or an emulator. Do judge the performance of your app by how it runs on a spectrum of real devices.
* It's impossible to get a good feel for how your app responds to your touch by using a simulator or an emulator. Instead, running the app on a real device can point out problems with the sizes of user interface elements, responsiveness, etc.
* Although it would be nice to be able to test only on one device per platform, it is best to test on many devices sporting many different OS versions. For example, what works on your particular Android smartphone may fail on another Android device. What works on an iOS 7 device may fail on an iOS 6 device.

It is, of course, impossible to test on every possible device on the market. For this reason, it’s wise to recruit many testers who have different devices. Although they won’t catch every problem, chances are good that they will discover quirks and issues that you would never find alone.

Tip: It is possible on Android Nexus devices to easily flash different versions of Android onto the device. This simple process will allow you to easily test your application on different levels of Android with a single device, without voiding your warranty or requiring you to “jailbreak” or “root” your device. The Google Android factory images and instructions are located at: https://developers.google.com/android/nexus/images#instructions

# Debugging

Debugging Cordova requires some setup. Unlike a desktop application, you can't simply open dev tools on your mobile device and start debugging, luckily there are some great alternatives.

## Safari Remote Debugging
The first option is Safari Remote Debugging. This works only on OSX and only with iOS 6 (and higher). It uses Safari to connect to your device (or the simulator) and will connect the browser's dev tools to the Cordova application. You get what you expect from dev tools - DOM inspection/manipulation, a JavaScript debugger, network inspection, the console, and more. For more details, see this excellent blog post: [http://moduscreate.com/enable-remote-web-inspector-in-ios-6/](http://moduscreate.com/enable-remote-web-inspector-in-ios-6/])

## Chrome Remote Debugging
Virtually the same as the Safari version, this works with Android only but can be used from any desktop operating system. It requires a minimum of Android 4.4 (KitKat), minimum API level of 19, and Chrome 30+ (on the desktop). Once connected, you get the same Chrome Dev Tools experience for your mobile applications as you do with your desktop applications. Even better, the Chrome Dev Tools have a mirror option that shows your app running on the mobile device. This is more than just a view - you can scroll and click from dev tools and it updates on the mobile device. More details on Chrome Remote Debugging may be found here: [https://developers.google.com/chrome/mobile/docs/debugging](https://developers.google.com/chrome/mobile/docs/debugging)

It is possible to use Chrome Dev Tools to inspect iOS apps, through a WebKit proxy: [https://github.com/google/ios-webkit-debug-proxy/](https://github.com/google/ios-webkit-debug-proxy/)

## Ripple
Ripple is a desktop based emulator for Cordova projects. Essentially it lets you run a Cordova application in your desktop application and fake various Cordova features. For example, it lets you simulate the accelerometer to test shake events. It fakes the camera API by letting you select a picture from your hard drive. Ripple lets you focus more on your custom code rather than worrying about Cordova plugins. You can find out more about Ripple here: [http://ripple.incubator.apache.org/](http://ripple.incubator.apache.org/)

## Weinre
Weinre creates a local server that can host a remote debug client for your Cordova applications. After you've installed and started it up, you copy a line of code into your Cordova application and then restart it. You can then open a dev tool panel on your desktop to work with the application. Weinre is not quite as fancy as Chrome and Safari Remote debugging but has the benefit of working with a much greater range of operating systems and platforms. More information may be found here: [http://people.apache.org/~pmuellr/weinre/docs/latest/](http://people.apache.org/~pmuellr/weinre/docs/latest/)

## Other Options

* BlackBerry 10 supports debugging as well: [Documentation]( https://developer.blackberry.com/html5/documentation/v2_0/debugging_using_web_inspector.html)
* You can debug using Firefox App Manager as well, see [this blog post](https://hacks.mozilla.org/2014/02/building-cordova-apps-for-firefox-os/) and this 
[MDN article](https://developer.mozilla.org/en-US/Apps/Tools_and_frameworks/Cordova_support_for_Firefox_OS#Testing_and_debugging).
* For more examples and explanation of the above debugging tips, see: [http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/](http://developer.telerik.com/featured/a-concise-guide-to-remote-debugging-on-ios-android-and-windows-phone/)

# User Interface

Building a Cordova application that looks nice on mobile can be a challenge, especially for developers. Many people chose to use a UI framework to make this easier. Here is a short list of options you may want to consider.

* [jQuery Mobile](jquerymobile.com) - jQuery Mobile automatically enhances your layout for mobile optimization. It also handles creating a SPA for you automatically.
* [ionic](http://ionicframework.com/) - This powerful UI framework actually has its own CLI to handle project creation. 
* [Ratchet](http://goratchet.com/) - Brought to you by the people who created Bootstrap. 
* [Kendo UI](http://www.telerik.com/kendo-ui) - Open source UI and application framework from Telerik.
* [Topcoat](http://topcoat.io)
* [ReactJS](http://facebook.github.io/react/)

When building your user interface, it is important to think about all platforms that you are targeting and the differences between the user’s expectations. For example, an Android application that has an iOS-style UI will probably not go over well with users. This sometimes is even enforced by the various application stores. Because of this, it is important that you respect the conventions of each platform and therefore are familiar with the various Human Interface Guidelines: 
* [iOS](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/MobileHIG/index.html)
* [Android](https://developer.android.com/designWP8)
* [Windows Phone](http://dev.windowsphone.com/en-us/design/library)

## Additional UI Articles and Resources

Although browser engines become more and more standards complaint, we still live in a prefixed world (-webkit and -ms.) The following article is valuable when developing UI’s in for cross browser apps: [http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx](http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx)

# Keeping Up

Here are a few ways to keep up to date with Cordova.

* Subscribe to the [Cordova blog](http://cordova.apache.org/#news).
* Subscribe to the [developer list](http://cordova.apache.org/#mailing-list). Note - this is not a support group! Rather this is a place where development of Cordova is discussed.

# Getting Help

The following links are the best places to get help for Cordova:

* StackOverflow: [http://stackoverflow.com/questions/tagged/cordova](http://stackoverflow.com/questions/tagged/cordova)
By using the Cordova tag, you can view and browse all Cordova questions. Note that StackOverflow automatically converts the "Phonegap" tag to "Cordova", so this way you will be able to access historical questions as well
* PhoneGap Google Group: [https://groups.google.com/forum/#!forum/phonegap](https://groups.google.com/forum/#!forum/phonegap)
This Google Group was the old support forum for when Cordova was still called PhoneGap. While there are still a lot of Cordova users that frequent this group, the Cordova community has expressed an interest in focusing less on this group and instead using StackOverflow for support
* Meetup: [http://phonegap.meetup.com](http://phonegap.meetup.com) - 
Consider finding a local Cordova/PhoneGap meetup group


