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

title: GlobalizationError
---

GlobalizationError
============

An object representing a error from the [Globalization](../globalization.html) API.

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

Quick [Example](../../storage/storage.opendatabase.html)
-------------

When the following error callback is invoked, it should display a popup dialog with the text similar to "code: 3" and "message: ".

    function errorCB(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };

Full [Example](../../storage/storage.opendatabase.html)
------------

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-2.2.0.js"></script>
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

