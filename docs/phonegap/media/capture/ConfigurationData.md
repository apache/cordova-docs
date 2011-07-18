ConfigurationData
=================

> Encapsulates a set of media capture parameters that a device supports.

Description
-----------

This object is used to describe media capture modes supported by the device.  The configuration data includes the MIME type, and capture dimensions (for video or image capture).  

The MIME types should adhere to [RFC2046](http://www.ietf.org/rfc/rfc2046.txt).  Examples:

- video/3gpp
- video/quicktime
- image/jpeg
- audio/amr
- audio/wav 

Properties
----------

- __type:__ The ASCII-encoded string in lower case representing the media type. (DOMString)
- __height:__ The height of the image or video in pixels.  In the case of a sound clip, this attribute has value 0. (Number)
- __width:__ The width of the image or video in pixels.  In the case of a sound clip, this attribute has value 0. (Number)

Quick Example
-------------

    // retrieve supported image modes
    var imageModes = navigator.device.capture.supportedImageModes;

    // Select mode that has the highest horizontal resolution
    var width = 0;
    var selectedmode;
    for each (var mode in imageModes) {
        if (mode.width > width) {
            width = mode.width;
            selectedmode = mode;
        }
    }


Not supported by any platform.  All configuration data arrays are empty.