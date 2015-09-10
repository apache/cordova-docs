---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

# contacts.find

Una query al database di contatti del dispositivo e restituisce uno o più `Contact` oggetti, ciascuno contenente i campi specificati.

    navigator.contacts.find(<a href="parameters/contactFields.html">contactFields</a>, <a href="parameters/contactSuccess.html">contactSuccess</a>, <a href="parameters/contactError.html">contactError</a>, <a href="parameters/contactFindOptions.html">contactFindOptions</a>);
    

## Descrizione

Il `contacts.find` metodo in modo asincrono, esegue una query sul database di contatti del dispositivo e restituisce una matrice di `Contact` oggetti. Gli oggetti risultanti sono passati per la `<a href="parameters/contactSuccess.html">contactSuccess</a>` funzione di callback specificato dal parametro **<a href="parameters/contactSuccess.html">contactSuccess</a>** .

Il parametro **<a href="parameters/contactFields.html">contactFields</a>** specifica i campi per essere utilizzato come un qualificatore di ricerca, e solo quei risultati sono passati alla funzione di callback **<a href="parameters/contactSuccess.html">contactSuccess</a>** . Un parametro di lunghezza zero, **<a href="parameters/contactFields.html">contactFields</a>** non è valido e si traduce in `<a href="ContactError/<a href="parameters/contactError.html">contactError</a>.html">ContactError</a>.INVALID_ARGUMENT_ERROR` . Un valore di **<a href="parameters/contactFields.html">contactFields</a>** di `"*"` restituisce tutti i contatti di campi.

La stringa di **<a href="parameters/contactFindOptions.html">contactFindOptions</a>.filter** può essere utilizzata come un filtro di ricerca quando una query sul database di contatti. Se fornito, una distinzione, corrispondenza parziale valore viene applicato a ogni campo specificato nel parametro **<a href="parameters/contactFields.html">contactFields</a>** . Se esiste una corrispondenza per *qualsiasi* dei campi specificati, viene restituito il contatto.

## Parametri

*   **<a href="parameters/contactFields.html">contactFields</a>**: contattare campi da utilizzare come un qualificatore di ricerca. Il conseguente `Contact` oggetto presenta solo i valori per questi campi. *(DOMString[])* [Richiesto]

*   **<a href="parameters/contactSuccess.html">contactSuccess</a>**: funzione di callback di successo viene richiamato con i contatti restituiti dal database. [Richiesto]

*   **<a href="parameters/contactError.html">contactError</a>**: funzione di callback di errore, viene richiamato quando si verifica un errore. [Facoltativo]

*   **<a href="parameters/contactFindOptions.html">contactFindOptions</a>**: opzioni per filtrare i contatti di ricerca. [Facoltativo]

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    function onSuccess(contacts) {
        alert('Found ' + contacts.length + ' contacts.');
    };
    
    function onError(<a href="parameters/contactError.html">contactError</a>) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
        <head>
            <title>Contact <a href="../storage/storage.opendatabase.html">Example</a></title>
            <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
            <script type="text/javascript" charset="utf-8">
    
                // Wait for device API libraries to load
                document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
                // device APIs are available
    
                function onDeviceReady() {
                    // find all contacts with 'Bob' in any name field
                    var options = new <a href="ContactFindOptions/contactfindoptions.html">ContactFindOptions</a>();
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
    
                function onError(<a href="parameters/contactError.html">contactError</a>) {
                    alert('onError!');
                }
            </script>
        </head>
    
        <body>
            <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
            <p>Find Contacts</p>
        </body>
    </html>