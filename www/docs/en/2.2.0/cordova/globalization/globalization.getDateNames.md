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

title: globalization.getDateNames
---

globalization.getDateNames
===========

Returns an array of either the names of the months or days of the week according to the client's user preferences and calendar.

    navigator.globalization.getDateNames(successCB, errorCB, options);
    
Description
-----------

It returns the array of names to the successCB callback with a properties object as a parameter. That object should have a ``value`` property with an Array of Strings. That array will be the names starting from either the first month in the year or the first day of the week, depending on the option selected.

If there is an error obtaining the names, then the errorCB callback is invoked with a [GlobalizationError](GlobalizationError/globalizationerror.html) object as a parameter. The expected code for this error is [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR.

`options.type` can be 'narrow', or 'wide'.
`options.item` can be 'months', or 'days'.

The default options are `{type:'wide', item:'months'}`.
The options parameter is optional.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone

Quick [Example](../storage/storage.opendatabase.html)
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


Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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

