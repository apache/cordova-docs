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

title: Developing a Plugin on Windows Phone
---

Developing a Plugin on Windows Phone
====================================

Writing a plugin for Cordova on Windows Phone requires a basic understanding of
the architecture of Cordova. Cordova-WP7 consists of a WebBrowser which hosts the
application javascript code and manages native API calls. There is a BaseCommand
(`WP7CordovaClassLib.Cordova.Commands.BaseCommand`) class in C# which you can extend,
and it comes with the majority of the 'plumbing' built for you already.

1. Select your project, and right click choose 'Add -> New Item ...'
    - Preferably add it to the 'Plugins' folder, but it is up to you
2. Select 'Class' and name it `Echo.cs`
    - The name of this class must EXACTLY match what you call into `cordova.exec(win, fail, "Echo", ...)`
3. Include the base classes implementation

        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;

4. Extend your class from BaseCommand

        public class Echo : BaseCommand
        {
            // ...
        }

5. Add a method that is callable from JS

        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }

Namespaces
----------

The default namespace for unqualified commands is:

    namespace Cordova.Extension.Commands
    {
        // ...
    }

If you would like to use your own namespace, you will need to make a fully qualified
call to `cordova.exec`. For example, if you wanted to define your C# class like this:

    namespace com.mydomain.cordovaExtensions
    {
        public class Echo : BaseCommand
        {
            // ...
        }
    }

Then, in JS you would need to call exec like this:

    cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);

Interpreting your arguments in C#
----------------------------------

The data received by your plugin method is a string value, but in actuality
looking at our JavaScript code, we see our intention was to pass an array of strings.
Looking back at our JS call to `cordova.exec`, we see we passed `[str]`:

    cordova.exec(win, fail, "Echo", "echo", ["input string"]);

If we inspect the options string passed in to our `Echo.echo` method, we will
see that the value is actually:

    "[\"input string\"]"

All javascript exec arguments are JSON encoded before being passed into C#.

If we want to treat this as the string we were expecting, we need to decode it.
We can use simple JSON deserialization.

    string optVal = JsonHelper.Deserialize<string[]>(options)[0];
    // optVal now has the value of "input string"

Passing results from C# to JS
-----------------------------

The base class BaseCommand provides methods for passing data to your JS callback handlers.
To simply signal that the command has succeeded, when no additional result info is needed,
you can can simply call:

    DispatchCommandResult(); // calls back with an empty plugin result, considered a success callback

To pass data back, you will need to call a different version of `DispatchCommandResult`:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));

To pass structured object data back to JS, it should be encoded as a JSON string:

    DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));

If you need to signal that an error has occurred, you can call `DispatchCommandResult` with a `PluginResult` object:

    DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));

Handling serialization errors in your plugin's C# method
--------------------------------------------------------

When interpreting your arguments, it is a good idea to use a try/catch block
in case we have bad input. This is a pattern used throughout the Cordova C# code:

    string optVal = null;

    try 
    {
        optVal = JsonHelper.Deserialize<string[]>(options)[0];
    }
    catch(Exception)
    {
        // simply catch the exception, we will handle null values and exceptions together
    }

    if (optVal == null)
    {
        DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
    }
    else
    {
        // ... continue on to do our work
    }

Advanced Plugin Functionality
-----------------------------

See other methods that you can override in:

1. [BaseCommand.cs](https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs)

For example, you can hook into the '[pause](../../../cordova/events/events.pause.html)' and '[resume](../../../cordova/events/events.resume.html)' application events.

### Debugging Plugins

To debug the C# side, you can use Visual Studio's debugger, just set a break point
at any of the methods exposed by your class.

Javascript is a little more difficult to debug on Windows Phone, you will need to
use `console.log` to output the state of your plugin, or inform yourself of errors.

Common Pitfalls
---------------

- Be careful when deciding on the arguments you pass to native in your JavaScript
  implementation. Most device platforms expect the args passed to cordova.exec
  to be an array, but if you have different types of objects in this array, it
  becomes difficult or impossible to deserialize.

        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);

    - This will mean that your C# code will receive a difficult to decode string value, such as:

            "[\"this is a string\", 54, { literal:'trouble' }]"

    - Consider converting ALL parameters to strings before calling exec:

            cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"])	;

            string[] optValues = JsonHelper.Deserialize<string[]>(options);

- It is usually a good idea to do parameter checking in your JavaScript code,
  before you call exec.  This will let you re-use more JS code between different
  native implementations of your plugin.

