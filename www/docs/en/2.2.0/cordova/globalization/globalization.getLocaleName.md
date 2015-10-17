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

title: globalization.getLocaleName
---

globalization.getLocaleName
===========

Get the string identifier for the client's current locale setting.

    navigator.globalization.getLocaleName(successCB, errorCB);

    
Description
-----------

It returns the locale identifier string to the successCB callback with a
properties object as a parameter. That object should have a ``value`` property with a String value.

If there is an error getting the locale, then the errorCB callback is invoked with a [GlobalizationError](GlobalizationError/globalizationerror.html) object as a parameter. The expected code for this error is [GlobalizationError](GlobalizationError/globalizationerror.html).UNKNOWN\_ERROR.


Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iPhone


Quick [Example](../storage/storage.opendatabase.html)
-------------

In the case when the browser is set to the en\_US locale, this should display a popup dialog with the text "locale: en\_US".

    navigator.globalization.getLocaleName(
      function (locale) {alert('locale: ' + locale.value + '\n');},
      function () {alert('Error getting locale\n');}
    );

Full [Example](../storage/storage.opendatabase.html)
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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

