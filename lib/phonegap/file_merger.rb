require 'fileutils'

class FileMerger
  INTERFACES = {
    'accelerometer.md'   => [ 'accelerometer.getCurrentAcceleration.md',
                              'accelerometer.watchAcceleration.md',
                              'accelerometer.clearWatch.md',
                              File.join('acceleration', 'acceleration.md'),
                              File.join('parameters',   'accelerometerSuccess.md'),
                              File.join('parameters',   'accelerometerError.md'),
                              File.join('parameters',   'accelerometerOptions.md') ],
    'camera.md'          => [ 'camera.getPicture.md',
                              File.join('parameter',   'cameraSuccess.md'),
                              File.join('parameter',   'cameraError.md'),
                              File.join('parameter',   'cameraOptions.md') ],
    'compass.md'         => [ 'compass.getCurrentHeading.md',
                              'compass.watchHeading.md',
                              'compass.clearWatch.md',
                              File.join('parameters',   'compassSuccess.md'),
                              File.join('parameters',   'compassError.md'),
                              File.join('parameters',   'compassOptions.md') ],
    'contacts.md'          => [ 'contacts.create.md',
                              'contacts.find.md',
                              File.join('Contact',   'contact.md'),
                              File.join('ContactAddress',   'contactaddress.md'),
                              File.join('ContactField',   'contactfield.md'),
                              File.join('ContactFindOptions',   'contactfindoptions.md'),
                              File.join('ContactName',   'contactname.md'),
                              File.join('ContactOrganization',   'contactorganization.md'), 
                              File.join('ContactError','contactError.md'),
                              File.join('parameters',   'contactSuccess.md'),
                              File.join('parameters',   'contactError.md'),
                              File.join('parameters',   'contactFields.md'),
                              File.join('parameters',   'contactFindOptions.md') ],
    'device.md'          => [ 'device.name.md',
                              'device.phonegap.md',
                              'device.platform.md',
                              'device.uuid.md',
                              'device.version.md' ],
    'events.md'          => [ 'events.deviceready.md' ],
	'file.md'			 => [File.join('fileobj', 'file.md'),
							File.join('filereader', 'filereader.md'),
							File.join('filewriter', 'filewriter.md'),
							File.join('filesystem', 'filesystem.md'),
							File.join('fileentry', 'fileentry.md'),
							File.join('directoryentry', 'directoryentry.md'),
							File.join('directoryreader', 'directoryreader.md'),
							File.join('filetransfer', 'filetransfer.md'),
							File.join('fileuploadoptions', 'fileuploadoptions.md'),
							File.join('fileuploadresult', 'fileuploadresult.md'),
							File.join('flags', 'flags.md'),
							File.join('localfilesystem', 'localfilesystem.md'),
							File.join('metadata', 'metadata.md'),
							File.join('fileerror', 'fileerror.md'),
							File.join('filetransfererror', 'filetransfererror.md')],
    'geolocation.md'     => [ 'geolocation.getCurrentPosition.md',
                              'geolocation.watchPosition.md',
                              'geolocation.clearWatch.md',
                              File.join('Coordinates', 'coordinates.md'),
                              File.join('Position',    'position.md'),
                              File.join('PositionError','positionError.md'),
                              File.join('parameters',   'geolocationSuccess.md'),
                              File.join('parameters',   'geolocationError.md'),
                              File.join('parameters',   'geolocation.options.md') ],
    'media.md'           => [ 'media.getCurrentPosition.md',
                              'media.getDuration.md',
                              'media.pause.md',
                              'media.play.md',
                              'media.release.md',
                              'media.startRecord.md',
                              'media.stop.md',
                              'media.stopRecord.md',
                              File.join('MediaError','mediaError.md'),
                              File.join('Parameters','mediaError.md') ],                          
    'network.md'         => [ 'network.isReachable.md',
                              File.join('NetworkStatus', 'NetworkStatus.md'),
                              File.join('parameters',   'reachableCallback.md'),
                              File.join('parameters',   'reachableHostname.md'),
                              File.join('parameters',   'reachableOptions.md') ],
    'notification.md'    => [ 'notification.alert.md',
                              'notification.confirm.md',
                              'notification.beep.md',
                              'notification.vibrate.md' ],
	'storage.md'		 => [ 'storage.opendatabase.md',
                              File.join('parameters',   'name.md'),
                              File.join('parameters',   'version.md'),
                              File.join('parameters',   'display_name.md'),
                              File.join('parameters',   'size.md'),
                              File.join('database',   	'database.md'),
                              File.join('sqltransaction',   	'sqltransaction.md'),
                              File.join('sqlresultset',   	'sqlresultset.md'),
                              File.join('sqlresultsetlist',   	'sqlresultsetlist.md'),
                              File.join('sqlerror',   	'sqlerror.md'),
							  File.join('localstorage', 	'localstorage.md') ]
  }
  
  def run(file_path)
    return unless File.exists? file_path
    
    root_name = File.basename file_path
    
    INTERFACES.each do |name, files| 
      if name == root_name
        File.open file_path, 'a' do |file|
          files.each do |filename|
            filename = File.join File.dirname(file_path), filename
            file.write "\n\n---\n"
            file.write File.read(filename).strip
            FileUtils.rm filename
          end
        end
      end
    end
  end
end