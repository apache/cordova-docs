$: << File.join(File.dirname(__FILE__))
$: << File.join(File.dirname(__FILE__), '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'file_helpers'
require 'fileutils'

describe FileHelpers do
  include SpecHelpers
  
  before :all do
    @helpers = Object.new.extend FileHelpers
  end
  
  it 'should have a default input directory that exists' do
    File.exists?(@helpers.default_input_directory).should be_true
  end
  
  it 'should copy directories' do
    FileUtils.rm_rf @helpers.tmp_directory
    
    @helpers.copy_directory(spec_input_directory, @helpers.tmp_directory)
    input_content = Dir.glob( File.join(spec_input_directory, '**', '*') )
    tmp_content   = Dir.glob( File.join(@helpers.tmp_directory, '**', '*') )
    
    input_content.length.should == tmp_content.length
    
    FileUtils.rm_rf @helpers.tmp_directory
  end
  
  it 'should move a directory' do
    FileUtils.rm_rf @helpers.tmp_directory
    FileUtils.mkdir @helpers.tmp_directory
    
    tmp_directory    = File.join @helpers.tmp_directory, 'docs'
    output_directory = File.join @helpers.tmp_directory, 'public'
    
    File.exists?(tmp_directory).should    be_false
    File.exists?(output_directory).should be_false
    
    @helpers.copy_directory(spec_input_directory, tmp_directory)
    @helpers.move_directory(tmp_directory, output_directory)
    
    File.exists?(tmp_directory).should    be_false
    File.exists?(output_directory).should be_true
        
    FileUtils.rm_rf @helpers.tmp_directory
  end
  
  it 'should yield each file in the directory' do
    files = []
    
    @helpers.each_file spec_input_directory do |file|
      files.push(file)
    end
    
    files.should have_at_least(1).items
  end
end