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

title: globalization.getNumberPattern
---

globalization.getNumberPattern
===========

Returns a pattern string for formatting and parsing numbers according to the client's user preferences.

    navigator.globalization.getNumberPattern(successCB, errorCB, options);
    
Description
-----------

It returns the pattern to the successCB callback with a properties object as a parameter. That object should have the following properties:

- pattern {String}: The number pattern for formatting and parsing numbers.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>
- symbol {String}: The symbol to be used when formatting and parsing e.g., percent or currency symbol.
- fraction {Number}: The number of fractional digits to use when parsing and formatting numbers.
- rounding {Number}: The rounding increment to use when parsing and formatting.
- positive {String}: The symbol to use for positive numbers when parsing and formatting.
- negative: {String}: The symbol to use for negative numbers when parsing and formatting.
- decimal: {String}: The decimal symbol to use for parsing and formatting.
- grouping: {String}: The grouping symbol to use for parsing and formatting.

If there is an error obtaining the pattern, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.PATTERN\_ERROR.

`options.type` can be 'decimal', 'percent', or 'currency'.
The default options are `{type:'decimal'}`. The `options` parameter is optional.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to:

    pattern: #,##0.###
    symbol: .
    fraction: 0
    rounding: 0
    positive: 
    negative: -
    decimal: .
    grouping: ,

.

    navigator.globalization.getNumberPattern(
      function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                'symbol: ' + pattern.symbol + '\n' +
                                'fraction: ' + pattern.fraction + '\n' +
                                'rounding: ' + pattern.rounding + '\n' +
                                'positive: ' + pattern.positive + '\n' +
                                'negative: ' + pattern.negative + '\n' +
                                'decimal: ' + pattern.decimal + '\n' +
                                'grouping: ' + pattern.grouping);},
      function () {alert('Error getting pattern\n');},
      {type:'decimal'}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                      
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                      'symbol: ' + pattern.symbol + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: ' + pattern.decimal + '\n' +
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
- `pattern` property is not supported; empty string is always returned.
- `fraction` property is not supported; zero is always returned.
    

