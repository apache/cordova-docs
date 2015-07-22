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

# LocalFileSystem

Este objeto proporciona una manera de obtener sistemas de archivos root.

## Métodos

*   **requestFileSystem**: pide un sistema de archivos. *(Función)*

*   **resolveLocalFileSystemURI**: recuperar un `DirectoryEntry` o `FileEntry` usando URI local. *(Función)*

## Constantes

*   `LocalFileSystem.PERSISTENT`: Utilizado para el almacenamiento de información que no debe ser retirada por el agente de usuario sin el permiso de aplicación o usuario.

*   `LocalFileSystem.TEMPORARY`: Utilizado para el almacenamiento sin ninguna garantía de persistencia.

## Detalles

La `LocalFileSystem` métodos del objeto se definen en el `window` objeto.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## Ejemplo de archivo de sistema rápida de solicitar

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Resolver el sistema de archivos Local URI ejemplo rápido

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> Solicite un sistema de archivos para almacenar datos de la aplicación.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **window**: referencia al objeto ventana global
*   **type**: local tipo de sistema de archivo, vea constantes del LocalFileSystem
*   **size**: indica cuánto espacio de almacenamiento, en bytes, la aplicación espera que necesitas
*   **successCallback**: se invoca con un objeto de sistema de archivos
*   **errorCallback**: invoca si produce error de sistema de archivos de recuperación

## Ejemplo de archivo de sistema rápida de solicitar

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);