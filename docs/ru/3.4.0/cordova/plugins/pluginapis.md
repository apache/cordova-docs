---

Лицензия: лицензируются для Apache Software Foundation (ASF) одного или нескольких корреспондентов лицензионных соглашений. Смотрите файл уведомления, распространяется с этой работой за дополнительной информацией относительно авторского права собственности. ASF лицензии этот файл вам под Apache License, версия 2.0 ("Лицензия"); Вы не можете использовать этот файл за исключением в соответствии с лицензией. Вы можете получить копию лицензии на

           http://www.Apache.org/Licenses/License-2.0 если иное не предусмотрено действующим законодательством или согласованных в письменной форме, программное обеспечение, распространяемое под лицензией распространяется «Как есть» основе, без гарантий или условий любого рода, явных или подразумеваемых.  Смотрите лицензию для конкретного языка, регулирующих разрешения и ограничения
    

## по лицензии.

# API плагинов

Cordova поставляется с минимальным набором APIs, и проекты которым необходимы дополнительные APIs добавляют их с использованием плагинов.

Вы можете осуществлять поиск по всем плагинам используя [Реестр плагинов][1].

 [1]: http://plugins.cordova.io/

Традиционный набор плагинов Cordova следующий:

*   [Состояние батареи][2]
    
    > Отслеживает статус батареи устройства.

*   [Камеры][3]
    
    > Получает фото используя камеру устройства.

*   [Контакты][4]
    
    > Взаимодействует с книгой контактов на устройстве.

*   [Устройство][5]
    
    > Получает информацию об устройстве.

*   [Движение устройства (Акселерометр)][6]
    
    > Используйте датчик движения устройства.

*   [Ориентация устройства (Компас)][7]
    
    > Получите направление в котором указывает устройство.

*   [Диалоги][8]
    
    > Визуальные уведомления на устройстве.

*   [Файловая система][9]
    
    > Подключитесь к файловой системе устройства с помощью JavaScript.

*   [Передача файлов][10]
    
    > Крюк в родной файловой системы через JavaScript.

*   [Геолокация][11]
    
    > Пусть ваше приложение знает свое местоположение.

*   [Глобализация][12]
    
    > Добавляет представление объектов в виде принятом для выбранной локали.

*   [Внутренний браузер][13]
    
    > Открывает URL-адреса в другом окне браузера внутри приложения.

*   [Аудио и видео][14]
    
    > Записывайте и проигрывайте аудиофайлы.

*   [Захват аудио и видео][15]
    
    > Создавайте медиа-файлы используя приложения по захвату медиа, на устройстве.

*   [Информацию о сети (подключение)][16]
    
    > Быстро проверьте состояние сети интернет, и информацию о сети сотовой связи.

*   [Экран-заставка][17]
    
    > Показывайте и прячьте экран заставки приложения.

*   [Вибрация][18]
    
    > API для вибрации устройства.

 [2]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md
 [3]: https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
 [4]: https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md
 [5]: https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md
 [6]: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
 [7]: https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
 [8]: https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md
 [9]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [10]: https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md
 [11]: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
 [12]: https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md
 [13]: https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md
 [14]: https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md
 [15]: https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md
 [16]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md
 [17]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
 [18]: https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

Переводы документации для этих плагинов могут быть найдены просматривая старые версии документации Cordova. Используйте выпадающее меню в верхнем правом углу сайта для выбора версии.
