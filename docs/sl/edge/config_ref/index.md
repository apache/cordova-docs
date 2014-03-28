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

# Config.xml datoteke

Številne vidike vedenje app je mogoče nadzorovati z globalno nastavitveno datoteko, `config.xml` . Ta platforma agnostik XML datoteke je urejen temelji na specifikaciji W3C's [Pakirani Web Apps (Widgets)][1] , in razširiti, če želite določiti jedro Cordova API funkcije, plugins in nastavitve za posamezne.

 [1]: http://www.w3.org/TR/widgets/

Za projekte, ustvarjene z Cordova CLI (opisano v vmesnik ukazne vrstice), lahko te datoteke najdete v najvišji ravni imenika:

        app/config.xml
    

Upoštevajte, da pred 3.3.1-0.2.0 različico, datoteko obstajala na `app/www/config.xml` , in da imajo tukaj še vedno podprt.

Čas using CLI zgraditi projekt, različice datoteke pasivno prekopirate v različnih `platforms/` podimenikov, na primer:

        app/platforms/ios/AppName/config.xml
        app/platforms/blackberry10/www/config.xml
        app/platforms/android/res/xml/config.xml
    

Ta oddelek podrobno globalno in cross-platform konfiguracijo možnosti. Videli v nadaljevanju, za posamezne možnosti:

*   iOS konfiguracijo
*   Android konfiguracijo
*   Konfiguracije blackBerry 10

Poleg različnih možnosti konfiguracije, navedenih spodaj, lahko konfigurirate tudi aplikacijskimi jedro niz podob za vsako ciljno platformo. Več informacij najdete ikone in brizg zaslon.

## Jedro konfiguracijo elementov

Ta primer prikazuje privzete `config.xml` nastanejo v CLI `create` ukaz, opisane v vmesnik ukazne vrstice:

        <widget id="com.example.hello" version="0.0.1">
            <name>HelloWorld</name>
            <description>
                A sample Apache Cordova application that responds to the deviceready event.
            </description>
            <author email="dev@callback.apache.org" href="http://cordova.io">
                Apache Cordova Team
            </author>
            <content src="index.html" />
            <access origin="*" />
        </widget>
    

Naslednje konfiguracije elementi se prikažejo v najvišje ravni `config.xml` datoteke, in so podprte na vseh podprtih platformah Cordova:

*   Na `<widget>` elementa `id` atribut določa identifikator app je obratno-domene, in `version` njeno polno različico število izraženo v manjših/večjih/obliž zapisu.

*   Je `<name>` element določa app je uradno ime, kot je prikazano na zaslonu naprave doma in v app store vmesnikov.

*   Na `<description>` in `<author>` elementov določite metapodatkov in kontaktne podatke, ki se lahko pojavijo v app trgovina oglasi.

*   Izbirnem `<content>` element opredeljuje app je začetno stran v najvišje ravni web directory sredstvih. Privzeta vrednost je `index.html` , ki se običajno pojavi v projekt je najvišje ravni `www` imenik.

*   `<access>`elementi določajo nabor zunanje domene, app je dovoljeno, da komunicirajo. Privzeta vrednost, prikazano zgoraj omogoča dostop do katerega koli strežnika. Priročniku domene belo listo za podrobnosti.

*   Na `<preference>` oznaka določa različne možnosti kot parov `name` / `value` atributi. Vsaka prednost `name` je case-insensitive. Mnoge nastavitve so edinstveni za posebne platforme, kot je navedeno na vrhu te strani. V nadaljevanju podrobno nastavitve, ki veljajo za več platform.

## Globalne nastavitve

Naslednje globalne nastavitve veljajo za vse platforme:

*   `Fullscreen`vam omogoča, da skriti vrstici stanja na vrhu zaslona. Privzeta vrednost je `false` . Primer:
    
        <preference name="Fullscreen" value="true" />
        

*   `Orientation`vam omogoča, da zaklenete usmerjenost in preprečiti vrtijo v odziv na spremembe v usmerjenosti vmesnik. Možni vrednosti sta `default` , `landscape` , ali `portrait` . Primer:
    
        <preference name="Orientation" value="landscape" />
        
    
    **Opomba**: na `default` vrednost pomeni *oboje* pokrajina ter podoba usmeritve so omogočene. Če želite uporabiti privzete nastavitve vsako platformo (ponavadi portret samo), pustite ta oznako za `config.xml` datoteke.

## Multi-Platform nastavitve

Veljajo naslednje nastavitve več kot ena platforma, ampak ne vse od njih:

*   `DisallowOverscroll`(program privzeto boolean, `false` ): nastavljena na `true` Če ne želite vmesnik za prikaz vse povratne informacije, ko uporabniki, se pomaknite čez začetek ali konec vsebin.
    
        <preference name="DisallowOverscroll" value="true"/>
        
    
    Velja za Android in iOS. Na iOS, overscroll kretnje vzrok vsebine Odklonijo nazaj v prvotno lego. Na Android, ki jih proizvajajo bolj subtilen učinek žareče obod vrh ali dno vsebine.

*   `BackgroundColor`: Nastavite barvo ozadja app. Podpira štiribajtno čarovnica vrednost, z prvi bajt, ki predstavlja kanal alfa, in standardni RGB vrednosti za naslednje tri bytes. Primer navaja modro:
    
        <preference name="BackgroundColor" value="0xff0000ff"/>
        
    
    Velja za Android in BlackBerry. Preglasi CSS, ki so sicer na voljo na *vseh* platformah, na primer:`body{background-color:blue}`.

*   `HideKeyboardFormAccessoryBar`(program privzeto boolean, `false` ): nastavite na `true` skriti dodatne orodne vrstice, ki se prikaže nad tipkovnico, pomagajo uporabnikom pluti iz en obrazec vložek v drugo.
    
        <preference name="HideKeyboardFormAccessoryBar" value="true"/>
        
    
    Velja za iOS in BlackBerry.

## *Funkcijo* Element

Če uporabljate CLI razvijanje aplikacij, uporabljate v `plugin` želite omogočiti napravo API. To does ne ublažiti najvišje ravni `config.xml` Datoteka, tako je `<feature>` element se ne uporablja za potek dela. Če delate neposredno v je SDK in uporabo plosčad-poseben `config.xml` datoteke kot vir, uporabite na `<feature>` tag omogočiti napravo ravni API in zunanjih plugins. Se pogosto pojavijo z vrednosti po meri v posamezne `config.xml` datoteke. Na primer, tukaj je kako opredeliti naprave API za Android projektov:

        <feature name="Device">
            <param name="android-package" value="org.apache.cordova.device.Device" />
        </feature>
    

Tukaj je, kako se prikaže element za iOS projektov:

        <feature name="Device">
            <param name="ios-package" value="CDVDevice" />
        </feature>
    

Glej sklic API za podrobnosti o tem, kako določiti vsako funkcijo. Glej Plugin razvoj vodnik za več informacij o plugins.