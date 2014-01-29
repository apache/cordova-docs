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

# iOS orodja ukazne vrstice

Na `cordova` pripomoček ukazne vrstice je na visoki ravni orodje, ki vam omogoča izgradnjo aplikacij na različnih platformah več naenkrat. Starejšo različico Cordova okvir zagotavlja kompleti orodja ukazne vrstice za vsako platformo. Da jih uporabljajo kot alternativa CLI, morate prenesti to različico Cordova iz [cordova.apache.org][1]. Download vsebuje ločene arhivu za vsako platformo. Razširite platformo, ki jih želite ciljati. Orodja, opisani tukaj, so običajno na voljo v najvišje ravni `bin` imenik, sicer se posvetujte **OBAVIJESNA** datoteka za podrobnejše usmeritve.

 [1]: http://cordova.apache.org

Ukazne vrstice orodja iOS so nadgrajevati lupine skripte in se zanašajo na Xcode orodja ukazne vrstice, kot `xcode-select` in`xcodebuild`.

Podatki o nizki ravni vmesnik ukazne vrstice, ki omogoča plugins, glejte Uporaba Plugman za upravljanje Plugins. Glejte Uporaba Plugins za pregled.

## Ustvarjanje projekta

Teči na `create` ukaz obstoječo pot do projekta, reverse domain slogu paket identifikator in app je prikazno ime.

    $ ./path/to/cordova-ios/bin/create /path/to/my_new_project com.example.project_name ProjectName
    

## Zgraditi projekt

    $ /path/to/my_new_project/cordova/build
    

## Zagon App na Emulator

    $ /path/to/my_new_project/cordova/run
    

## Sprošča

    $ /path/to/my_new_project/cordova/release
    

## Pisanje dnevnika

    $ /path/to/my_new_project/cordova/log