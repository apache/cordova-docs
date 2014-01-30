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

# Stik

Vsebuje lastnosti, ki opisujejo stik, kot so uporabnikovo osebni ali poslovni stik.

## Lastnosti

*   **ID**: globalni enolični identifikator. *(DOMString)*

*   **displayName**: ime stika, primerna za prikaz končnim uporabnikom. *(DOMString)*

*   **ime**: objekt, ki vsebuje vse komponente imena oseb. *(ImeStika)*

*   **Vzdevek**: casual ime s katerim naslov stika. *(DOMString)*

*   **phoneNumbers**: paleto vse kontaktne telefonske številke. *(ContactField[])*

*   **e-pošto**: paleto vse kontaktne naslove. *(ContactField[])*

*   **naslovi**: paleto vse kontaktne naslove. *(ContactAddress[])*

*   **IMS**: matrika IM vse kontaktne naslove. *(ContactField[])*

*   **organizacije**: paleto organizacij vse stike. *(ContactOrganization[])*

*   **rojstni dan**: rojstni dan stika. *(Datum)*

*   **Opomba**: Opomba o stiku. *(DOMString)*

*   **fotografije**: paleto stika fotografije. *(ContactField[])*

*   **kategorije**: paleto vse uporabniško določene kategorije povezane s stikom. *(ContactField[])*

*   **URL**: paleto spletnih strani, povezane s stikom. *(ContactField[])*

## Metode

*   **klon**: vrne novo `Contact` predmet, ki je globoka kopijo kliče predmeta, z v `id` lastnost nastavljena na`null`.

*   **odstranite**: Odstrani vizitko iz zbirki podatkov stikov napravo, sicer izvede callback napake z a `ContactError` predmeta.

*   **Shrani**: shrani nov stik na seznamu stikov napravo ali posodobi obstoječe stika, če stik z istim **ID-jem** že obstaja.

## Podrobnosti

Z `Contact` predmet predstavlja stik uporabnika. Stike lahko ustvaril, hranijo ali odstranjen iz naprave podatkovna zbirka stikov. Stike lahko tudi pridobljeni (individualno ali v razsutem stanju) iz zbirke podatkov s sklicevanjem na `contacts.find` način.

**Opomba**: ne vseh zgoraj navedenih polj stika so podprte na vsak načrt plosčad. Prosimo, preverite vsako platformo *Quirks* odsek za podrobnosti.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Shranite hiter primer

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
    

## Klon hiter primer

        // clone the contact object
        var clone = contact.clone();
        clone.name.givenName = "John";
        console.log("Original contact name = " + contact.name.givenName);
        console.log("Cloned contact name = " + clone.name.givenName);
    

## Odstranite hitro primer

    function onSuccess() {
        alert("Removal Success");
    };
    
    function onError(contactError) {
        alert("Error = " + contactError.code);
    };
    
        // remove the contact from the device
        contact.remove(onSuccess,onError);
    

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
    

## Android 2.X Quirks

*   **kategorije**: ni podprta v napravah Android 2.X, vračajo`null`.

## BlackBerry WebWorks 5.0 + Quirks

*   **ID**: podpira. Dodelil naprave pri shranjevanju stika.

*   **displayName**: podpira. Shranjene na BlackBerry **UPORABNIK1** področju.

*   **Vzdevek**: ni podprta, vračajo`null`.

*   **phoneNumbers**: delno podprte. Telefonske številke, shranjene v BlackBerry polj **homePhone1** in **homePhone2** Če *tipa* "dom", **workPhone1** in **workPhone2** Če *tipa* "delo", **mobilePhone** , če *tip* je 'prenosen', **faxPhone** , če je *Vrsta* "faks", **pagerPhone** , če *tip* "pager", in **otherPhone** , če *tip* je nič od naštetega.

*   **e-pošto**: delno podprte. Prvi tri email naslovi shranjeni v BlackBerry **email1**, **email2**, **email3** polji in, oziroma.

*   **naslovi**: delno podprte. Prvi in drugi naslovi so shranjeni v BlackBerry **homeAddress** in **workAddress** polja, oziroma.

*   **IMS**: ni podprta, vračajo`null`.

*   **organizacije**: delno podprte. **Ime** in **naslov** prvega organizacije so shranjene v BlackBerry **podjetja** in **naslov** polja, oziroma.

*   **fotografije**: delno podprte. Eno fotografijo velikosti sličic je podprta. Nastavite fotografijo stika, prelaz v a bodisi base64 kodirane sliko ali URL kaže na sliko. Slika je luskast niz pred shranjevanjem v zbirki podatkov stikov BlackBerry. Fotografijo stika je vrnil kot base64 kodirane sliko.

*   **kategorije**: delno podprte. Podprte so le *poslovne* in *osebne* kategorije.

*   **URL**: delno podprte. Prvi URL, ki je shranjena v BlackBerry **spletni strani** polja.

## iOS Quirks

*   **displayName**: ni podprta na iOS, vračajo `null` razen če obstaja ni `ContactName` določena, v tem primeru vrne sestavljeno ime, **Vzdevek** ali `""` , oziroma.

*   **rojstni dan**: Vnesite kot JavaScript `Date` predmeta, na enak način, se je vrnil.

*   **fotografije**: vrne URL datoteke s sliko, ki je shranjen v začasnem imeniku aplikacije. Vsebino začasnega imenika se odstranijo, ko program zapre.

*   **kategorije**: lastnost trenutno ni podprta, vračajo`null`.

## Windows Phone 7 in 8 Quirks

*   **displayName**: ko ustvarjanja stika, navedena za prikazno ime parametra, ki se razlikuje od prikazanega imena pridobijo pri iskanju stika.

*   **URL**: pri ustvarjanju stika, lahko uporabnik vložek in shranite več kot en spletni naslov, a le ena je na voljo pri iskanju stika.

*   **phoneNumbers**: ne podpira možnosti *napol* . *Vrsta* ni podprta v *našli* operacijo. Samo en `phoneNumber` je dovoljeno za vsako *vrsto*.

*   **e-pošto**: ne podpira možnosti *napol* . Dom in osebne reference isti email vpis. Šele nedoločni zaimek vstop je omogučiti za vsako *vrsto*.

*   **naslovi**: podpira le delo in dom/oseben *tipa*. Dom ter oseben *Vrsta* reference isti naslov vpis. Šele nedoločni zaimek vstop je omogučiti za vsako *vrsto*.

*   **organizacije**: edini je dovoljeno, in podpira *napol*, *vrsto*in *oddelek* atribute.

*   **Opomba**: ne podpira, vračajo`null`.

*   **IMS**: ni podprta, vračajo`null`.

*   **rojstni dan**: ni podprta, vračajo`null`.

*   **kategorije**: ni podprta, vračajo`null`.