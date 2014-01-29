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

# 안 드 로이드 WebViews

이 섹션에서는 더 큰 안 드 로이드 응용 프로그램 내에서 WebView 코르도바 활성화 구성 요소를 포함 하는 방법을 보여 줍니다. 어떻게 이러한 구성 요소가 서로 통신할 수 있습니다 응용 프로그램 플러그인을 참조.

안 드 로이드에 익숙하지 당신은 먼저 안 드 로이드 플랫폼 가이드를 숙지 해야 및 설치는 WebView를 포함의 더 특이 한 개발 옵션을 시도 하기 전에 최신 안 드 로이드 SDK가. 코르도바 1.9 부터는 안 드 로이드 플랫폼에 의존 한 `CordovaWebView` 는 레거시 빌드 구성 요소 `CordovaActivity` 사전 1.9 릴리스 날짜 구성 요소.

1.  이러한 지침에 따라, 최신 코르도바 분포를가지고 있는지 확인 합니다. [Cordova.apache.org][1] 에서 다운로드 하 고 그것의 안 드 로이드 패키지의 압축을 풉니다.

2.  안 드 로이드 패키지 이동 `/framework` 디렉토리 및 실행 `ant jar` . 그것은 코르도바 만듭니다 `.jar` 로 형성 된 파일`/framework/cordova-x.x.x.jar`.

3.  복사는 `.jar` 파일을 안 드 로이드 프로젝트의 `/libs` 디렉터리.

4.  다음 응용 프로그램을 추가 합니다 `/res/xml/main.xml` 파일으로는 `layout_height` , `layout_width` 및 `id` 응용 프로그램에 맞게 수정:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

5.  활동 수정 구현 하는 `CordovaInterface` . 그것은 포함 된 메서드를 구현 해야 합니다. 복사를 하실 수 있습니다 `/framework/src/org/apache/cordova/CordovaActivity.java` , 또는 그 밖에 자신에 그들을 구현 합니다. 다음 코드 조각에서는 인터페이스에 의존 하는 기본 응용 프로그램을 보여 줍니다. 참조 된 뷰 id가 일치 하는 방법을 참고는 `id` 위의 XML 조각에서 지정 된 특성:
    
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
        

6.  응용 프로그램이 카메라를 사용 하는 경우 다음을 구현 합니다.
    
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
        

7.  마지막으로, 스레드 풀에 추가 해야, 그렇지 않으면 플러그인을 실행 하는 스레드가 없으면:
    
        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
        

8.  안 드 로이드 프로젝트의 응용 프로그램의 HTML과 자바 스크립트 파일을 복사 `/assets/www` 디렉터리.

9.  복사는 `config.xml` 파일에서 `/framework/res/xml` 프로젝트의 `/res/xml` 디렉터리.

 [1]: http://cordova.apache.org