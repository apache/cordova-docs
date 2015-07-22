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

title: Developing a Plugin on Bada
---

Developing a Plugin on Bada
===========================

Plugins are only supported on Bada 2.0 and above. Bada 1.2 does not support plugins.

The Bada implementation is a full javascript implementation. Therefore, adding a custom plugin involves updating CordovaJS with your plugin code. Follow these steps to add a simple _Hello World_ plugin:

1. Clone the CordovaJS repository

        git clone https://git-wip-us.apache.org/repos/asf/cordova-js.git

2. Create a new javascript file under __lib/bada/plugin/bada/__ and name it _HelloWorld.js_. Add the following content:

        function HelloWorld() {
        }

        HelloWorld.prototype.printHello = function(success, fail, arg) {
            alert(Osp.Core.StringHelper('Hello %1', arg[0]));
        }

        module.exports = new HelloWorld();

3. Add a link to your newly created plugin in __lib/bada/platform.js__ under the objects property:
    
        objects: {
            ...
            HelloWorld: {
                'cordova/plugin/bada/HelloWorld' 
            },
            ...
        }
        ...
4. Update the plugin list under __lib/bada/exec.js__ to include your plugin

        var plugins = {
            ...
            "HelloWorld": require('cordova/plugin/bada/HelloWorld')
        };
5. Now you can write your user-facing javascript however you like but remember that in order for your plugin to execute you need to call the following method

        exec(success, fail, 'HelloWorld', 'printHello', ['Jackson!']);

    success is the success callback that gets executed when the plugin succeeds
    fail is the failure callback that gets executed if the plugin fails
    'HelloWorld' is the name of your plugin
    'printHello' is your plugin action
    Finally, the last argument is your plugin parameters (if any).

6. Run the following command to generate the new common javascript (make sure you have the jake npm module installed)

        jake

7. Copy the newly generated javascript under __pkg/cordova.bada.js__ to your Bada project under __Res/js__

6. That is it! You can now add new Bada plugins and implement the many features that are not currently supported by Cordova Bada.
