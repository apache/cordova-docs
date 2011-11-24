MediaFile.getFormatData
=======================

> Récupèrer les informations sur le format d'un fichier média capturé.

    mediaFile.getFormatData( 
        MediaFileDataSuccessCB successCallback, 
        [MediaFileDataErrorCB errorCallback]
    );

Description
-----------

Cette fonction tente de récupérer de manière asynchrone les informations relatives au format d'un fichier média.  En cas de réussite, la fonction de callback MediaFileDataSuccessCB est appelée avec en argument un objet MediaFileData.  En cas d'échec, la fonction de callback MediaFileDataErrorCB est appelée avec en argument un objet MediaError.

Plateformes supportées
----------------------

- Android
- BlackBerry WebWorks (OS 5.0 et plus récent)
- iOS
- Windows Phone 7 ( Mango )

Singularités BlackBerry WebWorks
--------------------------------
Aucune API ne fournit d'information sur le format des fichiers média.  Par conséquent, tous les objets MediaFileData seront retournés avec des valeurs par défaut. Voir la documentation de MediaFileData.

Singularités Android
--------------------
L'API de récupération des informations de format de fichier média est incomplète.  Par conséquent, les propriétés de MediaFileData ne sont pas toutes supportées. Voir la documentation MediaFileData.

Singularités iOS
----------------
L'API de récupération des informations de format de fichier média est incomplète.  Par conséquent, les propriétés de MediaFileData ne sont pas toutes supportées. Voir la documentation MediaFileData.