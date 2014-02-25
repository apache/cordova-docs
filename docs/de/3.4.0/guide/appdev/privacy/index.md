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

# Datenschutz-Guide

Mobile Privatsphäre ist ein kritisches Thema, das jeder app-Entwickler widmen muss. Die Benutzer erwarten, dass ihre privaten Daten werden gesammelt und von Ihrer Anwendung entsprechend behandelt. Außerdem gibt es eine wachsende Zahl von Ländern, die jetzt rechtliche Anforderungen an mobile Datenschutzpraktiken haben.

Leitfaden zur mobilen app Privatsphäre sollte eine *Grundierung* auf einige der bedeutendsten Fragen berücksichtigt werden. Es umreißt einige breit akzeptierten Empfehlungen und Verweise auf andere ausführlichere Anleitungen und Referenzen.

*   **Privacy Policy**: Sie app sollte eine Datenschutzerklärung, die Themen wie welche Art von Informationen sammelt Ihre app von oder zu den Benutzern, wie diese Informationen verwendet werden, mit denen es geteilt ist, und wie Benutzer datenschutzrelevante Entscheidungen innerhalb der app machen können. Um Verständnis zu erleichtern, sollten Sie verwenden Klartext und vermeiden Fachjargon. Sie sollten Ihre Datenschutzrichtlinien für Benutzer überprüfen Sie vor dem Download, wie z. B. in der app-Beschreibung in der app-Marktplatz verfügbar machen. Darüber hinaus sollten Sie Ihre Datenschutzerklärung innerhalb der app selbst zur Verfügung stellen. Die geringe Größe von Handy-Displays schafft Herausforderungen für Anzeigen von Datenschutzrichtlinien für Benutzer. Ziehen Sie Entwicklung einer *Kurzform* der Politik mit den wichtigsten Informationen in Betracht, und geben Sie dann einen Link zu der "Langform" Politik für mehr Details interessiert. Mehrere Gruppen versuchen, Icon-basierter Standards für die Datenschutz-Praktiken, die Sie betrachten wünschen können, sobald diese Standards ältere Kommunikation entwickeln.

*   **Sammlung vertraulicher Informationen**: eine app-Sammlung von sensiblen persönlichen Informationen wichtig Datenschutz Bedenken. Beispiele für sensible persönliche Daten Finanzinformationen, Gesundheit Informationen und Daten von Kindern. Darüber hinaus Informationen aus bestimmten Sensoren und Datenbanken, die in der Regel auf mobilen Geräten und Tabletten, wie Geolocation-Informationen, Kontakte/Telefonbuch, Mikrofon/Kamera und gespeicherte Bilder oder Videos gefunden. Die folgenden Dokumentationsseiten für weitere Informationen siehe: [Kamera][1]"," [erfassen][2]"," [Kontakte][3]"und" [Geolocation][4]. Im Allgemeinen sollten Sie erhalten die Berechtigung eines Benutzers ausdrücklich vor der Erhebung sensiblen Informationen und, wenn möglich, einen Kontrollmechanismus, der einem Benutzer ermöglicht, Berechtigungen zu ändern. App Betriebssystemen kann in einigen Fällen durch Vorlage von just-in-Time-Dialogfelder, die Zustimmung des Benutzers vor Auflistung Fragen helfen. Sollten Sie in diesen Fällen nutzen jede Gelegenheit zum Anpassen des Text im Dialog zu klären, wie die app verwendet und gegebenenfalls diese Informationen teilt.

*   **Vermeidung von Benutzer-Überraschung**: Wenn Ihre app sammelt oder Informationen in einer Weise, die möglicherweise überraschend für Benutzer im Lichte der Hauptzweck Ihrer Anwendung (z. B. ein Musik-Player, der auf die gespeicherten Bilder zugreift) verwendet, sollten Sie ähnliche Schritte wie bei der Auflistung von sensiblen persönlichen Informationen nehmen. Das heißt, sollten Sie dringend die Verwendung von just-in-Time-Dialogfelder informieren des Benutzers über die Sammlung oder Verwendung dieser Informationen und gegebenenfalls ein entsprechenden Datenschutz-Steuerelement bereitstellen.

*   **Dritter Datenerhebung oder Teilen**: Wenn Sie app Informationen erfasst, die auf eine andere Gesellschaft--bereitgestellt wird wie ein social-networking-Plattform oder ein Ad-Netzwerk (z. B. Wenn Ihre app Werbung angezeigt wird)--Sie sollten informieren Sie Ihre Benutzer dieser Sammlung und Austausch. Zumindest sollten Ihre Datenschutzrichtlinien beschreiben, die Sammlung von Informationen und Austausch und ggf. bieten Ihren Benutzern die Möglichkeit zu steuern oder opt-Out dieser Sammlung oder Teilen.

*   **Sammlung Begrenzung und der Sicherheit**: Ihre Nutzer vertrauen Ihre app mit ihren Informationen und sie erwarten, dass Sie entsprechende Vorsichtsmaßnahmen zum Schutz bringt. Eine der besten Möglichkeiten zur Vermeidung von Sicherheitslücken von persönlichen Informationen soll nicht in erster Linie die Informationen zu sammeln, es sei denn, Ihre Anwendung eine bestimmte und legitimen geschäftlichen Gründen für die Auflistung. Informationen, die gesammelt werden müssen, sicherstellen Sie, dass Sie entsprechenden Sicherheitskontrollen zum Schutz dieser Informationen angeben, ob diese auf dem Gerät oder auf den Back-End-Servern gespeichert sind. Sie sollte auch eine entsprechenden Daten-Aufbewahrungsrichtlinie entwickeln, die innerhalb der app und auf den Back-End-Servern implementiert wird.

 [1]: cordova_camera_camera.md.html
 [2]: cordova_media_capture_capture.md.html
 [3]: cordova_contacts_contacts.md.html
 [4]: cordova_geolocation_geolocation.md.html

Im folgenden werden einige zusätzliche hilfreiche mobile Datenschutz-Handbücher für Entwickler:

*   Kalifornische Generalstaatsanwalt, [Datenschutz unterwegs: Empfehlungen für das Mobile Ökosystem][5]

*   Zentrum für Demokratie & Technologie, Zukunft der Privatsphäre Forum, [Best Practices für Mobile App-Entwickler][6]

*   CTIA-The Wireless Association, [bewährte Methoden und Richtlinien für Location Based Services][7]

*   Federal Trade Commission, [Mobile Privacy Angaben: Aufbau von Vertrauen durch Transparenz][8]

*   Zukunft der Privatsphäre Forum, [Anwendung Privacy][9] -Website

 [5]: http://oag.ca.gov/sites/all/files/pdfs/privacy/privacy_on_the_go.pdf
 [6]: http://www.futureofprivacy.org/wp-content/uploads/Best-Practices-for-Mobile-App-Developers_Final.pdf
 [7]: http://www.ctia.org/business_resources/wic/index.cfm/AID/11300
 [8]: http://www.ftc.gov/os/2013/02/130201mobileprivacyreport.pdf
 [9]: http://www.applicationprivacy.org