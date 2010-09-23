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
    'device.md'          => [ 'device.name.md',
                              'device.phonegap.md',
                              'device.platform.md',
                              'device.uuid.md',
                              'device.version.md' ],
    'events.md'          => [ 'events.deviceready.md' ],
    'geolocation.md'     => [ 'geolocation.getCurrentPosition.md',
                              'geolocation.watchPosition.md',
                              'geolocation.clearWatch.md',
                              File.join('Coordinates', 'coordinates.md'),
                              File.join('Position',    'position.md'),
                              File.join('parameters',   'geolocationSuccess.md'),
                              File.join('parameters',   'geolocationError.md'),
                              File.join('parameters',   'geolocation.options.md') ],
    'network.md'         => [ 'network.isReachable.md',
                              File.join('NetworkStatus', 'NetworkStatus.md'),
                              File.join('parameters',   'reachableCallback.md'),
                              File.join('parameters',   'reachableHostname.md'),
                              File.join('parameters',   'reachableOptions.md') ],
    'notification.md'    => [ 'notification.alert.md',
                              'notification.beep.md',
                              'notification.vibrate.md' ]
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