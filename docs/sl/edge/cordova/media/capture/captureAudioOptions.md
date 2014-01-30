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

# CaptureAudioOptions

> Povzema možnosti konfiguracije za zajem zvoka.

## Lastnosti

*   **omejitev**: največje število slišan uščipniti naprave uporabnik moči zapisnik v delovanje enotnega zajemanja. Vrednost mora biti večja ali enaka 1 (privzeto 1).

*   **trajanje**: najdaljše trajanje zvočnega posnetka zvok, v sekundah.

## Quick primer

    // limit capture operation to 3 media files, no longer than 10 seconds each
    var options = { limit: 3, duration: 10 };
    
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
    

## Android Quirks

*   Na `duration` parameter ni podprta. Snemanje dolžin ni mogoče omejiti programsko.

## BlackBerry WebWorks Quirks

*   Na `duration` parameter ni podprta. Snemanje dolžin ni mogoče omejiti programsko.

## iOS Quirks

*   Na `limit` parameter ni podprta, tako samo en posnetek je mogoče ustvariti za vsak poziv.