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

# Contacts.Create

Restituisce un nuovo oggetto di contatto.

    var contact = navigator.contacts.create(properties);
    

## Descrizione

Il `contacts.create` metodo sincrono e restituisce un nuovo `Contact` oggetto.

Questo metodo non mantiene l'oggetto contatto nel database contatti dispositivo, per cui è necessario richiamare il `Contact.save` metodo.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8

## Esempio rapido

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var myContact = navigator.contacts.create({"displayName": "Test User"});
            myContact.note = "This contact has a note.";
            console.log("The contact, " + myContact.displayName + ", note: " + myContact.note);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Create Contact</p>
      </body>
    </html>