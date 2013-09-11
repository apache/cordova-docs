---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# compassHeading

Ein `CompassHeading` Objekt wird an die `CompassSuccess` Callback-Funktion zurückgegeben.

## Eigenschaften

*   **MagneticHeading**: die Überschrift in Grad von 0-359.99 zu einem einzigen Zeitpunkt. *(Anzahl)*

*   **TrueHeading**: die Überschrift im Verhältnis zu den geografischen Nordpol in Grad 0-359.99 zu einem einzigen Zeitpunkt. Ein negativer Wert bedeutet, dass die wahre Überschrift nicht bestimmt werden kann. *(Anzahl)*

*   **HeadingAccuracy**: die Abweichung in Grad zwischen der gemeldeten Überschrift und die wahre Richtung. *(Anzahl)*

*   **Timestamp**: die Zeit, an dem dieser Rubrik bestimmt war. *(Millisekunden)*

## Beschreibung

Das `CompassHeading` Objekt wird zurückgegeben, um die `compassSuccess` Callback-Funktion.

## Android Macken

*   `trueHeading`wird nicht unterstützt, aber meldet den gleichen Wert wie`magneticHeading`

*   `headingAccuracy`ist immer 0 da es keinen Unterschied zwischen gibt der `magneticHeading` und`trueHeading`.

## iOS Macken

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Für iOS 4 Geräte und oben, Rubrik Faktoren in die aktuelle Ausrichtung des Geräts, nicht in Bezug auf die absolute Position für apps unterstützt, das die Orientierung.