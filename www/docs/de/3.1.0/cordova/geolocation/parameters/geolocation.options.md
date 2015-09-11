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

# geolocationOptions

Optionalen Parametern, um das Abrufen von der geolocation`<a href="../Position/position.html">Position</a>`.

    {MaximumAge: 3000, Timeout: 5000, EnableHighAccuracy: true};
    

## Optionen

*   **EnableHighAccuracy**: stellt einen Hinweis, dass die Anwendung die bestmöglichen Ergebnisse benötigt. Standardmäßig versucht das <a href="../../device/device.html">Gerät</a> abzurufen ein `<a href="../Position/position.html">Position</a>` mit netzwerkbasierte Methoden. Wenn diese Eigenschaft auf `true` erzählt den Rahmenbedingungen genauere Methoden, z. B. Satellitenortung verwenden. *(Boolean)*

*   **Timeout**: die maximale Länge der Zeit (in Millisekunden), die zulässig ist, übergeben Sie den Aufruf von `geolocation.getCurrent<a href="../Position/position.html">Position</a>` oder `geolocation.watch<a href="../Position/position.html">Position</a>` bis zu den entsprechenden `<a href="geolocationSuccess.html">geolocationSuccess</a>` Rückruf führt. Wenn die `<a href="geolocationSuccess.html">geolocationSuccess</a>` Rückruf wird nicht aufgerufen, in dieser Zeit die `<a href="geolocationError.html">geolocationError</a>` Rückruf wird übergeben ein `<a href="../Position/position.html">Position</a>Error.TIMEOUT` Fehlercode. (Beachten Sie, dass in <a href="../../connection/connection.html">Verbindung</a> mit `geolocation.watch<a href="../Position/position.html">Position</a>` , die `<a href="geolocationError.html">geolocationError</a>` Rückruf könnte auf ein Intervall aufgerufen werden alle `timeout` Millisekunden!) *(Anzahl)*

*   **MaximumAge**: eine zwischengespeicherte <a href="../Position/position.html">Position</a>, deren Alter nicht größer als die angegebene Zeit in Millisekunden ist, zu akzeptieren. *(Anzahl)*

## Android Macken

Android 2.x-Emulatoren geben ein <a href="../geolocation.html">Geolocation</a>-Ergebnis nicht zurück, es sei denn, die `enableHighAccuracy` Option auf festgelegt ist`true`.