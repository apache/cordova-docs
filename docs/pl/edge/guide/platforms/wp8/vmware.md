--Licencja: na licencji Apache Software Foundation (ASF) jedną lub więcej umów licencyjnych współautorów. Zobacz plik ogłoszenia rozpowszechniane z tej pracy, aby uzyskać dodatkowe informacje dotyczące własności praw autorskich. ASF licencje tego pliku do ci Apache License, w wersji 2.0 ("Licencja"); nie można używać tego pliku z wyjątkiem zgodnie z licencją. Możesz otrzymać kopię licencji na

           http://www.Apache.org/licenses/License-2.0 chyba że wymagane przez prawo lub uzgodnione na piśmie, oprogramowanie rozpowszechniane na licencji jest rozpowszechniany na "AS IS" podstawę, bez gwarancji lub warunków gwarancji jakiegokolwiek rodzaju, wyraźnych ani dorozumianych.  Zobacz licencji dla określonego języka, regulujących uprawnienia i ograniczenia
    

## na licencji.

# Konfigurowanie VMWare Fusion

Ta sekcja pokazuje jak skonfigurować VMWare Fusion na Mac, więc, że Cordova można używać do tworzenia aplikacji Windows Phone.

[Microsoft Developer Network][1] zapewnia ogólne instrukcje dotyczące uruchamiania systemu Windows pod VMWare Fusion. Po zainstalowaniu systemu Windows, wykonaj następujące kroki:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  W VMWare Fusion wybierz obrazu dysku systemu Windows 8, przygotowali i wybrać **Ustawienia**.

2.  Wybierz opcje konfiguracji **procesorów i pamięci** . Upewnij się określić *dwa* rdzenie procesora oraz w celu **umożliwienia hypervisor aplikacji w ten czynny maszyna**:
    
    ![][2]
    
    Emulator Windows Phone sam używa pół megabajta pamięci, więc ogólnie należy zarezerwować co najmniej 2GB dla VMWare.

3.  Wybierz opcję ustawienia **Zaawansowane** . Włącz **preferowane virtualization silnik: Intel VT-x z EPT** opcji:
    
    ![][3]

4.  Zmodyfikować plik *.vmx* dodać lub modyfikować następujące ustawienia:
    
        hypervisor.CPUID.v0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

Po wykonaniu tych kroków, to jesteś gotowy do zainstalowania zestawu SDK Windows Phone. Zobacz przewodnik platformy Windows Phone, szczegóły.