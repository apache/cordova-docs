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

title: Icone e Splash screen
---

# Icone e Splash screen

In questa sezione viene illustrato come configurare un'app icona e schermata iniziale opzionale per varie piattaforme, sia quando si lavora in Cordova CLI (descritto in The Command-Line Interface) o utilizzando strumenti SDK specifici di piattaforma (dettagliati nelle guide piattaforma).

## Configurazione di icone nella CLI

Quando si lavora nella CLI, icona di file di origine si trovano all'interno di varie sottodirectory specifiche della piattaforma nell'ambito del progetto `www/res/icons` directory. Appena creati progetti nascono con un insieme predefinito di Cordova icone consente di sostituire per le piattaforme che si desidera fare riferimento.

Android specifica icone di basse, medie, alte e altissima risoluzione:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

La piattaforma iOS specifica icone 72-pixel quadrati per iPad e 57-pixel icone per iPhone e iPod, con alta risoluzione *x 2* varianti per retina vengono visualizzati:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone specifica un'icona predefinita di 48 pixel, insieme a sfondo vari dispositivi affiancamento immagini utilizzate quando che rappresentano le applicazioni:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

BlackBerry richiede un'icona 80-pixel:

        blackberry/icon-80.png
    

Tizen richiede un'icona di 128 pixel:

        tizen/icon-128.png
    

## Configurazione schermate iniziali in CLI

Utilizzare l'API di [Splashscreen](../cordova/splashscreen/splashscreen.html) per abilitare la visualizzazione della schermata introduttiva di un'app su molte piattaforme. Quando si lavora nella CLI, file di origine di splash screen si trovano all'interno del progetto `www/res/screens` sottodirectory.

Android specifica sia ritratto e paesaggio-oriented splash immagini dello schermo di basse, medie, alte e altissima risoluzione:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

La piattaforma iOS specifica varianti per iPhone/iPod e iPad, con varianti per retina display e diversi orientamenti. Il file *568 h* è personalizzato per l'iPhone 5 schermo più alto:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

BlackBerry e Windows Phone entrambi specificare una singola immagine:

        blackberry/screen-225.png
        windows-phone/screen-portrait.jpg
    

Le seguenti sezioni dettaglio come impostare schermate iniziali quando lavoro con SDK e gli strumenti della riga di comando correlati descritti nelle guide di piattaforma.

## Schermate iniziali per la piattaforma Android

Inserire i file [immagine 9-patch][1] del progetto Android `res/drawable` directory. Dovrebbe essere la dimensione per ciascuno:

 [1]: https://developer.android.com/tools/help/draw9patch.html

*   XLarge (xhdpi): almeno 960 × 720
*   grande (hdpi): almeno 640 × 480
*   medio (mdpi): almeno 470 × 320
*   piccolo (ldpi): almeno 426 × 320

In `config.xml` , aggiungere le seguenti preferenze:

    <preference name="splashscreen", "splash" />
    <preference name="splashScreenDelay", 10000 />
    

La prima riga imposta l'immagine da visualizzare come schermata iniziale. Se è il nome tuo immagine niente altro che `splash.png` , è necessario modificare questa linea.

La seconda riga imposta il ritardo di quanto tempo lo [splashscreen](../cordova/splashscreen/splashscreen.show.html) appare in millisecondi. Per [chiudere](../cordova/inappbrowser/inappbrowser.html) la schermata iniziale una volta che l'app riceve il `[deviceready](../cordova/events/events.deviceready.html)` evento, chiamare il `navigator.splashscreen.hide()` metodo.

## Schermate iniziali per la piattaforma iOS

Copiare le immagini di schermata iniziale del progetto iOS `Resources/splash` directory. Aggiungere solo le immagini per i dispositivi che si desidera supportare, come iPad o iPhone. La dimensione di ogni immagine dovrebbe essere:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (1496 x 2048 pixel)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Schermate iniziali per la piattaforma BlackBerry 10

Copiare le immagini di schermata iniziale del progetto `res/screen/blackberry10` directory. I nomi dei file dovrebbe essere:

*   splash-1280x768.png (1280x768 pixels)
*   splash-720x720.png (720x720 pixels)
*   splash-768x1280.png (768x1280 pixels)