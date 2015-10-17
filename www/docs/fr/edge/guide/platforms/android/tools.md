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

title: Android Shell Tool Guide
---

# Android Shell Tool Guide

Ce guide montre comment utiliser ensemble de Cordova d'outils axés sur la plate-forme de shell pour développer des applications Android. Cette voie de développement, discutée dans l'aperçu, vous offrent un plus grand choix de développement que l'outil CLI multiplate-forme décrit dans l'Interface de ligne de commande. Par exemple, vous devez utiliser les outils de shell lorsque vous déployez une coutume Cordova WebView aux côtés de composants natifs. Avant d'utiliser ou l'autre voie de développement, vous devez d'abord configurer l'environnement Android SDK comme décrit dans le Guide de la plate-forme Android.

Pour activer les outils de la coquille pour Android, Télécharger Cordova de [cordova.apache.org][1]. Le téléchargement contient les archives distincts pour chaque plate-forme. Développez chacun vous souhaitez cibler, `android` dans ce cas. Les outils pertinents sont généralement disponibles dans le niveau supérieur `bin` répertoire, sinon, consultez le fichier **README** pour en savoir plus.

 [1]: http://cordova.apache.org

Ces outils vous permettent de créer, générer et exécuter des applications Android. Pour plus d'informations sur l'interface de ligne de commande supplémentaire qui active les fonctionnalités de plugin sur toutes les plateformes, voir Plugman à l'aide à gérer les Plugins. Voir Application Plugins pour plus d'informations sur la façon de développer des plugins.

## Créer un projet

Exécutez le `create` commande, en spécifiant le chemin d'accès existant au projet, l'identificateur de package inverse-domaine-style et nom complet de l'application. Voici la syntaxe pour Mac/Linux et Windows :

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Construire

Cela nettoie puis génère un projet.

Debug, sur Mac/Linux ou Windows :

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Date de sortie, sous Mac/Linux ou Windows :

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Exécuter l'application

Le `run` commande accepte les paramètres *optionnels* suivants :

*   Spécification de la cible. Cela inclut `--emulator` , `--device` , ou`--target=<targetID>`.

*   Construire la spécification. Cela inclut `--debug` , `--release` , ou`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Assurez-vous que vous créez au moins un Android Virtual Device, autrement vous êtes invité à le faire avec la `android` commande. Si plusieurs AVD est disponible en tant que cible, vous êtes invité à sélectionner un. Par défaut la `run` commande détecte un appareil ou un émulateur en cours d'exécution si aucun périphérique n'est trouvé.

## Signature de l'App

Vous pouvez consulter Android app signature exigences ici : http://developer.android.com/tools/publishing/app-signing.html

Pour signer une application, vous devez les paramètres suivants :

*   Keystore (`--keystore`): chemin d'accès à un fichier binaire qui peut contenir un jeu de clés.

*   Keystore password (`--storePassword`): mot de passe pour le fichier de clés

*   Alias (`--alias`): l'id spécifiant la clé privée utilisée pour le chant.

*   Mot de passe (`--password`): mot de passe de clé privée spécifié.

*   Type du keystore (`--keystoreType`): pkcs12, jks (par défaut : détection automatique basée sur l'extension de fichier)

Ces paramètres peuvent être spécifiés en utilisant les arguments de ligne de commande ci-dessus à `construire` ou `exécuter` des scripts.

Alternativement, vous pouvez spécifier les dans un fichier (build.json) de configuration de build à l'aide ( `--buildConfig` ) argument. Voici un exemple de fichier de configuration de génération :

    {
         "android": {
             "debug": {
                 "keystore": "..\android.keystore",
                 "storePassword": "android",
                 "alias": "mykey1",
                 "password" : "password",
                 "keystoreType": ""
             },
             "release": {
                 "keystore": "..\android.keystore",
                 "storePassword": "",
                 "alias": "mykey2",
                 "password" : "password",
                 "keystoreType": ""
             }
         }
     }
    

Pour la version signature, mots de passe ne peuvent être exclus et le système de génération attribuera une invite vous demandant le mot de passe.

Il y a aussi des soutien à mélanger et assortir les arguments de ligne de commande et les paramètres dans le fichier build.json. Valeurs de l'argument de ligne de comamnd obtiendrez priorité. Cela peut être utile pour spécifier des mots de passe sur la ligne de commande.

## Exploitation forestière

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Nettoyage

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Bâtiment avec Gradle

À partir de cordova-android@4.0.0, la génération de projet à l'aide de [Gradle][2]. Pour obtenir des instructions sur le bâtiment avec ANT, se référer aux anciennes versions de la documentation.

 [2]: http://www.gradle.org/

### Propriétés Gradle

Ces [Propriétés][3] peuvent être définies pour personnaliser la génération :

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (par défaut : false)
    
    Si celui-ci est défini, les fichiers APK multiples seront générés : une par natif plate-forme prise en charge de projets de bibliothèques (x 86, ARM, etc.). Cela peut être important si votre projet utilise des grandes bibliothèques natives, qui peuvent augmenter considérablement la taille de l'APK généré.
    
    Si ce n'est pas défini, alors un APK unique qui peut être utilisé sur tous les appareils est généré.

*   **cdvVersionCode**
    
    Substitue le versionCode situé dans `AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (par défaut : release-signing.properties)
    
    Chemin vers un fichier .properties qui contient les informations de signature pour diffusion immédiate s'appuie. Le fichier devrait ressembler à :
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
        
    
    `storePassword` et `keyPassword` sont facultatifs et vont demandera si omise.

*   **cdvDebugSigningPropertiesFile** (par défaut : debug-signing.properties)
    
    Même cdvReleaseSigningPropertiesFile, mais pour le débogage s'appuie. Utile lorsque vous avez besoin de partager une clé de signature avec d'autres développeurs.

*   **cdvMinSdkVersion**
    
    Remplace la valeur de `minSdkVersion` dans `AndroidManifest.xml`. Utile lorsque vous créez plusieurs APKs s'inspire de la version SDK.

*   **cdvBuildToolsVersion**
    
    Substituer la valeur automatiquement détecté `android.buildToolsVersion` .

*   **cdvCompileSdkVersion**
    
    Substituer la valeur automatiquement détecté `android.compileSdkVersion` .

### Extension build.gradle

Si vous devez personnaliser `build.gradle`, plutôt que de modifier directement, vous devez créer un fichier de frère nommé `build-extras.gradle`. Ce fichier sera inclus par le principal `build.gradle` lorsqu'il est présent. Voici un exemple :

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Remarquez que les plugins peut inclure également `build-extras.gradle` fichiers via :

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Exemple de Build

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true