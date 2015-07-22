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

# File

Cet objet contient les attributs se référant à un fichier.

## Propriétés

*   **name** : le nom du fichier. *(DOMString)*

*   **fullPath** : le chemin d'accès complet incluant le nom du fichier. *(DOMString)*

*   **type** : le type mime du fichier. *(DOMString)*

*   **lastModifiedDate** : la date de la dernière modification du fichier. *(Date)*

*   **size** : la taille du fichier en octets. *(long)*

## Méthodes

*   **slice** : ne sélectionner qu'une partie du fichier à lire.

## Détails

L'objet `File` contient les attributs d'un fichier. Vous pouvez obtenir une instance d'un objet `File` en appelant la méthode `file()` d'un objet `FileEntry`.

## Plates-formes supportées

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## slice

Retourne un nouvel objet `File` pour lequel `FileReader` renvoie uniquement la partie spécifiée du fichier. Toute valeur négative pour `start` ou `end` est mesurée à partir de la fin du fichier. Les index sont positionnés par rapport à la tranche actuelle. (Voir l'exemple complet ci-dessous.)

**Paramètres :**

*   **start** : l'index du premier octet à lire, inclusif.

*   **end** : l'index de l'octet situé après le dernier à lire.

**Exemple court**

    var slicedFile = file.slice(10, 30);
    

**Exemple complet**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Plates-formes supportées**

*   Android
*   iOS