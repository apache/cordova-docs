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

title: Globalisierung
---

# Globalisierung

Ruft Informationen und führt durch spezifisch für Gebietsschema und der Zeitzone des Benutzers.

## Objekte

*   [GlobalizationError](GlobalizationError/globalizationerror.html)

## Methoden

*   [globalization.getPreferredLanguage](globalization.getPreferredLanguage.html)
*   [globalization.getLocaleName](globalization.getLocaleName.html)
*   [globalization.dateToString](globalization.dateToString.html)
*   [globalization.stringToDate](globalization.stringToDate.html)
*   [globalization.getDatePattern](globalization.getDatePattern.html)
*   [globalization.getDateNames](globalization.getDateNames.html)
*   [globalization.isDayLightSavingsTime](globalization.isDayLightSavingsTime.html)
*   [globalization.getFirstDayOfWeek](globalization.getFirstDayOfWeek.html)
*   [globalization.numberToString](globalization.numberToString.html)
*   [globalization.stringToNumber](globalization.stringToNumber.html)
*   [globalization.getNumberPattern](globalization.getNumberPattern.html)
*   [globalization.getCurrencyPattern](globalization.getCurrencyPattern.html)

## Geltungsbereich von Variablen

Das `globalization` -Objekt ist ein untergeordnetes Element des der `navigator` -Objekt, und daher hat globalen Gültigkeitsbereich.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der [Übersicht](../../guide/overview/index.html).