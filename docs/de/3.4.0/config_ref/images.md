---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Finden Sie verteilte mit dieser Arbeit für weitere Informationen bezüglich Urheberrecht und Datenschutz-Datei. Die ASF-Lizenzen-diese Datei, um Sie unter der Apache License, Version 2.0 (die "Lizenz"); Sie können diese Datei nur in Übereinstimmung mit der Lizenz. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Symbole und Splash-Screens

In diesem Abschnitt veranschaulicht, wie einer app-Symbol und optionale Splash-Screen für verschiedene Plattformen, sowohl bei der Arbeit in Cordova CLI (beschrieben in The Command-Line Interface) konfigurieren oder mit plattformspezifischen SDK-Tools (ausführlich in den Plattform-Führern).

## Symbole in der CLI konfigurieren

Bei der Arbeit im CLI Icon-Quellcode-Dateien liegen in verschiedenen plattformspezifischen Unterverzeichnissen im Rahmen des Projektes `www/res/icons` Verzeichnis. Neu erstellte Projekte verfügen über einen Standardsatz von Cordova Symbole für Sie für die Plattformen ersetzen möchten Sie als Ziel.

Android gibt Symbole für niedrige, mittlere, hohe und besonders hoher Auflösungen:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

Die iOS-Plattform gibt 72 Pixel-quadratischen Icons für iPads und 57 Pixel Icons für iPhones und iPods, mit hochauflösenden *2 X* Varianten für Netzhaut zeigt:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone gibt ein Standardsymbol 48 Pixel, zusammen mit verschiedenen Geräten Hintergrund Fliesen Bilder beim Anwendungen darstellen:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

BlackBerry 10 erfordert eine Icon-Element in config.xml:

        <icon src="blackberry10/icon-86.png" />
    

Finden Sie BlackBerry Dokumentation Tareting, mehrere Größen und Gebietsschemas.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen erfordert ein 128 Pixeln-Symbol:

        tizen/icon-128.png
    

## Splash-Screens in der CLI konfigurieren

Verwenden Sie die Splashscreen-API, um die Anzeige von einer app einleitende Begrüßungsbildschirm auf vielen Plattformen ermöglichen. Bei der Arbeit im CLI Splash-Bildschirm-Quelldateien befinden sich im Rahmen des Projektes `www/res/screens` Unterverzeichnis.

Android gibt sowohl Hochformat und Querformat Splash-Bildschirm-Images für niedrige, mittlere, hohe und besonders hoher Auflösungen:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Die iOS-Plattform gibt Varianten für iPhone/iPod und iPad, mit Varianten für Retina-Displays und verschiedenen Ausrichtungen. Die *568 h* -Datei gilt für das iPhone 5 größer Bildschirm:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone gibt ein einzelnes Splash-Bildschirm-Image:

        windows-phone/screen-portrait.jpg
    

In den folgenden Abschnitten ausführlich auf Splash-Screens einrichten, beim Arbeiten mit SDKs und verwandte Befehlszeilentools in Plattform Leitfäden beschrieben.

Vergessen Sie nicht, das SplashScreen-Plugin zu installieren, bevor Sie versuchen, verwenden Sie die `navigator.splashscreen.hide()` oder `navigator.splashscreen.show()` Methoden.

## Splash-Screens für die Android-Plattform

Platz [9-Patch][1] Bilddateien im Android-Projekt `platforms/android/res/drawable*` Verzeichnisse.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Für jeden sollte sein:

*   XLarge (Xhdpi): mindestens 960 × 720
*   große (Hdpi): mindestens 640 × 480
*   Medium (Mdpi): mindestens 470 × 320
*   klein (Ldpi): mindestens 426 × 320

Wenn Sie Standard-Splash-Bildschirm-Images bereitgestellt in Cordova verwenden möchten, müssen Sie kopieren die PNG‑Dateien von `platforms/android/www/res/screen/android` zu `platforms/android/res/drawable*/` :

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
    

Die `drawable` Verzeichnisnamen müssen folgen den Android Konventionen zur Unterstützung der [Bildschirmgrößen][2] und [Alternative Ressourcen][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

In `config.xml` , fügen Sie die folgenden Einstellungen:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

Die erste Zeile legt das Bild fest als den Begrüßungsbildschirm anzuzeigen. Dies ist der Dateiname der PNG in den `drawable*` Verzeichnissen. Wenn Sie das Bild alles andere als nennen, `splash.png` , müssen Sie diese Zeile ändern. Enthalten nicht die Dateinamenerweiterung (d.h. `.png` ). Wenn Sie die Standard-Splash-Screens in Cordova oben aufgeführten bereitgestellten verwenden möchten, verwenden Sie den Wert`screen`.

Der zweiten Zeile wird die Standardverzögerung der Splashscreen in Millisekunden wie lange angezeigt wird. Dies sollte die maximale erwartete Startzeit. Der Standardwert für SplashScreenDelay ist 3000 ms.

Schließlich sollte der Begrüßungsbildschirm vorhanden nur so lange wie nötig sein. Wenn Ihre app begonnen hat und die Webview geladen hat, sollte Ihre Anwendung den Splash-Screen ausblenden, sodass Hauptansicht angezeigt wird. Da die Startzeit der app ziemlich aufgrund zahlreicher Faktoren variieren, es wird empfohlen, Ihre Anwendung explizit aufrufen `navigator.splashscreen.hide()` in der Javascript-Methode, die auf reagiert das `deviceready` Ereignis. Ansonsten werden der Splash-Screen für den SplashScreenDelay-Wert angezeigt, die Sie oben konfiguriert. Diese ereignisgesteuerten Ansatz wird dringend empfohlen, im Vergleich mit den Splash-Screen sichtbar für immer eine feste Laufzeit.

## Splash-Screens für die iOS-Plattform

Splash-Bildschirm-Images in des iOS-Projekts kopieren `Resources/splash` Verzeichnis. Fügen Sie nur diese Bilder für die Geräte, wie iPad oder iPhone unterstützen möchten. Die Größe der einzelnen Bilder sollten sein:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 Pixel)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Splash-Screens für die BlackBerry 10-Plattform

Fügen Sie eine Felge: Splash-Element zu "config.xml" für jede Auflösung und Gebietsschema, die Sie unterstützen möchten:

[http://Developer.BlackBerry.com/HTML5/Documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html