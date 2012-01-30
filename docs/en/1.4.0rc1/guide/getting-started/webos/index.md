Getting Started with WebOS
==========================


Video Tutorials:
----------------

- [PhoneGapPhoneGap and HP Palm webOS quick start video](http://www.youtube.com/v/XEnAUbDRZfw?autoplay=1)
- [How to convert iPhone app to a Palm](http://www.youtube.com/v/wWoJfQw79XI?autoplay=1)


1. Requirements
---------------

- Windows, OS X, or Linux


2. Install SDK + PhoneGap
----------------------------

- Download and install [Virtual Box](http://www.virtualbox.org/)
- Download and install [WebOS SDK](http://developer.palm.com/index.php?option=com_content&view=article&layout=page&id=1788&Itemid=321/)
- Download and install [cygwin SDK](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;layout=page&amp;id=1788&amp;Itemid=321)  (Windows only). Make sure you select "make" as it is not included by default
- Donwload the latest copy of [PhoneGap](http://phonegap.com/download) and extract its contents. We will be working with the Android directory.


 
3. Setup New Project
--------------------

- Open up terminal/cygwin and navigate to where you extracted your PhoneGap Download. Go into the webOS directory.


4. Hello World
--------------

In phonegap/webOS/framework/www, open up index.html with your favourite editor. After the body tag add `<h1>Hello World</h1>`


5A. Deploy to Simulator
-----------------------

- Open up your Palm Emulator from your applications folder/start menu.
- Type `make` in your terminal/cygwin while in the webOS directory.


5B. Deploy to Device
--------------------

- Make sure your device is in [Developer Mode and plug it in.](http://developer.palm.com/index.php?option=com_content&amp;view=article&amp;id=1552&amp;Itemid=59#dev_mode)
- Type `make` in your terminal/cygwin while in the webOS directory.
       

Done!
-----

You can also checkout more detailed version of this guide [here](http://wiki.phonegap.com/w/page/16494781/Getting-Started-with-PhoneGap-webOS).

