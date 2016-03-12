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

title: Android Plugins
---

# Android Plugins

Writing a plugin requires an understanding of the architecture of
Cordova-Android. Cordova-Android consists of an Android WebView with
hooks attached to it. These plugins are represented as class mappings
in the `config.xml` file.

A plugin consists of at least one Java class that extends the
`CordovaPlugin` class. A plugin must override one of the `execute`
methods from `CordovaPlugin`.  As best practice, the plugin should
handle [`pause`](../../../cordova/events/events.pause.html) and [`resume`](../../../cordova/events/events.resume.html) events, and any message passing between
plugins.  Plugins with long-running requests, background activity such
as media playback, listeners, or internal state should implement the
`onReset()` method as well. It executes when the `WebView` navigates to
a new page or refreshes, which reloads the JavaScript.

## Plugin Class Mapping

The JavaScript portion of a plugin always uses the `cordova.exec` method as follows:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This marshals a request from the WebView to the Android native side,
more or less boiling down to calling the `action` method on the
`service` class, with the arguments passed in the `args` Array.

Whether you distribute your plugin as Java file or as a JAR of its
own, the plugin must be added to the `config.xml` file in your
Cordova-Android application's `res/xml/` directory.

    <feature name="<service_name>">
        <param name="android-package" value="<full_name_including_namespace>" />
    </feature>

The service name should match the one used in the JavaScript `exec`
call, and the value is the Java classes full name, including the
namespace.  Otherwise the plugin may compile but still be unreachable
by Cordova.

## Writing an Android Java Plugin

JavaScript fires off a plugin request to the native side.  The Android
Java plugin is mapped properly via the `config.xml` file.  So what
does the final Android Java Plugin class look like?

What gets dispatched to the plugin via JavaScript's `exec` function gets
passed into the Plugin class's `execute` method. Most `execute`
implementations look like this:

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            this.beep(args.getLong(0));
            callbackContext.success();
            return true;
        }
        return false;  // Returning false results in a "MethodNotFound" error.
    }

We compare the value of the `action` parameter, and dispatch the
request off to a (private) method in the class, optionally passing
some of the parameters to the method.

When catching exceptions and returning errors, it's important for the
sake of clarity that errors returned to JavaScript match Java's
exception names as much as possible.

### Threading

JavaScript in the WebView does *not* run on the UI thread. It runs on
the WebCore thread. The `execute` method also runs on the WebCore thread.

If you need to interact with the UI, you should use the following:

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // Thread-safe.
                }
            });
            return true;
        }
        return false;
    }

If you do not need to run on the UI thread, but do not want to block the WebCore thread:

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        if ("beep".equals(action)) {
            final long duration = args.getLong(0);
            cordova.getThreadPool().execute(new Runnable() {
                public void run() {
                    ...
                    callbackContext.success(); // Thread-safe.
                }
            });
            return true;
        }
        return false;
    }

### Echo Android Plugin Example

Add the following to our `config.xml` file:

    <feature name="Echo">
        <param name="android-package" value="org.apache.cordova.plugin.Echo" />
    </feature>

Then add the following file to
`src/org/apache/cordova/plugin/Echo.java` inside our Cordova-Android
application:

    package org.apache.cordova.plugin;

    import org.apache.cordova.CordovaPlugin;
    import org.apache.cordova.CallbackContext;

    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;

    /**
     * This class echoes a string called from JavaScript.
     */
    public class Echo extends CordovaPlugin {

        @Override
        public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
            if (action.equals("echo")) {
                String message = args.getString(0);
                this.echo(message, callbackContext);
                return true;
            }
            return false;
        }

        private void echo(String message, CallbackContext callbackContext) {
            if (message != null && message.length() > 0) {
                callbackContext.success(message);
            } else {
                callbackContext.error("Expected one non-empty string argument.");
            }
        }
    }

Let's take a look at the code. The necessary `imports` are at
the top. Our class extends from `CordovaPlugin`. We override the
execute() method in order to recieve messages from exec(). Our method
first compares against `action`: this plugin only supports one action,
the `echo` action. Any other action returns `false`, which results in an
error of type `INVALID_ACTION`, which translates into an error
callback invocation on the JavaScript side. Next, we grab the echo
string using the `getString` method on our `args`, telling it we want
to get the 0th parameter in the parameter array. We do a bit of
parameter checking: make sure it is not `null`, and make sure it is
not a zero-length string. If it is, we call `callbackContext.error()`
(which, by now, you should know invokes the error callback). If all of
those checks pass, then we call `callbackContext.success()` and pass
in the `message` string we received as a parameter. This finally
translates into a success callback invocation on the JavaScript
side. It also passes the `message` parameter as a parameter into the
JavaScript success callback function.

## Debugging Plugins

Eclipse can be used to debug an Android project, and the plugins can be debugged if the Java source is included in the project. Only the latest version of the Android Developer Tools is known to allow source code attachment to JAR dependencies, so this is not fully supported at this time.

## Common Pitfalls

* Plugins have access to a `CordovaInterface` object. This object has access to the Android `Activity` that is running the application. This is the `Context` required to launch
a new Android `Intent`. The `CordovaInterface` allows plugins to start an `Activity` for a result, and to set the callback plugin for when the `Intent` comes back to the application. This is important, since the
`Intent`s system is how Android communicates between processes.

* Plugins do not have direct access to the `Context` as they have in the past. The legacy `ctx` member is deprecated, and will be removed six months after 2.0 is released. All of `ctx` methods exist on the `Context`, so both `getContext()` and `getActivity()` are capable of returning the proper object required.

## Use the Source

One of the best ways to prepare yourself to write your own plugin is to
[look over existing plugins](https://github.com/search?q=%40apache+cordova-plugin).

You should also read through the comments in [CordovaPlugin.java](https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java).
