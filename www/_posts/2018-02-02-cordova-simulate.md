---
layout: post
author:
    name: John M. Wargo
    url: https://twitter.com/johnwargo
title:  "A Better Way to Exercise Cordova Plugins"
categories: howto
tags:
---

Cordova developers have several ways to test and debug their Cordova applications. For functional testing, developers use emulators, simulators, and physical devices. Devices can be on-premises, or there are many cloud offerings available as well. There's even great tools you can use to debug your applications such as the web app debugging capabilities of Chrome and Safari, as well as the excellent debugging capabilities of Microsoft's Visual Studio Code extension for Apache Cordova.

For debugging plugins, or debugging applications that utilize Cordova plugins, things aren't that bad. For most plugins, I imagine that any physical device has whatever's needed to work with a plugin, unless the plugin requires some external hardware device or has other requirements that aren't by every device. For several of the core Cordova plugins, the device emulators and simulators expose capabilities that enable testers to simulate things like the camera, accelerometer, compass, and other device-side capabilities (although, surprisingly, early iOS simulators didn't support camera simulation).

When it comes to exercising all the capabilities of a plugin, especially simulating error conditions so you can tell how the app responds, it gets complicated. Developers often find themselves hacking away at plugin code, either mocking up simulation scenarios, or manually changing the behavior of the plugin during testing. In many cases, developers must manually force error conditions in their plugins so they can validate error checking within their app. I haven't written many Cordova plugins, but in the little work I have done, I've wished that there was a better way. Well, it turns out that there is.

<!--more-->

Many, many years ago, a small company named Tiny Hippos created the Ripple Emulator, a browser-based emulator for many mobile devices. Ripple was interesting in many ways, but for the scope of this article, one of the interesting features was its implementation of emulators for many of the core Cordova plugins. As you ran your Cordova application in one pane, a separate pane opened with options to control many aspects of the simulated environment as shown in the following figure.

![Figure 1]({{ site.baseurl }}/static/img/blog/2018/cordova-simulate-1.png)

Well, shortening a long story a bit, the folks at Research In Motion (BlackBerry) purchased Tiny Hippos and maintained Ripple for a while before finally contributing it to the Apache Foundation as an incubator project. Many companies got involved, including Adobe, Microsoft, and others, but the project never really took off, or ever became a stable product. It never actually made it out of beta.

Anyway, fast forward to today and you'll find that Microsoft took the Ripple project and rebuilt it. We kept some of the original code (some of the plugin simulation panels and supporting utility functions), rewrote some parts, created some new code, then released it as an open source project called Cordova Simulate ([https://github.com/Microsoft/cordova-simulate](https://github.com/Microsoft/cordova-simulate)). We chose this approach, rather than investing in Ripple, because:

* We had regular reports of issues with Ripple starting and Visual Studio not being able to connect to it successfully, so we wanted a simpler architecture for rendering the Cordova web app (a separate browser window that just hosted the app, and nothing else).
* Debugging Ripple was a challenge since you were effectively debugging both the app and Ripple itself (you had to drill down into the Ripple UI's HTML to find the hosted Cordova web app, and Ripple's JavaScript code could easily be a part of your stack when debugging).
* Since Ripple and the Cordova web app render in the same browser window, if the Cordova web app froze for any reason, Ripple also froze (or, in less severe cases, the Ripple UI could look unresponsive when the Cordova web app is busy).

Cordova Simulate solves these issues:

* The app window doesn't also host the simulation UI - just the app (and a small bit of code to enable communication with the simulation UI). This solves the first two problems identified above.
* The simulation UI renders in a separate window, and all communication is asynchronous, so an unresponsive app won't interfere with the simulation UI. This solves the third problem.

Another driving purpose for Cordova Simulate was that we wanted to make it extensible; allowing plugins to define their own simulation functionality (as you'll soon learn about).

To my previous point about Ripple never making it out of beta, not only is Cordova Simulate a complete, robust, and released solution, it's even part of several Microsoft offerings (both commercial and open source). Its bundled into Visual Studio Tools for Apache Cordova (TACO - [http://taco.visualstudio.com/](http://taco.visualstudio.com/)) in Visual Studio 2017. It's also included as part of the Apache Cordova extension for Visual Studio Code ([https://github.com/Microsoft/vscode-cordova](https://github.com/Microsoft/vscode-cordova)). 

Why is this important to you? Well, let me explain...

With Cordova Simulate, you now have access to a complete solution for testing your apps against simulated versions of the core Cordova plugins. This eliminates the need to hack up your code to simulate plugin responses as Cordova Simulate takes care of that for you.

**Note:** If you just read the last paragraph, and said to yourself "so what?" just hang on for a little while longer.

The most important benefit for you is that you can add support for Cordova Simulate to each of your custom plugins as well. Then, when you're exercising your plugins during plugin development, or when your customers are using your plugins, you have a standard way to simulate the capabilities of your plugin (including error scenarios). When third-party providers add support for Cordova Simulate to their plugins, suddenly developers can accurately test each aspect of their application using a variety of plugins.

Let me show you how to install and use Cordova Simulate, then I'll show you how to add support for Cordova Simulate to your custom plugins. If you're using someone else's plugin, and they don't have support for Cordova Simulate in the plugin, add it yourself and submit a pull request, it's not that hard.

## Installing Cordova Simulate

As I mentioned before, Visual Studio Tools for Apache Cordova and the Cordova extension for Visual Studio Code both include Cordova Simulate, so there's no extra installation instructions to follow - just install the tools, and you'll have what you need.

You can also invoke Cordova Simulate from the command line, or from third party IDEs. To install Cordova Simulate for those scenarios, open a terminal window, and execute the following command:

```
npm install -g cordova-simulate
```
	
That's it, that's all there is to it. When the process completes, you'll now have a `simulate` command at your disposal to launch Cordova Simulate.

## Launching Cordova Simulate

The following sections describe how to launch Cordova Simulate in different ways.

### Visual Studio

If you're running an app in Visual Studio & TACO, just choose the **Simulate in Browser** option, and the app launches Cordova Simulate. Cordova Simulate will open the Chrome browser and run the web application part of your Cordova app. Cordova Simulate will also open a simulator control window in Visual Studio (using Internet Explorer, no surprise there). You'll interact with the app in the Chrome window and simulate methods and properties in the plugins using the simulator control window. I'll show you how in a minute.

### Visual Studio Code

If you're using Visual Studio Code, go to the **Debug** tab, enable **Cordova debugging**, then execute either the **Simulate Android in browser** or **Simulate iOS in browser** options. Cordova Simulate will open the Chrome browser and execute the web application part of your Cordova app. Cordova Simulate will also open a simulator control window inside Visual Studio Code. You'll interact with the app in the Chrome window and simulate methods and properties in the plugins using the simulator control window. I'll show you how in a minute.

### Command-line

To launch Cordova Simulate from the command-line, open a terminal window, navigate to a Cordova project folder, and execute the following command:

```
simulate \[platform\]
```
	
Platform refers to one of the supported target platforms (for example: `android`, `ios`, or `browser`). For example, to simulate the Android version of your Cordova application, you would use the following:

```
simulate android
```
	
Cordova Simulate will open the Chrome browser with two tabs, one running the Cordova app web app, and the other displaying the simulator control window shown in the following figure.

![Figure 2]({{ site.baseurl }}/static/img/blog/2018/cordova-simulate-2.png)

By default, Cordova Simulate loads a default set of plugin simulators:

* Since HTML has native support for geolocation, Cordova Simulate automatically loads the Geolocation simulator pane.
* The event simulator pane loads automatically to enable developers to trigger Cordova and device events as needed
* Persisted Exec Calls pane enables basic simulator support for third-party plugins that don't include support for Cordova Simulate.
* The Device simulator loads automatically to enable you to change the target device used for rendering the web app.

If I'd added other Cordova core plugins to my project, Cordova Simulate would load simulators for each, if available.

At this point, you can interact with your app as needed, and switch to the simulator control window to adjust plugin properties and method call results. For example, if your Cordova app used the Geolocation plugin to track the device's location, changing any of the values in the Geolocation simulator pane would cause the app's next call to `navigator.geolocation.getCurrentPosition` to receive the updated value you entered into the pane.

## Adding Cordova Simulate Support to Your Plugins

Alright, it's time to show you how to add Cordova Simulate support to your own plugins. First, you must add a `simulation` folder to your plugin's `src` folder (so `src/simulation/`). Inside that folder, you'll create one or more of the following files based on the needs of your plugin:

* `app-host-clobbers.js`
* `app-host-handlers.js`
* `app-host.js`
* `sim-host-dialogs.html`
* `sim-host-handlers.js`
* `sim-host-panels.html`
* `sim-host.js`

For my simple example, I'm only going to need three files, but refer to the Cordova Simulate documentation at [https://github.com/Microsoft/cordova-simulate](https://github.com/Microsoft/cordova-simulate) for details about each of these files.

The plugin I used for my example is a simple Carrier plugin I created many years ago for one of my Cordova books: [https://www.npmjs.com/package/johnwargo-cordova-plugin-carrier](https://www.npmjs.com/package/johnwargo-cordova-plugin-carrier). It exposes two methods:

* `getCarrierName`: An asynchronous method that retrieves the current carrier for the device running the application.
* `getCountryCode`: An asynchronous method that retrieves the country code for the device running the application

When exercising this plugin, I'll need the ability to validate my app's code against different carrier and country code values. To simulate this, I'll need an HTML panel that offers multiple carrier and country code choices. For this, I created a `sim-host.panels.html` file in the plugin project's `src/simulation/` folder. The file creates a simple panel with two drop-down lists containing some country and carrier values:

```
<cordova-panel id="johnwargo-cordova-plugin-carrier" caption="Carrier" 
  spoken-text="Carrier">
    <cordova-panel-row>
        Select carrier and country code options from the drop-down lists below.
    </cordova-panel-row>
    <cordova-panel-row>
        <cordova-label label="Carrier Name" spoken="carrier name"></cordova-label>
        <cordova-combo spoken-text="Simulated value for wireless carrier" 
           id="carrier-select" style="width:auto; min-width:0; display:inline;">
            <option value="AT&T" selected="selected">AT&T</option>
            <option value="Sprint">Sprint</option>
            <option value="T-Mobile">T-Mobile</option>
            <option value="US Cellular">US Cellular</option>
            <option value="Verizon">Verizon</option>
        </cordova-combo>
    </cordova-panel-row>
    <cordova-panel-row>
        <cordova-label label="Country Code" spoken="country code"></cordova-label>
        <cordova-combo spoken-text="Simulated value for country code" 
          id="country-code-select" style="width:auto; min-width:0; display:inline;">
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
            <option value="US" selected="selected">United States</option>
        </cordova-combo>
    </cordova-panel-row>
    <cordova-panel-row>
      Enable the error checkbox to execute the error callback instead of the success callback on plugin API calls.
    </cordova-panel-row>
    <cordova-checkbox id="is-error" spoken="">Error condition</cordova-checkbox>
</cordova-panel>
```

As you can see from the code, the panel makes use of special HTML element types supported by Cordova Simulate. The simulator code for most of the core Cordova plugins is included with the Cordova Simulate Github repository, so you can find examples there of the available UI elements in use.

Next, I added a `sim-host.js` file to the folder. This file isn't necessary, but it provides an opportunity to initialize the simulated plugin, and I use it to update the console whenever the user makes a change in the simulation panel. Not critically important, but useful as I sorted out what was happening as I built the simulation.

```
module.exports = {
    initialize: function() {
        //Get access to the carrier selection drop-down
        var carrierSel = document.getElementById('carrier-select');
        //Add a change event listener to the field
        carrierSel.addEventListener('change', carrierChange);
        //Get access to the country code selection drop-down
        var ccSel = document.getElementById('country-code-select');
        //Add a change event listener to the field
        ccSel.addEventListener('change', ccChange); 

        function carrierChange() {
            console.log("Carrier selection changed to " + this.value);
        }
 
        function ccChange() {
            console.log("Country code selection changed to " + this.value);
        }
    }
};
```

If you study the source code for the simulator capabilities in the core Cordova plugins, you'll see that many of them use change events like the ones just shown in the code to update properties for objects exposed by the plugins. As developers change values in the simulator panel, the change events register the change and updates a local object. Then, when a Cordova application accesses one of those properties, the code returns the value from the local object.

Finally, I added a `sim-host-handlers.js` file to the project. The code in this file overrides the `cordova.exec` calls from the plugin in the simulated environment. Here, I export the native methods supported by the plugin and pull the selected values from the simulator panel and return them to the calling application.

```
module.exports = function(messages) {
    return {
        carrier: {
            getCarrierName: function(successCallback, errorCallback) {
                console.log("Cordova-Simulate: getCarrierName invoked");
                //Get access to the carrier selection drop-down
                var carrierSel = document.getElementById('carrier-select');
                //Pull the value from the selected item
                var selValue = carrierSel.options[carrierSel.selectedIndex].value;
                console.log('Simulating carrier: ' + selValue);
                //And return it to the calling method
                successCallback(selValue);
            },
            getCountryCode: function(successCallback, errorCallback) {
                console.log("Cordova-Simulate: getCountryCode invoked");
                //Get access to the country code selection drop-down
                var ccSel = document.getElementById('country-code-select');
                //Pull the value from the selected item
                var selValue = ccSel.options[ccSel.selectedIndex].value;
                console.log('Simulating country code: ' + selValue);
                //And return it to the calling method
                successCallback(selValue);
            }
        }
    };
};
```

This is a very simple example of what you can do, be sure to check out the source code for the simulator capabilities included with core Cordova plugins for more sophisticated examples.

Now, when you create a Cordova application that uses this plugin, then execute Cordova Simulate, you'll see the following panel exposed on the Cordova Simulate Simulator Control window:

![Figure 3]({{ site.baseurl }}/static/img/blog/2018/cordova-simulate-3.png)

Make the appropriate changes to the panel, then call the associated APIs from the Cordova application to see the selected results.

If you think about what we've done so far, we've only addressed success scenarios - changing the behavior of the plugin in the simulated environment so we can test the app with different API results. Most plugins also report error conditions, and in order to properly exercise the plugin or an app using the plugin, you must be able to simulate error conditions as well. Let me show you how to do that.

First, I added a new row to the `sim-host.panels.html` file:

```
<cordova-panel-row>
  Enable the error checkbox to execute the error callback instead of the success callback on plugin API calls.
</cordova-panel-row>
<cordova-checkbox id="is-error" spoken="">Error condition</cordova-checkbox>
```

This adds an Error checkbox to the panel, enabling developers to return an error from each plugin API call. The updated `sim-host.panels.html` file looks like this:

```
<cordova-panel id="johnwargo-cordova-plugin-carrier" caption="Carrier" 
  spoken-text="Carrier">
    <cordova-panel-row>
        Select carrier and country code options from the drop-down lists below.
    </cordova-panel-row>
    <cordova-panel-row>
        <cordova-label label="Carrier Name" spoken="carrier name"></cordova-label>
        <cordova-combo spoken-text="Simulated value for wireless carrier" 
           id="carrier-select" style="width:auto; min-width:0; display:inline;">
            <option value="AT&T" selected="selected">AT&T</option>
            <option value="Sprint">Sprint</option>
            <option value="T-Mobile">T-Mobile</option>
            <option value="US Cellular">US Cellular</option>
            <option value="Verizon">Verizon</option>
        </cordova-combo>
    </cordova-panel-row>
    <cordova-panel-row>
        <cordova-label label="Country Code" spoken="country code"></cordova-label>
        <cordova-combo spoken-text="Simulated value for country code" 
          id="country-code-select" style="width:auto; min-width:0; display:inline;">
            <option value="CA">Canada</option>
            <option value="MX">Mexico</option>
            <option value="US" selected="selected">United States</option>
        </cordova-combo>
    </cordova-panel-row>
    <cordova-panel-row>
      Enable the error checkbox to execute the error callback instead of the success callback on plugin API calls.
    </cordova-panel-row>
    <cordova-checkbox id="is-error" spoken="">Error condition</cordova-checkbox>
</cordova-panel>
```

Now, in the `sim-host-handlers.js` file, I added a check for the checkbox status in each of the methods exposed in the file. For my plugin, with the checkbox checked, the method calls the error callback function returning a dummy JSON object containing a simple error message and code. For your plugins, you'll likely want to expand this so you can simulate different error conditions.

```
module.exports = function(messages) {
	return {
		carrier: {
			getCarrierName: function(successCallback, errorCallback) {
				console.log("Cordova-Simulate: getCarrierName invoked");
				if (document.getElementById('is-error').checked) {
					console.error("Error condition enabled");
					errorCallback({ code: 1, msg: "Simulated error condition" });
				} else {
					//Get access to the carrier selection drop-down
					var carrierSel = document.getElementById('carrier-select');
					//Pull the value from the selected item
					var selValue = carrierSel.options[carrierSel.selectedIndex].value;
					console.log('Simulating carrier: ' + selValue);
					//And return it to the calling method
					successCallback(selValue);
				}
			},
			getCountryCode: function(successCallback, errorCallback) {
				if (document.getElementById('is-error').checked) {
					console.error("Error condition enabled");
					errorCallback({ code: 2, msg: "Simulated error condition" });
				} else {
					console.log("Cordova-Simulate: getCountryCode invoked");
					//Get access to the country code selection drop-down
					var ccSel = document.getElementById('country-code-select');
					//Pull the value from the selected item
					var selValue = ccSel.options[ccSel.selectedIndex].value;
					console.log('Simulating country code: ' + selValue);
					//And return it to the calling method
					successCallback(selValue);
				}
			}
		}
	};
};
```

Now, when I execute Cordova simulate I'll see the slightly different panel shown below.

![Figure 4]({{ site.baseurl }}/static/img/blog/2018/cordova-simulate-4.png)

That's it, that's all there is to enable simulation in your own plugins. As you can hopefully see, Cordova Simulate gives developers (plugin developers and developers who use those developer's plugins in their applications) an easier way to exercise the plugin and test applications using the plugin. 

Cordova Simulate is an open source project from Microsoft, but we'd love to have your help enhancing it and fixing issues as they arise. Please follow the project on Github and take a look at how you can help enhance this project.
