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
  #   - Create a work space for the docs processing
  #   - Pre-file processing
  #   - Run joDoc
  #   - Pre-file processing
  #   - Release and cleanup
  #
  def run
    copy_directory(@input_directory, @working_directory)

    @working_directory = after_jodoc jodocify before_jodoc(@working_directory)
    
    move_directory(@working_directory, @output_directory)
    empty_tmp_directory
  end
  
  protected
  
  def before_jodoc(input_directory)
    klasses = [ YamlFrontMatter.new, QuirksMerger.new, FileMerger.new ]
    
    klasses.each do |klass|
      each_file input_directory do |file|
        klass.run file
      end
    end
    
    input_directory
  end
  
  def jodocify(input_directory)
    output_directory = File.join tmp_directory, 'jodoc'
    JoDoc.new(input_directory, output_directory).run
    
    output_directory
  end
  
  def after_jodoc(input_directory)
    klasses = [ AddTitle.new, UpdateIndex.new, UpdateKeywordIndex.new ]
    
    klasses.each do |klass|
      each_file input_directory do |file|
        klass.run file
      end
    end
    
    input_directory
    
    input_directory
  end
end