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

# Tizen platforma vodnik

Ta smernica opisuje kako zaiti ki gre gor vaš SDK razvojno okolje za uvajanje Cordova aplikacije za naprave, ki teče operacijski sistem Tizen.

## Zahteve in podporo

Tizen SDK zahteva Linux Ubuntu 10.04/10.10/11.04/11.10 (32-bit) ali Windows XP SP3/7 (32-košček).

Razvijalci uporabljajte z `cordova` utility, v povezavi z Tizen SDK. Glej The vmesnik ukazne vrstice za informacije kako umestiti to, dodajte projektov, nato gradite in objavljajte projekt.

## Namestite SDK

Download Tizen SDK od [tizen.org][1].

 [1]: https://developer.tizen.org/sdk

<!--

- (optional) Install Tizen Cordova template projects: copy the
  `/templates` directory content into the Tizen Eclipse IDE web
  templates directory (e.g:
  `/home/my_username/tizen-sdk/IDE/Templates/web`).

- __Method #2: Use Tizen Eclipse IDE Cordova Tizen project templates__
    - Launch Tizen Eclipse IDE
    - Select  __File &rarr; New &rarr; Tizen Web Project__
    - Select __User Template__ and __User defined__ items
    - Select one of the Tizen Cordova template (e.g: __CordovaBasicTemplate__)
    - Fill the __Project name__ and its target __Location__

    ![](img/guide/platforms/tizen/project_template.png)

    - Click __Finish__

    ![](img/guide/platforms/tizen/project_explorer.png)

    - Your project should now appear in the __Project Explorer__ view

-->

## Odprite projekt v SDK

1.  Začetek Tizen Eclipse IDE.

2.  Izberite **File → uvozi → Tizen spletni projekt**:

    ![][2]

3.  Pritisnite **Next**.

4.  Poskrbite, da **korenski imenik izberite** potrjena.

5.  Poskrbite, da **kopijo projekte v delovni prostor** je potrjena.

6.  Pritisnite za **brskanje** in izberite Cordova Tizen `samples` imenik projekta (kot `/cordova-basic` ):

    ![][3]

7.  Pritisnite **konča**. Vaš projekt mora zdaj uvozijo in se prikažejo v pogledu **Project Explorer** :

    ![][4]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_project.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/tizen/import_widget.png
 [4]: {{ site.baseurl }}/static/img/guide/platforms/tizen/project_explorer.png

Za obnovo projekta, desno v **Project Explorer** pogledu in izberite **Izgradnjo projekta**:

![][5]

 [5]: {{ site.baseurl }}/static/img/guide/platforms/tizen/build_project.png

V korenskem imeniku projekta naj bi ustvarili widget paket pila kot na primer *hello.wgt* .

## Razporedi na Emulator

Desno projekt v **Project Explorer** pogledu in izberite **Zaženi kot → Tizen Simulator spletnega programa**:

![][6]

 [6]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_sim_app.png

## Razporedi na napravo

*   Poskrbite, da ciljna naprava pravilno začela, povezano in konfigurirano. **Datum in čas** nastavitve morajo biti pravilno nastavljene.

*   Uporabite **Povezavo Explorer** pogled izberite cilj uvajanja uporabe: **okna → Prikaži pogled → raziskovalec povezavo**.

    ![][7]

*   Z desno miškino tipko projekta v **Project Explorer** pogled, nato izberite Zaženi kot **in rarr; Tizen spletna aplikacija**:

    ![][8]

 [7]: {{ site.baseurl }}/static/img/guide/platforms/tizen/connection_explorer.png
 [8]: {{ site.baseurl }}/static/img/guide/platforms/tizen/runas_web_app.png
