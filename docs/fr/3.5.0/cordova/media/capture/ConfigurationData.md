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

> Encapsule un ensemble de paramètres de capture de médias qu'un périphérique prend en charge.

## Description

Décrit les modes de capture de média pris en charge par le périphérique. Les données de configuration incluent le type MIME et dimensions de capture pour la capture vidéo ou image.

[RFC2046][1]devraient respecter les types MIME. Exemples :

 [1]: http://www.ietf.org/rfc/rfc2046.txt

*   `vidéo/3gpp`
*   `vidéo/quicktime`
*   `image/jpeg`
*   `audio/amr`
*   `audio/wav`

## Propriétés

*   **type**: The ASCII encodée en chaîne minuscule qui représente le type de média. (DOMString)

*   **hauteur**: la hauteur de l'image ou la vidéo en pixels. La valeur est zéro pour les extraits sonores. (Nombre)

*   **largeur**: la largeur de l'image ou la vidéo en pixels. La valeur est zéro pour les extraits sonores. (Nombre)

## Petit exemple

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;
    
    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }
    

Pas pris en charge par n'importe quelle plateforme. Tous les tableaux de données de configuration sont vides.