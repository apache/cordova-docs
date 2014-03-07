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

# Positionsfehler

A `PositionError` -Objekt übergeben, um die `geolocationError` Rückruf, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

*   **Nachricht**: Fehlermeldung, die die Informationen über den aufgetretenen Fehler beschreibt.

## Konstanten

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Beschreibung

Das `PositionError` -Objekt übergeben, um die `geolocationError` Callback-Funktion tritt ein Fehler mit Geolocation.

### `PositionError.PERMISSION_DENIED`

Zurückgegeben, wenn der Benutzer die Anwendung zum Abrufen von Positionsinformationen nicht zulässt. Dies ist abhängig von der Plattform.

### `PositionError.POSITION_UNAVAILABLE`

Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position abzurufen ist. Im Allgemeinen bedeutet dies, das Gerät hat keine Netzwerkkonnektivität und/oder kann kein Satelliten-Update erhalten.

### `PositionError.TIMEOUT`

Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position innerhalb der angegebenen abzurufen ist die `geolocationOptions` ' `timeout` Eigenschaft. Bei Verwendung mit `geolocation.watchPosition` , dieser Fehler konnte übergeben werden, um die `geolocationError` Rückruf jedes `timeout` Millisekunden.