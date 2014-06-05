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

# Android WebViews

Esta sección le muestra cómo incrustar un componente WebView Cordova habilitado dentro de una aplicación para Android más grande. Para más detalles sobre cómo estos componentes pueden comunicarse entre sí, vea aplicación Plugins.

Si no está familiarizado con Android, primero debe familiarizarse con la guía de la plataforma Android y tiene el SDK de Android más reciente instalado antes de intentar la opción de desarrollo más inusual de incrustar un WebView. A partir de Córdoba 1.9, la plataforma Android se basa en una `CordovaWebView` componente, que se basa en un legado `CordovaActivity` componente que data de antes de la versión 1.9.

1.  Para seguir estas instrucciones, asegúrate de que tienes la última distribución de Córdoba. Descargar desde [cordova.apache.org][1] y descomprime su paquete de Android.

2.  Desplácese hasta el paquete Android `/framework` Directorio y ejecute `ant jar` . Crea el Cordova `.jar` archivo, formado como`/framework/cordova-x.x.x.jar`.

3.  Copia el `.jar` archivo del proyecto Android `/libs` Directorio.

4.  Agregar lo siguiente a la aplicación `/res/xml/main.xml` archivo, con el `layout_height` , `layout_width` y `id` modificado para adaptarse al uso:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  Modificar la actividad de modo que implementa el `CordovaInterface` . Se deben implementar los métodos incluidos. Puede que desee copiar desde `/framework/src/org/apache/cordova/CordovaActivity.java` , o más implementarlas en tu propio. El siguiente fragmento de código muestra una aplicación básica que se basa en la interfaz. Observe cómo coincide con el id de referencia ver el `id` atributo especificado en el fragmento de XML se muestra arriba:
    
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
        

6.  Si la aplicación necesita usar la cámara, implementar los siguientes:
    
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
        

7.  Finalmente, no olvide añadir el grupo de subprocesos, de lo contrario plugins no tienen ningún subproceso en el que se ejecute:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  Copia archivos HTML y JavaScript de la aplicación del proyecto Android `/assets/www` Directorio.

9.  Copia el `config.xml` archivo de `/framework/res/xml` para el proyecto `/res/xml` Directorio.

 [1]: http://cordova.apache.org