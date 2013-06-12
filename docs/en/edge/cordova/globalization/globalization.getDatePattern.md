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

Returns a pattern string to format and parse dates according to the
client's user preferences.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);

Description
-----------

Returns the pattern to the `successCallback`. The object passed in as
a parameter contains the following properties:

- __pattern__: The date and time pattern to format and parse dates.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. _(String)_
- __timezone__: The abbreviated name of the time zone on the client. _(String)_
- __utc\_offset__: The current difference in seconds between the client's time zone and coordinated universal time. _(Number)_
- __dst\_offset__: The current daylight saving time offset in seconds between the client's non-daylight saving's time zone and the client's daylight saving's time zone. _(Number)_

If there is an error obtaining the pattern, the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN\_ERROR`.

The `options` parameter is optional, and defaults to the following values:

    {formatLength:'short', selector:'date and time'}

The `options.formatLength` can be `short`, `medium`, `long`, or
`full`.  The `options.selector` can be `date`, `time` or `date and
time`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 8

Quick Example
-------------

When the browser is set to the `en\_US` locale, this example displays
a popup dialog with text such as `pattern: M/d/yyyy h:mm a`:

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

Windows Phone 8 Quirks
--------------

- The `formatLength` supports only `short` and `full` values.
- The `pattern` for `date and time` pattern returns only full datetime format.
- The `timezone` returns the full time zone name.
- The `dst_offset` property is not supported, and always returns zero.

