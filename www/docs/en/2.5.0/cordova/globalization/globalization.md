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

- <a href="GlobalizationError/globalizationerror.html">GlobalizationError</a>

Methods
-------

- <a href="globalization.getPreferredLanguage.html">globalization.getPreferredLanguage</a>
- <a href="globalization.getLocaleName.html">globalization.getLocaleName</a>
- <a href="globalization.dateToString.html">globalization.dateToString</a>
- <a href="globalization.stringToDate.html">globalization.stringToDate</a>
- <a href="globalization.getDatePattern.html">globalization.getDatePattern</a>
- <a href="globalization.getDateNames.html">globalization.getDateNames</a>
- <a href="globalization.isDayLightSavingsTime.html">globalization.isDayLightSavingsTime</a>
- <a href="globalization.getFirstDayOfWeek.html">globalization.getFirstDayOfWeek</a>
- <a href="globalization.numberToString.html">globalization.numberToString</a>
- <a href="globalization.stringToNumber.html">globalization.stringToNumber</a>
- <a href="globalization.getNumberPattern.html">globalization.getNumberPattern</a>
- <a href="globalization.getCurrencyPattern.html">globalization.getCurrencyPattern</a>

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
