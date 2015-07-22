---
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

notification.prompt
====================

Shows a customizable prompt dialog box.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels])

- __message:__ Dialog message (`String`)
- __promptCallback:__ - Callback to invoke when a button is pressed (`Function`)
- __title:__ Dialog title (`String`) (Optional, Default: "Prompt")
- __buttonLabels:__ Array of strings for the button labels (`Array`) (Optional, Default: ["OK","Cancel"])

Description
-----------

Function `notification.prompt` displays a native dialog box that is more customizable than the browser's `prompt` function.

promptCallback
---------------

The `promptCallback` is called when the user has pressed one of the buttons on the prompt dialog box.

The callback takes the argument `results` which contains the following properties:

- __buttonIndex:__ (`Number`), which is the index of the pressed button. It's important to note that the index uses one-based indexing, so the value will be `1`, `2`, `3`, etc.
- __input1:__ (`String`), which is the text entered in the prompt dialog box.

Supported Platforms
-------------------

- Android
- iPhone

Quick Example
-------------

    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
    }

    // Show a custom prompt dialog
    //
    function showPrompt() {
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,	               // callback to invoke
            'Registration',            // title
            ['Ok','Exit']              // buttonLabels
        );
    }

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for Cordova to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // Cordova is ready
        //
        function onDeviceReady() {
            // Empty
        }

        // process the promptation dialog result
        function onPrompt(results) {
            alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
        }

        // Show a custom prompt dialog
        //
        function showPrompt() {
            navigator.notification.prompt(
                'Please enter your name',  // message
                onPrompt,                  // callback to invoke
                'Registration',            // title
                ['Ok','Exit']              // buttonLabels
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showPrompt(); return false;">Show Prompt</a></p>
      </body>
    </html>

Android Quirks
----------------------

- Android supports up to a maximum of 3 buttons.  Additional button labels over 3 are ignored.
- On Android 3.0 and later, the buttons will be displayed in reverse order for devices using the Holo theme.
