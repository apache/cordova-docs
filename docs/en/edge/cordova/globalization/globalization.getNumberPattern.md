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

globalization.getNumberPattern
===========

Returns a pattern string to format and parse numbers according to the client's user preferences.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);

Description
-----------

Returns the pattern to the `successCallback` with a `properties` object
as a parameter. That object contains the following properties:

- __pattern__: The number pattern to format and parse numbers.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. _(String)_
- __symbol__: The symbol to use when formatting and parsing, such as a percent or currency symbol. _(String)_
- __fraction__: The number of fractional digits to use when parsing and formatting numbers. _(Number)_
- __rounding__: The rounding increment to use when parsing and formatting. _(Number)_
- __positive__: The symbol to use for positive numbers when parsing and formatting. _(String)_
- __negative__: The symbol to use for negative numbers when parsing and formatting. _(String)_
- __decimal__: The decimal symbol to use for parsing and formatting. _(String)_
- __grouping__: The grouping symbol to use for parsing and formatting. _(String)_

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.PATTERN\_ERROR`.

The `options` parameter is optional, and default values are:

    {type:'decimal'}

The `options.type` can be `decimal`, `percent`, or `currency`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 8

Quick Example
-------------

When the browser is set to the `en\_US` locale, this should display a
popup dialog with text similar to the results that follow:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );

Results:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive:
    negative: -
    decimal: .
    grouping: ,

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
        <script type="text/javascript" charset="utf-8">

        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }

        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>

Windows Phone 8 Quirks
----------------
- The `pattern` property is not supported, and retuens an empty string.
- The `fraction` property is not supported, and returns zero.
