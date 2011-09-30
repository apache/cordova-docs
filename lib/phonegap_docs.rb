$: << File.join(File.dirname(__FILE__))
$: << File.join(File.dirname(__FILE__), 'phonegap')
require 'file_helpers'
require 'yaml_front_matter'
require 'quirks_merger'
require 'file_merger'
require 'add_title'
require 'update_index'
require 'update_keyword_index'
require 'jodoc'
require 'fileutils'
require 'table_of_contents'
require 'version_menu'
require 'navigation_menu'
require 'prettify'

class PhoneGapDocs
  include FileHelpers
  
  attr_accessor :input_directory
  attr_accessor :output_directory
  
  def initialize(input_directory = nil, output_directory = nil)
    @input_directory   = input_directory  || default_input_directory
    @output_directory  = output_directory || default_output_directory
    @working_directory = File.join tmp_directory, 'docs'
  end
  
  # PhoneGap Build-Time Steps
  #   - For each version of the documentation
  #     - Create a work space for the docs processing
  #     - Pre-file processing
  #     - Run joDoc
  #     - Pre-file processing
  #     - Release and cleanup
  #
  def run
    empty_output_directory

    ignore_list = ['.', '..', '.DS_Store']

    Dir.foreach @input_directory do |language_dir|
      next if ignore_list.include? language_dir
      language_path = File.join @input_directory, language_dir

      Dir.foreach language_path do |version_dir|
        next if ignore_list.include? version_dir
        output_path = File.join @output_directory, language_dir, version_dir
        input_path  = File.join @input_directory,  language_dir, version_dir
        options     = { :lang => language_dir, :version => version_dir }
        next unless File.directory? input_path

        copy_directory(input_path, @working_directory)

        puts " => Generating the PhoneGap Documentation for #{version_dir}-#{language_dir}..."
        generated_path = after_jodoc(jodocify(before_jodoc(@working_directory, options), options), options)

        move_directory(generated_path, output_path)
        empty_tmp_directory
      end
    end
  end
  
  protected
  
  def before_jodoc(input_directory, options)
    klasses = [ YamlFrontMatter.new, QuirksMerger.new, FileMerger.new ]
    
    klasses.each do |klass|
      each_file input_directory do |file|
        klass.run file
      end
    end
    
    input_directory
  end
  
  def jodocify(input_directory, options)
    output_directory = File.join tmp_directory, 'jodoc'
    JoDoc.new(input_directory, output_directory, options).run
    
    output_directory
  end
  
  def after_jodoc(input_directory, options)
    klasses = [ AddTitle.new, UpdateIndex.new, UpdateKeywordIndex.new, TableOfContents.new, VersionMenu.new(options), NavigationMenu.new(options), Prettify.new ]
    
    klasses.each do |klass|
      each_file input_directory do |file|
        klass.run file
      end
    end
    
    input_directory
  end
end
