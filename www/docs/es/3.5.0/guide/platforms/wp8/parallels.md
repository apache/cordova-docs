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

# Configuración de Parallels Desktop

Esta sección le muestra cómo configurar Parallels Desktop en un Mac para que Córdoba puede utilizar para generar aplicaciones de Windows Phone.

La [Microsoft Developer Network][1] proporciona instrucciones generales sobre cómo ejecutar Windows bajo Parallels Desktop. Después de instalar Windows, siga estos pasos:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945424

1.  Dentro de Parallels Desktop, seleccione la imagen de disco de Windows 8 que ha preparado y elija la **configuración**.

2.  Elija las opciones **→ General CPUs** . Especificar *dos* CPUs. Especificar al menos 2GB de memoria, incluso si cae fuera del rango recomendado:

    ![][2]

3.  Para poder ejecutar el dispositivo emulador de imagen dentro de la máquina virtual de Windows 8, elija las opciones de **optimización** y permiten **Virtualización anidados**.

    ![][3]

 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_cpu_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/parallel_optimize_opts.png

Una vez que complete estos pasos, estás listo para instalar el SDK de Windows Phone. Consulte a la guía de plataforma de Windows Phone para más detalles.
