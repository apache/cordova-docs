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

# Contatto

Contiene proprietà che descrivono un contatto, come il contatto personale o aziendale di un utente.

## Proprietà

*   **ID**: un identificatore univoco globale. *(DOMString)*

*   **displayName**: il nome di questo contatto, adatto per la visualizzazione a utenti finali. *(DOMString)*

*   **nome**: un oggetto che contiene tutti i componenti di un nome di persone. *(<a href="../ContactName/contactname.html">ContactName</a>)*

*   **Nickname**: un nome informale con cui affrontare il contatto. *(DOMString)*

*   **phoneNumbers**: una matrice di numeri di telefono del contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **email**: una matrice di indirizzi di posta elettronica del contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **indirizzi**: una matrice di indirizzi di contatto. *(<a href="../ContactAddress/contactaddress.html">ContactAddress</a>[])*

*   **IMS**: una matrice di indirizzi IM tutto il contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **organizzazioni**: una matrice di organizzazioni di tutto il contatto. *(<a href="../ContactOrganization/contactorganization.html">ContactOrganization</a>[])*

*   **compleanno**: il compleanno del contatto. *(Data)*

*   **Nota**: una nota sul contatto. *(DOMString)*

*   **foto**: una matrice di foto del contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **categorie**: matrice di tutte le categorie definite dall'utente connesso con il contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

*   **URL**: matrice di pagine web connesso con il contatto. *(<a href="../ContactField/contactfield.html">ContactField</a>[])*

## Metodi

*   **clone**: restituisce una nuova `Contact` oggetto che è una copia completa dell'oggetto chiamante, con la `id` proprietà impostata`null`.

*   **rimuovere**: rimuove il contatto dal database contatti dispositivo, altrimenti esegue un callback di errore con un `<a href="../ContactError/<a href="../parameters/contactError.html">contactError</a>.html">ContactError</a>` oggetto.

*   **Salva**: salva un nuovo contatto nel database di contatti del dispositivo, o aggiorna un contatto esistente se esiste già un contatto con lo stesso **id** .

## Dettagli

Il `Contact` oggetto rappresenta il contatto di un utente. <a href="../contacts.html">Contatti</a> possono essere creati, memorizzati o rimossi dal database di contatti dispositivo. <a href="../contacts.html">Contatti</a> possono anche essere estratto (singolarmente o in blocco) dal database richiamando il `<a href="../contacts.find.html">contacts.find</a>` metodo.

**Nota:** Non tutti i campi di contatto sopra elencati sono supportati su ogni piattaforma del dispositivo. Consultare la sezione di *stranezze* su ogni piattaforma per dettagli.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Salvare rapido esempio

    function onSuccess(contact) {
        alert("Save Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new <a href="../ContactName/contactname.html">ContactName</a>();
    name.givenName = "Jane";
    name.familyName = "Doe";
    contact.name = name;
    
    // save to device
    contact.save(onSuccess,onError);
    

## Clonare rapido esempio

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Rimuovere rapido esempio

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(<a href="../parameters/contactError.html">contactError</a>) {
        alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new <a href="../ContactName/contactname.html">ContactName</a>();
            name.givenName = "Jane";
            name.familyName = "Doe";
            contact.name = name;
    
            // save
            contact.save(onSaveSuccess,onSaveError);
    
            // clone
            var clone = contact.clone();
            clone.name.givenName = "John";
            console.log("Original contact name = " + contact.name.givenName);
            console.log("Cloned contact name = " + clone.name.givenName);
    
            // remove
            contact.remove(onRemoveSuccess,onRemoveError);
        }
    
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
            alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(<a href="../parameters/contactError.html">contactError</a>) {
            alert("Error = " + <a href="../parameters/contactError.html">contactError</a>.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Find Contacts</p>
      </body>
    </html>
    

## Stranezze di Android 2. x

*   **categorie**: non è supportato sui dispositivi Android 2. x, restituendo`null`.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **ID**: supportato. Assegnato dal dispositivo quando si salva il contatto.

*   **displayName**: supportato. Archiviato in campo **utente1** BlackBerry.

*   **soprannome**: non supportato, restituendo`null`.

*   **phoneNumbers**: parzialmente supportati. Numeri di telefono sono memorizzati in BlackBerry campi **homePhone1** e **homePhone2** se il *tipo* è 'casa', **workPhone1** e **workPhone2** se è di *tipo* 'lavoro', **mobilePhone** se *tipo* è 'mobile', **faxPhone** se *tipo* è 'fax', **pagerPhone** se il *tipo* è 'pager' e **rinominare** , se il *tipo* non è nessuno dei precedenti.

*   **email**: parzialmente supportati. I primo tre indirizzi sono memorizzati nei BlackBerry **email1**, **email2**, **email3** campi e, rispettivamente.

*   **indirizzi**: parzialmente supportati. I primi e secondo gli indirizzi vengono memorizzati nei campi BlackBerry **homeAddress** e **workAddress** , rispettivamente.

*   **IMS**: non supportato, restituendo`null`.

*   **organizzazioni**: parzialmente supportati. Il **nome** e il **titolo** della prima organizzazione vengono memorizzati nei campi **azienda** e **titolo** BlackBerry, rispettivamente.

*   **foto**: parzialmente supportati. Una singola foto miniatura è supportata. Per impostare la foto di un contatto, passare in un o una codifica base64 immagine, o un URL che punta all'immagine. L'immagine viene ridimensionata verso il basso prima di salvare il database di contatti BlackBerry. Foto contatto viene restituito come un immagine con codifica base64.

*   **categorie**: parzialmente supportati. Sono supportate solo le categorie di *Business* e *personali* .

*   **URL**: parzialmente supportati. Il primo URL viene memorizzato nel campo **pagina Web** BlackBerry.

## iOS stranezze

*   **displayName**: non supportata su iOS, tornando `null` se non c'è nessun `<a href="../ContactName/contactname.html">ContactName</a>` specificato, nel qual caso restituisce il nome composito, **soprannome** o `""` , rispettivamente.

*   **compleanno**: deve essere inserito come un JavaScript `Date` oggetto, allo stesso modo viene restituito.

*   **foto**: restituisce un URL del <a href="../../file/fileobj/fileobj.html">File</a> dell'immagine, che viene memorizzato nella directory temporanea dell'applicazione. Contenuto della directory temporanea vengono rimossi quando l'applicazione termina.

*   **categorie**: questa proprietà non è attualmente supportata, restituendo`null`.

## Windows Phone 7 e 8 stranezze

*   **displayName**: quando si crea un contatto, il valore specificato per il parametro del nome di visualizzazione è diverso dal nome visualizzato Estratto quando trovare il contatto.

*   **URL**: quando creando un contatto, gli utenti possono inserire e salvare più di un indirizzo web, ma solo uno è disponibile è disponibile durante la ricerca del contatto.

*   **phoneNumbers**: non è supportata l'opzione *pref* . Il *tipo* non è supportato in un'operazione di *trovare* . Un solo `phoneNumber` è consentita per ogni *tipo*.

*   **email**: non è supportata l'opzione *pref* . Home e personal fa riferimento la stessa voce di posta elettronica. È consentito un solo ingresso per ogni *tipo*.

*   **indirizzi**: supporta solo lavoro e casa/personali *tipo*. Il riferimento principale e personale *tipo* la stessa voce di indirizzo. È consentito un solo ingresso per ogni *tipo*.

*   **organizzazioni**: solo uno è consentito e non supporta gli attributi *pref*, *tipo*e *dipartimento* .

*   **Nota**: non supportato, restituendo`null`.

*   **IMS**: non supportato, restituendo`null`.

*   **compleanni**: non supportato, restituendo`null`.

*   **categorie**: non supportato, restituendo`null`.