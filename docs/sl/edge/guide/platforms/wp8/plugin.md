--licenco: licenco za Apache Software Foundation (ASF) pod eno ali več prispeva licenčnih pogodb. See the NOTICE file distributed with this work for additional information regarding copyright ownership. The ASF licenses this file to you under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

   under the License.
---

# Windows Phone Plugins

Ta razdelek ponuja podrobnosti za kako izvajati native plugin kodo na Windows Phone platformi. Pred obravnavo tega, glejte Uporaba Plugins za pregled plugin strukturo in njene skupne JavaScript vmesnik. Ta oddelek še dokazati vzorec *echo* plugin, ki komunicira s spletni pogled Cordova native platformo in nazaj.

Pisanje plugin za Cordova na Windows Phone zahteva osnovno razumevanje arhitekture Cordova's. Cordova WP7 sestajati od a `WebBrowser` ki gosti aplikacije JavaScript kodo in upravlja native API klici. Vi moči razširiti C# `BaseCommand` razreda ( `WP7CordovaClassLib.Cordova.Commands.BaseCommand` ), ki prihaja z večino funkcionalnosti, ki jih potrebujete:

1.  Izberite vaš projekt, in z desno tipko miške, da izberete **Dodajanje → novega elementa...** Če želite, ga lahko dodate v `Plugins` zgibalnik.

2.  Izberite **razred** in ime `Echo.cs` . Ta razred ime mora *točno* ujemati, kar imenujete določite kot storitev v je `cordova.exec()` klic na strani JavaScript.

3.  Vključujejo izvajanje osnovnih razredov:
    
        using WPCordovaClassLib.Cordova;
        using WPCordovaClassLib.Cordova.Commands;
        using WPCordovaClassLib.Cordova.JSON;
        

4.  Razširiti vaš razred iz `BaseCommand` :
    
        public class Echo : BaseCommand
        {
            // ...
        }
        

5.  Dodaj je `echo` metoda, ki je vpisano od JavaScript:
    
        public class Echo : BaseCommand
        {
            public void echo(string options)
            {
                // all JS callable plugin methods MUST have this signature!
                // public, returning void, 1 argument that is a string
            }
        }
        

Glej [BaseCommand.cs][1] razred za metode, ki so na voljo za plugin za preglasitev. Na primer, plugin lahko zajemanje "pavza" in "spet" dogodkov.

 [1]: https://github.com/apache/cordova-wp7/blob/master/templates/standalone/cordovalib/Commands/BaseCommand.cs

## Imenski prostori

Privzeti imenski prostor za nekvalificirana ukazov je:

        namespace Cordova.Extension.Commands
        {
            // ...
        }
    

Če želite določiti svoj imenski prostor, boste morali poklicati popolnoma `cordova.exec` . Na primer, če želite določiti vaš razred C# takole:

        namespace com.mydomain.cordovaExtensions
        {
            public class Echo : BaseCommand
            {
                // ...
            }
        }
    

JavaScript bi morali poklicati `exec` takole:

        cordova.exec(win, fail, "com.mydomain.cordovaExtensions.Echo", ...);
    

## Tolmačenje argumentov v C

V primeru razpravljali v uporabo Plugins podatke prejme vaš plugin je niz, vendar kaj, če želite prenesti nizov? Recimo JavaScript `cordova.exec` klic je določena takole:

        cordova.exec(win, fail, "Echo", "echo", ["input string"]);
    

Vrednost `options` niz prenese na `Echo.echo` metoda je JSON:

        "[\"input string\"]"
    

Vse JavaScript `exec` argumenti JSON kodira pred prevalili v C#, in tako morali odkodirate:

        string optVal = JsonHelper.Deserialize<string[]>(options)[0];
        // optVal now has the value of "input string"
    

## Kratki rezultati iz C# JavaScript

V `BaseCommand` razred zagotavlja metode JavaScript povratni klic oskrbniki prenesti podatke. Če želite preprosto signal uspeh brez spremnega rezultata, lahko preprosto pokličete:

        DispatchCommandResult();
        // calls back with an empty plugin result, considered a success callback
    

Prenesti podatke nazaj, morate poklicati `DispatchCommandResult` drugače:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "Everything went as planned, this is a result that is passed to the success handler."));
    

Uporabite kodirano JSON string prenesti strukturiran objekt podatke nazaj v JavaScript:

        DispatchCommandResult(new PluginResult(PluginResult.Status.OK, "{result:\"super awesome!\"}"));
    

Signal napake, oklic `DispatchCommandResult` s a `PluginResult` predmet, katerih stanje je `ERROR` :

        DispatchCommandResult(new PluginResult(PluginResult.Status.ERROR, "Echo signaled an error"));
    

## Ravnanje serializacija napake

Pri razlagi vaše trditve, `try` / `catch` bloki pomoč zaslon iz slabo vložek. Ta vzorec se pojavi skozi Cordova C# kodo:

        string optVal = null;
    
        try
        {
            optVal = JsonHelper.Deserialize<string[]>(options)[0];
        }
        catch(Exception)
        {
            // simply catch the exception, we handle null values and exceptions together
        }
    
        if (optVal == null)
        {
            DispatchCommandResult(new PluginResult(PluginResult.Status.JSON_EXCEPTION));
        }
        else
        {
            // ... continue on to do our work
        }
    

## Plugin XML

Naslednje prikazuje uporabo v `plugin.xml` datoteko želite določiti a plugin izvornih datotek na Windows Phone platformi. Glejte Uporaba Plugins za pregled in specifikacije Plugin za podrobnosti o razpoložljivih možnosti.

*   Je `<source-file>` element, ki opredeljuje vse plugin virov, kot so *.cs*, *.xaml*, *. xaml.cs*, in *.dll* pila ter podoba sredstev.

*   Je `<config-file>` element opredeljuje elemente oddaja v konfiguracijski datoteki. Ta primer doda plugin na platformo `config.xml` datoteke:
    
        <config-file target="config.xml" parent="/*">
            <feature name="PluginName">
                <param name="wp-package" value="PluginName"/>
            </feature>
        </config-file>
        
    
    Ta primer doda sposobnost stike z `WMAppManifest.xml` datoteke:
    
        <config-file target="Properties/WMAppManifest.xml" parent="/Deployment/App/Capabilities">
            <Capability Name="ID_CAP_CONTACTS" />
        </config-file>
        

## Debugging Plugins

Uporabite iskalnik napak za Visual Studio debug a plugin C# komponento. Break točke lahko nastavite na katero koli od metod, ki jih vaš razred.

JavaScript je težje debug na Windows Phone. Vi potreba rabiti `console.log` izhod plugin država ali pozanimate napak.

## Skupnih pastem

*   Pazite, da ne prenesti argumente iz JavaScript strani native, ki so težko deserializirati kot JSON. Večina platforme naprav pričakujejo argument, predan `cordova.exec()` treba matriko, kot sledi:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", 54, {literal:'trouble'}]);
        
    
    To lahko povzroči preveč kompleksna niz vrednosti za C# k dekodirajo:
    
        "[\"this is a string\", 54, { literal:'trouble' }]"
        
    
    Namesto tega, da preusmeri *vse* parametre na strune, preden pokličete `exec()` , in vsakega posebej dekodiranje:
    
        cordova.exec(win, fail, "ServiceName", "MethodName", ["this is a string", "54", "{literal:'trouble'}"]);
        string[] optValues = JsonHelper.Deserialize<string[]>(options);
        

*   Ponavadi je bolje preveriti parametre v JavaScript, preden pokličete `exec()` . Tako omogoča ponovno uporabo več kode in potegnite nepotrebnih smotrnost od plugin native različnih izvedb.