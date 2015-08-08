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

# Configuration de Parallels Desktop

Cette section indique comment configurer Parallels Desktop sur un Mac, afin que vous puissiez utiliser Cordova pour générer des applications Windows Phone.

Le [Microsoft Developer Network][1] fournit des instructions générales pour l'exécution de Windows sous Parallels Desktop. Après l'installation de Windows, procédez comme suit :

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  Dans Parallels Desktop, sélectionnez l'image de disque de Windows 8 que vous avez préparé, puis choisissez **paramètres**.

2.  Choisissez les options **général → CPUs** . Spécifiez *deux* processeurs. Spécifiez au moins 2 Go de mémoire, même si elle tombe en dehors de la plage recommandée :

    ![][2]

3.  Pour être en mesure d'exécuter l'image d'émulateur de périphérique dans la machine virtuelle de Windows 8, choisissez les options **d'optimisations** et activer la **Virtualisation imbriqués**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

Lorsque vous avez terminé ces étapes, vous êtes prêt à installer le SDK de Windows Phone. Consultez le Guide de plate-forme Windows Phone pour plus de détails.
