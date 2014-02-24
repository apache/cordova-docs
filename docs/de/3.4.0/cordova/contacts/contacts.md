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

# Kontakte

> Das `contacts` Objekt bietet Zugriff auf die Kontaktdatenbank Gerät.

**Wichtige Datenschutzhinweis:** Erhebung und Nutzung von Kontaktdaten löst wichtige Datenschutzprobleme. Ihre app-Datenschutzerklärung sollten besprechen, wie die app Kontaktdaten verwendet und ob es mit irgendwelchen anderen Parteien geteilt wird. Kontaktinformationen ist als vertraulich angesehen, weil es die Menschen zeigt, mit denen eine Person kommuniziert. Daher neben Ihrer app-Privacy Policy sollten stark Sie eine just-in-Time Ankündigung vor Ihrer Anwendung Zugriff oder die Verwendung der Kontaktdaten (wenn das Betriebssystem des Geräts bereits tun nicht). Diese Benachrichtigung sollte der gleichen Informationen, die vorstehend, sowie die Zustimmung des Benutzers (z.B. durch Präsentation Entscheidungen für das **OK** und **Nein danke**). Beachten Sie, dass einige app-Marktplätze können Ihre app eine Frist von just-in-Time und Erlaubnis des Benutzers vor dem Zugriff auf Kontaktdaten einholen. Eine klare und leicht verständliche Benutzererfahrung rund um den Einsatz von Kontakt Daten hilft Benutzer Verwirrung zu vermeiden und wahrgenommene Missbrauch der Kontaktdaten. Weitere Informationen finden Sie in der Datenschutz-Guide.

## Methoden

*   Contacts.Create
*   Contacts.Find

## Argumente

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Objekte

*   Kontakt
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Zugriff auf die Funktion

Ab Version 3.0 implementiert Cordova Geräteebene APIs als *Plugins*. Verwenden Sie der CLI `plugin` Befehl, beschrieben in der Command-Line Interface, hinzufügen oder Entfernen dieses Feature für ein Projekt:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Diese Befehle gelten für alle Zielplattformen, aber die unten beschriebenen Plattform-spezifische Konfigurationseinstellungen ändern:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        

*   BlackBerry WebWorks
    
        (in www/plugins.xml)
        <feature name="Contact">
            <param name="blackberry-package" value="org.apache.cordova.pim.Contact" />
        </feature>
        
        (in www/config.xml)
        <feature id="blackberry.find"        required="true" version="1.0.0.0" />
        <feature id="blackberry.identity"    required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Address" required="true" version="1.0.0.0" />
        <feature id="blackberry.pim.Contact" required="true" version="1.0.0.0" />
        

*   iOS (in`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone
    
        (in Properties/WPAppManifest.xml)
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Bezug: [Anwendungsmanifest für Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Einige Plattformen können dieses Feature unterstützen, ohne dass eine besondere Konfiguration. Finden Sie unter *Plattform-Unterstützung* in der Übersicht.