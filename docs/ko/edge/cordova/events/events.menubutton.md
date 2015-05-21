* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. 저작권에 대한 추가 정보를 보려면 NOTICE 파일을 보십시오. ASF는 이 파일을 아파치 라이센스 2.0 (이하 "라이센스") 하에 배포합니다. 라이센스에 허가되지 않은 용도로는 이 파일을 사용하실 수 없습니다. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# menubutton

이벤트는 사용자가 메뉴 버튼을 누를 때 발생 합니다.

    document.addEventListener("menubutton", yourCallbackFunction, false);
    

## 세부 정보

이벤트 처리기를 적용 기본 메뉴 버튼 동작을 재정의 합니다.

일반적으로 응용 프로그램을 사용 해야 합니다 `document.addEventListener` 한번 이벤트 리스너를 연결 하는 `deviceready` 이벤트가 발생 합니다.

## 지원 되는 플랫폼

*   아마존 화재 운영 체제
*   안 드 로이드
*   블랙베리 10

## 빠른 예제

    document.addEventListener("menubutton", onMenuKeyDown, false);
    
    function onMenuKeyDown() {
        // Handle the back button
    }
    

## 전체 예제

    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                          "http://www.w3.org/TR/html4/strict.dtd">
    <html>
      <head>
        <title>Menu Button Example</title>
    
        <script type="text/javascript" charset="utf-8" src="cordova.js"></script>
        <script type="text/javascript" charset="utf-8">
    
        // Wait for device API libraries to load
        //
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
    
        // device APIs are available
        //
        function onDeviceReady() {
            // Register the event listener
            document.addEventListener("menubutton", onMenuKeyDown, false);
        }
    
        // Handle the menu button
        //
        function onMenuKeyDown() {
        }
    
        </script>
      </head>
      <body onload="onLoad()">
      </body>
    </html>