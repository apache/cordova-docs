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

title: Windows Plugins
---

# Windows Plugins

This section provides details for how to implement a plugin for use in 
a Windows Store app. Before reading this, see Application Plugins for 
an overview of the plugin's structure and its common JavaScript interface. 
This section continues to demonstrate the sample _echo_ plugin that 
communicates from the Cordova webview to the native platform and back.

It is important to note that Windows supports developing directly in Javascript, which means developing the 'native' portions in only required in special cases.

Creating a Windows Plugin in JavaScript
---

These instructions are to create a pure JavaScript plugin. Understanding this is crucial to understanding how to add the native/managed bits.

Windows Cordova plugins are essentially a thin wrapper around existing WinJS provided functions, but assuming you will want to define your JS common interface for multiple devices, you will typically have 1 JS file that provides the API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }

Inside Cordova exec on Windows
---

The cordova.exec function is defined differently on every platform, this is because each platform has it's own way of communicating between the application js code, and the native wrapper code. But in the case of Windows, there is no native wrapper, so the exec call is there for consistency. You could do your js only plugin work directly in EchoPlugin.echo, something like :

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }

This would/could work fine, however it means that you will need different versions of echoPlugin.js for different platforms, and possibly you could have issues with inconsistencies in your implementations. As a best practice, we decided to mimic a native API inside cordova.exec on Windows, so we could run the same JS code, and not have to rewrite it for the platform, and also take advantage of any parameter checking, or other common code provided by developers who were working on other platforms.

The Cordova exec proxy
---

On Windows, cordova provides a proxy that you can use to register an object that will handle all cordova.exec calls to an API.

For example if you wanted to provide the implementation for the Accelerometer API, you would do this :

cordova.commandProxy.add("Accelerometer",{
    start:function(){
        // your code here ...
    }
    // ,
    //  ... and the rest of the API here
});

So in our case, we will assume that the code in echoplugin.js is handling cross platform relevant JavaScript, and we can simply write a proxy for Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });

The plugin definition

If we want users of our plugin to be able to easily install our plugin, we will need to define it according to how PlugMan defines plugins. More on this in the [Plugin Spec](plugin_ref_spec.md.html#Plugin%20Specification)

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">

        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>

        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>

        <!-- other platforms -->

    </plugin>

This gives us a working Windows JavaScript plugin that uses a common file ( echoplugin.js ) and uses a proxy to provide the Windows only portion of implementation ( echopluginProxy.js ). So how do we add native/managed code to this? Well we are going to start the same, the only difference will be what we do inside in echopluginProxy methods.

How WinJS accesses native/managed code
===


In Windows, WinJS authored apps are able to interact with native code, this inter-op is available for Windows Runtime Components. The details are numerous, and this guide will only cover the basics. Microsoft provides much more info [here](http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx).

When you create your Windows Runtime Component, any class that is defined as 'public ref class sealed' is considered an 'activatable class' and will be callable from JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }

    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;

    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }

Now in order for us to call the native code, we use the namespace, classname, and lowerCamelCase the method we are calling.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom");
Moving this to our echopluginProxy.js file, we get this :

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });

And that's it, we have an end to end C++ backed js callable plugin for use in Apache Cordova Windows!

Some technical notes:
===

- the callback is typically async, so calling the callback right away is probably not expected by the caller. In practice, if the call is not async, you should at least use a javascript timeout to force the callback to be called async.
- Activatable classes can do all kinds of awesome, like event dispatching, async callbacks, passing your own object types, arrays, collections, overloaded methods and much more. I recommend you do your homework.
- If you stick to common Windows Phone 8.0 and Windows SDK API calls, you will be able to use the same runtime component ( native or managed bits ) in a Windows Phone 8.0 Apache Cordova plugin. ~stay tuned for that post.

Defining your plugin
===

Now that we have a working plugin, we need to revisit the plugin definition from earlier so we can publish it. We can now add the runtime component as a framework.
Note that the output type of a WindowsRuntimeComponent can be either .winmd or .dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">

        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>

        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>

        <!-- other platforms -->

    </plugin>

That's it, you now have a distributable plugin that you can share with the world!
One thing to note, support for adding frameworks to Windows Cordova project was only recently added so you will need to make sure your cordova tooling current.  The cordova-cli and cordova-plugman both support adding removing native backed plugins.

\> cordova plugin add com.risingj.echoplugin

or

\> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug

