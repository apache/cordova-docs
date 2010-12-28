contactFindOptions
==================

Optional parameter of the `contacts.find` method.  Use this parameter to limit and/or filter the contacts returned from the contacts database.

    { 
		filter: "",
		multiple: true,
		limit: 5,
		updatedSince: ""
	};

Options
-------

- __filter:__ The search string used to filter contacts. _(DOMString)_ (Default: "")
- __multiple:__ Determines if the find operation should return multiple contacts. _(Boolean)_ (Default: true)
- __limit:__ The maximum number of contacts to return. Only applied if multiple is `true`. _(Number)_ (Default: MAXINT)
- __updatedSince:__ Only return contacts updated since the date specified. _(Date)_ (Default: "")

iOS Quirks
----------
- __filter:__ iOS currently only searchs name fields.
- __multiple:__ Currently ignored by iOS.
- __limit:__ Currently ignored by iOS.
- __updatedSince:__ Currently ignored by iOS.