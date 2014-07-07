* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Icone e Splash screen

In questa sezione viene illustrato come configurare un'app icona e schermata iniziale opzionale per varie piattaforme, sia quando si lavora in Cordova CLI (descritto in The Command-Line Interface) o utilizzando strumenti SDK specifici di piattaforma (dettagliati nelle guide piattaforma).

## Configurazione di icone nella CLI

Quando funziona il CLI si può definire icone di app tramite `<icon>` elemento ( `config.xml` ). Se non si specifica un'icona viene utilizzato il logo Apache Cordova.

        <icon src="res/ios/icon.png" platform="ios" width="57" height="57" density="mdpi" />
    

src: (obbligatorio) specifica il percorso del file immagine, relativo alla directory del progetto

piattaforma: la piattaforma di destinazione (facoltativo)

larghezza: larghezza di icona (opzionale) in pixel

altezza: altezza (opzionale) icona in pixel

densità: androide (opzionale) specifica, specifica icona densità

Possibile utilizzare la configurazione seguente per definire l'icona di default unico che sarà utilizzato per tutte le piattaforme.

        <icon src="res/icon.png" />
    

Per ogni piattaforma è inoltre possibile definire un icone pixel-perfect set per adattarsi a diverse risoluzioni dello schermo.

Amazon fuoco OS

         <platform name="amazon-fireos">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Android

         <platform name="android">
                  <icon src="res/android/ldpi.png" density="ldpi" />
                  <icon src="res/android/mdpi.png" density="mdpi" />
                  <icon src="res/android/hdpi.png" density="hdpi" />
                  <icon src="res/android/xhdpi.png" density="xhdpi" />
         </platform>
    

Blackberry10

         <platform name="blackberry10">
                  <icon src="res/bb10/icon-86.png" />
                  <icon src="res/bb10/icon-150.png" />
         </platform>
    

Vedere la documentazione di BlackBerry per il targeting più dimensioni e impostazioni internazionali. [http://developer.blackberry.com/html5/documentation/icon_element.html]

Firefox OS

         <platform name="firefoxos">
                  <icon src="res/ff/logo.png" width="60" height="60" />
         </platform>
    

iOS

         <platform name="ios">
                  <!-- iOS 7.0+ -->
                  <!-- iPhone / iPod Touch  -->
                  <icon src="res/ios/icon-60.png" width="60" height="60" />
                  <icon src="res/ios/icon-60@2x.png" width="120" height="120" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-76.png" width="76" height="76" />
                  <icon src="res/ios/icon-76@2x.png" width="152" height="152" />
                  <!-- iOS 6.1 -->
                  <!-- Spotlight Icon -->
                  <icon src="res/ios/icon-40.png" width="40" height="40" />
                  <icon src="res/ios/icon-40@2x.png" width="80" height="80" />
                  <!-- iPhone / iPod Touch -->
                  <icon src="res/ios/icon.png" width="57" height="57" />
                  <icon src="res/ios/icon@2x.png" width="114" height="114" />
                  <!-- iPad -->
                  <icon src="res/ios/icon-72.png" width="72" height="72" />
                  <icon src="res/ios/icon-72@2x.png" width="144" height="144" />
                  <!-- iPhone Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-small.png" width="29" height="29" />
                  <icon src="res/ios/icon-small@2x.png" width="58" height="58" />
                  <!-- iPad Spotlight and Settings Icon -->
                  <icon src="res/ios/icon-50.png" width="50" height="50" />
                  <icon src="res/ios/icon-50@2x.png" width="100" height="100" />
         </platform>
    

Tizen

         <platform name="tizen">
                  <icon src="res/tizen/icon-128.png" width="128" height="128" />
         </platform>
    

Windows Phone8

         <platform name="wp8">
                  <icon src="res/wp/ApplicationIcon.png" width="99" height="99" />
                  <!-- tile image -->
                  <icon src="res/wp/Background.png" width="159" height="159" />
         </platform>
    

Windows8

         <platform name="windows8">
                  <icon src="res/windows8/logo.png" width="150" height="150" />
                  <icon src="res/windows8/smalllogo.png" width="30" height="30" />
                  <icon src="res/windows8/storelogo.png" width="50" height="50" />
         </platform>
    

## Configurazione schermate iniziali in CLI

Utilizzare l'API di Splashscreen per abilitare la visualizzazione della schermata introduttiva di un'app su molte piattaforme. Quando si lavora nella CLI, file di origine di splash screen si trovano all'interno del progetto `www/res/screens` sottodirectory.

Android specifica sia ritratto e paesaggio-oriented splash immagini dello schermo di basse, medie, alte e altissima risoluzione:

        android/screen-hdpi-landscape.png
        android/screen-hdpi-portrait.png
        android/screen-ldpi-landscape.png
        android/screen-ldpi-portrait.png
        android/screen-mdpi-landscape.png
        android/screen-mdpi-portrait.png
        android/screen-xhdpi-landscape.png
        android/screen-xhdpi-portrait.png
    

La piattaforma iOS specifica varianti per iPhone/iPod e iPad, con varianti per retina display e diversi orientamenti. Il file *568 h* vale per l'iPhone 5 schermo più alto:

        ios/screen-ipad-landscape-2x.png
        ios/screen-ipad-landscape.png
        ios/screen-ipad-portrait-2x.png
        ios/screen-ipad-portrait.png
        ios/screen-iphone-landscape-2x.png
        ios/screen-iphone-landscape.png
        ios/screen-iphone-portrait-2x.png
        ios/screen-iphone-portrait.png
        ios/screen-iphone-portrait-568h-2x.png
    

Windows Phone specifica una singola immagine:

        windows-phone/screen-portrait.jpg
    

Le seguenti sezioni dettaglio come impostare schermate iniziali quando lavoro con SDK e gli strumenti della riga di comando correlati descritti nelle guide di piattaforma.

Non dimenticare di installare il plugin SplashScreen prima di provare ad utilizzare la `navigator.splashscreen.hide()` o `navigator.splashscreen.show()` metodi.

## Schermate iniziali per la piattaforma Android

Inserire i file [immagine 9-patch][1] del progetto Android `platforms/android/res/drawable*` directory.

 [1]: https://developer.android.com/tools/help/draw9patch.html

Dovrebbe essere la dimensione per ciascuno:

*   XLarge (xhdpi): almeno 960 × 720
*   grande (hdpi): almeno 640 × 480
*   medio (mdpi): almeno 470 × 320
*   piccolo (ldpi): almeno 426 × 320

Quando si crea un nuovo progetto di Android, la schermata iniziale predefinita immagini fornite nel Cordova campione app dovrebbe essere già presente nel `platforms/android/res/drawable*` directory. Sentitevi liberi di sostituire questi con le tue immagini. Quando fornendo il proprio splash immagini dello schermo, non è necessario fornire la stessa permutazione di 8 come Cordova quelli di default qui. Più o meno ottimizzazione può essere utilizzato. Il `drawable` i nomi di directory devono seguire le convenzioni di Android per supportare [formati di schermo][2] e [risorse alternative][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

Nel primo livello `config.xml` file (non quello di `platforms` ), aggiungere le seguenti preferenze:

    <preference name="SplashScreen" value="screen" />
    <preference name="SplashScreenDelay" value="10000" />
    

La prima riga imposta l'immagine da visualizzare come schermata iniziale. Questo è il nome del file dei png nella `drawable*` directory, meno il `.png` estensione. Il valore predefinito di SplashScreen è `screen` (per il file `platforms/android/res/drawable*/screen.png` ), così se è il nome dell'immagine niente altro che `screen.png` nel `drawable*` directory, è necessario aggiungere/modificare questa riga.

La seconda riga imposta il ritardo predefinito di quanto tempo lo splashscreen appare in millisecondi. Questo dovrebbe essere il tempo peggiore inizio previsto. Il valore predefinito per SplashScreenDelay è 3000 ms.

Infine, come best practice, la schermata iniziale dovrebbe essere presente solo tempo necessario. Quando ha iniziato l'app e webview ha caricato, l'app deve nascondere la schermata iniziale affinché il vostro punto di vista principale è visibile, non appena è pronto. Perché il tempo di avvio di app variano un po a causa di una serie di fattori quali la velocità della CPU e della rete, è consigliabile che l'app richiama esplicitamente `navigator.splashscreen.hide()` nel metodo JavaScript che risponde alla `deviceready` evento. Altrimenti la schermata iniziale sarà visibile per il valore di SplashScreenDelay che configurato in precedenza, che è probabilmente più del necessario. Questo approccio basato sugli eventi è altamente raccomandato contro avendo la schermata visibile per sempre una durata fissa.

## Schermate iniziali per la piattaforma iOS

Copiare immagini di splash screen del progetto iOS `Resources/splash` directory. Aggiungere solo quelle immagini per i dispositivi che si desidera supportare, come iPad o iPhone. La dimensione di ogni immagine dovrebbe essere:

*   Default-568h@2x~iphone.png (640x1136 pixels)
*   Default-Landscape@2x~ipad.png (1496 x 2048 pixel)
*   Default-Landscape~ipad.png (1024x748 pixels)
*   Default-Portrait@2x~ipad.png (1536x2008 pixels)
*   Default-Portrait~ipad.png (768x1004 pixels)
*   Default@2x~iphone.png (640x960 pixels)
*   Default~iphone.png (320x480 pixels)

## Schermate iniziali per la piattaforma BlackBerry 10

Aggiungere un elemento di rim: spruzzata di config. xml per ogni risoluzione e le impostazioni internazionali che desiderano sostenere:

[http://Developer.BlackBerry.com/HTML5/Documentation/rim\_splash\_element.html][4]

 [4]: http://developer.blackberry.com/html5/documentation/rim_splash_element.html