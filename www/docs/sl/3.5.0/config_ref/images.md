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

# Ikone in brizg zaslon

To poglavje prikazuje, kako nastaviti app's ikona in neobvezno splash screen za različne platforme, tako pri delu v Cordova CLI (opisano v Command-Line Interface) ali orodji posamezne SDK (podrobno v platformo vodnikov).

## Konfiguriranje ikone v CLI

Pri delu v CLI, se nahajajo v različnih posamezne podimenikov v okviru projekta ikona izvorne datoteke `www/res/icons` directory. Novoustanovljeno projekti prišli s privzeti niz Cordova ikone za vas zamenjati za platforme, ki jih želite ciljati.

Android določa ikone za nizke, srednje, visoko, in ekstra visoke ločljivosti:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

Platformi iOS določa 72-pixel kvadratnih ikona zakaj iPads, in 57-pixel ikona zakaj iPhones ter iPods, z visoko ločljivostjo *2 x* variante za mrežnico prikaže:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone določa privzeto 48-pixel ikono, skupaj z različnih naprav ozadje polaganje ploščic slike uporablja ko predstavljajo aplikacije:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

BlackBerry 10 zahteva ikono element v config.xml:

        <icon src="blackberry10/icon-86.png" />
    

Dokumentaciji BlackBerry tareting več velikosti in locales.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen zahteva 128-pixel ikono:

        tizen/icon-128.png
    

## Konfiguriranje brizg zaslon v CLI

Uporabite Splashscreen API omogočiti prikaz app's uvodno brizg zaslon na mnogih platformah. Pri delu v CLI, splash screen izvorne datoteke se nahajajo v okviru projekta `www/res/screens` podimeniku.

Android določa tako pokončno in ležeče usmerjene Uprskati zaslon slike za nizke, srednje, visoko, in ekstra visoke ločljivosti:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

Platformi iOS določa variante za iPhone/iPod in iPad, z variante za mrežnico zaslonov in različnih usmeritev. *568 H* datoteke se uporablja za iPhone 5's višji zaslon:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone določa enotni Uprskati zaslon sliko:

        windows-phone/screen-portrait.jpg
    

V nadaljevanju podrobno kako vzpostaviti brizg zaslon, ko dela s SDK in sorodnih orodij ukazne vrstice iz platformo vodniki.

Ne pozabite, da namestite SplashScreen plugin spredaj težaven rabiti na `navigator.splashscreen.hide()` ali `navigator.splashscreen.show()` metode.

## Brizg zaslon za Android platformo

Mesto [9-obliž slikovne][1] datoteke v projektu Android `platforms/android/res/drawable*` imenikov.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Mora biti velikost za vsako:

*   xlarge (xhdpi): vsaj 960 x 720
*   veliki (hdpi): vsaj 640 × 480
*   srednje (mdpi): vsaj 470 × 320
*   mala (ldpi): vsaj 426 × 320

Če želite uporabiti privzeto Uprskati zaslon slike v Cordova, boste morali kopirati datoteke png od `platforms/android/www/res/screen/android` do `platforms/android/res/drawable*/` :

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
    

V `drawable` Imena imenikov mora slediti Android konvencij za podporo [velikosti zaslona][2] in [nadomestnih virov][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

V `config.xml` , dodajte naslednje nastavitve:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

V prvi vrstici nastavi sliko za prikaz kot brizg zaslon. To je ime datoteke png v v `drawable*` imenikov. Če hočete sliko ničesar drugega kot `splash.png` , morate spremeniti to vrstico. Ne vključujejo pripono (tj, `.png` ). Če želite uporabiti privzeto brizg zaslon, v Cordova, kot je navedeno zgoraj, uporabite vrednost`screen`.

V drugi vrstici določa privzeto zamudo doklej splashscreen pojavi v milisekundah. To bi moralo biti maksimalno pričakovanih začetni čas. Privzeta vrednost za SplashScreenDelay je 3000 ms.

Nazadnje za─ìetni zaslon je prisoten samo tako dolgo, kot je potrebno. Ko vaš app je začela in je naložen na spletni pogled, naj vaš app skriti brizg zaslon, tako da vaš glavni pregled je vidna. Ker čas začetka app bo precej malo razlikujejo zaradi številnih dejavnikov, je priporočljivo, da vaš app izrecno sklicevati `navigator.splashscreen.hide()` v Javascript metode, ki se odzove na `deviceready` dogodek. Sicer brizg zaslon bo vidna SplashScreenDelay vrednost, ki ste ga konfigurirali zgoraj. Ta dogodek usmerjen pristop je zelo priporočljivo versus ob brizg zaslon viden za vedno določen čas.

## Brizg zaslon za iOS platformi

Kopirajte Uprskati zaslon slike v projektu iOS `Resources/splash` imenik. Dodajte le tiste slike za naprave, ki jih želite podporo, kot je iPad ali iPhone. Mora biti velikost vsako sliko:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (2048 x 1496 pixels)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Brizg zaslon za BlackBerry 10 platformo

Dodajte element platišča: splash»config.XML«za vsako resolucijo in področne nastavitve, ki jih želijo podpreti:

[http://developer.BlackBerry.com/HTML5/documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html