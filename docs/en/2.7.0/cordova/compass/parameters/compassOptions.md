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

compassOptions
==============

An optional parameter to customize the retrieval of the compass.

Options
-------

- __frequency:__ How often to retrieve the compass heading in milliseconds. _(Number)_ (Default: 100)
- __filter:__ The change in degrees required to initiate a watchHeading success callback. _(Number)_

Android Quirks
______________
- filter is not supported.

Windows Phone 7 and 8 Quirks
--------------
- filter is not supported.

Bada Quirks
-----------
- filter is not supported.

Tizen Quirks
-----------
- filter is not supported.
