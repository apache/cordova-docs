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
toc_title: Windows
---

# Windows Plugins

This section provides details for how to implement a plugin for use in
a Windows Store app for Windows 8.1 phone and desktop, and Universal Windows Platform (Windows 10+). Before reading this, see [Create your first plugin](../../hybrid/plugins/index.html) for an overview of the plugin's structure and its common JavaScript interface. This section continues to demonstrate the sample _echo_ plugin that communicates from the Cordova webview to the native platform and back.

## Creating a Windows Plugin in JavaScript

Windows Cordova plugins are essentially a thin wrapper around existing WinJS provided functions, but assuming you will want to define your JS common interface for multiple devices, you will typically have one JS file that provides the API:

```js
// inside file echoplugin.js
var EchoPlugin = {
    // the echo function calls successCallback with the provided text in strInput
    // if strInput is empty, it will call the errorCallback
    echo:function(successCallback, errorCallback, strInput) {
        cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
    }
}
```

The `cordova.exec` function is defined differently on every platform, this is because each platform has it's own way of communicating between the application js code, and the native wrapper code. But in the case of Windows, there is no native wrapper, so the exec call is there for consistency. So even though you could write the Windows specific code as a part of plugin's common JS code directly, this is not recommended and plugin authors should use the same exec API for Windows as for other platforms. This way the plugin API becomes consistent and you can also take advantage of any parameter checking, or other common code provided by developers who were working on other platforms.

On Windows, cordova provides a proxy that you can use to register an object that will handle all cordova.exec calls to an API. So in our case, we will assume that the code in `echoplugin.js` is handling cross platform relevant JavaScript, and we can simply write a proxy for Windows.

```js
// in file echoplugin.js
window.echo = function(str, callback) {
    cordova.exec(callback, function(err) {
        callback('Nothing to echo.');
    }, "Echo", "echo", [str]);
};
```

```js
// in file echopluginProxy.js
cordova.commandProxy.add("Echo",{
    echo:function(successCallback,errorCallback,strInput) {
        if(!strInput || !strInput.length) {
            errorCallback("Error, something was wrong with the input string. =>" + strInput);
        }
        else {
            successCallback(strInput + "echo");
        }
    }
});
```

The `echoplugin.js` file will forward the `echo` function call to this proxy through the `cordova.exec` command and execute this implementation.

The plugin.xml file will have the settings required for our plugin. In this case, we want to add our `echoplugin.js` file in the `www` directory and the `echopluginProxy.js` file inside the `windows` source code of our application. Details of these elements can be found in the [Plugin.xml](../../../plugin_ref/spec.html) reference.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
    id="echoplugin"
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
```

This gives us a working Windows JavaScript plugin that uses a common file ( echoplugin.js ) and uses a proxy to provide the Windows only portion of implementation ( echopluginProxy.js ). So how do we add native/managed code to this? Well we are going to start the same, the only difference will be what we do inside in echopluginProxy methods.

## Creating a Windows Plugin in C++ or managed code.

In Windows, Javascript authored apps are able to interop with native (C++) and managed code (C#, VB) by creating a Windows runtime component. You can learn the basics here and checkout more details in guides on MSDN:
- [Creating Windows Runtime Components in C# and Visual Basic](https://msdn.microsoft.com/en-us/library/windows/apps/br230301.aspx)
- [Creating Windows Runtime Components in C++](http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx)

When you create your Windows Runtime Component, any class that is defined as `public ref class sealed` is considered an 'activatable class' and will be callable from JavaScript.

```cpp
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
```

Now in order for us to call the native code, we use the namespace, classname, and lowerCamelCase the method we are calling.

```js
var res = EchoRuntimeComponent.EchoPluginRT.echo("boom");
```

Moving this to our echopluginProxy.js file, we get:

```js
// in file echopluginProxy.js
cordova.commandProxy.add("EchoPlugin",{
    echo:function(successCallback, errorCallback, strInput) {
        var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
        if(res.indexOf("Error") == 0) {
            errorCallback(res);
        }
        else {
            successCallback(res);
        }
    }
});
```

And that's it, we have an end to end C++ backed js callable plugin for use in Apache Cordova Windows!

### Considerations

- The callback is typically async, so calling the callback right away is probably not expected by the caller. In practice, if the call is not async, you should at least use a javascript timeout to force the callback to be called asynchronously.
- Activatable classes can be used to do event dispatching, async callbacks, passing your own object types, arrays, collections, overloaded methods and much more. Refer to [Creating Windows Runtime Components in C++](http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx) for details.

### Defining your plugin in plugin.xml

Now that we have a working plugin, we need to revisit the plugin definition from earlier so we can publish it. We can now add the runtime component as a framework, through the `<framework>` tag inside our platfrom settings. Note that the output type of a WindowsRuntimeComponent can be either .winmd or .dll

```xml
<?xml version="1.0" encoding="UTF-8"?>
<plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
    id="echoplugin"
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
```

That's it, you now have a distributable plugin that you can share with the world!
