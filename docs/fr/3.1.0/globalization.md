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


# Mondialisation

Obtient des informations et effectue des opérations spécifiques aux paramètres régionaux et le fuseau horaire de l'utilisateur.

## Objets

*   GlobalizationError

## Méthodes

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

## Portée des variables

Le `globalization` objet est un enfant de la `navigator` s'opposent, et a donc une portée globale.

    // The global globalization object
    var globalization = navigator.globalization;
    

## Accéder à la fonctionnalité

Depuis la version 3.0, Cordova implémente API au niveau du périphérique comme les *plugins*. Utiliser de la CLI `plugin` commande, décrite dans l'Interface de ligne de commande, d'ajouter ou de supprimer cette fonction pour un projet :

        $ cordova plugin add org.apache.cordova.globalization
        $ cordova plugin ls
        [ 'org.apache.cordova.globalization' ]
        $ cordova plugin rm org.apache.cordova.globalization
    

Ces commandes s'appliquent à toutes les plates-formes ciblées, mais modifier les paramètres de configuration spécifiques à la plateforme décrites ci-dessous :

*   Android (dans`app/res/xml/config.xml`)
    
        <feature name="Globalization">
            <param name="android-package" value="org.apache.cordova.Globalization" />
        </feature>
        

Certaines plates-formes peuvent prendre en charge cette fonctionnalité sans nécessiter aucune configuration spéciale. Voir *Support de plate-forme* dans la section vue d'ensemble.


# globalization.getPreferredLanguage

Obtenir l'identificateur de chaîne pour la langue du client actuel.

    navigator.globalization.getPreferredLanguage(successCallback, errorCallback);
    

## Description

Retourne la chaîne d'identificateur de langue à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur.

S'il y a une erreur d'obtention de la langue, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec le texte `language: English` :

    navigator.globalization.getPreferredLanguage(
        function (language) {alert('language: ' + language.value + '\n');},
        function () {alert('Error getting language\n');}
    );
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   Retourne le code à deux lettres ISO 639-1 pour la langue actuelle.


# globalization.getLocaleName

Obtenir l'identificateur de chaîne pour paramètre de langue actuel du client.

    navigator.globalization.getLocaleName(successCallback, errorCallback);
    

## Description

Retourne la chaîne d'identificateur de paramètres régionaux pour le `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur.

S'il y a une erreur d'obtenir les paramètres régionaux, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, ceci pour afficher une fenêtre popup avec le texte`locale: en\_US`.

    navigator.globalization.getLocaleName(
        function (locale) {alert('locale: ' + locale.value + '\n');},
        function () {alert('Error getting locale\n');}
    );
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   Retourne le code à deux lettres défini dans ISO 3166 pour le pays/la région actuelle.


# globalization.dateToString

Renvoie une date mise en forme comme une chaîne selon les paramètres régionaux du client et de fuseau horaire.

    navigator.globalization.dateToString(date, successCallback, errorCallback, options);
    

## Description

Retourne la date de mise en forme `String` par une `value` propriété accessible à partir de l'objet passé comme paramètre à la`successCallback`.

Les entrants `date` paramètre doit être de type`Date`.

S'il y a une erreur de mise en forme la date, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING\_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou`full`.

Le `options.selector` peut être `date` , `time` ou`date and time`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Si le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `date: 9/25/2012 4:21PM` en utilisant les options par défaut :

    navigator.globalization.dateToString(
        new Date(),
        function (date) { alert('date: ' + date.value + '\n'); },
        function () { alert('Error getting dateString\n'); },
        { formatLength: 'short', selector: 'date and time' }
    );
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.


# globalization.stringToDate

Analyse une date mise en forme comme une chaîne, en fonction des préférences de l'utilisateur et du calendrier en utilisant le fuseau horaire du client, du client et retourne l'objet date correspondante.

    navigator.globalization.stringToDate(dateString, successCallback, errorCallback, options);
    

## Description

Retourne la date du rappel de succès avec un `properties` objet comme paramètre. Cet objet doit avoir les propriétés suivantes :

*   **année**: l'année à quatre chiffres. *(Nombre)*

*   **mois**: le mois de (0-11). *(Nombre)*

*   **jour**: le jour de (1-31). *(Nombre)*

*   **heure**: l'heure du (0-23). *(Nombre)*

*   **minute**: la minute (0-59). *(Nombre)*

*   **deuxième**: la seconde de (0 à 59). *(Nombre)*

*   **milliseconde**: les millisecondes (entre 0 et 999), non disponibles sur toutes les plateformes. *(Nombre)*

Les entrants `dateString` paramètre doit être de type`String`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

S'il y a une erreur, l'analyse de la chaîne de date, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `month:8 day:25 year:2012` . Notez que le mois entier est l'un de moins que la chaîne, comme le nombre entier de mois représente un index de tableau.

    navigator.globalization.stringToDate(
        '9/25/2012',
        function (date) {alert('month:' + date.month +
                               ' day:'  + date.day   +
                               ' year:' + date.year  + '\n');},
        function () {alert('Error getting date\n');},
        {selector: 'date'}
    );
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend en charge uniquement l'option `short` et `full` valeurs.


# globalization.getDatePattern

Retourne une chaîne de modèles pour formater et d'analyser les dates selon les préférences de l'utilisateur du client.

    navigator.globalization.getDatePattern(successCallback, errorCallback, options);
    

## Description

Retourne le modèle de la `successCallback` . L'objet passé comme paramètre contient les propriétés suivantes :

*   **modèle**: le modèle de date et d'heure pour formater et analyser des dates. Les modèles suivent Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **fuseau horaire**: l'abréviation du fuseau horaire sur le client. *(String)*

*   **utc_offset**: la différence actuelle en secondes entre le temps universel coordonné et du fuseau horaire du client. *(Nombre)*

*   **DST_OFFSET**: l'offset d'heure actuel en secondes entre non-heure le client du fuseau horaire et l'heure du client sauver du fuseau horaire. *(Nombre)*

S'il y a une erreur, obtenir le modèle, le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN\_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {formatLength: « court », sélecteur: « date et heure »}
    

Le `options.formatLength` peut être `short` , `medium` , `long` , ou `full` . Le `options.selector` peut être `date` , `time` ou`date and
time`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cet exemple pour afficher une fenêtre popup avec texte comme `pattern: M/d/yyyy h:mm a` :

    function checkDatePattern() {
        navigator.globalization.getDatePattern(
            function (date) { alert('pattern: ' + date.pattern + '\n'); },
            function () { alert('Error getting pattern\n'); },
            { formatLength: 'short', selector: 'date and time' }
        );
    }
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   Le `formatLength` prend uniquement en charge `short` et `full` valeurs.

*   Le `pattern` pour `date and time` modèle retourne uniquement datetime plein format.

*   Le `timezone` retourne le nom de zone à temps plein.

*   La `dst_offset` propriété n'est pas prise en charge, et toujours retourne zéro.


# globalization.getDateNames

Retourne un tableau des noms des mois ou jours de la semaine, selon le calendrier et les préférences de l'utilisateur du client.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Description

Retourne le tableau de noms à la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient une `value` propriété avec un `Array` de `String` valeurs. Les noms de fonctionnalités de tableau à partir de soit le premier mois de l'année ou le premier jour de la semaine, selon l'option choisie.

S'il y a une erreur d'obtention des noms, puis les `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {type: « large », item: « mois »}
    

La valeur de `options.type` peut être `narrow` ou`wide`.

La valeur de `options.item` peut être `months` ou`days`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cet exemple affiche une série de douze fenêtres popup, un par mois, avec un texte semblable à `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Exemple complet

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

Indique si l'heure avancée est en vigueur pour une date donnée en utilisant le calendrier et le fuseau horaire du client.

    navigator.globalization.isDayLightSavingsTime(date, successCallback, errorCallback);
    

## Description

Indique si l'heure avancée est en vigueur à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `dst` propriété avec une `Boolean` valeur. A `true` valeur indique que l'heure avancée est en vigueur à la date donnée, et `false` indique qu'il ne l'est pas.

Le paramètre entrant `date` doit être de type`Date`.

S'il y a une erreur de lecture de la date, puis le `errorCallback` s'exécute. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Au cours de l'été, et si le navigateur est défini sur un fuseau horaire la DST-activé, il doit afficher une boîte de dialogue contextuelle avec un texte semblable à `dst: true` :

    navigator.globalization.isDayLightSavingsTime(
        new Date(),
        function (date) {alert('dst: ' + date.dst + '\n');},
        function () {alert('Error getting names\n');}
    );
    

## Exemple complet

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

Retourne le premier jour de la semaine selon le calendrier et les préférences de l'utilisateur du client.

    navigator.globalization.getFirstDayOfWeek(successCallback, errorCallback);
    

## Description

Les jours de la semaine sont numérotés à partir de 1, où 1 est supposé pour être le dimanche. Retourne le jour de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `Number` valeur.

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.UNKNOWN\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à`day: 1`.

    navigator.globalization.getFirstDayOfWeek(
        function (day) {alert('day: ' + day.value + '\n');},
        function () {alert('Error getting day\n');}
    );
    

## Exemple complet

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

Renvoie un nombre mis en forme comme une chaîne selon les préférences de l'utilisateur du client.

    navigator.globalization.numberToString(number, successCallback, errorCallback, options);
    

## Description

Retourne la chaîne mise en forme de nombre à la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `String` valeur.

S'il y a une erreur de mise en forme le nombre, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING\_ERROR`.

Le `options` paramètre est facultatif, et ses valeurs par défaut sont :

    {type: « decimal »}
    

Le `options.type` peut être « decimal », « % » ou « monnaie ».

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela permet d'afficher une boîte de dialogue contextuelle avec un texte semblable à `number: 3.142` :

    navigator.globalization.numberToString(
        3.1415926,
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Exemple complet

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

Analyse un nombre mis en forme comme une chaîne selon les préférences de l'utilisateur du client et renvoie le numéro du correspondant.

    navigator.globalization.stringToNumber(string, successCallback, errorCallback, options);
    

## Description

Retourne le nombre de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit avoir une `value` propriété avec une `Number` valeur.

S'il y a une erreur, l'analyse de la chaîne de numéro, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PARSING\_ERROR`.

Le `options` paramètre est facultatif et par défaut les valeurs suivantes :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable à `number: 1234.56` :

    navigator.globalization.stringToNumber(
        '1234.56',
        function (number) {alert('number: ' + number.value + '\n');},
        function () {alert('Error getting number\n');},
        {type:'decimal'}
    );
    

## Exemple complet

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

Retourne une chaîne de modèles pour formater et d'analyser les chiffres selon les préférences de l'utilisateur du client.

    navigator.globalization.getNumberPattern(successCallback, errorCallback, options);
    

## Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet contient les propriétés suivantes :

*   **modèle**: le modèle de numéro de formater et d'analyser les chiffres. Les modèles suivent Unicode Technical Standard #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **symbole**: le symbole à utiliser lors de la mise en forme et l'analyse, comme un symbole de pourcentage ou de la monnaie. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de mise en forme des nombres. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **positif**: le symbole à utiliser pour les nombres positifs lors de l'analyse et de mise en forme. *(String)*

*   **négatif**: le symbole à utiliser pour les nombres négatifs lors de l'analyse et de mise en forme. *(String)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.PATTERN\_ERROR`.

Le `options` paramètre est facultatif, et les valeurs par défaut sont :

    {type: « decimal »}
    

Le `options.type` peut être `decimal` , `percent` , ou`currency`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS
*   Windows Phone 8

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale, cela doit afficher une boîte de dialogue contextuelle avec un texte semblable aux résultats qui suivent :

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
    

Résultats :

    modèle: #, ##0. ### symbole:.
    fraction : arrondi 0: 0 positif : négatif: - décimal:.
    regroupement:,
    

## Exemple complet

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
    

## Windows Phone 8 Quirks

*   La `pattern` propriété n'est pas prise en charge et retuens une chaîne vide.

*   La `fraction` propriété n'est pas prise en charge et retourne zéro.


# globalization.getCurrencyPattern

Retourne une chaîne de modèles pour formater et analyser les valeurs de monnaie selon les préférences de l'utilisateur et du code de devise ISO 4217 du client.

     navigator.globalization.getCurrencyPattern(currencyCode, successCallback, errorCallback);
    

## Description

Retourne le modèle de la `successCallback` avec un `properties` objet comme paramètre. Cet objet doit contenir les propriétés suivantes :

*   **modèle**: le modèle de la monnaie de formater et d'analyser les valeurs de devise. Les patrons de suivent la norme technique Unicode #35. <http://unicode.org/reports/tr35/tr35-4.html>. *(String)*

*   **code**: code de devise de l'ISO 4217 pour le modèle. *(String)*

*   **fraction**: le nombre de chiffres fractionnaires à utiliser lors de l'analyse et de formatage de devises. *(Nombre)*

*   **arrondissement**: l'arrondi incrémenter pour utiliser lors de l'analyse et de mise en forme. *(Nombre)*

*   **décimal**: le symbole décimal à utiliser pour l'analyse et de mise en forme. *(String)*

*   **regroupement**: le symbole de groupe à utiliser pour l'analyse et de mise en forme. *(String)*

Les entrants `currencyCode` paramètre doit être un `String` de l'un des codes de devise ISO 4217, par exemple « USD ».

S'il y a une erreur, obtenir le modèle, puis le `errorCallback` s'exécute avec un `GlobalizationError` objet comme paramètre. Code attendu de l'erreur est`GlobalizationError.FORMATTING\_ERROR`.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS

## Petit exemple

Lorsque le navigateur est configuré pour la `en\_US` locale et la devise sélectionnée est Dollars des États-Unis, cet exemple pour afficher une fenêtre popup avec un texte semblable aux résultats qui suivent :

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
    

Résultat escompté :

    pattern: $#,##0.##;($#,##0.##)
    code: USD
    fraction: 2
    rounding: 0
    decimal: .
    grouping: ,
    

## Exemple complet

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

Un objet qui représente une erreur de l'API de la mondialisation.

## Propriétés

*   **code**: Un des codes suivants qui représente le type d'erreur *(Nombre)* 
    *   GlobalizationError.UNKNOWN _ erreur: 0
    *   GlobalizationError.FORMATTING _ erreur: 1
    *   GlobalizationError.PARSING _ erreur: 2
    *   GlobalizationError.PATTERN _ erreur: 3
*   **message**: un message texte qui comprend l'explication de l'erreur et/ou de détails *(String)*

## Description

Cet objet est créé et peuplé de Cordova et retourné à un rappel en cas d'erreur.

## Plates-formes prises en charge

*   Android
*   BlackBerry WebWorks (OS 5.0 et plus)
*   iOS

## Petit exemple

Lorsque le rappel d'erreur suivant s'exécute, il affiche une fenêtre popup avec le texte semblable à `code: 3` et`message:`

    function errorCallback(error) {
        alert('code: ' + error.code + '\n' +
              'message: ' + error.message + '\n');
    };
    

## Exemple complet

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
