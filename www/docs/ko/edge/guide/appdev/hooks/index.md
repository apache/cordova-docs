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

title: 후크 가이드
---

# 후크 가이드

코르도바 후크 응용 프로그램 및 플러그인 개발자가 추가할 수 있는 또는 심지어 자신의 여 코르도바 명령을 사용자 지정 하는 시스템을 구축 하는 특별 한 스크립트를 나타냅니다. 후크 스크립트 특별 한 미리 정의 된 폴더에 추가 하 여 정의할 수 있는 ( `/hooks` ) 또는 구성 파일을 통해 ( `config.xml` 및 `plugin.xml` ) 다음 순서에 따라 순차적으로 실행 하 고:

  * 응용 프로그램에서 후크 `/hooks` ;
  * 응용 프로그램에서 후크 `config.xml` ;
  * 플러그인 후크`plugins/.../plugin.xml`.

**참고**: `/hooks` 디렉터리 config.xml에 plugin.xml 후크 요소에 찬성 하 여 사용 되지 않는 것으로 간주 됩니다.

## 지원 되는 연결 유형

다음 후크 유형이 지원 됩니다.

    after_build
    after_compile
    after_clean
    after_docs
    after_emulate
    after_platform_add
    after_platform_rm
    after_platform_ls
    after_plugin_add
    after_plugin_ls
    after_plugin_rm
    after_plugin_search
    after_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    after_prepare
    after_run
    after_serve
    before_build
    before_clean
    before_compile
    before_docs
    before_emulate
    before_platform_add
    before_platform_rm/
    before_platform_ls
    before_plugin_add
    before_plugin_ls
    before_plugin_rm
    before_plugin_search/
    before_plugin_install // Plugin hooks in plugin.xml are executed for a plugin being installed only
    before_plugin_uninstall // Plugin hooks in plugin.xml are executed for a plugin being uninstalled only
    before_prepare
    before_run
    before_serve
    pre_package // Windows and Windows Phone only
    

## 후크를 정의 하는 방법

### `/Hooks` 디렉토리를 통해

**참고**:이 방법은 config.xml에 plugin.xml 후크 요소에 찬성 하 여 사용 되지 않는 것으로 간주 됩니다.

해당 후크 형식이 발생 때 사용자 지정 작업을 실행, '후크' 디렉토리 안에 하위 폴더에 대 한 이름으로 후크 타입을 사용 하 여 배치 하 당신이 파일 여기에, 예를 들어 스크립트:

    # script file will be automatically executed after each build
    hooks/after_build/after_build_custom_action.js
    

이러한 후크를 사용 하 여, 그들은 항상 적재 가능한 자바 스크립트 모듈 아니라 실행 파일로 실행 됩니다. **기억**: 스크립트 실행을 경우에 확인.

### Config.xml

예를 들어 `< 훅 >` 요소를 사용 하 여 프로젝트의 `config.xml` 에 후크를 정의할 수 있습니다.

    <hook type="before_build" src="scripts/appBeforeBuild.bat" />
    <hook type="before_build" src="scripts/appBeforeBuild.js" />
    <hook type="before_plugin_install" src="scripts/appBeforePluginInstall.js" />
    
    <platform name="wp8">
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/wp8/appWP8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/wp8/appWP8BeforePluginInstall.js" />
        ...
    </platform>
    
    <platform name="windows8">
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.bat" />
        <hook type="before_build" src="scripts/windows8/appWin8BeforeBuild.js" />
        <hook type="before_plugin_install" src="scripts/windows8/appWin8BeforePluginInstall.js" />
        ...
    </platform>
    

### 플러그인 후크 (plugin.xml)

정의할 수 있습니다 플러그인 개발자로 서 그런 `plugin.xml` 에서 `< 훅 >` 요소를 사용 하 여 스크립트를 연결:

    <hook type="before_plugin_install" src="scripts/beforeInstall.js" />
    <hook type="after_build" src="scripts/afterBuild.js" />
    
    <platform name="wp8">
        <hook type="before_plugin_install" src="scripts/wp8BeforeInstall.js" />
        <hook type="before_build" src="scripts/wp8BeforeBuild.js" />
        ...
    </platform>
    

`before_plugin_install`, `after_plugin_install`, `before_plugin_uninstall` 플러그인 후크 설치/제거 하는 플러그인에 대 한 독점적으로 발사 될 것 이다.

## 스크립트 인터페이스

### Javascript

Node.js를 사용 하 여 후크를 작성 하는 경우 다음과 같은 모듈 정의 사용 해야 합니다.

```javascript
module.exports = function(context) {
    ...
}
```

Q:를 사용 하 여 scipts 비동기를 만들 수 있습니다.

```javascript
module.exports = function(context) {
    var Q = context.requireCordovaModule('q');
    var deferral = new Q.defer();

    setTimeout(function(){
      console.log('hook.js>> end');
    deferral.resolve();
    }, 1000);

    return deferral.promise;
}
```

후크 형식이 실행된 스크립트의 전체 경로 포함 하는 `컨텍스트` 개체, 연결 옵션, 코르도바와 최상위 "코르도바" 개체에 전달 된 명령줄 인수:

```json
{
  "hook": "before_plugin_install",
  "scriptLocation": "c:\\script\\full\\path\\appBeforePluginInstall.js",
  "cmdLine": "The\\exact\\command\\cordova\\run\\with arguments",
  "opts": {
    "projectRoot":"C:\\path\\to\\the\\project",
    "cordova": {
      "platforms": ["wp8"],
      "plugins": ["com.plugin.withhooks"],
      "version": "0.21.7-dev"
    },
    "plugin": {
      "id": "com.plugin.withhooks",
      "pluginInfo": {
        ...
      },
      "platform": "wp8",
      "dir": "C:\\path\\to\\the\\project\\plugins\\com.plugin.withhooks"
    }
  },
  "cordova": {...}
}

```

`context.opts.plugin` 개체는 플러그인 후크 스크립트에만 전달 됩니다.

또한 다음과 같은 방식으로 `context.requireCordovaModule` 를 사용 하 여 스크립트에 추가 코르도바 모듈을 요구할 수 있습니다.

```javascript
var Q = context.requireCordovaModule('q');
```

**참고**: 새로운 모듈 로더 스크립트 인터페이스 `config.xml` 또는 `plugin.xml` 만 통해 정의 된 `.js` 파일에 대 한 사용 됩니다. 호환성을 위해 연결 파일 `/hooks` 폴더를 통해 지정 된 노드 child_process 산란, 아래의 참조 ' 비-자바 스크립트 ' 섹션을 통해 실행 됩니다.

### 비-자바 스크립트

**참고**: 있도록 크로스-플랫폼, Node.js를 사용 하 여 후크를 쓰는 것이 좋습니다 '자바 스크립트' 섹션을 위의 참조 하십시오.

비-자바 스크립트 프로젝트의 루트 디렉터리에서 노드 child_process 산란을 통해 실행 되 고 첫 번째 인수로 루트 디렉토리 패스를가지고. 다른 모든 옵션은 환경 변수를 사용 하 여 스크립트에 전달 됩니다.

  * CORDOVA_VERSION-코르도바-CLI의 버전
  * CORDOVA_PLATFORMS-쉼표로 구분 된 목록을 명령에 적용 되는 플랫폼 (예: 안 드 로이드, ios).
  * CORDOVA_PLUGINS-의 쉼표 구분 목록 플러그인 명령에 적용 되는 Id (예: org.apache.cordova.file, org.apache.cordova.file-전송)
  * CORDOVA_HOOK-후크 실행 되는 경로
  * CORDOVA_CMDLINE-코르도바에 전달 된 정확한 명령줄 인수 (예: 코르도바 ios-실행 에뮬레이션)

스크립트를 0이 아닌 종료 코드를 반환 하는 경우 부모 코르도바 명령을 중단 됩니다.

또한, 경우에 Windows에서 작업 하는 코르도바 CLI 인터프리터를 알고 그것에 대 한 첫 번째 라인으로 당면한 라인 기대 후크 스크립트 박쥐 파일 (권장, 비 Windows 운영 체제에서 작동 하도록 스크립트를 하려는 경우) 하지 않습니다 경우에 그것은 시작 스크립트를 사용 하 여 필요한 note. 당면한 라인에는 다음 예제와 일치 해야:

    #!/usr/bin/env [name_of_interpreter_executable]
    

## 샘플 사용

이 샘플에는 코르도바 후크 사용을 추적 콘솔 출력 안 드 로이드 플랫폼에 대 한 생성 된. a p k 파일의 크기를 보여 줍니다.

빈 Cordova 애플 리 케이 션을 만들고 게 코르도바 각 플랫폼 빌드 후 `afterBuild.js` 스크립트를 실행 하려면 `config.xml` 에 다음 정의 추가 합니다.

    <hook type="after_build" src="scripts/afterBuild.js" />
    

`Scripts/afterBuild.js` 파일을 만들고 다음과 같은 구현을 추가 합니다. 우리는 후크를 통해 비동기 기능을 할 수 있는 방법을 보여 주기 위해 `fs.stat` 메서드의 비동기 버전을 사용 합니다.

    module.exports = function(ctx) {
        // make sure android platform is part of build 
        if (ctx.opts.platforms.indexOf('android') < 0) {
            return;
        }
        var fs = ctx.requireCordovaModule('fs'),
            path = ctx.requireCordovaModule('path'),
            deferral = ctx.requireCordovaModule('q').defer();
    
        var platformRoot = path.join(ctx.opts.projectRoot, 'platforms/android');
        var apkFileLocation = path.join(platformRoot, 'build/outputs/apk/android-debug.apk');
    
        fs.stat(apkFileLocation, function(err,stats) {
            if (err) {
                 deferral.reject('Operation failed');
            } else {
                console.log('Size of ' + apkFileLocation + ' is ' + stats.size +' bytes');
                deferral.resolve();
            }
        });
    
        return deferral.promise;
    };
    

위의 예에서 매개 변수 `ctx` 코르도바에 의해 전달 되 고 스크립트의 전체 경로, 대상 플랫폼, 명령줄 인수, 등 실행 컨텍스트를 나타냅니다 또한 추가 도우미 기능을 노출. 자세한 내용은 위의 `스크립트 인터페이스` 단원을 참조 하십시오.

이제 안 드 로이드 플랫폼을 추가 하 고 빌드를 실행할 수 있습니다.

    cordova platform add android
    ..
    cordova build
    ..
    Size of path\to\app\platforms\android\build\outputs\apk\android-debug.apk is 1821193 bytes
    

더 좋은 사용 예는 여기에서 찾을 수 없습니다.

<http://devgirl.org/2013/11/12/three-hooks-your-cordovaphonegap-project-needs/>