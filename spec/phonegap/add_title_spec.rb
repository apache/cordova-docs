$: << File.join(File.dirname(__FILE__), '..')
$: << File.join(File.dirname(__FILE__), '..', '..', 'lib', 'phonegap')
require 'spec_helpers'
require 'add_title'
require 'nokogiri'  # Nokogiri may not be the best way to test this suite. Any thoughts?

describe AddTitle do
  # Create a fresh copy of the test file for each test run
  before :all do
    tmp_directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :normal    => File.join(tmp_directory, 'example.html'),
      :no_source => File.join(tmp_directory, 'example_no_source.html'),
      :no_target => File.join(tmp_directory, 'example_no_target.html')
    }
    @add_title = AddTitle.new
  end

  it 'should set the title' do
    @add_title.run(@file[:normal]).should == 'Accelerometer'
    Nokogiri::HTML(File.read @file[:normal]).css('#subheader > h1')[0].content.should == 'Accelerometer'
  end
  
  it 'should skip files with no source title' do
    @add_title.run(@file[:no_source]).should be_nil
  end
  
  it 'should skip files with no target title' do
    @add_title.run(@file[:no_target]).should be_nil
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end