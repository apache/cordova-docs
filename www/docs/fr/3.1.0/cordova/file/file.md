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

# <a href="fileobj/fileobj.html">File</a>

> Une API permettant de lire, écrire et naviguer dans les hiérarchies d'un système de fichiers, basée sur [celle du w3c][1].

 [1]: http://www.w3.org/TR/<a href="fileobj/fileobj.html">File</a>API

## Objets

*   <a href="directoryentry/directoryentry.html">DirectoryEntry</a>
*   <a href="directoryreader/directoryreader.html">DirectoryReader</a>
*   Fichier
*   <a href="fileentry/fileentry.html"><a href="fileobj/fileobj.html">File</a>Entry</a>
*   <a href="fileerror/fileerror.html"><a href="fileobj/fileobj.html">File</a>Error</a>
*   <a href="filereader/filereader.html"><a href="fileobj/fileobj.html">File</a>Reader</a>
*   Système de fichiers
*   <a href="filetransfer/filetransfer.html">Transfert de fichiers</a>
*   <a href="filetransfererror/filetransfererror.html"><a href="fileobj/fileobj.html">File</a>TransferError</a>
*   <a href="fileuploadoptions/fileuploadoptions.html"><a href="fileobj/fileobj.html">File</a>UploadOptions</a>
*   <a href="fileuploadresult/fileuploadresult.html"><a href="fileobj/fileobj.html">File</a>UploadResult</a>
*   <a href="filewriter/filewriter.html"><a href="fileobj/fileobj.html">File</a>Writer</a>
*   Drapeaux
*   Local
*   Métadonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente les API liées à l'appareil en tant que *plugins*. Utiliser la commande `plugin` de l'Interface en Ligne de Commande, décrite dans la section intitulée L'Interface en Ligne de Commande, afin d'ajouter ou retirer cette fonctionnalité à un projet :

        $ cordova plugin add org.apache.cordova.file
        $ cordova plugin ls
        [ 'org.apache.cordova.file' ]
        $ cordova plugin rm org.apache.cordova.file
    

Pour utiliser le plugin de transfert de fichiers vous devez ajouter celui-ci séparément :

        $ cordova plugin add org.apache.cordova.file-transfer
        $ cordova plugin ls
        [ 'org.apache.cordova.file-transfer' ]
        $ cordova plugin rm org.apache.cordova.file-transfer
    

Ces commandes s'appliquent à toutes les plates-formes ciblées mais modifient les paramètres de configuration spécifiques aux différentes plates-formes tel que décrit ci-dessous :

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="android-package" value="org.apache.cordova.<a href="fileobj/fileobj.html">File</a>Utils" />
        </feature>
        <feature name="<a href="fileobj/fileobj.html">File</a>Transfer">
            <param name="android-package" value="org.apache.cordova.<a href="fileobj/fileobj.html">File</a>Transfer" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="blackberry-package" value="org.apache.cordova.file.<a href="fileobj/fileobj.html">File</a>Manager" />
        </feature>
        <feature name="<a href="fileobj/fileobj.html">File</a>Transfer">
            <param name="blackberry-package" value="org.apache.cordova.http.<a href="fileobj/fileobj.html">File</a>Transfer" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.io.file" required="true" version="1.0.0.0" />
        <feature id="blackberry.utils"   required="true" version="1.0.0.0" />
        <feature id="blackberry.io.dir"  required="true" version="1.0.0.0" />
        <rim:permissions>
            <rim:permit>access_shared</rim:permit>
        </rim:permissions>
        

*   iOS (dans `config.xml`)
    
        <feature name="<a href="fileobj/fileobj.html">File</a>">
            <param name="ios-package" value="CDV<a href="fileobj/fileobj.html">File</a>" />
        </feature>
        <feature name="<a href="fileobj/fileobj.html">File</a>Transfer">
            <param name="ios-package" value="CDV<a href="fileobj/fileobj.html">File</a>Transfer" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.