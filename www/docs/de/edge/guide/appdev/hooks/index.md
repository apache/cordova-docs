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

title: Hooks-Guide
---

# Hooks-Guide

Cordova-Hooks stellen besondere Skripts die konnten durch Anwendung und Plugin-Entwickler hinzugefügt werden oder auch durch Ihr eigenes Buildsystem Cordova Befehle anpassen. Aktionsskripte einrichten könnte definiert, indem sie auf die besonderen vordefinierte Ordner (`/hooks`) oder über Konfigurationsdateien (`config.xml` und `plugin.xml`) und nacheinander in folgender Reihenfolge ausgeführt werden:

  * Anwendung Haken aus `/hooks`;
  * Anwendung-Haken von `"config.xml"`;
  * Plugin-Haken aus `plugins/.../plugin.xml`.

**Hinweis**: `/hooks` Verzeichnis gilt zugunsten der Haken Elemente in config.xml und plugin.xml.

## Unterstützte Haken-Typen

Die folgenden Haken-Typen werden unterstützt:

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
    

## Möglichkeiten, Haken zu definieren

### Über `/hooks` -Verzeichnis

**Hinweis**: Diese Methode gilt als veraltet zugunsten der Haken Elemente in config.xml und plugin.xml.

Um benutzerdefinierte Aktion ausgeführt wird, wenn die entsprechenden Haken-Typ ausgelöst wird, verwenden Sie Haken als Name für einen Unterordner im Verzeichnis 'Haken' und platzieren Sie Skriptdateien Sie hier zum Beispiel:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

Wenn Sie diesen Haken verwenden, werden sie immer als exe-Dateien, nicht als ladbare Module in JavaScript ausgeführt werden. **Denken Sie daran**: Ihre Skripte in diesem Fall ausführbar machen.

### "Config.xml"

Haken können in des Projekts `"config.xml"` `<hook>` Elemente, z. B. mit definiert werden:

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
    

### Plugin-Haken (plugin.xml)

Haken Sie Skripte mit `<hook>` Elemente in einem `plugin.xml` wie das als Plugin-Entwickler, die, den Sie definieren können:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`Before_plugin_install`, `After_plugin_install`, `Before_plugin_uninstall` -Plugin, die ausschließlich für das Plugin installiert/deinstalliert Haken ausgelöst werden.

## Skript-Schnittstelle

### Javascript

Wenn Sie Haken mit Node.js schreiben, verwenden Sie die folgende Moduldefinition:

```javascript
module.exports = function(context) {
    ...
}
```

Sie können Ihre Scipts Async mit f: machen.

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

`context` -Objekt enthält Haken Typ, ausgeführten Skriptes vollständigen Pfad, "Optionen" Haken, Befehlszeilenargumente Cordova und auf oberster Ebene "Cordoba"-Objekt übergeben:

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

`context.opts.plugin` Objekt wird nur an Plugin-Haken-Skripts übergeben werden.

Cordova-Zusatzmodule benötigen Sie auch in Ihrem Skript mithilfe von `context.requireCordovaModule` wie folgt:

```javascript
var Q = context.requireCordovaModule('q');
```

**Hinweis**: neues Modul Lader Skript Schnittstelle wird verwendet für die `js` -Dateien über `Datei config.xml` oder `plugin.xml` nur definiert. Aus Kompatibilitätsgründen werden die Haken-Dateien, die über `/hooks` Ordner angegeben über Knoten Child_process Laich, siehe "Non-Javascript" Abschnitt weiter unten ausgeführt.

### Ohne javascript

**Hinweis**: Wir empfehlen, schreiben Ihre Haken mit Node.js, so dass sie Cross-Plattform sind, siehe obigen Abschnitt von 'Javascript'.

Ohne Javascript-Skripten werden über Knoten Child_process Laich von Root-Verzeichnis des Projekts ausgeführt und haben die Wurzel-Verzeichnis-Pässe als erstes Argument. Alle anderen Optionen werden an das Skript mithilfe von Umgebungsvariablen übergeben:

  * CORDOVA_VERSION - die Version der Cordova-CLI.
  * CORDOVA_PLATFORMS - Komma-separierte Liste der Plattformen, für die der Befehl gilt (z.B.: android, Ios).
  * CORDOVA_PLUGINS - Komma-getrennte Liste von Plugin IDs, für die der Befehl gilt (z.B.: org.apache.cordova.file, org.apache.cordova.file-Transfer)
  * CORDOVA_HOOK - Pfad an den Haken, der ausgeführt wird.
  * CORDOVA_CMDLINE - die genauen Befehlszeilenargumente übergeben, Cordova (z.B.: Cordova Ios--führen zu emulieren)

Wenn ein Skript einen Exitcode ungleich NULL zurückgibt, wird der übergeordnete Cordova Befehl abgebrochen.

Beachten Sie auch, dass selbst wenn Sie unter Windows arbeiten, und für den Fall, dass Ihre Aktionsskripte sind nicht Bat-Dateien (was empfohlen wird Sie ggf. Ihre Skripte in nicht-Windows-Betriebssystemen arbeiten,) erwarten Cordova CLI eine Shebang-Zeile die erste Zeile, damit den Interpreter weiß es nutzen, um das Skript zu starten muss. Die Shebang-Zeile sollte das folgende Beispiel entsprechen:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Verwendung des Beispiels

Dieses Beispiel veranschaulicht Cordova Haken Nutzung zu verfolgen, die Konsolenausgabe die Größe der generierten .apk Datei für Android-Plattform.

Erstellen Sie leere Cordova app und fügen Sie die folgende Definition zu `"config.xml"` sagen Cordova nach jedem Build Plattform `afterBuild.js` -Skript ausführen hinzu.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Erstellen Sie `scripts/afterBuild.js` -Datei, und fügen Sie die folgende Implementierung. Wir verwenden Async-Version der `fs.stat` -Methode um zu demonstrieren, wie die Async-Funktionalität über Haken getan werden könnte.

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
    

Parameter `ctx` im obigen Beispiel wird übergeben von Cordova und Ausführungskontext wie vollständigen Pfades des Skripts, Zielplattform, Befehlszeilenargumente darstellt und auch zusätzliche Helfer Funktionen verfügbar macht. Siehe `Skript Schnittstelle` Abschnitt oben für weitere Details.

Jetzt können Sie die android-Plattform hinzufügen und ausführen Build.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Weitere gute Verwendungsbeispiele konnte hier gefunden werden:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>