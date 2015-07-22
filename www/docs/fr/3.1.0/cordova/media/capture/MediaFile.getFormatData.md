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

> Récupère le format d'informations sur le fichier de capture de médias.

    mediaFile.getFormatData (MediaFileDataSuccessCB successCallback, [MediaFileDataErrorCB errorCallback]) ;
    

## Description

Cette fonction de façon asynchrone tente de récupérer les informations de format pour le fichier multimédia. Si réussie, elle appelle le `MediaFileDataSuccessCB` rappel avec un `MediaFileData` objet. Si la tentative échoue, cette fonction appelle la `MediaFileDataErrorCB` rappel.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## BlackBerry WebWorks Quirks

Ne fournit pas une API pour plus d'informations sur les fichiers de médias, alors tous les `MediaFileData` objets reviennent avec les valeurs par défaut.

## Quirks Android

L'API pour accéder aux médias file format informations est limité, donc pas tous les `MediaFileData` propriétés sont prises en charge.

## iOS Quirks

L'API pour accéder aux médias file format informations est limité, donc pas tous les `MediaFileData` propriétés sont prises en charge.