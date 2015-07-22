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

# iOS spletni pogledi

To poglavje prikazuje kako vlagati Cordova omogočen spletni pogled komponente znotraj večje iOS aplikacije. Podrobnosti o tem, kako te komponente lahko komunicirajo med seboj, si oglejte Uporaba Plugins.

Podpora za iOS spletni pogledi začel z Cordova prevod 1.4, using a `Cleaver` komponento, za katero predlogo Xcode služi kot referenčno izvedbo. Cordova 2.0 in novejše različice podpirajo le Mesarski nož izvajanja podprojekta, ki temelji.

Ta navodila zahtevajo vsaj Cordova 2.3 in Xcode 4.5, skupaj z a `config.xml` datoteko iz projekta novoustanovljeno iOS. Uporabite lahko postopek v vmesnik ukazne vrstice ustvariti nov projekt, nato pa pridobite na `config.xml` datoteko iz znotraj imenovanega vloga subdirectory v`platforms/ios`.

Sledite tem navodilom, poskrbite, da imate najnovejšo distribucijo Cordova. Travnato gričevje to s [cordova.apache.org][1] ter odpreti patentno zadrgo svoj paket iOS.

 [1]: http://cordova.apache.org

## Dodajanje sekač Xcode projekta (CordovaLib podprojekt)

1.  Če se izvaja, zaprite Xcode.

2.  Plan a semestralen ter pluti v izvorni imenik za Cordova iOS.

3.  Izvod v `config.xml` datoteko, opisanih v imeniku projekta.

4.  Odprite Xcode in uporabiti Finder kopirati v `config.xml` datoteke v oknu **Navigator projekta** .

5.  Izberite **Ustvari skupine za vse dodane mape** in pritisnite **konča**.

6.  Uporabite Finder za kopiranje na `CordovaLib/CordovaLib.xcodeproj` datoteko v Xcode's **Projekta Navigator**

7.  Izberite `CordovaLib.xcodeproj` v okviru **projekta Navigator**.

8.  Vnesite kombinacijo tipk **možnost-ukaz-1** razkazati **Nadzornik datoteko**.

9.  Izberite **glede na skupine** v **Datoteko inšpektor** za spustni meni za **lokacijo**.

10. Izberite **ikono projekta** v **Projekt Navigator**, izberite **cilj**, nato pa izberite zavihek **Nastavitve graditi** .

11. Dodaj `-force_load` in `-Obj-C` za vrednost **Drugih Povezivač zastavic** .

12. Kliknite na **ikono projekta** v projekt Navigator, izberite **cilj**, nato pa izberite zavihek **Izgradnjo faze** .

13. Razširite **Link Binaries s knjižnicami**.

14. Izberite **+** gumb, in dodajte naslednje **okvire**. Po želji v okviru **Projekta Navigator**, jih premaknete v skupini **okvirov** :
    
        AddressBook.framework
        AddressBookUI.framework
        AudioToolbox.framework
        AVFoundation.framework
        CoreLocation.framework
        MediaPlayer.framework
        QuartzCore.framework
        SystemConfiguration.framework
        MobileCoreServices.framework
        CoreMedia.framework
        

15. Razširite **Ciljne odvisnosti**, zgornje polje s to oznako, če obstaja več kot eno polje.

16. Izberite **+** gumb, in dodamo na `CordovaLib` graditi izdelek.

17. Razširite **Link Binaries s knjižnicami**, zgornje polje s to oznako, če obstaja več kot eno polje.

18. Izberite **+** gumb, in dodamo`libCordova.a`.

19. Nastavite na **Xcode nastavitve → lokacijah → pridobljenih podatkov → Advanced...** **edinstvene**.

20. Izberite **ikono projekta** v projekt Navigator, izberite vašo **ciljno**, nato pa izberite zavihek **Nastavitve graditi** .

21. Iskanje **poti iskanja glavo**. Nastavitve, dodajte te tri vrednosti spodaj, vključno navajati:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Od Cordova 2.1.0, `CordovaLib` has been vzpenjajoč se rabiti **Samodejno Reference štetje (ARC)**. Vam ni treba nadgraditi na **lok** za uporabo `CordovaLib` , vendar če želite nadgraditi svoj projekt za uporabo **ARC**, uporabite čarovnika za migracije Xcode iz je **Uredi → Refactor → pretvori v Objective-C ARC...** meni, **de-izberite libCordova.a**, nato zaženite čarovnik za dokončanje.

## Z uporabo CDVViewController

1.  Dodajte naslednje glavo:
    
        #import <Cordova/CDVViewController.h>
        

2.  Instantiate a nov `CDVViewController` in obdržati nekje, npr., da razred lastnine:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Po želji lahko nastavite na `wwwFolderName` premoženja, ki je privzeto `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Po izbiri iz začetne strani v `config.xml` datoteke `<content>` tag, bodisi lokalno datoteko:
    
        <content src="index.html" />
        
    
    .. ali oddaljenem mestu:
    
        <content src="http://apache.org" />
        

5.  Po želji lahko nastavite na `useSplashScreen` premoženja, ki je privzeto `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Nastavite **pogled okvir**. Vedno nastavite to lastnost zadnji:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Sekač dodati pogled:
    
        [myView addSubview:viewController.view];
        

## Dodajanje HTML, CSS in JavaScript sredstev

1.  Ustvarite nov imenik v okviru projekta, `www` na primer.

2.  Mesto HTML, CSS in JavaScript sredstev v ta imenik.

3.  Kopiranje imenika v Xcode's **Projekta Navigator** okno uporabite Finder.

4.  Izberite **ustvari mapo referenc za vse dodane mape**.

5.  Nastavite ustrezno `wwwFolderName` in `startPage` lastnosti imenika, ki je prvotno ustvaril, ali uporabite privzete nastavitve (navedena v prejšnjem razdelku) ko instantiating na`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"