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

title: Archiviazione
---

# Archiviazione

> Fornisce l'accesso alle opzioni di archiviazione del dispositivo.

Questa API offre opzioni di archiviazione basate su due diverse specifiche W3C:

*   La [Specifica API di archiviazione Web][1] consente di accedere ai dati tramite coppie chiave/valore semplice. Vedere la sezione [localStorage](localstorage/localstorage.html) per informazioni dettagliate su questa interfaccia.

*   La [Specifica di [Database](database/database.html) SQL Web][2] offre più tabelle di database completo accessibili tramite query SQL. Una sintesi di questa interfaccia viene visualizzata immediatamente sotto.

 [1]: http://dev.w3.org/html5/webstorage/
 [2]: http://dev.w3.org/html5/webdatabase/

Cordova fornisce accesso a entrambe le interfacce per la minoranza di dispositivi che non supportano già li. Altrimenti applicano implementazioni incorporate.

## Metodi

*   [openDatabase](storage.opendatabase.html)

## Argomenti

*   [database_name](parameters/name.html)
*   [database_version](parameters/version.html)
*   [database_displayname](parameters/display_name.html)
*   [database_size](parameters/size.html)

## Oggetti

*   [Database](database/database.html)
*   [SQLTransaction](sqltransaction/sqltransaction.html)
*   [SQLResultSet](sqlresultset/sqlresultset.html)
*   [SQLResultSetRowList](sqlresultsetrowlist/sqlresultsetrowlist.html)
*   [SQLError](sqlerror/sqlerror.html)

## La funzionalità di accesso

A partire dalla versione 3.0, accesso alle API di archiviazione è costruito in Cordova e non richiedono l'utilizzo di CLI aggiungere plugin come descritto in l'interfaccia della riga di comando.

Se si utilizza il vecchio set di strumenti di Cordova che precedono la CLI, le seguenti impostazioni di configurazione specifiche della piattaforma sono ancora necessari:

*   Android (in`app/res/xml/config.xml`)
    
        < nome funzione = "Storage" >< nome param = "android-pacchetto" value="org.apache.cordova.Storage" / >< / caratteristica >
        

*   BlackBerry WebWorks (in`www/config.xml`)
    
        < presentano id="blackberry.widgetcache" richiesto = versione "vero" = "1.0.0.0" / >
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.