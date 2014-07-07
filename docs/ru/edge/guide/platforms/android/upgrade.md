* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Обновление для Android

В этом руководстве показано, как изменить Android проекты при обновлении старых версий Cordova. Большинство этих инструкций применимы для проектов, созданных со старым набором средств командной строки, которые предшествуют утилите CLI `cordova`. Смотрите раздел "Интерфейс командной строки" для получения информации как обновить версию CLI.

## Обновление до 3.3.0 с 3.2.0

Следуйте инструкциям как для`3.2.0`.

Начиная с 3.3.0, среда выполнения Cordova теперь компилируется как Android библиотека вместо Jar. Это не должно иметь никакого эффекта при использовании из командной строки, но пользователям IDE нужно будет импортировать новые проекты `MyProject-CordovaLib` в их рабочее пространство.

## Обновление до 3.2.0 с 3.1.0

Для проектов, которые были созданы с Кордова CLI:

1.  Обновите версию `cordova` CLI. Смотрите "Интерфейс командной строки".

2.  Запустите `cordova platform update android`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin/update <project_path>
    

**Предупреждение:** На андроид 4.4 - Android 4.4.3, создание файла входного элемента с типом = «файл» не откроется диалоговое окно выбора файла. Это регрессия из Chromium на Android, и проблемы могут быть воспроизведены в автономном браузер Chrome на Android (см. http://code.google.com/p/android/issues/detail?id=62220) предложенное решение заключается в использовании плагинов FileTransfer и File для Android 4.4. Можно прослушивать событие onClick для input type="file" и затем показывать пользовательский интерфейс средства выбора файлов. Для того, чтобы связать данные формы с загрузки, можно использовать JavaScript для присоединения значений формы к составному запросу POST, что делает FileTransfer.

## Обновление с 3.0.0 до 3.1.0

Для проектов, которые были созданы с Кордова CLI:

1.  Обновление `cordova` CLI-версия. Увидеть интерфейс командной строки.

2.  Запуск`cordova platform update android`

Для проектов, не созданных с Кордова CLI выполните:

        bin/update <project_path>
    

## Обновление к CLI (3.0.0) с 2.9.0

1.  Создайте новый проект Apache Cordova 3.0.0 используя cordova CLI, как описано в интерфейс командной строки.

2.  Добавьте ваш платформ проекта cordova, например:`cordova
platform add android`.

3.  Копировать содержимое вашего проекта `www` каталог `www` каталог в корневом каталоге проекта cordova, вы только что создали.

4.  Скопируйте любые собственные активы из старого проекта в соответствующие каталоги под `platforms/android` : этот каталог является, где существует собственный проект cordova-android.

5.  Используйте средство CLI cordova для установки любых плагинов, что вам нужно. Обратите внимание, что CLI обрабатывает все основные API плагинов, так что они могут и должны быть добавлены. Только 3.0.0 плагины совместимы с CLI.

## Обновление до 3.0.0 от 2.9.0

1.  Создайте новый проект Apache Cordova Android.

2.  Скопируйте содержимое каталога `www` в новый проект.

3.  Скопируйте любые ресурсы платформы Android из каталога `res` в новый проект.

4.  Скопируйте любые плагины вы установили от `src` подкаталоги в новый проект.

5.  Не забудьте обновить любой устаревшей `<plugin>` ссылки из вашего старого `config.xml` файл в новый `<feature>` спецификации.

6.  Обновить ссылки на `org.apache.cordova.api` пакет, чтобы быть`org.apache.cordova`.
    
    **Примечание**: все основные API были удалены и должны быть установлены как плагины. Для подробной информации смотрите с помощью Plugman управление плагины руководство.

## Обновление до 2.9.0 с 2.8.0

1.  Запуск`bin/update <project_path>`.

## Обновление до 2.8.0 с 2.7.0

1.  Удалить `cordova-2.7.0.jar` из каталога проекта `libs`.

2.  Добавить `cordova-2.8.0.jar` в каталог проекта `libs`.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и выполните clean.

<!-- SS Eclipse -->

1.  Скопируйте новый `cordova.js` в ваш проект.

2.  Обновить ваш HTML, чтобы использовать новый `cordova.js` файл.

3.  Скопируйте `res/xml/config.xml` файл в соответствии с `framework/res/xml/config.xml`.

4.  Обновите `framework/res/xml/config.xml` чтобы иметь одинаковые параметры, как это было ранее.

5.  Скопируйте файлы из `bin/templates/cordova` в каталог проекта `cordova`.

## Обновление до 2.7.0 с 2.6.0

1.  Удалить `cordova-2.6.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.7.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.7.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.7.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновление `framework/res/xml/config.xml` имеют одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.6.0 от 2.5.0

1.  Удалить `cordova-2.5.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.6.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.6.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.6.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновление `framework/res/xml/config.xml` имеют одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

Запустите `bin/update <project>` из пути проекта, перечисленным в исходном каталоге Cordova.

## Обновление до 2.5.0 с 2.4.0

1.  Удалить `cordova-2.4.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.5.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.5.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.5.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Обновление `framework/res/xml/config.xml` имеют одинаковые параметры, как это было ранее.

8.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.4.0 от 2.3.0

1.  Удалить `cordova-2.3.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.4.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.4.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.4.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.3.0 от 2.2.0

1.  Удалить `cordova-2.2.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.3.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.3.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.3.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.2.0 из 2.1.0

1.  Удалить `cordova-2.1.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.2.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.2.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.2.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.1.0 с 2.0.0

1.  Удалить `cordova-2.0.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.1.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.1.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.1.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

7.  Скопируйте файлы из `bin/templates/cordova` в проект `cordova` каталог.

## Обновление до 2.0.0 от 1.9.0

1.  Удалить `cordova-1.9.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-2.0.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-2.0.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-2.0.0.js` файл.

6.  Копия `res/xml/config.xml` соответствовать`framework/res/xml/config.xml`.

В релизе 2.0.0, файл `config.xml` сочетает в себе и заменяет `cordova.xml` и `plugins.xml`. Старые файлы являются устаревшими и хотя они по-прежнему работают в 2.0.0, перестанут работать в будущих выпусках.

## Обновление с 1.8.1 на 1.9.0

1.  Удалить `cordova-1.8.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.9.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.9.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.9.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

Из-за введения `CordovaWebView` в релизе 1.9.0, плагины третьих лиц могут не работать. Эти плагины должны получать контекст из `CordovaInterface` с помощью `getContext()` или `getActivity()`. Если вы не являетесь опытным разработчиком Android, пожалуйста, свяжитесь с сопровождающим плагин лицом и добавьте эту задачу в их баг трекер.

## Обновление до 1.8.0 от 1.8.0

1.  Удалить `cordova-1.8.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.8.1.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.8.1.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.8.1.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до 1.8.0 от 1.7.0

1.  Удалить `cordova-1.7.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.8.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.8.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.8.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до 1.8.0 от 1.7.0

1.  Удалить `cordova-1.7.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.8.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.8.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.8.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до версии 1.7.0 от 1.6.1

1.  Удалить `cordova-1.6.1.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.7.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.7.0.js` в ваш проект.

5.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до 1.6.1 от 1.6.0

1.  Удалить `cordova-1.6.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.6.1.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.6.1.js` в ваш проект.

5.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до 1.6.0 от 1.5.0

1.  Удалить `cordova-1.5.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.6.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.6.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.6.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

7.  Заменить `res/xml/phonegap.xml` с `res/xml/cordova.xml` в соответствии`framework/res/xml/cordova.xml`.

## Обновление до 1.5.0 от 1.4.0

1.  Удалить `phonegap-1.4.0.jar` из проекта `libs` каталог.

2.  Добавить `cordova-1.5.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `cordova-1.5.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `cordova-1.5.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

7.  Заменить `res/xml/phonegap.xml` с `res/xml/cordova.xml` в соответствии`framework/res/xml/cordova.xml`.

## Обновление до 1.4.0 от 1.3.0

1.  Удалить `phonegap-1.3.0.jar` из проекта `libs` каталог.

2.  Добавить `phonegap-1.4.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `phonegap-1.4.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `phonegap-1.4.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии`framework/res/xml/phonegap.xml`.

## Обновление до 1.3.0 от 1.2.0

1.  Удалить `phonegap-1.2.0.jar` из проекта `libs` каталог.

2.  Добавить `phonegap-1.3.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `phonegap-1.3.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `phonegap-1.2.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии`framework/res/xml/phonegap.xml`.

## Обновление до 1.2.0 от 1.1.0

1.  Удалить `phonegap-1.1.0.jar` из проекта `libs` каталог.

2.  Добавить `phonegap-1.2.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `phonegap-1.2.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `phonegap-1.2.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

7.  Обновление `res/xml/phonegap.xml` в соответствии`framework/res/xml/phonegap.xml`.

## Обновление 1.1.0 1.0.0

1.  Удалить `phonegap-1.0.0.jar` из проекта `libs` каталог.

2.  Добавить `phonegap-1.1.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `phonegap-1.1.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `phonegap-1.1.0.js` файл.

6.  Обновление `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.

## Обновление до 1.0.0 от 0.9.6

1.  Удалить `phonegap-0.9.6.jar` из проекта `libs` каталог.

2.  Добавить `phonegap-1.0.0.jar` в проект `libs` каталог.

3.  Если вы используете Eclipse, обновите ваш проект Eclipse и сделать чистой.

4.  Скопируйте новый `phonegap-1.0.0.js` в ваш проект.

5.  Обновить ваш HTML, чтобы использовать новый `phonegap-1.0.0.js` файл.

6.  Добавить `res/xml/plugins.xml` в соответствии`framework/res/xml/plugins.xml`.