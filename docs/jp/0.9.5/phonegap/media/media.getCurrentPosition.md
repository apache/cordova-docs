media.getCurrentPosition
========================

オーディオファイル内の現在の再生位置を返します。

    media.getCurrentPosition(mediaSuccess, [mediaError]);

パラメータ
----------

- __mediaSuccess__: 現在再生位置とともに呼び出されるコールバック関数です。
- __mediaError__: (オプション) エラー発生時に呼び出されるコールバック関数です。

概要
-----------

 `media.getCurrentPosition` は `Media` オブジェクトのオーディオファイルの現在再生位置を返す非同期関数です。


サポートされているプラットフォーム
-------------------

- Android
    
使用例
-------------

        // オーディオプレイヤー
        //
        var my_media = new Media(src, onSuccess, onError);

        // 毎秒再生位置を更新
        var mediaTimer = setInterval(function() {
            // 再生位置を取得
            my_media.getCurrentPosition(
                // 成功時のコールバック
                function(position) {
                    if (position > -1) {
                        console.log((position/1000) + " sec");
                    }
                },
                // 失敗時のコールバック
                function(e) {
                    console.log("Error getting pos=" + e);
                }
            );
        }, 1000);


詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                      "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>
        
            <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // PhoneGapの読み込み待機
            //
            function onLoad() {
                document.addEventListener("deviceready", onDeviceReady, false);
            }
        
            // PhoneGap準備完了
            //
            function onDeviceReady() {
                playAudio("http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3");
            }
        
            // オーディオプレイヤー
            //
            var my_media = null;
            var mediaTimer = null;
        
            // オーディオ再生
            //
            function playAudio(src) {
                // src からMediaオブジェクトを作成  
                my_media = new Media(src, onSuccess, onError);
        
                // オーディオ再生
                my_media.play();
        
                // 毎秒、再生位置を更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media の再生位置を取得
                        my_media.getCurrentPosition(
                            // 成功時のコールバック
                            function(position) {
                                if (position > -1) {
                                    setAudioPosition((position/1000) + " sec");
                                }
                            },
                            // 失敗時のコールバック
                            function(e) {
                                console.log("Error getting pos=" + e);
                                setAudioPosition("Error: " + e);
                            }
                        );
                    }, 1000);
                }
            }
        
            // オーディオ一時停止
            // 
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }
        
            // オーディオ停止
            // 
            function stopAudio() {
                if (my_media) {
                    my_media.stop();
                }
                clearInterval(mediaTimer);
                mediaTimer = null;
            }
        
            // 成功時のコールバック
            //
            function onSuccess() {
                console.log("playAudio():Audio Success");
            }
        
            // 失敗時のコールバック
            //
            function onError(error) {
                alert('コード: '    + error.code    + '\n' + 
                      'メッセージ: ' + error.message + '\n');
            }
        
            // 再生位置をセット
            // 
            function setAudioPosition(position) {
                document.getElementById('audio_position').innerHTML = position;
            }
        
            </script>
          </head>
          <body onload="onLoad()">
            <a href="#" class="btn large" onclick="playAudio('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3');">再生</a>
            <a href="#" class="btn large" onclick="pauseAudio();">一時停止</a>
            <a href="#" class="btn large" onclick="stopAudio();">停止</a>
            <p id="audio_position"></p>
          </body>
        </html>