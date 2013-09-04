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

# Contatti

> Il `contacts` oggetto consente di accedere al database di contatti del dispositivo.

**Nota importante sulla privacy:** Raccolta e utilizzo dei dati di contatto solleva questioni di privacy importante. Politica sulla privacy dell'app dovrebbe discutere come app utilizza i dati di contatto e se è condiviso con altre parti. Informazioni di contatto sono considerate sensibile perché rivela le persone con cui una persona comunica. Pertanto, oltre alla politica di privacy dell'app, è fortemente consigliabile fornendo un preavviso di just-in-time prima della tua app accedendo o utilizzando i dati di contatto (se il sistema operativo del dispositivo non farlo già). Tale comunicazione deve fornire le informazioni stesse notate sopra, oltre ad ottenere l'autorizzazione (ad esempio, presentando scelte per **OK** e **No grazie**). Si noti che alcuni mercati app possono richiedere l'app può fornire preavviso just-in-time e ottenere l'autorizzazione dell'utente prima di accedere ai dati di contatto. Un'esperienza utente chiara e facile--capisce che circonda l'uso del contatto dati verranno aiuterà a evitare la confusione dell'utente e percepito un uso improprio dei dati di contatto. Per ulteriori informazioni, vedere la guida sulla Privacy.

## Metodi

*   Contacts.Create
*   Contacts.Find

## Argomenti

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Oggetti

*   Contatto
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add https://git-wip-us.apache.org/repos/asf/cordova-plugin-contacts.git
        $ cordova plugin rm org.apache.cordova.core.contacts
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android
    
        (in app/res/XML/config.Xml) < nome funzione = "Contatti" >< nome param = "android-pacchetto" value="org.apache.cordova.ContactManager" / >< / caratteristica > (in app/AndroidManifest.xml) < android:name="android.permission.GET_ACCOUNTS usi-autorizzazione" / >< android:name="android.permission.READ_CONTACTS usi-autorizzazione" / >< android:name="android.permission.WRITE_CONTACTS usi-autorizzazione" / >
        

*   BlackBerry WebWorks
    
        (in www/plugins.Xml) < nome funzione = "Contatto" >< param nome = "blackberry-pacchetto" value="org.apache.cordova.pim.Contact" / >< / caratteristica > (in www/config.xml) < presentano id="blackberry.find" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.identity" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.pim.Address" richiesto = "true" versione = "1.0.0.0" / >< presentano id="blackberry.pim.Contact" richiesto = "true" versione = "1.0.0.0" / >
        

*   iOS (in`config.xml`)
    
        < nome funzione = "Contatti" >< param nome = valore "ios-pacchetto" = "CDVContacts" / >< / caratteristica >
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml) < funzionalità >< capacità nome = "ID_CAP_CONTACTS" / >< / funzionalità >
        
    
    Riferimento: il [manifesto dell'applicazione per Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Per una panoramica, vedere supporto della piattaforma.