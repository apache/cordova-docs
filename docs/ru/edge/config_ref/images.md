---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Смотрите файл уведомления, распространяется с этой работой за дополнительной информацией относительно авторского права собственности. ASF лицензии этот файл вам под лицензией Apache версии 2.0 ("Лицензия"); Вы не можете использовать этот файл за исключением в соответствии с лицензией. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Иконки и заставки

В этом разделе показано, как настроить иконку приложения и необязательную заставку для различных платформ, как при работе с Cordova CLI (описано в разделе Интерфейс Командной Строки) так и с помощью средств SDK специфических для платформы (подробнее в разделе Руководство по поддерживаемым платформам).

## Настройка иконок в CLI

При работе в CLI, исходные файлы для иконок расположены в индивидуальных подкаталогах для каждой платформы, расположенных в каталоге `www/res/icons` проекта. Только что созданный проект, по умолчанию, идет с набором иконок Cordova, которые вы можете заменить для тех платформ на которых вы будете работать.

Android предусматривает иконки для низкого, среднего, высокого и сверхвысокого разрешения:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

Платформа iOS предусматривает квадратные иконки 72x72 пикселя иконок для iPads и 57x52 пикселей для iPhone и iPod, с вариантом иконок высокого разрешеня *2x* для Retina дисплеев:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone предусматривает значок по умолчанию 48x48 пикселей, наряду с различными изображениями плиток, используемых при представления приложения:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

Для BlackBerry 10 необходимо определить элемент icon в файле config.xml:

        <icon src="blackberry10/icon-86.png" />
    

Смотрите документацию BlackBerry для указания различных размеров и локалей.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen предусматривает 128x128 пиксельные иконки:

        tizen/icon-128.png
    

## Настройка заставки с помощью CLI

Используйте Splashscreen API для включения отображения приложения заставки на различных платформах. При работе в CLI, исходные файлы заставки расположены в рамках подкаталоге `www/res/screens` проекта.

Android указывает два набора заставок ориентированных на портретную и альбомную ориентацию, для низкого, среднего, высокого и сверхвысокого разрешения:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Платформы iOS определяет варианты для iPhone/iPod и iPad, с вариантами для retina дисплеев в различных ориентациях. *568 H* файл относится к более продолговатому экрану iPhone 5:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone определяет только один вариант заставки:

        windows-phone/screen-portrait.jpg
    

В следующих разделах раскрывается как настроить заставки, когда работаешь с использованием SDK и связанных с ними средств командной строки описанных в Руководстве по платформам.

Не забудьте установить плагин SplashScreen перед тем как использовать методы `navigator.splashscreen.hide()` или `navigator.splashscreen.show()`.

## Заставки для платформы Android

Разместите файлы [изображения 9-patch][1] в директории `platforms/android/res/drawable*` проекта на Android.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Размер для каждой директории должен быть следующим:

*   xlarge (xhdpi): по крайней мере 960 × 720
*   large (hdpi): по крайней мере 640 × 480
*   medium (mdpi): по крайней мере 470 × 320
*   small (ldpi): по крайней мере 426 × 320

Если вы хотите использовать заставку по умолчанию, предоставляемую с Cordova, вы должны скопировать png файлы из `platforms/android/www/res/screen/android` в `platforms/android/res/drawable*/`:

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

Имена под-директорий в директории `drawable` должны соответствовать конвенциям Android для поддержки [различных размеров экранов][2] и [файлов ресурсов][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

В `config.xml`, добавьте следующие значения:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

Первая строка указывает изображение которое отображать в качестве заставки. Это имя PNG файла в директориях `drawable*`. Если название файла изображения отличается от `splash.png`, вам необходимо изменить значение в данной строке. Не указывайте расширение файл (т.е., `.png`). Если вы хотите использовать заставку по умолчанию, предоставляемую с Cordova как указано выше, используйте значение `screen`.

Вторая строка устанавливает задержку по умолчанию, как долго заставка будет отображаться в миллисекундах. Значение должно содержать максимальное ожидаемое время загрузки приложение. Значение по умолчанию для SplashScreenDelay - 3000мс.

И наконец, заставки должны отображаться, только в том случае если это необходимо. Когда ваше приложение запустилось, и окно браузера загрузилось, ваше приложение должно скрывать заставку, чтобы ваш основной экран становился видимым. Из-за того что время загрузки приложения может различаться из-за различного набора параметров, рекомендуется чтобы ваше приложение явно вызывало `navigator.splashscreen.hide()` в Javascript методе который обрабатывает событие `deviceready`. В противном случае заставка будет отображаться в течении временного интервала определенного в значении SplashScreenDelay которое вы сконфигурировали выше. Этот событийно ориентированный подход, крайне рекомендуется в отличие от отображения заставки в течении фиксированного промежутка времени.

## Заставки для платформы iOS

Скопируйте изображения заставки в каталог `Resources/splash` проекта iOS. Добавьте изображения только для тех устройств, которые вы хотите поддерживать, например iPad или iPhone. Размер каждого изображения должен быть:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 пикселей)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Заставки для платформы BlackBerry 10

Добавьте элемент rim:splash в config.xml для каждого разрешения и локали, которые вы хотите поддерживать:

[http://developer.blackberry.com/html5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html