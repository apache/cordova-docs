$: << File.join(File.dirname(__FILE__), '..', '..', 'lib')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'table_of_contents'
require 'spec_helpers'

describe TableOfContents do
  include SpecHelpers
  
  before :all do
    @original_file           = File.join(File.dirname(__FILE__), 'table_of_contents_spec', 'example.html')
    @original_file_no_source = File.join(File.dirname(__FILE__), 'table_of_contents_spec', 'example_no_source.html')
    @original_file_no_target = File.join(File.dirname(__FILE__), 'table_of_contents_spec', 'example_no_target.html')
    
    @test_file           = File.join(spec_tmp_directory, 'example.html')
    @test_file_no_source = File.join(spec_tmp_directory, 'example_no_source.html')
    @test_file_no_target = File.join(spec_tmp_directory, 'example_no_target.html')
    
    FileUtils.mkdir_p spec_tmp_directory
    
    @toc = TableOfContents.new
  end
  
  # Create a fresh copy of the test file for each test run
  before :each do
    FileUtils.cp @original_file,           @test_file
    FileUtils.cp @original_file_no_source, @test_file_no_source
    FileUtils.cp @original_file_no_target, @test_file_no_target
  end

  it 'should not modify the original file' do
    modified_date = File.mtime @test_file
    TableOfContents.new.run @test_file
    
    File.mtime(@test_file).should == modified_date
  end

  it 'should find the table of content values' do
    contents = @toc.run(@test_file)
    contents.should have(8).items
  end
    
  it 'should create a HTML select element' do
    @toc.run @test_file
    
    doc = Nokogiri::HTML(File.read @test_file)
    doc.css('#subheader > small > select').should have(1).item
  end
  
  # No H1 / H2 elements available
  it 'should skip files with no source' do
    @toc.run(@test_file_no_source).should be_nil
  end
  
  # No <select> destination target
  it 'should skip files with no target' do
    @toc.run(@test_file_no_target).should be_nil
  end
  
  after :all do
    FileUtils.rm_rf spec_tmp_directory
  end
end