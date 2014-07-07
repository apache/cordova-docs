* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Voir le fichier des Remarques distribué avec ce travail d'information additionnel concernant les droits d'auteur. L'ASF vous licencis ce fichier sous licence Apache, Version 2.0 (la "licence") ; vous ne pouvez utiliser ce fichier qu'en conformité avec la licence. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Icones et Splash Screen

Cette section indique comment configurer une icône et un écran de démarrage facultatif pour une application sur diverses plates-formes, les deux lorsque vous travaillez dans la CLI de Cordova (décrites dans l'Interface de ligne de commande) ou en utilisant les outils du SDK spécifique à la plateforme (détaillées dans les Guides de la plate-forme).

## Configuration des icônes dans le CLI

Quand travaillant dans la CLI, vous pouvez définir des app icônes via `<icon>` élément ( `config.xml` ). Si vous ne spécifiez pas une icône, puis le logo Apache Cordova est utilisé.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

SRC: (obligatoire) spécifie l'emplacement du fichier image, par rapport à votre répertoire de projet

plateforme : plateforme cible (facultatif)

Largeur : largeur d'icône (facultatif) en pixels

hauteur : hauteur d'icône (facultatif) en pixels

densité : android (facultatif) spécifique, spécifie la densité de l'icône

La configuration suivante peut être utilisée pour définir l'icône par défaut unique qui sera utilisé pour toutes les plates-formes.

        <icon src="res/icon.png" />
    

Pour chaque plate-forme, vous pouvez également définir un set pour s'adapter à des résolutions d'écran différentes d'icônes de pixellisés.

Amazon Fire OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

Voir la documentation de BlackBerry pour le ciblage de plusieurs tailles et paramètres régionaux. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Paciarelli

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## Configuration du Splashscreen dans la CLI

Utiliser l'API de Splashscreen pour permettre l'affichage de l'écran d'accueil introduction d'une app nombreuses plates-formes. Lorsque vous travaillez dans le CLI, les fichiers source écran d'éclaboussure sont situés au sein du projet `www/res/screens` sous-répertoire.

Android spécifie les deux images d'écran splash-orientation portrait et paysage de faible, moyenne, haute et très haute résolution :

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
    

Windows Phone spécifie une image d'écran de démarrage unique :

        windows-phone/screen-portrait.jpg
    

Les sections suivantes décrivent comment configurer les écrans de démarrage lors de l'utilisation des kits de développement logiciel et les outils de ligne de commande associés décrit dans les Guides de la plate-forme.

N'oubliez pas d'installer le plugin de SplashScreen avant d'essayer d'utiliser les `navigator.splashscreen.hide()` ou `navigator.splashscreen.show()` méthodes.

## Écrans de démarrage pour la plateforme Android

Placez-y les fichiers [image 9-patch][1] du projet Android `platforms/android/res/drawable*` répertoires.

 [1]: https://developer.android.com/tools/help/draw9patch.html

La taille de chacun doit être :

*   XLarge (xhdpi): au moins 960 × 720
*   grand (hdpi): au moins 640 × 480
*   moyen (mdpi): au moins 470 × 320
*   petit (ldpi): au moins 426 × 320

Lorsque vous créez un nouveau projet Android, l'écran de démarrage par défaut des images autant dans le Cordova, exemple d'application doit être déjà présente dans le `platforms/android/res/drawable*` répertoires. N'hésitez pas à remplacer par vos propres images. Lorsque votre propre splash fournissant des images à l'écran, il est inutile de fournir la même permutation de 8 par défaut Cordova plus ici. Plus ou moins l'optimisation peut être utilisée. Le `drawable` les noms de répertoire doivent respecter les conventions Android pour supporter des [tailles d'écran][2] et [autres ressources][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

Dans le premier niveau `config.xml` fichier (pas celui de `platforms` ), ajouter les préférences suivantes :

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

La première ligne définit l'image à afficher comme écran de démarrage. C'est le nom de fichier de la png dans le `drawable*` annuaires, moins la `.png` extension. La valeur par défaut pour le SplashScreen est `screen` (pour le fichier `platforms/android/res/drawable*/screen.png` ), donc si vous nommez l'image quoi que ce soit autre que `screen.png` dans la `drawable*` répertoires, vous devez ajouter/modifier cette ligne.

La deuxième ligne définit le délai par défaut de combien de temps le splashscreen apparaît en millisecondes. Cela devrait être l'heure de début prévue plus pessimistes. La valeur par défaut pour SplashScreenDelay est 3000 ms.

Enfin, en tant que pratique exemplaire, l'écran de démarrage devrait être présent seulement aussi longtemps que nécessaire. Lorsque votre application a commencé et le mode Web a chargé, votre application doit masquer l'écran de démarrage afin que votre vue principale est visible dès qu'elle est prête. Car l'heure de début d'application varie un peu en raison de plusieurs facteurs tels que la vitesse du CPU et réseau, il est recommandé que votre application appelle explicitement `navigator.splashscreen.hide()` dans la méthode JavaScript qui répond à la `deviceready` événement. Sinon l'écran de démarrage sera visible pour la valeur de SplashScreenDelay que vous avez configuré plus haut, qui est probablement plus longtemps que nécessaire. Cette approche événementielle est hautement recommandée par rapport à avoir l'écran de démarrage visible pour toujours une durée fixe.

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

Ajoutez un élément de la jante : splash dans config.xml pour chaque résolution et les paramètres régionaux, vous souhaitez soutenir :

[http://developer.BlackBerry.com/HTML5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html