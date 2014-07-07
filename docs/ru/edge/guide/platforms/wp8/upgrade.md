* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. ASF лицензии этот файл вам под Apache License, версия 2.0 ("Лицензия"); Вы не можете использовать этот файл за исключением в соответствии с лицензией. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Обновление Windows Phone

В этом руководстве показано, как изменить Windows Phone 8 проектов, для обновления старых версий Кордова. Некоторые из этих инструкций применяются для проектов, созданных с старого набора средств командной строки, которые предшествуют `cordova` утилиты CLI. Увидеть интерфейс командной строки для получения информации как обновить версию инфраструктуры CLI. В следующем разделе показано, как перейти от проектов-CLI.

## Обновление до 3.2.0 от 3.1.0

Для проектов, которые были созданы с Кордова CLI:

1.  Обновление `cordova` CLI-версия. Увидеть интерфейс командной строки.

2.  Запуск`cordova platform update wp8`

Для проектов, не созданных с Кордова CLI выполните:

        bin\update < project_path >
    

## Обновление до 3.1.0 с 3.0.0

Для проектов, которые были созданы с Кордова CLI:

1.  Обновление `cordova` CLI-версия. Увидеть интерфейс командной строки.

2.  Запуск`cordova platform update wp8`

Для проектов, не созданных с Кордова CLI выполните:

        bin\update < project_path >
    

## Обновление к CLI (3.0.0) с 2.9.0

1.  Создайте новый проект Apache Cordova 3.0.0 используя cordova CLI, как описано в интерфейс командной строки.

2.  Добавьте ваш платформ в Кордове проект, например:`cordova
platform add wp8`.

3.  Скопируйте содержимое проекта `www` каталог `www` каталог в корневом каталоге проекта cordova, вы только что создали.

4.  Копировать или перезаписать любые родной активы от вашего первоначального проекта ( `SplashScreen` , `ApplicationIcon` и др.), что, конечно, чтобы добавить новые файлы в `.csproj` файл. Windows phone построение проектов внутри `platforms\wp8` каталог.

5.  Используйте средство CLI cordova для установки любых плагинов, что вам нужно. Обратите внимание, что CLI обрабатывает все основные API плагинов, так что они могут и должны быть добавлены. Только 3.0.0 плагины совместимы с CLI.

6.  Построение и тестирование.

## Обновления 3.0.0 (non-CLI) из 2.x

В окне Обозреватель решений Visual Studio:

1.  Создайте новый Apache Cordova WP8 3.0.0 проекта.

2.  Скопируйте содержимое `www` каталог в новый проект и будьте уверены, эти элементы добавляются в проект VS.

3.  Скопируйте и перезаписать любой экран-заставку, или значок изображения.

4.  Скопируйте любые плагины от `plugins` каталог на новый проект и убедитесь, что они также добавляются в проект VS.

5.  Построение и тестирование.

**Примечание**: все основные API удаляются от Кордова версии 3.0 и должен быть установлен отдельно как плагины. Дополнительные сведения о том, как повторно включить эти функции в рабочем-CLI см с помощью Plugman для управления плагинами.