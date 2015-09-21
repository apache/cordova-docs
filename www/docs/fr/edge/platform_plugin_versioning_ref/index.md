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

title: Plates-formes et gestion de Plugins Version
---

# Plates-formes et gestion de Plugins Version

Depuis la version 4.3.0, Cordova permet de sauvegarder et restaurer des plates-formes et des plugins.

Cette fonctionnalité permet aux développeurs d'enregistrer et de restaurer leur application à un état connu sans avoir à vérifier dans l'ensemble du code source plate-forme et plugin.

La commande « save » stocke les détails de plate-forme de l'application et les versions plugin dans le fichier config.xml. L'étape de « restaurer » se fait automatiquement lorsqu'un **'prépare la cordova'** est délivré, en faisant usage de l'information précédemment enregistrée dans le fichier config.xml.

Un scénario où les capacités de sauvegarde/restauration venir dans maniable est en grandes équipes qui travaillent sur une application, avec chaque membre de l'équipe en se concentrant sur une plateforme ou un plugin. Cette caractéristique le rend plus facile de partager le projet et de réduire la quantité de code redondant qui est vérifié dans le référentiel.

## Versioning de plate-forme

### Enregistrement des plates-formes

Pour enregistrer une plate-forme, vous émettez la commande suivante :

    $ cordova platform add <platform[@<version>] | directory | git_url> --save
    

Après avoir exécuté la commande ci-dessus, le fichier config.xml qui en résulte ressemble à :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="~4.0.0" />
        ...
    </xml>
    

Quelques exemples :

  * **'cordova platform add android --save'** => récupère la version en attente de la plateforme android, il ajoute au projet et puis met à jour fichier config.xml.
  * **"cordova platform add android@3.7.0 --save"** => récupère la plateforme android, version 3.7.0 du NPM, il ajoute au projet et puis met à jour fichier config.xml.
  * **"cordova platform add android@https://github.com/apache/cordova-android.git​ --save"** => clones le dépôt git de cordova-android spécifié, ajoute la plate-forme android pour le projet, puis met à jour le fichier config.xml et pointer sa version git-l'URL spécifiée.
  * **"cordova platform add C:/path/to/android/platform --save"** => récupère la plateforme android du répertoire spécifié, il ajoute au projet, puis met à jour le fichier config.xml, puis pointez sur le répertoire.

### Masse, économie des plates-formes sur un projet existant

Le '--save ' drapeau décrit ci-dessus n'est utile que lorsque vous pensez à l'utiliser lors de l'ajout de la plate-forme. Si vous avez un projet existant et que vous souhaitez enregistrer toutes les plateformes actuellement ajoutés à votre projet, vous pouvez utiliser :

    $ cordova platform save
    

### Mise à jour / suppression des plates-formes

Il est également possible de mise à jour/suppression du fichier config.xml pendant les commandes 'cordova platform update"et « plate-forme cordova supprimer » :

    $ cordova platform update <platform[@<version>] | directory | git_url> --save
    $ cordova platform remove <platform> --save
    

Quelques exemples :

  * **"cordova platform update android --save"** => en plus de la mise à jour de la plateforme android vers la version en attente, mise à jour fichier config.xml entrée
  * **'cordova platform update android@3.8.0 --save'** => en plus de mettre à jour la plateforme android vers la version 3.8.0, mise à jour fichier config.xml entrée
  * **'cordova platform update /path/to/android/platform --save'** => en plus de mettre à jour la plateforme android vers la version dans le dossier, mise à jour fichier config.xml entrée
  * **'cordova platform remove android --save'** => supprime le projet de la plateforme android et supprime son entrée de config.xml.

### Restauration des plates-formes

Plateformes sont automatiquement restaurées de config.xml en actionnant la commande **'cordova prepare'** .

Si vous ajoutez une plateforme sans spécifier une version/dossier/git_url, la version à installer est extraite de config.xml, **si trouvé**.

Exemple :

Supposons que votre fichier config.xml contient l'entrée suivante :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <engine name="android" spec="3.7.0" />
        ...
    </xml>
    

Si vous exécutez la commande **« cordova plate-forme Ajouter android »** (aucune version/dossier/git_url spécifiée), la plate-forme "android@3.7.0" (comme provient de config.xml) sera installée.

* * *

## Versioning de plugin

*(Les commandes du plugin sont un miroir des commandes plugin)*

### Sauver les plugins

Pour enregistrer un plugin, vous émettez la commande suivante :

    $ cordova plugin add <plugin[@<version>] | directory | git_url> --save
    

Après avoir exécuté la commande ci-dessus, le fichier config.xml qui en résulte ressemble à :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="~1.0.0" />
        ...
    </xml>
    

Quelques exemples :

  * **'cordova plugin add cordova-plugin-console --save'** => récupère la version du plugin console en attente, il ajoute au projet et puis met à jour fichier config.xml.
  * **"cordova plugin add cordova-plugin-console@0.2.13 --save"** => récupère le plugin android, la version 0.2.13 de la NGP, il ajoute au projet et puis met à jour fichier config.xml.
  * **"cordova plugin add https://github.com/apache/cordova-plugin-console.git --save"** => clones le dépôt git de console spécifié plugin, ajoute le plugin console au projet, puis met à jour le fichier config.xml et pointer sa version git-l'URL spécifiée.
  * **"cordova plugin add C:/chemin/de/console/plugin --save"** => récupère le plugin console du répertoire spécifié, il ajoute au projet, puis met à jour le fichier config.xml, puis pointez sur le répertoire.

### Masse, économie des plugins sur un projet existant

Le '--save ' drapeau décrit ci-dessus n'est utile que lorsque vous pensez à l'utiliser lors de l'ajout de plugin. Si vous avez un projet existant et que vous souhaitez enregistrer tous actuellement ajoutés des plugins dans le projet, vous pouvez utiliser :

    $ cordova plugin save
    

### Mise à jour / suppression des plugins

Il est également possible de mise à jour/suppression du fichier config.xml pendant les commandes « cordova plugin update » et « supprimer plugin cordova » :

    $ cordova plugin update <plugin[@<version>] | directory | git_url> --save
    $ cordova plugin remove <plugin> --save
    

Quelques exemples :

  * **'cordova plugin update cordova-plugin-console --save'** => en plus de la mise à jour le plugin console vers la version en attente, mise à jour fichier config.xml entrée
  * **'cordova plugin update cordova-plugin-console@0.2.13 --save'** => en plus de la mise à jour le plugin android vers la version 3.8.0, mise à jour fichier config.xml entrée
  * **'cordova plugin update /path/to/console/plugin --save'** => en plus de la mise à jour le plugin console vers la version dans le dossier, mise à jour fichier config.xml entrée
  * **« cordova plugin remove cordova-plugin-console --save »** => supprime la console plugin dans le projet et supprime son entrée de config.xml.

### Restauration des plugins

Plugins sont automatiquement restaurées de config.xml en actionnant la commande **« cordova prepare »** .

Si vous ajoutez un plugin sans spécifier une version/dossier/git_url, la version à installer est extraite de config.xml, **si trouvé**.

Exemple :

Supposons que votre fichier config.xml contient l'entrée suivante :

    <?xml version='1.0' encoding='utf-8'?>
        ...
        <plugin name="cordova-plugin-console" spec="0.2.11" />
        ...
    </ xml>
    

Si vous exécutez la commande **« cordova plugin add cordova-plugin-console »** (aucune version/dossier/git_url spécifiée), sera installé le plugin "cordova-plugin-console@0.2.11" (comme provient de config.xml).