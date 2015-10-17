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

title: Guida di ganci
---

# Guida di ganci

Cordova Hooks rappresentano gli script speciali che potrebbero essere aggiunto dall'applicazione e gli sviluppatori di plugin o anche da soli la propria costruire sistema per personalizzare comandi di cordova. Gancio script potrebbe essere definito aggiungendoli alla cartella speciale predefinita ( `/hooks` ) o tramite file di configurazione ( `config.xml` e `plugin.xml` ) ed eseguire in serie nell'ordine seguente:

  * Applicazione ganci da `/hooks` ;
  * Applicazione ganci da `config.xml` ;
  * Ganci di plugin da`plugins/.../plugin.xml`.

**Nota**: `/hooks` directory è considerato deprecato a favore di elementi gancio in config. XML e plugin.

## Tipi supportati gancio

Sono supportati i seguenti tipi di gancio:

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
    

## Modi per definire ganci

### Via `/hooks` directory

**Nota**: questo metodo è considerato deprecato a favore di elementi gancio in config. XML e plugin.

Per eseguire l'azione personalizzata quando viene generato il corrispondente tipo di gancio, utilizzare il gancio tipo come nome per una sottocartella all'interno della directory 'ganci' e posto si creano script file qui, ad esempio:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

Quando si utilizzano questi ganci, verrà sempre eseguiti come file eseguibili, non come moduli caricabili di JavaScript. **Remember**: rendere il vostro script eseguibile in questo caso.

### Config. XML

Ganci possono essere definiti nel `config. XML` utilizzando `< hook >` elementi, ad esempio di progetto:

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
    

### hook di plugin (plugin.xml)

Come uno sviluppatore di plugin che è possibile definire gancio script utilizzando gli elementi `< hook >` in un `plugin` simile:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin ganci saranno licenziati esclusivamente per il plugin viene installato/disinstallato.

## Interfaccia di script

### Javascript

Se si sono scrivendo ganci utilizzando node. js è necessario utilizzare la seguente definizione di modulo:

```javascript
module.exports = function(context) {
    ...
}
```

Si può fare il vostro script async utilizzando d:

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

oggetto di `context` contiene gancio tipo, percorso completo dello script eseguito, il gancio, argomenti della riga di comando passati a Cordova e oggetto di primo livello "cordova":

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

`context.opts.plugin` oggetto verrà ceduto solo agli script ganci plugin.

È possibile anche richiedere ulteriori moduli di Cordova nel tuo script utilizzando `context.requireCordovaModule` nel modo seguente:

```javascript
var Q = context.requireCordovaModule('q');
```

**Nota**: nuovo modulo caricatore script interfaccia viene utilizzata per i file `JS` definiti tramite `config. XML` o `plugin` solo. Per motivi di compatibilità gancio file specificati tramite le cartelle `/hooks` vengono eseguiti tramite nodo child_process spawn, vedi 'Non-javascript' sezione riportata di seguito.

### Non-javascript

**Nota**: consigliamo vivamente di scrivere i vostri ganci utilizzando node. js, in modo che essi sono cross-platform, vedere la sezione 'Javascript' sopra.

Non-javascript script vengono eseguiti tramite spawn child_process nodo dalla directory principale del progetto e hanno la radice directory passa come primo argomento. Tutte le altre opzioni vengono passati allo script utilizzando le variabili di ambiente:

  * CORDOVA_VERSION - la versione di Cordova-CLI.
  * CORDOVA_PLATFORMS - elenco delle piattaforme che il comando si applica a separati da virgola (ad es.: android, ios).
  * CORDOVA_PLUGINS - lista di plugin ID che il comando si applica a delimitato da virgole (ad esempio: org.apache.cordova.file, org.apache.cordova.file-transfer)
  * CORDOVA_HOOK - percorso al gancio che è in fase di esecuzione.
  * CORDOVA_CMDLINE - gli argomenti della riga di comando esatti passati a cordova (ad es.: emulare cordova eseguita ios...)

Se uno script restituisce un codice di uscita diverso da zero, quindi il comando di cordova padre verrà interrotta.

Si noti inoltre che anche se si lavora su Windows, e nel caso in cui il vostro script di hook non file bat (che è consigliato, se si desidera che il vostro script per lavorare nei sistemi operativi non Windows) Cordova CLI si aspetta una linea la baracca come la prima linea per poter conoscere l'interprete deve utilizzare per lanciare lo script. La linea la baracca dovrebbe corrisponda all'esempio seguente:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Esempio di utilizzo

In questo esempio viene illustrato l'utilizzo di ganci di Cordova per traccia per l'output della console le dimensioni del file. apk generato per piattaforma Android.

Crea app di Cordova vuota e aggiungere la seguente definizione di `config. XML` per dire a Cordova per eseguire script `afterBuild.js` dopo ogni generazione di piattaforma.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Creare il file `scripts/afterBuild.js` e aggiungere la seguente implementazione. Usiamo la versione di async di `fs.stat` metodo per dimostrare come funzionalità async potrebbe essere fatto tramite ganci.

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
    

Parametro `ctx` nell'esempio sopra riportato viene passato da Cordova e rappresenta il contesto di esecuzione come percorso completo dello script, piattaforma di destinazione, gli argomenti della riga di comando, ecc e anche espone funzionalità di supporto aggiuntivi. Per maggiori dettagli, vedere la sezione `Script interfaccia` di sopra.

È ora possibile aggiungere piattaforma android ed eseguire la compilazione.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Ulteriori esempi di utilizzo buona potrebbero essere trovati qui:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>