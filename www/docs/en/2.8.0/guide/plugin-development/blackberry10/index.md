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

title: Developing a Plugin on BlackBerry 10
---

# Developing a Plugin on BlackBerry 10

This is a continuation of the [Plugin Development Guide](../index.html) for Cordova. Once you have reviewed that content, now let's look at things we need to have the Echo plugin for the BlackBerry 10 platform. Recall that the Echo plugin basically returns whatever string a user provides to the `window.echo` function:

    window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };

A native BlackBerry 10 plugin for Cordova contains JavaScript code and may also contain native code. The Echo plugin example demonstrates how to invoke native functionality from JavaScript. The native and JavaScript code communicate with each other through a framework provided by JNEXT. Every plugin must also include a plugin.xml file.


## Creating the native part of your plugin ##

To create the native portion of your plugin, open the BlackBerry 10 NDK IDE and select [File](../../../cordova/file/fileobj/fileobj.html) > New > BlackBerry Project > Native Extension > BlackBerry WebWorks. Enter your desired project name / location and click finish.

The project created by the IDE contains sample code for a memory plugin. You may replace or modify these files to include your own functionality.

- ***name*_js.hpp** - C++ header for the JNEXT code.
- ***name*_js.cpp** - C++ code for JNEXT.

The native interface for the JNEXT extension can be viewed in the plugin header file located in the public folder of your project. It also contains constants and utility functions that can be used in your native code. Your plugin must be derived from JSExt which is defined in plugin.h. That is, you must implement the following class:

    class JSExt
    {
    public:
        virtual ~JSExt() {};
        virtual string InvokeMethod( const string& strCommand ) = 0;
        virtual bool CanDelete( void ) = 0;
    private:
        std::string m_id;
    };

Therefore, your extension should include the plugin.h header file. In the Echo example, you use JSExt as follows in the echo_js.hpp file:

    #include "../public/plugin.h"
    #include <string>

    #ifndef ECHO_JS_H_
    #define ECHO_JS_H_

    class Echo : public JSExt
    {
    public:
        explicit Echo(const std::string& id);
        virtual ~Echo();
        virtual std::string InvokeMethod(const std::string& command);
        virtual bool CanDelete();
    private:
        std::string m_id;
    };

    #endif // ECHO_JS_H_

The `m_id` is an attribute that contains the JNEXT id for this object. The id is passed to the class as an argument to the constructor. It is needed to trigger events on the JavaScript side from native.
The CanDelete method is used by JNEXT to determine whether your native object can be deleted.
The InvokeMethod function is called as a result from a request from JavaScript to invoke a method of this particular object. The only argument to this function is a string passed from JavaScript that this method should parse in order to determine which method of the native object should be executed.
Now we implement these functions in echo_js.cpp. For the Echo example, we implement InvokeMethod function as follows:

    string Echo::InvokeMethod(const string& command) {

        //parse command and args from string
        int index = command.find_first_of(" ");
        string strCommand = command.substr(0, index);
        string strValue = command.substr(index + 1, command.length());

        // Determine which function should be executed
        if (strCommand == "echo") {
            return strValue;
        } else {
            return "Unsupported Method";
        }
    }

Your native plugin must also implement the following callback functions:

- `extern char* onGetObjList( void );`
- `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

The `onGetObjList` function returns a comma separated list of classes supported by JNEXT. JNEXT uses this function to determine the set of classes that JNEXT can instantiate. In our Echo plugin, we have the following in `echo_js.cpp`:

    char* onGetObjList() {
        static char name[] = "Echo";
        return name;
    }

The `onCreateObject ` function takes two parameters. The first parameter is the name of the class requested to be created from the JavaScript side. Valid names are those that are returned in `onGetObjList`. The second parameter is the unique object id for the class. This method returns a pointer to the created plugin object. In our Echo plugin, we have the following in `echo_js.cpp`:

    JSExt* onCreateObject(const string& className, const string& id) {
        if (className == "Echo") {
            return new Echo(id);
        }
        return NULL;
    }

##Creating the JavaScript part of your plugin##

The JavaScript portion of your plugin must contain the following files:

- **client.js** – This is considered the client side and contains the API that a Cordova application can call. The API in client.js calls makes calls to index.js. The API in client.js also connects callback functions to the events that fire the callbacks.

- **index.js** – Cordova loads index.js and makes it accessible through the cordova.exec bridge. The client.js file makes calls to the API in the index.js file, which in turn makes call to JNEXT to communicate with the native side.

The client and server side (client.js and index.js) interacts through the `Cordova.exec `function. So, in client.js you invoke the exec function and provide the necessary arguments. In the Echo plugin, we have the following in the client.js file:

    var service = "org.apache.cordova.blackberry.echo",
        exec = cordova.require("cordova/exec");

    module.exports = {
        echo: function (data, success, fail) {
            exec(success, fail, service, "echo", { data: data });
        }
    };

Now, index.js interacts with the native side using JNEXT. So you attach a constructor function named Echo to JNEXT. Within the constructor you perform the following key operations using the init function:

- Specify the required module exported by the native side. The name of the required module must match the name of a shared library file (.so file).

`JNEXT.require("libecho")`

- Create an object by using an acquired module and save the ID that's returned by the call.
self.m_id = JNEXT.createObject("libecho.Echo");
When your application calls the echo function in client.js, that call in turn calls the echo function in index.js, where the PluginResult object sends a response (data) back to client.js. Since the args argument passed into the functions was converted by JSON.stringfy() and encoded as a URIcomponent, you must call the following:

`data = JSON.parse(decodeURIComponent(args.data));`

You can now send the data back. Let’s put it all together:

    module.exports = {

        echo: function (success, fail, args, env) {

            var result = new PluginResult(args, env),
            data = JSON.parse(decodeURIComponent(args.data)),
            response = echo.getInstance().echo(data);
            result.ok(response, false);
        }
    };

## Architecture of the plugin ##

You can place the artifacts of the plugin, which includes the plugin.xml file, the source files (JavaScript, C++), and the binary files (.so) within any directory structure, as long as you correctly specify the file locations in the plugin.xml file. Below we [show](../../../cordova/splashscreen/splashscreen.show.html) a typical structure that you can follow:

***your_project_folder*** (>plugin.xml)

- **www** (>client.js)
- **src**
  - **blackberry10** (>index.js, **native** >*.cpp, *.hpp)
  - **device** (>*biary file* *.so)
  - **simulator** (>*binary file* *.so)

(The list shows the hierarchical relationship among the top level folders. The parenthesis shows the contents of a given folder. All folder names appear in bold text. [File](../../../cordova/file/fileobj/fileobj.html) names are preceded by the '>' sign.)

## Contents of the plugin.xml file##
The plugin.xml file contains the namespace of the extension and other metadata. Define the namespace and specify other metadata for the Echo plugin as follows:

    <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
        id="org.apache.cordova.blackberry.echo"
        version="1.0.0">
        <js-module src="www/client.js">
            <merges target="navigator" />
        </js-module>
        <platform name="blackberry10">
            <source-file src="src/blackberry10/index.js" />
            <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
            <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
            <config-file target="www/config.xml" parent="/widget">
                <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
            </config-file>
        </platform>
    </plugin>
