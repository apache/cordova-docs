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

title: API плагинов
---

# API плагинов

Cordova поставляется с минимальным набором APIs, и проекты которым необходимы дополнительные API, добавляют их через плагины.

Вы можете искать по все существующим плагинам (в том числе сторонние плагины) на [npm][1].

 [1]: https://www.npmjs.com/search?q=ecosystem%3Acordova

Традиционный набор плагинов Cordova следующий:

*   [Состояние батареи][2]
    
    > Отслеживает статус батареи устройства.

*   [Камера][3]
    
    > Получает фото используя камеру устройства.

*   [Консоль][4]
    
    > Добавление дополнительных возможностей к console.log().

*   [Контакты][5]
    
    > Взаимодействует с книгой контактов на устройстве.

*   [Устройство][6]
    
    > Получает информацию об устройстве.

*   [Движение устройства (Акселерометр)][7]
    
    > Используйте датчик движения устройства.

*   [Ориентация устройства (Компас)][8]
    
    > Получите направление в котором указывает устройство.

*   [Диалоги][9]
    
    > Визуальные уведомления на устройстве.

*   [Файловая система][10]
    
    > Подключитесь к файловой системе устройства с помощью JavaScript.

*   [Передача файлов][11]
    
    > Подключитесь к файловой системе устройства с помощью JavaScript.

*   [Географическое положение][12]
    
    > Пусть ваше приложение знает свое местоположение.

*   [Глобализация][13]
    
    > Добавляет представление объектов в виде принятом для выбранной локали.

*   [Внутренний браузер][14]
    
    > Открывает URL-адреса в другом окне браузера внутри приложения.

*   [Аудио и видео][15]
    
    > Записывайте и проигрывайте аудиофайлы.

*   [Захват аудио и видео][16]
    
    > Создавайте медиа-файлы используя приложения по захвату медиа, на устройстве.

*   [Информацию о сети (подключение)][17]
    
    > Быстро проверьте состояние сети интернет, и информацию о сети сотовой связи.

*   [Заставка][18]
    
    > Показывайте и прячьте экран заставки приложения.

*   [Вибрация][19]
    
    > API для вибрации устройства.

*   [Строка состояния][20]
    
    > API-интерфейс для отображения, скрытия и настройке фона строки состояния.

*   [Список разрешенных ресурсов][21]
    
    > Плагин для разрешение сетевых запросов. Должен быть установлен если вы хотите иметь возможность делать любые сетевые запросы в вашем приложении.

*   [Устаревший список разрешенных ресурсов][22]
    
    > Плагин для использования старого стиля списка разрешенных ресурсов, прежде чем он был удален из платфор и изменил в виде текущего плагина списка разрешеных ресурсов.

 [2]: https://www.npmjs.com/package/cordova-plugin-battery-status
 [3]: https://www.npmjs.com/package/cordova-plugin-camera
 [4]: https://www.npmjs.com/package/cordova-plugin-console
 [5]: https://www.npmjs.com/package/cordova-plugin-contacts
 [6]: https://www.npmjs.com/package/cordova-plugin-device
 [7]: https://www.npmjs.com/package/cordova-plugin-device-motion
 [8]: https://www.npmjs.com/package/cordova-plugin-device-orientation
 [9]: https://www.npmjs.com/package/cordova-plugin-dialogs
 [10]: https://www.npmjs.com/package/cordova-plugin-file
 [11]: https://www.npmjs.com/package/cordova-plugin-file-transfer
 [12]: https://www.npmjs.com/package/cordova-plugin-geolocation
 [13]: https://www.npmjs.com/package/cordova-plugin-globalization
 [14]: https://www.npmjs.com/package/cordova-plugin-inappbrowser
 [15]: https://www.npmjs.com/package/cordova-plugin-media
 [16]: https://www.npmjs.com/package/cordova-plugin-media-capture
 [17]: https://www.npmjs.com/package/cordova-plugin-network-information
 [18]: https://www.npmjs.com/package/cordova-plugin-splashscreen
 [19]: https://www.npmjs.com/package/cordova-plugin-vibration
 [20]: https://www.npmjs.com/package/cordova-plugin-statusbar
 [21]: https://www.npmjs.com/package/cordova-plugin-whitelist
 [22]: https://www.npmjs.com/package/cordova-plugin-legacy-whitelist

Переводы с английского документации этих плагинов можно найти, перейдя в репозитории github плагина и посмотрев в папке docs