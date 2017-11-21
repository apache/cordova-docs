---
layout: post
author:
    name: Vishal Mishra
    url: https://twitter.com/tweetsbymishra
title:  "Migrating from the Globalization Plugin"
categories: news
tags: cordova globalization
---

## Migrating from the Cordova Globalization Plugin

The Cordova Globalization Plugin was created to obtain information and perform operations based on a user’s locale, language and timezone when most mobile platforms could not make a distinction between these settings. With the new API arrivals in the browser, we can now use the [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/) for achieving this goal on iOS, Android, Windows devices and desktop browsers. Hence, this cordova plugin is not needed any more and will be sunset soon.

### Migrating from the plugin to the Internationalization API

The cordova globalization plugin defines a global navigator.globalization object which provides various methods to access a user’s locale, language and timezone. To get the preferred language from the browser, the navigator.globalization.getPreferredLanguage method was used as shown below:

```js
navigator.globalization.getPreferredLanguage(function (language) {          
    console.log('language: ' + language.value + '\n');
}, function () { 
    console.log('Error getting language\n'); 
});
```

The current locale could be found out using:

```js
navigator.globalization.getLocaleName(function (locale) {          
    console.log('locale: ' + locale.value + '\n');
}, function () {
    console.log('Error getting locale\n'); 
});
```

The [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/) provides the `Intl` object which provides language sensitive string comparison, number formatting, and date and time formatting. 
First we should check if the API is supported by the browser:

```js
if (window.Intl && typeof window.Intl === 'object') {
    console.log('API available');
}
```

The preferred language tag can be found out from the browser by using the `navigator` object:

```js
console.log(navigator.language);
```

The locale name can be found out using the `Intl.getCanonicalLocales(locales)` method. `locales` is a string value or an array of string values that has the language tag(s). The locale name can then be obtained as shown below:

```js
Intl.getCanonicalLocales('EN-US'); // ["en-US"]
Intl.getCanonicalLocales(['EN-US', 'Fr']); // ["en-US", "fr"]
```

Another instance of migrating from the cordova globalization plugin can be seen in this example: the navigator.globalization.dateToString method. This method is used in the cordova plugin as shown below:

```js
navigator.globalization.dateToString(
    new Date(),
    function (date) { 
        alert('date: ' + date.value + '\n'); 
    },
    function () { 
        alert('Error getting dateString\n'); 
    },
    { formatLength: 'short', selector: 'date' }
);
```
Similar results can be obtained using the Internationalization API by using the following code:

```js
var date = new Date();
console.log(new Intl.DateTimeFormat().format(date));
```

[Here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) is a good resource to find out more about various methods in the [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/).

Your feedback is graciously accepted and appreciated!
