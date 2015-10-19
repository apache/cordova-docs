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

title: Developing a Plugin on Android
---

# Developing a Plugin on Android

플러그인을 개발하는 것에는 Cordova-Android의 아키텍쳐를 이해하는 것이 필요하다. Cordova-Android 는 Android WebView 와 그것들의 후킹으로 이루어져있다. 각 플러그인은 config.xml 에 매핑되어 있다.

플러그인은 `Plugin` Clsss를 상속받아야 한다. 플러그인은 **반드시** `execute` 메소드를 가져야하고 이 메소드는`PluginResult`객체를 리턴해야 한다. 그리고 플러그인은 pause와 [resume](../../../cordova/events/events.resume.html) 이벤트를 핸들링 할 수 있도록 하는 것이 좋으며 플러그인간에 전해지는 메세지를 핸들링할 수 있어야 한다.

## Plugin Class Mapping 

The JavaScript portion of a plugin always uses the `cordova.exec` method as follows:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This will marshal a request from the WebView to the Android native
side, more or less boiling down to calling the `action` method on the
`service` class, with the arguments passed in the `args` Array.

Whether you distribute your plugin as Java file or as a JAR of its own, the plugin must be added to the `config.xml` file in your Cordova-Android application's `res/xml/` folder.

    <plugin name="<service_name>" value="<full_name_including_namespace>"/>

The service name should match what you use in the JavaScript `exec` call, and the value will be the full name of the Java class including the namespace. Without this added, the plugin may compile but 
will not be reachable by Cordova.

## Writing an Android Java Plugin

We have JavaScript to fire off a plugin request to the native side. We
have the Android Java plugin mapped properly via the `config.xml` file.
So what does the final Android Java Plugin class look like?

What gets dispatched to the plugin via JavaScript's `exec` function gets
passed into the Plugin class's `execute` method. Most `execute`
implementations look like this:

    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";

        try {
            if (action.equals("beep")) {
                this.beep(args.getLong(0));
            }
            return new PluginResult(status, result);
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }

Essentially we compare the value of the `action` parameter, and dispatch
the request off to a (private) method in the class, optionally passing
some of the parameters to the method.

When catching exceptions and returning errors, it's important that the error we return to JavaScript match the Java exception as much as possible, for clarity.

### Echo Plugin Android Plugin

We would add the following to our config.xml:

    <plugin name="Echo" value="org.apache.cordova.plugin.Echo" />

Then we would add the following file to
`src/org/apache/cordova/plugin/Echo.java` inside our Cordova-Android
application:

    package org.apache.cordova.plugin;

    import org.apache.cordova.api.Plugin;
    import org.apache.cordova.api.PluginResult;
    import org.json.JSONArray;
    import org.json.JSONException;
    import org.json.JSONObject;

    /**
     * This class echoes a string called from JavaScript.
     */
    public class App extends Plugin {

        /**
         * Executes the request and returns PluginResult.
         *
         * @param action        The action to execute.
         * @param args          JSONArry of arguments for the plugin.
         * @param callbackId    The callback id used when calling back into JavaScript.
         * @return              A PluginResult object with a status and message.
         */
        public PluginResult execute(String action, JSONArray args, String callbackId) {
            try {
                if (action.equals("echo")) {
                    String echo = args.getString(0); 
                    if (echo != null && echo.length() > 0) { 
                        return new PluginResult(PluginResult.Status.OK, echo);
                    } else {
                        return new PluginResult(PluginResult.Status.ERROR);
                    }
                } else {
                    return new PluginResult(PluginResult.Status.INVALID_ACTION);
                }
            } catch (JSONException e) {
                return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
            }
        }
    }

Let's take a look at the code. At the top we have all of the necessary
Cordova `import`s. Our class extends from `Plugin` - very important. The
one method that the `Plugin` interface demands is the `execute` method.
The method first compares against `action`: this plugin only supports
one action, the `echo` action. Any other action will return a
`PluginResult` with a status of `INVALID_ACTION` - this will translate
into an error callback invocation on the JavaScript side. Next, we grab
the echo string using the `getString` method on our `args`, telling it
we want to get the 0th parameter in the parameter array. We do a bit of
parameter checking: make sure it is not `null`, and make sure it is not
a zero-length string. If it is, we return a `PluginResult` with an
`ERROR` status (which, by now, you should now will invoke the error
callback). If all of those checks pass, then we return a `PluginResult`
with an `OK` status, and pass in the `echo` string we received in the
first place as a parameter. This will finally translate into a success
callback invocation on the JavaScript side. It will also pass the `echo`
parameter as a parameter into the JavaScript success callback function.

## Debugging Plugins

Eclipse can be used to debug an Android project, and the plugins can be debugged if the Java source is included in the project. Only the latest version of the Android Dev Tools is known to allow source code attachment to JAR dependencies, this is not fully supported at this time.

## Common Pitfalls

* Plugins have access to a `CordovaInterface` object. This object has access to the Android `Activity` that is running the application. This is the `Context` required to launch
a new Android `Intent`. The `CordovaInterface` allows plugins to start an `Activity` for a result, and to set the callback plugin for when the `Intent` comes back to the application. This is important, since the
`Intent`s system is how Android communicates between processes.
* Plugins do not have direct access to the `Context` as they have in the past. The legacy `ctx` member is deprecated, and will be removed six months after 2.0 is released. All the methods that `ctx` has exist on the `Context`, so both `getContext()` and `getActivity()` are capable of returning the proper object required.
* Avoid calling JavaScript using `webView.loadUrl()`. The reason we have a callback server is to allow JavaScript execution to be thread-safe, and `loadUrl` explicitly interrupts the UI thread, and can affect the usability of your plugin.
