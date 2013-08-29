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

Cet objet contient des attributs d'un fichier unique.

## Propriétés

*   **nom**: le nom du fichier. *(DOMString)*

*   **fullPath**: le chemin d'accès complet du fichier dont le nom de fichier. *(DOMString)*

*   **type**: le type mime du fichier. *(DOMString)*

*   **lastModifiedDate**: la dernière fois que le fichier a été modifié. *(Date)*

*   **taille**: la taille du fichier en octets. *(long)*

## Méthodes

*   **tranche**: ne sélectionner qu'une partie du fichier à lire.

## Détails

Le `File` objet contient des attributs d'un fichier unique. Vous pouvez obtenir une instance d'un `File` objet en appelant une `FileEntry` de l'objet `file()` méthode.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 7 et 8
*   Windows 8

## tranche

Retourner un nouveau `File` objet, dont `FileReader` retourne uniquement la partie spécifiée du fichier. Négatif pour les valeurs `start` ou `end` sont mesurées à partir de la fin du fichier. Les index sont positionnés par rapport à la tranche actuelle. (Voir l'exemple complet ci-dessous.)

**Paramètres :**

*   **Démarrer**: l'index du premier octet à lire, inclusivement.

*   **fin**: l'index de l'octet après une dernière lecture.

**Petit exemple**

    var slicedFile = file.slice(10, 30);
    

**Exemple complet**

    var slice1 = file.slice(100, 400);
    var slice2 = slice1.slice(20, 35);
    
    var slice3 = file.slice(120, 135);
    // slice2 and slice3 are equivalent.
    

**Plates-formes prises en charge**

*   Android
*   iOS