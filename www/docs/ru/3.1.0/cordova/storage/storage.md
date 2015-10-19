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

title: Хранения
---

# Хранения

> Предоставляет доступ к параметрам устройства хранения.

Этот API предлагает варианты хранения на основе двух различных спецификаций W3C:

*   [Спецификации API хранения веб][1] позволяет вам получить доступ к данным через пар простой ключ/значение. Смотрите секцию на [localStorage](localstorage/localstorage.html) для получения подробной информации на этот интерфейс.

*   [Спецификация SQL базы данных Web][2] предлагает больше таблиц базы данных, полнофункциональный доступ через SQL запросы. Краткое изложение этого интерфейса немедленно появляется ниже.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova предоставляет доступ к обоим интерфейсам для меньшинства устройств, которые уже не поддерживают их. В противном случае применяются встроенных реализаций.

## Методы

*   [openDatabase](storage.opendatabase.html)

## Аргументы

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## Объекты

*   [Базы данных](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## Доступ к функции

Начиная с версии 3.0 доступ к API хранения встроена в Cordova и не требует использования командной строки для добавления плагинов, как описано в интерфейс командной строки.

Если вы используете старые набор инструментов Cordova, которые предшествуют CLI, по-прежнему необходимы следующие параметры конфигурации платформы:

*   Android (в`app/res/xml/config.xml`)
    
        <feature name="Storage">
            <param name="android-package" value="org.apache.cordova.Storage" />
        </feature>
        

*   Ежевика WebWorks (в`www/config.xml`)
    
        <feature id="blackberry.widgetcache" required="true" version="1.0.0.0" />
        

Некоторые платформы могут поддерживать эту функцию без необходимости специальной настройки. В разделе *Поддержка платформы* в разделе Обзор.