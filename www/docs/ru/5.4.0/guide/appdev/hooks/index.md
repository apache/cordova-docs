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

title: Руководство по хукам
---

# Руководство по хукам

Хуки Cordova представляют собой специальные скрипты, которые могут быть добавлены приложениями и разработчиками плагинов или даже самостоятельно вашей системы сборки для настройки команд cordova. Скрипты хуков могут быть определены путем добавления их в специальную предопределенную папку (`/hooks`) или через конфигурационные файлы (`config.xml` и `plugin.xml`) и запускаются последовательно в следующем порядке:

  * Хуки приложения из `/hooks`;
  * Хуки приложения из `config.xml`;
  * Хуки плагинов из `plugins/.../plugin.xml`.

**Примечание**: Каталог `/hooks` считается устаревшим и заменяется элементами hook в файлах config.xml и plugin.xml.

## Типы поддерживаемых хуков

Поддерживаются следующие типы хуков:

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
    

## Способы определения хуков

### Через каталог `/hooks`

**Примечание**: Этот метод считается устаревшим и заменяется элементами hook в файлах config.xml и plugin.xml.

Для выполнения настраиваемых действий при срабатывании соответствующего типа хука, используйте имя хука как имя подпапки внутри директории 'hooks' и разместите ваш файл скрипта там, например:

    # Файл скрипта будет автоматически выполняться после каждой сборки
    hooks/after_build/after_build_custom_action.js
    

При использовании этих хуков, они всегда будут запускаться как исполняемые файлы, не как загружаемые модули JavaScript. **Помните**: Сделайте ваши скрипты исполняемым для этого случая.

### Config.xml

Крючки могут быть определены в файле проекта `config.xml` с помощью элементов `<hook>`, например:

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
    

### Хуки плагинов (plugin.xml)

Как разработчик плагинов, вы можете определить скрипты хуков с использованием элементов `<hook>` в файле `plugin.xml`, как например:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

Хуки плагинов `before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` будут вызываться исключительно для плагина который устанавливается/удаляется.

## Интерфейс скрипта

### Javascript

Если вы пишете хуки с помощью Node.js следует использовать следующее определение модуля:

```javascript
module.exports = function(context) {
    ...
}
```

Вы можете сделать ваши скрипты асинхронными, используя Q:

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

Объект `контекста` содержит тип хука, полный путь исполняемого скрипта, параметры хука, аргументы командной строки, передаваемые Cordova и объект верхнего уровня "cordova»:

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

Объект `context.opts.plugin` будет передаваться только сценариям хуков плагина.

Также можете подключить дополнительные модули Cordova в вашем скрипте, используя `context.requireCordovaModule` следующим образом:

```javascript
var Q = context.requireCordovaModule('q');
```

**Примечание**: новый интерфейс загрузчика модулей используется для `.js` файлов определенных только через `config.xml` или `plugin.xml`. Для обеспечения совместимости файлов хуков, указанные с помощью каталога `/hooks` запускаются через узел child_process.spawn, раздел 'Не-javascript' ниже.

### Не-javascript

**Примечание**: Мы настоятельно рекомендуем писать ваши хуки, используя Node.js, так, что они будут кросс платформенными, см. выше раздел 'Javascript'.

Не-javascript сценарии запускаются через узел child_process.spawn из корневого каталога проекта и получают корневой каталог в качестве первого аргумента. Все остальные параметры передаются в сценарий с помощью переменных среды:

  * CORDOVA_VERSION - версия Cordova-CLI.
  * CORDOVA_PLATFORMS - разделенный запятыми список платформ, к которым команда применяется (например: android, ios).
  * CORDOVA_PLUGINS - разделенный запятыми список идентификаторов плагинов, к которым команда применяется (например: org.apache.cordova.file, org.apache.cordova.file)
  * CORDOVA_HOOK - путь к выполняемому хуку.
  * CORDOVA_CMDLINE - точные аргументы командной строки, передаваемые cordova (например: cordova run ios --emulate)

Если сценарий возвращает код выхода не равный нулю, то родительская команда cordova будет прервана.

Кроме того обратите внимание, что даже если вы работаете на Windows, и в случае, если ваши скрипты хуков не bat файлы (что рекомендуется, если вы хотите, чтобы ваши скрипты работали не только на Windows) Cordova CLI будет ожидать shabang линию в качестве первой линии для того чтобы знать какой интерпретатор необходимо использовать для запуска сценария. Shebang линия должна соответствовать следующему примеру:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## Пример использования

В этом примере демонстрируется использование хуков Cordova для трассировки в консоль вывода размера файла созданного .apk для платформы Android.

Создайте пустое Cordova-приложение и добавьте следующее определение в `config.xml` , чтобы указать Cordova запускать скрипт `afterBuild.js` после каждой сборки платформы.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

Создайте файл `scripts/afterBuild.js` и добавьте следующую реализацию. Мы используем асинхронную версию метода `fs.stat` чтобы продемонстрировать, как async функциональность может быть реализована через хуки.

    module.exports = function(ctx) {
        // Убедитесь что платформа android является частью построения 
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
                 deferral.reject('Операция неуспешна');
            } else {
                console.log('Размер ' + apkFileLocation + ' равен ' + stats.size +' байт');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

Параметр `ctx` в приведенном выше примере передается Cordova и представляет контекст выполнения, такой как полный путь к сценарию, целевая платформа, аргументы командной строки, и т.д., а также предоставляет дополнительные вспомогательные функции. Смотрите раздел `Интерфейс скрипта` выше для более подробной информации.

Теперь можно добавить платформу android и выполнить построение.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

Более хорошие примеры использования можно найти здесь:

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>