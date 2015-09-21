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

title: Wtyczki Windows
---

# Wtyczki Windows

Ta sekcja zawiera szczegóły dotyczące sposobu realizacji plugin do użytku w systemie Windows Store app. Przed przeczytaniem, zobacz zastosowanie pluginów omówienie struktury wtyczki i jego wspólny interfejs JavaScript. W tej sekcji w dalszym ciągu wykazują wtyczce *echo* próbki, który komunikuje się z widoku sieci Web Cordova do macierzystego platformy i z powrotem.

To ważne, aby pamiętać, że Windows wspiera rozwój bezpośrednio w Javascript, który oznacza opracowanie "macierzystego" części w tylko wymagane w szczególnych przypadkach.

## Tworzenie wtyczki Windows w JavaScript

Te instrukcje są do tworzenia czystego plugin JavaScript. Zrozumienie tego jest kluczowe do zrozumienia jak dodać zarządzanego macierzystego bitów.

Windows Cordova wtyczki są zasadniczo cienka otoka wokół istniejących WinJS określonych funkcji, ale przy założeniu, że będziemy chcieli, aby zdefiniować swoje JS wspólny interfejs dla wielu urządzeń, zazwyczaj będziesz miał 1 plik JS, który dostarcza API.

    // inside file echoplugin.js
    var EchoPlugin = {
        // the echo function calls successCallback with the provided text in strInput
        // if strInput is empty, it will call the errorCallback
        echo:function(successCallback, errorCallback, strInput) {
            cordova.exec(successCallback,errorCallback,"EchoPlugin","echo",[strInput]);
        }
    }
    

## Wewnątrz Cordova exec Windows

Funkcja cordova.exec jest różnie definiowane na każdej platformie, to dlatego, że każda platforma ma swój własny sposób komunikowania się między kod js aplikacji i kodu macierzystego otoki. Ale w przypadku okien, to nie otoka macierzystym, więc wywołanie exec jest dla spójności. Js plugin tylko pracy bezpośrednio w EchoPlugin.echo, można zrobić coś takiego:

    // inside file echoplugin.js ( this is what NOT to do if you want to reuse the JS API cross platform )
    var EchoPlugin = {
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    }
    

To chcieliby może działać dobrze, jednak oznacza to, że trzeba będzie różne wersje echoPlugin.js dla różnych platform, i ewentualnie może mieć problemy z niespójności w implementacjach. Jak najlepszych praktyk zdecydowaliśmy się naśladować Natywnego API wewnątrz cordova.exec na Windows, dzięki czemu możemy uruchomić ten sam kod JS i nie mam do przerobienia go na platformie i również skorzystać wszelkich parametrów kontroli lub innych wspólnych kodu dostarczonego przez deweloperów, którzy pracowali na innych platformach.

## Cordova exec proxy

W systemie Windows cordova zapewnia serwer proxy, który służy do rejestracji obiektu, który będzie obsługiwał wszystkie wywołania interfejsu API cordova.exec.

Na przykład jeśli chcesz zapewnić realizacji API akcelerometr, możesz to zrobić:

cordova.commandProxy.add ("Akcelerometr", {start: function() {/ / twój kod tutaj...} / /... i reszta API tutaj});

Więc w naszym przypadku, przyjmiemy założenie, że kod w echoplugin.js jest obsługa krzyż platformy odpowiednich JavaScript, a my po prostu napisać serwer proxy dla Windows

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            if(!strInput || !strInput.length) {
                errorCallback("Error, something was wrong with the input string. =>" + strInput);
            }
            else {
                successCallback(strInput + "echo");
            }
        }
    });
    

Definicja plugin

Jeśli chcemy, aby użytkownicy naszej wtyczki aby móc łatwo zainstalować nasze wtyczki, musimy zdefiniować zgodnie z jak PlugMan definiuje wtyczek. Więcej na ten temat w [Plugin Spec][1]

 [1]: plugin_ref_spec.md.html#Plugin%20Specification

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.1.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

To daje nam pewien działanie Windows JavaScript plugin, który używa wspólnego pliku (echoplugin.js) i używa serwera proxy do Windows tylko część realizacji (echopluginProxy.js). Tak jak możemy dodać macierzystego zarządzanego kodu do tego? Również mamy zamiar zacząć tym samym, jedyną różnicą będzie to, co robimy wewnątrz metody echopluginProxy.

# Jak WinJS uzyskuje dostęp do kodu zarządzanego macierzystego

W systemie Windows, WinJS, autorem aplikacji jest możliwość interakcji z kodu macierzystego, to między op jest dostępny dla systemu Windows uruchomieniowego. Szczegóły są liczne, a ten przewodnik obejmuje jedynie podstawy. Firma Microsoft udostępnia znacznie więcej informacji [tutaj][2].

 [2]: http://msdn.microsoft.com/en-us/library/windows/apps/hh441569.aspx

Podczas tworzenia okna składnika czasu wykonywania dowolnej klasy, który jest zdefiniowany jako 'zamkniętych klasy publicznej ref' jest uważany za klasę activatable i będą wykupione z JavaScript.

    // in your header file .h
    namespace EchoRuntimeComponent
    {
        public ref class EchoPluginRT sealed 
        {
            public:
            static Platform::String^ Echo(Platform::String^ input);
        }
    }
    
    // in the implementation file .cpp
    using namespace EchoRuntimeComponent;
    using namespace Platform;
    
    Platform::String^ EchoPluginRT::Echo(Platform::String^ input)
    {
        if(input->IsEmpty()) 
        {
            return "Error: input string is empty.";
        }
        else
        {
            return input->ToString() + "echo";
        }
    }
    

Teraz w celu wywołania kodu macierzystego, możemy użyć nazw, classname i lowerCamelCase Metoda, którą Wzywamy.

var res = EchoRuntimeComponent.EchoPluginRT.echo("boom"); Przeprowadzka to do naszego pliku echopluginProxy.js, otrzymamy:

    // in file echopluginProxy.js
    cordova.commandProxy.add("EchoPlugin",{
        echo:function(successCallback,errorCallback,strInput) {
            var res = EchoRuntimeComponent.EchoPluginRT.echo(strInput);
            if(res.indexOf("Error") == 0) {
                errorCallback(res);
            }
            else {
                successCallback(res);
            }
        }
    });
    

I to wszystko, mamy do końca C++ kopii js wpłacone wtyczki do użytku w Apache Cordova Windows!

# Kilka uwag technicznych:

*   zwrotne jest zwykle asynchroniczne, więc wywołanie zwrotne od razu chyba nie oczekuje przez obiekt wywołujący. W praktyce jeśli połączenie nie jest asynchroniczne, powinny co najmniej umożliwia javascript timeout życie callback nazywać asynchroniczne.
*   Activatable klas można zrobić wszelkiego rodzaju niesamowite, jak zdarzenia wysyłki, asynchronicznych wywołań, przekazywanie własnych typów obiektów, tablice, kolekcje, metody przeciążane i wiele więcej. Polecam, że można zrobić swoją pracę domową.
*   Jeśli trzymać się wspólne Windows Phone 8.0 i wywołania interfejsu API SDK Windows, będziesz używać składnika sam runtime (native lub zarządzanych bitów) w plugin Windows Phone 8.0 Apache Cordova. ~ stay tuned dla tego postu.

# Definiowanie wtyczki

Teraz, że mamy plugin działający, musimy ponownie definicji plugin z wcześniej, więc możemy opublikować go. Teraz możemy dodać składnik czasu wykonywania jako ramy. Należy zauważyć, że dane wyjściowe typu WindowsRuntimeComponent może być .winmd lub .dll

    <?xml version="1.0" encoding="UTF-8"?>
    <plugin xmlns="http://apache.org/cordova/ns/plugins/1.0"
        id="com.risingj.echoplugin"
        version="0.2.0">
    
        <js-module src="www/echoplugin.js" name="echoplugin">
            <clobbers target="window.echoplugin" />
        </js-module>
    
        <!-- windows -->
        <platform name="windows">
            <js-module src="src/windows/echopluginProxy.js" name="EchoProxy">
                <merges target="" />
            </js-module>
            <framework src="src/windows/EchoRuntimeComponent.winmd" custom="true"/>
        </platform>
    
        <!-- other platforms -->
    
    </plugin>
    

To wszystko, teraz masz podziałowi plugin, który można podzielić ze światem! Jeden rzecz wobec skrypt dłużny, dopiero niedawno została dodana obsługa dodawania ram do projektu Windows Cordova, więc będziesz musiał upewnić się, że twój cordova oprzyrządowania prądu. Cordova-cli i cordova-plugman obsługuje dodawanie, usuwanie macierzystego kopii pluginów.

> cordova plugin add com.risingj.echoplugin

lub

> plugman install --platform windows --plugin com.risingj.echoplugin --project .

https://github.com/purplecabbage/cordova-runtimecomp-echoplug