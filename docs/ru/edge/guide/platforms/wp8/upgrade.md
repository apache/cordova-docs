---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Обновление Windows Phone 8

В этом руководстве показано, как изменить Windows Phone 8 проектов, для обновления старых версий Кордова. Некоторые из этих инструкций применяются для проектов, созданных с старого набора средств командной строки, которые предшествуют `cordova` утилиты CLI. Увидеть интерфейс командной строки для получения информации как обновить версию инфраструктуры CLI. В следующем разделе показано, как перейти от проектов-CLI.

## Обновление до 3.2.0 с 3.1.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "Интерфейс командной строки".

2.  Запуск`cordova platform update wp8`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin\update < project_path >
    

## Обновление до 3.1.0 с 3.0.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "Интерфейс командной строки".

2.  Запуск`cordova platform update wp8`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin\update < project_path >
    

## Обновление до CLI (3.0.0) с 2.9.0

1.  Создайте новый проект Apache Cordova 3.0.0 используя Cordova CLI, как описано в разделе "Интерфейс командной строки".

2.  Добавьте ваш платформ в Кордове проект, например:`cordova
platform add wp8`.

3.  Скопируйте содержимое каталога `www` в каталог `www` проекта Cordova который вы только что создали.

4.  Скопируйте или замените любые ресурсы платформы из вашего исходного проекта (`SplashScreen`, `ApplicationIcon`, и т.д.), удостовертесь что добавили все новые файлы в `.csproj` файл. Windows phone построение проектов внутри `platforms\wp8` каталог.

5.  Используйте Сordova CLI для установки необходимых вам плагинов. Обратите внимание что CLI интерпретирует все базовые APIs как плагины, так что они тоже должны быть добавлены. Только плагины для версии 3.0.0 поддерживаются CLI.

6.  Построение и тестирование.

## Обновления 3.0.0 (non-CLI) из 2.x

В окне Обозреватель решений Visual Studio:

1.  Создайте новый Apache Cordova WP8 3.0.0 проекта.

2.  Скопируйте содержимое `www` каталог в новый проект и будьте уверены, эти элементы добавляются в проект VS.

3.  Скопируйте и перезаписать любой экран-заставку, или значок изображения.

4.  Скопируйте любые плагины от `plugins` каталог на новый проект и убедитесь, что они также добавляются в проект VS.

5.  Построение и тестирование.

**Примечание**: все основные API удаляются от Кордова версии 3.0 и должен быть установлен отдельно как плагины. Дополнительные сведения о том, как повторно включить эти функции в рабочем-CLI см с помощью Plugman для управления плагинами.