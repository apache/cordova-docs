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

globalization.numberToString
===========

Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);

Description
-----------

Returns the formatted number string to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `String` value.

If there is an error formatting the number, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING\_ERROR`.

The `options` parameter is optional, and its default values are:

    {type:'decimal'}

The `options.type` can be 'decimal', 'percent', or 'currency'.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 8

Quick Example
-------------

When the browser is set to the `en\_US` locale, this displays a popup
dialog with text similar to `number: 3.142`:

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>

