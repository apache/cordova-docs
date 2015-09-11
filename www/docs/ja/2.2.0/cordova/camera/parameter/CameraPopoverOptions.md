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
---

<a href="../camera.html">Camera</a>PopoverOptions
====================

画像をライブラリーもしくはアルバムから選択する際の、 iPad でのポップオーバーの位置や矢印の向きを指定するためのパラメーターです。 iOS のみのオプションです。

    { x : 0,
      y :  32,
      width : 320,
      height : 480,
      arrowDir : <a href="../camera.html">Camera</a>.PopoverArrowDirection.ARROW_ANY
    };

<a href="../camera.html">Camera</a>PopoverOptions
--------------------

- __x:__ ポップオーバーの x 座標をピクセルで表します。 (`Number`)

- __y:__ ポップオーバーの y 座標をピクセルで表します。 (`Number`)

- __width:__ ポップオーバーの幅をピクセルで表します。 (`Number`)

- __height:__ ポップオーバーの高さをピクセルで表します。 (`Number`)

- __arrowDir:__ ポップオーバーの矢印の向きを表します。 <a href="../camera.html">Camera</a>.PopoverArrowDirection で定義されます。 (`Number`)

            <a href="../camera.html">Camera</a>.PopoverArrowDirection = {
                ARROW_UP : 1,        // iOS の UIPopoverArrowDirection 定数に同じ
                ARROW_DOWN : 2,
                ARROW_LEFT : 4,
                ARROW_RIGHT : 8,
                ARROW_ANY : 15
            };

ポップオーバーのサイズは矢印の方向や画面の向きによって調節され、変わる可能性があることについて注意してください。アンカー要素の位置を特定するとき、画面の向きの変化を考慮に入れることを忘れないで下さい。

<a href="../../storage/storage.opendatabase.html">使用例</a>
-------------

    var popover = new <a href="../camera.html">Camera</a>PopoverOptions(300,300,100,100,<a href="../camera.html">Camera</a>.PopoverArrowDirection.ARROW_ANY);
    var options = { quality: 50, destinationType: <a href="../camera.html">Camera</a>.DestinationType.DATA_URL,sourceType: <a href="../camera.html">Camera</a>.PictureSource.SAVEDPHOTOALBUM, popoverOptions : popover };

    navigator.<a href="../camera.getPicture.html">camera.getPicture</a>(onSuccess, onFail, options);

    function onSuccess(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Failed because: ' + message);
    }

