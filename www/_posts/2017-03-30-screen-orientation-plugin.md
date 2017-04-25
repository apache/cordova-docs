---
layout: post
author:
    name: Vishal Mishra
    url: https://twitter.com/tweetsbymishra
title:  "Screen Orientation Plugin"
categories: news
tags: cordova screen orientation
---
Originally posted at this [PhoneGap blog](https://blog.phonegap.com/cordova-screen-orientation-plugin-fabeba30a4c4)

## Cordova Screen Orientation Plugin

The new version(2.0.0) of the cordova screen orientation plugin was released recently. The purpose of the plugin is to set/lock the screen orientation in a common way for all the major platforms. This new version conforms with the specifications mentioned in the [W3C Screen Orientation API](https://www.w3.org/TR/screen-orientation/), currently in open draft.

The plugin incorporates these major updates:

1. Locking/unlocking the screen orientation.
2. Accessing the current screen orientation.
3. Addition of ‘onchange’ event handler to the screen.orientation object.
4. A Demo App.

### Locking/unlocking the screen orientation

The screen orientation can be locked to a particular orientation, say, for example, landscape, using :

```js
screen.orientation.lock('landscape').then(function success() {
console.log("Successfully locked the orientation");
},function error(errMsg) {
console.log("Error locking the orientation :: " + errMsg);
});
```

The code above sets the screen orientation device to any landscape mode
( landscape-primary or landscape-secondary) depending upon the rotation.
The screen.orientation.lock(OrientationLockType); method returns a promise.On successfully setting the orientation, it resolves a promise. If the screen is not locked successfully, the promise rejects with 'NotSupportedError' .
The screen orientation can be unlocked by using:

```js
screen.orientation.unlock();
```

The code above makes the screen adapt to the default orientation of the device. The unlock method does not return a promise.

### Accessing the current screen orientation

The current screen orientation can be accessed as :
```js
console.log('Orientation is' + screen.orientation.type);
```

### Addition of 'onchange' attribute to the screen.orientation object
An example usage of the 'onchange' event handler:

```js
screen.orientation.onchange = function(){
 console.log(screen.orientation.type);
};
```

The 'change' event can also be added to the screen.orientation object :
```js
screen.orientation.addEventListener('change', function(){
 console.log(screen.orientation.type);
});
```
### The Demo Application

The demo application is included on the github repository. Once the plugin has been added to it, the demo application allows the user to test the orientation types with the screen.orientation.lock() method. The demo application is explained in detail [here](https://www.youtube.com/watch?v=P4Ulb9SQllA&t=5s).
