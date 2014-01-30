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
        

*   `LoadUrlTimeoutValue`(номер, по умолчанию, `20000` , 20 секунд): при загрузке страницы, количество времени ожидания перед бросанием ошибка времени ожидания. В этом примере указывается 10 секунд, а не 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Имя файла, минус его продление в `res/drawable` каталог. Различные активы должны разделять это общее название в разных подкаталогах.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(число, значение по умолчанию `5000` ): отображает количество времени изображение экрана-заставки.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(логическое значение, по умолчанию `true` ): контроль ли страницы открыты в InAppBrowser получить доступ к же localStorage и WebSQL хранения страниц, открыт с браузером по умолчанию.