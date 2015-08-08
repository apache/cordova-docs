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

# Guide de la plate-forme paciarelli

Ce guide décrit comment configurer votre environnement de développement SDK pour déployer des applications de Cordova pour les périphériques exécutant le système d'exploitation de paciarelli.

## Exigences et soutien

Le SDK Tizen exige 10.04/10.10/11.04/11.10 Linux Ubuntu (32 bits) ou Windows XP SP3/7 (32 bits).

Les développeurs doivent utiliser le `cordova` utilitaire conjointement avec le SDK Tizen. Voir l'Interface de ligne de commande pour plus d'informations comment faire pour l'installer, d'ajouter des projets, puis de créer et de déployer un projet.

## Installer le SDK

Téléchargez le SDK de Tizen de [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Ouvrez un projet dans le SDK

1.  Lancer l'IDE Eclipse de paciarelli.

2.  Sélectionnez **fichier → importer → paciarelli projet Web**:

    ![][2]

3.  Appuyez sur **suivant**.

4.  Assurez-vous de **que sélectionner le répertoire racine** est cochée.

5.  Assurez-vous de **que copier les projets dans l'espace de travail** est vérifiée.

6.  Appuyez sur **Parcourir** et sélectionnez le Cordova Tizen `samples` répertoire du projet (comme `/cordova-basic` ) :

    ![][3]

7.  Appuyez sur **Terminer**. Votre projet doit désormais être importés et apparaissent dans la vue **Explorateur de projets** :

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Pour reconstruire le projet, faites un clic droit dans **l'Explorateur de projet** , puis sélectionnez **Générer le projet**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

Un fichier de package de widget comme *hello.wgt* devrait générer dans le répertoire racine du projet.

## Déployer sur émulateur

Cliquez droit sur le projet dans **l'Explorateur de projet** , puis sélectionnez **exécuter comme → Application simulateur de paciarelli Web**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Déployer sur le périphérique

*   Assurez-vous que le périphérique cible est correctement lancé, connecté et configuré. Ses paramètres de **Date et heure** doivent être définis correctement.

*   La vue **Explorateur de connexion** permet de sélectionner la cible de déploiement d'application : **fenêtre → Afficher la vue → connexion Explorer**.

    ![][7]

*   Cliquez droit sur le projet dans la vue **Explorateur de projets** , puis de sélectionner **Exécuter en tant que & de rarr ; Application Web paciarelli**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
