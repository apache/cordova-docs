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

# device.uuid

Dobil je naprava univerzalno Unique Identifier ([UUID][1]).

 [1]: http://en.wikipedia.org/wiki/Universally_Unique_Identifier

    var string = device.uuid;
    

## Opis

Podrobnosti kako se ustvari a UUID določi izdelovalec naprave in so značilne za platformo ali model naprave.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    / / Android: Vrne naključno 64-bitno celo število (kot niz, spet!) / / celo število ustvarjenih na prvi boot naprave / / / / BlackBerry: vrne številko PIN naprave / / to je devetmestno edinstveno celo število (kot niz, čeprav!) / / / / iPhone: (razlag iz razreda UIDevice dokumentacije) / / vrne niz hash vrednosti, ustvarjene iz več strojne opreme identificira.
    / / To je zajamčeno edinstven za vsako napravo in ga ni mogoče privezati / / uporabniški račun.
    / / Windows Phone 7: vrne razpršilno napravo + trenutnega uporabnika, / / če uporabnik ni opredeljen, guid nastaja ter hoteti vztrajati dokler app je uninstalled / / Tizen: vrne napravo IMEI (International Mobile Equipment Identity ali IMEI je številka / / enolični za vsak mobilni telefon, GSM in UMTS.
    var deviceID = device.uuid;
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Properties Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var element = document.getElementById('deviceProperties');
            element.innerHTML = 'Device Model: '    + device.model    + '<br />' +
                                'Device Cordova: '  + device.cordova  + '<br />' +
                                'Device Platform: ' + device.platform + '<br />' +
                                'Device UUID: '     + device.uuid     + '<br />' +
                                'Device Version: '  + device.version  + '<br />';
        }
    
        </script>
      </head>
      <body>
        <p id="deviceProperties">Loading device properties...</p>
      </body>
    </html>
    

## iOS ovinka

V `uuid` na iOS ni mogoče povezati z napravo, vendar se razlikuje za vsako aplikacijo za vsak obrat. To spremeni, če izbrišete in ponovno namestiti app, in morda tudi ko nadgradite iOS, ali celo nadgradnjo app na različico (očitno v iOS 5.1). V `uuid` ni zanesljive vrednosti.

## Windows Phone 7 in 8 Quirks

V `uuid` za Windows Phone 7 zahteva dovoljenje za `ID_CAP_IDENTITY_DEVICE` . Microsoft bo verjetno Osuđivati lastnost kmalu. Če zmogljivost ni na voljo, uporaba ustvari vztrajno guid, ki vzdržuje za trajanje namestitve aplikacije v napravi.