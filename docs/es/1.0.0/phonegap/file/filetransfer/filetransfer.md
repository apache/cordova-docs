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

FileTransfer
==========

FileTransfer es un objeto que permite subir archivos a un servidor.

Atributos
---------

N/A

Métodos
-------

- __upload__: envía ficheros a un servidor. 

Detalles
-------

El objeto `FileTransfer` proporciona una forma de subir archivos a un servidor remoto usando una petición HTTP POST de varias partes. Están soportados los protocolos HTTP y HTTPS. Se pueden especificar parámetros opcionales pasándole al método `FileTranfer.upload` un objeto `FileUploadOptions`. Tras una subida satisfactoria, se llamara a la función 'success' y se le pasara como argumento el objeto `FileUploadResult`. Si ocurre un error, se llamara a la función 'error', y se le pasara un objeto `FileTransferError`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
--------------
	
	// !! Se asume que la variable fileURI contiene un URI válido a un archivo de texto en el dispositivo
	
  	var win = function(r) {
        console.log("Código = " + r.responseCode);
        console.log("Respuesta = " + r.response);
        console.log("Enviado = " + r.bytesSent);
	}
	
    var fail = function(error) {
        alert("Ocurrió un error: Código = " = error.code);
    }
	
	var options = new FileUploadOptions();
	options.fileKey="file";
	options.fileName=fileURI.substr(fileURI.lastIndexOf('/')+1);
	options.mimeType="text/plain";

    var params = new Object();
	params.value1 = "test";
	params.value2 = "param";
		
	options.params = params;
	
	var ft = new FileTransfer();
    ft.upload(fileURI, "http://ejemplo.servidor.com/upload.php", win, fail, options);
    
Ejemplo Completo
----------------

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    <head>
        <title>Ejemplo de FileTransfer</title>
    
        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">
            
            // Espera a que PhoneGap se inicie
            //
            document.addEventListener("deviceready", onDeviceReady, false);
            
            // PhoneGap esta lista
            //
            function onDeviceReady() {
                
                // Retorna la ruta hacia el archivo de imagen
                navigator.camera.getPicture(uploadPhoto,
                                            function(message) { alert('Fallo obteniendo imagen'); },
                                            { quality: 50, 
                                            destinationType: navigator.camera.DestinationType.FILE_URI,
                                            sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY }
                                            );
                
            }
            
            function uploadPhoto(imageURI) {
                var options = new FileUploadOptions();
                options.fileKey="file";
                options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
                options.mimeType="image/jpeg";
                
                var params = new Object();
                params.value1 = "test";
                params.value2 = "param";
                
                options.params = params;
                
                var ft = new FileTransfer();
                ft.upload(imageURI, "http://ejemplo.servidor.com/upload.php", win, fail, options);
            }
            
            function win(r) {
                console.log("Código = " + r.responseCode);
                console.log("Respuesta = " + r.response);
                console.log("Enviados = " + r.bytesSent);
            }
            
            function fail(error) {
                alert("Ocurrió un error: Código = " = error.code);
            }
            
            </script>
    </head>
    <body>
        <h1>Ejemplo</h1>
        <p>Subida de Fichero</p>
    </body>
    </html>

