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

title: BlackBerry Plugins
---

# BlackBerry Plugins

This section provides details for how to implement native plugin code
on the BlackBerry platform. Before reading this, see Application
Plugins for an overview of the plugin's structure and its common
JavaScript interface. This section continues to demonstrate the sample
_echo_ plugin that communicates from the Cordova webview to the native
platform and back.

In addition, download the [Cordova BlackBerry
repository](https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git;a=summary).
The `Cordova-BlackBerry` project allows you to deploy to BlackBerry
devices such as the Torch, Bold, and Playbook. The Playbook uses a
different code base than other BlackBerry handheld devices, for which
you need to duplicate your development efforts.  This guide focuses on
handheld devices rather than tablets.

## Modifying plugins.xml

The `Echo` plugin returns whatever message a user sends with the
`window.echo` function on the JavaScript side:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

The project's `www/plugins.xml` file contains all of the necessary
references to the Cordova project's plugins. Add an additional
reference so that when `cordova.exec` is called, Cordova knows how to
map the `Echo` argument to the native `Echo` class:

        <feature name="Echo">
            <param name="blackberry-package" value="org.apache.cordova.echo.Echo" />
        </feature>

## The Echo.java File

The `feature` specification's `value` attribute references a reverse
domain-style identifier. This corresponds to a path within the Cordova
BlackBerry WebWorks repo's `framework/ext/src` directory.  Add a
`framework/ext/src/org/apache/cordova/echo` directory and add a
`Echo.java` file.

The `Echo.java` needs to define a class that extends the `Plugin`
class. It also needs to implement an `execute` method that returns a
`PluginResult` class.  Any call to `cordova.exec` passes in the action
within the class to execute, as well as the arguments. In this case,
the `Echo` class's `echo` method is the action, and `[str]` is an
additional argument to pass to the method.

        package org.apache.cordova.echo;

        import org.apache.cordova.api.Plugin;
        import org.apache.cordova.api.PluginResult;
        import org.apache.cordova.json4j.JSONArray;
        import org.apache.cordova.json4j.JSONException;
        import org.apache.cordova.json4j.JSONObject;
        /**
         * A simple plugin to demonstrate how to build a plugin for BlackBerry
         * Basically echos back the msg that a user calls to this plugin
         */
        public final class Echo extends Plugin {

            public static final String echo = "echo";

            public PluginResult execute(String action, JSONArray args, String callbackId) {
                PluginResult result = new PluginResult(PluginResult.Status.INVALID_ACTION, "Echo: Invalid action:" + action);
                if(action.equals(echo)){
                    try {
                        String theMsg = args.getString(0);
                        if(theMsg!= null || theMsg.length()>0){
                            result = new PluginResult(PluginResult.Status.OK, theMsg);
                        }else{
                            result = new PluginResult(PluginResult.Status.ERROR, "Nothing to echo.");
                        }
                    } catch (JSONException e) {
                        result = new PluginResult(PluginResult.Status.JSON_EXCEPTION, e.getMessage());
                    }
                }
                return result;
            }
        }

In the code above, the `execute` method first brings in an action. In
this case, there is only one valid `echo` action, so it simply checks
for that value.

The incoming message passed in as `[str]` from JavaScript is available
to the `Echo` class as an `args` array. In this case, there is only
one argument, accessible using a zero-based array index:

        String theMsg = args.getString(0);

After various error-checking on the message's value, the method
instantiates a new `PluginResult` with an `OK` status and returns the
message.  This value, in turn, is passed back as an argument to the
JavaScript success callback. In case of error, various status codes
are sent back to the JavaScript's error callback.

## Updating the .jar in the Project's www Directory

The added `Echo.java` needs to be updated in your project.  To build
the `.jar` file, navigate to the BlackBerry WebWorks repo's root
directory and run the `ant` command:

        ant update -Dproject.path="~/path_to_my_project"

This builds a new `.jar` file in the `build/ext` directory. Copy the
`build/ext/cordova.jar` file into the `project/www/ext` directory.

If all goes well, that allows you to use the `Echo` plugin in
BlackBerry.
