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

# Windows 8 platformi vodnik

Ta vodič pokaže, kako vzpostaviti vaš SDK razvojno okolje za uvajanje Cordova aplikacije za Windows 8. Glej naslednje podrobnejše informacije značilne za platformo:

*   Nadgradnjo operacijskega sistema Windows 8
*   Orodja ukazne vrstice Windows 8

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

Microsoft zastarelo ime *Metro-style aplikacije* Windows 8 in Windows RT. MSDN zdaj se nanaša na to vrsto app kot app *Windows Store* in tega priročnika sledi te konvencije. Tudi, v tem priročniku *Windows 8* pomeni Windows 8 in Windows RT.

## Zahteve

*   Windows 8

*   Visual Studio 2012 Professional ali boljše ali Visual Studio 2012 Express za Windows 8

Sledite navodilom na [windowsstore.com][1] predloži vaš app Windows trgovino.

 [1]: http://www.windowsstore.com/

## Namestite SDK in Cordova

Nastavite vaš prioriteten varianta Visual Studio 2012. Vse plačano različice izdelka (poklicne, itd) bi vas zgraditi okno trgovine apps. Potrebujete **Express za Windows 8** za izgradnjo apps Store okno using [expres naklada][2].

 [2]: http://www.microsoft.com/visualstudio/eng/products/visual-studio-express-products

Travnato gričevje ter citat ki postaja latenten ulitek [Cordova][3]. Ti instuctions velja za na `lib\windows-8` podimeniku.

 [3]: http://phonegap.com/download

## Nastavite nov projekt

Že lahko gradijo Windows 8 apps z uporabo v *HTML/JavaScript tir* pri roki v okno trgovine apps. Uporabite Cordova v okno trgovine apps izpostaviti isto API-jev na druge platforme, ki podpira Cordova.

*   Odprite Visual Studio 2012 in izberite **Nov projekt**.

*   Izberite **Nameščeno → predloge → → drugih jezikov JavaScript → Windows trgovina** od drevesa, in potem **Prazno App** seznam projektov. Vnesite ime projekta vam je všeč, kot so `CordovaWin8Foo` kot v tem primeru:

    ![][4]

*   Microsoft še naprej uporablja `default.html` kot privzeto domačo stran, vendar večina spletnih razvijalcev uporabo `index.html` . To je dobra ideja za to, vsaj za tekme druge platforme verjetno delate. Popraviti to, v **Solution Explorerju** preimenovati v `default.html` datoteko `index.html` . Dvokliknite na `package.appxmanifest` datoteko in spremenite **začetno stran** vrednost `index.html` :

        ![](img/guide/platforms/win8/wschangemanifest.png)


*   Vključiti `cordova.js` v vašem projektu, desno kliknite na v `js` imenik v **Solution Explorerju** in izberite **novo → Dodajanje elementa**. Poiščite v `cordova.js` pila v v `lib\windows-8` imenik.

*   Urejanje kode za `index.html` . Dodajte sklic v `cordova.js` . To storite ročno ali povlečete datoteko iz **Solution Explorerju**. Dodajte naslednje druge odvisnosti app je domačo stran:

            <!-- WinJS references -->
            <link href="//Microsoft.WinJS.1.0/css/ui-dark.css" rel="stylesheet" />
            <script src="//Microsoft.WinJS.1.0/js/base.js"></script>
            <script src="//Microsoft.WinJS.1.0/js/ui.js"></script>

            <!-- Cordova -->
            <script src="/js/cordova.js"></script>

            <!-- CordovaWin8Foo references -->
            <link href="/css/default.css" rel="stylesheet" />
            <script src="/js/default.js"></script>


*   Dodaj a `deviceready` trener dokazati Cordova deluje:

        <body>
            <p>Content goes here</p>
            <script type="text/javascript">
                console.log("Subscribing...");
                document.addEventListener("deviceready", function () {
                    navigator.notification.alert("The device is ready!");
                });
            </script>
        </body>


 [4]: {{ site.baseurl }}/static/img/guide/platforms/win8/wsnewproject.png

## Test projekta

Zagon projekta Visual Studio. Boste videli polje sporočilo pojavi:

        ![](img/guide/platforms/win8/wsalert.png)


To je to. Zdaj ste pripravljeni za izgradnjo apps Windows Store z Cordova.
