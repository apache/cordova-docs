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

title: Конфигурация Android
---

# Конфигурация Android

Файл `config.xml` управляет основные параметрами приложения, которые применяются к каждому приложению и экземпляру CordovaWebView. Этот раздел описывает настройки, которые применяются только к построениям для Android. Смотрите [Файл config.xml][1] для получения информации о глобальных параметрах конфигурации.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning` (логическое значение, по умолчанию `true` ): определяет, остается ли приложение работает в фоновом режиме после вызова события `[pause](../../../cordova/events/events.pause.html)`. Установка значения в `false` не завершает приложение после события `[pause](../../../cordova/events/events.pause.html)`, но просто останавливает выполнение кода в Cordova WebView в то время пока приложение находится в фоновом режиме.

        <preference name="KeepRunning" value="false"/>

*   `LoadUrlTimeoutValue` (число, значение по умолчанию — `20000`): при загрузке страницы, указывает продолжительность времени ожидания в миллисекундах, перед тем как произойдет ошибка ожидания. Этот пример определяет 10 секунд, а не 20:

        <preference name="LoadUrlTimeoutValue" value="10000"/>

*   `SplashScreen`(строка, по умолчанию `splash`): Имя файла, минус его расширение в каталоге `res/drawable`. Различные ресурсы должны использовать это общее название в разных подкаталогах.

        <preference name="SplashScreen" value="mySplash"/>

*   `SplashScreenDelay` (число, значение по умолчанию `3000`): определяет количество времени в течение которого отображается заставка.

        <preference name="SplashScreenDelay" value="10000"/>

*   `InAppBrowserStorageEnabled` (логическое значение, по умолчанию `true`): Контролирует имеют ли страницы открытые в InAppBrowser возможность получить доступ к тому же хранилищу localStorage и WebSQL, что и страницы открытые с помощью браузера по умолчанию.

        <preference name="InAppBrowserStorageEnabled" value="true"/>

*   `LoadingDialog` (строка, по умолчанию `null`): Если указано, отображает диалоговое окно с заданным заголовком и сообщение и индикатор загрузки, при загрузке первой странице приложения. Заголовок и сообщение разделяются запятой в этой строке значение, и что запятая удаляется перед отображением диалогового окна.

        <preference name="LoadingDialog" value="My Title,My Message"/>

*   `LoadingPageDialog` (строки, по умолчанию `null`): так же, как `LoadingDialog`, но для загрузки каждой страницы следующей за первой страницей в приложении.

        <preference name="LoadingPageDialog" value="My Title,My Message"/>

*   `ErrorUrl` (URL-адрес, По умолчанию используется `null`): Если установлено, будет отображаться странице ссылки на ошибку в приложении вместо диалоговое окно с заголовком «Ошибка приложения».

        <preference name="ErrorUrl" value="myErrorPage.html"/>

*   `ShowTitle` (логическое значение, по умолчанию `false`): Показать заголовок в верхней части экрана.

        <preference name="ShowTitle" value="true"/>

*   `LogLevel` (строка, по умолчанию `ERROR` ): устанавливает минимальный уровень протоколирования, через который будет фильтроваться протоколируемые сообщения из вашего приложения. Допустимыми значениями являются `ERROR`, `WARN`, `INFO`, `DEBUG`, и `VERBOSE`.

        <preference name="LogLevel" value="VERBOSE"/>

*   `SetFullscreen` (логическое значение, по умолчанию `false`): то же, что параметр `Fullscreen` в глобальной конфигурации этого XML-файла. Этот элемент специфический для Android элемент считается устаревшим и замененным глобальным элементом `Fullscreen` и будет удален в будущей версии.

*   `AndroidLaunchMode`(строки, по умолчанию `singleTop` ): задает действие `android:launchMode` атрибут. Это меняет то, что происходит, когда приложение запускается из приложения значок или намерения и уже работает. Допустимыми значениями являются `standard` , `singleTop` , `singleTask` ,`singleInstance`.

        <preference name="AndroidLaunchMode" value="singleTop"/>

*   `DefaultVolumeStream`(строки, по умолчанию `default` , добавил в Кордова android 3.7.0): устанавливает объем которых объем аппаратные кнопки ссылка на. По умолчанию это «вызов» для «СМИ» для планшетов и телефонов. Установите это для «медиа», чтобы иметь всегда изменить громкость медиа кнопки громкости вашего приложения. Обратите внимание, что при использовании плагина Кордова в СМИ, кнопки громкости будет динамически изменить для контроля объема средств массовой информации, когда любые мультимедийные объекты являются активными.

*   `OverrideUserAgent` (строка, не определен по умолчанию): Если параметр установлен, значение заменит старое значение UserAgent для webview. Это полезно для идентификации запроса из приложения/браузера при запросе удаленных страниц. Используйте с осторожностью, в мае этого года вызывает проблемы совместимости с веб-серверами. В большинстве случаев вместо этого параметра используйте AppendUserAgent.

        <preference name="OverrideUserAgent" value="Mozilla/5.0 My Browser" />

*   `AppendUserAgent` (строка, не задан по умолчанию): Если параметр установлен, значение будет добавляться в конец старого значения UserAgent для webview. При использовании с OverrideUserAgent, это значение будет игнорироваться.

        <preference name="AppendUserAgent" value="My Browser" />
