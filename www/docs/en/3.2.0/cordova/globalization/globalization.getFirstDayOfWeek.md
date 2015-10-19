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

title: globalization.getFirstDayOfWeek
---

# globalization.getFirstDayOfWeek

Returns the first day of the week according to the client's user
preferences and calendar.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);

## Description

The days of the week are numbered starting from 1, where 1 is assumed
to be Sunday.  Returns the day to the `successCallback` with a
`properties` object as a parameter. That object should have a `value`
property with a `Number` value.

If there is an error obtaining the pattern, then the `errorCallback`
executes with a `[GlobalizationError](GlobalizationError/globalizationerror.html)` object as a parameter. The
error's expected code is `[GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR`.

## Supported Platforms

- Amazon Fire OS
- Android
- BlackBerry WebWorks 5.0+
- iOS
- Windows Phone 8

## Quick Example

When the browser is set to the `en\_US` locale, this displays a
popup dialog with text similar to `day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );

## Full Example

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
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

