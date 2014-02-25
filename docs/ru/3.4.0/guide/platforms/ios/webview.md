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

# iOS WebViews

В этом разделе показано, как внедрить компонент WebView Cordova поддержкой в рамках более крупных приложений iOS. Дополнительные сведения о том, как эти компоненты могут взаимодействовать друг с другом смотрите приложение плагины.

Поддержка iOS WebViews начал с Кордова версии 1.4, с помощью `Cleaver` компонент, для которого шаблон Xcode выступает в качестве эталонной реализации. Кордова 2.0 и более поздних версий поддерживают только реализация на основе подпроекта Кливер.

Эти инструкции требуют по крайней мере Cordova 2.3 и Xcode 4.5, наряду с `config.xml` файл из проекта вновь созданный iOS. Процедура в интерфейс командной строки можно использовать для создания нового проекта, а затем получить `config.xml` файл в подкаталоге именованного приложения в`platforms/ios`.

Следовать этим инструкциям, убедитесь, что у вас есть дистрибутив последней Кордова. Скачать его с [cordova.apache.org][1] и разархивируйте его пакет iOS.

 [1]: http://cordova.apache.org

## Добавление Колун в Xcode проект (подпроект CordovaLib)

1.  Если оно выполняется, закройте Xcode.

2.  Откройте терминал и перейдите в исходный каталог для iOS Кордова.

3.  Копия `config.xml` файла, описанного выше в каталог проекта.

4.  Откройте Xcode и использовать Finder для копирования `config.xml` файл в окно своей **Структуры проекта** .

5.  Выберите **создать группы для любой дополнительной папки** и нажмите кнопку **Готово**.

6.  Используйте Finder для копирования `CordovaLib/CordovaLib.xcodeproj` файл в Xcode в **Диспетчере структуры проекта**

7.  Выберите `CordovaLib.xcodeproj` в рамках **проекта навигатор**.

8.  Введите сочетание клавиш **Option-Command-1** , чтобы показать **Файл инспектор**.

9.  Выберите **относительный группу** в **Инспектора файлов** в раскрывающемся меню для **местоположения**.

10. Выберите **значок проекта** в **Диспетчере структуры проекта**, выберите **Цель**, а затем выберите вкладку **Параметры построения** .

11. Добавить `-force_load` и `-Obj-C` для значения **Другие флаги компоновщика** .

12. Нажмите на **значок проекта** в диспетчере структуры проекта, выберите **Цель**, а затем выберите вкладку **Построение этапов** .

13. Расширять **связь двоичные файлы с библиотеками**.

14. Выберите **+** кнопку и добавьте следующие **рамки**. При необходимости в **Диспетчере структуры проекта**, переместите их в группе **рамки** :
    
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
        

15. Разверните узел **Целевого объекта зависимостей**, приставки с этим ярлыком, если существует более одного окна.

16. Выберите **+** кнопку и добавить `CordovaLib` создания продукта.

17. Разверните **Двоичные файлы связь с библиотеками**, приставки с этим ярлыком, если существует более одного окна.

18. Выберите **+** кнопку и добавить`libCordova.a`.

19. Задать **Xcode предпочтения → места → полученных данных → передовые...** **уникальным**.

20. Выберите **значок проекта** в диспетчере структуры проекта, выберите ваши **цели**, а затем выберите вкладку **Параметры построения** .

21. Поиск **путей поиска заголовка**. Для этого параметра, добавьте эти три значения ниже, включая котировки:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    По состоянию на Cordova 2.1.0 `CordovaLib` был обновлен для использования **Автоматического подсчета ссылок (ARC)**. Вам не нужно обновить до **дуги** для использования `CordovaLib` , но если вы хотите обновить проект для использования **дуги**, следует использовать мастер миграции Xcode от **Правка → переделать → преобразовать в Objective-C ARC...** меню, **снимите флажок libCordova.a**, затем запустите мастер до завершения.

## С помощью CDVViewController

1.  Добавьте следующий заголовок:
    
        #import <Cordova/CDVViewController.h>
        

2.  Создайте экземпляр нового `CDVViewController` и сохраните его где-нибудь, например, для свойства класса:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  При необходимости задайте `wwwFolderName` свойства, которое по умолчанию равно `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  При необходимости задайте начальную страницу `config.xml` файла `<content>` тег, либо локальный файл:
    
        <content src="index.html" />
        
    
    .. или удаленный веб-узел:
    
        <content src="http://apache.org" />
        

5.  При необходимости задайте `useSplashScreen` свойства, которое по умолчанию равно `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Задайте **кадр представления**. Всегда установите это как Последнее свойство:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Добавьте в представление Кливер:
    
        [myView addSubview:viewController.view];
        

## Добавление HTML, CSS и JavaScript активы

1.  Создайте новый каталог в рамках проекта, `www` например.

2.  Поместите HTML, CSS и JavaScript активов в этот каталог.

3.  Чтобы скопировать каталог в окне **Навигатора проекта** Xcode используйте Finder.

4.  Выберите пункт **создать папку ссылки для любых папок, добавлен**.

5.  Установите соответствующие `wwwFolderName` и `startPage` свойства для каталога, вы первоначально создали, или использовать значения по умолчанию (указанный в предыдущем разделе) при создании экземпляра`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"