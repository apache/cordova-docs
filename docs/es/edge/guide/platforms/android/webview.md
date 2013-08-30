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

Desde Córdoba 1.9, con la asistencia de la `CordovaActivity`, puede utilizar Cordova como un componente en una aplicación Android nativa más grande. Android se refiere a este componente como el `CordovaWebView`. Nuevas aplicaciones basadas en Córdoba de 1,9 en adelante utilizar el `CordovaWebView` como su principal punto de vista, independientemente de si el legado `CordovaActivity` enfoque se utiliza.

Si no está familiarizado con el desarrollo de aplicaciones Android, por favor lea a la guía de plataforma Android para desarrollar una aplicación Cordova antes de intentar incluir un WebView. No es la forma principal de autor aplicaciones Android Cordova. Estas instrucciones están actualmente manuales, pero eventualmente se puede automatizarse.

## Prerequisitos

*   Córdoba 1.9 o mayor

*   SDK de Android actualizado al último SDK

## Guía de uso de CordovaWebView en un proyecto de Android

1.  `cd`en `/framework` y ejecutar `ant jar` para construir la jarra cordova. Se crea el archivo .jar formado como `cordova-x.x.x.jar` en el `/framework` Directorio.

2.  Copie la jarra cordova en su proyecto Android `/libs` Directorio.

3.  Editar de la aplicación `main.xml` archivo (bajo `/res/xml` ) para ver como el siguiente, con el `layout_height` , `layout_width` y `id` modificado para adaptarse a su aplicación:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modificar su actividad para que implementa el `CordovaInterface` . Debe implementar los métodos incluidos. Puede que desee copiar desde `/framework/src/org/apache/cordova/CordovaActivity.java` , o implementarlas en tu propio. El fragmento de código siguiente muestra una aplicación básica que utiliza la interfaz. Observe cómo coincide con el id de referencia ver el `id` atributo especificado en el fragmento de XML se muestra arriba:
    
        público clase que cordovaviewtestactivity amplía actividad implementa CordovaInterface {CordovaWebView cwv;
            / * Se llama cuando la actividad se crea por primera vez. * / @Override public void onCreate(Bundle savedInstanceState) {Super.OnCreate;
                setContentView(R.layout.main);
                VPT = findViewById(R.id.tutorialView) (CordovaWebView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

Si se utiliza la cámara, también debe implementar esto:

        @Override public vacío setActivityResultCallback (plugin CordovaPlugin) {this.activityResultCallback = plugin;
        } / ** * Lanzar una actividad para la cual desea un resultado cuando termine. Cuando sale de esta actividad, * se llama a su método onActivityResult().
         ** @param comando objeto command * @param intención la intención de empezar * @param requestCode el código de solicitud que se pasa al callback para identificar la actividad * / public void startActivityForResult (comando CordovaPlugin, intención de Dolo, int requestCode) {this.activityResultCallback = comando;
            this.activityResultKeepRunning = this.keepRunning;
    
            / / Si multitarea activado, desactívelo para actividades que devuelven resultados si (comando! = null) {this.keepRunning = false;
            } / / Comenzar la actividad super.startActivityForResult (intención, requestCode);
        } @Override / ** * cuando una actividad se ha iniciado las salidas, dando la requestCode que empezó con * la resultCode volvió y cualquier dato adicional de él.
         ** @param requestCode el código de solicitud suministrado originalmente a startActivityForResult(), * permitiéndole identificar provenientes de este resultado.
         resultCode * @param el código de resultado entero devuelto por la actividad del niño a través de su setResult().
         * @param datos una intención, que puede devolver datos de resultado a la persona que llama (diversos datos pueden acoplarse a propósito "extras").
         * / protegido void onActivityResult (int requestCode, int resultCode, intención intención) {super.onActivityResult (requestCode, resultCode, intención);
            Devolución de llamada CordovaPlugin = this.activityResultCallback;
            Si ("callback"! = null) {callback.onActivityResult (requestCode, resultCode, intención);
            }
        }
    

Finalmente, no olvide añadir el grupo de subprocesos, de lo contrario los plugins no tienen hilos para correr en:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copia archivos HTML y JavaScript de la aplicación de su proyecto Android `/assets/www` Directorio.

2.  Copia `config.xml` de `/framework/res/xml` a de su proyecto `/res/xml` Directorio.