Storage
==========

> Provides access to the devices storage options.  

This API is based on the [W3C Web SQL Database Specification](http://dev.w3.org/html5/webdatabase/) and [W3C Web Storage API Specification](http://dev.w3.org/html5/webstorage/). Some devices already provide an implementation of this spec. For those devices, the built-in support is used instead of replacing it with PhoneGap's implementation. For devices that don't have storage support, PhoneGap's implementation should be compatible with the W3C specification.

Methods
-------

- openDatabase

Arguments
---------

- name
- version
- display_name
- size

Objects
-------

- Database
- SQLTransaction
- SQLResultSet
- SQLResultSetList
- SQLError
- localStorage