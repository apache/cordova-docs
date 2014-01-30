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

*   La `trueHeading` proprietà non è supportata, ma riporta lo stesso valore`magneticHeading`.

*   La `headingAccuracy` proprietà è sempre 0 perché non non c'è alcuna differenza tra la `magneticHeading` e`trueHeading`.

## iOS stranezze

*   La `trueHeading` proprietà viene restituito solo per servizi di localizzazione attivate tramite`navigator.geolocation.watchLocation()`.

*   Per i dispositivi iOS 4 sopra, voce fattori nell'orientamento corrente del dispositivo e non fa riferimento la sua posizione assoluta, per le app che supporta tale orientamento.