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

contacts.create
===============

Retorna un objeto `Contact` nuevo.

    var contact = navigator.contacts.create(properties);

Descripción
-----------

contacts.create es una función síncrona que retornara un objeto `Contact` nuevo.

Este método no hace el contacto persistente en la base de datos de contactos. Para hacerlo persistente, llama al método `Contact.save`.

Plataformas Soportadas
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 y superior)
- iOS

Ejemplo Rápido
-------------

    var myContact = navigator.contacts.create({"displayName": "Usuario Prueba"});

Ejemplo Completo
----------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Ejemplo de Contacts</title>

        <script type="text/javascript" charset="utf-8" src="phonegap-1.0.0.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Espere a que PhoneGap se inicie
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap esta listo
        //
        function onDeviceReady() {
			var myContact = navigator.contacts.create({"displayName": "Usuario Prueba"});
			myContact.gender = "male";
			console.log("El contacto, " + myContact.displayName + ", es de genero " + myContact.gender);
        }
    

        </script>
      </head>
      <body>
        <h1>Ejemplo</h1>
        <p>Creación de Contactos</p>
      </body>
    </html>
