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

# iOS платформы

В этом руководстве показано, как настроить среду разработки SDK для развертывания приложений Cordova для iOS-устройств, таких как iPhone и iPad. Смотрите ниже для более подробной информации конкретной платформы:

*   iOS конфигурации
*   Обновление iOS
*   iOS WebViews
*   iOS, плагины
*   iOS утилиты командной строки

Средства командной строки относятся к версии до 3.0 Кордова. Смотрите информацию о текущем интерфейсе интерфейс командной строки.

## Требования и поддержка

Apple ® инструменты, необходимые для создания приложений iOS, выполняться только в операционной системе OS X на компьютерах Mac на базе Intel. Xcode ® 4.5 (минимальная требуемая версия) работает только на OS X 10.7 (Lion) версии или выше и включает в себя iOS 6 SDK (Software Development Kit). Чтобы отправить приложений в Apple App Store℠ требует последние версии средств Apple.

Вы можете проверить многие из функций Cordova, используя эмулятор iOS установлен с iOS SDK и Xcode, но вам нужно реальное устройство полностью проверить все функции устройства приложения перед отправкой в App Store. Устройство должно иметь по крайней мере iOS 5.x установлен, минимальный iOS версии поддерживается начиная с Cordova 2.3. Вспомогательные устройства включают все iPad ® модели, iPhone ® 3GS и выше и iPod ® Touch 3-го поколения или более поздней версии. Для установки приложений на устройство, необходимо также быть членом компании Apple [iOS разработчик программы][1], которая стоит $99 в год. В этом руководстве показано, как развернуть приложения в эмуляторе iOS, для которого не нужно зарегистрироваться в программе developer.

 [1]: https://developer.apple.com/programs/ios/

## Установите SDK

Существует два способа для загрузки Xcode:

*   из [App Store][2], доступных путем поиска «Xcode» в приложение **App Store** .

*   от [Apple Developer Скачиваний][3], который требует регистрации в качестве разработчиков Apple.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

После установки Xcode, несколько средств командной строки нужно быть включен для Cordova для запуска. **Xcode** меню выберите **настройки**, а затем вкладку **загрузок** . С панели « **компоненты** » нажмите кнопку **установить** рядом с **Инструменты командной строки** листинга.

## Откройте проект в SDK

Использование `cordova` утилита для настройки нового проекта, как описано в Cordova интерфейс командной строки. Например в каталоге исходного кода:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


Как только создан, его можно открыть из в Xcode. Дважды щелкните, чтобы открыть `hello/platforms/ios/hello.xcodeproj` файл. Экран должен выглядеть следующим образом:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Развертывание в эмулятор

Для предварительного просмотра приложения в эмуляторе iOS:

1.  Убедитесь, что на левой панели выбран файл *.xcodeproj* .

2.  Выберите приложение **hello** на панели справа.

3.  Выберите предполагаемый устройство из меню **схема** панели инструментов, таких как iPhone 6.0 симулятор как подчеркнул здесь:

    ![][5]

4.  Нажмите кнопку **Run** , который появляется в панели же для левой части **схемы**. Это строит, развертывает и запускает приложение в эмуляторе. Отдельный эмулятор приложение открывает для отображения приложения:

    ![][6]

    Только один эмулятор может выполняться одновременно, так что если вы хотите протестировать приложение в эмуляторе другой, вам нужно выйти из эмулятора приложения и запускать различные цели в пределах Xcode.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode поставляется в комплекте с эмуляторов для последней версии iPhone и iPad. Более старые версии могут быть доступны из **Xcode → настройки → загружает компоненты →** группа.

## Развертывание на устройство

Подробные сведения о различных требований для развертывания на устройстве можно найти в разделе *Настройка развития и распределения активов* [Инструментов рабочего процесса руководства для iOS][7]Apple. Вкратце вам нужно выполнить следующие действия перед развертыванием:

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Присоединяйтесь к компании Apple iOS разработчик программы.

2.  Создайте *профиль подготовки* в [iOS Provisioning портал][8]. Вы можете использовать его *Развития провизионирования помощник* для создания и установки профиля и сертификат Xcode требует.

3.  Убедитесь, что раздел *Подписи кода* *Удостоверения подписи кода* в параметры проекта для провизионирования имя профиля.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

Чтобы развернуть на устройстве:

1.  Используйте кабель USB, подключите устройство к ваш Mac.

2.  Выберите имя проекта в окне Xcode **схема** раскрывающемся списке.

3.  Выберите устройство из списка **устройств** . Если он подключен через USB, но по-прежнему не отображается, нажмите кнопку **Организатор** для устранения любых ошибок.

4.  Нажмите на кнопку **Run** для построения, развертывания и запуска приложения на вашем устройстве.

## Общие проблемы

**Соответствующие предупреждения**: когда приложение интерфейс программирования (API) изменить или заменить другим API, он помечен как *устаревшие*. API по-прежнему работает в ближайшем будущем, но в конечном итоге удаляется. Некоторые из этих устаревших интерфейсов отражены в Apache Cordova, и Xcode выдает предупреждения о них, когда вы построить и развернуть приложение.

Xcode предупреждение о `invokeString` метод касается функциональность, которая запускает приложение из пользовательского URL-адреса. В то время как механизм для загрузки из пользовательских URL-адрес изменился, этот код по-прежнему присутствует предоставлять обратную функциональность для приложений, созданных в старых выпусках Cordova. Образец приложения не использует эту функциональность, поэтому эти предупреждения можно игнорировать. Чтобы избежать отображения этих предупреждений, удалите код, ссылающийся на устаревшие invokeString API:

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

**Отсутствуют заголовки**: ошибки компиляции, связанные с недостающих заголовков в результате проблем с места построения и может быть установлена через Xcode предпочтения:

1.  Выберите **Xcode → настройки → места**.

2.  В разделе **Данные** нажмите кнопку **Дополнительно** и выберите **уникальный** как **Расположение сборки** , как показано здесь:

    ![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

Это параметр по умолчанию для новой установки Xcode, но он может быть установлен по-другому после обновления с более старой версии Xcode.

Для получения дополнительной информации обратитесь к документации компании Apple:

*   [Начало разработки iOS приложений сегодня][10] предоставляет быстрый обзор шагов для разработки iOS приложения.

*   [Член центра Домашняя страница][11] содержит ссылки на несколько iOS технических ресурсов, включая технические ресурсы, подготовки портала, распространения руководств и форумы сообщества.

*   [Инструменты рабочего процесса руководства для iOS][7]

*   [Xcode 4 Руководство пользователя][12]

*   [Сессии видео][13] от Apple Всемирной широкий разработчика конференции 2012 (WWDC2012)

*   Установлена [xcode выберите команду][14], которая помогает указать правильную версию Xcode, если более чем один.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac OS X ®, Mac ® Apple ®, Xcode ®, App Store℠, iPad ®, iPhone ®, iPod ® и Finder ® являются товарными знаками Apple Inc.)
