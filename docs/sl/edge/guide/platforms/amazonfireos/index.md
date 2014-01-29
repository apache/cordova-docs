---

Licenca: licenco za Apache Software Foundation (ASF) pod eno ali več prispeva licenčnih pogodb. Glej obvestilo datoteko razdeli s to delo za dodatne informacije glede avtorskih pravic lastništva. V APK licence to datoteko, da si pod licenco Apache, različica 2.0 ("licence"); ne smete uporabljati to datoteko, razen v skladu z licenco. Lahko dobijo izvod licence v

           http://www.Apache.org/licenses/License-2.0 razen če zahteva zakon ali dogovorjene v pisni obliki, programske opreme, ki se razdelijo pod licenco razdeljeni na na "Kot je" podlaga, brez jamstva ali pogoje za kakršnekoli vrste, niti izrecne ali zakonske.  Glej licenca za poseben jezik, ki urejajo dovoljenja in omejitve
    

## pod licenco.

# Amazon ogenj OS platformo vodnik

Ta vodič pokaže, kako vzpostaviti vaš SDK razvojno okolje za uvajanje Cordova apps za naprav Amazon ogenj OS, kot Kindle Fire HDX.

Glej naslednje podrobnejše informacije značilne za platformo:

*   Amazon ogenj OS konfiguracijo
*   Amazon ogenj OS spletni pogledi
*   Amazon ogenj OS Plugins

## Zahteve in podporo

Razvoj Cordova apps za Amazon ogenj OS zahteva Android SDK in Amazon spletni pogled SDK. Preverite zahteve za te SDK na spodnjih povezavah:

*   [Sistem Android SDK][1]

*   [Amazon spletni pogled SDK][2]

 [1]: http://developer.android.com/sdk/
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

## Namestitev

### Android SDK

Namestite Android SDK od [developer.android.com/sdk][1]. Sicer lahko prikaže s izbiro kam namestiti SDK, premakniti downloaded `adt-bundle` drevo, da kjerkoli boste shranjevali orodja za razvoj.

Za Cordova orodja ukazne vrstice za delo, morate vključiti v SDK `tools` in `platform-tools` imenikov v vaš STEZA okolje.

Na Mac, Linux ali drugi Unix-všeč biti platforme, lahko uporabite urejevalnik besedil tvoriti ali ublažiti z `~/.bash_profile` datoteko, dodal vrstico, kot sledi, odvisno od tega, kjer SDK namesti:

    izvozite poti = ${pot}: / razvoj/adt-snop/sdk/platformo-orodja: / razvoj/adt-snop / / orodja sdk
    

To izpostavlja orodja SDK v Novoodprti terminalsko okno. Sicer zaženite to na voljo v trenutni seji:

    $ vir ~/.bash_profile
    

V ublažiti STEZA okolje na Windows 7:

*   Kliknite na **Start** meniju v spodnjem levem kotu namizja, z desno miškino tipko na **računalniku**, kliknite **lastnosti**.

*   Kliknite **Dodatne nastavitve sistema** v stolpcu na levi.

*   V pogovornem oknu nastali pritisnite **Spremenljivke okolja**.

*   Izberite spremenljivko **PATH** in pritisnite **Uredi**.

*   Privesiti sledeč poti, kjer ste namestili SDK, na primer na osnovi:
    
        ;C:\Development\adt-bundle\sdk\platform-Tools;C:\Development\adt-bundle\sdk\tools
        

*   Vrednost shranite in zaprite obeh pogovornih oknih.

Prav tako morate omogočiti Java in Ant. plan a zapoved uren ter stavek `java` , in tudi vnesite `ant` . Dodaj pot kar uspelo teči:

    ;%JAVA_HOME%\bin;%ANT_HOME%\bin
    

### Amazon spletni pogled SDK

Download Amazon spletni pogled SDK od [Amazon Developer Portal][2].

*   Ustvarite a `libs/` zgibalnik v `~/.cordova/lib/amazon-fireos/cordova/3.1.0/` zgibalnik.
*   Dodajanje v `awv_interface.jar` iz downloaded SDK, da`~/.cordova/lib/amazon-fireos/cordova/3.1.0/libs/`

## Odprite projekt v SDK

Uporaba na `cordova` korist zaiti ki gre gor a nov projekt, kot je opisano v The Cordova The vmesnik ukazne vrstice. Na primer, v a naslovnik izvorne kode:

    $ cordova create hello com.example.hello "HelloWorld"
    $ cd hello
    $ cordova platform add amazon-fireos
    $ cordova build
    

Ko ga enkrat ustvariš, tukaj je kako rabiti SDK spremeniti:

*   Splavitev uporaba **mrk** .

*   Izberite element menija **Nov projekt** .

*   Izberite **Android projekt iz obstoječe kode** izhajajo pogovornem oknu in pritisnite **naslednji**: ![][3]

*   Pluti v `hello` , ali katerikoli imenik ste ustvarili za projekt, nato da je `platforms/amazon-fireos` podimeniku.

*   Pritisnite **konča**.

 [3]: img/guide/platforms//eclipse_new_project.png

Ko se odpre okno Eclipse, rdeč **X** lahko zdi, da kažejo nerešenih problemov. Če je tako, sledite naslednjim korakom dodatne:

*   Desni klik na imeniku projekta.

*   V nastali **premožen** dialogičen, izbrati **Android** iz podokna za krmarjenje.

*   Za projekt graditi ciljni, izberite najvišjo raven Android API ste namestili.

*   Kliknite v **redu**.

*   Izberite **Clean** iz menija **projekt** . To naj popravi vse napake v projektu.

## Razporedi na napravo

Push app neposredno na napravo, poskrbite, USB debugging omogočena v napravi, kot je opisano na [Android Developer Site][4]in uporabo mini kabel USB priključite na vaš sistem.

 [4]: http://developer.android.com/tools/device.html

Napravo lahko push app iz ukazne vrstice:

    $ cordova run amazon-fireos
    

Izmenično v mrk, desno projekta in izberite **Zaženi kot → Android aplikacij**.

**Opomba**: trenutno preskušanje preko emulator ni podprto za Amazon spletni pogled, ki temelji apps.