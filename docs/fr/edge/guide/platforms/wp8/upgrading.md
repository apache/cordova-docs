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

# La mise à niveau de Windows Phone

Ce guide montre comment modifier des projets Windows Phone, les deux versions 7 et 8, mise à niveau d'anciennes versions de Cordova. La plupart de ces instructions s'appliquent aux projets créés avec un ensemble plu d'outils de ligne de commande qui précèdent le `cordova` utilitaire CLI. Voir l'Interface de ligne de commande pour plus d'informations comment mettre à jour la version de l'interface CLI. La section suivante montre comment mettre à niveau de projets non-CLI.

## Mise à niveau vers 3.2.0 de 3.1.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez `cordova platform update wp8` (ou `wp7` , par les plateformes que vous avez ajouté à votre projet).

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin\update <project_path>
    

## Mise à niveau vers 3.1.0 de 3.0.0

Pour les projets qui ont été créés avec le cordova CLI :

1.  Mise à jour le `cordova` version CLI. Voir l'Interface de ligne de commande.

2.  Exécutez `cordova platform update wp8` (ou `wp7` , par les plateformes que vous avez ajouté à votre projet).

Pour les projets ne créés pas avec la CLI de cordova, exécutez :

        bin\update <project_path>
    

## Mise à niveau à la CLI (3.0.0) de 2.9.0

1.  Créez un projet Apache Cordova 3.0.0 utilisant le cordova CLI, tel que décrit dans l'Interface de ligne de commande.

2.  Ajoutez vos plates-formes cordova au projet, par exemple :`cordova
platform add wp7 wp8`.

3.  Copiez le contenu du projet `www` Répertoire de la `www` répertoire à la racine du projet Cordoue vous venez de créer.

4.  Copier ou écraser tout actif natif de votre projet d'origine ( `SplashScreen` , `ApplicationIcon` , etc.), ce qui bien sûr d'ajouter de nouveaux fichiers à la `.csproj` fichier. Le windows mobile de générations de projets à l'intérieur de la `platforms\wp7` ou `platforms\wp8` répertoire.

5.  Utilisez l'outil CLI de cordova pour installer des plugins dont vous avez besoin. Notez que la CLI gère toutes les principales API comme plugins, donc ils peuvent avoir besoin d'être ajouté. Seulement 3.0.0 plugins sont compatibles avec l'interface CLI.

6.  Générer et tester.

## Mise à niveau vers 3.0.0 (non-CLI) de 2.9.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 3.0.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

4.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

5.  Générer et tester.

**NOTE**: tous les core API est supprimés de la version 3.0 de Cordova et doit être installé séparément comme les plugins. Pour plus d'informations sur la façon de réactiver ces fonctionnalités dans un flux de travail non-CLI, voir Plugman à l'aide à gérer les Plugins.

## Mise à niveau vers 2.9.0 de 2.8.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.9.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mise à jour le nom de `cordova.js` dans la balise HTML si il utilise toujours cordova-VERSION.js (doit être juste`cordova.js`).

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au fichier .csproj.

6.  Générer et tester.

## Mise à niveau vers 2.8.0 de 2.7.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.8.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova.js` fichier. (Notez l'absence d'un numéro de version dans le nom du fichier).

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.7.0 de 2.6.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.7.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.7.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau à 2.6.0 de 2.5.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.6.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.6.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers la version 2.5.0 de 2.4.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.5.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.5.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.4.0 de 2.3.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau Apache Cordova WP7 ou WP8 2.4.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.4.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.3.0 de 2.2.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer une nouvelle Apache Cordova WP7 2.3.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.3.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.2.0 de 2.1.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer un nouveau WP7 de Cordova Apache 2.2.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.2.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.1.0 de 2.0.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créer une nouvelle Apache Cordova WP7 2.1.0 du projet.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.1.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 2.0.0 de 1.9.0

Il y ont eu des changements considérables à la structure du projet WP7 dans Apache Cordova 2.0.0 qui font cette mise à niveau un peu plus compliquée que les autres. Essentiellement, ce n'est pas une mise à niveau mais la création d'un nouveau projet et copier des fichiers source existants.

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Créez un nouveau projet 2.0 d'Apache Cordova WP7.

2.  Copiez le contenu de votre `www` répertoire vers le nouveau projet et veillez à ce que ces éléments sont ajoutés au projet VS.

3.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-2.0.0.js` fichier.

4.  Copier et remplacer n'importe quel écran de démarrage, ou des images de l'icône.

5.  Copie sur les plug-ins de la `plugins` répertoire vers le nouveau projet et faire en sorte qu'ils sont également ajoutés au projet VS.

6.  Générer et tester.

## Mise à niveau vers 1.9.0 de 1.8.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.9.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.9.0.js` fichier.

## Mise à niveau vers 1.8.0 de 1.7.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.8.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.8.0.js` fichier.

## Mise à niveau vers 1.7.0 de 1.6.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.7.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.7.0.js` fichier.

## Mise à niveau vers 1.6.1 de 1.6.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.6.1.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.6.1.js` fichier.

## Mise à niveau vers 1.6.0 de 1.5.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.6.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.6.0.js` fichier.

## Mise à niveau vers 1.5.0 de 1.4.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.5.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.5.0.js` fichier.

## Mise à niveau vers 1.4.0 de 1.3.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.4.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.4.0.js` fichier.

## Mise à niveau vers 1.3.0 de 1.2.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.3.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.3.0.js` fichier.

## Mise à niveau vers 1.2.0 de 1.1.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.2.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.2.0.js` fichier.

## Mise à niveau vers 1.1.0 de 1.0.0

Dans la fenêtre de l'Explorateur de solutions de Visual Studio :

1.  Supprimer `GapLib/WP7CordovaClassLib.dll` de votre projet.

2.  Supprimez la référence à `WP7CordovaClassLib` dans le répertoire de **références** .

3.  Avec le bouton droit sur **références** et sélectionnez **Ajouter une référence**.

4.  Accédez à la nouvelle distribution et ajouter le `WP7CordovaClassLib.dll` fichier.
    
    **Remarque**: vous pouvez visualiser la version de la DLL en faisant un clic droit sur la référence, puis sélectionnez **Propriétés**.

5.  Copiez le nouveau `cordova-1.1.0.js` dans votre projet. (Assurez-vous qu'elle est marquée en tant que contenu.)

6.  Mettre à jour votre code HTML pour utiliser le nouveau `cordova-1.1.0.js` fichier.