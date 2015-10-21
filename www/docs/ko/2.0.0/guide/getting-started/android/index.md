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

title: Getting Started with Android
---

Getting Started with Android
============================

이 문서는 Cordova의 개발환경을 설정하고 샘플 어플리케이션을 실행할 수 있는 방법을 설명한다. Cordova는 과거에 Phonegap으로 불리었기 때문에 일부에서 Phonegap의 이름이 남아있을 수 있다.


1. 요구사항
---------------

- 이클립스(Eclipse) 3.4+


2. Install SDK + Cordova
------------------------

- [Eclipse Classic](http://www.eclipse.org/downloads/) 를 다운로드 받고 설치한다.
- [Android SDK](http://developer.android.com/sdk/index.html) 를 다운로드받고 설치한다.
- [ADT Plugin](http://developer.android.com/sdk/eclipse-adt.html#installing)  를 다운로드받고 설치한다.
- 최신버전의 [Cordova](http://phonegap.com/download) 를 다운받고 압축을 푼다. 이제부터는 Android 디렉토리에서 작업할 것이다.


 3. Setup New Project
---------------------

- 이클립스를 실행하고 **New Project**메뉴를 선택한다.
    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/step_1.jpg)
- 새로운 어플리케이션을 지정한다.
    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/step_2.jpg)
- 어플리케이션 이름을 지정한다. 이는 프로젝트 이름과 패키지 네임스페이스로 사용된다.
    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/step_3.jpg)
- 그림대로 선택한다.
    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/step_4.jpg)
- Blank Activity 를 생선한다.
    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/step_5.jpg)
- Activity가 아무것도 상속받지 않았는지 확인한다.

- 프로젝트의 루트 디렉토리에서 두 개의 디렉토리를 생성한다.
    - **/libs**
    - **assets/www**
- 다운받은 Cordova에서 **cordova-2.0.0.js** 를 선택해 **assets/www** 에 복사한다.
- 다운받은 Cordova에서 **cordova-2.0.jar** 를 선택해  **/libs** 에 복사한다.
- 다운받은 Cordova에서 **xml** 폴더를 **/res** 에 복사한다.

- **cordova-2.0.0.jar** 를 프로젝트 Build Path 에 추가한다. 우선 /libs 디렉토리르 우클릭해서 **Build Paths/ &gt; Configure Build Path...** 로 메뉴로 이동한다. Libraries 탭을 누르고 **cordova-2.0.0.jar** 를 프로젝트에 추가한다. 바로 추가되지 않는다면 f5 를 눌러서 리프레쉬한다.
![]({{ site.baseurl }}/static/img/guide/getting-started/android/buildPath.jpg)

- **src** 폴더의 메인 Java 파일을 수정한다.
    - **import org.apache.cordova.*;** 를 추가한다.
    - 상속받는 class 를 **Activity** 에서 **DroidGap** 로 바꾼다.
    - **setContentView()** 라인을 **super.loadUrl("file:///android_asset/www/index.html");** 로 바꾼다.    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/javaSrc.jpg)

- AndroidManifest.xml 를 우클릭하고 **Open With &gt; Text Editor** 를 선택해서 파일을 연다.
- 아래의 권한설정값을 **&lt;uses-sdk.../&gt;** 와 **&lt;application.../&gt;** 태그 사이에 넣는다.

        <supports-screens
            android:largeScreens="true"
            android:normalScreens="true"
            android:smallScreens="true"
            android:resizeable="true"
            android:anyDensity="true" />
        <uses-permission android:name="android.permission.VIBRATE" />
        <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
        <uses-permission android:name="android.permission.ACCESS_LOCATION_EXTRA_COMMANDS" />
        <uses-permission android:name="android.permission.READ_PHONE_STATE" />
        <uses-permission android:name="android.permission.INTERNET" />
        <uses-permission android:name="android.permission.RECEIVE_SMS" />
        <uses-permission android:name="android.permission.RECORD_AUDIO" />
        <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
        <uses-permission android:name="android.permission.READ_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_CONTACTS" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
        <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
        <uses-permission android:name="android.permission.GET_ACCOUNTS" />
        <uses-permission android:name="android.permission.BROADCAST_STICKY" />
* 어플리케이션 권한의 담요 목록을 추가하였음에 주의하자. Google play에 커밋하기 전에 사용하지 않는 권한은 삭제해주어야 한다.
- **&lt;activity&gt;** 태그안에 아래의 구문을 붙여넣기 함으로써 orientation 변화를 사용할 수 있다.

        android:configChanges="orientation|keyboardHidden"

- 이제 AndroidManifest.xml 파일은 아래와 같이 보일 것이다.

    ![]({{ site.baseurl }}/static/img/guide/getting-started/android/manifest.png)


4. [Hello World](../webos/index.html)
--------------

- **assets/www** 디렉토리에서 **index.html** 을 생성하고 아래의 코드를 붙여넣자:

        <!DOCTYPE HTML>
        <html>
        <head>
        <title>Cordova</title>
        <script type="text/javascript" charset="utf-8" src="cordova-1.9.0.js"></script>
        </head>
        <body>
        <h1>Hello World</h1>
        </body>
        </html>

5A. 시뮬레이터에 배포하기
-----------------------

- 프로젝트에서 우클릭하여 **Run As &gt; Android Application**을 선택한다.
- 이클립스가 적합한 AVD를 선택하라고 할 것이다. 만약 없다면 생성해줘야 한다.


5B. 실제 장치에 배포하기
--------------------

- 안드로이드 장치가 컴퓨터에 연결되어 있고 USB 디버깅이 활성화되어있는지 화인한다.(**Settings &gt; Applications &gt; Development**)
- 프로젝트에서 **Run As &gt; Android Application**을 선택한다.


성공!
-----
