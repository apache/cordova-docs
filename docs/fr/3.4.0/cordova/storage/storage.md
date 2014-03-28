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

# Stockage

> Un aperçu des options de stockage pour Cordova.

Stockage de plusieurs API sont disponibles pour des applications de Cordova. Voir [html5rocks][1]. pour une présentation plus complète et des exemples.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Aussi connu comme *stockage web*, *stockage simple*, ou par son interface de rechange *stockage de session* , cette API permet le stockage de paire clé/valeur synchrone et est disponible dans les implémentations sous-jacentes WebView. Reportez-vous à [la spécification W3C][2] pour plus de détails.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 bizarrerie**: notation par points est *pas* disponible, alors n'oubliez pas d'utiliser `setItem` ou `getItem` plutôt que d'accéder aux clés directement à partir de l'objet de stockage, comme dans`window.localStorage.someKey`.

## WebSQL

Cette API est disponible dans le mode Web sous-jacent. La [Spécification de base de données SQL Web][3] propose plusieurs tables de base de données complète accessible via des requêtes SQL.

 [3]: http://dev.w3.org/html5/webdatabase/

Les plates-formes suivantes prennent en charge les WebSQL :

*   Android
*   BlackBerry 10
*   iOS
*   Paciarelli

## IndexedDB

Cette API est disponible dans le mode Web sous-jacent. [Indexed DB][4] offre plus de fonctionnalités que LocalStorage, mais moins de WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Les plates-formes suivantes prennent en charge IndexedDB :

*   Windows Phone 8
*   BlackBerry 10

## Options fondées sur le plugin

Outre le stockage Qu'api énumérées ci-dessus, [Fichier API][5] vous permet de données en cache sur le système de fichiers local. Autres [plugins Cordova][6] offrent des options de rangement similaires.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/