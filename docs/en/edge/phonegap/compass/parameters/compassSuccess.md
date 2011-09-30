compassSuccess
==============

onSuccess callback function that provides the compass heading information via a compassHeading object.

    function(heading) {
        // Do something
    }

Parameters
----------


- __heading:__ The heading information. _(compassHeading)_

Example
-------

    function onSuccess(heading) {
        alert('Heading: ' + heading.magneticHeading);
    };
