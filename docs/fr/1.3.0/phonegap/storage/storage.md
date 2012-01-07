Storage
=======

> Fournit l'accès aux options de stockage du mobile.  

Cette API est basée sur les spécifications [W3C Web SQL Database](http://dev.w3.org/html5/webdatabase/) et [W3C Web Storage API](http://dev.w3.org/html5/webstorage/). Certaines plateformes fournissent déjà une implémentation de cette spécification.  Pour ces mobiles, c'est cette implémentation qui est utilisée, elle n'est pas remplacée par celle de PhoneGap.  Pour les autres mobiles, l'implémentation fournie par PhoneGap devrait être conforme à la spécification du W3C.

Méthodes
--------

- openDatabase

Arguments
---------

- name
- version
- display_name
- size

Objets
------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage