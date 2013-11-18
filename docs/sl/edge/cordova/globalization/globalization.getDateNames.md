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

# globalization.getDateNames

Vrne matriko imena mesecev ali dni na teden, glede na Strankine želje uporabnikov in koledar.

    navigator.globalization.getDateNames(successCallback, errorCallback, options);
    

## Opis

Vrne matriko imena, da je `successCallback` s a `properties` predmet, kot parameter. Ta predmet vsebuje a `value` lastnine s je `Array` od `String` vrednosti. Array funkcije imena od bodisi v prvem mesecu leta ali prvi dan v tednu, odvisno od izbrane možnosti.

Če je prišlo do napake pridobivanja imena, potem je `errorCallback` izvede z a `GlobalizationError` predmet, kot parameter. Pričakovani koda napake je`GlobalizationError.UNKNOWN\_ERROR`.

Na `options` parameter je neobvezen in njegove privzete vrednosti so:

    {type:'wide', item:'months'}
    

Vrednost `options.type` je lahko `narrow` ali`wide`.

Vrednost `options.item` je lahko `months` ali`days`.

## Podprte platforme

*   Android
*   BlackBerry WebWorks 5.0 +
*   iOS
*   Windows Phone 8

## Quick primer

Ko je brskalnik nastavljen na na `en\_US` locale, ta primer prikaže serijo dvanajstih ljudstvo dialogičen, enega na mesec, z besedilom, ki je podobna `month: January` :

    navigator.globalization.getDateNames(
        function (names) {
            for (var i = 0; i < names.value.length; i++) {
                alert('month: ' + names.value[i] + '\n');
            }
        },
        function () { alert('Error getting names\n'); },
        { type: 'wide', item: 'months' }
    );
    

## Celoten primer

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