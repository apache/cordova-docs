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

GlobalizationError
============

An object representing a error from the Globalization API.

Properties
----------

- __code__:  One of the following codes representing the error type _(Number)_
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message__:  A text message that includes the error's explanation and/or details _(String)_

Description
-----------

This object is created and populated by Cordova, and returned to a callback in the case of an error.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

When the following error callback executes, it displays a
popup dialog with the text similar to `code: 3` and `message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }

        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };

        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>

