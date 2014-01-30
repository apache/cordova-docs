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

# Stiki

> Z `contacts` predmet omogoča dostop do naprave podatkovna zbirka stikov.

**Opozorilo**: zbiranje in uporabo kontaktnih podatkov postavlja vprašanja pomembno zasebnosti. Vaš app zasebnosti dogovoriti, kako app uporablja kontaktne podatke in si ali delijo z drugimi strankami. Kontaktne informacije se šteje za občutljive, saj razkriva ljudi, s katerimi komunicira oseba. Zato poleg app je zasebnosti, si odločno menijo, da zagotavlja ravno v času obvestila, preden app dostopi ali uporablja kontaktne podatke, če operacijski sistem naprave ne stori že. To obvestilo morajo iste informacije navedeno zgoraj, kot tudi pridobitev dovoljenja uporabnika (npr. po predstavitvi odločitve za **OK** in **Ne hvala**). Upoštevajte, da zahtevajo nekateri trgi app, app ravno v času obvestila in pridobitev dovoljenja uporabnikov pred dostopom do kontaktnih podatkov. Veder ter neprisiljen-v-razumeti uporabniško izkušnjo, ki obkroža uporabo kontaktnih podatkov pomaga izognili zmedi uporabnika in zaznane zlorabe kontaktnih podatkov. Če želite več informacij, si oglejte vodnik o zasebnosti.

## Metode

*   contacts.create
*   contacts.find

## Argumentov

*   contactFields
*   contactSuccess
*   contactError
*   contactFindOptions

## Predmeti

*   Contact
*   ContactName
*   ContactField
*   ContactAddress
*   ContactOrganization
*   ContactFindOptions
*   ContactError

## Dostop funkcijo

Od različice 3.0, Cordova izvaja naprava ravni API kot *plugins*. Uporabite CLI je `plugin` ukaz, opisane v The vmesnik ukazne vrstice, da dodate ali odstranite to funkcijo za projekt:

        $ cordova plugin add org.apache.cordova.contacts
        $ cordova plugin ls
        [ 'org.apache.cordova.contacts' ]
        $ cordova plugin rm org.apache.cordova.contacts
    

Ti ukazi veljajo za vse ciljne platforme, vendar spremenite posamezne nastavitve spodaj opisani:

*   Android
    
        (in app/res/xml/config.xml)
        <feature name="Contacts">
            <param name="android-package" value="org.apache.cordova.contacts.ContactManager" />
        </feature>
        
        (in app/AndroidManifest.xml)
            <uses-permission android:name="android.permission.READ_CONTACTS" />
            <uses-permission android:name="android.permission.WRITE_CONTACTS" />
            <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        

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
        

*   iOS (v imeniku imenovan uporabe`config.xml`)
    
        <feature name="Contacts">
            <param name="ios-package" value="CDVContacts" />
        </feature>
        

*   Windows Phone (v`Properties/WPAppManifest.xml`)
    
        <Capabilities>
            <Capability Name="ID_CAP_CONTACTS" />
        </Capabilities>
        
    
    Sklic: [manifestu za program za Windows Phone][1]

 [1]: http://msdn.microsoft.com/en-us/library/ff769509%28v=vs.92%29.aspx

Nekatere platforme lahko podpira to funkcijo ne zahtevati poljuben poseben zunanja podoba. Videti podpora platformo za pregled.