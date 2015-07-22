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