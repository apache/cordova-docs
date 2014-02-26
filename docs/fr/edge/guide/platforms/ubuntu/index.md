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

# Guide de la plate-forme Ubuntu

## Version initiale

Bienvenue sur la version initiale de prise en charge de plates-formes de Ubuntu à Cordoue. Avec cette version, la mise au point est en développement sur un système Ubuntu et en utilisant le flux de travail multi-plateforme discutée dans la vue d'ensemble. Cela inclut l'ajout de la plateforme Ubuntu à votre projet, l'ajout de plugins de Cordova standard et de générer et d'exécuter des applications pour la plate-forme Ubuntu.

### Ubuntu SDK

Vous pouvez également installer l'environnement de développement d'Ubuntu QtCreator. Voir [developer.ubuntu.com][1] pour plus d'informations. (Le SDK QtCreator n'est pas tenu d'ajouter le support de plate-forme Ubuntu à votre application de Cordoue).

 [1]: http://developer.ubuntu.com

### Plates-formes de Runtime de Ubuntu

Ubuntu est bien connue pour son environnement de bureau (pour les ordinateurs portables, PC et autres). Ubuntu Touch étend le système d'exploitation Ubuntu sur téléphones et tablettes. Ubuntu DUREE plates-formes ont diverses architectures de processeurs (x 86, Portage, etc..). App et plugin code doit être compilé correctement. Prise en charge de ce vaste domaine évolue rapidement dans Ubuntu.

### Informations les plus récentes

Pour les dernières informations sur support app Cordova pour Ubuntu DUREE plates-formes, consultez [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Les exigences en matière de plate-forme de développement

Pour cette première version, la plateforme de développement devrait être un bureau Ubuntu. 13.10 Ubuntu (nom de code "coquine") ou ultérieur est requis pour profiter de l'ensemble des fonctions prises en charge.

Vous pouvez installer Cordova sur les systèmes non-Ubuntu (à l'aide de la NGP), mais les capacités importantes sont fournies uniquement par le biais de paquets debian Ubuntu en ce moment.

## Installation de Cordova

Ajouter l' Ubuntu Cordova [Archive personnelle de paquets][3] à votre système Ubuntu :

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Installez le paquet cordova-cli (et ses dépendances) :

    $ sudo apt-get install cordova-cli
    

## Flux de travail de projet

### Créer un projet

Crée une application dans un `hello` répertoire dont le nom affichage est `HelloWorld` :

    $ cordova create hello com.example.hello HelloWorld
    

### Se déplacer dans le répertoire du projet

    $ cd hello
    

### Ajouter la plateforme Ubuntu

    $ cordova platform add ubuntu
    

### Construire pour Ubuntu

    $ cordova build ubuntu
    

### Exécuter l'application

    $ cordova run ubuntu
    

### Ajouter le Plugin de statut de batterie

    $ cordova plugin add org.apache.cordova.battery-status