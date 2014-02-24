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

# Medien

> Das `Media` Objekt bietet die Möglichkeit zum Aufzeichnen und Wiedergeben von audio-Dateien auf einem Gerät.

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);
    

**Hinweis:** Die aktuelle Implementierung eine W3C-Spezifikation für Medien-Capture nicht halten und wird nur zu Informationszwecken zur Verfügung gestellt. Zukünftiger Implementierungen wird an der aktuellen W3C-Spezifikation und kann die aktuellen APIs entweiht.

## Parameter

*   **Src**: ein URI mit der audio-Inhalte. *(DOM-String und enthält)*

*   **MediaSuccess**: (Optional) der Rückruf, der nach dem führt ein `Media` -Objekt abgeschlossen hat, die aktuelle Wiedergabe, Aufzeichnung oder Stop-Action. *(Funktion)*

*   **Medienfehler**: (Optional) der Rückruf, der ausgeführt wird, wenn ein Fehler auftritt. *(Funktion)*

*   **MediaStatus**: (Optional) der Rückruf, der ausgeführt wird, um Statusänderungen anzugeben. *(Funktion)*

## Konstanten

Die folgenden Konstanten werden gemeldet, als einzigem Parameter an die `mediaStatus` Rückruf:

*   `Media.MEDIA_NONE`= 0;
*   `Media.MEDIA_STARTING`= 1;
*   `Media.MEDIA_RUNNING`= 2;
*   `Media.MEDIA_PAUSED`= 3;
*   `Media.MEDIA_STOPPED`= 4;

## Methoden

*   `media.getCurrentPosition`: Gibt die aktuelle Position in einer Audiodatei.

*   `media.getDuration`: Gibt die Dauer einer Audiodatei.

*   `media.play`: Starten Sie oder fortsetzen Sie der Wiedergabe einer Audiodatei.

*   `media.pause`: Anhalten der Wiedergabe einer Audiodatei.

*   `media.release`: Das zugrunde liegende Betriebssystem audio Ressourcen frei.

*   `media.seekTo`: Verschiebt die Position innerhalb der audio-Datei.

*   `media.setVolume`: Stellen Sie die Lautstärke für die Audiowiedergabe.

*   `media.startRecord`: Starten der Aufnahme einer audio-Datei.

*   `media.stopRecord`: Stoppen Sie die Aufnahme einer audio-Datei.

*   `media.stop`: Abspielen einer Audiodatei zu stoppen.

## Zusätzliche ReadOnly-Parameter

*   **Position**: die Position innerhalb der audio-Wiedergabe in Sekunden.
    
    *   Nicht während des Spiels automatisch aktualisiert; Rufen Sie `getCurrentPosition` zu aktualisieren.

*   **Dauer**: die Dauer der Medien, in Sekunden.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7.5
*   Tizen
*   Windows 8

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ Cordova Plugin hinzufügen org.apache.cordova.media $ Cordova Plugin ls ['org.apache.cordova.media'] $ Cordova Plugin Rm org.apache.cordova.media
     

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Media">
            <param name="android-package" value="org.apache.cordova.AudioHandler" />
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
        

*   iOS (in`config.xml`)
    
        <feature name="Media">
            <param name="ios-package" value="CDVSound" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_MEDIALIB" />
            <Capability Name="ID_CAP_MICROPHONE" />
            <Capability Name="ID_HW_FRONTCAMERA" />
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_CAP_CAMERA" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.

### Windows Phone Macken

*   Nur eine Mediendatei kann gleichzeitig abgespielt werden.

*   Es gibt strenge Beschränkungen, wie Ihre Anwendung mit anderen Medien interagiert. Finden Sie in der [Microsoft-Dokumentation für details][2].

 [2]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx