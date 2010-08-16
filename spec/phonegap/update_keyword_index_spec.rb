$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'update_keyword_index'
require 'nokogiri'

describe UpdateKeywordIndex do
  include SpecHelpers
  
  before :all do
    @original_file = File.join(File.dirname(__FILE__),   'update_keyword_index_spec', '_index.html')
    @test_file     = File.join(spec_tmp_directory,       '_index.html')
    @result_file   = File.join(File.dirname(@test_file), '_index.html')
    
    FileUtils.mkdir_p spec_tmp_directory
    
    @update_keyword = UpdateKeywordIndex.new
  end
  
  before :each do
    FileUtils.cp @original_file, @test_file
  end

  it 'should skip all files but _index.html' do
    # All false
    @update_keyword.run('index.html').should be_false
    @update_keyword.run('index.htm').should be_false
    @update_keyword.run('_index.htm').should be_false
    
    # True
    @update_keyword.run(@test_file).should be_true
  end
  
  it 'should rename the title' do
    Nokogiri::HTML(File.read @test_file).css('#header2 > h1')[0].content.should_not == @update_keyword.header_title
    @update_keyword.run(@test_file)
    Nokogiri::HTML(File.read @result_file).css('#header2 > h1')[0].content.should == @update_keyword.header_title
  end
  
  it 'should rename the h1' do
    Nokogiri::HTML(File.read @test_file).css('#content > h1')[0].content.should_not == @update_keyword.content_title
    @update_keyword.run(@test_file)
    Nokogiri::HTML(File.read @result_file).css('#content > h1')[0].content.should == @update_keyword.content_title
  end
  
  it 'should remove the <hr/>' do
    Nokogiri::HTML(File.read @test_file).css('#content > hr').should have_at_least(1).items
    @update_keyword.run(@test_file)
    Nokogiri::HTML(File.read @result_file).css('#content > hr').should have(0).items
  end

  # UpdateKeywordIndex no longer renames the index file.
  #
  # it 'should rename the file' do
  #   File.exists?(@test_file).should  be_true
  #   File.exists?(@result_file).should be_false
  #   
  #   @update_keyword.run @test_file
  #   
  #   File.exists?(@test_file).should be_false
  #   File.exists?(@result_file).should be_true
  # end
  
  after :each do
    FileUtils.rm @result_file if File.exists? @result_file
  end
  
  after :all do
    FileUtils.rm_rf spec_tmp_directory
  end
end