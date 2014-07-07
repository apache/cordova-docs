* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Finden Sie verteilte mit dieser Arbeit für weitere Informationen bezüglich Urheberrecht und Datenschutz-Datei. Die ASF-Lizenzen-diese Datei, um Sie unter der Apache License, Version 2.0 (die "Lizenz"); Sie können diese Datei nur in Übereinstimmung mit der Lizenz. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Symbole und Splash-Screens

In diesem Abschnitt veranschaulicht, wie einer app-Symbol und optionale Splash-Screen für verschiedene Plattformen, sowohl bei der Arbeit in Cordova CLI (beschrieben in The Command-Line Interface) konfigurieren oder mit plattformspezifischen SDK-Tools (ausführlich in den Plattform-Führern).

## Symbole in der CLI konfigurieren

Beim Arbeiten in der CLI Sie können definieren app obige über `<icon>` Element ( `config.xml` ). Wenn Sie kein Symbol angeben ist das Apache-Cordova-Logo verwendet.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

Src: (erforderlich) gibt den Speicherort der Bilddatei, im Verhältnis zu Ihrem Projektverzeichnis

Plattform: (optional) Zielplattform

Breite: (optional) Symbol Breite in Pixeln

Höhe: (optional) Symbol Höhe in Pixel

Dichte: (optional)-Android-spezifisch, gibt Symbol Dichte

Die folgende Konfiguration kann verwendet werden, einzelne Standard-Icon zu definieren, die für alle Plattformen verwendet werden.

        <icon src="res/icon.png" />
    

Für jede Plattform können Sie auch eine pixelgenaue Icons set an unterschiedliche Bildschirmauflösungen angepasst definieren.

Amazon Fire OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

Finden Sie BlackBerry Dokumentation gezielt mehrere Größen und Gebietsschemas. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

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

Wenn Sie ein neues Android Projekt erstellen, der Standard-Splash-Screen Bilder, sofern in der Cordova Beispielanwendung bereits in vorhanden sein sollten die `platforms/android/res/drawable*` Verzeichnisse. Zögern Sie nicht, durch eigene Bilder ersetzen. Bei Ihrer eigenen Splash Bildschirm Bilder müssen Sie nicht die gleiche Permutation 8 als Cordova Standard sind hier zu bieten. Optimierung ist mehr oder weniger einsetzbar. Die `drawable` Verzeichnisnamen müssen folgen den Android Konventionen zur Unterstützung der [Bildschirmgrößen][2] und [Alternative Ressourcen][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

In der obersten Ebene `config.xml` Datei (nicht diejenige in `platforms` ), fügen Sie die folgenden Einstellungen:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

Die erste Zeile legt das Bild fest als den Begrüßungsbildschirm anzuzeigen. Dies ist der Dateiname der PNG in der `drawable*` Verzeichnisse, minus der `.png` Erweiterung. Der Standardwert für SplashScreen ist `screen` (für die Datei `platforms/android/res/drawable*/screen.png` ), also wenn Sie das Bild alles andere als nennen `screen.png` in der `drawable*` Verzeichnisse, Sie müssen diese Zeile hinzufügen/ändern.

Der zweiten Zeile wird die Standardverzögerung der Splashscreen in Millisekunden wie lange angezeigt wird. Dies sollte die Worst-Case erwarteten Startzeit. Der Standardwert für SplashScreenDelay ist 3000 ms.

Schließlich, als bewährte Methode sollte der Begrüßungsbildschirm vorhanden nur so lange wie nötig sein. Wenn Ihre app begonnen hat und die Webview geladen hat, sollte Ihre Anwendung den Splash-Screen ausblenden, sodass Hauptansicht angezeigt wird, sobald es fertig ist. Da die app-Startzeit aufgrund einer Reihe von Faktoren wie CPU-Geschwindigkeit und Netzwerk ziemlich unterschiedlich sind, wird empfohlen, dass Ihre app explizit aufrufen `navigator.splashscreen.hide()` in der JavaScript-Methode, die auf reagiert das `deviceready` Ereignis. Ansonsten wird der Begrüßungsbildschirm sichtbar sein für den SplashScreenDelay-Wert, dem Sie oben konfiguriert die dürfte länger als nötig. Diese ereignisgesteuerten Ansatz wird dringend empfohlen, im Vergleich mit den Splash-Screen sichtbar für immer eine feste Laufzeit.

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