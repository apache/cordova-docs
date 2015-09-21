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

title: Hooks Przewodnik
---

# Hooks Przewodnik

Cordova haki stanowią specjalne skrypty, które może być dodany przez aplikację i programistów wtyczki lub nawet przez swój własny zbudować system do Dostosuj polecenia cordova. Hak skryptów może definiowane przez dodanie ich do specjalnego folderu wstępnie zdefiniowane ( `/hooks` ) lub poprzez pliki konfiguracyjne ( `config.xml` i `plugin.xml` ) i uruchomić pojedynczo w następującej kolejności:

  * Stosowania haczyków z `/hooks` ;
  * Stosowania haczyków z `config.xml` ;
  * Haki plugin z`plugins/.../plugin.xml`.

**Uwaga**: katalog `/hooks` jest uważana za zastąpiona hak elementy w pliku config.xml i plugin.xml.

## Typy obsługiwanych hak

Obsługiwane są następujące typy haka:

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
    

## Sposoby definiowania haki

### Via `/hooks` katalogu

**Uwaga**: Ta metoda jest uważana za zastąpiona hak elementy w pliku config.xml i plugin.xml.

Aby wykonać akcję niestandardową podczas odpowiedniego typu hak jest zwolniony, użyj haka typu jako nazwę podfolderu wewnątrz katalogu "haki" i miejsce skrypt pliku tutaj, na przykład:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

Podczas korzystania z tych haczyków, zawsze działały jako pliki wykonywalne, nie jako ładowalne moduły JavaScript. **Pamiętaj**: zrobić skryptów wykonywalnych w tym przypadku.

### Plik config.XML

Haki mogą być definiowane w projektu `config.xml` za pomocą `< hak >` elementy, na przykład:

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
    

### Haki plugin (plugin.xml)

Jako autora wtyczki, które można zdefiniować hak skrypty za pomocą `< hak >` elementy w `plugin.xml` tak:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` plugin, haki będzie zwolniony wyłącznie dla wtyczki zainstalowane/odinstalowany.

## Skrypt interfejs

### Javascript

Jeśli piszesz haków przy użyciu Node.js należy używać następującej definicji modułu:

```javascript
module.exports = function(context) {
    ...
}
```

Możesz zrobić twój scipts asynchroniczny przy użyciu Q:

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

`Context` obiekt zawiera typ chwytacza, wykonywany skrypt pełną ścieżkę, hak opcje, argumenty przekazywane do Cordova i najwyższego poziomu "cordova" obiektu:

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

skrypty haki plugin tylko przekazywany obiekt `Context.opts.plugin` .

Może również wymagać dodatkowych modułów Cordova w skrypcie przy użyciu `context.requireCordovaModule` w następujący sposób:

```javascript
var Q = context.requireCordovaModule('q');
```

**Uwaga**: nowy moduł ładowarka skrypt interfejs jest używany do plików `.js` zdefiniowane przez `plik config.xml` lub `plugin.xml` tylko. Ze względu na kompatybilność hak pliki określone przez `/hooks` foldery są uruchamiane za pośrednictwem węzła child_process tarło, zobacz "Non-javascript" sekcji poniżej.

### Non-javascript

**Uwaga**: zalecamy pisania haków przy użyciu Node.js, tak, że są one cross-platform, zobacz sekcja "Javascript" powyżej.

Skrypty w języku javascript nie są uruchamiane za pośrednictwem węzła child_process tarło z katalogu projektu i przechodzi katalogu głównego jako pierwszy argument. Wszystkie inne opcje są przekazywane do skryptu za pomocą zmiennych środowiskowych:

  * CORDOVA_VERSION - wersja Cordova-CLI.
  * CORDOVA_PLATFORMS - przecinkami lista platform, które dotyczy polecenia (np.: android, ios).
  * CORDOVA_PLUGINS - przecinkami lista pluginów identyfikatorów, które dotyczy polecenia (np.: org.apache.cordova.file, org.apache.cordova.file przelew)
  * CORDOVA_HOOK - ścieżka do hak, który jest aktualnie wykonywany.
  * CORDOVA_CMDLINE - dokładnie argumenty przekazywane do cordova (np.: cordova uruchamiać ios--naśladować)

Jeśli skrypt zwraca kod zakończenia, a następnie polecenie cordova nadrzędnego zostanie przerwane.

Należy również zauważyć, że nawet jeśli pracujesz na Windows, a w przypadku skryptów hak nie są pliki bat, (które jest zalecane, jeśli chcesz, aby Twoje skrypty do pracy w systemach operacyjnych innych niż Windows) Cordova CLI będzie oczekiwać linię szulernia jako pierwszy wiersz to wiedzieć Tłumacz musi użyć do uruchomienia skryptu. Linii szulernia powinna odpowiadać następującym przykładzie:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Przykładowe użycie

W tym przykładzie Zademonstrowano sposób użycia haki Cordova do śledzenia wyjścia konsoli rozmiar pliku apk wygenerowany dla platformy Android.

Utwórz puste Cordova app i dodać następującą definicję do `pliku config.xml` powiedzieć Cordova do uruchomienia skryptu `afterBuild.js` po każdej budowy platformy.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Utwórz plik `scripts/afterBuild.js` i dodać następujące wykonania. Używamy asynchronicznej wersji metody `fs.stat` do wykazania, jak asynchroniczne funkcjonalności może odbywać się za pomocą haków.

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
    

Parametr `ctx` w powyższym przykładzie jest przekazywana przez Cordova i reprezentuje kontekst wykonywania skryptu pełną ścieżkę, platformą docelową, argumentów wiersza polecenia, itp i udostępnia również funkcje dodatkowe pomocnicze. Zobacz `Interfejs skrypt` sekcji powyżej dla więcej szczegółów.

Teraz można dodać platformy android i wykonać budować.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Tutaj można znaleźć więcej przykładów dobry zwyczaj:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>