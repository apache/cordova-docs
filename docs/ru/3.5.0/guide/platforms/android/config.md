---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android конфигурации

`config.xml`Файл управляет app основные параметры, которые применяются через каждое приложение и экземпляр CordovaWebView. Этот раздел описывает настройки, которые применяются только к Android построений. Смотрите информацию в файле config.xml на параметры глобальной конфигурации.

*   `KeepRunning`(логическое значение, по умолчанию `true` ): определяет, является ли приложение остается работает в фоновом режиме даже после `pause` пожаров события. Примечание: Установка этого значения false не убьет приложение после паузы события, он только будет остановить выполнение кода в webview Кордова, в то время, как приложение работает в фоновом режиме.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(число в миллисекундах, по умолчанию `20000` , 20 секунд): при загрузке страницы, количество времени ожидания перед бросанием ошибка времени ожидания. В этом примере указывается 10 секунд, а не 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`(строки, по умолчанию `splash` ): имя файла, минус его продление в `res/drawable` каталог. Различные активы должны разделять это общее название в разных подкаталогах.
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(число в миллисекундах, по умолчанию `3000` ): отображает количество времени изображение экрана-заставки.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(логическое значение, по умолчанию `true` ): контроль ли страницы открыты в InAppBrowser получить доступ к же localStorage и WebSQL хранения страниц, открыт с браузером по умолчанию.
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`(строки, по умолчанию `null` ): Если набор, отображает диалоговое окно с заданным заголовком и сообщение и паук, при загрузке на первой странице приложения. Заголовок и сообщение разделяются запятой в этой строке значение, и что запятая удаляется перед отображением диалогового окна.
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`(строки, по умолчанию `null` ): так же, как `LoadingDialog` , но для загрузки каждой страницы после первой страницы в приложении.
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`(По умолчанию используется URL-адрес, `null` ): Если установлено, будет отображаться странице ссылки на ошибку в приложении вместо диалоговое окно с заголовком «Ошибка приложения».
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(логическое значение, по умолчанию `false` ): Показать заголовок в верхней части экрана.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(строки, по умолчанию `ERROR` ): устанавливает уровень минимальной журнала, через которых журнал будет фильтроваться сообщения из вашего приложения. Допустимыми значениями являются `ERROR` , `WARN` , `INFO` , `DEBUG` , и`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(логическое значение, по умолчанию `false` ): то же, что `Fullscreen` параметр в глобальной конфигурации этого XML-файла. Этот Android конкретным элемент считается устаревшим глобальной `Fullscreen` элемент и будет удален в будущей версии.