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

# CaptureImageOptions

> イメージ キャプチャの構成オプションをカプセル化します。

## プロパティ

*   **制限**: ユーザーは、単一のキャプチャ操作でキャプチャすることができますイメージの最大数。値 1 (デフォルトは 1) 以上にする必要があります。

## 簡単な例

    // limit capture operation to 3 images
    var options = { limit: 3 };
    
    navigator.device.capture.captureImage(captureSuccess, captureError, options);
    

## iOS の癖

*   **Limit**パラメーターはサポートされていませんとだけ 1 枚の画像の呼び出しごと。