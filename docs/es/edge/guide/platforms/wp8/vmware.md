--licencia: licencia a la Apache Software Foundation (ASF) bajo acuerdos de licencia de uno o más colaborador. Consulte el archivo aviso distribuido con este trabajo para información adicional sobre la propiedad de derechos de autor. El ASF licencias este archivo a usted bajo la licencia Apache, versión 2.0 (la "licencia"); Usted no puede usar este archivo excepto en cumplimiento de la licencia. Usted puede obtener una copia de la licencia en

           http://www.apache.org/licenses/LICENSE-2.0 a menos que requerido por la ley aplicable o por escrito, software distribuido bajo la licencia se distribuye en un "Tal cual" base, sin garantías o condiciones de ninguna clase, expresa o implícita.  Ver la licencia para el lenguaje específico que regulan los permisos y limitaciones
    

## bajo la licencia.

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
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

Una vez que complete estos pasos, entonces estás listo para instalar el SDK de Windows Phone. Consulte a la guía de plataforma de Windows Phone para más detalles.