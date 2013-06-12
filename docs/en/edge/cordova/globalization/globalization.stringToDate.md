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

globalization.stringToDate
===========

Parses a date formatted as a string, according to the client's user
preferences and calendar using the time zone of the client, and
returns the corresponding date object.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);

Description
-----------

Returns the date to the success callback with a `properties` object as
a parameter. That object should have the following properties:

- __year__: The four digit year. _(Number)_
- __month__: The month from (0 - 11). _(Number)_
- __day__: The day from (1 - 31). _(Number)_
- __hour__: The hour from (0 - 23). _(Number)_
- __minute__: The minute from (0 - 59). _(Number)_
- __second__: The second from (0 - 59). _(Number)_
- __millisecond__: The milliseconds (from 0 - 999), not available on all platforms. _(Number)_

The inbound `dateString` parameter should be of type `String`.

The `options` parameter is optional, and defaults to the following
values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

If there is an error parsing the date string, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PARSING\_ERROR`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 8

Quick Example
-------------

When the browser is set to the `en\_US` locale, this displays a
popup dialog with text similar to `month:8 day:25 year:2012`. Note
that the month integer is one less than the string, as the month
integer represents an array index.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>

Windows Phone 8 Quirks
------------------

- The `formatLength` option supports only `short` and `full` values.
