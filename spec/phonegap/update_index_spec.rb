$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'update_index'
require 'nokogiri'

describe UpdateIndex do
  include SpecHelpers
  
  before :all do
    @original_file = File.join(File.dirname(__FILE__),   'update_index_spec', 'index.md.html')
    @test_file     = File.join(spec_tmp_directory,       'index.md.html')
    @result_file   = File.join(File.dirname(@test_file), 'index.html')
    
    FileUtils.mkdir_p spec_tmp_directory
    
    @update_index = UpdateIndex.new
  end
  
  before :each do
    FileUtils.cp @original_file, @test_file
  end

  it 'should skip all files but index.html.html' do
    # All false
    @update_index.run('index.html').should be_false
    @update_index.run('index.htm').should be_false
    @update_index.run('_index.html').should be_false
    
    # True
    @update_index.run(@test_file).should be_true
  end
  
  it 'should rename the title' do
    Nokogiri::HTML(File.read @test_file).css('#header2 > h1')[0].content.should_not == @update_index.header_title
    @update_index.run(@test_file)
    Nokogiri::HTML(File.read @result_file).css('#header2 > h1')[0].content.should == @update_index.header_title
  end

  it 'should rename the file' do
    File.exists?(@test_file).should  be_true
    File.exists?(@result_file).should be_false
    
    @update_index.run(@test_file)
    
    File.exists?(@test_file).should be_false
    File.exists?(@result_file).should be_true
  end
  
  after :each do
    FileUtils.rm @result_file if File.exists? @result_file
  end
  
  after :all do
    FileUtils.rm_rf spec_tmp_directory
  end
end