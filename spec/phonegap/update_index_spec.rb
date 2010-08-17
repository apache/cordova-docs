$:.unshift File.join(File.dirname(__FILE__), '..')
require 'spec_helpers'
require 'update_index'
require 'rubygems'
require 'nokogiri'

describe UpdateIndex do
  before :each do
    directory = Helper::create_tmp_directory_assets(__FILE__)
    @file = {
      :input    => File.join(directory, 'index.md.html'),
      :output   => File.join(directory, 'index.html')
    }
    @update_index = UpdateIndex.new
  end

  it 'should skip all files but index.md.html' do
    @update_index.run('index.md').should       be_false
    @update_index.run('index.html').should     be_false
    @update_index.run('_index.md.html').should be_false
  end
  
  it 'should rename the title' do
    Nokogiri::HTML( File.read @file[:input] ).css('#subheader > h1')[0].content.should_not == @update_index.header_title
    @update_index.run @file[:input]
    Nokogiri::HTML( File.read @file[:output] ).css('#subheader > h1')[0].content.should    == @update_index.header_title
  end

  it 'should rename the file' do
    File.exists?(@file[:input]).should  be_true
    File.exists?(@file[:output]).should be_false
    
    @update_index.run @file[:input]
    
    File.exists?(@file[:input]).should  be_false
    File.exists?(@file[:output]).should be_true
  end
  
  after :all do
    Helper::remove_tmp_directory
  end
end