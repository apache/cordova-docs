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

# Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

Cet objet fournit un moyen d'obtenir la racine de systèmes de fichiers.

## Méthodes

*   **request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>** : demande un système de fichiers. *(Function)*

*   **resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI** : récupère un objet `<a href="../directoryentry/directoryentry.html">DirectoryEntry</a>` ou `<a href="../fileentry/fileentry.html"><a href="../fileobj/fileobj.html">File</a>Entry</a>` à partir d'un URI local. *(Function)*

## Constantes

*   `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT` : constante faisant référence à un stockage qui ne devrait pas être supprimé par l'agent utilisateur sans l'autorisation de application ou de l'utilisateur.

*   `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.TEMPORARY` : constante faisant référence à un stockage sans garantie de persistance.

## Détails

Les méthodes de l'objet `Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>` sont définies directement sur l'objet global `window`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Exemple court de demande d'un système de fichiers

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);
    

## Exemple court de résolution d'un système de fichiers via un URI local

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local <a href="../fileobj/fileobj.html">File</a> System <a href="../../storage/storage.opendatabase.html">Example</a></title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.<a href="../../inappbrowser/inappbrowser.html">addEventListener</a>("<a href="../../events/events.deviceready.html">deviceready</a>", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success, fail);
            window.resolveLocal<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>URI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function on<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>Success(fileSystem) {
            console.log(fileSystem.name);
        }
    
        function onResolveSuccess(fileEntry) {
            console.log(fileEntry.name);
        }
    
        function fail(evt) {
            console.log(evt.target.error.code);
        }
    
        </script>
      </head>
      <body>
        <h1><a href="../../storage/storage.opendatabase.html">Example</a></h1>
        <p>Local <a href="../fileobj/fileobj.html">File</a> System</p>
      </body>
    </html>
    

# request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>

> Demande un système de fichier dans lequel stocker les données de l'application.

     window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(type, size, successCallback, errorCallback)
    

*   **window** : référence à l'objet global window
*   **type** : type du système de fichiers local, voir les constantes associées à l'objet Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>
*   **size** : indique la quantité d'espace stockage, en octets, requise par l'application
*   **successCallback** : fonction appelée avec un objet <a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>
*   **errorCallback** : fonction invoquée si une erreur se produit lors de la récupération du système de fichiers

## Exemple court de demande d'un système de fichiers

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.request<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>(Local<a href="../filesystem/filesystem.html"><a href="../fileobj/fileobj.html">File</a>System</a>.PERSISTENT, 0, onSuccess, onError);