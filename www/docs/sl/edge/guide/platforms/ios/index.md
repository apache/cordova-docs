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

# iOS platformi vodnik

Ta vodič pokaže, kako vzpostaviti vaš SDK razvojno okolje za uvajanje Cordova apps za iOS naprave, kot so iPhone in iPad. Glej naslednje podrobnejše informacije značilne za platformo:

*   iOS konfiguracijo
*   Nadgradnja iOS
*   iOS spletni pogledi
*   iOS Plugins
*   iOS orodja ukazne vrstice

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

## Zahteve in podporo

Apple ® orodij morajo zgraditi iOS aplikacije, ki delujejo samo na OS X operacijski sistem na celo število-osnova Macs. Xcode ® 4.5 (Najmanjša zahtevana različica) deluje samo na OS X različica 10.7 (lev) ali večje, in vključuje iOS 6 SDK (Software Development Kit). Predložiti apps Apple App Store℠ zahteva najnovejše različice Apple orodja.

Vi moči skušnja veliko Cordova značilnosti using iOS tekmec z iOS SDK in Xcode nameščen, vendar morate dejanske naprave za popolnoma preskusiti vse funkcije naprave app je pred oddajo App Store. Naprava mora imeti vsaj iOS 5.x nameščen, minimalno iOS različica podpira od Cordova 2.3. Podpornih naprav vključuje vse iPad ® modelov, iPhone ® 3GS in zgoraj, in iPod ® Touch 3rd Generation ali kasneje. Namestiti aplikacije na napravo, morate biti član Applov [iOS Developer Program][1], ki stane 99 $ na leto. Ta vodič prikazuje, kako uvesti apps za iOS emulator, za katerega ne potreba v register s developer program.

 [1]: https://developer.apple.com/programs/ios/

## Namestite SDK

Obstajata dva načina za prenos Xcode:

*   iz [App Store][2], na voljo z iskanjem "Xcode" v **App trgovina** uporaba.

*   iz [Apple razvijalec Downloads][3], ki zahteva registracijo, kot je razvijalec Apple.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

Ko Xcode nameščen, več orodij ukazne vrstice je treba usposobiti za Cordova teči. **Xcode** meni, izberite **Nastavitve**in nato jeziček **Downloads** . **Komponente** plošča, pritisnite gumb **namestiti** ob seznam **Orodij ukazne vrstice** .

## Odprite projekt v SDK

Uporaba na `cordova` korist zaiti ki gre gor a nov projekt, kot je opisano v The Cordova The vmesnik ukazne vrstice. Na primer, v a naslovnik izvorne kode:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"


Ko ga enkrat ustvariš, jo lahko odprete iz v Xcode. Odprem v `hello/platforms/ios/hello.xcodeproj` datoteko. Zaslon mora izgledati takole:

![][4]

 [4]: {{ site.baseurl }}/static/img/guide/platforms/ios/helloworld_project.png

## Razporedi na Emulator

Predogled v iOS emulator app:

1.  Poskrbite, da izberete datoteko *.xcodeproj* v levi plošči.

2.  Izberite **zdravo** app na plošči takoj na desni.

3.  Izberite napravo, predvideno **shemo** meniju v orodni vrstici, kot so iPhone 6.0 Simulator kot višek tukaj:

    ![][5]

4.  Pritisnite gumb za **zagon** , ki se pojavi v isti orodni vrstici na levi **sheme**. Ki gradi, razvije in izvaja uporabo v emulator. A uporaba ločenih emulator odpre razpoložiti app:

    ![][6]

    Edini emulator lahko delujejo hkrati, tako da če hočeš skušnja app v različnih emulator, morate prenehati uporabo emulator in prost dostop a različen tarča v Xcode.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/ios/select_xcode_scheme.png
 [6]: {{ site.baseurl }}/static/img/guide/platforms/ios/HelloWorldStandard.png

Xcode priti povesmo s emulatorji za na najnovejše različice iPhone in iPad. Starejše različice so lahko na voljo od na **Xcode → nastavitve → Downloads → komponente** panel.

## Razporedi na napravo

Podrobnosti o različnih zahtev za uvajanje v napravo, si oglejte razdelek *Konfiguriranje razvoj in porazdelitev sredstev* Apple [Orodja potek dela vodnik za iOS][7]. Na kratko, morate storiti naslednje, preden uvajanje:

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Pridružite se Apple iOS Developer Program.

2.  Ustvarite a *Provisioning profil* v [iOS Provisioning Portal][8]. Lahko uporabite svoj *Razvoj omogočanje pomočnik* ustvarite in namestite profil in zahteva potrdilo Xcode.

3.  Preverite, da oddelek *Podpisovanje kode* *Koda podpisa identitete* znotraj nastavitve projekta nastavljeno na vaši oskrbovalni ime profila.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

Za uvajanje v napravo:

1.  Uporabite kabel USB priključite napravo na vaš Mac.

2.  V oknu Xcode **shema** spustnega seznama izberite ime projekta.

3.  Na spustnem seznamu **naprava** izberite napravo. Če je priključen preko USB, vendar še vedno ne prikaže, pritisnite gumb **Organizator** odpravite vse napake.

4.  Pritisnite gumb **Run** za izgradnjo, uvajanje in zaženite napravo.

## Pogoste težave

**Negodovanje opozorila**: Ko aplikacija programskega vmesnika (API) spremeni ali nadomesti drug API, ki je označen kot *neustrezen*. API še vedno deluje v bližnji prihodnosti, vendar je sčasoma odstrani. Nekatere od teh neustrezen vmesniki se odražajo v Apache Cordova, in Xcode izdaja opozorila o njih, ko gradite in objavljajte aplikacija.

Xcode opozorilo o je `invokeString` metoda zadeva funkcionalnost, to pobudnik app iz custom URL. Mehanizem za obremenitve od šega URL je spremenila, ta številka je še vedno predvideti nazaj funkcionalnost aplikacije, ustvarjene s prejšnjimi različicami Cordova. Vzorec app ne uporabite te funkcije, tako teh opozoril lahko prezrete. Za preprečevanje teh opozoril pojavljali, odstranite kodo, da sklicevanja neustrezen invokeString API:

*   Uredite datoteko *Classes/MainViewController.m* , obkrožajo ta blok kode z `/*` in `*/` Komentarji, kot je prikazano spodaj, nato vnesite **ukaz-s** rešiti pila:

        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];

        return [super webViewDidFinishLoad:theWebView];
        }


*   Izdajati *Classes/AppViewDelegate.m* pila, razložiti jasno sledeč črta z vstavitvijo dvojna poševnica, kot je prikazano spodaj, in nato vnesite **ukaz-s** rešiti pila:

        //self.viewController.invokeString = invokeString;


*   Pritisnite **Command-b** za obnovo projekta in odpravo opozorila.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Manjka glave**: do napak v zvezi z manjkajočo glave posledica težav s graditi mesto, in lahko določi preko Xcode preferencialov:

1.  Izberite **Xcode → nastavitve → lokacijah**.

2.  V razdelku **Pridobljenih podatkov** pritisnite gumb **dodatno** in izberite **Unique** kot **Izgradnjo mesta** , kot je prikazano tukaj:

    ![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/ios/xcode_build_location.png

To je privzeta nastavitev za novo Xcode namestiti, vendar to lahko določi drugače po nadgradnjo iz starejše različice programa Xcode.

Za dodatne informacije, poglejte v dokumentacijo Apple's:

*   [Začeti razvoj iOS aplikacije danes][10] omogoča hiter pregled korakov za razvoj iOS aplikacije.

*   [Članski Center domačo stran][11] povezave do več iOS, tehničnih virov, vključno z tehnična sredstva, oskrbovalna portal, distribucija priročnikov in BMWslo.

*   [Potek dela orodja vodnik za iOS][7]

*   [Xcode 4 uporabniški priročnik][12]

*   [Seji videi][13] iz Apple World Wide Developer konferenca 2012 (WWDC2012)

*   [Xcode-izberite ukaz][14], ki pomaga določiti pravilno različico Xcode, če več kot eno je nameščen.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ®, Apple ®, Xcode ®, App Store℠, iPad ®, iPhone ®, iPod ® in Finder ® so blagovne znamke Apple Inc)
