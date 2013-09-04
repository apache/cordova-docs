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

# SplashScreen

> Affiche et masque l'écran de démarrage de l'application.

## Méthodes

*   splashscreen.Show
*   splashscreen.Hide

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS (en`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir plate-forme prise en charge pour une vue d'ensemble.

## Programme d'installation

### Android

1.  Copiez l'image de l'écran splash dans le projet Android `res/drawable` répertoire. La taille de chaque image doit être :

*   XLarge (xhdpi): au moins 960 × 720
*   grand (hdpi): au moins 640 × 480
*   moyen (mdpi): au moins 470 × 320
*   petit (ldpi): au moins 426 × 320
    
    Vous devez utiliser une [image 9-patch][1] pour votre écran de démarrage.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  Dans la `onCreate` méthode de la classe qui s'étend `DroidGap` , ajoutez les deux lignes suivantes :
    
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    La première ligne définit l'image à afficher comme le splashscreen. Si vous nommez votre image quoi que ce soit autre que `splash.png` , vous devez modifier cette ligne. La deuxième ligne est la normale `super.loadUrl` ligne, mais il a un deuxième paramètre qui spécifie une valeur de délai d'attente pour l'écran de démarrage. Dans cet exemple, l'écran de démarrage affiche pendant 10 secondes. De rejeter l'écran de démarrage lorsque l'application reçoit la `deviceready` événement, appelez le `navigator.splashscreen.hide()` méthode.

### iOS

Copiez-y votre images écran de démarrage du projet iOS `Resources/splash` répertoire. Seulement ajouter les images pour les périphériques que vous souhaitez prendre en charge, tels que l'iPad ou iPhone. La taille de chaque image doit être :

*   Default-568h@2x~iPhone.png (pixels 640 x 1136)
*   Default-Landscape@2x~ipad.png (2048 x 1496 pixels)
*   Par défaut-Landscape~ipad.png (1024 x 748 pixels)
*   Default-Portrait@2x~ipad.png (1536 x 2008 pixels)
*   Par défaut-Portrait~ipad.png (768 x 1004 pixels)
*   Default@2x~iPhone.png (640 x 960 pixels)
*   Default~iPhone.png (320 x 480 pixels)