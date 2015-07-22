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

# Guida sulla privacy

Mobile privacy è un problema critico che deve affrontare ogni sviluppatore di app. Gli utenti si aspettano che loro informazioni private saranno raccolti e trattati in modo appropriato dall'app. Inoltre, ci sono un numero crescente di giurisdizioni che ora hanno requisiti legali riguardo alla privacy mobile.

Questa guida sulla privacy mobile app dovrebbe essere considerata un *iniettore* affrontando alcune più significative questioni. Esso delinea alcune consigliate largamente accettate e fornisce i riferimenti ad altre guide dettagliate e riferimenti.

*   **Informativa sulla privacy**: app si dovrebbe includere una politica sulla privacy che affronta temi come che tipo di informazioni raccoglie l'app da o sulla tua utenza, come quell'informazione è utilizzata, con cui esso è condiviso e come gli utenti possono effettuare le scelte relative alla privacy all'interno della app. Per aiutare la comprensione, è necessario utilizzare un linguaggio semplice ed evitare il gergo tecnico. Si dovrebbe fare l'informativa sulla privacy disponibile per gli utenti di rivedere prima della scarica, come nella descrizione dell'app nel marketplace app. Inoltre, si dovrebbe fare l'informativa sulla privacy disponibile all'interno dell'applicazione stessa. Le ridotte dimensioni del display del dispositivo mobile crea sfide per la visualizzazione di norme sulla privacy per gli utenti. Considerare lo sviluppo di una *forma breve* della politica che include le informazioni più importanti e quindi fornire un collegamento alla politica "forma lunga" per chi fosse interessato a maggiori dettagli. Diversi gruppi stanno tentando di sviluppare standard basati su icona per comunicare le pratiche sulla privacy, che si possono prendere in considerazione una volta maturo di questi standard.

*   **Raccolta di informazioni riservate**: raccolta di un'app di informazioni personali sensibili solleva preoccupazioni importanti sulla privacy. Esempi di informazioni personali riservate informazioni finanziarie, salute informazioni e informazioni da o su bambini. Esso include anche le informazioni raccolte da alcuni sensori e database in genere trovati su dispositivi mobili e tablet, quali informazioni di geolocalizzazione, contatti/rubrica, microfono e fotocamera e immagini/video memorizzati. Vedere le seguenti pagine di documentazione per ulteriori informazioni: [fotocamera][1], [catturare][2], [contatti][3]e [geolocalizzazione][4]. In generale, si dovrebbe ottenere espressa autorizzazione dell'utente prima di raccogliere informazioni riservate e, se possibile, fornire un meccanismo di controllo che consente all'utente di modificare facilmente le autorizzazioni. Sistemi operativi app può aiutare in alcuni casi presentando le finestre di dialogo di just-in-time che chiedono l'autorizzazione prima di raccolta. In questi casi, essere sicuri di approfittare di qualsiasi occasione per personalizzare il testo del riquadro di dialogo per chiarire come l'app usa e, se applicabile, condivide tali informazioni.

*   **Evitando la sorpresa dell'utente**: se la tua app raccoglie o utilizza le informazioni in un modo che può essere sorprendente per gli utenti alla luce lo scopo principale dell'app (ad esempio, un lettore musicale che accede immagini memorizzati), si dovrebbe prendere una procedura simile come con la raccolta di informazioni personali sensibili. Cioè, si dovrebbe considerare fortemente l'utilizzo di just-in-time finestre di dialogo per informare l'utente circa la raccolta o l'uso di tali informazioni e, se del caso, fornire un controllo privacy corrispondente.

*   **Raccolta di dati di terze parti o condivisione**: se l'app si raccoglie informazioni fornite ad un'altra società..--come una piattaforma di social networking o una rete (per esempio, se l'app consente di visualizzare pubblicità), ovvero si dovrebbero informare gli utenti di tale raccolta e condivisione. Minimo, la vostra politica sulla privacy dovrebbe descrivere la raccolta di informazioni e di condivisione e, se del caso, offrono agli utenti la possibilità di controllo o opt-out di tale raccolta o condivisione.

*   **Sicurezza e limitazione della raccolta**: gli utenti affidano la tua app con loro informazioni e che si aspettano che si prende precauzioni di sicurezza appropriate per proteggerlo. Uno dei modi migliori per evitare compromessi della sicurezza delle informazioni personali è di non raccogliere le informazioni in primo luogo, a meno che l'app ha un motivo di affari legittimi e specifici per la raccolta. Per le informazioni che devono essere raccolti, assicurarsi di fornire controlli di sicurezza appropriate per proteggere tali informazioni, se è memorizzato sul dispositivo o sui server di backend. Si dovrebbe anche sviluppare un criterio di conservazione di dati appropriati che viene implementato all'interno della app e sui server di backend.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Di seguito sono alcune guide aggiuntive sulla privacy mobile utile per gli sviluppatori:

*   California Attorney General, [Privacy in movimento: raccomandazioni per l'ecosistema Mobile][5]

*   Centro per la democrazia & tecnologia, futuro della Privacy Forum, [consigliate per gli sviluppatori di App mobili][6]

*   CTIA-The Wireless Association, [buone pratiche e linee guida per la localizzazione di servizi basati][7]

*   Commissione commerciale federale, [informativa Privacy Mobile: costruire la fiducia attraverso la trasparenza][8]

*   Futuro della Privacy Forum, sito Web [applicazione Privacy][9]

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org