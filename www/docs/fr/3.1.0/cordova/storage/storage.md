---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
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

title: Stockage
---

# Stockage

> Donne accès aux options de stockage de l'appareil.

Cette API offre des options de stockage basées sur deux différentes spécifications de W3C :

*   La [Spécification de l'API Web Storage][1] vous permet d'accéder aux données via des paires clé/valeur simple. Voir la section sur le [localStorage](localstorage/localstorage.html) pour plus de détails sur cette interface.

*   La [Spécification de base de données SQL Web][2] propose plusieurs tables de base de données complète accessible via des requêtes SQL. Un résumé de cette interface apparaît immédiatement en dessous.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova permet de rejoindre les deux interfaces pour la minorité d'appareils qui ne supportent pas déjà eux. Les implémentations intégrées s'appliquerait par ailleurs.

## Méthodes

*   [openDatabase](storage.opendatabase.html)

## Arguments

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## Objets

*   [Base de données](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## Accéder à la fonctionnalité

Depuis la version 3.0, l'accès aux API de stockage est intégré à Cordova et ne nécessite pas d'ajouter des plugins comme décrit dans l'Interface de ligne de commande à l'aide de la CLI.

Si vous utilisez l'ancienne ensemble d'outils de Cordova qui précèdent le CLI, les paramètres de configuration spécifiques à la plate-forme suivants sont toujours nécessaires :

*   Android (dans`app/res/xml/config.xml`)
    
        < nom de la fonction = "Storage" >< param name = "android-package" value="org.apache.cordova.Storage" / >< / fiction >
        

*   BlackBerry WebWorks (dans`www/config.xml`)
    
        < id="blackberry.widgetcache en vedette" requis = "true" version = "1.0.0.0" / >
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.