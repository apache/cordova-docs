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

title: Jeżyna 10 wtyczek
---

# Jeżyna 10 wtyczek

Ta sekcja zawiera szczegóły dotyczące sposobu realizacji kodu macierzystego plugin na platformy BlackBerry 10. Przed przeczytaniem, zobacz zastosowanie pluginów omówienie struktury wtyczki i jego wspólny interfejs JavaScript. W tej sekcji w dalszym ciągu wykazują wtyczce *echo* próbki, który komunikuje się z widoku sieci Web Cordova do macierzystego platformy i z powrotem.

Echo plugin w zasadzie zwraca cokolwiek `window.echo` funkcja wysyła z JavaScript:

        window.echo = function(str, callback) {
            cordova.exec(callback, function(err) {
                callback('Nothing to echo.');
            }, "Echo", "echo", [str]);
        };
    

Cordova plugin dla BlackBerry 10 zawiera zarówno JavaScript i kodu macierzystego, które komunikują się ze sobą w ramach świadczonych przez JNEXT. Każdy plugin musi również zawierać `plugin.xml` pliku.

## Tworzenie macierzysta Klasa

Aby utworzyć rodzimych część wtyczki, otwórz BlackBerry 10 NDK IDE i wybierz **plik → nowy → BlackBerry projektu → → rozszerzeń natywnych BlackBerry 10**. Wprowadź żądany projekt nazwę i lokalizację, a następnie naciśnij przycisk **Zakończ**.

Projekt stworzony przez IDE zawiera przykładowy kod pluginu pamięci. Może zastąpić lub zmodyfikować te pliki do realizacji własnej funkcji:

*   `*name*_js.hpp`: Nagłówek C++ kod JNEXT.

*   `*name*_js.cpp`: Kod C++ dla JNEXT.

Macierzysty interfejs rozszerzenia JNEXT mogą być przeglądane w pliku nagłówka plugin, znajduje się w katalogu publicznego projektu. Ono także rysy twarzy, stałe i funkcje narzędzia dostępne z kodem macierzystym. Wtyczki muszą być uzyskane z `JSExt` , który jest zdefiniowany w `plugin.h` . Oznacza to, że należy zaimplementować następujące klasy:

        class JSExt
        {
        public:
            virtual ~JSExt() {};
            virtual string InvokeMethod( const string& strCommand ) = 0;
            virtual bool CanDelete( void ) = 0;
        private:
            std::string m_id;
        };
    

Rozszerzenie powinno obejmować `plugin.h` pliku nagłówka. W `Echo` przykład, możesz użyć `JSExt` w następujący sposób w `echo_js.hpp` pliku:

        #include "../public/plugin.h"
        #include <string>
    
        #ifndef ECHO_JS_H_
        #define ECHO_JS_H_
    
        class Echo : public JSExt
        {
        public:
            explicit Echo(const std::string& id);
            virtual ~Echo();
            virtual std::string InvokeMethod(const std::string& command);
            virtual bool CanDelete();
        private:
            std::string m_id;
        };
    
        #endif // ECHO_JS_H_
    

`m_id`Zawiera atrybut `JNEXT` identyfikator obiektu, który jest przekazywana jako argument do konstruktora klasy. To jest potrzebne na stronie macierzystego do wyzwalacza zdarzeń na stronie JavaScript. `CanDelete`Metoda określa, czy można usunąć obiektu macierzystego. `InvokeMethod`Funkcja jest wywoływana w rezultacie z wniosku z JavaScript do wywoływania metody tego konkretnego obiektu. Jedyny argument tej funkcji jest ciąg przekazany z JavaScript, który analizuje ten metoda do ustalenia, które z metod obiektu macierzystego należy wykonać. Metody te są realizowane w `echo_js.cpp` . Tutaj jest `InvokeMethod` funkcja dla `Echo` przykład:

        string Echo::InvokeMethod(const string& command) {
    
            //parse command and args from string
            int index = command.find_first_of(" ");
            string strCommand = command.substr(0, index);
            string strValue = command.substr(index + 1, command.length());
    
            // Determine which function should be executed
            if (strCommand == "echo") {
                return strValue;
            } else {
                return "Unsupported Method";
            }
        }
    

Plugin macierzysty musi też implementować następujących funkcji wywołania zwrotnego:

*   `extern char* onGetObjList( void );`

*   `extern JSExt* onCreateObject( const string& strClassName, const string& strObjId );`

`onGetObjList`, Funkcja zwraca rozdzielana przecinkami lista klas obsługiwane przez JNEXT. Tej funkcji używa się w JNEXT aby określić zestaw klas, które można utworzyć wystąpienia JNEXT. `Echo`Plugin implementuje następujące `echo_js.cpp` :

        char* onGetObjList() {
            static char name[] = "Echo";
            return name;
        }
    

`onCreateObject`Funkcja przyjmuje dwa parametry. Pierwszym z nich jest nazwę żądanej klasy do utworzenia od strony JavaScript, prawidłowe nazwy w `onGetObjList` . Drugi parametr jest identyfikator unikatowy obiekt klasy. Ta metoda zwraca wskaźnik do obiektu utworzonego plugin. `Echo`Plugin implementuje następujące `echo_js.cpp` :

        JSExt* onCreateObject(const string& className, const string& id) {
            if (className == "Echo") {
                return new Echo(id);
            }
            return NULL;
        }
    

## Tworzenie wtyczki JavaScript

Plugin musi zawierać następujące pliki JavaScript:

*   `client.js`: To jest uważane za po stronie klienta i zawiera interfejsu API, które są dostępne dla aplikacji Cordova. API w `client.js` połączeń sprawia, że wywołania `index.js` . API w `client.js` również łączy funkcje wywołania zdarzeń, które ogień wywołania zwrotne.

*   `index.js`: Cordova ładunki `index.js` i sprawia, że dostępne przez most cordova.exec. `client.js`Plik wywołań funkcji API w `index.js` pliku, co z kolei zwiększa zadzwonić do JNEXT do komunikowania się z rodzimych stronie.

Po stronie klienta i serwera ( `client.js` i `index.js` ) oddziałuje poprzez `Cordova.exec` funkcja. `client.js`Musi wywołać `exec` funkcji i zapewnić niezbędne argumenty. `Echo`Plugin implementuje następujące metody w `client.js` pliku:

        var service = "org.apache.cordova.blackberry.echo",
            exec = cordova.require("cordova/exec");
    
        module.exports = {
            echo: function (data, success, fail) {
                exec(success, fail, service, "echo", { data: data });
            }
        };
    

`index.js`Składnik używa JNEXT do interakcji ze strony macierzystego. Dołączanie Konstruktor funkcja o nazwie `Echo` do JNEXT umożliwia wykonywanie następujących operacji klucz za pomocą `init` funkcji:

*   Określ wymagany moduł wywożone przez stronę rodzimych. Nazwa modułu wymagany musi odpowiadać nazwie pliku biblioteki ( `.so` pliku):
    
        JNEXT.require("libecho")
        

*   Tworzenie obiektu za pomocą modułu nabytych i Zapisz identyfikator, który jest zwracany przez wywołanie:
    
        self.m_id = JNEXT.createObject("libecho.Echo");
        
    
    Gdy aplikacja wywołuje `echo` funkcji w `client.js` , to połączenie z kolei wzywa `echo` funkcji w `index.js` , gdzie `PluginResult` obiekt wysyła dane jako odpowiedź z powrotem do `client.js` . Ponieważ `args` argument przekazany do funkcji został przerobiony przez `JSON.stringfy()` i zakodowany jako `URIcomponent` , należy wywołać następujące:
    
        data = JSON.parse(decodeURIComponent(args.data));
        

Teraz można wysyłać dane z powrotem, zgodnie z poniższym:

        module.exports = {
            echo: function (success, fail, args, env) {
                var result = new PluginResult(args, env),
                data = JSON.parse(decodeURIComponent(args.data)),
                response = echo.getInstance().echo(data);
                result.ok(response, false);
            }
        };
    

## Architektury wtyczki

Możesz umieścić plugin artefakty, łącznie z `plugin.xml` pliku, JavaScript i C++ plików źródłowych i `.so` binarnych plików w każdej struktury katalogów, tak długo, jak należy prawidłowo określić lokalizacje plików w `plugin.xml` pliku. Oto typowe struktury:

***project_directory*** (> plugin.xml)

*   **www** (>client.js)
*   **src** 
    *   **blackberry10** (> index.js, **rodzimych** > *.cpp, *.hpp)
    *   **urządzenia** (>*plik binarny* * .so)
    *   **symulator** (>*plik binarny* * .so)

Na liście przedstawiono hierarchicznych relacji między foldery najwyższego poziom. Nawiasach pokazuje zawartość danego katalogu. Wszystkie nazwy katalogów są wyświetlane czcionką pogrubioną. Nazwy plików są poprzedzone `>` znak.

## Plik *plugin.xml*

`plugin.xml`Plik zawiera obszar nazw rozszerzeń i innych metadanych. Umieszczaæ w górze `Echo` plugin w następujący sposób:

        <plugin xmlns="http://www.phonegap.com/ns/plugins/1.0"
            id="org.apache.cordova.blackberry.echo"
            version="1.0.0">
            <js-module src="www/client.js">
                <merges target="navigator" />
            </js-module>
            <platform name="blackberry10">
                <source-file src="src/blackberry10/index.js" />
                <lib-file src="src/blackberry10/native/device/libecho.so" arch="device" />
                <lib-file src="src/blackberry10/native/simulator/libecho.so" arch="simulator" />
                <config-file target="www/config.xml" parent="/widget">
                    <feature name="org.apache.cordova.blackberry.echo" value="org.apache.cordova.blackberry.echo" />
                </config-file>
            </platform>
        </plugin>