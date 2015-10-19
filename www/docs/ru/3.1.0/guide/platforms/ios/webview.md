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

title: iOS WebViews
---

# iOS WebViews

Начиная с Cordova 1.4, можно использовать Cordova как компонент в iOS приложений. Этот компонент является кодовым названием «Колун».

Новые Cordova-приложения, созданные с помощью Xcode шаблона, доступного в Cordova 1.4 или более широкому использованию Кливер. (Шаблон — Кливер в эталонной реализации).

Колун осуществления подпроектов на основе поддерживают только Cordova 2.0.0 и последующих версиях.

## Необходимые условия

*   Кордова 2.3.0 или больше

*   Xcode 4.5 или больше

*   `config.xml`файл (из вновь созданного iOS проекта)

## Добавление Кливер в Xcode проект (подпроект CordovaLib)

1.  Скачайте и распакуйте Cordova источник постоянного каталог на жестком диске, например`~/Documents/Cordova`.

2.  Закройте Xcode, если она запущена.

3.  С помощью Terminal.app, перейдите в каталог, где вы положили загруженных исходных выше.

4.  Копия `config.xml` файл в каталог проекта на диске (см выше).

5.  Перетащите и падение `config.xml` файлов в навигатор проекта Xcode.

6.  Выберите переключатель **создать группы для любой дополнительной папки** и нажмите кнопку **Готово**.

7.  Перетащите и падение `CordovaLib.xcodeproj` файлов в навигатор проекта Xcode (от постоянного каталога расположение выше и она должна быть в `CordovaLib` подкаталог).

8.  Select `CordovaLib.xcodeproj` in the Project Navigator.

9.  Введите сочетание клавиш **Option-Command-1** , чтобы показать **Инспектора файлов**.

10. Выберите **относительный группу** в **Инспектора файлов** для раскрывающегося меню для **местоположения**.

11. Выберите **значок проекта** в диспетчере структуры проекта, выберите ваши **цели**, а затем выберите вкладку **Параметры построения** .

12. Добавить `-all_load` и `-Obj-C` для **Других компоновщика Flags** значения.

13. Нажмите на **значок проекта** в диспетчере структуры проекта, выберите **целевой**, а затем выберите вкладку **Build фаз** .

14. Разверните **двоичных файлов связь с библиотеками**.

15. Выберите **+** кнопку и добавьте следующие **рамки**. При необходимости в диспетчере структуры проекта, переместите их под **рамки** группы):
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

16. Разверните узел **Целевого объекта зависимостей**, приставки, помечены как это, если у вас есть несколько коробки!

17. Выберите **+** кнопку и добавьте `CordovaLib` создания продукта.

18. Разверните **Двоичных файлов связь с библиотеками**, приставки, помечены как это, если у вас есть несколько коробки!

19. Выберите **+** кнопку и добавить`libCordova.a`.

20. Присвоить **уникальный** Xcode предпочтения **предпочтения Xcode → места → полученных данных → передовые...**.

21. Выберите **значок проекта** в диспетчере структуры проекта, выберите ваши **цели**, а затем выберите вкладку **Параметры построения** .

22. Поиск **путей поиска заголовка**. Для этого параметра, добавьте эти три значения ниже (в кавычках):
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    С Cordova 2.1.0 `CordovaLib` был обновлен для использования **Автоматического подсчета ссылок (ARC)**. Вам не нужно для обновления до **дуги** для использования CordovaLib, но если вы хотите обновить проект для использования **дуги**, пожалуйста, используйте мастер миграции Xcode из меню: **Правка → рефакторинг → преобразовать в Objective-C ARC...**, **снимите флажок libCordova.a**, затем запустите мастер до завершения.

## Использование CDVViewController в коде

1.  Добавьте этот заголовок:
    
        #import <Cordova/CDVViewController.h>
        

2.  Создайте экземпляр нового `CDVViewController` и сохранить его где-нибудь (например, к свойству в классе):
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  (*ФАКУЛЬТАТИВНЫЙ*) Установите `wwwFolderName` Свойства (по умолчанию `www` ):
    
        viewController.wwwFolderName = @"myfolder";
        

4.  (*ФАКУЛЬТАТИВНЫЙ*) Задайте начальную страницу в config.xml, `<content>` тег.
    
        <content src="index.html" />
        
    
    ИЛИ
    
        <content src="http://apache.org" />
        

5.  (*ФАКУЛЬТАТИВНЫЙ*) Установите `useSplashScreen` Свойства (по умолчанию `NO` ):
    
        viewController.useSplashScreen = YES;
        

6.  Задать **кадр представления** (всегда установить это как последнего свойства):
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Добавьте Кливер в представление:
    
        [myView addSubview:viewController.view];
        

## Добавление HTML, CSS и JavaScript активов

1.  Создайте новый каталог проекта на диске, `www` например.

2.  Положите ваши активы HTML, CSS и JavaScript в этот каталог.

3.  Перетащите и поместите каталог в навигатор проекта Xcode.

4.  Выберите переключатель **создать папку ссылок для любых папок, добавил** .

5.  Установите соответствующий `wwwFolderName` и `startPage` свойства для папки, вы первоначально создали, или использовать значения по умолчанию (см. предыдущий раздел) при создании экземпляра`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"