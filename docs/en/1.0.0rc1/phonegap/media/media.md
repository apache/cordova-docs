---
license: Licensed to the Apache Software Foundation (ASF) under one
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

Media
=====

> The `Media` object provides the ability to record and play back audio files on a device. 

    var media = new Media(src, mediaSuccess, [mediaError]);


Note: The current implementation does not adhere to a W3C specification for media capture, and is provided for convenience only.  A future implementation will adhere to the latest W3C specification and may deprecate the current APIs.

Parameters
----------

- __src__: A URI containing the audio content. _(DOMString)_
- __mediaSuccess__: (Optional) The callback that is invoked after a Media object has completed the current play/record or stop action. _(Function)_
- __mediaError__: (Optional) The callback that is invoked if there was an error. _(Function)_

Methods
-------

- media.getCurrentPosition: Returns the current position within an audio file.
- media.getDuration: Returns the duration of an audio file.
- media.play: Start or resume playing audio file.
- media.pause: Pause playing audio file.
- media.release: Releases the underlying OS'es audio resources.
- media.startRecord: Start recording audio file.
- media.stopRecord: Stop recording audio file.
- media.stop: Stop playing audio file.

Supported Platforms
-------------------

- Android
- iOS

iOS Quirks
----------
- The callback functions must be global in scope (version 0.9.4 and earlier).
- In the media constructor iOS calls a prepare method to load the file into the player in preparation for playing.  An optional downloadCompleteCallback can be passed as the final parameter to the Media constructor.  It will be called when the the call to prepare completes.  
