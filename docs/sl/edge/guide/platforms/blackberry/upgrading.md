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

# Nadgradnja BlackBerry

Ta vodič pokaže, kako spremeniti BlackBerry projekte za nadgradnjo iz starejše različice Cordova. Ta navodila veljajo za projekte, ustvarjene s starejši nabor orodij ukazne vrstice, ki pred je `cordova` CLI korist. Glej The vmesnik ukazne vrstice za informacije kako modernizirati prevod od CLI.

## Nadgradnja 2.8.0 projektov do 2.9.0

BlackBerry 10:

1.  Travnato gričevje ter citat Cordova 2.9.0 vir na stalno mesto na trdem disku, na primer v`~/Cordova-2.9.0`.

2.  Zaprite vse teče orodja SDK: Eclipse, Momentics in podobno.

3.  Krmarite do imenika, kjer ste postavili downloaded vir zgoraj, uporabi unix kot terminal: Terminal.app, Bash Cygwin, itd.

4.  Ustvarite nov projekt, kot je opisano v BlackBerry ukazne vrstice orodja. To postane dom posodobitev projekta.

5.  Kopiranje vašega projekta vir iz starega projekta `/www` imenik za nov projekt `/www` imenik.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

Za BlackBerryOS/Playbook:

1.  Travnato gričevje ter citat Cordova 2.9.0 vir na stalno mesto na trdem disku, na primer v`~/Cordova-2.9.0`.

2.  Zaprite vse teče orodja SDK: Eclipse, Momentics in podobno.

3.  Krmarite do imenika, kjer ste postavili downloaded vir zgoraj, uporabi unix kot terminal: Terminal.app, Bash Cygwin, itd.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

7.  Izvod v `native` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `native` imenik.

8.  Izvod v `lib` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `lib` imenik.

9.  Izvod v `cordova` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `cordova` imenik.

## Nadgradnja 2.7.0 projektov do 2.8.0

BlackBerry 10:

BlackBerry 10 uporablja novo CLI orodja in upravlja jedro API kot plugins. Navodila za nov projekt, namesto posodabljanje obstoječega projekta, zaradi kompleksnosti posodabljanje star projekt preseliti projekta. Tudi Opomba, da cordova js skript datoteke se zdaj imenuje "cordova.js" in ne vsebuje niz prevod.

1.  Travnato gričevje ter citat Cordova 2.8.0 vir na stalno mesto na trdem disku, na primer v`~/Cordova-2.8.0`.

2.  Zaprite vse teče orodja SDK: Eclipse, Momentics in podobno.

3.  Krmarite do imenika, kjer ste postavili downloaded vir zgoraj, uporabi unix kot terminal: Terminal.app, Bash Cygwin, itd.

4.  Ustvarite nov projekt, kot je opisano v BlackBerry ukazne vrstice orodja. To postane dom posodobitev projekta.

5.  Kopiranje vašega projekta vir iz starega projekta `/www` imenik za nov projekt `/www` imenik.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

BlackBerryOS/Playbook:

1.  Travnato gričevje ter citat Cordova 2.8.0 vir na stalno mesto na trdem disku, na primer v`~/Cordova-2.8.0`.

2.  Zaprite vse teče orodja SDK: Eclipse, Momentics in podobno.

3.  Krmarite do imenika, kjer ste postavili downloaded vir zgoraj, uporabi unix kot terminal: Terminal.app, Bash Cygwin, itd.

4.  Ustvarite nov projekt, kot je opisano v iOS orodja ukazne vrstice. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova.js` datoteke.

7.  Izvod v `native` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `native` imenik.

8.  Izvod v `lib` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `lib` imenik.

9.  Izvod v `cordova` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `cordova` imenik.

## Nadgradnja 2.6.0 projektov do 2.7.0

1.  Travnato gričevje ter citat Cordova 2.7.0 vir na stalno mesto na trdem disku, na primer v`~/Cordova-2.7.0`.

2.  Zaprite vse teče orodja SDK: Eclipse, Momentics in podobno.

3.  Krmarite do imenika, kjer ste postavili downloaded vir zgoraj, uporabi unix kot terminal: Terminal.app, Bash Cygwin, itd.

4.  Ustvarite nov projekt, kot je opisano v BlackBerry ukazne vrstice orodja. Potrebujete sredstva iz tega novega projekta.

5.  Izvod v `www/cordova-2.7.0.js` pila s nov projekt v vaš `www` naslovnik ter izbrisati vaš `www/cordova-2.6.0.js` pila.

6.  Posodobiti sklic Cordova scenarij v vaš `www/index.html` datoteko (in vse druge datoteke, ki vsebuje sklic na skript) da kaže na novi `cordova-2.7.0.js` datoteke.

7.  Izvod v `native` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `native` imenik.

8.  Izvod v `lib` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `lib` imenik.

9.  Izvod v `cordova` imenik iz novega projekta v obstoječi projekt, prepisovanjem starih `cordova` imenik.

## Nadgradite 2.6.0 s 2.5.0

Posodabljanje telefon download imenik:

Priporočljivo je, da prenesete kopijo sveže celotnega imenika.

Tukaj pa, novimi deli, potrebni za delne posodobitev:

1.  Posodobi datoteko cordova.blackberry.js v v `Phonegap-2.6.0/lib/blackberry/javascript` naslovnik.

2.  Update na `ext` , `ext-air` , in `ext-qnx` v v `Phonegap-2.6.0/lib/blackberry/framework` naslovnik.

3.  Modernizirati v `build.xml` pila v v `Phonegap-2.6.0/lib/blackberry` imenik.

4.  Modernizirati v `Phonegap-2.6.0/lib/blackberry/bin` naslovnik.

5.  Modernizirati v `VERSION` pila v v `Phonegap-2.6.0/lib/blackberry` imenik.

Posodabljanje je `example/` imenik ali selijo obstoječih projektov:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Posodobi vsebino v `ext-qnx/` naslovnik.

5.  Kopiranje novih `cordova-2.6.0.js` v vašem projektu.

6.  Modernizirati vaš HTML rabiti nov `cordova-2.6.0.js` pila.

## Vzpenjajoč se v 2.5.0 od 2.4.0

Posodabljanje telefon download imenik:

Priporočljivo je, da prenesete kopijo sveže celotnega imenika.

Tukaj pa, novimi deli, potrebni za delne posodobitev:

1.  Posodobi datoteko cordova.blackberry.js v v `Phonegap-2.5.0/lib/blackberry/javascript` naslovnik.

2.  Update na `ext` , `ext-air` , in `ext-qnx` v v `Phonegap-2.5.0/lib/blackberry/framework` naslovnik.

3.  Modernizirati v `build.xml` pila v v `Phonegap-2.5.0/lib/blackberry` imenik.

4.  Modernizirati v `Phonegap-2.5.0/lib/blackberry/bin` naslovnik.

5.  Modernizirati v `VERSION` pila v v `Phonegap-2.5.0/lib/blackberry` imenik.

Posodabljanje primer / imenik ali selitev obstoječega projekta:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Posodobi vsebino v `ext-qnx/` naslovnik.

5.  Kopiranje novih `cordova-2.5.0.js` v vašem projektu.

6.  Modernizirati vaš HTML rabiti nov `cordova-2.5.0.js` pila.

## Vzpenjajoč se v 2.4.0 z 2.3.0

Modernizirati samo v `www` imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-2.4.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.
    *   Če BlackBerry 10, nato posodobite .js pila v v `qnx/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.4.0.js` pila.

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.2.3.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.2.3.0/ext-air/` naslovnik.

4.  Posodobi vsebino v `cordova.2.3.0/ext-qnx/` naslovnik.

5.  Modernizirati .js pila v v `cordova.2.3.0/javascript/` naslovnik.

6.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.2.3.0/` imenik`cordova.2.4.0/`.

7.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

8.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-2.4.0.js` datoteke.

## Nadgradite 2.3.0 s 2.2.0

Modernizirati samo v `www` imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-2.3.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.
    *   Če BlackBerry 10, nato posodobite .js pila v v `qnx/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.3.0.js` pila.

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.2.2.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.2.2.0/ext-air/` naslovnik.

4.  Posodobi vsebino v `cordova.2.2.0/ext-qnx/` naslovnik.

5.  Modernizirati .js pila v v `cordova.2.2.0/javascript/` naslovnik.

6.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.2.2.0/` imenik`cordova.2.3.0/`.

7.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

8.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-2.3.0.js` datoteke.

## Nadgradite 2.2.0 s 2.1.0

Posodabljanje le www imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-2.2.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.
    *   Če BlackBerry 10, nato posodobite .js pila v v `qnx/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.2.0.js` pila.

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.2.1.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.2.1.0/ext-air/` naslovnik.

4.  Posodobi vsebino v `cordova.2.1.0/ext-qnx/` naslovnik.

5.  Modernizirati .js pila v v `cordova.2.1.0/javascript/` naslovnik.

6.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.2.1.0/` imenik`cordova.2.2.0/`.

7.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

8.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-2.2.0.js` datoteke.

## Nadgradite s 2.0.0 2.1.0

Modernizirati samo v `www` imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-2.1.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.1.0.js` pila.

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.2.0.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.2.0.0/ext-air/` naslovnik.

4.  Modernizirati .js pila v v `cordova.2.0.0/javascript/` naslovnik.

5.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.2.0.0/` imenik`cordova.2.1.0/`.

6.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

7.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-2.1.0.js` datoteke.

## Nadgradite 2.0.0 s 1.9.0

Modernizirati samo v `www` imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-2.0.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-2.0.0.js` pila.

6.  Modernizirati vaš `www/plugins.xml` pila. Dve plugins spremenila njihova oznaka imenski prostor/storitev. Sprememba starih vpisov za zajem in stik plugins iz:
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Za:
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.1.9.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.1.9.0/ext-air/` naslovnik.

4.  Modernizirati .js pila v v `cordova.1.9.0/javascript/` naslovnik.

5.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.1.9.0/` imenik`cordova.2.0.0/`.

6.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

7.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-2.0.0.js` datoteke.

8.  Odprt je `www/` imenik in posodobitev v `plugins.xml` datoteko. Dve plugins spremenila njihova oznaka imenski prostor/storitev. Sprememba starih vpisov za zajem in stik plugins iz:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Za:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

*   Za nadgradnjo 1.8.0, prosimo, pojdite od 1.7.0

## Nadgradite 1.8.0 s 1.7.0

Modernizirati samo v `www` imenik:

1.  Plan vaš `www/` imenik, ki vsebuje vaš app.

2.  Odstranite in posodobitev datoteka s pripono .jar v v `ext/` naslovnik.

3.  Posodobi vsebino v `ext-air/` naslovnik.

4.  Kopiranje novih `cordova-1.8.0.js` v vašem projektu.
    
    *   Če playbook, potem posodobi na .js pila v v `playbook/` naslovnik.

5.  Modernizirati vaš HTML rabiti nov `cordova-1.8.0.js` pila.

6.  Modernizirati vaš `www/plugins.xml` pila. Dve plugins spremenila njihova oznaka imenski prostor/storitev. Sprememba starih vpisov za zajem in stik plugins iz:
    
        <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
        <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Za:
    
        <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
        <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>
        

Posodabljanje vzorec imenik (tj, posodabljanje orodji mravlja):

1.  Odpri v `sample/lib/` naslovnik.

2.  Posodobitev datoteka s pripono .jar v v `cordova.1.7.0/ext/` naslovnik.

3.  Posodobi vsebino v `cordova.1.7.0/ext-air/` naslovnik.

4.  Modernizirati .js pila v v `cordova.1.7.0/javascript/` naslovnik.

5.  Odprt je `sample/lib/` imenik in preimenovanje je `cordova.1.7.0/` imenik`cordova.1.8.0/`.

6.  Vrsta `ant blackberry build` ali `ant playbook build` za posodobitev v `www/` naslovnik s modernizirati Cordova.

7.  Odprt je `www/` imenik in posodobiti vaš HTML uporabljati nove `cordova-1.8.0.js` datoteke.

8.  Odprt je `www/` imenik in posodobitev v `plugins.xml` datoteko. Dve plugins spremenila njihova oznaka imenski prostor/storitev. Sprememba starih vpisov za zajem in stik plugins iz:
    
         <plugin name="Capture" value="org.apache.cordova.media.MediaCapture"/>
         <plugin name="Contact" value="org.apache.cordova.pim.Contact"/>
        
    
    Za:
    
         <plugin name="Capture" value="org.apache.cordova.capture.MediaCapture"/>
         <plugin name="Contacts" value="org.apache.cordova.pim.Contact"/>