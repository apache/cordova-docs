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

# PositionError

A `PositionError` predmet se prenese na `geolocationError` povratni klic, ko pride do napake.

## Lastnosti

*   **Šifra**: eno od vnaprej določenih napak kode naštetih spodaj.

*   **sporočilo**: sporočilo o napaki, ki opisuje podrobnosti je prišlo do napake.

## Konstante

*   `PositionError.PERMISSION_DENIED`
*   `PositionError.POSITION_UNAVAILABLE`
*   `PositionError.TIMEOUT`

## Opis

Na `PositionError` predmet se prenese na `geolocationError` povratni klic funkcije, ko pride do napake z geolokacije. Značilnosti teh kod napak:

*   `PositionError.PERMISSION_DENIED`: Vrnil ko uporabnikom ne dovoli app pridobiti informacij o položaju. To je odvisna od platforme.

*   `PositionError.POSITION_UNAVAILABLE`: Vrnil, ko naprava ne more pridobiti stališče. Na splošno to pomeni naprave ni povezan z omrežjem ali ne morete dobiti satellite pritrditi.

*   `PositionError.TIMEOUT`: Vrnil, ko naprava ne more pridobiti položaju v določenem času v `timeout` v `geolocationOptions` . Pri uporabi z `geolocation.watchPosition` , ta napaka lahko večkrat prenesejo na `geolocationError` povratni klic vsak `timeout` milisekund.