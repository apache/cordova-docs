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

# Przewodnik platformy iOS

Ten poradnik pokazuje jak skonfigurować SDK środowiska wdrażania Cordova aplikacji dla systemu iOS iPhone i iPad. Zobacz następujące szczegółowe informacje specyficzne dla platformy:

*   iOS konfiguracji
*   Aktualizacja iOS
*   iOS WebViews
*   iOS wtyczek
*   iOS narzędzia wiersza polecenia

Narzędzia wiersza polecenia powyżej odnosi się do wcześniejszych Cordova 3.0. Zobacz interfejs wiersza poleceń do informacji o bieżącym interfejs.

## Wymagania i wsparcie

Apple ® narzędzia potrzebne do tworzenia aplikacji iOS tylko na systemie operacyjnym na Intel oparty Mac OS X. Xcode ® 4.5 (minimalna wymagana wersja) działa tylko na OS X 10.7 (Lion) wersja lub większym i obejmuje iOS 6 SDK (Software Development Kit). Do składania aplikacji na Apple App Store℠ wymaga najnowszej wersji narzędzia Apple.

Możesz przetestować wiele cech Cordova, przy użyciu emulatora iOS instalowane z iOS SDK i Xcode, ale potrzebna jest rzeczywiste urządzenie pełni przetestować wszystkie funkcje urządzenia aplikacji przed złożeniem do App Store. Urządzenie musi mieć co najmniej iOS 5.x zainstalowane, w wersji minimalnej iOS obsługiwane od Cordova 2.3. Urządzenia towarzyszące obejmują wszystkie iPad ® modeli, iPhone ® 3GS i powyżej i iPod ® Touch 3. generacji lub później. Aby zainstalować aplikacje na urządzenia, należy również członkiem Apple [iOS Developer Program][1], który kosztuje 99 dolarów rocznie. Ten przewodnik pokazuje, jak wdrożyć aplikacje iOS emulator, dla którego nie musisz zarejestrować się w programie autora.

 [1]: https://developer.apple.com/programs/ios/

## Instalowania zestawu SDK

Istnieją dwa sposoby pobrania Xcode:

*   z [App Store][2], dostępne przez poszukiwanie "Xcode" w **App Store** aplikację.

*   od [Apple Developer pliki do pobrania][3], który wymaga rejestracji jako Apple Developer.

 [2]: https://itunes.apple.com/us/app/xcode/id497799835?mt=12
 [3]: https://developer.apple.com/downloads/index.action

Po zainstalowaniu Xcode kilka narzędzi wiersza polecenia należy włączyć dla Cordova do uruchomienia. **Xcode** menu wybierz **Ustawienia**, a następnie w zakładce **pliki do pobrania** . Z panelu **składniki** naciśnij przycisk **zainstalować** **Narzędzia wiersza polecenia** lista.

## Otwieranie projektu w SDK

Użycie `cordova` narzędzie, aby skonfigurować nowy projekt, opisanym w The Cordova interfejs wiersza poleceń. Na przykład w katalogu kodu źródłowego:

        $ cordova create hello com.example.hello "HelloWorld"
        $ cd hello
        $ cordova platform add ios
        $ cordova prepare              # or "cordova build"
    

Po utworzeniu, można otworzyć go w Xcode. Kliknij dwukrotnie, aby otworzyć `hello/platforms/ios/hello.xcodeproj` plik. Ekran powinien wyglądać tak:

![][4]

 [4]: img/guide/platforms/ios/helloworld_project.png

## Uruchamianie na emulatorze

Aby wyświetlić podgląd aplikacji w emulatorze iOS:

1.  Upewnij się, że plik *.xcodeproj* jest zaznaczone w panelu po lewej stronie.

2.  Wybierz aplikację **Witaj** w panelu po prawej stronie.

3.  Wybierz urządzenie przeznaczone z paska menu **programu** , takich jak iPhone symulator 6.0 jako wyróżnione tu:
    
    ![][5]

4.  Naciśnij przycisk **Uruchom** , który pojawia się w tych samych narzędzi po lewej stronie **systemu**. Który tworzy, wdraża i uruchamia aplikację w emulatorze. Stosowanie oddzielnych emulatora otwiera do wyświetlania aplikacji:
    
    ![][6]
    
    Tylko jeden emulatora może działać w czasie, więc jeśli chcesz przetestować aplikację w inny emulator, musisz zamknąć aplikację emulatora i uruchomić inny cel w Xcode.

 [5]: img/guide/platforms/ios/select_xcode_scheme.png
 [6]: img/guide/platforms/ios/HelloWorldStandard.png

Xcode jest dostarczany z emulatorów dla najnowszej wersji iPhone i iPad. Starsze wersje mogą być dostępne z **Xcode → preferencje → pobieranie składników →** panelu.

## Uruchamianie na urządzeniu

Szczegółowe informacje na temat różnych wymagań, aby wdrożyć urządzenie odnoszą się do sekcji *konfiguracji rozwoju i dystrybucji majątku* firmy Apple [Narzędzia pracy poradnik dla iOS][7]. Krótko mówiąc trzeba wykonać następujące czynności przed wdrożeniem:

 [7]: http://developer.apple.com/library/ios/#documentation/Xcode/Conceptual/ios_development_workflow/00-About_the_iOS_Application_Development_Workflow/introduction.html#//apple_ref/doc/uid/TP40007959

1.  Dołącz do Apple iOS Developer Program.

2.  Utwórz *Profil Provisioning* w [iOS Provisioning Portal][8]. Można użyć jego *Rozwoju rezerw asystent* tworzenia i instalować profil i wymaga certyfikatu Xcode.

3.  Sprawdź, czy sekcji *Podpisywania kodu* *Kod podpisywanie tożsamości* w ustawieniach projektu jest zestaw do nazwy profilu zastrzegania.

 [8]: https://developer.apple.com/ios/manage/overview/index.action

Aby wdrożyć urządzenie:

1.  Za pomocą kabla USB do podłączenia urządzenia do komputera Mac.

2.  Wybierz nazwę projektu w oknie Xcode **systemu** drop niedziałający listy.

3.  Wybierz urządzenie z listy rozwijanej **urządzenia** . Jeśli jest podłączony przez USB, ale nadal nie ma, naciśnij przycisk **organizator** , aby rozwiązać wszelkie błędy.

4.  Naciśnij przycisk **Uruchom** , aby zbudować, wdrożyć i uruchom aplikację na urządzeniu.

## Typowe problemy

**Oczekiwany ostrzeżenia**: podczas aplikacji interfejs programistyczny (API) jest zmieniony lub zastąpiony przez innego interfejsu API, to jest oznaczony jako *przestarzały*. API nadal działa w najbliższym czasie, ale ostatecznie usunięty. Niektóre z tych interfejsów zaniechane znajdują odzwierciedlenie w Apache Cordova, i Xcode kwestii ostrzeżenia o nich podczas tworzenia i wdrażania aplikacji.

Xcode ostrzeżenie o `invokeString` Metoda dotyczy funkcji, które uruchamia aplikację z niestandardowego adresu URL. Chociaż mechanizm ładowania z niestandardowy adres URL został zmieniony, ten kod jest nadal obecny do tyłu funkcjonalność dla aplikacji utworzonych w starszych wersjach Cordova. Aplikacja przykładowej nie używać tej funkcji, więc te ostrzeżenia, mogą być ignorowane. Aby zapobiec te ostrzeżenia wyświetlane, należy usunąć kod, który odwołuje się do invokeString przestarzałe API:

*   Edytuj plik *Classes/MainViewController.m* , otoczyć w następującym fragmencie kodu z `/*` i `*/` komentarzy jak pokazano poniżej, a następnie wpisz **polecenia s** , aby zapisać plik:
    
        (void)webViewDidFinishLoad:(UIWebView*)theWebView
        {
        // only valid if ___PROJECTNAME__-Info.plist specifies a protocol to handle
        /*
        if (self.invokeString) {
          // this is passed before the deviceready event is fired, so you can access it in js when you receive deviceready
          NSLog(@"DEPRECATED: window.invokeString - use the window.handleOpenURL(url) function instead, which is always called when the app is launched through a custom scheme url.");
          NSString* jsString = [NSString stringWithFormat:@"var invokeString = \"%@\";", self.invokeString];
          [theWebView stringByEvaluatingJavaScriptFromString:jsString];
        }
        */
        // Black base color for background matches the native apps
        theWebView.backgroundColor = [UIColor blackColor];
        
        return [super webViewDidFinishLoad:theWebView];
        }
        

*   Edytuj plik *Classes/AppViewDelegate.m* , komentarz na zewnątrz ten kolejne specjalność wstawiając podwójny ukośnik, jak pokazano poniżej, a następnie wpisz **polecenie s** , aby zapisać plik:
    
        //self.viewController.invokeString = invokeString;
        

*   Naciśnij **b polecenie** Odbuduj projekt i wyeliminowania ostrzeżenia.

<!-- Does this fix only last until the next "cordova prepare"? -->

**Brak nagłówków**: błędy odnoszące się do brakujących nagłówków wynikają z problemów z lokalizacji budowy i może być ustalona za pomocą Xcode preferencji:

1.  Wybierz **Xcode → preferencje → lokalizacje**.

2.  W sekcji **Uzyskanych danych** naciśnij przycisk **Zaawansowane** i wybierz **unikatowy** jako **Miejsce budowy** , jak pokazano poniżej:
    
    ![][9]

 [9]: img/guide/platforms/ios/xcode_build_location.png

Jest to ustawienie domyślne dla nowych Xcode zainstalować, ale może być zestaw, inaczej po uaktualnienie ze starszej wersji Xcode.

Aby uzyskać więcej informacji zajrzyj do dokumentacji firmy Apple:

*   [Start rozwoju iOS aplikacji dziś][10] zapewnia szybki przegląd kroków dla rozwoju iOS aplikacji.

*   [Centrum Państwa Strona][11] zawiera linki do kilku iOS zasobów technicznych, w tym zasobów technicznych, obsługi portalu, dystrybucja przewodników i fora.

*   [Narzędzia pracy poradnik dla iOS][7]

*   [Xcode 4 Podręcznik użytkownika][12]

*   [Sesja wideo][13] z konferencji dewelopera szerokim świecie Apple 2012 (WWDC2012)

*   [Xcode wybierz polecenie][14], które pomaga określić poprawną wersję Xcode, jeśli więcej niż jeden jest zainstalowany.

 [10]: http://developer.apple.com/library/ios/#referencelibrary/GettingStarted/RoadMapiOS/index.html#//apple_ref/doc/uid/TP40011343
 [11]: https://developer.apple.com/membercenter/index.action
 [12]: http://developer.apple.com/library/ios/#documentation/ToolsLanguages/Conceptual/Xcode4UserGuide/000-About_Xcode/about.html#//apple_ref/doc/uid/TP40010215
 [13]: https://developer.apple.com/videos/wwdc/2012/
 [14]: http://developer.apple.com/library/mac/#documentation/Darwin/Reference/ManPages/man1/xcode-select.1.html

(Mac ® OS X ®, Xcode ®, Apple ® App Store℠, iPad ®, iPhone ®, iPoda ® i Finder ® są znakami towarowymi firmy Apple Inc)