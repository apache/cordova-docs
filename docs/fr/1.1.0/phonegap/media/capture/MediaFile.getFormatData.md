---
license: Licensed to the Apache Software Foundation (ASF) under one
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

MediaFile.getFormatData
=======================

> Récupèrer les informations sur le format d'un fichier média capturé.

    mediaFile.getFormatData( 
        MediaFileDataSuccessCB successCallback, 
        [MediaFileDataErrorCB errorCallback]
    );

Description
-----------

Cette fonction tente de récupérer de manière asynchrone les informations relatives au format d'un fichier média.  En cas de réussite, la fonction de callback MediaFileDataSuccessCB est appelée avec en argument un objet MediaFileData.  En cas d'échec, la fonction de callback MediaFileDataErrorCB est appelée avec en argument un objet MediaError.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS
- Windows Phone 7 ( Mango )

Singularités BlackBerry WebWorks
--------------------------------
Aucune API ne fournit d'information sur le format des fichiers média.  Par conséquent, tous les objets MediaFileData seront retournés avec des valeurs par défaut. Voir la documentation de MediaFileData.

Singularités Android
--------------------
L'API de récupération des informations de format de fichier média est incomplète.  Par conséquent, les propriétés de MediaFileData ne sont pas toutes supportées. Voir la documentation MediaFileData.

Singularités iOS
----------------
L'API de récupération des informations de format de fichier média est incomplète.  Par conséquent, les propriétés de MediaFileData ne sont pas toutes supportées. Voir la documentation MediaFileData.