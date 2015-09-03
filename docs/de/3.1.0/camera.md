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


# Kamera

> Das `camera` Objekt bietet Zugriff auf das Gerät Standard-Kamera-Anwendung.

**Wichtige Datenschutzhinweis:** Sammlung und Verwendung von Bildern von einem Gerät Kamera löst wichtige Datenschutzprobleme. Ihre app-Datenschutzerklärung sollten besprechen, wie die app die Kamera verwendet und ob die Bilder aufgenommen mit irgendwelchen anderen Parteien geteilt werden. Außerdem, wenn die app-Nutzung der Kamera in der Benutzeroberfläche nicht offensichtlich ist, sollten Sie bereitstellen eine just-in-Time-Bekanntmachung vor Ihrer Anwendung den Zugriff auf die Kamera (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Weitere Informationen finden Sie in der Datenschutz-Guide.

## Methoden

*   camera.getPicture
*   Camera.Cleanup

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Camera">
            <param name="android-package" value="org.apache.cordova.CameraLauncher" />
        </feature>
        
        (in app/AndroidManifest)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Camera">
            <param name="blackberry-package" value="org.apache.cordova.camera.Camera" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.media.camera" />
        
        <rim:permissions>
            <rim:permit>use_camera</rim:permit>
        </rim:permissions>
        

*   iOS (in`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

*   Tizen (in`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Bezug: [Anwendungsmanifest für Tizen Webanwendung][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# camera.getPicture

Nimmt ein Foto mit der Kamera, oder ein Foto aus dem Gerät Bildergalerie abgerufen. Das Bild wird an den Erfolg-Rückruf als eine base64-codierte übergeben `String` , oder als den URI für die Image-Datei. Die Methode selbst gibt ein `CameraPopoverHandle` -Objekt, das verwendet werden kann, um die Datei-Auswahl-Popover neu zu positionieren.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Beschreibung

Die `camera.getPicture` -Funktion öffnet das Gerät Standard-Kamera-Anwendung, die Benutzern ermöglicht, Bilder ausrichten. Dieses Verhalten tritt standardmäßig, wenn `Camera.sourceType` gleich `Camera.PictureSourceType.CAMERA` . Sobald der Benutzer die Fotoschnäpper, die Kameraanwendung geschlossen wird und die Anwendung wird wiederhergestellt.

Wenn `Camera.sourceType` ist `Camera.PictureSourceType.PHOTOLIBRARY` oder `Camera.PictureSourceType.SAVEDPHOTOALBUM` , dann ein Dialog-Displays, die Benutzern ermöglicht, ein vorhandenes Bild auszuwählen. Die `camera.getPicture` Funktion gibt ein `CameraPopoverHandle` -Objekt, das verwendet werden kann, um den Bild-Auswahl-Dialog, zum Beispiel beim ändert sich der Orientierung des Geräts neu positionieren.

Der Rückgabewert wird gesendet, um die `cameraSuccess` Callback-Funktion in einem der folgenden Formate, je nach dem angegebenen `cameraOptions` :

*   A `String` mit dem base64-codierte Foto-Bild.

*   A `String` , die die Bild-Datei-Stelle auf lokalem Speicher (Standard).

Sie können tun, was Sie wollen, mit dem codierten Bildes oder URI, zum Beispiel:

*   Rendern Sie das Bild in ein `<img>` Tag, wie im folgenden Beispiel

*   Die Daten lokal zu speichern ( `LocalStorage` , [Lawnchair][1], etc..)

*   Post die Daten an einen entfernten server

 [1]: http://brianleroux.github.com/lawnchair/

**Hinweis:** Fotoauflösung auf neueren Geräten ist recht gut. Fotos aus dem Gerät Galerie ausgewählt sind nicht zu einer niedrigeren Qualität herunterskaliert auch wenn ein `quality` -Parameter angegeben wird. Um Speicherprobleme zu vermeiden, legen Sie `Camera.destinationType` auf `FILE_URI` statt`DATA_URL`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Android Macken

Android verwendet Absichten zum Starten von der Kamera-Aktivität auf dem Gerät, um Bilder zu erfassen und auf Handys mit wenig Speicher, Cordova Tätigkeit getötet werden kann. In diesem Szenario kann das Bild nicht angezeigt, wenn die Aktivität von Cordova wiederhergestellt wird.

## iOS Macken

Darunter eine JavaScript `alert()` entweder des Rückrufs Funktionen können Probleme verursachen. Wickeln Sie die Warnung innerhalb einer `setTimeout()` erlauben die iOS-Bild-Picker oder Popover vollständig zu schließen, bevor die Warnung angezeigt:

    setTimeout(function() {/ / Mach dein Ding hier!}, 0);
    

## Windows Phone 7 Macken

Die native Kameraanwendung aufrufen, während Ihr Gerät über Zune angeschlossen ist funktioniert nicht und löst eine Fehler-Callback.

## Tizen Macken

Tizen unterstützt nur eine `destinationType` der `Camera.DestinationType.FILE_URI` und eine `sourceType` von`Camera.PictureSourceType.PHOTOLIBRARY`.

## Kleines Beispiel

Nehmen Sie ein Foto und rufen Sie sie als base64-codierte Bild:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
    
    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

Nehmen Sie ein Foto und rufen Sie das Bild-Datei-Speicherort:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>Capture Photo</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        var pictureSource;   // picture source
        var destinationType; // sets the format of returned value
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoDataSuccess(imageData) {
          // Uncomment to view the base64-encoded image data
          // console.log(imageData);
    
          // Get image handle
          //
          var smallImage = document.getElementById('smallImage');
    
          // Unhide image elements
          //
          smallImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }
    
        // Called when a photo is successfully retrieved
        //
        function onPhotoURISuccess(imageURI) {
          // Uncomment to view the image file URI
          // console.log(imageURI);
    
          // Get image handle
          //
          var largeImage = document.getElementById('largeImage');
    
          // Unhide image elements
          //
          largeImage.style.display = 'block';
    
          // Show the captured photo
          // The inline CSS rules are used to resize the image
          //
          largeImage.src = imageURI;
        }
    
        // A button will call this function
        //
        function capturePhoto() {
          // Take picture using device camera and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function capturePhotoEdit() {
          // Take picture using device camera, allow edit, and retrieve image as base64-encoded string
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true,
            destinationType: destinationType.DATA_URL });
        }
    
        // A button will call this function
        //
        function getPhoto(source) {
          // Retrieve image file location from specified source
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }
    
        // Called if something bad happens.
        //
        function onFail(message) {
          alert('Failed because: ' + message);
        }
    
        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capture Photo</button> <br>
        <button onclick="capturePhotoEdit();">Capture Editable Photo</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">From Photo Library</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">From Photo Album</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>


# cameraSuccess

OnSuccess Callback-Funktion, die die Bilddaten bereitstellt.

    function(imageData) {
        // Do something with the image
    }
    

## Parameter

*   **CMYK**: Base64-Codierung der Bilddaten, *oder* die Image-Datei-URI, je nach `cameraOptions` in Kraft. *(String)*

## Beispiel

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

OnError-Callback-Funktion, die eine Fehlermeldung bereitstellt.

    function(message) {
        // Show a helpful message
    }
    

## Parameter

*   **Meldung**: die Nachricht wird durch das Gerät systemeigenen Code bereitgestellt. *(String)*


# cameraOptions

Optionale Parameter die Kameraeinstellungen anpassen.

    {Qualität: 75, DestinationType: Camera.DestinationType.DATA_URL, SourceType: Camera.PictureSourceType.CAMERA, AllowEdit: stimmt, EncodingType: Camera.EncodingType.JPEG, TargetWidth: 100, TargetHeight: 100, PopoverOptions: CameraPopoverOptions, SaveToPhotoAlbum: false};
    

## Optionen

*   **Qualität**: Qualität des gespeicherten Bildes, ausgedrückt als ein Bereich von 0-100, wo 100 in der Regel voller Auflösung ohne Verlust aus der Dateikomprimierung ist. *(Anzahl)* (Beachten Sie, dass Informationen über die Kamera Auflösung nicht verfügbar ist.)

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / Return Bild als base64-codierte Zeichenfolge FILE_URI: 1, / / Return Image-Datei-URI NATIVE_URI: 2 / / Return image native URI (z. B. Ressourcen-Bibliothek: / / auf iOS oder Inhalte: / / auf Android)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {Fotothek: 0, Kamera: 1, SAVEDPHOTOALBUM: 2};
        

*   **AllowEdit**: einfache Bearbeitung des Bildes vor Auswahl zu ermöglichen. *(Boolesch)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0, / / Return JPEG-codierte Bild PNG: 1 / / Return PNG codiertes Bild};
        

*   **TargetWidth**: Breite in Pixel zum Bild skalieren. Muss mit **TargetHeight**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **TargetHeight**: Höhe in Pixel zum Bild skalieren. Muss mit **TargetWidth**verwendet werden. Seitenverhältnis bleibt konstant. *(Anzahl)*

*   **MediaType**: Legen Sie den Typ der Medien zur Auswahl. Funktioniert nur, wenn `PictureSourceType` ist `PHOTOLIBRARY` oder `SAVEDPHOTOALBUM` . Im Sinne `nagivator.camera.MediaType` *(Anzahl)* 
    
        Camera.MediaType = {Bild: 0, / / Auswahl der Standbilder nur ermöglichen. STANDARD. Kehrt über DestinationType VIDEO angegebenen Format: 1, / / ermöglichen Auswahl an nur, Video wird immer zurückgegeben FILE_URI ALLMEDIA: 2 / / Auswahl von alle Medientypen zulassen
        
    
    };

*   **CorrectOrientation**: Drehen Sie das Bild um die Ausrichtung des Geräts während der Aufnahme zu korrigieren. *(Boolesch)*

*   **SaveToPhotoAlbum**: das Bild auf das Fotoalbum auf dem Gerät zu speichern, nach Einnahme. *(Boolesch)*

*   **PopoverOptions**: iOS-nur Optionen, die Popover Lage in iPad angeben. In definierten`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {zurück: 0, / / die hinten gerichteter Kamera vorne verwenden: 1 / / die nach vorn gerichtete Kamera verwenden};
        

## Android Macken

*   `cameraDirection`Ergebnisse in einem hinten gerichteter Foto Wert.

*   Ignoriert die `allowEdit` Parameter.

*   `Camera.PictureSourceType.PHOTOLIBRARY`und `Camera.PictureSourceType.SAVEDPHOTOALBUM` beide das gleiche Fotoalbum anzuzeigen.

## BlackBerry Macken

*   Ignoriert die `quality` Parameter.

*   Ignoriert die `sourceType` Parameter.

*   Ignoriert die `allowEdit` Parameter.

*   Anwendung müssen wichtige Injektion-Berechtigungen, um die ursprüngliche Kamera-Anwendung zu schließen, nachdem der Benutzer die Fotoschnäpper.

*   Große Bildgrößen kann die Unfähigkeit Bilder auf Nachfolger Geräten (z.B. Torch 9800) codiert, dass Feature hochauflösende Kameras führen.

*   `Camera.MediaType`wird nicht unterstützt.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.

## iOS Macken

*   Legen Sie `quality` unter 50 Speicherfehler auf einigen Geräten zu vermeiden.

*   Bei der Verwendung `destinationType.FILE_URI` , Fotos werden im temporären Verzeichnis der Anwendung gespeichert. Sie können den Inhalt dieses Verzeichnisses mit löschen die `navigator.fileMgr` APIs, wenn Speicherplatz ein Anliegen.

## Tizen Macken

*   nicht unterstützte Optionen

*   gibt immer einen Datei-URI

## Windows Phone 7 und 8 Macken

*   Ignoriert die `allowEdit` Parameter.

*   Ignoriert die `correctOrientation` Parameter.

*   Ignoriert die `cameraDirection` Parameter.


# CameraPopoverOptions

nur iOS-Parametern, die Anker-Element Lage und Pfeil Richtung der Popover angeben, bei der Auswahl von Bildern aus einem iPad Bibliothek oder Album.

    {X: 0, y: 32, Breite: 320, Höhe: 480, ArrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **X**: x Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **y**: y Pixelkoordinate des Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Breite**: Breite in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **Höhe**: Höhe in Pixeln, das Bildschirmelement auf dem der Popover zu verankern. *(Anzahl)*

*   **ArrowDir**: Richtung der Pfeil auf der Popover zeigen sollte. Im Sinne `Camera.PopoverArrowDirection` *(Anzahl)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1, / / entspricht iOS UIPopoverArrowDirection Konstanten ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Beachten Sie, dass die Größe der Popover ändern kann, um die Richtung des Pfeils und Ausrichtung des Bildschirms anzupassen. Achten Sie darauf, um Orientierung zu berücksichtigen, wenn Sie den Anker-Element-Speicherort angeben.

## Kleines Beispiel

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }


# CameraPopoverHandle

Ein Handle für das Dialogfeld "Popover" erstellt von`camera.getPicture`.

## Methoden

*   **SetPosition**: Legen Sie die Position der Popover.

## Unterstützte Plattformen

*   iOS

## setPosition

Legen Sie die Position von der Popover.

**Parameter:**

*   `cameraPopoverOptions`: die `CameraPopoverOptions` angeben, dass die neue Position

## Kleines Beispiel

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Vollständiges Beispiel

     function onSuccess(imageData) {
          // Do stuff with the image!
     }
    
     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }
    
     var cameraPopoverHandle = navigator.camera.getPicture(onSuccess, onFail,
         { destinationType: Camera.DestinationType.FILE_URI,
           sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    
     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new CameraPopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.setPosition(cameraPopoverOptions);
     }
