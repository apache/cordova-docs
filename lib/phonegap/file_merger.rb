require 'fileutils'
require 'rubygems'
require 'json'

class FileMerger
  def initialize
  end

  def run(file_path)
    # partial files are deleted after being merged, so they may not exist
    return unless File.exists? file_path
    
    root_name = File.basename file_path
    @root_dir ||= File.dirname file_path
    @json     ||= config_json(@root_dir)['merge']

    @json.each do |name, files| 
      if name == root_name
        File.open file_path, 'a' do |file|
          files.each do |filename|
            filename = File.join @root_dir, filename
            next unless file_exists? filename
            file.write "\n\n---\n"
            file.write File.read(filename).strip
            FileUtils.rm filename unless name == File.basename(filename)
          end
        end
      end
    end
  end

  def config_json(basename)
      file = File.join basename, 'config.json'
      return JSON.parse IO.read(file)
  end

  def file_exists?(file_path)
    return true if File.exists? file_path

    puts "Missing: #{file_path}"
    return false
  end
end
