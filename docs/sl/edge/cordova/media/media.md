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

# Media

> Z `Media` predmet omogoča snemanje in predvajanje zvočnih datotek v napravi.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Opomba**: trenutno izvajanje ne ustreza specifikaciji W3C za zajemanje medijev in je predvidena le udobje. Prihodnje izvajanje držijo najnovejše W3C specifikacije in lahko Osuđivati trenutni API.

## Parametri

*   **src**: URI, ki vsebujejo zvočne vsebine. *(DOMString)*

*   **mediaSuccess**: (neobvezno) povratni klic, ki se izvede po a `Media` predmet je dokončal trenutno igra, zapis ali stop delovanja. *(Funkcija)*

*   **mediaError**: (neobvezno) povratni klic, ki se izvede, če pride do napake. *(Funkcija)*

*   **mediaStatus**: (neobvezno) povratni klic, ki se izvede za prikaz sprememb stanja. *(Funkcija)*

## Konstante

Konstante so poročali kot edini parameter, da se `mediaStatus` povratni klic:

*   `Media.MEDIA_NONE` = 0;
*   `Media.MEDIA_STARTING` = 1;
*   `Media.MEDIA_RUNNING` = 2;
*   `Media.MEDIA_PAUSED` = 3;
*   `Media.MEDIA_STOPPED` = 4;

## Metode

*   `media.getCurrentPosition`: Vrne trenutni položaj v zvočno datoteko.

*   `media.getDuration`: Vrne trajanje zvočno datoteko.

*   `media.play`: Začeti ali nadaljevati predvajanje zvočne datoteke.

*   `media.pause`: Predvajanje pavza zvočno datoteko.

*   `media.release`: Javnost zvočnih virov osnovni operacijski sistem.

*   `media.seekTo`: Premakne položaj v zvočno datoteko.

*   `media.setVolume`: Nastavite glasnost za predvajanje zvoka.

*   `media.startRecord`: Snemanje zvočne datoteke.

*   `media.stopRecord`: Ustavi snemanje zvočne datoteke.

*   `media.stop`: Ustavitev predvajanja zvočne datoteke.

## Dodatne ReadOnly parametrov

*   **položaj**: položaj znotraj predvajanje zvoka, v sekundah.
    
    *   Ne posodablja samodejno med igro; klic `getCurrentPosition` za posodobitev.

*   **trajanje**: trajanje medijev, v sekundah.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.media 
        $ cordova plugin ls
        [ 'org.apache.cordova.media' ]
        $ cordova plugin rm org.apache.cordova.media 
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.media.AudioHandler" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.media.MediaCapture" />
        </feature>
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (v`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Sklic: [manifestu za program za Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.

## Windows Phone Quirks

*   Samo en predstavnostne datoteke lahko predvajate naenkrat.

*   Obstajajo stroge omejitve na kako program komunicira z drugimi mediji. Najdete v [Microsoftovi dokumentaciji za podrobnosti][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx