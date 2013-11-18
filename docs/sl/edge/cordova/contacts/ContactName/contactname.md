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

# ContactName

Vsebuje različne informacije o a `Contact` ime predmeta.

## Lastnosti

*   **oblikovano**: popolno ime stika. *(DOMString)*

*   **familyName**: priimek stika. *(DOMString)*

*   **givenName**: osebno ime stika. *(DOMString)*

*   **middleName**: srednje ime stika. *(DOMString)*

*   **honorificPrefix**: predpona stika (primer *g.* ali *Dr.*) *(DOMString)*

*   **honorificSuffix**: stika pripona (primer *Esq.*). *(DOMString)*

## Podrobnosti

Z `ContactName` predmet hrani ime lastnosti stika.

## Podprte platforme

*   Android 2.X
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

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
    

## Android Quirks

*   **oblikovano**: delno podprt, ter čitanje-šele. Vrne spojitev od `honorificPrefix` , `givenName` , `middleName` , `familyName` , in`honorificSuffix`.

## BlackBerry WebWorks 5.0 + Quirks

*   **oblikovano**: delno podprte. Vrne spojitev polj **firstName** in **lastName** BlackBerry.

*   **familyName**: podpira. Shranjene v polje **»LastName«** BlackBerry.

*   **givenName**: podpira. Shranjeni v polju **»FirstName«** BlackBerry.

*   **middleName**: ne podpira, vračajo`null`.

*   **honorificPrefix**: ne podpira, vračajo`null`.

*   **honorificSuffix**: ne podpira, vračajo`null`.

## iOS Quirks

*   **oblikovano**: delno podprte. Vrne iOS sestavljeno ime, vendar je samo za branje.