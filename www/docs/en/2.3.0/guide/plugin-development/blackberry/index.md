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

title: Developing a Plugin on BlackBerry
---

Developing a Plugin on BlackBerry
=================================

## How to make the Echo plugin on BlackBerry

In this article, we will explore how to develop the Echo plugin on BlackBerry. If you haven't read the
top level article about the JavaScript part of the plugin, it would be best if you read that first
and then this article. In addition, please download the [Cordova BlackBerry repo](https://git-wip-us.apache.org/repos/asf?p=cordova-blackberry.git).

To note, the Cordova-BlackBerry project allows you to deploy to BlackBerry devices like the
Torch, Bold, etc and as well as the Playbook. There exists a distinction between deploying to
normal BlackBerry hand held devices (ie, Torch and Bold) and the Playbook. The code base between
the two are separate so when you develop for one, you have to duplicate your efforts for the other!
Therefore in this article, the focus will be on the hand held devices and not the tablet. In the future,
this guide should cover both platforms.

Continuing on from the previous article, the Echo plugin is essentially returning whatever message a user 
provides to the `window.echo` function. 

The Echo function:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

## Modifying plugins.xml

This file resides in your project's www folder and contains all of the references to the plugins that 
your Cordova project uses. We are going to add an additional reference so that when cordova.exec is called,
Cordova will know how to map the "Echo" argument of `cordova.exec` to the Echo class that we want to write natively.

    <plugins>
      ...
      <plugin name="Echo" value="org.apache.cordova.echo.Echo"/>
      ...
    </plugins>

## Adding Echo.java

If you notice the structure of the value attribute, you'll see a defined path that leads to the Echo
plugin. In the root folder of the Cordova BlackBerry WebWorks repo, look for a folder called framework.
This folder contains all of the source code that runs natively on the BlackBerry. cd into the folder 
structure until you reach the path: `framework/ext/src/org/apache/cordova`. At this point, you'll see
all of the plugin folders and inside each folder is the plugins' source code. So, we will add
the folder echo to `framework/ext/src/org/apache/cordova/echo` and create a file called `Echo.java`
at `framework/ext/src/org/apache/cordova/echo/Echo.java`.

## Writing Echo.java

The basic idea of writing a plugin is to create a class that extends the Plugin class and have
a method called execute to return a PluginResult class. Any call to cordova.exec will pass in 
the action that we want to execute within the class as well as the arguments. In this case,
"echo" is the action we want to execute within the class "Echo" and [str] are the arguments we are passing in.

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

So if we look at the code above, we can see that within the execute method, we are first looking for
what actions are coming in. The Echo plugin has only one action, "echo" so we will be only checking for 
that. If our plugin had more actions, it's simply a matter of adding more if-conditionals to check
for those actions.

We are then going to grab the message coming in from the arguments which is supplied by the args parameter.
We can grab the first argument by simply doing `String theMsg = args.getString(0);`.

We will do some error checking and if the message looks okay, we will instantiate a new PluginResult with
an ok status: PluginResult.Status.OK and return the message: theMsg. After this, we will then return the 
result which will then pass back to JavaScript to be fired in the success callback. If something should fail, 
we can return various status exceptions like PluginResult.Status.ERROR, PluginResult.Status.JSON_EXCEPTION,
or PluginResult.Status.INVALID_ACTION. When these types of results are passed back, they will fire the fail 
callback in JavaScript. 

## Updating the .jar in your project's www folder

The addition of the Echo.java needs to be updated in your project so to build the .jar file, cd
to the root directory of the BlackBerry WebWorks repo. Use the ant command:

    ant update -Dproject.path="~/path_to_my_project"

This will build a new .jar file in the build/ext folder. Copy the `build/ext/cordova.jar` file into your
project/www/ext folder. 

If all goes well, that should allow you to use the Echo plugin in BlackBerry.
