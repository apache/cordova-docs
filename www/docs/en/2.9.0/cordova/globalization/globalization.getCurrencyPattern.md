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

globalization.getCurrencyPattern
===========

Returns a pattern string to format and parse currency values according
to the client's user preferences and ISO 4217 currency code.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);

Description
-----------

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object should contain the following properties:

- __pattern__: The currency pattern to format and parse currency values.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. _(String)_
- __code__: The ISO 4217 currency code for the pattern. _(String)_
- __fraction__: The number of fractional digits to use when parsing and formatting currency. _(Number)_
- __rounding__: The rounding increment to use when parsing and formatting. _(Number)_
- __decimal__: The decimal symbol to use for parsing and formatting. _(String)_
- __grouping__: The grouping symbol to use for parsing and formatting. _(String)_

The inbound `currencyCode` parameter should be a `String` of one of
the ISO 4217 currency codes, for example 'USD'.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.FORMATTING\_ERROR`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Quick Example
-------------

When the browser is set to the `en\_US` locale and the selected
currency is United States Dollars, this example displays a popup
dialog with text similar to the results that follow:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );

Expected result:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
