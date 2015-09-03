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
---


Globalization
======

The `globalization` object obtains information and performs operations specific to the user's locale and timezone.

Objects
-------

- GlobalizationError

Methods
-------

- globalization.getPreferredLanguage
- globalization.getLocaleName
- globalization.dateToString
- globalization.stringToDate
- globalization.getDatePattern
- globalization.getDateNames
- globalization.isDayLightSavingsTime
- globalization.getFirstDayOfWeek
- globalization.numberToString
- globalization.stringToNumber
- globalization.getNumberPattern
- globalization.getCurrencyPattern

Variable Scope
--------------

The `globalization` object is a child of the `navigator` object, and therefore has global scope.

    // The global globalization object
    var globalization = navigator.globalization;

Permissions
-----------

### Android

#### app/res/xml/config.xml

    <plugin name="Globalization" value="org.apache.cordova.Globalization" />



globalization.getPreferredLanguage
===========

Get the string identifier for the client's current language.

    navigator.globalization.getPreferredLanguage(successCB, errorCB);

    
Description
-----------

It returns the language identifier string to the successCB callback with a
properties object as a parameter. That object should have a ``value`` property with a String value.

If there is an error getting the language, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.UNKNOWN\_ERROR.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8


Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with the text "language: English".

    navigator.globalization.getPreferredLanguage(
      function (language) {alert('language: ' + language.value + '\n');},
      function () {alert('Error getting language\n');}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>


Windows Phone 8 Quirks
-------
- Returns the ISO 639-1 two-letter code for the current language.



globalization.getLocaleName
===========

Get the string identifier for the client's current locale setting.

    navigator.globalization.getLocaleName(successCB, errorCB);

    
Description
-----------

It returns the locale identifier string to the successCB callback with a
properties object as a parameter. That object should have a ``value`` property with a String value.

If there is an error getting the locale, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.UNKNOWN\_ERROR.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8


Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with the text "locale: en\_US".

    navigator.globalization.getLocaleName(
      function (locale) {alert('locale: ' + locale.value + '\n');},
      function () {alert('Error getting locale\n');}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>

Windows Phone 8 Quirks
---------------------
- Returns the two-letter code defined in ISO 3166 for the current country/region.


globalization.dateToString
===========

Returns a date formatted as a string according to the client's locale and timezone.

    navigator.globalization.dateToString(date, successCB, errorCB, options);
    
Description
-----------

It returns the formatted date string to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with a String value.

The inbound ``date`` parameter should be of type ``Date``.

If there is an error formatting the date, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.FORMATTING\_ERROR.

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

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "date: 9/25/2012 4:21PM" using the default options.

    navigator.globalization.dateToString(
      new Date(),
      function (date) {alert('date:' + date.value + '\n');},
      function () {alert('Error getting dateString\n');},
      {formatLength:'short', selector:'date and time'}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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

If there is an error parsing the date string, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.PARSING\_ERROR.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
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


Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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
- Windows Phone 8

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
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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

- `formatLength` option supports only short and full values.
- `pattern` property for `date and time` pattern returns only full datetime format.
- `timezone` property returns full time zone name
- `dst_offset` returned property is not supported and always returns zero.




globalization.getDateNames
===========

Returns an array of either the names of the months or days of the week according to the client's user preferences and calendar.

    navigator.globalization.getDateNames(successCB, errorCB, options);
    
Description
-----------

It returns the array of names to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with an Array of Strings. That array will be the names starting from either the first month in the year or the first day of the week, depending on the option selected.

If there is an error obtaining the names, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.UNKNOWN\_ERROR.

`options.type` can be 'narrow', or 'wide'.
`options.item` can be 'months', or 'days'.

The default options are `{type:'wide', item:'months'}`.
The options parameter is optional.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a series of 12 popup dialogs, one per month, with text similar to "month: January"

    navigator.globalization.getDateNames(
      function (names) {
        for (var i=0; i<names.value.length; i++) {
          alert('month: ' + names.value[i] + '\n');
        }
      },
      function () {alert('Error getting names\n');},
      {type:'wide', item:'months'}
    );


Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                  
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
                                            
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>




globalization.isDayLightSavingsTime
===========

Returns whether daylight savings time is in effect for a given date using the client's time zone and calendar.

    navigator.globalization.isDayLightSavingsTime(date, successCB, errorCB);
    
Description
-----------

It returns whether or not daylight savings time is in effect to the successCB callback with a properties object as a parameter. That object should have a ``dst`` property with a Boolean value. The value 'true' indicates that daylight savings time is in effect for the given date, and 'false' indicates that it is not.

The inbound parameter `date` should be of type `Date`.

If there is an error reading the date, then the errorCB callback is invoked. The expected code for this error is GlobalizationError.UNKNOWN\_ERROR.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
-------------

In the case during the summer when the browser is set to a DST-enabled timezone, this should display a popup dialog with text similar to "dst: true".

    navigator.globalization.isDayLightSavingsTime(
      new Date(),
      function (date) {alert('dst: ' + date.dst + '\n');},
      function () {alert('Error getting names\n');}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
        
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
                                             
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>
    



globalization.getFirstDayOfWeek
===========

Returns the first day of the week according to the client's user preferences and calendar.

    navigator.globalization.getFirstDayOfWeek(successCB, errorCB);
    
Description
-----------

The days of the week are numbered starting from 1 where 1 is considered to be Sunday. It returns the day to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with a Number value.

If there is an error obtaining the pattern, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.UNKNOWN\_ERROR.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "day: 1".

    navigator.globalization.getFirstDayOfWeek(
      function (day) {alert('day: ' + day.value + '\n');},
      function () {alert('Error getting day\n');}
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                      
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
        
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>




globalization.numberToString
===========

Returns a number formatted as a string according to the client's user preferences.

    navigator.globalization.numberToString(number, successCB, errorCB, options);
    
Description
-----------

It returns the formatted number string to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with a String value.

If there is an error formatting the number, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.FORMATTING\_ERROR.

`options.type` can be 'decimal', 'percent', or 'currency'. The default options are `{type:'decimal'}`. The `options` parameter is optional.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone
- Windows Phone 8

Quick Example
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "number: 3.142"

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
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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




globalization.stringToNumber
===========

Parses a number formatted as a string according to the client's user preferences and returns the corresponding number.

    navigator.globalization.stringToNumber(string, successCB, errorCB, options);
    
Description
-----------

It returns the number to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with a Number value.

If there is an error parsing the number string, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.PARSING\_ERROR.

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

In the case when the browser is set to the en\_US locale, this should display a popup dialog with text similar to "number: 1234.56".

    navigator.globalization.stringToNumber(
      '1234.56',
      function (number) {alert('number: ' + number.value + '\n');},
      function () {alert('Error getting number\n');},
      {type:'decimal'}
    );


Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                      
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
                                        
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>




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
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
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
    




globalization.getCurrencyPattern
===========

Returns a pattern string for formatting and parsing currency values according
to the client's user preferences and ISO 4217 currency code.

     navigator.globalization.getCurrencyPattern(currencyCode, successCB, errorCB);
    
Description
-----------

It returns the pattern to the successCB callback with a properties object as a parameter. That object should have the following properties:

- pattern {String}: The currency pattern for formatting and parsing currency values.  The patterns follow Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>
- code {String}: The ISO 4217 currency code for the pattern.
- fraction {Number}: The number of fractional digits to use when parsing and formatting currency.
- rounding {Number}: The rounding increment to use when parsing and formatting.
- decimal: {String}: The decimal symbol to use for parsing and formatting.
- grouping: {String}: The grouping symbol to use for parsing and formatting.

The inbound `currencyCode` parameter should be a String of one of the ISO 4217 currency codes, for example 'USD'.

If there is an error obtaining the pattern, then the errorCB callback is invoked with a GlobalizationError object as a parameter. The expected code for this error is GlobalizationError.FORMATTING\_ERROR.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick Example
-------------

In the case when the browser is set to the en\_US locale and the selected currency is United States Dollars, this should display a popup dialog with text similar to:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,

.

    navigator.globalization.getCurrencyPattern(
      'USD',
      function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                'code: ' + pattern.code + '\n' +
                                'fraction: ' + pattern.fraction + '\n' +
                                'rounding: ' + pattern.rounding + '\n' +
                                'decimal: ' + pattern.decimal + '\n' +
                                'grouping: ' + pattern.grouping);},
      function () {alert('Error getting pattern\n');}
    );


Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                  
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: ' + pattern.pattern + '\n' +
                                      'code: ' + pattern.code + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: ' + pattern.decimal + '\n' +
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




GlobalizationError
============

An object representing a error from the Globalization API.

Properties
----------

- __code:__  One of the following codes representing the error type (`Number`)
  - GlobalizationError.UNKNOWN\_ERROR: 0
  - GlobalizationError.FORMATTING\_ERROR: 1
  - GlobalizationError.PARSING\_ERROR: 2
  - GlobalizationError.PATTERN\_ERROR: 3
- __message:__  A text message that includes the error explanation and/or details (`String`)

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

When the following error callback is invoked, it should display a popup dialog with the text similar to "code: 3" and "message: ".

    function errorCB(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.6.0.js"></script>
        <script type="text/javascript" charset="utf-8">
                      
        function successCB(date) {
          alert('month:' + date.month +
                ' day:' + date.day + 
                ' year:' + date.year + '\n');
        }
                                            
        function errorCB(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
                                                                  
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCB,
            errorCB,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>


