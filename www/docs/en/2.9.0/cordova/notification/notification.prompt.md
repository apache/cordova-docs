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

title: notification.prompt
---

notification.prompt
====================

Shows a customizable prompt dialog box.

    navigator.notification.prompt(message, promptCallback, [title], [buttonLabels], [defaultText])

- __message__: Dialog message. _(String)_
- __promptCallback__: Callback to invoke when a button is pressed. _(Function)_
- __title__: Dialog title _(String)_ (Optional, defaults to `Prompt`)
- __buttonLabels__: Array of strings specifying button labels _(Array)_ (Optional, defaults to `["OK","Cancel"]`)
- __defaultText__: Default textbox input value (`String`) (Optional, Default: "Default text")

Description
-----------

The `notification.prompt` method displays a native dialog box that is
more customizable than the browser's `prompt` function.

promptCallback
---------------

The `promptCallback` executes when the user presses one of the buttons
in the prompt dialog box. The `results` object passed to the callback
contains the following properties:

- __buttonIndex__: The index of the pressed button. _(Number)_ Note that the index uses one-based indexing, so the value is `1`, `2`, `3`, etc.
- __input1__: The text entered in the prompt dialog box. _(String)_

Supported Platforms
-------------------

- Android
- iOS

Quick [Example](../storage/storage.opendatabase.html)
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
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );
    }

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Prompt Dialog Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
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
                ['Ok','Exit'],             // buttonLabels
                'Jane Doe'                 // defaultText
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

- Android supports a maximum of three buttons, and ignores any more than that.
- On Android 3.0 and later, buttons are displayed in reverse order for devices that use the Holo theme.
