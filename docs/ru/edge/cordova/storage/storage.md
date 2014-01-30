---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Хранения

> Обзор вариантов хранения для Кордова.

Несколько хранения интерфейсы API доступны для приложений Cordova. Смотрите [html5rocks][1]. более полный обзор и примеры.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Также известен как *веб-хранения*, *простой хранения*, или его альтернативный *хранения сессии* интерфейс, этот интерфейс API обеспечивает хранение пару синхронных ключ/значение и доступны в базовых реализаций WebView. Обратитесь к [спецификации W3C][2] для деталей.

 [2]: http://www.w3.org/TR/webstorage/

**Windows Phone 7 галтель**: точечная нотация является *не* доступны, так что не забудьте использовать `setItem` или `getItem` , а не доступ к ключам, непосредственно из объекта хранилища, как в`window.localStorage.someKey`.

## WebSQL

Этот API-интерфейс доступен в базовом WebView. [Спецификация Web SQL базы данных][3] предлагает более полнофункциональные базы данных таблиц доступны через SQL-запросы.

 [3]: http://dev.w3.org/html5/webdatabase/

Следующие платформы поддерживают WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Этот API-интерфейс доступен в базовом WebView. [Индексированные DB][4] предлагает больше возможностей, чем LocalStorage, но меньше, чем WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Следующие платформы поддерживают IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## На основе плагина параметры

Помимо хранения, API-интерфейсы, перечисленные выше файлового API позволяет кэшировать данные на локальной файловой системе. Другие [плагины Cordova][5] предоставляют аналогичные возможности хранения.

 [5]: http://plugins.cordova.io/