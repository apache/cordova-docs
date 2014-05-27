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

# La mise à niveau de Windows 8

Ce guide montre comment modifier des projets Windows 8 mise à niveau d'anciennes versions de Cordova. La plupart de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI.

## Mise à niveau vers 3.2.0 de 3.1.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez`cordova platform update windows8`.

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin\update <project_path>
    

## Mise à niveau vers 3.1.0

Support de Cordova CLI pour Windows 8 a été introduite à Cordoue 3.1.0. Pour mettre à niveau, nous vous suggérons de créer un CLI Cordova nouveau projet et le passage de tous les atouts nécessaires.

## Mise à niveau vers 2.9.0 de 2.8.0

Les commandes suivantes devraient être effectués depuis Visual Studio pour s'assurer que toute les références de projet sont mis à jour ou supprimés.

1.  Supprimer `cordova-2.8.0.js` partir du projet `www` répertoire.

2.  Ajouter `cordova.js` fichier de la source au projet `www` répertoire. (Notez que le fichier ne contient plus un numéro de version dans le nom du fichier).

3.  Générer et tester !

## Mise à niveau vers 2.8.0 de 2.7.0

Les commandes suivantes devraient être effectués depuis Visual Studio pour s'assurer que toute les références de projet sont mis à jour ou supprimés.

1.  Supprimer `cordova-2.7.0.js` partir du projet `www` répertoire.

2.  Ajouter `cordova.js` fichier de la source au projet `www` répertoire. (Notez que le fichier ne contient plus un numéro de version dans le nom du fichier).

3.  Générer et tester !