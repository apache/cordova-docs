FileUploadResult
========

Un objet `FileUploadResult` est retourné comme argument de la fonction de callback de succès lorsqu'un appel à la méthode upload de FileTransfer s'est bien passé.

Propriétés
----------

- __bytesSent:__ Le nombre d'octets envoyés au serveur distant lors du transfert. (long)
- __responseCode:__ Le code de réponse HTTP retourné par le serveur. (long)
- __response:__ La réponse HTTP retournée par le serveur. (DOMString)

Description
-----------

L'objet `FileUploadResult` est retourné comme argument de la fonction de callback de succès lorsqu'un appel à la méthode upload de FileTransfer s'est bien passé.

Singularités iOS
----------------
- iOS ne remplit ni la propriété responseCode ni la propriété bytesSent de l'objet FileUploadResult. 

