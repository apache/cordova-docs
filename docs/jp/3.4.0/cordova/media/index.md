<!---
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
-->

# org.apache.cordova.media

このプラグインを使用して、オーディオファイルの再生・録音機能をデバイスに提供します。

__注意__: 現在の実装方式は、メディアキャプチャー ( media capture ) の関数に関する W3C の仕様に準拠しておらず、利便上提供しているものです。
将来リリースする実装方式では、最新の W3C の仕様に準拠する予定です。また、その際、現在の API 群を廃止することも検討しています。

## インストール

    cordova plugin add org.apache.cordova.media

## サポート対象のプラットフォーム

- Android
- BlackBerry 10
- iOS
- Windows Phone 7 and 8
- Tizen
- Windows 8

## Windows Phone 特有の動作

- 1 度に 1 つのメディアファイルのみ再生できます。

- アプリ上でのメディア処理に関して、厳格な制限を課しています。詳細に関しては、 [Microsoft　サイト][url] を確認してください。

[url]: http://msdn.microsoft.com/en-us/library/windowsphone/develop/hh184838(v=vs.92).aspx

## Media

    var media = new Media(src, mediaSuccess, [mediaError], [mediaStatus]);

### パラメータ

- __src__: オーディオコンテンツを指し示す URI _(DOMString)_

- __mediaSuccess__: ( 任意 ) 再生・録音・停止等の操作を `Media` オブジェクトが完了した後に、実行するコールバック _(Function)_

- __mediaError__: ( 任意 ) エラーが発生した場合に、実行するコールバック _(Function)_


- __mediaStatus__: ( 任意  ) ステータスが変化したことを示すときに、実行するコールバック _(Function)_

### 定数

`mediaStatus` コールバックへの引数として、以下の定数のみを使用します。

- `Media.MEDIA_NONE`     = 0;
- `Media.MEDIA_STARTING` = 1;
- `Media.MEDIA_RUNNING`  = 2;
- `Media.MEDIA_PAUSED`   = 3;
- `Media.MEDIA_STOPPED`  = 4;

### メソッド

- `media.getCurrentPosition`: オーディオファイル内の現在の再生位置を返します。

- `media.getDuration`: オーディオファイルの再生時間を返します。

- `media.play`: オーディオファイルの再生を開始または再開します。

- `media.pause`: オーディオファイルを一時停止します。

- `media.release`: オペレーティングシステムのオーディオリソースを開放 ( release ) します。

- `media.seekTo`: オーディオファイル内の再生位置を動かします。

- `media.setVolume`: オーディオ再生時の音量を設定します。

- `media.startRecord`: オーディオファイルの録音を開始します。

- `media.stopRecord`: オーディオファイルの録音を停止します。

- `media.stop`: オーディオファイルの再生を停止します。

### 追加のパラメータ ( 読み取り専用 )

- __position__: オーディオ再生の位置 ( 秒単位 )
    - 再生中、自動的には値を更新しないので、 `getCurrentPosition` メソッドを呼び、値を更新します。

- __duration__: メディアの再生時間 ( 秒単位 )


## media.getCurrentPosition

オーディオファイル内の現在の再生位置を返します。また、 `Media` オブジェクト内の `position` パラメータを更新します。

    media.getCurrentPosition(mediaSuccess, [mediaError]);

### パラメータ

- __mediaSuccess__: 現在の再生位置 ( 秒単位 ) を渡して、実行するコールバック

- __mediaError__: ( 任意 ) エラーの発生時に実行するコールバック

### 例

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);

    // メディアの再生位置を一秒ごとに更新
    var mediaTimer = setInterval(function () {
        // 再生位置を取得
        my_media.getCurrentPosition(
            // success 時のコールバック
            function (position) {
                if (position > -1) {
                    console.log((position) + " sec");
                }
            },
            // error 時のコールバック
            function (e) {
                console.log("Error getting pos=" + e);
            }
        );
    }, 1000);


## media.getDuration

オーディオファイルの再生時間を秒単位で返します。再生時間を取得できない場合には、「 -1 」の値を返します。

    media.getDuration();

### 例

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);

    // 再生時間を取得
    var counter = 0;
    var timerDur = setInterval(function() {
        counter = counter + 100;
        if (counter > 2000) {
            clearInterval(timerDur);
        }
        var dur = my_media.getDuration();
        if (dur > 0) {
            clearInterval(timerDur);
            document.getElementById('audio_duration').innerHTML = (dur) + " sec";
        }
    }, 100);


## media.pause

オーディオファイルの再生を一時停止します。

    media.pause();


### 例

    // オーディオ再生
    //
    function playAudio(url) {
        // URL で指定したオーディオファイルを再生
        var my_media = new Media(url,
            // success 時のコールバック
            function () { console.log("playAudio():Audio Success"); },
            // error 時のコールバック
            function (err) { console.log("playAudio():Audio Error: " + err); }
        );

        // オーディオの再生
        my_media.play();

        // 10 秒後に一時停止
        setTimeout(function () {
            media.pause();
        }, 10000);
    }


## media.play

オーディオファイルの再生を、開始または再開します。

    media.play();


### 例

    // オーディオの再生
    //
    function playAudio(url) {
        // URL で指定したオーディオファイルを再生
        var my_media = new Media(url,
            // success 時のコールバック
            function () {
                console.log("playAudio():Audio Success");
            },
            // error 時のコールバック
            function (err) {
                console.log("playAudio():Audio Error: " + err);
            }
        );
        // オーディオの再生
        my_media.play();
    }


### iOS 特有の動作

- __numberOfLoops__: `play` メソッドにこのオプションを渡して、メディアファイルのリピート回数を指定します。以下に例を示します。

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ numberOfLoops: 2 })

- __playAudioWhenScreenIsLocked__: `play` メソッドにこのオプションを渡して、画面にロックがかかった状態でも再生を続行するか指定します。 `true` ( デフォルトではこちら ) に設定した場合、ハードウェアのミュートボタンの設定を無視します。以下に例を示します。

        var myMedia = new Media("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3")
        myMedia.play({ playAudioWhenScreenIsLocked : false })

- __order of file search__: ファイル名または簡易なパス ( simple path ) のみを提供した場合、iOS はファイルを、最初に、 `www` ディレクトリで検索して、次に、アプリの `documents/tmp` ダイレクトリで検索します。

        var myMedia = new Media("audio/beer.mp3")
        myMedia.play()  // 最初に www/audio/beer.mp3 内でファイルを検索し、次に <application>/documents/tmp/audio/beer.mp3 を検索

## media.release

オペレーティングシステムのオーディオ関連のリソースを解放 ( release ) します。
Androidでは、メディア再生に割り当てられた OpenCore インタスタンスの数には限りがあるため、解放処理は特に重要となります。 `Media` リソースが不要になった場合には、 `release` メソッドを呼び出してください。

    media.release();


### 例

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);

    my_media.play();
    my_media.stop();
    my_media.release();


## media.seekTo

オーディオファイル内の再生位置を設定します。

    media.seekTo(milliseconds);

### パラメータ

- __milliseconds__: オーディオ内の再生位置を、ミリ秒単位で指定します。

### 例

    // オーディオプレイヤー
    //
    var my_media = new Media(src, onSuccess, onError);
        my_media.play();
    // 5 秒後に、10 秒の位置まで移動
    setTimeout(function() {
        my_media.seekTo(10000);
    }, 5000);


### BlackBerry 10 特有の動作

- BlackBerry OS 5 搭載のデバイスでは、サポートしません。

## media.setVolume

オーディオファイルの音量を設定します。

    media.setVolume(volume);

### パラメータ

- __volume__: 再生時の音量を指定します。0.0 から 1.0 の間で値を指定します。

### サポート対象のプラットフォーム

- Android
- iOS

### 例

    // オーディオの再生
    //
    function playAudio(url) {
        // URL で指定したオーディオファイルを再生
        var my_media = new Media(url,
            // success 時のコールバック
            function() {
                console.log("playAudio():Audio Success");
            },
            // error 時のコールバック
            function(err) {
                console.log("playAudio():Audio Error: "+err);
        });

        // オーディオの再生
        my_media.play();

        // 2 秒後に音量をミュートにする
        setTimeout(function() {
            my_media.setVolume('0.0');
        }, 2000);

        // 5 秒後に音量を 1.0 にする
        setTimeout(function() {
            my_media.setVolume('1.0');
        }, 5000);
    }


## media.startRecord

オーディオファイルの録音を開始します。

    media.startRecord();

### サポート対象のプラットフォーム

- Android
- iOS
- Windows Phone 7 and 8
- Windows 8

### 例

    // オーディオの録音
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // success 時のコールバック
            function() {
                console.log("recordAudio():Audio Success");
            },

            // error 時のコールバック
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            });

        // オーディオの録音
        mediaRec.startRecord();
    }


### Android 特有の動作

- Android では、AMR ( Adaptive Multi-Rate ) 形式でオーディオを録音します。ファイルの拡張子は、 _.amr_ になります。

### iOS 特有の動作

- iOS では、 _.wav_ 形式でファイルへの録音を行います。ファイル名の拡張子が正しくない場合、エラーを返します。

- フルパス ( full path ) を指定しない場合、アプリの `documents/tmp` ディレクトリに録音ファイルを置きます。 `LocalFileSystem.TEMPORARY` を使用して、 `File` API 経由で、ファイルへのアクセスを行えます。録音時に指定するサブディレクトリは、既存のものである必要があります。

- documents URI を使用して、ファイルを録音・再生できます。

        var myMedia = new Media("documents://beer.mp3")

### Tizen 特有の動作

- Tizen 搭載のデバイスではサポートしません。

## media.stop

オーディオファイルの再生を停止します。

    media.stop();

### 例

    // オーディオの再生
    //
    function playAudio(url) {
        // URL で指定したオーディオファイルを再生
        var my_media = new Media(url,
            // success 時のコールバック
            function() {
                console.log("playAudio():Audio Success");
            },
            // error 時のコールバック
            function(err) {
                console.log("playAudio():Audio Error: "+err);
            }
        );

        // オーディオの再生
        my_media.play();

        // 10 秒後に一時停止
        setTimeout(function() {
            my_media.stop();
        }, 10000);
    }


## media.stopRecord

オーディオファイルの録音を停止します。

    media.stopRecord();

### サポート対象のプラットフォーム

- Android
- iOS
- Windows Phone 7 and 8
- Windows 8

### 例

    // オーディオの録音
    //
    function recordAudio() {
        var src = "myrecording.mp3";
        var mediaRec = new Media(src,
            // success 時のコールバック
            function() {
                console.log("recordAudio():Audio Success");
            },

            // error 時のコールバック
            function(err) {
                console.log("recordAudio():Audio Error: "+ err.code);
            }
        );

        // オーディオの録音
        mediaRec.startRecord();

        //  10 秒後に録音を停止
        setTimeout(function() {
            mediaRec.stopRecord();
        }, 10000);
    }


### Tizen 特有の動作

- Tizen 搭載のデバイスではサポートしません。

## MediaError

エラーが発生した場合、 `mediaError` コールバック関数へ `MediaError` オブジェクトを返します。

### プロパティ

- __code__: 事前に定義した以下のエラーコードのうちの 1 つ

- __message__: 詳細を示したエラーメッセージ

### Constants

- `MediaError.MEDIA_ERR_ABORTED`
- `MediaError.MEDIA_ERR_NETWORK`
- `MediaError.MEDIA_ERR_DECODE`
- `MediaError.MEDIA_ERR_NONE_SUPPORTED`

