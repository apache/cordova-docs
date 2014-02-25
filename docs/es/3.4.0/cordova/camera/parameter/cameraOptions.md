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