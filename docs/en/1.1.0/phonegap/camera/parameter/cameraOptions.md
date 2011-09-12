cameraOptions
=============

Optional parameters to customize the camera settings.

    { quality : 75, 
      destinationType : Camera.DestinationType.DATA_URL, 
      sourceType : Camera.PictureSourceType.CAMERA, 
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100 };

Options
-------

- __quality:__ Quality of saved image. Range is [0, 100]. (`Number`)

- __destinationType:__ Choose the format of the return value.  Defined in navigator.camera.DestinationType (`Number`)
        
            Camera.DestinationType = {
                DATA_URL : 0,                // Return image as base64 encoded string
                FILE_URI : 1                 // Return image file URI
            };

- __sourceType:__ Set the source of the picture.  Defined in nagivator.camera.PictureSourceType (`Number`)
     
        Camera.PictureSourceType = {
            PHOTOLIBRARY : 0,
            CAMERA : 1,
            SAVEDPHOTOALBUM : 2
        };

- __allowEdit:__ Allow simple editing of image before selection. (`Boolean`)
  
- __EncodingType:__ Choose the encoding of the returned image file.  Defined in navigator.camera.EncodingType (`Number`)
        
            Camera.EncodingType = {
                JPEG : 0,               // Return JPEG encoded image
                PNG : 1                 // Return PNG encoded image
            };

- __targetWidth:__ Width in pixels to scale image. Must be used with targetHeight.  Aspect ratio is maintained. (`Number`)
- __targetHeight:__ Height in pixels to scale image. Must be used with targetWidth. Aspect ratio is maintained. (`Number`)
  
Android Quirks
--------------

- Ignores the `allowEdit` parameter.
- Camera.PictureSourceType.PHOTOLIBRARY and Camera.PictureSourceType.SAVEDPHOTOALBUM both display the same photo album.
- Camera.EncodingType is not supported.

BlackBerry Quirks
-----------------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.
- Application must have key injection permissions to close native Camera application after photo is taken.
- Using Large image sizes may result in inability to encode image on later model devices with high resolution cameras (e.g. Torch 9800).

Palm Quirks
-----------

- Ignores the `quality` parameter.
- Ignores the `sourceType` parameter.
- Ignores the `allowEdit` parameter.

iPhone Quirks
--------------

- Set `quality` below 50 to avoid memory error on some devices.
- When `destinationType.FILE_URI` is used, photos are saved in the application's temporary directory.
- The contents of the application's temporary directory is deleted when the application ends. Developers may also delete the contents of this directory using the navigator.fileMgr APIs if storage space is a concern.

           