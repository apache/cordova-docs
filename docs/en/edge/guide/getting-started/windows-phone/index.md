Getting Started with Windows Phone
==================================


Video Tutorials:
----------------

- [PhoneGap and Windows Phone quick setup video](http://www.youtube.com/v/wO9xdRcNHIM?autoplay=1)
- [PhoneGap and Windows Phone deep dive](http://www.youtube.com/v/BJFX1GRUXj8?autoplay=1)


1. Requirements
---------------

- Windows 7 or Windows Vista with SP2

Note: Running in VM has issues, if you are on a Mac, you will need to setup a bootcamp partition with Windows 7 or Vista

Necessary for Installing on Device and Submitting to Market Place:

- Become an [App Hub member](http://create.msdn.com/en-US/home/membership).


2. Install SDK + PhoneGap
----------------------------

- Download and install [Windows Phone  SDK](http://www.microsoft.com/download/en/details.aspx?displaylang=en&amp;id=27570/)
- Donwload the latest copy of [PhoneGap](http://phonegap.com/download) and extract its contents. We will be working with the Android directory.


3. Setup New Project
--------------------

- Open Visual Studio Express for Windows Phone and choose **New Project**.
- Select **PhoneGapStarter**.
- Give your project a name, and select OK.

    ![](img/wpnewproj.PNG)

 
4. Review the project structure
-------------------------------

- The 'www' folder contains your PhoneGap html/js/css and any other resources included in your app.
- Any content that you add here needs to be a part of the Visual Studio project, and it must be set as content. 

    ![](img/wp7projectstructure.PNG)


5. Build and Deploy to Emulator
-------------------------------

- Make sure to have **Windows Phone Emulator** selected in the top drop-down menu.
- Hit the green **play button** beside the Windows Phone Emulator drop-down menu to start debugging or press F5.

    ![](img/wprun.png)
    ![](img/wpfirstrun.PNG)


6. Build your project for the device
------------------------------------

In order to test your application on a device, the device must be registered. Click [here](http://msdn.microsoft.com/en-us/library/gg588378(v=VS.92).aspx) to read documentation on deploying and testing on your Windows Phone.

- Make sure your phone is connected, and the screen is unlocked
- In Visual Studio, select 'Windows Phone Device' from the top drop-down menu.
- Hit the green **play button** beside the drop-down menu to start debugging or press F5.

    ![](img/wpd.png)


Done!
-----

You can also checkout more detailed version of this guide [here](http://wiki.phonegap.com/w/page/48672055/Getting%20Started%20with%20PhoneGap%20Windows%20Phone%207).

