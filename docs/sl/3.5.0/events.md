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


# Dogodki

> Cordova življenjski dogodki.

## Vrste dogodkov

*   deviceready
*   pause
*   resume
*   backbutton
*   menubutton
*   searchbutton
*   startcallbutton
*   endcallbutton
*   volumedownbutton
*   volumeupbutton

## Dogodki, doda [org.apache.cordova.battery-status][1]

 [1]: https://github.com/apache/cordova-plugin-battery-status/blob/master/doc/index.md

*   batterycritical
*   batterylow
*   batterystatus

## Dogodki, ki so dodane [org.apache.cordova.network informacije][2]

 [2]: https://github.com/apache/cordova-plugin-network-information/blob/master/doc/index.md

*   online
*   offline


# deviceready

V primeru požarov, ko Cordova je v celoti naložen.

    document.addEventListener("deviceready", yourCallbackFunction, false);
    

## Podrobnosti

Ta dogodek je bistvenega pomena za vsako uporabo. Kaže da osebe Cordova naprava API natovorjen in so pripravljeni za dostop.

Cordoba je sestavljena iz dveh baz zbornik: native in JavaScript. Medtem ko domorodno kodo obremenitve, prikaže sliko po meri. Vendar pa JavaScript naloži le nekoč DOM obremenitve. To pomeni, web app lahko potencialno klic Cordova JavaScript funkcije, preden postane na voljo ustrezno native kodo.

V `deviceready` primeru požarov, ko je pri polni obremenitvi Cordova. Enkrat dogodek požari, boste lahko varno klice v Cordova API. Aplikacije običajno pripisujejo dogodek poslušalca z `document.addEventListener` ko je dokument HTML DOM naložen.

V `deviceready` primeru obnaša nekoliko drugače od drugih. Rutina za vse registrirane po v `deviceready` dogodek požarov je svoj povratni klic funkcije takoj poklicati.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Tizen
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        // Now safe to use device APIs
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Device Ready Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Now safe to use device APIs
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# pause

V primeru požarov, ko aplikacija je dal v ozadju.

    document.addEventListener("pause", yourCallbackFunction, false);
    

## Podrobnosti

V `pause` primeru požarov, ko native platformo postavlja program v ozadju, ponavadi ko uporabnik preklopi v drugem programu.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("pause", onPause, false);
    
    function onPause() {
        // Handle the pause event
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Pause Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
        }
    
        // Handle the pause event
        //
        function onPause() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

V je `pause` trener, nobenih klicev Cordova API ali native plugins, ki gredo skozi Objective-C ne dela, skupaj z vse interaktivne klice, kot so opozorila ali `console.log()` . Samo obdelajo ko app preide na naslednjo vožnjo zanke.

IOS-poseben `resign` dogodek, ki je na voljo kot alternativa za `pause` , in zazna, ko uporabnik omogoči **na gumb za zaklepanje naprave z app teče v ospredju** . Če app (in naprave) omogočena večopravilnosti, to je seznanjena s kasnejšega `pause` dogodka, vendar le pod iOS 5. V veljavi, vse Zaklenjeno apps v iOS 5, ki imajo večopravilnosti omogočeno potiska v ozadju. Za apps še vedno teče zaklenjenem pod iOS 5, onesposobiti app je večopravilnosti z nastavitvijo [UIApplicationExitsOnSuspend][1] na `YES` . Pri odpiranju zaklenjen na iOS 4, ta nastavitev ni važno.

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# resume

V primeru požarov, ko aplikacija pridobi iz ozadja.

    document.addEventListener("resume", yourCallbackFunction, false);
    

## Podrobnosti

V `resume` primeru požarov, ko native platformo izpuli uporabo iz ozadja.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 in 8
*   Windows 8

## Quick primer

    document.addEventListener("resume", onResume, false);
    
    function onResume() {
        // Handle the resume event
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Resume Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("resume", onResume, false);
        }
    
        // Handle the resume event
        //
        function onResume() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
    

## iOS Quirks

Vse interaktivne funkcije, ki se imenuje iz a `pause` rutine izvršiti kasneje, ko app začne znova, kot signal za `resume` dogodek. Ti vključujejo opozorila, `console.log()` , in vse klice iz plugins ali Cordova API, ki gredo skozi Objective-C.

*   **aktivno** dogodek
    
    IOS-poseben `active` dogodek, ki je na voljo kot alternativa za `resume` , in zazna, ko uporabnik onesposobiti gumba za **zaklepanje** za odklepanje naprave z app teče v ospredju. Če app (in naprave) omogočena večopravilnosti, to je seznanjena s kasnejšega `resume` dogodka, vendar le pod iOS 5. V veljavi, vse Zaklenjeno apps v iOS 5, ki imajo večopravilnosti omogočeno potiska v ozadju. Za apps še vedno teče zaklenjenem pod iOS 5, onesposobiti app je večopravilnosti z nastavitvijo [UIApplicationExitsOnSuspend][1] na `YES` . Pri odpiranju zaklenjen na iOS 4, ta nastavitev ni važno.

*   **strnjen** dogodek
    
    Kadar je klican iz a `resume` rutine, interaktivnih funkcij, kot `alert()` morali zaviti v a `setTimeout()` klic s timeout vrednost nič ali pa visi app. Na primer:
    
        document.addEventListener("resume", onResume, false);
        function onResume() {
           setTimeout(function() {
                  // TODO: do your thing!
                }, 0);
        }
        

 [1]: http://developer.apple.com/library/ios/#documentation/general/Reference/InfoPlistKeyReference/Articles/iPhoneOSKeys.html


# backbutton

V primeru požarov, ko uporabnik pritisne gumb nazaj.

    document.addEventListener("backbutton", yourCallbackFunction, false);
    

## Podrobnosti

Če želite preglasiti privzeti gumb nazaj vedenje, Vpiši dogodek poslušalca za na `backbutton` dogodek, običajno s pozivom `document.addEventListener` Ko prejmete na `deviceready` dogodek. Več je treba poklicati drugo metodo preglasi gumb nazaj vedenje.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10
*   Windows Phone 7 in 8

## Quick primer

    document.addEventListener("backbutton", onBackKeyDown, false);
    
    function onBackKeyDown() {
        // Handle the back button
    }
    

## Celoten primer

    <!DOCTYPE html>
    <html>
      <head>
        <title>Back Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("backbutton", onBackKeyDown, false);
        }
    
        // Handle the back button
        //
        function onBackKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# menubutton

V primeru požarov, ko uporabnik pritisne gumb meni.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## Podrobnosti

Uporabi rutina preglasi privzeto obnašanje jedilnik popek.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Amazon ogenj OS
*   Android
*   BlackBerry 10

## Quick primer

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# searchbutton

V primeru požarov, ko uporabnik pritisne gumb Išči na Android.

    document.addEventListener("searchbutton", yourCallbackFunction, false);
    

## Podrobnosti

Če želite preglasiti privzeti način iskanja gumb na Android registrirate dogodek poslušalca za "searchbutton" dogodek.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   Android

## Quick primer

    document.addEventListener("searchbutton", onSearchKeyDown, false);
    
    function onSearchKeyDown() {
        // Handle the search button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Search Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("searchbutton", onSearchKeyDown, false);
        }
    
        // Handle the search button
        //
        function onSearchKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# startcallbutton

V primeru požarov, ko uporabnik pritisne gumb start klic.

    document.addEventListener("startcallbutton", yourCallbackFunction, false);
    

## Podrobnosti

Če želite preglasiti privzeti začetni klic vedenje lahko registrirate dogodek poslušalca za na `startcallbutton` dogodek.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   BlackBerry 10

## Quick primer

    document.addEventListener("startcallbutton", onStartCallKeyDown, false);
    
    function onStartCallKeyDown() {
        // Handle the start call button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Start Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("startcallbutton", onStartCallKeyDown, false);
        }
    
        // Handle the start call button
        //
        function onStartCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# endcallbutton

Tem primeru požarov, ko uporabnik pritisne gumb konec klica.

    document.addEventListener("endcallbutton", yourCallbackFunction, false);
    

## Podrobnosti

Dogodek preglasi privzeto obnašanje konec klica.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   BlackBerry 10

## Quick primer

    document.addEventListener("endcallbutton", onEndCallKeyDown, false);
    
    function onEndCallKeyDown() {
        // Handle the end call button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>End Call Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("endcallbutton", onEndCallKeyDown, false);
        }
    
        // Handle the end call button
        //
        function onEndCallKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumedownbutton

V primeru požarov, ko uporabnik pritisne gumb glasnosti.

    document.addEventListener("volumedownbutton", yourCallbackFunction, false);
    

## Podrobnosti

Če želite preglasiti privzeti glasnosti vedenje lahko registrirate dogodek poslušalca za na `volumedownbutton` dogodek.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   BlackBerry 10

## Quick primer

    document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
    
    function onVolumeDownKeyDown() {
        // Handle the volume down button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Down Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumedownbutton", onVolumeDownKeyDown, false);
        }
    
        // Handle the volume down button
        //
        function onVolumeDownKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>


# volumeupbutton

V primeru požarov, ko uporabnik pritisne glasnosti gumb.

    document.addEventListener("volumeupbutton", yourCallbackFunction, false);
    

## Podrobnosti

Če želite preglasiti privzeti glasnosti vedenje lahko registrirate dogodek poslušalca za na `volumeupbutton` dogodek.

Programi lahko običajno uporabljajo `document.addEventListener` priložiti dogodek poslušalca enkrat na `deviceready` dogodek požarov.

## Podprte platforme

*   BlackBerry 10

## Quick primer

    document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
    
    function onVolumeUpKeyDown() {
        // Handle the volume up button
    }
    

## Celoten primer

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Volume Up Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("volumeupbutton", onVolumeUpKeyDown, false);
        }
    
        // Handle the volume up button
        //
        function onVolumeUpKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>
