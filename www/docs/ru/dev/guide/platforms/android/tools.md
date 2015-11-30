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

title: Руководство по инструментам командной строки Android
---

# Руководство по инструментам командной строки Android

В этом руководстве показано, как использовать набор платформо-ориентированных инструментов Cordova для разработки приложений на Android. Этот путь разработки, описанный в разделе "[Введение](../../overview/index.html)", может предложить вам больший спектр вариантов разработки чем кросс платформенный инструмент CLI, описанные в разделе "[Интерфейс командной строки](../../cli/index.html)". Например вам нужно использовать инструменты командной строки при развертывании настраиваемого Cordova WebView наряду с собственными компонентами. Перед использованием любой путь разработки, сначала необходимо настроить среду Android SDK, как описано в разделе "[Руководство для платформы Android](index.html)".

Чтобы включить инструменты оболочки для Android, скачайте Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните каждый, для которого вы хотите разрабатывать который, `android` в данном случае. Соответствующие инструменты обычно доступны в папке верхнего уровня `bin`, в противном случае проконсультируйтесь в файле **README** для более подробные инструкции.

 [1]: http://cordova.apache.org

Эти инструменты командной строки позволят вам создавать, собирать и запускать приложения для Android. За информаций о дополнительных интерфейсах командной строки которые позволяют встраивать возможности плагинов среди разных платформ, смотрите раздел "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)". Смотрите раздел "Плагины приложения" для детальной информации о том как разрабатывать плагины.

## Создание проекта

Запуск `create` команду, указав существующий путь к проекту, реверс домен стиль пакета идентификатор и отображаемое имя приложения. Вот синтаксис для Mac/Linux и Windows:

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## Сборка

Это удаляет, затем выполняет построение проекта.

Отладка, на Windows или Mac/Linux:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

Релиз, на Windows или Mac/Linux:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## Запуск приложения

Команда `run` принимает следующие *необязательные* параметры:

*   Целевая спецификация. Это включает в себя `--emulator` , `--device`, или`--target=<targetID>`.

*   Спецификация сборки. Это включает в себя `--debug` , `--release` , или`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

Убедитесь, что вы создали по крайней мере одно виртуальное устройство Android, в противном случае вам будет предложено сделать это с помощью команды `android`. Если несколько AVD доступны как цель, вам будет предложено выбрать одно из них. По умолчанию команда `run` определяет подключенное устройство, или в настоящее время работающий эмулятор, если устройство не найдено.

## Подпись приложения

Вы можете просмотреть требования для подписанния Android приложений: http://developer.android.com/tools/publishing/app-signing.html

Чтобы подписать приложение, вам будут необходимы следующие параметры:

*   Keystore (`--keystore`): путь к двоичному файлу, который может содержать набор ключей.

*   Keystore password (`--storePassword`): пароль для хранилища ключей

*   Alias (`--alias`): id определеяющий закрытый ключ, используемый для подписания.

*   Password (`--password`): пароль для указанного закрытого ключа.

*   Type of the keystore (`--keystoreType`): pkcs12, jks (по умолчанию: автоматическое определение на основе расширения файла)

Эти параметры могут быть заданы с помощью аргументов командной строки указанных выше для `построения` или `запуска` скриптов.

Кроме того их можно указать в файле конфигурации сборки (build.json) с помощью аргумента (`--buildConfig`). Ниже приведен пример файла конфигурации построения:

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
    

Для подписи релизной версии, пароли могут быть исключены и система построения будет выдавать запрос на пароль.

Существует также поддержка смешивать аргументы командной строки и параметры в файле build.json. Приоритет будут получать значения из аргументов командной строки. Это может быть полезно для задания паролей в командной строке.

## Ведение журнала

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## Очистка

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## Сборка с Gradle

Начиная с cordova-android@4.0.0, сборка проекта использует [Gradle][2]. Для инструкций по построению с помощью ANT, используйте более старую версию документации.

 [2]: http://www.gradle.org/

### Свойства Gradle

Эти [свойства][3] могут быть установлены для настройки процесса сборки:

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks** (по умолчанию: false)
    
    Если этот параметр установлен, то будут создаваться несколько APK файлов: один для каждой платформы, поддерживаемой библиотеками проектов (x86, ARM, и т.д.). Это может быть важно, если ваш проект использует большие бинарные библиотеки, которые могут резко увеличить размер создаваемого APK.
    
    Если не задано, то будет создаваться один APK, который может использоваться на всех устройствах.

*   **cdvVersionCode**
    
    Переопределяет versionCode установленный в `AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile** (по умолчанию: release-signing.properties)
    
    Путь к файлу .properties, содержащую информацию о подписях для релизных сборок. Этот файл должен выглядеть:
    
        storeFile=relative/path/to/keystore.p12
        storePassword=SECRET1
        storeType=pkcs12
        keyAlias=DebugSigningKey
        keyPassword=SECRET2
    
    `storePassword` и `keyPassword` являются необязательными и будет запрашиваться, если пропущены.

*   **cdvDebugSigningPropertiesFile** (по умолчанию: debug-signing.properties)
    
    Так же, как cdvReleaseSigningPropertiesFile, но для отладочного построения. Полезно, когда вам нужно использовать ключ подписи совместно с другими разработчиками.

*   **cdvMinSdkVersion**
    
    Переопределяет значение `minSdkVersion` в `AndroidManifest.xml`. Полезно при создании нескольких APK на основе версии SDK.

*   **cdvBuildToolsVersion**
    
    Переопределяет автоматически обнаруженное значение `android.buildToolsVersion`.

*   **cdvCompileSdkVersion**
    
    Переопределяет автоматически обнаруженное значение `android.compileSdkVersion`.

### Расширение build.gradle

Если вам нужно настроить `build.gradle`, вместо того, чтобы редактировать его напрямую, следует создать одноуровневый файл с именем `build-extras.gradle`. Этот файл будет включен основным `build.gradle` если он существует. Вот пример:

    # Example build-extras.gradle
    # This file is included at the beginning of `build.gradle`
    ext.cdvDebugSigningPropertiesFile = '../../android-debug-keys.properties'
    # When set, this function allows code to run at the end of `build.gradle`
    ext.postBuildExtras = {
        android.buildTypes.debug.applicationIdSuffix = '.debug'
    }
    

Обратите внимание, что плагины могут также включать файлы `build-extras.gradle` через:

    <framework src="some.gradle" custom="true" type="gradleReference" />
    

### Пример сборки

    export ORG_GRADLE_PROJECT_cdvMinSdkVersion=14
    cordova build android -- --gradleArg=-PcdvBuildMultipleApks=true