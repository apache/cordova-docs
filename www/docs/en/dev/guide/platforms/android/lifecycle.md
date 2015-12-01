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

title: Android Lifecycle Guide
---

# Android Lifecycle Guide

Native Android apps typically consist of a series of "activities" that the user interacts with. Activities can be thought of as the individual screens that make up an application; different tasks in an app will often have their own activity. Each activity has a lifecycle, and can be created and destroyed as the OS sees fit.

In contrast, Cordova applications on the Android platform are executed within a Webview that is embedded in a *single* Android activity. The lifecycle of this activity is exposed to your application through the document events that are fired. These events are not guaranteed to line up with Android's lifecycle, but they can provide guidelines for saving and restoring your state. These events roughly map to Android callbacks as follows:

Cordova Event   | Rough Android Equivalent
----------------|-----------------------------------
`deviceready`   | `onCreate()`
`pause`         | `onPause()`
`resume`        | `onResume()`

Often, Cordova applications are confined to the single activity that contains the Webview. However, there are instances in which other activities may be launched that push the Cordova activity to the background. It is important in these cases to be aware of the Android lifecycle and properly maintain your application's state by respecting it.

## Low memory and the Activity lifecycle

Plugins have the ability to launch activities beyond the Cordova activity in order to perform some tasks. For example, the Apache camera plugin, cordova-plugin-camera, launches the device's camera activity in order to take photos.

The flow of events in this case looks something like this:

1. The user is interacting with your app and needs to take a picture
2. The camera plugin launches the native camera activity
    * *The Cordova activity is pushed to the background (`pause` event is fired)*
3. The user takes a photo
4. The camera activity finishes
    * *The Cordova activity is moved to the foreground (`resume` event is fired)*
5. The user is returned to your application where they left off

However, this flow of events can be disrupted if a device is low on memory. The Android OS will often kill background activities in order to free up memory if necessary. Unfortunately, when the activity holding your application is killed, the Webview in which your application lives will be destroyed as well. Any state that your application is maintaining will be lost in this case. When the user navigates back to your the application, the Activity and Webview will be recreated by the OS, but state will not be automatically restored.

If state is not properly saved when the Activity is destroyed, the above sequence of events instead plays out as follows:

1. The user is interacting with your app and needs to take a picture
2. The camera plugin launches the native camera activity
    * *The OS destroys the Cordova activity (`pause` event is fired)*
3. The user takes a photo
4. The camera activity finishes
    * *The OS recreates the Cordova activity (`deviceready` and `resume` events are fired)*
5. The user is confused as to why they are suddenly back at your app's login screen

In this instance, the photo that was taken is lost and the user is given the confusing and frustrating experience of having your application appear to randomly restart. The key to preventing this experience is subscribing to events and properly maintaining state as part of the activity lifecycle.

## Maintaining state

In the examples above, the javascript events that are fired are noted in italics. These events are your opportunity to save and restore your application's state. You should register callbacks in your application's `bindEvents` function that respond to the lifecycle events by saving state. What information you save and how you save it is left to your discretion, but you should be sure to save enough information so that you can restore the user to exactly where they left off when they return to your application.

## Testing the Activity Lifecycle

Android provides a developer setting for debugging Activity destruction on low memory. Enable the "Don't keep activities" setting in the Developer Options menu on your device or emulator to simulate low memory scenarios. If your application launches external activities, you should always do some testing with this setting enabled to ensure that you are properly handling low memory scenarios.

## Retrieving plugin callback results

When the OS destroys the Cordova activity in the above example, any pending callbacks are lost as well. This means that if you passed a callback to the plugin that launched the new activity (e.g. cordova-plugin-camera), that callback will NOT be fired when the application is recreated. However, there is a way for plugins to pass the result of this call to your application. The `resume` event's payload will contain any pending plugin results from the plugin request that launched the external activity made prior to the activity being destroyed.

The payload for the `resume` event adheres to the following format:

```
{
    action: "resume",
    pendingResult: {
        pluginServiceName: <name of the plugin e.g. "Camera">,
        pluginStatus: <description of the result's status (see below)>,
        result: <argument(s) that would have been given to the callback>
    }
}
```

The possible plugin statuses in the `pendingResult` field include the following values:

```
"No result"
"OK"
"Class not found"
"Illegal access"
"Instantiation error"
"Malformed url"
"IO error"
"Invalid action"
"JSON error"
"Error
```

>**NOTE:** It is up to the plugin to decide what is contained in the `result` field and the meaning of the `pluginStatus` that is returned. Reference the API of the plugin you are using to see what you should expect those fields to contain and how to use their values

A `resume` callback that makes use of the event payload might look something like this:

```javascript
onResume(event) {
    // Restore your application's state here. It's up to you to keep track of
    // where this plugin result is coming from (i.e. what part of your code made
    // the call) and what arguments you provided to the plugin

    // Next, check if there is a plugin result in the event object
    if(event.pendingResult) {
        // Figure out whether or not the plugin call was successful
        if(event.pendingResult.pluginStatus === "OK") {
            successCallback(event.result);
        } else {
            failCallback(event.result);
        }
    }
}
```
