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

# Vodnik za platformo Windows Phone 7

Ta vodič pokaže, kako vzpostaviti vaš SDK razvojno okolje za uvajanje Cordova aplikacije za naprave Windows Phone 7. Apps teči tudi na Windows Phone 8 naprave, ki uporabljajo isto API, ampak različica 7 nima nekatere napredne funkcije IE10's, ki so na voljo na Windows Phone 8. 8 Windows Phone aplikacije ne *ne* steči naprav Windows Phone 7.

Glej naslednje podrobnejše informacije značilne za platformo, ki velja za obe različici:

*   Nadgradnja Windows Phone
*   Windows Phone Plugins
*   Windows Phone orodja ukazne vrstice

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

## Sistemske zahteve

Uporabite Windows 7 ali Windows 8 (Pro) ali Windows Vista s servisnim paketom SP2. Različico 64-košček (x 64) okno je zahteva za SDK. Pro verzija je priporočljivo za vodenje naprave emulator.

Prijaviti in plačati za [Windows Phone Dev Center][1] račun če želite umestiti app naprej a realen načrt ali ga predloži na trgu.

 [1]: http://dev.windowsphone.com/en-us/publish

**Opomba**: teče SDK v stvaren stroj lahko sedanje izzive. Preberite [Windows Phone na Mac][2] za spoznanja o razvoju solutions.

 [2]: http://aka.ms/BuildaWP8apponaMac

## Namestite SDK in Cordova

Prenesite in namestite [Windows Phone SDK][3].

 [3]: http://www.microsoft.com/download/en/details.aspx?displaylang=en&id=27570/

Travnato gričevje ter citat ki postaja latenten ulitek [Cordova][4]. Kar potrebujete za delo se `lib\windows-phone-8\wp7` subdirectory, `lib\windows-phone-8\wp8` vsebuje različico Windwos telefon 8 Cordova.

 [4]: http://phonegap.com/download

Kopiraj v `CordovaWP7_x_x_x.zip` datoteko v `\My Documents\Visual
Studio 2012\Templates\ProjectTemplates\` imenik.

## Gradnjo predlogo

**Opomba**: ta korak preskočite, če v `lib\windows-phone` imenik že vsebuje a `CordovaWP7_x_x_x.zip` pila.

Poenostavitev razvoja, Cordova svežnjev skripta graditi Visual Studio predloge. To vam omogoča hitro ustvarjanje Cordova apps, in jih lahko spremenite, če je to potrebno. Ti koraki kažejo, kako ustvariti to.

### Teči Batch datoteko, da ustvarite in namestite tudi predloge

Vsebuje koren repo a `createTemplates.bat` pila. Če dvokliknete datoteko ustvarja dva `.zip` datoteke: `CordovaWP7_x_x_x.zip` in `CordovaWP8_x_x_x.zip` , kjer je *x.x.x* številko trenutne različice. Uporabo teh datotek, enostavno v Visual Studio, ulitek jih v `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` podimeniku. Potem ste sposobni ustvariti nov meni **Apache Cordova Windows Phone_ apps iz Visual Studio __File → New Project** .

Če zaženete paketno datoteko iz ukazne vrstice, lahko pokličete tudi z parameter samodejno namestiti:

        >createTemplates.bat -install


## Nastavite nov projekt

*   Odprite Visual Studio Express za Windows Phone in izberite **Nov projekt**.

*   Izberite **CordovaWP7**. Različica število prikaže opis predloge.

*   Projektom dajejo ime, in izberite **OK**.

## Pregled strukture projekta

Na `www` imenika funkcije `html` , `js` , in `css` podimenikov in drugih virov zahteva vaš app. Vse dodatne vsebine mora biti del projekta Visual Studio, in mora biti nastavljen kot vsebine.

Naslednje strukturo predstavlja vzorec a 2.3.0 projekt, vendar se lahko razlikujejo glede na nameščeno različico:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/wp8/projectStructure.png

## Gradnjo projekta za napravo

Pred preskušanjem aplikacije v napravi, naprava mora biti registriran. Podrobnosti o tem, kako uvesti in test na Windows Phone 7, si oglejte [dokumentacijo Microsoft's][6] . To so osnovni koraki:

 [6]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/ff402565(v=vs.105).aspx

*   Preverite, ali vaš telefon in zaslon je odklenjena.

*   V Visual Studio, izberite **napravo** , v spustnem meniju na vrhu.

*   Pritisnite gumb zeleno **igra** poleg glavne spustnem meniju za zagon debugging ali pa vnesite **F5**.

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/wp7/wpd.png

Na tej točki, ste končali.
