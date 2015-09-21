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

title: Spécification du plugin
---

# Spécification du plugin

Le `plugin.xml` fichier est un document XML dans le `plugins` espace de noms : `http://apache.org/cordova/ns/plugins/1.0` . Il contient un niveau supérieur `plugin` élément qui définit le plugin et les enfants qui définissent la structure du plugin.

Un élément de plugin sample :

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## `<plugin>`élément

Le `plugin` élément est l'élément de niveau supérieur du manifeste du plugin. Il comporte les attributs suivants :

*   `xmlns`(obligatoire): l'espace de noms plugin, `http://apache.org/cordova/ns/plugins/1.0` . Si le document contient du code XML d'autres espaces de noms, tels que les étiquettes à ajouter à la `AndroidManifest.xml` fichier, ces espaces de noms doivent également être inclus dans l'élément de niveau supérieur.

*   `id`(obligatoire): un revers-domaine de style comme identificateur pour le plugin,`com.alunny.foo`

*   `version`(obligatoire): un numéro de version pour le plugin, ce qui correspond à l'expression régulière suivante du style majeur-mineur-patch :
    
        ^\d+[.]\d+[.]\d+$
        

## `<engines>`et `<engine>` éléments

Les éléments enfants de le `<engines>` élément spécifier les versions de cadres basé sur Apache Cordova qui prend en charge de ce plugin. Un exemple :

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Semblable à la `<plugin>` de l'élément `version` attribut, la chaîne de version spécifiée doit correspondre à une chaîne de majeur-mineur-patch conforme à l'expression régulière :

        ^\d+[.]\d+[.]\d+$
    

Éléments de moteur peuvent également spécifier fuzzy matches pour éviter les répétitions et à réduire la maintenance mise à jour de la plate-forme sous-jacente. Outils doivent supporter un minimum de `>` , `>=` , `<` et `<=` , par exemple :

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

Le '<engine>' tags possède aussi un support par défaut pour toutes les principales plates-formes Cordova existe sur. Si la balise de moteur « cordova », cela signifie que l'attribut de version du moteur doivent satisfaire à toutes les versions de Cordova sur n'importe quelle plateforme. Vous mai également la liste des plates-formes spécifiques et leurs versions afin de substituer le moteur catch-all "cordova" :

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Voici une liste de la défaillance des moteurs qui les »<engine>' tag prend en charge: * « cordova » * « cordova-plugman » * « cordova-android » * « cordova-ios » * « cordova-blackberry10 » * « cordova-wp7 » * « cordova-wp8 » * « cordova-windows8 »

En spécifiant des cadres personnalisés basé sur Apache Cordova doivent figurer sous la balise de moteur comme suit :

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Un cadre basé sur Apache Cordova personnalisé requiert qu'un élément du moteur inclut les attributs suivants: « nom », « version », « scriptSrc » et « plateforme ».

*   `name`(obligatoire): un nom explicite pour votre cadre personnalisé.

*   `version`(obligatoire): la version que votre cadre doit avoir pour installer.

*   `scriptSrc`(obligatoire): le fichier de script qui indique à quelle version du cadre personnalisé est plugman. Idéalement, ce fichier doit être dans le répertoire de niveau supérieur de votre répertoire de plugin.

*   `platform`(obligatoire): quelles plates-formes supportant votre cadre. Vous pouvez utiliser le caractère générique ' *' pour dire pris en charge pour toutes les plates-formes, spécifiez plusieurs avec un caractère de pipe comme « android|ios|blackberry10 » ou juste une seule plate-forme comme « android ».

plugman abandonne avec un code différent de zéro pour n'importe quel plugin dont le projet cible ne satisfait pas aux contraintes du moteur.

Si non `<engine>` les balises sont spécifiées, plugman essaye de s'installer dans le répertoire de projet spécifié cordova aveuglément.

## `<name>`élément

Un nom lisible par l'homme pour le plugin, dont le contenu texte contient le nom du plugin. Par exemple :

    <name>Foo</name>
    

Cet élément n'est pas (encore) gérer la localisation.

## `<description>`élément

Une description explicite pour le plugin. Le contenu textuel de l'élément contient la description du plugin. Un exemple :

    <description>Foo plugin description</description>
    

Cet élément n'est pas (encore) gérer la localisation.

## `<author>`élément

Nom de l'auteur de plugin. Le contenu textuel de l'élément contient le nom de l'auteur du plugin. Un exemple :

    <author>Foo plugin description</author>
    

## `<keywords>`élément

Plugin Mots-clés. Le contenu textuel de l'élément contient des mots-clés séparés par des virgules pour décrire le plugin. Un exemple :

    <keywords>foo,bar</keywords>
    

## `<license>`élément

Licence de plugin. Le contenu textuel de l'élément contient la licence de plugin. Un exemple :

    <license>Apache 2.0 License</license>
    

## `<asset>`élément

Un ou plusieurs éléments de liste de fichiers ou répertoires à copier dans un $ $ etAPP Cordova `www` répertoire. Exemples :

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Tous les `<asset>` balises requièrent tous deux `src` et `target` des attributs. Plugins uniquement sur le Web contient principalement `<asset>` éléments. Tout `<asset>` éléments imbriqués dans les `<platform>` éléments spécifient les actifs spécifiques à la plateforme web, tel que décrit ci-dessous. Les attributs incluent :

*   `src`(obligatoire): où le fichier ou le répertoire est situé dans le forfait de plugin, relatif à la `plugin.xml` document. Si un fichier n'existe pas à le spécifié `src` emplacement, plugman s'arrête et inverse le processus d'installation, émet un avis sur le conflit et se termine avec un code différent de zéro.

*   `target`(obligatoire) :
    
    Où le fichier ou le répertoire doit se trouver dans l'app de Cordova, relatif à la `www` répertoire. Actifs peuvent être ciblées vers les sous-répertoires, par exemple :
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    crée le `js/experimental` répertoire dans le `www` répertoire, sauf si déjà présents, puis les copies la `new-foo.js` du dossier et le renomme `foo.js` . Si un fichier existe déjà à l'emplacement cible, plugman s'arrête et inverse le processus d'installation, émet un avis au sujet du conflit et se termine avec un code différent de zéro.

## `<js-module>`élément

La plupart des plugins comprennent un ou plusieurs fichiers JavaScript. Chaque `<js-module>` balise correspond à un fichier JavaScript et empêche les utilisateurs du plugin de devoir ajouter un `<script>` tag pour chaque fichier. Alors que `<asset>` étiquettes il suffit de copier un fichier dans le sous-répertoire plugin dans `www` , `<js-module>` tags sont beaucoup plus sophistiqués. Ils ressemblent à ceci :

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Lors de l'installation d'un plugin avec l'exemple ci-dessus, `socket.js` est copié dans `www/plugins/my.plugin.id/socket.js` et ajouté une entrée aux `www/cordova_plugins.js` . Au moment du chargement, le code dans `cordova.js` utilise XHR pour lire chaque fichier et y injecter un `<script>` balise en HTML. Il ajoute un mappage pour écraser ou fusionner le cas échéant, tel que décrit ci-dessous.

*Ne pas* enrouler le fichier avec `cordova.define` , tel qu'il est ajouté automatiquement. Le module est encapsulé dans une fermeture, avec `module` , `exports` , et `require` dans le champ d'application, comme il est normal pour les modules d'AMD.

Informations relatives au `<js-module>` tag :

*   Le `src` fait référence à un fichier dans le répertoire plugin relatif à la `plugin.xml` fichier.

*   Le `name` fournit la dernière partie du nom du module. Il peut généralement être ce que vous voulez, et il importe seulement si vous voulez utiliser `cordova.require` pour importer les autres parties de vos plugins dans votre code JavaScript. Le nom du module pour une `<js-module>` est votre plugin de `id` suivi de la valeur de `name` . Dans l'exemple ci-dessus, avec un `id` de `chrome.socket` , le nom du module est`chrome.socket.Socket`.

*   Trois balises sont autorisés dans les `<js-module>` :
    
    *   `<clobbers target="some.value"/>`indique que le `module.exports` est insérée dans le `window` d'objet comme `window.some.value` . Vous pouvez avoir autant de `<clobbers>` que vous le souhaitez. Tout objet non disponible sur `window` est créé.
    
    *   `<merges target="some.value"/>`indique que le module devrait fusionner avec n'importe quelle valeur existant à `window.some.value` . Si une clé existe déjà, la version du module remplace l'original. Vous pouvez avoir autant de `<merges>` que vous le souhaitez. Tout objet non disponible sur `window` est créé.
    
    *   `<runs/>`signifie que votre code doit être spécifié avec `cordova.require` , mais pas installé sur le `window` objet. Ceci est utile lors de l'initialisation du module, y attacher des gestionnaires d'événements ou dans le cas contraire. Vous ne pouvez avoir jusqu'à un `<runs/>` tag. Notez que, notamment un `<runs/>` avec `<clobbers/>` ou `<merges/>` est superflue, car elles aussi `cordova.require` votre module.
    
    *   Vide `<js-module>` encore des charges et peut être l'indication dans les autres modules à travers`cordova.require`.

Si `src` n'est pas résolue vers un fichier existant, plugman s'arrête et inverse de l'installation, prévient du problème, puis quitte avec un code différent de zéro.

Nidification `<js-module>` éléments `<platform>` déclare des liaisons de module JavaScript spécifique à la plateforme.

## `<dependency>`

Le `<dependency>` balise permet de spécifier d'autres plugins dont dépend le plugin actuel. Tandis que les versions futures eux puiseront dans les référentiels de plugin, à court terme les plugins sont directement référencés en tant qu'URL par `<dependency>` tags. Ils sont mis en forme comme suit :

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: fournit l'ID du plugin. Il doit être unique au monde et exprimée dans le style de revers-domaine. Bien qu'aucune de ces restrictions est appliquée actuellement, qu'ils soient à l'avenir.

*   `url`: Une URL pour le plugin. Cela devrait faire référence à un dépôt git, qui plugman tente de cloner.

*   `commit`: Il s'agit d'aucune référence de git comprise par `git checkout` : un nom de succursale ou de la balise (par exemple, `master` , `0.3.1` ), ou une validation de hachage (par exemple,`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Spécifie que la dépendance ciblé plugin existe comme un sous-répertoire du dépôt git. Ceci est utile car elle permet le référentiel contenir plusieurs plugins liés, chacun spécifié individuellement.

À l'avenir, contraintes de version seront mis en place, et un référentiel de plugin existera pour prendre en charge l'aller chercher par nom au lieu de l'URL explicite.

### Dépendance relative Paths

Si vous définissez la `url` d'un `<dependency>` tag à `"."` et fournir un `subdir` , le plugin dépendant est installé d'un même local ou distant git référentiel comme le plugin de parent qui spécifie le `<dependency>` tag.

Notez que les `subdir` toujours spécifie un chemin d'accès relatif à la *racine* du dépôt git, pas le plugin de parent. Cela est vrai même si vous avez installé le plugin avec un chemin d'accès local directement à elle. Plugman trouve la racine du dépôt git et recherche ensuite l'autre plugin de là.

## `<platform>`

Le `<platform>` tag identifie les plates-formes qui sont associées à du code natif ou nécessitent des modifications à leurs fichiers de configuration. Outils à l'aide de cette spécification peuvent identifier les plates-formes prises en charge et installer le code dans les projets de Cordova.

Plugins sans `<platform>` tags sont supposés pour être JavaScript uniquement et donc installable sur toutes les plates-formes.

Une balise de plate-forme d'échantillon :

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

La nécessaire `name` attribut identifie une plate-forme comme pris en charge, les enfants de l'élément comment associer cette plate-forme.

Noms de la plate-forme doivent être en minuscules. Les noms de plate-forme, comme arbitrairement choisis, figurent :

*   Android
*   BB10
*   iOS
*   WP7
*   wp8

## `< fichier source >`

Le `<source-file>` élément identifie le code source exécutable qui doit être installé dans un projet. Exemples :

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Il prend en charge les attributs suivants :

*   `src`(obligatoire): emplacement du fichier relatif à `plugin.xml` . Si le `src` fichier est introuvable, plugman s'arrête et inverse de l'installation, émet un avis sur le problème, puis quitte avec un code différent de zéro.

*   `target-dir`: Un répertoire dans lequel les fichiers doivent être copiés, relatif à la racine du projet Cordova. Dans la pratique, c'est très important pour les plates-formes Java, où un fichier dans le `com.alunny.foo` le paquet doit être situé dans le `com/alunny/foo` répertoire. Pour les plates-formes où le répertoire source n'est pas important, cet attribut doit être omis.
    
    Comme pour les actifs, si le `target` d'un `source-file` serait écraser un fichier existant, plugman s'arrête et inverse de l'installation, émet un avis sur le problème, puis quitte avec un code différent de zéro.

*   `framework`(iOS uniquement): si la valeur `true` , ajoute également le fichier spécifié en tant que cadre pour le projet.

*   `compiler-flags`(iOS uniquement): si défini, assigne les indicateurs de compilateur spécifié pour le fichier source particulière.

## `<config-file>`

Identifie un fichier de configuration XML-basé à modifier, où dans ce document, la modification devrait avoir lieu, et ce qui doit être modifié.

Deux types de fichiers qui ont été testés pour modification à cet élément sont `xml` et `plist` fichiers.

Le `config-file` élément seulement vous permet d'ajouter de nouveaux enfants à une arborescence de document XML. Les enfants sont des littéraux XML à insérer dans le document cible.

Exemple pour XML :

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Exemple pour `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Il prend en charge les attributs suivants :

*   `target`:
    
    Modifier le fichier et le chemin d'accès relatif à la racine du projet Cordova.
    
    La cible peut inclure des caractères génériques ( `*` ) éléments. Dans ce cas, de manière récursive plugman parcourt l'arborescence du projet et utilise le premier match.
    
    Sur iOS, l'emplacement des fichiers de configuration par rapport à la racine du répertoire projet n'est pas connue, alors spécifiant une cible de `config.xml` se résout en`cordova-ios-project/MyAppName/config.xml`.
    
    Si le fichier spécifié n'existe pas, l'outil ne tient pas compte de la modification de la configuration et continue l'installation.

*   `parent`: Un sélecteur de XPath qui référence le parent des éléments à ajouter au fichier config. Si vous utilisez les sélecteurs absolues, vous pouvez utiliser un caractère générique ( `*` ) pour spécifier l'élément racine, par exemple,`/*/plugins`.
    
    Pour `plist` les fichiers, les `parent` détermine sous quelle clé parente du XML spécifié doit être inséré.
    
    Si le sélecteur ne résout pas à un enfant du document spécifié, l'outil s'arrête et inverse le processus d'installation, émet un avertissement et se termine avec un code différent de zéro.

## `<plugins-plist>`

Ceci est *obsolète* car elle ne s'applique à cordova-ios 2.2.0 et au-dessous. Utiliser le `<config-file>` tag pour les versions plus récentes de Cordova.

Exemple :

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Spécifie une clé et une valeur à ajouter à la bonne `AppInfo.plist` fichier dans un projet de Cordova d'iOS. Par exemple :

    <plugins-plist key="Foo" string="CDVFoo" />
    

## `<resource-file>`et`<header-file>`

Comme fichiers sources, mais spécialement pour les plateformes telles qu'iOS, qui distinguent entre les fichiers sources, en-têtes et ressources. Exemples :

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

## `<lib-file>`

Comme source, ressources et fichiers d'en-tête, mais spécialement pour les plateformes telles que BlackBerry 10 qui utilisent des bibliothèques généré par l'utilisateur. Exemples :

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Attributs pris en charge :

*   `src`(obligatoire): l'emplacement du fichier relatif à `plugin.xml` . Si `src` est introuvable, plugman s'arrête et inverse de l'installation, des questions un avertissement sur le problème et se termine avec un code différent de zéro.

*   `arch`: L'architecture pour laquelle le `.so` fichier a été généré, soit `device` ou`simulator`.

## `< cadre >`

Identifie un cadre (généralement une partie de la plate-forme/OS) dont dépend le plugin.

Exemples :

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    

Le `src` attribut identifie le cadre, qui plugman tente d'ajouter au projet Cordova, dans le mode correct pour une plate-forme donnée.

Le paramètre optionnel `weak` attribut est une valeur booléenne qui indique si le cadre devrait être faiblement lié. La valeur par défaut est`false`.

## `<info>`

Informations supplémentaires fournies aux utilisateurs. Ceci est utile lorsque vous avez besoin des étapes supplémentaires qui ne peuvent pas être facilement automatisées ou sont hors de portée de plugman. Exemples :

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to your `local.properties`
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

# Variables

Dans certains cas, un plugin devrez peut-être modifier la configuration dépend de l'application cible. Par exemple, pour vous inscrire à C2DM sur Android, une application dont l'id de package est `com.alunny.message` requerrait une autorisation tels que :

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

Dans ce cas où le contenu inséré de la `plugin.xml` fichier n'est pas connu avance, variables peuvent être indiquées par un signe dollar suivi d'une série de lettres capitales, des chiffres ou des traits de soulignement. Pour l'exemple ci-dessus, le `plugin.xml` fichier comprendrait cette balise :

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman remplace les références de variable avec la valeur spécifiée, ou une chaîne vide si elle n'est pas trouvé. La valeur de référence de la variable peut être détectée (dans ce cas, de la `AndroidManifest.xml` fichier) ou spécifié par l'utilisateur de l'outil ; le processus exact dépend de l'outil particulier.

plugman pouvez demander aux utilisateurs de spécifier les variables requises d'un plugin. Par exemple, les clés de l'API pour C2M et Google Maps peuvent être spécifiés comme un argument de ligne de commande :

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Pour rendre la variable obligatoire, la `<platform>` balise doit contenir un `<preference>` tag. Par exemple :

    <preference name="API_KEY" />
    

plugman vérifie que ces préférences requis sont passés. Si ce n'est pas le cas, il doit avertir l'utilisateur comment passer la variable dans et sortir avec un code différent de zéro.

Certains noms de variables doivent être réservées, comme indiqué ci-dessous.

## $PACKAGE_NAME

L'inverse-domaine de style un identificateur unique pour le package, correspondant à la `CFBundleIdentifier` sur iOS ou le `package` attribut de niveau supérieur `manifest` élément dans un `AndroidManifest.xml` fichier.