compassSuccess
==============

onSuccess callback function that provides the compass heading information.

    function(heading) {
        // Do something
    }

Parameters
----------

- __heading:__ The heading in degrees from 0 - 359.99 at a single moment in time. _(Number)_

Example
-------

    function onSuccess(heading) {
        alert('Heading: ' + heading);
    };
