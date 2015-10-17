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

title: Обновление для Android
---

# Обновление для Android

В этом руководстве показано, как изменить Android проекты при обновлении старых версий Cordova. Большинство этих инструкций применимы для проектов, созданных со старым набором средств командной строки, которые предшествуют утилите CLI `cordova`. Смотрите раздел "[Интерфейс командной строки](../../cli/index.html)" для получения информации как обновить версию CLI.

## Обновление до 4.0.0

Это конкретные шаги обновления которые необходимо выполнить чтобы использовать существенные изменения в 4.0.0. Во-первых необходимы общие шаги обновления, как показано ниже.

Для проектов-CLI выполните:

        bin/обновить путь/к/проекта
    

Для проектов CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Запустите `cordova platform update android` в ваших проектах.

### Обновление списка разрешенных ресурсов

Теперь вся функциональность списка разрешенных ресурсов реализована через плагин. Без плагина ваше приложение более не защищен списком разрешенных ресурсов после обновления до 4.0.0. Cordova имеет два плагина для списка разрешенных ресурсов, которые обеспечивают различные уровни защиты.

1.  Плагин `cordova-plugin-whitelist` *(рекомендуемый)*
    
    *   Настоятельно рекомендуется этот плагин, так как лг более безопасный и более настраиваемый, чем список разрешенных ресурсов в предыдущих версиях
    *   Смотрите [cordova-plugin-whitelist][1] для подробностей по необходимым изменения конфигурации
    *   Run: `cordova plugin add cordova-plugin-crosswalk-webview`

2.  Плагин `cordova-plugin-legacy-whitelist`
    
    *   Этот плагин обеспечивает такое же поведение списка разрешенных ресурсов, как и предыдущие версии. Смотрите [cordova-plugin-legacy-whitelist][2]
    *   Изменения конфигурации не требуются, но она обеспечивает меньшую защиту, чем рекомендованный плагин
    *   Run: `cordova plugin add cordova-plugin-legacy-whitelist`

 [1]: https://github.com/apache/cordova-plugin-whitelist
 [2]: https://github.com/apache/cordova-plugin-legacy-whitelist

### Использование Crosswalk WebView

По умолчанию ваше приложение будет продолжать использовать системный WebView, предоставляемый устройством. Если вы хотите вместо этого использовать WebView CrossWalk, просто добавьте плагин CrossWalk:

    cordova plugin add cordova-plugin-crosswalk-webview
    

После добавления плагина, ваше приложение получит WebView Crosswalk установленным и правильно настроеным.

### Плагин SplashScreen - Обновление

Если ваше приложение использовала экрана-заставку, то эта функциональность была перемещена в плагин. Параметры конфигурации для экрана-заставки остались неизменными. Единственный требуемый шаг для обновления это добавление плагина:

    cordova plugin add cordova-plugin-splashscreen
    

## Обновление до 3.7.1 с 3.6.0

Для проектов-CLI выполните:

        bin/обновить путь/к/проекта
    

Для проектов CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Запустите `cordova platform update android` в ваших проектах.

## Обновление до 3.3.0 с 3.2.0

Следуйте тем же инструкциям что и для `3.2.0`.

Начиная с 3.3.0, среда выполнения Cordova теперь компилируется как Android библиотека вместо Jar. Это не должно иметь никакого эффекта при использовании из командной строки, но пользователям IDE нужно будет импортировать новые проекты `MyProject-CordovaLib` в их рабочее пространство.

## Обновление до 3.2.0 с 3.1.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Run `cordova platform update android`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin/update <project_path>
    

**Предупреждение:** На Android 4.4 - Android 4.4.3, создание элемента ввода input type="file" не открывает диалоговое окно выбора файла. Это регрессия из Chromium на Android, и проблемы могут быть воспроизведены в автономном браузер Chrome на Android (см. http://code.google.com/p/android/issues/detail?id=62220) предложенное решение заключается в использовании плагинов FileTransfer и File для Android 4.4. Можно прослушивать событие onClick для input type="file" и затем показывать пользовательский интерфейс средства выбора файлов. Для того, чтобы связать данные формы с загрузки, можно использовать JavaScript для присоединения значений формы к составному запросу POST, что делает FileTransfer.

## Обновление до 3.1.0 с 3.0.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Run `cordova platform update android`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin/update <project_path>
    

## Обновление до CLI (3.0.0) с 2.9.0

1.  Создайте новый проект Apache Cordova 3.0.0 используя Cordova CLI, как описано в разделе "[Интерфейс командной строки](../../cli/index.html)".

2.  Добавьте ваши платформы в проект Cordova, например: `cordova
platform add ios`.

3.  Скопируйте содержимое каталога `www` в каталог `www` проекта Cordova который вы только что создали.

4.  Скопируйте любые платформенные ресурсы из старого проекта в соответствующие каталоги в `platforms/android`: это директория где расположен проект cordova-android.

5.  Используйте Сordova CLI для установки необходимых вам плагинов. Обратите внимание что CLI интерпретирует все базовые APIs как плагины, так что они тоже должны быть добавлены. Только плагины для версии 3.0.0 поддерживаются CLI.

## Обновление до 3.0.0 с 2.9.0

1.  Создайте новый проект Apache Cordova Android.

2.  Скопируйте содержимое каталога `www` в новый проект.

3.  Скопируйте любые ресурсы платформы Android из каталога `res` в новый проект.

4.  Скопируйте любые плагины, которые вы установили из подкаталогов `src` в новый проект.

5.  Убедитесь что вы обновили любые устаревшие ссылки `<plugin>` из вашего старого файла `config.xml` в новое определение в `<feature>`.

6.  Обновите ссылки с пакета `org.apache.cordova.api` на `org.apache.cordova`.
    
    **Примечание**: все основные API были удалены и должны быть установлены как плагины. Для подробной информации смотрите раздел "Использование Plugman для управления расширениями".

## Обновление до 2.9.0 с 2.8.0

1.  Run `bin/update <project_path>`.

## Обновление до 2.8.0 с 2.7.0

1.  Удалить `cordova-2.7.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.8.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

<!-- SS Eclipse -->

1.  Скопируйте новый `cordova.js` в ваш проект.

2.  Обновите ваш HTML, чтобы использовать новый `cordova.js` файл.

3.  Скопируйте `res/xml/config.xml` файл в соответствии с `framework/res/xml/config.xml`.

4.  Обновите `framework/res/xml/config.xml` чтобы иметь одинаковые параметры, как это было ранее.

5.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.7.0 с 2.6.0

1.  Удалить `cordova-2.6.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.7.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.7.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый `cordova-2.7.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновите `framework/res/xml/config.xml` чтобы иметь одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.6.0 от 2.5.0

1.  Удалить `cordova-2.5.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.6.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.6.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.6.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновите `framework/res/xml/config.xml` чтобы иметь одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

Запустите `bin/update <project>` из пути проекта, перечисленным в исходном каталоге Cordova.

## Обновление до 2.5.0 с 2.4.0

1.  Удалить `cordova-2.4.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.5.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.5.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.5.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновите `framework/res/xml/config.xml` чтобы иметь одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.4.0 от 2.3.0

1.  Удалить `cordova-2.3.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.4.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.4.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.4.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.3.0 от 2.2.0

1.  Удалить `cordova-2.2.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.3.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.3.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.3.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.2.0 из 2.1.0

1.  Удалить `cordova-2.1.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.2.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.2.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.2.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.1.0 с 2.0.0

1.  Удалить `cordova-2.0.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.1.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.1.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.1.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.0.0 от 1.9.0

1.  Удалить `cordova-1.9.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.0.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-2.0.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.0.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

В релизе 2.0.0, файл `config.xml` сочетает в себе и заменяет `cordova.xml` и `plugins.xml`. Старые файлы являются устаревшими и хотя они по-прежнему работают в 2.0.0, перестанут работать в будущих выпусках.

## Обновление с 1.8.1 до 1.9.0

1.  Удалить `cordova-1.8.1.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.9.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.9.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый `cordova-1.9.0.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

Из-за введения `CordovaWebView` в релизе 1.9.0, плагины третьих лиц могут не работать. Эти плагины должны получать контекст из `CordovaInterface` с помощью `getContext()` или `getActivity()`. Если вы не являетесь опытным разработчиком Android, пожалуйста, свяжитесь с сопровождающим плагин лицом и добавьте эту задачу в их баг трекер.

## Обновление с 1.8.0 до 1.8.1

1.  Удалить `cordova-1.8.1.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.8.1.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.8.1.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый `cordova-1.8.1.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление до 1.8.0 от 1.7.0

1.  Удалить `cordova-1.7.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.8.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.8.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.8.0.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление до 1.8.0 от 1.7.0

1.  Удалить `cordova-1.7.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.8.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.8.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.8.0.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление с 1.6.1 до 1.7.0

1.  Удалить `cordova-1.6.1.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.7.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.7.0.js` в ваш проект.

5.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление с 1.6.0 до 1.6.1

1.  Удалить `cordova-1.6.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.6.1.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.6.1.js` в ваш проект.

5.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление с 1.5.0 до 1.6.0

1.  Удалить `cordova-1.5.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.6.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.6.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый `cordova-1.6.0.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

7.  Замените `res/xml/phonegap.xml` на `res/xml/cordova.xml` для соотвествия файлу `framework/res/xml/cordova.xml`.

## Обновление с 1.4.0 до 1.5.0

1.  Удалить `phonegap-1.4.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-1.5.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `cordova-1.5.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый `cordova-1.5.0.js` файл.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

7.  Замените `res/xml/phonegap.xml` на `res/xml/cordova.xml` для соотвествия файлу `framework/res/xml/cordova.xml`.

## Обновление с 1.3.0 до 1.4.0

1.  Удалить `phonegap-1.3.0.jar` из каталога проекта `libs`.

2.  Добавить `phonegap-1.4.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `phonegap-1.4.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый файл `phonegap-1.4.0.js` .

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии c `framework/res/xml/phonegap.xml`.

## Обновление с 1.2.0 до 1.3.0

1.  Удалить `phonegap-1.2.0.jar` из каталога проекта `libs`.

2.  Добавить `phonegap-1.3.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `phonegap-1.3.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый файл `phonegap-1.2.0.js`.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии c `framework/res/xml/phonegap.xml`.

## Обновление до 1.2.0 с 1.1.0

1.  Удалить `phonegap-1.1.0.jar` из каталога проекта `libs`.

2.  Добавить `phonegap-1.2.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `phonegap-1.2.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый файл `phonegap-1.2.0.js`.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии c `framework/res/xml/phonegap.xml`.

## Обновление до 1.1.0 с 1.0.0

1.  Удалить `phonegap-1.0.0.jar` из каталога проекта `libs`.

2.  Добавить `phonegap-1.1.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `phonegap-1.1.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый файл `phonegap-1.1.0.js`.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.

## Обновление до 1.0.0 с 0.9.6

1.  Удалить `phonegap-0.9.6.jar` из каталога проекта `libs`.

2.  Добавить `phonegap-1.0.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

4.  Скопируйте новый `phonegap-1.0.0.js` в ваш проект.

5.  Обновите ваш HTML, чтобы использовать новый файл `phonegap-1.0.0.js`.

6.  Обновите `res/xml/plugins.xml` в соответствии с `framework/res/xml/plugins.xml`.