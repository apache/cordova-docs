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

title: notification.confirm
---

notification.confirm
====================

Displays a customizable confirmation dialog box.

    navigator.notification.confirm(message, confirmCallback, [title], [buttonLabels])

- __message__: Dialog message. _(String)_

- __confirmCallback__: Callback to invoke with index of button pressed (1, 2, or 3) or when the dialog is dismissed without a button press (0). _(Function)_

- __title__: Dialog title. _(String)_ (Optional, defaults to `Confirm`)

- __buttonLabels__: Comma-separated string specifying button labels. _(String)_ (Optional, defaults to `OK,Cancel`)

Description
-----------

The `notification.confirm` method displays a native dialog box that is
more customizable than the browser's `confirm` function.

confirmCallback
---------------

The `confirmCallback` executes when the user presses one of the
buttons in the confirmation dialog box.

The callback takes the argument `buttonIndex` _(Number)_, which is the
index of the pressed button. Note that the index uses one-based
indexing, so the value is `1`, `2`, `3`, etc.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick [Example](../storage/storage.opendatabase.html)
-------------

    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }

    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            'Restart,Exit'         // buttonLabels
        );
    }

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Notification Example</title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        //
        function onDeviceReady() {
            // Empty
        }

        // process the confirmation dialog result
        function onConfirm(buttonIndex) {
            alert('You selected button ' + buttonIndex);
        }

        // Show a custom confirmation dialog
        //
        function showConfirm() {
            navigator.notification.confirm(
                'You are the winner!', // message
                 onConfirm,            // callback to invoke with index of button pressed
                'Game Over',           // title
                'Restart,Exit'         // buttonLabels
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="showConfirm(); return false;">Show Confirm</a></p>
      </body>
    </html>

Windows Phone 7 and 8 Quirks
----------------------

- There is no built-in browser function for `window.confirm`, but you can bind it by assigning:

        window.confirm = navigator.notification.confirm;

- Calls to `alert` and `confirm` are non-blocking, so the result is only available asynchronously.

