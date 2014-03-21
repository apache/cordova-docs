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
        <script type="text/javascript" charset="utf-8" src="cordova-2.3.0.js"></script>
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
    
