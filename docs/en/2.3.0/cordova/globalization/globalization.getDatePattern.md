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

globalization.getDatePattern
===========

Returns a pattern string for formatting and parsing dates according to the client's user preferences.

    navigator.globalization.getDatePattern(successCB, errorCB, options);
    
Description
-----------

It returns the pattern to the successCB callback with a properties object as a parameter. That object should have the following properties:

- pattern {String}: The date and time pattern for formatting and parsing dates.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>
- timezone {String}: The abbreviated name of the time zone on the client
- utc\_offset {Number}: The current difference in seconds between the client's time zone and coordinated universal time.
- dst\_offset {Number}: The current daylight saving time offset in seconds between the client's non-daylight saving's time zone and the client's daylight saving's time zone.

If there is an error obtaining the pattern, then the errorCB callback is invokedwith a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.PATTERN\_ERROR.

`options.formatLength` can be 'short', 'medium', 'long', or 'full'.
`options.selector` can be 'date', 'time' or 'date and time'.

The default options are `{formatLength:'short', selector:'date and time'}`.
The options parameter is optional.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "pattern: M/d/yyyy h:mm a".

    function checkDatePattern() {
      navigator.globalization.getDatePattern(
        function (date) {alert('pattern: ' + date.pattern + '\n');},
        function () {alert('Error getting pattern\n');},
        {formatLength:'short', selector:'date and time'}
      );
    }

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                      
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>

