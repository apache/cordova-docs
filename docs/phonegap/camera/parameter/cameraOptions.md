cameraOptions
=============

An optional parameter to customize the camera settings.

    { quality: 75 };

Options
-------

- __quality:__ Quality of saved image. Range is [0, 100]. (`Number`)

BlackBerry Quirks
-----------------

- Ignores the `quality` parameter.

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