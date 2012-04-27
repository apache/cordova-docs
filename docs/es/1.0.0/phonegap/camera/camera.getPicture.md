---
license: Licensed to the Apache Software Foundation (ASF) under one
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

camera.getPicture
=================

Toma una foto usando la cámara, o obtiene una foto del álbum del dispositivo. La imagen es retornada codificada en base64 como un objeto `String` o la URI de un fichero de imagen del álbum.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Descripción
-----------

La función `camera.getPicture` abre la aplicación por defecto de cámara para que el usuario tome una foto (en el caso de `Camera.sourceType = Camera.PictureSourceType.CAMERA`, por defecto). Una vez la foto es tomada, la aplicación de la cámara se cierra y tu aplicación vuelve al primer plano.

Si `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` o `Camera.PictureSourceType.SAVEDPHOTOALBUM`, entonces se muestra un dialogo para seleccionar una foto del álbum.

El valor que esta función retorna se le pasa a la función 'callback' `cameraSuccess`, en uno de los siguientes formatos, dependiendo de lo que especificastes en `cameraOptions`:

- Una `String` conteniendo la imagen codificada en Base64 (por defecto). 
- Una `String` representando la ruta de la imagen en el almacenamiento local.  

Puedes hacer lo que desees con la imagen codificada o la URI, por ejemplo:

- Mostrar la imagen en una etiqueta `<img>` _(Ver ejemplo mas abajo)_
- Guardarla localmente (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc)
- Enviar la imagen a un servidor remoto

Nota: La calidad de las imágenes cuando usamos los últimos dispositivos nuevos es demasiado buena. _Codificar estas imágenes en Base64 puede causar problemas de memoria en algunos de estos dispositivos (iPhone 4, BlackBerry Torch 9800)._ Antes que eso, es recomendable usar FILE_URI como 'Camera.destinationType'.

Plataformas Soportadas
----------------------

- Android
- Blackberry WebWorks (OS 5.0 y superior)
- iPhone

Ejemplo Rápido
--------------

Toma una foto y la retorna codificada en base64:

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
        var image = document.getElementById('miImagen');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Ocurrió un error: ' + message);
    }

Toma una foto y la retorna usando la ruta del fichero: 

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI }); 

    function onSuccess(imageURI) {
        var image = document.getElementById('miImagen');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Ocurrió un error: ' + message);
    }


Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Camera</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // Origen de la imagen
        var destinationType; // Formato del valor retornado
        
        // Espera a que PhoneGap conecte con el dispositivo.
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // PhoneGap esta listo para usarse!
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // Llamada cuando la foto se retorna sin problemas
        //
        function onPhotoDataSuccess(imageData) {
          // Descomenta esta linea para ver la imagen codificada en base64
          // console.log(imageData);
      
          // Obtiene el elemento HTML de la imagen
          //
          var smallImage = document.getElementById('smallImage');
      
          // Revela el elemento de la imagen
          //
          smallImage.style.display = 'block';
      
          // Muestra la foto capturada
          // Se usan reglas CSS para dimensionar la imagen
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // Llamada cuando la foto se retorna sin problemas
        //
        function onPhotoURISuccess(imageURI) {
          // Descomenta esta linea para ver la ruta URI al fichero de imagen 
          // console.log(imageURI);
      
          // Obtiene el elemento HTML de la imagen
          //
          var largeImage = document.getElementById('largeImage');
      
          // Revela el elemento de la imagen
          //
          largeImage.style.display = 'block';
      
          // Muestra la foto capturada
          // Se usan reglas CSS para dimensionar la imagen
          //
          largeImage.src = imageURI;
        }

        // Un botón llamara a esta función
        //
        function capturePhoto() {
          // Toma la imagen y la retorna como una string codificada en base64
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
        }

        // Un botón llamara a esta función
        //
        function capturePhotoEdit() {
          // Toma la imagen, permite editarla y la retorna como una string codificada en base64
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
        }
    
        // Un botón llamara a esta función
        //
        function getPhoto(source) {
          // Retorna la ruta del fichero de imagen desde el origen especificado
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // Llamado cuando algo malo ocurre
        // 
        function onFail(message) {
          alert('Ocurrió un error: ' + message);
        }

        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Capturar foto</button> <br>
        <button onclick="capturePhotoEdit();">Capturar foto editable</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">Desde la librería de imágenes</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">Desde el álbum de fotos</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>
