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

cameraOptions
=============

Argumento opcional para personalizar la configuración de la cámara.

    { quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100 };

Opciones
--------

- __quality:__ Calidad de la imagen. Rango [0, 100]. (`Number`)

- __destinationType:__ Elige el formato del valor retornado.  Definido en navigator.camera.DestinationType (`Number`)
        
            Camera.DestinationType = {
                DATA_URL : 0,                // Retorna la imagen como una string codificada en base64
                FILE_URI : 1                 // Retorna la URI del fichero de imagen
            };

- __sourceType:__ Elige el origen de la imagen. Definido en nagivator.camera.PictureSourceType (`Number`)
     
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ Permitir un simple editado antes de la selección. (`Boolean`)
  
- __EncodingType:__ Elige el formato de codificación del fichero de imagen retornado. Definido en navigator.camera.EncodingType (`Number`)
        
            Camera.EncodingType = {
                JPEG : 0,               // Retornar una imagen codificada en JPEG
                PNG : 1                 // Retornar una imagen codificada en PNG
            };

- __targetWidth:__ Ancho en píxeles para dimensionar la imagen. Debe ser usada con targetHeight. Se respetara la proporción de la imagen. (`Number`)
- __targetHeight:__ Altura en píxeles para dimensionar la imagen. Debe ser usada con targetWidth. Se respetara la proporción de la imagen. (`Number`)
  
Peculiaridades Android
----------------------

- Ignora el argumento `allowEdit`.
- Camera.PictureSourceType.PHOTOLIBRARY y Camera.PictureSourceType.SAVEDPHOTOALBUM muestran siempre el mismo álbum de fotos.
- El argumento Camera.EncodingType no esta soportado.

Peculiaridades BlackBerry
-------------------------

- Ignora el argumento `quality`.
- Ignora el argumento `sourceType`.
- Ignora el argumento `allowEdit`.
- La aplicación debe tener permisos de "inyección de teclas" para poder cerrar la aplicación nativa de la cámara después de que sea tomada.
- Si usas imágenes grandes puedes tener problemas codificando la imagen, esto ocurre en los últimos dispositivos con cámara de alta resolución (Ej: Torch 9800).

Peculiaridades Palm
--------------------

- Ignora el argumento `quality`.
- Ignora el argumento `sourceType`.
- Ignora el argumento `allowEdit`.

Peculiaridades iPhone
---------------------

- La opción `quality` debería ser menor de 50 para evitar errores de memoria en algunos dispositivos.
- Cuando se usa la opción `destinationType.FILE_URI`, las fotos se guardan en el directorio temporal de aplicaciones.
- Todo el contenido del directorio temporal de aplicaciones se eliminara automáticamente cuando la aplicación termine. También puedes eliminar el contenido de este directorio usando la API `navigator.fileMgr` si te preocupa el espacio de almacenamiento.

           
