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

Contient les propriétés de l'entreprise de l'objet `Contact</code.></p>

<h2>Propriétés</h2>

<ul>
<li><p><strong>pref</strong> : fixé à <code>true` si `ContactOrganization` contient la valeur préférée de l'utilisateur. *(booléen)*</li> 

*   **type** : une chaîne qui indique le type de champ, *home* par exemple. _(DOMString)

*   **name** : le nom de l'organisation. *(DOMString)*

*   **department** : le département pour lequel travaille le contact. *(DOMString)*

*   **title** : titre du contact au sein de l'organisation. *(DOMString)*</ul> 

## Détails

L'objet `ContactOrganization` stocke des propriétés de l'entreprise d'un contact. Un objet `Contact` contient un ou plusieurs objets `ContactOrganization` dans un tableau.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Petit exemple

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
    

## Exemple complet

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
    

## Spécificités Android 2.X

*   **pref** : non pris en charge par des appareils Android 2.X, retourne `false`.

## Spécificités BlackBerry WebWorks (OS 5.0 et plus)

*   **pref** : non pris en charge par les appareils BlackBerry, retourne `false`.

*   **type**: non pris en charge par les appareils BlackBerry, retourne `null`.

*   **name** : partiellement pris en charge. Le premier nom de l'entreprise est stocké dans le champ **company** de BlackBerry.

*   **department** : non pris en charge, retourne `null`.

*   **title** : partiellement pris en charge. Le premier titre de l'entreprise est stocké dans le champ de **jobTitle** BlackBerry.

## Spécificités iOS

*   **pref** : non pris en charge sur les appareils iOS, retourne `false`.

*   **type** : non pris en charge sur les appareils iOS, retourne `null`.

*   **name** : partiellement pris en charge. Le premier nom de l'entreprise est stocké dans le champ de **kABPersonOrganizationProperty** iOS.

*   **department** : partiellement pris en charge. Le premier nom de département est stocké dans le champ de **kABPersonDepartmentProperty** iOS.

*   **title** : partiellement pris en charge. Le premier titre est stocké dans le champ **kABPersonJobTitleProperty** iOS.