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

Podpira generičnih polja v a `Contact` predmeta. Nekatere lastnosti, ki so shranjene kot `ContactField` predmeti vključujejo e-poštne naslove, telefonske številke in URL-jev.

## Lastnosti

*   **Vrsta**: niz, ki označuje vrsto polja, to je, *doma* , na primer. *(DOMString)*

*   **vrednost**: vrednost polja, na primer telefonsko številko ali e-naslov. *(DOMString)*

*   **napol**: nastavite na `true` Če ta `ContactField` vsebuje uporabnikovo želeno vrednost. *(boolean)*

## Podrobnosti

Z `ContactField` predmet je enkratno uporabo komponente, ki predstavlja stik polja generično. Vsak `ContactField` predmet vsebuje a `value` , `type` , in `pref` lastnosti. A `Contact` predmet hrani nekaj lastnosti v `ContactField[]` nizi, kot so telefonske številke in email naslovi.

V večini primerov, so vnaprej določene vrednosti za a `ContactField` atributa **vrste** predmeta. Primer telefonske številke lahko določite **vrsto** vrednosti *doma*, *delo*, *mobilne*, *iPhone*, ali katera koli druga vrednost, ki je podprta z posebno napravo platformo kontaktne zbirke podatkov. Pa za v `Contact` **fotografije** polje, polje **Vrsta** označuje obliko vrnjeno slike: **url** Če **vrednost** atributa vsebuje URL do foto slike ali *base64* , ko **vrednost** vsebuje niz base64 kodirane sliko. 

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Celoten primer

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
    

## Android Quirks

*   **napol**: ni podprta, vračajo`false`.

## BlackBerry WebWorks 5.0 + Quirks

*   **Vrsta**: delno podprte. Uporabljajo za telefonske številke.

*   **vrednost**: podpira.

*   **napol**: ni podprta, vračajo`false`.

## iOS Quirks

*   **napol**: ni podprta, vračajo`false`.