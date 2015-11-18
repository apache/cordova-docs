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

title: Wtyczek Android
---

# Wtyczek Android

Ta sekcja zawiera szczegóły dotyczące sposobu realizacji kodu macierzystego plugin na platformie Android. Przed przeczytaniem, zobacz zastosowanie pluginów omówienie struktury wtyczki i jego wspólny interfejs JavaScript. W tej sekcji w dalszym ciągu wykazują wtyczce *echo* próbki, który komunikuje się z widoku sieci Web Cordova do macierzystego platformy i z powrotem. Dla innej próbki Zobacz też komentarze w [CordovaPlugin.java][1].

 [1]: https://github.com/apache/cordova-android/blob/master/framework/src/org/apache/cordova/CordovaPlugin.java

Android wtyczki są oparte na Cordova-Android, który składa się z Android WebView z hakami do niej przywiązani. Wtyczki są reprezentowane jako Klasa mapowania w `config.xml` pliku. Plugin składa się z co najmniej jednej klasy Java, która rozszerza `CordovaPlugin` klasy, zastępując jeden z jego `execute` metody. Jako najlepsze praktyki, plugin powinien również obsługiwać `[pause](../../../cordova/events/events.pause.html)` i `[resume](../../../cordova/events/events.resume.html)` wydarzenia, wraz z wiadomości przechodzi między wtyczek. Wtyczki z długim żądania, aktywność tło głoska bezdźwięczna playback, słuchaczy lub stan wewnętrzny należy implementować `onReset()` Metoda, jak również. Gdy wykonuje `WebView` przechodzi do nowej strony lub odświeża, który ładuje JavaScript.

## Mapowanie plugin Klasa

Plugin JavaScript interfejs używa `cordova.exec` Metoda w następujący sposób:

        exec (< successFunction >, < failFunction >, < usługi >, < działania >, < argumenty >);
    

To marszałków wniosek z widoku sieci Web w stronę rodzimych Android, skutecznie wywołanie `action` Metoda `service` klasy, z dodatkowe argumenty przekazywane w `args` tablicy.

Czy można rozpowszechniać plugin jako Java plik lub pliki *jar* własnych, plugin musi być określona w aplikacji Cordova Android `res/xml/config.xml` pliku. Zobacz wtyczki aplikacji aby uzyskać więcej informacji na temat korzystania `plugin.xml` plik, aby wprowadzić to `feature` elementu:

        <feature name="<service_name>">
            <param name="android-package" value="<full_name_including_namespace>" />
        </feature>
    

Nazwa usługa odpowiada zastosowany w JavaScript `exec` zadzwonić. Wartość jest identyfikatorem pełni kwalifikowana obszaru nazw klasy Java. W przeciwnym razie plugin może skompilować ale nadal być niedostępny do Cordova.

## Plugin inicjowania i życia

Jedno wystąpienie obiekt plugin jest tworzony dla życia każdego `WebView` . Wtyczki nie są inicjalizowane aż po raz pierwszy są wywoływane przez wywołanie z JavaScript, chyba `<param>` z `onload` `name` atrybut jest zestaw `"true"` w `config.xml` . Np.:

    <feature name="Echo">
        <param name="android-package" value="<full_name_including_namespace>" />
        <param name="onload" value="true" />
    </feature>
    

Należy używać wtyczki `initialize` Metoda ich uruchamiania logiki.

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
        // your init code here
    }
    

## Pismo wtyczka Android Java

Połączenie JavaScript odpala plugin wniosek na stronie macierzysty, i odpowiednie wtyczki Java jest mapowane odpowiednio w `config.xml` pliku, ale jak końcowy wygląda klasy Android wtyczki Java? Co jest wysyłane do wtyczki z JavaScript `exec` funkcja jest przekazywana do wtyczki klasy `execute` Metoda. Większość `execute` implementacje wyglądać tak:

        @Override logiczna publicznych wykonać (ciąg działań, JSONArray argumenty, CallbackContext callbackContext) rzuca JSONException {jeśli ("beep".equals(action)) {this.beep(args.getLong(0));
                callbackContext.success();
                zwraca wartość PRAWDA;
            } Powrót fałszywy;  Powrót false wyniki w błąd "MethodNotFound".
        }
    

JavaScript `exec` funkcji `action` parametr odpowiada Metoda prywatnych klasy do wysyłki z parametrów opcjonalnych.

Kiedy łowienie wyjątki i powrocie błędy, to ważne ze względu na jasność, że błędy powrócił do nazwy wyjątek JavaScript meczu Java jak najwięcej.

## Wątki

Plugin JavaScript czy *nie* uruchomić w głównym wątku z `WebView` interfejs, zamiast, działa `WebCore` wątek, jak `execute` Metoda. Jeśli ty potrzebować wobec wchodzić w interakcje z interfejsu użytkownika, należy użyć następujących zmian:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getActivity().runOnUiThread(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

Użycie następujących, jeśli nie musisz uruchomić na interfejsie głównym w wątku, ale nie chcesz blokować `WebCore` wątku, albo:

        @Override
        public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
            if ("beep".equals(action)) {
                final long duration = args.getLong(0);
                cordova.getThreadPool().execute(new Runnable() {
                    public void run() {
                        ...
                        callbackContext.success(); // Thread-safe.
                    }
                });
                return true;
            }
            return false;
        }
    

## Przykład wtyczki Echo

Do interfejsu JavaScript *echa* funkcji opisanych w aplikacji wtyczek, użyj `plugin.xml` Aby wprowadzić `feature` specyfikacji do lokalnej platformie `config.xml` pliku:

        <platform name="android">
            <config-file target="config.xml" parent="/*">
                <feature name="Echo">
                    <param name="android-package" value="org.apache.cordova.plugin.Echo"/>
                </feature>
            </config-file>
        </platform>
    

Następnie dodać następujące czynności, aby `src/org/apache/cordova/plugin/Echo.java` plik:

        package org.apache.cordova.plugin;
    
        import org.apache.cordova.CordovaPlugin;
        import org.apache.cordova.CallbackContext;
    
        import org.json.JSONArray;
        import org.json.JSONException;
        import org.json.JSONObject;
    
        /**
         * This class echoes a string called from JavaScript.
         */
        public class Echo extends CordovaPlugin {
    
            @Override
            public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
                if (action.equals("echo")) {
                    String message = args.getString(0);
                    this.echo(message, callbackContext);
                    return true;
                }
                return false;
            }
    
            private void echo(String message, CallbackContext callbackContext) {
                if (message != null && message.length() > 0) {
                    callbackContext.success(message);
                } else {
                    callbackContext.error("Expected one non-empty string argument.");
                }
            }
        }
    

Potrzeby przywozu w górnej części pliku rozszerza klasę z `CordovaPlugin` , którego `execute()` Metoda zastępuje on otrzymywać wiadomości od `exec()` . `execute()`Metoda najpierw sprawdza wartość `action` , dla których w tym przypadku obowiązuje tylko jeden `echo` wartość. Inne zwroty akcji `false` i wyniki w `INVALID_ACTION` błąd, co przekłada się na błąd wywołania zwrotnego wywoływana po stronie JavaScript.

Następnie metoda pobiera ciąg echa za pomocą `args` obiektu `getString` Metoda, określając pierwszy parametr przekazany do Metoda. Po wartość jest przekazywana do prywatnego `echo` Metoda, to parametr sprawdzane, aby upewnić się, że to nie jest `null` lub pusty ciąg, w którym to przypadku `callbackContext.error()` wywołuje JavaScript błąd wywołania zwrotnego. Jeśli różnych kontroli przejść, `callbackContext.success()` przechodzi oryginał `message` ciąg do zwrotnego JavaScript na sukces jako parametr.

## Android integracji

Android funkcje `Intent` system, który pozwala komunikować się ze sobą. Wtyczki mają dostęp do `CordovaInterface` obiekt, który można uzyskać dostęp do Android `Activity` który uruchamia aplikację. To jest `Context` wymagane do uruchomienia nowych Android `Intent` . `CordovaInterface`Pozwala wtyczki rozpocząć `Activity` na wynik i ustawić zwrotnego plugin gdy `Intent` zwraca do aplikacji.

Od Cordova 2.0, już bezpośrednio dostęp wtyczek `Context` i dziedzictwo `ctx` Państwa jest niezalecane. Wszystkie `ctx` istnieją metody na `Context` , więc zarówno `getContext()` i `getActivity()` można zwrócić żądany obiekt.

## Debugowania Android wtyczek

Zaćmienie pozwala na debugowanie wtyczki Java Źródło zawarte w projekcie. Tylko najnowsza wersja Android Developer Tools pozwala dołączyć kod źródłowy do *JAR* zależnościami, więc ta funkcja nie jest jeszcze w pełni obsługiwane.