---

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Icone e Splash screen

In questa sezione viene illustrato come configurare un'app icona e schermata iniziale opzionale per varie piattaforme, sia quando si lavora in Cordova CLI (descritto in The Command-Line Interface) o utilizzando strumenti SDK specifici di piattaforma (dettagliati nelle guide piattaforma).

## Configurazione di icone nella CLI

Quando si lavora nella CLI, icona di file di origine si trovano all'interno di varie sottodirectory specifiche della piattaforma nell'ambito del progetto `www/res/icons` directory. Appena creati progetti nascono con un insieme predefinito di Cordova icone consente di sostituire per le piattaforme che si desidera fare riferimento.

Android specifica icone di basse, medie, alte e altissima risoluzione:

        android/icon-36-ldpi.png
        android/icon-48-mdpi.png
        android/icon-72-hdpi.png
        android/icon-96-xhdpi.png
    

La piattaforma iOS specifica icone 72-pixel quadrati per iPad e 57-pixel icone per iPhone e iPod, con alta risoluzione *x 2* varianti per retina vengono visualizzati:

        ios/icon-57-2x.png
        ios/icon-57.png
        ios/icon-72-2x.png
        ios/icon-72.png
    

Windows Phone specifica un'icona predefinita di 48 pixel, insieme a sfondo vari dispositivi affiancamento immagini utilizzate quando che rappresentano le applicazioni:

        windows-phone/icon-48.png
        windows-phone/icon-62-tile.png
        windows-phone/icon-173-tile.png
    

BlackBerry 10 richiede un elemento icona nel file config. xml:

        <icon src="blackberry10/icon-86.png" />
    

Vedere la documentazione di BlackBerry per tareting più dimensioni e impostazioni internazionali.

[http://developer.blackberry.com/html5/documentation/icon_element.html]

Tizen richiede un'icona di 128 pixel:

        tizen/icon-128.png
    

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

Se si desidera utilizzare le immagini di schermo splash predefinito fornite in Cordova, è necessario copiare i file png da `platforms/android/www/res/screen/android` a `platforms/android/res/drawable*/` :

    cd platforms/android/res
    mkdir drawable-port-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-portrait.png drawable-port-ldpi/screen.png
    mkdir drawable-land-ldpi
    cp -p ../assets/www/res/screen/android/screen-ldpi-landscape.png drawable-land-ldpi/screen.png
    mkdir drawable-port-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-portrait.png drawable-port-mdpi/screen.png
    mkdir drawable-land-mdpi
    cp -p ../assets/www/res/screen/android/screen-mdpi-landscape.png drawable-land-mdpi/screen.png
    mkdir drawable-port-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-portrait.png drawable-port-hdpi/screen.png
    mkdir drawable-land-hdpi
    cp -p ../assets/www/res/screen/android/screen-hdpi-landscape.png drawable-land-hdpi/screen.png
    mkdir drawable-port-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-portrait.png drawable-port-xhdpi/screen.png
    mkdir drawable-land-xhdpi
    cp -p ../assets/www/res/screen/android/screen-xhdpi-landscape.png drawable-land-xhdpi/screen.png
    

Il `drawable` i nomi di directory devono seguire le convenzioni di Android per supportare [formati di schermo][2] e [risorse alternative][3].

 [2]: http://developer.android.com/guide/practices/screens_support.html
 [3]: http://developer.android.com/guide/topics/resources/providing-resources.html#AlternativeResources

In `config.xml` , aggiungere le seguenti preferenze:

    <preference name="SplashScreen" value="splash" />
    <preference name="SplashScreenDelay" value="10000" />
    

La prima riga imposta l'immagine da visualizzare come schermata iniziale. Questo è il nome del file dei png nella `drawable*` directory. Se è il nome dell'immagine niente altro che `splash.png` , è necessario modificare questa linea. Non includere l'estensione del file (cioè, `.png` ). Se si desidera utilizzare le schermate iniziali predefinito fornite in Cordova come elencato sopra, utilizzare il valore`screen`.

La seconda riga imposta il ritardo predefinito di quanto tempo lo splashscreen appare in millisecondi. Questo dovrebbe essere il tempo massimo previsto inizio. Il valore predefinito per SplashScreenDelay è 3000 ms.

Infine, la schermata iniziale dovrebbe essere presente solo tempo necessario. Quando ha iniziato l'app e webview ha caricato, l'app deve nascondere la schermata iniziale affinché il vostro punto di vista principale è visibile. Perché il tempo di avvio di app variano un po a causa di una serie di fattori, si raccomanda che l'app richiama esplicitamente `navigator.splashscreen.hide()` nel metodo Javascript che risponde alla `deviceready` evento. Altrimenti la schermata iniziale sarà visibile per il valore di SplashScreenDelay che configurato in precedenza. Questo approccio basato sugli eventi è altamente raccomandato contro avendo la schermata visibile per sempre una durata fissa.

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