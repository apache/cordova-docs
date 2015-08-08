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

# Amazon Fire платформы OS Гид

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для Amazon Fire ОС устройства, как Kindle Fire HDX.

Смотрите ниже для более подробной информации конкретной платформы:

*   Amazon Fire OS конфигурации
*   Amazon Fire OS WebViews
*   Amazon Fire OS плагины

## Требования и поддержка

Разработка приложений Cordova для Amazon Fire ОС требует Android SDK и Amazon WebView SDK. Проверьте требования для этих SDK на соединениях ниже:

*   [Система Android SDK][1]

*   [Amazon WebView SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Установка

### Android SDK

Установите Android SDK от [developer.android.com/sdk][1]. В противном случае вам может быть представлен с выбором куда установить SDK, переместить загруженный `adt-bundle` дерево, чтобы везде, где вы храните средства разработки.

Для Кордова средства командной строки для работы, вам необходимо включить в SDK `tools` и `platform-tools` каталогов в среде PATH.

На Mac, Linux или других Unix подобных платформах, вы можете использовать текстовый редактор для создания или изменения `~/.bash_profile` файл, добавив строку, например, в зависимости от того, где SDK устанавливает:

    экспорт путь = ${путь}: / развития/АТД Комплект/sdk/платформы tools: / развития/АТД Комплект/sdk/инструменты


Это предоставляет средства SDK в недавно открытый терминал windows. В противном случае выполните это, чтобы сделать их доступными в текущем сеансе:

    $ источника ~/.bash_profile


Чтобы изменить путь среды на Windows 7:

*   Нажмите на меню " **Пуск** " в левом нижнем углу рабочего стола, щелкните правой кнопкой мыши на **компьютере**, а затем нажмите кнопку **Свойства**.

*   Нажмите кнопку **Дополнительные параметры системы** в столбце слева.

*   В открывшемся диалоговом нажмите **Переменные среды**.

*   Выберите переменную **PATH** и нажмите **редактировать**.

*   Добавьте следующее в путь, основанный на котором установлен пакет SDK, например:

        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools


*   Сохраните значение и закройте оба диалоговые окна.

Также может потребоваться включить Java и Ant. открыть командную строку и введите `java` , а также ввести `ant` . Добавления к пути зависимости не удается запустить:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin


### Amazon WebView SDK

Скачать Амазонка WebView SDK от [Amazon разработчик портала][2].

*   Создание `libs/` Папка в `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` папку.
*   Добавить `awv_interface.jar` из загруженного пакета SDK для`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Откройте проект в SDK

Использование `cordova` утилита для настройки нового проекта, как описано в Cordova интерфейс командной строки. Например в каталоге исходного кода:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build


После создания, вот как использовать пакет SDK для его изменения:

*   Запустите приложение **Eclipse** .

*   Выберите пункт меню **Создать проект** .

*   Выберите **Android-проект из существующего кода** из диалогового окна полученный и нажмите **Далее**: ![][3]

*   Перейдите к `hello` , или какой вы создан каталог для проекта, затем в `platforms/amazon-fireos` подкаталога.

*   Нажмите кнопку **Готово**.

 [3]: {{ site.baseurl }}/static/img/guide/platforms//eclipse_new_project.png

После того, как откроется окно Eclipse, красный **X** может показаться указывают нерешенные проблемы. Если это так, выполните следующие дополнительные действия:

*   Щелкните правой кнопкой мыши на папке проекта.

*   В результате диалоговом окне **свойств** выберите **Android** из области переходов.

*   Для проекта цели, выбирать самый высокий уровень Android API, которые вы установили.

*   Нажмите **кнопку ОК**.

*   Выберите **очистить** из меню **проект** . Это должно исправить все ошибки в проекте.

## Развертывание на устройство

Для проталкивания приложение непосредственно на устройство, убедитесь, что включена отладка USB на вашем устройстве, как описано на [Android Разработчик сайта][4]и использовать мини-USB кабель, подключить его к вашей системе.

 [4]: http://developer.android.com/tools/device.html

Вы можете нажать приложение на устройство из командной строки:

    $ cordova run amazon-fireos


Попеременно в Eclipse, щелкните правой кнопкой мыши проект и выберите **выполнить как → приложения для Android**.

**Примечание**: в настоящее время тестирование через эмулятор не поддерживается для Amazon WebView на основе приложения.
