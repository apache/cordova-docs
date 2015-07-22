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

# Windows Phone orodja ukazne vrstice

Na `cordova` pripomoček ukazne vrstice je na visoki ravni orodje, ki vam omogoča izgradnjo aplikacij na različnih platformah več naenkrat. Starejšo različico Cordova okvir zagotavlja kompleti orodja ukazne vrstice za vsako platformo. Da jih uporabljajo kot alternativa CLI, morate prenesti to različico Cordova iz [cordova.apache.org][1]. Download vsebuje ločene arhivu za vsako platformo. Razširite platformo, ki jih želite ciljati. Orodja, opisani tukaj, so običajno na voljo v najvišje ravni `bin` imenik, sicer se posvetujte **OBAVIJESNA** datoteka za podrobnejše usmeritve.

 [1]: http://cordova.apache.org

Podatki o nizki ravni vmesnik ukazne vrstice, ki omogoča plugins, glejte Uporaba Plugman za upravljanje Plugins. Glejte Uporaba Plugins za pregled.

## Windows Phone

Orodja ukazne vrstice Windows Phone podpira ustvarjanje, gradnjo in vodenje novih projektov. Ukazi mora teči cmd ali powershell pozivniku.

WP8 repo zdaj vsebuje kodo za gradnjo WP7 + WP8 apps. Z repo je podimenikov, za vsako: `wp7/` in`wp8/`.

## Ustvarjanje projekta

So 2 ways iti o ustvarjanju nove Apache Cordova WP7 ali WP8 aplikacije.

### Teči Batch datoteko, da ustvarite in namestite tudi predloge

*   Vsebuje koren repo a `createTemplates.bat` pila. Če dvokliknete to ustvarja dva `.zip` datoteke: `CordovaWP7_x_x_x.zip` in `CordovaWP8_x_x_x.zip` , kjer *x.x.x* predstavlja številko trenutne različice. Enostavno uporabo teh datotek v Visual Studio, ulitek jih v `My Documents\Visual Studio
2012\Templates\ProjectTemplates\` . Potem ste sposobni ustvariti nov Apache Cordova Windows Phone aplikacije iz Visual Studio **File → New Project** meni.

*   Če zaženete paketno datoteko iz ukazne vrstice, lahko pokličete tudi z parameter za samodejno namestitev

Prost dostop scenarij:

    >createTemplates.bat -install
    

### Uporaba ustvari skripte v ukazni vrstici

Teči na `create` ukaz obstoječo pot do projekta, reverse domain slogu paket identifikator in app je prikazno ime. Tukaj je sintakso za Windows Phone 7 in 8:

    >.\wp7\bin\create PathToNewProject [ PackageName ] [ AppName ]
    >.\wp8\bin\create PathToNewProject [ PackageName ] [ AppName ]
    
    >PathToNewProject : The path to where you wish to create the project
    >PackageName      : The namespace for the project (default is Cordova.Example)
    >AppName          : The name of the application (default is CordovaWP8AppProj or CordovaWP7AppProj)
    
    >examples:
    >.\wp7\bin\create C:\path\to\my_new_project
    >.\wp8\bin\create C:\path\to\my_new_project io.cordova.example CordovaWP8App
    

Začetek Visual Studio in odprite datoteko rešitev (.sln) v (C:\path\to\my\_new\_project)

Graditi ter prost dostop to

## Gradnjo projekta (čisto, nato pa graditi)

*   Iskanje napak
    
    $ C:\path\to\my\_new\_project\cordova\build --debug

*   Javnost
    
    $ C:\path\to\my\_new\_project\cordova\build --release

## Tekmovanje v teku App

Zaženite ukaz "teči" z spodnje *izbirne* parametre

*   Specifikacija tarča. To vključuje `--emulator` , `--device` , ali`--target=<targetID>`.

*   Zgraditi specifikacija. To vključuje `--debug` , `--release` , ali`--nobuild`.
    
    $ C:\path\to\my\_new\_project\cordova\run \[Target\] \[Build\]

Privzeto je `run` ukaz ni klican z `--emulator --debug` Če zastave niso navedeni.

## Čiščenje

    $ C:\path\to\my_new_project\cordova\clean