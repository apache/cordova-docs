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

# Nadgradnja iOS

Ta vodič pokaže, kako spremeniti iOS projekte za nadgradnjo iz starejše različice Cordova. Večina teh navodil, ki se uporablja za projekte, ustvarjene s starejši nabor orodij ukazne vrstice, ki pred je `cordova` CLI korist. Glej The vmesnik ukazne vrstice za informacije kako modernizirati prevod od CLI.

**Opomba**: Xcode 4.6 je potrebno, je priporočljivo Xcode 5. Trenutno, da predloži Apple App Store, uporabite najnovejše pošiljajo različico iOS SDK, ki je iOS 7. iOS 7 SDK še ni potrebno, vendar to lahko hitro spremeni.

## Nadgradnja 3.1.0 projektov do 3.2.0

Za non-CLI projektov, teči:

        bin/update path/to/project
    

Za projekte v CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Teči`cordova platform update ios`

## Nadgradnja 3.0.0 projektov do 3.1.0

Za non-CLI projektov, teči:

        bin/update path/to/project
    

Za projekte v CLI:

1.  Update na `cordova` CLI različico. Glej vmesnik ukazne vrstice.

2.  Teči`cordova platform update ios`

iOS 7 vprašanj:

1.  Odstraniti `width=device-width, height=device-height` iz z `index.html` datoteke `viewport` `meta` oznako. (Glejte [ustrezne bug][1].)

2.  Posodobite vaše media, media-zajem in splashscreen jedro plugins za iOS 7 podporo.

 [1]: https://issues.apache.org/jira/browse/CB-4323

Xcode 5 vprašanj:

1.  Posodobiti nastavitve projekta če Xcode 5 vas pozove, da to storijo (v vprašanjih Navigator).

2.  Posodobitev vaše **prevajalnik za C / C + +/ Objective-C** pod zavihkom **Gradijo nastavitve** nastavitev **Možnosti za izgradnjo** oddelka. Izberite **privzeto prevajalnik (Apple LLVM 5.0)**.

## Nadgradnja CLI (3.0.0) iz 2.9.0

1.  Ustvariti nov projekt Apache Cordova 3.0.0 uporabo cordova CLI, kot je opisano v vmesnik ukazne vrstice.

2.  Dodajte vaš platforme cordova projekta, na primer:`cordova
platform add ios`.

3.  Kopirajte vsebino projekta `www` imenik v `www` imenik v samem projektu cordova, ki ste jo pravkar ustvarili.

4.  Kopirati ali prepisati vse native sredstev iz svoje prvotne projekta ( `Resources` , itd), izdelava varen prišteti poljuben nov pila v v `.xcodeproj` projekta. IOS projekt gradi znotraj v `platforms\ios` naslovnik.

5.  Kopijo vaše `config.xml` v v `www` imenik, in odstraniti vse plugin opredelitve. Spremenite nastavitve tukaj namesto platformo imenik.

6.  Z orodjem cordova CLI umestiti poljuben čep, ki jih potrebujete. Upoštevajte, da CLI ročaji vse jedro API kot plugins, tako da morda morali dodati. Samo 3.0.0 plugins združljivi z CLI.

7.  Zgradite in preizkusite.

## Nadgradnja 2.9.0 projektov do 3.0.0

1.  Travnato gričevje ter citat Cordova 3.0.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-3.0.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Kopija je `www/cordova.js` (upoštevajte, da različica pripona ne življati anymore, različica je v datoteki v glavi) pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

7.  Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

**Opomba**: začenši z Cordova 3.0.0, plugins ne pre-umestiti, ter vi potreba rabiti na `plugman` pripomoček ukazne vrstice, da jih namestite sami. Glejte Uporaba Plugman za upravljanje Plugins.

## Nadgradnja 2.8.0 projektov do 2.9.0

1.  Travnato gričevje ter citat Cordova 2.9.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.9.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Kopija je `www/cordova.js` (upoštevajte, da različica pripona ne življati anymore, različica je v datoteki v glavi) pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

7.  Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

## Nadgradnja 2.7.0 projektov do 2.8.0

1.  Travnato gričevje ter citat Cordova 2.8.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.8.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Kopija je `www/cordova.js` (upoštevajte, da različica pripona ne življati anymore, različica je v datoteki v glavi) pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.7.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

7.  Modernizirati poljuben `<plugin>` tags v z `config.xml` datoteko `<feature>` tags. Upoštevajte, da obstoječi `<plugin>` tags še vedno deluje, vendar so odsvetovana. Kopirate lahko te informacije v v `config.xml` datoteko za nov projekt. Na primer:
    
        <plugins>
            <plugin name="LocalStorage" value="CDVLocalStorage" />
            <!-- other plugins -->
        </plugins>
        
        <!-- change to: (note that a <feature> tag is on the same level as <plugins> -->
        <feature name="LocalStorage">
            <param name="ios-package" value="CDVLocalStorage" />
        </feature>
        <!-- other <feature> tags -->
        

8.  Izbrisati s `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

9.  Ti dve okvirov dodati projektu:
    
        OpenAL ImageIO
        

10. Posodobite svoj projekt cilj **Zgraditi nastavitve**. Pod **Povezovanje → drugih Povezivač zastav**, urejanje **"- Obj - C"** biti **"-ObjC"**.

11. Posodobite svoj projekt cilj **Zgraditi nastavitve**. Pod **Povezovanje → drugih Povezivač zastav**, spremenite **"-all_load"** biti `-force\_load ${BUILT\_PRODUCTS\_DIR}/libCordova.a` . Samo bi morali storiti, če imate problem, ki je opredeljena v [težavo.][2].

 [2]: https://issues.apache.org/jira/browse/CB-3458

## Nadgradnja 2.6.0 projektov do 2.7.0

1.  Travnato gričevje ter citat Cordova 2.7.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.7.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.7.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.6.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.7.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `AppDelegate.m` datoteke po eden iz novega projekta (glej [to razlikovanje][3]).

8.  V vaš `config.xml` pila, [odstranite te vrstice][4].

9.  Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

 [3]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=5c05ac80e056753c0e8736f887ba9f28d5b0774c;hp=623ad8ec3c46f656ea18c6c3a190d650dd64e479;hb=c6e71147386d4ad94b07428952d1aae0a9cbf3f5;hpb=c017fda8af00375a453cf27cfc488647972e9a23
 [4]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=537705d76a5ef6bc5e57a8ebfcab78c02bb4110b;hp=8889726d9a8f8c530fe1371c56d858c34552992a;hb=064239b7b5fa9a867144cf1ee8b2fb798ce1f988;hpb=c9f233250d4b800f3412eeded811daaafb17b2cc

## Nadgradnja 2.5.0 projektov do 2.6.0

1.  Travnato gričevje ter citat Cordova 2.6.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.6.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Kopirati v projekt `www/cordova-2.6.0.js` pila v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.5.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (skupaj s katere koli druge datoteke, ki se sklicujejo na scenarij) za sklicevanje na novo `cordova-2.6.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `AppDelegate.m` datoteke po eden iz novega projekta (glej [to razlikovanje][5]).

8.  V vaš `config.xml` pila, [dodali to novo vrstico][6].

9.  V vaš `config.xml` pila, [dodali to novo vrstico][7].

10. V vaš `config.xml` pila, [DisallowOverscroll, spremenila UIWebViewBounce in privzete vrednosti so različne][8].

11. V vaš `config.xml` pila, je `EnableLocation` prednost je zastarela.

12. Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

 [5]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=124a56bb4f361e95616f44d6d6f5a96ffa439b60;hp=318f79326176be8f16ebc93bad85dd745f4205b6;hb=a28c7712810a63396e9f32fa4eb94fe3f8b93985;hpb=36acdf55e4cab52802d73764c8a4b5b42cf18ef9
 [6]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=1555b5e81de326a07efe0bccaa5f5e2326b07a9a;hp=0652d60f8d35ac13c825c572dca6ed01fea4a540;hb=95f16a6dc252db0299b8e2bb53797995b1e39aa1;hpb=a2de90b8f5f5f68bd9520bcbbb9afa3ac409b96d
 [7]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=d307827b7e67301171a913417fb10003d43ce39d;hp=04260aa9786d6d74ab20a07c86d7e8b34e31968c;hb=97b89edfae3527828c0ca6bb2f6d58d9ded95188;hpb=942d33c8e7174a5766029ea1232ba2e0df745c3f
 [8]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=8889726d9a8f8c530fe1371c56d858c34552992a;hp=d307827b7e67301171a913417fb10003d43ce39d;hb=57982de638a4dce6ae130a26662591741b065f00;hpb=ec411f18309d577b4debefd9a2f085ba719701d5

## Nadgradnja 2.4.0 projektov do 2.5.0

1.  Travnato gričevje ter citat Cordova 2.5.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.5.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.5.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.4.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.5.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `AppDelegate.m` datoteke po eden iz novega projekta (glej [to razlikovanje][9]).

8.  V vaš `config.xml` pila, [dodate te nove vrstice][10].

9.  V vaš `config.xml` pila, [izdajati korenski element, spremenite iz cordova widget][11].

10. V vaš `config.xml` pila, [odstranite OpenAllWhitelistURLsInWebView prednost][12].

11. Izbrisati vaš `cordova` directory in kopijo na `cordova` imenik iz novega projekta v root direktorij vašega projekta. V 2.5.0, to has modernizirati scenarij.

12. Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

 [9]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=318f79326176be8f16ebc93bad85dd745f4205b6;hp=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hb=4001ae13fcb1fcbe73168327630fbc0ce44703d0;hpb=299a324e8c30065fc4511c1fe59c6515d4842f09
 [10]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=903944c4b1e58575295c820e154be2f5f09e6314;hp=721c734120b13004a4a543ee25f4287e541f34be;hb=ae467249b4a256bd31ee89aea7a06f4f2316b8ac;hpb=9e39f7ef8096fb15b38121ab0e245a3a958d9cbb
 [11]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=64e71636f5dd79fa0978a97b9ff5aa3860a493f5;hp=d8579352dfb21c14e5748e09b2cf3f4396450163;hb=0e711f8d09377a7ac10ff6be4ec17d22cdbee88d;hpb=57c3c082ed9be41c0588d0d63a1d2bfcd2ed878c
 [12]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=721c734120b13004a4a543ee25f4287e541f34be;hp=7d67508b70914aa921a16e79f79c00512502a8b6;hb=187bf21b308551bfb4b98b1a5e11edf04f699791;hpb=03b8854bdf039bcefbe0212db937abd81ac675e4

## Nadgradnja 2.3.0 projektov do 2.4.0

1.  Travnato gričevje ter citat Cordova 2.4.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.4.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.4.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.3.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.4.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteke) vaše `MainViewController.m` datoteke po eden iz novega projekta (glej [to razlikovanje][13]).

8.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `AppDelegate.m` datoteke po eden iz novega projekta (glej [to razlikovanje][14]).

9.  V vaš `config.xml` pila, [dodali to novo vrstico][15].

10. Izbrisati vaš `cordova` directory in kopijo na `cordova` imenik iz novega projekta v root direktorij vašega projekta. V 2.4.0, to je določen za skripte.

11. Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

12. Dodaj AssetsLibrary.framework kot sredstvo za vaš projekt. (Glej [dokumentacijo Applov][16] navodila, kako to storiti).

 [13]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/MainViewController.m;h=5f9eeac15c2437cd02a6eb5835b48374e9b94100;hp=89da1082d06ba5e5d0dffc5b2e75a3a06d5c2aa6;hb=b4a2e4ae0445ba7aec788090dce9b822d67edfd8;hpb=a484850f4610e73c7b20cd429a7794ba829ec997
 [14]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/Classes/AppDelegate.m;h=6dc7bfc84f0ecede4cc43d2a3256ef7c5383b9fe;hp=1ca3dafeb354c4442b7e149da4f281675aa6b740;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [15]: https://git-wip-us.apache.org/repos/asf?p=cordova-ios.git;a=blobdiff;f=bin/templates/project/__TESTING__/config.xml;h=7d67508b70914aa921a16e79f79c00512502a8b6;hp=337d38da6f40c7432b0bce05aa3281d797eec40a;hb=6749c17640c5fed8a7d3a0b9cca204b89a855baa;hpb=deabeeb6fcb35bac9360b053c8bf902b45e6de4d
 [16]: https://developer.apple.com/library/ios/#recipes/xcode_help-project_editor/Articles/AddingaLibrarytoaTarget.html

## Nadgradnja 2.2.0 projektov do 2.3.0

1.  Travnato gričevje ter citat Cordova 2.3.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.3.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.3.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.2.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.3.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `MainViewController.m` po eden iz novega projekta.

8.  Izbrisati vaš `cordova` directory in kopijo na `cordova` imenik iz novega projekta v root direktorij vašega projekta. V 2.3.0, to je nov skripte.

9.  Izbrisati vaš `CordovaLib` directory in kopijo na `CordovaLib` imenik iz novega projekta v root direktorij vašega projekta.

10. Pretvorite vaš `Cordova.plist` pila v `config.xml` , z tekmovanje v teku scenarij `bin/cordova\_plist\_to\_config\_xml` na datoteke projekta.

11. Dodaj InAppBrowser plugin za vaš `config.xml` , z dodajanjem to oznako, pod `<cordova><plugins>` :
    
        < ime plugin = vrednost "InAppBrowser" = "CDVInAppBrowser" / >
        

12. Upoštevajte, da plugins Objective-C *ni* whitelisted anymore. V seznam dovoljenih povezav z app whitelist, morate nastaviti na `User-Agent` glavo povezave za isto user-agent kot glavni spletni pogled Cordova. Vi moči zaslužiti to z vstopom v `userAgent` lastnine off glavni pogled-krmilnik. Glavni pogled-krmilnik ( `CDVViewController` ) je tudi a `URLisAllowed` metoda za preverjanje, ali URL prehaja na seznam varnih pošiljateljev.

13. Naprava API spremembe:
    
    *   Za iOS, device.platform, ki se uporabljajo za vrnitev `iPhone` , `iPad` ali `iPod Touch` ; zdaj vrača (pravilno)`iOS`.
    *   Za iOS, device.name (zdaj zastarelo za vse platforme), ki se uporabljajo za vrnitev ime uporabnika naprave (npr. "Shazron's iPhone 5 '); zdaj vrača kaj device.platform, ki se uporabljajo za vrnitev: `iPhone` , `iPad` ali`iPod Touch`.
    *   Za vse platforme, je novo lastnost device.model; to vrne model posebne naprave, na primer `iPad2,5` (za druge platforme, to vrne kaj device.name, ki se uporabljajo za vrnitev).

## Nadgradnja 2.1.0 projektov do 2.2.0

1.  Travnato gričevje ter citat Cordova 2.2.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.2.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.2.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.1.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.2.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `MainViewController.m` po eno od nov projekt:
    
    *   Posodobljene → viewWillAppear

8.  Kopiraj v `cordova` imenik iz novega projekta v root direktorij vašega projekta. V 2.2.0, to je posodobljen skript "tekmovati".

9.  Naslednji, modernizirati vaš `CordovaLib` sub-projekt sklic. Začenši z Cordova 2.1.0, ne uporabljamo CORDOVALIB Xcode spremenljivka več ko navajanje kje `CordovaLib` prebiva, sklic je sklic na absolutno pila zdaj.
    
    1.  Začetek Terminal.app
    2.  Pojdite na mesto, kjer ste namestili Cordova (glej korak 1), v z `bin` subdirectory
    3.  Zaženite skript spodaj, kjer je prvi parameter je pot za vaš projekt `.xcodeproj` datoteke:
        
        `update_cordova_subproject path/to/your/project/xcodeproj`

**Opomba**: V 2.2.0, je `bin/create` script kopijo v v `CordovaLib` sub-projekt v vašem projektu. Imeti isto vrsto setup, šele ulitek v desnem `CordovaLib` v vaš imenik projekta in posodobitev na `CordovaLib` sub-mesto (glede na projekt) v Xcode pila nadzornik projekta.

## Nadgradnja 2.0.0 projektov do 2.1.0

Z Cordova 2.1.0, `CordovaLib` has been vzpenjajoč se rabiti **Samodejno Reference štetje (ARC)**. Ne potreba v vzpenjajoč se v **lok** za uporabo CordovaLib, vendar če želite nadgraditi svoj projekt za uporabo **ARC**, prosim čarovnikom Xcode migracije iz menija: **Uredi → Refactor → pretvori v Objective-C ARC...**, de-izberite libCordova.a, nato zaženite čarovnik do zaključka.

1.  Travnato gričevje ter citat Cordova 2.1.0 vir stalnih imenik mesto na trdem disku, na primer v`~/Documents/Cordova-2.1.0`.

2.  Če se izvaja, zaprite Xcode.

3.  Uporaba Terminal.app, se pomaknite do imenika, kjer si dal downloaded vir zgoraj.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.1.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.0.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.1.0.js` datoteke.

7.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `AppDelegate.m` po eno od nov projekt:
    
    *   Uredil → program: didFinishLaunchingWithOptions:
    *   Dodano → program: supportedInterfaceOrientationsForWindow:

8.  Update (ali nadomestiti, če ste nikoli spremenili datoteko) vaše `MainViewController.m` po eno od nov projekt:
    
    *   Dodano → viewWillAppear

9.  Kopiraj v `cordova` imenik iz novega projekta v root direktorij vašega projekta. V 2.1.0, to je posodobljeno skripte za podporo poti s presledki.

10. Odstraniti z `VERSION` pila reference iz vašega projekta (*ne* tisti v`CordovaLib`).

11. Naslednji, modernizirati vaš `CordovaLib` sub-projekt sklic. Začenši z Cordova 2.1.0, ne uporabljamo CORDOVALIB Xcode spremenljivka več ko navajanje kje `CordovaLib` prebiva, sklic je sklic na absolutno pila zdaj.
    
    1.  Začetek Terminal.app
    2.  Pojdite na mesto, kjer ste namestili Cordova (glej korak 1), v z `bin` subdirectory
    3.  Zaženite skript spodaj, kjer je prvi parameter je pot za vaš projekt `.xcodeproj` datoteke:
        
        `update_cordova_subproject pot/do/vaš/projekt/xcodeproj`

## Nadgradnja 1.9.0 projektov do 2.0.0

1.  Namestite Cordova 2.0.0.

2.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

3.  Izvod v `www/cordova-2.0.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-1.9.0.js` pila.

4.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.0.0.js` datoteke.

5.  Kopiraj v `cordova` imenik iz novega projekta v korenskem imeniku vašega projekta (če želite, da project orodja ukazne vrstice).

6.  Dodate nov vnos v `Plugins` v vaš `Cordova.plist` pila, skupina **Podpira datoteke** . Ključ je `Device` in je vrednost`CDVDevice`.

7.  Odstrani`Cordova.framework`.

8.  Odstraniti `verify.sh` iz skupine **Podpirajo datoteke** .

9.  Izberite ikono projekta v projekt Navigator, izberite vaš projekt **Target**, nato pa izberite zavihek **Nastavitve graditi** .

10. Iskanje **Preprocessor makre**, nato odstrani vse **CORDOVA_FRAMEWORK = 1** vrednosti.

11. Poiščite v `CordovaLib` imenik, ki je bil nameščen v vaš trd-voziti pod svojo domačo mapo `Documents` podimeniku.

12. Poiščite v `CordovaLib.xcodeproj` pila v v `CordovaLib` imenik, potem povleci in spusti datoteko v vašem projektu. Bi se moral pojaviti kot sub-projekt.

13. Izdelate projekt, morate dobiti nekatere napake v zvezi z `#import` direktive.

14. Za na `#import` napak, spremeniti ponudbo na osnovi uvoza v tem stilu:
    
        #import "CDV.h"
        
    
    Ta slog oklepajev, ki temelji:
    
        #import <Cordova/CDV.h>
        
    
    in odstranite vse `#ifdef` ovoje okoli koli Cordova uvoz, ko ni več potrebno (uvoza so zdaj poenoteni)

15. Izdelate projekt znova in ne bi smeli imeti vse `#import` napake.

16. Izberite **ikono projekta** v projekt Navigator, izberite vaš projekt **Target**, nato pa izberite zavihek **Izgradnjo faze** .

17. Razširite fazo **Ciljne odvisnosti** , nato gumb Izberi **+** .

18. Izberite je `CordovaLib` cilj, nato pa izberite gumb **Dodaj** .

19. Razširite prva faza **Povezavo binarnih s knjižnicami** (že vsebovati a povesmo od okvirov), nato pa izberite **+** gumb.

20. Izberite na `libCordova.a` statična knjižnica, nato pa izberite gumb **Dodaj** .

21. Izbriši fazo **Run Script** .

22. Izberite **ikono projekta** v projekt Navigator, izberite vaš projekt **Target**, nato pa izberite zavihek **Nastavitve graditi** .

23. Iskanje **Drugih Povezivač zastave**, in dodamo vrednosti **-force_load** in **C-Obj**.

24. Razširite na `CordovaLib` podprojekt.

25. Poiščite v `VERSION` datoteko, povlecite v vaš glavni projekt (želimo ustvariti povezavo nanj, ne kopijo).

26. Izberite izbirni gumb **Ustvari skupine za vse dodane mape** , nato pa izberite gumb **Dokončaj** .

27. Izberite v `VERSION` datoteko, ki ste pravkar povlekli v prejšnjem koraku.

28. Vnesite kombinacijo tipk **možnost-ukaz-1** razkazati **Nadzornik datoteko** (ali menuitem **Poglej si → pripomočki → Pokaži nadzornik datoteko**).

29. Izberite **glede na CORDOVALIB** v **Pila nadzornik** za spustni meni za **lokacijo**.

30. Nastaviti Xcode prednost **Xcode nastavitve → lokacijah → pridobljenih podatkov → Advanced...** **Unique**, tako da mogoče najti enotno glave.

31. Izberite **ikono projekta** v projekt Navigator, izberite vašo **ciljno**, nato pa izberite zavihek **Nastavitve graditi** .

32. Iskanje **poti iskanja glavo**. Za nastavitev, za dodajanje teh treh vrednosti, vključno s Citati:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"
        
        "$(OBJROOT)/UninstalledProducts/include"
        
        "$(BUILT_PRODUCTS_DIR)"
        

33. Iskanje **drugih Povezivač zastav**. Nastavitve, dodajte te vrednosti:
    
        -weak_framework CoreFoundation
        

34. Izdelate projekt, naj pripravijo in povezavo s **ne izdaja**.

35. Izberite vaš projekt iz **sheme** kaplja-niz, in nato **iPhone 5,1 Simulator**.

36. Izbrati **prost dostop** popek.

**Opomba**: če vaš projekt ne deluje po pričakovanjih v simulatorju, prosim zalotiti a pismo morebitne napake v konzoli dnevnik v Xcode za namige.

## Nadgradnja 1.8.x projektov 1.9.0

1.  Namestite Cordova 1.9.0.

2.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

3.  Izvod v `www/cordova-1.9.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-1.8.x.js` pila.

4.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-1.9.0.js` datoteke.

**Opomba**: 1.9.0 podpira nove `BackupWebStorage` logična `Cordova.plist` nastavitev. Privzeto omogočena, torej lotiti se `false` v onesposobiti to, še posebej na iOS 6. Glej [izpust opombe: Safari in UIKit oddelek][17]

 [17]: https://developer.apple.com/library/prerelease/ios/#releasenotes/General/RN-iOSSDK-6_0/_index.html

## Nadgradnja 1.7.0 projektov do 1.8.x

1.  Namestite Cordova 1.8.0.

2.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

3.  Izvod v `www/cordova-1.8.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-1.7.x.js` pila.

4.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-1.8.0.js` datoteke.

Če nameravate na uporabo API kapitan, boste potrebovali novo **iPad zaslon mrežnice** sredstev:

1.  Kopija je `Resources/Capture.bundle` element iz novega projekta v imeniku projekta, preveč pisanja obstoječi `Resources/Capture.bundle` element.

2.  V projektu, izberite je `Capture.bundle` element v vaš projekt Navigator v Xcode, vnesite **Izbriši** ključ, nato pa izberite **Odstranite sklic** nastali pogovornem oknu.

3.  Povlecite na novo `Capture.bundle` korak 1 zgoraj v vaš projekt Navigator v Xcode, nato izberite izbirni gumb **Ustvari skupine za vse dodane mape** .

## Nadgradnja 1.6.x projektov 1.7.0

1.  Namestite Cordova 1.7.0.

2.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

3.  Izvod v `www/cordova-1.7.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-1.6.0.js` pila.

4.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-1.7.0.js` datoteke.

## Nadgradnja 1.5.0 projektov do 1.6.x

1.  Namestite Cordova 1.6.1.

2.  Izdelovanje a prislon od `AppDelegate.m` , `AppDelegate.h` , `MainViewController.m` , `MainViewController.h` , in `Cordova.plist` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 1.5.0-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        Cordova.plist
        

5.  Dodaj vse nove `MainViewController` in `AppDelegate` datotek v Xcode projekta.

6.  Izvod v `www/cordova-1.6.1.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-1.5.0.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-1.6.1.js` datoteke.

8.  Dodajte nov `Cordova.plist` pila v vaš projekt. To je potrebno, ker imena core plugin storitev morate spremeniti, da ustrezajo tistim iz Android in BlackBerry, za enotno Cordova JavaScript datoteko (`cordova-js`).

9.  Vključiti vse nastavitve, **Plugins** in **ExternalHosts** postavke, ki ste jih imeli v vaš **varnostno Cordova.plist** v novi`Cordova.plist`.

10. Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v novi `AppDelegate` datoteke. Koli `UIWebViewDelegate` ali `CDVCommandDelegate` kodo v `AppDelegate.m` mora iti v `MainViewController.m` zdaj (glej komentiral-out oddelkov v ta datoteke).

11. Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `MainViewController.h` in `MainViewController.m` v nov MainViewController pila.

12. Kliknite na ikono projekta v projekt Navigator, izberite vaš **projekt**, nato pa izberite zavihek **Nastavitve graditi** .

13. Vpišite **prevajalnik za C / C + +/ Objective-C** v iskalno polje.

14. Izberite vrednost **Apple LLVM prevajalnik 3.1** .

## Nadgradnja 1.4.x projekte 1.5.0

1.  Namestite Cordova 1.5.0.

2.  Ustvariti nov projekt in teči enkrat. Potrebovali boste nekaj sredstev iz tega novega projekta.

3.  Izvod v `www/cordova-1.5.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-1.4.x.js` pila.

4.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) nov Cordoba točko `cordova-1.5.0.js` datoteke.

5.  Poišči `PhoneGap.framework` v vaš projekt Navigator, izberite.

6.  Vnesite **izbrisati** zakleniti ter izbrisati s `PhoneGap.framework` sklic v projekt Navigator.

7.  Vnesite kombinacijo tipk **Možnost-ukaz-A** , ki bi morala pasti list za dodajanje datotek na projekt (list **Dodate datoteke...** ). Poskrbite, da je izbran izbirni gumb **ustvarjeno skupine za vse dodane mape** .

8.  Vnesite kombinacijo tipk **Shift-ukaz-G** , ki naj spusti dol drug list, da greš v mapo (na **pojdite v mapo:** list).

9.  Vnesite `/Users/Shared/Cordova/Frameworks/Cordova.framework` v na **pojdite v mapo:** list in nato pritisnite gumb **Pojdi** .

10. Pritisnite gumb **Dodaj** v **Dodajanje datotek...** stanja.

11. Izberite `Cordova.framework` v projekt Navigator.

12. Vnesite kombinacijo tipk **možnost-ukaz-1** razkazati **Nadzornik datoteko**.

13. Izberite **Absolutna pot** v **Pila nadzornik** za spustni meni za **lokacijo**.

14. Vnesite kombinacijo tipk **Možnost-ukaz-A** , ki bi morala pasti list za dodajanje datotek na projekt (list **Dodate datoteke...** ). Poskrbite, da je izbran izbirni gumb **ustvarjeno skupine za vse dodane mape** .

15. Vnesite kombinacijo tipk **Shift-ukaz-G** , ki naj spusti dol drug list, da greš v mapo (na **pojdite v mapo:** list).

16. Vnesite `~/Documents/CordovaLib/Classes/deprecated` v na **pojdite v mapo:** list in nato pritisnite gumb **Pojdi** .

17. Pritisnite gumb **Dodaj** v **Dodajanje datotek...** stanja.

18. V vašem `AppDelegate.h` , `AppDelegate.m` , in `MainViewController.h` pila, nadomestiti celotno `#ifdef PHONEGAP_FRAMEWORK` blok s:
    
        #import "CDVDeprecated.h"
        

19. Kliknite na **ikono projekta** v projekt Navigator, izberite vašo **ciljno**, nato pa izberite zavihek **Nastavitve graditi** .

20. Iskanje **poti iskanja okvir**.

21. Zamenjati obstoječo vrednost z`/Users/Shared/Cordova/Frameworks`.

22. Iskanje **Preprocessor makre**.

23. Za prvo (kombinirane) vrednost, zamenjajte vrednost s **CORDOVA_FRAMEWORK = YES**.

24. Izberite zavihek **Izgradnjo faze** .

25. Razširiti **prost dostop scenarij**.

26. Zamenjaj vse pojavitve **telefon** z **Cordova**.

27. Najti vaš `PhoneGap.plist` pila v projekt Navigator, in kliknite na ime datoteke, ko vnesete ime način urejanja.

28. Preimenovati `PhoneGap.plist` v`Cordova.plist`.

29. Desni klik na `Cordova.plist` in izberite **kot → odprte kode**.

30. Pritisnite **Možnost-Command-F**, izberite **Zamenjaj** s kaplja-niz na vrhu levi okna vir.

31. Vpišite `com.phonegap` za iskanje niza, in `org.apache.cordova` niz Zamenjaj, nato pritisnite gumb **Zamenjaj vse** .

32. Vnesite **PG** za iskanje niza in **CDV** Zamenjaj niz in pritisnite gumb **Zamenjaj vse** .

33. Pritisnite **Command-B** zgraditi. Imate še deprecations, da boste lahko znebiti v prihodnosti (glej `CDVDeprecated.h` . Na primer, Zamenjaj razredov v kodi, ki uporabljajo PG * CDV *).

## Nadgradnja 1.4.0 projektov do 1.4.1

1.  Namestite Cordova 1.4.1.

2.  Izdelovanje a prislon od`MainViewController.m`.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiraj v `MainViewController.m` pila s nov projekt v imeniku 1.4.0-based projekta na disku, nadomešča staro datoteko (backup datotek najprej iz korak 2 zgoraj).

5.  Dodajanje v `MainViewController.m` datoteko v Xcode projekta.

6.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `MainViewController.m` v novo datoteko.

7.  Posodabljanje je `phonegap-1.4.0.js` Datoteka je neobvezno, nič se ni spremenilo v JavaScript med 1.4.0 in 1.4.1.

## Nadgradnja 1.3.0 projektov do 1.4.0

1.  Namestite Cordova 1.4.0.

2.  Izdelovanje a prislon od `AppDelegate.m` in `AppDelegate.h` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 1.3.0-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj vse v `MainViewController` datoteke v Xcode projekta.

6.  Izvod v `www/phonegap-1.4.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-1.3.0.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `phonegap-1.4.0.js` datoteke.

8.  Dodaj nov vnos pod `Plugins` v vaš `PhoneGap.plist` pila. Ključ je `com.phonegap.battery` in je vrednost`PGBattery`.

9.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v nov AppDelegate pila.

## Nadgradnja 1.2.0 projektov do 1.3.0

1.  Namestite Cordova 1.3.0.

2.  Izdelovanje a prislon od `AppDelegate.m` in `AppDelegate.h` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 1.2.0-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj vse v `MainViewController` datoteke v Xcode projekta.

6.  Izvod v `www/phonegap-1.3.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-1.2.0.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `phonegap-1.3.0.js` datoteke.

8.  Dodaj nov vnos pod `Plugins` v vaš `PhoneGap.plist` pila. Ključ je `com.phonegap.battery` in je vrednost`PGBattery`.

9.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v nov AppDelegate pila.

## Nadgradnja 1.1.0 projektov do 1.2.0

1.  Namestite Cordova 1.2.0.

2.  Izdelovanje a prislon od `AppDelegate.m` in `AppDelegate.h` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 1.1.0-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj vse v `MainViewController` datoteke v Xcode projekta.

6.  Izvod v `www/phonegap-1.2.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-1.1.0.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `phonegap-1.2.0.js` datoteke.

8.  Dodaj nov vnos pod `Plugins` v vaš `PhoneGap.plist` pila. Ključ je `com.phonegap.battery` in je vrednost`PGBattery`.

9.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v nov AppDelegate pila.

## Nadgradnja 1.0.0 projektov do 1.1.0

1.  Namestite Cordova 1.1.0.

2.  Izdelovanje a prislon od `AppDelegate.m` in `AppDelegate.h` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 1.0.0-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj vse v `MainViewController` datoteke v Xcode projekta.

6.  Izvod v `www/phonegap-1.1.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-1.0.0.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `phonegap-1.1.0.js` datoteke.

8.  Dodaj nov vnos pod `Plugins` v vaš `PhoneGap.plist` pila. Ključ je `com.phonegap.battery` in je vrednost`PGBattery`.

9.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v nov AppDelegate pila.

## Nadgradnja 0.9.6 projektov do 1.0.0

1.  Namestite Cordova 1.0.0.

2.  Izdelovanje a prislon od `AppDelegate.m` in `AppDelegate.h` v vašem projektu.

3.  Ustvariti nov projekt. Potrebovali boste nekaj sredstev iz tega novega projekta.

4.  Kopiranje teh datotek iz novega projekta v imeniku 0.9.6-based projekta na disku, nadomešča vse stare datoteke (prislon vaš pila prvi iz koraka 2 zgoraj):
    
        AppDelegate.h
        AppDelegate.m
        MainViewController.h
        MainViewController.m
        MainViewController.xib
        

5.  Dodaj vse v `MainViewController` datoteke v Xcode projekta.

6.  Izvod v `www/phonegap-1.0.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/phonegap-0.9.6.js` pila.

7.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `phonegap-1.0.0.js` datoteke.

8.  Dodaj nov vnos pod `Plugins` v vaš `PhoneGap.plist` pila. Ključ je `com.phonegap.battery` in je vrednost`PGBattery`.

9.  Vključiti vse projekt-posebno kodo, ki jih imate v vašem varnostno `AppDelegate.h` in `AppDelegate.m` v nov AppDelegate pila.