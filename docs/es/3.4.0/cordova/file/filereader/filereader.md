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

# FileReader

El `FileReader` permite el acceso básico a un archivo.

## Propiedades

*   **readyState**: uno del lector de tres Estados posibles, ya sea `EMPTY` , `LOADING` o`DONE`.

*   **resultado**: el contenido del archivo que ha leído. *(DOMString)*

*   **error**: un objeto que contiene errores. *(FileError)*

*   **onloadstart**: cuando comienza la lectura. *(Función)*

*   **OnLoad**: cuando la lectura ha completado con éxito. *(Función)*

*   **onabort**: cuando la lectura ha sido abortada. Por ejemplo, invocando el `abort()` método. *(Función)*

*   **OnError**: cuando la lectura ha fallado. *(Función)*

*   **onloadend**: llamado cuando se haya completado la solicitud (ya sea en el éxito o el fracaso). *(Función)*

**Nota:** No se admite la propiedad siguiente:

*   **OnProgress**: llamado al leer el archivo, informe de progreso en términos de `progress.loaded` / `progress.total` . *(Función)*

## Métodos

*   **abortar**: interrupciones leer el archivo.

*   **readAsDataURL**: leer archivos y datos de retorno como un enlace de datos codificados en base64.

*   **readAsText**: fichero de texto que Lee.

*   **readAsBinaryString**: Lee el archivo como binarios y devuelve una cadena binaria.

*   **readAsArrayBuffer**: Lee del archivo como una`ArrayBuffer`.

## Detalles

El `FileReader` objeto ofrece una manera de leer los archivos de sistema de archivos del dispositivo. Pueden leer archivos de texto o como una cadena de datos codificados en base64. Detectores de eventos reciben el `loadstart` , `progress` , `load` , `loadend` , `error` , y `abort` eventos.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## readAsDataURL

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsDataURL(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsText

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

*   **codificación**: la codificación a utilizar para codificar el contenido del archivo. Valor por defecto es UTF8.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## abortar

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function(evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsText(file);
        reader.abort();
    };
    
    function fail(error) {
        console.log(error.code);
    }
    
    entry.file(win, fail);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileReader Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        }
    
        function gotFS(fileSystem) {
            fileSystem.root.getFile("readme.txt", null, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.file(gotFile, fail);
        }
    
        function gotFile(file){
            readDataUrl(file);
            readAsText(file);
        }
    
        function readDataUrl(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as data URL");
                console.log(evt.target.result);
            };
            reader.readAsDataURL(file);
        }
    
        function readAsText(file) {
            var reader = new FileReader();
            reader.onloadend = function(evt) {
                console.log("Read as text");
                console.log(evt.target.result);
            };
            reader.readAsText(file);
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Read File</p>
      </body>
    </html>
    

## iOS rarezas

*   No se admite el parámetro de **codificación** y codificación UTF8 siempre está en efecto.

## readAsBinaryString

Actualmente apoyado sólo en iOS y Android.

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(evt.target.result);
        };
        reader.readAsBinaryString(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);
    

## readAsArrayBuffer

Actualmente apoyado sólo en iOS y Android.

**Parámetros:**

*   **archivo**: el objeto de archivo a leer.

## Ejemplo rápido

    function win(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            console.log("read success");
            console.log(new Uint8Array(evt.target.result));
        };
        reader.readAsArrayBuffer(file);
    };
    
    var fail = function (error) {
        console.log(error.code);
    };
    
    entry.file(win, fail);