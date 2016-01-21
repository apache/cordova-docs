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

## Cordova and Android

Native Android apps typically consist of a series of [activities](http://developer.android.com/reference/android/app/Activity.html) that the user
interacts with. Activities can be thought of as the individual screens that make
up an application; different tasks in an app will often have their own activity.
Each activity has its own lifecycle that is maintained as the activity enters
and leaves the foreground of a user's device.

In contrast, Cordova applications on the Android platform are executed within a
Webview that is embedded in a *single* Android activity. The lifecycle of this
activity is exposed to your application through the document events that are
fired. The events are not guaranteed to line up with Android's lifecycle, but
they can provide guidelines for saving and restoring your state. These events
roughly map to Android callbacks as follows:

Cordova Event   | Rough Android Equivalent  | Meaning
----------------|---------------------------|-----------------
`deviceready`   | `onCreate()`              | Application is starting (not from background)
`pause`         | `onPause()`               | Application is moving to the background
`resume`        | `onResume()`              | Application is returning to the foreground

Most other Cordova platforms have a similar concept of lifecycles and should
fire these same events when similar actions happen on a user's device. However,
Android presents some unique challenges that can sometimes show up thanks to the
native Activity lifecycle.

## What makes Android different?

In Android, the OS can choose to kill activities in the background in
order to free up resources if the device running the application is low on
memory. Unfortunately, when the activity holding your application is killed,
the Webview in which your application lives will be destroyed as well. Any state
that your application is maintaining will be lost in this case. When the user
navigates back to your application, the Activity and Webview will be
recreated by the OS, but state will not be automatically restored for your
Cordova app. For this reason, it is imperative that your application be aware of
the lifecycle events that are fired and maintain whatever state is appropriate
to make sure a user's context in your app is not lost when they leave the
application.

## When can this happen?

Your application is susceptible to being destroyed by the OS whenever it leaves
the sight of the user. There are two main situations in which this can occur.
The first and most obvious case is when the user presses the home button or
switches to another application.

However, there is a second (and much more subtle) case that certain plugins can
introduce. As noted above, Cordova applications are usually confined to the
single activity that contains the Webview. However, there are instances in which
other activities may be launched by plugins and temporarily push the Cordova
activity to the background. These other Activities are typically launched in
order to perform a specific task using a native application installed on the
device. For example, the Apache camera plugin launches whatever camera activity
is natively installed on the device in order to take a photo. Reusing the
installed camera application in this way makes your application feel much more
like a native app when the user tries to take a photo. Unfortunately, when the
native Activity pushes your app to the background there is a chance the OS
will kill it.

For a clearer understanding of this second case, let's walk through an example
using the camera plugin. Imagine you have an application that requires the user
to take a profile photo. The flow of events in the application when everything
goes as planned will look something like this:

1. The user is interacting with your app and needs to take a picture
2. The camera plugin launches the native camera activity
    * *The Cordova activity is pushed to the background (pause event is fired)*
3. The user takes a photo
4. The camera activity finishes
    * *The Cordova activity is moved to the foreground (resume event is fired)*
5. The user is returned to your application where they left off

However, this flow of events can be disrupted if a device is low on memory. If
the Activity is killed by the OS, the above sequence of events instead plays out
as follows:

1. The user is interacting with your app and needs to take a picture
2. The camera plugin launches the native camera activity
    * *The OS destroys the Cordova activity (pause event is fired)*
3. The user takes a photo
4. The camera activity finishes
    * *The OS recreates the Cordova activity (deviceready and resume events are fired)*
5. The user is confused as to why they are suddenly back at your app's login screen

In this instance, the OS killed the application in the background and the
application did not maintain its state as part of the lifecycle. When the user
returned to the app, the Webview was recreated and the app appeared to have
restarted from scratch (hence the user's confusion). This sequence of events is
equivalent to what happens when the home button is pressed or the user switches
applications. The key to preventing the above experience is subscribing to
events and properly maintaining state as part of the activity lifecycle.

## Respecting the Lifecycle

In the examples above, the javascript events that are fired are noted in
italics. These events are your opportunity to save and restore your
application's state. You should register callbacks in your application's
`bindEvents` function that respond to the lifecycle events by saving state. What
information you save and how you save it is left to your discretion, but you
should be sure to save enough information so that you can restore the user to
exactly where they left off when they return to your application.

There is one additional factor in the example above that only applies in the
second-discussed situation (i.e. when a plugin launches an external activity).
Not only was the state of the application lost when the user finished taking a
photo, but so was the photo that the user took. Normally, that photo would be
delivered to your application through the callback that was registered with the
camera plugin. However, when the Webview was destroyed that callback was lost
forever. Luckily, cordova-android 5.1.0 and above provide a means for getting
the result of that plugin call when your application resumes.

## Retrieving plugin callback results (cordova-android 5.1.0+)

When the OS destroys the Cordova activity that was pushed into the background
by a plugin, any pending callbacks are lost as well. This means that if you
passed a callback to the plugin that launched the new activity (e.g. the camera
plugin), that callback will NOT be fired when the application is recreated.
However, starting in cordova-android **5.1.0**, the `resume` event's payload will
contain any pending plugin results from the plugin request that launched the
external activity made prior to the activity being destroyed.

The payload for the `resume` event adheres to the following format:

```
{
    action: "resume",
    pendingResult: {
        pluginServiceName: string,
        pluginStatus: string,
        result: any
    }
}
```

The fields of that payload are defined as follows:

* `pluginServiceName`: The name of the plugin returning the result (e.g. "Camera"). This can be found in the `<name>` tag of a plugin's plugin.xml file
* `pluginStatus`: The status of the plugin call (see below)
* `result`: Whatever the result of the plugin call is

The possible values for `pluginStatus` in the `pendingResult` field include the following:
* `"OK"` - The plugin call was successful
* `"No Result"` - The plugin call ended with no result
* `"Error"` - The plugin call resulted in some general error
* Other miscellaneous errors
    * `"Class not found"`
    * `"Illegal access"`
    * `"Instantiation error"`
    * `"Malformed url"`
    * `"IO error"`
    * `"Invalid action"`
    * `"JSON error"`

Please note that it is up to the plugin to decide what is contained in the
`result` field and the meaning of the `pluginStatus` that is returned. Reference
the API of the plugin you are using to see what you should expect those fields
to contain and how to use their values.

### Example

Below is a brief example application that uses the `resume` and `pause` events
to manage state. It uses the Apache camera plugin as an example of how to
retrieve the results of a plugin call from the `resume` event payload. The
portion of the code dealing with the `resume`'s `event.pendingResult` object
requires cordova-android **5.1.0+**

```javascript
// This state represents the state of our application and will be saved and
// restored by onResume() and onPause()
var appState = {
    takingPicture: true,
    imageUri: ""
};

var APP_STORAGE_KEY = "exampleAppState";

var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        // Here we register our callbacks for the lifecycle events we care about
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener('pause', this.onPause, false);
        document.addEventListener('resume', this.onResume, false);
    },
    onDeviceReady: function() {
        document.getElementById("take-picture-button").addEventListener("click", function() {
            // Because the camera plugin method launches an external Activity,
            // there is a chance that our application will be killed before the
            // success or failure callbacks are called. See onPause() and
            // onResume() where we save and restore our state to handle this case
            appState.takingPicture = true;

            navigator.camera.getPicture(cameraSuccessCallback, cameraFailureCallback,
                {
                    sourceType: Camera.PictureSourceType.CAMERA,
                    destinationType: Camera.DestinationType.FILE_URI,
                    targetWidth: 250,
                    targetHeight: 250
                }
            );
        });
    },
    onPause: function() {
        // Here, we check to see if we are in the middle of taking a picture. If
        // so, we want to save our state so that we can properly retrieve the
        // plugin result in onResume(). We also save if we have already fetched
        // an image URI
        if(appState.takingPicture || appState.imageUri) {
            window.localStorage.setItem(APP_STORAGE_KEY, JSON.stringify(appState));
        }
    },
    onResume: function(event) {
        // Here we check for stored state and restore it if necessary. In your
        // application, it's up to you to keep track of where any pending plugin
        // results are coming from (i.e. what part of your code made the call)
        // and what arguments you provided to the plugin if relevant
        var storedState = window.localStorage.getItem(APP_STORAGE_KEY);

        if(storedState) {
            appState = JSON.parse(storedState);
        }

        // Check to see if we need to restore an image we took
        if(!appState.takingPicture && appState.imageUri) {
            document.getElementById("get-picture-result").src = appState.imageUri;
        }
        // Now we can check if there is a plugin result in the event object.
        // This requires cordova-android 5.1.0+
        else if(appState.takingPicture && event.pendingResult) {
            // Figure out whether or not the plugin call was successful and call
            // the relevant callback. For the camera plugin, "OK" means a
            // successful result and all other statuses mean error
            if(event.pendingResult.pluginStatus === "OK") {
                // The camera plugin places the same result in the resume object
                // as it passes to the success callback passed to getPicture(),
                // thus we can pass it to the same callback. Other plugins may
                // return something else. Consult the documentation for
                // whatever plugin you are using to learn how to interpret the
                // result field
                cameraSuccessCallback(event.pendingResult.result);
            } else {
                cameraFailureCallback(event.pendingResult.result);
            }
        }
    }
}

// Here are the callbacks we pass to getPicture()
function cameraSuccessCallback(imageUri) {
    appState.takingPicture = false;
    appState.imageUri = imageUri;
    document.getElementById("get-picture-result").src = imageUri;
}

function cameraFailureCallback(error) {
    appState.takingPicture = false;
    console.log(error);
}

app.initialize();
```

The corresponding html:

```html
<!DOCTYPE html>

<html>
    <head>
        <meta http-equiv="Content-Security-Policy" content="default-src 'self' data: gap: https://ssl.gstatic.com 'unsafe-eval'; style-src 'self' 'unsafe-inline'; media-src *">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">
        <link rel="stylesheet" type="text/css" href="css/index.css">
        <title>Cordova Android Lifecycle Example</title>
    </head>
    <body>
        <div class="app">
            <div>
                <img id="get-picture-result" />
            </div>
            <Button id="take-picture-button">Take Picture</button>
        </div>
        <script type="text/javascript" src="cordova.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </body>
</html>
```

## Testing the Activity Lifecycle

Android provides a developer setting for testing Activity destruction on low
memory. Enable the "Don't keep activities" setting in the Developer Options menu
on your device or emulator to simulate low memory scenarios. You should always
do some amount of testing with this setting enabled to make sure that your
application is properly maintaining state.
