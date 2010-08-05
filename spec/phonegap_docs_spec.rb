$: << File.join(File.dirname(__FILE__))
$: << File.join(File.dirname(__FILE__), '..', 'lib')
require 'spec_helpers'
require 'phonegap_docs'
require 'file_helpers'

describe PhoneGapDocs do
  include SpecHelpers
  
  before :all do
    PhoneGapDocs.new(spec_input_directory, spec_output_directory).run
  end
  
  it 'should create an output directory' do
    File.exists?(spec_output_directory).should be_true
    Dir.glob( File.join(spec_output_directory, '**', '*') ).should have_at_least(1).items
  end
  
  it 'should have a valid default directories' do
    phonegap_docs = PhoneGapDocs.new
    File.exists?(phonegap_docs.input_directory).should be_true
    File.exists?( File.dirname(phonegap_docs.output_directory) ).should be_true
  end
  
  it 'should accept custom directories' do
    phonegap_docs = PhoneGapDocs.new(spec_input_directory, spec_output_directory)
    phonegap_docs.input_directory.should  == spec_input_directory
    phonegap_docs.output_directory.should == spec_output_directory
  end
  
  after :all do
    FileUtils.rm_rf spec_output_directory
  end
end