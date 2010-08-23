$:.unshift File.join(File.dirname(__FILE__))
require 'spec_helpers'
require 'phonegap_docs'

describe PhoneGapDocs do
  before :each do
    @tmp_docs_directory   = Helper::create_tmp_directory_assets
    @tmp_public_directory = Helper::tmp_public_directory
    @phonegap_docs = PhoneGapDocs.new(@tmp_docs_directory, Helper::tmp_public_directory)
  end
  
  it 'should create an output directory' do
    @phonegap_docs.run
    File.exists?(@tmp_public_directory).should be_true
    Dir.glob(File.join(@tmp_public_directory, '**', '*')).should have_at_least(1).items
  end
  
  it 'should have a valid default directories' do
    phonegap_docs = PhoneGapDocs.new
    File.exists?(phonegap_docs.input_directory).should be_true
  end
  
  it 'should accept custom directories' do
    @phonegap_docs.run
    @phonegap_docs.input_directory.should  == @tmp_docs_directory
    @phonegap_docs.output_directory.should == @tmp_public_directory
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end