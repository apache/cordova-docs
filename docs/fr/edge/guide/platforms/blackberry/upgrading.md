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

# Mise à jour de BlackBerry

Ce guide montre comment modifier des projets BlackBerry mise à niveau d'anciennes versions de Cordova. Ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI.

## 2.8.0 Mise à niveau de projets à 2.9.0

BlackBerry 10 :

1.  Téléchargez et extrayez la source Cordova 2.9.0 à son emplacement définitif sur votre disque dur, par exemple à`~/Cordova-2.9.0`.

2.  Quittez tous les outils SDK en cours d'exécution : Eclipse, Momentics et autres.

3.  Naviguez jusqu'au répertoire où vous avez mis la source téléchargé ci-dessus, à l'aide d'un unix comme terminal : Terminal.app, Cygwin, Bash, etc..

4.  Créez un nouveau projet, comme décrit dans BlackBerry Command-line Tools. Cela devient la maison de votre projet mis à jour.

5.  Copier la source de votre projet de l'ancien projet `/www` répertoire vers du nouveau projet `/www` répertoire.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

### BlackBerryOS/Playbook

1.  Téléchargez et extrayez la source Cordova 2.9.0 à son emplacement définitif sur votre disque dur, par exemple à`~/Cordova-2.9.0`.

2.  Quittez tous les outils SDK en cours d'exécution : Eclipse, Momentics et autres.

3.  Naviguez jusqu'au répertoire où vous avez mis la source téléchargé ci-dessus, à l'aide d'un unix comme terminal : Terminal.app, Cygwin, Bash, etc..

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

7.  Copie le `native` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `native` répertoire.

8.  Copie le `lib` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `lib` répertoire.

9.  Copie le `cordova` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `cordova` répertoire.

## Projets de modernisation 2.7.0 pour 2.8.0

BlackBerry 10 :

BlackBerry 10 utilise les nouveaux outils CLI et gère la base API comme plugins. Les instructions de migrent votre projet pour un nouveau projet, plutôt que de mettre à jour un projet existant, en raison de la complexité de la mise à jour d'un ancien projet. Aussi remarque que la js cordova script file s'appelle maintenant « cordova.js » et ne contienne plus une chaîne de version.

1.  Téléchargez et extrayez la source Cordova 2.8.0 à son emplacement définitif sur votre disque dur, par exemple à`~/Cordova-2.8.0`.

2.  Quittez tous les outils SDK en cours d'exécution : Eclipse, Momentics et autres.

3.  Naviguez jusqu'au répertoire où vous avez mis la source téléchargé ci-dessus, à l'aide d'un unix comme terminal : Terminal.app, Cygwin, Bash, etc..

4.  Créez un nouveau projet, comme décrit dans BlackBerry Command-line Tools. Cela devient la maison de votre projet mis à jour.

5.  Copier la source de votre projet de l'ancien projet `/www` répertoire vers du nouveau projet `/www` répertoire.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

BlackBerryOS/Playbook :

1.  Téléchargez et extrayez la source Cordova 2.8.0 à son emplacement définitif sur votre disque dur, par exemple à`~/Cordova-2.8.0`.

2.  Quittez tous les outils SDK en cours d'exécution : Eclipse, Momentics et autres.

3.  Naviguez jusqu'au répertoire où vous avez mis la source téléchargé ci-dessus, à l'aide d'un unix comme terminal : Terminal.app, Cygwin, Bash, etc..

4.  Créez un nouveau projet, comme décrit dans iOS Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova.js` fichier.

7.  Copie le `native` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `native` répertoire.

8.  Copie le `lib` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `lib` répertoire.

9.  Copie le `cordova` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `cordova` répertoire.

## Projets de modernisation 2.6.0 à 2.7.0

1.  Téléchargez et extrayez la source Cordova 2.7.0 vers un emplacement permanent sur votre disque dur, par exemple à`~/Cordova-2.7.0`.

2.  Quittez tous les outils SDK en cours d'exécution : Eclipse, Momentics et autres.

3.  Naviguez jusqu'au répertoire où vous avez mis la source téléchargé ci-dessus, à l'aide d'un unix comme terminal : Terminal.app, Cygwin, Bash, etc..

4.  Créez un nouveau projet, comme décrit dans BlackBerry Command-line Tools. Vous avez besoin de l'actif de ce nouveau projet.

5.  Copie le `www/cordova-2.7.0.js` fichier à partir du nouveau projet dans votre `www` directory et supprimer votre `www/cordova-2.6.0.js` fichier.

6.  Mettre à jour la référence de script Cordova dans votre `www/index.html` fichier (et tous les autres fichiers qui contiennent la référence de script) pour pointer vers le nouveau `cordova-2.7.0.js` fichier.

7.  Copie le `native` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `native` répertoire.

8.  Copie le `lib` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `lib` répertoire.

9.  Copie le `cordova` répertoire du nouveau projet dans le projet existant, en écrasant l'ancienne `cordova` répertoire.

## Mise à niveau à 2.6.0 de 2.5.0

Mise à jour le répertoire de téléchargement PhoneGap :

Il est recommandé que vous téléchargez une nouvelle copie de tout le répertoire.

Cependant, Voici les nouvelles pièces nécessaires pour la mise à jour au coup par coup :

1.  Mise à jour le fichier cordova.blackberry.js dans le `Phonegap-2.6.0/lib/blackberry/javascript` répertoire.

2.  Mise à jour le `ext` , `ext-air` , et `ext-qnx` dans le `Phonegap-2.6.0/lib/blackberry/framework` répertoire.

3.  Mise à jour le `build.xml` de fichiers dans le `Phonegap-2.6.0/lib/blackberry` répertoire.

4.  Mise à jour le `Phonegap-2.6.0/lib/blackberry/bin` répertoire.

5.  Mise à jour le `VERSION` de fichiers dans le `Phonegap-2.6.0/lib/blackberry` répertoire.

Mise à jour le `example/` répertoire ou la migration d'un projet existant :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Mise à jour le contenu de la `ext-qnx/` répertoire.

5.  Copiez le nouveau `cordova-2.6.0.js` dans votre projet.

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.6.0.js` fichier.

## Mise à niveau vers la version 2.5.0 de 2.4.0

Mise à jour le répertoire de téléchargement PhoneGap :

Il est recommandé que vous téléchargez une nouvelle copie de tout le répertoire.

Cependant, Voici les nouvelles pièces nécessaires pour la mise à jour au coup par coup :

1.  Mise à jour le fichier cordova.blackberry.js dans le `Phonegap-2.5.0/lib/blackberry/javascript` répertoire.

2.  Mise à jour le `ext` , `ext-air` , et `ext-qnx` dans le `Phonegap-2.5.0/lib/blackberry/framework` répertoire.

3.  Mise à jour le `build.xml` de fichiers dans le `Phonegap-2.5.0/lib/blackberry` répertoire.

4.  Mise à jour le `Phonegap-2.5.0/lib/blackberry/bin` répertoire.

5.  Mise à jour le `VERSION` de fichiers dans le `Phonegap-2.5.0/lib/blackberry` répertoire.

Mise à jour de l'exemple / répertoire ou la migration d'un existant du projet :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Mise à jour le contenu de la `ext-qnx/` répertoire.

5.  Copiez le nouveau `cordova-2.5.0.js` dans votre projet.

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.5.0.js` fichier.

## Mise à niveau vers 2.4.0 de 2.3.0

Mise à jour juste le `www` répertoire :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-2.4.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.
    *   Si BlackBerry 10, puis mettez à jour le fichier .js dans le `qnx/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.4.0.js` fichier.

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.2.3.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.2.3.0/ext-air/` répertoire.

4.  Mise à jour le contenu de la `cordova.2.3.0/ext-qnx/` répertoire.

5.  Mise à jour le fichier .js dans le `cordova.2.3.0/javascript/` répertoire.

6.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.2.3.0/` Répertoire de`cordova.2.4.0/`.

7.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

8.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.4.0.js` fichier.

## Mise à niveau vers 2.3.0 de 2.2.0

Mise à jour juste le `www` répertoire :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-2.3.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.
    *   Si BlackBerry 10, puis mettez à jour le fichier .js dans le `qnx/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.3.0.js` fichier.

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.2.2.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.2.2.0/ext-air/` répertoire.

4.  Mise à jour le contenu de la `cordova.2.2.0/ext-qnx/` répertoire.

5.  Mise à jour le fichier .js dans le `cordova.2.2.0/javascript/` répertoire.

6.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.2.2.0/` Répertoire de`cordova.2.3.0/`.

7.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

8.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.3.0.js` fichier.

## Mise à niveau vers 2.2.0 de 2.1.0

Mise à jour de tout le répertoire www :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-2.2.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.
    *   Si BlackBerry 10, puis mettez à jour le fichier .js dans le `qnx/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.2.0.js` fichier.

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.2.1.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.2.1.0/ext-air/` répertoire.

4.  Mise à jour le contenu de la `cordova.2.1.0/ext-qnx/` répertoire.

5.  Mise à jour le fichier .js dans le `cordova.2.1.0/javascript/` répertoire.

6.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.2.1.0/` Répertoire de`cordova.2.2.0/`.

7.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

8.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.2.0.js` fichier.

## Mise à niveau vers 2.1.0 de 2.0.0

Mise à jour juste le `www` répertoire :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-2.1.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.1.0.js` fichier.

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.2.0.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.2.0.0/ext-air/` répertoire.

4.  Mise à jour le fichier .js dans le `cordova.2.0.0/javascript/` répertoire.

5.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.2.0.0/` Répertoire de`cordova.2.1.0/`.

6.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

7.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.1.0.js` fichier.

## Mise à niveau vers 2.0.0 de 1.9.0

Mise à jour juste le `www` répertoire :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-2.0.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.0.0.js` fichier.

6.  Mise à jour de votre `www/plugins.xml` fichier. Deux plugins changé leur étiquette de service/de l'espace de noms. Changer les anciennes entrées pour les plugins de Capture et de Contact de :
    
        < nom du plugin = « Capturer » value="org.apache.cordova.media.MediaCapture"/ >< nom du plugin = « Contact » value="org.apache.cordova.pim.Contact"/ >
        
    
    À:
    
        < nom du plugin = « Capturer » value="org.apache.cordova.capture.MediaCapture"/ >< nom du plugin = « Contacts » value="org.apache.cordova.pim.Contact"/ >
        

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.1.9.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.1.9.0/ext-air/` répertoire.

4.  Mise à jour le fichier .js dans le `cordova.1.9.0/javascript/` répertoire.

5.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.1.9.0/` Répertoire de`cordova.2.0.0/`.

6.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

7.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.0.0.js` fichier.

8.  Ouvert le `www/` répertoire et mise à jour le `plugins.xml` fichier. Deux plugins changé leur étiquette d'espace de noms/service. Changer les anciennes entrées pour les plugins de Capture et de Contact de :
    
         < nom du plugin = « Capturer » value="org.apache.cordova.media.MediaCapture"/ >< nom du plugin = « Contact » value="org.apache.cordova.pim.Contact"/ >
        
    
    À:
    
         < nom du plugin = « Capturer » value="org.apache.cordova.capture.MediaCapture"/ >< nom du plugin = « Contacts » value="org.apache.cordova.pim.Contact"/ >
        

*   Pour installer 1.8.0, s'il vous plaît aller de 1.7.0

## Mise à niveau vers 1.8.0 de 1.7.0

Mise à jour juste le `www` répertoire :

1.  Ouvrir votre `www/` répertoire qui contient votre application.

2.  Retirer et mettre à jour le fichier .jar dans le `ext/` répertoire.

3.  Mise à jour le contenu de la `ext-air/` répertoire.

4.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet.
    
    *   Si le playbook, puis mise à jour le .js fichier dans le `playbook/` répertoire.

5.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.0.js` fichier.

6.  Mise à jour de votre `www/plugins.xml` fichier. Deux plugins changé leur étiquette d'espace de noms/service. Changer les anciennes entrées pour les plugins de Capture et de Contact de :
    
        < nom du plugin = « Capturer » value="org.apache.cordova.media.MediaCapture"/ >< nom du plugin = « Contact » value="org.apache.cordova.pim.Contact"/ >
        
    
    À:
    
        < nom du plugin = « Capturer » value="org.apache.cordova.capture.MediaCapture"/ >< nom du plugin = « Contacts » value="org.apache.cordova.pim.Contact"/ >
        

Mise à jour le répertoire de l'exemple (c'est à dire, mise à jour grâce aux outils de fourmi) :

1.  Ouvert le `sample/lib/` répertoire.

2.  Mise à jour le fichier .jar dans le `cordova.1.7.0/ext/` répertoire.

3.  Mise à jour le contenu de la `cordova.1.7.0/ext-air/` répertoire.

4.  Mise à jour le fichier .js dans le `cordova.1.7.0/javascript/` répertoire.

5.  Ouvert le `sample/lib/` répertoire et renommez le `cordova.1.7.0/` Répertoire de`cordova.1.8.0/`.

6.  Type `ant blackberry build` ou `ant playbook build` pour mettre à jour le `www/` répertoire avec mise à jour Cordova.

7.  Ouvert le `www/` répertoire et mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.0.js` fichier.

8.  Ouvert le `www/` répertoire et mise à jour le `plugins.xml` fichier. Deux plugins changé leur étiquette d'espace de noms/service. Changer les anciennes entrées pour les plugins de Capture et de Contact de :
    
         < nom du plugin = « Capturer » value="org.apache.cordova.media.MediaCapture"/ >< nom du plugin = « Contact » value="org.apache.cordova.pim.Contact"/ >
        
    
    À:
    
         < nom du plugin = « Capturer » value="org.apache.cordova.capture.MediaCapture"/ >< nom du plugin = « Contacts » value="org.apache.cordova.pim.Contact"/ >