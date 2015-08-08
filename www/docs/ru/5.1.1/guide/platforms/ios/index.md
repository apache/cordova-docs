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

# Руководство для платформы iOS

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для iOS-устройств, таких как iPhone и iPad. Смотрите ниже для более подробной информации конкретной платформы:

*   Конфигурация iOS
*   Обновление для iOS
*   WebViews в iOS
*   Плагины для iOS
*   Руководство по инструментам командной строки iOS

Средства командной строки относятся к версии Cordova до 3.0. Смотрите раздел "Интерфейс командной строки" для информации о текущем интерфейсе интерфейс командной строки.

## Требования и поддержка

Инструменты Apple ®, необходимые для создания приложений iOS, выполняются только в операционной системе OS X на компьютерах Mac на базе Intel. Xcode ® 6.0 (минимальная требуемая версия) работает только на OS X версии 10.9 (Mavericks) или выше и включает в себя iOS 8 SDK (Software Development Kit). Чтобы отправить приложений в Apple App Store℠ требует последние версии инструментария Apple.

Вы можете проверить многие из функций Cordova, используя эмулятор iOS установленный с iOS SDK и Xcode, но вам нужно реальное устройство чтобы полностью проверить все функции приложения перед отправкой его в App Store. Устройство должно иметь установленным по крайней мере iOS 6.x , минимальная версия iOS поддерживаемая начиная с Cordova 3.0. Подерживаемые устройства включают все модели iPad ®, iPhone ® 3GS и выше и iPod ® Touch 3-го поколения или позднее. Для установки приложений на устройство, необходимо также быть членом компании Apple [iOS разработчик программы][1], которая стоит $99 в год. В этом руководстве показано, как развернуть приложения в эмуляторе iOS, для которого не нужно зарегистрироваться в программе developer.

 [1]: https://developer.apple.com/programs/ios/

Инструменты [Ios-sim][2] и [ios-deploy][3] позволяют вам запустить приложение iOS на iOS симуляторе или iOS устройстве из командной строки.

 [2]: https://www.npmjs.org/package/ios-sim
 [3]: https://www.npmjs.org/package/ios-deploy

## Установите SDK

Существует два способа для загрузки Xcode:

*   из [App Store][4], доступных путем поиска «Xcode» в приложении **App Store** .

*   от [Apple Developer Downloads][5], который требует регистрации в качестве разработчиков Apple.

 [4]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [5]: https://developer.apple.com/downloads/index.action

После установки Xcode, некоторые инструменты командной строки должны быть доступны чтобы инструменты Cordova запускались. В меню **Xcode** выберите **Preferences**, а затем вкладку **Downloads** . На панели **Components** нажмите кнопку **Install** рядом с списком **Command Line Tools**.

## Установить средства развертывания

Запустите из терминала командной строки:

        $ npm install -g ios-sim
        $ npm install -g ios-deploy


## Создание нового проекта

Используйте утилиту `cordova` для настройки нового проекта, как описано в разделе "Интерфейс командной строки Cordova". Например выполните в каталоге исходного кода:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


## Развертывание приложения

Для развертывания приложения на подключенном iOS устройстве:

        $ cordova run ios --device


Для развертывания приложения на iOS эмуляторе по умолчанию:

        $ cordova emulate ios


Можно использовать **cordova run android --list** чтобы увидеть все доступные цели и **cordova run android --target=имя_устройства** для запуска приложения на конкретном устройстве или эмуляторе (например, `cordova run android --target="Nexus4_emulator"`).

Чтобы увидеть дополнительные параметры построения и запуска также можно использовать **cordova run --help**.

## Откройте проект в SDK

Как только платформа ios добавлена в проект, вы можете открыть его из в Xcode. Дважды щелкните, чтобы открыть файл `hello/platforms/ios/hello.xcodeproj`. Экран должен выглядеть следующим образом:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Развертывание на эмулятор

Для предварительного просмотра приложения в эмуляторе iOS:

1.  Убедитесь, что на левой панели выбран файл *.xcodeproj* .

2.  Выберите приложение **hello** на панели справа.

3.  Выберите предполагаемый устройство из меню **схема** панели инструментов, таких как iPhone 6.0 симулятор как подчеркнул здесь:

    ![][7]

4.  Нажмите кнопку **Run** , который появляется в панели же для левой части **схемы**. Это строит, развертывает и запускает приложение в эмуляторе. Отдельный эмулятор приложение открывает для отображения приложения:

    ![][8]

    Только один эмулятор может выполняться одновременно, так что если вы хотите протестировать приложение в эмуляторе другой, вам нужно выйти из эмулятора приложения и запускать различные цели в пределах Xcode.

 [7]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode идет с встроенным эмулятором для последних версий iPhone и iPad. Более старые версии могут быть доступны из панели **→ Preferences → Downloads → Components**.

## Развертывание на устройство

Подробные сведения о различных требований для развертывания на устройстве обратитесь к разделу *Настройка развития и распределения ресурсов* документа [Рабочий процесс при использовании инструментов для iOS][9] компании Apple. Вкратце вам нужно выполнить следующие действия перед развертыванием:

 [9]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Присоединяйтесь к компании Apple iOS разработчик программы.

2.  Создайте *профиль подготовки* в [iOS Provisioning портал][10]. Вы можете использовать его *Развития провизионирования помощник* для создания и установки профиля и сертификат Xcode требует.

3.  Убедитесь, что раздел *Подписи кода* *Удостоверения подписи кода* в параметры проекта для провизионирования имя профиля.

 [10]: https://developer.apple.com/ios/manage/overview/index.action

Чтобы развернуть на устройстве:

1.  Используйте кабель USB, подключите устройство к ваш Mac.

2.  Выберите имя проекта в окне Xcode **схема** раскрывающемся списке.

3.  Выберите устройство из списка **устройств** . Если он подключен через USB, но по-прежнему не отображается, нажмите кнопку **Организатор** для устранения любых ошибок.

4.  Нажмите на кнопку **Run** для построения, развертывания и запуска приложения на вашем устройстве.

## Общие проблемы

**Предупреждение об устаревании**: когда интерфейс программирования приложения (API) изменяется или заменяется другим API, он помечается как *deprecated*. API по-прежнему работает в ближайшем будущем, но со временем удаляется. Некоторые из этих устаревших интерфейсов отражаются в Apache Cordova, и Xcode выдает предупреждения о них, когда вы собираете и развертываете приложение.

Xcode предупреждение о методе `invokeString`, касается функциональности, которая запускает приложение по пользовательскому URL-адресу. В то время как механизм для загрузки из пользовательских URL-адресов изменился, этот код по-прежнему присутствует и предоставлять функциональность обратной совместимости для приложений, созданные с более старыми версиями Cordova. Пример приложения не использует эту функциональность, поэтому эти предупреждения можно игнорировать. Чтобы избежать отображения этих предупреждений, удалите код, который ссылается на устаревшие invokeString API:

*   Отредактируйте файл *Classes/MainViewController.m* , окружают следующий блок кода с `/*` и `*/` комментарии, как показано ниже, затем введите **Command-s** , чтобы сохранить файл:

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }

*   Отредактируйте файл *Classes/AppViewDelegate.m* , закомментируйте следующую строку, вставляя двойной косой черты, как показано ниже, а затем введите **Command-s** , чтобы сохранить файл:

        //self.viewController.invokeString = invokeString;

*   Нажмите **Command-b** , перестройте проект и устранить эти предупреждения.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Отсутсвующие заголовки**: ошибки компиляции, связанные с недостающими заголовками в результате проблем с расположение сборки и может быть исправлено через настройки Xcode:

1.  Выберите **Xcode → настройки → места**.

2.  В разделе **Данные** нажмите кнопку **Дополнительно** и выберите **уникальный** как **Расположение сборки** , как показано здесь:

    ![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

Это параметр по умолчанию для новой установки Xcode, но он может быть установлен по-другому после обновления старой версии Xcode.

Для получения дополнительной информации обратитесь к документации компании Apple:

*   [Начало разработки iOS приложений сегодня][12] предоставляет быстрый обзор шагов для разработки iOS приложения.

*   [Член центра Домашняя страница][13] содержит ссылки на несколько iOS технических ресурсов, включая технические ресурсы, подготовки портала, распространения руководств и форумы сообщества.

*   [Инструменты рабочего процесса руководства для iOS][9]

*   [Руководство пользователя Xcode][14]

*   [Видеосессии][15] от Всемирной Конференции Разработчиков Apple 2012 (WWDC2012)

*   [Команда xcode-select][16], которая помогает указать правильную версию Xcode, если более чем одна версия установлена.

 [12]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [13]: https://developer.apple.com/membercenter/index.action
 [14]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [15]: https://developer.apple.com/videos/wwdc/2012/
 [16]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac®, OS X®, Apple®, Xcode®, App Store℠, iPad®, iPhone®, iPod® и Finder® являются товарными знаками Apple Inc.)
