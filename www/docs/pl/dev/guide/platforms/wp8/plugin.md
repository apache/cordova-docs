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

title: Windows Phone 8 wtyczki
---

# Windows Phone 8 wtyczki

Ta sekcja zawiera szczegóły dotyczące sposobu realizacji kodu macierzystego plugin na platformie Windows Phone. Przed przeczytaniem, zobacz Podręcznik rozwoju Plugin omówienie struktury plugin i jego wspólny interfejs JavaScript. W tej sekcji w dalszym ciągu wykazują wtyczce *echo* próbki, który komunikuje się z widoku sieci Web Cordova do macierzystego platformy i z powrotem.

Napisanie wtyczki do Cordova na Windows Phone wymaga zrozumienia podstawowych Cordova w architekturze. Cordova-WP8 składa się z `WebBrowser` że gospodarze aplikacji JavaScript kod i zarządza rodzimych wywołań API. Można rozszerzyć C# `BaseCommand` klasy ( `WPCordovaClassLib.Cordova.Commands.BaseCommand` ), który pochodzi z większości funkcji należy:

1.  Wybierz projekt i kliknij prawym przyciskiem myszy, aby wybrać **Dodaj → nowy element...** Jeśli chcesz, możesz dodać go do `Plugins` folderu.

2.  Wybierz **klasę** i nadaj mu nazwę `Echo.cs` . Ta klasa nazwa musi *dokładnie* odpowiadać to, co nazywasz określić jako usługa w `cordova.exec()` zadzwonić po stronie JavaScript.

3.  Obejmują realizację podstawowych klas:
    
        za pomocą WPCordovaClassLib.Cordova;
        za pomocą WPCordovaClassLib.Cordova.Commands;
        za pomocą WPCordovaClassLib.Cordova.JSON;
        

4.  Rozszerzenie klasy z `BaseCommand` :
    
        publiczne klasy Echo: BaseCommand {/ /...}
        

5.  Dodać `echo` Metoda, która jest niepokryta z JavaScript:
    
        publiczne klasy Echo: BaseCommand {publiczne echa nieważne (ciąg opcje) {/ / wszystkie metody wpłacone plugin JS musi mieć następujący podpis!
                / / public, powrót pustkę, 1 argument, który jest ciąg}}
        

Zobacz klasę [BaseCommand.cs][1] do metody dostępne wtyczki do zastąpienia. Na przykład plugin można przechwytywać zdarzenia 'pauza' i 'życiorys'.

 [1]: https://github.com/apache/cordova-wp8/blob/master/wp8/template/cordovalib/Commands/BaseCommand.cs

## Przestrzenie nazw

Domyślny obszar nazw dla niekwalifikowanych polecenia jest:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Jeśli chcesz określić swoje własne nazw, musisz nawiązać połączenie pełni kwalifikowana do `cordova.exec` . Na przykład, jeśli chcesz zdefiniować klasy C# to tak:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript trzeba zadzwonić `exec` tak:

        Cordova.exec (zwycięstwo, nie, "com.mydomain.cordovaExtensions.Echo",...);
    

## Tłumaczenia ustne argumenty w C

W przykładzie omawianym w aplikacji wtyczki wtyczki otrzymuje dane jest ciąg, ale co jeśli chcesz przekazać tablicę ciągów? Załóżmy, że JavaScript `cordova.exec` wywołanie jest określony tak:

        Cordova.exec (wygrać, nie, "Echo", "echo", ["ciąg wejściowy"]);
    

Wartość `options` ciąg przekazany do `Echo.echo` Metoda jest JSON:

        "[\"input string\ "]"
    

Wszystkie JavaScript `exec` argumenty są zakodowane w JSON przed przejściem do C#, a więc trzeba być dekodowane:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Przekazywanie wyników z C# do JavaScript

`BaseCommand`Klasy zapewnia metody do przekazywania danych do obsługi wywołania zwrotnego JavaScript. Jeśli chcesz po prostu sygnał sukces nie towarzyszącego wyników, możesz po prostu zadzwonić:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Aby przekazać dane z powrotem, należy zadzwonić `DispatchCommandResult` inaczej:

        DispatchCommandResult (nowy PluginResult (PluginResult.Status.OK, "wszystko poszło zgodnie z planem, to wynik, który jest przekazywany do obsługi sukces."));
    

Użyj ciągiem JSON, aby przekazać dane strukturalne obiektu JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Aby sygnał błędu, wywołanie `DispatchCommandResult` z `PluginResult` obiektu, którego stan jest `ERROR` :

        DispatchCommandResult (nowy PluginResult (PluginResult.Status.ERROR, "Echo zasygnalizował błąd"));
    

## Obsługa błędów serializacji

Interpretując swoje argumenty, `try` / `catch` bloki pomaga eliminować złe dane wejściowe. Ten wzór pojawia się w całym kodzie Cordova C#:

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## Plugin życia

Wtyczki z długim żądania, tło działalności, takich jak odtwarzanie, słuchaczy lub że utrzymać stan wewnętrzny należy implementować `onReset` Metoda, aby oczyścić tych działań. Metoda działa gdy CordovaView WebBrowser nawiguje do nowej strony lub odświeża, który ładuje JavaScript.

        // defined in WPCordovaClassLib.Cordova.Commands.BaseCommand
        public virtual void OnReset() { }
    

## Plugin XML

Poniżej przedstawiono sposób użycia `plugin.xml` pliku, aby określić pliki źródłowe plugin na platformie Windows Phone. Zobacz wtyczki aplikacji [Przegląd](../../overview/index.html) i Plugin specyfikacji szczegółowe informacje na temat dostępnych opcji.

*   `<source-file>`Element definiuje wszystkie wtyczki zasobów, takich jak *cs*, *.xaml*, *. xaml.cs*, obraz aktywów i plików *.dll* .

*   `<config-file>`Element definiuje elementy do pliku konfiguracyjnego. W tym przykładzie dodaje plugin do platformy `config.xml` pliku:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    W tym przykładzie dodaje możliwość kontaktów `WMAppManifest.xml` pliku:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Debugowanie wtyczek

Debugowanie pluginu w C# składnika za pomocą programu Visual Studio debugger. Można ustawić punkt przerwania w każdej z metod w swojej klasie.

JavaScript jest trudniejsze do debugowania na Windows Phone. Musisz użyć `console.log` do wyprowadzenia Państwa wtyczki, lub aby zapoznać się z błędów.

## Typowe pułapki

*   Należy uważać, aby nie przekazywać argumenty z JavaScript na stronie rodzimych, które są trudne do deserializacji jako JSON. Większość platform urządzenie oczekuje argument przekazany do `cordova.exec()` do tablicy, takie jak następujące:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    Może to spowodować wartość ciąg zbyt skomplikowane dla C# do dekodowania:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Zamiast tego, warto rozważyć przekonwertowanie *wszystkich* parametrów ciągów przed wywołaniem `exec()` i dekodowanie każdy oddzielnie:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   To jest zwykle lepiej sprawdzić parametry w JavaScript przed wywołaniem `exec()` . W ten sposób pozwala na ponowne wykorzystanie kodu więcej i wyciągnąć niepotrzebne funkcje wtyczki różnych implementacji macierzystym.