---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Voir le fichier des Remarques distribué avec ce travail d'information additionnel concernant les droits d'auteur. L'ASF vous licencis ce fichier sous licence Apache, Version 2.0 (la "licence") ; vous ne pouvez utiliser ce fichier qu'en conformité avec la licence. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Icones et Splash Screen

Cette section indique comment configurer une application icône et écran de démarrage facultatif pour diverses plates-formes, les deux lorsque vous travaillez dans la CLI de Cordova (décrites dans l'Interface de ligne de commande) ou en utilisant les outils du SDK spécifique à la plateforme (détaillées dans les Guides de la plate-forme).

## Configuration des icônes dans le CLI

Lorsque vous travaillez dans la CLI, Les fichiers sources d'icône se trouvent dans les différents sous-répertoires spécifiques à une plateforme au sein du répertoire du projet `www/res/icons`. Les projets nouvellement créés disposent d'un ensemble par défaut d'icones Cordova pour vous permettre de remplacer les plates-formes que vous voulez cibler.

Android spécifie les icônes de faible, moyenne, haute et très haute résolution :

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

La plateforme iOS spécifie 72-pixel-carré pour les icônes des iPads, et affiche des icônes de 57 pixels pour les iPhones et iPods, avec variantes hautes résolutions *x 2* pour les écran Rétina :

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone spécifie une icone de 48 pixels par défaut, ainsi que de nombreuses mosaïque d'arrière-plan utilisés dans la représentation des applications :

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

BlackBerry nécessite une icône de 80 pixels :

        blackberry/icon-80.png
    

Tizen nécessite une icône de 128 pixels :

        tizen/icon-128.png
    

## Configuration du Splashscreen dans la CLI

Utiliser l'API de Splashscreen pour autoriser l'affichage de l'écran splash préliminaire de l'App sur de nombreuses plates-formes. Lorsque vous travaillez dans la CLI, les fichiers d'écran de démarrage sont situés dans un sous-répertoire du projet `www/res/screens`.

Android spécifie les deux images d'écran de démarrage en mode portrait et paysage pour les faible, moyenne, haute et très haute résolutions:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

La plateforme iOS spécifie des variantes pour iPhone/iPod / iPad, avec des variantes pour les écrans de la rétine et des orientations différentes. Le fichier *568 h* s'applique à l'iPhone 5 écran plus grand :

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

BlackBerry et Windows Phone spécifient tous deux une image unique pour l'écran de démarrage :

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

Les sections suivantes décrivent comment configurer les écrans de démarrage lors de l'utilisation des kits de développement logiciel et les outils de ligne de commande associés décrit dans les Guides de la plate-forme.

## Écrans de démarrage pour la plateforme Android

Placez les fichiers [image 9-patch][1] le répertoire du projet Android `res/drawable`. La taille de chacun d'eux doit être :

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   XLarge (xhdpi): au moins 960 × 720
*   grand (hdpi): au moins 640 × 480
*   moyen (mdpi): au moins 470 × 320
*   petit (ldpi): au moins 426 × 320

Dans `config.xml`, ajoutez les préférences suivantes :

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

La première ligne définit l'image à afficher comme écran de démarrage. Si vous nommez l'image quoi que ce soit autre que `splash.png` , vous devez modifier cette ligne.

La deuxième ligne définit le délai pendant lequel le splashscreen est visible en millisecondes. Pour fermer le splashscreen lorsque l'application reçoit l’événement `deviceready`, il est nécessaire d'appeler la méthode `navigator.splashscreen.hide()`.

## Écrans de démarrage pour la plate-forme l'iOS

Copiez-y les images d'écran de démarrage du projet iOS `Resources/splash` répertoire. Seulement ajouter ces images pour les périphériques que vous souhaitez prendre en charge, tels que l'iPad ou iPhone. La taille de chaque image doit être :

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Écrans de démarrage pour la plateforme BlackBerry 10

Copiez-y les images d'écran de démarrage du projet `res/screen/blackberry10` répertoire. Les noms de fichier doivent être :

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)