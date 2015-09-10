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

# contacts.Create

Retourne un nouvel objet <a href="Contact/contact.html">Contact</a>.

    var contact = navigator.contacts.create(properties);
    

## Description

La méthode `contacts.create` est synchrone et retourne un nouvel objet `<a href="Contact/contact.html">Contact</a>`.

Cette méthode ne conserve pas l'objet <a href="Contact/contact.html">Contact</a> dans la base de données des contacts de l'appareil, pour lesquels il faut appeler la méthode `<a href="Contact/contact.html">Contact</a>.save`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8

## Petit exemple

    var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title><a href="Contact/contact.html">Contact</a> <a href="../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            var my<a href="Contact/contact.html">Contact</a> = navigator.contacts.create({"displayName": "Test User"});
            my<a href="Contact/contact.html">Contact</a>.note = "This contact has a note.";
            console.log("The contact, " + my<a href="Contact/contact.html">Contact</a>.displayName + ", note: " + my<a href="Contact/contact.html">Contact</a>.note);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../storage/storage.opendatabase.html">Example</a></h1>
        <p>Create <a href="Contact/contact.html">Contact</a></p>
      </body>
    </html>