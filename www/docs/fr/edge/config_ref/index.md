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

title: Le fichier config.xml
---

# Le fichier config.xml

Plusieurs aspects du comportement de l'application peuvent être contrôlés avec un fichier de configuration global, `config.xml` . Ce fichier XML de plate-forme agnostique est organisé selon spécification [Emballés Web Applications (Widgets)][1] de la W3C et s'étend pour spécifier des caractéristiques de Cordova API de base, des plugins et des paramètres spécifiques à la plateforme.

 [1]: http://www.w3.org/TR/widgets/

Pour les projets créés avec la CLI Cordova (décrites dans l'Interface de ligne de commande), ce fichier se trouve dans le répertoire de niveau supérieur :

        app/config.xml
    

Notez qu'avant la version 3.3.1-0.2.0, le fichier existait au `app/www/config.xml` , et qu'il avoir ici est toujours supporté.

Lorsque vous utilisez l'interface CLI pour générer un projet, les versions de ce fichier sont copiées passivement dans divers `platforms/` sous-répertoires, par exemple :

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

Cette section décrit en détail les options de configuration globale et multi-plateforme. Consultez les sections suivantes pour les options spécifiques à la plateforme :

*   Configuration iOS
*   Configuration Android
*   [Configuration de blackBerry](../guide/platforms/blackberry/config.html) 10

Outre les diverses options de configuration détaillées ci-dessous, vous pouvez également configurer ensemble de base d'une application d'images pour chaque plate-forme cible. Pour plus d'informations, consultez icônes et écrans de démarrage.

## Éléments de configuration de base

Cet exemple affiche la valeur par défaut `config.xml` généré par le CLI `create` commande, décrite dans l'Interface de ligne de commande :

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

Les éléments de configuration suivants apparaissent dans le premier niveau `config.xml` du fichier et sont pris en charge sur toutes les plateformes prises en charge de Cordoue :

*   La `<widget>` de l'élément `id` attribut fournit l'identificateur de domaine inverse du PPA et les `version` son numéro de version complet exprimé en notation majeur/mineur/patch.
    
    La balise widget peut également avoir des attributs qui spécifient les versions alternatives, à savoir versionCode pour Android et CFBundleVersion pour iOS. Consultez la section gestion des versions supplémentaires ci-dessous pour plus de détails.

*   L'élément `<name>` spécifie le nom formel de l'application, tel qu'il apparaît sur l'écran d'accueil de l'appareil et dans le app-store.

*   Le `<description>` et `<author>` éléments spécifient les métadonnées et les informations de contact qui peuvent apparaître au sein de l'app-store listings.

*   Le paramètre optionnel `<content>` élément définit la page de démarrage de l'application dans le répertoire actif de web de niveau supérieur. La valeur par défaut est `index.html` , qui apparaît habituellement dans le dossier de niveau supérieur du projet, `www`.

*   Les éléments `<access>` définissent l'ensemble des domaines externes avec lesquels l'application est autorisée à communiquer. La valeur par défaut ci-dessus permet d'accéder à n'importe quel serveur. Consultez le Guide de liste blanche de domaine pour plus de détails.

*   La balise `<preference>` définit différentes options sous forme de paires d'attributs `name` / `value`. Le `name` de chaque préférence est insensible à la casse. Plusieurs préférences sont spécifiques à certaines plateformes, comme indiqué en haut de cette page. Les sections suivantes détaillent les préférences qui s'appliquent à plus d'une plateforme.

### Gestion des versions supplémentaires

Fois, Android et iOS prend en charge une deuxième chaîne de la version (ou nombre) en plus de celui visible dans l'app store, [versionCode][2] pour Android et [CFBundleVersion][3] pour iOS. Voici un exemple qui définit explicitement versionCode et CFBundleVersion

 [2]: http://developer.android.com/tools/publishing/versioning.html
 [3]: http://stackoverflow.com/questions/4933093/cfbundleversion-in-the-info-plist-upload-error

        <widget id="io.cordova.hellocordova"
          version="0.0.1"
          android-versionCode="7"
          ios-CFBundleVersion="3.3.3">
    

Si la version alternative n'est pas spécifiée, les paramètres par défaut suivants seront utilisés :

        // assuming version = MAJOR.MINOR.PATCH-whatever
        versionCode = PATCH + MINOR * 100 + MAJOR * 10000
        CFBundleVersion = "MAJOR.MINOR.PATCH"
    

## Préférences globales

Les préférences globales suivantes s'appliquent à toutes les plateformes :

*   `Fullscreen`permet de masquer la barre d'état en haut de l'écran. La valeur par défaut est `false` . Exemple :
    
        <preference name="Fullscreen" value="true" />
        

## Préférences de multi-plateformes

Les préférences suivantes s'appliquent à plus d'une plate-forme, mais pas tous d'entre eux :

*   `DisallowOverscroll`(boolean, la valeur par défaut `false` ): la valeur `true` si vous ne voulez pas l'interface pour afficher n'importe quelle rétroaction lorsque les utilisateurs faire défiler devant le début ou la fin du contenu.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    S'applique à Android et iOS. Sur iOS, un mouvement de défilement exagéré fera rebondir le contenu à sa position initiale. Sur Android, ils produisent un effet brillant plus subtil le long du rebord en haut ou en bas du contenu.

*   `BackgroundColor`: Définir la couleur d'arrière-plan de l'application. Prend en charge une valeur hexadécimale de quatre octets, avec le premier octet qui représente le canal alpha et les valeurs RGB standards pour les trois octets suivants. Cet exemple spécifie bleu :
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    S'applique à Android et BlackBerry. Substitue des CSS autrement disponibles sur *toutes* les plateformes, par exemple :`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean, la valeur par défaut `false` ): la valeur `true` pour masquer la barre d'outils supplémentaire qui apparaît au-dessus du clavier, aidant les utilisateurs navigueront d'un formulaire de saisie à l'autre.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    S'applique aux BlackBerry.

*   `Orientation`(string, la valeur par défaut `default` ): permet de verrouiller l'orientation et d'empêcher toute rotation en réponse aux changements dans l'orientation de l'interface. Les valeurs possibles sont `default` , `landscape` ou `portrait` . Exemple :
    
        < nom de l'option = « Orientation » value = « paysage » / >
        
    
    En outre, vous pouvez spécifier n'importe quelle valeur d'orientation spécifique à la plateforme si vous placez le `<preference>` élément dans une `<platform>` élément :
    
        <platform name="android">
            <preference name="Orientation" value="sensorLandscape" />
        </platform>
        
    
    S'applique à Android, iOS, WP8, Amazon Fire OS et OS de Firefox.
    
    **NOTE**: le `default` valeur signifie Cordova supprimera l'entrée de préférence d'orientation du fichier de manifeste/configuration de la plate-forme, permettant à la plate-forme de secours pour son comportement par défaut.
    
    Pour iOS, afin de spécifier les deux portrait & mode paysage, vous utiliseriez la `all`plate-forme valeur spécifique :
    
        <platform name="ios">
            <preference name="Orientation" value="all" />
        </platform>
        
## La *fonctionnalité* élément

Si vous utilisez la CLI pour créer des applications, vous utilisez la commande `plugin` pour activer le dispositif API. Cela ne modifie pas le fichier de niveau supérieur `config.xml` , aussi l'élément `< feature >` ne s'applique pas à votre flux de travail. Si vous êtes travaillant directement dans un kit de développement logiciel et à l'aide de la plate-forme spécifique `config.xml` fichier source, vous utilisez le `<feature>` tag pour permettre aux API de niveau périphérique et des plugins externes. Elles apparaissent souvent avec des valeurs personnalisées dans les fichiers spécifiques à une plateforme `config.xml` . Par exemple, voici comment spécifier l'API Device pour les projets Android :

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Voici l'apparence de l'élément pour les projets d'iOS :

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Voir la référence de l'API pour plus d'informations sur la façon de spécifier chaque fonctionnalité. Consultez le Guide de développement de Plugin pour plus d'informations sur les plugins.

## La *plate-forme* élément

Lorsque vous utilisez l'interface CLI pour créer des applications, il est parfois nécessaire de spécifier les préférences ou autres éléments spécifiques à une plate-forme particulière. Utilisez l'élément `< platform >` pour spécifier la configuration qui doit uniquement apparaître dans un fichier unique spécifique à la plateforme `config.xml` . Par exemple, voici comment spécifier que seul android devrait utiliser les préférences de plein écran :

        <platform name="android">
            <preference name="Fullscreen" value="true" />
        </platform>
    

## Le *hook* élément

Représente votre script personnalisé qui sera appelé par Cordova en cas de certaines actions (par exemple, est appelé après plugin est ajouté ou plate-forme préparer logique). Ceci est utile lorsque vous avez besoin d'étendre les fonctionnalités de Cordoue par défaut. Voir [Guide de crochets](../guide/appdev/hooks/index.html) pour plus d'informations.

    <hook type="after_plugin_install" src="scripts/afterPluginInstall.js" />