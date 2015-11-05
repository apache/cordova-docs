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

This section provides details for how to implement native plugin code
on the Android platform. Before reading this, see Application Plugins
for an overview of the plugin's structure and its common JavaScript
interface. This section continues to demonstrate the sample _echo_
plugin that communicates from the Cordova webview to the native
platform and back.  For another sample, see also the comments in
[CordovaPlugin.java](https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java).

Android plugins are based on Cordova-Android, which consists of an
Android WebView with hooks attached to it.  Plugins are represented as
class mappings in the `config.xml` file.  A plugin consists of at
least one Java class that extends the `CordovaPlugin` class,
overriding one of its `execute` methods. As best practice, the plugin
should also handle `[pause](../../../cordova/events/events.pause.html)` and `[resume](../../../cordova/events/events.resume.html)` events, along with any message
passing between plugins.  Plugins with long-running requests,
background activity such as media playback, listeners, or internal
state should implement the `onReset()` method as well. It executes
when the `WebView` navigates to a new page or refreshes, which reloads
the JavaScript.

## Plugin Class Mapping

The plugin's JavaScript interface uses the `cordova.exec` method as
follows:

        exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This marshals a request from the WebView to the Android native side,
effectively calling the `action` method on the `service` class, with
additional arguments passed in the `args` array.

Whether you distribute a plugin as Java file or as a _jar_ file of its
own, the plugin must be specified in your Cordova-Android
application's `res/xml/config.xml` file. See Application Plugins for
more information on how to use the `plugin.xml` file to inject this
`feature` element:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>

The service name matches the one used in the JavaScript `exec` call.
The value is the Java class's fully qualified namespace identifier.
Otherwise, the plugin may compile but still be unavailable to Cordova.

## Plugin Initialization and Lifetime

One instance of a plugin object is created for the life of each
`WebView`. Plugins are not instantiated until they are first
referenced by a call from JavaScript, unless `<param>` with an `onload`
`name` attribute is set to `"true"` in `config.xml`. E.g.:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>

Plugins should use the `initialize` method for their start-up logic.

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }

## Writing an Android Java Plugin

A JavaScript call fires off a plugin request to the native side, and
the corresponding Java plugin is mapped properly in the `config.xml`
file, but what does the final Android Java Plugin class look like?
Whatever is dispatched to the plugin with JavaScript's `exec` function
is passed into the plugin class's `execute` method. Most `execute`
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

The JavaScript `exec` function's `action` parameter corresponds to a
private class method to dispatch with optional parameters.

When catching exceptions and returning errors, it's important for the
sake of clarity that errors returned to JavaScript match Java's
exception names as much as possible.

## Threading

The plugin's JavaScript does _not_ run in the main thread of the
`WebView` interface; instead, it runs on the `WebCore` thread, as
does the `execute` method.  If you need to interact with the user
interface, you should use the following variation:

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

Use the following if you do not need to run on the main interface's
thread, but do not want to block the `WebCore` thread either:

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

## Adding Dependency Libraries

If a plugin requires additional libraries to work, you can use
one of the following approaches to add them via `config.xml`.

Option A. Via _Gradle_ reference, for example:

        <framework src="com.android.support:support-v4:+" />

This is a recommended approach as it allows multiple plugins
to refer to the same dependency library such as _gson_,
_android-support-v4_, _google-play-services_, etc and
_Gradle_ will resolve duplicate dependencies using its
[Dependency Management logic](https://docs.gradle.org/current/userguide/dependency_management.html).

Option B. As _JAR_ files placed to some plugin's folder and
linked using `lib-file`, for example:

        <lib-file src="src/android/libs/gcm.jar"/>

We recommend using this approach only if you are sure that
dependency jar is plugin specific and won't be used by
other plugins. Otherwise, there will be platform build issue.

## Echo Android Plugin Example

To match the JavaScript interface's _echo_ feature described in
Application Plugins, use the `plugin.xml` to inject a `feature`
specification to the local platform's `config.xml` file:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>

Then add the following to the
`src/org/apache/cordova/plugin/Echo.java` file:

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

The necessary imports at the top of the file extends the class from
`CordovaPlugin`, whose `execute()` method it overrides to receive
messages from `exec()`.  The `execute()` method first tests the value
of `action`, for which in this case there is only one valid `echo`
value.  Any other action returns `false` and results in an
`INVALID_ACTION` error, which translates to an error callback invoked
on the JavaScript side.

Next, the method retrieves the echo string using the `args` object's
`getString` method, specifying the first parameter passed to the
method.  After the value is passed to a private `echo` method, it is
parameter-checked to make sure it is not `null` or an empty string, in
which case `callbackContext.error()` invokes JavaScript's error
callback.  If the various checks pass, the `callbackContext.success()`
passes the original `message` string back to JavaScript's success
callback as a parameter.

## Android Integration

Android features an `Intent` system that allows processes to
communicate with each other.  Plugins have access to a
`CordovaInterface` object, which can access the Android `Activity`
that runs the application.  This is the `Context` required to launch a
new Android `Intent`.  The `CordovaInterface` allows plugins to start
an `Activity` for a result, and to set the callback plugin for when
the `Intent` returns to the application.

As of Cordova 2.0, Plugins can no longer directly access the
`Context`, and the legacy `ctx` member is deprecated. All `ctx`
methods exist on the `Context`, so both `getContext()` and
`getActivity()` can return the required object.

## Android Permissions

Android permissions until recently have been handled at install-time instead
of runtime.  These permissions are required to be declared on an application that uses
the permissions, and these permissions need to be added to the Android Manifest.  This can be
accomplished by using the config.xml to inject these permissions in the AndroidManifest.xml file.
The example below uses the Contacts permission.

        <config-file target="AndroidManifest.xml" parent="/*">
            <uses-permission android:name="android.permission.READ_CONTACTS" />
        </config-file>

## Android Permissions (Cordova-Android 5.0.x and greater)

Android 6.0 "Marshmallow" introduced a new permissions model where
the user can turn on and off permissions as necessary.  This means that
applications must handle these permission changes to be future-proof, which
was the focus of the Cordova-Android 5.0 release.

The permissions that need to be handled at runtime can be found in the Android Developer
documentation [here](http://developer.android.com/guide/topics/security/permissions.html#perm-groups).

As far as a plugin is concerned, the permission can be requested by calling the permission method, which signature is as follows:

        cordova.reqquestPermission(CordovaPlugin plugin, int requestCode, String permission);

To cut down on verbosity, it's standard practice to assign this to a local static variable:

    public static final String READ = Manifest.permission.READ_CONTACTS;

It is also standard practice to define the requestCode as follows:

    public static final int SEARCH_REQ_CODE = 0;

Then, in the exec method, the permission should be checked:

            if(cordova.hasPermission(READ)) {
                search(executeArgs);
            }
            else
            {
                getReadPermission(SEARCH_REQ_CODE);
            }

In this case, we just call requestPermission:

    protected void getReadPermission(int requestCode)
    {
        cordova.requestPermission(this, requestCode, READ);
    }

This will call the activity and cause a prompt to appear asking for the permission.  Once the user has the permission, the result must be handled with the onRequestPermissionResult method, which
every plugin should override.  An example of this can be found below:

    public void onRequestPermissionResult(int requestCode, String[] permissions,
                                             int[] grantResults) throws JSONException
    {
        for(int r:grantResults)
        {
            if(r == PackageManager.PERMISSION_DENIED)
            {
                this.callbackContext.sendPluginResult(new PluginResult(PluginResult.Status.ERROR, PERMISSION_DENIED_ERROR));
                return;
            }
        }
        switch(requestCode)
        {
            case SEARCH_REQ_CODE:
                search(executeArgs);
                break;
            case SAVE_REQ_CODE:
                save(executeArgs);
                break;
            case REMOVE_REQ_CODE:
                remove(executeArgs);
                break;
        }
    }


The switch statement above would return from the prompt and depending on the requestCode that was passed in, it would call the method.  It should be noted that permission prompts may stack if the execution is not handled correctly, and that this should be avoided.

In addition to asking for permission for a single permission, it is also possible to request permissions for an entire group by defining the permissions array, as what is done with the Geolocation plugin:

    String [] permissions = { Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION };

Then when requesting the permission, all that needs to be done is the following:
    
    cordova.requestPermissions(this, 0, permissions);

This requests the permissions specified in the array.  It's a good idea to provide a publicly accessible permissions array since this can be used by plugins that use your plugin as a 
dependency, although this is not required.

## Debugging Android Plugins

Android debugging can be done with either Eclipse or Android Studio, although Android
studio is recommended.  Since Cordova-Android is currently used as a library project,
and plugins are supported as source code, it is possible to debug the Java code inside 
a Cordova application just like a native Android application.

