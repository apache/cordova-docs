--
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Windows Phone Plugins

This section provides details for how to implement native plugin code
on the Windows Phone platform. Before reading this, see Application
Plugins for an overview of the plugin's structure and its common
JavaScript interface. This section continues to demonstrate the sample
_echo_ plugin that communicates from the Cordova webview to the native
platform and back.

Writing a plugin for Cordova on Windows Phone requires a basic
understanding of Cordova's architecture. Cordova-WP7 consists of a
`WebBrowser` that hosts the application's JavaScript code and manages
native API calls. You can extend a C# `BaseCommand` class
(`WP7CordovaClassLib.Cordova.Commands.BaseCommand`), which comes with
most of the functionality you need:

1. Select your project, and right-click to choose __Add &rarr; New
   Item...__ If you wish, you can add it to the `Plugins` folder.

2. Select __Class__ and name it `Echo.cs`.  This class name must
   _exactly_ match what you call specify as the service in the
   `cordova.exec()` call on the JavaScript side.

3. Include the base classes implementation:

        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;

4. Extend your class from `BaseCommand`:

        public class Echo : BaseCommand
        {
            // ...
        }

5. Add an `echo` method that is callable from JavaScript:

        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }

See the
[BaseCommand.cs](https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs)
class for methods available for the plugin to override.  For example,
the plugin can capture 'pause' and 'resume' events.

## Namespaces

The default namespace for unqualified commands is:

        namespace Cordova.Extension.Commands
        {
            // ...
        }

If you want to specify your own namespace, you need to make a fully
qualified call to `cordova.exec`. For example, if you want to define
your C# class like this:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }

The JavaScript would need to call `exec` like this:

        cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);

## Interpreting Arguments in C#

In the example discussed in Application Plugins, the data your plugin
receives is a string, but what if you want to pass an array of
strings?  Suppose the JavaScript `cordova.exec` call is specified like
this:

        cordova.exec(win, fail, "Echo", "echo", ["input string"]);

The value of `options` string passed to the `Echo.echo` method is
JSON:

        "[\"input string\"]"

All JavaScript `exec` arguments are JSON-encoded before being passed
into C#, and so need to be decoded:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"

## Passing Results from C# to JavaScript

The `BaseCommand` class provides methods to pass data to JavaScript
callback handlers.  If you simply want to signal success with no
accompanying result, you can simply call:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback

To pass data back, you need to call `DispatchCommandResult`
differently:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));

Use an encoded JSON string to pass structured object data back to
JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));

To signal an error, call `DispatchCommandResult` with a `PluginResult`
object whose status is `ERROR`:

        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));

## Handling Serialization Errors

When interpreting your arguments, `try`/`catch` blocks help screen out
bad input. This pattern appears throughout the Cordova C# code:

        string optVal = null;

        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }

        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }

## Plugin Lifetime

Plugins with long-running requests, background activity such as media
playback, listeners, or that maintain internal state should implement
the `onReset` method to clean up those activities. The method runs
when the CordovaView WebBrowser navigates to a new page or refreshes, which
reloads the JavaScript.

        // defined in WPCordovaClassLib.Cordova.Commands.BaseCommand
        public virtual void OnReset() { }

## Plugin XML

The following shows how to use the `plugin.xml` file to specify a
plugin's source files on the Windows Phone platform.  See Application
Plugins for an overview, and Plugin Specification for details on
available options.

- The `<source-file>` element defines all plugin resources, such
  as _.cs_, _.xaml_, _.xaml.cs_, and _.dll_ files, and image assets.

- The `<config-file>` element defines elements to inject into a
  configuration file. This example adds a plugin to the platform's
  `config.xml` file:

        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>

  This example adds the contacts capability to the `WMAppManifest.xml`
  file:

        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>

## Debugging Plugins

Use Visual Studio's debugger to debug a plugin's C# component. You can
set a break point at any of the methods exposed by your class.

JavaScript is more difficult to debug on Windows Phone. You need to
use `console.log` to output the plugin's state, or to inform
yourself of errors.

## Common Pitfalls

- Be careful not to pass arguments from JavaScript to the native side
  that are difficult to deserialize as JSON. Most device platforms
  expect the argument passed to `cordova.exec()` to be an array, such
  as the following:

        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);

  This may result in an overly complex string value for C# to decode:

        "[\"this is a string\", 54, { literal:'trouble' }]"

  Instead, consider converting _all_ parameters to strings before
  calling `exec()`, and decoding each separately:

        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);

- It is usually better to check parameters in JavaScript before
  calling `exec()`. Doing so allows you to re-use more code and pull
  unnecessary functionality from the plugin's various native
  implementations.
