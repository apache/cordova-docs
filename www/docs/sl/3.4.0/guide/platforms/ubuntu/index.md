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

# Vodnik Ubuntu Platform

## Začetno sproščanje

Dobrodošli na začetno izpustitev Ubuntu platform support v Cordova. S tem za javnost, poudarek razvoju na Ubuntu sistem in uporabo poteka dela Dev Cordova spletni projekt. To vključuje dodajanje Ubuntu platform za vaš projekt, dodajanje standardnih Cordova plugins, in, seveda, gradnjo in delovanje apps za Ubuntu platform.

### Ubuntu SDK

Lahko tudi želite namestiti Ubuntu QtCreator razvojno okolje. Glej [developer.ubuntu.com][1] za več info. (QtCreator SDK ni potrebno dodati Ubuntu platform support Cordova app.)

 [1]: http://developer.ubuntu.com

### Ubuntu Runtime platform

Ubuntu je dobro znano, za svojo namizno okolje (za prenosniki, računalniki in podobno). Ubuntu dotik razširja OS Ubuntu na telefone in tablet. Ubuntu runtime platforme imajo različne CPU arhitekture (x 86, armhf, itd.). App in plugin kodo mora ustrezno pripravijo. Podpora za to široko področje se hitro razvija v Ubuntu.

### Najnovejše informacije

Najnovejše informacije o podpori Cordova app za Ubuntu platform runtime, glejte [wiki.ubuntu.com/Cordova][2].

 [2]: http://wiki.ubuntu.com/Cordova

## Razvoj platforme zahteve

Za to izpust, razvoj plosčad je treba Ubuntu pult. Ubuntu 13,10 (codename "Bezobrazan") ali kasneje je potrebno uživati poln nabor podprtih zmogljivosti.

Vi moči napeljati Cordova naprej-Ubuntu sistemov (z uporabo npm), vendar pomembno zmogljivosti so navedeni samo skozi Ubuntu, debian paketi obtorej.

## Namestitev Cordova

Dodajanje Ubuntu Cordova [Oseben paket svod][3] vaš sistem Ubuntu:

 [3]: https://launchpad.net/~cordova-ubuntu/+archive/ppa

    $ sudo add-apt-repository ppa:cordova-ubuntu/ppa
    $ sudo apt-get update
    

Namestite paket cordova-cli (in njegove odvisnosti):

    $ sudo apt-get install cordova-cli
    

## Projekt poteka dela

### Ustvarjanje projekta

    $ cordova create project1 REVERSEDNSNAME.project1 project1
    

### Premakniti v imenik projekta

    $ cd project1
    

### Dodajanje Ubuntu Platform

    $ cordova platform add ubuntu
    

### Zgraditi za Ubuntu

    $ cordova build ubuntu
    

### Zagon App

    $ cordova run ubuntu
    

### Dodaj Plugin stanja baterije

    $ cordova plugin add org.apache.cordova.battery-status