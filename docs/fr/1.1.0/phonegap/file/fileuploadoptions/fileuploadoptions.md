FileUploadOptions
=================

Un objet `FileUploadOptions` peut être passé à la méthode `upload` des objets `FileTransfer` afin de afin de fournir des paramètres additionnels au script d'upload.

Propriétés
----------

- __fileKey:__ Le nom de l'élément du formulaire.  Valorisé à "file" par défaut. (DOMString)
- __fileName:__ Le nom du fichier tel qu'il doit être enregistré sur le serveur.  Valorisé à "image.jpg" par défaut. (DOMString)
- __mimeType:__ Le type MIME des données que vous transferez.  Valorisé à "image/jpeg" par défaut. (DOMString)
- __params:__ Un ensemble optionnel de couples clef/valeur qui seront transmis dans la requête HTTP. (Object)
- __chunkedMode:__ Indique si les données doivent ête envoyées par morceaux (mode "chunked streaming"). Valorisé à "true" par défaut. (Boolean)


Description
-----------

Un objet `FileUploadOptions` peut être passé à la méthode `upload` des objets `FileTransfer` afin de afin de fournir des paramètres additionnels au script d'upload.
