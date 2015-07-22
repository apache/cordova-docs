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

# CameraPopoverOptions

iOS だけ指定パラメーターをポップ オーバーのアンカー要素の場所および矢印方向計算されたライブラリまたはアルバムから画像を選択するとき。

    {x: 0, y: 32、幅： 320、高さ： 480、arrowDir: Camera.PopoverArrowDirection.ARROW_ANY};
    

## CameraPopoverOptions

*   **x**: ピクセルの x 座標画面要素にポップ オーバーのアンカーになります。*(数)*

*   **y**: y ピクセル座標の画面要素にポップ オーバーのアンカーになります。*(数)*

*   **幅**: ポップ オーバーのアンカーになる上の画面要素のピクセル単位の幅。*(数)*

*   **高さ**: ポップ オーバーのアンカーになる上の画面要素のピクセル単位の高さ。*(数)*

*   **arrowDir**: 方向のポップ オーバーで矢印をポイントする必要があります。定義されている `Camera.PopoverArrowDirection` *（番号）* 
    
            Camera.PopoverArrowDirection = {ARROW_UP: 1、/iOS UIPopoverArrowDirection 定数 ARROW_DOWN と一致する/: 2、ARROW_LEFT： 4、ARROW_RIGHT： 8、ARROW_ANY: 15};
        

矢印の方向と、画面の向きを調整するポップ オーバーのサイズを変更可能性がありますに注意してください。 アンカー要素の位置を指定するときの方向の変化を考慮することを確認します。

## 簡単な例

     var popover = new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY);
     var options = {
         quality         : 50,
         destinationType : Camera.DestinationType.DATA_URL,
         sourceType      : Camera.PictureSource.SAVEDPHOTOALBUM,
         popoverOptions  : popover
     };
    
     navigator.camera.getPicture(onSuccess, onFail, options);
    
     function onSuccess(imageData) {
         var image = document.getElementById('myImage');
         image.src = "data:image/jpeg;base64," + imageData;
     }
    
     function onFail(message) {
         alert('Failed because: ' + message);
     }