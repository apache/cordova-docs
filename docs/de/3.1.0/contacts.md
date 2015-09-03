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


# Kontakte

> Das `contacts` Objekt bietet Zugriff auf die Kontaktdatenbank Gerät.

**Wichtige Datenschutzhinweis:** Erhebung und Nutzung von Kontaktdaten löst wichtige Datenschutzprobleme. Ihre app-Datenschutzerklärung sollten besprechen, wie die app Kontaktdaten verwendet und ob es mit irgendwelchen anderen Parteien geteilt wird. Kontaktinformationen ist als vertraulich angesehen, weil es die Menschen zeigt, mit denen eine Person kommuniziert. Daher neben Ihrer app-Privacy Policy sollten stark Sie eine just-in-Time Ankündigung vor Ihrer Anwendung Zugriff oder die Verwendung der Kontaktdaten (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Beachten Sie, dass einige app-Marktplätze können Ihre app eine Frist von just-in-Time und Erlaubnis des Benutzers vor dem Zugriff auf Kontaktdaten einholen. Eine klare und leicht verständliche Benutzererfahrung rund um den Einsatz von Kontakt Daten hilft Benutzer Verwirrung zu vermeiden und wahrgenommene Missbrauch der Kontaktdaten. Weitere Informationen finden Sie in der Datenschutz-Guide.

## Methoden

*   Contacts.Create
*   Contacts.Find

## Argumente

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Objekte

*   Kontakt
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

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
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.


# Contacts.Create

Gibt ein neues Kontaktobjekt zurück.

    var contact = navigator.contacts.create(properties);
    

## Beschreibung

Die `contacts.create` Methode ist synchron und gibt eine neue `Contact` Objekt.

Diese Methode behält nicht das Contact-Objekt in der Gerät-Kontakte-Datenbank, für die müssen Sie Aufrufen der `Contact.save` Methode.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    var myContact = navigator.contacts.create({"displayName": "Test User"});
    

## Vollständiges Beispiel

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

Fragt die Gerät-Kontakte-Datenbank und gibt eine oder mehrere `Contact` Objekte, die jeweils angegebenen Felder.

    navigator.contacts.find(contactFields, contactSuccess, contactError, contactFindOptions);
    

## Beschreibung

Die `contacts.find` Methode wird asynchron ausgeführt, Abfragen der Gerät-Kontakte-Datenbank und gibt ein Array von `Contact` Objekten. Die resultierenden Objekte werden an übergeben die `contactSuccess` Callback-Funktion, die durch den **ContactSuccess** -Parameter angegeben.

Der Parameter **ContactFields** gibt die Felder als Qualifizierer Suche verwendet werden, und nur die Ergebnisse an die **ContactSuccess** -Callback-Funktion übergeben werden. Ein leere **ContactFields** -Parameter ist ungültig und führt zu `ContactError.INVALID_ARGUMENT_ERROR` . **ContactFields** der Wert `"*"` gibt alle Kontaktfelder.

Die **contactFindOptions.filter** -Zeichenfolge kann als einen Suchfilter verwendet, wenn die Kontaktdatenbank Abfragen. Wenn angeboten, ein case-insensitive, wird jedes Feld in der **ContactFields** -Parameter angegebenen Teilwert Übereinstimmung. Wenn eine Übereinstimmung für *alle* angegebenen Felder vorliegt, wird der Kontakt zurückgegeben.

## Parameter

*   **ContactFields**: Kontaktfelder als Qualifizierer Suche verwenden. Die daraus resultierende `Contact` Objekt verfügt nur über Werte für diese Felder. *(DOMString[])* [Erforderlich]

*   **ContactSuccess**: Erfolg-Callback-Funktion aufgerufen, mit den Kontakten, die von der Datenbank zurückgegebenen. [Erforderlich]

*   **ContactError**: Fehler-Callback-Funktion wird aufgerufen, wenn ein Fehler auftritt. [Optional]

*   **ContactFindOptions**: Optionen zum Filtern von Kontakten zu suchen. [Optional]

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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


# Kontakt

Enthält Eigenschaften, die einen Kontakt, z. B. eines Benutzers persönlicher oder geschäftlicher Kontakt zu beschreiben.

## Eigenschaften

*   **ID**: einen globally unique Identifier. *(DOM-String und enthält)*

*   **DisplayName**: der Name dieses Kontakts, geeignet für die Anzeige an Endverbraucher. *(DOM-String und enthält)*

*   **Name**: ein Objekt, das alle Komponenten eines Personen-Namen enthält. *(Kontaktperson)*

*   **Nickname**: einen lässig ein, um den Kontakt zu adressieren. *(DOM-String und enthält)*

*   **Telefonnummern**: ein Array von der Kontakt-Telefonnummern. *(ContactField[])*

*   **Email**: ein Array von e-Mail-Adressen des Kontakts. *(ContactField[])*

*   **Adressen**: ein Array von allen Kontaktadressen. *(ContactAddress[])*

*   **IMS**: ein Array von IM-Adressen des Kontakts. *(ContactField[])*

*   **Organisationen**: ein Array von Organisationen des Kontakts. *(ContactOrganization[])*

*   **Geburtstag**: der Geburtstag des Kontakts. *(Datum)*

*   **Anmerkung**: eine Anmerkung über den Kontakt. *(DOM-String und enthält)*

*   **Fotos**: ein Array mit den Kontakt-Fotos. *(ContactField[])*

*   **Kategorien**: ein Array mit allen benutzerdefinierten Kategorien zugeordnet den Kontakt. *(ContactField[])*

*   **URLs**: ein Array von Web-Seiten, die den Kontakt zugeordnet. *(ContactField[])*

## Methoden

*   **Klon**: gibt eine neue `Contact` Objekt, das eine tiefe Kopie des aufrufenden Objekts, mit der `id` -Eigenschaft festgelegt`null`.

*   **Entfernen**: entfernt den Kontakt aus der Gerät-Kontakte-Datenbank, ansonsten führt eine Fehler-Callback mit einem `ContactError` Objekt.

*   **Speichern**: speichert einen neuen Kontakt in der Gerätedatenbank Kontakte, oder einen vorhandenen Kontakt aktualisiert, wenn ein Kontakt mit der gleichen **Id** bereits vorhanden ist.

## Informationen

Das `Contact` -Objekt repräsentiert einen Benutzer Kontakt. Kontakte können erstellt, gespeichert oder aus der Gerät-Kontakte-Datenbank entfernt werden. Kontakte können auch abgerufen werden (einzeln oder als Gruppe) aus der Datenbank durch den Aufruf der `contacts.find` Methode.

**Hinweis:** Nicht alle oben aufgeführten Kontaktfelder sind auf jedem Geräteplattform unterstützt. Bitte überprüfen Sie jede Plattform *Quirks* Abschnitt für Details.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel zu speichern

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
    

## Kleines Beispiel zu klonen

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Kleines Beispiel zu entfernen

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

## Vollständiges Beispiel

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
    

## Android 2.X Macken

*   **Kategorien**: Android 2.X Geräten, Rückgabe nicht unterstützt`null`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **ID**: unterstützt. Durch das Gerät zugewiesen, wenn Sie den Kontakt zu speichern.

*   **DisplayName**: unterstützt. Im BlackBerry **user1** Feld gespeichert.

*   **Nickname**: nicht unterstützt, Rückgabe`null`.

*   **Telefonnummern**: teilweise unterstützt. Telefonnummern werden im BlackBerry Felder **homePhone1** und **homePhone2** gespeichert, wenn *Typ* "zu Hause", **workPhone1** und **workPhone2** wenn *Typ* 'Arbeit', **MobilePhone** wenn *Typ* 'mobile' ist, **FaxPhone** wenn *Typ* 'Fax', **PagerPhone** ist wenn *Typ* ist "Pager" und **wollte** , wenn *keines der obigen ist* .

*   **Email**: teilweise unterstützt. Die ersten drei e-Mail-Adressen werden in die BlackBerry- **mail1**, **e-mail2**und **email3** Felder, bzw. gespeichert.

*   **Adressen**: teilweise unterstützt. Die erste und zweite Adresse werden bzw. in die Felder **HomeAddress** und **WorkAddress** BlackBerry gespeichert.

*   **IMS**: nicht unterstützt, Rückgabe`null`.

*   **Organisationen**: teilweise unterstützt. Den **Namen** und den **Titel** der ersten Organisation werden in den Feldern **Firma** und **Titel** BlackBerry gespeichert.

*   **Fotos**: teilweise unterstützt. Ein einzelnes Foto der Miniaturansicht wird unterstützt. Legen Sie ein Kontakt-Foto, übergeben in einem entweder eine base64-codierte Bild oder eine URL auf das Bild zeigen. Das Bild wird vor dem Speichern der BlackBerry Kontakte Datenbank verkleinert. Kontakte Foto wird als base64-codierte Bild zurückgegeben.

*   **Kategorien**: teilweise unterstützt. Nur die Kategorien *Business* und *Personal* werden unterstützt.

*   **URLs**: teilweise unterstützt. Die erste URL wird in BlackBerry **Webseite** Feld gespeichert.

## iOS Macken

*   **DisplayName**: nicht auf iOS, Rückkehr unterstützt `null` es sei kein `ContactName` angegeben, in welchem Fall es gibt den zusammengesetzten Namen, **Spitznamen** oder `""` bzw..

*   **Geburtstag**: muss eingegeben werden, als JavaScript `Date` Objekt, die gleiche Weise zurückgegeben wird.

*   **Fotos**: gibt einen Datei-URL auf das Bild, das im temporären Verzeichnis der Anwendung gespeichert ist. Inhalt des temporären Verzeichnisses werden entfernt, wenn die Anwendung beendet wird.

*   **Kategorien**: Diese Eigenschaft wird derzeit nicht unterstützt, Rückgabe`null`.

## Windows Phone 7 und 8 Macken

*   **DisplayName**: Wenn Sie einen Kontakt erstellen, der Nutzen für den Anzeigenamen der Display-Name-Parameter unterscheidet abgerufen, wenn den Kontakt zu finden.

*   **URLs**: Wenn Sie einen Kontakt erstellen, können Benutzer eingegeben und mehrere Web-Adressen zu speichern, aber einzige steht ist verfügbar, wenn den Kontakt zu suchen.

*   **Telefonnummern**: die *Pref* -Option wird nicht unterstützt. Der *Typ* wird in eine *find* -Operation nicht unterstützt. Nur ein `phoneNumber` ist erlaubt für jeden *Typ*.

*   **Email**: *Pref* -Option wird nicht unterstützt. Haus und persönliche verweist auf dasselbe e-Mail-Eintrag. Nur ein Eintrag ist für jeden *Typ* zulässig..

*   **Adressen**: unterstützt nur Arbeit und Home/persönliche *Art*. Den gleichen Adresseintrag auf den privaten und persönlichen *Typ* verweisen. Nur ein Eintrag ist für jeden *Typ* zulässig..

*   **Organisationen**: nur zulässig ist, und unterstützt nicht die Attribute *Pref*, *Typ*und *Abteilung* .

*   **Hinweis**: nicht unterstützt, Rückgabe`null`.

*   **IMS**: nicht unterstützt, Rückgabe`null`.

*   **Geburtstage**: nicht unterstützt, Rückgabe`null`.

*   **Kategorien**: nicht unterstützt, Rückgabe`null`.


# ContactAddress

Enthält Eigenschaften für ein `Contact` Objekt.

## Eigenschaften

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactAddress` des Benutzers bevorzugten Wert enthält. *(boolesch)*

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. *(DOM-String und enthält)*

*   **formatiert**: die vollständige Adresse, die für die Anzeige formatiert. *(DOM-String und enthält)*

*   **StreetAddress**: die vollständige Postanschrift. *(DOM-String und enthält)*

*   **Ort**: die Stadt oder Gemeinde. *(DOM-String und enthält)*

*   **Region**: dem Staat oder der Region. *(DOM-String und enthält)*

*   **Postleitzahl**: die Postleitzahl oder Postleitzahl. *(DOM-String und enthält)*

*   **Land**: den Ländernamen. *(DOM-String und enthält)*

## Informationen

Das `ContactAddress` -Objekt speichert die Eigenschaften einer einzelnen Adresse eines Kontakts. A `Contact` Objekt gehören mehr als eine Adresse in ein `ContactAddress[]` Array.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android 2.X Macken

*   **Pref**: nicht unterstützt, Rückkehr `false` auf Android 2.X Geräten.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Pref**: BlackBerry-Geräten, Rückgabe nicht unterstützt`false`.

*   **Typ**: teilweise unterstützt. Nur eine *Arbeit* und *Home* Typ Adressen kann pro Kontakt gespeichert werden.

*   **formatiert**: teilweise unterstützt. Gibt eine Verkettung von allen BlackBerry-Adressfelder.

*   **StreetAddress**: unterstützt. Gibt eine Verkettung von BlackBerry **Adresse1** und **Adresse2** Adressfelder.

*   **Ort**: unterstützt. Gespeichert in BlackBerry **Stadt** Adressfeld.

*   **Region**: unterstützt. Gespeichert in BlackBerry **StateProvince** Adressfeld.

*   **Postleitzahl**: unterstützt. Im Feld für die Adresse des BlackBerry- **ZipPostal** gespeichert.

*   **Land**: unterstützt.

## iOS Macken

*   **Pref**: iOS-Geräten, Rückgabe nicht unterstützt`false`.

*   **formatiert**: derzeit nicht unterstützt.


# ContactField

Unterstützt generische Felder in ein `Contact` Objekt. Einige Eigenschaften gespeichert als `ContactField` Objekten gehören e-Mail-Adressen, Telefonnummern und URLs.

## Eigenschaften

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. *(DOM-String und enthält)*

*   **Wert**: der Wert des Feldes, wie z. B. eine Telefonnummer oder e-Mail-Adresse. *(DOM-String und enthält)*

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactField` des Benutzers bevorzugten Wert enthält. *(boolesch)*

## Informationen

Das `ContactField` -Objekt ist eine wieder verwendbare Komponenten stellt Felder generisch kontaktieren. Jeder `ContactField` -Objekt enthält eine `value` , `type` , und `pref` Eigenschaft. A `Contact` -Objekt speichert mehrere Eigenschaften in `ContactField[]` -Arrays, wie Telefon-Nummern und e-Mail-Adressen.

In den meisten Fällen gibt es keine vorher festgelegten Werte für ein `ContactField` **Typ** -Attribut des Objekts. Beispielsweise kann eine Telefonnummer angeben, **Werte von *Zuhause*, *arbeiten*, *mobile*, *iPhone*oder ein beliebiger anderer Wert, der von einem bestimmten Geräteplattform Kontaktdatenbank unterstützt wird** . Jedoch für die `Contact` **Fotos** Feld, das **Typ** -Feld gibt das Format des zurückgegebenen Bild: **Url** wenn das **Value** -Attribut eine URL zu dem Foto Bild oder *base64* , enthält Wenn der **Wert** eine base64-codierte Bild-Zeichenfolge enthält. 

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android Macken

*   **Pref**: nicht unterstützt, Rückgabe`false`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Typ**: teilweise unterstützt. Für Telefonnummern verwendet.

*   **Wert**: unterstützt.

*   **Pref**: nicht unterstützt, Rückgabe`false`.

## iOS Macken

*   **Pref**: nicht unterstützt, Rückgabe`false`.


# ContactFindOptions

Enthält Eigenschaften, die verwendet werden können, um die Ergebnisse zu filtern einen `contacts.find` Betrieb.

## Eigenschaften

*   **Filter**: die zu suchende Zeichenfolge verwendet, um Kontakte zu finden. *(DOM-String und enthält)* (Standard:`""`)

*   **mehrere**: bestimmt, ob der Suchvorgang mehrere Kontakte gibt. *(Boolesch)* (Standard:`false`)

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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

Enthält verschiedene Arten von Informationen über ein `Contact` Name des Objekts.

## Eigenschaften

*   **formatiert**: den vollständigen Namen des Kontakts. *(DOM-String und enthält)*

*   **Nachname**: Familienname des Kontakts. *(DOM-String und enthält)*

*   **GivenName**: Given Name des Kontaktes. *(DOM-String und enthält)*

*   **MiddleName**: Middle Name des Kontaktes. *(DOM-String und enthält)*

*   **HonorificPrefix**: der Kontakt-Präfix (z.B. *Mr.* oder *Dr.*) *(DOM-String und enthält)*

*   **HonorificSuffix**: der Kontakt-Suffix (Beispiel *Esq.*). *(DOM-String und enthält)*

## Informationen

Das `ContactName` -Objekt speichert Namenseigenschaften eines Kontakts.

## Unterstützte Plattformen

*   Android 2.X
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android Macken

*   **formatiert**: teilweise unterstützte "und" Read-only. Gibt eine Verkettung von `honorificPrefix` , `givenName` , `middleName` , `familyName` , und`honorificSuffix`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **formatiert**: teilweise unterstützt. Gibt eine Verkettung von BlackBerry- **FirstName** und **LastName** -Feldern.

*   **Nachname**: unterstützt. Im Feld der BlackBerry- **Nachname** gespeichert.

*   **GivenName**: unterstützt. Im BlackBerry **FirstName** -Feld gespeichert.

*   **MiddleName**: nicht unterstützt, Rückgabe`null`.

*   **HonorificPrefix**: nicht unterstützte, Rückgabe`null`.

*   **HonorificSuffix**: nicht unterstützte, Rückgabe`null`.

## iOS Macken

*   **formatiert**: teilweise unterstützt. IOS zusammengesetzten Namen gibt, aber ist schreibgeschützt.


# ContactOrganization

Enthält eine `Contact` Organisation Objekteigenschaften.

## Eigenschaften

*   **Pref**: Legen Sie auf `true` Wenn dieses `ContactOrganization` des Benutzers bevorzugten Wert enthält. *(boolesch)*

*   **Typ**: eine Zeichenfolge, die angibt, welche Art von Feld in diesem *Hause* zum Beispiel. _(DOMString)

*   **Name**: der Name der Organisation. *(DOM-String und enthält)*

*   **Abteilung**: die Abteilung, die der Vertrag für arbeitet. *(DOM-String und enthält)*

*   **Titel**: Titel des Kontakts in der Organisation. *(DOM-String und enthält)*

## Informationen

Das `ContactOrganization` -Objekt speichert Organisationseigenschaften eines Kontakts. A `Contact` -Objekt speichert eine oder mehrere `ContactOrganization` Objekte in einem Array.

## Unterstützte Plattformen

*   Android
*   BlackBerry WebWorks (OS 5.0 und höher)
*   iOS
*   Windows Phone 7 und 8
*   Windows 8

## Kleines Beispiel

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
    

## Vollständiges Beispiel

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
    

## Android 2.X Macken

*   **Pref**: von Android 2.X-Geräte, Rückgabe nicht unterstützt`false`.

## BlackBerry WebWorks (OS 5.0 und höher) Macken

*   **Pref**: von BlackBerry-Geräten zurückgeben nicht unterstützt`false`.

*   **Typ**: von BlackBerry-Geräten zurückgeben nicht unterstützt`null`.

*   **Name**: teilweise unterstützt. Der Name der ersten Organisation wird im Feld **Firma** BlackBerry gespeichert.

*   **Abteilung**: nicht unterstützt, Rückgabe`null`.

*   **Titel**: teilweise unterstützt. Der erste Titel der Organisation wird im Feld **JobTitle** BlackBerry gespeichert.

## iOS Macken

*   **Pref**: iOS-Geräten, Rückgabe nicht unterstützt`false`.

*   **Typ**: iOS-Geräten, Rückgabe nicht unterstützt`null`.

*   **Name**: teilweise unterstützt. Der Name der ersten Organisation wird im Feld **kABPersonOrganizationProperty** iOS gespeichert.

*   **Abteilung**: teilweise unterstützt. Die Abteilungsnamen der erste ist im Feld **kABPersonDepartmentProperty** iOS gespeichert.

*   **Titel**: teilweise unterstützt. Der erste Titel wird im Feld **kABPersonJobTitleProperty** iOS gespeichert.


# ContactError

A `ContactError` -Objekt übergeben, um die `contactError` Rückruf, wenn ein Fehler auftritt.

## Eigenschaften

*   **Code**: einer der vordefinierten Fehlercodes aufgeführt.

## Konstanten

*   `ContactError.UNKNOWN_ERROR`
*   `ContactError.INVALID_ARGUMENT_ERROR`
*   `ContactError.TIMEOUT_ERROR`
*   `ContactError.PENDING_OPERATION_ERROR`
*   `ContactError.IO_ERROR`
*   `ContactError.NOT_SUPPORTED_ERROR`
*   `ContactError.PERMISSION_DENIED_ERROR`

## Beschreibung

Das `ContactError` -Objekt wird zurückgegeben, die der Benutzer über die `contactError` Callback-Funktion, wenn ein Fehler auftritt.


# contactSuccess

Erfolg-Callback-Funktion bietet die `Contact` Array aus einem `contacts.find` Betrieb.

    function(contacts) {
        // Do something
    }
    

## Parameter

*   **Kontakt**: das Kontakt Array aus einem Suchvorgang. *(Kontakt)*

## Beispiel

    function contactSuccess(contacts) {
        for (var i=0; i<contacts.length; i++) {
            console.log("Display Name = " + contacts[i].displayName);
        }
    }


# contactError

Fehler Callback-Funktion für Kontakt-Funktionen.

    function(error) {
        // Handle the error
    }


# contactFields

Erforderlicher Parameter für die `contacts.find` -Methode verwendet, um anzugeben, welche Felder enthalten sollte die `Contact` Objekte aus einem Suchvorgang.

    ["Name", "Telefonnummern", "Email"]


# contactFindOptions

Optionale Parameter von der `contacts.find` -Methode, verwendet um die Kontakte von der Kontaktdatenbank zurückgegebenen zu filtern.

    {Filter: "", mehrere: true};
    

## Optionen

*   **Filter**: die zu suchende Zeichenfolge verwendet, um Kontakte zu filtern. *(DOM-String und enthält)* (Standard:`""`)

*   **mehrere**: bestimmt, ob der Suchvorgang mehrere Kontakte gibt. *(Boolesch)* (Standard:`false`)
