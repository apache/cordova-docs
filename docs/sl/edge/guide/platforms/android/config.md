---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied. See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Android konfiguracijo

V `config.xml` datoteko nadzira app's osnovne nastavitve, ki veljajo za vsako uporabo in CordovaWebView stopnje. Ta odsek podrobnosti nastavitve, ki veljajo le za Android gradi. Glej config.xml datoteke za informacije na globalno konfiguracijo možnosti.

*   `KeepRunning`(program privzeto boolean, `true` ): določa, ali je vloga ostane teče v ozadju tudi po a `pause` dogodek požarov. Opomba: Ta nastavitev FALSE ne bo ubil app po dogodku premor, bo samo zaustaviti izvajanje kode v spletni pogled cordova, medtem ko app je v ozadju.
    
        <preference name="KeepRunning" value="false"/>
        

*   `LoadUrlTimeoutValue`(številka v milisekundah, privzeto v `20000` , 20 sekund): pri nalaganju strani, čas čakanja pred metanje napaka časovne omejitve. Primer navaja 10 sekund namesto 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`(string, privzete nastavitve za `splash` ): ime datoteke minus razširitev v v `res/drawable` naslovnik. Različnih sredstev morajo deliti to skupno ime v različne podmape.
    
        <preference name="SplashScreen" value="mySplash"/>
        

*   `SplashScreenDelay`(število v milisekundah, privzete nastavitve za `3000` ): čas splash sliko zaslona prikaže.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(program privzeto boolean, `true` ): kontrole ali strani odpreti za InAppBrowser dostop do iste localStorage in WebSQL shranjevanje kot strani odpre privzeti brskalnik.
    
        <preference name="InAppBrowserStorageEnabled" value="true"/>
        

*   `LoadingDialog`(string, privzete nastavitve za `null` ): če nabor, prikaže pogovorno okno z določenim naslovom in sporočilo, in spinner, pri nalaganju prve strani zahtevka. Naslov in sporočilo so ločene z vejico v ta vrednost niz, in da vejica je odstranjen, preden se prikaže pogovorno okno.
    
        <preference name="LoadingDialog" value="My Title,My Message"/>
        

*   `LoadingPageDialog`(string, privzete nastavitve za `null` ): enako kot `LoadingDialog` , ampak za nakladanje vsake strani po prvi strani v aplikaciji.
    
        <preference name="LoadingPageDialog" value="My Title,My Message"/>
        

*   `ErrorUrl`(Program privzeto URL, `null` ): Če nastavite, bo prikazal napotitev stran na napake pri uporabi namesto pogovorno okno z naslovom "Uporaba zmota".
    
        <preference name="ErrorUrl" value="myErrorPage.html"/>
        

*   `ShowTitle`(program privzeto boolean, `false` ): Pokaži naslov na vrhu zaslona.
    
        <preference name="ShowTitle" value="true"/>
        

*   `LogLevel`(string, privzete nastavitve za `ERROR` ): Nastavi raven minimalne dnevnika, skozi katere dnevnik bo mogoče filtrirati sporočila iz vaše prijave. Veljavne vrednosti so `ERROR` , `WARN` , `INFO` , `DEBUG` , in`VERBOSE`.
    
        <preference name="LogLevel" value="VERBOSE"/>
        

*   `SetFullscreen`(program privzeto boolean, `false` ): enako kot v `Fullscreen` parametra v globalno konfiguracijo datoteke xml. Ta element, značilne za Android je odsvetovana v prid globalne `Fullscreen` element, in bo v prihodnji različici odstranjeno.