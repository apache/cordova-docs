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

# Geolocation

> Z `geolocation` predmet omogoča dostop do podatkov o lokaciji naprave GPS senzor na osnovi ali iz omrežja signalov.

`Geolocation`informacije o lokaciji naprave, na primer zemljepisno širino in dolžino. Skupni viri informacije o lokaciji so Global Positioning System (GPS) in mesto iz omrežja signale IP naslov, RFID, WiFi in Bluetooth MAC naslove in GSM/CDMA cell ID-jev. Ni nobenega jamstva, da API vrne sedanji namestitev naprave.

Ta API temelji na [W3C Geolocation API specifikacije][1], in izvaja samo na napravah, ki že ne zagotavljajo izvajanje.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Opozorilo**: zbiranje in uporaba podatkov geolocation postavlja vprašanja pomembno zasebnosti. Vaš app zasebnosti dogovoriti, kako app uporablja geolokacijski podatke, ali si delijo z drugimi pogodbenicami, in stopnjo natančnosti podatkov (na primer, grobe, fine, poštna številka ravni, itd.). Geolocation podatkov na splošno velja občutljivih ker lahko pokažejo kje uporabnika in, če je shranjeno zgodovino svojih potovanjih. Zato poleg app je zasebnosti, si odločno menijo, da zagotavlja ravno v času obvestila, preden app dostopa do podatkov geolocation (če naprava operacijski sistem ne stori že). To obvestilo morajo iste informacije navedeno zgoraj, kot tudi pridobitev dovoljenja uporabnika (npr. po predstavitvi odločitve za **OK** in **Ne hvala**). Če želite več informacij, si oglejte vodnik o zasebnosti.

## Metode

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Argumentov

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Predmetov (samo za branje)

*   Position
*   PositionError
*   Coordinates

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.geolocation
        $ cordova plugin ls
        [ 'org.apache.cordova.geolocation' ]
        $ cordova plugin rm org.apache.cordova.geolocation
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Geolocation">
            <param name="android-package" value="org.apache.cordova.geolocation.GeoBroker" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Geolocation">
            <param name="blackberry-package" value="org.apache.cordova.geolocation.Geolocation" />
        </feature>
        
        (in www/config.xml)
        <rim:permissions>
            <rim:permit>read_geolocation</rim:permit>
        </rim:permissions>
        

*   FirefoxOS (v datoteki manifest.webapp)
    
        "permissions": {
            "geolocation": { "description": "Used to position the map to your current position" }
        }
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="Geolocation">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (v`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_LOCATION" />
        </Capabilities>
        
    
    Sklic: [manifestu za program za Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.