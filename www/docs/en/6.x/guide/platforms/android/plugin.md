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

# Android Plugin Development Guide

This section provides details for how to implement native plugin code
on the Android platform. Before reading this, see the [Plugin Development Guide][plugin-dev]
for an overview of the plugin's structure and its common JavaScript
interface. This section continues to demonstrate the sample _echo_
plugin that communicates from the Cordova webview to the native
platform and back.  For another sample, see also the comments in
[CordovaPlugin.java][cordova-plugin].

Android plugins are based on Cordova-Android, which is built from an
Android WebView with a native bridge. The native portion of an Android plugin
consists of at least one Java class that extends the `CordovaPlugin` class and
overrides one of its `execute` methods.

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
`name` attribute is set to `"true"` in `config.xml`. For example,

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

Plugins also have access to Android lifecycle events and can handle them
by extending one of the provided methods (`onResume`, `onDestroy`, etc).
Plugins with long-running requests, background activity such as media playback,
listeners, or internal state should implement the `onReset()` method. It
executes when the `WebView` navigates to a new page or refreshes, which reloads
the JavaScript.

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
interface, you should use the [Activity's `runOnUiThread`][ref-runonuithread]
method like so:

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

If you do not need to run on the UI thread, but do not wish to block the
`WebCore` thread either, you should execute your code using the Cordova
[`ExecutorService`][ref-executor] obtained with `cordova.getThreadPool()` like
so:

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

If your Android plugin has extra dependencies, they must be listed in the
`plugin.xml` in one of two ways.

The preferred way is to use the `<framework />` tag (see the
[Plugin Specification][plugin-ref-framework] for more details).
Specifying libraries in this manner allows them to be resolved via Gradle's
[Dependency Management logic][gradle-dep-management]. This allows commonly used
libraries such as _gson_, _android-support-v4_, and _google-play-services_ to be
used by multiple plugins without conflict.

The second option is to use the `<lib-file />` tag to specify the location of
a jar file (see the [Plugin Specification][plugin-ref-lib-file] for
more details). This approach should only be used if you are sure that no other
plugin will be depending on the library you are referencing (e.g. if the library
is specific to your plugin). Otherwise, you risk causing build errors for users
of your plugin if another plugin adds the same library. It is worth noting that
Cordova app developers are not necessarily native developers, so native platform
build errors can be especially frustrating.

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

            <source-file src="src/android/Echo.java" target-dir="src/org/apache/cordova/plugin" />
        </platform>

Then add the following to the `src/android/Echo.java` file:

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

Android features an [Intent][ref-intent] system that allows processes to
communicate with each other.  Plugins have access to a
`CordovaInterface` object, which can access the Android [Activity][ref-activity]
that runs the application.  This is the [Context][ref-context] required to launch a
new Android [Intent][ref-intent].  The `CordovaInterface` allows plugins to start
an [Activity][ref-activity] for a result, and to set the callback plugin for when
the [Intent][ref-intent] returns to the application.

As of Cordova 2.0, Plugins can no longer directly access the
[Context][ref-context], and the legacy `ctx` member is deprecated. All `ctx`
methods exist on the [Context][ref-context], so both `getContext()` and
`getActivity()` can return the required object.

## Android Permissions

Android permissions until recently have been handled at install-time instead
of runtime.  These permissions are required to be declared on an application that uses
the permissions, and these permissions need to be added to the Android Manifest.  This can be
accomplished by using the `config.xml` to inject these permissions in the `AndroidManifest.xml` file.
The example below uses the Contacts permission.

        <config-file target="AndroidManifest.xml" parent="/*">
            <uses-permission android:name="android.permission.READ_CONTACTS" />
        </config-file>

### Runtime Permissions (Cordova-Android 5.0.0+)

Android 6.0 "Marshmallow" introduced a new permissions model where
the user can turn on and off permissions as necessary.  This means that
applications must handle these permission changes to be future-proof, which
was the focus of the Cordova-Android 5.0.0 release.

The permissions that need to be handled at runtime can be found in the Android Developer
documentation [here][permissions-guide].

As far as a plugin is concerned, the permission can be requested by calling the permission method, which signature is as follows:

        cordova.requestPermission(CordovaPlugin plugin, int requestCode, String permission);

To cut down on verbosity, it's standard practice to assign this to a local static variable:

    public static final String READ = Manifest.permission.READ_CONTACTS;

It is also standard practice to define the requestCode as follows:

    public static final int SEARCH_REQ_CODE = 0;

Then, in the exec method, the permission should be checked:

            if(cordova.hasPermission(READ))
            {
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

This will call the activity and cause a prompt to appear asking for the permission.  Once the user has the permission, the result must be handled with the `onRequestPermissionResult` method, which
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

## Launching Other Activities

There are special considerations to be made if your plugin launches an Activity
that pushes the Cordova [Activity][ref-activity] to the background. The Android OS will destroy
Activities in the background if the device is running low on memory. In that
case, the `CordovaPlugin` instance will be destroyed as well. If your plugin is
waiting on a result from the [Activity][ref-activity] it launched, a new instance of your plugin
will be created when the Cordova [Activity][ref-activity] is brought back to the foreground and
the result is obtained. However, state for the plugin will not be automatically
saved or restored and the `CallbackContext` for the plugin will be lost. There are
two methods that your `CordovaPlugin` may implement to handle this situation:

```java
/**
 * Called when the Activity is being destroyed (e.g. if a plugin calls out to an
 * external Activity and the OS kills the CordovaActivity in the background).
 * The plugin should save its state in this method only if it is awaiting the
 * result of an external Activity and needs to preserve some information so as
 * to handle that result; onRestoreStateForActivityResult() will only be called
 * if the plugin is the recipient of an Activity result
 *
 * @return  Bundle containing the state of the plugin or null if state does not
 *          need to be saved
 */
public Bundle onSaveInstanceState() {}

/**
 * Called when a plugin is the recipient of an Activity result after the
 * CordovaActivity has been destroyed. The Bundle will be the same as the one
 * the plugin returned in onSaveInstanceState()
 *
 * @param state             Bundle containing the state of the plugin
 * @param callbackContext   Replacement Context to return the plugin result to
 */
public void onRestoreStateForActivityResult(Bundle state, CallbackContext callbackContext) {}
```

It is important to note that the above methods should only be used if your
plugin launches an [Activity][ref-activity] for a result and should only restore the state
necessary to handle that Activity result. The state of the plugin will *NOT* be
restored except in the case where an Activity result is obtained that your
plugin requested using the `CordovaInterface`'s `startActivityForResult()` method
and the Cordova Activity was destroyed by the OS while in the background.

As part of `onRestoreStateForActivityResult()`, your plugin will be passed a
replacement CallbackContext. It is important to realize that this
CallbackContext *IS NOT* the same one that was destroyed with the Activity. The
original callback is lost, and will not be fired in the javascript application.
Instead, this replacement `CallbackContext` will return the result as part of the
[`resume`][event-resume] event that is fired when the application resumes. The
payload of the [`resume`][event-resume] event follows this structure:

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

* `pluginServiceName` will match the [name element][plugin-ref-name] from your plugin.xml.
* `pluginStatus` will be a String describing the status of the PluginResult
   passed to the CallbackContext. See PluginResult.java for the String values
   that correspond to plugin statuses
* `result` will be whatever result the plugin passes to the CallbackContext
   (e.g. a String, a number, a JSON object, etc.)

This [`resume`][event-resume] payload will be passed to any callbacks that the javascript
application has registered for the [`resume`][event-resume] event. This means that the result is
going *directly* to the Cordova application; your plugin will not have a chance
to process the result with javascript before the application receives it.
Consequently, you should strive to make the result returned by the native code
as complete as possible and not rely on any javascript callbacks when launching
activities.

Be sure to communicate how the Cordova application should interpret the result
they receive in the [`resume`][event-resume] event. It is up to the Cordova application to
maintain their own state and remember what requests they made and what arguments
they provided if necessary. However, you should still clearly communicate the
meaning of `pluginStatus` values and what sort of data is being returned in the
[`resume`][event-resume] field as part of your plugin's API.

The complete sequence of events for launching an Activity is as follows

1. The Cordova application makes a call to your plugin
2. Your plugin launches an Activity for a result
3. The Android OS destroys the Cordova Activity and your plugin instance
    * *`onSaveInstanceState()` is called*
4. The user interacts with your Activity and the Activity finishes
5. The Cordova Activity is recreated and the Activity result is received
    * *`onRestoreStateForActivityResult()` is called*
6. `onActivityResult()` is called and your plugin passes a result to the new
    CallbackContext
7. The [`resume`][event-resume] event is fired and received by the Cordova application

Android provides a developer setting for debugging Activity destruction on low
memory. Enable the "Don't keep activities" setting in the Developer Options menu
on your device or emulator to simulate low memory scenarios. If your plugin
launches external activities, you should always do some testing with this
setting enabled to ensure that you are properly handling low memory scenarios.

[cordova-plugin]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java
[event-resume]: ../../../cordova/events/events.html#resume
[gradle-dep-management]: https://docs.gradle.org/current/userguide/dependency_management.html
[permissions-guide]: http://developer.android.com/guide/topics/security/permissions.html#perm-groups
[plugin-dev]: ../../hybrid/plugins/index.html
[plugin-ref-framework]: ../../../plugin_ref/spec.html#framework
[plugin-ref-lib-file]: ../../../plugin_ref/spec.html#lib-file
[plugin-ref-name]: ../../../plugin_ref/spec.html#name
[ref-context]: http://developer.android.com/reference/android/content/Context.html
[ref-executor]: http://developer.android.com/reference/java/util/concurrent/ExecutorService.html
[ref-intent]: http://developer.android.com/reference/android/content/Intent.html
[ref-activity]: http://developer.android.com/reference/android/app/Activity.html
[ref-runonuithread]: http://developer.android.com/reference/android/app/Activity.html#runOnUiThread(java.lang.Runnable)
