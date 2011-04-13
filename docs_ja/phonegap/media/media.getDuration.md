media.getDuration
=================

オーディオファイルの再生時間を返します。

    media.getDuration();

概要
-----------

`media.getDuration` は秒単位でオーディオファイルの再生時間を返す同期関数です。再生時間が不明な場合は'-1'が返されます。


サポートされているプラットフォーム
-------------------

- Android

使用例
-------------

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
                document.getElementById('audio_duration').innerHTML = (dur/1000) + " 秒";
            }
       }, 100);


詳細な使用例
------------

        <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
                              "http://www.w3.org/TR/html4/strict.dtd">
        <html>
          <head>
            <title>メディアの使用例</title>
        
            <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
            <script type="text/javascript" charset="utf-8">
        
            // PhoneGapの読み込みを待機
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
        
            // オーディオを再生します。
            //
            function playAudio(src) {
                // srcからMediaオブジェクトを作成
                my_media = new Media(src, onSuccess, onError);
        
                // 再生開始
                my_media.play();
        
                // 毎秒 my_media の再生位置を更新
                if (mediaTimer == null) {
                    mediaTimer = setInterval(function() {
                        // my_media　の再生位置を取得
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
        
            // オーディオを一時停止
            // 
            function pauseAudio() {
                if (my_media) {
                    my_media.pause();
                }
            }
        
            // オーディオを停止
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
        
            // オーディオの再生位置をセット
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