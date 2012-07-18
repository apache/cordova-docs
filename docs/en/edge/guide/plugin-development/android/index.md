---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements. See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership. The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
         under the License.
---

Developing a Plugin on Android
==============================

Writing a plugin requires an understanding of the architecture of Cordova-Android. Cordova consists
of a WebView with hooks attached to it. These plugins are represented as sub-classes in the config.xml
file.

A plugin will consist of at least a single Java class that extends the `Plugin` class. A plugin **must**
have a method called `execute` that must return a `PluginResult` object. In addition to this, there is a best practice that
the plugin should handle pause and resume events, and should handle message passing between plugins.

Writing the Java portion:
--------------------------------
Assuming that you know how the JavaScript portion of plugins work, you must use the `exec` method as follows:

    exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);

This will marshall a request from the WebView to the Android native
side, more or less boiling down to calling the `action` method on the
`service` class, with the arguments passed in the `args` Array. Then you must handle what
comes into the plugin in the execute command. Most execute commands look like the following:

{{
    public PluginResult execute(String action, JSONArray args, String callbackId) {
        PluginResult.Status status = PluginResult.Status.OK;
        String result = "";

        try {
            if (action.equals("beep")) {
                this.beep(args.getLong(0));
            }
            else if (action.equals("vibrate")) {
                this.vibrate(args.getLong(0));
            }
            else if (action.equals("alert")) {
                this.alert(args.getString(0), args.getString(1), args.getString(2), callbackId);
                PluginResult r = new PluginResult(PluginResult.Status.NO_RESULT);
                r.setKeepCallback(true);
                return r;
            }
            else if (action.equals("confirm")) {
                this.confirm(args.getString(0), args.getString(1), args.getString(2), callbackId);
                PluginResult r = new PluginResult(PluginResult.Status.NO_RESULT);
                r.setKeepCallback(true);
                return r;
            }
            else if (action.equals("activityStart")) {
                this.activityStart(args.getString(0), args.getString(1));
            }
            else if (action.equals("activityStop")) {
                this.activityStop();
            }
            else if (action.equals("progressStart")) {
                this.progressStart(args.getString(0), args.getString(1));
            }
            else if (action.equals("progressValue")) {
                this.progressValue(args.getInt(0));
            }
            else if (action.equals("progressStop")) {
                this.progressStop();
            }
            return new PluginResult(status, result);
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
    }
}}

When catching exceptions and returning errors, it's important that the error we return to JavaScript match the Java exception as much as possible, otherwise the developer won't know what
is going on with the device.

Adding your plugin to a project:
---------------------------------
Whether you distribute your plugin as Java file, or whether it's in a JAR of its own, the plugin must be added with this XML:
{{
    <plugin name="<service_name>" value="<full_name_including_namespace>"/>
}}

The service name will be what you use in exec to call the plugin, and the value will be the full name of the Java class including the namespace. Withotu this added, the plugin may compile but 
will not be reachable by Cordova.

Debugging Plugins
-----------------------
Eclipse can be used to debug an Android project, and the plugins can be debugged if the Java source is included in the project. Only the latest version of the Android Dev Tools is known to allow source code attachment to JAR dependencies, this is not fully supported at this time.

Common Pitfalls:
-------------------------------
* Plugins have access to a CordovaInterface object. This object has access to the activity that is running the application, which of course, is the context required to launch
a new intent. The CordovaInterface allows plugins to  start an activity for a result, and to set the callback plugin for when the intent comes back to the application. This is important, since the
intents system is how Android communicates between processes.

* Plugins do not have direct access to the Context as they have in the past. ctx id deprecated, and will be removed six months after 2.0 is released. All the methods that ctx have exist on the context, so both getContext() and getActivity() are capable of returning the proper object required.

* Avoid calling JavaScript using webView.loadUrl(). The reason we have a callback server is to allow JavaScript execution to be thread-safe, and loadUrl explicitly interrupts the UI thread, and can affect the usability of your plugin.
