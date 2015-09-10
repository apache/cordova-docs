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

# camera.getPicture

Nimmt ein Foto mit der <a href="camera.html">Kamera</a>, oder ein Foto aus dem <a href="../device/device.html">Gerät</a> Bildergalerie abgerufen. Das Bild wird an den Erfolg-Rückruf als eine base64-codierte übergeben `String` , oder als den URI für die Image-<a href="../file/fileobj/fileobj.html">Datei</a>. Die Methode selbst gibt ein `<a href="parameter/CameraPopoverHandle.html">CameraPopoverHandle</a>` -Objekt, das verwendet werden kann, um die <a href="../file/fileobj/fileobj.html">Datei</a>-Auswahl-Popover neu zu positionieren.

    navigator.camera.getPicture( <a href="parameter/cameraSuccess.html">cameraSuccess</a>, <a href="parameter/cameraError.html">cameraError</a>, [ <a href="parameter/cameraOptions.html">cameraOptions</a> ] );
    

## Beschreibung

Die `camera.getPicture` -Funktion öffnet das <a href="../device/device.html">Gerät</a> Standard-<a href="camera.html">Kamera</a>-Anwendung, die Benutzern ermöglicht, Bilder ausrichten. Dieses Verhalten tritt standardmäßig, wenn `Camera.sourceType` gleich `Camera.PictureSourceType.CAMERA` . Sobald der Benutzer die Fotoschnäpper, die <a href="camera.html">Kamera</a>anwendung geschlossen wird und die Anwendung wird wiederhergestellt.

Wenn `Camera.sourceType` ist `Camera.PictureSourceType.PHOTOLIBRARY` oder `Camera.PictureSourceType.SAVEDPHOTOALBUM` , dann ein Dialog-Displays, die Benutzern ermöglicht, ein vorhandenes Bild auszuwählen. Die `camera.getPicture` Funktion gibt ein `<a href="parameter/CameraPopoverHandle.html">CameraPopoverHandle</a>` -Objekt, das verwendet werden kann, um den Bild-Auswahl-Dialog, zum Beispiel beim ändert sich der Orientierung des <a href="../device/device.html">Gerät</a>s neu positionieren.

Der Rückgabewert wird gesendet, um die `<a href="parameter/cameraSuccess.html">cameraSuccess</a>` Callback-Funktion in einem der folgenden Formate, je nach dem angegebenen `<a href="parameter/cameraOptions.html">cameraOptions</a>` :

*   A `String` mit dem base64-codierte Foto-Bild.

*   A `String` , die die Bild-<a href="../file/fileobj/fileobj.html">Datei</a>-Stelle auf lokalem <a href="../storage/storage.html">Speicher</a> (Standard).

Sie können tun, was Sie wollen, mit dem codierten Bildes oder URI, zum Beispiel:

*   Rendern Sie das Bild in ein `<img>` Tag, wie im folgenden Beispiel

*   Die Daten lokal zu speichern ( `LocalStorage` , [Lawnchair][1], etc..)

*   Post die Daten an einen entfernten server

 [1]: http://brianleroux.github.com/lawnchair/

**Hinweis:** Fotoauflösung auf neueren <a href="../device/device.html">Gerät</a>en ist recht gut. Fotos aus dem <a href="../device/device.html">Gerät</a> Galerie ausgewählt sind nicht zu einer niedrigeren Qualität herunterskaliert auch wenn ein `quality` -Parameter angegeben wird. Um <a href="../storage/storage.html">Speicher</a>probleme zu vermeiden, legen Sie `Camera.destinationType` auf `FILE_URI` statt`DATA_URL`.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Tizen
*   Windows Phone 7 und 8
*   Windows 8

## Android Macken

Android verwendet Absichten zum Starten von der <a href="camera.html">Kamera</a>-Aktivität auf dem <a href="../device/device.html">Gerät</a>, um Bilder zu erfassen und auf Handys mit wenig <a href="../storage/storage.html">Speicher</a>, Cordova Tätigkeit getötet werden kann. In diesem Szenario kann das Bild nicht angezeigt, wenn die Aktivität von Cordova wiederhergestellt wird.

## iOS Macken

Darunter eine JavaScript `alert()` entweder des Rückrufs Funktionen können Probleme verursachen. Wickeln Sie die Warnung innerhalb einer `setTimeout()` erlauben die iOS-Bild-Picker oder Popover vollständig zu schließen, bevor die Warnung angezeigt:

    setTimeout(function() {/ / Mach dein Ding hier!}, 0);
    

## Windows Phone 7 Macken

Die native <a href="camera.html">Kamera</a>anwendung aufrufen, während Ihr <a href="../device/device.html">Gerät</a> über Zune angeschlossen ist funktioniert nicht und löst eine Fehler-Callback.

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
    

Nehmen Sie ein Foto und rufen Sie das Bild-<a href="../file/fileobj/fileobj.html">Datei</a>-<a href="../storage/storage.html">Speicher</a>ort:

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
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>",onDeviceReady,false);
    
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