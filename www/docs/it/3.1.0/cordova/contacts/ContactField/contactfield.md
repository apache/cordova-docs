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

# ContactField

Supporta i campi generici in un `Contact` oggetto. Alcune proprietà archiviati come `ContactField` oggetti includono gli indirizzi email, numeri di telefono e URL.

## Proprietà

*   **tipo**: una stringa che indica il tipo di campo è, *casa* ad esempio. *(DOMString)*

*   **valore**: il valore del campo, ad esempio un telefono numero o indirizzo e-mail. *(DOMString)*

*   **pref**: impostare su `true` se questo `ContactField` contiene il valore preferito dell'utente. *(booleano)*

## Dettagli

Il `ContactField` oggetto è un componente riutilizzabile che rappresenta Contatta campi genericamente. Ogni `ContactField` oggetto contiene un `value` , `type` , e `pref` proprietà. A `Contact` oggetto memorizza diverse proprietà in `ContactField[]` matrici, come indirizzi di e-mail e numeri di telefono.

Nella maggior parte dei casi, non esistono valori pre-determinati per un `ContactField` **tipo** attributo oggetto. Ad esempio, un numero di telefono può specificare valori di **tipo** di *casa*, *lavoro*, *mobile*, *iPhone*o qualsiasi altro valore che è supportato dal database dei contatti su una piattaforma particolare dispositivo. Tuttavia, per la `Contact` **foto** campo, il campo **tipo** indica il formato dell'immagine restituita: **url** quando il **valore** di attributo contiene un URL per l'immagine fotografica, o *base64* , quando il **valore** contiene una stringa con codifica base64 immagine. 

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

        // create a new contact
        var contact = navigator.contacts.create();
    
        // store contact phone numbers in ContactField[]
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
        phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
        phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
        contact.phoneNumbers = phoneNumbers;
    
        // save the contact
        contact.save();
    

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
            // create a new contact
            var contact = navigator.contacts.create();
    
            // store contact phone numbers in ContactField[]
            var phoneNumbers = [];
            phoneNumbers[0] = new ContactField('work', '212-555-1234', false);
            phoneNumbers[1] = new ContactField('mobile', '917-555-5432', true); // preferred number
            phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
            contact.phoneNumbers = phoneNumbers;
    
            // save the contact
            contact.save();
    
            // search contacts, returning display name and phone numbers
            var options = new ContactFindOptions();
            options.filter = "";
            filter = ["displayName", "phoneNumbers"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                // display phone numbers
                for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                    alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                          "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                          "Preferred: " + contacts[i].phoneNumbers[j].pref);
                }
            }
        };
    
        // onError: Failed to get the contacts
        //
        function onError(contactError) {
            alert('onError!');
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Stranezze Android

*   **pref**: non supportato, restituendo`false`.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **tipo**: parzialmente supportati. Usato per i numeri di telefono.

*   **valore**: supportato.

*   **pref**: non supportato, restituendo`false`.

## iOS stranezze

*   **pref**: non supportato, restituendo`false`.