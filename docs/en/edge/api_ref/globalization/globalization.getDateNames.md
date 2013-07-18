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

globalization.getDateNames
===========

Returns an array of the names of the months or days of the week,
depending on the client's user preferences and calendar.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);

Description
-----------

Returns the array of names to the `successCallback` with a
`properties` object as a parameter. That object contains a `value`
property with an `Array` of `String` values. The array features names
starting from either the first month in the year or the first day of
the week, depending on the option selected.

If there is an error obtaining the names, then the `errorCallback`
executes with a `GlobalizationError` object as a parameter. The
error's expected code is `GlobalizationError.UNKNOWN\_ERROR`.

The `options` parameter is optional, and its default values are:

    {type:'wide', item:'months'}

The value of `options.type` can be `narrow` or `wide`.

The value of `options.item` can be `months` or `days`.

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS
- Windows Phone 8

Quick Example
-------------

When the browser is set to the `en\_US` locale, this example displays
a series of twelve popup dialogs, one per month, with text similar to
`month: January`:

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );

Full Example
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova-x.x.x.js"></script>
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

