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

# Vodnik za platformo Windows Phone 8

Ta vodič pokaže, kako vzpostaviti vaš SDK razvojno okolje za uvajanje Cordova aplikacije za naprave Windows Phone 8. Če želite ciljati 7.5 in 8 naprav, razviti za Windows Phone 7 namesto tega, kot nadroben v Windows Phone 7 vodnik Platform. Različica 7 nima vseh naprednih funkcij, vključenih v Internet Explorer 10, vendar izvaja isti nabor vmesnikov API. 8 Windows Phone aplikacije ne *ne* steči naprav Windows Phone 7.

Glej naslednje podrobnejše informacije značilne za platformo, ki velja za obe različici:

*   Nadgradnja Windows Phone
*   Windows Phone Plugins
*   Windows Phone orodja ukazne vrstice

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

## Sistemske zahteve

*   Operacijski sistem:

    *   Windows 8 ali Windows 8 Pro
        *   Različico 64-košček (x 64) okno je zahteva za SDK.
        *   Pro verzija je priporočljivo, tako da lahko zaženete napravo emulator.

*   Strojna oprema:

    *   6.5 GB prostora na trdem disku
    *   4 GB RAM
    *   CPU 64-košček (x 64)

*   Windows Phone 8 Emulator

    *   Telefon emulator uporablja Hyper-V, zato ta seznam vključuje te predpogoje.
    *   Windows 8 Pro 64-bit edition ali večje
    *   Potrebujete procesor, ki podpira virtualizacijo in [Drugi ravni ogovor prevod (letev)][1]
        *   Glej [seznam Intel procesorji, ki podpirajo VT-x (Virtualizacija) in EPT (letev)][2]
    *   Usposobiti virtualization zmogljivosti (tj, VT-x na Intel) v BIOS nastavitve, kot ponavadi to privzeto onemogočena.

*   SDK in IDE (Visual Studio)

    *   Visual Studio 2012 Professional, Premium ali Ultimate. Opomba Visual Studio Express za Windows Phone (vključena v SDK) ni priporočljivo zato, ker si ne more graditi predlogo (glej spodaj) VS Express, kot to does ne življati **Izvoz predloge** funkcionalnost, ki je samo v VS Pro ali višje.

*   Prijaviti in plačati za [Windows Phone Dev Center][3] račun, če želite namestiti vaš app na realen načrt ali ga predloži na trgu.

 [1]: http://en.wikipedia.org/wiki/Second_Level_Address_Translation
 [2]: http://ark.intel.com/Products/VirtualizationTechnology
 [3]: http://dev.windowsphone.com/en-us/publish

**Opomba**: teče SDK v stvaren stroj lahko predstavljajo nekaj izzivov. Si lahko preberete ta blog post, ki daje vpogled o rešitvah za razvoj za [Windows Phone na Mac][4].

 [4]: http://aka.ms/BuildaWP8apponaMac

## Namestite SDK in Cordova

Prenesite in namestite [Windows Phone SDK][5].

 [5]: http://www.microsoft.com/en-us/download/details.aspx?id=35471

Travnato gričevje ter citat ki postaja latenten ulitek [Cordova][6]. Na `lib\windows-phone-8\wp8` subdirectory je, kjer boste morali narediti svoje delo.

 [6]: http://phonegap.com/download

Kopiraj v `CordovaWP8_x_x_x.zip` datoteko v `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` imenik.

## Gradnjo predlogo

**Opomba**: ta korak preskočite, če v `lib\windows-phone` imenik že vsebuje a `CordovaWP8_x_x_x.zip` pila.

Poenostavitev razvoja, Cordova svežnjev skripta graditi Visual Studio predloge. To vam omogoča hitro ustvarjanje Cordova apps, in jih lahko spremenite, če je to potrebno. Ti koraki kažejo, kako ustvariti to.

### Teči Batch datoteko, da ustvarite in namestite tudi predloge

Na repo korenski imenik vsebuje a `createTemplates.bat` pila. Dvokliknite to ustvariti dva `.zip` datoteke: `CordovaWP7_x_x_x.zip` in `CordovaWP8_x_x_x.zip` , kjer je *x.x.x* številko trenutne različice. Uporabo teh datotek, enostavno v Visual Studio, ulitek jih v `My
Documents\Visual Studio 2012\Templates\ProjectTemplates\` . Potem ste sposobni ustvariti nov Apache Cordova Windows Phone aplikacije iz menija **Visual Studio File → New Project** .

Če zaženete paketno datoteko iz ukazne vrstice, lahko tudi pokličete s parameter samodejno namestiti:

        >createTemplates.bat -install


## Nastavite nov projekt

Odprite Visual Studio Express za Windows Phone in izberite **Nov projekt**.

Izberite **CordovaWP8**. Številka različice je prikazana v opis predloge.

Projektom dajejo ime, in izberite **OK**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp8/StandAloneTemplate.png

## Pregled strukture projekta

Na `www` imenika funkcije `html` , `js` , in `css` podimenikov in drugih virov zahteva vaš app. Vse dodatne vsebine mora biti del projekta Visual Studio, in mora biti nastavljen kot vsebine.

Naslednje strukturo predstavlja vzorec a 2.3.0 projekt, vendar se lahko razlikujejo glede na nameščeno različico:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Gradite in objavljajte Emulator

Preverite, ali **Windows Phone Emulator** potrjeno v glavnem kaplja-niz jedilnik.

Nato pritisnite gumb zeleno **igra** poleg spustnega menija za zagon debugging, ali tip **F5**.

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/wp8/BuildEmulator.png

## Gradnjo projekta za napravo

Pred preskušanjem aplikacije v napravi, naprava mora biti registriran. Podrobnosti o tem, kako uvesti in test na Windows Phone 8, si oglejte [dokumentacijo Microsoft's][10] . To so osnovni koraki:

 [10]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Preverite, ali vaš telefon in zaslon je odklenjena.

*   V Visual Studio, izberite **napravo** , v spustnem meniju na vrhu.

*   Pritisnite gumb zeleno **igra** poleg glavne spustnem meniju za zagon debugging ali pa vnesite **F5**.

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

Na tej točki, ste končali.

## Nadaljnje branje

Windows Phone razvijalec Blog zagotavlja [koristne podrobnosti][12] o razlikah med IE10 in WebKit brskalnik, in kako opreti oboje.

 [12]: http://blogs.windows.com/windows_phone/b/wpdev/archive/2012/11/15/adapting-your-webkit-optimized-site-for-internet-explorer-10.aspx
