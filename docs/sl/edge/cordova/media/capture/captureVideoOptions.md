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

# CaptureVideoOptions

> Povzema televizija kapitan zunanja podoba predkupna pravica.

## Lastnosti

*   **omejitev**: največje število video posnetkov, nosač moči kapitan obratuje sam kapitan. Vrednost mora biti večja ali enaka 1 (privzeto 1).

*   **trajanje**: najdaljše trajanje video posnetka, v sekundah.

## Quick primer

    // limit capture operation to 3 video clips
    var options = { limit: 3 };
    
    navigator.device.capture.captureVideo(captureSuccess, captureError, options);
    

## BlackBerry WebWorks Quirks

*   **Trajanje** parameter ni podprta, tako ne more biti omejena dolžina posnetkov programsko.

## iOS Quirks

*   Parameter **omejitve** ni podprta. Na poziv se zapiše samo en video.