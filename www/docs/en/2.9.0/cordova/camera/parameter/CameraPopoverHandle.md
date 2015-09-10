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

<a href="../camera.html">Camera</a>PopoverHandle
===================

A handle to the popover dialog created by `<a href="../camera.getPicture.html">camera.getPicture</a>`.

Methods
-------

- __set<a href="../../geolocation/Position/position.html">Position</a>__: Set the position of the popover.

Supported Platforms
-------------------

- iOS

set<a href="../../geolocation/Position/position.html">Position</a>
-----------

Set the position of the popover.

__Parameters:__
- `cameraPopoverOptions`: the `<a href="../camera.html">Camera</a>PopoverOptions` that specify the new position

Quick <a href="../../storage/storage.opendatabase.html">Example</a>
-------------

     var cameraPopoverOptions = new <a href="../camera.html">Camera</a>PopoverOptions(300, 300, 100, 100, <a href="../camera.html">Camera</a>.PopoverArrowDirection.ARROW_ANY);
     cameraPopoverHandle.set<a href="../../geolocation/Position/position.html">Position</a>(cameraPopoverOptions);

Full <a href="../../storage/storage.opendatabase.html">Example</a>
------------

     function onSuccess(imageData) {
          // Do stuff with the image!
     }

     function onFail(message) {
         alert('Failed to get the picture: ' + message);
     }

     var cameraPopoverHandle = navigator.<a href="../camera.getPicture.html">camera.getPicture</a>(onSuccess, onFail,
         { destinationType: <a href="../camera.html">Camera</a>.DestinationType.FILE_URI,
           sourceType: <a href="../camera.html">Camera</a>.PictureSourceType.PHOTOLIBRARY });

     // Reposition the popover if the orientation changes.
     window.onorientationchange = function() {
         var cameraPopoverOptions = new <a href="../camera.html">Camera</a>PopoverOptions(0, 0, 100, 100, 0);
         cameraPopoverHandle.set<a href="../../geolocation/Position/position.html">Position</a>(cameraPopoverOptions);
     }
