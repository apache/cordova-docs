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

A `CompassHeading` oggetto viene restituito alla `compassSuccess` funzione di callback.

## Proprietà

*   **magneticHeading**: la rotta in gradi da 0-359.99 in un unico momento. *(Numero)*

*   **trueHeading**: la voce rispetto al Polo Nord geografico in gradi 0-359.99 in un unico momento. Un valore negativo indica che non è possibile determinare la vera voce. *(Numero)*

*   **headingAccuracy**: lo scostamento in gradi tra il titolo segnalato e la vera voce. *(Numero)*

*   **timestamp**: il tempo in cui questa voce è stata determinata. *(millisecondi)*

## Descrizione

Il `CompassHeading` viene restituito l'oggetto per il `compassSuccess` funzione di callback.

## Stranezze Android

*   `trueHeading`non è supportato, ma riporta lo stesso valore`magneticHeading`

*   `headingAccuracy`è sempre 0 perché non non c'è alcuna differenza tra la `magneticHeading` e`trueHeading`.

## iOS stranezze

*   `trueHeading` is only returned when location services are enabled via `navigator.geolocation.watchLocation()`

*   Per i dispositivi iOS 4 e sopra, fattori di voce nell'orientamento corrente del dispositivo, non in riferimento alla sua posizione assoluta, per le applicazioni che supporta tale orientamento.