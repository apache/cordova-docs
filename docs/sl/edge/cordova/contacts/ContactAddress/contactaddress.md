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

# ContactAddress

Vsebuje naslov lastnosti za a `Contact` predmeta.

## Lastnosti

*   **napol**: nastavite na `true` Če ta `ContactAddress` vsebuje uporabnikovo želeno vrednost. *(boolean)*

*   **Vrsta**: niz, ki označuje vrsto polja, to je, *doma* , na primer. *(DOMString)*

*   **oblikovano**: polni naslov oblikovani za prikaz. *(DOMString)*

*   **streetAddress**: polno ulico. *(DOMString)*

*   **okraja**: mesta ali kraja. *(DOMString)*

*   **regija**: država ali regija. *(DOMString)*

*   **»PostalCode «**: poštno številko ali poštno številko. *(DOMString)*

*   **država**: ime države. *(DOMString)*

## Podrobnosti

Z `ContactAddress` predmet shranjuje lastnosti enotni naslov stika. A `Contact` predmet lahko vključuje več kot en naslov v a `ContactAddress[]` matrike.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Android 2.X Quirks

*   **napol**: ni podprta, vrne `false` napravah Android 2.X.

## BlackBerry WebWorks 5.0 + Quirks

*   **napol**: ne podpira naprave BlackBerry, vračajo`false`.

*   **Vrsta**: delno podprte. *Delo* in *Domov* vrste naslovov, samo ena lahko shrani na Kontakt.

*   **oblikovano**: delno podprte. Vrne spojitev vse BlackBerry polja naslova.

*   **streetAddress**: podpira. Vrne spojitev BlackBerry **address1** in **Naslov2** polja naslova.

*   **okraja**: podpira. Shranjene v polje naslov **mesto** BlackBerry.

*   **regija**: podpira. Shranjeni v polju naslov **stateProvince** BlackBerry.

*   **»PostalCode «**: podpira. Shranjeni v polju naslov **zipPostal** BlackBerry.

*   **država**: podpira.

## iOS Quirks

*   **napol**: ni podprta na iOS napravah, vračajo`false`.

*   **oblikovano**: trenutno ni podprto.