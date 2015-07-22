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

# Amazon ogenj OS konfiguracijo

V `config.xml` datoteko nadzira app's osnovne nastavitve, ki veljajo za vsako uporabo in CordovaWebView stopnje. Ta odsek podrobnosti nastavitve, ki veljajo le za Amazon ogenj OS gradi. Glej config.xml datoteke za informacije na globalno konfiguracijo možnosti.

*   `KeepRunning`(program privzeto boolean, `true` ): določa, ali je vloga ostane teče v ozadju tudi po a `pause` dogodek požarov.
    
        <preference name="KeepRunning" value="false"/>
        

*   `ErrorUrl`: Določa zmota stran, ki prikazuje v odgovor na standardne napake HTTP v območju 400-500. Kraj navedene datoteke v najvišji ravni imenika, ki vsebuje domačo stran in druge spletne sredstev.
    
        <preference name="ErrorUrl" value="error.html"/>
        

*   `LoadingDialog`: Prikaz native pogovorno okno, ko nakladanje app. Oblika vrednosti je *naslov, sporočilo*
    
        <preference name="LoadingDialog" value="Please wait, the app is loading"/>
        

*   `LoadingPageDialog`: A rojsten okno prikažete pri nalaganju podstrani v app. Oblika vrednosti je *naslov, sporočilo*
    
        <preference name="LoadingPageDialog" value="Please wait, the data is loading"/>
        

*   `LoadUrlTimeoutValue`(številka, privzeta vrednost je `20000` ): pri nalaganju strani, čas čakanja pred metanje napaka časovne omejitve. Primer navaja 10 sekund namesto 20:
    
        <preference name="LoadUrlTimeoutValue" value="10000"/>
        

*   `SplashScreen`: Ime datoteke minus razširitev v v `res/drawable` naslovnik. Različnih sredstev morajo deliti to skupno ime v različne podmape.
    
        <preference name="SplashScreen" value="splash"/>
        

*   `SplashScreenDelay`(število neplačil za `5000` ): čas splash sliko zaslona prikaže.
    
        <preference name="SplashScreenDelay" value="10000"/>