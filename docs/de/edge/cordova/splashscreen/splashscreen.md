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

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android (in`res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.splashscreen.SplashScreen" />
        </feature>
        

*   iOS (im Verzeichnis Anwendung mit Namen`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Eine Übersicht finden Sie unter Plattform-Support.

Informationen zum konfiguriert diese Bilder finden Sie unter Symbole und Splash-Screens.