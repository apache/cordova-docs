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

# Хранилище

> Обзор вариантов хранения данных для Cordova.

Несколько API интерфейсов хранения данных доступны для приложений Cordova. Смотрите [html5rocks][1]. для более полного обзора и примеров.

 [1]: http://www.html5rocks.com/en/features/storage

## LocalStorage

Также известен как *веб-хранилище*, *простое хранилище*, или его альтернативный интерфейс *хранилище сессии*, этот интерфейс API обеспечивает хранение пары ключ/значение и доступны в нижеуказанных реализациях WebView. Обратитесь к [спецификации W3C][2] для детальной информации.

 [2]: http://www.w3.org/TR/webstorage/

**Особенности Windows Phone 7**: точечная нотация является *не* доступной, так что не забудьте использовать `setItem` или `getItem` , вместо того чтобы получать доступ к значения, непосредственно используя свойства объекта хранилища, как например `window.localStorage.someKey`.

## WebSQL

Этот API-интерфейс доступен в нижеуказанных реализациях WebView. [Спецификация базы данных Web SQL][3] предлагает более полнофункциональные таблицы базы данных с доступом к ним через SQL-запросы.

 [3]: http://dev.w3.org/html5/webdatabase/

Следующие платформы поддерживают WebSQL:

*   Android
*   BlackBerry 10
*   iOS
*   Tizen

## IndexedDB

Этот API-интерфейс доступен в нижеуказанных WebView. [Indexed DB][4] предоставляет больше возможностей, чем LocalStorage, но меньше, чем WebSQL.

 [4]: http://www.w3.org/TR/IndexedDB/

Следующие платформы поддерживают IndexedDB:

*   Windows Phone 8
*   BlackBerry 10

## Варианты на основе плагинов

В дополнение к API хранилищ перечисленных выше, [File API][5] позволяет вам кешировать данные в локальной файловой системе. Другие [плагины Cordova][6] предоставляют схожие варианты хранения данных.

 [5]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [6]: http://plugins.cordova.io/