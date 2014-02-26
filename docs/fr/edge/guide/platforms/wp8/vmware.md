--licence : une licence à l'Apache Software Foundation (ASF) au titre d'un ou plusieurs contrats de licence pour le cotisant. Voir le fichier avis distribué avec ce travail d'information additionnelle concernant les droits d'auteur. L'ASF licenses ce fichier vous sous Apache License, Version 2.0 (la "licence") ; vous ne pouvez utiliser ce fichier sauf en conformité avec la licence. Vous pouvez obtenir une copie de la licence à

           http://www.Apache.org/licenses/License-2.0 sauf si requis par la loi applicable ou accord écrit, distribué sous la licence de logiciel est distribué sur un « Tel quel » fondement, sans garanties ou CONDITIONS d'aucune sorte, explicite ou implicite.  Voir la licence pour la langue spécifique régissant les autorisations et les limites
    

## aux termes de la licence.

# Configuration de VMWare Fusion

Cette section indique comment configurer VMWare Fusion sur un Mac, afin que vous puissiez utiliser Cordova pour générer des applications Windows Phone.

Le [Microsoft Developer Network][1] fournit des instructions générales pour l'exécution de Windows sous VMWare Fusion. Après l'installation de Windows, procédez comme suit :

 [1]: http://msdn.microsoft.com/en-US/library/windows/apps/jj945426

1.  Dans VMWare Fusion, sélectionnez l'image disque de Windows 8 vous avez préparé et choisissez **paramètres**.

2.  Choisissez les options de configuration de **processeurs et la mémoire** . Assurez-vous de spécifier *deux* cœurs de processeur et pour **permettre aux applications d'hyperviseur dans cette machine virtuelle**:
    
    ![][2]
    
    L'émulateur de Windows Phone seul utilise la moitié d'un mégaoctet de mémoire, donc globalement, que vous devez réserver au moins 2 Go pour VMWare.

3.  Choisissez les paramètres **avancés** . Activez le **moteur de virtualisation privilégiées : Intel VT-x avec EPT** option :
    
    ![][3]

4.  Modifiez le fichier *.vmx* pour ajouter ou modifier les paramètres suivants :
    
        Hypervisor.cpuid.v0 = « FALSE » mce.enable = « TRUE » vhv.enable = « TRUE »
        

 [2]: img/guide/platforms/wp8/vmware_memory_opts.png
 [3]: img/guide/platforms/wp8/vmware_advanced_opts.png

Lorsque vous avez terminé ces étapes, vous êtes alors prêt à installer le SDK de Windows Phone. Consultez le Guide de plate-forme Windows Phone pour plus de détails.