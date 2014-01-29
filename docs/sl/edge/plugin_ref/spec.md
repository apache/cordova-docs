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

# Plugin specifikacija

Na `plugin.xml` je datoteka XML dokument v v `plugins` imenskega prostora: `http://apache.org/cordova/ns/plugins/1.0` . Vsebuje na najvišji ravni `plugin` element, ki določa plugin, in otroci, ki določajo strukturo plugin.

Vzorec plugin element:

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        xmlns:android="http://schemas.android.com/apk/res/android"
        id="com.alunny.foo"
        version="1.0.2">
    

## *plugin* Element

Je `plugin` element je element najvišje ravni, manifest za plugin. Ponaša se z naslednjimi atributi:

*   `xmlns`(obvezno): plugin imenskega prostora, `http://apache.org/cordova/ns/plugins/1.0` . Če dokument vsebuje XML iz drugih imenskih prostorih, kot so oznake, ki se doda v `AndroidManifest.xml` datoteko, tiste imenske prostore treba vključiti tudi v najvišje ravni element.

*   `id`(obvezno): reverse domain slog identifikator za plugin, kot so`com.alunny.foo`

*   `version`(obvezno): številka različice za plugin, ki ustreza naslednji major-molu-obliž slog regularni izraz:
    
        ^\d+[.]\d+[.]\d+$
        

## *motorji* in *motorjem* elementih

Podrejene elemente v `<engines>` element navedite različice Apache Cordova na osnovi ogrodij, ki ta plugin podpira. Primer:

    <engines>
        <engine name="cordova" version="1.7.0" />
        <engine name="cordova" version="1.8.1" />
        <engine name="worklight" version="1.0.0" platform="android" scriptSrc="worklight_version"/>
    </engines>
    

Podoben je `<plugin>` elementa `version` atribut, določeno različico niz mora ustrezati major-molu-obliž niz ustreza regularni izraz:

        ^\d+[.]\d+[.]\d+$
    

Elementi motorja lahko tudi določite meglenih zadetkov, da se prepreči ponovitev, in za zmanjšanje vzdrževanje posodobitvi temeljno platformo. Orodja should podporo najmanj `>` , `>=` , `<` in `<=` , na primer:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova" version="<1.8.1" />
    </engines>
    

Na `<engine>` tags ima privzeto podporo za vse glavne platforme Cordova obstaja na. Določanje na `cordova` motorju oznaka pomeni, da morajo izpolnjevati vse različice Cordova naprej poljuben plosčad atribut različice motorja. Si lahko tudi seznam posebnih platformah in njihove različice ovrže catch-all `cordova` motorja:

    <engines>
        <engine name="cordova" version=">=1.7.0" />
        <engine name="cordova-android" version=">=1.8.0" />
        <engine name="cordova-ios" version=">=1.7.1" />
    </engines>
    

Tukaj je seznam privzeti iskalniki, ki je "<engine>"tag podpira: \*"Cordoba"\*"cordova-plugman"* 'cordova-amazon-fireos' * 'cordova-android' \*"cordova-ios"\*"cordova-blackberry10"* 'cordova wp7' *"cordova wp8"*"cordova-windows8"  
* "android sdk" / / vrne najvišji Android api ravni nameščen * "apple-xcode" / / vrne xcode različico * "apple ios" / / vrne najvišji nameščena različica iOS * "apple-osx" / / vrne različico OSX * "blackberry-ndk" / / vrne native blackberry različica SDK

Navedbo, po meri temelji na Apache Cordova okvirov treba uvrstiti pod oznako motorja, kot so:

    <engines>
        <engine name="my_custom_framework" version="1.0.0" platform="android" scriptSrc="path_to_my_custom_framework_version"/>
        <engine name="another_framework" version=">0.2.0" platform="ios|android" scriptSrc="path_to_another_framework_version"/>
        <engine name="even_more_framework" version=">=2.2.0" platform="*" scriptSrc="path_to_even_more_framework_version"/>
    </engines>
    

Meri okvir temelji na Apache Cordova zahteva, da motor element vključuje naslednje atribute: `name` , `version` , `scriptSrc` , in`platform`.

*   `name`(obvezno): berljivo ime za svojo meri okvir.

*   `version`(obvezno): različica, ki vaš okvir mora imeti za namestitev.

*   `scriptSrc`(obvezno): skriptno datoteko, ki pove plugman kakšen prevod po meri okvir. V idealnem primeru, ta datoteka mora biti v najvišji ravni imenika plugin directory.

*   `platform`(obvezno): katere platforme, ki podpira vaš okvir. Lahko uporabite nadomestni znak `*` reči podprtih za vse platforme, določite več z navpičnico kot `android|ios|blackberry10` ali samo enotno platformo kot`android`.

plugman prekine z nič zbornik zakaj poljuben čep, čigar ciljni projekt izpolnjuje omejitve motorja.

Če ni `<engine>` so določene oznake, plugman poskuša namestiti v imeniku navedeni cordova projekt slepo.

## *ime* Element

Berljivo ime plugin, katerih vsebino besedila vsebuje ime plugin. Na primer:

    <name>Foo</name>
    

Ta element (še ne) obravnava lokalizacijo.

## *Opis* Element

Berljivo opis za plugin. Besedilo Vsebina elementa vsebuje opis plugin. Primer:

    <description>Foo plugin description</description>
    

Ta element (še ne) obravnava lokalizacijo.

## *avtor* Element

Plugin ime avtorja. Besedilo Vsebina elementa vsebuje ime plugin avtorja. Primer:

    <author>Foo plugin description</author>
    

## *ključne besede* Element

Ključne besede plugin. Besedilo Vsebina elementa vsebuje z vejico ločene ključne besede za opis plugin. Primer:

    <keywords>foo,bar</keywords>
    

## *dati dovoljenje* Element

Plugin licenco. Besedilo Vsebina elementa vsebuje plugin licenco. Primer:

    <license>Apache 2.0 License</license>
    

## *sredstva* Element

Enega ali več elementov v seznam datotek ali imenikov v obstati prepisovalec v Cordova app `www` imenik. Primeri:

    <!-- a single file, to be copied in the root directory -->
    <asset src="www/foo.js" target="foo.js" />
    <!-- a directory, also to be copied in the root directory -->
    <asset src="www/foo" target="foo" />
    

Vse `<asset>` tags zahtevajo tako `src` in `target` lastnosti. Web-samo plugins vsebuje večinoma `<asset>` elementov. Vse `<asset>` elementov, ki so ugnezdeni znotraj `<platform>` elementov določite posamezne spletne sredstev, kot je opisano spodaj. Atributi vključujejo:

*   `src`(obvezno): datoteka ali imenik kje v plugin paket, glede na v `plugin.xml` dokumentu. Če datoteka ne obstaja v navedeni `src` mesto, plugman ustavi obrne umestitev proces, izda obvestilo o konfliktu in zapre s kodo nič.

*   `target`(zahtevano):
    
    Datoteka ali imenik mora biti kje v Cordova app, glede na v `www` naslovnik. Sredstva lahko ciljno podimenikov, na primer:
    
    <asset src="www/new-foo.js" target="js/experimental/foo.js" />
    
    ustvarja v `js/experimental` imenik v v `www` imenik, razen če že prisotna, nato kopije na `new-foo.js` datoteke in jo preimenuje `foo.js` . Če datoteka že obstaja na ciljno mesto, plugman ustavi obrne umestitev proces, izda obvestilo o konfliktu in zapre s kodo nič.

## *JS modul* Element

Večina plugins vključujejo eno ali več datotek JavaScript. Vsak `<js-module>` oznaka ustreza JavaScript datoteke, in plugin uporabnikom prepreči imetje prišteti a `<script>` oznako za vsako datoteko. Medtem ko `<asset>` tags preprosto kopirati datoteke iz podimenika plugin v `www` , `<js-module>` oznake so veliko bolj prefinjene. Izgledajo takole:

    <js-module src="socket.js" name="Socket">
        <clobbers target="chrome.socket" />
    </js-module>
    

Ko namestite plugin z zgornjem, `socket.js` se kopira v `www/plugins/my.plugin.id/socket.js` , in doda kot vnos v `www/cordova_plugins.js` . V času obremenitve, zbornik v `cordova.js` uporablja XHR prebrati vsako datoteko in injicirajte a `<script>` tag v HTML. To doda preslikavo clobber ali zliti to primerno, kot je opisano spodaj.

*Ne* zaviti datoteko z `cordova.define` , kot je samodejno dodan. Modul je zavita v zaprtje, s `module` , `exports` , in `require` v obsegu, kot je običajen za AMD modulov.

Podrobnosti za na `<js-module>` oznako:

*   V `src` se sklicuje na datoteko v imeniku plugin glede na v `plugin.xml` datoteko.

*   Na `name` zagotavlja zadnji del ime modula. Na splošno je karkoli vam je všeč, in samo to pomembno, če želite uporabiti `cordova.require` uvoz drugih delov vaš plugins v JavaScript kodo. Ime modula za a `<js-module>` je vaš plugin `id` sledi vrednost `name` . Na primer, zgoraj, s je `id` od `chrome.socket` , je ime modula`chrome.socket.Socket`.

*   Tri oznake so dovoljene v `<js-module>` :
    
    *   `<clobbers target="some.value"/>`kaže, da je `module.exports` vstavite v `window` predmeta kot `window.some.value` . Lahko imate toliko `<clobbers>` kot želite. Vsak predmet, ni na voljo v `window` je ustvaril.
    
    *   `<merges target="some.value"/>`kaže, da bi bilo treba združiti modul s katero koli obstoječo vrednost na `window.some.value` . Če kateri koli ključ že obstaja, različica modula preglasi original. Lahko imate toliko `<merges>` kot želite. Vsak predmet, ni na voljo v `window` je ustvaril.
    
    *   `<runs/>`pomeni, da kodo mora biti določena z `cordova.require` , pa ni nameščena v `window` predmeta. To je uporabno med inicializacijo modula, izhajajo iz rutine ali drugače. Lahko imate samo do enega `<runs/>` oznako. Upoštevajte, da tudi a `<runs/>` s `<clobbers/>` ali `<merges/>` je odveč, saj tudi `cordova.require` vaš modul.
    
    *   Empty `<js-module>` še vedno nalaga in lahko acccessed v drugi moduli preko`cordova.require`.

Če `src` ne razreši obstoječo datoteko, plugman ustavi in razveljavi namestitev, izda obvestilo o problem in zapre s kodo nič.

Gnezdenje `<js-module>` elementov v `<platform>` izjavlja plosčad-poseben JavaScript modul vezi.

## *odvisnost* Element

Na `<dependency>` tag omogoča, da določite drugih plugins, od katerih je odvisna trenutno plugin. Medtem ko prihodnje različice bodo do njih dostopate od plugin počivališče, je kratkoročno plugins so neposredno sklicuje kot URL-jih `<dependency>` tags. So oblikovani kot sledi:

    <dependency id="com.plugin.id" url="https://github.com/myuser/someplugin" commit="428931ada3891801" subdir="some/path/here" />
    

*   `id`: Določa ID plugin. Mora biti globalno Enolični, in izražena v obratnem-domene slog. Medtem ko nobena od teh omejitev je trenutno uveljavljena, bodo v prihodnosti.

*   `url`: URL za plugin. To je referenčna git skladišče, ki plugman poskuša klon.

*   `commit`: To je vsako sklicevanje kreten, ki ga razume `git checkout` : vejo ali oznako ime (npr., `master` , `0.3.1` ), ali objavo haše (npr.`975ddb228af811dd8bb37ed1dfd092a3d05295f9`).

*   `subdir`: Določa, da ciljno plugin odvisnosti obstaja kot podimenik skladišču git. To je koristno, saj omogoča skladišče vsebuje več povezanih plugins, vsak individualno določeni.

V prihodnosti, bo uvedla različico omejitve in plugin skladišču bo obstaja opreti pridobivam z imenom namesto izrecno URLs.

### Odvisnost relativne poti

Če nastavite na `url` od a `<dependency>` tag `"."` in zagotoviti a `subdir` , odvisnih plugin nameščen iz istega lokalnih ali oddaljenih git skladišče kot matično plugin, ki določa na `<dependency>` oznako.

Upoštevajte, da je `subdir` vedno določa pot glede na *koren* git skladišče, ne starševski vtičnik. To velja tudi, če ste namestili plugin z lokalno potjo neposredno nanj. Plugman najde koren git skladišče in nato poišče drugi plugin od tam.

## *platforma* Element

Na `<platform>` tag identificira platforme, ki so povezane domorodno kodo ali zahtevajo spremembe njihovega konfiguracijske datoteke. Orodja, ki uporabljajo to specifikacijo lahko identificirajo podprte platforme in namestiti kodo v Cordova projektov.

Plugins brez `<platform>` tags so predpostavlja samo JavaScript, in zato installable na vse platforme.

Vzorec platformo tag:

    <platform name="android">
        <!-- android-specific elements -->
    </platform>
    <platform name="ios">
        <!-- ios-specific elements -->
    </platform>
    

Zahtevane `name` atribut identificira platformo kot podpira, povezovanje elementa otrok s to platformo.

Platforma imena mora biti črka. Platforma imena, kot samovoljno odločili, so navedene:

*   Amazon-fireos
*   Android
*   blackberry10
*   IOS
*   WP7
*   WP8

## *izvorne datoteke* Element

Na `<source-file>` elementa, identificira izvršljiv izvorno kodo, ki se vgradi v projekt. Primeri:

    <!-- android -->
    <source-file src="src/android/Foo.java"
                    target-dir="src/com/alunny/foo" />
    <!-- ios -->
    <source-file src="src/ios/CDVFoo.m" />
    <source-file src="src/ios/someLib.a" framework="true" />
    <source-file src="src/ios/someLib.a" compiler-flags="-fno-objc-arc" />
    

Podpira naslednje atribute:

*   `src`(obvezno): mesto datoteke glede na `plugin.xml` . Če v `src` ni mogoče najti datoteke, plugman ustavi in razveljavi namestitev, izda obvestilo o težavi in zapre s kodo nič.

*   `target-dir`: Imenik, v katerega je treba kopirati datoteke glede korena Cordova projekta. V praksi, to je najbolj pomembno za Java Platform, kjer je datoteka v v `com.alunny.foo` paket mora biti nameščena v v `com/alunny/foo` naslovnik. Za platforme, kjer Izvorni imenik ni pomembno, naj izpusti ta atribut.
    
    S sredstvi, če je `target` od a `source-file` bi prepisati obstoječe datoteke, plugman ustavi in razveljavi namestitev, izda obvestilo o težavi in zapre s kodo nič.

*   `framework`(samo za iOS): Če nastavite na `true` , doda tudi določene datoteke kot okvir projekta.

*   `compiler-flags`(samo za iOS): Če nastavite, dodeli določeno prevajalnik zastavice za določen izvorne datoteke.

## *config-file* Element

Identificira na podlagi XML konfiguracijsko datoteko spremeniti, kjer v ta dokument spremembi naj potekajo in kaj je treba spremeniti.

So dveh vrst datotek, ki so bile preskušene za spremembo s tem elementom `xml` in `plist` datotek.

Je `config-file` element omogoča samo dodati novo drevo je XML dokumenta. Otroci so XML literals vstavljeno v ciljnem dokumentu.

Primer za XML:

    <config-file target="AndroidManifest.xml" parent="/manifest/application">
        <activity android:name="com.foo.Foo" android:label="@string/app_name">
            <intent-filter>
            </intent-filter>
        </activity>
    </config-file>
    

Primer za `plist` :

    <config-file target="*-Info.plist" parent="CFBundleURLTypes">
        <array>
            <dict>
                <key>PackageName</key>
                <string>$PACKAGE_NAME</string>
            </dict>
        </array>
    </config-file>
    

Podpira naslednje atribute:

*   `target`:
    
    Pila v obstati povedno določilo ter pot koren Cordova projekta.
    
    Cilj lahko vključujejo nadomestne ( `*` ) elementov. V tem primeru plugman rekurzivno preišče imeniško strukturo projekta in uporablja prvo tekmo.
    
    Na iOS, lokacije konfiguracijske datoteke glede na korenski imenik projekta ni znano, tako določa cilj `config.xml` razreši`cordova-ios-project/MyAppName/config.xml`.
    
    Če navedena datoteka ne obstaja, orodje prezre sprememba konfiguracije in nadaljuje namestitev.

*   `parent`: Na XPath selektor navajanje staršev elementov dodati v datoteki config. Če uporabljate absolutne selektorje, uporabite nadomestni znak ( `*` ) določiti korenski element, npr.`/*/plugins`.
    
    Za `plist` datoteke, je `parent` ugotovi, pod kateri nadrejeni ključ naj vstavi določeno XML.
    
    Če selektor ne razreši otrok od navedenega dokumenta, orodje ustavi in obrnjeno umestitev proces, izda opozorilo, in zapre s kodo nič.

## *plugins-plist* Element

To je *zastarel* , saj velja le cordova-ios 2.2.0 in spodaj. Uporaba je `<config-file>` oznaka za novejše različice Cordova.

Primer:

    <config-file target="config.xml" parent="/widget/plugins">
        <feature name="ChildBrowser">
            <param name="ios-package" value="ChildBrowserCommand"/>
        </feature>
    </config-file>
    

Določa ključ in vrednost v privesiti v ustrezne `AppInfo.plist` datoteke v projektu Cordova iOS. Na primer:

    <plugins-plist key="Foo" string="CDVFoo" />
    

## *vir datoteke* in *datoteke za glave* elementov

Kot izvorne datoteke, vendar posebej za platforme, kot so iOS da razlikujete od izvorne datoteke, glave in virov. iOS primeri:

    <resource-file src="CDVFoo.bundle" />
    <resource-file src="CDVFooViewController.xib" />
    <header-file src="CDVFoo.h" />
    

Android primer:

    < datoteko sredstev src="FooPluginStrings.xml" target="res/values/FooPluginStrings.xml" / >
    

## *lib-datoteke* Element

Kot vir, vir in glava datoteke, vendar posebej za platforme, kot so BlackBerry 10, ki uporabljajo ustvarjajo knjižnice. Primeri:

    <lib-file src="src/BlackBerry10/native/device/libfoo.so" arch="device" />
    <lib-file src="src/BlackBerry10/native/simulator/libfoo.so" arch="simulator" />
    

Podprtih atribute:

*   `src`(obvezno): mesto datoteke glede na `plugin.xml` . Če `src` ni mogoče najti, plugman ustavi in razveljavi namestitev, izdaja a svarilen približno problem, in zapre s kodo nič.

*   `arch`: Arhitektura, ki je `.so` je bila zgrajena datoteka, bodisi `device` ali`simulator`.

## *okvir* Element

Opredeljuje okvir (običajno del OS/platform) na katerem plugin je odvisna.

Primeri:

    <framework src="libsqlite3.dylib" />
    <framework src="social.framework" weak="true" />
    

Na `src` atribut določa okvir, ki plugman poskuša dodati Cordova projekt, na pravi način za določeno platformo.

Izbirnem `weak` atribut je logična vrednost, ki označuje, ali bi morali biti okviru šibko povezani. Privzeta vrednost je`false`.

## *info* Element

Dodatne informacije za uporabnike. To je uporabno, ko potrebujete poseben lestev, ki je ni mogoče zlahka avtomatizirano ali so izven obsega plugman's. Primeri:

    <info>
    You need to install __Google Play Services__ from the `Android Extras` section using the Android SDK manager (run `android`).
    
    You need to add the following line to your `local.properties`
    
    android.library.reference.1=PATH_TO_ANDROID_SDK/sdk/extras/google/google_play_services/libproject/google-play-services_lib
    </info>
    

## Spremenljivke

V nekaterih primerih plugin morda morali spremembe konfiguracije odvisna od ciljnega programa. Na primer, v register za C2DM na Android app katerega paket id je `com.alunny.message` zahtevala dovoljenje, kot so:

    <uses-permission
    android:name="com.alunny.message.permission.C2D_MESSAGE"/>
    

V takšnih primerih, kjer bo vsebina postavljena od na `plugin.xml` datoteke ni znana pred časom, spremenljivke lahko navede znak za dolar sledi niz tiskanimi črkami, številke ali podčrtaji. V zgornjem primeru, je `plugin.xml` datoteke vključujejo to oznako:

    <uses-permission
    android:name="$PACKAGE_NAME.permission.C2D_MESSAGE"/>
    

plugman zamenja sklice spremenljivk z določeno vrednost ali prazen niz, če ne najde. Lahko zazna vrednost spremenljivke referenc (v tem primeru iz na `AndroidManifest.xml` datoteko) ali določen uporabnik orodja; natančen postopek je odvisen od določeno orodje.

plugman lahko zahteva uporabnik v poseben značaj a plugin zahtevane spremenljivke. Primer API tipke za C2M in Google Maps lahko določena kot argument ukazne vrstice:

    plugman --platform android --project /path/to/project --plugin name|git-url|path --variable API_KEY=!@CFATGWE%^WGSFDGSDFW$%^#$%YTHGsdfhsfhyer56734
    

Narediti spremenljivko obvezna, je `<platform>` oznaka mora vsebovati a `<preference>` oznako. Na primer:

    <preference name="API_KEY" />
    

plugman preveri, da so te zahtevane nastavitve opravil v. V nasprotnem primeru, to opozoriti uporabnika kako poteči spremenljiv v in izhod s šifro ni nič.

Nekatera imena spremenljivk je treba rezervirati, kot prisluškovati spodaj.

## $PACKAGE_NAME

Obratno-domene slog Enolični identifikator za paket, ki ustreza na `CFBundleIdentifier` na iOS ali `package` atribut najvišje ravni `manifest` element v je `AndroidManifest.xml` datoteke.