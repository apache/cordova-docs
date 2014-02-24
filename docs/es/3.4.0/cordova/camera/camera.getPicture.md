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

Toma una foto con la cámara, u obtiene una foto de la galería de imágenes del dispositivo. La imagen es retornada como un objeto `String` codificada en base64 o como la URI de esta. El método devuelve un objeto `CameraPopoverHandle` que puede usarse para reposicionar el diálogo de selección de archivo.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );
    

## Descripción

La función `camera.getPicture` abre la aplicación predeterminada de cámara del dispositivo que permite a los usuarios tomar fotografías. Este comportamiento es el predeterminado, cuando `Camera.sourceType` es igual a `Camera.PictureSourceType.CAMERA`. Una vez que el usuario toma la foto, la aplicación de la cámara se cierra y se restablece la aplicación.

Si `Camera.sourceType` es `Camera.PictureSourceType.PHOTOLIBRARY` o `Camera.PictureSourceType.SAVEDPHOTOALBUM`, entonces aperece un cuadro de diálogo que permite a los usuarios seleccionar una imagen existente. La función `camera.getPicture` devuelve un objeto `CameraPopoverHandle`, que puede utilizarse para reposicionar el diálogo de selección de imagen, por ejemplo, cuando cambia la orientación del dispositivo.

El valor devuelto es enviado a la función `cameraSuccess`, en uno de los formatos siguientes, dependiendo de `cameraOptions` especificadas:

*   A `String` que contiene la imagen codificada en base64.

*   A `String` que representa la ubicación del archivo de imagen de almacenamiento local (por defecto).

Puedes hacer lo que quieras con la imagen codificada o URI, por ejemplo:

*   Utilidad de la imagen en un `<img>` etiqueta, como en el ejemplo siguiente

*   Guardar los datos localmente ( `LocalStorage` , [Lawnchair][1], etc..)

*   Enviar los datos a un servidor remoto

 [1]: http://brianleroux.github.com/lawnchair/

**NOTA:** La resolución de la foto en dispositivos nuevos es bastante buena. Fotos seleccionadas de la Galería del dispositivo no son degradadas a una calidad más baja, incluso si se especifica un parámetro de `quality`. Para evitar problemas comunes de memoria, establezca `Camera.destinationType` como `FILE_URI` en lugar de `DATA_URL`.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superior)
*   iOS
*   Tizen
*   Windows Phone 7 y 8
*   Windows 8

## Peculiaridades de Android

Android utiliza los intents para iniciar la actividad de la cámara del dispositivo para capturar imágenes y en teléfonos con poca memoria, la actividad de Cordova puede ser terminada. En este escenario, la imagen puede que no aparezca cuando se restaura la actividad de cordova.

## Peculiaridades de iOS

Incluyendo un JavaScript `alert()` en cualquiera de las funciones de devolución de llamada puede causar problemas. Envolver la alerta dentro un `setTimeout()` para permitir el iOS image picker o popover cerrar completamente antes de Mostrar la alerta:

    setTimeout(function() {
        // do your thing here!
    }, 0);
    

## Peculiaridades de Windows Phone 7

Invocando la aplicación de cámara nativa mientras el dispositivo está conectado via Zune no funciona y desencadena un callback de error.

## Peculiaridades de Tizen

Tizen sólo admite un `destinationType` de `Camera.DestinationType.FILE_URI` y un `sourceType` de `Camera.PictureSourceType.PHOTOLIBRARY`.

## Ejemplo rápido

Tomar una foto y recuperarlo como una imagen codificada en base64:

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
    

Tomar una foto y recuperar la ubicación del archivo de la imagen:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.FILE_URI });
    
    function onSuccess(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
    }
    
    function onFail(message) {
        alert('Failed because: ' + message);
    }
    

## Ejemplo completo

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