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

title: Настройка Amazon Fire OS
---

# Настройка Amazon Fire OS

Файл `config.xml` управляет основные параметрами приложения, которые применяются к каждому приложению и экземпляру CordovaWebView. Этот раздел детализирует параметры, которые применяются только к продуктам построенным на платформе Amazon Fire ОС. Смотрите [Файл config.xml][1] для получения информации о глобальных параметрах конфигурации.

 [1]: config_ref_index.md.html#The%20config.xml%20File

*   `KeepRunning` (логическое значение, по умолчанию `true` ): определяет, остается ли приложение работает в фоновом режиме после вызова события `[pause](../../../cordova/events/events.pause.html)`. Установка значения в `false` не завершает приложение после события `[pause](../../../cordova/events/events.pause.html)`, но просто останавливает выполнение кода в Cordova WebView в то время пока приложение находится в фоновом режиме.
    
        <preference name="KeepRunning" value="false"/>

*   `ErrorUrl` (URL-адрес, По умолчанию используется `null`): Если установлено, будет отображаться странице ссылки на ошибку в приложении вместо диалоговое окно с заголовком «Ошибка приложения».
    
        <preference name="ErrorUrl" value="error.html"/>

*   `LoadingDialog` (строка, по умолчанию `null`): Если указано, отображает диалоговое окно с заданным заголовком и сообщение и индикатор загрузки, при загрузке первой странице приложения. Заголовок и сообщение разделяются запятой в этой строке значение, и что запятая удаляется перед отображением диалогового окна.
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>

*   `LoadingPageDialog` (строки, по умолчанию `null`): так же, как `LoadingDialog`, но для загрузки каждой страницы следующей за первой страницей в приложении.
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>

*   `LoadUrlTimeoutValue` (число, значение по умолчанию — `20000`): при загрузке страницы, указывает продолжительность времени ожидания в миллисекундах, перед тем как произойдет ошибка ожидания. Этот пример определяет 10 секунд, а не 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>

*   `SplashScreen`: Имя файла, минус его расширение в каталоге `res/drawable`. Различные ресурсы должны использовать это общее название в разных подкаталогах.
    
        <preference name="SplashScreen" value="splash"/>

*   `SplashScreenDelay`(число, значение по умолчанию `5000` ): определяет количество времени в течение которого отображается заставка.
    
        <preference name="SplashScreenDelay" value="10000"/>

*   `ShowTitle` (логическое значение, по умолчанию `false`): Показать заголовок в верхней части экрана.
    
        <preference name="ShowTitle" value="true"/>

*   `LogLevel` (строка, по умолчанию `ERROR` ): устанавливает минимальный уровень протоколирования, через который будет фильтроваться протоколируемые сообщения из вашего приложения. Допустимыми значениями являются `ERROR`, `WARN`, `INFO`, `DEBUG`, и `VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>