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

# File Transfer

El `FileTransfer` objeto permite cargar o descargar archivos desde y hacia un servidor.

## Propiedades

*   **OnProgress**: llama con un `ProgressEvent` cuando se transfiere un nuevo paquete de datos. *(Función)*

## Métodos

*   **cargar**: envía un archivo a un servidor.

*   **Descargar**: descarga un archivo del servidor.

*   **abortar**: aborta una transferencia en curso.

## Detalles

El `FileTransfer` objeto proporciona una manera para subir archivos a un servidor remoto mediante peticiones HTTP POST multi-partes. Se admiten los protocolos HTTP y HTTPS. Los parámetros opcionales pueden ser especificados por pasar un `FileUploadOptions` contra el `upload()` método. En subida exitosa, un `FileUploadResult` objeto se pasa a la devolución de llamada de éxito. Si se produce un error, un `FileTransferError` objeto se pasa el callback de error. También es posible (en iOS y Android) Descargar un archivo desde un servidor remoto y guardarla en el dispositivo.

## Plataformas soportadas

*   Android
*   BlackBerry WebWorks (OS 5.0 y superiores)
*   iOS
*   Windows Phone 7 y 8
*   Windows 8

## subir

**Parámetros:**

*   **ruta**: ruta de acceso completa del archivo en el dispositivo.

*   **servidor**: dirección URL del servidor para recibir el archivo, como codificada por`encodeURI()`.

*   **successCallback**: una devolución de llamada que se pasa un `Metadata` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error recuperar la `Metadata` . Invocado con un `FileTransferError` objeto. *(Función)*

*   **Opciones**: parámetros opcionales como nombre de archivo y el tipo MIME.

*   **trustAllHosts**: parámetro opcional, por defecto es `false` . Si establece en `true` , acepta todos los certificados de seguridad. Esto es útil ya que Android rechaza certificados autofirmados seguridad. No se recomienda para uso productivo. Compatible con iOS y Android. *(boolean)*

**Ejemplo rápido**

    // !! Assumes variable fileURI contains a valid URI to a text file on the device
    
    var win = function (r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    var fail = function (error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURI.substr(fileURI.lastIndexOf('/') + 1);
    options.mimeType = "text/plain";
    
    var params = {};
    params.value1 = "test";
    params.value2 = "param";
    
    options.params = params;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
    

**Ejemplo completo**

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>File Transfer Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
            // Wait for device API libraries to load
            //
            document.addEventListener("deviceready", onDeviceReady, false);
    
            // device APIs are available
            //
            function onDeviceReady() {
                // Retrieve image file location from specified source
                navigator.camera.getPicture(
                    uploadPhoto,
                    function(message) { alert('get picture failed'); },
                    {
                        quality         : 50,
                        destinationType : navigator.camera.DestinationType.FILE_URI,
                        sourceType      : navigator.camera.PictureSourceType.PHOTOLIBRARY
                    }
                );
            }
    
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
    
                var params = {};
                params.value1 = "test";
                params.value2 = "param";
    
                options.params = params;
    
                var ft = new FileTransfer();
                ft.upload(imageURI, encodeURI("http://some.server.com/upload.php"), win, fail, options);
            }
    
            function win(r) {
                console.log("Code = " + r.responseCode);
                console.log("Response = " + r.response);
                console.log("Sent = " + r.bytesSent);
            }
    
            function fail(error) {
                alert("An error has occurred: Code = " + error.code);
                console.log("upload error source " + error.source);
                console.log("upload error target " + error.target);
            }
    
            </script>
    </head>
    <body>
        <h1>Example</h1>
        <p>Upload File</p>
    </body>
    </html>
    

**Ajuste Upload cabeceras**

Compatible con iOS y Android

    function win(r) {
        console.log("Code = " + r.responseCode);
        console.log("Response = " + r.response);
        console.log("Sent = " + r.bytesSent);
    }
    
    function fail(error) {
        alert("An error has occurred: Code = " + error.code);
        console.log("upload error source " + error.source);
        console.log("upload error target " + error.target);
    }
    
    var uri = encodeURI("http://some.server.com/upload.php");
    
    var options = new FileUploadOptions();
    options.fileKey="file";
    options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
    options.mimeType="text/plain";
    
    var headers={'headerParam':'headerValue'};
    
    options.headers = headers;
    
    var ft = new FileTransfer();
    ft.upload(fileURI, uri, win, fail, options);
    

**Rarezas Android**

Establezca el `chunkedMode` opción de `false` para evitar problemas de subir a un servidor Nginx.

## descargar

**Parámetros:**

*   **fuente**: dirección URL del servidor para descargar el archivo, como codificada por`encodeURI()`.

*   **objetivo**: ruta de acceso completa del archivo en el dispositivo.

*   **successCallback**: una devolución de llamada que se pasa un `FileEntry` objeto. *(Función)*

*   **errorCallback**: una devolución de llamada que se ejecuta si se produce un error al recuperar los `Metadata` . Invocado con un `FileTransferError` objeto. *(Función)*

*   **trustAllHosts**: parámetro opcional, por defecto es `false` . Si a `true` entonces aceptará todos los certificados de seguridad. Esto es útil como Android rechaza los certificados de seguridad firmado del uno mismo. No se recomienda para uso productivo. Compatible con iOS y Android. *(boolean)*

*   **Opciones**: parámetros opcionales, actualmente sólo soporta cabeceras (como autorización (autenticación básica), etc.).

**Ejemplo rápido**

    // !! Asume filePath es una ruta válida en el dispositivo var fileTransfer = new FileTransfer();
    var uri = encodeURI ("http://some.server.com/download.php");
    
    fileTransfer.download (uri, filePath, function(entry) {console.log ("descarga completa:" + entry.fullPath);
        }, function(error) {console.log ("error al descargar el origen" + error.source);
            Console.log ("descargar error objetivo" + error.target);
            Console.log ("código de error de carga" + error.code);
        }, falso, {encabezados: {"Autorización": "Basic dGVzdHVzZXJuYW1lOnRlc3RwYXNzd29yZA =="}});
    

## abortar

Aborta a una transferencia en curso. El callback onerror se pasa un objeto FileTransferError que tiene un código de error de FileTransferError.ABORT_ERR.

**Plataformas soportadas**

*   Android
*   iOS

**Ejemplo rápido**

    // !! Asume fileURI variable contiene un URI válido para un archivo de texto en la victoria de dispositivo var function(r) = {console.log ("no se debe llamar.");}
    
    var fallar = function(error) {/ / error.code == FileTransferError.ABORT_ERR alert ("ha ocurrido un error: código =" + error.code);
        Console.log ("error al cargar el origen" + error.source);
        Console.log ("upload error objetivo" + error.target);}
    
    var opciones = new FileUploadOptions();
    options.fileKey="file";
    options.fileName="myphoto.jpg";
    options.mimeType="image/jpeg";
    
    var ft = new FileTransfer();
    Ft.upload (fileURI, encodeURI ("http://some.server.com/upload.php"), win, fail, opciones);
    Ft.Abort();
    

## OnProgress

Llama con un ProgressEvent cuando se transfiere un nuevo paquete de datos.

**Plataformas soportadas**

*   Android
*   iOS

**Ejemplo**

    fileTransfer.onprogress = function(progressEvent) {
        if (progressEvent.lengthComputable) {
          loadingStatus.setPercentage(progressEvent.loaded / progressEvent.total);
        } else {
          loadingStatus.increment();
        }
    };
    fileTransfer.download(...); // or fileTransfer.upload(...);
    

**Rarezas** - en ambos Android / iOS, lengthComputable es `false` de descargas que utilizan codificación gzip.