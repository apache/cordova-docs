Contact
=======

Contains properties that describe a contact, such as a user's personal or business contact.

Properties
----------

- __id:__ A globally unique identifier. _(DOMString)_
- __displayName:__ The name of this Contact, suitable for display to end-users. _(DOMString)_
- __name:__ An object containing all components of a persons name. _(ContactName)_
- __nickname:__ A casual name to address the contact by. _(DOMString)_
- __phoneNumbers:__ An array of all the contact's phone numbers. _(ContactField[])_
- __emails:__ An array of all the contact's email addresses. _(ContactField[])_
- __addresses:__ An array of all the contact's addresses. _(ContactAddresses[])_
- __ims:__ An array of all the contact's IM addresses. _(ContactField[])_
- __organizations:__ An array of all the contact's organizations. _(ContactOrganization[])_
- __birthday:__ The birthday of the contact. _(Date)_
- __note:__ A note about the contact. _(DOMString)_
- __photos:__ An array of the contact's photos. _(ContactField[])_
- __categories:__  An array of all the contacts user defined categories. _(ContactField[])_
- __urls:__  An array of web pages associated to the contact. _(ContactField[])_

Methods
-------

- __clone__: Returns a new Contact object that is a deep copy of the calling object, with the id property set to `null`. 
- __remove__: Removes the contact from the device contacts database.  An error callback is called with a `ContactError` object if the removal is unsuccessful.
- __save__: Saves a new contact to the device contacts database, or updates an existing contact if a contact with the same __id__ already exists.


Details
-------

The `Contact` object represents a user contact.  Contacts can be created, saved to, or removed from the device contacts database.  Contacts can also be retrieved (individually or in bulk) from the database by invoking the `contacts.find` method.

_Note: Not all of the above contact fields are supported on every device platform.  Please check each platform's Quirks section for information about which fields are supported._

Supported Platforms
-------------------

- Android
- BlackBerry WebWorks (OS 5.0 and higher)
- iOS

Save Quick Example
------------------

	function onSuccess(contact) {
		alert("Save Success");
	};

	function onError(contactError) {
		alert("Error = " + contactError.code);
	};

	// create a new contact object
    var contact = navigator.contacts.create();
	contact.displayName = "Plumber";
	contact.nickname = "Plumber"; 		//specify both to support all devices
	
	// populate some fields
	var name = new ContactName();
	name.givenName = "Jane";
	name.familyName = "Doe";
	contact.name = name;
	
	// save to device
	contact.save(onSuccess,onError);

Clone Quick Example
-------------------

	// clone the contact object
	var clone = contact.clone();
	clone.name.givenName = "John";
	console.log("Original contact name = " + contact.name.givenName);
	console.log("Cloned contact name = " + clone.name.givenName); 

Remove Quick Example
--------------------

    function onSuccess() {
        alert("Removal Success");
    };

    function onError(contactError) {
        alert("Error = " + contactError.code);
    };

	// remove the contact from the device
	contact.remove(onSuccess,onError);

Full Example
------------

    <!DOCTYPE html>
    <html>
      <head>
        <title>Contact Example</title>

        <script type="text/javascript" charset="utf-8" src="phonegap.js"></script>
        <script type="text/javascript" charset="utf-8">

        // Wait for PhoneGap to load
        //
        document.addEventListener("deviceready", onDeviceReady, false);

        // PhoneGap is ready
        //
        function onDeviceReady() {
		    // create
		    var contact = navigator.contacts.create();
			contact.displayName = "Plumber";
			contact.nickname = "Plumber"; 		//specify both to support all devices
			var name = new ContactName();
			name.givenName = "Jane";
			name.familyName = "Doe";
			contact.name = name;

			// save
			contact.save(onSaveSuccess,onSaveError);
			
			// clone
			var clone = contact.clone();
			clone.name.givenName = "John";
			console.log("Original contact name = " + contact.name.givenName);
			console.log("Cloned contact name = " + clone.name.givenName); 
			
			// remove
			contact.remove(onRemoveSuccess,onRemoveError);
        }
        
        // onSaveSuccess: Get a snapshot of the current contacts
        //
        function onSaveSuccess(contact) {
			alert("Save Success");
        }
    
        // onSaveError: Failed to get the contacts
        //
        function onSaveError(contactError) {
			alert("Error = " + contactError.code);
        }
        
        // onRemoveSuccess: Get a snapshot of the current contacts
        //
        function onRemoveSuccess(contacts) {
			alert("Removal Success");
        }
    
        // onRemoveError: Failed to get the contacts
        //
        function onRemoveError(contactError) {
			alert("Error = " + contactError.code);
        }

        </script>
      </head>
      <body>
        <h1>Example</h1>
        <p>Find Contacts</p>
      </body>
    </html>

Android 2.X Quirks
------------------

- __categories:__  This property is not support by Android 2.X devices, and will always be returned as `null`.

Android 1.X Quirks
------------------

- __name:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __nickname:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __birthday:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __photos:__ This property is not support by Android 1.X devices, and will always be returned as `null`.
- __categories:__  This property is not support by Android 1.X devices, and will always be returned as `null`.
- __urls:__  This property is not support by Android 1.X devices, and will always be returned as `null`.


BlackBerry WebWorks (OS 5.0 and higher) Quirks
---------------------------------------------

- __id:__ Supported.  Assigned by device when contact is saved.
- __displayName:__ Supported.  Stored in BlackBerry __user1__ field.
- __nickname:__ This property is not supported, and will always be returned as `null`. 
- __phoneNumbers:__ Partially supported.  Phone numbers will be stored in BlackBerry fields __homePhone1__ and __homePhone2__ if _type_ is 'home', __workPhone1__ and __workPhone2__ if _type_ is 'work', __mobilePhone__ if _type_ is 'mobile', __faxPhone__ if _type_ is 'fax', __pagerPhone__ if _type_ is 'pager', and __otherPhone__ if _type_ is none of the above.
- __emails:__ Partially supported.  The first three email addresses will be stored in the BlackBerry __email1__, __email2__, and __email3__ fields, respectively.
- __addresses:__ Partially supported.  The first and second addresses will be stored in the BlackBerry __homeAddress__ and __workAddress__ fields, respectively.
- __ims:__ This property is not supported, and will always be returned as `null`. 
- __organizations:__ Partially supported.  The __name__ and __title__ of the first organization are stored in the BlackBerry __company__ and __title__ fields, respectively.
- __photos:__ - Partially supported.  A single thumbnail-sized photo is supported.  To set a contact's photo, pass in a either a Base64 encoded image, or a URL pointing to the image.  The image will be scaled down before saving to the BlackBerry contacts database.   The contact photo is returned as a Base64 encoded image.
- __categories:__  Partially supported.  Only 'Business' and 'Personal' categories are supported. 
- __urls:__  Partially supported. The first url is stored in BlackBerry __webpage__ field.

iOS Quirks
----------
- __displayName:__ This property is not supported by iOS and will be returned as `null` unless there is no ContactName specified.  If there is no ContactName, then composite name, __nickame__ or "" is returned for __displayName__, respectively. 
- __birthday:__ For input, this property must be provided as a JavaScript Date object. It is returned as a JavaScript Date object.
- __photos:__ Returned Photo is stored in the application's temporary directory and a File URL to photo is returned.  Contents of temporary folder is deleted when application exits. 
- __categories:__  This property is not currently supported and will always be returned as `null`.
