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

# Erfassen

> Ermöglicht den Zugriff auf des Geräts Audio-, Bild- und video-Capture-Funktionen.

**Wichtige Datenschutzhinweis:** Erfassung und Verwendung von Bildern, Video oder Audio von Kamera oder das Mikrofon des Geräts wirft wichtige Datenschutzprobleme. Ihre app-Datenschutzerklärung sollten besprechen, wie die app solche Sensoren verwendet und ob die aufgezeichneten Daten mit irgendwelchen anderen Parteien geteilt werden. Außerdem, wenn die app-Nutzung der Kamera oder Mikrofon in der Benutzeroberfläche nicht offensichtlich ist, sollten Sie bereitstellen eine just-in-Time-Bekanntmachung vor Ihrer Anwendung den Zugriff auf die Kamera oder das Mikrofon (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Beachten Sie, dass einige app-Marktplätze können Ihre app eine Frist von just-in-Time und Erlaubnis des Benutzers vor dem Zugriff auf die Kamera oder das Mikrofon einholen. Weitere Informationen finden Sie in der Datenschutz-Guide.

## Objekte

*   Erfassen
*   CaptureAudioOptions
*   CaptureImageOptions
*   CaptureVideoOptions
*   CaptureCallback
*   CaptureErrorCB
*   ConfigurationData
*   MediaFile
*   MediaFileData

## Methoden

*   capture.captureAudio
*   capture.captureImage
*   capture.captureVideo
*   MediaFile.getFormatData

## Anwendungsbereich

The `capture` object is assigned to the `navigator.device` object, and therefore has global scope.

    // The global capture object
    var capture = navigator.device.capture;
    

## Eigenschaften

*   **SupportedAudioModes**: die Audio-Aufnahme vom Gerät unterstützten Formate. (ConfigurationData[])

*   **SupportedImageModes**: die Aufnahme Bildgrößen und Formaten, die von dem Gerät unterstützt. (ConfigurationData[])

*   **SupportedVideoModes**: die Aufnahme Bildschirmauflösungen und Formate, die vom Gerät unterstützt. (ConfigurationData[])

## Methoden

*   `capture.captureAudio`: Starten Sie das Gerät audio-Recording-Anwendung aufzeichnen von audio-Clips.

*   `capture.captureImage`: Starten Sie das Gerät-Kamera-Anwendung um Fotos zu machen.

*   `capture.captureVideo`: Starten des Geräts Videorecorder zum Aufzeichnen von Videos.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.media-capture
        $ cordova plugin ls
        [ 'org.apache.cordova.media-capture' ]
        $ cordova plugin rm org.apache.cordova.media-capture
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/plugins.xml)
        <feature name="Capture">
            <param name="android-package" value="org.apache.cordova.Capture" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Capture">
            <param name="blackberry-package" value="org.apache.cordova.capture.MediaCapture" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.system"  required="true" version="1.0.0.0" />
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Capture">
            <param name="ios-package" value="CDVCapture" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.