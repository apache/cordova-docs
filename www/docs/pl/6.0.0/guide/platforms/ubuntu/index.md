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

title: Platforma Ubuntu Guide
---

# Platforma Ubuntu Guide

## Pierwsze wydanie

Witamy w pierwszym wydaniu Ubuntu platformy wsparcia w Cordova. W tym wydaniu fokus jest rozwój systemu Ubuntu i za pomocą przepływu pracy między platformami omówione w przeglądzie. Dotyczy to dodawanie platformie Ubuntu do projektu, dodając standardowe wtyczki Cordova oraz tworzenie i uruchamianie aplikacji na platformie Ubuntu.

### Ubuntu SDK

Również może chcesz zainstalować Ubuntu QtCreator środowisko programistyczne. Zobacz [developer.ubuntu.com][1] uzyskać więcej informacji. (QtCreator SDK nie jest wymagane aby dodać obsługę platform Ubuntu do aplikacji Cordova.)

 [1]: http://developer.ubuntu.com

### Platform Ubuntu Runtime

Ubuntu jest dobrze znany jej środowisko graficzne (dla laptopów, komputerów i takie). Ubuntu Touch rozszerza system operacyjny Ubuntu na telefony komórkowe i tablety. Ubuntu runtime platformy mają różnych architektur procesorów (x 86, armhf, itp.). Kod aplikacji i plugin musi zostać skompilowany odpowiednio. Poparcie dla ten szeroki obszar jest szybko rozwijającą się w Ubuntu.

### Najnowsze informacje

Aby uzyskać najnowsze informacje na temat Cordova aplikacji wsparcia dla Ubuntu runtime platform zobacz [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Rozwój platformy wymagania

W tej wersji wstępnej platforma rozwoju powinny być Ubuntu Pulpit. 13.10 Ubuntu (kryptonim "pyskaty") lub nowszy jest wymagany aby korzystać z pełnego zestaw obsługiwanych funkcji.

Można zainstalować Cordova w systemach innych niż Ubuntu (za pomocą npm), ale ważne funkcje są jedynie przez Ubuntu pakiety Debiana w tym czasie.

## Instalacja Cordova

Dodać Ubuntu Cordova [Osobiste Archiwum][3] systemu Ubuntu:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Zainstaluj pakiet cordova-cli (i jego zależności):

    $ sudo apt-get install cordova-cli
    

## Projekt przepływ pracy

### Tworzenie projektu

Tworzy aplikację w `hello` katalogu, którego nazwa wyświetlana jest `HelloWorld` :

    $ cordova create hello com.example.hello HelloWorld
    

### Przenieść do katalogu projektu

    $ cd hello
    

### Dodać platformie Ubuntu

    $ cordova platform add ubuntu
    

### Budować dla Ubuntu

    $ cordova build ubuntu
    

### Uruchamianie aplikacji

    $ cordova run ubuntu
    

### Dodaj wtyczkę Camera

    $ cordova plugin add cordova-plugin-camera