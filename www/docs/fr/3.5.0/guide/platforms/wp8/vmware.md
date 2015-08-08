---
license: Licensed to the Apache Software Foundation (ASF) under one
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
---

# Configuration de VMWare Fusion

Cette section indique comment configurer VMWare Fusion sur un Mac, afin que vous puissiez utiliser Cordova pour générer des applications Windows Phone.

Le [Microsoft Developer Network][1] fournit des instructions générales pour l'exécution de Windows sous VMWare Fusion. Après l'installation de Windows, procédez comme suit :

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  Dans VMWare Fusion, sélectionnez l'image disque de Windows 8 vous avez préparé et choisissez **paramètres**.

2.  Choisissez les options de configuration de **processeurs et la mémoire** . Assurez-vous de spécifier *deux* cœurs de processeur et pour **permettre aux applications d'hyperviseur dans cette machine virtuelle**:

    ![][2]

    L'émulateur de Windows Phone seul utilise la moitié d'un mégaoctet de mémoire, donc globalement, que vous devez réserver au moins 2 Go pour VMWare.

3.  Choisissez les paramètres **avancés** . Activez le **moteur de virtualisation privilégiées : Intel VT-x avec EPT** option :

    ![][3]

4.  Modifiez le fichier *.vmx* pour ajouter ou modifier les paramètres suivants :

        Hypervisor.cpuid.v0 = « FALSE » mce.enable = « TRUE » vhv.enable = « TRUE »


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

Lorsque vous avez terminé ces étapes, vous êtes alors prêt à installer le SDK de Windows Phone. Consultez le Guide de plate-forme Windows Phone pour plus de détails.
