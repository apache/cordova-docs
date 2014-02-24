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

# ContactOrganization

Contiene una `Contact` organizzazione proprietà oggetto.

## Proprietà

*   **pref**: impostare su `true` se questo `ContactOrganization` contiene il valore preferito dell'utente. *(booleano)*

*   **tipo**: una stringa che indica il tipo di campo è, *casa* ad esempio. _(DOMString)

*   **nome**: il nome dell'organizzazione. *(DOMString)*

*   **dipartimento**: contratto lavora per il dipartimento. *(DOMString)*

*   **titolo**: titolo del contatto presso l'organizzazione. *(DOMString)*

## Dettagli

Il `ContactOrganization` oggetto memorizza la proprietà di organizzazione di un contatto. A `Contact` oggetto memorizza uno o più `ContactOrganization` gli oggetti in una matrice.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].organizations.length; j++) {
                alert("Pref: "      + contacts[i].organizations[j].pref       + "\n" +
                    "Type: "        + contacts[i].organizations[j].type       + "\n" +
                    "Name: "        + contacts[i].organizations[j].name       + "\n" +
                    "Department: "  + contacts[i].organizations[j].department + "\n" +
                    "Title: "       + contacts[i].organizations[j].title);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "organizations"];
    navigator.contacts.find(filter, onSuccess, onError, options);
    

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
            var options = new ContactFindOptions();
            options.filter="";
            filter = ["displayName","organizations"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].organizations.length; j++) {
                    alert("Pref: "     + contacts[i].organizations[j].pref       + "\n" +
                        "Type: "       + contacts[i].organizations[j].type       + "\n" +
                        "Name: "       + contacts[i].organizations[j].name       + "\n" +
                        "Department: " + contacts[i].organizations[j].department + "\n" +
                        "Title: "      + contacts[i].organizations[j].title);
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
    

## Stranezze di Android 2. x

*   **pref**: non supportato dai dispositivi Android 2. x, restituendo`false`.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **pref**: non supportato dai dispositivi BlackBerry, restituendo`false`.

*   **tipo**: non supportato dai dispositivi BlackBerry, restituendo`null`.

*   **nome**: parzialmente supportati. Il primo nome dell'organizzazione è memorizzato nel campo **azienda** BlackBerry.

*   **dipartimento**: non supportato, restituendo`null`.

*   **titolo**: parzialmente supportati. Il primo titolo di organizzazione è memorizzato nel campo **jobTitle** BlackBerry.

## iOS stranezze

*   **pref**: non è supportato sui dispositivi iOS, restituendo`false`.

*   **tipo**: non è supportato sui dispositivi iOS, restituendo`null`.

*   **nome**: parzialmente supportati. Il primo nome dell'organizzazione è memorizzato nel campo **kABPersonOrganizationProperty** iOS.

*   **dipartimento**: parzialmente supportati. Il primo nome del dipartimento è memorizzato nel campo **kABPersonDepartmentProperty** iOS.

*   **titolo**: parzialmente supportati. Il primo titolo è memorizzato nel campo **kABPersonJobTitleProperty** iOS.