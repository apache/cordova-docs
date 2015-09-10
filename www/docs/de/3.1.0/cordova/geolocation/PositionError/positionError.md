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

# <a href="../Position/position.html">Position</a>sfehler

A `<a href="../Position/position.html">Position</a>Error` -Objekt übergeben, um die `<a href="../parameters/geolocationError.html">geolocationError</a>` Rückruf, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

*   **Nachricht**: Fehlermeldung, die die Informationen über den aufgetretenen Fehler beschreibt.

## Konstanten

*   `<a href="../Position/position.html">Position</a>Error.PERMISSION_DENIED`
*   `<a href="../Position/position.html">Position</a>Error.POSITION_UNAVAILABLE`
*   `<a href="../Position/position.html">Position</a>Error.TIMEOUT`

## Beschreibung

Das `<a href="../Position/position.html">Position</a>Error` -Objekt übergeben, um die `<a href="../parameters/geolocationError.html">geolocationError</a>` Callback-Funktion tritt ein Fehler mit <a href="../geolocation.html">Geolocation</a>.

### `<a href="../Position/position.html">Position</a>Error.PERMISSION_DENIED`

Zurückgegeben, wenn der Benutzer die Anwendung zum Abrufen von <a href="../Position/position.html">Position</a>sinformationen nicht zulässt. Dies ist abhängig von der Plattform.

### `<a href="../Position/position.html">Position</a>Error.POSITION_UNAVAILABLE`

Zurückgegeben, wenn das <a href="../../device/device.html">Gerät</a> nicht in der Lage, eine <a href="../Position/position.html">Position</a> abzurufen ist. Im Allgemeinen bedeutet dies, das <a href="../../device/device.html">Gerät</a> hat keine Netzwerkkonnektivität und/oder kann kein Satelliten-Update erhalten.

### `<a href="../Position/position.html">Position</a>Error.TIMEOUT`

Zurückgegeben, wenn das <a href="../../device/device.html">Gerät</a> nicht in der Lage, eine <a href="../Position/position.html">Position</a> innerhalb der angegebenen abzurufen ist die `<a href="../parameters/geolocation.options.html">geolocationOptions</a>` ' `timeout` Eigenschaft. Bei Verwendung mit `geolocation.watch<a href="../Position/position.html">Position</a>` , dieser Fehler konnte übergeben werden, um die `<a href="../parameters/geolocationError.html">geolocationError</a>` Rückruf jedes `timeout` Millisekunden.