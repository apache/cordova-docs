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

# 아마존 화재 OS WebViews

3.0.0과 함께 시작 아마존 화재 운영 체제 응용 프로그램에 구성 요소로 코르도바를 사용할 수 있습니다. 아마존 화재 OS로이 구성 요소를 참조 `CordovaWebView` . `CordovaWebView`오픈 소스 크롬 프로젝트에 내장 된 아마존 WebView를 확장 합니다. 이 기능을 활용 하 여 귀하의 웹 애플 리 케이 션 최신 웹 런타임 엔진에서 실행 되는 최신 HTML5 웹 표준을 이용할 수 있다.

## 필수 구성 요소

*   코르 도우 바 3.0.0 이상

*   안 드 로이드 SDK 최신 SDK 업데이트

*   아마존 WebView SDK

## CordovaWebView를 사용 하 여 아마존 화재 OS 프로젝트 안내

1.  다운로드 및 [아마존 WebView SDK][1] 를 확장 한 다음 awv_interface.jar에 복사 `/framework/libs` 디렉터리. 라이브러리 만들기 / 폴더 존재 하지 않는 경우.

2.  `cd`에 `/framework` 실행 하 고 `ant jar` 코르도바 항아리를 구축. 그것은으로 형성 된.jar 파일을 만듭니다 `cordova-x.x.x.jar` 에 `/framework` 디렉터리.

3.  응용 프로그램의 편집 `main.xml` 파일 (아래 `/res/layout` )는 다음과 같이 표시 하는 `layout_height` , `layout_width` 및 `id` 응용 프로그램에 맞게 수정:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  활동 수정 구현 하는 `CordovaInterface` . 포함 된 메서드를 구현 해야 합니다. 복사를 하실 수 있습니다 `/framework/src/org/apache/cordova/CordovaActivity.java` , 또는 자신에 그들을 구현 합니다. 아래 코드 조각 인터페이스를 사용 하 여 기본 응용 프로그램을 보여 줍니다. 참조 된 뷰 id가 일치 하는 방법을 참고는 `id` 위의 XML 조각에서 지정 된 특성:
    
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
        

 [1]: https://developer.amazon.com/sdk/fire/IntegratingAWV.html#installawv

카메라를 사용 하는 경우에, 당신은 또한 이것을 구현 해야 합니다.

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
    

마지막으로, 스레드 풀에 추가 해야, 그렇지 않으면 플러그인에서 실행 스레드가:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  아마존 화재 운영 체제 프로젝트의 응용 프로그램의 HTML과 자바 스크립트 파일을 복사 `/assets/www` 디렉터리.

2.  복사 `config.xml` 에서 `/framework/res/xml` 를 프로젝트의 `/res/xml` 디렉터리.