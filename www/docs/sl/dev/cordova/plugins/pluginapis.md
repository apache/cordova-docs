---
license: >
    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

title: Plugin API
---

# Plugin API

Cordova ladij z minimalen nabor vmesnikov API, in projektov dodajte Kaj ekstra API, ki zahtevajo prek plugins.

Lahko poiščete s pomočjo vseh obstoječih plugins uporabo [Plugin registra][1].

 [1]: http://plugins.cordova.io/

Tradicionalni sklop Cordova plugins, so naslednji:

*   [Stanje baterije][2]
    
    > Spremlja stanje baterije naprave.

*   [Kamero][3]
    
    > Zajem fotografij z uporabo naprave kamera.

*   [Stiki][4]
    
    > Delo z bazo podatkov kontaktne naprave.

*   [Naprava][5]
    
    > Zbrati določene informacije o napravi.

*   [Naprava gibanja (pospeškov)][6]
    
    > Pokrije zaznavalo naprave.

*   [Naprava usmerjenost (Kompas)][7]
    
    > Pridobitev smer, ki kaže naprave.

*   [Pogovorna okna][8]
    
    > Vizualne naprave obvestila.

*   [Datotečni sistem][9]
    
    > Trnek v rojsten pila sistem prek JavaScript.

*   [Prenos datotek][10]
    
    > Trnek v rojsten pila sistem prek JavaScript.

*   [Geolocation][11]
    
    > Ozavestiti vloge lokacijo.

*   [Globalizacija][12]
    
    > Omogočiti predstavitev predmeta, značilne za področne nastavitve.

*   [InAppBrowser][13]
    
    > Launch URL-jev v drugem primerku brskalnika v app.

*   [Media][14]
    
    > Snemanje in predvajanje zvočnih datotek.

*   [Mediji zajema][15]
    
    > Zajemanje predstavnostne datoteke z uporabo naprave media zajem vlog.

*   [Omrežju informacij (povezava)][16]
    
    > Hitro preverite stanje omrežja in mobilnega omrežja podatki.

*   [Splashscreen][17]
    
    > Prikaz in skrivanje aplikacije brizg zaslon.

*   [Vibracij][18]
    
    > API vibrirajo naprave.

 [2]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md
 [3]: https://github.com/apache/cordova-plugin-camera/blob/master/doc/index.md
 [4]: https://github.com/apache/cordova-plugin-contacts/blob/master/doc/index.md
 [5]: https://github.com/apache/cordova-plugin-device/blob/master/doc/index.md
 [6]: https://github.com/apache/cordova-plugin-device-motion/blob/master/doc/index.md
 [7]: https://github.com/apache/cordova-plugin-device-orientation/blob/master/doc/index.md
 [8]: https://github.com/apache/cordova-plugin-dialogs/blob/master/doc/index.md
 [9]: https://github.com/apache/cordova-plugin-file/blob/master/doc/index.md
 [10]: https://github.com/apache/cordova-plugin-file-transfer/blob/master/doc/index.md
 [11]: https://github.com/apache/cordova-plugin-geolocation/blob/master/doc/index.md
 [12]: https://github.com/apache/cordova-plugin-globalization/blob/master/doc/index.md
 [13]: https://github.com/apache/cordova-plugin-inappbrowser/blob/master/doc/index.md
 [14]: https://github.com/apache/cordova-plugin-media/blob/master/doc/index.md
 [15]: https://github.com/apache/cordova-plugin-media-capture/blob/master/doc/index.md
 [16]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md
 [17]: https://github.com/apache/cordova-plugin-splashscreen/blob/master/doc/index.md
 [18]: https://github.com/apache/cordova-plugin-vibration/blob/master/doc/index.md

Non-angleški prevodi teh dokumentov plugin je mogoče najti z iskanjem na starejše različice Cordova dokumentacije. Uporabite spustni meni zelo top-desno na tej spletni strani za preklop različice.
