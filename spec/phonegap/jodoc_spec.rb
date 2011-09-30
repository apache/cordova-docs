$:.unshift File.join(File.dirname(__FILE__), '..')
require 'spec_helpers'
require 'jodoc'

describe JoDoc do
  before :all do
    @tmp_public_directory = Helper::tmp_public_directory
    PhoneGapDocs.new(Helper::create_tmp_directory_assets, @tmp_public_directory).run
  end
  
  it 'should run on a validate directory' do
    File.directory?(@tmp_public_directory).should be_true
  end
  
  it 'should not run on a non-existent directory' do
    bad_input_directory = File.expand_path File.join(File.dirname(__FILE__), 'hello', 'world')
    lambda { JoDoc.new bad_input_directory,  @tmp_public_directory }.should raise_exception
  end
  
  it 'should generate HTML assets from Markdown' do
    File.exists?(File.join(@tmp_public_directory, 'en', 'edge', 'phonegap_accelerometer_accelerometer.md.html')).should be_true
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end
