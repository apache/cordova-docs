* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Ikony i ekrany powitalne w aplikacjach

Ta sekcja pokazuje jak skonfigurować ikonę aplikacji i opcjonalne opryskać tęcza na różnych platformach, zarówno podczas pracy w consoli Cordova (opisane w interfejs wiersza poleceń) lub przy użyciu narzędzi zestawu SDK platformy (szczegóły w dziale poradniki platformy).

## Konfigurowanie ikony w consoli

Kiedy pracuje w consoli można zdefiniować ikona aplikacji przez `<icon>` elementu ( `config.xml` ). Jeśli nie określisz ikona logo Apache Cordova jest używany.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (wymagane) określa lokalizację pliku obrazu, do katalogu projektu

Platforma: platformą docelową (opcjonalnie)

szerokość: (opcjonalne) ikona szerokość w pikselach

wysokość: (opcjonalne) ikona wysokość w pikselach

gęstość: (opcjonalne) android specyficzne, określa gęstość ikona

Następująca konfiguracja może służyć do określenia jednej domyślnej ikony, która będzie używana dla wszystkich platform.

        <icon src="res/icon.png" />
    

Dla każdej platformy, można również zdefiniować ikony idealny zestaw do różnych rozdzielczościach ekranu.

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
    

Dokumentacji BlackBerry do kierowania w wielu rozmiarach i ustawień regionalnych. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         < nazwa platformy = "ios" ><!--iOS 7.0 +--> <!--iPhone / iPod Touch--> < ikona src="res/ios/icon-60.png" szerokość = wysokość "60" = "60" / >< ikona src = szerokość "res, ios, icon-60@2x.png" = "120" wysokość = "120" / ><!--iPad--> < ikona src="res/ios/icon-76.png" szerokość = "76" wysokość = "76" / >< ikona src = szerokość "res, ios, icon-76@2x.png" = "152" wysokość = "152" / ><!--iOS 6.1--> <!--Spotlight ikona--> < ikona src="res/ios/icon-40.png" szerokość = wysokość "40" = "40" / >
                  < ikona src = szerokość "res, ios, icon-40@2x.png" = "80" wysokość = "80" / ><!--iPhone / iPod Touch--> < ikona src="res/ios/icon.png" szerokość = wysokość "57" = "57" / >< ikona src = szerokość "res, ios, icon@2x.png" = "114" wysokość = "114" / ><!--iPad--> < ikona src="res/ios/icon-72.png" szerokość = wysokość "72" = "72" / >< ikona src = szerokość "res, ios, icon-72@2x.png" = "144" wysokość = "144" / ><!--iPhone Spotlight i ikonę ustawienia--> < ikona src="res/ios/icon-small.png" szerokość = "29" wysokość = "29" />< ikona src = szerokość "res, ios, icon-small@2x.png" = "58" wysokość = "58" / ><!--iPad Spotlight i ikonę ustawienia--> < src="res/ios/icon-50.png ikona" szerokość = wysokość "50" = "50" / >< ikona src = szerokość "res, ios, icon-50@2x.png" = "100" wysokość = "100" / >< / platformy >
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Phone8 systemu Windows

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
    

## Konfigurowanie ekrany powitalne w aplikacjach w consoli

W najwyższego poziomu `config.xml` pliku (nie ten w `platforms` ), dodać elementy konfiguracji, takie jak te określone w tym miejscu.

# Przykład konfiguracji

Proszę zauważyć, że wartość atrybutu "src" jest katalogiem projektu, a nie do katalogu www. Możesz wymienić obrazu źródłowego cokolwiek chcesz. Nazwa wewnętrzna w aplikacji są określane przez Cordova.

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
        <!-- images are determined by width and height. Obsługiwane są następujące--> < opryskać src="res/screen/ios/Default~iphone.png" szerokość = "320" wysokość = "480" / >< powitalny src="res/screen/ios/Default@2x~iphone.png" szerokość = "640" wysokość = "960" / >< powitalny src="res/screen/ios/Default-Portrait~ipad.png" szerokość = "768" wysokość = "1024" / >< powitalny src="res/screen/ios/Default-Portrait@2x~ipad.png" szerokość = "1536" wysokość = "2048" / >< powitalny src="res/screen/ios/Default-Landscape~ipad.png" szerokość = "1024" wysokość = "768" / >< opryskać src="res/screen/ios/Default-Landscape@2x~ipad.png" szerokość = "2048" wysokość = "1536" / >< powitalny src="res/screen/ios/Default-568h@2x~iphone.png" szerokość = wysokość "640" = "1136" / >< / platformy >< platformy nazwa = "wp8" ><!--obrazy są ustalane przez szerokość i wysokość. The following are supported -->
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
    

# Obsługiwane platformy

W chwili obecnej (Cordova 3.5.0 lipca 2014 roku) następujących platformach obsługuje ekrany powitalne w aplikacjach.

    android
    ios
    wp8
    windows8
    blackberry10
    

# Plugin ekranu powitalnego

Apache Cordova oferuje również specjalny powitalny ekran wtyczki, które mogą być wykorzystane do programowego wyświetlania i ukrywania ekran powitalny podczas uruchamiania aplikacji https://github.com/apache/cordova-plugin-splashscreen