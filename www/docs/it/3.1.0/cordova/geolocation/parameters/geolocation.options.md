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

# geolocationOptions

Parametri opzionali per personalizzare il recupero di geolocalizzazione`Position`.

    {maximumAge: 3000, timeout: 5000, enableHighAccuracy: true};
    

## Opzioni

*   **enableHighAccuracy**: fornisce un suggerimento che l'applicazione ha bisogno i migliori risultati possibili. Per impostazione predefinita, il dispositivo tenta di recuperare un `Position` usando metodi basati sulla rete. Impostando questa proprietà su `true` indica al framework di utilizzare metodi più accurati, come posizionamento satellitare. *(Boolean)*

*   **timeout**: la lunghezza massima di tempo (in millisecondi) che è consentito per passare dalla chiamata a `geolocation.getCurrentPosition` o `geolocation.watchPosition` fino a quando il corrispondente `geolocationSuccess` callback viene eseguito. Se il `geolocationSuccess` callback non viene richiamato entro questo tempo, il `geolocationError` callback viene passata una `PositionError.TIMEOUT` codice di errore. (Si noti che, quando utilizzato in combinazione con `geolocation.watchPosition` , il `geolocationError` callback potrebbe essere chiamato un intervallo ogni `timeout` millisecondi!) *(Numero)*

*   **maximumAge**: accettare una posizione memorizzata nella cache in cui età è minore il tempo specificato in millisecondi. *(Numero)*

## Stranezze Android

Emulatori Android 2. x non restituiscono un risultato di geolocalizzazione a meno che il `enableHighAccuracy` opzione è impostata su`true`.