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

Amazon ogień OS

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

Użyj ekranu powitalnego API umożliwiające wyświetlanie ekranu powitalnego wprowadzające aplikacji na wielu platformach. Podczas pracy w consoli opryskać tęcza pliki źródłowe znajdują się w ramach projektu `www/res/screens` podkatalogu.

Android określa zarówno portret i krajobraz zorientowana powitalny ekran obrazy o niskiej, średniej, wysokiej i bardzo wysokiej rozdzielczości:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Platformy iOS określa warianty dla iPhone/iPod i iPad, warianty wyświetla siatkówki i inne kierunki. Plik *568 h* stosuje się wyższy ekran iPhone 5:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone określa pojedynczy znajdowa:

        windows-phone/screen-portrait.jpg
    

W poniższych sekcjach opisano, jak skonfigurować ekrany powitalne w aplikacjach podczas pracy z SDK i pokrewne narzędzia wiersza polecenia opisane w przewodnikach platformy.

Nie zapomnij zainstalować wtyczki ekranu powitalnego przed trudny wobec używać `navigator.splashscreen.hide()` i `navigator.splashscreen.show()` metody.

## Ekrany powitalne w aplikacjach na platformie Android

Miejsce [9-łatka wyobrażenie o osobie][1] akta w projekcie Android `platforms/android/res/drawable*` katalogów.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Rozmiar dla każdego powinno być:

*   xlarge (xhdpi): co najmniej 960 x 720
*   duże (hdpi): co najmniej 640 x 480
*   Średni (mdpi): co najmniej 470 × 320
*   mały (ldpi): co najmniej 426 x 320

Podczas tworzenia nowego projektu Android, ekran powitalny domyślne obrazy w Cordova przykładowej aplikacji powinny być już obecny w `platforms/android/res/drawable*` katalogów. Zapraszam zastąpić je z własnych zdjęć. Podczas tworzenia własnych rozchlapać obrazów z ekranu, nie trzeba podać sam permutacji 8 domyślnie Cordova te tutaj. Mniej lub bardziej służy optymalizacji. `drawable`Nazwy katalogów musi konwencjami Android dla [rozmiaru ekranu][2] i [alternatywnych zasobów][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

W najwyższego poziomu `config.xml` pliku (nie ten w `platforms` ), dodać następujące preferencje:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

Pierwszy wiersz ustawia obrazek, aby wyświetlić ekran powitalny. Jest to nazwa pliku PNG w `drawable*` katalogi, minus `.png` rozszerzenie. Wartość domyślna dla ekranu powitalnego jest `screen` (pliku `platforms/android/res/drawable*/screen.png` ), więc jeśli możesz wymienić obrazu nic innego niż `screen.png` w `drawable*` katalogi, ty potrzebować wobec dodać ten wiersz, modyfikować.

Drugi wiersz ustawia domyślne opóźnienie o ile pojawia się ekranu powitalnego w milisekundach. Powinno to być najgorszy start przewidywany czas. Wartość domyślna dla SplashScreenDelay jest 3000 ms.

Wreszcie, jako najlepsze praktyki ekran powitalny powinien znajdować się tylko tak długo jak to konieczne. Gdy Twoja aplikacja została uruchomiona i Widok sieci Web został załadowany, aplikacji należy ukryć opryskać tęcza, tak, że główny widok jest widoczny, tak szybko, jak to jest gotowy. Ponieważ czas rozpoczęcia aplikacji będzie różnić się trochę ze względu na wiele czynników, takich jak szybkość procesora i sieci, zalecane jest, że aplikacja jawnie wywołać `navigator.splashscreen.hide()` w metodzie JavaScript, który odpowiada `deviceready` zdarzenie. Inaczej ekran powitalny będą widoczne dla wartości SplashScreenDelay, który skonfigurowany powyżej, które prawdopodobnie dłużej niż jest to konieczne. Podejście to zdarzenie napędzana jest wysoce zalecane kontra konieczności ekran powitalny widoczny zawsze stały czas trwania.

## Ekrany powitalne w aplikacjach dla platformy iOS

Kopiowanie obrazów z ekranu powitalnego w projekcie iOS `Resources/splash` katalogu. Tylko dodać te obrazy dla urządzenia, które chcesz obsługiwać, iPad lub iPhone. Rozmiar każdego obrazu należy:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048x1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Ekrany powitalne w aplikacjach na platformie BlackBerry 10

Dodaj element obręczy: powitalny do pliku config.xml dla każdej rozdzielczości i ustawień regionalnych, które chcesz obsługiwać:

[http://developer.BlackBerry.com/HTML5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html