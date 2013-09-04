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

# Splashscreen

> Visualizza e nasconde la schermata iniziale dell'applicazione.

## Metodi

*   splashscreen
*   splashscreen.Hide

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-splashscreen.git
        $ cordova plugin rm org.apache.cordova.core.splashscreen
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        < nome funzione = "SplashScreen" >< nome param = "android-pacchetto" value="org.apache.cordova.SplashScreen" / >< / caratteristica >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "SplashScreen" >< param nome = valore "ios-pacchetto" = "CDVSplashScreen" / >< / caratteristica >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.

## Installazione

### Android

1.  Copiare l'immagine della schermata iniziale del progetto Android `res/drawable` directory. La dimensione di ogni immagine dovrebbe essere:

*   XLarge (xhdpi): almeno 960 × 720
*   grande (hdpi): almeno 640 × 480
*   medio (mdpi): almeno 470 × 320
*   piccolo (ldpi): almeno 426 × 320
    
    È consigliabile utilizzare un' [immagine 9-patch][1] per la schermata iniziale.

 [1]: https://developer.android.com/tools/help/draw9patch.html

1.  Nel `onCreate` metodo della classe che estende `DroidGap` , aggiungere le seguenti due righe:
    
        super.setIntegerProperty ("splashscreen", R.drawable.splash);
        super.loadUrl(Config.getStartUrl(), 10000);
        
    
    La prima riga imposta l'immagine da visualizzare come splashscreen. Se è il nome tuo immagine niente altro che `splash.png` , è necessario modificare questa linea. La seconda linea è la normale `super.loadUrl` linea, ma ha un secondo parametro che specifica un valore di timeout per la schermata iniziale. In questo esempio la schermata iniziale viene visualizzato per 10 secondi. Per chiudere la schermata iniziale una volta che l'app riceve il `deviceready` evento, chiamare il `navigator.splashscreen.hide()` metodo.

### iOS

Copiare le immagini di schermata iniziale del progetto iOS `Resources/splash` directory. Aggiungere solo le immagini per i dispositivi che si desidera supportare, come iPad o iPhone. La dimensione di ogni immagine dovrebbe essere:

*   Default-568h@2x~iPhone.png (1136 x 640 pixel)
*   Default-Landscape@2x~ipad.png (1496 x 2048 pixel)
*   Default-Landscape~ipad.png (748 x 1024 pixel)
*   Default-Portrait@2x~ipad.png (2008 x 1536 pixel)
*   Default-Portrait~ipad.png (1004 x 768 pixel)
*   Default@2x~iPhone.png (640 x 960 pixel)
*   Default~iPhone.png (320 x 480 pixel)