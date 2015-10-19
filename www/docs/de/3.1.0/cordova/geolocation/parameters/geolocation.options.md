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

title: geolocationOptions
---

# geolocationOptions

Optionalen Parametern, um das Abrufen von der geolocation`[Position](../Position/position.html)`.

    {MaximumAge: 3000, Timeout: 5000, EnableHighAccuracy: true};
    

## Optionen

*   **EnableHighAccuracy**: stellt einen Hinweis, dass die Anwendung die bestmöglichen Ergebnisse benötigt. Standardmäßig versucht das [Gerät](../../device/device.html) abzurufen ein `[Position](../Position/position.html)` mit netzwerkbasierte Methoden. Wenn diese Eigenschaft auf `true` erzählt den Rahmenbedingungen genauere Methoden, z. B. Satellitenortung verwenden. *(Boolean)*

*   **Timeout**: die maximale Länge der Zeit (in Millisekunden), die zulässig ist, übergeben Sie den Aufruf von `[geolocation.getCurrentPosition](../geolocation.getCurrentPosition.html)` oder `[geolocation.watchPosition](../geolocation.watchPosition.html)` bis zu den entsprechenden `[geolocationSuccess](geolocationSuccess.html)` Rückruf führt. Wenn die `[geolocationSuccess](geolocationSuccess.html)` Rückruf wird nicht aufgerufen, in dieser Zeit die `[geolocationError](geolocationError.html)` Rückruf wird übergeben ein `PositionError.TIMEOUT` Fehlercode. (Beachten Sie, dass in [Verbindung](../../connection/connection.html) mit `[geolocation.watchPosition](../geolocation.watchPosition.html)` , die `[geolocationError](geolocationError.html)` Rückruf könnte auf ein Intervall aufgerufen werden alle `timeout` Millisekunden!) *(Anzahl)*

*   **MaximumAge**: eine zwischengespeicherte [Position](../Position/position.html), deren Alter nicht größer als die angegebene Zeit in Millisekunden ist, zu akzeptieren. *(Anzahl)*

## Android Macken

Android 2.x-Emulatoren geben ein Geolocation-Ergebnis nicht zurück, es sei denn, die `enableHighAccuracy` Option auf festgelegt ist`true`.