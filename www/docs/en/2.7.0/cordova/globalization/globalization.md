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

title: Globalization
---

Globalization
======

The `globalization` object obtains information and performs operations specific to the user's locale and timezone.

Objects
-------

- [GlobalizationError](GlobalizationError/globalizationerror.html)

Methods
-------

- [globalization.getPreferredLanguage](globalization.getPreferredLanguage.html)
- [globalization.getLocaleName](globalization.getLocaleName.html)
- [globalization.dateToString](globalization.dateToString.html)
- [globalization.stringToDate](globalization.stringToDate.html)
- [globalization.getDatePattern](globalization.getDatePattern.html)
- [globalization.getDateNames](globalization.getDateNames.html)
- [globalization.isDayLightSavingsTime](globalization.isDayLightSavingsTime.html)
- [globalization.getFirstDayOfWeek](globalization.getFirstDayOfWeek.html)
- [globalization.numberToString](globalization.numberToString.html)
- [globalization.stringToNumber](globalization.stringToNumber.html)
- [globalization.getNumberPattern](globalization.getNumberPattern.html)
- [globalization.getCurrencyPattern](globalization.getCurrencyPattern.html)

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
