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

# Zajem

> Omogoča dostop do naprave zvok, sliko in video zajem zmogljivosti.

**Opozorilo**: zbiranje in uporaba slike, video ali avdio naprave kamera ali mikrofon postavlja vprašanja pomembno zasebnosti. Vaš app zasebnosti dogovoriti, kako app uporablja tak senzorji in ali s podatki, zabeleženimi delijo z drugimi strankami. Poleg tega, če app je kamero ali mikrofon ni očitno v uporabniškem vmesniku, posredujete obvestilo ravno v času pred app dostopi kamero ali mikrofon (če naprava operacijski sistem ne stori že). To obvestilo morajo iste informacije navedeno zgoraj, kot tudi pridobitev dovoljenja uporabnika (npr. po predstavitvi odločitve za **OK** in **Ne hvala**). Upoštevajte, da nekateri app trgi zahtevajo vaš app, da bi ravno v času in pridobiti dovoljenje od uporabnika pred dostopom do kamero ali mikrofon. Če želite več informacij, si oglejte vodnik o zasebnosti.

## Predmeti

*   Zajem
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Metode

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Področje

Na `capture` predmet je dodeljen na `navigator.device` objekta, in zato je globalni obseg.

    // The global capture object
    var capture = navigator.device.capture;
    

## Lastnosti

*   **supportedAudioModes**: avdio snemanje formatov, ki jih naprava podpira. (ConfigurationData[])

*   **supportedImageModes**: snemanje slike velikosti in oblike, ki jih naprava podpira. (ConfigurationData[])

*   **supportedVideoModes**: snemanje video resolucije in oblika zaslomba z napravo. (ConfigurationData[])

## Metode

*   `capture.captureAudio`: Splavitev uporaba avdio snemanje naprave za snemanje zvočnih posnetkov.

*   `capture.captureImage`: Splavitev uporaba s kamero naprave sprejeti fotografij.

*   `capture.captureVideo`: Splavitev uporaba video snemalnik je naprava za snemanje video posnetkov.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.file',
          'org.apache.cordova.media-capture']
        $ cordova plugin rm org.apache.cordova.media-capture
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="File">
            <param name="android-package" value="org.apache.cordova.file.FileUtils" />
        </feature>
        <feature name="Capture">
            <param name="android-package" value="org.apache.cordova.mediacapture.Capture" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.RECORD_VIDEO" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.capture.MediaCapture" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="Capture">
            <param name="ios-package" value="CDVCapture" />
        </feature>
        

*   Windows Phone (v`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.