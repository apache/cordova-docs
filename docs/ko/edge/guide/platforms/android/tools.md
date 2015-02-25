* * *

면허: 아파치 소프트웨어 재단 (ASF)에 하나 이상의 참가자 사용권 계약 하에서 허가 된. 저작권에 대한 추가 정보를 보려면 NOTICE 파일을 보십시오. ASF는 이 파일을 아파치 라이센스 2.0 (이하 "라이센스") 하에 배포합니다. 라이센스에 허가되지 않은 용도로는 이 파일을 사용하실 수 없습니다. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# 안 드 로이드 쉘 도구 가이드

이 가이드에는 코르도바의 플랫폼을 중심으로 셸 도구 세트를 사용 하 여 안 드 로이드 애플 리 케이 션을 개발 하는 방법을 보여 줍니다. 이 개발 경로 개요에서 설명한 명령줄 인터페이스에 설명 된 크로스 플랫폼 CLI 도구 보다 개발 옵션의 넓은 범위를 제공할 수 있습니다. 예를 들어, 네이티브 구성 요소와 함께 사용자 지정 코르도바 WebView를 배포 하는 경우 셸 도구를 사용 해야 합니다. 개발 경로 중 하나를 사용 하기 전에 먼저 구성 해야 안 드 로이드 SDK 환경 안 드 로이드 플랫폼 가이드에 설명 된 대로.

안 드 로이드에 대 한 셸 도구를 사용 하려면 [cordova.apache.org][1]에서 코르도바를 다운로드. 다운로드는 각 플랫폼에 대 한 별도 아카이브를 포함합니다. 대상으로 하 고 싶은 각 확장 `android` 이 경우. 관련 도구는 일반적으로 최상위 수준에서 사용할 수 있는 `bin` 자세한 지시 사항에 대 한 디렉터리, 그렇지 않으면 **README** 파일을 참조 하십시오.

 [1]: http://cordova.apache.org

이러한 도구를 사용 하 여 작성, 구축 및 실행 안 드 로이드 애플 리 케이 션 수 있습니다. 모든 플랫폼에 걸쳐 플러그인 기능을 활성화 하는 추가 명령줄 인터페이스에 대 한 정보를 관리 플러그인을 사용 하 여 Plugman를 참조 하십시오. 플러그인을 개발 하는 방법에 대 한 내용은 응용 프로그램 플러그인을 참조 하십시오.

## 프로젝트 만들기

실행은 `create` 프로젝트, 리버스 도메인 스타일 패키지 식별자 및 응용 프로그램의 표시 이름에 대 한 기존 경로 지정 하는 명령을. 다음은 맥/리눅스와 윈도우에 대 한 구문이입니다.

        $ /path/to/cordova-android/bin/create /path/to/project com.example.project_name ProjectName
    
        C:\>\path\to\cordova-android\bin\create.bat \path\to\project com.example.project_name ProjectName
    

## 빌드

이 청소 다음 프로젝트를 빌드합니다.

맥/리눅스 또는 윈도우에서 디버그:

        $ /path/to/project/cordova/build --debug
    
        C:\>\path\to\project\cordova\build.bat --debug
    

맥/리눅스 또는 창 출시:

        $ /path/to/project/cordova/build --release
    
        C:\>\path\to\project\cordova\build.bat --release
    

## 응용 프로그램 실행

`run`명령 다음 *선택적* 매개 변수:

*   대상 사양입니다. 이것은 포함 한다 `--emulator` , `--device` , 또는`--target=<targetID>`.

*   빌드 사양. 이것은 포함 한다 `--debug` , `--release` , 또는`--nobuild`.
    
        $ /path/to/project/cordova/run [Target] [Build]
        
        C:\>\path\to\project\cordova\run.bat [Target] [Build]
        

적어도 하나의 안 드 로이드 가상 장치, 그렇지 않으면으로 그렇게 하 라는 메시지가 만들 다는 것을 확인은 `android` 명령. 여러 개의 AVD를 대상으로 사용할 수 있는 경우 하나를 선택 하 라는 메시지가 표시. 기본적으로는 `run` 명령 검색 연결 된 장치 또는 현재 실행 중인 에뮬레이터 없는 장치가 발견 되 면.

## 로깅

        $ /path/to/project/cordova/log
    
        C:\>\path\to\project\cordova\log.bat
    

## 청소

        $ /path/to/project/cordova/clean
    
        C:\>\path\to\project\cordova\clean.bat
    

## 개미의 수동 사용

와 같은 커맨드 라인에서 직접 개미를 호출 하려는 경우 `ant debug install` , 개미 명령에 추가 매개 변수를 지정 하려면:

        ant debug install -Dout.dir=ant-build -Dgen.absolute.dir=ant-gen
    

코르도바의 Ant 스크립트에 의해 사용 되는 디렉터리 기본값과 다른 때문입니다. 개미가 대 커맨드 라인에서 실행 될 때 충돌을 방지 하려면 이렇게 Eclipse/ADT 내부.

사용 하는 경우 이러한 추가 매개 변수가 자동으로 당신을 위해 추가 되는 `cordova/build` 및 `cordova/run` 스크립트는 위에서 설명한. 사용 하는 것이 좋습니다 이런 이유로 `cordova/build` 및 `cordova/run` 명령줄에서 직접 호출 개미 대신 스크립트.

## Gradle (실험적인!) 있는 건물

안 드 로이드에 대 한 코르도바 지금 [Gradle][2]건물을 지원합니다. 코르 도우 바에서 선택 사항 3.x를, 그러나 활성화 됩니다 기본적으로 미래에, 아마도 코르도바 4.0. 빌드 시스템 환경 변수는 쉘에 대 한 설정 또는 함께 명령줄에서 지정할 수 있는으로 활성화는 `cordova build` 명령.

 [2]: http://www.gradle.org/

Gradle 빌드 규칙은 여전히 개발 하 고 있을 것 이다 큰 변화에 따라 하기 전에 Gradle는 기본 시스템을 구축 하십시오. 개발자는 그것을 시도 하 고, 그것으로 실험 하는 것이 좋습니다 하지만 자신의 생산 빌드 시스템 위에 기초 발생할 수 있습니다 아마 몇 가지 주요 변경 사항을 다음 몇 출시를 통해 안정화 하기 전에.

### 관련 환경 변수

*   **안 드 로이드 _ 구축**
    
    이 변수는 빌드 시스템을 사용 하는 프로젝트 빌드를 제어 합니다. 에 있는 값 중 하나 걸릴 수 있습니다 `ant` 또는`gradle`.
    
    경우 설정 하지, 그것은 현재 기본적으로 `ant` , 그러나이 변경 것으로 예상 된다.

### 다른 환경 변수 (일반적으로 필요가 없습니다 설정)

*   **안 드 로이드 _ 홈**
    
    이 안 드 로이드 SDK를 포함 하는 디렉터리를 설정 해야 합니다. 코르 도우 바가에 대 한 기본 설치 위치에 뿐만 아니라 그것은 정상적으로 설정이 필요 하지 않습니다 그래서 당신의 경로 변수에 보고 보인다.

*   **JAVA _ 홈**
    
    일부 컴퓨터에서이 Gradle 자바 컴파일러를 찾을 수 있도록 설정 해야 합니다.

### Gradle 속성

빌드를 사용자 지정 하려면이 [속성][3] 을 설정할 수 있습니다.

 [3]: http://www.gradle.org/docs/current/userguide/tutorial_this_and_that.html

*   **cdvBuildMultipleApks**
    
    이 설정 되어 있으면 여러 APK 파일이 생성 됩니다: 하나씩 라이브러리 프로젝트에서 지 원하는 네이티브 플랫폼 (x86, 팔, 등). 이 프로젝트는 크게 생성 된 APK의 크기를 증가 시킬 수 있는 큰 네이티브 라이브러리를 사용 하는 경우에 중요할 수 있습니다.
    
    설정 되지 않은 경우, 다음 모든 장치에서 사용할 수 있는 단일 APK 생성 될 것 이다.

*   **cdvVersionCode**
    
    VersionCode 설정 재정의`AndroidManifest.xml`

*   **cdvReleaseSigningPropertiesFile**
    
    릴리스에 대 한 서명 정보를 포함 하는.properties 파일 경로를 작성 합니다. 파일은 다음과 같습니다.
    
        storeFile=relative/path/to/keystore.p12 storePassword = SECRET1 storeType pkcs12 keyAlias = DebugSigningKey keyPassword = SECRET2 =
        
    
    `storePassword`그리고 `keyPassword` , 선택적인 및 생략 하는 경우에 대 한 메시지가 표시 됩니다.

*   **cdvDebugSigningPropertiesFile**
    
    같지만 cdvReleaseSigningPropertiesFile, 디버그 빌드. 다른 개발자와 서명 키를 공유 해야 할 때 유용 합니다.

*   **cdvMinSdkVersion**
    
    값을 재정의 `minSdkVersion` 에 `AndroidManifest.xml` . 여러 만들 때 유용한 APKs SDK 버전에 따라.

*   **cdvBuildToolsVersion**
    
    재정의 자동으로 검색 된 `android.buildToolsVersion` 값.

*   **cdvCompileSdkVersion**
    
    재정의 자동으로 검색 된 `android.compileSdkVersion` 값.

### Build.gradle 확장

사용자 지정 하려는 경우 `build.gradle` , 오히려 보다 직접 편집 만들어야 합니다 라는 형제 파일 `build-extras.gradle` . 이 파일은 메인에 의해 포함 될 것입니다 `build.gradle` 때 제시 합니다. 여기에 예가입니다.

    # 예제 빌드 extras.gradle #이이 파일은 'build.gradle' ext.cdvDebugSigningPropertiesFile의 시작 부분에 포함 = '.../../ 안 드 로이드-디버그-keys.properties' # 설정,이 기능은 코드를 'build.gradle' ext.postBuildExtras의 끝에 실행 허용 = {android.buildTypes.debug.applicationIdSuffix = '.debug'}
    

### 예제 빌드

    수출 ANDROID_BUILD gradle 수출 ORG_GRADLE_PROJECT_cdvMinSdkVersion = 14 코르도바 빌드 안 드 로이드--gradleArg = PcdvBuildMultipleApks = = true