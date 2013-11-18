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

# ConfigurationData

> Encapsule un ensemble de paramètres de capture de médias pris en charge par un appareil.

## Description

Décrit les modes de capture de média pris en charge par l'appareil. Les données de configuration incluent le type MIME et les dimensions pour la capture de vidéo ou d'image.

Les types MIME doivent respecter la norme [RFC2046][1]. Exemples :

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `video/3gpp`
*   `video/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Propriétés

*   **type** : la chaîne de caractères bas de casse ASCII représentant le type de média souhaité. (DOMString)

*   **height** : la hauteur de l'image ou de la vidéo en pixels. La valeur pour les extraits sonores est zéro. (Number)

*   **width** : la largeur de l'image ou de la vidéo en pixels. La valeur pour les extraits sonores est zéro. (Number)

## Exemple court

    // récupère des informations sur les modes de capture d'image supportés
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // choisit le mode possédant la résolution horizontale la plus élevée
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

N'est pas pris en charge par toutes les plates-formes. Tous les tableaux de données de configuration sont vides.