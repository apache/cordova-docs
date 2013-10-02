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

# Le fichier config.xml

Plusieurs aspects du comportement de l'application peuvent être contrôlés avec un fichier de configuration globale, `config.xml` , qui est placé dans le répertoire racine, au même endroit que la page d'accueil de l'application. Ce fichier XML de plate-forme agnostique est formaté selon spécification [Emballés Web Applications (Widgets)][1] de la W3C et étendu pour spécifier les paramètres spécifiques à la plateforme, plugins et principales fonctionnalités API Cordova.

 [1]: http://www.w3.org/TR/widgets/

Pour les projets créés avec l'interface en ligne de commande de Cordova (décrite dans le paragraphe "L'interface en Ligne de Commande"), ce fichier peut être trouvé dans le répertoire `www` à la racine du projet. L'utilisation du CLI pour créer un projet régénérera ce fichier dans les différents sous-dossiers dans `platforms` . Si vous utilisez le CLI pour créer un projet, mais qu'ensuite vous changez pour un SDK, le fichier spécifique à la plateforme servira de source.

Cette section décrit en détail les options de configuration globale et multi-plateforme. Consultez les sections suivantes pour les options spécifiques à la plateforme :

*   Configuration iOS
*   Configuration Android
*   Configuration BlackBerry

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
            <preference name="Fullscreen" value="true" />
            <preference name="WebViewBounce" value="true" />
        </widget>
    

<!-- QUERY: is WebViewBounce superseded by DisallowOverscroll? -->

Les éléments de configuration suivants apparaissent dans le premier niveau `config.xml` du fichier et sont pris en charge sur toutes les plateformes prises en charge de Cordoue :

*   La `<widget>` de l'élément `id` attribut fournit l'identificateur de domaine inverse du PPA et les `version` son numéro de version complet exprimé en notation majeur/mineur/patch.

*   L'élément `<name>` spécifie le nom formel de l'application, tel qu'il apparaît sur l'écran d'accueil de l'appareil et dans le app-store.

*   Le `<description>` et `<author>` éléments spécifient les métadonnées et les informations de contact qui peuvent apparaître au sein de l'app-store listings.

*   Le paramètre optionnel `<content>` élément définit la page de démarrage de votre application dans le répertoire actif de web de niveau supérieur. La valeur par défaut est `index.html` , qui apparaît habituellement dans le dossier de niveau supérieur du projet, `www`.

*   Les éléments `<access>` définissent l'ensemble des domaines externes avec lesquels l'application est autorisée à communiquer. La valeur par défaut ci-dessus permet d'accéder à n'importe quel serveur. Consultez le Guide de liste blanche de domaine pour plus de détails.

*   La balise `<preference>` définit différentes options sous forme de paires d'attributs `name` / `value`. Le `name` de chaque préférence est insensible à la casse. Plusieurs préférences sont spécifiques à certaines plateformes, comme indiqué en haut de cette page. Les sections suivantes détaillent les préférences qui s'appliquent à plus d'une plateforme.

## Préférences globales

Les préférences globales suivantes s'appliquent à toutes les plateformes :

*   `Fullscreen`permet de masquer la barre d'état en haut de l'écran. La valeur par défaut est `false` . Exemple :
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`permet de verrouiller l'orientation et d'empêcher toute rotation en réponse aux changements dans l'orientation de l'interface. Les valeurs possibles sont `default` , `landscape` , ou `portrait` . Exemple :
    
        <preference name="Orientation" value="landscape" />
        
    
    **Remarque :** La valeur `default` signifie les orientations portrait et paysage sont toutes les deux activées. Si vous souhaitez utiliser les paramètres par défaut de chaque plateforme (habituellement portrait uniquement), effacez cette balise du fichier `config.xml`. Aussi, BlackBerry utilise `auto` au lieu de `default` dans son fichier `config.xml`. Si vous spécifiez `default` dans le fichier `config.xml` global, cela se traduit par `auto` lors de la compilation pour BlackBerry.

## Préférences multi-plateformes

Les préférences suivantes s'appliquent à plus d'une plate-forme, mais pas tous d'entre eux :

*   `DisallowOverscroll`(boolean, la valeur par défaut `false` ): la valeur `true` si vous ne voulez pas l'interface pour afficher n'importe quelle rétroaction lorsque les utilisateurs faire défiler devant le début ou la fin du contenu.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    S'applique à Android et iOS. Sur iOS, un mouvement de défilement exagéré fera rebondir le contenu à sa position initiale. Sur Android, ils produisent un effet brillant plus subtil le long du rebord en haut ou en bas du contenu.

*   `BackgroundColor`: Définir la couleur d'arrière-plan de l'application. Prend en charge une valeur hexadécimale de quatre octets, avec le premier octet qui représente le canal alpha et les valeurs RGB standards pour les trois octets suivants. Cet exemple spécifie bleu :
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    S'applique à Android et BlackBerry. Substitue des CSS autrement disponibles sur *toutes* les plateformes, par exemple :`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(boolean, la valeur par défaut `false` ): la valeur `true` pour masquer la barre d'outils supplémentaire qui apparaît au-dessus du clavier, aidant les utilisateurs navigueront d'un formulaire de saisie à l'autre.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    S'applique à iOS et BlackBerry.
    
    **Remarque :** Pour BlackBerry, les valeurs valides sont `enable` ou`disable`.

## L'élément `<feature>`

Si vous utilisez la CLI pour créer des applications, vous utilisez la `plugin` commande pour activer le périphérique API. Cela ne modifie pas le niveau supérieur `config.xml` fichier, donc le `<feature>` élément ne s'applique pas à votre flux de travail. Si vous êtes travaillant directement dans un kit de développement logiciel et à l'aide de la plate-forme spécifique `config.xml` fichier source, vous utilisez le `<feature>` tag pour permettre aux API de niveau périphérique et des plugins externes. Ils apparaissent généralement sous cette forme :

        <feature name="Plugin" value="PluginID" />
    

Elles apparaissent souvent avec des valeurs personnalisées dans spécifique à la plateforme `config.xml` fichiers. Par exemple, voici comment spécifier l'API Device pour les projets Android :

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Voici l'apparence de l'élément pour les projets d'iOS :

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Voir la référence de l'API pour plus d'informations sur la spécification de chaque fonctionnalité. Consultez le Guide de développement de Plugin pour plus d'informations sur les plugins.