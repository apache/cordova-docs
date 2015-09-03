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
---


# Globalizzazione

Ottiene informazioni ed esegue le operazioni specifiche di impostazioni locali dell'utente e il fuso orario.

## Oggetti

*   GlobalizationError

## Metodi

*   globalization.getPreferredLanguage
*   globalization.getLocaleName
*   globalization.dateToString
*   globalization.stringToDate
*   globalization.getDatePattern
*   globalization.getDateNames
*   globalization.isDayLightSavingsTime
*   globalization.getFirstDayOfWeek
*   globalization.numberToString
*   globalization.stringToNumber
*   globalization.getNumberPattern
*   globalization.getCurrencyPattern

## Portata variabile

Il `globalization` oggetto è un bambino del `navigator` oggetto, e quindi ha ambito globale.

    // The global globalization object
    var globalization = navigator.globalization;
    

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.


# globalization.getPreferredLanguage

Ottenere l'identificatore di stringa per la lingua corrente del client.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Descrizione

Restituisce la stringa di identificatore di lingua per i `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore nell'acquisizione della lingua, poi la `errorCallback` viene eseguita con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questo dovrebbe visualizzare una finestra di dialogo pop-up con il testo `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getPreferredLanguage Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLanguage() {
          navigator.globalization.getPreferredLanguage(
            function (language) {alert('language: ' + language.value + '\n');},
            function () {alert('Error getting language\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLanguage()">Click for language</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Restituisce il codice di due lettere ISO 639-1 per la lingua corrente.


# globalization.getLocaleName

Ottenere l'identificatore di stringa per l'impostazione locale corrente del client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Descrizione

Restituisce la stringa dell'identificatore delle impostazioni locali per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore di ottenere le impostazioni locali, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra popup con il testo`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getLocaleName Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkLocale() {
          navigator.globalization.getLocaleName(
            function (locale) {alert('locale: ' + locale.value + '\n');},
            function () {alert('Error getting locale\n');}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkLocale()">Click for locale</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Restituisce il codice di due lettere definito in ISO 3166 per il paese attuale.


# globalization.dateToString

Restituisce una data formattata come stringa secondo le impostazioni locali del client e fuso orario.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Descrizione

Restituisce la data formattata `String` tramite un `value` proprietà accessibile dall'oggetto passato come parametro per la`successCallback`.

L'ingresso `date` parametro dovrebbe essere di tipo`Date`.

Se c'è un errore di formattazione della data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING\_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o`full`.

Il `options.selector` può essere `date` , `time` o`date and time`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Se il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a `date: 9/25/2012 4:21PM` utilizzando le opzioni di default:

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>dateToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateString() {
          navigator.globalization.dateToString(
            new Date(),
            function (date) {alert('date: ' + date.value + '\n');},
            function () {alert('Error getting dateString\n');,
            {formatLength:'short', selector:'date and time'}}
          );
        }
        </script>
      </head>
      <body>
        <button onclick="checkDateString()">Click for date string</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.


# globalization.stringToDate

Analizza una data formattata come stringa, secondo le preferenze dell'utente e calendario utilizzando il fuso orario del cliente, il cliente e restituisce l'oggetto data corrispondente.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Descrizione

Restituisce la data al metodo di callback con successo un `properties` oggetto come parametro. Tale oggetto dovrebbe avere le seguenti proprietà:

*   **anno**: l'anno a quattro cifre. *(Numero)*

*   **mese**: mese da (0-11). *(Numero)*

*   **giorno**: il giorno da (1-31). *(Numero)*

*   **ora**: l'ora (0-23). *(Numero)*

*   **minuti**: il minuto da (0-59). *(Numero)*

*   **secondo**: il secondo da (0-59). *(Numero)*

*   **millisecondo**: I millisecondi (da 0-999), non disponibili su tutte le piattaforme. *(Numero)*

L'ingresso `dateString` parametro dovrebbe essere di tipo`String`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

Se c'è un errore di parsing della stringa data, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a `month:8 day:25 year:2012` . Si noti che il mese intero è uno minore di stringa, come l'intero mese rappresenta un indice di matrice.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToDate Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkStringDate() {
          navigator.globalization.stringToDate(
            '9/25/2012',
            function (date) {alert('month:' + date.month +
                                   ' day:' + date.day +
                                   ' year:' + date.year + '\n');},
            function () {alert('Error getting date\n');},
            {selector:'date'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkStringDate()">Click for parsed date</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Il `formatLength` opzione supporta solo `short` e `full` i valori.


# globalization.getDatePattern

Restituisce una stringa per formattare e analizzare i dati secondo le preferenze dell'utente del client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Descrizione

Restituisce il modello per la `successCallback` . L'oggetto passato come parametro contiene le seguenti proprietà:

*   **modello**: il modello di data e ora per formattare e analizzare i dati. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **fuso orario**: il nome abbreviato del fuso orario sul client. *(String)*

*   **utc_offset**: l'attuale differenza in secondi tra del client fuso orario e tempo universale coordinato. *(Numero)*

*   **DST_OFFSET**: l'offset corrente ora legale in secondi tra non-legale del client di fuso orario e ora legale del cliente risparmio di fuso orario. *(Numero)*

Se c'è un errore per ottenere il modello, il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN\_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {formatLength: 'breve', selettore: 'data e ora'}
    

Il `options.formatLength` può essere `short` , `medium` , `long` , o `full` . Il `options.selector` può essere `date` , `time` o`date and
time`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, in questo esempio viene visualizzata una finestra di popup con il testo come `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDatePattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDatePattern() {
          navigator.globalization.getDatePattern(
            function (date) {alert('pattern: ' + date.pattern + '\n');},
            function () {alert('Error getting pattern\n');},
            {formatLength:'short', selector:'date and time'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDatePattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   Il `formatLength` supporta solo `short` e `full` i valori.

*   La `pattern` per `date and time` modello restituisce solo il formato datetime completo.

*   Il `timezone` restituisce il nome della zona a tempo pieno.

*   La `dst_offset` proprietà non è supportata, e sempre restituisce zero.


# globalization.getDateNames

Restituisce una matrice di nomi di mesi o giorni della settimana, a seconda delle preferenze dell'utente del client e calendario.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Descrizione

Restituisce la matrice di nomi per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene un `value` proprietà con un `Array` di `String` i valori. I nomi di funzioni matrice a partire da entrambi il primo mese dell'anno o il primo giorno della settimana, a seconda dell'opzione selezionata.

Se c'è un errore ottenendo i nomi, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {tipo: 'largo', voce: 'mesi'}
    

Il valore di `options.type` può essere `narrow` o`wide`.

Il valore di `options.item` può essere `months` o`days`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, in questo esempio viene visualizzata una serie di dodici finestre pop-up, uno al mese, con un testo simile a `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getDateNames Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDateNames() {
          navigator.globalization.getDateNames(
            function (names) {
              for (var i=0; i<names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
              }
            },
            function () {alert('Error getting names\n');},
            {type:'wide', item:'months'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDateNames()">Click for date names</button>
      </body>
    </html>


# globalization.isDayLightSavingsTime

Indica se l'ora legale è in vigore per una data specifica utilizzando del client fuso orario e calendario.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Descrizione

Indica se è o meno dell'ora legale in vigore alla `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `dst` proprietà con un `Boolean` valore. A `true` il valore indica che l'ora legale è in vigore per la data specificata, e `false` indica che non è.

Il parametro in ingresso `date` dovrebbe essere di tipo`Date`.

Se c'è un errore di lettura della data, allora il `errorCallback` esegue. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Durante l'estate, e se il browser è impostato su un fuso orario abilitato DST, questo dovrebbe visualizzare una finestra di popup con testo simile a `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>isDayLightSavingsTime Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkDayLightSavings() {
          navigator.globalization.isDayLightSavingsTime(
            new Date(),
            function (date) {alert('dst: ' + date.dst + '\n');},
            function () {alert('Error getting names\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkDayLightSavings()">Click for daylight savings</button>
      </body>
    </html>


# globalization.getFirstDayOfWeek

Restituisce il primo giorno della settimana secondo le preferenze dell'utente del client e calendario.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Descrizione

I giorni della settimana sono numerati a partire da 1, dove 1 è presupposto per essere domenica. Restituisce il giorno per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.UNKNOWN\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getFirstDayOfWeek Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkFirstDay() {
          navigator.globalization.getFirstDayOfWeek(
            function (day) {alert('day: ' + day.value + '\n');},
            function () {alert('Error getting day\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkFirstDay()">Click for first day of week</button>
      </body>
    </html>


# globalization.numberToString

Restituisce un numero formattato come una stringa secondo le preferenze dell'utente del client.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Descrizione

Restituisce la stringa formattata numero per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `String` valore.

Se c'è un errore di formattazione del numero, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING\_ERROR`.

Il `options` parametro è facoltativo e valori predefiniti sono:

    {tipo: 'decimale'}
    

Il `options.type` può essere 'decimale', '%' o 'valuta'.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questa viene visualizzata una finestra di popup con testo simile a `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>numberToString Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.numberToString(
            3.1415926,
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for number</button>
      </body>
    </html>


# globalization.stringToNumber

Analizza un numero formattato come una stringa secondo le preferenze dell'utente del client e restituisce il numero corrispondente.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Descrizione

Restituisce il numero per il `successCallback` con un `properties` oggetto come parametro. Tale oggetto dovrebbe avere una `value` proprietà con un `Number` valore.

Se c'è un errore di parsing della stringa di numeri, poi il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PARSING\_ERROR`.

Il `options` parametro è facoltativo e verrà impostato i seguenti valori:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile a `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>stringToNumber Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkNumber() {
          navigator.globalization.stringToNumber(
            '1234.56',
            function (number) {alert('number: ' + number.value + '\n');},
            function () {alert('Error getting number\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkNumber()">Click for parsed number</button>
      </body>
    </html>


# globalization.getNumberPattern

Restituisce una stringa per formattare e analizzare i numeri secondo le preferenze dell'utente del client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto contiene le seguenti proprietà:

*   **modello**: il modello del numero per formattare e analizzare i numeri. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **simbolo**: il simbolo da utilizzare durante la formattazione e l'analisi, come un simbolo di percentuale o valuta. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione dei numeri. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **positivo**: il simbolo da utilizzare per i numeri positivi quando l'analisi e la formattazione. *(String)*

*   **negativo**: il simbolo da utilizzare per i numeri negativi quando l'analisi e la formattazione. *(String)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.PATTERN\_ERROR`.

Il `options` parametro è facoltativo e i valori predefiniti sono:

    {tipo: 'decimale'}
    

Il `options.type` può essere `decimal` , `percent` , o`currency`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS
*   Windows Phone 8

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale, questo dovrebbe visualizzare una finestra di popup con testo simile ai risultati che seguono:

    navigator.globalization.getNumberPattern(
        function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                  'symbol: '   + pattern.symbol   + '\n' +
                                  'fraction: ' + pattern.fraction + '\n' +
                                  'rounding: ' + pattern.rounding + '\n' +
                                  'positive: ' + pattern.positive + '\n' +
                                  'negative: ' + pattern.negative + '\n' +
                                  'decimal: '  + pattern.decimal  + '\n' +
                                  'grouping: ' + pattern.grouping);},
        function () {alert('Error getting pattern\n');},
        {type:'decimal'}
    );
    

Risultati:

    Modello: #, # # 0. # # # simbolo:.
    frazione: arrotondamento 0: 0 positivo: negativo: - decimale:.
    raggruppamento:,
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getNumberPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getNumberPattern(
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'symbol: '   + pattern.symbol   + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'positive: ' + pattern.positive + '\n' +
                                      'negative: ' + pattern.negative + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');},
            {type:'decimal'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>
    

## Windows Phone 8 stranezze

*   La `pattern` proprietà non è supportata e retuens una stringa vuota.

*   La `fraction` proprietà non è supportata e restituisce zero.


# globalization.getCurrencyPattern

Restituisce una stringa per formattare e analizzare i valori di valuta secondo le preferenze dell'utente e il codice ISO 4217 del client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Descrizione

Restituisce il modello per la `successCallback` con un `properties` oggetto come parametro. Tale oggetto deve contenere le seguenti proprietà:

*   **modello**: il modello valuta per formattare e analizzare i valori di valuta. I modelli seguono Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **codice**: codice per il modello The ISO 4217. *(String)*

*   **frazione**: il numero di cifre da utilizzare durante l'analisi e la formattazione valuta. *(Numero)*

*   **arrotondamento**: l'arrotondamento incrementare per utilizzare quando l'analisi e la formattazione. *(Numero)*

*   **decimale**: il simbolo decimale da utilizzare per l'analisi e la formattazione. *(String)*

*   **raggruppamenti**: il raggruppamento simbolo da utilizzare per l'analisi e la formattazione. *(String)*

L'ingresso `currencyCode` parametro dovrebbe essere un `String` di uno dei codici valuta ISO 4217, ad esempio 'USD'.

Se c'è un errore, ottenendo il pattern, allora il `errorCallback` viene eseguito con un `GlobalizationError` oggetto come parametro. Previsto codice dell'errore è`GlobalizationError.FORMATTING\_ERROR`.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS

## Esempio rapido

Quando il browser è impostato per la `en\_US` locale e la valuta selezionata è dollari degli Stati Uniti, in questo esempio viene visualizzata una finestra di popup con testo simile ai risultati che seguono:

    navigator.globalization.getCurrencyPattern(
        'USD',
        function (pattern) {
            alert('pattern: '  + pattern.pattern  + '\n' +
                  'code: '     + pattern.code     + '\n' +
                  'fraction: ' + pattern.fraction + '\n' +
                  'rounding: ' + pattern.rounding + '\n' +
                  'decimal: '  + pattern.decimal  + '\n' +
                  'grouping: ' + pattern.grouping);
        },
        function () { alert('Error getting pattern\n'); }
    );
    

Risultato atteso:

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>getCurrencyPattern Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function checkPattern() {
          navigator.globalization.getCurrencyPattern(
            'USD',
            function (pattern) {alert('pattern: '  + pattern.pattern  + '\n' +
                                      'code: '     + pattern.code     + '\n' +
                                      'fraction: ' + pattern.fraction + '\n' +
                                      'rounding: ' + pattern.rounding + '\n' +
                                      'decimal: '  + pattern.decimal  + '\n' +
                                      'grouping: ' + pattern.grouping);},
            function () {alert('Error getting pattern\n');}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkPattern()">Click for pattern</button>
      </body>
    </html>


# GlobalizationError

Un oggetto che rappresenta un errore dall'API di globalizzazione.

## Proprietà

*   **codice**: Uno dei seguenti codici che rappresenta il tipo di errore *(Numero)* 
    *   GlobalizationError.UNKNOWN _ errore: 0
    *   GlobalizationError.FORMATTING _ errore: 1
    *   GlobalizationError.PARSING _ errore: 2
    *   GlobalizationError.PATTERN _ errore: 3
*   **messaggio**: un messaggio di testo che include la spiegazione dell'errore e/o dettagli *(String)*

## Descrizione

Questo oggetto è creato e popolato da Cordova e restituito una richiamata in caso di errore.

## Piattaforme supportate

*   Android
*   BlackBerry WebWorks (OS 5.0 e superiori)
*   iOS

## Esempio rapido

Quando si esegue il callback di errore seguenti, esso viene visualizzata una finestra popup con il testo simile a `code: 3` e`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Esempio completo

    <!DOCTYPE HTML>
    <html>
      <head>
        <title>GlobalizationError Example</title>
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        function successCallback(date) {
          alert('month:' + date.month +
                ' day:' + date.day +
                ' year:' + date.year + '\n');
        }
    
        function errorCallback(error) {
          alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
        };
    
        function checkError() {
          navigator.globalization.stringToDate(
            'notADate',
            successCallback,
            errorCallback,
            {selector:'foobar'}
          );
        }
    
        </script>
      </head>
      <body>
        <button onclick="checkError()">Click for error</button>
      </body>
    </html>
