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
        

*   `LoadUrlTimeoutValue`(številka, privzeto v `20000` , 20 sekund): pri nalaganju strani, čas čakanja pred metanje napaka časovne omejitve. Primer navaja 10 sekund namesto 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Ime datoteke minus razširitev v v `res/drawable` naslovnik. Različnih sredstev morajo deliti to skupno ime v različne podmape.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(število neplačil za `5000` ): čas splash sliko zaslona prikaže.
    
        <preference name="SplashScreenDelay" value="10000"/>
        

*   `InAppBrowserStorageEnabled`(program privzeto boolean, `true` ): kontrole ali strani odpreti za InAppBrowser dostop do iste localStorage in WebSQL shranjevanje kot strani odpre privzeti brskalnik.