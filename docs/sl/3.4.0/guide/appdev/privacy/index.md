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

# Vodnik o zasebnosti

Mobilne zasebnosti je kritično vprašanje, ki morajo obravnavati vsak razvijalec app. Uporabniki pričakujejo, da njihove zasebne informacije zberejo in ustrezno obdelajo s vaš app. Prav tako obstajajo večje število pravnih redih, ki zdaj so pravne zahteve glede mobilne zasebnosti.

Ta vodič naprej prenosen app zasebnosti obravnavati *primer* obravnava nekaj najpomembnejših vprašanj. Opisuje nekatere splošno sprejete najboljše prakse in ponuja sklice na druge bolj podrobne vodnikov in reference.

*   **Pravilnik o zasebnosti**: ste app vključevati zasebnosti, ki obravnava teme, kot so vaš app kakšne informacije zbira, ali približno vaše uporabnike, kako se uporabljajo, s kom je v skupni rabi in kako uporabniki lahko izbirajo zasebnostjo v app. Za pomoč, razumevanje, naj razumljivem jeziku in se izognili tehnične žargonu. Naj bi vaša politika glede zasebnosti pri roki zakaj uporabnik v pregled pred download, kot v opisu app, app trgu. Poleg tega morate narediti vaše zasebnosti na voljo v app, sam. Omejena velikost mobilne naprave prikaže ustvarja izzive za prikazovanje zasebnosti uporabnikov. Razvoju *kratka oblika* politike, ki vključuje najpomembnejše informacije, in nato poskrbi za povezavo do "dolgo obliki" politika za tiste zanima več podrobnosti. Več skupin so poskušali razviti ikonami standardov za komuniciranje o zasebnosti, ki boste morda želeli razmisliti, ko ti standardi mature.

*   **Zbirka občutljivih informacij**: app's zbiranje občutljivih osebnih podatkov postavlja pomembna zasebnosti. Primeri občutljive osebne podatke so finančne informacije, zdravje informacije in podatke od ali o otrocih. Vključuje tudi informacije, zbrane iz nekaterih senzorji in zbirk podatkov, ki običajno najdemo na mobilnih napravah in tablet, vsebovali geolokacijske podatke, vizitke/imenik, mikrofon/kamero in shranjenih slik/videoposnetkov. Naslednje strani dokumentacije za več informacij glej: [kamero][1] [zajemanje][2], [stiki][3]in [geolokacije][4]. Na splošno, morate pridobiti uporabnikovega izrecnega dovoljenja pred zbiranjem občutljive informacije in, če je to mogoče, zagotoviti nadzorni mehanizem, to omogučiti uporabnik v lahek sprememba dovoljenja. App operacijskih sistemov lahko pomaga v nekaterih primerih s predstavitvijo ravno v času pogovornih oknih, ki zaprosi za dovoljenje uporabnika pred zbiranjem. V teh primerih, se prepričajte, da izkoristite vsako priložnost za prilagajanje besedila dialogičen škatla pojasniti kako app uporablja in, če je to primerno, delnice teh informacij.

*   **Izogibanje uporabnik presenečenje**: če vaš app zbira ali uporablja informacije na način, da se lahko presenetljivo uporabnikom glede na osnovni namen vašega app (na primer predvajalnik glasbe ki dostopa do shranjenih slik), naj sprejmejo podobne ukrepe kot pri zbiranju občutljivih osebnih podatkov. To je močno morate upoštevati uporabo ravno v času pogovornih oken za obveščanje uporabnikov o zbiranju ali uporabo teh informacij in po potrebi zagotoviti ustreznega nadzora zasebnosti.

*   **Zbiranje podatkov tretje osebe ali skupno rabo**: Če ste app zbira informacije, ki je na voljo na drugo družbo--kot socialne mreže platformo ali ad omrežja (na primer, če vaš app prikazuje oglaševanje)--morate obvestiti uporabnike te zbirke in delitev. Na minimum, vaše zasebnosti mora opisovati zbiranje in izmenjavo in, če je to primerno, ponujajo svojim uporabnikom možnost za nadzor ali opt-out takega zbiranja ali delitev.

*   **Zbirka omejitev in varnost**: vaš uporabniki zaupajo svoj app s svoje podatke in pričakujejo, da bo sprejeti ustrezne varnostne ukrepe za zaščito to. Eden od najboljših načinov, da bi se izognili kompromisom varnost osebnih podatkov se ne zbira informacije na prvem mestu, razen če vaš app ima določene in zakonite poslovne razlog za zbiranje. Za informacije, ki jih je treba zbrati, zavarovati to vi priskrbeti ustrezni varnostni ukrepi za zaščito podatkov, ali so shranjeni v napravi ali na backend strežnikov. Morajo oblikovati ustrezne podatke pravilnik o hranjenju, ki se izvaja v app in backend strežnikih.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Sledeče so nekatere dodatne koristne mobilne zasebnosti navodila za razvijalce:

*   California Attorney General, [zasebnosti na poti: priporočila za mobilne ekosistema][5]

*   Center za demokracijo & Technology, prihodnost zasebnosti foruma, [najboljše prakse za mobilne App razvijalci][6]

*   CTIA-The Wireless Association, [najboljše prakse in smernice za namestitev osnova usluga][7]

*   Federal Trade Commission, [mobilne zasebnosti razkritja: krepitvijo zaupanja s preglednosti][8]

*   Prihodnost zasebnosti foruma, [Application Privacy][9] Website

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org