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

# Android orodja ukazne vrstice

Na `cordova` pripomoček ukazne vrstice je na visoki ravni orodje, ki vam omogoča izgradnjo aplikacij na različnih platformah več naenkrat. Starejšo različico Cordova okvir zagotavlja kompleti orodja ukazne vrstice za vsako platformo. Da jih uporabljajo kot alternativa CLI, morate prenesti to različico Cordova iz [cordova.apache.org][1]. Download vsebuje ločene arhivu za vsako platformo. Razširite platformo, ki jih želite ciljati. Orodja, opisani tukaj, so običajno na voljo v najvišje ravni `bin` imenik, sicer se posvetujte **OBAVIJESNA** datoteka za podrobnejše usmeritve.

 [1]: http://cordova.apache.org

Podatki o nizki ravni vmesnik ukazne vrstice, ki omogoča plugins, glejte Uporaba Plugman za upravljanje Plugins. Glejte Uporaba Plugins za pregled.

## Ustvarjanje projekta

Teči na `create` ukaz obstoječo pot do projekta, reverse domain slogu paket identifikator in app je prikazno ime. Tukaj je sintakso za Mac in Windows:

    $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    $ C:\path\to\cordova-android\bin\create.bat C:\path\to\project com.example.project_name ProjectName
    

## Graditi

To očisti nato gradi projekt.

Debug na Mac ali Windows:

    $ /path/to/project/cordova/build --debug
    $ C:\path\to\project\cordova\build.bat --debug
    

Javnost o Mac ali Windows:

    $ /path/to/project/cordova/build --release
    $ C:\path\to\project\cordova\build.bat --release
    

## Zagon App

Je `run` ukaz sprejme naslednje *izbirne* parametre:

*   Specifikacija tarča. To vključuje `--emulator` , `--device` , ali`--target=<targetID>`.

*   Zgraditi specifikacija. To vključuje `--debug` , `--release` , ali`--nobuild`.
    
    $ /path/to/project/cordova/run \[Target\] \[Build\] $ C:\path\to\project\cordova\run.bat \[Target\] \[Build\]

Ne pozabite ustvariti vsaj en Android navidezne naprave, drugače boste pozvani, da to storijo z je `android` ukaz. Če več kot eno AVD je na voljo kot cilj, boste pozvani, da izberete eno. Privzeto je `run` ukaz zazna priključeno napravo ali trenutno teče emulator, če naprave ni mogoče najti.

## Pisanje dnevnika

    $ /path/to/project/cordova/log
    $ C:\path\to\project\cordova\log.bat
    

### Čiščenje

    $ /path/to/project/cordova/clean
    $ C:\path\to\project\cordova\clean.bat