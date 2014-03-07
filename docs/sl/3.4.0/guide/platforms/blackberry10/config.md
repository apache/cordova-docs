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

# Konfiguracije blackBerry 10

V `config.xml` datoteko nadzira app's osnovne nastavitve, ki veljajo za vsako uporabo in CordovaWebView stopnje. Ta odsek podrobnosti nastavitve, ki veljajo le za BlackBerry 10 gradi. Glej config.xml datoteke za informacije na globalno konfiguracijo možnosti.

*   `ChildBrowser`( `disable` ali privzeto `enable` ): Onemogoči otrok okna brskalnika. Privzeto, apps splavitev sekundarni obrv okno razpoložiti vire, dostopne prek `window.open()` ali z določitvijo a `_blank` sidro target. Določite `disable` premostitve tega privzetega vedenja.
    
        <preference name="ChildBrowser" value="disable"/>
        

*   `PopupBlocker`( `enable` ali privzeto `disable` ): omogoča popup blocker, ki preprečuje klice na `window.open()` . Privzeto, ljudstvo prikazati v oknu brskalnika otrok. Postavljanje ugodnost v `enable` preprečuje prikaz sploh.
    
        <preference name="PopupBlocker" value="enable"/>
        

*   `WebSecurity`( `disable` ali privzeto `enable` ): nastavite na `disable` preglasiti spletnih varnostnih nastavitev, ki omogoča dostop do oddaljenih vsebine iz neznanega vira. Ta nastavitev je namenjena kot razvoj udobje samo, torej premestitev to spredaj pakiranje vaš app za distribucijo. Za izpust app, vse URIs mora biti znana in whitelisted uporabo je `<access>` element, opisana v priročniku Whitelist domene.
    
        <preference name="WebSecurity" value="disable"/>