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

# Платформа Android руководство

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для устройств Android. Смотрите ниже для более подробной информации конкретной платформы:

*   Андроид конфигурации
*   Андроид WebViews
*   Андроид плагины
*   Обновление Android
*   Android средства командной строки

Средства командной строки относятся к версии до Cordova 3.0. Сведения о текущем интерфейсе см интерфейс командной строки.

## Требования и поддержка

Просмотреть [требования к системе][1] для Android SDK.

 [1]: http://developer.android.com/sdk/index.html

Кордова поддерживает Android 2.2, 2.3 и 4.x. Как правило являются устаревшими платформ как они опустится ниже 5% на Google в [панель мониторинга распределения][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Разработчики должны использовать `cordova` утилита в сочетании с Android SDK. Увидеть интерфейс командной строки для информации как установить его, добавлять проекты, а затем построить и развернуть проект.

## Установите SDK

Установите Android SDK от [developer.android.com/sdk][3]. В противном случае вам могут быть представлены с выбором где установить SDK, переместить загруженный `adt-bundle` дерево, чтобы везде, где вы храните средства разработки.

 [3]: http://developer.android.com/sdk/

Для Кордова средств командной строки для работы, вам необходимо включить в SDK `tools` и `platform-tools` каталогов в среде PATH. На Mac, вы можете использовать текстовый редактор для создания или изменения `~/.bash_profile` файл, добавив строку, например, в зависимости от того, где SDK устанавливает:

    export PATH=${PATH}:/Development/adt-bundle/sdk/platform-tools:/Development/adt-bundle/sdk/tools


Это предоставляет средства SDK в недавно открывшийся терминал windows. В противном случае выполните это, чтобы сделать их доступными в текущем сеансе:

    $ source ~/.bash_profile


Чтобы изменить путь среды на Windows 7:

*   Нажмите на меню " **Пуск** " в левом нижнем углу рабочего стола, щелкните правой кнопкой мыши на **компьютере**, а затем нажмите кнопку **Свойства**.

*   Нажмите кнопку **Дополнительные параметры системы** в столбце слева.

*   В появившемся диалоговом нажмите **Переменные среды**.

*   Выберите переменную **PATH** и нажмите **редактировать**.

*   Добавьте путь, основанный на котором установлен пакет SDK, например следующие:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   Сохраните значение и закрыть и диалоговые окна.

Также может потребоваться включить Java и Ant. открыть командную строку и введите `java` , а также ввести `ant` . Добавления к пути зависимости не удается запустить:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Откройте проект в SDK

Использование `cordova` Утилита, чтобы создать новый проект, как описано в Cordova интерфейс командной строки. Например в каталоге исходного кода:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Как только создан, вот как использовать пакет SDK для его изменения:

*   Запустите приложение **Eclipse** .

*   Выберите пункт меню **Нового проекта** .

*   Выберите **Android-проект из существующего кода** из результирующее диалоговое окно и нажмите **Далее**: ![][4]

*   Перейдите к `hello` , или какой вам создан каталог для проекта, затем к `platforms/android` подкаталог.

*   Нажмите кнопку **Готово**.

 [4]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

После того, как откроется окно Eclipse, красный **X** может показаться указывают нерешенные проблемы. Если это так, выполните следующие дополнительные действия:

*   Щелкните правой кнопкой мыши на папке проекта.

*   В результате диалоговом окне **Свойства** выберите **Android** из области переходов.

*   Для проекта построения целевого объекта, выберите самый высокий уровень Android API, которые вы установили.

*   Нажмите **кнопку ОК**.

*   Выберите **очистить** из меню **проект** . Это должно исправить все ошибки в проекте.

## Развертывание в эмулятор

Вы можете использовать `cordova` утилита для запуска приложения в эмуляторе, или вы можете запустить его в SDK. В любом случае, SDK сначала должен быть настроен для отображения по крайней мере одно устройство. Чтобы сделать это, используйте менеджер SDK Android, Java-приложение, которое выполняется отдельно от Eclipse. Существует два способа, чтобы открыть ее:

*   Запуск `android` в командной строке.

*   В Eclipse, нажмите этот значок на панели инструментов:

    ![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

После открытой, Android SDK Manager отображает различные библиотеки времени выполнения:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

Выберите **Инструменты → Управление AVDs** (Android виртуального устройства), а затем выберите любой элемент из **Определения устройства** в диалоговом окне возникшей:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Нажмите **Создать AVD**, при необходимости изменяя имя, затем нажмите **кнопку ОК** чтобы принять изменения:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

AVD затем появляется в списке **Виртуальных устройств Android** :

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Чтобы открыть эмулятор как отдельное приложение, выберите AVD и нажать кнопку **старт**. Он запускает, как он на устройство, с дополнительные элементы управления, доступные для аппаратных кнопок:

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

В этот момент вы можете использовать `cordova` утилита для развертывания приложения в эмулятор из командной строки:

        $ cordova emulate android


Если вместо этого вы работаете в среде Eclipse, щелкните правой кнопкой мыши проект и выберите **выполнить как → Android-приложение**. Вас могут попросить указать AVD, если нет уже открыт.

Для более быстрый опыт используйте изображение на базе Intel эмулятор:

*   Установите один или несколько `Intel x86 Atom` образов системы, а также `Intel Hardware Accelerated Execution Manager` , доступных под **экстра**.

*   Запустите установщик Intel, который доступен в пределах вашего Android SDK в`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Создайте новый AVD с поставленной цели Intel изображения.

*   При запуске эмулятор, обеспечить существует без сообщений об ошибке, указывающее на сбой загрузки HAX модулей.

## Развертывание на устройство

Для проталкивания приложение непосредственно на устройство, убедитесь, что USB отладки включен на вашем устройстве, как описано на [Android Разработчик сайта][11]и использовать мини-USB кабель для подключения к вашей системе.

 [11]: http://developer.android.com/tools/device.html

Вы можете нажать приложение на устройство из командной строки:

        $ cordova run android


Попеременно в Eclipse, щелкните правой кнопкой мыши проект и выберите **выполнить как → приложения для Android**.
