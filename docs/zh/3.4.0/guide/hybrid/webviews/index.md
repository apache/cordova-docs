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

# 嵌入 WebViews

科爾多瓦的應用程式通常是作為基於瀏覽器的*web 視圖*在本機的移動平臺內實現的。 這一節演示如何，為支援平臺，以創建您自己的 web 視圖元件，充分使用科爾多瓦的 api。 然後，您可以部署在混合應用程式中的本機組件以及這些科爾多瓦應用程式元件。

若要部署 web 視圖，您需要熟悉每個本機程式設計環境。下面提供了支援的平臺的說明：

*   亞馬遜火 OS WebViews
*   Android WebViews
*   WebViews iOS