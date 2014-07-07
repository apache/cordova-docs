* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. Finden Sie verteilte mit dieser Arbeit für weitere Informationen bezüglich Urheberrecht und Datenschutz-Datei. Die ASF-Lizenzen-diese Datei, um Sie unter der Apache License, Version 2.0 (die "Lizenz"); Sie können diese Datei nur in Übereinstimmung mit der Lizenz. Sie können eine Kopie der Lizenz zu erhalten.

           http://www.Apache.org/licenses/LICENSE-2.0 sofern gesetzlich erforderlich oder schriftlich vereinbart, ist die Software unter der Lizenz verteilt auf einer "AS IS" BASIS, ohne Gewährleistungen oder Bedingungen irgendwelcher Art, weder ausdrücklich noch stillschweigend.  Finden Sie die Lizenz für die jeweilige Sprache, EZB, Berechtigungen und Beschränkungen
    

## unter der Lizenz.

# Konfiguration von VMWare Fusion

Dieser Abschnitt zeigt, wie VMWare Fusion auf dem Mac so konfigurieren, dass Sie Cordova verwenden können, um Windows Phone-Anwendungen zu generieren.

Das [Microsoft Developer Network][1] bietet allgemeine Anweisungen zum Ausführen von Windows unter VMWare Fusion. Nach der Installation von Windows, die folgenden Schritte aus:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  VMWare Fusion wählen Sie die Image-Datei von Windows 8, die Sie vorbereitet haben, und wählen Sie **Einstellungen**.

2.  Wählen Sie die **Prozessoren & Speicher** -Konfigurationsoptionen. Geben Sie, *zwei* Prozessorkerne und **Hypervisor-Anwendungen in dieser virtuellen Maschine zu ermöglichen**:
    
    ![][2]
    
    Der Windows Phone-Emulator allein verwendet die Hälfte ein Megabyte Speicher, also insgesamt reservieren Sie mindestens 2 GB für VMWare.

3.  Wählen Sie die **erweitert** . Aktivieren der **bevorzugte Virtualisierungs-Engine: Intel VT-X mit EPT** Option:
    
    ![][3]

4.  Ändern Sie die *.vmx* -Datei hinzufügen oder ändern die folgenden Einstellungen:
    
        Hypervisor.cpuid.v0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

Nachdem Sie diese Schritte abgeschlossen haben, können Sie dann das Windows Phone SDK installieren. Finden Sie im Windows Phone Plattform für Details.