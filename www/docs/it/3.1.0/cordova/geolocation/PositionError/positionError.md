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

title: PositionError
---

# PositionError

A `PositionError` oggetto è passato per la `[geolocationError](../parameters/geolocationError.html)` callback quando si verifica un errore.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

*   **messaggio**: messaggio di errore che descrive i dettagli dell'errore rilevato.

## Costanti

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Descrizione

Il `PositionError` oggetto è passato per la `[geolocationError](../parameters/geolocationError.html)` funzione di callback quando si verifica un errore con geolocalizzazione.

### `PositionError.PERMISSION_DENIED`

Restituito quando l'utente non consentono all'applicazione di recuperare le informazioni di posizione. Questo è dipendente dalla piattaforma.

### `PositionError.POSITION_UNAVAILABLE`

Restituito quando il dispositivo è in grado di recuperare una posizione. In generale ciò significa che il dispositivo non dispone di rete connettività e/o non può ottenere un fix satellitare.

### `PositionError.TIMEOUT`

Restituito quando il dispositivo è in grado di recuperare una posizione entro il tempo specificato nella `[geolocationOptions](../parameters/geolocation.options.html)` ' `timeout` proprietà. Quando utilizzato con `[geolocation.watchPosition](../geolocation.watchPosition.html)` , questo errore potrebbe essere passato alla `[geolocationError](../parameters/geolocationError.html)` richiamata ogni `timeout` millisecondi.