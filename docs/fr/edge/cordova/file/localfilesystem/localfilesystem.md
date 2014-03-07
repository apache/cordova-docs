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

# LocalFileSystem

Cet objet fournit un moyen d'obtenir la racine de systèmes de fichiers.

## Méthodes

*   **requestFileSystem** : demande un système de fichiers. *(Function)*

*   **resolveLocalFileSystemURI** : récupère un objet `DirectoryEntry` ou `FileEntry` à partir d'un URI local. *(Function)*

## Constantes

*   `LocalFileSystem.PERSISTENT` : constante faisant référence à un stockage qui ne devrait pas être supprimé par l'agent utilisateur sans l'autorisation de application ou de l'utilisateur.

*   `LocalFileSystem.TEMPORARY` : constante faisant référence à un stockage sans garantie de persistance.

## Détails

Les méthodes de l'objet `LocalFileSystem` sont définies directement sur l'objet global `window`.

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
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    

## Exemple court de résolution d'un système de fichiers via un URI local

    function onSuccess(fileEntry) {
        console.log(fileEntry.name);
    }
    
    window.resolveLocalFileSystemURI("file:///example.txt", onSuccess, onError);
    

## Exemple complet

    <!DOCTYPE html>
    <html>
      <head>
        <title>Local File System Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            window.resolveLocalFileSystemURI("file:///example.txt", onResolveSuccess, fail);
        }
    
        function onFileSystemSuccess(fileSystem) {
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
        <h1>Example</h1>
        <p>Local File System</p>
      </body>
    </html>
    

# requestFileSystem

> Demande un système de fichier dans lequel stocker les données de l'application.

     window.requestFileSystem(type, size, successCallback, errorCallback)
    

*   **window** : référence à l'objet global window
*   **type** : type du système de fichiers local, voir les constantes associées à l'objet LocalFileSystem
*   **size** : indique la quantité d'espace stockage, en octets, requise par l'application
*   **successCallback** : fonction appelée avec un objet FileSystem
*   **errorCallback** : fonction invoquée si une erreur se produit lors de la récupération du système de fichiers

## Exemple court de demande d'un système de fichiers

    function onSuccess(fileSystem) {
        console.log(fileSystem.name);
    }
    
    // request the persistent file system
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);