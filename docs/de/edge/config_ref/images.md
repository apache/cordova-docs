* * *

Lizenz: eine oder mehrere Mitwirkende/r Lizenzverträge an die Apache Software Foundation (ASF) lizenziert. Finden Sie verteilte mit dieser Arbeit für weitere Informationen bezüglich Urheberrecht und Datenschutz-Datei. Die ASF-Lizenzen-diese Datei, um Sie unter der Apache License, Version 2.0 (die "Lizenz"); Sie können diese Datei nur in Übereinstimmung mit der Lizenz. You may obtain a copy of the License at

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

         < Plattformnamen = "Ios" ><!--iOS 7.0 +--> <!--iPhone / iPod Touch--> < Symbol src="res/ios/icon-60.png" Breite = "60" Height = "60" / >< Icon Src = "Res/Ios/icon-60@2x.png" Width = "120" Height = "120" / ><!--iPad--> < Symbol src="res/ios/icon-76.png" Breite = "76" Height = "76" / >< Icon Src = "Res/Ios/icon-76@2x.png" Width = "152" Height = "152" / ><!--iOS 6.1--> <!--Spotlight-Symbol--> < Symbol src="res/ios/icon-40.png" Breite = "40" Height = "40" / >
                  < Icon Src = "Res/Ios/icon-40@2x.png" Width = "80" Height = "80" / ><!--iPhone / iPod Touch--> < Symbol src="res/ios/icon.png" Breite = "57" Height = "57" / >< Icon Src = "Res/Ios/icon@2x.png" Width = "114" Height = "114" / ><!--iPad--> < Symbol src="res/ios/icon-72.png" Breite = "72" Height = "72" / >< Icon Src = "Res/Ios/icon-72@2x.png" Width = "144" Height = "144" / ><!--iPhone Spotlight und Symbol Einstellungen--> < Symbol src="res/ios/icon-small.png" Breite = "29" Height = "29" />< Icon Src = "Res/Ios/icon-small@2x.png" Width = "58" Height = "58" / ><!--iPad Spotlight und Symbol Einstellungen--> < Symbol src="res/ios/icon-50.png" Breite = "50" Height = "50" / >< Icon Src = "Res/Ios/icon-50@2x.png" Width = "100" Height = "100" / >< / Plattform >
    

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

In der obersten Ebene `config.xml` Datei (nicht diejenige in `platforms` ), Konfigurations-Elemente wie die hier angegebenen hinzufügen.

# Beispiel-Konfiguration

Bitte beachten Sie, dass der Wert des Attributs "Src" relativ zum Projektverzeichnis und nicht in das Www-Verzeichnis. Sie können das Quellbild benennen, was Sie wollen. Der interne Name in der app hängen von Cordova.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. Folgende werden unterstützt--> < splash src="res/screen/ios/Default~iphone.png" Breite = "320" Height = "480" / >< Spritzen src="res/screen/ios/Default@2x~iphone.png" Breite = "640" Height = "960" / >< Spritzen src="res/screen/ios/Default-Portrait~ipad.png" Breite = "768" Height = "1024" / >< splash src="res/screen/ios/Default-Portrait@2x~ipad.png" Breite = "1536" Height = "2048" / >< Spritzen src="res/screen/ios/Default-Landscape~ipad.png" Breite = "1024" Height = "768" / >< Spritzen src="res/screen/ios/Default-Landscape@2x~ipad.png" Breite = "2048" Höhe = "1536" / >< Spritzen src="res/screen/ios/Default-568h@2x~iphone.png" Width = "640" Height = "1136" / >< / Plattform >< Plattformnamen = "wp8" ><!--Bilder richten sich nach Breite und Höhe. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# Unterstützte Plattformen

Ab sofort (Cordova 3.5.0 Juli 2014) die folgenden Plattformen unterstützen Splash-Screens.

    android
    ios
    wp8
    windows8
    blackberry10
    

# SplashScreen-Plugin

Apache Cordova bietet auch spezielle Splash-Bildschirm-Plugin, das verwendet werden könnte, um programmgesteuert anzeigen und Ausblenden eines Begrüßungsbildschirms während Anwendung Start https://github.com/apache/cordova-plugin-splashscreen