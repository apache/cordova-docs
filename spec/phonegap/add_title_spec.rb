$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'add_title'
require 'nokogiri'  # Nokogiri may not be the best way to test this suite. Any thoughts?

describe AddTitle do
  include SpecHelpers
  
  before :all do
    @original_file           = File.join(File.dirname(__FILE__), 'add_title_spec', 'example.html')
    @original_file_no_source = File.join(File.dirname(__FILE__), 'add_title_spec', 'example_no_source.html')
    @original_file_no_target = File.join(File.dirname(__FILE__), 'add_title_spec', 'example_no_target.html')
    
    @test_file           = File.join(spec_tmp_directory, 'example.html')
    @test_file_no_source = File.join(spec_tmp_directory, 'example_no_source.html')
    @test_file_no_target = File.join(spec_tmp_directory, 'example_no_target.html')
    
    FileUtils.mkdir_p spec_tmp_directory
  end
  
  # Create a fresh copy of the test file for each test run
  before :each do
    FileUtils.cp @original_file,           @test_file
    FileUtils.cp @original_file_no_source, @test_file_no_source
    FileUtils.cp @original_file_no_target, @test_file_no_target
  end

  it 'should not modify the original file' do
    modified_date = File.mtime @test_file
    AddTitle.new.run @test_file
    
    File.mtime(@test_file).should == modified_date
  end

  it 'should set the title' do
    # Test internal value
    AddTitle.new.run(@test_file).should == 'Accelerometer'
    
    # Test written value
    Nokogiri::HTML(File.read @test_file).css('#subheader > h1')[0].content.should == 'Accelerometer'
  end
  
  it 'should skip files with no source title' do
    AddTitle.new.run(@test_file_no_source).should be_nil
  end
  
  it 'should skip files with no target title' do
    AddTitle.new.run(@test_file_no_source).should be_nil
  end
  
  after :all do
    FileUtils.rm_rf spec_tmp_directory
  end
end