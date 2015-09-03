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


# capture.captureAudio

> Die audio-Recorder-Anwendung starten und geben Informationen über aufgenommene audio-Clip-Dateien zurück.

    navigator.device.capture.captureAudio(
        CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang, Audioaufnahmen, die audio-Aufnahme-Standardanwendung des Geräts erfassen. Die Operation erlaubt dem Benutzer des Geräts, mehrere Aufnahmen in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet, wenn entweder vom Benutzer beendet die Audio wird-recording-Anwendung oder die maximale Anzahl der Aufnahmen, die festgelegten `CaptureAudioOptions.limit` erreicht ist. Wenn keine `limit` Parameterwert angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer ein einzelnes audio-Clips aufgezeichnet.

Wenn der Capture-Vorgang abgeschlossen ist, die `CaptureCallback` führt mit einer Reihe von `MediaFile` Objekten beschreiben jedes audio-Clip-Datei erfasst. Wenn der Benutzer den Vorgang beendet wird, bevor ein Audioclip erfasst wird, die `CaptureErrorCallback` führt mit einem `CaptureError` -Objekt, mit der `CaptureError.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start audio capture
    navigator.device.capture.captureAudio(captureSuccess, captureError, {limit:2});
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Audio</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureAudio() {
            // Launch device audio recording application,
            // allowing user to capture up to 2 audio clips
            navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureAudio();">Capture Audio</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks Macken

*   Cordova für BlackBerry WebWorks versucht **Voice Notes Recorder** Starten der Anwendung, bereitgestellt durch RIM, Audioaufnahmen zu erfassen. Die app erhält eine `CaptureError.CAPTURE_NOT_SUPPORTED` Fehlercode, wenn die Anwendung nicht auf dem Gerät installiert ist.

## iOS Macken

*   iOS muss keine Standard-audio-Recording-Anwendung, so dass eine einfache Benutzeroberfläche bereitgestellt wird.

## Windows Phone 7 und 8 Macken

*   Windows Phone 7 muss keine Standard-audio-Recording-Anwendung, so dass eine einfache Benutzeroberfläche bereitgestellt wird.


# CaptureAudioOptions

> Kapselt Audioaufnahme-Konfigurationsoptionen.

## Eigenschaften

*   **Limit**: die maximale Anzahl von audio-Clips kann Benutzer des Geräts in einem einzigen Capture-Vorgang aufzeichnen. Der Wert muss größer als oder gleich 1 (Standardwert 1).

*   **Dauer**: die maximale Dauer eines audio-sound-Clips, in Sekunden.

## Kleines Beispiel

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Android Macken

*   Die `duration` Parameter wird nicht unterstützt. Aufnahme Längen kann nicht programmgesteuert begrenzt.

## BlackBerry WebWorks Macken

*   Die `duration` Parameter wird nicht unterstützt. Aufnahme Längen kann nicht programmgesteuert begrenzt.

## iOS Macken

*   Die `limit` Parameter wird nicht unterstützt, kann also nur eine Aufnahme für jeden Aufruf erstellt werden.


# capture.captureImage

> Starten Sie die Kameraanwendung und geben Informationen über aufgenommene Bild-Dateien zurück.

    navigator.device.capture.captureImage(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureImageOptions options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang, um Aufnahmen mit Kamera-Anwendung des Geräts. Die Operation erlaubt Benutzern, mehr als ein Bild in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet entweder, wenn der Benutzer schließt die Kameraanwendung oder die maximale Anzahl an Aufnahmen von angegebenen `CaptureAudioOptions.limit` erreicht ist. Wenn keine `limit` angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer ein einzelnes Bild erfasst.

Wenn der Capture-Vorgang abgeschlossen ist, ruft es die `CaptureCB` Rückruf mit einem Array von `MediaFile` Objekten beschreibt jede aufgenommene Bild-Datei. Wenn der Benutzer den Vorgang vor dem Aufzeichnen eines Abbilds beendet die `CaptureErrorCB` Rückruf führt mit einem `CaptureError` Objekt mit eine `CaptureError.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Windows Phone 7 Macken

Die native Kameraanwendung aufrufen, während Ihr Gerät via Zune angeschlossen ist, funktioniert nicht, und die Fehler-Callback führt.

## Kleines Beispiel

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start image capture
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:2});
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Image</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureImage() {
            // Launch device camera application,
            // allowing user to capture up to 2 images
            navigator.device.capture.captureImage(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureImage();">Capture Image</button> <br>
        </body>
    </html>


# CaptureImageOptions

> Image Capture-Konfigurationsoptionen kapselt.

## Eigenschaften

*   **Limit**: die maximale Anzahl der Bilder, die der Benutzer zu, die in einem einzigen Capture-Vorgang erfassen. Der Wert muss größer als oder gleich 1 (Standardwert 1).

## Kleines Beispiel

    // limit capture operation to 3 images
    var options = { limit: 3 };
    
    navigator.device.capture.captureImage(captureSuccess, captureError, options);
    

## iOS Macken

*   Der **Limit** -Parameter wird nicht unterstützt, und nur ein Bild pro Aufruf stammt.


# capture.captureVideo

> Die Videorecorder-Anwendung starten und geben Informationen zu aufgezeichneten video-Clip-Dateien zurück.

    navigator.device.capture.captureVideo(
        CaptureCB captureSuccess, CaptureErrorCB captureError, [CaptureVideoOptions options]
    );
    

## Beschreibung

Beginnt einen asynchronen Vorgang um Videoaufnahmen mit Videoaufzeichnung-Anwendung des Geräts zu erfassen. Die Operation ermöglicht dem Benutzer, mehrere Aufnahmen in einer einzigen Sitzung zu erfassen.

Der Capture-Vorgang endet, wenn entweder vom Benutzer beendet wird, die video-Aufnahme-Anwendung oder die maximale Anzahl an Aufnahmen von angegebenen `CaptureVideoOptions.limit` erreicht ist. Wenn keine `limit` Parameterwert angegeben ist, wird standardmaessig eins (1) und der Capture-Vorgang beendet, nachdem der Benutzer einen einzelnen video Clip aufgezeichnet.

Wenn der Capture-Vorgang abgeschlossen ist, es der `CaptureCB` Rückruf führt mit einer Reihe von `MediaFile` Objekten beschreiben jedes video-Clip-Datei erfasst. Wenn der Benutzer den Vorgang vor dem Erfassen eines Videoclips, beendet die `CaptureErrorCB` Rückruf führt mit ein `CaptureError` Objekt mit eine `CaptureError.CAPTURE_NO_MEDIA_FILES` Fehlercode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

    // capture callback
    var captureSuccess = function(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };
    
    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };
    
    // start video capture
    navigator.device.capture.captureVideo(captureSuccess, captureError, {limit:2});
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Video</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8" src="json2.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Called when capture operation is finished
        //
        function captureSuccess(mediaFiles) {
            var i, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                uploadFile(mediaFiles[i]);
            }
        }
    
        // Called if something bad happens.
        //
        function captureError(error) {
            var msg = 'An error occurred during capture: ' + error.code;
            navigator.notification.alert(msg, null, 'Uh oh!');
        }
    
        // A button will call this function
        //
        function captureVideo() {
            // Launch device video recording application,
            // allowing user to capture up to 2 video clips
            navigator.device.capture.captureVideo(captureSuccess, captureError, {limit: 2});
        }
    
        // Upload files to server
        function uploadFile(mediaFile) {
            var ft = new FileTransfer(),
                path = mediaFile.fullPath,
                name = mediaFile.name;
    
            ft.upload(path,
                "http://my.domain.com/upload.php",
                function(result) {
                    console.log('Upload success: ' + result.responseCode);
                    console.log(result.bytesSent + ' bytes sent');
                },
                function(error) {
                    console.log('Error uploading file ' + path + ': ' + error.code);
                },
                { fileName: name });
        }
    
        </script>
        </head>
        <body>
            <button onclick="captureVideo();">Capture Video</button> <br>
        </body>
    </html>
    

## BlackBerry WebWorks Macken

*   Cordova für BlackBerry WebWorks versucht, **Video-Recorder** Starten der Anwendung, bereitgestellt durch RIM, Videoaufnahmen zu erfassen. Die app erhält eine `CaptureError.CAPTURE_NOT_SUPPORTED` Fehlercode, wenn die Anwendung nicht auf dem Gerät installiert ist.


# CaptureVideoOptions

> Video-Capture-Konfigurationsoptionen kapselt.

## Eigenschaften

*   **Limit**: die maximale Anzahl von video-Clips des Geräts Benutzer kann in einem einzigen Capture-Vorgang erfassen. Der Wert muss größer als oder gleich 1 (Standardwert 1).

*   **Dauer**: die maximale Dauer eines Videoclips in Sekunden.

## Kleines Beispiel

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks Macken

*   Der **Duration** -Parameter wird nicht unterstützt, so dass die Länge der Aufnahmen programmgesteuert nur beschränkt sein kann.

## iOS Macken

*   Der **Limit** -Parameter wird nicht unterstützt. Pro Aufruf wird nur ein Video aufgezeichnet.


# CaptureError

> Kapselt den Fehlercode, der infolge eines fehlerhaften Medien-Erfassungsvorgangs.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

## Konstanten

*   `CaptureError.CAPTURE_INTERNAL_ERR`: Die Kamera oder das Mikrofon konnte Bild oder Ton zu erfassen.

*   `CaptureError.CAPTURE_APPLICATION_BUSY`: Eine weitere Aufnahme-Anforderung verbüßt die Kamera oder Audio-Capture-Anwendung.

*   `CaptureError.CAPTURE_INVALID_ARGUMENT`: Ungültige Verwendung der API (z. B. den Wert des `limit` ist kleiner als 1).

*   `CaptureError.CAPTURE_NO_MEDIA_FILES`: Der Benutzer wird die Kamera oder Audio-Capture-Anwendung vor Aufnahme alles beendet.

*   `CaptureError.CAPTURE_NOT_SUPPORTED`: Der angeforderte Capture-Vorgang wird nicht unterstützt.


# CaptureCB

> Auf eine erfolgreiche Media-Erfassungsvorgangs aufgerufen.

    function captureSuccess( MediaFile[] mediaFiles ) { ... };
    

## Beschreibung

Diese Funktion wird ausgeführt, nachdem ein erfolgreiche Capture-Vorgang abgeschlossen ist. An diesem Punkt kann eine Mediendatei erfasst wurden und entweder der Benutzer die Medien-Capture-Anwendung beendet hat oder die Capture-erreicht.

Jedes `MediaFile` Objekt beschreibt eine aufgenommenen Medien-Datei.

## Kleines Beispiel

    // capture callback
    function captureSuccess(mediaFiles) {
        var i, path, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            path = mediaFiles[i].fullPath;
            // do something interesting with the file
        }
    };


# CaptureErrorCB

> Wird aufgerufen, wenn ein Fehler, während eines Medien auftritt.

    function captureError( CaptureError error ) { ... };
    

## Beschreibung

Diese Funktion wird ausgeführt, wenn ein Fehler auftritt, wenn Sie versuchen, starten Sie ein Medium capture Betrieb. Fehlerszenarien enthalten, wenn die Sicherungsanwendung beschäftigt, ein Capture-Vorgang ist bereits im Gange, oder der Benutzer den Vorgang abbricht, bevor alle Mediendateien erfasst werden.

Diese Funktion führt mit einem `CaptureError` -Objekt, enthält einen entsprechenden Fehler`code`.

## Kleines Beispiel

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };


# ConfigurationData

> Kapselt eine Reihe von Medien-Aufnahme-Parameter, die ein Gerät unterstützt.

## Beschreibung

Beschreibt Medien-Aufnahmemodi, die vom Gerät unterstützt. Die Konfigurationsdaten enthält den MIME-Typ und Capture Dimensionen für die Aufnahme von Video- oder Bilddateien.

Die MIME-Typen sollten [RFC2046][1]einhalten. Beispiele:

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Eigenschaften

*   **Typ**: die ASCII-codierte Zeichenfolge aus Kleinbuchstaben, den Medientyp darstellt. (DOM-String und enthält)

*   **Höhe**: die Höhe des Bildes oder Videos in Pixel. Der Wert ist NULL für sound-Clips. (Anzahl)

*   **Breite**: die Breite des Bildes oder Videos in Pixel. Der Wert ist NULL für sound-Clips. (Anzahl)

## Kleines Beispiel

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Von jeder Plattform unterstützt nicht. Alle Konfigurations-Daten-Arrays sind leer.


# MediaFile

> Kapselt Eigenschaften einer Mediendatei erfassen.

## Eigenschaften

*   **Name**: der Name der Datei, ohne Pfadinformationen. (DOM-String und enthält)

*   **FullPath**: der vollständige Pfad der Datei, einschließlich des Namens. (DOM-String und enthält)

*   **Typ**: Mime-Typ der Datei (DOM-String und enthält)

*   **LastModifiedDate**: das Datum und die Uhrzeit wann die Datei zuletzt geändert wurde. (Datum)

*   **Größe**: die Größe der Datei in Byte. (Anzahl)

## Methoden

*   **MediaFile.getFormatData**: Ruft die Formatierungsinformationen der Mediendatei.


# MediaFile.getFormatData

> Ruft formatieren Informationen über die Medien-Capture-Datei.

    mediaFile.getFormatData(
        MediaFileDataSuccessCB successCallback,
        [MediaFileDataErrorCB errorCallback]
    );
    

## Beschreibung

Diese Funktion versucht asynchron, die Formatierungsinformationen für die Mediendatei abzurufen. Wenn erfolgreich, es ruft die `MediaFileDataSuccessCB` Rückruf mit einem `MediaFileData` Objekt. Wenn der Versuch fehlschlägt, ruft diese Funktion die `MediaFileDataErrorCB` Rückruf.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## BlackBerry WebWorks Macken

Bietet eine API keine Informationen zum Media-Dateien, so dass alle `MediaFileData` Objekte zurückgeben, mit Standardwerten.

## Android Macken

Die API zum Zugriff Medien Dateiformat-Information ist begrenzt, so dass nicht alle `MediaFileData` Eigenschaften werden unterstützt.

## iOS Macken

Die API zum Zugriff Medien Dateiformat-Information ist begrenzt, so dass nicht alle `MediaFileData` Eigenschaften werden unterstützt.


# MediaFileData

> Kapselt Formatinformationen zu einer Mediendatei.

## Eigenschaften

*   **Codecs**: das tatsächliche Format der Audio- und video-Inhalte. (DOM-String und enthält)

*   **Bitrate**: die durchschnittliche Bitrate des Inhalts. Der Wert ist NULL für Bilder. (Anzahl)

*   **Höhe**: die Höhe des Bildes oder Videos in Pixel. Der Wert ist NULL für audio-Clips. (Anzahl)

*   **Breite**: die Breite des Bildes oder Videos in Pixel. Der Wert ist NULL für audio-Clips. (Anzahl)

*   **Dauer**: die Länge des Video- oder Clips in Sekunden. Der Wert ist NULL für Bilder. (Anzahl)

## BlackBerry WebWorks Macken

Keine API bietet Informationen für Medien-Dateien, so dass die `MediaFileData` von zurückgegebene Objekt `MediaFile.getFormatData` verfügt über die folgenden Standardwerte:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: nicht unterstützt, und gibt den Wert NULL.

*   **Höhe**: nicht unterstützt, und gibt den Wert NULL.

*   **Breite**: nicht unterstützt, und gibt den Wert NULL.

*   **Dauer**: nicht unterstützt, und gibt den Wert NULL.

## Android Macken

Unterstützt die folgenden `MediaFileData` Eigenschaften:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: nicht unterstützt, und gibt den Wert NULL.

*   **Höhe**: unterstützt: nur Bild und Video-Dateien.

*   **Breite**: unterstützt: nur Bild und Video-Dateien.

*   **Dauer**: unterstützt: Audio- und video-Dateien nur.

## iOS Macken

Unterstützt die folgenden `MediaFileData` Eigenschaften:

*   **Codecs**: nicht unterstützt, und gibt`null`.

*   **Bitrate**: iOS4 Geräten für nur Audio unterstützt. Gibt 0 (null) für Bilder und Videos.

*   **Höhe**: unterstützt: nur Bild und Video-Dateien.

*   **Breite**: unterstützt: nur Bild und Video-Dateien.

*   **Dauer**: unterstützt: Audio- und video-Dateien nur.
