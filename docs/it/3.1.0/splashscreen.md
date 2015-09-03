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


# Splashscreen

> Visualizza e nasconde la schermata iniziale dell'applicazione.

## Metodi

*   splashscreen
*   splashscreen.Hide

## La funzionalità di accesso

A partire dalla versione 3.0, Cordova implementa le API a livello di dispositivo come *plugin*. Utilizzare la CLI `plugin` comando, descritto in Command-Line Interface, aggiungere o rimuovere questa funzionalità per un progetto:

        $ cordova plugin add org.apache.cordova.splashscreen
        $ cordova plugin ls
        [ 'org.apache.cordova.splashscreen' ]
        $ cordova plugin rm org.apache.cordova.splashscreen
    

Questi comandi si applicano a tutte le piattaforme mirate, ma modificano le impostazioni di configurazione specifiche della piattaforma descritte di seguito:

*   Android (in`app/res/xml/config.xml`)
    
        <feature name="SplashScreen">
            <param name="android-package" value="org.apache.cordova.SplashScreen" />
        </feature>
        

*   iOS (in`config.xml`)
    
        <feature name="SplashScreen">
            <param name="ios-package" value="CDVSplashScreen" />
        </feature>
        

Alcune piattaforme possono supportare questa funzionalità senza richiedere alcuna configurazione speciale. Vedere *Supporto piattaforma* nella sezione panoramica.

Per informazioni su come configurare queste immagini, vedere icone e schermate iniziali.


# splashscreen

Visualizza la schermata iniziale.

    navigator.splashscreen.show();
    

## Descrizione

Questo metodo visualizza la schermata iniziale dell'applicazione.

## Piattaforme supportate

*   Android
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    navigator.splashscreen.show();
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.show();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>


# splashscreen.Hide

Respingere la schermata iniziale.

    navigator.splashscreen.hide();
    

## Descrizione

Questo metodo è respinto la schermata iniziale dell'applicazione.

## Piattaforme supportate

*   Android
*   BlackBerry 10
*   iOS
*   Windows Phone 7 e 8
*   Windows 8

## Esempio rapido

    navigator.splashscreen.hide();
    

## Esempio completo

    <!DOCTYPE html>
    <html>
      <head>
        <title>Splashscreen Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            navigator.splashscreen.hide();
        }
    
        </script>
      </head>
      <body>
        <h1>Example</h1>
      </body>
    </html>
    

## iOS Quirk

Il `config.xml` di file `AutoHideSplashScreen` impostazione deve essere `false` . Per ritardare nascondendo la schermata iniziale per due secondi, aggiungere un timer ad esempio nel `deviceready` gestore di evento:

        setTimeout(function() {
            navigator.splashscreen.hide();
        }, 2000);
