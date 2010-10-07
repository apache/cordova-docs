cameraOptions
=============

Optional parameters to customize the camera settings.

    { destinationType : Camera.DestinationType.DATA_URL, quality : 75 };

Options
-------

- __destinationType:__ Choose the format of the return value.  Defined in navigator.camera.DestinationType
		
            Camera.DestinationType = {
                DATA_URL : 0,                // Return image as base64 encoded string
                FILE_URI : 1                 // Return image file URI
            };

- __quality:__ Quality of saved image. Range is [0, 100]. (`Number`)

BlackBerry Quirks
-----------------

- Ignores the `quality` parameter.
- Application must have key injection permissions to close native Camera application after photo is taken.
- Using Large image sizes may result in inability to encode image on later model devices with high resolution cameras (e.g. Torch 9800).

Palm Quirks
-----------

- Ignores the `quality` parameter.

iPhone Quirks
--------------

- Implements additional options: 
    - __allowEdit:__ Allow simple editing of image before selection. (`Boolean`)
    - __source:__ Set the source of the picture.  Defined in nagivator.camera.PictureSourceType (`Number`)
         
            Camera.prototype.PictureSourceType = {
                PHOTOLIBRARY : 0,
                CAMERA : 1,
                SAVEDPHOTOALBUM : 2
            };
        
- set quality below 50 to avoid memory error on some devices.