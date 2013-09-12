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

# SplashScreen

> Zeigt und verbirgt Begrüßungsbildschirm der Anwendung.

## Methoden

*   SplashScreen.Show
*   SplashScreen.Hide

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Eine Übersicht finden Sie unter Plattform-Support.

## Setup

### Android

1.  Kopieren Sie das Bild des Begrüßungsbildschirms in des Androiden-Projekts `res/drawable` Verzeichnis. Für jedes Bild sollte sein:

*   XLarge (Xhdpi): mindestens 960 × 720
*   große (Hdpi): mindestens 640 × 480
*   Medium (Mdpi): mindestens 470 × 320
*   klein (Ldpi): mindestens 426 × 320
    
    Sie sollten ein [Bild 9-Patch][1] für den Begrüßungsbildschirm verwenden.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  In der `onCreate` -Methode der Klasse, die erweitert `DroidGap` , fügen Sie die folgenden zwei Zeilen:
    
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    Die erste Zeile legt das Bild fest als Splashscreen anzeigen. Wenn Sie Ihr Bild alles andere als nennen `splash.png` , müssen Sie diese Zeile ändern. Die zweite Zeile ist die normale `super.loadUrl` Linie, aber es hat einen zweiten Parameter, der angibt, einen Timeoutwert für den Splash-Screen. In diesem Beispiel zeigt den Begrüßungsbildschirm für 10 Sekunden. Um den Begrüßungsbildschirm zu entlassen, sobald die app erhält der `deviceready` Veranstaltung, Aufruf der `navigator.splashscreen.hide()` Methode.

### iOS

Kopieren Sie Ihre Bildschirm-Splash-Images in des iOS-Projekts `Resources/splash` Verzeichnis. Fügen Sie nur die Bilder für die Geräte, wie iPad oder iPhone unterstützen möchten. Die Größe der einzelnen Bilder sollten sein:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)