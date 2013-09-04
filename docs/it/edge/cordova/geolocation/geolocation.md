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

# Geolocalizzazione

> Il `geolocation` oggetto fornisce accesso ai dati di localizzazione basato su sensore GPS del dispositivo o dedotto dai segnali di rete.

`Geolocation`fornisce informazioni sulla posizione del dispositivo, come latitudine e longitudine. Comuni fonti di informazioni sulla posizione comprendono Global Positioning System (GPS) e posizione dedotta dai segnali di rete come indirizzo IP, indirizzi, RFID, WiFi e Bluetooth MAC e cellulare GSM/CDMA IDs. Non non c'è alcuna garanzia che l'API restituisce la posizione effettiva del dispositivo.

Questa API è basata sulla [Specifica di W3C Geolocation API][1]e viene eseguito solo su dispositivi che non già forniscono un'implementazione.

 [1]: http://dev.w3.org/geo/api/spec-source.html

**Nota importante sulla privacy:** Raccolta e utilizzo dei dati di geolocalizzazione solleva questioni di privacy importante. Politica sulla privacy dell'app dovrebbe discutere come app utilizza dati di geolocalizzazione, se è condiviso con altre parti e il livello di precisione dei dati (ad esempio, Cap grossolana, fine, livello, ecc.). Dati di geolocalizzazione sono generalmente considerati sensibili perché può rivelare la sorte di una persona e, se conservati, la storia dei suoi viaggi. Pertanto, oltre alla politica di privacy dell'app, è fortemente consigliabile fornendo un preavviso di just-in-time prima della tua app di accedere ai dati di geolocalizzazione (se il sistema operativo del dispositivo non farlo già). Tale comunicazione deve fornire le informazioni stesse notate sopra, oltre ad ottenere l'autorizzazione (ad esempio, presentando scelte per **OK** e **No grazie**). Per ulteriori informazioni, vedere la guida sulla Privacy.

## Metodi

*   geolocation.getCurrentPosition
*   geolocation.watchPosition
*   geolocation.clearWatch

## Argomenti

*   geolocationSuccess
*   geolocationError
*   geolocationOptions

## Oggetti (sola lettura)

*   Posizione
*   PositionError
*   Coordinate

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-geolocation.git
        $ cordova plugin rm org.apache.cordova.core.geolocation
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "Geolocalizzazione" >< nome param = "android-pacchetto" value="org.apache.cordova.GeoBroker" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.ACCESS_COARSE_LOCATION usi-autorizzazione" / >< android:name="android.permission.ACCESS_FINE_LOCATION usi-autorizzazione" / >< android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Geolocalizzazione" >< nome param = "blackberry-pacchetto" value="org.apache.cordova.geolocation.Geolocation" / >< / caratteristica > (in www/config.xml) < rim: autorizzazioni >< orlo: permesso > read_geolocation < / orlo: permesso >< / orlo: autorizzazioni >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Geolocalizzazione" >< param nome = valore "ios-pacchetto" = "CDVLocation" / >< / caratteristica >
        

*   Windows Phone (in`Properties/WPAppManifest.xml`)
    
        < funzionalità >< capacità nome = "ID_CAP_LOCATION" / >< / funzionalità >
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][2]

 [2]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.