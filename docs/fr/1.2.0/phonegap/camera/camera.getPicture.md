camera.getPicture
=================

Prend un cliché grâce à l'application appareil photo du mobile ou retrouve un cliché existant dans l'album. L'image est retournée sous forme de chaîne de caractères (`String`) encodée en Base64 ou sous forme d'URI de fichier image.

    navigator.camera.getPicture( cameraSuccess, cameraError, [ cameraOptions ] );

Description
-----------

La fonction `camera.getPicture` ouvre l'application appareil photo par défaut du mobile pour que l'utilisateur puisse prendre un cliché (si `Camera.sourceType = Camera.PictureSourceType.CAMERA`, qui est la valeur par défaut). Une fois la photo prise, l'application appareil photo se ferme et votre application reprend la main.

Si `Camera.sourceType = Camera.PictureSourceType.PHOTOLIBRARY` ou `Camera.PictureSourceType.SAVEDPHOTOALBUM`, alors une fenêtre de choix de photo apparaît, et l'utilisateur peut sélectionner une photo de l'album.

La valeur résultat sera envoyée à la fonction `cameraSuccess`, dans l'un des formats suivants, selon les `cameraOptions` que vous avez choisis :

- Une chaîne de caractères `String` contenant l'image encodée en Base64 (par défaut). 
- Une chaîne de caractères `String` contenant l'URI de l'image dans le stockage local.  

Vous pouvez faire ce que vous voulez de l'image encodée en Base64 ou de l'URI, par exemple :

- Afficher l'image à l'aide d'une balise `<img>` _(voir l'exemple ci-dessous)_
- Sauvegarder les données localement (`LocalStorage`, [Lawnchair](http://brianleroux.github.com/lawnchair/), etc.)
- Envoyer les données vers un serveur distant

Remarque : La qualité des images prises à l'aide de l'appareil photo des mobiles récents est très bonne.  _Chiffrer de telles images en Base64 a posé des soucis de mémoire sur quelques-uns de ces mobiles (iPhone 4, BlackBerry Torch 9800)._  Par conséquent, il est fortement conseillé d'utiliser FILE_URI comme valeur de 'Camera.destinationType'.

Plateformes supportées
----------------------

- Android
- Blackberry WebWorks (OS 5.0 et plus récent)
- iPhone
- Windows Phone 7 ( Mango )

Exemple rapide
--------------

Prendre une photo et récupérer l'image encodée en Base64 :

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50 }); 

    function onSuccess(imageData) {
        var image = document.getElementById('monImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onFail(message) {
        alert('Echec car : ' + message);
    }

Prendre une photo et récupérer l'URI du fichier image: 

    navigator.camera.getPicture(onSuccess, onFail, { quality: 50, 
        destinationType: Camera.DestinationType.FILE_URI }); 

    function onSuccess(imageURI) {
        var image = document.getElementById('monImage');
        image.src = imageURI;
    }

    function onFail(message) {
        alert('Echec car : ' + message);
    }


Exemple complet
---------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Prise de photo</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        var pictureSource;   // source de l'image
        var destinationType; // définit le format de la valeur retournée
        
        // Attendre que PhoneGap soit prêt
        //
        document.addEventListener("deviceready",onDeviceReady,false);
    
        // PhoneGap est prêt
        //
        function onDeviceReady() {
            pictureSource=navigator.camera.PictureSourceType;
            destinationType=navigator.camera.DestinationType;
        }

        // Appelé lorsqu'une photo est bien récupérée
        //
        function onPhotoDataSuccess(imageData) {
          // Décommentez pour voir le flux image encodé en Base64
          // console.log(imageData);
      
          // Récupérer l'élément image du DOM
          //
          var smallImage = document.getElementById('smallImage');
      
          // Rendre visible l'élément image
          //
          smallImage.style.display = 'block';
      
          // Injecter la photo dans l'élément image
          // Les règles CSS servent à redimensionner l'image
          //
          smallImage.src = "data:image/jpeg;base64," + imageData;
        }

        // Appelé lorsqu'une photo est bien récupérée
        //
        function onPhotoURISuccess(imageURI) {
          // Décommentez pour voir l'URI du fichier image
          // console.log(imageURI);
      
          // Récupérer l'élément image du DOM
          //
          var largeImage = document.getElementById('largeImage');
      
          // Rendre visible l'élément image
          //
          largeImage.style.display = 'block';
      
          // Injecter la photo dans l'élément image
          // Les règles CSS servent à redimensionner l'image
          //
          largeImage.src = imageURI;
        }

        // Un bouton déclenchera l'appel de cette fonction
        //
        function capturePhoto() {
          // Prendre une photo avec l'appareil photo du mobile et récupérer l'image sous forme de flux encodé en Base64
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50 });
        }

        // Un bouton déclenchera l'appel de cette fonction
        //
        function capturePhotoEdit() {
          // Prendre une photo avec l'appareil photo du mobile, autoriser son édition, et récupérer l'image sous forme de flux encodé en Base64
          navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 20, allowEdit: true }); 
        }
    
        // Un bouton déclenchera l'appel de cette fonction
        //
        function getPhoto(source) {
          // Récupérer l'URI d'un fichier image à partir de la source spécifiée
          navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50, 
            destinationType: destinationType.FILE_URI,
            sourceType: source });
        }

        // Appelé lorsque quelque chose ne tourne pas rond
        // 
        function onFail(message) {
          alert('Echec car : ' + message);
        }

        </script>
      </head>
      <body>
        <button onclick="capturePhoto();">Prendre une photo</button> <br>
        <button onclick="capturePhotoEdit();">Prendre une photo et l'éditer</button> <br>
        <button onclick="getPhoto(pictureSource.PHOTOLIBRARY);">Depuis la gallerie de photos</button><br>
        <button onclick="getPhoto(pictureSource.SAVEDPHOTOALBUM);">Depuis l'album photo</button><br>
        <img style="display:none;width:60px;height:60px;" id="smallImage" src="" />
        <img style="display:none;" id="largeImage" src="" />
      </body>
    </html>
