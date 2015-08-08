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

# Configuración de VMWare Fusion

Esta sección le muestra cómo configurar VMWare Fusion en un Mac para que Córdoba puede utilizar para generar aplicaciones de Windows Phone.

La [Microsoft Developer Network][1] proporciona instrucciones generales sobre cómo ejecutar Windows bajo VMWare Fusion. Después de instalar Windows, siga estos pasos:

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  Dentro de VMWare Fusion, seleccione la imagen de disco de Windows 8 que ha preparado y elija **configuración**.

2.  Elija las opciones de configuración de **los procesadores y memoria** . Asegúrese de especificar *dos* núcleos de procesador y que **permiten a las aplicaciones de hipervisor en esta máquina Virtual**:

    ![][2]

    El emulador de Windows Phone solo utiliza medio megabyte de memoria, así que en general que se debe reservar por lo menos 2GB para VMWare.

3.  Elija la configuración **avanzada** . Activar el **motor de virtualización preferido: Intel VT-x con EPT** opción:

    ![][3]

4.  Modificar el archivo *VMX* para agregar o modificar los siguientes parámetros:

        hypervisor.CPUID.V0 = "FALSE" mce.enable = "TRUE" vhv.enable = "TRUE"


 [2]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: {{ site.baseurl }}/static/img/guide/platforms/wp8/vmware_advanced_opts.png

Una vez que complete estos pasos, entonces estás listo para instalar el SDK de Windows Phone. Consulte a la guía de plataforma de Windows Phone para más detalles.
