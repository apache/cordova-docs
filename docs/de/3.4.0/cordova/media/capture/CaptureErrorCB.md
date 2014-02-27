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

> Wird aufgerufen, wenn ein Fehler, während eines Medien auftritt.

    function captureError( CaptureError error ) { ... };
    

## Beschreibung

Diese Funktion wird ausgeführt, wenn ein Fehler auftritt, wenn Sie versuchen, starten Sie ein Medium capture Betrieb. Fehlerszenarien enthalten, wenn die Sicherungsanwendung beschäftigt, ein Capture-Vorgang ist bereits im Gange, oder der Benutzer den Vorgang abbricht, bevor alle Mediendateien erfasst werden.

Diese Funktion führt mit einem `CaptureError` -Objekt, enthält einen entsprechenden Fehler`code`.

## Kleines Beispiel

    // capture error callback
    var captureError = function(error) {
        navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
    };