---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Configuration d'Android

Le fichier `config.xml` supervise les paramètres de base s'appliquant à l'application ainsi qu'à chaque instance de la classe CordovaWebView. Cette section décrit en détail les préférences uniquement liées à la compilation pour Android. Voir Le fichier config.xml pour plus d'informations concernant les options de configuration globales.

*   `KeepRunning` (boolean, vaut `true` par défaut) : détermine si l'application doit continuer de s'exécuter en arrière-plan ou non, même après le déclenchement d'un évènement `pause`. Remarque : régler la valeur à false ne provoquera pas la fermeture complète de l'application après le déclenchement d'un évènement pause, l'exécution de tout code dans la WebView Cordova sera simplement stoppée tant que l'application restera à l'arrière plan.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue` (number, vaut `20000` par défaut, soit 20 secondes) : correspond, lors du chargement d'une page, au temps d'attente avant le déclenchement d'une erreur liée au délai. Cet exemple définit un délai de 10 secondes au lieu de 20 :
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen` : le nom du fichier image correspondant (hors extension) situé dans le répertoire `res/drawable`. Plusieurs ressources doivent partager ce nom dans les différents sous-répertoires.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay` (number, vaut `5000` par défaut, soit 5 secondes) : le laps de temps durant lequel l'image de chargement sera affichée.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled` (boolean, vaut `true` par défaut) : contrôle si les pages ouvertes dans une fenêtre InAppBrowser accèderont ou non aux même espaces de stockage (localStorage et WebSQL) que celles ouvertes avec le navigateur par défaut.