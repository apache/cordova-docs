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

title: Icones et Splash Screen
---

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
    

BlackBerry10

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

         < nom de plate-forme = "ios" ><!--iOS 8.0 +--> <!--iPhone Plus 6--> < icône src = "res/ios/icon-60@3x.png" width = "180" height = "180" / ><!--iOS 7.0 +--> <!--iPhone / iPod Touch--> < icône src="res/ios/icon-60.png" largeur = "60" height = "60" / >< icône src = "res/ios/icon-60@2x.png" width = "120" height = "120" / ><!--iPad--> < icône src="res/ios/icon-76.png" largeur = hauteur "76" = "76" / >< icône src = "res/ios/icon-76@2x.png" width = "152" height = "152" /><!--iOS 6.1--> <!--icône Spotlight--> < icône src="res/ios/icon-40.png" largeur = "40" height = "40" / >< icône src = "res/ios/icon-40@2x.png" width = "80" height = "80" / ><!--iPhone / iPod Touch--> < icône src="res/ios/icon.png" largeur = "57" height = "57" / >< icône src = "res/ios/icon@2x.png" width = "114" height = "114" / ><!--iPad--> < icône src="res/ios/icon-72.png" largeur = hauteur "72" = "72" / >< icône src = "res/ios/icon-72@2x.png" width = "144" hauteur = "144" / ><!--iPhone Spotlight et icône Paramètres--> < icône src="res/ios/icon-small.png" largeur = "29" height = "29" / >< icône src = "res/ios/icon-small@2x.png" width = height "58" = "58" / ><!--iPad Spotlight et icône Paramètres--> < icône src="res/ios/icon-50.png" largeur = "50" height = "50" / >< icône src = "res/ios/icon-50@2x.png" width = "100" height = "100" / >< / plate-forme >
    

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

Dans le premier niveau `config.xml` fichier (pas celui de `platforms` ), ajouter des éléments de configuration tels que celles spécifiées ici.

# Exemple de configuration

Veuillez noter que la valeur de l'attribut « src » est relatif au répertoire de projet et de ne pas le répertoire www. Vous pouvez nommer l'image source, ce qui vous plait. Le nom interne de l'application sont déterminées par Cordova.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. Suivants sont pris en charge--> < éclabousser src="res/screen/ios/Default~iphone.png" largeur = "320" height = "480" / >< éclabousser src="res/screen/ios/Default@2x~iphone.png" largeur = "640" height = "960" / >< éclabousser src="res/screen/ios/Default-Portrait~ipad.png" largeur = "768" hauteur = "1024" / >< éclabousser src="res/screen/ios/Default-Portrait@2x~ipad.png" largeur = "1536" height = "2048" / >< éclabousser src="res/screen/ios/Default-Landscape~ipad.png" largeur = "1024" height = "768" / >< éclabousser src="res/screen/ios/Default-Landscape@2x~ipad.png" largeur = "2048" hauteur = "1536" / >< éclabousser src="res/screen/ios/Default-568h@2x~iphone.png" largeur = "640" height = "1136" / >< éclabousser src="res/screen/ios/Default-667h.png" largeur = "750" height = "1334" / >< éclabousser src="res/screen/ios/Default-736h.png" largeur = "1242" height = "2208" / >< éclabousser src="res/screen/ios/Default-Landscape-736h.png" largeur = "2208" height = "1242" / >< / plateforme >< nom de plate-forme = "at 8" ><!--images sont déterminées par la largeur et la hauteur. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# Plates-formes prises en charge

A partir de maintenant (Cordova 3.5.0 juillet 2014) les plates-formes suivants prennent en charge les écrans de démarrage.

    android
    ios
    wp8
    windows8
    blackberry10
    

# SplashScreen Plugin

Apache Cordova offre également des projections spéciales écran plugin qui pourrait servir à afficher et masquer un écran de démarrage pendant https://github.com/apache/cordova-plugin-splashscreen lancement application par programme