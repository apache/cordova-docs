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

title: Обновление Windows Phone 8
---

# Обновление Windows Phone 8

В этом руководстве показано, как изменить проекты Windows Phone 8, для обновления от более старых версий Cordova. Большинство этих инструкций применимы для проектов, созданных со старым набором средств командной строки, которые предшествуют утилите CLI `cordova`. Смотрите раздел "[Интерфейс командной строки](../../cli/index.html)" для получения информации как обновить версию CLI. В следующем разделе показано, как обновить не-CLI и CLI проекты.

## Обновление проектов с 3.6.0 до 4.0.0

Для проектов-CLI выполните:

        bin/обновить путь/к/проекта
    

Для проектов CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Запуск `cordova platform update wp8` в существующих проектах.

## Обновление до 3.2.0 от 3.1.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Выполните `cordova platform update wp8`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin/update <project_path>
    

## Обновление до 3.1.0 с 3.0.0

Для проектов, которые были созданы с помощью cordova CLI:

1.  Обновите версию `cordova` CLI. Смотрите "[Интерфейс командной строки](../../cli/index.html)".

2.  Запуск`cordova platform update wp8`

Для проектов, не созданных с помощью cordova CLI выполните:

        bin\update <project_path>
    

## Обновление к CLI (3.0.0) с 2.9.0

1.  Создайте новый проект Apache Cordova 3.0.0 используя Cordova CLI, как описано в разделе "[Интерфейс командной строки](../../cli/index.html)".

2.  Добавьте ваш платформ в Кордове проект, например:`cordova
platform add wp8`.

3.  Скопируйте содержимое каталога `www` исходного проекта в каталог `www` в корне проекта cordova, который вы только что создали.

4.  Скопируйте или замените любые ресурсы платформы из вашего исходного проекта (`SplashScreen`, `ApplicationIcon`, и т.д.), удостовертесь что добавили все новые файлы в `.csproj` файл. Проект Windows phone собирается внутри каталога `platforms\wp8`.

5.  Используйте Сordova CLI для установки необходимых вам плагинов. Обратите внимание что CLI интерпретирует все базовые APIs как плагины, так что они тоже должны быть добавлены. Только плагины для версии 3.0.0 поддерживаются CLI.

6.  Построение и тестирование.

## Обновление до 3.0.0 (не CLI) с 2.x

В окне Обозреватель решений Visual Studio:

1.  Создайте новый проект Apache Cordova WP8 3.0.0.

2.  Скопируйте содержимое каталога `www` в новый проект и убедитесь что эти элементы добавлены в проект VS.

3.  Скопируйте и перезапишите любую заставку, или иконку.

4.  Скопируйте любые плагины из каталога `plugins` в новый проект и убедитесь, что они также добавлены в проект VS.

5.  Постройте и протестируйте.

**Примечание**: все основные API удалены из Cordova версии 3.0 и должен быть установлены отдельно как плагины. Дополнительные сведения о том, как повторно включить эти функции в рабочем процессе без использования CLI см. "[Использование Plugman для управления расширениями](../../../plugin_ref/plugman.html)".