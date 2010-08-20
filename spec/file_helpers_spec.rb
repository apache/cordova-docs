$:.unshift File.join(File.dirname(__FILE__))
require 'spec_helpers'

describe FileHelpers do
  before :all do
    @helpers = Object.new.extend FileHelpers
  end
  
  before :each do
    Helper::remove_tmp_directory
    
    @tmp_docs_directory   = Helper::create_tmp_directory_assets
    @tmp_public_directory = Helper::tmp_public_directory
  end
  
  it 'should have a default input directory that exists' do
    File.exists?(@helpers.default_input_directory).should be_true
  end
  
  it 'should copy directories' do
    @helpers.copy_directory(@tmp_docs_directory, @tmp_public_directory)
    
    input_content = Dir.glob File.join(@tmp_docs_directory, '**', '*')
    tmp_content   = Dir.glob File.join(@tmp_public_directory, '**', '*')
    input_content.length.should == tmp_content.length
  end
  
  it 'should move a directory' do
    File.exists?(@tmp_public_directory).should be_false
    
    @helpers.move_directory(@tmp_docs_directory, @tmp_public_directory)
    
    File.exists?(@tmp_docs_directory).should be_false
    File.exists?(@tmp_public_directory).should be_true
  end
  
  it 'should yield each file in the directory' do
    files = []
    
    @helpers.each_file @tmp_docs_directory do |file|
      files.push(file)
    end
    
    files.should have_at_least(1).items
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end