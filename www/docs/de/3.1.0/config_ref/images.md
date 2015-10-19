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

title: Symbole und Splash-Screens
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
    

BlackBerry erfordert ein 80-Pixel-Symbol:

        blackberry/icon-80.png
    

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
    

Die iOS-Plattform gibt Varianten für iPhone/iPod und iPad, mit Varianten für Retina-Displays und verschiedenen Ausrichtungen. Die *568 h* -Datei ist für das iPhone 5 größer Bildschirm angepasst:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

BlackBerry und Windows Phone geben Sie ein einzelnes Splash-Bildschirm-Image:

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

In den folgenden Abschnitten ausführlich auf Splash-Screens einrichten, beim Arbeiten mit SDKs und verwandte Befehlszeilentools in Plattform Leitfäden beschrieben.

## Splash-Screens für die Android-Plattform

Platz [9-Patch][1] Bilddateien im Android-Projekt `res/drawable` Verzeichnis. Für jeden sollte sein:

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   XLarge (Xhdpi): mindestens 960 × 720
*   große (Hdpi): mindestens 640 × 480
*   Medium (Mdpi): mindestens 470 × 320
*   klein (Ldpi): mindestens 426 × 320

In `config.xml` , fügen Sie die folgenden Einstellungen:

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

Die erste Zeile legt das Bild fest als den Begrüßungsbildschirm anzuzeigen. Wenn Sie Ihr Bild alles andere als nennen, `splash.png` , müssen Sie diese Zeile ändern.

Der zweiten Zeile wird die Verzögerung der Splashscreen in Millisekunden wie lange angezeigt wird. Um den Begrüßungsbildschirm zu entlassen, sobald die app erhält der `[deviceready](../cordova/events/events.deviceready.html)` Veranstaltung, Aufruf der `navigator.splashscreen.hide()` Methode.

## Splash-Screens für die iOS-Plattform

Kopieren Sie Ihre Bildschirm-Splash-Images in des iOS-Projekts `Resources/splash` Verzeichnis. Fügen Sie nur die Bilder für die Geräte, wie iPad oder iPhone unterstützen möchten. Die Größe der einzelnen Bilder sollten sein:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 Pixel)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Splash-Screens für die BlackBerry 10-Plattform

Kopieren Sie Ihre Bildschirm-Splash-Images in des Projekts `res/screen/blackberry10` Verzeichnis. Die Dateinamen sollten sein:

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)