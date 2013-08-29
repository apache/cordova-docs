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

Partir de Cordova 1,9, avec l'aide de la `CordovaActivity` , vous pouvez utiliser Cordova comme composant dans une application Android native plus grande. Android fait référence à cet élément comme le `CordovaWebView` . Nouvelles applications basées sur Cordova de 1,9 à partir servir la `CordovaWebView` sa vue principale, quel que soit l'approche héritée de `CordovaActivity` est utilisé.

Si vous n'êtes pas familier avec le développement d'applications Android, veuillez lire le Guide de la plate-forme Android au développement d'une Application de Cordova avant d'essayer d'inclure une WebView. Il n'est pas le principal moyen de créer des applications Android Cordova. Ces instructions sont actuellement manuelles, mais peut être éventuellement être automatisée.

## Conditions préalables

*   Cordova 1,9 ou supérieur

*   Android SDK mis à jour vers la dernière version du SDK

## Guide d'utilisation de CordovaWebView dans un projet Android

1.  `cd` en `/framework` et exécutez le `jar de fourmi` pour construire le bocal de cordova. Il crée le fichier .jar formé comme `cordova-x.x.x.jar` dans le `/framework` répertoire.

2.  Copiez-y le bocal de cordova de votre projet Android `/libs` répertoire.

3.  Modifiez le fichier `main.xml` de votre application (sous `/res/xml`) pour ressembler à ce qui suit, avec le `layout_height`, la `layout_width` et l' `id` modifié pour convenir à votre application :
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  Modifier votre activité de sorte qu'il met en œuvre le `CordovaInterface`. Vous devez implémenter les méthodes inclus. Vous pouvez les copier de `/framework/src/org/apache/cordova/CordovaActivity.java`, ou leur mise en œuvre sur votre propre. Le fragment de code ci-dessous montre une application qui utilise l'interface de base. Notez comment la vue référencée l'id correspond à l'attribut `id` spécifié dans le fragment XML indiqué ci-dessus :
    
        public class que cordovaviewtestactivity étend l'activité implémente CordovaInterface {CordovaWebView cwv ;
            / * Appelée lorsque l'activité est d'abord créée. * / @Override public void onCreate(Bundle savedInstanceState) {super.onCreate(savedInstanceState) ;
                setContentView(R.layout.main) ;
                cwv = findViewById(R.id.tutorialView) (CordovaWebView) ;
                Config.init(this) ;
                cwv.loadUrl(Config.getStartUrl()) ;
            }
        

Si vous utilisez l'appareil photo, vous devez également implémenter ceci :

        @Override public void setActivityResultCallback (plugin CordovaPlugin) {this.activityResultCallback = plugin ;
        } / ** * Lancer une activité pour laquelle vous désirez un résultat quand il fini. Lorsque le sort de cette activité, * votre méthode onActivityResult() est appelée.
         ** @param command de l'objet command * @param intention l'intention de commencer * @param requestCode le code de demande qui est passé au rappel pour identifier l'activité * / public void startActivityForResult (commande CordovaPlugin, intention intention, int requestCode) {this.activityResultCallback = command ;
            this.activityResultKeepRunning = this.keepRunning ;
    
            / / Si le multitâche activé, puis désactivez-le pour des activités qui retournent des résultats si (commande! = null) {this.keepRunning = false ;
            } / / Début de l'activité super.startActivityForResult (intention, requestCode) ;
        } @Override / ** * appelée lorsqu'une activité que vous avez lancé sorties, vous donnant la requestCode vous avez commencé avec, * le resultCode il retourné et toute autre donnée d'elle.
         ** @param requestCode le code de demande fourni à l'origine à startActivityForResult(), * vous permettant de l'identifier venus de ce résultat.
         @param resultCode le code de résultat entier retourné par l'activité de l'enfant par le biais de ses setResult().
         @param données une intention, qui peut renvoyer des données de résultat à l'appelant (diverses données peuvent être attachées à l'intention de "extras").
         * / protected void onActivityResult (int requestCode, int resultCode, intention intention) {super.onActivityResult (requestCode, resultCode, intention) ;
            Rappel de CordovaPlugin = this.activityResultCallback ;
            Si (rappel! = null) {callback.onActivityResult (requestCode, resultCode, intention) ;
            }
        }
    

Enfin, n'oubliez pas d'ajouter le pool de threads, sinon les plugins n'ont aucun thread d'exécuter sur :

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  Copiez les fichiers HTML et JavaScript de votre application dans le répertoire `` www/actifs/de votre projet Android.

2.  Copier `config.xml` `/framework/res/xml` dans le répertoire `/res/xml` de votre projet.