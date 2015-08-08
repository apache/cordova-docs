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

# Руководство по Tizen платформы

В этом руководстве описывается, как настроить среду разработки SDK для развертывания приложений Cordova для устройств под управлением операционной системы Tizen.

## Требования и поддержка

Tizen SDK требует Linux Ubuntu 10.04/10.10/11.04/11.10 (32-бит) или Windows XP SP3/7 (32-бит).

Разработчики должны использовать `cordova` утилита в сочетании с Tizen SDK. Увидеть интерфейс командной строки для информации как установить его, добавлять проекты, а затем построить и развернуть проект.

## Установите SDK

Скачать Tizen SDK от [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Откройте проект в SDK

1.  Запуск Tizen Eclipse IDE.

2.  Выберите **файл → импорт → Tizen веб-проекта**:

    ![][2]

3.  Нажмите **Далее**.

4.  Убедитесь, что **выберите корневой каталог** установлен.

5.  Убедитесь, что установлен **копирования проектов в рабочую область** .

6.  Нажмите **Обзор** и выберите Cordova Tizen `samples` каталог проекта (такие как `/cordova-basic` ):

    ![][3]

7.  Нажмите кнопку **Готово**. Теперь ваш проект должен быть импортированы и появляются в представлении **Обозреватель проектов** :

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Чтобы перестроить проект, щелкните правой кнопкой мыши в представлении **Обозреватель проектов** и выберите **Построить проект**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

В корневом каталоге проекта должен создать файл пакета виджета, например *hello.wgt* .

## Развертывание в эмулятор

Щелкните правой кнопкой мыши проект в представлении **Project Explorer** и выберите **Запуск как → Tizen симулятор веб-приложения**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Развернуть устройстве

*   Убедитесь, что целевое устройство должным образом начали, подключено и настроено. Необходимо правильно задать его параметры **даты и времени** .

*   Выберите цель развертывания приложения с помощью **Connection Explorer** представления: **окна → Показать вид → Connection Explorer**.

    ![][7]

*   Щелкните правой кнопкой мыши проект в **Project Explorer** зрения, а затем выберите **Run As & →; Tizen веб-приложение**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
