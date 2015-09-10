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
---

notification.alert
==================

Shows a custom alert or dialog box.

    navigator.notification.alert(message, alertCallback, [title], [buttonName])

- __message__: Dialog message. _(String)_

- __alertCallback__: Callback to invoke when alert dialog is dismissed. _(Function)_

- __title__: Dialog title. _(String)_ (Optional, defaults to `Alert`)

- __buttonName__: Button name. _(String)_ (Optional, defaults to `OK`)

Description
-----------

Most Cordova implementations use a native dialog box for this feature,
but some platforms use the browser's `alert` function, which is
typically less customizable.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Tizen
- Windows Phone 7 and 8
- Windows 8

Quick <a href="../storage/storage.opendatabase.html">Example</a>
-------------

    // Android / BlackBerry WebWorks (OS 5.0 and higher) / iOS / Tizen
    //
    function alertDismissed() {
        // do something
    }

    navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );

Full <a href="../storage/storage.opendatabase.html">Example</a>
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="notification.html">Notification</a> <a href="../storage/storage.opendatabase.html">Example</a></title>

        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", on<a href="../device/device.html">Device</a>Ready, false);

        // device APIs are available
        //
        function on<a href="../device/device.html">Device</a>Ready() {
            // Empty
        }

        // alert dialog dismissed
            function alertDismissed() {
                // do something
            }

        // Show a custom alertDismissed
        //
        function <a href="../inappbrowser/inappbrowser.html">show</a>Alert() {
            navigator.notification.alert(
                'You are the winner!',  // message
                alertDismissed,         // callback
                'Game Over',            // title
                'Done'                  // buttonName
            );
        }

        </script>
      </head>
      <body>
        <p><a href="#" onclick="<a href="../inappbrowser/inappbrowser.html">show</a>Alert(); return false;">Show Alert</a></p>
      </body>
    </html>

Windows Phone 7 and 8 Quirks
-------------

- There is no built-in browser alert, but you can bind one as follows to call `alert()` in the global scope:

        window.alert = navigator.notification.alert;

- Both `alert` and `confirm` are non-blocking calls, results of which are only available asynchronously.

