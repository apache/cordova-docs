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

# iOS konfiguracijo

V `config.xml` datoteko nadzira app's osnovne nastavitve, ki veljajo za vsako uporabo in CordovaWebView stopnje. Ta odsek podrobnosti nastavitve, ki veljajo le za iOS gradi. Glej config.xml datoteke za informacije na globalno konfiguracijo možnosti.

*   `EnableViewportScale`(program privzeto boolean, `false` ): nastavljena na `true` omogočiti pogledov meta tag onemogočiti ali omejiti obseg uporabnik luščenje, ki je privzeto omogočena.
    
        <preference name="EnableViewportScale" value="true"/>
        
    
    Mesto pogledov kot sledi v HTML, da onemogočite luščenje in fit vsebine prožno v klavnih spletni pogled:
    
        < meta ime = vsebnost "vidno polje" = "širina = naprava-širina, začetni obseg = 1, uporabniku prilagodljivo = ne" / >
        

*   `MediaPlaybackRequiresUserAction`(program privzeto boolean, `false` ): nastavljena na `true` preprečiti samodejno predvajanje s HTML5 video posnetke ali avdio je `autoplay` atribut ali prek JavaScript.
    
        <preference name="MediaPlaybackRequiresUserAction" value="true"/>
        

*   `AllowInlineMediaPlayback`(program privzeto boolean, `false` ): nastavite na `true` omogočiti predvajanje medijev HTML5 pojavljati *inline* znotraj postavitve zaslona, z uporabo kontrolnikov z brskalnikom, ki namesto native kontrole. Zakaj to obdelovati, dodajte na `webkit-playsinline` atribut vseh `<video>` elementov.
    
        <preference name="AllowInlineMediaPlayback" value="true"/>
        

*   `BackupWebStorage`(string, bodisi `none` , `local` , ali ne izpolniti obveznosti `cloud` ): nastavite na `cloud` za spletno shranjevanje podatkov backup preko iCloud. Lotiti se `local` pustiti le lokalne varnostne kopije prek iTunes sync. Nastavite na `none` prepreči spletno shranjevanje varnostnih kopij.
    
        <preference name="BackupWebStorage" value="local"/>
        

*   `TopActivityIndicator`(string, privzete nastavitve za `gray` ): nadzor videz majhne predenje ikono v vrstici stanja, ki označuje dejavnost pomemben procesorja. Veljavne vrednosti so `whiteLarge` , `white` , in`gray`.
    
        <preference name="TopActivityIndicator" value="white"/>
        

*   `KeyboardDisplayRequiresUserAction`(privzeto boolean, `true` ): nastavljena na `false` omogočiti tipkovnico se prikaže, ko kliče `focus()` v obliki vložkov.
    
        <preference name="KeyboardDisplayRequiresUserAction" value="false"/>
        

*   `SuppressesIncrementalRendering`(program privzeto boolean, `false` ): nastavljena na `true` čakati do vse vsebine je bila prejeta, preden to postane na zaslon.
    
        <preference name="SuppressesIncrementalRendering" value="true"/>
        

*   `GapBetweenPages`(float, privzete nastavitve za `` ): velikost vrzeli, točk, med stranmi.
    
        <preference name="GapBetweenPages" value="0"/>
        

*   `PageLength`(float, privzete nastavitve za `` ): velikost vsake strani, v točkah, v smeri, ki tečejo na straneh. Ko PaginationMode je od desne proti levi ali od leve proti desni, ta lastnost predstavlja širino vsake strani. Ko PaginationMode topToBottom ali bottomToTop, ta lastnost predstavlja višino vsake strani. Privzeta vrednost je 0, kar pomeni postavitev uporablja velikost pogledov za določitev dimenzije strani.
    
        <preference name="PageLength" value="0"/>
        

*   `PaginationBreakingMode`(string, privzete nastavitve za `page` ): veljavni vrednosti sta `page` in `column` .Način, v katerem pride do stolpca ali strani porušna. Ta lastnost določa, ali so nekatere CSS lastnosti glede prelom stolpca in strani počaščen ali prezrta. Ko je ta lastnost nastavljena na `column` , vsebnost spoštuje CSS lastnosti, povezane z prelom stolpca na mestu strani porušna.
    
        <preference name="PaginationBreakingMode" value="page"/>
        

*   `PaginationMode`(string, privzete nastavitve za `unpaginated` ): veljavne vrednosti so `unpaginated` , `leftToRight` , `topToBottom` , `bottomToTop` , in `rightToLeft` . Ta lastnost določa, ali je vsebino v pogledu spletne razbiti na strani, ki zapolnjujejo pogled en zaslon naenkrat, ali prikazane kot en drsečem pogled. Če nabor paginated obrazec, lastnost preklaplja paginated postavitev na vsebine, povzroča spletni pogled rabiti vrednosti PageLength in GapBetweenPages za relayout njegove vsebine.
    
        <preference name="PaginationMode" value="unpaginated"/>
        

*   `UIWebViewDecelerationSpeed`(string, privzete nastavitve za `normal` ): veljavne vrednosti so `normal` , `fast` . Ta lastnost nadzira pojemka hitrosti drsenja zagon. `normal`Privzeta hitrost za najbolj native apps, in `fast` je privzeto za Mobile Safari.
    
        <preference name="UIWebViewDecelerationSpeed" value="fast" />