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

title: Guide de crochets
---

# Guide de crochets

Cordova Hooks représentent des scripts spéciaux qui pourraient être ajoutées par application et développeurs de plugins ou même par votre propre build system pour personnaliser les commandes de cordova. Scripts de hook pourraient être définies en les ajoutant au dossier prédéfini spécial (`/hooks`) ou via des fichiers de configuration (`config.xml` et `plugin.xml`) et exécuter en série dans l'ordre suivant :

  * Crochets de demande de `/hooks`;
  * Application des crochets de `config.xml`;
  * Crochets de plugin de `plugins/.../plugin.xml`.

**Remarque**: `/hooks` répertoire est considérée comme dépréciée en faveur des éléments crochet dans config.xml et plugin.xml.

## Types de prise en charge de crochet

Les types suivants de crochet sont pris en charge :

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only
    

## Façons de définir des crochets

### Via `/hooks` répertoire

**Note**: cette méthode est considérée comme dépréciée en faveur des éléments crochet dans config.xml et plugin.xml.

Pour exécuter l'action personnalisée lorsque le type de crochet correspondant est déclenché, utilisez le type de crochet comme nom pour un sous-dossier à l'intérieur du répertoire « crochets », placez vous le script file ici, par exemple :

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

Lorsque vous utilisez ces crochets, ils seront toujours exécutés sous forme de fichiers exécutables, pas en tant que modules chargeables de JavaScript. **N'oubliez pas**: faites vos scripts exécutables dans ce cas.

### Config.Xml

Crochets peuvent être définis dans le `fichier config.xml` en utilisant `< hook >` éléments, par exemple de projet :

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />
    
    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>
    
    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>
    

### Crochets de plugin (plugin.xml)

Comme un développeur de plugin, que vous pouvez définir des scripts à l'aide des éléments `< hook >` dans un `plugin.xml` comme ça hook :

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin crochets seront tirés exclusivement pour le plugin installé/désinstallé.

## Interface de script

### Javascript

Si vous rédigez des crochets à l'aide de Node.js, vous devez utiliser la définition suivante du module :

```javascript
module.exports = function(context) {
    ...
}
```

Vous pouvez faire votre async de scripts à l'aide de q :

```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

objet de `context` contient le type de crochet, chemin d'accès complet du script exécuté, les options crochet, les arguments de ligne de commande passés à Cordoue et objet de premier niveau "cordova" :

```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```

`Context.opts.plugin` objet se répercutera seulement aux scripts de crochets de plugin.

Vous pouvez également exiger des modules supplémentaires de Cordova dans votre script à l'aide de `context.requireCordovaModule` de la manière suivante :

```javascript
var Q = context.requireCordovaModule('q');
```

**Note**: nouvelle interface de script chargeur de module est utilisé pour les fichiers `.js` définis via `config.xml` ou `plugin.xml` seulement. Pour des raisons de compatibilité crochet fichiers spécifiés par l'intermédiaire de `/hooks` dossiers sont gérés via le nœud child_process frayer, voir "Non-javascript" la section ci-dessous.

### Non-javascript

**Note**: nous recommandons fortement d'écrire vos hameçons à l'aide de Node.js, afin qu'ils soient multi-plateforme, voir la section "Javascript" ci-dessus.

Non-javascript scripts sont exécutés via spawn child_process nœud de répertoire racine du projet et ont les passes de répertoire racine comme premier argument. Toutes les autres options sont transmises au script à l'aide de variables d'environnement :

  * CORDOVA_VERSION - la version CLI-Cordova.
  * CORDOVA_PLATFORMS - liste des plates-formes auquel s'applique la commande séparées par une virgule (p. ex.: android, ios).
  * CORDOVA_PLUGINS - liste des plugin ID auquel s'applique la commande séparées par une virgule (p. ex.: org.apache.cordova.file, org.apache.cordova.file-transfert)
  * CORDOVA_HOOK - chemin d'accès au crochet qui est en cours d'exécution.
  * CORDOVA_CMDLINE - les arguments de ligne de commande exactes passés à cordova (p. ex.: cordova exécuter ios--émuler)

Si un script retourne un code de sortie différent de zéro, puis la commande de cordova parent est interrompue.

Notez également que même si vous travaillez sous Windows, et dans le cas où vos scripts de hook ne sont pas des fichiers bat (ce qui est recommandé, si vous souhaitez que vos scripts pour travailler dans les systèmes d'exploitation autres que Windows) Cordova CLI attendra une ligne shebang comme la première ligne pour qu'il puisse connaître l'interprète, il faut utiliser pour lancer le script. La ligne de shebang doit correspondre à l'exemple suivant :

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Exemple d'utilisation

Cet exemple montre l'utilisation de crochets Cordova à la trace à la sortie de la console la taille du fichier .apk généré pour la plateforme Android.

Créer le vide Cordova app et ajouter la définition suivante au `fichier config.xml` pour dire Cordova pour exécuter le script `afterBuild.js` après chaque génération de plate-forme.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Créer le fichier `scripts/afterBuild.js` et ajoutez l'implémentation suivante. Nous utilisons la version asynchrone de la méthode `fs.stat` afin de démontrer comment les fonctionnalités asynchrones pourraient être faite par l'intermédiaire de crochets.

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();
    
        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');
    
        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

Paramètre `ctx` dans l'exemple ci-dessus est passée de Cordova et représente le contexte d'exécution tels que le chemin d'accès complet du script, plateforme cible, les arguments de ligne de commande, etc. et expose également les fonctionnalités d'assistance supplémentaires. Voir la section `Interface de Script` ci-dessus pour plus de détails.

Vous pouvez maintenant ajouter la plateforme android et exécuter la build.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Autres exemples de bon usage peuvent être trouvés ici :

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>