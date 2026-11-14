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

title: Electron Plugins
toc_title: Electron
---

# Electron Plugin Development Guide

This section provides details for how to implement plugin code on the
Electron platform.

Before reading this, see the [Plugin Development Guide][plugin-dev]
for an overview of the plugin's structure and its common JavaScript
interface.

On Android and iOS, a plugin talks to the device's native features. On
Electron, the native side is Node.js. Exposing all of Node.js directly to
the web page is not safe, so a plugin does the work in Node.js itself and
sends back only the result, never the raw Node.js APIs.

For how Electron picks between the `electron` and `browser` versions of a
plugin, see the [Plugins section of the Electron platform guide][electron-plugins].

## Plugin Service Mapping

The plugin's JavaScript interface uses the `cordova.exec` method as
follows:

```js
exec(<successFunction>, <failFunction>, <service>, <action>, [<args>]);
```

This sends a request from the web page to the Electron side of the
plugin, calling the `action` function offered by the `service`.

For Electron, the plugin does two things so Cordova can find the
code:

1. In `plugin.xml`, it points Cordova at the folder holding the
   Electron code:

    ```xml
    <platform name="electron">
        <framework src="src/electron" />
    </platform>
    ```

2. In the `package.json` inside that folder, it sets the service name:

    ```json
    {
      "main": "index.js",
      "cordova": {
        "serviceName": "<service_name>"
      }
    }
    ```

The service name must match the one used in the JavaScript `exec`
call. The action is a function that the folder's main file offers
through `module.exports`.

## Writing an Electron Plugin

The Electron side of a plugin is a Node.js package kept in its own
folder, usually `src/electron`. The package's main file offers a set of
actions through `module.exports`. Each action is a function that does
its work in Node.js and returns the result.

```js
module.exports = {
    getGreeting: async () => {
        return {
            message: 'Hello from Node.js'
        };
    }
};
```

Because this code runs in Node.js, it can use `require` to load Node.js
modules or other packages the plugin depends on. The web page does not
get access to those modules. It only receives what the action returns.

For a complete, real example, see the Electron code of
[cordova-plugin-device][plugin-device-electron].

## Adding Dependency Libraries

If the Electron code of your plugin needs other packages, list them in
the `dependencies` block of the `package.json` inside your Electron
folder, the same way you would in any Node.js package. The example below
lists `systeminformation`, along with the `cordova` block that holds the
service name:

```json
{
  "dependencies": {
    "systeminformation": "^5.11.9"
  },
  "cordova": {
    "serviceName": "Device"
  }
}
```

Then load the package in your main file with `require`:

```js
const { system } = require('systeminformation');
```

## Debugging Electron Plugins

The JavaScript of your plugin that runs in the web page, such as the
file that calls `exec`, can be inspected with the DevTools of the
Electron app. See the [DevTools section of the Electron platform
guide][electron-devtools] for how to show or hide them.

[electron-devtools]: index.html#devtools
[electron-plugins]: index.html#plugins
[plugin-dev]: ../../hybrid/plugins/index.html
[plugin-device-electron]: https://github.com/apache/cordova-plugin-device/tree/master/src/electron
