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

> Encapsule des informations sur le format d'un fichier multimédia.

## Propriétés

*   **codecs**: le format réel du contenu audio et vidéo. (DOMString)

*   **débit**: le débit moyen du contenu. La valeur est égale à zéro pour les images. (Nombre)

*   **hauteur**: la hauteur de l'image ou la vidéo en pixels. La valeur est égale à zéro pour des clips audio. (Nombre)

*   **largeur**: la largeur de l'image ou la vidéo en pixels. La valeur est égale à zéro pour des clips audio. (Nombre)

*   **durée**: la durée du clip vidéo ou audio en quelques secondes. La valeur est égale à zéro pour les images. (Nombre)

## BlackBerry WebWorks Quirks

Aucune API ne fournit des informations sur le format des fichiers multimédias, donc le `MediaFileData` objet retourné par `MediaFile.getFormatData` comporte les valeurs par défaut suivantes :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pas pris en charge et retourne la valeur zéro.

*   **hauteur**: pas pris en charge et retourne la valeur zéro.

*   **largeur**: non pris en charge et retourne la valeur zéro.

*   **durée**: non pris en charge et retourne la valeur zéro.

## Quirks Android

Prend en charge ce qui suit `MediaFileData` Propriétés :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pas pris en charge et retourne la valeur zéro.

*   **hauteur**: prise en charge : seuls les fichiers image et vidéo.

*   **largeur**: prise en charge : seuls les fichiers image et vidéo.

*   **durée**: prise en charge : seuls les fichiers audio et vidéo.

## iOS Quirks

Prend en charge ce qui suit `MediaFileData` Propriétés :

*   **codecs**: pas pris en charge et retourne`null`.

*   **Bitrate**: pris en charge sur les périphériques d'iOS4 pour l'audio uniquement. Renvoie zéro pour les images et vidéos.

*   **hauteur**: prise en charge : seuls les fichiers image et vidéo.

*   **largeur**: prise en charge : seuls les fichiers image et vidéo.

*   **durée**: prise en charge : seuls les fichiers audio et vidéo.