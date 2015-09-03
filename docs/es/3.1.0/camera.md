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


# Cámara

> El objeto de la `cámara` proporciona acceso a la aplicación de cámara del dispositivo por defecto.

**Nota de privacidad importante:** Recopilación y uso de imágenes desde cámara de un dispositivo plantea cuestiones de privacidad importante. Política de privacidad de su aplicación debe discutir cómo la aplicación utiliza la cámara y si se comparten las imágenes grabadas con cualquiera de las partes. Además, si el uso de la aplicación de la cámara no es aparente en la interfaz de usuario, debe proporcionar un aviso de just-in-time antes de su aplicación accediendo a la cámara (si el sistema operativo del dispositivo ya no hacerlo). Que el aviso debe proporcionar la misma información mencionada, además de obtener un permiso del usuario (por ejemplo, presentando opciones para **Aceptar** y **No gracias**). Para obtener más información, por favor consulte a la guía de privacidad.

## Métodos

*   camera.getPicture
*   Camera.Cleanup

## Acceso a la función

A partir de la versión 3.0, Cordova implementa nivel de dispositivo APIs como *plugins*. Uso de la CLI `plugin` comando, que se describe en la interfaz de línea de comandos, para añadir o eliminar esta característica para un proyecto:

        $ cordova plugin add org.apache.cordova.camera
        $ cordova plugin ls
        [ 'org.apache.cordova.camera' ]
        $ cordova plugin rm org.apache.cordova.camera
    

Estos comandos se aplican a todas las plataformas específicas, sino modificar las opciones de configuración específicas de la plataforma que se describen a continuación:

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
        

*   (en iOS`config.xml`)
    
        <feature name="Camera">
            <param name="ios-package" value="CDVCamera" />
        </feature>
        

*   Windows Phone (en`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_ISV_CAMERA" />
            <Capability Name="ID_HW_FRONTCAMERA" />
        </Capabilities>
        
    
    Referencia: [manifiesto de aplicación para Windows Phone][1]

*   Tizen (en`config.xml`)
    
        <feature name="http://tizen.org/api/application" required="true"/>
        <feature name="http://tizen.org/api/application.launch" required="true"/>
        
    
    Referencia: [manifiesto de aplicación para aplicación Web Tizen][2]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx
 [2]: https://developer.tizen.org/help/topic/org.tizen.help.gs/Creating%20a%20Project.html?path=0_1_1_3#8814682_CreatingaProject-EditingconfigxmlFeatures

Algunas plataformas que soportan esta característica sin necesidad de ninguna configuración especial. Consulte *Soporte de la plataforma* en la sección de Resumen.


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


# cameraSuccess

onSuccess función callback que proporciona los datos de imagen.

    function(imageData) {
        // Do something with the image
    }
    

## Parámetros

*   **imageData**: codificación en Base64 de los datos de imagen, *o* el archivo de imagen URI, dependiendo de `cameraOptions` en vigor. *(String)*

## Ejemplo

    // Show image
    //
    function cameraCallback(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }


# cameraError

onError función callback que proporciona un mensaje de error.

    function(message) {
        // Show a helpful message
    }
    

## Parámetros

*   **mensaje**: el mensaje es proporcionado por código nativo del dispositivo. *(String)*


# cameraOptions

Parámetros opcionales para personalizar la configuración de la cámara.

    {calidad: destinationType 75,: Camera.DestinationType.DATA_URL, sourceType: Camera.PictureSourceType.CAMERA, allowEdit: true, encodingType: Camera.EncodingType.JPEG, targetWidth: 100, targetHeight: 100, popoverOptions: CameraPopoverOptions, saveToPhotoAlbum: falsa};
    

## Opciones

*   **calidad**: calidad de la imagen guardada, expresada en un rango de 0-100, donde 100 es típicamente resolución sin pérdida de compresión del archivo. *(Número)* (Tenga en cuenta que no está disponible información sobre resolución de la cámara).

*   **destinationType**: Choose the format of the return value. Defined in `navigator.camera.DestinationType` *(Number)*
    
        Camera.DestinationType = {DATA_URL: 0, / / devolver la imagen como cadena codificada en base64 FILE_URI: 1, / / retorno de archivo de imagen URI NATIVE_URI: 2 / / retorno de la imagen nativa URI (por ejemplo, biblioteca de activos: / / on iOS o contenido: / / on Android)};
        

*   **sourceType**: Set the source of the picture. Defined in `navigator.camera.PictureSourceType` *(Number)*
    
        Camera.PictureSourceType = {Fototeca: 0, cámara: 1, SAVEDPHOTOALBUM: 2};
        

*   **allowEdit**: permite edición sencilla de imagen antes de la selección. *(Booleano)*

*   **encodingType**: Choose the returned image file's encoding. Defined in `navigator.camera.EncodingType` *(Number)*
    
        Camera.EncodingType = {JPEG: 0 / / retorno JPEG imagen PNG codificada: 1 / / retorno PNG imagen codificada};
        

*   **targetWidth**: ancho en píxeles a escala de la imagen. Debe usarse con **targetHeight**. Proporción se mantiene constante. *(Número)*

*   **targetHeight**: altura en píxeles a escala de la imagen. Debe usarse con **targetWidth**. Proporción se mantiene constante. *(Número)*

*   **mediaType**: definir el tipo de medios para seleccionar. Sólo funciona cuando `PictureSourceType` es `PHOTOLIBRARY` o `SAVEDPHOTOALBUM` . Definido en `nagivator.camera.MediaType` *(número)* 
    
        Camera.MediaType = {imagen: 0, / / permiten la selección de imágenes fijas solamente. DE FORMA PREDETERMINADA. Devolverá el formato especificado mediante DestinationType VIDEO: 1, / / permiten la selección de vídeo sólo, siempre será devolver FILE_URI las ALLMEDIA: 2 / / permitir la selección de todos los tipos de medios de comunicación
        
    
    };

*   **correctOrientation**: rotar la imagen para corregir la orientación del dispositivo durante la captura. *(Booleano)*

*   **saveToPhotoAlbum**: guardar la imagen en el álbum de fotos en el dispositivo después de su captura. *(Booleano)*

*   **popoverOptions**: opciones sólo iOS que especifican popover ubicación en iPad. Definido en`CameraPopoverOptions`.

*   **cameraDirection**: Choose the camera to use (front- or back-facing). Defined in `navigator.camera.Direction` *(Number)*
    
        Camera.Direction = {atrás: 0, / / usar la cámara trasera frente: 1 / / usar la cámara frontal};
        

## Rarezas Android

*   Cualquier valor de `cameraDirection` da como resultado una foto orientada hacia atrás.

*   Ignora el `allowEdit` parámetro.

*   `Camera.PictureSourceType.PHOTOLIBRARY` y `Camera.PictureSourceType.SAVEDPHOTOALBUM` Mostrar el mismo álbum de fotos.

## Rarezas de blackBerry

*   Ignora el `quality` parámetro.

*   Ignora el `sourceType` parámetro.

*   Ignora el `allowEdit` parámetro.

*   Aplicación debe tener permisos de inyección clave para cerrar la aplicación nativa de cámara después de que el usuario ajusta la foto.

*   Utilizando tamaños de imagen grande puede resultar en la incapacidad para codificar imágenes en dispositivos más adelante-modelo (por ejemplo, Torch 9800) cámaras de alta resolución característica.

*   `Camera.MediaType`No se admite.

*   Ignora el `correctOrientation` parámetro.

*   Ignora el `cameraDirection` parámetro.

## iOS rarezas

*   Establecer `quality` por debajo de 50 para evitar errores de memoria en algunos dispositivos.

*   Cuando se utiliza `destinationType.FILE_URI` , fotos se guardan en el directorio temporal de la aplicación. Puedes borrar el contenido de este directorio utilizando el `navigator.fileMgr` APIs si el espacio de almacenamiento es un motivo de preocupación.

## Rarezas Tizen

*   opciones no compatibles

*   siempre devuelve un identificador URI de archivo

## Windows Phone 7 y 8 rarezas

*   Ignora el `allowEdit` parámetro.

*   Ignora el `correctOrientation` parámetro.

*   Ignora el `cameraDirection` parámetro.


# CameraPopoverOptions

Sólo iOS parámetros que especifican la dirección ancla elemento ubicación y la flecha de la popover al seleccionar imágenes de biblioteca o álbum de un iPad.

    {x: 0, y: 32, ancho: 320, altura: 480, arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: coordenadas de píxeles del elemento de la pantalla en la que anclar el popover x. *(Número)*

*   **y**: coordenada píxeles del elemento de la pantalla en la que anclar el popover. *(Número)*

*   **anchura**: anchura, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **altura**: alto, en píxeles, del elemento sobre el que anclar el popover pantalla. *(Número)*

*   **arrowDir**: dirección de la flecha en el popover debe apuntar. Definido en `Camera.PopoverArrowDirection` *(número)* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1 / / coincide con iOS UIPopoverArrowDirection constantes ARROW_DOWN: 2, ARROW_LEFT: 4, ARROW_RIGHT: 8, ARROW_ANY: 15};
        

Tenga en cuenta que puede cambiar el tamaño de la popover para ajustar la dirección de la flecha y orientación de la pantalla. Asegúrese de que para tener en cuenta los cambios de orientación cuando se especifica la ubicación del elemento de anclaje.

## Ejemplo rápido

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

Un identificador para el cuadro de diálogo popover creado por`camera.getPicture`.

## Métodos

*   **setPosition**: establecer la posición de la popover.

## Plataformas soportadas

*   iOS

## setPosition

Establecer la posición de la popover.

**Parámetros:**

*   `cameraPopoverOptions`: el `CameraPopoverOptions` que especifican la nueva posición

## Ejemplo rápido

     var cameraPopoverOptions = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.setPosition(cameraPopoverOptions);
    

## Ejemplo completo

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
