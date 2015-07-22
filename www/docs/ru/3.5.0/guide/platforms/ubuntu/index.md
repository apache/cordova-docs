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

# Руководство по Ubuntu платформы

## Первоначальный релиз

Добро пожаловать на первоначального выпуска Ubuntu платформы поддержки в Кордове. С этого выпуска основное внимание развивается на системе Ubuntu и используя Cordova веб проекта Dev рабочего процесса. Это включает в себя добавление платформы Ubuntu для вашего проекта, Добавление стандартных плагинов Cordova и, конечно, строительство и приложений для Ubuntu платформы.

### Ubuntu SDK

Вы также можете установить среду разработки Ubuntu QtCreator. Смотрите [developer.ubuntu.com][1] для получения дополнительной информации. (QtCreator SDK не требуется для добавления поддержки платформы Ubuntu в приложение Cordova).

 [1]: http://developer.ubuntu.com

### Ubuntu среды выполнения платформы

Ubuntu является хорошо известен своей среды рабочего стола (для ноутбуков, ПК и т.п.). Ubuntu Touch расширяет ОС Ubuntu на телефоны и планшеты. Ubuntu среды выполнения платформы имеют различных Процессорных архитектур (x 86, armhf, и т.д.). Приложения и плагин код должен быть скомпилирован соответствующим образом. Поддержка этой широкой области стремительно развивается в Ubuntu.

### Последняя информация

Для получения последней информации о поддержке приложение Cordova для платформ среды выполнения Ubuntu см [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Требования к платформе разработки

Для этого первоначального выпуска платформы разработки должна быть Ubuntu Desktop. Ubuntu 13.10 (кодовое имя 'дерзкий') или более поздней версии требуется для полного набора поддерживаемых возможностей.

Вы можете установить Кордова на не Ubuntu системы (с помощью НПМ), но важных возможностей предоставляются только через Ubuntu debian пакетов на данный момент.

## Установка Кордова

Добавьте в Ubuntu Cordova [Личный архив пакетов][3] Ubuntu системы:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Установите пакет cordova-cli (и его зависимости):

    $ sudo apt-get install cordova-cli
    

## Проект рабочего процесса

### Создание проекта

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### Перейти в каталог проекта

    $ cd project1
    

### Добавьте платформа Ubuntu

    $ cordova platform add ubuntu
    

### Построить для Ubuntu

    $ cordova build ubuntu
    

### Запустите приложение

    $ cordova run ubuntu
    

### Добавить плагин статус батареи

    $ cordova plugin add org.apache.cordova.battery-status