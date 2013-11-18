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

# Compass

> Pridobi smer v katero kaže naprava.

## Metode

*   compass.getCurrentHeading
*   compass.watchHeading
*   compass.clearWatch
*   compass.watchHeadingFilter (zastarela)
*   compass.clearWatchFilter (zastarela)

## Argumenti

*   compassSuccess
*   compassError
*   compassOptions
*   compassHeading

## Dostop do funkcionalnosti

Od različice 3.0 naprej, so API-ji na nivoju naprave izvedeni kot *vtičniki* Cordova. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.device-orientation
        $ cordova plugin ls
        [ 'org.apache.cordova.device-orientation' ]
        $ cordova plugin rm org.apache.cordova.device-orientation
    

Ti ukazi se uporablajo za vse ciljane platforme, vendar spremenijo konfiguracijo specifično za posamezne platforme, kot je opisano spodaj:

*   Android
    
        (in `app/res/xml/config.xml`)
        <feature name="Compass">
            <param name="android-package" value="org.apache.cordova.deviceorientation.CompassListener" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="Compass">
            <param name="ios-package" value="CDVLocation" />
        </feature>
        

*   Windows Phone (v `Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_SENSORS" />
        </Capabilities>
        
    
    Referenca: [Application Manifest for Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.