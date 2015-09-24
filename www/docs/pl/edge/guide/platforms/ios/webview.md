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

title: iOS WebViews
---

# iOS WebViews

Ten poradnik pokazuje jak wobec sprzeniewierzyć Cordova włączony Widok sieci Web składnika w większych aplikacji na iOS. Szczegółowe informacje na temat jak te składniki mogą komunikować się ze sobą, zobacz wtyczki aplikacji.

Wsparcie dla WebViews dla iOS rozpoczął z Cordova wersja 1.4, za pomocą `Cleaver` element, dla którego szablon Xcode służy jako odniesienie realizacji. Cordova 2.0 i nowsze wersje obsługują tylko realizacji podprojektu w oparciu tasak.

Instrukcje te wymagają co najmniej Cordova 3.x i Xcode 6.0, wraz z pliku `config.xml` z nowo utworzonego iOS projektu. Można użyć procedury na interfejs wiersza polecenia do tworzenia nowego projektu, a następnie uzyskać `config.xml` plik w aplikacji o nazwie podkatalogu w`platforms/ios`.

Aby wykonać te instrukcje, upewnij się, że masz najnowsze dystrybucji Cordova. Pobierz go z [cordova.apache.org][1] i rozpakuj jego pakiet iOS.

 [1]: http://cordova.apache.org

## Dodawanie tasak do projekt Xcode (CordovaLib podprojektu)

1.  Zamknąć Xcode, jeśli jest uruchomiony.

2.  Otwórz terminal i przejdź do katalogu źródłowego dla Cordova iOS.

3.  Kopia `config.xml` plik opisany w katalogu projektu.

4.  Otwórz Xcode i skopiować za pomocą programu Finder `config.xml` pliku w oknie **Nawigator projektu** .

5.  Wybierz polecenie **Utwórz grupy o wszelkie dodane foldery** i naciśnij przycisk **Zakończ**.

6.  Aby skopiować za pomocą programu Finder `CordovaLib/CordovaLib.xcodeproj` plik w Xcode w **Nawigatorze projektu**

7.  Wybierz `CordovaLib.xcodeproj` w **nawigatorze projektu**.

8.  Typ **opcji-polecenia-1** kombinację klawiszy, aby pokazać **Plik inspektor**.

9.  Wybierz **w stosunku do grupy** w **Pliku inspektor** spadać-w dół menu dla **lokalizacji**.

10. Wybierz **ikonę projektu** w **Nawigatorze projektu**, wybierz **miejsce docelowe**, a następnie wybierz kartę **Ustawienia budować** .

11. Dodać `-force_load` i `-Obj-C` na **Inne Linker flagi** wartość.

12. Kliknij na **ikonę projektu** w Nawigatorze projektu, wybierz **miejsce docelowe**, a następnie wybierz kartę **Faz budowy** .

13. Rozwinąć **Link binarki z biblioteki**.

14. Wybierz **+** przycisk, a następnie dodaj następujące **ramy**. Opcjonalnie w **Nawigatorze projektu**, przenosić je w grupie **RAM** :
    
        AssetsLibrary.framework
        CoreLocation.framework
        CoreGraphics.framework
        MobileCoreServices.framework
        

15. Rozwiń węzeł **Miejsce docelowe zależności**, z tego oznakowania, jeśli istnieje więcej niż jedno pole, w polu u góry.

16. Wybierz **+** przycisk, a następnie Dodaj `CordovaLib` budować produktu.

17. Rozwinąć **Link binarki z biblioteki**, z tego oznakowania, jeśli istnieje więcej niż jedno pole, w polu u góry.

18. Wybierz **+** przycisk, a następnie Dodaj`libCordova.a`.

19. Zestaw **Xcode preferencje → lokalizacje → uzyskanych danych → zaawansowane...** **unikatowe**.

20. Wybierz **ikonę projektu** w Nawigatorze projektu, wybierz **miejsce docelowe**, a następnie wybierz kartę **Ustawienia budować** .

21. Szukaj dla **nagłówka ścieżki wyszukiwania**. Dla tego ustawienia, należy dodać te trzy wartości poniżej, wraz z cudzysłowami:
    
        "$(TARGET_BUILD_DIR)/usr/local/lib/include"        
        "$(OBJROOT)/UninstalledProducts/include"
        "$(BUILT_PRODUCTS_DIR)"
        
    
    Od Cordova 2.1.0 `CordovaLib` ma był ulepszony wobec używać **Automatycznego liczenia odniesienia (ARC)**. Nie trzeba uaktualnić do **ŁUKU** , aby używać `CordovaLib` , ale jeśli chcesz uaktualnić twój projekt za pomocą **ŁUKU**, należy użyć Kreatora migracji Xcode z **Edycja → refaktoringu → konwersji na cel-C ARC...** menu, **Usuń zaznaczenie pola wyboru libCordova.a**, a następnie uruchomić kreatora do zakończenia.

## Za pomocą CDVViewController

1.  Dodaj następujący nagłówek:
    
        #import <Cordova/CDVViewController.h>
        

2.  Wystąpienia nowego `CDVViewController` i zachować go gdzieś, np. do właściwości klasy:
    
        CDVViewController* viewController = [CDVViewController new];
        

3.  Opcjonalnie zestaw `wwwFolderName` Właściwość, która domyślnie `www` :
    
        viewController.wwwFolderName = @"myfolder";
        

4.  Opcjonalnie można ustawić stronę startową `config.xml` pliku `<content>` tag, albo lokalny plik:
    
        <content src="index.html" />
        
    
    .. .albo witryny zdalnej:
    
        <content src="http://apache.org" />
        

5.  Opcjonalnie zestaw `useSplashScreen` Właściwość, która domyślnie `NO` :
    
        viewController.useSplashScreen = YES;
        

6.  Zestaw **ramki widoku**. Zawsze ustawić jako ostatni Właściwość:
    
        viewController.view.frame = CGRectMake(0, 0, 320, 480);
        

7.  Dodać tasak do widoku:
    
        [myView addSubview:viewController.view];
        

## Dodawanie HTML, CSS i JavaScript aktywów

1.  Utwórz nowy katalog w ramach projektu, `www` np.

2.  HTML, CSS i JavaScript aktywów umieścić ten katalog.

3.  Aby skopiować katalogu w Xcode w **Nawigatorze projektu** okno za pomocą programu Finder.

4.  Wybierz **Tworzenie folderu odniesienia dla wszelkich dodanych folderów**.

5.  Ustaw odpowiednie `wwwFolderName` i `startPage` Właściwości katalogu początkowo utworzono, lub użyj ustawień domyślnych (określonego w poprzedniej sekcji) przy uruchamianiu`CDVViewController`.
    
        /*
         if you created a folder called 'myfolder' and
         you want the file 'mypage.html' in it to be
         the startPage
        */
        viewController.wwwFolderName = @"myfolder";
        viewController.startPage = @"mypage.html"