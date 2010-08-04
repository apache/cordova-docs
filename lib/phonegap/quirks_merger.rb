require 'fileutils'

class QuirksMerger
  attr_accessor :phonegap_path
  
  def run(file_path)
    @phonegap_path = nil
    
    platform_directory = find_directory_containing(file_path, 'phonegap')
    return if platform_directory.nil?
    return if File.basename(platform_directory).downcase == 'phonegap'
    
    @phonegap_path = generate_phonegap_path(file_path, platform_directory)
    return unless File.file? @phonegap_path
    
    phonegap_data = File.read(@phonegap_path).strip
    partial_data  = File.read(file_path).strip

    File.open(@phonegap_path, 'w') { |file| file.write(phonegap_data + "\n\n" + partial_data) }
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
  
  def generate_phonegap_path(full_path, platform_path)
    path = {
      :prefix   => File.dirname(platform_path),
      :platform => File.basename(platform_path),
      :postfix  => full_path.sub(platform_path, '')
    }
    
    "#{path[:prefix]}/phonegap/#{path[:postfix]}".gsub(/\/+/, '/')
  end
end