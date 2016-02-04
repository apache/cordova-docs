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

title: Amazon fuego OS WebViews
---

# Amazon fuego OS WebViews

Comenzando con 3.3.0, puede utilizar Cordova como componente de aplicaciones de Amazon fuego OS. Amazon fuego OS hace referencia a este componente como `CordovaWebView` . `CordovaWebView`se extiende WebView de Amazon que se construye en el cromo proyecto de código abierto. Aprovechando esta característica, sus aplicaciones web pueden utilizar los últimos estándares web HTML5 en un motor de tiempo de ejecución web moderno.

Si no está familiarizado con Amazon fuego OS, primero debe familiarizarse con la Amazonía fuego OS Platform Guide y tener instalado los últimos SDK antes de intentar la opción de desarrollo más inusual de incrustar un WebView.

## Pre-requisitos

*   Cordova 3.3.0 o mayor

*   SDK de Android actualizado al último SDK

*   Amazon WebView SDK

## Guía de uso de CordovaWebView en un proyecto Amazonas fuego OS

1.  Para seguir estas instrucciones, asegúrate de que tienes la última distribución de Córdoba. Descargar desde [cordova.apache.org][1] y descomprime su paquete de Amazon fuego OS.

2.  Descargar y expandir el [Amazonas WebView SDK][2] , luego copiar el awv_interface.jar en `/framework/libs` Directorio. Crear un libs / carpeta si no existe.

3.  Desplácese hasta el paquete `/framework` Directorio y ejecute `ant jar` . Crea el Cordova `.jar` archivo, formado como`/framework/cordova-x.x.x.jar`.

4.  Copia el `.jar` archivo del proyecto Android `/libs` Directorio.

5.  Agregar lo siguiente a la aplicación `/res/xml/main.xml` archivo, con el `layout_height` , `layout_width` y `id` modificado para adaptarse al uso:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

6.  Modificar su actividad para que implementa la `CordovaInterface`. Debe implementar los métodos incluidos. Puede que desee copiar desde `/framework/src/org/apache/cordova/CordovaActivity.java` , o implementarlas en tu propio. El fragmento de código siguiente muestra una aplicación básica que utiliza la interfaz. Observe cómo el id de referencia vista coincide con el atributo `id` especificado en el fragmento XML que se muestra arriba:
    
        public class CordovaViewTestActivity extends Activity implements CordovaInterface {
            CordovaWebView cwv;
            /* Called when the activity is first created. */
            @Override
            public void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

 [1]: http://cordova.apache.org
 [2]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

Si se utiliza la cámara, también debe implementar esto:

        @Override
        public void setActivityResultCallback(CordovaPlugin plugin) {
            this.activityResultCallback = plugin;
        }
        /**
         * Launch an activity for which you would like a result when it finished. When this activity exits,
         * your onActivityResult() method is called.
         *
         * @param command           The command object
         * @param intent            The intent to start
         * @param requestCode       The request code that is passed to callback to identify the activity
         */
        public void startActivityForResult(CordovaPlugin command, Intent intent, int requestCode) {
            this.activityResultCallback = command;
            this.activityResultKeepRunning = this.keepRunning;
    
            // If multitasking turned on, then disable it for activities that return results
            if (command != null) {
                this.keepRunning = false;
            }
    
            // Start activity
            super.startActivityForResult(intent, requestCode);
        }
    
        @Override
        /**
         * Called when an activity you launched exits, giving you the requestCode you started it with,
         * the resultCode it returned, and any additional data from it.
         *
         * @param requestCode       The request code originally supplied to startActivityForResult(),
         *                          allowing you to identify who this result came from.
         * @param resultCode        The integer result code returned by the child activity through its setResult().
         * @param data              An Intent, which can return result data to the caller (various data can be attached to Intent "extras").
         */
        protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
            super.onActivityResult(requestCode, resultCode, intent);
            CordovaPlugin callback = this.activityResultCallback;
            if (callback != null) {
                callback.onActivityResult(requestCode, resultCode, intent);
            }
        }
    

Finalmente, no olvide añadir el grupo de subprocesos, de lo contrario los plugins no tienen hilos para correr en:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copia archivos HTML y JavaScript de la aplicación de su proyecto Amazonas fuego OS `/assets/www` Directorio.

2.  Copia `config.xml` de `/framework/res/xml` a de su proyecto `/res/xml` Directorio.