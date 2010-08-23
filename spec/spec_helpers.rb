$:.unshift File.join(File.dirname(__FILE__), '..', 'lib')
$:.unshift File.join(File.dirname(__FILE__), '..', 'lib', 'phonegap')
require 'file_helpers'
require 'fileutils'

class Helper
  @@helpers = Object.new.extend(FileHelpers)
  
  def self.create_tmp_directory_assets(reference_filename = nil)
    if reference_filename.nil?
      directories = { :source => docs_directory, :destination => tmp_docs_directory }
    else
      directories = find_test_directories(reference_filename)
    end
    
    if directories
      @@helpers.copy_directory(directories[:source], directories[:destination])
    end
    
    directories[:destination]
  end
  
  def self.tmp_public_directory
    File.join(tmp_directory, 'public')
  end
  
  def self.remove_tmp_directory
    FileUtils.rm_rf(tmp_directory)
  end
  
  private
  
  def self.root_directory
    File.expand_path File.dirname(__FILE__)
  end
  
  def self.tmp_directory
    File.expand_path File.join(root_directory, '..', 'tmp_spec')
  end
  
  def self.docs_directory
    @@helpers.default_input_directory
  end
  
  def self.tmp_docs_directory
    File.join(tmp_directory, 'docs')
  end
  
  def self.find_test_directories(filename)
    source_directory      = filename.sub(/#{File.extname(filename)}$/, '')
    destination_directory = File.join(tmp_directory, File.basename(source_directory))
    
    return nil unless File.directory?(source_directory)
    { :source => source_directory, :destination => destination_directory }
  end
end