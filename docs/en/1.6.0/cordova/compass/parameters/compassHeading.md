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

compassHeading
==========

A `CompassHeading` object is returned to the `compassSuccess` callback function when an error occurs.

Properties
----------
- __magneticHeading:__ The heading in degrees from 0 - 359.99 at a single moment in time. _(Number)_
- __trueHeading:__ The heading relative to the geographic North Pole in degrees 0 - 359.99 at a single moment in time. A negative value indicates that the true heading could not be determined.  _(Number)_
- __headingAccuracy:__ The deviation in degrees between the reported heading and the true heading. _(Number)_
- __timestamp:__ The time at which this heading was determined.  _(milliseconds)_

Description
-----------

The `CompassHeading` object is returned to the user through the `compassSuccess` callback function.

Android Quirks
--------------
- trueHeading is not supported. It will report the same value as magneticHeading
- headingAccuracy will always be 0 as there is no difference between the magneticHeading and trueHeading on Android.

iOS Quirks
----------

- trueHeading is only returned when location services are running via `navigator.geolocation.watchLocation()`
- For iOS > 4 devices, if the device is rotated and the app supports that orientation, the heading values will be reported 
back with respect to the current orientation. 

