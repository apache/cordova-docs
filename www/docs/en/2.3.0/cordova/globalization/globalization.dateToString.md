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

title: globalization.dateToString
---

globalization.dateToString
===========

Returns a date formatted as a string according to the client's locale and timezone.

    navigator.globalization.dateToString(date, successCB, errorCB, options);
    
Description
-----------

It returns the formatted date string to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with a String value.

The inbound ``date`` parameter should be of type ``Date``.

If there is an error formatting the date, then the errorCB callback is invoked with a [GlobalizationError](GlobalizationError/globalizationerror.html) object as a parameter. The expected code for this error is [GlobalizationError](GlobalizationError/globalizationerror.html).FORMATTING\_ERROR.

`options.formatLength` can be 'short', 'medium', 'long', or 'full'.
`options.selector` can be 'date', 'time' or 'date and time'.

The default options are `{formatLength:'short', selector:'date and time'}`.
The `options` parameter is optional.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick [Example](../storage/storage.opendatabase.html)
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "date: 9/25/2012 4:21PM" using the default options.

    navigator.globalization.dateToString(
      new Date(),
      function (date) {alert('date:' + date.value + '\n');},
      function () {alert('Error getting dateString\n');},
      {formatLength:'short', selector:'date and time'}
    );

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>


Windows Phone 8 Quirks
--------------
- `formatLength` option supports only short and full values
