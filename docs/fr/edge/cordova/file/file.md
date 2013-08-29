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

# Fichier

> Une API pour lire, écrire et naviguer dans les hiérarchies de système de fichiers, basés sur l' [API de fichier W3C][1].

 [1]: http://www.w3.org/TR/FileAPI

## Objets

*   DirectoryEntry
*   DirectoryReader
*   Fichier
*   FileEntry
*   FileError
*   FileReader
*   Système de fichiers
*   Transfert de fichiers
*   FileTransferError
*   FileUploadOptions
*   FileUploadResult
*   FileWriter
*   Drapeaux
*   Local
*   Métadonnées

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file.git
        $ cordova plugin rm org.apache.cordova.core.file
    

Pour utiliser le plugin de transfert de fichiers vous devez ajouter séparément.

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-file-transfer.git
        $ cordova plugin rm org.apache.cordova.core.file-transfer
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android
    
        (in app/res/XML/config.Xml) < nom de la fonction = "File" >< param name = "android-package" value="org.apache.cordova.FileUtils" / >< / fiction >< nom de la fonction = "Transfert de fichiers" >< param name = "android-package" value="org.apache.cordova.FileTransfer" / >< / fiction > (dans app/AndroidManifest.xml) < permissions des utilisations android:name="android.permission.WRITE_EXTERNAL_STORAGE" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nom de la fonction = "Fichier" >< param name = "blackberry-package" value="org.apache.cordova.file.FileManager" / >< / fiction >< nom de la fonction = "Transfert de fichiers" >< param name = "blackberry-package" value="org.apache.cordova.http.FileTransfer" / >< / fiction > (dans www/config.xml) < disposent d'id="blackberry.io.file" requis = "true" version = "1.0.0.0" / >< disposent d'id="blackberry.utils" requis = "true" version = "1.0.0.0" / >< disposent d'id="blackberry.io.dir" requis = "true" version = "1.0.0.0" / >< jante: autorisations >< jante : permis > access_shared < / jante : permis >< / jante : autorisations >
        

*   iOS (en`config.xml`)
    
        < nom de la fonction = « File » >< param nom = valeur « ios-package » = « CDVFile » / >< / fiction >< nom de la fonction = « Transfert de fichiers » >< param nom = valeur « ios-package » = « CDVFileTransfer » / >< / fiction >
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.