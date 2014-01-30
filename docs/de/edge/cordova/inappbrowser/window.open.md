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

# window.open

Öffnet eine URL in einem neuen `InAppBrowser` Instanz, die aktuelle Browserinstanz oder der Systembrowser.

    var ref = window.open(url, target, options);
    

*   **Ref**: Bezugnahme auf die `InAppBrowser` Fenster. *(InAppBrowser)*

*   **URL**: die URL *(String)*zu laden. Rufen Sie `encodeURI()` auf diese Option, wenn die URL enthält Unicode-Zeichen.

*   **Ziel**: das Ziel in der URL, einen optionalen Parameter geladen, die standardmäßig auf `_self` . *(String)*
    
    *   `_self`: Öffnet sich in der Cordova WebView wenn der URL in der Whitelist ist, andernfalls es öffnet sich in der`InAppBrowser`.
    *   `_blank`: Öffnet den`InAppBrowser`.
    *   `_system`: Öffnet in den System-Web-Browser.

*   **Optionen**: Optionen für die `InAppBrowser` . Optional, säumige an: `location=yes` . *(String)*
    
    Die `options` Zeichenfolge muss keine Leerstelle enthalten, und jede Funktion Name/Wert-Paare müssen durch ein Komma getrennt werden. Featurenamen Groß-/Kleinschreibung. Alle Plattformen unterstützen die anderen Werte:
    
    *   **Lage**: Legen Sie auf `yes` oder `no` , machen die `InAppBrowser` der Adressleiste ein- oder ausschalten.
    
    Nur Android:
    
    *   **Closebuttoncaption**: Legen Sie auf eine Zeichenfolge als Beschriftung der **fertig** -Schaltfläche verwenden.
    *   **versteckte**: Legen Sie auf `yes` um den Browser zu erstellen und laden Sie die Seite, aber nicht zeigen. Das Load-Ereignis wird ausgelöst, wenn der Ladevorgang abgeschlossen ist. Weglassen oder auf `no` (Standard), den Browser öffnen und laden normalerweise zu haben. 
    *   **ClearCache**: Legen Sie auf `yes` , der Browser ist Cookiecache gelöscht, bevor das neue Fenster geöffnet wird
    *   **Clearsessioncache**: Legen Sie auf `yes` , der Sitzungs-Cookie Cache gelöscht, bevor das neue Fenster geöffnet wird
    
    iOS nur:
    
    *   **Closebuttoncaption**: Legen Sie auf eine Zeichenfolge als Beschriftung der **fertig** -Schaltfläche verwenden. Beachten Sie, dass Sie diesen Wert selbst zu lokalisieren müssen.
    *   **versteckte**: Legen Sie auf `yes` um den Browser zu erstellen und laden Sie die Seite, aber nicht zeigen. Das Load-Ereignis wird ausgelöst, wenn der Ladevorgang abgeschlossen ist. Weglassen oder auf `no` (Standard), den Browser öffnen und laden normalerweise zu haben. 
    *   **Symbolleiste**: Legen Sie auf `yes` oder `no` Aktivieren Sie die Symbolleiste ein- oder Ausschalten für InAppBrowser (Standard:`yes`)
    *   **EnableViewportScale**: Legen Sie auf `yes` oder `no` , Viewport Skalierung durch ein Meta-Tag (standardmäßig zu verhindern`no`).
    *   **MediaPlaybackRequiresUserAction**: Legen Sie auf `yes` oder `no` , HTML5 audio oder video von automatisches Abspielen (standardmäßig zu verhindern`no`).
    *   **AllowInlineMediaPlayback**: Legen Sie auf `yes` oder `no` Inline-HTML5-Medienwiedergabe im Browserfenster anstatt eine gerätespezifische Wiedergabe-Schnittstelle ermöglichen. Des HTML `video` Element muss auch die `webkit-playsinline` Attribut (Standard:`no`)
    *   **KeyboardDisplayRequiresUserAction**: Legen Sie auf `yes` oder `no` , die Tastatur zu öffnen, wenn Formularelemente Fokus per JavaScript erhalten `focus()` Anruf (Standard:`yes`).
    *   **SuppressesIncrementalRendering**: Legen Sie auf `yes` oder `no` zu warten, bis alle neuen Fensterinhalt empfangen wird, bevor Sie wiedergegeben wird (standardmäßig`no`).
    *   **Presentationstyle**: Legen Sie auf `pagesheet` , `formsheet` oder `fullscreen` [Präsentationsstil][1] (standardmäßig fest`fullscreen`).
    *   **Transitionstyle**: Legen Sie auf `fliphorizontal` , `crossdissolve` oder `coververtical` [Übergangsstil][2] (standardmäßig fest`coververtical`).

 [1]: http://developer.apple.com/library/ios/documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalPresentationStyle
 [2]: http://developer.apple.com/library/ios/#documentation/UIKit/Reference/UIViewController_Class/Reference/Reference.html#//apple_ref/occ/instp/UIViewController/modalTransitionStyle

## Unterstützte Plattformen

*   Android
*   BlackBerry
*   iOS
*   Windows Phone 7 und 8

## Kleines Beispiel

    var ref = window.open('http://apache.org', '_blank', 'location=yes');
    var ref2 = window.open(encodeURI('http://ja.m.wikipedia.org/wiki/ハングル'), '_blank', 'location=yes');
    

## Vollständiges Beispiel

    <!DOCTYPE html>
    <html>
      <head>
        <title>window.open Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);
    
        // device APIs are available
        //
        function onDeviceReady() {
            // external url
            var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
            // relative document
            ref = window.open('next.html', '_self');
        }
    
        </script>
      </head>
      <body>
      </body>
    </html>