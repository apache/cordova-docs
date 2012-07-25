---
license: Licensed to the Apache Software Foundation (ASF) under one
         or more contributor license agreements.  See the NOTICE file
         distributed with this work for additional information
         regarding copyright ownership.  The ASF licenses this file
         to you under the Apache License, Version 2.0 (the
         "License"); you may not use this file except in compliance
         with the License.  You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0

         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
         under the License.
---

Developing a Plugin on Windows Phone
====================================

Writing a plugin for Cordova on Windows Phone requires a basic understanding of the architecture of Cordova. Cordova-WP7 consists of a WebBrowser which hosts the application javascript code and manages native API calls. There is a BaseCommand class in C# which you can extend, and it comes with the majority of the 'plumbing' built for you already.





Select your project, and right click choose 'Add -> New Item ...'
- Preferably add it to the 'Plugins' folder, but it is up to you
Select 'Class' and name it Echo.cs
The name of this class must EXACTLY match what you call into cordova.exec(win,fail,"Echo",...)



Include the base classes implementation :
using WP7CordovaClassLib.Cordova;
using WP7CordovaClassLib.Cordova.Commands;
using WP7CordovaClassLib.Cordova.JSON;

Extend your class from BaseCommand 

The default namespace for unqualified commands is :
namespace Cordova.Extension.Commands

If you would like to use your own namespace, you will need to make a fully qualified call to cordova.exec
C#
namespace com.mydomain.cordovaExtensions {...}
JS
codova.exec(win,fail,"com.mydomain.cordovaExtensions.Echo",...);

Passing results from C# to JS 
===

DispatchCommandResult(); // calls back with an empty plugin result, considered a success callback

If you need to signal that an error has occured, you can call DispatchCommandResult with a PluginResult object.
DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signalled an error"));

Interpretting your arguments
===

The data received by your plugin method is a string value, but in actuallality we our intention was to pass an array of strings.  Looking back at our JS call to cordova.exec, we see we passed [str]
cordova.exec( win, fail, "Echo", "echo", ["input string"]); 

If we inspect the options string passed in to our Echo.echo method, we will see that the value is actually:
"[\"input string\"]"

All javascript exec arguments are JSON encoded before being passed into C#.

If we want to treat this as the string we were expecting, we need to decode it.
We can use simple JSON deserialization.

string optVal = JsonHelper.Deserialize<string[]>(options)[0];
// optVal now has the value of "input string"

Handling serialization errors
===

When interpretting your arguments, it is a good idea to use a try/catch block in case we have bad input.
This is a pattern used throughout the Cordova C# code :


   string optVal = null;

   try 
   {
      optVal = JsonHelper.Deserialize<string[]>(options)[0];
   }
   catch(Exception)
   {
      // simply catch the exception, we will handle null values and exceptions together
   }

   if(optVal == null)
   {
      DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
   }
   else
   {
      // ... continue on to do our work
   }







