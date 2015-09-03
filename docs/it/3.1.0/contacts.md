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


# Contatti

> Il `contacts` oggetto consente di accedere al database di contatti del dispositivo.

**Nota importante sulla privacy:** Raccolta e utilizzo dei dati di contatto solleva questioni di privacy importante. Politica sulla privacy dell'app dovrebbe discutere come app utilizza i dati di contatto e se è condiviso con altre parti. Informazioni di contatto sono considerate sensibile perché rivela le persone con cui una persona comunica. Pertanto, oltre alla politica di privacy dell'app, è fortemente consigliabile fornendo un preavviso di just-in-time prima della tua app accedendo o utilizzando i dati di contatto (se il sistema operativo del dispositivo non farlo già). Tale comunicazione deve fornire le informazioni stesse notate sopra, oltre ad ottenere l'autorizzazione (ad esempio, presentando scelte per **OK** e **No grazie**). Si noti che alcuni mercati app possono richiedere l'app può fornire preavviso just-in-time e ottenere l'autorizzazione dell'utente prima di accedere ai dati di contatto. Un'esperienza utente chiara e facile--capisce che circonda l'uso del contatto dati verranno aiuterà a evitare la confusione dell'utente e percepito un uso improprio dei dati di contatto. Per ulteriori informazioni, vedere la guida sulla Privacy.

## Metodi

*   Contacts.Create
*   Contacts.Find

## Argomenti

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Oggetti

*   Contatto
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


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


# contacts.find

Una query al database di contatti del dispositivo e restituisce uno o più `Contact` oggetti, ciascuno contenente i campi specificati.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Descrizione

Il `contacts.find` metodo in modo asincrono, esegue una query sul database di contatti del dispositivo e restituisce una matrice di `Contact` oggetti. Gli oggetti risultanti sono passati per la `contactSuccess` funzione di callback specificato dal parametro **contactSuccess** .

Il parametro **contactFields** specifica i campi per essere utilizzato come un qualificatore di ricerca, e solo quei risultati sono passati alla funzione di callback **contactSuccess** . Un parametro di lunghezza zero, **contactFields** non è valido e si traduce in `ContactError.INVALID_ARGUMENT_ERROR` . Un valore di **contactFields** di `"*"` restituisce tutti i contatti di campi.

La stringa di **contactFindOptions.filter** può essere utilizzata come un filtro di ricerca quando una query sul database di contatti. Se fornito, una distinzione, corrispondenza parziale valore viene applicato a ogni campo specificato nel parametro **contactFields** . Se esiste una corrispondenza per *qualsiasi* dei campi specificati, viene restituito il contatto.

## Parametri

*   **contactFields**: contattare campi da utilizzare come un qualificatore di ricerca. Il conseguente `Contact` oggetto presenta solo i valori per questi campi. *(DOMString[])* [Richiesto]

*   **contactSuccess**: funzione di callback di successo viene richiamato con i contatti restituiti dal database. [Richiesto]

*   **contactError**: funzione di callback di errore, viene richiamato quando si verifica un errore. [Facoltativo]

*   **contactFindOptions**: opzioni per filtrare i contatti di ricerca. [Facoltativo]

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
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts with 'Bob' in any name field
    var options      = new ContactFindOptions();
    options.filter   = "Bob";
    options.multiple = true;
    var fields       = ["displayName", "name"];
    navigator.contacts.find(fields, onSuccess, onError, options);
    

## Esempio completo

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


# Contatto

Contiene proprietà che descrivono un contatto, come il contatto personale o aziendale di un utente.

## Proprietà

*   **ID**: un identificatore univoco globale. *(DOMString)*

*   **displayName**: il nome di questo contatto, adatto per la visualizzazione a utenti finali. *(DOMString)*

*   **nome**: un oggetto che contiene tutti i componenti di un nome di persone. *(ContactName)*

*   **Nickname**: un nome informale con cui affrontare il contatto. *(DOMString)*

*   **phoneNumbers**: una matrice di numeri di telefono del contatto. *(ContactField[])*

*   **email**: una matrice di indirizzi di posta elettronica del contatto. *(ContactField[])*

*   **indirizzi**: una matrice di indirizzi di contatto. *(ContactAddress[])*

*   **IMS**: una matrice di indirizzi IM tutto il contatto. *(ContactField[])*

*   **organizzazioni**: una matrice di organizzazioni di tutto il contatto. *(ContactOrganization[])*

*   **compleanno**: il compleanno del contatto. *(Data)*

*   **Nota**: una nota sul contatto. *(DOMString)*

*   **foto**: una matrice di foto del contatto. *(ContactField[])*

*   **categorie**: matrice di tutte le categorie definite dall'utente connesso con il contatto. *(ContactField[])*

*   **URL**: matrice di pagine web connesso con il contatto. *(ContactField[])*

## Metodi

*   **clone**: restituisce una nuova `Contact` oggetto che è una copia completa dell'oggetto chiamante, con la `id` proprietà impostata`null`.

*   **rimuovere**: rimuove il contatto dal database contatti dispositivo, altrimenti esegue un callback di errore con un `ContactError` oggetto.

*   **Salva**: salva un nuovo contatto nel database di contatti del dispositivo, o aggiorna un contatto esistente se esiste già un contatto con lo stesso **id** .

## Dettagli

Il `Contact` oggetto rappresenta il contatto di un utente. Contatti possono essere creati, memorizzati o rimossi dal database di contatti dispositivo. Contatti possono anche essere estratto (singolarmente o in blocco) dal database richiamando il `contacts.find` metodo.

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
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
    // create a new contact object
    var contact = navigator.contacts.create();
    contact.displayName = "Plumber";
    contact.nickname = "Plumber";            // specify both to support all devices
    
    // populate some fields
    var name = new ContactName();
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
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
            // create
            var contact = navigator.contacts.create();
            contact.displayName = "Plumber";
            contact.nickname = "Plumber";                 // specify both to support all devices
            var name = new ContactName();
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
        function onSaveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
            alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
            alert("Error = " + contactError.code);
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
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

*   **displayName**: non supportata su iOS, tornando `null` se non c'è nessun `ContactName` specificato, nel qual caso restituisce il nome composito, **soprannome** o `""` , rispettivamente.

*   **compleanno**: deve essere inserito come un JavaScript `Date` oggetto, allo stesso modo viene restituito.

*   **foto**: restituisce un URL del File dell'immagine, che viene memorizzato nella directory temporanea dell'applicazione. Contenuto della directory temporanea vengono rimossi quando l'applicazione termina.

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


# ContactAddress

Contiene le proprietà di indirizzo per un `Contact` oggetto.

## Proprietà

*   **pref**: impostare su `true` se questo `ContactAddress` contiene il valore preferito dell'utente. *(booleano)*

*   **tipo**: una stringa che indica il tipo di campo è, *casa* ad esempio. *(DOMString)*

*   **formattato**: indirizzo completo formattato per la visualizzazione. *(DOMString)*

*   **streetAddress**: l'indirizzo completo. *(DOMString)*

*   **località**: la città o località. *(DOMString)*

*   **regione**: lo stato o la regione. *(DOMString)*

*   **postalCode**: il codice postale o il codice postale. *(DOMString)*

*   **paese**: il nome del paese. *(DOMString)*

## Dettagli

Il `ContactAddress` oggetto memorizza le proprietà di un singolo indirizzo di un contatto. A `Contact` oggetto può includere più di un indirizzo in un `ContactAddress[]` matrice.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // display the address information for all contacts
    
    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            for (var j = 0; j < contacts[i].addresses.length; j++) {
                alert("Pref: "         + contacts[i].addresses[j].pref          + "\n" +
                    "Type: "           + contacts[i].addresses[j].type          + "\n" +
                    "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                    "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                    "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                    "Region: "         + contacts[i].addresses[j].region        + "\n" +
                    "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                    "Country: "        + contacts[i].addresses[j].country);
            }
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    // find all contacts
    var options = new ContactFindOptions();
    options.filter = "";
    var filter = ["displayName", "addresses"];
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
            // find all contacts
            var options = new ContactFindOptions();
            options.filter = "";
            var filter = ["displayName", "addresses"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            // display the address information for all contacts
            for (var i = 0; i < contacts.length; i++) {
                for (var j = 0; j < contacts[i].addresses.length; j++) {
                    alert("Pref: "           + contacts[i].addresses[j].pref          + "\n" +
                          "Type: "           + contacts[i].addresses[j].type          + "\n" +
                          "Formatted: "      + contacts[i].addresses[j].formatted     + "\n" +
                          "Street Address: " + contacts[i].addresses[j].streetAddress + "\n" +
                          "Locality: "       + contacts[i].addresses[j].locality      + "\n" +
                          "Region: "         + contacts[i].addresses[j].region        + "\n" +
                          "Postal Code: "    + contacts[i].addresses[j].postalCode    + "\n" +
                          "Country: "        + contacts[i].addresses[j].country);
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

*   **pref**: non supportato, tornando `false` su dispositivi Android 2. x.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **pref**: non è supportato sui dispositivi BlackBerry, restituendo`false`.

*   **tipo**: parzialmente supportati. Solo uno di *lavoro* e *casa* tipo indirizzi può essere memorizzato per ciascun contatto.

*   **formattato**: parzialmente supportati. Restituisce una concatenazione di tutti i campi Indirizzo BlackBerry.

*   **streetAddress**: supportato. Restituisce una concatenazione di BlackBerry **Indirizzo1** e **Indirizzo2** campi indirizzo.

*   **località**: supportato. Memorizzato nel campo indirizzo **città** di BlackBerry.

*   **regione**: supportato. Memorizzato nel campo indirizzo di **stateProvince** BlackBerry.

*   **postalCode**: supportato. Memorizzato nel campo dell'indirizzo **zipPostal** BlackBerry.

*   **paese**: supportato.

## iOS stranezze

*   **pref**: non è supportato sui dispositivi iOS, restituendo`false`.

*   **formattato**: attualmente non supportati.


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


# ContactFindOptions

Contiene proprietà che possono essere utilizzate per filtrare i risultati di una `contacts.find` operazione.

## Proprietà

*   **filtro**: la stringa di ricerca utilizzata per trovare contatti. *(DOMString)* (Default:`""`)

*   **multiple**: determina se l'operazione di ricerca restituisce più contatti. *(Booleano)* (Default:`false`)

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    // success callback
    function onSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            alert(contacts[i].displayName);
        }
    };
    
    // error callback
    function onError(contactError) {
        alert('onError!');
    };
    
    // specify contact search criteria
    var options = new ContactFindOptions();
        options.filter="";        // empty search string returns all contacts
        options.multiple=true;    // return multiple results
        filter = ["displayName"]; // return contact.displayName field
    
        // find contacts
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
            // specify contact search criteria
            var options = new ContactFindOptions();
            options.filter = "";      // empty search string returns all contacts
            options.multiple = true;  // return multiple results
            filter = ["displayName"]; // return contact.displayName field
    
            // find contacts
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i=0; i<contacts.length; i++) {
                alert(contacts[i].displayName);
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


# ContactName

Contiene diversi tipi di informazioni circa un `Contact` nome dell'oggetto.

## Proprietà

*   **formattato**: il nome completo del contatto. *(DOMString)*

*   **familyName**: cognome del contatto. *(DOMString)*

*   **givenName**: nome del contatto. *(DOMString)*

*   **middleName**: il nome del contatto medio. *(DOMString)*

*   **honorificPrefix**: prefisso del contatto (esempio *Mr* o *Dr*) *(DOMString)*

*   **honorificSuffix**: suffisso del contatto (esempio *Esq.*). *(DOMString)*

## Dettagli

Il `ContactName` oggetto memorizza la proprietà del nome di un contatto.

## Piattaforme supportate

*   Android 2. x
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            alert("Formatted: "  + contacts[i].name.formatted       + "\n" +
                "Family Name: "  + contacts[i].name.familyName      + "\n" +
                "Given Name: "   + contacts[i].name.givenName       + "\n" +
                "Middle Name: "  + contacts[i].name.middleName      + "\n" +
                "Suffix: "       + contacts[i].name.honorificSuffix + "\n" +
                "Prefix: "       + contacts[i].name.honorificSuffix);
        }
    };
    
    function onError(contactError) {
        alert('onError!');
    };
    
    var options = new ContactFindOptions();
    options.filter = "";
    filter = ["displayName", "name"];
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
            filter = ["displayName","name"];
            navigator.contacts.find(filter, onSuccess, onError, options);
        }
    
        // onSuccess: Get a snapshot of the current contacts
        //
        function onSuccess(contacts) {
            for (var i = 0; i < contacts.length; i ++) {
                alert("Formatted: " + contacts[i].name.formatted       + "\n" +
                    "Family Name: " + contacts[i].name.familyName      + "\n" +
                    "Given Name: "  + contacts[i].name.givenName       + "\n" +
                    "Middle Name: " + contacts[i].name.middleName      + "\n" +
                    "Suffix: "      + contacts[i].name.honorificSuffix + "\n" +
                    "Prefix: "      + contacts[i].name.honorificPrefix);
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

*   **formattato**: parzialmente supportati e di sola lettura. Restituisce una concatenazione di `honorificPrefix` , `givenName` , `middleName` , `familyName` , e`honorificSuffix`.

## Stranezze di blackBerry WebWorks (OS 5.0 e superiori)

*   **formattato**: parzialmente supportati. Restituisce una concatenazione di campi **firstName** e **lastName** BlackBerry.

*   **familyName**: supportato. Archiviato in campo **lastName** BlackBerry.

*   **givenName**: supportato. Archiviato in campo **firstName** BlackBerry.

*   **middleName**: non supportato, restituendo`null`.

*   **honorificPrefix**: non supportato, restituendo`null`.

*   **honorificSuffix**: non supportato, restituendo`null`.

## iOS stranezze

*   **formattato**: parzialmente supportati. Restituisce il nome composito di iOS, ma è di sola lettura.


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


# ContactError

A `ContactError` oggetto è passato per la `contactError` callback quando si verifica un errore.

## Proprietà

*   **codice**: uno dei codici di errore predefiniti elencati di seguito.

## Costanti

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## Descrizione

Il `ContactError` oggetto viene restituito all'utente attraverso la `contactError` funzione di callback quando si verifica un errore.


# contactSuccess

Funzione di callback di successo che fornisce il `Contact` matrice risultante da una `contacts.find` operazione.

    function(contacts) {
        // Do something
    }
    

## Parametri

*   **contatti**: Contatta matrice risultante da un'operazione di ricerca. *(Contatto)*

## Esempio

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

Funzione di callback di errore per le funzioni di contatto.

    function(error) {
        // Handle the error
    }


# contactFields

Richiesto il parametro per il `contacts.find` metodo, utilizzato per specificare quali campi devono essere inclusi nella `Contact` oggetti derivanti da un'operazione di ricerca.

    ["nome", "phoneNumbers", "email"]


# contactFindOptions

Parametro facoltativo del `contacts.find` metodo, utilizzato per filtrare i contatti restituiti dal database di contatti.

    {filtro: "", più: vero,};
    

## Opzioni

*   **filtro**: la stringa di ricerca utilizzata per filtrare i contatti. *(DOMString)* (Default:`""`)

*   **multiple**: determina se l'operazione di ricerca restituisce più contatti. *(Booleano)* (Default:`false`)
