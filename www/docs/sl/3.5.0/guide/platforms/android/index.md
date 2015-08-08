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

# Vodnik za platformo Android

Ta vodič pokaže, kako zaiti ki gre gor vaš SDK razvojno okolje za uvajanje Cordova aplikacije za Android naprave. To vas popelje skozi postopek za namestitev Android SDK, odpiranje Android projekta v Eclipse SDK in uvajanje emulator ali napravo. Boste morali slediti to vodič umestiti vsaj Android SDK, ne glede na kateri poteka dela, ki si sledijo. ( *Spletni projekt Dev* in *Native platformo Dev* poteke zahtevajo Android SDK nameščen in dostopna preko vaše poti.)

Glej naslednje podrobnejše informacije značilne za platformo:

*   Android konfiguracijo
*   Spletni Android pogledi
*   Android Plugins
*   Nadgradnji Android
*   Android orodja ukazne vrstice

Orodja ukazne vrstice zgoraj se nanašajo na različicah Cordova 3.0. Glej The vmesnik ukazne vrstice za informacije o trenutni vmesnik.

## Zahteve in podporo

Si oglejte [sistemske zahteve][1] za Android SDK.

 [1]: http://developer.android.com/sdk/index.html

Cordova podpira Android 2.2, 2.3 in 4.x. Praviloma, so odsvetovana platforme, kot se potaplja pod 5 % na Googlov [distribucije blatnik][2].

 [2]: http://developer.android.com/about/dashboards/index.html

<!--
NOTE, doc said:
- Android 2.1 (Deprecated May 2013)
- Android 3.x (Deprecated May 2013)
-->

Razvijalci uporabljajte z `cordova` utility, v povezavi z Android SDK. Glej The vmesnik ukazne vrstice za informacije kako umestiti to, dodajte projektov, nato gradite in objavljajte projekt.

Namestite Android SDK od [Developer.Android.com/SDK][3]. Android sdk razdeli, kot je "adt-snop -<os>-<arch>-<ver>"datoteko. Na windows, adt-snop pakirani monter. Na OSX in Linux, nekomplicirano odmotati "adt-snop" v mesto hranite razvojna orodja. [Podrobnejše informacije o Android SDK namestitveni program lahko najdete tukaj][4]

 [3]: http://developer.android.com/sdk/
 [4]: http://developer.android.com/sdk/installing/bundle.html

Za Cordova orodja ukazne vrstice za delo, morate vključiti v SDK `tools` in `platform-tools` imenikov v vaš STEZA okolje. Na Mac, lahko uporabite urejevalnik besedil tvoriti ali ublažiti z `~/.bash_profile` datoteko, dodal vrstico, kot sledi, odvisno od tega, kjer SDK namesti:

    izvozite poti = ${pot}: / razvoj/adt-snop/sdk/platformo-orodja: / razvoj/adt-snop / / orodja sdk


To izpostavlja orodja SDK v Novoodprti terminalsko okno. Sicer zaženite to na voljo v trenutni seji:

    $ vir ~/.bash_profile


V ublažiti STEZA okolje na Windows 7:

*   Kliknite na **Start** meniju v spodnjem levem kotu namizja, z desno miškino tipko na **računalniku**, kliknite **lastnosti**.

*   Kliknite **Dodatne nastavitve sistema** v stolpcu na levi.

*   V pogovornem oknu nastali pritisnite **Spremenljivke okolja**.

*   Izberite spremenljivko **PATH** in pritisnite **Uredi**.

*   Privesiti sledeč poti, kjer ste namestili SDK, na primer na osnovi:

        ;C:\Development\adt-bundle\sdk\platform-tools;C:\Development\adt-bundle\sdk\tools


*   Vrednost shranite in zaprite obeh pogovornih oknih.

Prav tako morate omogočiti Java in Ant. plan a zapoved uren ter stavek `java` , in tudi vnesite `ant` . Dodaj pot kar uspelo teči:

        ;%JAVA_HOME%\bin;%ANT_HOME%\bin


## Odprite projekt v SDK

Uporaba na `cordova` korist zaiti ki gre gor a nov projekt, kot je opisano v The Cordova The vmesnik ukazne vrstice. Na primer, v a naslovnik izvorne kode:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add android
        $ cordova build


Ko ga enkrat ustvariš, tukaj je kako rabiti SDK spremeniti:

*   Splavitev uporaba **mrk** .

*   Izberite element menija **Nov projekt** .

*   Izberite **Android projekt iz obstoječe kode** izhajajo pogovornem oknu in pritisnite **naslednji**: ![][5]

*   Pluti v `hello` , ali katerikoli imenik ste ustvarili za projekt, nato da je `platforms/android` podimeniku.

*   Poskrbite, da sta `hello` in `hello-CordovaLib` so za uvoz izbranih projektov. V `hello-CordovaLib` projekta je potrebno od Cordova 3.3.0 ker Cordova se sedaj uporablja kot Android knjižnica namesto datoteka s pripono .jar.

*   Pritisnite **konča**.

 [5]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_new_project.png

Ko se odpre okno Eclipse, rdeč **X** lahko zdi, da kažejo nerešenih problemov. Če je tako, sledite naslednjim korakom dodatne:

*   Desni klik na imeniku projekta.

*   V nastali **premožen** dialogičen, izbrati **Android** iz podokna za krmarjenje.

*   Za projekt graditi ciljni, izberite najvišjo raven Android API ste namestili.

*   Kliknite v **redu**.

*   Izberite **Clean** iz menija **projekt** . To naj popravi vse napake v projektu.

## Razporedi na Emulator

Lahko uporabite na `cordova` korist teči app v emulator, ali vi moči prost dostop to v SDK. Kakorkoli, SDK najprej mora biti konfiguriran za prikaz vsaj eno napravo. Narediti, z upraviteljem Android SDK, Java aplikacija, ki poteka ločeno od mrk. Obstajata dva načina za odpiranje:

*   Prost dostop `android` v ukazni vrstici.

*   V mrk, pritisnite to ikono v orodni vrstici:

    ![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/android/eclipse_android_sdk_button.png

Ko je odprt, Android SDK Manager prikaže različne knjižnicami:

![][7]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_window.png

In izberite **Orodja → upravljanje AVDs** (Android navidezne naprave) izberite vsak element iz **Opredelitve napravo** v pogovornem oknu nastalo:

![][8]

 [8]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_device.png

Press **Ustvarijo AVD**, po želji spremenite ime, pritisnite **OK** , da bi sprejeli spremembe:

![][9]

 [9]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_newAVD.png

Na AVD nato prikazano na seznamu **Android virtualnih naprav** :

![][10]

 [10]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_avds.png

Odpreti emulator kot ločeno vlogo, izberite v AVD in pritisnite **Start**. Pobudnik toliko, kot bi na napravo, z dodatne kontrolnike, ki so na voljo za gumbe za strojno opremo:

![][11]

 [11]: {{ site.baseurl }}/static/img/guide/platforms/android/asdk_emulator.png

Na tej točki lahko uporabite v `cordova` korist za uvajanje uporabe tekmec iz ukazne vrstice:

        $ cordova emulate android


Če namesto tega dela v mrk, desno projekta in izberite **Zaženi kot → Android aplikacij**. Morda morali določiti je AVD, če ni že odprta.

Za hitrejše izkušnje, uporabite celo število-osnova tekmec podoba:

*   Namestite eno ali več `Intel x86 Atom` posnetkov sistema, kot tudi `Intel Hardware Accelerated Execution Manager` , je na voljo pod **dodatki**.

*   Prost dostop umestiti Intel, ki je na voljo v vaš Android SDK na`extras/intel/Hardware_Accelerated_Execution_Manager`.

*   Ustvarite nov AVD s ciljnim nastavljena na Intel sliko.

*   Ob zagonu emulator, zagotoviti ni brez sporočil o napaki, ki označuje napako pri nalaganju modulov HAX.

## Razporedi na napravo

Push app neposredno na napravo, poskrbite, USB debugging omogočena v napravi, kot je opisano na [Android Developer Site][12]in uporabo mini kabel USB priključite na vaš sistem.

 [12]: http://developer.android.com/tools/device.html

Napravo lahko push app iz ukazne vrstice:

        $ cordova run android


Izmenično v mrk, desno projekta in izberite **Zaženi kot → Android aplikacij**.
