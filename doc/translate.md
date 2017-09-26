# Translate

Apache Cordova's documentation is written in English but translations are available in a number of different languages. These languages are chosen based on volunteers who are willing to help translate from English to their native tongue. We use Crowdin, a translation and localization management platform to collaborate amongst translators and our core team.

## The Process of Translating


(migrated from [../CONTRIBUTING.md](../CONTRIBUTING.md))

If you know another language and are willing to help translate Apache Cordova, here are the steps to get started:

1. Create a free account with Crowdin.net [http://crowdin.net](http://crowdin.net)
2. Search for and find the Cordova project [http://crowdin.net/project/cordova/](http://crowdin.net/project/cordova/)
3. Scroll down to find the languages that are currently being translated.
4. Choose a language and click on the language to start contributing. e.g. [Spanish](http://crowdin.net/project/cordova/es-ES)
5. Next to each of the markdown files you will see a button labelled "Translate". Clicking that button will open a translate page where the English version of the file is on the left.
6. Click on a phrase in the left-hand panel. Then type a translation in the textarea to the right. Click the "Commit Translation" button.
7. If a translation is already provided for a phrase you can vote it **up** or **down**. If you vote it **down** be sure to also include what you believe to be the correct translation.

### Tips

The headers are used to provide links between pages.  It is therefore critical that these headers have the exact same translation character for character.  Otherwise, the links will appear broken.  If, when building a language, a link is problem, check that the translations match.

## Adding a Language

(migrated from [README/en/README.md](README/en/README.md))

Do you want the Apache Cordova documentation in another language? We do too! With the support of [Crowdin](http://crowdin.net/project/cordova), a translation and localization management platform, translators can login to the easy-to-use tooling and provide as much or as little translation assistance as they would like. If you know another language please support Cordova and contribute. http://crowdin.net/project/cordova. For some best practices for using the Crowdin tool please see our wiki http://wiki.apache.org/cordova/CordovaTranslations.

Cordova language administrators, don't forget these steps:

__1. config.json__

For each language and version, there is a `config.json` that defines the name of the language and how to merge the files.

__2. Customizing HTML template__

Each language can override the default template in `template/docs/LANGUAGE`.

## QA for translation

(migrated from [README/en/README.md](README/en/README.md))

In order to maintain quality of documentation and translation, following tools could be used.

1. `fixyaml` tool.
2. `translationreport` tool.

### FixYaml tool.

The tool `fixyaml` created to automatically fix YAML headers in the translation files after exporting translated content from CrowdIn. Sometimes Crowdin messup with Apache license headers and this tool created to fix that.

Usage:

    bin\fixyaml             # Runs fixyaml across all docs.
    bin\fixyaml ru          # Runs fixyaml across all Russian docs.
    bin\fixyaml ru dev      # Runs fixyaml on the latest Russian docs.
    bin\fixyaml ru 5.0.0    # Runs fixyaml on the version 5.0.0 of Russian docs.

### Translation Report tool.

The tool `translationreport` currently provide two QA checks for translation.

1. It verifies that autolinking works after translation, and that translated text point to the same pages as
in the original documentation.
2. It verifies that translated and original files create same DOM structure, since after exporting from
Crowdin, the markdown files could contain unnescessary lines, which lead to broken HTML, and could create
not needed code sections for example.

## Recommendations for the translators

(migrated from [README/en/README.md](README/en/README.md))

If you intend to create quality translation of the Cordova docs, please not only work in Crowdin and translate documentation, but also please go extra mile and verify that generated documentation for your language is also produce quality results.

For that you should have Crowdin CLI tool. You could

1. take it from [here](https://crowdin.com/page/cli-tool)
2. or install alternate NodeJS client

    `npm -g install crowdin-cli`

You will use that tool for the downloading translation from Crowdin. To be able to download translated content from the Crowdin you should have API key for the project. Please ask for it on the mailing list.

After you receive access to API key, create `crowdin.yaml` coniguration file, as described in the [CrowdIn cli tool page](https://crowdin.com/page/cli-tool).

Now you ready to download content from CrowdIn. Run following commands (All commands here would be for NodeJS version of Crowdin CLI)

1. Prepare translated content for downloading.

        crowdin-cli export

    This command collect latest translations and made them available for downloading. Without that command, the translation which you would download would be stalled.

    Be careful with this command, since Crowdin implement throttling and allow you export content not faster then 1 time in 30 minutes, or so.

2. Download content for you language. I will use Russian as example.

        crowdin-cli download -l ru -o ru.zip

    This command download all translations for Russian language to the `ru.zip` file.

3. Now unpack the download content to the temporary directory.

        unzip -x ru.zip -d tmp/ru

4. Copy the unpacked content to the `docs` folder.
    * on Linux:

            cp tmp/ru/cordova-docs/docs/ru/dev/* docs/ru/dev/

    * on Windows:

            xcopy tmp/ru/cordova-docs/docs/ru/dev/* docs/ru/dev/

5. Remove temporary directory. In my case `tmp/ru`. Now you have fresh translation and could generate content.

6. Fix Yaml headers by running.

        bin/fixyaml ru dev

7. Run generator. You should generate both English version and language which you tranlate.

        bin/genjs en dev
        bin/genjs ru dev

    The generated documentation contains in the `public/en/dev` and `public/ru/dev`

    You need both versions, to validate that translated docs would have same structure as original documentation.

8. Validate you translation.

        bin/translationreport ru dev

    This will give you list of files which has structural differences from the original docs.
    Below the example output:

        => Validating translation for version dev on language ru...
        Comparing C:\Users\kant\Documents\GitHub\cordova-docs\public\en\dev
        with C:\Users\kant\Documents\GitHub\cordova-docs\public\ru\dev
        Path guide_platforms_blackberry10_upgrade.md.html is different.
        Path guide_platforms_blackberry_upgrade.md.html is different.
        Path guide_platforms_ios_tools.md.html is different.
        Path guide_support_index.md.html is different.

9. Now you could open pregenerated files and compare the English version with your translated versions.
    Open both versions and find out what's wrong.

    If on the first sight you could not find the differences, you could add switch `-v` which will increase verbosity of the tool.
    For example:

    `bin/translationreport ru dev -v`

10. Currently there two type of errors reported:

    a. Missing or additional links.

    b. The broken HTML structure.

11. Let's fix first type of errors - Missing/Additional links.

    To fix these type of errors you have to make sure that text in your translation where you want to have link,
    match exactly the header in the translated document, otherwise auto-linking would not work.
    You have to rephrase the sentences to fix that.

12. Broken HTML DOM structure.

    Most likely this type of errors caused by the additional lines created by Crowdin during export.
    You have to manually spot these places and remove additional lines when needed and then commit your changes to Git.
    Most likely these erorrs reappear after next exprot from CrowdIn, so don't hunt for these errors until release, or create
    tool which will fix these error after each export and use it.

13. Now you ready to create pull request with documentation to the main `cordova-docs` repository.

Enjoy translation!!!

## Translation Administration

(migrated from [https://github.com/apache/cordova-coho/blob/master/docs/doc-translation-process.md](https://github.com/apache/cordova-coho/blob/master/docs/doc-translation-process.md))

with **Crowdin Administrative Scripts**

There are two scripts and one jar file that need to be in place in your environment in order to automate the crowdin translation process.

- `crowdin-cli.jar`
- `crowdin.yaml`
- `github-crowdin.sh`

Information on the crowdin command line interface and tooling can be found here: [Crowdin cli].
 It includes a link to download the jar file for **Windows**, **Mac OS X**, and **Linux**.

### Demo video

**Lisa DeLuca** has created a demo video showing the process of translating as an adminstrator that can be viewed on youtube here: [Crowdin YouTube demo]

### crowdin.yaml

By default, the `crowdin-cli` will look for a configuration file called `crowdin.yaml`.
For **Cordova**, our `crowdin.yaml` file looks like this:


    project_identifier: cordova
    api_key: ____ourAPIkey________
    base_path: /Users/pathTO/git/cordova     #working copy path

    files:
      -
        source: "/cordova-docs/docs/en/edge/**/*.md"
        translation: "/cordova-docs/docs/%two_letters_code%/edge/**/%original_file_name%"
        ignore:
          - /.git
      -
        source: "/**/doc/*.md"
        translation: "/**/doc/%two_letters_code%/%original_file_name%"
        ignore:
          - /.git

It is recommended that **Crowdin** be pulled from a *fork* of the `cordova-docs` github project rather than directly from the main project.

This script grabs the **markdown** `.md` files from the `docs/en/edge` directory and pushes them into the Crowdin service for each of the lanuages that are available within crowdin.

For information on the `api_key` value,
please email the [crowdin project administrator].

## github-crowdin.sh

The `github-crowdin.sh` script is the script that is run to initiate the translation flow.
It is a custom script that first pushes any of the changed **markdown** files into crowdin.
It then searches through all of the languages from crowdin and downloads only those languages that are 100% translated.
Finally, it pushes the translated language files back into github.

    #!/bin/bash
    DOMAIN_NAME='http://api.crowdin.net'
    
    #---CHANGE THE VARIABLES BELOW---
    BASE_GIT_REPO_PATH=/Users/pathTo/git/cordova
    GIT_REPO_PATH=/Users/pathTo/git/cordova/cordova-docs
    CROWDIN_CLI_PATH=/Users/pathTo/crowdin
    PROJECT_IDENTIFIER='cordova'
    PROJECT_KEY='----insertkeyhere------'
    
    #--- git repos
    ## declare an array variable
    declare -a gitrepos=("cordova-docs" "cordova-cli" "cordova-plugin-battery-status" "cordova-plugin-camera" "cordova-plugin-console" "cordova-plugin-contacts" "cordova-plugin-device" "cordova-plugin-device-motion" "cordova-plugin-device-orientation" "cordova-plugin-dialogs" "cordova-plugin-file" "cordova-plugin-file-transfer" "cordova-plugin-geolocation" "cordova-plugin-globalization" "cordova-plugin-inappbrowser" "cordova-plugin-media" "cordova-plugin-media-capture" "cordova-plugin-network-information" "cordova-plugin-splashscreen" "cordova-plugin-statusbar" "cordova-plugin-vibration")
    
    
    read -p "What is the name of the JIRA issue?" jira
    
    #---
    ## now loop through the gitrepos array
    for i in "${gitrepos[@]}"
    do
       echo "**************** $i *************************"
       cd $BASE_GIT_REPO_PATH/$i
       
       # make sure the fork has the latest from apache master
       git checkout master
       git pull apache master
       git push origin master
    
       #create topic branch and checkout (USE -b flag for new branch)
       git checkout -b $jira$i
    
       # below pushes changes from local to fork
       git push origin $jira$i
    done
    
    rm
    cd $CROWDIN_CLI_PATH
    
    java -jar crowdin-cli.jar upload sources
    
    curl $DOMAIN_NAME/api/project/$PROJECT_IDENTIFIER/status?key=$PROJECT_KEY > result.xml
    
    read_dom () {
        local IFS=\>
        read -d \< ENTITY CONTENT
    }
    
    while read_dom; do
          if [[ $ENTITY = "code" ]] ; then
    	code=( "${code[@]}" "$CONTENT" )
          fi
          if [[ $ENTITY = "translated_progress" ]] ; then
    	progress=( "${progress[@]}" "$CONTENT" )
          fi
    done < result.xml
    
    for (( i = 0; i < ${#progress[@]}; i++ )); do
       if [ "${progress[$i]}" = "100" ]; then
          index=( "${index[@]}" "$i" )
       else 
          echo "------- language not at 100 percent ${code[$i]} ------"
       fi
    done
    
    for element in "${index[@]}"; do
        java -jar crowdin-cli.jar download -l ${code[$element]}
    done
    
    # fix crowdin issues:
    echo "About to fix crowdin errors with resulting files"cd
    #find /Users/ldeluca/git/cordova/ -name \*.md -exec sed -i "s/\* \* \*/---/1" {} \;
    #find /Users/ldeluca/git/cordova/ -name \*.md -exec sed -i "s/## under the License./   under the License.\n---/g" {} \;
    echo "Done with crowdin fix"
    
    ## now loop through the gitrepos array
    
        
    
    for i in "${gitrepos[@]}"
    do
       echo "**************** $i *************************"
       cd $BASE_GIT_REPO_PATH/$i
       git add .
       git commit -am "$jira $i documentation translation: $i"
    
    
        #update the new branch
        #notneeded git pull --rebase apache master
        git push origin $jira$i
    
        #merge topic branch into apache/master
        git checkout master
        git pull --rebase apache master
        git merge $jira$i
        git rebase apache/master -i
    
        #push changes of master
        git push apache master
    
        #all done, delete the branch
        git push origin $jira$i
        git branch -D $jira$i
    done
  


## Script output

The script will print out the name of each file being downloaded

    Download: `/docs/zh/edge/cordova/accelerometer/accelerometer.clearWatch.md'
    Download: `/docs/zh/edge/cordova/accelerometer/accelerometer.getCurrentAcceleration.md'
    Download: `/docs/zh/edge/cordova/accelerometer/accelerometer.md'
    Download: `/docs/zh/edge/cordova/accelerometer/accelerometer.watchAcceleration.md'
    Download: `/docs/zh/edge/cordova/accelerometer/acceleration/acceleration.md'
    Download: `/docs/zh/edge/cordova/accelerometer/parameters/accelerometerSuccess.md'
    Download: `/docs/zh/edge/cordova/accelerometer/parameters/accelerometerOptions.md'
    Download: `/docs/zh/edge/cordova/accelerometer/parameters/accelerometerError.md'
    Download: `/docs/zh/edge/cordova/camera/camera.cleanup.md'
    Download: `/docs/zh/edge/cordova/camera/camera.getPicture.md'
    Download: `/docs/zh/edge/cordova/camera/camera.md'
    Download: `/docs/zh/edge/cordova/camera/parameter/CameraPopoverHandle.md'
    Download: `/docs/zh/edge/cordova/camera/parameter/cameraSuccess.md'
    Download: `/docs/zh/edge/cordova/camera/parameter/cameraOptions.md'
    Download: `/docs/zh/edge/cordova/camera/parameter/cameraError.md'
    Download: `/docs/zh/edge/cordova/camera/parameter/CameraPopoverOptions.md'
    Download: `/docs/zh/edge/cordova/compass/compass.getCurrentHeading.md'
    Download: `/docs/zh/edge/cordova/compass/compass.md'
    Download: `/docs/zh/edge/cordova/compass/compass.watchHeading.md'
    Download: `/docs/zh/edge/cordova/compass/compass.watchHeadingFilter.md'
    Download: `/docs/zh/edge/cordova/compass/compass.clearWatch.md'
    Download: `/docs/zh/edge/cordova/compass/compass.clearWatchFilter.md'
    Download: `/docs/zh/edge/cordova/compass/compassError/compassError.md'
    Download: `/docs/zh/edge/cordova/compass/parameters/compassSuccess.md'
    Download: `/docs/zh/edge/cordova/compass/parameters/compassOptions.md'
    Download: `/docs/zh/edge/cordova/compass/parameters/compassHeading.md'
    Download: `/docs/zh/edge/cordova/compass/parameters/compassError.md'
    Download: `/docs/zh/edge/cordova/connection/connection.md'
    Download: `/docs/zh/edge/cordova/connection/connection.type.md'
    Download: `/docs/zh/edge/cordova/contacts/contacts.find.md'
    Download: `/docs/zh/edge/cordova/contacts/contacts.md'
    Download: `/docs/zh/edge/cordova/contacts/contacts.create.md'
    Download: `/docs/zh/edge/cordova/contacts/Contact/contact.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactAddress/contactaddress.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactError/contactError.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactField/contactfield.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactFindOptions/contactfindoptions.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactName/contactname.md'
    Download: `/docs/zh/edge/cordova/contacts/ContactOrganization/contactorganization.md'
    Download: `/docs/zh/edge/cordova/contacts/parameters/contactSuccess.md'
    Download: `/docs/zh/edge/cordova/contacts/parameters/contactFindOptions.md'
    Download: `/docs/zh/edge/cordova/contacts/parameters/contactFields.md'
    Download: `/docs/zh/edge/cordova/contacts/parameters/contactError.md'
    Download: `/docs/zh/edge/cordova/device/device.model.md'
    Download: `/docs/zh/edge/cordova/device/device.name.md'
    Download: `/docs/zh/edge/cordova/device/device.platform.md'
    Download: `/docs/zh/edge/cordova/device/device.uuid.md'
    Download: `/docs/zh/edge/cordova/device/device.version.md'
    Download: `/docs/zh/edge/cordova/device/device.cordova.md'
    Download: `/docs/zh/edge/cordova/device/device.md'
    Download: `/docs/zh/edge/cordova/events/events.md'
    Download: `/docs/zh/edge/cordova/events/events.menubutton.md'
    Download: `/docs/zh/edge/cordova/events/events.offline.md'
    Download: `/docs/zh/edge/cordova/events/events.online.md'
    Download: `/docs/zh/edge/cordova/events/events.pause.md'
    Download: `/docs/zh/edge/cordova/events/events.resume.md'
    Download: `/docs/zh/edge/cordova/events/events.searchbutton.md'
    Download: `/docs/zh/edge/cordova/events/events.startcallbutton.md'
    Download: `/docs/zh/edge/cordova/events/events.volumedownbutton.md'
    Download: `/docs/zh/edge/cordova/events/events.volumeupbutton.md'
    Download: `/docs/zh/edge/cordova/events/events.backbutton.md'
    Download: `/docs/zh/edge/cordova/events/events.batterycritical.md'
    Download: `/docs/zh/edge/cordova/events/events.batterylow.md'
    Download: `/docs/zh/edge/cordova/events/events.batterystatus.md'
    Download: `/docs/zh/edge/cordova/events/events.deviceready.md'
    Download: `/docs/zh/edge/cordova/events/events.endcallbutton.md'
    Download: `/docs/zh/edge/cordova/file/file.md'
    Download: `/docs/zh/edge/cordova/file/directoryentry/directoryentry.md'
    Download: `/docs/zh/edge/cordova/file/directoryreader/directoryreader.md'
    Download: `/docs/zh/edge/cordova/file/fileentry/fileentry.md'
    Download: `/docs/zh/edge/cordova/file/fileerror/fileerror.md'
    Download: `/docs/zh/edge/cordova/file/fileobj/fileobj.md'
    Download: `/docs/zh/edge/cordova/file/filereader/filereader.md'
    Download: `/docs/zh/edge/cordova/file/filesystem/filesystem.md'
    Download: `/docs/zh/edge/cordova/file/filetransfer/filetransfer.md'
    Download: `/docs/zh/edge/cordova/file/filetransfererror/filetransfererror.md'
    Download: `/docs/zh/edge/cordova/file/fileuploadoptions/fileuploadoptions.md'
    Download: `/docs/zh/edge/cordova/file/fileuploadresult/fileuploadresult.md'
    Download: `/docs/zh/edge/cordova/file/filewriter/filewriter.md'
    Download: `/docs/zh/edge/cordova/file/flags/flags.md'
    Download: `/docs/zh/edge/cordova/file/localfilesystem/localfilesystem.md'
    Download: `/docs/zh/edge/cordova/file/metadata/metadata.md'
    Download: `/docs/zh/edge/cordova/geolocation/geolocation.getCurrentPosition.md'
    Download: `/docs/zh/edge/cordova/geolocation/geolocation.md'
    Download: `/docs/zh/edge/cordova/geolocation/geolocation.watchPosition.md'
    Download: `/docs/zh/edge/cordova/geolocation/geolocation.clearWatch.md'
    Download: `/docs/zh/edge/cordova/geolocation/Coordinates/coordinates.md'
    Download: `/docs/zh/edge/cordova/geolocation/Position/position.md'
    Download: `/docs/zh/edge/cordova/geolocation/PositionError/positionError.md'
    Download: `/docs/zh/edge/cordova/geolocation/parameters/geolocationSuccess.md'
    Download: `/docs/zh/edge/cordova/geolocation/parameters/geolocationError.md'
    Download: `/docs/zh/edge/cordova/geolocation/parameters/geolocation.options.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getNumberPattern.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getPreferredLanguage.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.isDayLightSavingsTime.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.numberToString.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.stringToDate.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.stringToNumber.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.dateToString.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getCurrencyPattern.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getDateNames.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getDatePattern.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getFirstDayOfWeek.md'
    Download: `/docs/zh/edge/cordova/globalization/globalization.getLocaleName.md'
    Download: `/docs/zh/edge/cordova/globalization/GlobalizationError/globalizationerror.md'
    Download: `/docs/zh/edge/cordova/inappbrowser/inappbrowser.md'
    Download: `/docs/zh/edge/cordova/inappbrowser/window.open.md'
    Download: `/docs/zh/edge/cordova/media/media.getCurrentPosition.md'
    Download: `/docs/zh/edge/cordova/media/media.getDuration.md'
    Download: `/docs/zh/edge/cordova/media/media.md'
    Download: `/docs/zh/edge/cordova/media/media.pause.md'
    Download: `/docs/zh/edge/cordova/media/media.play.md'
    Download: `/docs/zh/edge/cordova/media/media.release.md'
    Download: `/docs/zh/edge/cordova/media/media.seekTo.md'
    Download: `/docs/zh/edge/cordova/media/media.setVolume.md'
    Download: `/docs/zh/edge/cordova/media/media.startRecord.md'
    Download: `/docs/zh/edge/cordova/media/media.stop.md'
    Download: `/docs/zh/edge/cordova/media/media.stopRecord.md'
    Download: `/docs/zh/edge/cordova/media/MediaError/mediaError.md'
    Download: `/docs/zh/edge/cordova/media/Parameters/mediaError.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureAudio.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureAudioOptions.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureImageOptions.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureVideo.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureImage.md'
    Download: `/docs/zh/edge/cordova/media/capture/captureVideoOptions.md'
    Download: `/docs/zh/edge/cordova/media/capture/capture.md'
    Download: `/docs/zh/edge/cordova/media/capture/MediaFile.getFormatData.md'
    Download: `/docs/zh/edge/cordova/media/capture/MediaFileData.md'
    Download: `/docs/zh/edge/cordova/media/capture/MediaFile.md'
    Download: `/docs/zh/edge/cordova/media/capture/ConfigurationData.md'
    Download: `/docs/zh/edge/cordova/media/capture/CaptureErrorCB.md'
    Download: `/docs/zh/edge/cordova/media/capture/CaptureError.md'
    Download: `/docs/zh/edge/cordova/media/capture/CaptureCB.md'
    Download: `/docs/zh/edge/cordova/notification/notification.confirm.md'
    Download: `/docs/zh/edge/cordova/notification/notification.md'
    Download: `/docs/zh/edge/cordova/notification/notification.prompt.md'
    Download: `/docs/zh/edge/cordova/notification/notification.vibrate.md'
    Download: `/docs/zh/edge/cordova/notification/notification.alert.md'
    Download: `/docs/zh/edge/cordova/notification/notification.beep.md'
    Download: `/docs/zh/edge/cordova/splashscreen/splashscreen.md'
    Download: `/docs/zh/edge/cordova/splashscreen/splashscreen.show.md'
    Download: `/docs/zh/edge/cordova/splashscreen/splashscreen.hide.md'
    Download: `/docs/zh/edge/cordova/storage/storage.md'
    Download: `/docs/zh/edge/cordova/storage/storage.opendatabase.md'
    Download: `/docs/zh/edge/cordova/storage/database/database.md'
    Download: `/docs/zh/edge/cordova/storage/localstorage/localstorage.md'
    Download: `/docs/zh/edge/cordova/storage/parameters/version.md'
    Download: `/docs/zh/edge/cordova/storage/parameters/display_name.md'
    Download: `/docs/zh/edge/cordova/storage/parameters/size.md'
    Download: `/docs/zh/edge/cordova/storage/parameters/name.md'
    Download: `/docs/zh/edge/cordova/storage/sqlerror/sqlerror.md'
    Download: `/docs/zh/edge/cordova/storage/sqlresultset/sqlresultset.md'
    Download: `/docs/zh/edge/cordova/storage/sqlresultsetrowlist/sqlresultsetrowlist.md'
    Download: `/docs/zh/edge/cordova/storage/sqltransaction/sqltransaction.md'
    Download: `/docs/zh/edge/guide/cli/index.md'
    Download: `/docs/zh/edge/guide/overview/index.md'
    Download: `/docs/zh/edge/guide/platforms/index.md'
    Download: `/docs/zh/edge/guide/platforms/android/plugin.md'
    Download: `/docs/zh/edge/guide/platforms/android/tools.md'
    Download: `/docs/zh/edge/guide/platforms/android/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/android/webview.md'
    Download: `/docs/zh/edge/guide/platforms/android/config.md'
    Download: `/docs/zh/edge/guide/platforms/android/index.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry/plugin.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry/tools.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry/config.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry/index.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry10/plugin.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry10/tools.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry10/index.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry10/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/blackberry10/config.md'
    Download: `/docs/zh/edge/guide/platforms/firefoxos/config.md'
    Download: `/docs/zh/edge/guide/platforms/ios/tools.md'
    Download: `/docs/zh/edge/guide/platforms/ios/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/ios/webview.md'
    Download: `/docs/zh/edge/guide/platforms/ios/config.md'
    Download: `/docs/zh/edge/guide/platforms/ios/index.md'
    Download: `/docs/zh/edge/guide/platforms/ios/plugin.md'
    Download: `/docs/zh/edge/guide/platforms/tizen/index.md'
    Download: `/docs/zh/edge/guide/platforms/win8/tools.md'
    Download: `/docs/zh/edge/guide/platforms/win8/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/win8/index.md'
    Download: `/docs/zh/edge/guide/platforms/wp7/index.md'
    Download: `/docs/zh/edge/guide/platforms/wp8/tools.md'
    Download: `/docs/zh/edge/guide/platforms/wp8/upgrading.md'
    Download: `/docs/zh/edge/guide/platforms/wp8/index.md'
    Download: `/docs/zh/edge/guide/platforms/wp8/plugin.md'
    Download: `/docs/zh/edge/guide/appdev/privacy/index.md'
    Download: `/docs/zh/edge/guide/appdev/whitelist/index.md'
    Download: `/docs/zh/edge/guide/hybrid/plugins/index.md'
    Download: `/docs/zh/edge/guide/hybrid/webviews/index.md'
    Download: `/docs/zh/edge/index.md'
    Download: `/docs/zh/edge/config_ref/index.md'
    Download: `/docs/zh/edge/plugin_ref/spec.md'
    Download: `/docs/zh/edge/plugin_ref/plugman.md'
    About to fix crowdin errors with resulting files
    Done with crowdin fix
    # On branch master
    nothing to commit (working directory clean)
    Everything up-to-date


### Crowdin Error Debugging

After running the `github-crowdin.sh` script, some common messages might include:

```
 Warning: Downloaded translations does not match current project configuration.
 Some of the resulted files will be omitted.

   - docs/zh/README.md
```

```
Crowdin has internal caching mechanisms that prevents us from overload.
Please try to download translations later.
```

This message can be ignored.
It does not affect the downloaded files.
It simply means that that **markdown** file no longer exists.
Please [open a JIRA] issue and assign to `Lisa DeLuca` to let her know if you see this error.
Then the file can be removed from the crowdin file manager.

```
A communication error occured: ""
</FONT>
</TD></TR>
<TR><TD>
<FONT face="Helvetica">
The Web Server may be down, too busy, or experiencing other problems preventing it from responding to requests.  You may wish to try again at a later time.
```

It is often the case where you will see a message that crowdin is down, like the one shown above.
In which case you'll need to wait until Crowdin is back up or email the [crowdin support team].
Alternatively, it could just mean that a manual build needs to be kicked off within the Crowdin tool.
Under `Settings > Translation >` click the button to `build a fresh package`.

### Testing Translations

Before performing a pull request it is recommended that each language be built locally and tested for accuracy.
To do this, run the following script:

    ~/git/cordova-docs$ bin/generate ru edge

`ru` in this case would run the Russian language.
See the `cordova-docs` documentation for more information on building the documentation.

### Viewing Translations

After the translations have been pulled into the main Apache Cordova branch they can be viewed here: [Cordova docs edge].

* Go to the upper-right-hand corner and select the drop down.
* Scrolling to the bottom you will see the new languages that have been translated.

The translations for the individual plugins
are only viewable from GitHub under the docs directory for each plugin.

## Manual Steps

Even though the majority of the Crowdin Apache Cordova translations are automated there are still a few things that need to be manually monitored by our administrators.

- Headers - Consistency in translation between headers and other linked content
- Code snippets - Marking code snippets as `Do not translate`

### Headers

When a header is not consistently translated between pages then a link will appear broken and it will be impossible for users to view the content.

If, when verifying translated documentation,
a link doesn't appear highlighted and clickable,
go through the **markdown** files and make sure the translations are consistent for the headers.

It is recommended that the documentation is built and verified after each crowdin script is run before contributing the content back into the main stream.

### Code Snippets

Code snippets should be marked as `Do not translate` which will not allow individual translators to come in and translate the code snippets.

However, when *new code snippets* or *commands* are entered in the code, the administrator will need to come in and *mark that new section* which could lead to it going *unmarked* and *manual* or *automated translations* of the code might occur.

To remedy this, an administrator can go into the code snippet and *delete the suggested translation* and *mark the phrase* as `Do not translate`.

Another example is the use of *method names*, *constants*, etc., scattered throughout the documentation.
It is not currently possible for an administrator to mark each of these elements as `Do not translate`,
so our proofreaders will need to go through and verify they are not translated by translators or by the automated translation services.

[Crowdin.net]: http://crowdin.net "Crowdin.net"
[Crowdin Cordova project]: http://crowdin.net/project/cordova/
[Spanish Cordova project]: http://crowdin.net/project/cordova/es-ES
[Crowdin cli]: http://crowdin.net/page/cli-tool
[Crowdin YouTube demo]: http://www.youtube.com/watch?v=LSnk3lAd7bo
[Cordova docs edge]: http://cordova.apache.org/docs/en/edge/index.html
[JIRA]: https://issues.apache.org/jira/browse/CB
[open a JIRA]: https://issues.apache.org/jira/secure/CreateIssue.jspa
[crowdin support team]: mailto:support@crowdin.net
[crowdin project administrator]: mailto:ldeluca@apache.org
