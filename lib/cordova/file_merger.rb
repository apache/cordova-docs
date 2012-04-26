require 'fileutils'
require 'rubygems'
require 'json'

class FileMerger
  def initialize
  end

  def run(filepath)
    # skip the guides
    return if filepath.match(/\/guide\//)
    
    # skip missing files (file that are merged are also deleted)
    return unless File.exists?(filepath)
    
    # file info
    @filename  = File.basename(filepath)
    @directory = File.dirname(filepath)
    
    # skip unless file is referenced in the merge JSON
    return unless config.include?(@filename)
    
    # open the file to merge into
    File.open filepath, 'a' do |f|
      # loop over the files to merge
      config[@filename].each do |filepath|
        # skip the file that we're merging into because it's listed in config.json
        next if File.basename(filepath) == @filename
        
        # hacky to qualify the path
        filepath = File.join('tmp', 'docs', filepath)
        
        # append and delete the file
        f.write "\n\n---\n"
        f.write File.read(filepath).strip
        FileUtils.rm filepath
      end
    end
  end

  def config
      return @config unless @config.nil?
      
      directory = @directory
      
      while @config.nil?
        file = File.join(directory, 'config.json')
        
        if File.exists?(file)
          @config = (JSON.parse IO.read(file))['merge']
        else
          directory = File.dirname(directory)
        end
      end
      
      return @config
  end

  def file_exists?(file_path)
    return true if File.exists? file_path

    puts "Missing: #{file_path}"
    return false
  end
end
