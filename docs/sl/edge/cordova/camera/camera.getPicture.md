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

Zalotiti a fotografija s kamero ali fotografijo dobi naprave galerijo slik. Slike se prenese na povratni klic uspeh kot base64 kodirane `String` , ali kot URI slikovne datoteke. Metoda sama vrne z `CameraPopoverHandle` predmet, ki se lahko uporabljajo za prestavljanje popover izbor datoteke.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Opis

V `camera.getPicture` funkcijo odpre naprave privzeto kamero aplikacija, ki omogoča uporabnikom, da snap slike. Do tega vedenja pride privzeto, ko `Camera.sourceType` je enak `Camera.PictureSourceType.CAMERA` . Ko uporabnik pripne fotografijo, uporabo kamere zapre in ponovno vzpostavi uporabo.

Če `Camera.sourceType` je `Camera.PictureSourceType.PHOTOLIBRARY` ali `Camera.PictureSourceType.SAVEDPHOTOALBUM` , potem pogovorno okno prikaže, ki omogoča uporabnikom, da izberete obstoječo sliko. Je `camera.getPicture` funkcija vrne z `CameraPopoverHandle` predmet, ki se lahko uporablja za prestavljanje slike izbor dialog, na primer, ko naprava usmerjenost spremeni.

Vrnjena vrednost je poslana na `cameraSuccess` povratni klic funkcije, v eni od teh oblik, odvisno od določenih `cameraOptions` :

*   A `String` ki vsebuje base64 kodirane fotografiji slike.

*   A `String` predstavlja podoba pila namestitev na lokalni pomnilnik (privzeta).

Lahko storite karkoli hočeš z kodirano sliko ali URI, na primer:

*   Upodabljanje slike v z `<img>` oznako, kot v spodnjem primeru

*   Shranjevanje podatkov lokalno ( `LocalStorage` , [Lawnchair][1], itd.)

*   Objava podatkov z oddaljenim strežnikom

 [1]: http://brianleroux.github.com/lawnchair/

**Opomba**: fotografija konverzija na novejše naprave, je zelo dobra. Fotografije, izbrane iz galerije naprave ne downscaled nižje kakovosti, tudi če je `quality` je naveden parameter. Da bi se izognili skupne težave s spominom, `Camera.destinationType` za `FILE_URI` namesto`DATA_URL`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Android Quirks

Android uporablja nameni za začetek dejavnosti kamero na napravo za zajem slike, in na telefonih z malo pomnilnika, lahko ubil Cordova dejavnost. V tem primeru lahko slika ne prikaže, ko cordova dejavnost je obnovljena.

## iOS Quirks

Vključno z JavaScript `alert()` bodisi povratni klic funkcije lahko povzroči težave. Zaviti opozorilo v a `setTimeout()` iOS image izbirnik ali popover popolnoma zapreti, preden prikaže opozorilo:

    setTimeout(function() {
        // do your thing here!
    }, 0);
    

## Windows Phone 7 Quirks

Klicanje rojsten kamero uporabo, medtem ko je naprava priključena preko Zune ne deluje, in sproži callback napake.

## Tizen Quirks

Tizen podpira le a `destinationType` od `Camera.DestinationType.FILE_URI` in `sourceType` od`Camera.PictureSourceType.PHOTOLIBRARY`.

## Quick primer

Fotografirajte in pridobiti kot base64 kodirane sliko:

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
    

Fotografirajte in pridobiti mesto datoteke slike:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Celoten primer

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
          // The in-line CSS rules are used to resize the image
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
          // The in-line CSS rules are used to resize the image
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