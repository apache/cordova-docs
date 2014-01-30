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

Neobvezni parametri za prilagajanje pridobivanje geolokacije`Position`.

    {maximumAge: 3000, časovna omejitev: 5000, enableHighAccuracy: res};
    

## Možnosti

*   **enableHighAccuracy**: zagotavlja namig, da uporaba potrebuje najboljše možne rezultate. Privzeto se naprava poskuša pridobiti a `Position` z uporabo omrežne metode. Nastavite to lastnost na `true` pove okvir za uporabo natančnejše metode, kot je satelitsko določanje položaja. *(Boolean)*

*   **Časovna omejitev**: največja dolžina od čas (milisekundah), ki je dovoljeno, da prenese iz razpisa za `geolocation.getCurrentPosition` ali `geolocation.watchPosition` do ustreznega `geolocationSuccess` izvede povratni klic. Če je `geolocationSuccess` povratni klic ne uveljavlja v tem roku, se `geolocationError` povratni klic je minilo a `PositionError.TIMEOUT` zmota zbornik. (Upoštevajte, da pri uporabi v povezavi z `geolocation.watchPosition` , na `geolocationError` povratni klic lahko imenuje v intervalu vsak `timeout` milisekundah!) *(Število)*

*   **maximumAge**: Sprejmi cached položaj, katerih starost je največ navedeni čas v milisekundah. *(Število)*

## Android Quirks

Android 2.x emulators ne vrne rezultat geolocation, razen če je `enableHighAccuracy` možnost nastavljena na`true`.