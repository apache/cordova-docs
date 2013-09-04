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

코르도바 1.9의 도움으로 시작 된 `CordovaActivity` , 코르도바 큰 네이티브 안 드 로이드 응용 프로그램에서 구성 요소를 사용할 수 있습니다. 안 드 로이드로이 구성 요소에 참조를 `CordovaWebView` . 1.9에서 새로운 코르도바 기반 응용 프로그램을 이후 사용에 `CordovaWebView` 여부에 관계 없이 그것의 기본 보기로 유산 `CordovaActivity` 접근 방식을 사용.

안 드 로이드 응용 프로그램 개발에 익숙하지는 WebView를 포함 하기 전에 코르도바 응용 프로그램을 개발 하는 안 드 로이드 플랫폼 안내서를 읽어 보시기 바랍니다. 안 드 로이드 코르도바 응용 프로그램을 작성 하는 데 주요 방법이 아니다. 이 지침은 현재 수동 하지만 결국 수 있습니다 자동화.

## 필수 구성 요소

*   코르도바 1.9 이상

*   안 드 로이드 SDK 최신 SDK 업데이트

## 안 드 로이드 프로젝트에서 CordovaWebView를 사용 하 여 가이드

1.  `cd`에 `/framework` 실행 하 고 `ant jar` 코르도바 항아리를 구축. 그것은으로 형성 된.jar 파일을 만듭니다 `cordova-x.x.x.jar` 에 `/framework` 디렉터리.

2.  안 드 로이드 프로젝트의 코르도바 jar를 복사 `/libs` 디렉터리.

3.  응용 프로그램의 편집 `main.xml` 파일 (아래 `/res/xml` )는 다음과 같이 표시 하는 `layout_height` , `layout_width` 및 `id` 응용 프로그램에 맞게 수정:
    
        <org.apache.cordova.CordovaWebView
            android:id="@+id/tutorialView"
            android:layout_width="match_parent"
            android:layout_height="match_parent" />
        

4.  활동 수정 구현 하는 `CordovaInterface` . 포함 된 메서드를 구현 해야 합니다. 복사를 하실 수 있습니다 `/framework/src/org/apache/cordova/CordovaActivity.java` , 또는 자신에 그들을 구현 합니다. 아래 코드 조각 인터페이스를 사용 하 여 기본 응용 프로그램을 보여 줍니다. 참조 된 뷰 id가 일치 하는 방법을 참고는 `id` 위의 XML 조각에서 지정 된 특성:
    
        CordovaViewTestActivity 활동을 확장 하는 공용 클래스 구현 CordovaInterface {CordovaWebView cwv;
            / * 활동 처음 만들 때 호출 합니다. * / @Override 공용 void onCreate(Bundle savedInstanceState) {super.onCreate(savedInstanceState);
                setContentView(R.layout.main);
                cwv = (CordovaWebView) findViewById(R.id.tutorialView);
                Config.init(this);
                cwv.loadUrl(Config.getStartUrl());
            }
        

카메라를 사용 하는 경우에, 당신은 또한 이것을 구현 해야 합니다.

        @Override 공용 void setActivityResultCallback (CordovaPlugin 플러그인) {this.activityResultCallback = 플러그인;
        } / ---를 원하는 것 결과 끝나면 활동을 시작. 이 활동 종료 하면, * onActivityResult() 메서드가 호출 됩니다.
         ** @param 명령 명령 개체 * @param 의도 시작 하 의도 * @param requestCode 콜백을 식별 작업에 전달 된 요청 코드 * / 공공 void startActivityForResult (CordovaPlugin 명령, 의도 의도, int requestCode) {this.activityResultCallback = 명령;
            this.activityResultKeepRunning = this.keepRunning;
    
            / / 멀티태스킹 켜져 있으면 다음 경우 결과 반환 하는 활동에 대 한 해제 (명령! = null) {this.keepRunning = false;
            } / / 시작 활동 super.startActivityForResult (의도, requestCode);
        } @Override / --- 때, 시작 requestCode 주는 출구, 시작 활동 * resultCode 반환, 및 그것에서 추가 데이터.
         ** @param requestCode 요청 코드 startActivityForResult(), 원래 제공 *이 결과에서 온 사람을 식별할 수 있습니다.
         * @param resultCode 정수 결과 코드는 setResult() 통해 자식 활동이 반환합니다.
         * @param 데이터는 호출자에 게 결과 데이터를 반환할 수 있습니다 한 의도 (다양 한 데이터 첨부 될 수 있습니다 의도 "여분의 것").
         * / 무효 onActivityResult (int requestCode, int resultCode 의도 의도) 보호 {super.onActivityResult (requestCode, resultCode, 의도);
            CordovaPlugin 콜백 = this.activityResultCallback;
            만약 (콜백! = null) {callback.onActivityResult (requestCode, resultCode, 의도);
            }
        }
    

마지막으로, 스레드 풀에 추가 해야, 그렇지 않으면 플러그인에서 실행 스레드가:

        @Override
        public ExecutorService getThreadPool() {
            return threadPool;
        }
    

1.  안 드 로이드 프로젝트의 응용 프로그램의 HTML과 자바 스크립트 파일을 복사 `/assets/www` 디렉터리.

2.  복사 `config.xml` 에서 `/framework/res/xml` 를 프로젝트의 `/res/xml` 디렉터리.