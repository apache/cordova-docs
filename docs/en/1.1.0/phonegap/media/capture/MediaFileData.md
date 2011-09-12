MediaFileData
=============

> Encapsulates format information about a media file.

Properties
----------

- __codecs:__ The actual format of the audio and video content. (DOMString)
- __bitrate:__ The average bitrate of the content.  In case of an image, this attribute has value 0. (Number)
- __height:__ The height of the image or video in pixels. In the case of a sound clip, this attribute has value 0. (Number)
- __width:__ The width of the image or video in pixels. In the case of a sound clip, this attribute has value 0. (Number)
- __duration:__ The length of the video or sound clip in seconds. In the case of an image, this attribute has value 0. (Number)

BlackBerry WebWorks Quirks
--------------------------
There is no API that provides format information of media files.  So the MediaFileData object returned by the MediaFile.getFormatData function will have the following default values:

- __codecs:__ Not supported. The attribute will always be null.
- __bitrate:__ Not supported.  The attribute will always be 0.
- __height:__ Not supported.  The attribute will always be 0.
- __width:__ Not supported.  The attribute will always be 0.
- __duration:__ Not supported.  The attribute will always be 0.

Android Quirks
--------------
Support for the MediaFileData properties is as follows:

- __codecs:__ Not supported.  The attribute will always be null.
- __bitrate:__ Not supported.  The attribute will always be 0.
- __height:__ Supported.  (Image and video files only).  
- __width:__ Supported.  (Image and video files only). 
- __duration:__ Supported.  (Audio and video files only).

iOS Quirks
----------
Support for the MediaFileData properties is as follows:

- __codecs:__ Not supported.  The attribute will always be null.
- __bitrate:__ Supported on iOS4 devices for audio only. The attribute will always be 0 for image and video.
- __height:__ Supported.  (Image and video files only).  
- __width:__ Supported.  (Image and video files only). 
- __duration:__ Supported.  (Audio and video files only).