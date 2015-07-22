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

# FileWriter

Como objeto que le permite crear y escribir datos en un archivo.

## Propiedades

*   **readyState**: uno de los tres Estados posibles, ya sea `INIT` , `WRITING` , o`DONE`.

*   **nombre de archivo**: el nombre del archivo a ser escrito. *(DOMString)*

*   **longitud**: la longitud del archivo a ser escrito. *(largo)*

*   **posición**: la posición actual del puntero del archivo. *(largo)*

*   **error**: un objeto que contiene errores. *(FileError)*

*   **onwritestart**: cuando comienza la escritura. *(Función)*

*   **onwrite**: cuando la solicitud se ha completado con éxito. *(Función)*

*   **onabort**: cuando la escritura ha sido abortada. Por ejemplo, invocando el método abort(). *(Función)*

*   **OnError**: cuando la escritura ha fallado. *(Función)*

*   **onwriteend**: llamado cuando se haya completado la solicitud (ya sea en el éxito o el fracaso). *(Función)*

La siguiente propiedad *no* es compatible:

*   **OnProgress**: llamado al escribir el archivo, informe de progreso en términos de `progress.loaded` / `progress.total` . *(Función)*

## Métodos

*   **anular**: anula el archivo de la escritura.

*   **Buscar**: mueve el puntero del archivo en el byte especificado.

*   **truncar**: acorta el archivo a la longitud especificada.

*   **escribir**: escribe los datos en el archivo.

## Detalles

El `FileWriter` objeto ofrece una manera de escribir archivos codificado en UTF-8 en el sistema de archivos del dispositivo. Aplicaciones responden a `writestart` , `progress` , `write` , `writeend` , `error` , y `abort` eventos.

Cada `FileWriter` corresponde a un solo archivo, a la que se pueden escribir datos muchas veces. El `FileWriter` mantiene el archivo `position` y `length` atributos, que permiten la aplicación para `seek` y `write` en el archivo. De forma predeterminada, el `FileWriter` escribe al principio del archivo, sobrescribiendo los datos existentes. Conjunto opcional `append` booleana a `true` en el `FileWriter` del constructor para escribir en el final del archivo.

Datos de texto es apoyados por todas las plataformas que se enumeran a continuación. Texto es codificado como UTF-8 antes de que se escriben en el sistema de archivos. Algunas plataformas soportan datos binarios, que pueden pasar en un ArrayBuffer o un Blob.

## Plataformas soportadas

Texto y soporte binario:

*   Android
*   iOS

Soporte de sólo texto:

*   BlackBerry WebWorks (OS 5.0 y superiores)
*   Windows Phone 7 y 8
*   Windows 8

## Buscar ejemplo rápido

    function win(writer) {
        // fast forwards file pointer to end of file
        writer.seek(writer.length);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Truncar ejemplo rápido

    function win(writer) {
        writer.truncate(10);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Escribir rápido ejemplo

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Binario escribir ejemplo rápido

    function win(writer) {
        var data = new ArrayBuffer(5),
            dataView = new Int8Array(data);
        for (i=0; i < 5; i++) {
            dataView[i] = i;
        }
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write(data);
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Anexar ejemplo rápido

    function win(writer) {
        writer.onwrite = function(evt) {
        console.log("write success");
    };
    writer.seek(writer.length);
        writer.write("appended text");
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Abortar ejemplo rápido

    function win(writer) {
        writer.onwrite = function(evt) {
            console.log("write success");
        };
        writer.write("some sample text");
        writer.abort();
    };
    
    var fail = function(evt) {
        console.log(error.code);
    };
    
    entry.createWriter(win, fail);
    

## Ejemplo completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>FileWriter Example</title>
    
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
            fileSystem.root.getFile("readme.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
    
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            writer.onwriteend = function(evt) {
                console.log("contents of file now 'some sample text'");
                writer.truncate(11);
                writer.onwriteend = function(evt) {
                    console.log("contents of file now 'some sample'");
                    writer.seek(4);
                    writer.write(" different text");
                    writer.onwriteend = function(evt){
                        console.log("contents of file now 'some different text'");
                    }
                };
            };
            writer.write("some sample text");
        }
    
        function fail(error) {
            console.log(error.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Write File</p>
      </body>
    </html>