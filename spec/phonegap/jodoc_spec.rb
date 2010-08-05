$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'jodoc'

describe JoDoc do
  include SpecHelpers
  
  it 'should require a valid input directory' do
    bad_input_directory  = File.expand_path( File.join File.dirname(__FILE__), 'hello', 'world' )
    good_input_directory = spec_input_directory
    
    lambda { JoDoc.new bad_input_directory,  spec_tmp_directory }.should raise_exception
    lambda { JoDoc.new good_input_directory, spec_tmp_directory }.should_not raise_exception
  end
  
  it 'should create template assets and HTML' do
    spec_empty_output_directory
    
    JoDoc.new(spec_input_directory, spec_output_directory).run
    File.exists?(File.join spec_output_directory, 'doc.css').should be_true
    File.exists?(File.join spec_output_directory, 'introduction.md.html').should be_true
    
    spec_empty_output_directory
  end
end