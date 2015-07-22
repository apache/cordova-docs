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

# Средства командной строки Windows 8

`cordova`Утилиты командной строки является высокого уровня инструмент, который позволяет вам создавать приложения сразу на нескольких платформах. Старые версии структуры Cordova предоставляет наборы средств командной строки для каждой платформы. Чтобы использовать их в качестве альтернативы для CLI, вам нужно скачать эту версию Cordova с [cordova.apache.org][1]. Загружаемый файл содержит отдельные архивы для каждой платформы. Разверните узел платформы, которую вы хотите цели. Инструменты, описанные здесь обычно доступны в профиле верхнего уровня `bin` каталог, в противном случае консультироваться с файлом **README** для получения более подробной направлениях.

 [1]: http://cordova.apache.org

Сведения о низкоуровневый интерфейс командной строки, который позволяет плагины см с помощью Plugman для управления плагинами. Смотрите приложение плагины обзор.

## ОС Windows 8

Средства командной строки Windows 8 поддерживают только создание новых проектов. Команды должны быть запущены из строки cmd или powershell.

## Создание проекта

Запуск `create` команды со следующими параметрами:

*   Путь к вашему новому проекту Cordova Windows 8

*   Имя пакета, после обратного домена стиль Конвенции. Это становится по умолчанию пространство имен.

*   Название проекта