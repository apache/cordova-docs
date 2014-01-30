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

# CaptureErrorCB

> Uveljavljati, če pride do napake med operacijo zajem medijev.

    function captureError( CaptureError error ) { ... };
    

## Opis

Ta funkcija izvede če pride do napake čas težaven v splavitev medijev zajemanje operacijo. Neuspeh scenariji vključujejo ko kapitan uporabe je zaseden, zajemanje operacija že poteka, ali uporabnik prekliče operacijo, preden so ujeli vse predstavnostne datoteke.

Ta funkcija izvede z a `CaptureError` predmet, ki vsebuje ustrezno napake`code`.

## Quick primer

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };