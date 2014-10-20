* * *

licenza: licenza uno o più contratti di licenza di collaboratore per l'Apache Software Foundation (ASF). Vedere il file avviso distribuito con questo lavoro per ulteriori informazioni riguardanti la proprietà del copyright. L'ASF licenze questo file a voi con la licenza Apache, versione 2.0 (la "licenza"); non si può usare questo file se non in conformità con la licenza. You may obtain a copy of the License at

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

         < nome piattaforma = "ios" ><!-iOS 7.0 +--> <!-iPhone / iPod Touch--> < icona src="res/ios/icon-60.png" larghezza = "60" altezza = "60" / >< icona src = "res/ios/icon-60@2x.png" width = "120" height = "120" / ><!-iPad--> < icona src="res/ios/icon-76.png" larghezza = altezza "76" = "76" / >< icona src = larghezza "res/ios/icon-76@2x.png" = altezza "152" = "152" / ><!-iOS 6.1--> <!-Spotlight icona--> < icona src="res/ios/icon-40.png" larghezza = "40" altezza = "40" / >
                  < icona src = larghezza "res/ios/icon-40@2x.png" = "80" altezza = "80" / ><!-iPhone / iPod Touch--> < icona src="res/ios/icon.png" larghezza = "57" altezza = "57" / >< icona src = "res/ios/icon@2x.png" larghezza = altezza "114" = "114" / ><!-iPad--> < icona src="res/ios/icon-72.png" larghezza = altezza "72" = "72" / >< icona src = larghezza "res/ios/icon-72@2x.png" = "144" altezza = "144" / ><!-iPhone Spotlight e icona impostazioni--> < icona src="res/ios/icon-small.png" larghezza = "29" altezza = "29" />< icona src = larghezza "res/ios/icon-small@2x.png" = "58" altezza = "58" / ><!-iPad Spotlight e icona impostazioni--> < icona src="res/ios/icon-50.png" larghezza = "50" altezza = "50" / >< icona src = "res/ios/icon-50@2x.png" width = "100" altezza = "100" / >< / piattaforma >
    

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

Nel primo livello `config.xml` file (non quello di `platforms` ), aggiungere gli elementi di configurazione come quelli indicati qui.

# Configurazione di esempio

Si prega di notare che il valore dell'attributo "src" è relativo alla directory del progetto e non nella directory di www. È possibile denominare l'immagine sorgente quello che vuoi. Il nome interno nell'app sono determinati da Cordova.

    <platform name="android">
        <!-- you can use any density that exists in the Android project -->
        <splash src="res/screen/android/splash-land-hdpi.png" density="land-hdpi"/>
        <splash src="res/screen/android/splash-land-ldpi.png" density="land-ldpi"/>
        <splash src="res/screen/android/splash-land-mdpi.png" density="land-mdpi"/>
        <splash src="res/screen/android/splash-land-xhdpi.png" density="land-xhdpi"/>
    
        <splash src="res/screen/android/splash-port-hdpi.png" density="port-hdpi"/>
        <splash src="res/screen/android/splash-port-ldpi.png" density="port-ldpi"/>
        <splash src="res/screen/android/splash-port-mdpi.png" density="port-mdpi"/>
        <splash src="res/screen/android/splash-port-xhdpi.png" density="port-xhdpi"/>
    </platform>
    
    <platform name="ios">
        <!-- images are determined by width and height. Sono supportati i seguenti--> < schizzare src="res/screen/ios/Default~iphone.png" larghezza = "320" altezza = "480" / >< schizzare src="res/screen/ios/Default@2x~iphone.png" larghezza = "640" altezza = "960" / >< schizzare src="res/screen/ios/Default-Portrait~ipad.png" larghezza = "768" altezza = "1024" / >< schizzare src="res/screen/ios/Default-Portrait@2x~ipad.png" larghezza = "1536" altezza = "2048" / >< schizzare src="res/screen/ios/Default-Landscape~ipad.png" larghezza = "1024" altezza = "768" / >< schizzare src="res/screen/ios/Default-Landscape@2x~ipad.png" larghezza = "2048" altezza = "1536" / >< schizzare src="res/screen/ios/Default-568h@2x~iphone.png" larghezza = "640" height = "1136" / >< / piattaforma >< nome piattaforma = "wp8" ><!..--immagini sono determinate dalla larghezza e dall'altezza. The following are supported -->
        <splash src="res/screen/wp8/SplashScreenImage.jpg" width="768" height="1280"/>
    </platform>
    
    <platform name="windows8">
        <!-- images are determined by width and height. The following are supported -->
        <splash src="res/screen/windows8/splashscreen.png" width="620" height="300"/>
    </platform>
    
    <platform name="blackberry10">
        <!-- Add a rim:splash element for each resolution and locale you wish -->
        <!-- http://developer.blackberry.com/html5/documentation/rim_splash_element.html -->
        <rim:splash src="res/screen/windows8/splashscreen.png"/>
    </platform>
    
    
    <preference name="SplashScreenDelay" value="10000" />
    

# Piattaforme supportate

A partire da ora (Cordova 3.5.0 luglio 2014) le seguenti piattaforme supportano schermate iniziali.

    android
    ios
    wp8
    windows8
    blackberry10
    

# Splashscreen Plugin

Apache Cordova offre anche splash speciale schermo plugin che potrebbe essere utilizzato a livello di codice visualizzare e nascondere una schermata iniziale durante https://github.com/apache/cordova-plugin-splashscreen lancio applicazione