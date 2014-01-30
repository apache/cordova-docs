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

Das `PositionError` -Objekt übergeben, um die `geolocationError` Callback-Funktion tritt ein Fehler mit Geolocation. Es verfügt über die folgenden Fehlercodes:

*   `PositionError.PERMISSION_DENIED`: Zurückgegeben, wenn Benutzer erlauben nicht die app Positionsinformationen abgerufen werden. Dies ist abhängig von der Plattform.

*   `PositionError.POSITION_UNAVAILABLE`: Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position abzurufen ist. Im Allgemeinen bedeutet dies, dass das Gerät nicht mit einem Netzwerk verbunden ist oder ein Satelliten-Update kann nicht abgerufen werden.

*   `PositionError.TIMEOUT`: Zurückgegeben, wenn das Gerät nicht in der Lage, eine Position innerhalb der festgelegten Zeit abzurufen ist die `timeout` enthalten `geolocationOptions` . Bei Verwendung mit `geolocation.watchPosition` , könnte dieser Fehler wiederholt übergeben werden, zu der `geolocationError` Rückruf jedes `timeout` Millisekunden.