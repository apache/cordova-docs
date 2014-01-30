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

# MediaFileData

> Encapsule des informations de format d'un fichier média.

## Propriétés

*   **codecs** : le format réel du contenu audio et vidéo. (DOMString)

*   **bitrate** : le débit moyen du contenu. Pour les images, la valeur est zéro. (Number)

*   **height** : la hauteur de l'image ou de la vidéo en pixels. Pour des clips audio, la valeur est zéro. (Number)

*   **width** : la largeur de l'image ou de la vidéo en pixels. Pour des clips audio, la valeur est zéro. (Number)

*   **duration** : la durée du clip vidéo ou audio en secondes. Pour les images, la valeur est zéro. (Number)

## Particularités de BlackBerry WebWorks

Aucune API fournissant des informations sur le format des fichiers média n'est disponible, par conséquent les objets `MediaFileData` retournés par `MediaFile.getFormatData` comportent les valeurs par défaut suivantes :

*   **codecs** : propriété non prise en charge, sa valeur est `null`.

*   **bitrate** : propriété non prise en charge, sa valeur est zéro.

*   **height** : propriété non prise en charge, sa valeur est zéro.

*   **width** : propriété non prise en charge, sa valeur est zéro.

*   **duration** : propriété non prise en charge, sa valeur est zéro.

## Particularités d'Android

Supporte les propriétés `MediaFileData` suivantes :

*   **codecs** : propriété non prise en charge, sa valeur est `null`.

*   **bitrate** : propriété non prise en charge, sa valeur est zéro.

*   **height** : propriété prise en charge seulement pour les fichiers image et vidéo.

*   **width** : propriété prise en charge seulement pour les fichiers image et vidéo.

*   **duration** : propriété prise en charge seulement pour les fichiers audio et vidéo.

## Particularités d'iOS

Prend en charge les propriétés `MediaFileData` suivantes :

*   **codecs** : propriété non prise en charge, sa valeur est `null`.

*   **bitrate** : propriété prise en charge uniquement pour les fichiers audio sous iOS4. Renvoie zéro pour les images et les vidéos.

*   **height** : propriété prise en charge seulement pour les fichiers image et vidéo.

*   **width**: propriété prise en charge seulement pour les fichiers image et vidéo.

*   **duration** : propriété prise en charge seulement pour les fichiers audio et vidéo.