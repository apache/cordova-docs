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

Vsebuje a `Contact` lastnosti predmeta organizacija.

## Lastnosti

*   **napol**: nastavite na `true` Če ta `ContactOrganization` vsebuje uporabnikovo želeno vrednost. *(boolean)*

*   **Vrsta**: niz, ki označuje vrsto polja, to je, *doma* , na primer. _(DOMString)

*   **ime**: ime organizacije. *(DOMString)*

*   **oddelek**: oddelek pogodbe tovarna zakaj. *(DOMString)*

*   **naslov**: naslov stika pri organizaciji. *(DOMString)*

## Podrobnosti

Z `ContactOrganization` predmet hrani organizacija lastnosti stika. A `Contact` predmet hrani enega ali več `ContactOrganization` predmetov v array.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Android 2.X Quirks

*   **napol**: ne podpira naprave Android 2.X, vračajo`false`.

## BlackBerry WebWorks 5.0 + Quirks

*   **napol**: ne podpira naprave BlackBerry, vračajo`false`.

*   **Vrsta**: ne podpira naprave BlackBerry, vračajo`null`.

*   **ime**: delno podprte. Prvo ime organizacije je shranjena v polju **podjetje** BlackBerry.

*   **ministrstvo**: ne podpira, vračajo`null`.

*   **naslov**: delno podprte. Prvi naslov organizacije je shranjena v polju BlackBerry **delovno mesto** .

## iOS Quirks

*   **napol**: ni podprta na iOS napravah, vračajo`false`.

*   **Vrsta**: ni podprta na iOS napravah, vračajo`null`.

*   **ime**: delno podprte. Prvo ime organizacije je shranjena v polju **kABPersonOrganizationProperty** iOS.

*   **oddelek**: delno podprte. Prvi oddelek ime shranjeno v polju **kABPersonDepartmentProperty** iOS.

*   **naslov**: delno podprte. Prvi naslov je shranjena v polju **kABPersonJobTitleProperty** iOS.