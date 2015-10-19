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

title: globalization.stringToDate
---

globalization.stringToDate
===========

Parses a date formatted as a string according to the client's user
preferences and calendar using the time zone of the client and returns
the corresponding date object.

    navigator.globalization.stringToDate(dateString, successCB, errorCB, options);
    
Description
-----------

It returns the date to the success callback with a properties object as a parameter. That object should have the following properties:

- year {Number}: The four digit year
- month {Number}: The month from (0 - 11)
- day {Number}: The day from (1 - 31)
- hour {Number}: The hour from (0 - 23)
- minute {Number}: The minute from (0 - 59)
- second {Number}: The second from (0 - 59)
- millisecond {Number}: The milliseconds (from 0 - 999), not available on all platforms

The inbound `dateString` parameter should be of type `String`.

`options.formatLength` can be 'short', 'medium', 'long', or 'full'.
`options.selector` can be 'date', 'time' or 'date and time'.

The default options are `{formatLength:'short', selector:'date and time'}`.
The options parameter is optional.

If there is an error parsing the date string, then the errorCB callback is invoked with a [GlobalizationError](GlobalizationError/globalizationerror.html) object as a parameter. The expected code for this error is [GlobalizationError](GlobalizationError/globalizationerror.html).PARSING\_ERROR.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick [Example](../storage/storage.opendatabase.html)
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "month:8 day:25 year:2012". Note that the month integer is one less than the string, as the month integer represents an index.

    navigator.globalization.stringToDate(
      '9/25/2012',
      function (date) {alert('month:' + date.month +
                             ' day:' + date.day + 
                             ' year:' + date.year + '\n');},
      function () {alert('Error getting date\n');},
      {selector:'date'}
    );


Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.4.0.js"></script>
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

- `formatLength` option supports only short and full values
