require 'fileutils'

class QuirksMerger
  attr_accessor :cordova_path
  
  def run(file_path)
    @cordova_path = nil
    
    platform_directory = find_directory_containing(file_path, 'phonegap')
    platform_directory = find_directory_containing(file_path, 'cordova') if platform_directory.nil?
    return if platform_directory.nil?
    return if ['phonegap', 'cordova'].include?(File.basename(platform_directory).downcase)
    
    @cordova_path = generate_cordova_path(file_path, platform_directory)
    return unless File.file? @cordova_path
    
    cordova_data = File.read(@cordova_path).strip
    partial_data  = File.read(file_path).strip

    File.open(@cordova_path, 'w') { |file| file.write(cordova_data + "\n\n" + partial_data) }
    FileUtils.rm file_path
  end
  
  protected
  
  def find_directory_containing(directory, directory_to_find)
    platform_name = nil
    
    until File.exists? File.join(directory, directory_to_find)
      return nil if File.dirname(directory) == directory
      
      platform_name = File.basename(directory)
      directory     = File.dirname(directory)
    end
    
    File.join directory, platform_name
  end
  
  def generate_cordova_path(full_path, platform_path)
    path = {
      :prefix   => File.dirname(platform_path),
      :platform => File.basename(platform_path),
      :postfix  => full_path.sub(platform_path, '')
    }
    
    "#{path[:prefix]}/#{path[:platform]}/#{path[:postfix]}".gsub(/\/+/, '/')
  end
end