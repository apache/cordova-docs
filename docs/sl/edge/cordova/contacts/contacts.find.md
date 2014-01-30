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

# contacts.find

V zbirki podatkov stikov, naprave in vrne enega ali več `Contact` predmeti, vsaka vsebuje določena polja.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Opis

Je `contacts.find` metoda izvaja asinhrono, poizvedovanje po zbirki podatkov stikov napravo in vrne matriko z `Contact` predmeti. Nastali predmeti se prenesejo na `contactSuccess` povratni klic funkcije, določenega s parametrom **contactSuccess** .

**ContactFields** parameter določa polja uporabijo kot kvalifikator iskanje, in le ti rezultati so posredovani **contactSuccess** povratni klic funkcije. Ničelne dolžine **contactFields** parameter ni veljaven in ima za posledico `ContactError.INVALID_ARGUMENT_ERROR` . **ContactFields** vrednost `"*"` vrne vse kontaktne polja.

**ContactFindOptions.filter** niz lahko uporabijo kot iskalni filter, ko je poizvedovanje baze stike. Če, case-insensitive, delna vrednost tekmo se uporablja vsako polje, določeno v parametru **contactFields** . Če je tekmo za *katero koli* določeno polj, stik vrnil.

## Parametri

*   **contactFields**: obrnite polja naj se uporabijo kot kvalifikator Išči. Dobljeno `Contact` predmet vsebuje samo vrednosti za ta polja. *(DOMString[])* [Zahteva]

*   **contactSuccess**: uspeh callback funkcijo sklicevati s stiki vrnil iz zbirke podatkov. [Zahteva]

*   **contactError**: zmota povratni klic funkcije, sklicevati, ko pride do napake. [Neobvezno]

*   **contactFindOptions**: iskanje možnosti za filtriranje stikov. [Neobvezno]

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Celoten primer

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact Example</title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.addEventListener("deviceready", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new ContactFindOptions();
                    options.filter = "Bob";
                    var fields = ["displayName", "name"];
                    navigator.contacts.find(fields, onSuccess, onError, options);
                }
    
                // onSuccess: Get a snapshot of the current contacts
    
                function onSuccess(contacts) {
                    for (var i = 0; i < contacts.length; i++) {
                        console.log("Display Name = " + contacts[i].displayName);
                    }
                }
    
                // onError: Failed to get the contacts
    
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