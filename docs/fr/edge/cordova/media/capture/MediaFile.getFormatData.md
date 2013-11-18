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

# MediaFile.getFormatData

> Récupère des informations sur le format du fichier média capturé.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]) ;
    

## Description

Cette fonction tente de récupérer les informations de format d'un fichier média de façon asynchrone. Si la tentative réussit, la fonction callback `MediaFileDataSuccessCB` est exécutée et un objet `MediaFileData` lui est transmis en paramètre. Si la tentative échoue, la fonction callback `MediaFileDataErrorCB` est appelée.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## Particularités de BlackBerry WebWorks

Aucune API permettant la récupération d'informations sur des fichiers média n'est disponible. Par conséquent, les objets `MediaFileData` contiennent toujours des valeurs par défaut.

## Particularités d'Android

L'API pour accéder aux informations de format des fichiers média est limitée, toutes les propriétés `MediaFileData` ne sont donc pas prises en charge.

## Particularités d'iOS

L'API pour accéder aux informations de format des fichiers média est limitée, toutes les propriétés `MediaFileData` ne sont donc pas prises en charge.